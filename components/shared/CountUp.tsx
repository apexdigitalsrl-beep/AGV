"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type CountUpProps = {
  from?: number;
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
};

/**
 * Counts a number up when it scrolls into view, writing to the DOM node
 * directly (no per-frame React re-renders). Falls back to the final value
 * immediately for reduced-motion users — imperative `animate()` doesn't
 * read MotionConfig, so the media query is checked by hand.
 */
export function CountUp({
  from = 0,
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.4,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    const node = ref.current;
    if (!isInView || !node) return;

    const format = (value: number) => `${prefix}${value.toFixed(decimals)}${suffix}`;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.textContent = format(to);
      return;
    }

    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => {
        node.textContent = format(value);
      },
    });
    return () => controls.stop();
  }, [isInView, from, to, prefix, suffix, decimals, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {from.toFixed(decimals)}
      {suffix}
    </span>
  );
}

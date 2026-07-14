"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type BackgroundGateProps = {
  children: ReactNode;
  className?: string;
  /** How early before entering the viewport the canvas mounts. */
  rootMargin?: string;
};

/**
 * Gate for decorative WebGL/canvas backgrounds. A background must cost
 * nothing when it can't be seen, so children mount only while the section
 * is near the viewport and unmount again once it scrolls far away (the
 * generous rootMargin doubles as hysteresis so it never thrashes at the
 * edge). With several canvas sections on one page this keeps at most one
 * or two render loops alive at a time. Never renders for reduced-motion
 * users — they get the static gradient underneath instead.
 *
 * pointer-events stays disabled: cursor-reactive children listen on
 * `window`, so the page content above remains fully interactive.
 */
export function BackgroundGate({ children, className, rootMargin = "600px" }: BackgroundGateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsNearViewport(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {isNearViewport ? children : null}
    </div>
  );
}

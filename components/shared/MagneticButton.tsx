"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import type { MouseEvent, ReactNode } from "react";

import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  icon?: ReactNode;
};

const MAGNETIC_STRENGTH = 0.25;
const SPRING_CONFIG = { stiffness: 200, damping: 18, mass: 0.4 };

export function MagneticButton({
  children,
  href,
  variant = "primary",
  external = false,
  className,
  icon,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left - bounds.width / 2) * MAGNETIC_STRENGTH);
    y.set((event.clientY - bounds.top - bounds.height / 2) * MAGNETIC_STRENGTH);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const linkProps = external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};

  return (
    <motion.a
      href={href}
      {...linkProps}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "group/btn relative inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors duration-300",
        variant === "primary"
          ? "bg-brand-600 text-white shadow-glow hover:bg-brand-500"
          : "glass-surface text-foreground hover:border-brand-500/50",
        className
      )}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-300 ease-expressive group-hover/btn:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-expressive group-hover/btn:translate-y-0"
        >
          {children}
        </span>
      </span>
      {icon}
    </motion.a>
  );
}

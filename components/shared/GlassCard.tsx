"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
      className={cn(
        "glass-surface group relative rounded-2xl p-6 transition-shadow duration-300 hover:border-brand-500/40 hover:shadow-glow",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

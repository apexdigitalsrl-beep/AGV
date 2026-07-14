"use client";

import { motion } from "motion/react";
import { Fragment } from "react";

import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  /** "mount" animates immediately (hero); "scroll" waits until in view (section titles). */
  trigger?: "mount" | "scroll";
  /** How many trailing words get `highlightClassName` (e.g. gradient emphasis). */
  highlightLast?: number;
  highlightClassName?: string;
};

const container = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay },
  }),
};

const wordVariants = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/** Reveals text word-by-word with a soft blur-in stagger. Wrap in the heading tag from the caller. */
export function SplitText({
  text,
  className,
  delay = 0,
  trigger = "mount",
  highlightLast = 0,
  highlightClassName,
}: SplitTextProps) {
  const words = text.split(" ");
  const firstHighlightIndex = words.length - highlightLast;

  const viewProps =
    trigger === "scroll"
      ? { whileInView: "visible" as const, viewport: { once: true, margin: "-80px" } }
      : { animate: "visible" as const };

  return (
    <motion.span
      className="inline-block"
      variants={container}
      custom={delay}
      initial="hidden"
      {...viewProps}
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="inline-block overflow-hidden pb-1 align-bottom">
            <motion.span
              variants={wordVariants}
              className={cn("inline-block", className, index >= firstHighlightIndex && highlightClassName)}
            >
              {word}
            </motion.span>
          </span>
          {/* The separator lives OUTSIDE the inline-block wrapper: trailing
              whitespace inside an inline-block is trimmed by CSS, which was
              gluing every word together. */}
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </motion.span>
  );
}

import { cn } from "@/lib/utils";

type ShinyTextProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Periodic light sweep across text. Pure CSS (`.text-shine` in globals.css),
 * zero JS — safe to use in Server Components and silenced automatically by
 * the global prefers-reduced-motion rule.
 */
export function ShinyText({ children, className }: ShinyTextProps) {
  return <span className={cn("text-shine", className)}>{children}</span>;
}

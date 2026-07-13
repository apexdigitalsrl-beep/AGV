import { cn } from "@/lib/utils";

type AuroraBackgroundProps = {
  className?: string;
};

/**
 * Ambient gradient orbs behind hero-like sections. Pure CSS (no JS) so it
 * costs nothing on the main thread and still honors prefers-reduced-motion
 * via the global rule in globals.css.
 */
export function AuroraBackground({ className }: AuroraBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div
        className="animate-breathe absolute -left-32 top-[-10%] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(46,111,224,0.35), transparent 65%)" }}
      />
      <div
        className="animate-float absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.22), transparent 65%)", animationDelay: "1.5s" }}
      />
      <div
        className="animate-breathe absolute bottom-[-15%] left-1/3 h-[460px] w-[460px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(46,111,224,0.18), transparent 70%)", animationDelay: "2.5s" }}
      />
    </div>
  );
}

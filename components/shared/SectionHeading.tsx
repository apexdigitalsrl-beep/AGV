import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { ShinyText } from "@/components/shared/ShinyText";
import { SplitText } from "@/components/shared/SplitText";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <RevealOnScroll>
        <p className="text-sm font-semibold uppercase tracking-[0.2em]">
          <ShinyText>{eyebrow}</ShinyText>
        </p>
      </RevealOnScroll>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        <SplitText text={title} trigger="scroll" />
      </h2>
      {description ? (
        <RevealOnScroll delay={0.2}>
          <p className="mt-4 text-lg text-ink-300">{description}</p>
        </RevealOnScroll>
      ) : null}
    </div>
  );
}

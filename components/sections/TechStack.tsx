import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { techStack } from "@/lib/content";

export function TechStack() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tecnología"
          title="Herramientas modernas, elegidas por lo que resuelven"
          description="La tecnología no es el mensaje de venta — es la base que hace posible cumplir lo que prometemos."
          align="center"
          className="mx-auto"
        />

        <RevealOnScroll className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="glass-surface flex items-center gap-2 rounded-full px-4 py-2 text-sm text-ink-200"
            >
              <span className="font-medium text-white">{tech.name}</span>
              <span className="text-ink-500">·</span>
              <span className="text-ink-400">{tech.category}</span>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}

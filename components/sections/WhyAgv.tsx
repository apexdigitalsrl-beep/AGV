import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { whyReasons } from "@/lib/content";

export function WhyAgv() {
  return (
    <section className="bg-ink-900/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Por qué AGV Solutions"
          title="¿Por qué confiar en nosotros?"
          description="Somos un equipo chico, y eso es a propósito: significa que hablás siempre con quien construye tu proyecto."
        />

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyReasons.map((reason, index) => (
            <RevealOnScroll key={reason.title} delay={index * 0.05} className="flex gap-4">
              <reason.icon className="mt-1 size-6 shrink-0 text-brand-400" />
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{reason.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

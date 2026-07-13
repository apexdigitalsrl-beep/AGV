import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { processSteps } from "@/lib/content";

export function DevelopmentProcess() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso claro, de punta a punta"
          description="Sin sorpresas ni pasos ocultos: así se ve el camino desde la primera charla hasta el soporte continuo."
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-brand-500/50 via-white/10 to-transparent sm:left-1/2"
          />
          <ol className="space-y-10">
            {processSteps.map((item, index) => (
              <RevealOnScroll key={item.step} delay={index * 0.04}>
                <li className="relative grid gap-4 pl-16 sm:grid-cols-2 sm:gap-8 sm:pl-0">
                  <div
                    className={
                      index % 2 === 0
                        ? "sm:pr-12 sm:text-right"
                        : "sm:order-2 sm:pl-12"
                    }
                  >
                    <p className="font-display text-sm font-semibold text-brand-400">
                      Paso {item.step.toString().padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-ink-300">{item.description}</p>
                    <p className="mt-2 text-sm text-ink-500">{item.benefit}</p>
                  </div>
                  <div className={index % 2 === 0 ? "hidden sm:block" : "hidden sm:order-1 sm:block"} />

                  <div className="glass-surface absolute left-0 top-0 grid size-12 shrink-0 place-items-center rounded-full sm:left-1/2 sm:-translate-x-1/2">
                    <item.icon className="size-5 text-brand-400" />
                  </div>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

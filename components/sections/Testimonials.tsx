import { Quote } from "lucide-react";

import { HyperspeedBackdrop } from "@/components/backgrounds/SectionBackdrops";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { SectionHeading } from "@/components/shared/SectionHeading";

const placeholderRoles = ["Cliente de gastronomía", "Cliente del rubro automotor", "Próximo cliente"];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 opacity-40">
        <HyperspeedBackdrop />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonios"
          title="Todavía estamos construyendo esta sección"
          description="Preferimos no inventar citas. En cuanto nuestros clientes compartan su experiencia, la vas a ver acá, con nombre y apellido."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderRoles.map((role) => (
            <RevealOnScroll key={role}>
              <div className="glass-surface flex h-full flex-col items-center gap-4 rounded-2xl p-8 text-center opacity-70">
                <Quote className="size-8 text-ink-600" />
                <div className="h-3 w-3/4 rounded-full bg-white/10" />
                <div className="h-3 w-full rounded-full bg-white/10" />
                <div className="h-3 w-2/3 rounded-full bg-white/10" />
                <div className="mt-2 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-white/10" />
                  <p className="text-xs uppercase tracking-wide text-ink-500">{role}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

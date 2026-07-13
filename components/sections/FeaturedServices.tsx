import { Check } from "lucide-react";

import { GlassCard } from "@/components/shared/GlassCard";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FeaturedServices() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-ink-900/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Todo lo que necesitás para operar mejor, en un solo equipo"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <RevealOnScroll key={service.title} delay={index * 0.05} className={cn(index === 0 && "lg:col-span-2")}>
              <GlassCard className="h-full">
                <service.icon className="size-8 text-brand-400" />
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2.5 text-ink-300">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-ink-200">
                      <Check className="size-4 shrink-0 text-cyan-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

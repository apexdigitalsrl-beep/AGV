import { Check } from "lucide-react";

import { HyperspeedBackdrop } from "@/components/backgrounds/SectionBackdrops";
import { GlassCard } from "@/components/shared/GlassCard";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { plans } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Plans() {
  return (
    <section id="planes" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 opacity-40">
        <HyperspeedBackdrop />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Planes"
          title="Precios claros, sin sorpresas en el camino"
          description="Elegí el punto de partida que mejor se ajuste a tu negocio. Si no estás seguro, el diagnóstico gratuito te lo resuelve."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <RevealOnScroll key={plan.id} delay={index * 0.05}>
              <GlassCard
                className={cn("flex h-full flex-col", plan.highlighted && "border-brand-500/60 shadow-glow")}
              >
                {plan.highlighted ? (
                  <span className="w-fit rounded-full bg-brand-600/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-400">
                    Más elegido
                  </span>
                ) : null}
                <h3 className={cn("font-display text-xl font-semibold text-white", plan.highlighted ? "mt-4" : "mt-1")}>
                  {plan.name}
                </h3>
                <p className="mt-3 font-display text-3xl font-semibold text-white">
                  {plan.price}
                  <span className="ml-1 text-sm font-normal text-ink-500">+ IVA</span>
                </p>
                <p className="mt-3 text-ink-300">{plan.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-ink-200">
                      <Check className="mt-0.5 size-4 shrink-0 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <MagneticButton
                    href="#diagnostico"
                    variant={plan.highlighted ? "primary" : "secondary"}
                    className="w-full"
                  >
                    Empezar con este plan
                  </MagneticButton>
                </div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

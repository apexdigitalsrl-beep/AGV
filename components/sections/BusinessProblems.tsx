import { ArrowRight } from "lucide-react";

import { GlassCard } from "@/components/shared/GlassCard";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { businessProblems } from "@/lib/content";

export function BusinessProblems() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Lo que ya sabés"
          title="Estos problemas te están costando ventas todos los días"
          description="Antes de hablar de soluciones, queremos mostrarte que entendemos exactamente dónde se pierde el tiempo y el dinero en tu operación."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessProblems.map((problem, index) => (
            <RevealOnScroll key={problem.title} delay={index * 0.06}>
              <GlassCard className="h-full">
                <problem.icon className="size-8 text-brand-400" />
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{problem.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-300">{problem.description}</p>
                <p className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-brand-400">
                  {problem.solutionLabel}
                  <ArrowRight className="size-3.5" />
                </p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

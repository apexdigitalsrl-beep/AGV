"use client";

import { TrendingUp } from "lucide-react";
import { motion } from "motion/react";

import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { solutions } from "@/lib/content";

export function OurSolutions() {
  return (
    <section id="soluciones" className="scroll-mt-24 relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nuestras soluciones"
          title="No vendemos features. Resolvemos lo que te frena"
          description="Cada solución nace de un problema concreto y termina en un resultado de negocio medible."
        />

        <div className="mt-16 divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {solutions.map((solution, index) => (
            <RevealOnScroll key={solution.title} delay={index * 0.05}>
              <motion.div
                className="grid gap-6 py-10 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-12"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                suppressHydrationWarning
              >
                <div className="flex items-center gap-4">
                  <div className="glass-surface grid size-14 shrink-0 place-items-center rounded-2xl">
                    <solution.icon className="size-6 text-brand-400" />
                  </div>
                  <p className="text-xs uppercase tracking-wide text-ink-500 lg:hidden">{solution.problem}</p>
                </div>

                <div>
                  <p className="hidden text-xs uppercase tracking-wide text-ink-500 lg:block">
                    {solution.problem}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-white sm:text-2xl">
                    {solution.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-ink-300">{solution.description}</p>
                </div>

                <div className="flex items-start gap-2 lg:max-w-[220px]">
                  <TrendingUp className="mt-0.5 size-4 shrink-0 text-cyan-400" />
                  <p className="text-sm font-medium text-ink-200">{solution.impact}</p>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

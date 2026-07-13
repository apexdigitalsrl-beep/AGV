import { GlassCard } from "@/components/shared/GlassCard";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industrias"
          title="Conocemos tu rubro antes de escribir la primera línea de código"
          description="Cada industria tiene sus propios cuellos de botella. Estos son los que más vemos, con proyectos reales en dos de ellos."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <RevealOnScroll key={industry.name} delay={index * 0.05}>
              <GlassCard className="h-full">
                <div className="flex items-start justify-between">
                  <industry.icon className="size-8 text-brand-400" />
                  {industry.proven ? (
                    <span className="rounded-full bg-brand-600/15 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-brand-400">
                      Caso real
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{industry.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-300">{industry.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {industry.problems.map((problem) => (
                    <li key={problem} className="text-xs text-ink-400">
                      · {problem}
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

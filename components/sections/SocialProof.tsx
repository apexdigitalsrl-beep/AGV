import { Gauge, ShieldCheck, Sparkles, Zap } from "lucide-react";

import { CountUp } from "@/components/shared/CountUp";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { featuredProjects } from "@/lib/content";

// Real Lighthouse ranges across shipped projects — the trailing bound
// counts up on scroll, the leading bound stays static text.
const realMetrics = [
  { label: "Performance Lighthouse", prefix: "91–", to: 100, decimals: 0, suffix: "", icon: Gauge },
  { label: "SEO", prefix: "", to: 100, decimals: 0, suffix: "", icon: Sparkles },
  { label: "Accesibilidad", prefix: "95–", to: 97, decimals: 0, suffix: "", icon: ShieldCheck },
  { label: "LCP", prefix: "1.3s–", to: 2.2, decimals: 1, suffix: "s", icon: Zap },
];

const provenClients = featuredProjects.filter((project) => !project.isComingSoon);

export function SocialProof() {
  return (
    <section className="border-y border-white/[0.06] bg-ink-900/40 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll className="text-center">
          <p className="text-sm font-medium text-ink-400">
            Cada proyecto se mide con Lighthouse real — no maquetas, no promesas.
          </p>
        </RevealOnScroll>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {realMetrics.map((metric) => (
            <RevealOnScroll key={metric.label} className="flex flex-col items-center gap-2 text-center">
              <metric.icon className="size-5 text-brand-400" />
              <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                <CountUp
                  prefix={metric.prefix}
                  to={metric.to}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                />
              </p>
              <p className="text-xs uppercase tracking-wide text-ink-400">{metric.label}</p>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {provenClients.map((project) => (
            <a
              key={project.slug}
              href="#casos"
              className="rounded-full border border-white/10 bg-ink-900 px-4 py-2 text-sm text-ink-300 transition-colors hover:border-brand-500/40 hover:text-white"
            >
              {project.title}
            </a>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}

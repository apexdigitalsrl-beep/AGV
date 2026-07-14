import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { RibbonsBackdrop } from "@/components/backgrounds/SectionBackdrops";
import { GlassCard } from "@/components/shared/GlassCard";
import { GridDistortion } from "@/components/shared/GridDistortion";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { featuredProjects } from "@/lib/content";

const INTERACTIVE_DISTORTION_SLUG = "barreras-neumaticos";

export function FeaturedProjects() {
  return (
    <section id="casos" className="relative scroll-mt-24 overflow-hidden bg-ink-900/30 py-24 sm:py-32">
      <RibbonsBackdrop />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Casos reales"
          title="Nada de maquetas: proyectos que están en producción"
          description="Cada caso incluye su medición de Lighthouse real y el link al sitio en vivo. Lo que ves, lo podés verificar."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <RevealOnScroll key={project.slug} delay={index * 0.06}>
              <GlassCard className="flex h-full flex-col overflow-hidden !p-0">
                <div className="relative aspect-[16/10] w-full">
                  {project.slug === INTERACTIVE_DISTORTION_SLUG ? (
                    <>
                      <GridDistortion imageSrc={project.image} grid={20} mouse={0.15} strength={0.1} relaxation={0.92} />
                      <span className="sr-only">{project.imageAlt}</span>
                    </>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className={
                        project.isComingSoon
                          ? "object-cover object-top opacity-30 blur-[2px] grayscale"
                          : "object-cover object-top"
                      }
                    />
                  )}
                  {project.isComingSoon ? (
                    <div className="absolute inset-0 grid place-items-center bg-ink-950/50">
                      <span className="rounded-full border border-white/15 bg-ink-950/80 px-4 py-1.5 text-sm font-medium text-white">
                        Próximamente
                      </span>
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-ink-400">{project.industry}</p>

                  <div className="mt-4 space-y-2.5 text-sm">
                    <p>
                      <span className="font-medium text-brand-400">El desafío: </span>
                      <span className="text-ink-300">{project.challenge}</span>
                    </p>
                    <p>
                      <span className="font-medium text-brand-400">Lo que hicimos: </span>
                      <span className="text-ink-300">{project.solution}</span>
                    </p>
                  </div>

                  {project.metrics.length > 0 ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric.label}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900 px-3 py-1 text-xs text-ink-300"
                        >
                          <metric.icon className="size-3.5 text-brand-400" />
                          {metric.label} <span className="font-medium text-white">{metric.value}</span>
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 transition-colors hover:text-brand-300"
                    >
                      Ver sitio en vivo
                      <ArrowUpRight className="size-4" />
                    </a>
                  ) : null}
                </div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

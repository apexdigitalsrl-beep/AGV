import { ArrowRight, MessageCircle } from "lucide-react";

import { AuroraBackground } from "@/components/shared/AuroraBackground";
import { DashboardMockup } from "@/components/shared/DashboardMockup";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Spotlight } from "@/components/shared/Spotlight";
import { SplitText } from "@/components/shared/SplitText";
import { buildWhatsAppUrl } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink-950 bg-grain pt-40 pb-24 sm:pt-48">
      <div aria-hidden="true" className="bg-blueprint absolute inset-0" />
      <AuroraBackground />
      <Spotlight className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <RevealOnScroll delay={0}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
                Software a medida · Santa Fe, Argentina
              </p>
            </RevealOnScroll>

            <h1 className="mt-5 font-display text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-white">
              <SplitText text="Construimos el software que tu negocio necesita para vender más." delay={0.15} />
            </h1>

            <RevealOnScroll delay={0.4}>
              <p className="mt-6 max-w-xl text-lg text-ink-300">
                Sitios de alta conversión, sistemas de pedidos propios, paneles de administración y
                automatización con WhatsApp — diseñados alrededor de tu operación real, no de una demo.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.55} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <MagneticButton href={buildWhatsAppUrl()} external variant="primary" icon={<MessageCircle className="size-4" />}>
                Solicitar diagnóstico gratis
              </MagneticButton>
              <MagneticButton href="#casos" variant="secondary" icon={<ArrowRight className="size-4" />}>
                Ver casos reales
              </MagneticButton>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.3}>
            <DashboardMockup />
          </RevealOnScroll>
        </div>
      </Spotlight>
    </section>
  );
}

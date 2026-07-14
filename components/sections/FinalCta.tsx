import { MessageCircle } from "lucide-react";

import { LightPillarBackdrop } from "@/components/backgrounds/SectionBackdrops";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { TextPressure } from "@/components/shared/TextPressure";
import { buildWhatsAppUrl } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink-900/40 py-24 sm:py-32">
      <LightPillarBackdrop />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto h-20 max-w-xs sm:h-24 sm:max-w-sm">
            <TextPressure
              text="¿Hablamos?"
              tag="h2"
              textColor="#ffffff"
              minFontSize={32}
              italic={false}
              alpha={false}
              stroke={false}
            />
          </div>
          <p className="mt-6 text-lg text-ink-300 sm:text-xl">De tu próximo proyecto de software.</p>
          <p className="mt-4 text-lg text-ink-300">
            Agendá un diagnóstico gratuito por WhatsApp. Sin compromiso, sin vueltas.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton
              href={buildWhatsAppUrl()}
              external
              variant="primary"
              icon={<MessageCircle className="size-4" />}
            >
              Solicitar diagnóstico gratis
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

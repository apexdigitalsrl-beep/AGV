import { MessageCircle } from "lucide-react";

import { AuroraBackground } from "@/components/shared/AuroraBackground";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { buildWhatsAppUrl } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink-900/40 py-24 sm:py-32">
      <AuroraBackground />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <RevealOnScroll>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ¿Hablamos de tu próximo proyecto?
          </h2>
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

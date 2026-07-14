import { Clock3, Mail, MapPin, MessageCircle } from "lucide-react";

import { LiquidEtherBackdrop } from "@/components/backgrounds/SectionBackdrops";
import { ContactForm } from "@/components/forms/ContactForm";
import { GlassCard } from "@/components/shared/GlassCard";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { buildWhatsAppUrl, contactInfo, siteConfig } from "@/lib/site-config";

const contactDetails = [
  { icon: MessageCircle, label: "WhatsApp", value: contactInfo.whatsappDisplay, href: buildWhatsAppUrl() },
  { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Clock3, label: "Horario de atención", value: contactInfo.businessHours },
  {
    icon: MapPin,
    label: "Ubicación",
    value: `${siteConfig.location.city}, ${siteConfig.location.country}`,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <LiquidEtherBackdrop />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contacto"
          title="Contanos sobre tu negocio y empecemos"
          description="Respondemos directo, sin pasar por un call center. Elegí el canal que prefieras."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll className="space-y-6">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4">
                <div className="glass-surface grid size-11 shrink-0 place-items-center rounded-xl">
                  <detail.icon className="size-5 text-brand-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink-500">{detail.label}</p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.href.startsWith("http") ? "_blank" : undefined}
                      rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-lg font-medium text-white transition-colors hover:text-brand-400"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-lg font-medium text-white">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-2">
              <MagneticButton
                href={buildWhatsAppUrl()}
                external
                variant="secondary"
                icon={<MessageCircle className="size-4" />}
              >
                Escribinos por WhatsApp
              </MagneticButton>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <GlassCard>
              <ContactForm />
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

import { Mail, MapPin, MessageCircle } from "lucide-react";

import { Logo } from "@/components/layout/Logo";
import { InstagramIcon, LinkedinIcon } from "@/components/shared/BrandIcons";
import { buildWhatsAppUrl, contactInfo, navLinks, siteConfig } from "@/lib/site-config";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-300">{siteConfig.tagline}</p>
            <p className="mt-2 max-w-xs text-sm text-ink-400">
              Software a medida desde {siteConfig.location.city}, {siteConfig.location.country}. Para el
              mundo.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.08em] text-ink-400">Navegación</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-300 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.08em] text-ink-400">Servicios</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#servicios" className="text-sm text-ink-300 transition-colors hover:text-white">
                  Sitios de alta conversión
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-sm text-ink-300 transition-colors hover:text-white">
                  Pedidos y automatización
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.08em] text-ink-400">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MessageCircle className="size-4.5 shrink-0 text-brand-400" />
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-300 transition-colors hover:text-white"
                >
                  {contactInfo.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4.5 shrink-0 text-brand-400" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-ink-300 transition-colors hover:text-white"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon className="size-4.5 shrink-0 text-brand-400" />
                <a
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-300 transition-colors hover:text-white"
                >
                  {contactInfo.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <LinkedinIcon className="size-4.5 shrink-0 text-brand-400" />
                <a
                  href={contactInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-300 transition-colors hover:text-white"
                >
                  /in/AGVSolutions
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4.5 shrink-0 text-brand-400" />
                <span className="text-sm text-ink-300">
                  {siteConfig.location.city}, {siteConfig.location.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.06] pt-6 text-sm text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.legalName} · {siteConfig.location.city}, {siteConfig.location.country}
          </p>
        </div>
      </div>
    </footer>
  );
}

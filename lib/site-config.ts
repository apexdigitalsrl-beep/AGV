import type { NavLink } from "@/types";

export const siteConfig = {
  name: "AGV Solutions",
  legalName: "AGV Solutions",
  tagline: "Tu web, tu mejor vendedor.",
  description:
    "Diseñamos y desarrollamos software a medida —sitios de alta conversión, sistemas de pedidos, paneles de administración y automatización— para negocios que quieren dejar de perder tiempo y ventas por procesos manuales.",
  url: "https://agvsolutions.online",
  locale: "es_AR",
  location: {
    city: "Santa Fe",
    country: "Argentina",
    countryCode: "AR",
  },
} as const;

export const contactInfo = {
  whatsappNumber: "5493462590192",
  whatsappDisplay: "+54 9 3462 590192",
  whatsappDefaultMessage: "Hola AGV, quiero consultar sobre un proyecto.",
  email: "Labs@agvsolutions.online",
  instagramHandle: "@agv.solutions",
  instagramUrl: "https://instagram.com/agv.solutions",
  linkedinUrl: "https://www.linkedin.com/in/AGVSolutions",
  businessHours: "Lunes a viernes, 9 a 18 hs",
} as const;

export function buildWhatsAppUrl(message: string = contactInfo.whatsappDefaultMessage): string {
  return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl({ subject, body }: { subject: string; body: string }): string {
  return `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Servicios", href: "#servicios" },
  { label: "Casos", href: "#casos" },
  { label: "Contacto", href: "#contacto" },
];


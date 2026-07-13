import type { Metadata, Viewport } from "next";
import { MotionConfig } from "motion/react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { headers } from "next/headers";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";
import { ORGANIZATION_JSON_LD_STRING } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Software a medida para hacer crecer tu negocio`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "software a medida",
    "desarrollo web Santa Fe",
    "sistemas de pedidos online",
    "automatización WhatsApp",
    "paneles de administración",
    "AGV Solutions",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  alternates: { canonical: "/" },
  // og:image / twitter:image come from the app/opengraph-image.png file
  // convention (Next infers dimensions and emits the tags automatically) —
  // listing them here too would duplicate the meta tags.
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e14",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="es" className={`${bricolageGrotesque.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-background font-body text-foreground antialiased">
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: ORGANIZATION_JSON_LD_STRING }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        <MotionConfig reducedMotion="user">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
        </MotionConfig>
        <Toaster theme="dark" position="bottom-center" />
      </body>
    </html>
  );
}

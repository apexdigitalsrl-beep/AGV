import { contactInfo, siteConfig } from "./site-config";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo-mark.png`,
  description: siteConfig.description,
  slogan: siteConfig.tagline,
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressCountry: siteConfig.location.countryCode,
  },
  email: contactInfo.email,
  sameAs: [contactInfo.instagramUrl, contactInfo.linkedinUrl],
};

/**
 * Serialized once so the exact same bytes can be hashed for the CSP
 * script-src allow-list in next.config.ts (hash-based CSP, no nonce,
 * keeps the page fully statically rendered).
 */
export const ORGANIZATION_JSON_LD_STRING = JSON.stringify(organizationJsonLd);

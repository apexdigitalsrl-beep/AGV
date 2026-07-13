import type { NextConfig } from "next";

// Content-Security-Policy is set per-request in proxy.ts (it needs a fresh
// nonce every time). Everything else here is static and applies to every
// response, including static assets.
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // Standalone output bundles a minimal server + only the node_modules
  // actually needed at runtime — required for Hostinger's Passenger-based
  // Node.js App hosting instead of Vercel's serverless build.
  output: "standalone",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

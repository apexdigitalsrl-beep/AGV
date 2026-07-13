/**
 * Nonce-based CSP for script-src (Next.js's own recommended pattern via
 * Proxy — see `proxy.ts`). A hash-only CSP looked appealing to keep the page
 * fully static, but production HTML actually ships ~50 inline
 * `self.__next_f.push(...)` RSC hydration scripts with content that changes
 * every build — a fixed hash allow-list can't cover them, so that approach
 * silently broke hydration in production. A nonce does, at the cost of
 * forcing this route to render dynamically (accepted trade-off, matches
 * Next's own strict-CSP guidance).
 *
 * style-src cannot use the nonce: `motion` sets many inline `style="..."`
 * attributes (transforms/opacity/filter for animation), and CSP nonces only
 * cover `<style>` elements and `<script>` elements, never the `style`
 * attribute itself. `'unsafe-inline'` for style-src is the accepted,
 * documented trade-off here (see rules/ecc/react/security.md).
 */
export function buildContentSecurityPolicy(nonce: string, isDev: boolean): string {
  const directives = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""}`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: blob:`,
    `font-src 'self'`,
    `connect-src 'self'${isDev ? " ws:" : ""}`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `upgrade-insecure-requests`,
  ];

  return directives.join("; ");
}

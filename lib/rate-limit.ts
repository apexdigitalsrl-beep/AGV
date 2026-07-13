import "server-only";

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

/**
 * In-memory sliding-window limiter, per server instance. This resets on
 * cold start / redeploy and doesn't share state across serverless
 * instances — a real limitation, but a proportionate one for a small
 * business landing page with a single low-volume contact form and no
 * paid rate-limiting infra (Upstash, etc.) set up yet. It still meaningfully
 * throttles a scripted flood within a warm instance. Upgrade to a durable
 * store (Upstash Redis) if traffic or abuse patterns ever justify it.
 */
const requestLog = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    requestLog.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(key, timestamps);
  return false;
}

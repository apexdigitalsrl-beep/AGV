import "server-only";

import { createClient } from "@supabase/supabase-js";

/**
 * Service-role Supabase client for trusted server code only (Server Actions,
 * route handlers). Never import this from a Client Component — the
 * `server-only` guard makes that a build error instead of a leaked secret.
 */
export function getSupabaseServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase no está configurado todavía: faltan variables de entorno.");
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}

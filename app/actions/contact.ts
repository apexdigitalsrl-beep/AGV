"use server";

import { headers } from "next/headers";
import { z } from "zod";

import { isRateLimited } from "@/lib/rate-limit";
import { getSupabaseServiceClient } from "@/lib/supabase/server";
import type { ContactFormState } from "@/types";

const MIN_FILL_TIME_MS = 1500;
const RATE_LIMIT_MESSAGE = "Recibimos muchos mensajes tuyos en poco tiempo. Probá de nuevo en un minuto.";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre completo.").max(120),
  email: z.string().trim().email("Ingresá un email válido."),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Contanos un poco más sobre tu proyecto.").max(2000),
});

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const requestHeaders = await headers();
  const clientIp =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(clientIp)) {
    return { status: "error", message: RATE_LIMIT_MESSAGE };
  }

  // Honeypot — real visitors never fill a hidden field. Pretend success so
  // bots don't learn they were caught.
  if (String(formData.get("website") ?? "").length > 0) {
    return { status: "success" };
  }

  const renderedAt = Number(formData.get("renderedAt") ?? 0);
  if (renderedAt && Date.now() - renderedAt < MIN_FILL_TIME_MS) {
    return { status: "success" };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisá los campos marcados.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const supabase = getSupabaseServiceClient();
    const { error } = await supabase.from("contact_submissions").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company || null,
      message: parsed.data.message,
    });

    if (error) throw error;

    return { status: "success" };
  } catch (error: unknown) {
    console.error("[contact-form] submission failed:", error);
    return {
      status: "error",
      message:
        "No pudimos enviar tu mensaje en este momento. Mientras lo resolvemos, escribinos directamente por WhatsApp.",
    };
  }
}

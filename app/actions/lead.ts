"use server";

import { headers } from "next/headers";
import { z } from "zod";

import { isRateLimited } from "@/lib/rate-limit";
import { getSupabaseServiceClient } from "@/lib/supabase/server";
import type { LeadFormState } from "@/types";

const MIN_FILL_TIME_MS = 1500;
const RATE_LIMIT_MESSAGE = "Recibimos muchas solicitudes tuyas en poco tiempo. Probá de nuevo en un minuto.";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre completo.").max(120),
  company: z.string().trim().min(2, "Contanos el nombre de tu negocio.").max(120),
  email: z.string().trim().email("Ingresá un email válido."),
  phone: z.string().trim().min(6, "Ingresá un teléfono o WhatsApp válido.").max(30),
  industry: z.string().trim().min(2, "Contanos a qué se dedica tu negocio.").max(160),
  businessService: z.string().trim().min(2, "Contanos qué producto o servicio ofrecen.").max(200),
  leadPackage: z.enum(["web-500", "audit-web-700", "system-1500", "not-sure"], {
    error: "Elegí una opción.",
  }),
  taskAutomationValue: z.coerce.number().int().min(1).max(5),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

export async function submitLeadForm(_prevState: LeadFormState, formData: FormData): Promise<LeadFormState> {
  const requestHeaders = await headers();
  const clientIp =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(`lead:${clientIp}`)) {
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

  const parsed = leadSchema.safeParse({
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    industry: formData.get("industry"),
    businessService: formData.get("businessService"),
    leadPackage: formData.get("leadPackage"),
    taskAutomationValue: formData.get("taskAutomationValue"),
    notes: formData.get("notes"),
  });

  if (!parsed.success) {
    const flattened = parsed.error.flatten().fieldErrors;
    return {
      status: "error",
      message: "Revisá los campos marcados.",
      fieldErrors: {
        name: flattened.name,
        company: flattened.company,
        email: flattened.email,
        phone: flattened.phone,
        industry: flattened.industry,
        businessService: flattened.businessService,
        leadPackage: flattened.leadPackage,
        taskAutomationValue: flattened.taskAutomationValue,
      },
    };
  }

  try {
    const supabase = getSupabaseServiceClient();
    const { error } = await supabase.from("lead_qualifications").insert({
      name: parsed.data.name,
      company: parsed.data.company,
      email: parsed.data.email,
      phone: parsed.data.phone,
      industry: parsed.data.industry,
      business_service: parsed.data.businessService,
      lead_package: parsed.data.leadPackage,
      task_automation_value: parsed.data.taskAutomationValue,
      notes: parsed.data.notes || null,
    });

    if (error) throw error;

    return { status: "success" };
  } catch (error: unknown) {
    console.error("[lead-form] submission failed:", error);
    return {
      status: "error",
      message:
        "No pudimos guardar tu solicitud en este momento. Mientras lo resolvemos, escribinos directamente por WhatsApp.",
    };
  }
}

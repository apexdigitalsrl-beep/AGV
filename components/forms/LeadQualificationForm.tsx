"use client";

import { Check, Loader2, Mail, MessageCircle, Send } from "lucide-react";
import { useActionState, useEffect, useRef, useState } from "react";

import { submitLeadForm } from "@/app/actions/lead";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { plans } from "@/lib/content";
import { cn } from "@/lib/utils";
import { buildMailtoUrl, buildWhatsAppUrl, contactInfo } from "@/lib/site-config";
import type { LeadFormState, LeadPackage } from "@/types";

const initialState: LeadFormState = { status: "idle" };

const packageOptions: { value: LeadPackage; label: string; price: string; description: string }[] = [
  ...plans.map((plan) => ({
    value: plan.id,
    label: plan.name,
    price: plan.price,
    description: plan.description,
  })),
  {
    value: "not-sure",
    label: "Todavía no lo sé",
    price: "A definir",
    description: "Prefiero que me asesoren antes de decidir.",
  },
];

const taskValueOptions = [
  { value: "1", label: "Nada importante" },
  { value: "2", label: "Poco importante" },
  { value: "3", label: "Importante" },
  { value: "4", label: "Muy importante" },
  { value: "5", label: "Es mi prioridad" },
];

type LeadSummary = {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  businessService: string;
  leadPackage: string;
  taskAutomationValue: string;
  notes: string;
};

function buildSummaryLines(summary: LeadSummary): string[] {
  const packageLabel = packageOptions.find((option) => option.value === summary.leadPackage)?.label ?? summary.leadPackage;

  return [
    "Hola AGV! Completé el formulario de diagnóstico en la web.",
    "",
    `Empresa: ${summary.company}`,
    `Rubro: ${summary.industry}`,
    `Qué ofrecemos: ${summary.businessService}`,
    `Interés: ${packageLabel}`,
    `Importancia de optimizar tareas: ${summary.taskAutomationValue}/5`,
    `Contacto: ${summary.name} — ${summary.phone} — ${summary.email}`,
    ...(summary.notes ? [`Notas: ${summary.notes}`] : []),
  ];
}

export function LeadQualificationForm() {
  const [state, formAction, isPending] = useActionState(submitLeadForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const renderedAtInputRef = useRef<HTMLInputElement>(null);
  const [summary, setSummary] = useState<LeadSummary | null>(null);

  useEffect(() => {
    if (renderedAtInputRef.current) {
      renderedAtInputRef.current.value = String(Date.now());
    }
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const data = new FormData(event.currentTarget);
    setSummary({
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      industry: String(data.get("industry") ?? ""),
      businessService: String(data.get("businessService") ?? ""),
      leadPackage: String(data.get("leadPackage") ?? ""),
      taskAutomationValue: String(data.get("taskAutomationValue") ?? ""),
      notes: String(data.get("notes") ?? ""),
    });
  }

  if (state.status === "success" && summary) {
    const lines = buildSummaryLines(summary);
    const whatsappUrl = buildWhatsAppUrl(lines.join("\n"));
    const mailtoUrl = buildMailtoUrl({
      subject: `Diagnóstico web — ${summary.company}`,
      body: lines.join("\n"),
    });

    return (
      <div className="flex flex-col items-center gap-6 py-6 text-center">
        <div className="glass-surface grid size-14 place-items-center rounded-full">
          <Check className="size-6 text-brand-400" />
        </div>
        <div>
          <p className="font-display text-xl font-semibold text-white">¡Recibimos tu información!</p>
          <p className="mt-2 max-w-sm text-ink-300">
            Guardamos tu diagnóstico. Para coordinar la llamada, mandanos el resumen por WhatsApp o email — ya lo dejamos redactado.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-brand-500"
          >
            <MessageCircle className="size-4" />
            Enviar por WhatsApp
          </a>
          <a
            href={mailtoUrl}
            className="glass-surface inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition-colors hover:border-brand-500/50"
          >
            <Mail className="size-4" />
            Enviar por email
          </a>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="lead-website">Sitio web</Label>
        <Input id="lead-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={renderedAtInputRef} type="hidden" name="renderedAt" defaultValue={0} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="lead-name">Nombre completo</Label>
          <Input id="lead-name" name="name" required autoComplete="name" className="mt-1.5 h-11" />
          {state.fieldErrors?.name ? <p className="mt-1.5 text-sm text-destructive">{state.fieldErrors.name[0]}</p> : null}
        </div>
        <div>
          <Label htmlFor="lead-company">Empresa / negocio</Label>
          <Input id="lead-company" name="company" required autoComplete="organization" className="mt-1.5 h-11" />
          {state.fieldErrors?.company ? (
            <p className="mt-1.5 text-sm text-destructive">{state.fieldErrors.company[0]}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="lead-email">Email</Label>
          <Input id="lead-email" name="email" type="email" required autoComplete="email" className="mt-1.5 h-11" />
          {state.fieldErrors?.email ? <p className="mt-1.5 text-sm text-destructive">{state.fieldErrors.email[0]}</p> : null}
        </div>
        <div>
          <Label htmlFor="lead-phone">WhatsApp / teléfono</Label>
          <Input id="lead-phone" name="phone" type="tel" required autoComplete="tel" className="mt-1.5 h-11" />
          {state.fieldErrors?.phone ? <p className="mt-1.5 text-sm text-destructive">{state.fieldErrors.phone[0]}</p> : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="lead-industry">¿A qué se dedica tu negocio?</Label>
          <Input
            id="lead-industry"
            name="industry"
            required
            placeholder="Ej: restaurante, estudio contable, distribuidora..."
            className="mt-1.5 h-11"
          />
          {state.fieldErrors?.industry ? (
            <p className="mt-1.5 text-sm text-destructive">{state.fieldErrors.industry[0]}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="lead-business-service">¿Qué producto o servicio ofrecen?</Label>
          <Input
            id="lead-business-service"
            name="businessService"
            required
            placeholder="Ej: comida rápida, asesoría contable..."
            className="mt-1.5 h-11"
          />
          {state.fieldErrors?.businessService ? (
            <p className="mt-1.5 text-sm text-destructive">{state.fieldErrors.businessService[0]}</p>
          ) : null}
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-foreground">¿Qué estás buscando y con qué presupuesto?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {packageOptions.map((option) => (
            <label
              key={option.value}
              className="glass-surface has-checked:border-brand-500 has-checked:shadow-glow relative flex cursor-pointer flex-col gap-1 rounded-xl p-4 transition-colors hover:border-brand-500/40"
            >
              <input
                type="radio"
                name="leadPackage"
                value={option.value}
                required
                defaultChecked={option.value === "web-500"}
                className="sr-only"
              />
              <span className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-white">{option.label}</span>
                <span className="text-xs font-semibold text-brand-400">{option.price}</span>
              </span>
              <span className="text-xs text-ink-400">{option.description}</span>
            </label>
          ))}
        </div>
        {state.fieldErrors?.leadPackage ? (
          <p className="mt-1.5 text-sm text-destructive">{state.fieldErrors.leadPackage[0]}</p>
        ) : null}
      </fieldset>

      <fieldset>
        <legend className="text-sm font-medium text-foreground">
          ¿Qué tan importante es optimizar tareas manuales de tu operación?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {taskValueOptions.map((option) => (
            <label
              key={option.value}
              className="glass-surface has-checked:border-brand-500 has-checked:text-white relative cursor-pointer rounded-full px-4 py-2 text-xs font-medium text-ink-300 transition-colors hover:border-brand-500/40"
            >
              <input
                type="radio"
                name="taskAutomationValue"
                value={option.value}
                required
                defaultChecked={option.value === "3"}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
        {state.fieldErrors?.taskAutomationValue ? (
          <p className="mt-1.5 text-sm text-destructive">{state.fieldErrors.taskAutomationValue[0]}</p>
        ) : null}
      </fieldset>

      <div>
        <Label htmlFor="lead-notes">Contanos algo más (opcional)</Label>
        <Textarea id="lead-notes" name="notes" rows={3} className="mt-1.5" />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className={cn(
          "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-brand-500 disabled:opacity-60"
        )}
      >
        {isPending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        {isPending ? "Enviando..." : "Quiero mi diagnóstico"}
      </button>

      {state.status === "error" && state.message ? (
        <p role="alert" className="text-sm font-medium text-destructive">
          {state.message}{" "}
          <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="underline">
            Escribinos a {contactInfo.whatsappDisplay}
          </a>
        </p>
      ) : null}
    </form>
  );
}

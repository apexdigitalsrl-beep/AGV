"use client";

import { Loader2, Send } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";

import { submitContactForm } from "@/app/actions/contact";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContactFormState } from "@/types";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  // Written imperatively to the DOM after mount instead of via useState —
  // Date.now() would differ between the server render and hydration and
  // trigger a hydration mismatch if it drove the input's React value.
  const renderedAtInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (renderedAtInputRef.current) {
      renderedAtInputRef.current.value = String(Date.now());
    }
  }, []);

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">Sitio web</Label>
        <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={renderedAtInputRef} type="hidden" name="renderedAt" defaultValue={0} />

      <div>
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" name="name" required autoComplete="name" className="mt-1.5 h-11" />
        {state.fieldErrors?.name ? (
          <p className="mt-1.5 text-sm text-destructive">{state.fieldErrors.name[0]}</p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required autoComplete="email" className="mt-1.5 h-11" />
        {state.fieldErrors?.email ? (
          <p className="mt-1.5 text-sm text-destructive">{state.fieldErrors.email[0]}</p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="company">Empresa (opcional)</Label>
        <Input id="company" name="company" autoComplete="organization" className="mt-1.5 h-11" />
      </div>

      <div>
        <Label htmlFor="message">Contanos sobre tu proyecto</Label>
        <Textarea id="message" name="message" required rows={5} className="mt-1.5" />
        {state.fieldErrors?.message ? (
          <p className="mt-1.5 text-sm text-destructive">{state.fieldErrors.message[0]}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-brand-500 disabled:opacity-60"
      >
        {isPending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        {isPending ? "Enviando..." : "Enviar mensaje"}
      </button>

      {state.status === "success" ? (
        <p role="status" className="text-sm font-medium text-cyan-400">
          ¡Gracias! Te vamos a responder a la brevedad.
        </p>
      ) : null}
      {state.status === "error" && state.message ? (
        <p role="alert" className="text-sm font-medium text-destructive">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

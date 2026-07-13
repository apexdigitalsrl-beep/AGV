import { MessageCircle } from "lucide-react";

import { buildWhatsAppUrl } from "@/lib/site-config";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 items-center overflow-hidden rounded-full bg-brand-600 text-white shadow-glow transition-all duration-300 hover:bg-brand-500"
    >
      <span className="grid size-14 shrink-0 place-items-center">
        <MessageCircle className="size-6" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap pr-0 text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-[180px] group-hover:pr-5 group-hover:opacity-100">
        ¿Dudas? Escribinos.
      </span>
    </a>
  );
}

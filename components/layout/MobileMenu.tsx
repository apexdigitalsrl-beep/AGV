"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

import { MagneticButton } from "@/components/shared/MagneticButton";
import { buildWhatsAppUrl, navLinks } from "@/lib/site-config";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedRef.current?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
          />
          <motion.div
            ref={panelRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
            className="absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col border-r border-white/[0.06] bg-ink-950 shadow-2xl"
          >
            <div className="flex items-center justify-end px-6 pt-6">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Cerrar menú"
                className="grid size-11 place-items-center rounded-md text-ink-300 transition-colors hover:text-white"
              >
                <X className="size-6" />
              </button>
            </div>
            <nav aria-label="Navegación móvil" className="mt-6 flex flex-1 flex-col gap-1 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="border-b border-white/[0.05] py-3 font-display text-xl font-medium text-white transition-colors hover:text-brand-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="px-6 pb-10 pt-6">
              <MagneticButton
                href={buildWhatsAppUrl()}
                external
                variant="primary"
                className="w-full justify-center text-base"
              >
                Solicitar diagnóstico gratis
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

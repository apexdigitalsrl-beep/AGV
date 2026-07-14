"use client";

import { AnimatePresence, motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";

import { FlowingMenu } from "@/components/shared/FlowingMenu";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { buildWhatsAppUrl, navLinks } from "@/lib/site-config";

type NavDropdownProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function NavDropdown({ isOpen, onClose }: NavDropdownProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;

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
        <div id="nav-dropdown" role="dialog" aria-modal="true" aria-label="Menú">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-x-0 top-[72px] bottom-0 z-[55] bg-ink-950/80 backdrop-blur-sm"
          />
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ transformOrigin: "top" }}
            className="glass-surface fixed inset-x-0 top-[72px] z-[60] max-h-[calc(100vh-72px)] overflow-y-auto rounded-b-3xl border-b border-white/[0.06] shadow-2xl"
          >
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-2 lg:px-8">
              <FlowingMenu
                items={navLinks.map((link) => ({
                  link: link.href,
                  text: link.label,
                  onClick: onClose,
                }))}
              />

              <div className="mt-8">
                <MagneticButton
                  href={buildWhatsAppUrl()}
                  external
                  variant="primary"
                  className="w-full justify-center text-base"
                  icon={<MessageCircle className="size-4" />}
                >
                  Solicitar diagnóstico gratis
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

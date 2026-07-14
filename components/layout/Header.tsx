"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { FlowingMenu } from "@/components/shared/FlowingMenu";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl, navLinks } from "@/lib/site-config";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          isScrolled ? "glass-surface border-b border-white/[0.06]" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
          <Logo />

          <div className="hidden h-11 lg:block">
            <FlowingMenu items={navLinks.map((link) => ({ link: link.href, text: link.label }))} />
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton
              href={buildWhatsAppUrl()}
              external
              variant="primary"
              className="hidden !min-h-0 !py-2.5 sm:inline-flex"
            >
              Agendar diagnóstico
            </MagneticButton>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="grid size-11 place-items-center rounded-md text-white lg:hidden"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}

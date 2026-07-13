import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <a
      href="#inicio"
      aria-label="AGV Solutions — inicio"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <Image
        src="/logo-mark.png"
        alt=""
        aria-hidden="true"
        width={36}
        height={36}
        priority
        className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
      />
      <span className="font-display text-base font-semibold tracking-tight text-white">
        AGV <span className="font-normal text-ink-400">Solutions</span>
      </span>
    </a>
  );
}

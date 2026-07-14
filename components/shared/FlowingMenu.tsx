"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

import "./FlowingMenu.css";

type FlowingMenuItem = {
  link: string;
  text: string;
  onClick?: () => void;
};

type FlowingMenuProps = {
  items: FlowingMenuItem[];
  speed?: number;
};

export function FlowingMenu({ items, speed = 15 }: FlowingMenuProps) {
  return (
    <nav className="flowing-menu" aria-label="Navegación principal">
      {items.map((item) => (
        <FlowingMenuItem key={item.link} {...item} speed={speed} />
      ))}
    </nav>
  );
}

function FlowingMenuItem({ link, text, onClick, speed }: FlowingMenuItem & { speed: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [repetitions, setRepetitions] = useState(4);
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const animationDefaults = { duration: 0.6, ease: "expo" as const };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const findClosestEdge = (mouseY: number, height: number): "top" | "bottom" => {
    const topDist = Math.abs(mouseY);
    const bottomDist = Math.abs(height - mouseY);
    return topDist < bottomDist ? "top" : "bottom";
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;
      const part = marqueeInnerRef.current.querySelector<HTMLElement>(".flowing-menu__part");
      if (!part) return;
      const contentWidth = part.offsetWidth;
      if (!contentWidth) return;
      const needed = Math.ceil(600 / contentWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [text]);

  useEffect(() => {
    if (reducedMotion) return;

    const setup = () => {
      if (!marqueeInnerRef.current) return;
      const part = marqueeInnerRef.current.querySelector<HTMLElement>(".flowing-menu__part");
      if (!part) return;
      const contentWidth = part.offsetWidth;
      if (!contentWidth) return;

      animationRef.current?.kill();
      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    };

    const timer = setTimeout(setup, 50);
    return () => {
      clearTimeout(timer);
      animationRef.current?.kill();
    };
  }, [text, repetitions, speed, reducedMotion]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reducedMotion || !itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const edge = findClosestEdge(y, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeRef.current, { y: "0%" }, 0);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reducedMotion || !itemRef.current || !marqueeRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const edge = findClosestEdge(y, rect.height);

    gsap.to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%", ...animationDefaults });
  };

  return (
    <div className="flowing-menu__item" ref={itemRef}>
      <a
        className="flowing-menu__link"
        href={link}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      {reducedMotion ? null : (
        <div className="flowing-menu__marquee" ref={marqueeRef} aria-hidden="true">
          <div className="flowing-menu__marquee-inner-wrap">
            <div className="flowing-menu__marquee-inner" ref={marqueeInnerRef}>
              {[...Array(repetitions)].map((_, idx) => (
                <div className="flowing-menu__part" key={idx}>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

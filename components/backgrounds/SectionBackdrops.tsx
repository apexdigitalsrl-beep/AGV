"use client";

import dynamic from "next/dynamic";

import { BackgroundGate } from "@/components/backgrounds/BackgroundGate";

// Each backdrop lazy-loads its WebGL chunk (ogl or three) only when its
// section approaches the viewport — nothing lands in the initial bundle.
const Galaxy = dynamic(() => import("@/components/backgrounds/Galaxy"), { ssr: false });
const Lightfall = dynamic(() => import("@/components/backgrounds/Lightfall"), { ssr: false });
const LightPillar = dynamic(() => import("@/components/backgrounds/LightPillar"), { ssr: false });
const LiquidEther = dynamic(() => import("@/components/backgrounds/LiquidEther"), { ssr: false });
const Ribbons = dynamic(() => import("@/components/backgrounds/Ribbons"), { ssr: false });
const LaserFlow = dynamic(() => import("@/components/backgrounds/LaserFlow"), { ssr: false });
const Hyperspeed = dynamic(() => import("@/components/backgrounds/Hyperspeed"), { ssr: false });

/**
 * Brand-tuned backdrops, one per landing zone. All colors come from the AGV
 * scale (brand blues + cyan) — never the React Bits demo purples. Tuning
 * lives here so the sections stay declarative.
 */

/** Hero — sparse blue starfield with soft cursor repulsion. */
export function GalaxyBackdrop() {
  return (
    <BackgroundGate>
      <Galaxy
        density={0.7}
        glowIntensity={0.22}
        saturation={0}
        hueShift={210}
        twinkleIntensity={0.25}
        rotationSpeed={0.04}
        speed={0.5}
        starSpeed={0.4}
        mouseRepulsion
        repulsionStrength={1.2}
        transparent
      />
    </BackgroundGate>
  );
}

/** Servicios — light rain falling behind the service cards. */
export function LightfallBackdrop() {
  return (
    <BackgroundGate>
      <Lightfall
        colors={["#4a84ee", "#22d3ee", "#94b6f8"]}
        backgroundColor="#1c4389"
        backgroundGlow={0.35}
        streakCount={3}
        streakLength={1.1}
        glow={0.9}
        density={0.5}
        twinkle={0.7}
        mouseInteraction
        mouseStrength={0.4}
        mixBlendMode="screen"
      />
    </BackgroundGate>
  );
}

/** CTA final — volumetric pillar rising behind the centered call to action. */
export function LightPillarBackdrop() {
  return (
    <BackgroundGate>
      <LightPillar
        topColor="#4a84ee"
        bottomColor="#22d3ee"
        intensity={0.9}
        rotationSpeed={0.25}
        noiseIntensity={0.4}
        interactive
        mixBlendMode="screen"
        quality="medium"
      />
    </BackgroundGate>
  );
}

/** Contacto — cursor-reactive fluid, idles on its own until the visitor moves. */
export function LiquidEtherBackdrop() {
  return (
    <BackgroundGate>
      <LiquidEther
        colors={["#2e6fe0", "#22d3ee", "#94b6f8"]}
        mouseForce={18}
        cursorSize={110}
        resolution={0.5}
        autoDemo
        autoSpeed={0.4}
        autoIntensity={1.8}
      />
    </BackgroundGate>
  );
}

/** Casos — thin ribbons chasing the cursor across the portfolio. */
export function RibbonsBackdrop() {
  return (
    <BackgroundGate>
      <Ribbons
        colors={["#4a84ee", "#22d3ee"]}
        baseThickness={22}
        offsetFactor={0.04}
        maxAge={450}
        speedMultiplier={0.55}
        enableFade
      />
    </BackgroundGate>
  );
}

/** Proceso — soft vertical beam behind the step timeline, kept subdued so the step copy stays fully readable. */
export function LaserFlowBackdrop() {
  return (
    <BackgroundGate>
      <LaserFlow color="#4a84ee" wispDensity={0.6} wispIntensity={2.5} fogIntensity={0.2} flowSpeed={0.25} decay={1.3} />
    </BackgroundGate>
  );
}

/** Testimonios — quiet light streams behind the placeholder cards, dimmed further so the "still building this" copy stays the focus. */
export function HyperspeedBackdrop() {
  return (
    <BackgroundGate>
      <Hyperspeed
        effectOptions={{
          distortion: "turbulentDistortion",
          length: 400,
          roadWidth: 9,
          islandWidth: 2,
          lanesPerRoad: 2,
          fov: 90,
          fovSpeedUp: 110,
          speedUp: 1.5,
          carLightsFade: 0.5,
          totalSideLightSticks: 12,
          lightPairsPerRoadWay: 18,
          colors: {
            roadColor: 0x0a0e14,
            islandColor: 0x0a0e14,
            background: 0x0a0e14,
            shoulderLines: 0x131c2b,
            brokenLines: 0x131c2b,
            leftCars: [0x4a84ee, 0x6f9ef5, 0x94b6f8],
            rightCars: [0x22d3ee, 0x2e6fe0, 0x6f9ef5],
            sticks: 0x22d3ee,
          },
        }}
      />
    </BackgroundGate>
  );
}

import { LeadQualificationForm } from "@/components/forms/LeadQualificationForm";
import { BorderGlow } from "@/components/shared/BorderGlow";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function LeadQualification() {
  return (
    <section id="diagnostico" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28">
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Diagnóstico gratuito"
          title="Contanos sobre tu negocio y te armamos una propuesta"
          description="Dos minutos alcanzan. Con esto preparamos una llamada enfocada en tu operación real, no en una demo genérica."
          align="center"
          className="mx-auto"
        />

        <RevealOnScroll delay={0.1} className="mt-12">
          <BorderGlow
            backgroundColor="#10151d"
            borderRadius={24}
            glowColor="212 80% 75%"
            colors={["#2e6fe0", "#22d3ee", "#6f9ef5"]}
            glowIntensity={0.8}
            className="p-6 sm:p-9"
          >
            <LeadQualificationForm />
          </BorderGlow>
        </RevealOnScroll>
      </div>
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqItems } from "@/lib/content";

export function Faq() {
  return (
    <section className="bg-ink-900/30 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Todo lo que necesitás saber antes de empezar"
          align="center"
          className="mx-auto"
        />

        <RevealOnScroll className="mt-14">
          <Accordion className="glass-surface rounded-2xl px-6">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`} className="border-white/10 py-1">
                <AccordionTrigger className="py-5 text-base font-medium text-white hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-ink-300">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealOnScroll>
      </div>
    </section>
  );
}

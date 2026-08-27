import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import type { FAQ } from "@/types";

export function ServiceFAQ({ title, faqs }: { title?: string; faqs: FAQ[] }) {
  if (!faqs.length) {
    return null;
  }

  return (
    <Section tone="muted">
      <Container className="max-w-4xl">
        <div className="text-center">
          <p className="eyebrow">Questions answered</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl">
            {title ?? "Frequently asked questions"}
          </h2>
        </div>

        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </Container>
    </Section>
  );
}

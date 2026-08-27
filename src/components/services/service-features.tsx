import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function ServiceFeatures({ title, items }: { title: string; items: string[] }) {
  return (
    <Section tone="muted">
      <Container className="max-w-4xl">
        <p className="eyebrow">What we can help with</p>
        <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl">
          {title}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="rounded-xl border border-border bg-card p-5 text-base font-medium text-foreground shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

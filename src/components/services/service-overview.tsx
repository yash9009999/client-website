import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function ServiceOverview({ title, description }: { title: string; description: string }) {
  return (
    <Section>
      <Container className="max-w-4xl">
        <p className="eyebrow">Overview</p>
        <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>
      </Container>
    </Section>
  );
}

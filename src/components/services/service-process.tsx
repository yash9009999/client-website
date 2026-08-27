import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { ProcessStep } from "@/types";

export function ServiceProcess({ steps }: { steps: ProcessStep[] }) {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl">
            A straightforward way to get started
          </h2>
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={`${step.title}-${index}`} className="relative rounded-xl border border-border bg-card p-5 shadow-sm">
              <span className="text-sm font-bold tracking-[0.16em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

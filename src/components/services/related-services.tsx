import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { SubService } from "@/types";
import { subServiceHref } from "@/data/services";

export function RelatedServices({
  serviceSlug,
  title,
  items,
}: {
  serviceSlug: string;
  title?: string;
  items: SubService[];
}) {
  if (!items.length) {
    return null;
  }

  return (
    <Section>
      <Container>
        <p className="eyebrow">Related services</p>
        <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl">
          {title ?? "More in this service area"}
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={subServiceHref(serviceSlug, item.slug)}
              className="rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div className="text-base font-semibold text-foreground">{item.name}</div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.shortDescription}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-primary">Learn more →</span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

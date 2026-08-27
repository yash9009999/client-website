import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { ServiceVisual } from "@/components/ui/visual-placeholder";
import type { Service } from "@/types";

export function ServiceHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  actions,
  service,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  actions?: ReactNode;
  service?: Service["slug"];
}) {
  return (
    <section className="border-b border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_.8fr] lg:px-10 lg:py-14">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {primaryHref && primaryLabel ? (
              <ButtonLink href={primaryHref} size="large" className="rounded-md">
                {primaryLabel}
                <ArrowRight aria-hidden="true" className="ml-2 size-4" />
              </ButtonLink>
            ) : null}

            {secondaryHref && secondaryLabel ? (
              <ButtonLink href={secondaryHref} variant="outline" size="large">
                {secondaryLabel}
              </ButtonLink>
            ) : null}

            {actions}
          </div>
        </div>
        {service ? <ServiceVisual service={service} className="min-h-[18rem] lg:min-h-[23rem]" /> : null}
      </div>
    </section>
  );
}

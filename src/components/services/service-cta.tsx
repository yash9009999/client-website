import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ButtonLink } from "@/components/ui/button-link";

export function ServiceCTA({
  title,
  description,
  primaryHref = "/request-a-quote",
  primaryLabel = "Request a Quote",
  secondaryHref = "/contact",
  secondaryLabel = "Contact Us",
}: {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <Section>
      <Container>
        <div className="rounded-2xl bg-slate-950 px-7 py-10 text-white sm:px-10 sm:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">Get in touch</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">{title}</h2>
              <p className="mt-4 text-slate-300">{description}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={primaryHref} className="bg-sky-400 text-slate-950 hover:bg-sky-300">
                {primaryLabel}
                <ArrowRight aria-hidden="true" className="ml-2 size-4" />
              </ButtonLink>
              <ButtonLink href={secondaryHref} variant="outline" className="border-slate-600 text-white hover:border-slate-300 hover:bg-slate-900 hover:text-white">
                {secondaryLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

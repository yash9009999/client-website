import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { serviceHref } from "@/data/services";
import { ServiceIcon } from "@/components/ui/service-icon";
import { ServiceVisual } from "@/components/ui/visual-placeholder";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[var(--shadow-card)] hover:border-primary/40">
      <ServiceVisual service={service.slug} compact className="rounded-none" />
      <div className="flex flex-1 flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-200 motion-safe:group-hover:scale-105">
          <ServiceIcon service={service.slug} className="size-6" />
        </div>
        <span className="rounded-full border border-border bg-muted px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
          service
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight text-card-foreground">{service.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{service.shortDescription}</p>

      <Link href={serviceHref(service)} className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:text-primary/75">
        Explore service
        <ArrowRight aria-hidden="true" className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
      </div>
    </article>
  );
}

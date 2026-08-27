import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { subServiceHref } from "@/data/services";
import type { SubService } from "@/types";

export function SubServiceCard({ serviceSlug, subService }: { serviceSlug: string; subService: SubService }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">{subService.name}</h3>
        <ArrowUpRight aria-hidden="true" className="size-4 text-primary transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{subService.shortDescription}</p>

      <Link href={subServiceHref(serviceSlug, subService.slug)} className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:text-primary/80">
        Learn more
      </Link>
    </article>
  );
}

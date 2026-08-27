import { MapPinned } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ButtonLink } from "@/components/ui/button-link";
export function AreasPreview() { return <Section><Container><div className="grid gap-8 rounded-2xl border border-border p-7 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center"><div className="grid size-15 place-items-center rounded-xl bg-secondary text-primary"><MapPinned aria-hidden="true" className="size-7" /></div><div><p className="eyebrow">Service areas</p><h2 className="mt-3 text-3xl font-bold tracking-tight">Areas We Cover</h2><p className="mt-3 max-w-2xl leading-7 text-muted-foreground">We&apos;re developing our full service-area directory. Contact us to discuss your location and requirements.</p></div><ButtonLink href="/areas" variant="outline">Check Your Area</ButtonLink></div></Container></Section>; }

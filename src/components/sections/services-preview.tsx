import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ButtonLink } from "@/components/ui/button-link";
import { services } from "@/data/services";
import { ServiceCard } from "./service-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
export function ServicesPreview() { return <Section><Container><div className="max-w-2xl"><p className="eyebrow">Our services</p><h2 className="section-title">Property services, clearly organised</h2><p className="section-copy">Professional solutions across essential property services, with a straightforward path to explore the help you need.</p></div><ScrollReveal className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</ScrollReveal><div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-xl border border-border bg-muted p-6 sm:flex-row sm:items-center"><div><h3 className="text-xl font-bold tracking-tight">Need help with a property issue?</h3><p className="mt-2 text-sm text-muted-foreground">Explore our services or request a quote.</p></div><ButtonLink href="/request-a-quote">Request a Quote</ButtonLink></div></Container></Section>; }

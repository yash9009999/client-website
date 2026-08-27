import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ServiceCard } from "@/components/sections/service-card";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Our Services",
  description: "Professional property services for homes and businesses, including glazing, locksmith, plumbing, gas and heating, electrical and pest control.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Section tone="muted">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Services</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            Profix Innovation provides practical property services for homes, landlords and businesses,
            with a clear route to the support you need across the main categories below.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ServiceCTA } from "@/components/services/service-cta";
import { ServiceFAQ } from "@/components/services/service-faq";
import { ServiceFeatures } from "@/components/services/service-features";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceOverview } from "@/components/services/service-overview";
import { ServiceProcess } from "@/components/services/service-process";
import { SubServiceCard } from "@/components/services/sub-service-card";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import type { Service } from "@/types";

export function ServiceCategoryLayout({ service }: { service: Service }) {
  const serviceOverview = service.subServices[0]?.features ?? ["Assessment", "Planning", "Next steps"];

  return (
    <>
      <ServiceHero
        eyebrow="Services"
        title={`${service.name} Services`}
        description={service.description}
        service={service.slug}
        primaryHref={`/request-a-quote?service=${service.slug}`}
        primaryLabel="Request a Quote"
        secondaryHref="/services"
        secondaryLabel="View all services"
      />

      <ServiceOverview title={`${service.name} services`} description={service.description} />

      <Section>
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Our services</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl">
                {service.name} options
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {service.subServices.map((subService) => (
              <SubServiceCard key={subService.slug} serviceSlug={service.slug} subService={subService} />
            ))}
          </div>
        </Container>
      </Section>

      <WhyChooseUs />

      <ServiceFeatures title={`What we can help with in ${service.name.toLowerCase()}`} items={serviceOverview} />

      <ServiceProcess steps={service.subServices[0]?.process ?? [{ title: "Discuss the requirement", description: "Share the issue and relevant details." }, { title: "Review the next steps", description: "Talk through the service and suitable approach." }, { title: "Receive a quote", description: "Discuss the quotation and the best route forward." }, { title: "Arrange the work", description: "Agree the next steps for the job." }]} />

      <ServiceFAQ title={`Frequently asked questions about ${service.name.toLowerCase()}`} faqs={service.subServices[0]?.faqs ?? []} />

      <ServiceCTA
        title={`Need help with ${service.name.toLowerCase()} requirements?`}
        description={`Tell us what you need and we'll help you understand the right service and next step for your property.`}
      />
    </>
  );
}

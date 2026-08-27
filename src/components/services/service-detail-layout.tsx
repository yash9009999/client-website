import { ServiceCTA } from "@/components/services/service-cta";
import { ServiceFAQ } from "@/components/services/service-faq";
import { ServiceFeatures } from "@/components/services/service-features";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceOverview } from "@/components/services/service-overview";
import { ServiceProcess } from "@/components/services/service-process";
import { RelatedServices } from "@/components/services/related-services";
import { Breadcrumbs } from "@/components/services/breadcrumbs";
import { getRelatedSubServices } from "@/data/services";
import type { Service, SubService } from "@/types";

export function ServiceDetailLayout({
  service,
  subService,
}: {
  service: Service;
  subService: SubService;
}) {
  const related = service.subServices
    .filter((item) => item.slug !== subService.slug)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${service.slug}` },
          { label: subService.name },
        ]}
      />

      <ServiceHero
        eyebrow={service.name}
        title={subService.name}
        description={subService.description}
        service={service.slug}
        primaryHref={`/request-a-quote?service=${service.slug}&subService=${subService.slug}`}
        primaryLabel="Request a Quote"
        secondaryHref={`/services/${service.slug}`}
        secondaryLabel={`View ${service.name}`}
      />

      <ServiceOverview title={subService.name} description={subService.description} />

      <ServiceFeatures title={`What we can help with for ${subService.name.toLowerCase()}`} items={subService.features} />

      <ServiceProcess steps={subService.process ?? [{ title: "Discuss the requirement", description: "Share the issue and relevant details." }, { title: "Review the next steps", description: "Talk through the best route for the property." }, { title: "Receive a quote", description: "Discuss the quotation and follow-up options." }, { title: "Arrange the work", description: "Agree the way forward and timeline." }]} />

      <ServiceFAQ title={`Frequently asked questions about ${subService.name.toLowerCase()}`} faqs={subService.faqs ?? []} />

      <RelatedServices title={`Related ${service.name} services`} serviceSlug={service.slug} items={related.length ? related : getRelatedSubServices(service.slug, subService.slug)} />

      <ServiceCTA
        title="Need help with this service?"
        description={`Talk to Profix Innovation about your ${subService.name.toLowerCase()} requirements and the next steps for your property.`}
        primaryHref={`/request-a-quote?service=${service.slug}&subService=${subService.slug}`}
        secondaryHref="/contact"
      />
    </div>
  );
}

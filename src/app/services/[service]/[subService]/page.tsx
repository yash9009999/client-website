import { notFound } from "next/navigation";
import { ServiceDetailLayout } from "@/components/services/service-detail-layout";
import { getAllSubServicePaths, getServiceBySlug, getSubServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/utils";

export function generateStaticParams() {
  return getAllSubServicePaths();
}

export async function generateMetadata({ params }: { params: Promise<{ service: string; subService: string }> }) {
  const { service: serviceSlug, subService: subServiceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const subService = getSubServiceBySlug(serviceSlug, subServiceSlug);

  return createMetadata({
    title: subService ? `${subService.name} | ${service?.name ?? "Service"}` : "Service",
    description: subService?.description ?? "Professional property service information from Profix Innovation.",
    path: subService ? `/services/${serviceSlug}/${subServiceSlug}` : `/services/${serviceSlug}`,
  });
}

export default async function SubServicePage({ params }: { params: Promise<{ service: string; subService: string }> }) {
  const { service: serviceSlug, subService: subServiceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const subService = getSubServiceBySlug(serviceSlug, subServiceSlug);

  if (!service || !subService) {
    notFound();
  }

  return <ServiceDetailLayout service={service} subService={subService} />;
}

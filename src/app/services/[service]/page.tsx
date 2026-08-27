import { notFound } from "next/navigation";
import { ServiceCategoryLayout } from "@/components/services/service-category-layout";
import { getAllServicePaths, getServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/utils";

export function generateStaticParams() {
  return getAllServicePaths();
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);

  return createMetadata({
    title: service ? `${service.name} Services` : "Service",
    description: service?.description ?? "Professional property service information from Profix Innovation.",
    path: service ? `/services/${service.slug}` : "/services",
  });
}

export default async function ServiceCategoryPage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceCategoryLayout service={service} />;
}

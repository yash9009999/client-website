import { services } from "@/data/services";

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getSubServiceBySlug(serviceSlug: string, subServiceSlug: string) {
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return undefined;
  }

  return service.subServices.find((item) => item.slug === subServiceSlug);
}

export function getAllServicePaths() {
  return services.map(({ slug }) => ({ service: slug }));
}

export function getAllSubServicePaths() {
  return services.flatMap((service) =>
    service.subServices.map((subService) => ({
      service: service.slug,
      subService: subService.slug,
    })),
  );
}

export function getRelatedSubServices(serviceSlug: string, currentSubServiceSlug?: string) {
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return [];
  }

  const items = service.subServices.filter((item) => item.slug !== currentSubServiceSlug);

  return items.slice(0, 4);
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { advice } from "@/data/advice";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.flatMap((service) => [
    { url: `${siteConfig.domain}/services/${service.slug}`, lastModified: new Date() },
    ...service.subServices.map((subService) => ({
      url: `${siteConfig.domain}/services/${service.slug}/${subService.slug}`,
      lastModified: new Date(),
    })),
  ]);

  return [
    { url: siteConfig.domain, lastModified: new Date() },
    { url: `${siteConfig.domain}/services`, lastModified: new Date() },
    ...["about", "commercial", "areas", "faqs", "advice"].map((path) => ({ url: `${siteConfig.domain}/${path}`, lastModified: new Date() })),
    ...advice.map((article) => ({ url: `${siteConfig.domain}/advice/${article.slug}`, lastModified: new Date() })),
    ...serviceRoutes,
  ];
}

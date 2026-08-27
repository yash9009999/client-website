import type { SiteConfig } from "@/types";
import { services, serviceHref } from "./services";

export const siteConfig: SiteConfig = {
  name: "Profix Innovation",
  domain: "https://www.profixinnovation.co.uk",
  description: "Professional property maintenance services across the UK.",
  contact: { email: "info@profixinnovation.co.uk" },
  navigation: [
    { label: "Home", href: "/" }, { label: "Services", href: "/services", children: services.map((service) => ({ label: service.name, href: serviceHref(service) })) },
      { label: "About Us", href: "/about" }, { label: "Commercial", href: "/commercial" },
      { label: "Areas We Cover", href: "/areas" }, { label: "Advice", href: "/advice" },
    { label: "Contact", href: "/contact" },
  ],
};

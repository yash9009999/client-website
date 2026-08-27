import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function createMetadata({ title, description, path = "/" }: { title?: string; description?: string; path?: string }): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageDescription = description ?? siteConfig.description;
  return { title: pageTitle, description: pageDescription, alternates: { canonical: path }, openGraph: { title: pageTitle, description: pageDescription, url: path, siteName: siteConfig.name, locale: "en_GB", type: "website" }, twitter: { card: "summary", title: pageTitle, description: pageDescription } };
}

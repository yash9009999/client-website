import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { QuoteForm } from "@/components/forms/quote-form";
import { services, getSubServiceBySlug } from "@/data/services";

export const metadata: Metadata = { title: "Request a Quote", description: "Tell Profix Innovation about the property service you need." };

export default async function RequestAQuotePage({ searchParams }: { searchParams: Promise<{ service?: string; subService?: string }> }) {
  const query = await searchParams;
  const service = services.find((item) => item.slug === query.service);
  const subService = service && getSubServiceBySlug(service.slug, query.subService ?? "");
  return <><section className="bg-primary-dark py-14 text-white sm:py-20"><Container><p className="eyebrow text-accent">Get in touch</p><h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Request a quote</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Tell us about the service you need. A few details will help us understand your enquiry.</p></Container></section><main className="bg-muted py-10 sm:py-14"><Container className="max-w-4xl"><QuoteForm initialService={service?.slug ?? ""} initialSubService={subService?.slug ?? ""} /></Container></main></>;
}

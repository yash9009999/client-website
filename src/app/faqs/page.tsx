import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FAQHub } from "@/components/content/faq-hub";
import { faqs } from "@/data/faqs";
import { getFAQPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = { title: "Frequently Asked Questions", description: "Answers to common questions about Profix Innovation property service enquiries." };
export default function FAQsPage() { const schema = getFAQPageJsonLd(faqs); return <><section className="bg-primary-dark py-14 text-white sm:py-20"><Container><p className="eyebrow text-accent">Helpful information</p><h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Frequently asked questions</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Find answers about our services, enquiries and the information useful when requesting support.</p></Container></section><main className="bg-muted py-10 sm:py-14"><Container className="max-w-5xl"><FAQHub items={faqs} /><div className="mt-10 rounded-2xl bg-primary-dark p-7 text-white sm:p-9"><h2 className="text-2xl font-bold">Still need help?</h2><p className="mt-3 text-slate-300">Send us the details of your property requirement.</p><Link href="/request-a-quote" className="mt-6 inline-flex min-h-11 items-center rounded-[10px] bg-accent px-5 text-sm font-semibold text-accent-foreground">Request a Quote</Link></div></Container></main>{schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}</>; }

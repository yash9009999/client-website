import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Profix Innovation about your property service requirements." };

export default function ContactPage() { return <><section className="bg-primary-dark py-14 text-white sm:py-20"><Container><p className="eyebrow text-accent">Get in touch</p><h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Contact Profix Innovation</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Have a question about a property service? Send us a message and include the details that matter.</p></Container></section><main className="bg-muted py-10 sm:py-14"><Container className="grid max-w-6xl gap-8 lg:grid-cols-[.7fr_1fr] lg:items-start"><aside className="rounded-2xl bg-secondary p-7"><Mail className="size-7 text-primary" aria-hidden="true" /><h2 className="mt-5 text-2xl font-bold">Email us</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">For direct contact, email the team using the address below.</p><a className="mt-5 inline-block break-all font-semibold text-primary hover:underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a><Link href="/request-a-quote" className="mt-8 inline-flex min-h-11 items-center rounded-[10px] bg-primary px-5 text-sm font-semibold text-white">Request a Quote</Link></aside><ContactForm /></Container></main></>; }

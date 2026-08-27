import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { advice } from "@/data/advice";

export const metadata: Metadata = { title: "Property Services Advice", description: "Original practical information about common property service issues and maintenance requirements." };
export default function AdvicePage() { return <><section className="bg-primary-dark py-14 text-white sm:py-20"><Container><p className="eyebrow text-accent">Advice</p><h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Practical property services information</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Helpful information about common property issues, maintenance and when to seek professional assessment.</p></Container></section><Section><Container><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{advice.map((article) => <article key={article.slug} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"><p className="eyebrow">{article.category}</p><h2 className="mt-4 text-xl font-bold tracking-tight">{article.title}</h2><p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{article.excerpt}</p><Link href={`/advice/${article.slug}`} className="mt-6 inline-flex min-h-10 items-center text-sm font-semibold text-primary">Read article <ArrowUpRight className="ml-2 size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></article>)}</div></Container></Section></>; }

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { serviceAreas } from "@/data/areas";
import { Container } from "@/components/layout/container";
import { ServiceCard } from "@/components/sections/service-card";
import { services } from "@/data/services";

export function generateStaticParams() { return serviceAreas.filter((area) => area.active).map((area) => ({ area: area.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> { const { area: slug } = await params; const area = serviceAreas.find((item) => item.slug === slug && item.active); return area ? { title: `${area.name} Services`, description: area.description } : { title: "Area" }; }
export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) { const { area: slug } = await params; const area = serviceAreas.find((item) => item.slug === slug && item.active); if (!area) notFound(); return <><section className="bg-primary-dark py-16 text-white"><Container><p className="eyebrow text-accent">Area services</p><h1 className="mt-4 text-5xl font-bold">{area.name}</h1><p className="mt-5 max-w-2xl text-lg text-slate-300">{area.description}</p></Container></section><section className="py-16"><Container><h2 className="text-3xl font-bold">Services available</h2><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></Container></section></>; }

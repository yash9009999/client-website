"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";

const inputClass = "mt-2 min-h-12 w-full rounded-[10px] border border-border bg-white px-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10";
const labelClass = "text-sm font-semibold text-foreground";
const today = new Date().toISOString().slice(0, 10);

export function QuoteForm({ initialService = "", initialSubService = "" }: { initialService?: string; initialSubService?: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const [service, setService] = useState(initialService);
  const [subService, setSubService] = useState(initialSubService);
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<{ type: "idle" | "sending" | "success" | "error"; message?: string; reference?: string }>({ type: "idle" });
  const selectedService = useMemo(() => services.find((item) => item.slug === service), [service]);
  useEffect(() => { if (status.type === "error") errorRef.current?.focus(); }, [status.type]);

  function updateFiles(event: React.ChangeEvent<HTMLInputElement>) {
    const next = Array.from(event.target.files ?? []);
    if (next.length > 5) { setStatus({ type: "error", message: "You can upload up to 5 images." }); return; }
    if (next.some((file) => !["image/jpeg", "image/png", "image/webp"].includes(file.type))) { setStatus({ type: "error", message: "This file type isn't supported. Use JPG, PNG or WEBP." }); return; }
    if (next.some((file) => file.size > 5 * 1024 * 1024)) { setStatus({ type: "error", message: "Each image must be 5 MB or smaller." }); return; }
    setFiles(next);
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "sending" });
    const formData = new FormData(event.currentTarget);
    files.forEach((file) => formData.append("photos", file));
    try {
      const response = await fetch("/api/enquiries", { method: "POST", body: formData });
      const result = await response.json() as { ok: boolean; error?: string; reference?: string };
      if (!response.ok || !result.ok) throw new Error(result.error || "We couldn't send your enquiry. Please try again.");
      setStatus({ type: "success", reference: result.reference });
      formRef.current?.reset();
      setFiles([]);
      setService("");
      setSubService("");
    } catch (error) { setStatus({ type: "error", message: error instanceof Error ? error.message : "We couldn't submit your enquiry. Please check your connection and try again." }); }
  }

  if (status.type === "success") return <div className="rounded-2xl border border-success/20 bg-white p-7 shadow-[var(--shadow-card)] sm:p-10" role="status"><p className="eyebrow text-success">Thank you</p><h2 className="mt-3 text-3xl font-bold tracking-tight">Your enquiry has been received.</h2><p className="mt-4 leading-7 text-muted-foreground">The information was sent to Profix Innovation for review. This confirms receipt only and does not confirm an appointment.</p><p className="mt-6 rounded-xl bg-muted p-4 text-sm font-semibold">Reference: <span className="text-primary">{status.reference}</span></p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/" className="inline-flex min-h-11 items-center justify-center rounded-[10px] bg-primary px-5 text-sm font-semibold text-white">Back to home</Link><Link href="/services" className="inline-flex min-h-11 items-center justify-center rounded-[10px] border border-border px-5 text-sm font-semibold">View services</Link></div></div>;

  return <form ref={formRef} onSubmit={submit} className="rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-card)] sm:p-8" noValidate>
    <div className="sr-only" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <input type="hidden" name="type" value="quote" />
    {status.type === "error" && <div ref={errorRef} tabIndex={-1} role="alert" className="mb-7 rounded-xl border border-destructive/30 bg-red-50 p-4 text-sm text-destructive">{status.message}</div>}
    <fieldset><legend className="text-xl font-bold tracking-tight">Your details</legend><div className="mt-5 grid gap-5 sm:grid-cols-2"><Field label="First name" name="firstName" required autoComplete="given-name" /><Field label="Last name" name="lastName" required autoComplete="family-name" /><Field label="Email" name="email" type="email" required autoComplete="email" /><Field label="Phone" name="phone" type="tel" required autoComplete="tel" /></div></fieldset>
    <fieldset className="mt-9 border-t border-border pt-8"><legend className="text-xl font-bold tracking-tight">Service details</legend><div className="mt-5 grid gap-5 sm:grid-cols-2"><Select label="Service" name="service" value={service} onChange={(event) => { setService(event.target.value); setSubService(""); }} required><option value="">Select a service</option>{services.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</Select><Select label="Sub-service" name="subService" value={subService} onChange={(event) => setSubService(event.target.value)} required disabled={!selectedService}><option value="">{selectedService ? "Select a sub-service" : "Please select a service first"}</option>{selectedService?.subServices.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</Select></div></fieldset>
    <fieldset className="mt-9 border-t border-border pt-8"><legend className="text-xl font-bold tracking-tight">Property and timing</legend><div className="mt-5 grid gap-5 sm:grid-cols-2"><Field label="Postcode" name="postcode" required autoComplete="postal-code" /><Select label="Property type" name="propertyType" required><option value="">Select property type</option><option value="residential">Residential</option><option value="commercial">Commercial</option><option value="landlord">Landlord / Rental Property</option><option value="property-management">Property Management</option><option value="other">Other</option></Select><Select label="Urgency" name="urgency"><option value="standard">Standard</option><option value="urgent">Urgent</option><option value="emergency">Emergency</option></Select><Field label="Preferred date" name="preferredDate" type="date" min={today} /><Field label="Preferred time" name="preferredTime" type="time" /><p className="text-xs leading-5 text-muted-foreground sm:col-span-2">Selecting Emergency helps us understand the urgency of your enquiry. Preferred time is a request only and is not a confirmed appointment.</p></div></fieldset>
    <fieldset className="mt-9 border-t border-border pt-8"><legend className="text-xl font-bold tracking-tight">Your requirements</legend><label className={`${labelClass} mt-5 block`} htmlFor="issue">Tell us about the issue <span className="text-destructive">*</span></label><textarea id="issue" name="issue" required maxLength={2000} placeholder="Please describe the problem or service you require." className={`${inputClass} min-h-36 resize-y py-3`} /><label className={`${labelClass} mt-5 block`} htmlFor="additionalInformation">Additional information <span className="font-normal text-muted-foreground">(optional)</span></label><textarea id="additionalInformation" name="additionalInformation" maxLength={2000} className={`${inputClass} min-h-24 resize-y py-3`} /></fieldset>
    <fieldset className="mt-9 border-t border-border pt-8"><legend className="text-xl font-bold tracking-tight">Photos <span className="font-normal text-muted-foreground">(optional)</span></legend><label className={`${labelClass} mt-5 block`} htmlFor="photos">Upload relevant images</label><input id="photos" name="photos" type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={updateFiles} className="mt-2 block w-full rounded-[10px] border border-border p-3 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-2 file:font-semibold" /><p className="mt-2 text-xs text-muted-foreground">JPG, PNG or WEBP. Up to 5 images, 5 MB each.</p>{files.length > 0 && <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">{files.map((file, index) => <div key={`${file.name}-${file.lastModified}`} className="relative aspect-square overflow-hidden rounded-lg border border-border"><img src={URL.createObjectURL(file)} alt={`Selected image ${index + 1}`} className="size-full object-cover" /><button type="button" onClick={() => setFiles(files.filter((_, itemIndex) => itemIndex !== index))} className="absolute right-1 top-1 grid size-7 place-items-center rounded-full bg-primary-dark text-white" aria-label={`Remove ${file.name}`}>×</button></div>)}</div>}</fieldset>
    <label className="mt-8 flex items-start gap-3 text-sm leading-6 text-muted-foreground"><input type="checkbox" name="consent" required className="mt-1 size-4 accent-primary" /> <span>By submitting this form, you agree that Profix Innovation may use the information provided to respond to your enquiry.</span></label><button type="submit" disabled={status.type === "sending"} className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-primary px-6 text-sm font-semibold text-white transition hover:-translate-y-px hover:bg-primary/90 disabled:cursor-wait disabled:opacity-60">{status.type === "sending" ? "Sending..." : "Submit Request"}</button>
  </form>;
}

function Field({ label, name, required = false, type = "text", ...props }: { label: string; name: string; required?: boolean; type?: string; [key: string]: unknown }) { return <div><label className={labelClass} htmlFor={name}>{label} {required && <span className="text-destructive">*</span>}</label><input id={name} name={name} type={type} required={required} className={inputClass} {...props} /></div>; }
function Select({ label, name, children, required = false, ...props }: { label: string; name: string; children: React.ReactNode; required?: boolean } & React.SelectHTMLAttributes<HTMLSelectElement>) { return <div><label className={labelClass} htmlFor={name}>{label} {required && <span className="text-destructive">*</span>}</label><select id={name} name={name} required={required} className={inputClass} {...props}>{children}</select></div>; }

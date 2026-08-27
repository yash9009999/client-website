"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { siteConfig } from "@/data/site";
import { services, serviceHref } from "@/data/services";
import { Container } from "./container";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuId = useId();
  const mobileMenu = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuWasOpen = useRef(false);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMobileOpen(false); setServicesOpen(false); }
      if (event.key === "Tab" && mobileOpen && mobileMenu.current) {
        const focusable = Array.from(mobileMenu.current.querySelectorAll<HTMLElement>('a, button:not([disabled])'));
        if (!focusable.length) return;
        const first = focusable[0]; const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (mobileOpen) {
      mobileMenu.current?.querySelector<HTMLElement>("a, button")?.focus();
      menuWasOpen.current = true;
    } else if (menuWasOpen.current) {
      menuButton.current?.focus();
      menuWasOpen.current = false;
    }
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; };
  }, [mobileOpen]);
  const closeMobile = () => setMobileOpen(false);
  return <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 shadow-sm backdrop-blur"><Container className="flex h-18 items-center justify-between gap-5"><Brand /><nav className="hidden h-full items-center gap-1 xl:flex" aria-label="Primary navigation">{siteConfig.navigation.map((item) => item.children ? <div key={item.href} className="relative h-full" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}><button type="button" className="flex h-full items-center gap-1 rounded-md px-3 text-sm font-semibold text-muted-foreground hover:text-foreground" aria-expanded={servicesOpen} aria-haspopup="true" onClick={() => setServicesOpen(!servicesOpen)} onKeyDown={(event) => event.key === "Escape" && setServicesOpen(false)}>Services <ChevronDown aria-hidden="true" className={`size-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} /></button>{servicesOpen && <div className="absolute left-0 top-full w-[46rem] rounded-b-xl border border-border bg-card p-5 shadow-xl"><div className="grid grid-cols-3 gap-x-6 gap-y-5">{services.map((service) => <div key={service.slug} className="rounded-lg p-2 hover:bg-muted"><Link href={serviceHref(service)} onClick={() => setServicesOpen(false)} className="block text-sm font-semibold text-card-foreground hover:text-primary">{service.name}</Link><div className="mt-2 grid gap-1">{service.subServices.slice(0, 3).map((subService) => <span key={subService.slug} className="text-xs text-muted-foreground">{subService.name}</span>)}</div></div>)}</div><Link href={item.href} onClick={() => setServicesOpen(false)} className="mt-5 inline-flex text-sm font-semibold text-primary hover:text-primary/75">View all services →</Link></div>}</div> : <Link key={item.href} className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground" href={item.href}>{item.label}</Link>)}</nav><Link href="/request-a-quote" className="hidden min-h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 xl:inline-flex">Get a Quote</Link><button ref={menuButton} type="button" className="grid size-11 place-items-center rounded-md border border-border text-foreground xl:hidden" aria-expanded={mobileOpen} aria-controls={menuId} aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}</button></Container><div ref={mobileMenu} id={menuId} role="dialog" aria-modal="true" aria-hidden={!mobileOpen} aria-label="Mobile navigation" data-open={mobileOpen} className="mobile-nav-panel absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-border bg-background px-5 py-6 shadow-xl xl:hidden"><nav className="mx-auto flex max-w-7xl flex-col" aria-label="Mobile navigation">{siteConfig.navigation.map((item) => <div key={item.href} className="mobile-nav-item">{item.children ? <><Link href={item.href} onClick={closeMobile} className="block rounded-md px-3 py-3 text-base font-semibold">Services</Link><div className="mb-2 ml-4 border-l border-border pl-3">{item.children.map((child) => <Link key={child.href} href={child.href} onClick={closeMobile} className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">{child.label}</Link>)}</div></> : <Link href={item.href} onClick={closeMobile} className="block rounded-md px-3 py-3 text-base font-semibold hover:bg-muted">{item.label}</Link>}</div>)}<Link href="/request-a-quote" onClick={closeMobile} className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground">Get a Quote</Link></nav></div></header>;
}
function Brand() { return <Link href="/" className="leading-none" aria-label={`${siteConfig.name} home`}><span className="block text-base font-extrabold tracking-[0.12em] text-foreground sm:text-lg">PROFIX</span><span className="mt-1 block text-[10px] font-bold tracking-[0.28em] text-primary sm:text-xs">INNOVATION</span></Link>; }

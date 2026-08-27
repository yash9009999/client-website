"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { FAQ } from "@/types";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const id = useId();
  return <div className="divide-y divide-border rounded-xl border border-border bg-card">{items.map((item, index) => {
    const isOpen = openIndex === index;
    const panelId = `${id}-panel-${index}`;
    return <div key={item.question}><h3><button type="button" className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-base font-semibold text-card-foreground sm:px-6" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? null : index)}>{item.question}<ChevronDown aria-hidden="true" className={`size-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} /></button></h3><div id={panelId} hidden={!isOpen} className="px-5 pb-5 text-sm leading-6 text-muted-foreground sm:px-6">{item.answer}</div></div>;
  })}</div>;
}

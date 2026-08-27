"use client";

import { useState } from "react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import type { FAQItem } from "@/data/faqs";
import { faqCategories } from "@/data/faqs";

export function FAQHub({ items }: { items: FAQItem[] }) {
  const [category, setCategory] = useState("All");
  const visible = category === "All" ? items : items.filter((item) => item.category === category);
  return <div><div className="mb-8 grid gap-2 sm:flex sm:flex-wrap" aria-label="FAQ categories">{faqCategories.map((item) => <button type="button" key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={`min-h-10 rounded-[10px] border px-4 text-left text-sm font-semibold transition ${category === item ? "border-primary bg-primary text-white" : "border-border bg-white hover:border-primary hover:text-primary"}`}>{item}</button>)}</div><FAQAccordion items={visible} /></div>;
}

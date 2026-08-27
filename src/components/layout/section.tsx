import type { ReactNode } from "react";

export function Section({ children, className = "", tone = "default" }: { children: ReactNode; className?: string; tone?: "default" | "muted" | "primary" }) {
  const tones = { default: "", muted: "bg-muted", primary: "bg-primary text-primary-foreground" };
  return <section className={`py-16 sm:py-20 lg:py-24 ${tones[tone]} ${className}`}>{children}</section>;
}

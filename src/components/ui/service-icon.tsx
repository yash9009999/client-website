import { Bug, Droplets, Flame, LockKeyhole, PanelTop, Zap, type LucideIcon } from "lucide-react";
import type { Service } from "@/types";

const iconMap: Record<Service["slug"], LucideIcon> = {
  glazing: PanelTop,
  locksmith: LockKeyhole,
  plumbing: Droplets,
  "gas-heating": Flame,
  electrical: Zap,
  "pest-control": Bug,
};

export function ServiceIcon({ service, className = "" }: { service: Service["slug"]; className?: string }) {
  const Icon = iconMap[service];
  return <Icon aria-hidden="true" className={className} strokeWidth={1.8} />;
}

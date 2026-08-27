import { ArrowUpRight, Building2, Droplets, Flame, LockKeyhole, PanelTop, Zap, Bug, type LucideIcon } from "lucide-react";
import Image from "next/image";
import type { Service } from "@/types";
import { siteImages, type VisualAsset } from "@/data/images";
import { ServiceIcon } from "./service-icon";

const iconMap: Record<Service["slug"], LucideIcon> = { glazing: PanelTop, locksmith: LockKeyhole, plumbing: Droplets, "gas-heating": Flame, electrical: Zap, "pest-control": Bug };

type VisualPlaceholderProps = {
  asset: VisualAsset;
  service?: Service["slug"];
  className?: string;
  compact?: boolean;
};

export function VisualPlaceholder({ asset, service, className = "", compact = false }: VisualPlaceholderProps) {
  const Icon = service ? iconMap[service] : Building2;
  return (
    <div className={`visual-placeholder visual-placeholder-${asset.tone} ${compact ? "visual-placeholder-compact" : ""} ${className}`} role="img" aria-label={asset.alt}>
      {asset.src && <Image src={asset.src} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="visual-photo" />}
      <div className="visual-grid" aria-hidden="true" />
      <div className="visual-orbit visual-orbit-one" aria-hidden="true" />
      <div className="visual-orbit visual-orbit-two" aria-hidden="true" />
      <div className="visual-frame" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="visual-content">
        <div className="visual-icon"><Icon aria-hidden="true" /></div>
        <p>{asset.label}</p>
      </div>
      {!compact && <div className="visual-mark" aria-hidden="true"><ServiceIcon service={service ?? "glazing"} className="size-5" /><ArrowUpRight className="size-4" /></div>}
    </div>
  );
}

export function ServiceVisual({ service, className = "", compact = false }: { service: Service["slug"]; className?: string; compact?: boolean }) {
  return <VisualPlaceholder asset={siteImages.services[service]} service={service} className={className} compact={compact} />;
}

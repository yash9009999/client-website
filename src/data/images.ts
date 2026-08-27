import type { Service } from "@/types";

export type VisualAsset = {
  src?: string;
  alt: string;
  tone: "cool" | "deep" | "water" | "warm" | "electric" | "natural";
  label: string;
};

export const siteImages: {
  hero: VisualAsset;
  services: Record<Service["slug"], VisualAsset>;
} = {
  hero: {
    alt: "Abstract architectural window and property service visual",
    tone: "deep",
    label: "Property care, considered",
  },
  services: {
    glazing: { alt: "Abstract architectural glazing visual", tone: "cool", label: "Glass & windows" },
    locksmith: { alt: "Abstract secure entry visual", tone: "deep", label: "Secure access" },
    plumbing: { alt: "Abstract water and pipework visual", tone: "water", label: "Water systems" },
    "gas-heating": { alt: "Abstract heating system visual", tone: "warm", label: "Heat & comfort" },
    electrical: { alt: "Abstract electrical installation visual", tone: "electric", label: "Power & light" },
    "pest-control": { alt: "Abstract property protection visual", tone: "natural", label: "Property protection" },
  },
};

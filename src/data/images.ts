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
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    alt: "Bright modern property exterior with large architectural windows",
    tone: "deep",
    label: "Property care, considered",
  },
  services: {
    glazing: { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85", alt: "Sunlit office interior with expansive glass windows", tone: "cool", label: "Glass & windows" },
    locksmith: { src: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=900&q=85", alt: "Close view of a secure modern front door", tone: "deep", label: "Secure access" },
    plumbing: { src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85", alt: "Professional plumber working beneath a sink", tone: "water", label: "Water systems" },
    "gas-heating": { src: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=85", alt: "Radiator heating a comfortable modern room", tone: "warm", label: "Heat & comfort" },
    electrical: { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85", alt: "Electrician working on a property installation", tone: "electric", label: "Power & light" },
    "pest-control": { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85", alt: "Professional property maintenance worker", tone: "natural", label: "Property protection" },
  },
};

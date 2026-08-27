import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary: "bg-primary text-primary-foreground shadow-sm hover:-translate-y-px hover:bg-primary/90 hover:shadow-md active:translate-y-0",
  secondary: "bg-secondary text-foreground hover:bg-secondary/75",
  outline: "border border-border bg-transparent text-foreground hover:-translate-y-px hover:border-primary hover:text-primary hover:shadow-sm active:translate-y-0",
  ghost: "bg-transparent text-foreground hover:bg-muted",
};
const sizes = { small: "min-h-10 px-4 text-sm", medium: "min-h-11 px-5 text-sm", large: "min-h-12 px-6 text-base" };
export function ButtonLink({ className = "", variant = "primary", size = "medium", ...props }: ComponentProps<typeof Link> & { variant?: keyof typeof variants; size?: keyof typeof sizes }) {
  return <Link className={`inline-flex items-center justify-center rounded-[10px] font-semibold transition-all duration-250 ease-out ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}

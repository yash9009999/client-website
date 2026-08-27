import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileCTA } from "@/components/layout/mobile-cta";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
export const metadata: Metadata = { metadataBase: new URL(siteConfig.domain), title: { default: "Profix Innovation | Professional Property Services", template: `%s | ${siteConfig.name}` }, description: "Professional property maintenance services for homes and businesses.", alternates: { canonical: "/" }, robots: { index: true, follow: true }, openGraph: { type: "website", locale: "en_GB", siteName: siteConfig.name, title: "Profix Innovation | Professional Property Services", description: "Professional property maintenance services for homes and businesses.", url: "/" }, twitter: { card: "summary", title: "Profix Innovation | Professional Property Services", description: "Professional property maintenance services for homes and businesses." } };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={geist.variable}
    >
      <body suppressHydrationWarning className="flex min-h-screen flex-col pb-18 xl:pb-0"><Header /><main className="flex-1">{children}</main><Footer /><MobileCTA /></body>
    </html>
  );
}

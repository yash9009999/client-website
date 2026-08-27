import { AreasPreview } from "@/components/sections/areas-preview";
import { DomesticCommercial } from "@/components/sections/domestic-commercial";
import { EmergencyCTA } from "@/components/sections/emergency-cta";
import { FAQPreview } from "@/components/sections/faq-preview";
import { FinalCTA } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { ServiceProcess } from "@/components/sections/service-process";
import { ServicesPreview } from "@/components/sections/services-preview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function Home() { return <><Hero /><ServicesPreview /><WhyChooseUs /><ServiceProcess /><DomesticCommercial /><EmergencyCTA /><AreasPreview /><FAQPreview /><FinalCTA /></>; }

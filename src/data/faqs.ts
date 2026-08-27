import type { FAQ } from "@/types";

export type FAQItem = FAQ & { id: string; category: string; serviceSlug?: string };

export const faqs: FAQItem[] = [
  { id: "services", category: "General", question: "What services does Profix Innovation provide?", answer: "Profix Innovation provides glazing, locksmith, plumbing, gas and heating, electrical and pest-control service options." },
  { id: "domestic", category: "General", question: "Do you provide domestic services?", answer: "The service structure supports domestic property requirements. Share your details so the requirement can be understood." },
  { id: "commercial", category: "General", question: "Do you provide commercial services?", answer: "The service structure supports commercial property requirements, subject to the nature and location of the work." },
  { id: "contact", category: "General", question: "How can I contact Profix Innovation?", answer: "Email info@profixinnovation.co.uk or use the contact page to send an enquiry." },
  { id: "multiple", category: "Quotes & Enquiries", question: "Can I request more than one service?", answer: "Yes. Include all relevant requirements in your quote enquiry so they can be considered together." },
  { id: "quote", category: "Quotes & Enquiries", question: "How do I request a quote?", answer: "Use the request-a-quote form and provide your contact details, property information, selected service and description of the issue." },
  { id: "information", category: "Quotes & Enquiries", question: "What information should I provide?", answer: "A clear description, postcode, property type and relevant service details are useful. You can also add optional timing information and photos." },
  { id: "photos", category: "Quotes & Enquiries", question: "Can I upload photos with my enquiry?", answer: "Yes. The quote form accepts up to five JPG, PNG or WEBP images, subject to the displayed file-size limit." },
  { id: "glazing-services", category: "Glazing", serviceSlug: "glazing", question: "What glazing services do you provide?", answer: "Glazing options include replacement glazing, window repair, emergency glazing, boarding up, cat flap installation and shop-front glass support." },
  { id: "glazing-replacement", category: "Glazing", serviceSlug: "glazing", question: "Can I request replacement glazing?", answer: "Yes. Replacement glazing requirements can be discussed through the glazing service page and quote form." },
  { id: "locksmith-services", category: "Locksmith", serviceSlug: "locksmith", question: "What locksmith services do you provide?", answer: "Locksmith options include emergency locksmith support, lock repair and replacement, locked-out assistance, door lock installation and gaining entry." },
  { id: "plumbing-services", category: "Plumbing", serviceSlug: "plumbing", question: "Can I request help with a leak?", answer: "Yes. Leak detection and repair is available as a plumbing enquiry option. Describe the issue and property context in your request." },
  { id: "heating-services", category: "Gas & Heating", serviceSlug: "gas-heating", question: "Can I request boiler-related work?", answer: "Yes. Boiler repair, installation and servicing are listed as gas and heating service options. The requirement should be assessed before next steps are agreed." },
  { id: "electrical-services", category: "Electrical", serviceSlug: "electrical", question: "Can I request an electrical repair?", answer: "Yes. Electrical repairs and other electrical service options can be selected through the enquiry form." },
  { id: "pest-services", category: "Pest Control", serviceSlug: "pest-control", question: "What types of pest issues can I enquire about?", answer: "Pest-control options include ants, bed bugs, cockroaches, fleas, mice, rats, wasps, birds, flies and emergency pest-control enquiries." },
];

export const faqCategories = ["All", "General", "Glazing", "Locksmith", "Plumbing", "Gas & Heating", "Electrical", "Pest Control", "Quotes & Enquiries"];

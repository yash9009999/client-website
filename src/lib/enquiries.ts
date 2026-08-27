import { services, getSubServiceBySlug } from "@/data/services";
import type { Service, SubService } from "@/types";

export const allowedImageTypes = ["image/jpeg", "image/png", "image/webp"] as const;
export const maxFileSize = 5 * 1024 * 1024;
export const maxFiles = 5;

export type QuoteInput = {
  type: "quote";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;
  subService: string;
  propertyType: string;
  urgency: string;
  preferredDate: string;
  preferredTime: string;
  issue: string;
  additionalInformation: string;
  website?: string;
};

export type ContactInput = {
  type: "contact";
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website?: string;
};

export type ValidatedEnquiry = {
  input: QuoteInput | ContactInput;
  service?: Service;
  subService?: SubService;
  files: File[];
};

const clean = (value: FormDataEntryValue | null) => typeof value === "string" ? value.trim() : "";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ukPhonePattern = /^(?:\+44\s?|0)(?:\d[\s-]?){9,10}$/;
const postcodePattern = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;
const propertyTypes = ["residential", "commercial", "landlord", "property-management", "other"];
const urgencies = ["standard", "urgent", "emergency"];
const subjects = ["general", "service", "commercial", "existing", "other"];

export function validateFiles(entries: FormDataEntryValue[]) {
  const files = entries.filter((entry): entry is File => entry instanceof File && entry.size > 0);
  if (files.length > maxFiles) throw new Error("You can upload up to 5 images.");
  for (const file of files) {
    if (!allowedImageTypes.includes(file.type as typeof allowedImageTypes[number])) throw new Error("This file type isn't supported.");
    if (file.size > maxFileSize) throw new Error("Each image must be 5 MB or smaller.");
  }
  return files;
}

export function validateEnquiry(formData: FormData): ValidatedEnquiry {
  const type = clean(formData.get("type"));
  const files = validateFiles(formData.getAll("photos"));
  if (clean(formData.get("website"))) throw new Error("Unable to submit this enquiry.");

  if (type === "quote") {
    const input: QuoteInput = {
      type: "quote", firstName: clean(formData.get("firstName")), lastName: clean(formData.get("lastName")), email: clean(formData.get("email")), phone: clean(formData.get("phone")), postcode: clean(formData.get("postcode")).toUpperCase(), service: clean(formData.get("service")), subService: clean(formData.get("subService")), propertyType: clean(formData.get("propertyType")), urgency: clean(formData.get("urgency")) || "standard", preferredDate: clean(formData.get("preferredDate")), preferredTime: clean(formData.get("preferredTime")), issue: clean(formData.get("issue")), additionalInformation: clean(formData.get("additionalInformation")), website: clean(formData.get("website")),
    };
    if (!input.firstName) throw new Error("Please enter your first name.");
    if (!input.lastName) throw new Error("Please enter your last name.");
    if (!emailPattern.test(input.email)) throw new Error("Please enter a valid email address.");
    if (!ukPhonePattern.test(input.phone)) throw new Error("Please enter a valid UK phone number.");
    if (!postcodePattern.test(input.postcode)) throw new Error("Please enter a valid UK postcode.");
    const service = services.find((item) => item.slug === input.service);
    const subService = service && getSubServiceBySlug(service.slug, input.subService);
    if (!service) throw new Error("Please select a service.");
    if (!subService) throw new Error("Please select a sub-service.");
    if (!propertyTypes.includes(input.propertyType)) throw new Error("Please select a property type.");
    if (!urgencies.includes(input.urgency)) throw new Error("Please select a valid urgency.");
    if (input.preferredDate && input.preferredDate < new Date().toISOString().slice(0, 10)) throw new Error("Please choose a future preferred date.");
    if (!input.issue || input.issue.length > 2000) throw new Error("Please describe the issue in 2,000 characters or fewer.");
    if (!formData.get("consent")) throw new Error("Please confirm that we may use your information to respond.");
    return { input, service, subService, files };
  }

  if (type === "contact") {
    const input: ContactInput = { type: "contact", name: clean(formData.get("name")), email: clean(formData.get("email")), phone: clean(formData.get("phone")), subject: clean(formData.get("subject")), message: clean(formData.get("message")), website: clean(formData.get("website")) };
    if (!input.name) throw new Error("Please enter your name.");
    if (!emailPattern.test(input.email)) throw new Error("Please enter a valid email address.");
    if (input.phone && !ukPhonePattern.test(input.phone)) throw new Error("Please enter a valid UK phone number.");
    if (!subjects.includes(input.subject)) throw new Error("Please select a subject.");
    if (!input.message || input.message.length > 2000) throw new Error("Please enter a message in 2,000 characters or fewer.");
    if (!formData.get("consent")) throw new Error("Please confirm that we may use your information to respond.");
    return { input, files };
  }
  throw new Error("Unable to submit this enquiry.");
}

export function createReference() {
  return `PFX-${new Date().getFullYear()}-${crypto.randomUUID().replace(/-/g, "").slice(0, 6).toUpperCase()}`;
}

export function displayValue(value: string) {
  return value.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()) || "Not provided";
}

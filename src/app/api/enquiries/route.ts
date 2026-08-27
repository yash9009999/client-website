import { NextResponse } from "next/server";
import { createReference, displayValue, validateEnquiry, type ValidatedEnquiry } from "@/lib/enquiries";

export const runtime = "nodejs";

function textContent(enquiry: ValidatedEnquiry, reference: string) {
  if (enquiry.input.type === "contact") return `New Contact Enquiry\n\nReference: ${reference}\nName: ${enquiry.input.name}\nEmail: ${enquiry.input.email}\nPhone: ${enquiry.input.phone || "Not provided"}\nSubject: ${displayValue(enquiry.input.subject)}\nMessage:\n${enquiry.input.message}`;
  return `New Website Enquiry\n\nReference: ${reference}\nCustomer: ${enquiry.input.firstName} ${enquiry.input.lastName}\nEmail: ${enquiry.input.email}\nPhone: ${enquiry.input.phone}\nPostcode: ${enquiry.input.postcode}\nService: ${enquiry.service?.name}\nSub-service: ${enquiry.subService?.name}\nProperty type: ${displayValue(enquiry.input.propertyType)}\nUrgency: ${displayValue(enquiry.input.urgency)}\nPreferred date: ${enquiry.input.preferredDate || "Not provided"}\nPreferred time: ${enquiry.input.preferredTime || "Not provided"}\nIssue:\n${enquiry.input.issue}\nAdditional information:\n${enquiry.input.additionalInformation || "Not provided"}`;
}

async function sendEmail(enquiry: ValidatedEnquiry, reference: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL || "info@profixinnovation.co.uk";
  if (!apiKey) throw new Error("Email provider is not configured.");
  const subject = enquiry.input.type === "contact" ? `New Contact Enquiry - ${reference}` : `New Website Enquiry - ${enquiry.service?.name} - ${enquiry.input.postcode}`;
  const body = textContent(enquiry, reference);
  const attachments = await Promise.all(enquiry.files.map(async (file) => ({ filename: file.name, content: Buffer.from(await file.arrayBuffer()).toString("base64") })));
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: process.env.EMAIL_FROM || "Profix Website <onboarding@resend.dev>", to: [recipient], reply_to: [enquiry.input.email], subject, text: body, attachments }) });
  if (!response.ok) throw new Error("Email provider rejected the enquiry.");
  const serviceName = enquiry.service?.name ?? "your enquiry";
  const confirmation = `Thank you for contacting Profix Innovation.\n\nWe have received your enquiry about ${serviceName}.\n\nReference: ${reference}\n\nWe will review the information provided. This email confirms receipt only and does not confirm an appointment.\n\nContact: info@profixinnovation.co.uk`;
  try {
    const confirmationResponse = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: process.env.EMAIL_FROM || "Profix Website <onboarding@resend.dev>", to: [enquiry.input.email], subject: "We Received Your Profix Innovation Enquiry", text: confirmation }) });
    if (!confirmationResponse.ok) console.error("Customer confirmation email failed.");
  } catch { console.error("Customer confirmation email failed."); }
  return body;
}

export async function POST(request: Request) {
  try {
    const enquiry = validateEnquiry(await request.formData());
    const reference = createReference();
    await sendEmail(enquiry, reference);
    return NextResponse.json({ ok: true, reference });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to submit this enquiry.";
    const validationMessages = ["Please ", "You can upload", "Each image", "This file", "Unable to submit", "future preferred", "2,000", "confirm"];
    const isValidation = validationMessages.some((prefix) => message.startsWith(prefix));
    if (!isValidation) console.error("Enquiry submission failed:", message);
    return NextResponse.json({ ok: false, error: isValidation ? message : "We couldn't send your enquiry. Please check your details and try again." }, { status: isValidation ? 400 : 500 });
  }
}

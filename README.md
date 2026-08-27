# Profix Innovation

Profix Innovation property-services website built with Next.js.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Project structure

- `src/app` — routes, metadata, global styles, loading/error states
- `src/components` — shared layout, UI and page sections
- `src/data` — central business configuration and service hierarchy
- `src/lib` — metadata helper and shared utilities
- `src/types` — domain types for configuration, navigation, FAQs and services

## Business configuration

Update `src/data/site.ts` for business information, contact details and navigation. Update `src/data/services.ts` for top-level services and future sub-services. The homepage and service routes both read from the service data, so categories are not duplicated in components.

## Enquiry email configuration

Copy `.env.example` to `.env.local` for local configuration. Production deployments require a Resend API key and a verified sender address:

```env
RESEND_API_KEY=
CONTACT_EMAIL=info@profixinnovation.co.uk
EMAIL_FROM=
```

The quote and contact forms fail safely when email delivery is not configured.

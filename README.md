# Profix Innovation

Phase 1 foundation for the Profix Innovation property-services website.

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

## Future phases

Later phases will add individual service and sub-service pages, quote/contact forms, commercial and service-area content, FAQs, advice/blog content, SEO schema, analytics, and production integrations.

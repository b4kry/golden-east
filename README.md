# Golden East Agricultural Development

B2B quote request platform for agricultural fertilizers and plant nutrition products. Bilingual (Arabic/English) corporate website built with Next.js 16.

## Overview

This platform connects agricultural businesses with premium plant nutrition solutions through a streamlined quote request system. Users browse the product catalog, build a quote by selecting products with desired quantities, submit their contact information, and a sales team member follows up.

This is **not** an e-commerce site — there is no pricing, no payment, and no checkout. All transactions are handled offline by the sales team.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | Framework (App Router, SSR, API routes) |
| **React 19** | UI library |
| **TypeScript 5** | Type safety (strict mode) |
| **Tailwind CSS v4** | Styling (utility-first, CSS-first config) |
| **shadcn/ui** | Accessible UI primitives (radix-nova style) |
| **Radix UI** | Headless component primitives |
| **Lucide React** | Icon library |

## Project Structure

```
app/                  — Next.js App Router (routes, API, layouts)
  [locale]/           — Locale-scoped pages (en, ar)
  api/                — API routes (contact, quote)
components/           — UI components by role
  layout/             — Structural (navbar, footer, container)
  sections/           — Page sections (hero, about, products)
  shared/             — Reusable (product-card)
  ui/                 — shadcn primitives (button, sheet)
  quote/              — Quote system (button, cart)
contexts/             — React contexts (locale, quote)
data/                 — Business data (company, products, navigation)
lib/                  — Utilities (i18n, cn)
messages/             — JSON translations (en, ar)
proxy.ts              — Locale detection and redirect
public/               — Static assets
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Internationalization

The site supports English and Arabic with locale-based routing:

- `/en` — English
- `/ar` — Arabic

Language is detected automatically from the browser's `Accept-Language` header. Users can switch languages via the toggle in the navigation bar. Arabic pages render with RTL layout.

## Documentation

| File | Contents |
|------|----------|
| `PROJECT.md` | Project vision, goals, philosophy |
| `ARCHITECTURE.md` | Technical architecture, data flow, routing |
| `ROADMAP.md` | Development phases and milestones |
| `DECISIONS.md` | Architectural decision records |

## Deployment

Deployed on Netlify. Push to the main branch to trigger automatic deployment.

```bash
# Preview deployment
netlify deploy

# Production deployment
netlify deploy --prod
```

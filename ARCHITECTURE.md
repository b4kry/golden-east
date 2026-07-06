# Architecture

## Folder Structure

```
golden-east/
├── app/
│   ├── [locale]/                    ← Locale-scoped routes
│   │   ├── layout.tsx               ← Root layout (html, body, providers)
│   │   ├── page.tsx                 ← Home page
│   │   ├── about/page.tsx           ← About page
│   │   ├── products/page.tsx        ← Product listing
│   │   ├── products/[slug]/page.tsx ← Product detail
│   │   ├── contact/page.tsx         ← Contact form
│   │   ├── quote/page.tsx           ← Quote cart
│   │   ├── not-found.tsx            ← 404 page
│   │   └── error.tsx                ← Error boundary
│   ├── api/
│   │   ├── contact/route.ts         ← Contact form submission
│   │   └── quote/route.ts           ← Quote submission
│   ├── globals.css                  ← Global styles + design tokens
│   └── favicon.ico
│
├── components/
│   ├── layout/
│   │   ├── container.tsx            ← Max-width content wrapper
│   │   ├── footer.tsx               ← Site footer
│   │   ├── navbar.tsx               ← Navigation bar (client)
│   │   └── locale-switcher.tsx      ← Language toggle (client)
│   ├── sections/
│   │   ├── hero.tsx                 ← Home hero section
│   │   ├── about.tsx                ← About section
│   │   ├── products.tsx             ← Featured products grid
│   │   ├── why-choose-us.tsx        ← Why choose us section
│   │   ├── section.tsx              ← Section wrapper + header
│   │   ├── cta.tsx                  ← Call-to-action section
│   │   └── features.tsx             ← Features section
│   ├── shared/
│   │   └── product-card.tsx         ← Product card (client)
│   ├── ui/                          ← shadcn/ui primitives
│   │   ├── button.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── separator.tsx
│   │   └── sheet.tsx
│   └── quote/
│       ├── quote-button.tsx         ← Add-to-quote button (client)
│       └── quote-cart.tsx           ← Quote cart + form (client)
│
├── contexts/
│   ├── locale-context.tsx           ← Locale provider (client)
│   └── quote-context.tsx            ← Quote state (client, useReducer)
│
├── data/
│   ├── company.ts                   ← Company info (bilingual)
│   ├── navigation.ts               ← Navigation items
│   └── products.ts                  ← Product catalog + types
│
├── lib/
│   ├── utils.ts                     ← cn() helper
│   └── i18n.ts                     ← Locale config + dictionary loader
│
├── messages/
│   ├── en.json                      ← English UI strings
│   └── ar.json                      ← Arabic UI strings
│
├── proxy.ts                         ← Locale detection + redirect
├── public/                          ← Static assets
└── middleware.ts (deprecated)       ← Use proxy.ts instead
```

## Component Architecture

### Server vs Client Components

The project maximizes server components. Only interactive elements are client components:

| Component | Type | Reason |
|-----------|------|--------|
| Navbar | Client | `usePathname()`, `useLocale()`, `useQuote()` |
| LocaleSwitcher | Client | `usePathname()`, `useLocale()` |
| ProductCard | Client | `useState` for image error handling |
| QuoteButton | Client | `useQuote()` |
| QuoteCart | Client | `useState`, `useQuote()`, form interactions |
| All sections | Server | Static content, no interactivity |
| All data files | — | Plain TypeScript, no React |
| Layouts | Server | Static shell, no interactivity |

### Component Patterns

- **Named function declarations** (`function Foo()`) — better stack traces
- **Named exports** (`export { Foo }`) — consistent import syntax
- **Composition** — `Section` wraps `Container`, `ProductCard` composes `CardVisual` and `CompositionVisual`
- **No business data in components** — all content from `data/` or `messages/`

## Routing

### Locale-based Routing

```
/en          → English home
/ar          → Arabic home
/en/about    → English about
/ar/about    → Arabic about
/en/products → English products
/ar/products → Arabic products
```

### Proxy (Middleware)

`proxy.ts` at the project root handles locale detection:

1. Checks `NEXT_LOCALE` cookie (user preference)
2. Falls back to `Accept-Language` header
3. Falls back to `"en"` default
4. Redirects unprefixed paths (e.g., `/about` → `/en/about`)

### Static Generation

All pages use `generateStaticParams` to pre-render both locales at build time:

```ts
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
```

Product detail pages (`/[locale]/products/[slug]`) are dynamically rendered on demand.

## Localization Architecture

### Two Data Sources

1. **Business data** (`data/company.ts`, `data/products.ts`): Bilingual fields with `*Ar`/`*En` suffixes. Components select the appropriate field based on active locale.

2. **UI strings** (`messages/en.json`, `messages/ar.json`): Interface text (button labels, section headings, form labels). Loaded via `getDictionary(locale)`.

### Dictionary Loading

```ts
// lib/i18n.ts
const dictionaries = {
  en: () => import("@/messages/en.json").then((m) => m.default),
  ar: () => import("@/messages/ar.json").then((m) => m.default),
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]()
}
```

### RTL/LTR

The layout's `<html>` tag sets `dir` attribute based on locale. CSS includes `[dir="rtl"]` overrides.

## Data Flow

```
Static build time:
  data/*.ts ──import──▶ Server Components ──render──▶ Static HTML

  messages/*.json ──import──▶ getDictionary() ──▶ Components

Runtime (client):
  QuoteContext (useReducer + localStorage) ◀──▶ QuoteButton / QuoteCart

  LocaleContext ◀──▶ Navbar / LocaleSwitcher / ProductCard

API calls:
  Contact Form ──POST──▶ /api/contact ──log──▶ Console
  Quote Submit ──POST──▶ /api/quote ──log──▶ Console
```

## State Management

### Locale State

- **Server**: Locale comes from route `params`
- **Client**: `LocaleContext` provides locale to all client components
- **Persistence**: Locale is part of the URL path

### Quote State

- **Library**: React `useReducer` (no external dependencies)
- **Persistence**: `localStorage` under key `golden-east-quote`
- **Actions**: ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, CLEAR, LOAD
- **Scope**: Per-browser-session; not shared across devices

## Quote System Architecture

```
Browse Products
  │
  ├── [Add to Quote] ──▶ QuoteContext.addItem(product, quantity)
  │
  ▼
Quote Cart (/[locale]/quote)
  │
  ├── Update quantities
  ├── Remove items
  │
  ▼
Customer Information Form
  │
  ├── Name, Email, Phone, Company, Notes
  │
  ▼
Submit ──POST──▶ /api/quote
  │
  ├── Validation (items required, customer info required)
  ├── Log to server console
  └── Response { success: true/false }
       │
       ├── Success → Clear cart, show confirmation
       └── Error → Show error message
```

## API Architecture

### POST /api/quote

Request:
```json
{
  "items": [{ "product": { ... }, "quantity": 2 }],
  "customer": { "name": "...", "email": "...", "phone": "...", "company": "...", "notes": "..." }
}
```

Response:
```json
{ "success": true, "message": "Quote request submitted successfully" }
```

### POST /api/contact

Accepts both `application/json` and `application/x-www-form-urlencoded`.

Request (form):
```
name=...&email=...&phone=...&company=...&message=...
```

Response:
```json
{ "success": true, "message": "Message received successfully" }
```

## Deployment Architecture

- **Platform**: Vercel (via `vercel.json`)
- **Build Command**: `next build`
- **Output**: Static HTML pages + serverless API functions
- **Static Generation**: All locale pages pre-rendered at build
- **Dynamic Routes**: Product detail pages render on demand
- **Locale Redirect**: Vercel Edge Network handles proxy.ts locale detection

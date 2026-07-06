# Golden East Agricultural Development

## Project Vision

A digital platform that connects agricultural businesses with premium plant nutrition solutions through a streamlined quote request system. The platform serves as the digital storefront for Golden East Agricultural Development, enabling B2B customers to browse products, request quotes, and initiate sales conversations without requiring e-commerce checkout or payment processing.

## Project Goals

- Present the company's product catalog with detailed specifications (composition, benefits, application rates)
- Enable customers to request quotes for specific products with desired quantities
- Capture customer information to route qualified leads to the sales team
- Support both English and Arabic audiences with proper RTL/LTR layout switching
- Provide a fast, static-generated browsing experience
- Maintain strict separation between business data and UI rendering

## Business Type

B2B agricultural input supplier specializing in fertilizers and plant nutrition products. The company operates in Egypt and serves agricultural businesses.

## User Types

- **Browsers**: Visitors exploring products and company information
- **Prospects**: Customers actively building a quote request
- **Submitters**: Customers who submit a quote request with their contact details
- **Sales Team**: Internal users who receive and process submitted quote requests (off-platform — via email)

## Main Features

- **Product Catalog**: Browse products with composition breakdowns, benefits, and application details
- **Quote Builder**: Add products with quantities to a persistent quote cart
- **Quote Submission**: Submit quote requests with customer information to the sales team
- **Bilingual Interface**: Full Arabic and English support with locale-based routing
- **RTL/LTR Layout**: Automatic layout direction based on selected language
- **Contact Form**: Direct inquiry submission for general questions
- **Company Information**: About page, contact details, and company story

## Non-Goals

- **No e-commerce**: No product prices, no payment processing, no checkout
- **No user accounts**: No registration, login, or user profiles
- **No inventory management**: Product availability is handled off-platform
- **No order tracking**: Order status is communicated by the sales team outside the platform
- **No blog or CMS**: Dynamic content management is not required at this stage
- **No analytics dashboard**: Sales team workflows are handled externally

## Folder Philosophy

The project follows a flat-by-type folder structure under `app/` for routes and a feature-grouped structure under `components/`.

```
data/           — All business data (company info, products, navigation)
components/     — UI components grouped by role (layout, sections, shared, ui)
  layout/       — Structural components (navbar, footer, container)
  sections/     — Page section components (hero, about, products)
  shared/       — Reusable cross-page components (product-card)
  ui/           — Primitive UI components (button, sheet, separator)
  quote/        — Quote system components (button, cart)
app/            — Next.js App Router (routes, API, layout, pages)
lib/            — Utilities and configuration (i18n, cn())
contexts/       — React contexts (locale, quote)
messages/       — JSON translation files (en, ar)
public/         — Static assets (images, SVGs)
```

## Data Philosophy

All business data resides exclusively in `data/` files as typed TypeScript constants. Components receive data as props or import from `data/` — they never contain business logic or hardcoded content. This ensures:

- Data can be swapped for a CMS or API without touching components
- Components remain purely presentational
- TypeScript provides compile-time validation of data structure
- The system is AI-agnostic — no knowledge is hidden in conversation history

## Asset Philosophy

All static assets live in `public/`. Images are referenced by their exact path. Missing assets are handled with graceful fallbacks (composition visualization for missing product images). No placeholder or generated filenames are used.

## AI Agnostic Philosophy

The repository must be understandable without chat history. All project knowledge is documented in `ARCHITECTURE.md`, `DECISIONS.md`, `PROJECT.md`, and `AGENTS.md`. Business rules, architectural decisions, and development workflows are explicitly documented so any developer or AI agent can onboard from the repository alone.

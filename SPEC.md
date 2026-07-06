# Product Specification

**Version**: 1.0
**Last Updated**: 2026-07-01

---

## Product Overview

Golden East Agricultural Development is a B2B quote request platform for agricultural fertilizers and plant nutrition products. It serves as the company's digital storefront, enabling prospective customers to browse the product catalog, build a quote request by selecting products with desired quantities, and submit their contact information for the sales team to follow up.

### What It Is

- A bilingual (Arabic/English) corporate website for Golden East Agricultural Development
- A product catalog with detailed specifications (composition, benefits, application rates, suitable crops)
- A quote request system that captures customer intent and contact details
- A contact form for general inquiries
- An information resource about the company (mission, vision, story, locations)

### What It Is NOT

- **Not an e-commerce platform**: No product prices, no shopping cart with payment, no checkout flow
- **Not a CRM**: No customer account management, no order history, no lead scoring
- **Not an inventory system**: Product availability is managed off-platform
- **Not a content management system**: Content changes require a code deployment
- **Not a multi-tenant platform**: Serves a single company
- **Not a mobile app**: Responsive web application only

---

## Business Model

The business operates on a B2B lead generation model. The website captures prospective customers' interest and routes qualified leads to the sales team.

```
                      ┌─────────────────┐
                      │    Visitor      │
                      │  (Anonymous)    │
                      └────────┬────────┘
                               │
                               ▼
                      ┌─────────────────┐
                      │  Browse Products │
                      │  (Public Catalog)│
                      └────────┬────────┘
                               │
                               ▼
                      ┌─────────────────┐
                      │  Add to Quote   │
                      │  Select Quantity │
                      └────────┬────────┘
                               │
                               ▼
                      ┌─────────────────┐
                      │   Quote Cart    │
                      │  Review Items   │
                      └────────┬────────┘
                               │
                               ▼
                      ┌─────────────────┐
                      │  Customer Info  │
                      │  Name / Email   │
                      │  Phone / Company│
                      │  Notes          │
                      └────────┬────────┘
                               │
                               ▼
                      ┌─────────────────┐
                      │  Submit Quote   │
                      │  POST /api/quote│
                      └────────┬────────┘
                               │
                               ▼
                      ┌─────────────────┐
                      │   Sales Team    │
                      │  Email Alert    │
                      └────────┬────────┘
                               │
                               ▼
                      ┌─────────────────┐
                      │ Customer Follow-│
                      │ up (Phone/Email)│
                      └─────────────────┘
```

### Revenue Model

- No online transactions
- Revenue generated through offline sales completed by the sales team
- The website qualifies leads; the sales team closes deals

---

## User Roles

### Visitor (Anonymous)

- Can browse all public pages
- Can view product details
- Can add products to the quote cart
- Can submit a quote request
- No authentication required

### Customer (Prospect)

- A visitor who has submitted a quote request
- Receives follow-up from the sales team
- No account or login on the platform
- Communication happens via phone/email outside the platform

### Sales Team (Internal)

- Receives quote request notifications via email
- Follows up with customers by phone or email
- Operates entirely outside the platform
- No admin interface within the application

### Administrator (Future)

- Would manage product catalog content
- Would view submitted quotes
- Would manage company information
- Not implemented in current version

---

## Website Structure

```
/                          → Redirects to /{locale}
/{locale}                  → Home page (Hero, About, Products, Why Choose Us)
/{locale}/about            → About the company
/{locale}/products         → Product listing (all products)
/{locale}/products/[slug]  → Product detail (composition, benefits, application)
/{locale}/quote            → Quote cart + submission form
/{locale}/contact          → Contact form + company contact info
                             → 404 page (any unmatched route)
/api/contact               → Contact form submission endpoint
/api/quote                 → Quote submission endpoint
```

### Page Details

| Page | Layout | Sections | Interactivity |
|------|--------|----------|---------------|
| Home | Full-width header + content | Hero, About (summary), Products (featured), Why Choose Us | Quote buttons on product cards |
| About | Centered content | Company info (extended), Contact cards | None |
| Products | Content grid | Product cards, filter (future) | Quote buttons |
| Product Detail | Two-column (image + content) | Image, specs, benefits, crops, actions | Quote button, Brochure download |
| Quote | Single column | Item list + customer form | Add/remove items, update qty, submit |
| Contact | Two-column (info + form) | Address, Phone, Email, Form | Form submission |

---

## Functional Requirements

### Core (Required for MVP)

| ID | Requirement | Status |
|----|-------------|--------|
| F1 | Display company information (name, tagline, description, location, contact) | ✅ |
| F2 | Display product catalog with composition, benefits, application, crops | ✅ |
| F3 | Browse products in a grid layout | ✅ |
| F4 | View individual product details on a dedicated page | ✅ |
| F5 | Add products to a quote cart with quantity selection | ✅ |
| F6 | View quote cart with item list and quantities | ✅ |
| F7 | Update product quantities in the quote cart | ✅ |
| F8 | Remove products from the quote cart | ✅ |
| F9 | Submit a quote request with customer contact information | ✅ |
| F10 | Submit a general contact form inquiry | ✅ |
| F11 | Support English and Arabic languages | ✅ |
| F12 | Automatic locale detection (Accept-Language header) | ✅ |
| F13 | Manual locale switching via UI toggle | ✅ |
| F14 | RTL layout for Arabic, LTR for English | ✅ |
| F15 | Responsive design (mobile, tablet, desktop) | ✅ |
| F16 | Static generation for all content pages | ✅ |
| F17 | Graceful image error fallback (composition visualization) | ✅ |
| F18 | 404 page for unmatched routes | ✅ |
| F19 | Error boundary for runtime errors | ✅ |

### Important (High Priority)

| ID | Requirement | Status |
|----|-------------|--------|
| F20 | Email notification for quote submissions | ❌ |
| F21 | Email notification for contact form submissions | ❌ |
| F22 | Open Graph meta tags (title, description, image) | ❌ |
| F23 | JSON-LD structured data (Organization, Product) | ❌ |
| F24 | Sitemap.xml for search engines | ❌ |
| F25 | Robots.txt for crawler guidance | ❌ |
| F26 | Skip-to-content accessibility link | ❌ |
| F27 | aria-label on all navigation landmarks | ❌ |
| F28 | Product image uploads to public/products/ | ❌ |
| F29 | Company data population (email, social, mission, vision, story) | ❌ |
| F30 | Product catalog expansion (10+ products) | ❌ |
| F31 | Loading states for dynamic routes | ❌ |
| F32 | Proper form validation error messages (client + server) | ❌ |

### Future (Post-MVP)

| ID | Requirement | Priority |
|----|-------------|----------|
| F33 | Product filtering and search | Medium |
| F34 | Product categories/families | Medium |
| F35 | Product comparison tool | Low |
| F36 | Customer account with quote history | Medium |
| F37 | Admin dashboard for managing products and viewing quotes | High |
| F38 | Image gallery on product detail pages | Low |
| F39 | Video content (product demos, testimonials) | Low |
| F40 | Blog or news section | Low |
| F41 | FAQ section | Low |
| F42 | Testimonial carousel | Low |
| F43 | Dark mode toggle | Low |
| F44 | WhatsApp click-to-chat integration | Medium |
| F45 | Live chat support | Low |
| F46 | Inventory availability indicators | Medium |
| F47 | ERP/CRM integration (quote data export) | High |
| F48 | Analytics dashboard (quote conversion tracking) | Medium |

---

## Non-Functional Requirements

### Performance

| Requirement | Target |
|-------------|--------|
| Lighthouse Performance score | ≥ 90 |
| First Contentful Paint (FCP) | ≤ 1.5s |
| Largest Contentful Paint (LCP) | ≤ 2.5s |
| Cumulative Layout Shift (CLS) | ≤ 0.1 |
| Time to Interactive (TTI) | ≤ 3.0s |
| Total page weight | ≤ 500 KB (HTML + CSS + JS) |
| Image optimization | WebP format, responsive sizes |
| JavaScript per page | ≤ 100 KB |
| Static page generation | All content pages pre-rendered at build |

### Accessibility

| Requirement | Target |
|-------------|--------|
| WCAG Version | 2.1 Level AA |
| Keyboard navigation | All interactive elements reachable and operable |
| Screen reader support | Semantic HTML, ARIA labels, live regions |
| Color contrast | 4.5:1 for normal text, 3:1 for large text |
| Focus indicators | Visible focus ring on all interactive elements |
| Language attributes | Correct `lang` and `dir` on `<html>` |

### SEO

| Requirement | Target |
|-------------|--------|
| Search engine indexing | All public pages indexable |
| Meta tags | Unique title and description per page |
| Open Graph | og:title, og:description, og:image, og:url per page |
| Structured data | JSON-LD for Organization and Product |
| Sitemap | Dynamic sitemap.xml covering all locale pages |
| Robots.txt | Allow all crawlers, point to sitemap |
| Canonical URLs | Self-referencing canonical per page |
| HTTP status codes | 200 for valid pages, 404 for missing, 500 for errors |

### Maintainability

| Requirement | Standard |
|-------------|----------|
| TypeScript strict mode | Enabled — no implicit any |
| ESLint | Enforce consistent style and prevent common errors |
| Component architecture | Server components by default, client only when needed |
| Data layer | All business data in `data/`, never in components |
| Documentation | PROJECT.md, ARCHITECTURE.md, DECISIONS.md, SPEC.md, AGENTS.md |
| Code comments | Minimal — code should be self-documenting |
| File size | Prefer small, focused files over large monolithic ones |

### Scalability

| Dimension | Current State | Future Path |
|-----------|---------------|-------------|
| Pages | 6 pages | Add pages without restructuring |
| Products | 1 (static) | Swap `data/products.ts` for API fetch |
| Locales | 2 | Add more locales via `messages/{locale}.json` |
| API endpoints | 2 | Add more route handlers in `app/api/` |
| Components | ~20 | Add components following existing patterns |
| Team size | 1 developer | Clear conventions enable multiple contributors |

### Security

| Requirement | Implementation |
|-------------|----------------|
| Input validation | Server-side validation on all API endpoints |
| CSP headers | Content-Security-Policy via next.config.ts headers |
| No secrets in code | Environment variables via .env (gitignored) |
| No user authentication | No passwords, no sessions, no tokens stored |
| Rate limiting | Future: implement on API endpoints |
| XSS protection | React's built-in escaping, no dangerouslySetInnerHTML |
| HTTPS | Enforced by Netlify and hosting platform |

### Internationalization

| Requirement | Implementation |
|-------------|----------------|
| Locales | en (English), ar (Arabic) |
| Routing | `/{locale}/...` path prefix |
| Content fields | Bilingual suffix (`nameAr`/`nameEn`) on business data |
| UI strings | JSON dictionary files per locale |
| Layout direction | `dir="rtl"` for Arabic, `dir="ltr"` for English |
| Font support | Arabic-compatible fonts (current: Geist + system fallback) |
| Number formatting | `Intl.NumberFormat` for locale-aware numbers (future) |
| Date formatting | `Intl.DateTimeFormat` for locale-aware dates (future) |

---

## Asset Requirements

### Logo

- **Status**: Not provided
- **Format**: SVG preferred, PNG fallback
- **Location**: `public/logo.svg`
- **Usage**: Navbar brand link, potential OG image
- **Fallback**: Company name rendered as text

### Product Images

- **Status**: Missing (placeholders used: existing SVG crop icons)
- **Quantity needed**: One per product (10–20 images)
- **Format**: WebP preferred, PNG fallback
- **Dimensions**: 1200×800px (3:2 aspect ratio)
- **Location**: `public/products/{slug}.webp`
- **Fallback**: Composition visualization bar chart

### Product PDFs (Brochures)

- **Status**: Not provided
- **Quantity needed**: One per product (optional)
- **Location**: `public/docs/{slug}.pdf`

### Company Images

- **Status**: 1 image exists (`public/ChatGPT Image Jun 24, 2026, 04_21_07 AM.png`)
- **Location**: `public/images/`
- **Uses**: Hero section background, about section

### Icons

- **Library**: Lucide React (SVG icons)
- **Coverage**: Navigation, actions, section accents
- **Custom SVGs**: `public/products/*.svg` (crop illustrations — cotton, dates, oranges, wheat)

---

## Data Requirements

### `data/company.ts`

Owns all company-level information:

- Company name (bilingual)
- Tagline (bilingual)
- Description (bilingual)
- Location (address, city, country)
- Phone numbers (array)
- Email address
- Website URL
- Social media links
- About section content (mission, vision, story, stats)
- Why Choose Us items (array of title, description, icon key)

**Dependencies**: None — standalone data object.

### `data/products.ts`

Owns the product catalog:

- Product interface definition (`Product`, `CompositionItem`)
- Products array with complete specifications
- Bilingual name and description
- Composition breakdown (name + value pairs)
- Benefits list
- Application rate
- Suitable crops
- Image path
- Brochure path (optional)
- Metadata (featured, heroProduct, sortOrder, status)

**Dependencies**: None — standalone data with self-contained types.

### `data/navigation.ts`

Owns the navigation menu structure:

- Array of navigation items
- Each item has `label` (display text) and `href` (path)

**Dependencies**: Should work alongside `messages/{locale}.json` for locale-aware labels in future iterations.

### `messages/{locale}.json`

Owns all UI-facing text strings:

- Navigation labels
- Section headings and descriptions
- Button text
- Form labels and validation messages
- Error and success messages
- Footer text
- Alt text and ARIA labels

**Dependencies**: None — standalone translation files.

---

## Future Expansion

### CMS Integration

When the company needs non-developers to update products and content, the static `data/` files would be replaced with a headless CMS (e.g., Strapi, Sanity, Contentful). The component layer would remain unchanged — only the data import layer would be swapped.

### CRM Integration

Quote submissions could be pushed to a CRM (e.g., HubSpot, Salesforce) via API instead of email. This would enable lead tracking, scoring, and automated follow-up sequences.

### Admin Dashboard

A password-protected admin section (`/admin`) could provide:

- Product management (CRUD)
- Quote request viewer
- Company info editor
- Analytics overview

### Analytics Integration

- **Current**: No analytics
- **Near-term**: Privacy-respecting analytics (Plausible, Umami)
- **Long-term**: Full conversion funnel tracking (visit → browse → quote → submit)

### Inventory Integration

Product availability could be displayed by integrating with the company's inventory management system. Products could show "In Stock" / "Low Stock" / "Call for Availability" badges.

### WhatsApp API

A WhatsApp click-to-chat button (using WhatsApp Business API) could be added for immediate customer inquiries, particularly important for the Egyptian market where WhatsApp is the primary business communication channel.

### ERP Integration

For larger enterprises, quote data could be pushed to an ERP system for automatic quotation generation, pricing, and order processing.

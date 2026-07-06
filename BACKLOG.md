# Backlog

> Generated from repository audit. Build: ✅ Pass. Lint: ✅ Pass.
> All tasks are ordered by priority within each tier.

---

## Key

| Mark | Meaning |
|------|---------|
| 🧑‍💻 | Technical task (code/infrastructure change required) |
| 📝 | Business/content task (data entry, copywriting, asset creation) |
| 🔴 | Requires human-provided asset or business information |

---

## P0 — Critical

### Technical Tasks

| ID | Title | Description | Complexity | Dependencies | Files |
|----|-------|-------------|------------|--------------|-------|
| P0-T1 | Email notification for quote submissions | Replace `console.log` in `/api/quote` with real email sending via Resend or SendGrid. Quote requests must reach the sales team. | M | Environment variables (SMTP/API keys) | `app/api/quote/route.ts`, `.env.example` |
| P0-T2 | Email notification for contact submissions | Replace `console.log` in `/api/contact` with real email sending. Contact form inquiries must reach the company. | M | Environment variables (SMTP/API keys) | `app/api/contact/route.ts`, `.env.example` |
| P0-T3 | Configure environment variables | Create `.env.example` with all required vars (email API keys, site URL). Validate at build/startup. | XS | — | `.env.example`, `next.config.ts` |

### Business / Content Tasks

| ID | Title | Description | Complexity | Dependencies | Files |
|----|-------|-------------|------------|--------------|-------|
| P0-B1 | 🔴 Set company email | `company.email` is empty. Provide the real company email address. | XS | — | `data/company.ts` |
| P0-B2 | 🔴 Set company website | `company.website` is empty. Provide the real company URL. | XS | — | `data/company.ts` |
| P0-B3 | 🔴 Populate social media links | `company.social` is empty. Provide LinkedIn and/or Facebook page URLs. | XS | — | `data/company.ts` |
| P0-B4 | 🔴 Write mission statement | `about.mission` is empty. Provide bilingual (Ar/En) mission statement. | S | — | `data/company.ts` |
| P0-B5 | 🔴 Write vision statement | `about.vision` is empty. Provide bilingual (Ar/En) vision statement. | S | — | `data/company.ts` |
| P0-B6 | 🔴 Write company story | `about.story` is empty. Provide bilingual (Ar/En) company history/story (2–5 paragraphs). | M | — | `data/company.ts` |
| P0-B7 | 🔴 Provide company statistics | `about.stats` is empty. Provide key figures (years in business, products, clients, etc.). | S | — | `data/company.ts` |
| P0-B8 | 🔴 Populate Why Choose Us items | `whyChooseUs` is empty. Provide 3–6 reasons with titles, descriptions, and icon mappings. | M | — | `data/company.ts` |
| P0-B9 | 🔴 Expand product catalog | Only 1 product (Best Cal). Add 10–20 real products with complete bilingual data. | XL | — | `data/products.ts` |
| P0-B10 | 🔴 Provide product images | Product cover images are missing (`/products/best-cal/cover.webp` does not exist). Provide real product photos (WebP, 1200×800px) for all products. | XL | P0-B9 (product list) | `public/products/*.webp` |

---

## P1 — High Priority

### Technical Tasks

| ID | Title | Description | Complexity | Dependencies | Files |
|----|-------|-------------|------------|--------------|-------|
| P1-T1 | Add `loading.tsx` for dynamic routes | Product detail pages are dynamic (`/[locale]/products/[slug]`). Add Suspense fallback UI. | XS | — | `app/[locale]/products/[slug]/loading.tsx` |
| P1-T2 | Localize not-found page | 404 page is hardcoded in English. Pass locale and use dictionary strings. | S | — | `app/[locale]/not-found.tsx` |
| P1-T3 | Localize error boundary page | Error page is hardcoded in English. Pass locale and use dictionary strings. | S | — | `app/[locale]/error.tsx` |
| P1-T4 | Add sitemap.xml | Dynamic sitemap covering all locale-prefixed routes. | S | — | `app/sitemap.ts` |
| P1-T5 | Add robots.txt | Allow all crawlers, point to sitemap. | XS | P1-T4 | `app/robots.ts` |
| P1-T6 | Add Open Graph metadata per page | `og:title`, `og:description`, `og:image`, `og:url` on every page via `generateMetadata`. | M | P0-B10 (OG image asset) | `app/[locale]/layout.tsx`, `app/[locale]/page.tsx`, `app/[locale]/about/page.tsx`, `app/[locale]/products/page.tsx`, `app/[locale]/products/[slug]/page.tsx`, `app/[locale]/contact/page.tsx`, `app/[locale]/quote/page.tsx` |
| P1-T7 | Add JSON-LD structured data | Organization + Product schema on appropriate pages. | M | P0-B9 (full product data) | `app/[locale]/layout.tsx`, `app/[locale]/products/[slug]/page.tsx` |
| P1-T8 | Add Content Security Policy headers | CSP via `next.config.ts` headers function to prevent XSS. | M | — | `next.config.ts` |
| P1-T9 | Add skip-to-content accessibility link | First focusable element on every page for keyboard users. | XS | — | `app/[locale]/layout.tsx` |
| P1-T10 | Add `aria-label` to navigation landmarks | Desktop nav, mobile nav, and footer nav are missing `aria-label`. | XS | — | `components/layout/navbar.tsx`, `components/layout/footer.tsx` |
| P1-T11 | Add screen-reader-only text for icon buttons | Cart icon and menu toggle button lack accessible labels. | XS | — | `components/layout/navbar.tsx` |
| P1-T12 | Add company logo | `public/logo.svg` does not exist. Add logo SVG to `public/` and render it in navbar. | S | 🔴 Company logo SVG asset | `public/logo.svg`, `components/layout/navbar.tsx` |
| P1-T13 | Add form validation error messages (client) | Contact and quote forms lack real-time client-side validation feedback. Add inline error messages. | M | — | `app/[locale]/contact/page.tsx`, `components/quote/quote-cart.tsx` |
| P1-T14 | Remove console.log statements from production code | Debug `console.log` calls exist in quote context, quote reducer, quote button, and API routes. Remove or guard behind `process.env.NODE_ENV`. | S | — | `contexts/quote-context.tsx`, `components/quote/quote-button.tsx`, `app/api/quote/route.ts`, `app/api/contact/route.ts` |
| P1-T15 | Add Vercel configuration | `vercel.json` is missing. Create deployment configuration. | XS | — | `vercel.json` |

### Business / Content Tasks

| ID | Title | Description | Complexity | Dependencies | Files |
|----|-------|-------------|------------|--------------|-------|
| P1-B1 | 🔴 Provide company logo SVG | No logo exists. Provide SVG logo for navbar and OG image. | S | — | `public/logo.svg` |
| P1-B2 | 🔴 Provide product brochure PDFs | Brochure download link points to `/products/best-cal/brochure.pdf` which does not exist. Create PDFs per product. | L | P0-B9 | `public/products/*/brochure.pdf` |

---

## P2 — Medium Priority

### Technical Tasks

| ID | Title | Description | Complexity | Dependencies | Files |
|----|-------|-------------|------------|--------------|-------|
| P2-T1 | Set up testing infrastructure | Install Vitest, configure test runner, add first unit tests. | M | — | `vitest.config.ts`, `package.json` |
| P2-T2 | Write unit test for `cn()` utility | Test `clsx` + `tailwind-merge` wrapper. | XS | P2-T1 | `lib/__tests__/utils.test.ts` |
| P2-T3 | Write unit test for `parsePercent()` | Edge cases: empty string, NaN, negative, decimal. | XS | P2-T1 | `components/shared/__tests__/product-card.test.ts` |
| P2-T4 | Write unit test for `quoteReducer` | Test ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, CLEAR, LOAD actions. | S | P2-T1 | `contexts/__tests__/quote-reducer.test.ts` |
| P2-T5 | Write unit test for locale helpers | Test `isLocale()`, `getDictionary()` behavior. | XS | P2-T1 | `lib/__tests__/i18n.test.ts` |
| P2-T6 | Set up Playwright for E2E tests | Install and configure Playwright with locale-aware test structure. | M | P2-T1 | `e2e/`, `playwright.config.ts` |
| P2-T7 | Write E2E test for locale detection & switching | Verify redirect, cookie, manual switch. | S | P2-T6 | `e2e/locale.spec.ts` |
| P2-T8 | Write E2E test for product browsing | Navigate catalog, open detail page. | S | P2-T6 | `e2e/products.spec.ts` |
| P2-T9 | Write E2E test for quote flow | Add items, modify, submit, verify success. | M | P2-T6 | `e2e/quote.spec.ts` |
| P2-T10 | Write E2E test for contact form | Submit with valid/invalid data. | S | P2-T6 | `e2e/contact.spec.ts` |
| P2-T11 | Configure GitHub Actions CI | Lint → Typecheck → Build pipeline. | M | — | `.github/workflows/ci.yml` |
| P2-T12 | Add Husky + lint-staged pre-commit hooks | Run lint and typecheck on staged files before commit. | M | — | `.husky/`, `package.json` |
| P2-T13 | Add focus-visible styles consistently | Ensure all interactive elements have visible focus rings. | S | — | `app/globals.css` |
| P2-T14 | Internationalize navigation labels | Navigation data uses hardcoded labels instead of i18n messages. Switch to message dictionary. | S | — | `data/navigation.ts`, `components/layout/navbar.tsx`, `components/layout/footer.tsx` |
| P2-T15 | Internationalize contact page headings | Contact page has hardcoded "Contact Us", "Address", "Phone", "Email" labels. Use dictionary. | S | — | `app/[locale]/contact/page.tsx` |
| P2-T16 | Internationalize about section headings | About section component has hardcoded English `label`, `title`, `description`. | S | — | `components/sections/about.tsx` |
| P2-T17 | Internationalize product card labels | ProductCard has hardcoded "Composition", "Key Benefits", "Application", "Learn More", "Add to Quote". | S | — | `components/shared/product-card.tsx` |
| P2-T18 | Internationalize footer text | Footer has hardcoded "Navigation", "Contact", "Follow Us". | S | — | `components/layout/footer.tsx` |
| P2-T19 | Internationalize locale switcher labels | LocaleSwitcher component has hardcoded switch labels. | XS | — | `components/layout/locale-switcher.tsx` |
| P2-T20 | Internationalize sections (cta, features) | `cta.tsx` and `features.tsx` have hardcoded English text. | S | — | `components/sections/cta.tsx`, `components/sections/features.tsx` |
| P2-T21 | Add loading states to API forms | Contact form submits via native `<form>` action (full page reload). Add client-side fetch with loading/error/success states. | M | — | `app/[locale]/contact/page.tsx` |
| P2-T22 | Add canonical URLs to metadata | Self-referencing canonical on every page. | S | — | `app/[locale]/layout.tsx` |
| P2-T23 | Add Arabic-compatible font configuration | Geist font only loads Latin subsets. Arabic text may fall back to system default. Configure proper Arabic font (e.g., Noto Naskh Arabic, Tajawal). | M | — | `app/[locale]/layout.tsx` |
| P2-T24 | Optimize product images | Add `next.config.ts` image optimization, serve WebP with responsive sizes. | S | P0-B10 | `next.config.ts` |
| P2-T25 | Add lazy loading for below-the-fold sections | Use `next/dynamic` with `ssr: false` for sections below the fold. | S | — | `app/[locale]/page.tsx` |
| P2-T26 | Add performance monitoring | Integrate Vercel Analytics or privacy-respecting alternative. | S | — | `app/[locale]/layout.tsx`, `next.config.ts` |

---

## P3 — Nice to Have

### Technical Tasks

| ID | Title | Description | Complexity | Dependencies | Files |
|----|-------|-------------|------------|--------------|-------|
| P3-T1 | Add product filtering by category | Allow users to filter the product grid by product category. | M | P0-B9 | `app/[locale]/products/page.tsx`, `components/sections/products.tsx` |
| P3-T2 | Add product search | Quick full-text search across product names and descriptions. | M | P0-B9 | `app/[locale]/products/page.tsx` |
| P3-T3 | Add product categories/families | Group products into logical families with category pages. | L | P0-B9 | `data/products.ts`, `app/[locale]/products/[category]/page.tsx` |
| P3-T4 | Add WhatsApp click-to-chat button | Floating button linking to company WhatsApp (important for Egyptian market). | S | 🔴 Company WhatsApp number | `components/layout/whatsapp-button.tsx`, `app/[locale]/layout.tsx` |
| P3-T5 | Add dark mode toggle | CSS dark theme is defined but has no toggle mechanism. Add switch with localStorage persistence. | M | — | `components/layout/theme-toggle.tsx`, `contexts/theme-context.tsx` |
| P3-T6 | Add product comparison tool | Side-by-side comparison of selected products. | L | P0-B9 | — |
| P3-T7 | Add FAQ section | Static FAQ page with common questions. | M | 🔴 FAQ content | `app/[locale]/faq/page.tsx`, `data/faq.ts` |
| P3-T8 | Add testimonial carousel | Customer testimonials with star ratings and photos. | M | 🔴 Testimonial content | `components/sections/testimonials.tsx`, `data/testimonials.ts` |
| P3-T9 | Add live chat support | Integrate Tawk.to or Crisp chat widget. | M | — | — |
| P3-T10 | Add inventory availability badges | "In Stock" / "Low Stock" / "Call for Availability" on product cards. | M | P0-B9 | `data/products.ts` (add field), `components/shared/product-card.tsx` |
| P3-T11 | Create admin dashboard | Password-protected admin page for managing products and viewing quotes. | XL | — | `app/admin/`, `contexts/auth-context.tsx` |
| P3-T12 | Integrate CRM for quote data export | Push submitted quotes to HubSpot/Salesforce via API. | L | — | `app/api/quote/route.ts` |
| P3-T13 | Add rate limiting on API endpoints | Prevent abuse of `/api/quote` and `/api/contact`. | M | — | `app/api/quote/route.ts`, `app/api/contact/route.ts`, `lib/rate-limit.ts` |
| P3-T14 | Add analytics conversion tracking | Track quote funnel: browse → add → submit. | M | — | — |
| P3-T15 | Add image gallery on product detail | Show all gallery images with lightbox. | S | P0-B10 | `app/[locale]/products/[slug]/page.tsx` |
| P3-T16 | Add blog / news section | Company updates and agricultural articles. | L | 🔴 Content | `app/[locale]/blog/`, `data/posts.ts` |
| P3-T17 | Add cookie consent banner | GDPR-compliant cookie notice if analytics are added. | S | Analytics integration | `components/layout/cookie-banner.tsx` |
| P3-T18 | Add locale-aware number formatting | Use `Intl.NumberFormat` for composition percentages and quantities. | XS | — | `components/shared/product-card.tsx`, `components/quote/quote-cart.tsx` |
| P3-T19 | Add locale-aware date formatting | Use `Intl.DateTimeFormat` for any dates (future feature). | XS | — | — |
| P3-T20 | Create customer account page | Quote history, saved quotes, preferences. | XL | — | — |
| P3-T21 | Create `loading.tsx` for all page groups | Suspense UI for every route segment. | M | — | `app/[locale]/loading.tsx`, `app/[locale]/products/loading.tsx`, `app/[locale]/about/loading.tsx` |
| P3-T22 | Add preload hints for critical resources | Preload hero image, fonts, and key CSS. | S | — | `app/[locale]/layout.tsx` |

### Business / Content Tasks

| ID | Title | Description | Complexity | Dependencies | Files |
|----|-------|-------------|------------|--------------|-------|
| P3-B1 | 🔴 Provide FAQ content and answers | Write bilingual FAQ questions and answers. | M | — | `data/faq.ts` |
| P3-B2 | 🔴 Provide customer testimonials | Gather 3–5 testimonials with client names and photos. | M | — | `data/testimonials.ts` |
| P3-B3 | 🔴 Provide blog/article content | Write initial blog posts about products or industry. | L | — | — |
| P3-B4 | 🔴 Provide video content | Product demo videos or customer testimonial videos. | L | — | — |

# Known Issues

> Generated from repository audit. Build: ✅ Pass. Lint: ✅ Pass.

---

## Current Limitations

### API endpoints only log to console
- `/api/quote` and `/api/contact` validate input but only `console.log()` the data. No email or external notification is sent.
- The sales team has no way to receive quote requests or contact inquiries from the platform.
- **Fix required before production deployment.**

### Only one product in catalog
- `data/products.ts` contains a single product (Best Cal).
- The product listing page and home page feature grid render only one card.
- "Featured Products" grid layout has special single-item centering logic as a workaround.

### About page has no content
- `about.mission`, `about.vision`, and `about.story` are all empty strings.
- `about.stats` is an empty array.
- The about section on the home page only shows contact info cards.

### Why Choose Us section is hidden
- `whyChooseUs` array is empty → the component returns `null`.
- The section does not render on the home page.

### No company contact information
- `company.email` and `company.website` are empty strings.
- `company.social` is an empty object.
- The email contact card conditionally hides when empty, but this means the contact page has no email or website listed.

### No product images
- Cover image path `/products/best-cal/cover.webp` does not exist on disk.
- Product card shows the composition visualization fallback (bar chart) on image load error.
- Gallery images and brochure PDF are also missing.

### Console.log in production code
- `contexts/quote-context.tsx` — 7 `console.log` statements for debugging
- `components/quote/quote-button.tsx` — 1 `console.log` on click
- `app/api/quote/route.ts` — 1 `console.log` of full request body
- `app/api/contact/route.ts` — 1 `console.log` of full request body

---

## Temporary Placeholders

| Location | Placeholder | Status |
|----------|-------------|--------|
| `public/products/cotton.svg` | Crop illustration used as product image fallback | Fine for dev, needs replacement |
| `public/products/dates.svg` | Crop illustration SVG | Fine for dev |
| `public/products/oranges.svg` | Crop illustration SVG | Fine for dev |
| `public/products/wheat.svg` | Crop illustration SVG | Fine for dev |
| `public/ChatGPT Image Jun 24, 2026, 04_21_07 AM.png` | AI-generated image with auto-generated name, not in organized directory | Should be renamed and moved to `public/images/` |
| `CLAUDE.md` | Delegates to `AGENTS.md` | Valid |
| `GEMINI.md` | Empty file | Valid (placeholder for Gemini-specific instructions) |
| `docs/` | Empty directory | Valid (noted in AGENTS.md for Next.js docs) |
| Navigation labels in `data/navigation.ts` | Hardcoded English labels, not using i18n messages | Works but not localizable |
| Contact form submit via native `<form action="/api/contact">` | Full page reload on submit, no client-side UX | Works but provides no loading/success feedback |
| About section headings | Hardcoded "About", company name, tagline in English | Works for English only |

---

## Missing Assets

| Asset | Expected Path | Required For |
|-------|---------------|--------------|
| Company logo | `public/logo.svg` | Navbar brand, OG image |
| Product cover images (10–20) | `public/products/{slug}/cover.webp` | Product cards, detail pages |
| Product gallery images (2–3 per product) | `public/products/{slug}/gallery-*.webp` | Product detail page gallery |
| Product brochure PDFs | `public/products/{slug}/brochure.pdf` | Download button on product detail |

---

## Missing Business Data

| Data Field | Location | Required For |
|------------|----------|--------------|
| Company email | `data/company.ts:55` | Contact page, footer |
| Company website | `data/company.ts:57` | Contact page, SEO |
| LinkedIn URL | `data/company.ts:59` | Footer "Follow Us" |
| Facebook URL | `data/company.ts:59` | Footer "Follow Us" |
| Mission statement (Ar/En) | `data/company.ts:70` | About page |
| Vision statement (Ar/En) | `data/company.ts:71` | About page |
| Company story (Ar/En) | `data/company.ts:72` | About page |
| Company statistics | `data/company.ts:73` | About page stats section |
| Why Choose Us items | `data/company.ts:82` | Home page section |
| Product catalog (10–20 products) | `data/products.ts` | Product pages |

---

## Future Improvements

### SEO
- Dynamic sitemap.xml covering all locale-prefixed routes
- robots.txt pointing to sitemap
- Open Graph meta tags (title, description, image) per page
- JSON-LD structured data (Organization, Product, LocalBusiness schemas)
- Canonical URLs per page
- Unique `<title>` per page (currently all pages get company name as title)

### Accessibility
- Skip-to-content link at page start
- `aria-label` on navigation landmarks (desktop, mobile, footer)
- Keyboard focus trap verification in Sheet (mobile navigation drawer)
- Consistent `focus-visible` styles on all interactive elements
- Screen-reader-only labels for icon-only buttons (cart, menu toggle)
- Color contrast audit against WCAG AA standards
- Test with VoiceOver / NVDA

### Internationalization
- Several components have hardcoded English strings instead of using dictionary messages:
  - `components/layout/navbar.tsx` — "Get in Touch" button
  - `components/layout/footer.tsx` — "Navigation", "Contact", "Follow Us"
  - `app/[locale]/contact/page.tsx` — "Contact Us", "Address", "Phone", "Email", form labels
  - `components/sections/about.tsx` — "About", company name, tagline
  - `components/shared/product-card.tsx` — "Composition", "Key Benefits", "Application", "Learn More", "Add to Quote"
  - `components/layout/locale-switcher.tsx` — Switch labels
  - `components/sections/cta.tsx`, `components/sections/features.tsx` — Full content
- 404 page and error page are hardcoded in English (`app/[locale]/not-found.tsx`, `app/[locale]/error.tsx`)
- Arabic font may fall back to system default (Geist only loads Latin subsets)

### Infrastructure
- No environment variable configuration (`.env.example` missing)
- No Content Security Policy headers
- No Vercel configuration (`vercel.json` missing)
- No testing framework configured
- No CI/CD pipeline
- No pre-commit hooks

### Performance
- No lazy loading for below-the-fold sections
- No image optimization configuration (Next.js defaults only)
- No preload hints for critical resources
- No bundle size monitoring

### State / UX
- Contact form submits via native `<form>` → full page reload, no client-side feedback
- Quote items are serialized to localStorage — no cross-session or cross-device sync
- No loading states on product detail page (dynamic route has no `loading.tsx`)

### Monitoring
- No analytics integration
- No error tracking
- No performance monitoring
- No form submission success tracking

### Documentation
- `AGENTS.md` references `node_modules/next/dist/docs/` — this directory is empty
- `ROADMAP.md` has Phase 0 marked complete and all other phases not started — accurate

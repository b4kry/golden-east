# Roadmap

## Phase 0: Foundation ✅ (Completed)

**Goal**: Set up project architecture, routing, i18n, and quote system foundation.

**Deliverables**:
- Next.js 16 + TypeScript + Tailwind v4 + shadcn/ui scaffold
- Locale-based routing (`proxy.ts` with en/ar detection)
- Bilingual message dictionaries (80+ UI strings each)
- Quote system with React Context + useReducer + localStorage
- Page shells: Home, About, Products, Product Detail, Contact, Quote
- Quote submission API route
- Contact form API route
- RTL/LTR layout support
- Locale switcher component
- Project documentation (PROJECT.md, ARCHITECTURE.md, ROADMAP.md, DECISIONS.md)

**Complexity**: Medium
**Status**: ✅ Complete

---

## Phase 1: Content & Data Population

**Goal**: Populate all business data and assets to make the site production-viable.

**Dependencies**: Phase 0

**Deliverables**:
- [ ] Populate `data/company.ts`:
  - [ ] `email` — real company email
  - [ ] `website` — real company website
  - [ ] `social.linkedin` — LinkedIn profile URL
  - [ ] `social.facebook` — Facebook page URL
  - [ ] `about.mission` — company mission statement (bilingual)
  - [ ] `about.vision` — company vision statement (bilingual)
  - [ ] `about.story` — company story / history (bilingual)
  - [ ] `about.stats` — key statistics (years in business, products, clients, etc.)
  - [ ] `whyChooseUs` — 3–6 items with titles, descriptions, icon mappings
- [ ] Populate `data/products.ts`:
  - [ ] Add 10–20 real products with complete bilingual data
  - [ ] Set correct `composition`, `benefits`, `applicationRate`, `suitableCrops`
  - [ ] Set appropriate `featured`, `heroProduct`, `sortOrder`, `status`
- [ ] Add real product images to `public/products/` (at least for featured products)
- [ ] Remove placeholder SVG mapping (`cotton.svg` as product image)

**Complexity**: Low (content only, no code changes)
**Estimated Duration**: 3–5 days
**Status**: ❌ Not started

---

## Phase 2: Production Infrastructure

**Goal**: Add production-ready error handling, SEO, and monitoring.

**Dependencies**: Phase 0

**Deliverables**:
- [ ] Integrate email service (Resend, SendGrid, or Nodemailer) in `/api/quote` and `/api/contact`
- [ ] Add `app/sitemap.ts` for dynamic sitemap generation
- [ ] Add `app/robots.ts` for robots.txt
- [ ] Add Open Graph metadata (OG image, title, description per page)
- [ ] Add JSON-LD structured data (Organization, Product, LocalBusiness)
- [ ] Add proper error boundaries with user-friendly messages
- [ ] Add `loading.tsx` for Suspense fallbacks on dynamic routes
- [ ] Configure Content Security Policy headers in `next.config.ts`
- [ ] Set up environment variables with `.env.example`

**Complexity**: Medium
**Estimated Duration**: 5–7 days
**Status**: ❌ Not started

---

## Phase 3: Accessibility & Compliance

**Goal**: Achieve WCAG 2.1 AA compliance.

**Dependencies**: Phase 0

**Deliverables**:
- [ ] Add skip-to-content link at the top of `<body>`
- [ ] Add `aria-label` to all navigation elements (desktop nav, mobile nav, footer nav)
- [ ] Verify keyboard navigation through all interactive elements
- [ ] Verify focus trapping in Sheet drawer
- [ ] Add focus-visible styles consistently across all interactive elements
- [ ] Verify color contrast ratios meet WCAG AA
- [ ] Add screen-reader-only text for icon-only buttons
- [ ] Test with VoiceOver / NVDA
- [ ] Add cookie consent banner (if analytics added)

**Complexity**: Medium
**Estimated Duration**: 3–5 days
**Status**: ❌ Not started

---

## Phase 4: Quality Assurance

**Goal**: Establish testing and quality gates.

**Dependencies**: Phase 1 (real data needed for meaningful tests)

**Deliverables**:
- [ ] Set up Vitest for unit tests
- [ ] Write tests for:
  - [ ] `cn()` utility
  - [ ] `parsePercent()` function
  - [ ] `quoteReducer()` actions
  - [ ] `isLocale()`, `getDictionary()` locale helpers
  - [ ] ProductCard component (smoke test)
  - [ ] QuoteCart component (add, remove, update quantity)
- [ ] Set up Playwright for E2E tests
- [ ] Write E2E tests for:
  - [ ] Locale detection and switching
  - [ ] Product browsing and detail view
  - [ ] Quote creation, modification, and submission
  - [ ] Contact form submission
  - [ ] 404 page
- [ ] Configure GitHub Actions CI (lint → typecheck → test → build)
- [ ] Add Husky + lint-staged for pre-commit hooks

**Complexity**: High
**Estimated Duration**: 7–10 days
**Status**: ❌ Not started

---

## Phase 5: Performance Optimization

**Goal**: Achieve Lighthouse scores 95+ on all metrics.

**Dependencies**: Phase 0

**Deliverables**:
- [ ] Audit and optimize Core Web Vitals
- [ ] Add lazy loading for below-the-fold sections via `next/dynamic`
- [ ] Optimize product images (WebP, proper dimensions)
- [ ] Add preload hints for critical fonts and hero images
- [ ] Verify bundle size and implement code splitting where needed
- [ ] Add performance monitoring (Vercel Analytics)

**Complexity**: Medium
**Estimated Duration**: 3–5 days
**Status**: ❌ Not started

---

## Phase 6: Polish & Launch

**Goal**: Final QA, content review, and production launch.

**Dependencies**: Phases 1–5 complete

**Deliverables**:
- [ ] Final content review with stakeholders
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing (iOS Safari, Android Chrome)
- [ ] Arabic/RTL testing
- [ ] Load testing
- [ ] DNS and domain configuration
- [ ] SSL certificate verification
- [ ] Production deployment
- [ ] Post-launch monitoring

**Complexity**: Low
**Estimated Duration**: 3–5 days
**Status**: ❌ Not started

---

## Summary

| Phase | Duration | Dependencies | Status |
|-------|----------|--------------|--------|
| 0: Foundation | Completed | — | ✅ |
| 1: Content & Data | 3–5 days | Phase 0 | ❌ |
| 2: Production Infrastructure | 5–7 days | Phase 0 | ❌ |
| 3: Accessibility | 3–5 days | Phase 0 | ❌ |
| 4: Quality Assurance | 7–10 days | Phase 1 | ❌ |
| 5: Performance | 3–5 days | Phase 0 | ❌ |
| 6: Polish & Launch | 3–5 days | Phases 1–5 | ❌ |

**Estimated remaining time**: 27–42 days (full-time, single developer)

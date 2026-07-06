# Architectural Decisions

---

## Decision 1: Next.js

**Decision**: Use Next.js 16 for the project framework.

**Reason**:
- Built-in SSR/SSG for fast initial page loads and SEO
- File-based routing with App Router for clean route organization
- Built-in image optimization with `next/image`
- API routes for backend endpoints without separate server
- Font optimization via `next/font`
- Large ecosystem and community
- Vercel deployment for zero-config hosting

**Tradeoffs**:
- Heavier than a static site generator for a mostly-static site
- Requires Node.js server for API functionality (no static export)
- Next.js-specific APIs create lock-in vs generic React

---

## Decision 2: App Router (not Pages Router)

**Decision**: Use the Next.js App Router with `app/` directory.

**Reason**:
- Server Components by default reduce client bundle size
- Layout nesting preserves state across navigations
- Built-in support for loading states, error boundaries, and not-found pages
- Future-proof — Pages Router is not receiving new features

**Tradeoffs**:
- Newer API with some breaking changes (e.g., middleware → proxy in v16)
- Requires `async` `params` access
- Simpler use cases require more boilerplate than Pages Router

---

## Decision 3: TypeScript (Strict Mode)

**Decision**: Use TypeScript with `strict: true`.

**Reason**:
- Catches entire classes of bugs at compile time
- Improves IDE experience with autocomplete and inline docs
- Self-documenting code through type definitions
- Zero tolerance for `any` ensures type safety
- `as const` for immutable data literals

**Tradeoffs**:
- Slower initial development velocity
- Learning curve for team members unfamiliar with advanced types
- Build time increased by type checking

---

## Decision 4: Tailwind CSS v4

**Decision**: Use Tailwind CSS v4 for styling.

**Reason**:
- Utility-first approach eliminates context switching between HTML and CSS files
- v4 introduces CSS-first configuration (no `tailwind.config.ts`)
- OKLCH color space for perceptually uniform colors
- Built-in dark mode support
- `@theme inline` for design token customization
- Composable with `cn()` utility (`clsx` + `tailwind-merge`)
- Small production bundle (purging unused styles)

**Tradeoffs**:
- Verbose class lists in JSX
- Learning curve for utility class naming
- No runtime CSS-in-JS capabilities (cannot dynamically generate styles based on props)

---

## Decision 5: shadcn/ui

**Decision**: Use shadcn/ui with `radix-nova` style for UI primitives.

**Reason**:
- Accessible components built on Radix UI primitives
- Copy-paste model means full control over component code
- TypeScript-first with comprehensive prop types
- Consistent design tokens that integrate with Tailwind
- No additional dependency — components are part of the codebase
- `radix-nova` style provides modern, clean aesthetics

**Tradeoffs**:
- Manual updates required when shadcn/ui releases new versions
- Larger initial codebase (component code is committed)
- Style opinionated — customization requires overriding Tailwind classes

---

## Decision 6: Static Data Layer (data/ files)

**Decision**: Store all business data in TypeScript constant files under `data/`.

**Reason**:
- Zero runtime dependencies for content
- Full type safety with TypeScript interfaces
- Compile-time validation (missing fields are build errors)
- Easy to swap for a CMS or API later without changing components
- No database, no API calls, no loading states for static content
- Version-controlled alongside code

**Tradeoffs**:
- Content changes require a build/deploy cycle
- Not suitable for user-generated or frequently changing content
- No content management UI — requires developer to edit files

---

## Decision 7: Bilingual Architecture (Arabic/English)

**Decision**: Support both Arabic and English with locale-based routing.

**Reason**:
- The company operates in Egypt where both Arabic and English are used
- Business data has natural bilingual fields (`nameAr`/`nameEn`)
- Locale-based routing (`/en`, `/ar`) is the standard Next.js pattern
- RTL support is required for Arabic layout

**Tradeoffs**:
- Doubles the pages to maintain and translate
- Arabic content may need different layouts due to text length differences
- Some UI components may need RTL-specific styling overrides
- No i18n library dependency — manual implementation requires more boilerplate

---

## Decision 8: Quote System (not E-commerce)

**Decision**: Implement a quote request system instead of e-commerce/payment.

**Reason**:
- The company sells B2B agricultural inputs with variable pricing (volume-based)
- Prices depend on order quantity, delivery location, and relationship
- No online payment — sales team handles all financial transactions
- Quote request captures intent and contact info for sales follow-up
- Regulatory simplicity (no payment processing compliance needed)

**Tradeoffs**:
- Users cannot see prices or purchase immediately
- Requires manual sales follow-up (slower than automated checkout)
- Quote state is browser-local — no account system for saved quotes

---

## Decision 9: React Context + useReducer for Quote State

**Decision**: Use React Context with `useReducer` for quote cart state, with `localStorage` persistence.

**Reason**:
- No external state management library needed for this scope
- `useReducer` provides predictable state transitions (clear action types)
- `localStorage` persistence survives page refreshes
- Context provides global access without prop drilling
- Zero additional dependencies

**Tradeoffs**:
- State is per-browser — no cross-device synchronization
- `localStorage` has size limits (5MB) — irrelevant for current use case
- No server-side rendering of quote state (hydration mismatch prevention requires care)

---

## Decision 10: Vercel Deployment

**Decision**: Deploy on Vercel (already configured).

**Reason**:
- Zero-config Next.js deployment
- Edge network for proxy.ts locale detection
- Automatic SSL, CDN, and preview deployments
- Built-in analytics and monitoring
- Git integration for automatic deployments

**Tradeoffs**:
- Vendor lock-in (Vercel-specific features)
- Pro plan required for team features and advanced analytics
- Limited region selection compared to cloud providers

---

## Decision 11: Proxy (not Middleware)

**Decision**: Use `proxy.ts` (Next.js 16 convention) instead of `middleware.ts`.

**Reason**:
- Next.js 16 deprecated `middleware.ts` in favor of `proxy.ts`
- Proxy better describes the actual function (network boundary handler)
- Codemod available for migration (`@next/codemod middleware-to-proxy`)
- Same API surface, just renamed

**Tradeoffs**:
- Only compatible with Next.js 16+ (not backward compatible)
- Documentation is still sparse for the new convention

---

## Decision 12: No External i18n Library

**Decision**: Implement internationalization with built-in Next.js features and JSON dictionaries.

**Reason**:
- The project only supports two locales (en, ar)
- Most content is static and can be pre-rendered
- JSON dictionaries plus `getDictionary()` function are adequate
- No runtime negotiation library needed (simple `Accept-Language` parsing in proxy)
- Keeps dependencies minimal

**Tradeoffs**:
- No ICU message syntax (pluralization, gender, etc.)
- No automatic locale negotiation library (`@formatjs/intl-localematcher` would be needed for edge cases)
- Manual implementation of locale detection cookie handling
- Translation management is manual

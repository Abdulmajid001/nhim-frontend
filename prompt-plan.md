# NHIM.ng — UI Build Prompt (Phase 1: Pages & UI Only, No Auth)

Paste this into your AI coding tool (Claude Code, Cursor, etc.) with the
project open, or into a plain chat if it has no file access — in that
case, also paste the contents of `app/globals.css`, `AGENTS.md`,
`SITEMAP.md`, and `PAGES.md` alongside it.

---

## Context

You're building the frontend for **NHIM.ng** (Nigeria Health Insurance
Market), a marketplace connecting individuals, HMOs, and hospitals.
Stack: Next.js 15 (App Router), TypeScript, Tailwind v4.

**Scope for this phase: UI and pages only.** Do NOT implement Clerk,
authentication, or any real auth logic yet. Every "protected" route
(dashboard, hmo-portal, admin) should be built and fully navigable as
static UI using **mock/hardcoded data** — no login gating, no redirects,
no session checks. Treat every route as if the correct user is already
logged in. I will wire up auth in a later phase.

## Design System — source of truth

Use the design tokens already defined in `app/globals.css` in this
project (`@theme` block) — do not invent new colors, fonts, or spacing
scales. If tokens have changed since your last read, re-read the file
before styling anything.

Reference names to use in Tailwind classes: `bg-paper`, `bg-paper-dim`,
`text-ink`, `text-emerald`, `bg-emerald`, `text-gold`, `border-gold`,
`text-coral`, `text-graphite`, `font-display` (Fraunces, headlines only),
`font-body` (Inter, default), `font-mono-data` (IBM Plex Mono — use for
ALL policy numbers, prices, IDs, dates in tables, anything tabular/data).

Signature motif: the circular "seal" badge (`components/shared/Seal.tsx`)
for verification marks — reuse it, don't rebuild it.

## Folder Structure — follow exactly

```
app/                          → routes only
├── (marketing)/               → public site
│   ├── plans/page.tsx
│   ├── plans/[id]/page.tsx
│   ├── hmos/page.tsx
│   ├── hmos/[slug]/page.tsx
│   ├── compare/page.tsx
│   ├── for-hmos/page.tsx
│   ├── help/page.tsx
│   ├── blog/page.tsx
│   └── blog/[slug]/page.tsx
├── (auth)/                    → UI only, no real auth logic
│   ├── login/page.tsx
│   ├── register/page.tsx
│   ├── register/hmo/page.tsx
│   ├── forgot-password/page.tsx
│   └── verify/page.tsx
├── (user)/
│   ├── dashboard/page.tsx
│   ├── dashboard/plan/page.tsx
│   ├── dashboard/id-card/page.tsx
│   ├── dashboard/beneficiaries/page.tsx
│   ├── dashboard/claims/page.tsx
│   ├── dashboard/claims/[id]/page.tsx
│   ├── dashboard/reviews/page.tsx
│   ├── dashboard/settings/page.tsx
│   └── checkout/[planId]/page.tsx
├── hmo-portal/
│   ├── dashboard/page.tsx
│   ├── plans/page.tsx
│   ├── plans/new/page.tsx
│   ├── plans/[id]/edit/page.tsx
│   ├── hospitals/page.tsx
│   ├── enrollees/page.tsx
│   ├── enrollees/[id]/page.tsx
│   ├── invoices/page.tsx
│   ├── reviews/page.tsx
│   ├── analytics/page.tsx
│   ├── settings/page.tsx
│   └── staff/page.tsx
├── admin/
│   ├── dashboard/page.tsx
│   ├── hmos/page.tsx
│   ├── hmos/[id]/verify/page.tsx
│   ├── hospitals/page.tsx
│   ├── users/page.tsx
│   ├── transactions/page.tsx
│   ├── reviews/moderation/page.tsx
│   ├── content/page.tsx
│   ├── reports/page.tsx
│   └── staff-roles/page.tsx
├── legal/
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   └── complaints/page.tsx
├── layout.tsx
├── page.tsx                   → home ("/")
└── globals.css

components/
├── ui/                        → shadcn primitives, restyled to tokens above
├── layout/                    → MarketingNav.tsx (exists), UserDashboardSidebar.tsx, HmoPortalSidebar.tsx, AdminSidebar.tsx
├── shared/                    → Seal.tsx (exists), StarRatingInput.tsx, StarRatingDisplay.tsx, ReviewCard.tsx, PlanCard.tsx, HmoCard.tsx, DataTable.tsx, StatusBadge.tsx, PolicyIdCard.tsx
├── marketing/                 → page-specific, non-shared components for (marketing)
├── dashboard/                 → page-specific for (user)/dashboard
├── hmo-portal/                → page-specific for hmo-portal
└── admin/                     → page-specific for admin

lib/
├── api/                       → mock data fetchers for now (return hardcoded arrays matching types/index.ts) — structure them as if they'll later call a real API, so swapping in real fetch calls is a one-line change per function
├── validators/                → zod schemas (forms should validate even without real submission)
└── utils.ts                   → exists: cn(), formatNaira(), formatPolicyNumber()

types/index.ts                 → exists: Plan, Hmo, Enrollee, Beneficiary, Review, Claim — use these, extend if needed but keep in this one file
config/site.ts                 → exists: nav arrays per portal — use these for building sidebars/navs, don't hardcode nav links in components
hooks/                         → data hooks, e.g. usePlans(), useEnrollees() — wrap the mock lib/api functions now so swapping to TanStack Query later doesn't change component code
```

**Rule:** nothing reusable goes inside `app/`. If a component is used on
more than one page, it lives in `components/`.

## Page content — what goes on each page

Full section-by-section spec is in `PAGES.md` in this repo. Follow it
exactly — don't invent sections it doesn't list, and don't skip sections
it does list. Key things to get right:

- `/hmos/[slug]` — the ratings & reviews section is the most complex on
  the public site: average rating, breakdown bars, sortable review list,
  reply-from-HMO display. Build `ReviewCard` and `StarRatingDisplay` here
  first, then reuse on `hmo-portal/reviews`.
- `/plans/[id]` and `/compare` share the coverage-breakdown table
  pattern — build one reusable table component, don't duplicate markup.
- Every dashboard/portal/admin page needs its sidebar nav using
  `config/site.ts` — build `UserDashboardSidebar`, `HmoPortalSidebar`,
  and `AdminSidebar` once, then wrap each portal's pages in a shared
  layout (`(user)/layout.tsx`, `hmo-portal/layout.tsx`, `admin/layout.tsx`)
  rather than repeating the sidebar per page.
- Tables (enrollees, transactions, moderation queue) all use the shared
  `DataTable` component (TanStack Table) — don't hand-roll separate
  table markup per page.

## Mock data

Populate `lib/api/*.ts` with realistic hardcoded Nigerian-context mock
data (plan names, HMO names, Naira prices, Nigerian hospital/city names,
Nigerian reviewer names) matching the `types/index.ts` shapes — enough
volume to make tables, filters, and pagination look real (10–20 rows
minimum per entity).

## What NOT to do this phase

- No Clerk, no auth middleware, no route protection, no session/user
  context beyond a hardcoded mock "current user" object where a page
  needs one (e.g. dashboard greeting)
- No real payment integration (Paystack UI can be built, but don't wire
  a live API call)
- No backend/API routes — all data comes from `lib/api/` mock functions
- Don't touch `app/globals.css` tokens without flagging it to me first

## Order to build in

1. Shared components first: `Seal` (exists), `StarRatingDisplay`,
   `StarRatingInput`, `ReviewCard`, `PlanCard`, `HmoCard`, `StatusBadge`,
   `DataTable`
2. Portal layouts + sidebars: `(user)/layout.tsx`,
   `hmo-portal/layout.tsx`, `admin/layout.tsx`
3. Marketing pages: `/plans`, `/plans/[id]`, `/hmos`, `/hmos/[slug]`,
   `/compare`
4. Auth UI (visual only): `/login`, `/register`, `/register/hmo`
5. User dashboard pages
6. HMO portal pages
7. Admin pages
8. Remaining marketing pages: `/for-hmos`, `/help`, `/blog`,
   `/blog/[slug]`, legal pages

Work through this in order and check in after each numbered group rather
than generating all 44 pages in one pass — I want to review styling
direction early before it's applied everywhere.
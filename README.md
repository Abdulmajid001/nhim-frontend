# NHIM.ng — Nigeria Health Insurance Market

> A digital marketplace connecting individuals, HMOs, and hospitals across Nigeria — search, compare, and purchase health insurance plans in one place.

**Status:** 🚧 Active development — UI/frontend phase (no authentication wired yet)

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Design System](#design-system)
- [User Roles & Portals](#user-roles--portals)
- [Roadmap](#roadmap)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

NHIM.ng digitizes Nigeria's health insurance market by giving individuals a
single place to search, compare, and buy plans from accredited HMOs — while
giving HMOs a dashboard to manage plans and enrollees, and hospitals a way
to verify coverage in real time.

The platform is built around three connected audiences:

| Actor | What they do |
|---|---|
| **Public Users** | Search and compare plans, purchase coverage, manage beneficiaries, file claims, rate their HMO |
| **HMOs** | List and manage plans, link partner hospitals, manage enrollees, view analytics, respond to reviews |
| **Admins** | Verify and approve HMOs, moderate reviews, oversee transactions, manage platform content |

---

## Key Features

- 🔍 **Plan search & comparison** — filter by HMO, hospital network, location, price, and coverage type
- 🏥 **HMO & hospital directory** — browse accredited HMOs and their partner hospital networks
- ⭐ **Verified ratings & reviews** — feedback tied to confirmed purchases only, with HMO replies and admin moderation
- 💳 **Secure checkout** — plan purchase flow with instant digital ID card issuance on confirmation
- 📋 **Claims management** — file, track, and review claim status end-to-end
- 🏢 **HMO management portal** — plan CRUD, enrollee records, invoicing, and engagement analytics
- 🛡️ **Admin control center** — HMO verification workflow, transaction oversight, content management, and system reporting

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | JavaScript (JSX) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) with a custom design token theme |
| Fonts | Fraunces (display), Inter (body), IBM Plex Mono (data/policy numbers) |
| Auth *(planned)* | Clerk |
| Data fetching *(planned)* | TanStack Query |
| Forms *(planned)* | react-hook-form + zod |
| Tables *(planned)* | TanStack Table |
| Payments *(planned)* | Paystack |
| Charts *(planned)* | Recharts |

> Items marked *(planned)* are part of the architecture but not yet wired
> into this phase of the build — see [Roadmap](#roadmap).

---

## Project Structure

```
nhim-frontend/
├── app/                        # Routes only — grouped by audience
│   ├── (marketing)/            # Public site: plans, HMOs, blog, help
│   ├── (auth)/                 # Login, register, verify (UI only)
│   ├── (user)/                 # Individual user dashboard + checkout
│   ├── hmo-portal/             # HMO management portal
│   ├── admin/                  # NHIM admin portal
│   ├── legal/                  # Privacy, terms, complaints
│   ├── layout.jsx
│   ├── page.jsx                # Homepage
│   └── globals.css             # Design tokens
├── components/
│   ├── ui/                     # Base UI primitives
│   ├── layout/                 # Nav & sidebars per portal
│   ├── shared/                 # Cross-portal components (Seal, etc.)
│   ├── marketing/               # Page-specific, public site
│   ├── dashboard/               # Page-specific, user dashboard
│   ├── hmo-portal/               # Page-specific, HMO portal
│   └── admin/                   # Page-specific, admin portal
├── lib/
│   ├── api/                    # Data-fetching functions (mock for now)
│   ├── validators/              # Form validation schemas
│   └── utils.js                 # Shared helpers (cn, formatNaira, etc.)
├── config/
│   └── site.js                  # Navigation config per portal
├── hooks/                       # Shared custom hooks
├── AGENTS.md                    # Full project context for AI tooling
├── SITEMAP.md                   # Route map
└── PAGES.md                     # Section-by-section content spec
```

Rule of thumb: anything used by more than one route lives outside `app/`.

---

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm

### Installation

```bash
git clone <repository-url>
cd nhim-frontend
npm install
```

### Running locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

> **Note:** `next/font/google` is not currently wired into `app/layout.jsx`
> (swapped for system fonts during initial scaffolding in a
> network-restricted environment). Restore it using the instructions
> commented in that file once you have standard network access.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint |

---

## Design System

The visual language is built around the idea of an official **policy
ledger** — trustworthy and document-driven rather than generic SaaS.

| Token | Value | Use |
|---|---|---|
| Ink | `#0F2A28` | Primary text, dark surfaces |
| Emerald | `#1C7C54` | Primary actions |
| Emerald Light | `#2E9E6E` | Hover states |
| Gold | `#C89B3C` | Verification seals, ratings — used sparingly |
| Paper | `#F7F5EF` | Base background |
| Paper Dim | `#EFEBDF` | Section alternation |
| Coral | `#E4572E` | Alerts, claims/urgent states |
| Graphite | `#4A4A45` | Secondary text |

Signature element: a circular **seal** badge used for verification marks
(`components/shared/Seal.jsx`). All monetary values, policy numbers, and
IDs render in `font-mono-data` (IBM Plex Mono) to reinforce the
document/ledger feel.

Full token definitions live in `app/globals.css`.

---

## User Roles & Portals

| Route group | Portal | Auth required *(when implemented)* |
|---|---|---|
| `(marketing)` | Public site | No |
| `(auth)` | Login / registration | No |
| `(user)/dashboard` | Individual user | Yes — individual |
| `hmo-portal` | HMO management | Yes — HMO staff |
| `admin` | NHIM administration | Yes — admin |

Currently, all routes are navigable without authentication, using mock
data — auth gating is planned for a later phase (see below).

---

## Roadmap

- [x] Route structure & page scaffolding across all four portals
- [x] Design system and homepage
- [x] Shared layout components (nav, sidebars)
- [ ] Mock data layer for all entities (plans, HMOs, enrollees, reviews, claims)
- [ ] Full UI build-out per `PAGES.md`
- [ ] Ratings & reviews system (verified-purchase-only, moderation queue)
- [ ] Authentication via Clerk (individual / HMO staff / admin roles)
- [ ] Payment integration (Paystack) and digital ID card generation
- [ ] Real backend/API integration
- [ ] Claims management workflow
- [ ] Admin verification & moderation tooling

---

## Documentation

- **`AGENTS.md`** — full project context, tech stack, conventions, and
  build order, intended as a reference for both human contributors and
  AI coding tools continuing the build
- **`SITEMAP.md`** — complete route map and design token reference
- **`PAGES.md`** — section-by-section content spec for every page

---

## Contributing

This project is under active development. When adding a page or
component:

1. Check `PAGES.md` for the section spec before writing content
2. Keep shared components in `components/shared` or `components/layout`
   — never duplicate markup used on more than one route
3. Use the design tokens defined in `app/globals.css`; do not introduce
   new colors or fonts without updating the token set
4. Update `AGENTS.md`'s "Current State" section if your change affects
   overall project status

---

## License

Proprietary — © 2026 [Your Company Name]. All rights reserved.
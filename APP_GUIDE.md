# NHIM.ng — Application User & Page Guide

> **Nigeria Health Insurance Market (NHIM.ng)**  
> A complete guide explaining how the platform works, who uses it, user journeys, and page-by-page instructions for every section of the application.

---

## Table of Contents

1. [Platform Overview & User Roles](#1-platform-overview--user-roles)
2. [End-to-End User Journeys](#2-end-to-end-user-journeys)
3. [Detailed Page-by-Page Guide](#3-detailed-page-by-page-guide)
   - [A. Public & Marketing Pages (No Login Required)](#a-public--marketing-pages-no-login-required)
   - [B. Authentication & Onboarding](#b-authentication--onboarding)
   - [C. Individual Member Portal (`/dashboard`)](#c-individual-member-portal-dashboard)
   - [D. HMO Provider Portal (`/hmo-portal`)](#d-hmo-provider-portal-hmo-portal)
   - [E. NHIM Admin Control Center (`/admin`)](#e-nhim-admin-control-center-admin)
   - [F. Legal & Regulatory Compliance](#f-legal--regulatory-compliance)
4. [Role-Based Access Control (RBAC) Matrix](#4-role-based-access-control-rbac-matrix)

---

## 1. Platform Overview & User Roles

NHIM.ng digitizes Nigeria's health insurance ecosystem by connecting three distinct user audiences into a unified marketplace:

```
                  ┌─────────────────────────────────┐
                  │             NHIM.ng             │
                  │   Nigeria Health Ins. Market    │
                  └───────────────┬─────────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         │                        │                        │
         ▼                        ▼                        ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  PUBLIC MEMBERS  │    │   HMO PROVIDERS  │    │  NHIM PLATFORM   │
│  & INDIVIDUALS   │    │  & HEALTH PLANS  │    │  ADMINISTRATORS  │
│                  │    │                  │    │                  │
│ • Compare Plans  │    │ • Publish Plans  │    │ • Verify HMOs    │
│ • Buy Insurance  │    │ • Hospital Links │    │ • Moderate Posts │
│ • Digital ID     │    │ • Manage Members │    │ • Audit Fin.     │
│ • File Claims    │    │ • Settle Payouts │    │ • Manage Users   │
└──────────────────┘    └──────────────────┘    └──────────────────┘
```

| Audience | Role Description | Primary Goal |
| :--- | :--- | :--- |
| **Individual Users / Members** | Everyday citizens, families, and employees | Finding affordable coverage, buying health plans online, accessing hospitals via digital ID, and filing reimbursement claims. |
| **HMO Providers** | Licensed Health Maintenance Organizations | Listing and pricing plans, linking accredited hospital networks, managing enrollees, resolving reviews, and tracking revenue. |
| **Platform Admins** | NHIM regulatory & operations team | Auditing HMO licenses, verifying hospital master lists, moderating reviews, monitoring transactions, and managing platform content. |

---

## 2. End-to-End User Journeys

### Journey 1: Individual Member (Discovery to Hospital Care)
1. **Discover & Compare:** Enters `/plans`, filters by budget, location, or coverage needs (e.g., maternity or dental), and selects up to 4 plans to compare side-by-side at `/compare`.
2. **Review HMO Credibility:** Visits `/hmos/[slug]` to read real, verified enrollee reviews and see the HMO’s ratings for hospital coverage and customer support.
3. **Checkout:** Selects a plan, inputs biodata, picks a primary healthcare provider (hospital), and pays securely via Paystack at `/checkout/[planId]`.
4. **Access Care:** Instantly receives a policy number and digital card with a QR code at `/dashboard/id-card`, which they present at hospital reception.
5. **Manage & Claim:** Adds family members at `/dashboard/beneficiaries`, files out-of-pocket claims at `/dashboard/claims`, and writes verified reviews at `/dashboard/reviews`.

---

### Journey 2: HMO Provider (Onboarding to Operations)
1. **Onboarding:** Registers company at `/register/hmo` and uploads CAC and NHIS accreditation documents.
2. **Approval:** Awaits NHIM Admin review and verification.
3. **Catalog Management:** Creates insurance plans at `/hmo-portal/plans/new` with detailed inpatient, outpatient, and optical coverage limits.
4. **Network Expansion:** Attaches accredited hospitals to each plan at `/hmo-portal/hospitals`.
5. **Daily Operations:** Monitors enrollees at `/hmo-portal/enrollees`, reconciles payouts at `/hmo-portal/invoices`, reviews analytics at `/hmo-portal/analytics`, and responds to member feedback at `/hmo-portal/reviews`.

---

### Journey 3: Platform Admin (Compliance & Moderation)
1. **HMO Verification:** Inspects pending HMO submissions at `/admin/hmos/[id]/verify`, validates certificates, and approves them for public listing.
2. **Review Moderation:** Audits submitted member reviews at `/admin/reviews/moderation` to prevent defamatory or abusive content while keeping reviews authentic.
3. **Transaction Oversight:** Monitors platform gross merchandise value (GMV), payment status, and commission fees at `/admin/transactions`.
4. **Content & System Updates:** Updates educational guides, FAQs, and articles via `/admin/content`.

---

## 3. Detailed Page-by-Page Guide

---

### A. Public & Marketing Pages (No Login Required)

| Page | URL Path | What the User Does Here |
| :--- | :--- | :--- |
| **Marketplace Homepage** | `/` | • Searches plans by price, HMO, or state.<br>• Explores top-rated plans, trusted HMO partners, and user testimonials.<br>• Quick-links to plan browsing, HMO directory, or registration. |
| **Browse Insurance Plans** | `/plans` | • Filters plans by price tier, category (Individual, Family, Senior, Corporate), hospital tier, and HMO.<br>• Sorts by lowest price, highest rating, or popular.<br>• Adds plans to comparison bar. |
| **Plan Details** | `/plans/[id]` | • Inspects full benefit breakdown (inpatient/outpatient limits, dental, maternity, prescription drug caps).<br>• Views list of eligible partner hospitals.<br>• Clicks **"Buy Plan"** to initiate checkout. |
| **Plan Comparison** | `/compare` | • Side-by-side table comparing 2 to 4 plans across pricing, deductibles, waiting periods, and hospital tiers. |
| **HMO Directory** | `/hmos` | • Explores all accredited HMOs operating in Nigeria.<br>• Checks ratings, number of active plans, and accredited hospital counts. |
| **HMO Profile & Reviews** | `/hmos/[slug]` | • Explores an HMO's license details, branch offices, and active plans.<br>• Reads **verified buyer reviews**, rating breakdowns, and official HMO replies. |
| **For HMOs (Partner Page)** | `/for-hmos` | • B2B landing page highlighting distribution benefits, analytics, and enrollee acquisition for prospective HMOs. |
| **Help & Support** | `/help` | • Searches FAQs, claims guides, insurance terms, and submits support inquiries. |
| **Blog & Knowledge Base** | `/blog` & `/blog/[slug]` | • Reads articles on healthcare literacy, insurance tips, and policy guides in Nigeria. |

---

### B. Authentication & Onboarding

| Page | URL Path | What the User Does Here |
| :--- | :--- | :--- |
| **Login** | `/login` | • Enters credentials. Automatically routes users to their corresponding dashboard (Member, HMO, or Admin) based on their role. |
| **Individual Sign Up** | `/register` | • Creates a personal account using email, phone number, and password. |
| **HMO Partner Sign Up** | `/register/hmo` | • Submits company name, CAC registration number, NHIS license, official email, and contact info. |
| **Account Verification** | `/verify` | • Inputs OTP code sent via SMS/Email to verify contact details. |
| **Forgot Password** | `/forgot-password` | • Initiates password recovery via registered email address. |

---

### C. Individual Member Portal (`/dashboard`)

| Page | URL Path | What the User Does Here |
| :--- | :--- | :--- |
| **Member Overview** | `/dashboard` | • Views active policy card, policy status, primary hospital, renewal date, and quick emergency contacts.<br>• Checks recent claims status and policy shortcuts. |
| **My Plan Coverage** | `/dashboard/plan` | • Reviews benefit limits, covered medications, exclusions, co-pays, and policy terms.<br>• Downloads official policy document or triggers renewal/upgrade. |
| **Digital ID Card** | `/dashboard/id-card` | • Displays live digital health insurance card with QR code for hospital check-in.<br>• Downloads or prints offline PDF card. |
| **Beneficiaries** | `/dashboard/beneficiaries` | • Adds/edits spouse, children, or dependent parents under a family plan.<br>• Assigns specific primary hospitals to each family member. |
| **Claims Center** | `/dashboard/claims` | • Submits reimbursement requests for out-of-pocket medical expenses.<br>• Uploads receipts, prescriptions, and physician notes.<br>• Tracks claim workflow: *Submitted → Under Review → Approved → Paid*. |
| **Claim Detail** | `/dashboard/claims/[id]` | • Views line-item breakdown of a claim, HMO officer notes, approval status, and payout confirmation. |
| **My Reviews** | `/dashboard/reviews` | • Submits ratings (1–5 stars) and feedback for HMOs and hospitals after verified visits.<br>• Reads HMO replies to their reviews. |
| **Account Settings** | `/dashboard/settings` | • Updates personal profile, emergency contacts, notification settings, and password. |
| **Plan Checkout** | `/checkout/[planId]` | • Finalizes plan purchase: enrollee bio-data, hospital selection, add-on coverage, and Paystack payment. |

---

### D. HMO Provider Portal (`/hmo-portal`)

| Page | URL Path | What the HMO Staff Does Here |
| :--- | :--- | :--- |
| **Executive Overview** | `/hmo-portal/dashboard` | • High-level KPI dashboard: Total active enrollees, gross premiums, pending claims, and review scores. |
| **Plan Catalog** | `/hmo-portal/plans` | • Manages published plans, toggles availability, and monitors subscriber counts per plan. |
| **Create / Edit Plan** | `/hmo-portal/plans/new` & `/[id]/edit` | • Builds plan configurations: pricing tiers (monthly/yearly), inpatient/outpatient limits, maternity, surgery, and exclusion rules. |
| **Hospital Network** | `/hmo-portal/hospitals` | • Links partner clinics and hospitals to specific plans across Nigerian states. |
| **Enrollees Registry** | `/hmo-portal/enrollees` | • Searches and manages all policyholders, verifies policy numbers, and filters by plan/location. |
| **Enrollee Record** | `/hmo-portal/enrollees/[id]` | • Deep-dive into an enrollee: policy status, assigned dependents, primary hospital, and past claims. |
| **Invoices & Settlements** | `/hmo-portal/invoices` | • Tracks payouts from NHIM marketplace, platform fees, and hospital reimbursement reconciliations. |
| **Reviews & Feedback** | `/hmo-portal/reviews` | • Monitors member reviews and posts official HMO replies to resolve customer service issues. |
| **Performance Analytics** | `/hmo-portal/analytics` | • Data visualizations for sales growth, popular plans, high-loss claim categories, and enrollee demographics. |
| **Staff & Access Control** | `/hmo-portal/staff` | • Invites team members and assigns granular roles (*Claims Officer, Plan Manager, Finance, Support*). |
| **HMO Settings** | `/hmo-portal/settings` | • Configures company branding, logo, support numbers, and bank account for settlements. |

---

### E. NHIM Admin Control Center (`/admin`)

| Page | URL Path | What the Administrator Does Here |
| :--- | :--- | :--- |
| **Admin Overview** | `/admin/dashboard` | • Platform-wide metrics: Total GMV, active policies, HMO compliance rate, and system health alerts. |
| **HMO Registry** | `/admin/hmos` | • Manages all registered HMOs, audits active licenses, or suspends non-compliant providers. |
| **HMO Verification Audit** | `/admin/hmos/[id]/verify` | • Compliance officer reviews submitted CAC certificates, NHIS licenses, and tax clearances to approve/reject HMOs. |
| **National Hospital Directory** | `/admin/hospitals` | • Master directory of healthcare facilities across Nigeria with verification status and accreditation tiers. |
| **User Management** | `/admin/users` | • Manages individual user accounts, resolves account disputes, and investigates suspicious activity. |
| **Transactions & Auditing** | `/admin/transactions` | • Financial ledger of all marketplace checkouts, Paystack reference IDs, commission splits, and refunds. |
| **Review Moderation** | `/admin/reviews/moderation` | • Moderation queue for user reviews to detect fraud, inappropriate language, or unverified claims. |
| **Content Management (CMS)** | `/admin/content` | • Publishes and edits blog posts, FAQs, educational articles, and hero banners. |
| **System Reports** | `/admin/reports` | • Exports compliance, tax, revenue, and coverage distribution reports. |
| **Admin Roles & Permissions** | `/admin/staff-roles` | • Manages internal platform staff and permissions (*Super Admin, Verification Officer, Moderator, Finance*). |

---

### F. Legal & Regulatory Compliance

| Page | URL Path | What the User Does Here |
| :--- | :--- | :--- |
| **Terms of Service** | `/legal/terms` | Outlines platform terms, purchase obligations, and cancellation terms. |
| **Privacy Policy** | `/legal/privacy` | Details NDPR/GDPR-compliant data protection and medical privacy standards. |
| **Complaints & Dispute Resolution** | `/legal/complaints` | Formal dispute escalation channel for unresolved claims or HMO conflicts. |

---

## 4. Role-Based Access Control (RBAC) Matrix

Access permissions defined in `lib/roles.js`:

| Section | Member / Public | HMO Staff (Roles) | Admin (Roles) |
| :--- | :---: | :---: | :---: |
| **Marketing & Public Site** (`/`, `/plans`, `/hmos`, `/compare`) | Full Access | Full Access | Full Access |
| **User Dashboard** (`/dashboard/*`) | Full Access | Denied | Denied |
| **HMO Overview & Analytics** (`/hmo-portal/dashboard`, `/analytics`) | Denied | All HMO Staff | Super Admin |
| **HMO Plan Management** (`/hmo-portal/plans/*`) | Denied | Owner, Plan Manager | Super Admin |
| **HMO Enrollees & Claims** (`/hmo-portal/enrollees/*`) | Denied | Owner, Claims Officer, Support | Super Admin |
| **HMO Invoices & Finance** (`/hmo-portal/invoices`) | Denied | Owner, Finance | Super Admin |
| **HMO Staff Management** (`/hmo-portal/staff`) | Denied | HMO Owner Only | Super Admin |
| **Admin Dashboard & Users** (`/admin/dashboard`, `/admin/users`) | Denied | Denied | All Admin Roles |
| **Admin HMO Verification** (`/admin/hmos/*`) | Denied | Denied | Super Admin, Verification Officer |
| **Admin Review Moderation** (`/admin/reviews/moderation`) | Denied | Denied | Super Admin, Moderator |
| **Admin Financial Transactions** (`/admin/transactions`) | Denied | Denied | Super Admin, Finance |
| **Admin Staff & Role Delegation** (`/admin/staff-roles`) | Denied | Denied | Super Admin Only |

---
*Created for the NHIM.ng Project — Nigeria Health Insurance Market.*

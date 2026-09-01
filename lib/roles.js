// src/lib/roles.js
//
// Central definition of every role in the system. Route guards and UI
// (e.g. "hide this button for Analysts") should both read from here
// rather than hardcoding role strings elsewhere.

export const PORTAL = {
  MEMBER: "member",
  HMO: "hmo",
  ADMIN: "admin",
};

export const HMO_ROLES = {
  OWNER: "hmo_owner",
  PLAN_MANAGER: "hmo_plan_manager",
  CLAIMS_OFFICER: "hmo_claims_officer",
  FINANCE: "hmo_finance",
  SUPPORT: "hmo_support",
  ANALYST: "hmo_analyst",
};

export const ADMIN_ROLES = {
  SUPER_ADMIN: "admin_super",
  VERIFICATION_OFFICER: "admin_verification",
  MODERATOR: "admin_moderator",
  FINANCE: "admin_finance",
  CONTENT_MANAGER: "admin_content",
  SUPPORT: "admin_support",
};

// Which roles can access which route-group prefixes. Used by
// <RequireRole> below. Super Admin implicitly passes every check.
export const ROUTE_ACCESS = {
  "/dashboard": [PORTAL.MEMBER],
  "/hmo-portal": Object.values(HMO_ROLES),
  "/hmo-portal/plans": [HMO_ROLES.OWNER, HMO_ROLES.PLAN_MANAGER],
  "/hmo-portal/enrollees": [
    HMO_ROLES.OWNER,
    HMO_ROLES.CLAIMS_OFFICER,
    HMO_ROLES.SUPPORT,
  ],
  "/hmo-portal/invoices": [HMO_ROLES.OWNER, HMO_ROLES.FINANCE],
  "/hmo-portal/staff": [HMO_ROLES.OWNER],
  "/admin": Object.values(ADMIN_ROLES),
  "/admin/hmos": [ADMIN_ROLES.SUPER_ADMIN, ADMIN_ROLES.VERIFICATION_OFFICER],
  "/admin/reviews/moderation": [
    ADMIN_ROLES.SUPER_ADMIN,
    ADMIN_ROLES.MODERATOR,
  ],
  "/admin/transactions": [ADMIN_ROLES.SUPER_ADMIN, ADMIN_ROLES.FINANCE],
  "/admin/staff-roles": [ADMIN_ROLES.SUPER_ADMIN],
};

/**
 * Given a user's role and a route path, is access allowed?
 * Falls back to "deny" for any path not explicitly listed — safer
 * default than accidentally leaving a new route wide open.
 */
export function canAccess(role, path) {
  if (role === ADMIN_ROLES.SUPER_ADMIN) return true;

  const matchedPrefix = Object.keys(ROUTE_ACCESS)
    .sort((a, b) => b.length - a.length) // longest/most-specific match first
    .find((prefix) => path.startsWith(prefix));

  if (!matchedPrefix) return false;
  return ROUTE_ACCESS[matchedPrefix].includes(role);
}

/**
 * Where should this role land right after login?
 */
export function getHomeRouteForRole(role) {
  if (role === PORTAL.MEMBER) return "/dashboard";
  if (Object.values(HMO_ROLES).includes(role)) return "/hmo-portal/dashboard";
  if (Object.values(ADMIN_ROLES).includes(role)) return "/admin/dashboard";
  return "/";
}
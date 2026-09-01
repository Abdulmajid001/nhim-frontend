/**
 * Mock data layer for Plans. Replace the body of getPlans() with a real
 * fetch/query later — keep the function signature the same so consuming
 * components (PlansPage, PlanDetail, Compare) don't need to change.
 *
 * @typedef {Object} Plan
 * @property {string} id
 * @property {string} hmoName
 * @property {string} hmoSlug
 * @property {string} name
 * @property {"basic"|"standard"|"premium"} tier
 * @property {number} priceAnnual
 * @property {number} rating
 * @property {number} reviewCount
 * @property {string[]} coverage
 * @property {string[]} locations
 */

/** @type {Plan[]} */
const MOCK_PLANS = [
  { id: "cp-basic", hmoName: "CarePlus HMO", hmoSlug: "careplus-hmo", name: "Essential", tier: "basic", priceAnnual: 18000, rating: 4.6, reviewCount: 812, coverage: ["Outpatient", "Emergency"], locations: ["Lagos", "Ibadan"] },
  { id: "cp-standard", hmoName: "CarePlus HMO", hmoSlug: "careplus-hmo", name: "Family Standard", tier: "standard", priceAnnual: 42000, rating: 4.6, reviewCount: 812, coverage: ["Outpatient", "Inpatient", "Maternity", "Emergency"], locations: ["Lagos", "Abuja", "Ibadan"] },
  { id: "cp-premium", hmoName: "CarePlus HMO", hmoSlug: "careplus-hmo", name: "Premium Plus", tier: "premium", priceAnnual: 85000, rating: 4.6, reviewCount: 812, coverage: ["Outpatient", "Inpatient", "Maternity", "Surgery", "Dental", "Optical", "Emergency"], locations: ["Lagos", "Abuja", "Port Harcourt", "Ibadan"] },

  { id: "wc-basic", hmoName: "Wellcare HMO", hmoSlug: "wellcare-hmo", name: "Starter", tier: "basic", priceAnnual: 22500, rating: 4.3, reviewCount: 540, coverage: ["Outpatient", "Emergency"], locations: ["Abuja", "Kano"] },
  { id: "wc-standard", hmoName: "Wellcare HMO", hmoSlug: "wellcare-hmo", name: "Balanced Care", tier: "standard", priceAnnual: 48500, rating: 4.3, reviewCount: 540, coverage: ["Outpatient", "Inpatient", "Maternity", "Emergency"], locations: ["Abuja", "Kano", "Lagos"] },
  { id: "wc-premium", hmoName: "Wellcare HMO", hmoSlug: "wellcare-hmo", name: "Complete Cover", tier: "premium", priceAnnual: 96000, rating: 4.3, reviewCount: 540, coverage: ["Outpatient", "Inpatient", "Maternity", "Surgery", "Dental", "Optical"], locations: ["Abuja", "Kano", "Lagos", "Port Harcourt"] },

  { id: "zh-basic", hmoName: "Zenith Health", hmoSlug: "zenith-health", name: "Basic Shield", tier: "basic", priceAnnual: 16000, rating: 4.7, reviewCount: 1204, coverage: ["Outpatient", "Emergency"], locations: ["Lagos", "Port Harcourt"] },
  { id: "zh-standard", hmoName: "Zenith Health", hmoSlug: "zenith-health", name: "Family Shield", tier: "standard", priceAnnual: 39000, rating: 4.7, reviewCount: 1204, coverage: ["Outpatient", "Inpatient", "Maternity", "Emergency"], locations: ["Lagos", "Port Harcourt", "Ibadan"] },
  { id: "zh-premium", hmoName: "Zenith Health", hmoSlug: "zenith-health", name: "Total Shield", tier: "premium", priceAnnual: 78000, rating: 4.7, reviewCount: 1204, coverage: ["Outpatient", "Inpatient", "Maternity", "Surgery", "Dental", "Optical", "Emergency"], locations: ["Lagos", "Port Harcourt", "Ibadan", "Abuja"] },

  { id: "av-basic", hmoName: "Avicare HMO", hmoSlug: "avicare-hmo", name: "Lite", tier: "basic", priceAnnual: 15000, rating: 4.1, reviewCount: 298, coverage: ["Outpatient"], locations: ["Kano", "Abuja"] },
  { id: "av-standard", hmoName: "Avicare HMO", hmoSlug: "avicare-hmo", name: "Plus", tier: "standard", priceAnnual: 36500, rating: 4.1, reviewCount: 298, coverage: ["Outpatient", "Inpatient", "Emergency"], locations: ["Kano", "Abuja", "Lagos"] },
  { id: "av-premium", hmoName: "Avicare HMO", hmoSlug: "avicare-hmo", name: "Max", tier: "premium", priceAnnual: 71000, rating: 4.1, reviewCount: 298, coverage: ["Outpatient", "Inpatient", "Maternity", "Surgery", "Dental"], locations: ["Kano", "Abuja", "Lagos"] },

  { id: "tg-basic", hmoName: "TrustGuard Health", hmoSlug: "trustguard-health", name: "Core", tier: "basic", priceAnnual: 19500, rating: 4.4, reviewCount: 455, coverage: ["Outpatient", "Emergency"], locations: ["Lagos", "Ibadan", "Abuja"] },
  { id: "tg-standard", hmoName: "TrustGuard Health", hmoSlug: "trustguard-health", name: "Family Core", tier: "standard", priceAnnual: 44500, rating: 4.4, reviewCount: 455, coverage: ["Outpatient", "Inpatient", "Maternity", "Emergency"], locations: ["Lagos", "Ibadan", "Abuja", "Port Harcourt"] },
  { id: "tg-premium", hmoName: "TrustGuard Health", hmoSlug: "trustguard-health", name: "Core Elite", tier: "premium", priceAnnual: 89000, rating: 4.4, reviewCount: 455, coverage: ["Outpatient", "Inpatient", "Maternity", "Surgery", "Dental", "Optical", "Emergency"], locations: ["Lagos", "Ibadan", "Abuja", "Port Harcourt", "Kano"] },

  { id: "ml-basic", hmoName: "MediLife HMO", hmoSlug: "medilife-hmo", name: "Basic", tier: "basic", priceAnnual: 17500, rating: 4.2, reviewCount: 367, coverage: ["Outpatient", "Emergency"], locations: ["Port Harcourt", "Lagos"] },
  { id: "ml-standard", hmoName: "MediLife HMO", hmoSlug: "medilife-hmo", name: "Standard", tier: "standard", priceAnnual: 40500, rating: 4.2, reviewCount: 367, coverage: ["Outpatient", "Inpatient", "Maternity", "Emergency"], locations: ["Port Harcourt", "Lagos", "Abuja"] },
  { id: "ml-premium", hmoName: "MediLife HMO", hmoSlug: "medilife-hmo", name: "Gold", tier: "premium", priceAnnual: 82500, rating: 4.2, reviewCount: 367, coverage: ["Outpatient", "Inpatient", "Maternity", "Surgery", "Dental", "Optical"], locations: ["Port Harcourt", "Lagos", "Abuja"] },
];

export const ALL_LOCATIONS = ["Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan"];
export const ALL_COVERAGE = ["Outpatient", "Inpatient", "Maternity", "Surgery", "Dental", "Optical", "Emergency"];
export const ALL_HMOS = [...new Set(MOCK_PLANS.map((p) => p.hmoName))];

/**
 * @returns {Promise<Plan[]>}
 */
export async function getPlans() {
  // TODO: replace with a real fetch/query. Simulated latency kept at 0
  // for now — add a delay here if you want to test loading states.
  return MOCK_PLANS;
}

/**
 * @param {string} id
 * @returns {Promise<Plan | undefined>}
 */
export async function getPlanById(id) {
  return MOCK_PLANS.find((p) => p.id === id);
}

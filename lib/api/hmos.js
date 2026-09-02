/**
 * Mock data layer for HMOs. Replace getHmos() with a real fetch later —
 * keep the function signature the same so consuming pages don't change.
 *
 * @typedef {Object} Hmo
 * @property {string} id
 * @property {string} slug
 * @property {string} name
 * @property {"verified"} accreditationStatus
 * @property {number} rating
 * @property {number} reviewCount
 * @property {number} planCount
 * @property {number} priceFrom
 * @property {string[]} locations
 * @property {string} description
 */

/** @type {Hmo[]} */
const MOCK_HMOS = [
  {
    id: "careplus-hmo",
    slug: "careplus-hmo",
    name: "CarePlus HMO",
    accreditationStatus: "verified",
    rating: 4.6,
    reviewCount: 812,
    planCount: 4,
    priceFrom: 18000,
    locations: ["Lagos", "Abuja", "Port Harcourt", "Ibadan"],
    description: "One of Nigeria's leading HMOs with comprehensive health coverage and wide hospital network.",
  },
  {
    id: "wellcare-hmo",
    slug: "wellcare-hmo",
    name: "Wellcare HMO",
    accreditationStatus: "verified",
    rating: 4.3,
    reviewCount: 540,
    planCount: 3,
    priceFrom: 22500,
    locations: ["Abuja", "Kano", "Lagos", "Port Harcourt"],
    description: "Specializes in family and maternity coverage with excellent customer service.",
  },
  {
    id: "zenith-health",
    slug: "zenith-health",
    name: "Zenith Health",
    accreditationStatus: "verified",
    rating: 4.7,
    reviewCount: 1204,
    planCount: 5,
    priceFrom: 16000,
    locations: ["Lagos", "Port Harcourt", "Ibadan", "Abuja"],
    description: "Part of Zenith Bank Group, offering reliable health insurance solutions.",
  },
  {
    id: "avicare-hmo",
    slug: "avicare-hmo",
    name: "Avicare HMO",
    accreditationStatus: "verified",
    rating: 4.1,
    reviewCount: 298,
    planCount: 3,
    priceFrom: 15000,
    locations: ["Kano", "Abuja", "Lagos"],
    description: "Affordable health insurance with a growing network across northern Nigeria.",
  },
  {
    id: "trustguard-health",
    slug: "trustguard-health",
    name: "TrustGuard Health",
    accreditationStatus: "verified",
    rating: 4.4,
    reviewCount: 455,
    planCount: 4,
    priceFrom: 19500,
    locations: ["Lagos", "Ibadan", "Abuja", "Port Harcourt", "Kano"],
    description: "Comprehensive coverage with wide geographical reach across Nigeria.",
  },
  {
    id: "medilife-hmo",
    slug: "medilife-hmo",
    name: "MediLife HMO",
    accreditationStatus: "verified",
    rating: 4.2,
    reviewCount: 367,
    planCount: 3,
    priceFrom: 17500,
    locations: ["Port Harcourt", "Lagos", "Abuja"],
    description: "Strong presence in Port Harcourt with quality healthcare partnerships.",
  },
  {
    id: "apex-health-hmo",
    slug: "apex-health-hmo",
    name: "Apex Health HMO",
    accreditationStatus: "verified",
    rating: 4.5,
    reviewCount: 623,
    planCount: 4,
    priceFrom: 21000,
    locations: ["Lagos", "Abuja", "Kano", "Ibadan"],
    description: "NHIS-accredited HMO providing comprehensive health management services.",
  },
  {
    id: "continental-health-hmo",
    slug: "continental-health-hmo",
    name: "Continental Health HMO",
    accreditationStatus: "verified",
    rating: 4.3,
    reviewCount: 489,
    planCount: 3,
    priceFrom: 19800,
    locations: ["Abuja", "Lagos", "Port Harcourt"],
    description: "Reliable health insurance provider with strong hospital partnerships.",
  },
  {
    id: "nationwide-health-hmo",
    slug: "nationwide-health-hmo",
    name: "Nationwide Health HMO",
    accreditationStatus: "verified",
    rating: 4.0,
    reviewCount: 312,
    planCount: 2,
    priceFrom: 16500,
    locations: ["Kano", "Abuja", "Lagos"],
    description: "Affordable health insurance plans for individuals and corporate clients.",
  },
  {
    id: "healthwise-hmo",
    slug: "healthwise-hmo",
    name: "Healthwise HMO",
    accreditationStatus: "verified",
    rating: 4.6,
    reviewCount: 721,
    planCount: 4,
    priceFrom: 23000,
    locations: ["Lagos", "Ibadan", "Abuja", "Port Harcourt"],
    description: "Premium health coverage with focus on preventive healthcare and wellness.",
  },
  {
    id: "millicare-hmo",
    slug: "millicare-hmo",
    name: "Millicare HMO",
    accreditationStatus: "verified",
    rating: 4.4,
    reviewCount: 538,
    planCount: 3,
    priceFrom: 20500,
    locations: ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano"],
    description: "Comprehensive health solutions with wide hospital network acceptance.",
  },
  {
    id: "stayed-health-hmo",
    slug: "stayed-health-hmo",
    name: "Stayed Health HMO",
    accreditationStatus: "verified",
    rating: 4.2,
    reviewCount: 456,
    planCount: 3,
    priceFrom: 18500,
    locations: ["Abuja", "Lagos", "Kano"],
    description: "Modern health insurance provider with digital-first approach.",
  },
  {
    id: "hygeia-hmo",
    slug: "hygeia-hmo",
    name: "Hygeia HMO",
    accreditationStatus: "verified",
    rating: 4.7,
    reviewCount: 876,
    planCount: 5,
    priceFrom: 24000,
    locations: ["Lagos", "Abuja", "Ibadan", "Port Harcourt"],
    description: "One of Nigeria's most established HMOs with excellent healthcare partnerships.",
  },
  {
    id: "redcross-hmo",
    slug: "redcross-hmo",
    name: "Red Cross HMO",
    accreditationStatus: "verified",
    rating: 4.1,
    reviewCount: 345,
    planCount: 2,
    priceFrom: 15500,
    locations: ["Lagos", "Abuja", "Kano", "Port Harcourt"],
    description: "Humanitarian-focused health insurance with affordable community plans.",
  },
  {
    id: " Leadway HMO",
    slug: "leadway-hmo",
    name: "Leadway HMO",
    accreditationStatus: "verified",
    rating: 4.5,
    reviewCount: 689,
    planCount: 4,
    priceFrom: 21500,
    locations: ["Lagos", "Abuja", "Ibadan", "Port Harcourt"],
    description: "Part of Leadway Assurance, offering comprehensive health insurance solutions.",
  },
];

export const ALL_HMO_LOCATIONS = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Kano",
  "Ibadan",
];

/**
 * @returns {Promise<Hmo[]>}
 */
export async function getHmos() {
  return MOCK_HMOS;
}

/**
 * @param {string} slug
 * @returns {Promise<Hmo | undefined>}
 */
export async function getHmoBySlug(slug) {
  return MOCK_HMOS.find((h) => h.slug === slug);
}

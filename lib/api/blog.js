/**
 * Mock data layer for blog posts. Replace getBlogPosts() with a real
 * CMS/API fetch later — keep the function signature the same.
 *
 * @typedef {Object} BlogPost
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string} excerpt
 * @property {string} category
 * @property {string} author
 * @property {string} date        ISO date string
 * @property {number} readTimeMin
 * @property {string} tint        one of the chart-1..5 keys, for the
 *                                 placeholder image tint on BlogCard
 */

export const BLOG_CATEGORIES = [
  "Preventive Care",
  "Nutrition",
  "Maternal Health",
  "Mental Health",
  "Chronic Illness",
  "Insurance 101",
];

/** @type {BlogPost[]} */
const MOCK_POSTS = [
  { id: "p1", slug: "annual-checkup-guide", title: "Why You Shouldn't Skip Your Annual Checkup", excerpt: "Most preventable health emergencies are caught early — if you actually show up for the screening.", category: "Preventive Care", author: "Dr. Amaka Eze", date: "2026-08-12", readTimeMin: 5, tint: "chart-1" },
  { id: "p2", slug: "hmo-vs-insurance", title: "HMO vs Traditional Insurance: What's Actually the Difference?", excerpt: "The terms get used interchangeably in Nigeria, but they work very differently when you actually need care.", category: "Insurance 101", author: "Tobi Alade", date: "2026-08-05", readTimeMin: 7, tint: "chart-2" },
  { id: "p3", slug: "eating-for-blood-pressure", title: "Eating for Blood Pressure: A Practical Nigerian Meal Guide", excerpt: "You don't have to give up jollof rice — small substitutions make a bigger difference than total restriction.", category: "Nutrition", author: "Chiamaka Nwosu", date: "2026-07-29", readTimeMin: 6, tint: "chart-3" },
  { id: "p4", slug: "prenatal-visit-schedule", title: "Your Prenatal Visit Schedule, Explained Trimester by Trimester", excerpt: "What actually happens at each appointment, and which ones you genuinely shouldn't reschedule.", category: "Maternal Health", author: "Dr. Amaka Eze", date: "2026-07-20", readTimeMin: 8, tint: "chart-4" },
  { id: "p5", slug: "recognizing-burnout", title: "Recognizing Burnout Before It Becomes a Crisis", excerpt: "The early signs are quieter than people expect — and easier to act on if you catch them in time.", category: "Mental Health", author: "Funmi Ogundele", date: "2026-07-14", readTimeMin: 5, tint: "chart-5" },
  { id: "p6", slug: "managing-diabetes-daily", title: "Managing Diabetes Day to Day: What Actually Changes", excerpt: "A diagnosis reshapes routines gradually, not all at once. Here's what the first few months look like.", category: "Chronic Illness", author: "Dr. Kunle Bakare", date: "2026-07-02", readTimeMin: 9, tint: "chart-1" },
  { id: "p7", slug: "reading-your-coverage", title: "How to Actually Read Your Coverage Document", excerpt: "Exclusions, co-pays, and pre-authorization — the fine print that determines what you'll pay out of pocket.", category: "Insurance 101", author: "Tobi Alade", date: "2026-06-25", readTimeMin: 6, tint: "chart-2" },
  { id: "p8", slug: "hydration-hot-season", title: "Hydration Habits That Hold Up in Nigeria's Hot Season", excerpt: "Water alone isn't always enough — what your body actually needs during long dry-season stretches.", category: "Nutrition", author: "Chiamaka Nwosu", date: "2026-06-18", readTimeMin: 4, tint: "chart-3" },
  { id: "p9", slug: "postpartum-recovery", title: "What Nobody Tells You About Postpartum Recovery", excerpt: "The physical timeline is well documented. The rest of it rarely gets talked about honestly.", category: "Maternal Health", author: "Dr. Amaka Eze", date: "2026-06-10", readTimeMin: 7, tint: "chart-4" },
];

/**
 * @returns {Promise<BlogPost[]>}
 */
export async function getBlogPosts() {
  return [...MOCK_POSTS].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
}

/**
 * @param {string} slug
 * @returns {Promise<BlogPost | undefined>}
 */
export async function getBlogPostBySlug(slug) {
  return MOCK_POSTS.find((p) => p.slug === slug);
}
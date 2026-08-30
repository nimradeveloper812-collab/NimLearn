/**
 * NimLearn - Centralized Article Database
 * 
 * STRICT CATEGORIES (ONLY 4):
 * 1. Artificial Intelligence (artificial-intelligence)
 * 2. Computer Science (computer-science)
 * 3. Psychology (psychology)
 * 4. History of World (history-of-world)
 */

// Syllabus articles database array (empty until syllabus items are added)
const NimLearnArticles = [];

// Helper database functions for NimLearn
const NimLearnDB = {
  getAllArticles: () => NimLearnArticles,

  getFeaturedArticles: () => NimLearnArticles.filter(a => a.featured),

  getPopularArticles: () => NimLearnArticles.filter(a => a.popular),

  getLatestArticles: (limit = 6) => [...NimLearnArticles].slice(0, limit),

  getArticleById: (id) => NimLearnArticles.find(a => a.id === parseInt(id)),

  getArticleBySlug: (slug) => NimLearnArticles.find(a => a.slug === slug),

  getArticlesByCategory: (categorySlugOrName) => {
    if (!categorySlugOrName || categorySlugOrName.toLowerCase() === "all") {
      return NimLearnArticles;
    }
    const target = categorySlugOrName.toLowerCase();
    return NimLearnArticles.filter(
      a => a.categorySlug.toLowerCase() === target || a.category.toLowerCase() === target
    );
  },

  getRelatedArticles: (currentArticleId, categorySlug, limit = 3) => {
    return NimLearnArticles
      .filter(a => a.id !== currentArticleId && (a.categorySlug === categorySlug || a.category === categorySlug))
      .slice(0, limit);
  },

  searchArticles: (query) => {
    if (!query || query.trim() === "") return [];
    const q = query.toLowerCase().trim();
    return NimLearnArticles.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.tags.some(tag => tag.toLowerCase().includes(q))
    );
  },

  // EXACT 4 CATEGORIES INFO - Dynamic counts based on syllabus articles
  getCategoriesInfo: () => [
    {
      name: "Artificial Intelligence",
      slug: "artificial-intelligence",
      file: "artificial-intelligence.html",
      icon: "🤖",
      description: "Explore neural networks, machine learning models, transformers, and the evolution of artificial intelligence.",
      count: NimLearnArticles.filter(a => a.categorySlug === "artificial-intelligence").length,
      color: "#2563eb"
    },
    {
      name: "Computer Science",
      slug: "computer-science",
      file: "computer-science.html",
      icon: "💻",
      description: "Understand algorithmic complexity, Big O notation, data structures, and operating system internals.",
      count: NimLearnArticles.filter(a => a.categorySlug === "computer-science").length,
      color: "#0284c7"
    },
    {
      name: "Psychology",
      slug: "psychology",
      file: "psychology.html",
      icon: "🧠",
      description: "Delve into the neurobiology of dreams, cognitive biases, memory systems, and human behavioral science.",
      count: NimLearnArticles.filter(a => a.categorySlug === "psychology").length,
      color: "#7c3aed"
    },
    {
      name: "History of World",
      slug: "history-of-world",
      file: "history-of-world.html",
      icon: "🌍",
      description: "Trace ancient civilizational cycles, historical trade routes, empires, and global cultural developments.",
      count: NimLearnArticles.filter(a => a.categorySlug === "history-of-world").length,
      color: "#d97706"
    }
  ]
};

if (typeof window !== "undefined") {
  window.NimLearnArticles = NimLearnArticles;
  window.NimLearnDB = NimLearnDB;
}

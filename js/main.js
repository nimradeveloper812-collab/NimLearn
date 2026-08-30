/**
 * NimLearn - Main Application Logic & Rendering Engine
 * Tagline: "Learn. Explore. Understand."
 * Categories: Artificial Intelligence, Computer Science, Psychology, History of World
 */

// Global UI Namespace
window.NimLearnUI = {
  showToast: function (message, type = "info") {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    let icon = "ℹ";
    if (type === "success") icon = "✓";
    if (type === "warning") icon = "⚠️";

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  },

  generateArticleCardHTML: function (article, relativePathPrefix = "") {
    const categoryBadgeClass = `badge-${article.categorySlug}`;
    const articleUrl = `${relativePathPrefix}article.html?id=${article.id}`;

    return `
      <article class="article-card" data-category="${article.categorySlug}">
        <a href="${articleUrl}" class="article-card-thumb-link" aria-label="${article.title}">
          <img src="${article.featuredImage}" alt="${article.title}" class="article-card-thumb" loading="lazy">
          <div class="article-card-category-overlay">
            <span class="badge ${categoryBadgeClass}">${article.categoryIcon} ${article.category}</span>
          </div>
        </a>
        <div class="article-card-body">
          <div class="article-card-meta">
            <span>${article.publishedDate}</span>
            <span class="meta-dot"></span>
            <span>${article.readingTime}</span>
          </div>
          <h3 class="article-card-title">
            <a href="${articleUrl}">${article.title}</a>
          </h3>
          <p class="article-card-excerpt">${article.excerpt}</p>
          <div class="article-card-footer">
            <div class="article-author-mini">
              <img src="${article.author.avatar}" alt="${article.author.name}" class="author-avatar-mini" loading="lazy">
              <span class="author-name-mini">${article.author.name}</span>
            </div>
            <a href="${articleUrl}" class="article-read-link">Read Story →</a>
          </div>
        </div>
      </article>
    `;
  }
};

// DOM Content Loaded Handler
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn && navLinks) {
    const updateIcon = (isActive) => {
      if (isActive) {
        mobileMenuBtn.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        `;
      } else {
        mobileMenuBtn.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
      }
    };

    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isActive = navLinks.classList.toggle("active");
      mobileMenuBtn.setAttribute("aria-expanded", isActive);
      updateIcon(isActive);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (navLinks.classList.contains("active") && !navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navLinks.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        updateIcon(false);
      }
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        updateIcon(false);
      });
    });
  }

  // Scroll Progress & Scroll Top
  window.addEventListener("scroll", () => {
    const progressBar = document.querySelector(".reading-progress-bar");
    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrolled = (window.scrollY / docHeight) * 100;
        progressBar.style.width = `${Math.min(scrolled, 100)}%`;
      }
    }
  });

  // Page Initializers
  initHomepage();
  initBlogPage();
  initCategoryPage();
  initArticleReaderPage();
});

/**
 * Homepage Initializer
 */
function initHomepage() {
  const latestGrid = document.getElementById("homepageLatestGrid");
  const featuredContainer = document.getElementById("homepageFeaturedHero");
  const categoryCardsContainer = document.getElementById("homepageCategoryCards");

  if (!latestGrid && !featuredContainer && !categoryCardsContainer) return;
  if (typeof window.NimLearnDB === "undefined") return;

  // Render Hero Featured Article
  if (featuredContainer) {
    const featuredArticles = window.NimLearnDB.getFeaturedArticles();
    const mainFeatured = featuredArticles[0] || window.NimLearnArticles[0];

    if (mainFeatured) {
      featuredContainer.innerHTML = `
        <div class="featured-hero-card">
          <div class="featured-hero-media">
            <img src="${mainFeatured.featuredImage}" alt="${mainFeatured.title}" loading="lazy">
          </div>
          <div class="featured-hero-content">
            <div>
              <span class="badge badge-${mainFeatured.categorySlug}">${mainFeatured.categoryIcon} ${mainFeatured.category}</span>
            </div>
            <h2 class="featured-hero-title">
              <a href="article.html?id=${mainFeatured.id}">${mainFeatured.title}</a>
            </h2>
            <p class="article-card-excerpt">${mainFeatured.excerpt}</p>
            <div class="article-card-footer">
              <div class="article-author-mini">
                <img src="${mainFeatured.author.avatar}" alt="${mainFeatured.author.name}" class="author-avatar-mini" loading="lazy">
                <span class="author-name-mini">${mainFeatured.author.name}</span>
              </div>
              <a href="article.html?id=${mainFeatured.id}" class="btn btn-primary btn-sm">Read Article</a>
            </div>
          </div>
        </div>
      `;
    } else {
      featuredContainer.innerHTML = `
        <div style="text-align: center; padding: 3.5rem 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">📚</div>
          <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.5rem;">Syllabus Content Coming Soon</h3>
          <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto;">Articles will be published here based on your upcoming syllabus topics across Artificial Intelligence, Computer Science, Psychology, and History of World.</p>
        </div>
      `;
    }
  }

  // Render Latest Articles Grid
  if (latestGrid) {
    const latestArticles = window.NimLearnDB.getLatestArticles(6);
    if (latestArticles.length > 0) {
      latestGrid.innerHTML = latestArticles
        .map((art) => window.NimLearnUI.generateArticleCardHTML(art))
        .join("");
    } else {
      latestGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
          <p style="color: var(--text-muted); font-size: 1.05rem;">No syllabus articles published yet. Content will automatically appear here as syllabus topics are added.</p>
        </div>
      `;
    }
  }

  // Render 4 Category Cards
  if (categoryCardsContainer) {
    const categories = window.NimLearnDB.getCategoriesInfo();
    categoryCardsContainer.innerHTML = categories
      .map((cat) => `
        <a href="categories/${cat.file}" class="category-card" style="--category-color: ${cat.color};">
          <div class="category-card-icon">${cat.icon}</div>
          <h3 class="category-card-title">${cat.name}</h3>
          <p class="category-card-desc">${cat.description}</p>
          <div class="category-card-footer">
            <span>${cat.count} ${cat.count === 1 ? 'Article' : 'Articles'}</span>
            <span>Explore →</span>
          </div>
        </a>
      `)
      .join("");
  }
}

/**
 * Blog Catalog Page (blog.html)
 */
function initBlogPage() {
  const blogGrid = document.getElementById("blogArticlesGrid");
  const filterPillsContainer = document.getElementById("blogFilterPills");
  const blogSearchInput = document.getElementById("blogSearchInput");

  if (!blogGrid) return;
  if (typeof window.NimLearnDB === "undefined") return;

  let activeCategory = "all";
  let activeSearchQuery = "";

  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("category");
  if (categoryParam) activeCategory = categoryParam;

  function getFilteredArticles() {
    let filtered = window.NimLearnDB.getAllArticles();

    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (a) => a.categorySlug.toLowerCase() === activeCategory.toLowerCase() ||
               a.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (activeSearchQuery.trim() !== "") {
      const q = activeSearchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (a) => a.title.toLowerCase().includes(q) ||
               a.excerpt.toLowerCase().includes(q) ||
               a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return filtered;
  }

  function renderBlogArticles() {
    const matching = getFilteredArticles();

    if (matching.length === 0) {
      blogGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="margin-bottom: 0.5rem;">No articles in syllabus yet.</h3>
          <p style="color: var(--text-secondary); max-width: 420px; margin: 0 auto 1.5rem;">Articles will be populated as syllabus topics are provided.</p>
        </div>
      `;
      return;
    }

    blogGrid.innerHTML = matching
      .map((art) => window.NimLearnUI.generateArticleCardHTML(art))
      .join("");
  }

  function updatePillActiveState() {
    if (!filterPillsContainer) return;
    filterPillsContainer.querySelectorAll(".category-pill").forEach((pill) => {
      const cat = pill.getAttribute("data-category");
      if (cat === activeCategory) {
        pill.classList.add("active");
      } else {
        pill.classList.remove("active");
      }
    });
  }

  if (filterPillsContainer) {
    filterPillsContainer.addEventListener("click", (e) => {
      const pill = e.target.closest(".category-pill");
      if (!pill) return;
      activeCategory = pill.getAttribute("data-category");
      updatePillActiveState();
      renderBlogArticles();
    });
  }

  if (blogSearchInput) {
    let debounce;
    blogSearchInput.addEventListener("input", (e) => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        activeSearchQuery = e.target.value;
        renderBlogArticles();
      }, 150);
    });
  }

  updatePillActiveState();
  renderBlogArticles();
}

/**
 * Category Page (categories/*.html)
 */
function initCategoryPage() {
  const categoryGrid = document.getElementById("categoryArticlesGrid");
  const categorySlug = document.body.getAttribute("data-category-slug");

  if (!categoryGrid || !categorySlug) return;
  if (typeof window.NimLearnDB === "undefined") return;

  // AI Category Special Book Layout Rendering
  if (categorySlug === "artificial-intelligence" && typeof window.AIBookData !== "undefined") {
    const book = window.AIBookData;

    categoryGrid.className = "book-syllabus-wrapper";

    const partsHTML = book.parts
      .map((part) => {
        const chaptersHTML = part.chapters
          .map((chap) => {
            const topicsHTML = chap.topics
              .map((top) => {
                const statusTag = top.content ? '<span class="book-topic-status has-content">Read</span>' : '<span class="book-topic-status">Pending</span>';
                return `
                  <li class="book-topic-item" data-topic-id="${top.id}">
                    <span class="book-topic-bullet">•</span>
                    <span>${top.title}</span>
                    ${statusTag}
                  </li>
                `;
              })
              .join("");

            return `
              <div class="book-chapter-card">
                <div class="book-chapter-num">Chapter ${chap.chapterNumber}</div>
                <h4 class="book-chapter-title">${chap.title}</h4>
                <ul class="book-topics-list">
                  ${topicsHTML}
                </ul>
              </div>
            `;
          })
          .join("");

        return `
          <div class="book-part-card">
            <div class="book-part-header">
              <div class="book-part-label">${part.partNumber}</div>
              <h3 class="book-part-title">${part.title}</h3>
            </div>
            <div class="book-chapters-grid">
              ${chaptersHTML}
            </div>
          </div>
        `;
      })
      .join("");

    categoryGrid.innerHTML = `
      <div class="book-header-banner">
        <div class="book-badge">📘 OFFICIAL BOOK SYLLABUS</div>
        <h2 class="book-main-title">${book.title}</h2>
        <p class="book-main-tagline">${book.tagline}</p>
        <div class="book-stats-strip">
          <div class="book-stat-item">📦 <span>7 Parts</span></div>
          <div class="book-stat-item">📖 <span>27 Chapters</span></div>
          <div class="book-stat-item">📝 <span>180+ Topics</span></div>
          <div class="book-stat-item">📌 <span>Send topic content to publish</span></div>
        </div>
      </div>
      <div class="book-parts-grid">
        ${partsHTML}
      </div>
    `;

    // Modal Reader setup
    let modal = document.getElementById("topicReaderModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "topicReaderModal";
      modal.className = "topic-reader-modal";
      modal.innerHTML = `
        <div class="topic-modal-card">
          <div class="topic-modal-header">
            <div>
              <span class="badge badge-ai" id="topicModalMeta">Chapter 1 • Foundations</span>
              <h2 id="topicModalTitle" style="margin-top: 0.35rem; font-size: 1.5rem; font-weight: 800;">Topic Title</h2>
            </div>
            <button class="modal-close-btn" id="closeTopicModalBtn">✕</button>
          </div>
          <div class="topic-modal-body" id="topicModalBody"></div>
        </div>
      `;
      document.body.appendChild(modal);

      const closeBtn = modal.querySelector("#closeTopicModalBtn");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          modal.classList.remove("active");
        });
      }

      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("active");
        }
      });
    }

    categoryGrid.querySelectorAll(".book-topic-item").forEach((item) => {
      item.addEventListener("click", () => {
        const topicId = item.getAttribute("data-topic-id");
        const topicTitle = item.querySelector("span:nth-child(2)").textContent;

        let foundTopic = null;
        let foundChapter = null;
        let foundPart = null;

        for (const part of book.parts) {
          for (const chap of part.chapters) {
            for (const top of chap.topics) {
              if (top.id === topicId) {
                foundTopic = top;
                foundChapter = chap;
                foundPart = part;
                break;
              }
            }
          }
        }

        if (foundTopic && foundTopic.content) {
          document.getElementById("topicModalMeta").textContent = `${foundPart.partNumber} • Chapter ${foundChapter.chapterNumber}`;
          document.getElementById("topicModalTitle").textContent = foundTopic.title;
          document.getElementById("topicModalBody").innerHTML = foundTopic.content;
          modal.classList.add("active");
        } else {
          if (typeof window.NimLearnUI !== "undefined" && window.NimLearnUI.showToast) {
            window.NimLearnUI.showToast(`Topic: "${topicTitle}". Send content to publish!`);
          } else {
            alert(`Topic: "${topicTitle}"\nProvide content for this topic to publish it on NimLearn!`);
          }
        }
      });
    });

    return;
  }

  const categoryArticles = window.NimLearnDB.getArticlesByCategory(categorySlug);

  if (categoryArticles.length === 0) {
    categoryGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
        <div style="font-size: 2.5rem; margin-bottom: 1rem;">📚</div>
        <h3 style="margin-bottom: 0.5rem; font-weight: 800;">No articles in this syllabus category yet.</h3>
        <p style="color: var(--text-secondary); max-width: 420px; margin: 0 auto;">Upload your syllabus topics for this category to publish articles.</p>
      </div>
    `;
    return;
  }

  categoryGrid.innerHTML = categoryArticles
    .map((art) => window.NimLearnUI.generateArticleCardHTML(art, "../"))
    .join("");
}

/**
 * Single Article Reader Page (article.html)
 */
function initArticleReaderPage() {
  const articleRoot = document.getElementById("articleReaderRoot");
  if (!articleRoot) return;
  if (typeof window.NimLearnDB === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get("id");

  let article = null;
  if (articleId) {
    article = window.NimLearnDB.getArticleById(articleId);
  }

  if (!article) {
    articleRoot.innerHTML = `
      <div class="container" style="text-align: center; padding: 6rem 1.5rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">📖</div>
        <h2 style="font-size: 2rem; font-weight: 800;">No Article Found</h2>
        <p style="color: var(--text-secondary); max-width: 450px; margin: 0.75rem auto 1.75rem;">Syllabus articles will be displayed here once added to the database.</p>
        <a href="index.html" class="btn btn-primary">Back to Homepage</a>
      </div>
    `;
    return;
  }

  document.title = `${article.title} — NimLearn`;

  const categoryBadgeClass = `badge-${article.categorySlug}`;
  const tagsHTML = article.tags
    .map((t) => `<span class="article-tag-pill">#${t}</span>`)
    .join("");

  articleRoot.innerHTML = `
    <div class="reading-progress-bar"></div>

    <article class="article-single-view">
      <header class="article-header">
        <div class="article-header-meta-top">
          <a href="categories/${article.categorySlug}.html" class="badge ${categoryBadgeClass}">${article.categoryIcon} ${article.category}</a>
          <span style="font-size: 0.85rem; color: var(--text-muted);">${article.publishedDate}</span>
          <span style="font-size: 0.85rem; color: var(--text-muted);">•</span>
          <span style="font-size: 0.85rem; color: var(--text-muted);">${article.readingTime}</span>
        </div>

        <h1 class="article-main-title">${article.title}</h1>
        <p class="article-subtitle">${article.subtitle}</p>

        <div class="article-author-bar">
          <div class="article-author-profile">
            <img src="${article.author.avatar}" alt="${article.author.name}" class="article-author-avatar">
            <div>
              <span class="article-author-name">${article.author.name}</span>
              <span class="article-author-role">${article.author.role}</span>
            </div>
          </div>
        </div>
      </header>

      <div class="article-featured-media-wrapper">
        <img src="${article.featuredImage}" alt="${article.title}" class="article-featured-img">
        <div class="article-media-caption">${article.imageCaption || article.title}</div>
      </div>

      <div class="article-body-wrapper">
        ${article.content}

        <div class="article-tags-wrapper">
          <span style="font-size: 0.85rem; font-weight: 700;">Tags:</span>
          ${tagsHTML}
        </div>
      </div>
    </article>

    <section class="section section-subtle">
      <div class="container">
        <div class="section-header">
          <div>
            <div class="section-kicker">Keep Learning</div>
            <h2 class="section-title">Related in ${article.category}</h2>
          </div>
          <a href="categories/${article.categorySlug}.html" class="view-all-link">View all →</a>
        </div>
        <div class="article-grid" id="relatedArticlesGrid"></div>
      </div>
    </section>
  `;

  const relatedContainer = document.getElementById("relatedArticlesGrid");
  if (relatedContainer) {
    const related = window.NimLearnDB.getRelatedArticles(article.id, article.categorySlug, 3);
    if (related.length > 0) {
      relatedContainer.innerHTML = related
        .map((art) => window.NimLearnUI.generateArticleCardHTML(art))
        .join("");
    } else {
      relatedContainer.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted);">No related articles found in this category.</p>`;
    }
  }
}

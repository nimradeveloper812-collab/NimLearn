/**
 * NimLearn - Instant Search Modal & Filtering Engine
 * Keyboard shortcut: Ctrl+K / Cmd+K or clicking the search icon button
 */

(function () {
  let searchModalBackdrop = null;
  let searchInput = null;
  let searchResultsContainer = null;

  function initSearchModal() {
    if (document.querySelector(".search-modal-backdrop")) return;

    const modalHTML = `
      <div class="search-modal-backdrop" id="searchModal">
        <div class="search-modal" role="dialog" aria-modal="true" aria-label="Search articles">
          <div class="search-modal-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted);">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" class="search-modal-input" id="searchModalInput" placeholder="Search Artificial Intelligence, Computer Science, Psychology, History..." autocomplete="off">
            <button class="search-modal-close" id="searchModalClose" aria-label="Close search" style="padding: 0.2rem; color: var(--text-muted);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="search-modal-results" id="searchModalResults">
            <div class="search-empty-state">
              <div class="search-empty-icon">💡</div>
              <p>Type keywords to search NimLearn articles across the 4 categories.</p>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);

    searchModalBackdrop = document.getElementById("searchModal");
    searchInput = document.getElementById("searchModalInput");
    searchResultsContainer = document.getElementById("searchModalResults");

    searchModalBackdrop.addEventListener("click", (e) => {
      if (e.target === searchModalBackdrop) closeSearchModal();
    });

    document.getElementById("searchModalClose").addEventListener("click", closeSearchModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && searchModalBackdrop.classList.contains("active")) {
        closeSearchModal();
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearchModal();
      }
    });

    let debounceTimer;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        performModalSearch(e.target.value.trim());
      }, 150);
    });
  }

  window.openSearchModal = function () {
    initSearchModal();
    if (searchModalBackdrop) {
      searchModalBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        if (searchInput) searchInput.focus();
      }, 100);
    }
  };

  window.closeSearchModal = function () {
    if (searchModalBackdrop) {
      searchModalBackdrop.classList.remove("active");
      document.body.style.overflow = "";
      if (searchInput) searchInput.value = "";
    }
  };

  function performModalSearch(query) {
    if (!searchResultsContainer) return;

    if (!query) {
      searchResultsContainer.innerHTML = `
        <div class="search-empty-state">
          <div class="search-empty-icon">💡</div>
          <p>Type keywords to search NimLearn articles across the 4 categories.</p>
        </div>
      `;
      return;
    }

    if (typeof window.NimLearnDB === "undefined") return;

    const results = window.NimLearnDB.searchArticles(query);

    if (results.length === 0) {
      searchResultsContainer.innerHTML = `
        <div class="search-empty-state">
          <div class="search-empty-icon">🔍</div>
          <p style="font-weight: 600; color: var(--text-primary);">No articles found matching "${query}".</p>
        </div>
      `;
      return;
    }

    const isCategoryPage = window.location.pathname.includes("/categories/");
    const articleBaseUrl = isCategoryPage ? "../article.html" : "article.html";

    searchResultsContainer.innerHTML = results.map((art) => `
      <a href="${articleBaseUrl}?id=${art.id}" class="search-result-item">
        <div class="search-result-title">${art.title}</div>
        <div class="search-result-meta">
          <span>${art.categoryIcon} ${art.category}</span>
          <span>•</span>
          <span>${art.readingTime}</span>
        </div>
      </a>
    `).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    initSearchModal();
    document.querySelectorAll(".search-trigger-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openSearchModal();
      });
    });
  });
})();

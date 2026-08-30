/**
 * NimLearn - Dark / Light Theme Manager
 * Features:
 * - Full Dark Mode & Light Mode support across the entire site
 * - Persistent theme selection via localStorage ('nimlearn-theme')
 * - System color scheme preference auto-detection
 * - Smooth transition toggle button in header
 */

(function () {
  const THEME_STORAGE_KEY = 'nimlearn-theme';

  // Determine initial theme
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply theme to html element
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    updateToggleButtons(theme);
  }

  // Update theme toggle buttons UI in header
  function updateToggleButtons(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      if (theme === 'dark') {
        btn.setAttribute('title', 'Switch to Light Mode');
        btn.setAttribute('aria-label', 'Switch to Light Mode');
        btn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        `;
      } else {
        btn.setAttribute('title', 'Switch to Dark Mode');
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
        btn.innerHTML = `
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        `;
      }
    });
  }

  // Toggle theme between dark and light
  window.toggleNimLearnTheme = function () {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  // Immediate theme application to prevent white flash
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Bind toggle buttons on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    updateToggleButtons(document.documentElement.getAttribute('data-theme'));

    document.querySelectorAll('.theme-toggle-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.toggleNimLearnTheme();
      });
    });
  });

  // Listen to OS system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
})();

// main.js — Faith Frontier / Case Portal
// Lightweight, dependency-free utilities for navigation, theming, and accessibility.

(function () {
  'use strict';

  // -----------------------------
  // Small helpers
  // -----------------------------
  var $ = function (selector, scope) {
    return (scope || document).querySelector(selector);
  };

  var $$ = function (selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  };

  var isGithubLikeHost = function () {
    var host = window.location.hostname;
    return host.endsWith('github.io') || host === 'localhost';
  };

  // -----------------------------
  // Mobile navigation toggle
  // Expects:
  //   <button class="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">☰</button>
  //   <nav class="site-nav">...</nav>
  // -----------------------------
  var initMobileNav = function () {
    var toggle = $('.nav-toggle');
    var nav = $('.site-nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  };

  // -----------------------------
  // Theme / Dark mode toggle
  // CSS is driven by theme.css using :root and html.light overrides
  // We treat:
  //   mode = 'dark'  → html.classList.add('light')
  //   mode = 'light' → html.classList.remove('light')
  // -----------------------------
  var THEME_KEY = 'ff-theme'; // localStorage key

  var applyTheme = function (mode) {
    var root = document.documentElement;
    var btn = $('.theme-toggle');

    if (mode === 'dark') {
      root.classList.add('light'); // dark palette is defined on html.light
      if (btn) {
        btn.textContent = '☀️';
        btn.setAttribute('aria-label', 'Switch to light mode');
      }
    } else {
      root.classList.remove('light');
      if (btn) {
        btn.textContent = '🌓';
        btn.setAttribute('aria-label', 'Switch to dark mode');
      }
    }
  };

  var detectInitialTheme = function () {
    try {
      var stored = localStorage.getItem(THEME_KEY);
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
    } catch (e) {
      // localStorage might be blocked — ignore
    }

    // Fallback: prefers-color-scheme media query
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };

  var initThemeToggle = function () {
    var btn = $('.theme-toggle');
    if (!btn) {
      // Still apply initial theme without a visible toggle
      applyTheme(detectInitialTheme());
      return;
    }

    var mode = detectInitialTheme();
    applyTheme(mode);

    btn.addEventListener('click', function () {
      var current = document.documentElement.classList.contains('light') ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {
        // ignore
      }
    });
  };

  // -----------------------------
  // Highlight active nav item
  // Matches current path to <a href="..."> in .site-nav
  // -----------------------------
  var initActiveNav = function () {
    var navLinks = $$('.site-nav a');
    if (!navLinks.length) return;

    var path = window.location.pathname.replace(/\/+$/, ''); // strip trailing slash

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;

      var linkPath = href.replace(/^https?:\/\/[^/]+/, ''); // strip origin
      linkPath = linkPath.replace(/\/+$/, '');

      if (linkPath && linkPath === path) {
        link.classList.add('is-active');
      }
    });
  };

  // -----------------------------
  // Smooth scroll for in-page anchors
  // Links like <a href="#main">Skip to content</a>
  // -----------------------------
  var initSmoothScroll = function () {
    document.addEventListener('click', function (evt) {
      var target = evt.target;

      // Walk up if icon/span inside link
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
      }
      if (!target) return;

      var href = target.getAttribute('href') || '';
      if (!href || href.charAt(0) !== '#') return;

      var id = href.slice(1);
      var el = document.getElementById(id);
      if (!el) return;

      evt.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.focus({ preventScroll: true });
    });
  };

  // -----------------------------
  // External link handling:
  //   - Adds rel="noopener noreferrer"
  //   - Opens in new tab for off-site links
  // -----------------------------
  var initExternalLinks = function () {
    var origin = window.location.origin;

    $$('a[href^="http"]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      if (href.indexOf(origin) === 0) return; // same site

      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      link.classList.add('external-link');
    });
  };

  // -----------------------------
  // Static contact form handler
  // For <form name="contact"> on static hosts
  // -----------------------------
  var initContactForm = function () {
    var form = document.forms.contact;
    if (!form) return;

    form.addEventListener('submit', function (evt) {
      if (!isGithubLikeHost()) {
        // On a real backend, allow normal submission
        return;
      }
      evt.preventDefault();
      alert('Thanks! Your message has been submitted.');
      form.reset();
    });
  };

  // -----------------------------
  // Collapsible timelines (optional)
  // For long case timelines with .timeline and .timeline-toggle
  // -----------------------------
  var initTimelineToggle = function () {
    var toggles = $$('.timeline-toggle');
    if (!toggles.length) return;

    toggles.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetSelector = btn.getAttribute('data-target');
        var timeline = targetSelector ? $(targetSelector) : btn.closest('.timeline-wrapper');
        if (!timeline) return;

        var expanded = btn.getAttribute('aria-expanded') === 'true';
        var next = !expanded;

        btn.setAttribute('aria-expanded', String(next));
        timeline.classList.toggle('is-collapsed', !next);
      });
    });
  };

  // -----------------------------
  // DOM Ready
  // -----------------------------
  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initThemeToggle();
    initActiveNav();
    initSmoothScroll();
    initExternalLinks();
    initContactForm();
    initTimelineToggle();
  });
})();

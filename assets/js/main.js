// main.js — Faith Frontier / Case Portal
// Lightweight, dependency-free utilities for navigation and accessibility.

(function () {
  'use strict';

  // Small helpers
  var $ = function (selector, scope) {
    return (scope || document).querySelector(selector);
  };

  var $$ = function (selector, scope) {
    return Array.prototype.slice.call(
      (scope || document).querySelectorAll(selector)
    );
  };

  // -----------------------------
  // Mobile navigation toggle
  // -----------------------------
  function initMobileNav() {
    var toggle = $('.nav-toggle');
    // Prefer the #site-nav id, fall back to .site-nav if needed
    var nav = document.getElementById('site-nav') || $('.site-nav');

    if (!toggle || !nav) return;

    // Ensure starting state
    toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a nav link is clicked (better mobile UX)
    $$('#site-nav a, .site-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (!nav.classList.contains('is-open')) return;
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // -----------------------------
  // Highlight active nav item
  // -----------------------------
  function initActiveNav() {
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
  }

  // -----------------------------
  // Smooth scroll for in-page anchors
  // -----------------------------
  function initSmoothScroll() {
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
      if (typeof el.focus === 'function') {
        el.focus({ preventScroll: true });
      }
    });
  }

  // -----------------------------
  // External link handling
  // -----------------------------
  function initExternalLinks() {
    var origin = window.location.origin;

    $$('a[href^="http"]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      if (href.indexOf(origin) === 0) return; // same site

      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      link.classList.add('external-link');
    });
  }

  // -----------------------------
  // Static contact form handler
  // -----------------------------
  function initContactForm() {
    var form = document.forms.contact;
    if (!form) return;

    form.addEventListener('submit', function (evt) {
      // For static hosting. If you later add a real backend, remove this block.
      evt.preventDefault();
      alert('Thanks! Your message has been submitted.');
      form.reset();
    });
  }

  // -----------------------------
  // Collapsible timelines (optional)
  // -----------------------------
  function initTimelineToggle() {
    var toggles = $$('.timeline-toggle');
    if (!toggles.length) return;

    toggles.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetSelector = btn.getAttribute('data-target');
        var timeline = targetSelector
          ? $(targetSelector)
          : btn.closest('.timeline-wrapper');
        if (!timeline) return;

        var expanded = btn.getAttribute('aria-expanded') === 'true';
        var next = !expanded;

        btn.setAttribute('aria-expanded', String(next));
        timeline.classList.toggle('is-collapsed', !next);
      });
    });
  }

  // -----------------------------
  // DOM Ready
  // -----------------------------
  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initActiveNav();
    initSmoothScroll();
    initExternalLinks();
    initContactForm();
    initTimelineToggle();
  });
})();

// main.js — Navigation and accessibility for Faith Frontier

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav') || document.querySelector('.site-nav');

    if (!toggle || !nav) {
      // If this happens, HTML hooks don't match
      return;
    }

    // Start closed
    toggle.setAttribute('aria-expanded', 'false');

    // Toggle menu on click
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      
      // Focus first link when opening on mobile
      if (isOpen) {
        var firstLink = nav.querySelector('a');
        if (firstLink) {
          setTimeout(function() { firstLink.focus(); }, 100);
        }
      }
    });

    // Close menu when a link is clicked (mobile UX)
    nav.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (!link) return;
      if (!nav.classList.contains('is-open')) return;
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });

    // Close menu with Escape key (accessibility)
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.keyCode === 27) {
        if (nav.classList.contains('is-open')) {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.focus();
        }
      }
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function (e) {
      if (!nav.classList.contains('is-open')) return;
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();
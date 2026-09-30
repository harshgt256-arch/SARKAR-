/* ═══════════════════════════════════════════════════════════════
   SARKAR — Editorial sections
   Full-screen editorial showcases after the 4 canvas scroll
   sections. Entrance stagger, CTA flash, section click-through.
   ───────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── Entrance animation — fires once per section ── */
  function initEditorialEntrances() {
    const sections = document.querySelectorAll('.editorial-section');

    sections.forEach((section) => {
      const text = section.querySelector('.editorial-text');
      if (!text) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              text.classList.add('visible');
              io.disconnect(); // once: true
            }
          });
        },
        { threshold: 0.3 }
      );

      io.observe(section);
    });

    // Stagger delays per child type (accords 0s, name .12s, desc .22s, cta .36s)
    const DELAYS = {
      '.edit-accords': '0s',
      '.edit-name': '0.12s',
      '.edit-desc': '0.22s',
      '.edit-cta': '0.36s',
    };

    sections.forEach((section) => {
      Object.entries(DELAYS).forEach(([selector, delay]) => {
        const el = section.querySelector(selector);
        if (el) el.style.transitionDelay = delay;
      });
    });
  }

  /* ── Click behavior — CTA flash, whole-section navigation ── */
  function initEditorialClicks() {
    document.querySelectorAll('.editorial-section').forEach((section) => {
      const href = section.dataset.href;
      if (!href) return;

      section.addEventListener('click', (e) => {
        const cta = e.target.closest('.edit-cta');

        if (cta) {
          // Brief flash, then navigate
          e.preventDefault();
          cta.style.opacity = '0.5';
          setTimeout(() => {
            window.location.href = cta.href;
          }, 200);
        } else {
          // Whole-section click navigates (excluding the link itself)
          window.location.href = href;
        }
      });
    });
  }

  /* ── Boot ── */
  document.addEventListener('DOMContentLoaded', () => {
    initEditorialEntrances();
    initEditorialClicks();
  });
})();

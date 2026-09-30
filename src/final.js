/* ═══════════════════════════════════════════════════════════════
   SARKAR — Final sections (#the-one, #cta-section)
   Staggered scroll entrance + CTA button actions. Vanilla JS.
   ───────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── Entrance: staggered per element, once, threshold 0.25 ── */
  function initFinalSections() {
    const groups = [
      {
        section: document.getElementById('the-one'),
        // eyebrow 0s → line1 .12s → line2 .24s → subtext .38s (spec)
        selector: '.one-eyebrow, .one-line, .one-sub',
      },
      {
        section: document.getElementById('cta-section'),
        // same rhythm applied to the CTA column
        selector: '.cta-eyebrow, .cta-heading, .cta-desc, .cta-buttons',
      },
    ];

    groups.forEach(({ section, selector }) => {
      if (!section) return;
      const items = section.querySelectorAll(selector);

      items.forEach((el, i) => {
        el.style.transitionDelay = `${(i * 0.12).toFixed(2)}s`;
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              items.forEach((el) => el.classList.add('visible'));
              io.disconnect(); // once only
            }
          });
        },
        { threshold: 0.25 }
      );

      io.observe(section);
    });
  }

  /* ── CTA button actions ── */
  function initCtaButtons() {
    const shopNow = document.getElementById('cta-shop-now');
    const explore = document.getElementById('cta-explore');

    if (shopNow) {
      shopNow.addEventListener('click', () => {
        window.location.href = 'https://www.sarkar.store/';
      });
    }

    if (explore) {
      explore.addEventListener('click', () => {
        const shop = document.getElementById('shop');
        if (!shop) return;
        if (window.__lenis) {
          window.__lenis.scrollTo(shop, { duration: 1.4 });
        } else {
          shop.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initFinalSections();
    initCtaButtons();
  });
})();

/* ═══════════════════════════════════════════════════════════════
   SARKAR — Landing Page Scripts (Vite entry module)
   Per design.md: GSAP 3.13 + ScrollTrigger scroll animations,
   sticky header blur, video autoplay-on-scroll, cart count stub.
   ═══════════════════════════════════════════════════════════════ */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './unboxing.js';

gsap.registerPlugin(ScrollTrigger);

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* ──────────────── SMOOTH SCROLL (Lenis) ────────────────
     Drives the whole page's inertia feel; kept in sync with
     ScrollTrigger via the GSAP ticker (official integration). */
  let lenis = null;
  if (!prefersReducedMotion) {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    window.__lenis = lenis; // reused by smooth-scroll buttons site-wide
  }

  /* ──────────────── HEADER — blur bg after 10px scroll (Hero spec) ──────────────── */
  const header = document.getElementById('header');

  function onHeaderScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  }

  window.addEventListener('scroll', onHeaderScroll, { passive: true });
  onHeaderScroll();

  /* ──────────────── SCROLL TRIGGER ANIMATIONS (design.md §12) ──────────────── */
  // CSS handles the animation via .scroll-trigger classes; JS only manages
  // the --offscreen toggle (same approach as Shopify Dawn's animations.js).
  function initScrollTriggers() {
    const triggers = document.querySelectorAll('.scroll-trigger');
    if (!triggers.length) return;

    if (prefersReducedMotion) {
      triggers.forEach((el) => {
        el.classList.remove('scroll-trigger--offscreen');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('scroll-trigger--offscreen');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    // Start offscreen so CSS keyframes fire when revealed
    triggers.forEach((el) => {
      el.classList.add('scroll-trigger--offscreen');
      observer.observe(el);
    });
  }

  /* ──────────────── VIDEO AUTOPLAY ON SCROLL ──────────────── */
  function initShowcaseVideos() {
    const videos = document.querySelectorAll('video[data-autoplay]');
    if (!videos.length) return;

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              /* autoplay may be blocked until user interaction — ignore */
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    videos.forEach((v) => videoObserver.observe(v));
  }

  /* ──────────────── HERO — ENTRANCE + DISCOVER (vanilla JS, Hero spec) ──────────────── */
  function initHeroEntrance() {
    const content = document.getElementById('hero-content');
    const video = document.querySelector('.hero__video');
    if (!content) return;

    let revealed = false;
    function reveal() {
      if (revealed) return;
      revealed = true;
      content.classList.add('is-visible');
    }

    // Spec: animate once the video can play; timeout guards against the
    // event never firing (e.g. paused data-saver video)
    if (!video || video.readyState >= 3) {
      reveal();
    } else {
      video.addEventListener('canplay', reveal, { once: true });
      setTimeout(reveal, 2500);
    }
    if (prefersReducedMotion) reveal();
  }

  function initDiscoverScroll() {
    const btn = document.getElementById('discover-btn');
    const target = document.getElementById('perfume-sections');
    if (!btn || !target) return;
    btn.addEventListener('click', () => {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { duration: 1.4 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /* ──────────────── SHOWCASE TITLES — REVEAL (GSAP) ──────────────── */
  function initShowcaseReveals() {
    if (prefersReducedMotion) return;

    document.querySelectorAll('.showcase').forEach((section) => {
      const title = section.querySelector('.showcase__title');
      if (!title) return;

      gsap.from(title, {
        yPercent: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
        },
      });
    });
  }

  /* ──────────────── 360° SCROLL-SCRUB VIEWER (design.md §8) ──────────────── */
  // Frames are baked into sprite sheets (4×3 grid, 12 frames per sheet), so the
  // whole experience is self-hosted — no CDN upload needed. The engine loads
  // the sequence's sheets and draws the sub-rectangle for the current frame.
  // To move sheets to a CDN later, set CDN_FRAME_BASE:
  const CDN_FRAME_BASE = null; // e.g. 'https://cdn.example.com/sarkar/frames/'
  const SCRUB_LERP = 0.12; // frame interpolation factor (design.md §8)
  const SHEET_COLS = 4;
  const SHEET_ROWS = 3;
  const FRAMES_PER_SHEET = SHEET_COLS * SHEET_ROWS; // 12

  function initFrameScrub() {
    document.querySelectorAll('.p360').forEach((section) => {
      const canvas = section.querySelector('.p360__canvas');
      const seq = section.dataset.sequence;
      if (!canvas || !seq) return;

      const ctx = canvas.getContext('2d');
      const base = CDN_FRAME_BASE || '/frames/';

      // sequence → [frameCount, sheetCount]
      const SEQUENCES = {
        black: [96, 8],
        unboxing: [120, 10],
        orion: [96, 8],
        reveal: [120, 10],
      };
      const config = SEQUENCES[seq];
      if (!config) return;
      const [total, sheetCount] = config;

      const sheets = new Array(sheetCount).fill(null);
      let current = 0;
      let target = 0;
      let allRequested = false;
      let inView = false;

      function draw(index) {
        const frame = Math.max(0, Math.min(total - 1, Math.round(index)));
        const sheetIndex = Math.floor(frame / FRAMES_PER_SHEET);
        const sheet = sheets[sheetIndex];
        if (!sheet || !sheet.naturalWidth) return;

        const cell = frame % FRAMES_PER_SHEET;
        const fw = sheet.naturalWidth / SHEET_COLS;
        const fh = sheet.naturalHeight / SHEET_ROWS;
        const sx = (cell % SHEET_COLS) * fw;
        const sy = Math.floor(cell / SHEET_COLS) * fh;

        // cover-fit the 16:9 cell into the canvas, preserving aspect ratio
        const scale = Math.max(canvas.width / fw, canvas.height / fh);
        const w = fw * scale;
        const h = fh * scale;
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          sheet,
          sx, sy, fw, fh,
          (canvas.width - w) / 2, (canvas.height - h) / 2, w, h
        );
      }

      function loadSheet(i) {
        if (i < 0 || i >= sheetCount || sheets[i]) return;
        const img = new Image();
        img.decoding = 'async';
        img.onload = () => draw(target); // repaint whenever a sheet lands
        img.src = `${base}${seq}/sheet-${String(i + 1).padStart(2, '0')}.jpg`;
        sheets[i] = img;
      }

      // With only 8–10 sheets (~1.5–3.6MB per sequence), request everything
      // the moment the section approaches — simple and never shows a gap.
      function requestAllSheets() {
        if (allRequested) return;
        allRequested = true;
        for (let i = 0; i < sheetCount; i++) loadSheet(i);
      }

      // Only scrub while the section is on screen (multiple canvas sections
      // would otherwise all draw every frame)
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            inView = entry.isIntersecting;
            if (entry.isIntersecting) requestAllSheets();
          });
        },
        { rootMargin: '50% 0px 50% 0px' }
      ).observe(section);

      let lastTime = performance.now();

      function tick(now) {
        // Frame-rate-independent smoothing: identical feel on 60/120Hz
        const dt = Math.min(0.1, (now - lastTime) / 1000);
        lastTime = now;
        if (inView) {
          current += (target - current) * (1 - Math.exp(-SCRUB_LERP * 60 * dt));
          if (Math.abs(target - current) < 0.05) current = target;
          draw(current);
        }
        requestAnimationFrame(tick);
      }

      // Scroll progress across the sticky track → target frame
      function onScrubScroll() {
        const rect = section.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;
        if (scrollable <= 0) return;
        const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
        target = progress * (total - 1);
      }

      window.addEventListener('scroll', onScrubScroll, { passive: true });
      onScrubScroll();
      requestAnimationFrame(tick);
    });
  }

  /* ──────────────── CART — COUNT STUB (no backend yet) ──────────────── */
  function initCartStub() {
    const bubble = document.querySelector('.cart-count-bubble');
    const buttons = document.querySelectorAll('.quick-add__submit');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!bubble) return;
        bubble.textContent = String(
          Math.min(9, parseInt(bubble.textContent, 10) + 1)
        );
      });
    });
  }

  /* ──────────────── INIT ──────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initScrollTriggers();
    initShowcaseVideos();
    initHeroEntrance();
    initDiscoverScroll();
    initShowcaseReveals();
    initFrameScrub();
    initCartStub();
  });
})();

/* ═══════════════════════════════════════════════════════════════
   SARKAR — Premium Unboxing scroll-scrub section
   Uses CanvasScrub + GSAP ScrollTrigger. Vanilla JS.
   ───────────────────────────────────────────────────────────── */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CanvasScrub } from './sections/canvasScrub.js';

gsap.registerPlugin(ScrollTrigger);

/* ─── CONFIG ───
   Set CLOUD to stream from Cloudinary; '' self-hosts from
   /frames-src/frames-unboxing/. Actual frame count: 120. */
const CLOUD = '';
const UNBOXING_FRAMES = 120;
const FOLDER = 'frames-unboxing';

function initUnboxingSection() {
  const container = document.getElementById('unboxing-section');
  const canvas = document.getElementById('unbox-canvas');
  if (!container || !canvas) return;

  const loaderBar = container.querySelector('.unbox-loader-bar');
  const loader = container.querySelector('.unbox-loader');
  const text = container.querySelector('.unbox-text');

  const unboxScrub = new CanvasScrub({
    container,
    canvas,
    folder: FOLDER,
    totalFrames: UNBOXING_FRAMES,
    cloud: CLOUD,
    onProgress() {}, // text is driven by ScrollTrigger progress below
    onLoad(pct) {
      if (loaderBar) loaderBar.style.width = pct + '%';
    },
    onReady() {
      if (loader) loader.classList.add('loaded');
    },
  });

  // Bootstrap: draw frame 1 as soon as it's in hand, then batch-load
  unboxScrub.init();

  // ScrollTrigger scrub across the 500vh track
  function updateUnboxText(p) {
    if (!text) return;
    // Visible between 30% and 80% of the track
    if (p > 0.3 && p < 0.8) {
      text.classList.add('visible');
    } else {
      text.classList.remove('visible');
    }
  }

  gsap.to({}, {
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.5,
      onUpdate(self) {
        unboxScrub.drawFrame(Math.max(1, Math.round(self.progress * (UNBOXING_FRAMES - 1))));
        updateUnboxText(self.progress);
      },
    },
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initUnboxingSection);
} else {
  initUnboxingSection();
}

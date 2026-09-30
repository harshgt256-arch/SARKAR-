/* ═══════════════════════════════════════════════════════════════
   CanvasScrub — reusable frame-by-frame canvas scrub engine
   (design.md §8 pattern) · pairs with GSAP ScrollTrigger.

   Frames are 1-indexed: frame_0001.jpg … frame_<totalFrames>.jpg
   Streams from Cloudinary when `cloud` is set; otherwise falls
   back to self-hosted /frames-src/<folder>/ (Vite public dir).
   ───────────────────────────────────────────────────────────── */

export class CanvasScrub {
  /**
   * @param {Object} opts
   * @param {HTMLElement} opts.container   Section wrapper (scroll trigger)
   * @param {HTMLCanvasElement} opts.canvas
   * @param {string} opts.folder           Cloudinary folder / local subfolder
   * @param {number} opts.totalFrames
   * @param {string} [opts.cloud]          Cloudinary cloud name ('' = local)
   * @param {Function} [opts.onProgress]   (progress 0..1) on each draw
   * @param {Function} [opts.onLoad]       (pct 0..100) per frame loaded
   * @param {Function} [opts.onReady]      first batch loaded, scrub usable
   */
  constructor({ container, canvas, folder, totalFrames, cloud = '', onProgress, onLoad, onReady }) {
    this.container = container;
    this.canvas = canvas;
    this.folder = folder;
    this.totalFrames = totalFrames;
    this.cloud = cloud;
    this.onProgress = onProgress || (() => {});
    this.onLoad = onLoad || (() => {});
    this.onReady = onReady || (() => {});

    this.frames = new Array(totalFrames).fill(null);
    this.current = 0;
    this.ready = false;
    this.dpr = 1;
    this.ctx = canvas.getContext('2d');

    // Keep the canvas crisp and cover-fit on viewport changes
    window.addEventListener('resize', () => this.resize(), { passive: true });
    window.addEventListener('orientationchange', () => this.resize(), { passive: true });
  }

  frameURL(n) {
    const padded = String(n).padStart(4, '0');
    if (this.cloud) {
      const isMobile = window.innerWidth < 768;
      const w = isMobile ? 720 : 1920;
      return `https://res.cloudinary.com/${this.cloud}/image/upload/f_auto,q_auto,w_${w}/${this.folder}/frame_${padded}.jpg`;
    }
    return `/frames-src/${this.folder}/frame_${padded}.jpg`;
  }

  async init() {
    // 1. Preload the first batch (progress bar runs), first frame paints instantly
    const firstBatch = Math.min(30, this.totalFrames);
    await this._load(1);
    this.resize();
    this.drawFrame(1);

    let loaded = 1;
    this.onLoad(Math.round((loaded / this.totalFrames) * 100));
    const batch = [];
    for (let n = 2; n <= firstBatch; n++) {
      batch.push(
        this._load(n).then(() => {
          loaded++;
          this.onLoad(Math.round((loaded / this.totalFrames) * 100));
        })
      );
    }
    await Promise.all(batch);

    // 2. Ready — scrub usable, loader can fade
    this.ready = true;
    this.onReady();

    // 3. Remaining frames load in the background — no blocking
    for (let n = firstBatch + 1; n <= this.totalFrames; n++) {
      this._load(n).then(() => {
        loaded++;
        this.onLoad(Math.round((loaded / this.totalFrames) * 100));
      });
    }
  }

  _load(n) {
    const i = n - 1;
    if (this.frames[i]) return Promise.resolve();
    return new Promise((resolve) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        this.frames[i] = img;
        resolve();
      };
      img.onerror = () => resolve(); // never hang on one 404
      img.src = this.frameURL(n);
    });
  }

  resize() {
    // DPR-aware canvas sizing (capped at 2× for memory)
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(window.innerWidth * this.dpr);
    this.canvas.height = Math.round(window.innerHeight * this.dpr);
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(this.dpr, this.dpr);
    if (this.current > 0) this.drawFrame(this.current);
  }

  drawFrame(n) {
    this.current = n;
    const img = this.frames[n - 1];
    if (!img || !img.naturalWidth) return;

    // Center-cover: maintain 16:9 within the CSS-pixel viewport
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scale = Math.max(vw / img.naturalWidth, vh / img.naturalHeight);
    const drawW = img.naturalWidth * scale;
    const drawH = img.naturalHeight * scale;
    const drawX = (vw - drawW) / 2;
    const drawY = (vh - drawH) / 2;

    this.ctx.clearRect(0, 0, vw, vh);
    this.ctx.drawImage(img, drawX, drawY, drawW, drawH);
    this.onProgress(this.current / (this.totalFrames - 1));
  }
}

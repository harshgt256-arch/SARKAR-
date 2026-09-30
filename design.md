---
version: 1.0
name: sarkar-store-design-system
description: >
  A cinematic dark-luxury fragrance brand identity built on pure black (#000000) canvases with
  white (#FFFFFF) typography. The entire site uses the geometric sans-serif "Unbounded" across all
  weights (200–900), creating a commanding, regal typographic system. Zero border-radius on buttons
  and inputs pairs with edge-to-edge hero imagery, GSAP-powered scroll animations, a 600-frame
  canvas-scrub 360° product viewer, and image hover-scale effects to deliver a premium editorial
  experience. The UI follows a "chrome-less" philosophy — no decorative gradients on chrome, no
  rounded corners, maximizing product photography impact against darkness.

source_url: "https://www.sarkar.store/"
platform: Shopify (Dawn theme, heavily customized)
last_analyzed: "2026-09-28"
---

# SARKAR STORE — Complete Design System

> *"Power isn't inherited. It's built."*
>
> Premium luxury fragrance brand by Bhuvan Bam. Dark cinematic aesthetic,
> military-grade typographic precision, zero-ornament UI philosophy.

---

## Table of Contents

1. [Color System](#1-color-system)
2. [Typography](#2-typography)
3. [Custom Properties — Complete `:root` Block](#3-custom-properties)
4. [Layout & Grid System](#4-layout--grid-system)
5. [Header & Navigation](#5-header--navigation)
6. [Loading & Page Transitions](#6-loading--page-transitions)
7. [Hero Section — Slideshow](#7-hero-section--slideshow)
8. [Product 360° Canvas-Scrub Viewer](#8-product-360-canvas-scrub-viewer)
9. [Product Cards & Collection Grid](#9-product-cards--collection-grid)
10. [Buttons & Interactive Components](#10-buttons--interactive-components)
11. [Image Treatment](#11-image-treatment)
12. [Scroll Animations & Hover Effects](#12-scroll-animations--hover-effects)
13. [Spacing System](#13-spacing-system)
14. [Cart Drawer](#14-cart-drawer)
15. [Footer](#15-footer)
16. [Responsive Breakpoints](#16-responsive-breakpoints)
17. [Third-Party Integrations](#17-third-party-integrations)

---

## 1. Color System

### Primary Palette

| Token                  | RGB Value         | Hex       | Usage                                      |
| :--------------------- | :---------------- | :-------- | :----------------------------------------- |
| `--color-background`   | `0, 0, 0`        | `#000000` | Default page background (index/dark theme) |
| `--color-foreground`   | `255, 255, 255`   | `#FFFFFF` | Primary text on dark backgrounds            |
| `--color-button`       | `255, 255, 255`   | `#FFFFFF` | Primary button fill                         |
| `--color-button-text`  | `0, 0, 0`        | `#000000` | Primary button label color                  |
| `--color-link`         | `255, 255, 255`   | `#FFFFFF` | Link color on dark sections                 |
| `--color-shadow`       | `0, 0, 0`        | `#000000` | Shadow color                                |
| `--gradient-background`| —                 | `#000000` | Gradient fallback                           |

### Color Scheme 1 — Light (Inner Pages)

| Token                             | RGB             | Hex       | Usage                     |
| :-------------------------------- | :-------------- | :-------- | :------------------------ |
| `--color-background`              | `255,255,255`   | `#FFFFFF` | Light page background     |
| `--color-foreground`              | `18,18,18`      | `#121212` | Dark text                 |
| `--color-background-contrast`     | `191,191,191`   | `#BFBFBF` | Contrast surface          |
| `--color-button`                  | `18,18,18`      | `#121212` | Button fill (dark)        |
| `--color-button-text`             | `255,255,255`   | `#FFFFFF` | Button text (light)       |
| `--color-link`                    | `18,18,18`      | `#121212` | Links on light            |
| `--color-secondary-button`        | `255,255,255`   | `#FFFFFF` | Secondary button bg       |
| `--color-secondary-button-text`   | `18,18,18`      | `#121212` | Secondary button text     |
| `--color-badge-background`        | `255,255,255`   | `#FFFFFF` | Badge bg                  |
| `--color-badge-foreground`        | `18,18,18`      | `#121212` | Badge text                |

### Color Scheme 2 — Warm Neutral

| Token                  | RGB            | Hex       |
| :--------------------- | :------------- | :-------- |
| `--color-background`   | `243,243,243`  | `#F3F3F3` |
| `--color-foreground`   | `18,18,18`     | `#121212` |
| `--gradient-background`| —              | `#F3F3F3` |

### Color Scheme 3 — Dark Charcoal

| Token                  | RGB            | Hex       |
| :--------------------- | :------------- | :-------- |
| `--color-background`   | `36,40,51`     | `#242833` |
| `--color-foreground`   | `255,255,255`  | `#FFFFFF` |
| `--gradient-background`| —              | `#242833` |

### Color Scheme 4 — Royal Blue

| Token                  | RGB            | Hex       |
| :--------------------- | :------------- | :-------- |
| `--color-background`   | `51,79,180`    | `#334FB4` |
| `--color-foreground`   | `255,255,255`  | `#FFFFFF` |
| `--color-button-text`  | `51,79,180`    | `#334FB4` |
| `--gradient-background`| —              | `#334FB4` |

### Functional Colors

```
Black (primary bg):        #000000
White (primary fg):        #FFFFFF
Dark text:                 #121212
Muted text (on dark):      #FFFFFF80  (50% opacity white)
Muted body text:           #8C8A87
Cart muted text:           #A8A6A2
Strikethrough price:       #B6B4B0
Muted link:                #7F7F7F
Input border muted:        #00000082
Progress bar border:       #575454
Product grid border:       #EFE8E8
Badge bg (discount):       #D9D9D9
Timer/badge bg:            #E6E6E6
Free-bag bg:               #F7F7F7
Inner pages bg:            #F7F5F5
Sale badge:                #FF0000  (red)
Copyright muted:           #FFFFFF80
Footer border:             #6A666733
Variant muted:             #686863
PDP description:           #444444
PDP sub-description:       #1E1E1E
Reviews primary (Judge.me): #108474
Reviews secondary:         rgba(16,132,116,0.1)
Reviews star:              #858282
Review text muted:         #7B7B7B

Gradient — Sticky ATC button:
  linear-gradient(105.87deg, #000 4.98%, #666 73.99%, #000 129.94%)

Gradient — Rakhi special tag:
  linear-gradient(90deg, #CACACA, #FFF 50%, #C7C7C7, #868383)

ICP Modal backdrop:        rgba(0,0,0,0.72)
ICP Modal background:      #0C0C0C
Header blur (scrolled):    backdrop-filter: blur(8px)
```

---

## 2. Typography

### Font Family

The entire site uses a single typeface: **Unbounded** — a geometric sans-serif.

```css
--font-body-family: 'Unbounded', sans-serif;
--font-heading-family: 'Unbounded', sans-serif;
--font-regular-family: Unbounded;
```

### Font Sources

Preloaded from Shopify CDN:
```
Normal 400: //www.sarkar.store/cdn/fonts/unbounded/unbounded_n4.woff2
Normal 600: //www.sarkar.store/cdn/fonts/unbounded/unbounded_n6.woff2
```

Extended self-hosted `@font-face` declarations (200–900):
```
ExtraLight 200: /files/Unbounded-ExtraLight.woff2
Light 300:      /files/Unbounded-Light.woff2
Regular 400:    /files/Unbounded-Regular.woff2
Medium 500:     /files/Unbounded-Medium.woff2
SemiBold 600:   /files/Unbounded-SemiBold.woff2
Bold 700:       /files/Unbounded-Bold.woff2
ExtraBold 800:  /files/Unbounded-ExtraBold.woff2
Black 900:      /files/Unbounded-Black.woff2
```

### Type Scale

| Element                     | Font Size                                    | Weight | Letter-Spacing | Line-Height                           | Transform    |
| :-------------------------- | :------------------------------------------- | :----- | :------------- | :------------------------------------ | :----------- |
| `.hxxl` (hero display)      | `clamp(5.6rem, 14vw, 7.2rem)` × `--scale`   | 600    | calculated     | `1.1`                                 | —            |
| `.hxl` (extra large)        | `5rem` → `6.2rem` (750px+)                   | 600    | calculated     | dynamic                              | —            |
| `.h0`                       | `4rem` → `5.2rem` (750px+)                   | 600    | calculated     | dynamic                              | —            |
| `h1, .h1`                   | `3rem` → `4rem` (750px+)                     | 600    | calculated     | dynamic                              | —            |
| `h2, .h2`                   | `2rem` → `2.4rem` (750px+)                   | 600    | calculated     | dynamic                              | —            |
| `h3, .h3`                   | `1.7rem` → `1.8rem` (750px+)                 | 600    | calculated     | dynamic                              | —            |
| `h4, .h4`                   | `1.5rem`                                     | 600    | calculated     | —                                     | —            |
| `h5, .h5`                   | `1.2rem` → `1.3rem` (750px+)                 | 600    | calculated     | —                                     | —            |
| Body (`.text-body`)         | `1.5rem`                                     | 400    | `0.06rem`      | `calc(1 + .8 / var(--font-body-scale))` | —          |
| `.caption`                  | `1rem` → `1.2rem` (750px+)                   | 400    | `0.07rem`      | dynamic                              | —            |
| `.caption-with-letter-spacing` | `1rem`                                    | 400    | `0.13rem`      | dynamic                              | `uppercase`  |
| Subtitle                    | `1.8rem`                                     | 400    | `0.06rem`      | dynamic                              | —            |
| Product title (PDP)         | `26px`                                       | 500    | `10%`          | `150%`                               | `uppercase`  |
| Product title (20ml)        | `19px`                                       | 500    | `10%`          | `150%`                               | `uppercase`  |
| Product price               | `20px`                                       | 300    | `-2%`          | `150%`                               | —            |
| Sale price (original)       | `16px`                                       | 300    | `0`            | `150%`                               | —            |
| Product card price          | `12px`                                       | 400    | —              | —                                     | —            |
| Product card heading        | inherits                                     | 400    | —              | normal                               | `uppercase`  |
| CTA button (hero)           | `17px` → `14px` (mobile)                     | 500    | —              | —                                     | `uppercase`  |
| Product form button         | `12px`                                       | 500    | `-2%`          | `150%`                               | `uppercase`  |
| Slideshow large text        | `30px` → `12px` (mobile)                     | —      | —              | —                                     | —            |
| Announcement bar            | `8px` → `6px` (mobile)                       | 400    | `0.1rem`       | —                                     | `uppercase`  |
| Footer link                 | `14px`                                       | 200    | —              | —                                     | `uppercase`  |
| Footer heading              | `14px` → `12px` (mobile)                     | 500    | —              | —                                     | —            |
| Cart drawer heading         | `12px`                                       | 400    | —              | —                                     | —            |
| Cart remove button          | `9px`                                        | 400    | —              | —                                     | —            |
| Tax mandate                 | `10px`                                       | 400    | `0`            | —                                     | `uppercase`  |
| Badge (size/type)           | `12px` → `8px` (card)                        | 300    | `-2%`          | `150%`                               | —            |
| Copyright                   | `14px` → `8px` (mobile)                      | 200    | —              | —                                     | `uppercase`  |
| Fragrance notes on card     | `8px`                                        | 400    | `1px`          | —                                     | —            |
| Newsletter label            | `14px` → `12px` (mobile)                     | 300    | —              | —                                     | —            |
| Quick-add button            | `11px` → `9px` (mobile)                      | 400    | —              | —                                     | —            |

### Text Treatment Rules

```css
/* All menu items and card headings */
.header__menu-item span,
.card__information a {
  text-transform: uppercase;
  margin-bottom: 12px;
}

/* Fragrance taglines use ALL-CAPS with period separators */
/* e.g. "ABSOLUTE. DARK. UNRIVALLED." */
/* Notes use middle-dot separators */
/* e.g. "FRESH · WOODY · AROMATIC" */
```

---

## 3. Custom Properties

### Complete `:root` Block

```css
:root {
  /* ──────────────── TYPOGRAPHY ──────────────── */
  --font-body-family: 'Unbounded', sans-serif;
  --font-body-style: normal;
  --font-body-weight: 400;
  --font-body-weight-bold: 700;
  --font-body-scale: 1.0;
  --font-heading-family: 'Unbounded', sans-serif;
  --font-heading-style: normal;
  --font-heading-weight: 600;
  --font-heading-scale: 1.0;
  --font-regular-family: Unbounded;

  /* ──────────────── LAYOUT ──────────────── */
  --page-width: 120rem;                           /* 1200px max content width */
  --page-width-margin: 0rem;

  /* ──────────────── GRID ──────────────── */
  --grid-desktop-vertical-spacing: 8px;
  --grid-desktop-horizontal-spacing: 8px;
  --grid-mobile-vertical-spacing: 4px;
  --grid-mobile-horizontal-spacing: 4px;

  /* ──────────────── SECTIONS ──────────────── */
  --spacing-sections-desktop: 0px;
  --spacing-sections-mobile: 0px;

  /* ──────────────── BUTTONS ──────────────── */
  --buttons-radius: 0px;
  --buttons-radius-outset: 0px;
  --buttons-border-width: 1px;
  --buttons-border-opacity: 1.0;
  --buttons-border-offset: 0px;
  --buttons-shadow-horizontal-offset: 0px;
  --buttons-shadow-vertical-offset: 4px;
  --buttons-shadow-blur-radius: 5px;
  --buttons-shadow-opacity: 0.0;
  --buttons-shadow-visible: 0;

  /* ──────────────── INPUTS ──────────────── */
  --inputs-radius: 0px;
  --inputs-radius-outset: 0px;
  --inputs-border-width: 1px;
  --inputs-border-opacity: 0.55;
  --inputs-margin-offset: 0px;
  --inputs-shadow-horizontal-offset: 0px;
  --inputs-shadow-vertical-offset: 4px;
  --inputs-shadow-blur-radius: 5px;
  --inputs-shadow-opacity: 0.0;

  /* ──────────────── VARIANT PILLS ──────────────── */
  --variant-pills-radius: 40px;
  --variant-pills-border-width: 1px;
  --variant-pills-border-opacity: 0.55;
  --variant-pills-shadow-horizontal-offset: 0px;
  --variant-pills-shadow-vertical-offset: 4px;
  --variant-pills-shadow-blur-radius: 5px;
  --variant-pills-shadow-opacity: 0.0;

  /* ──────────────── MEDIA ──────────────── */
  --media-radius: 0px;
  --media-border-width: 1px;
  --media-border-opacity: 0.05;
  --media-shadow-horizontal-offset: 0px;
  --media-shadow-vertical-offset: 4px;
  --media-shadow-blur-radius: 5px;
  --media-shadow-opacity: 0.0;
  --media-shadow-visible: 0;

  /* ──────────────── BADGES ──────────────── */
  --badge-corner-radius: 4.0rem;

  /* ──────────────── POPUP / DRAWER ──────────────── */
  --popup-border-width: 1px;
  --popup-border-opacity: 0.1;
  --popup-corner-radius: 0px;
  --popup-shadow-horizontal-offset: 0px;
  --popup-shadow-vertical-offset: 4px;
  --popup-shadow-blur-radius: 5px;
  --popup-shadow-opacity: 0.05;
  --drawer-border-width: 1px;
  --drawer-border-opacity: 0.1;
  --drawer-shadow-horizontal-offset: 0px;
  --drawer-shadow-vertical-offset: 4px;
  --drawer-shadow-blur-radius: 5px;
  --drawer-shadow-opacity: 0.0;

  /* ──────────────── TEXT BOXES ──────────────── */
  --text-boxes-radius: 0px;
  --text-boxes-border-width: 0px;
  --text-boxes-border-opacity: 0.1;
  --text-boxes-shadow-horizontal-offset: 0px;
  --text-boxes-shadow-vertical-offset: 4px;
  --text-boxes-shadow-blur-radius: 5px;
  --text-boxes-shadow-opacity: 0.0;
  --text-boxes-shadow-visible: 0;

  /* ──────────────── PRODUCT CARDS ──────────────── */
  --product-card-corner-radius: 0.0rem;
  --product-card-border-width: 0.0rem;
  --product-card-border-opacity: 0.1;
  --product-card-image-padding: 0.0rem;
  --product-card-shadow-horizontal-offset: 0.0rem;
  --product-card-shadow-vertical-offset: 0.4rem;
  --product-card-shadow-blur-radius: 0.5rem;
  --product-card-shadow-opacity: 0.0;
  --product-card-shadow-visible: 0;
  --product-card-text-alignment: left;

  /* ──────────────── COLLECTION CARDS ──────────────── */
  --collection-card-corner-radius: 0.0rem;
  --collection-card-border-width: 0.0rem;
  --collection-card-border-opacity: 0.1;
  --collection-card-image-padding: 0.0rem;
  --collection-card-shadow-visible: 0;
  --collection-card-text-alignment: left;

  /* ──────────────── BLOG CARDS ──────────────── */
  --blog-card-corner-radius: 0.0rem;
  --blog-card-border-width: 0.0rem;
  --blog-card-border-opacity: 0.1;
  --blog-card-image-padding: 0.0rem;
  --blog-card-shadow-visible: 0;
  --blog-card-text-alignment: left;

  /* ──────────────── ANIMATION DURATIONS ──────────────── */
  --duration-short: 0.1s;
  --duration-default: 0.2s;
  --duration-announcement-bar: 0.25s;
  --duration-medium: 0.3s;
  --duration-long: 0.5s;
  --duration-extra-long: 0.6s;
  --duration-extra-longer: 0.75s;
  --duration-extended: 3s;
  --ease-out-slow: cubic-bezier(0, 0, 0.3, 1);
  --animation-slide-in: slideIn var(--duration-extra-long) var(--ease-out-slow) forwards;
  --animation-fade-in: fadeIn var(--duration-extra-long) var(--ease-out-slow);

  /* ──────────────── TRANSPARENCY / ALPHA ──────────────── */
  --alpha-button-background: 1;
  --alpha-button-border: 1;
  --alpha-link: 0.85;
  --alpha-badge-border: 0.1;

  /* ──────────────── FOCUS STATES ──────────────── */
  --focused-base-outline: 0.2rem solid rgba(var(--color-foreground), 0.5);
  --focused-base-outline-offset: 0.3rem;
  --focused-base-box-shadow:
    0 0 0 0.3rem rgb(var(--color-background)),
    0 0 0.5rem 0.4rem rgba(var(--color-foreground), 0.3);

  /* ──────────────── DYNAMIC (set per-element) ──────────────── */
  --zoom-in-ratio: 1;
  --animation-order: 0;
  --p360-bg-color: #000000;
}
```

---

## 4. Layout & Grid System

### Page Width

```css
.page-width {
  max-width: var(--page-width);  /* 120rem = 1200px */
  margin: 0 auto;
  padding: 0 1.5rem;             /* mobile: 15px side padding */
}

@media screen and (min-width: 750px) {
  .page-width {
    padding: 0 5rem;              /* tablet+: 50px side padding */
  }
}

@media screen and (min-width: 990px) {
  .header:not(.drawer-menu).page-width {
    padding-left: 5rem;
    padding-right: 5rem;
  }
  .page-width-desktop {
    max-width: var(--page-width);
    padding: 0 5rem;
  }
}
```

### Grid System (Flexbox)

```css
.grid {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  padding: 0;
  list-style: none;
  column-gap: var(--grid-mobile-horizontal-spacing);   /* 4px */
  row-gap: var(--grid-mobile-vertical-spacing);         /* 4px */
}

@media screen and (min-width: 750px) {
  .grid {
    column-gap: var(--grid-desktop-horizontal-spacing);  /* 8px */
    row-gap: var(--grid-desktop-vertical-spacing);        /* 8px */
  }
}

/* Default grid item: 4-column (25% width) */
.grid__item {
  width: calc(25% - var(--grid-mobile-horizontal-spacing) * 3 / 4);
  max-width: calc(50% - var(--grid-mobile-horizontal-spacing) / 2);
  flex-grow: 1;
  flex-shrink: 0;
}

/* Named column variants */
.grid--2-col .grid__item { width: calc(50% - spacing / 2); }
.grid--3-col .grid__item { width: calc(33.33% - spacing * 2 / 3); }
.grid--5-col-desktop .grid__item { width: calc(20% - spacing * 4 / 5); }
.grid--6-col-desktop .grid__item { width: calc(16.66% - spacing * 5 / 6); }
```

### Product Page Layout

```css
@media screen and (min-width: 990px) {
  .page-width.product_main_container {
    max-width: 100%;
    padding: 0 1rem;
  }

  /* 55/45 split */
  product-info .product_main_container .grid__item.product__media-wrapper {
    max-width: 55%;
    width: 100%;
  }
  product-info .product_main_container .product__info-wrapper.grid__item {
    max-width: 45%;
    width: 100%;
    padding: 4rem 8rem 0;
  }
}
```

---

## 5. Header & Navigation

### Structure

```
┌──────────────────────────────────────────────────┐
│  Announcement Bar (white bg, black text, 8px)    │
├──────────────────────────────────────────────────┤
│  [≡]     [LOGO]     [Nav Items]     [🔍][👤][🛒]│
│          (centered)  (centered)        (right)   │
└──────────────────────────────────────────────────┘
```

### Header CSS

```css
/* Header wrapper — sticky, full black */
.template--index .header-wrapper {
  background-color: #000;
  position: sticky;
  width: 100%;
  top: 0;
  margin-bottom: -1px;
}

/* Logo inversion for dark header */
.template--index .header__heading-logo-wrapper {
  filter: brightness(0) invert(1);
}

/* Header grid layout */
.header {
  display: grid;
  grid-template-areas: "left-icons heading icons";
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
}

@media screen and (min-width: 990px) {
  .header {
    grid-template-columns: 1fr auto 1fr;
  }
  sticky-header .header--top-left {
    grid-template-areas: "heading navigation header-button icons";
    grid-template-columns: auto 1fr;
  }
}

/* Navigation spacing */
nav.header__inline-menu .list-menu--inline {
  width: 100%;
  gap: 20px;
  justify-content: center;
}

/* All icons white on dark header */
.template--index .icon-hamburger path,
.template--index .header__icon--search path,
.template--index .header__icons #cart-icon-bubble path,
.template--index .header__drawer .icon-close {
  fill: #fff !important;
  stroke: #fff;
}

/* Cart count bubble */
.cart-count-bubble {
  color: #000;
  background-color: #fff;
  height: 1.7rem;
  width: 1.7rem;
  border-radius: 100%;
  font-size: 0.9rem;
  position: absolute;
  top: 0.4rem;
  right: 0.2rem;
}

/* Scrolled past — glass-blur effect */
.template--index .shopify-section-header-sticky.scrolled-past-header .header-wrapper {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

.shopify-section-group-header-group.scrolled-past-header {
  background: transparent;
}
```

### Announcement Bar

```css
.template--index .announcement-bar-section .utility-bar.gradient {
  background-color: #fff;
}

.template--index .announcement-bar-section .announcement-bar__message {
  color: #000;
}

.announcement-bar__message {
  text-align: center;
  padding: 1rem 0;
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

@media screen and (max-width: 989px) {
  .announcement-bar__message {
    font-size: 6px;
  }
}
```

### Menu Drawer (Mobile)

```css
header-drawer.header__drawer {
  grid-area: sidedrawer;
}

/* Social icons in mobile menu */
.menu-drawer__utility-links .list.list-social .svg-wrapper {
  width: 25px;
  height: 25px;
}

/* Bottom menu links */
.menu-drawer__utility-links .track__order {
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  font-size: 1.2rem;
  color: rgb(var(--color-foreground));
  text-transform: uppercase;
}

/* Search field in menu */
predictive-search .field__input,
predictive-search .field__input:focus {
  border-radius: 30px;
}
```

---

## 6. Loading & Page Transitions

### Page Loading Spinner

```css
.loading__spinner {
  position: absolute;
  z-index: 1;
  width: 1.8rem;
  display: inline-block;
}

.spinner {
  animation: rotator 1.4s linear infinite;
}

@keyframes rotator {
  0%   { transform: rotate(0); }
  100% { transform: rotate(270deg); }
}

.path {
  stroke-dasharray: 280;
  stroke-dashoffset: 0;
  transform-origin: center;
  stroke: rgb(var(--color-foreground));
  animation: dash 1.4s ease-in-out infinite;
}

@keyframes dash {
  0%   { stroke-dashoffset: 280; }
  50%  { stroke-dashoffset: 75; transform: rotate(135deg); }
  100% { stroke-dashoffset: 280; transform: rotate(450deg); }
}
```

### Progress Bar (Linear indeterminate)

```css
.progress-bar-value {
  width: 100%;
  height: 100%;
  background-color: rgb(var(--color-foreground));
  animation: indeterminateAnimation var(--duration-extra-longer) infinite ease-in-out;
  transform-origin: 0;
}

@keyframes indeterminateAnimation {
  0%   { transform: translate(-20%) scaleX(0); }
  40%  { transform: translate(30%) scaleX(0.7); }
  100% { transform: translate(100%) scaleX(0); }
}
```

### GoKwik Checkout Loader

```css
.gokwik-btn-loader {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: gokwik-spin 1s linear infinite;
}

@keyframes gokwik-spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

---

## 7. Hero Section — Slideshow

### Structure

Full-width slideshow with per-slide hero images, product name, tagline, and CTA.

```
┌──────────────────────────────────────────────────┐
│                                                  │
│          [Full-bleed product image]               │
│                                                  │
│              THRONE                               │
│      ABSOLUTE. DARK. UNRIVALLED.                  │
│                                                  │
│           [ EXPLORE PARFUM ]                      │
│                                                  │
│    ◄ prev                            next ►       │
└──────────────────────────────────────────────────┘
```

### CSS

```css
slideshow-component {
  position: relative;
  display: flex;
  flex-direction: column;
}

slideshow-component .slideshow.banner {
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0;
  gap: 0;
  overflow-y: hidden;
}

.slideshow__slide {
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  visibility: visible;
}

/* Banner heights */
@media screen and (min-width: 750px) {
  .banner--small:not(.banner--adapt)  { min-height: 42rem; }
  .banner--medium:not(.banner--adapt) { min-height: 56rem; }
  .banner--large:not(.banner--adapt)  { min-height: 72rem; }
}

@media screen and (max-width: 749px) {
  .banner--small  .banner__media { height: 28rem; }
  .banner--medium .banner__media { height: 34rem; }
  .banner--large  .banner__media { height: 39rem; }
}

/* Banner media — full coverage */
.banner__media {
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

/* CTA buttons on slideshow */
.template--index slideshow-component .banner__buttons a {
  color: #fff;
  background: transparent;
  padding: 11px 25px;
  font-weight: 500;
  font-size: 17px;
}

.banner__buttons .button {
  opacity: 1;
  padding: 0 18px;
  min-height: 26px;
  min-width: fit-content;
}

/* Slider controls — arrows on sides */
slideshow-component .slideshow__controls {
  position: unset;
}
slideshow-component .slideshow__controls .slider-button {
  position: absolute;
  top: 50%;
  color: #fff;
}
slideshow-component .slideshow__controls .slider-button .icon {
  height: 2rem;
}
slideshow-component .slideshow__controls .slider-button.slider-button--prev {
  left: 3%;
}
slideshow-component .slideshow__controls .slider-button.slider-button--next {
  right: 3%;
}
slideshow-component .slideshow__controls .svg-wrapper {
  width: 40px;
  height: 40px;
}

/* Image sizes per breakpoint */
/* Desktop hero: width=3840 */
/* Mobile hero:  width=1500 */
```

### Image Scale Effect on Hover

```css
.banner.scale_effect {
  overflow: hidden;
}

.banner.img_animation .banner__media.scroll-trigger img,
.slideshow.banner.img_animation img.scale_effect {
  transition: transform 0.7s ease;
}

.banner.img_animation:hover .banner__media.scroll-trigger img,
.slideshow.banner.img_animation.scale_effect:hover img {
  transform: scale(1.1);
}
```

---

## 8. Product 360° Canvas-Scrub Viewer

A 600-frame scroll-driven canvas animation showing the perfume bottle rotating.

### Container CSS

```css
.product360-wrapper {
  height: 1000vh;           /* 10× viewport = scroll track */
}

.product360-sticky {
  position: sticky;
  height: 100vh;
  top: 0;
}

/* Background glow behind bottle */
.product360-bg-glow {
  filter: blur(190px) saturate(1.05) brightness(1);
  transform: scale(1.8);
  /* Radial mask to isolate glow */
  mask-image: radial-gradient(
    ellipse 60% 68% at 50% 62%,
    #000 0%, #000 42%, transparent 88%
  );
}

/* Cinematic vignette overlay */
.product360-vignette {
  background: radial-gradient(
    ellipse at center,
    rgba(0,0,0,0) 25%,
    rgba(0,0,0,0.12) 55%,
    rgba(0,0,0,0.25) 80%,
    rgba(0,0,0,0.35) 100%
  );
}

/* Color desaturation lock layer */
.product360-color-lock {
  mix-blend-mode: color;
}
```

### JavaScript — Frame Interpolation

```javascript
// 600 frames preloaded: 0000.png to 0599.png
const TOTAL_FRAMES = 600;
const IMAGE_BASE = 'https://cdn.shopify.com/s/files/.../sarkar_final_scene';

// Smooth frame interpolation at scroll
const LERP_FACTOR = 0.12;
let currentFrame = 0;
let targetFrame = 0;

function onScroll() {
  const progress = scrollTop / maxScroll;
  targetFrame = Math.round(progress * (TOTAL_FRAMES - 1));
}

function animate() {
  currentFrame += (targetFrame - currentFrame) * LERP_FACTOR;
  const frame = Math.round(currentFrame);
  drawFrame(frame);
  requestAnimationFrame(animate);
}
```

---

## 9. Product Cards & Collection Grid

### Card Structure

```
┌─────────────────────┐
│ [Fragrance notes]   │  ← absolute, top-left, z-index:1
│                     │
│  [Product Image 1]  │  ← hover swaps to Image 2
│  [Product Image 2]  │  ← hidden by default
│                     │
├─────────────────────┤
│  PRODUCT NAME       │  ← uppercase, centered
│  SIZE BADGES        │  ← flex row of badges
│                     │
│  ₹1,399  ₹1,499    │  ← centered, sale styling
│  Incl. of all taxes │
│                     │
│  [ ADD TO CART ]    │  ← centered, small button
└─────────────────────┘
```

### CSS

```css
/* Card wrapper */
.card-wrapper .card__content,
.card-wrapper .price {
  text-align: center;
}

/* Product grid border (on light pages) */
.grid.product-grid .grid__item {
  border: 1px solid #efe8e8;
}

/* On index page (dark bg), no border */
.template--index .grid.product-grid .grid__item {
  border: unset;
}

/* Index page text colors */
.template--index .contains-card--product .card__information .price .price-item {
  color: #fff;
}

/* Quick-add button */
.card-wrapper .quick-add__submit {
  min-width: fit-content;
  width: fit-content;
  margin: 0 auto;
  padding: 10px;
  min-height: 0;
  font-size: 11px;
  border-radius: 3px;
}

@media screen and (max-width: 749px) {
  .card-wrapper .quick-add__submit {
    font-size: 9px;
    padding: 10px;
  }
}

/* Card info text */
.card-information .price-item.price-item--regular {
  font-size: 12px;
}
.card-information .price__regular {
  line-height: 15px;
}
.card__heading {
  line-height: normal;
}

/* Fragrance notes overlay */
.card-wrapper .products_viewer_notes {
  text-align: left;
  font-size: 8px;
  letter-spacing: 1px;
  position: absolute;
  z-index: 1;
  width: 100%;
  padding-top: 5px;
  padding-left: 5px;
}
.card-wrapper .products_viewer_notes span {
  padding: 4px 12px;
}

/* Size badges */
.product-size-badge-list {
  display: flex;
  gap: 11px;
  margin-bottom: 10px;
  line-height: 150%;
}

.custom-badge-use,
.custom-badge-size,
.custom-badge-perfume,
.custom-badge-type {
  padding: 1px 11px;
  background: #d9d9d9;
  font-size: 12px;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -2%;
  color: #000;
  border-radius: 3px;
}

/* Card badges on mobile */
@media screen and (max-width: 749px) {
  .card__collection .custom-badge-use,
  .card__collection .custom-badge-size {
    font-size: 6px;
    padding: 2px 4px;
  }
}

/* Sale pricing */
.card-information .price.price--on-sale .price-item {
  font-size: 12px;
}
.card-information .price.price--on-sale .price-item.price-item--regular {
  font-size: 11px !important;
}

/* Hover card lift animation */
.animate--hover-vertical-lift .card-wrapper:hover .card--card,
.animate--hover-vertical-lift .card-wrapper:hover .card--standard .card__inner {
  transform: translateY(-0.75rem);
}

/* Dual-image hover swap */
.media.media--hover-effect > img + img {
  opacity: 0;
}
/* On hover, second image reveals via opacity transition */
```

---

## 10. Buttons & Interactive Components

### Primary Button (Default)

```css
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 0 3rem;
  cursor: pointer;
  font: inherit;
  font-size: 1.5rem;
  text-decoration: none;
  color: rgb(var(--color-button-text));         /* #000 on index */
  background-color: rgba(var(--color-button), var(--alpha-button-background)); /* #FFF */
  min-width: calc(12rem + var(--buttons-border-width) * 2);
  min-height: calc(4.5rem + var(--buttons-border-width) * 2);
  border-radius: var(--buttons-radius-outset);  /* 0px — sharp corners */
  letter-spacing: 0.1rem;
  line-height: calc(1 + 0.2 / var(--font-body-scale));
  transition: box-shadow var(--duration-short) ease;
}

/* Inner border pseudo-element */
.button:after {
  content: "";
  position: absolute;
  top: var(--buttons-border-width);
  right: var(--buttons-border-width);
  bottom: var(--buttons-border-width);
  left: var(--buttons-border-width);
  z-index: 1;
  border-radius: 3px;
  box-shadow:
    0 0 0 calc(var(--buttons-border-width) + var(--border-offset))
      rgba(var(--color-button-text), var(--border-opacity)),
    0 0 0 var(--buttons-border-width)
      rgba(var(--color-button), var(--alpha-button-background));
}

/* Hover — border thickens */
.button:not([disabled]):hover:after {
  --border-offset: 1.3px;
}
```

### Hero CTA (Transparent on Slideshow)

```css
.template--index slideshow-component .banner__buttons a {
  color: #fff;
  background: transparent;
  padding: 11px 25px;
  font-weight: 500;
  font-size: 17px;       /* → 14px on desktop with different padding */
}

@media screen and (min-width: 750px) {
  .banner__buttons .button {
    font-size: 14px;
    font-weight: 500;
    padding: 10px 28px;
  }
}
```

### Product Form Buttons (PDP)

```css
/* Add to Cart */
.desk-atc .product-form__submit {
  background: #000;
  color: #fff;
  min-height: 34px;
  max-width: 240px;
  min-width: unset;
  letter-spacing: -2%;
  border-radius: 3px !important;
  font-size: 12px !important;
  font-weight: 500;
  text-transform: uppercase;
}

/* Sticky ATC (mobile) */
.sticky_atc_container .product-form__submit {
  background: linear-gradient(105.87deg, #000 4.98%, #666 73.99%, #000 129.94%);
  border: unset;
  border-radius: 5px;
  letter-spacing: -2%;
  width: 100% !important;
  min-width: 157px;
}

/* Sticky ATC container */
.sticky_atc_container {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 3;
  background: #fff;
  text-align: center;
}
```

### Secondary Button

```css
.button--secondary {
  --color-button: var(--color-secondary-button);
  --color-button-text: var(--color-secondary-button-text);
}
```

### Tertiary Button

```css
.button--tertiary {
  --alpha-button-background: 0;
  --alpha-button-border: 0.2;
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
  min-width: calc(9rem + var(--buttons-border-width) * 2);
  min-height: calc(3.5rem + var(--buttons-border-width) * 2);
}
```

### Quantity Input

```css
.quantity {
  position: relative;
  width: calc(14rem / var(--font-body-scale) + var(--inputs-border-width) * 2);
  display: flex;
  border-radius: var(--inputs-radius);  /* 0px */
  min-height: calc(var(--inputs-border-width) * 2 + 4.5rem);
}

/* Product page quantity */
.product__info-wrapper .qty-atc-wrapper .quantity {
  min-height: 34px;
  max-width: 105px;
}

/* Qty + ATC wrapper */
.qty-atc-wrapper {
  display: flex;
  justify-content: flex-start;
  gap: 9px;
  margin-bottom: 25px !important;
}

.qty-atc-wrapper .product-form__input.product-form__quantity {
  flex: unset;
  width: 30%;
  max-width: 107px;
  border: 1px solid #000;
  border-radius: 3px;
}
```

### Social Icons

```css
.cstm-footer-social-icon .svg-wrapper {
  width: 40px;
  height: 40px;
}
.cstm-footer-social-icon .list-social__item .icon {
  height: 3.2rem;
  width: 3.2rem;
}
```

### Focus States

```css
.button:focus-visible,
.button:focus,
.button.focused {
  outline: 0;
  box-shadow:
    0 0 0 0.3rem rgb(var(--color-background)),
    0 0 0 0.5rem rgba(var(--color-foreground), 0.5),
    0 0 0.5rem 0.4rem rgba(var(--color-foreground), 0.3);
}
```

---

## 11. Image Treatment

### Aspect Ratios (Media Containers)

```css
.media--square    { padding-bottom: 100%; }
.media--portrait  { padding-bottom: 125%; }
.media--landscape { padding-bottom: 66.6%; }
.media--cropped   { padding-bottom: 56%; }
.media--16-9      { padding-bottom: 56.25%; }
.media--circle    { padding-bottom: 100%; border-radius: 50%; }

@media screen and (min-width: 990px) {
  .media--cropped { padding-bottom: 63%; }
}
```

### Image Sizing by Context

| Context              | Max Width Served | Format     |
| :------------------- | :--------------- | :--------- |
| Hero desktop         | 3840px           | .webp/.png |
| Hero mobile          | 1500px           | .webp/.png |
| Product cards        | 533px            | .png       |
| Collection cards     | 832px–1000px     | .png       |
| Product carousel     | 352px            | .png       |
| Logo                 | 600px            | .png       |
| Cart item thumbnail  | 90px × 90px      | .png       |

### Product Image Object Fit

```css
.media > img {
  object-fit: cover;
  object-position: center center;
  transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* PDP full-size images */
@media screen and (min-width: 750px) {
  .product__media.media.media--transparent img {
    object-fit: contain;
  }
}
```

### Image Hover Swap (Dual Images)

```css
.media.media--hover-effect > img + img {
  opacity: 0;
}
/* On card hover, the second (alternate) image fades in */
```

### Logo Treatment on Dark Backgrounds

```css
.template--index .header__heading-logo-wrapper {
  filter: brightness(0) invert(1);
}
```

---

## 12. Scroll Animations & Hover Effects

### Libraries

| Library              | Version | CDN URL                                                          |
| :------------------- | :------ | :--------------------------------------------------------------- |
| GSAP Core            | 3.12.5  | `cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`        |
| GSAP ScrollTrigger   | 3.12.5  | `cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js` |
| Canvas Confetti      | 1.6.0   | `cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js` |

### Scroll-Triggered Fade & Slide

```css
/* Initial off-screen state */
@media (prefers-reduced-motion: no-preference) {
  .scroll-trigger.animate--fade-in {
    opacity: 0.01;
  }
  .scroll-trigger.animate--slide-in {
    opacity: 0.01;
    transform: translateY(2rem);
  }

  /* Revealed state */
  .scroll-trigger:not(.scroll-trigger--offscreen).animate--fade-in {
    opacity: 1;
    animation: var(--animation-fade-in);
  }
  .scroll-trigger:not(.scroll-trigger--offscreen).animate--slide-in {
    animation: var(--animation-slide-in);
    animation-delay: calc(var(--animation-order) * 75ms);
  }
}

@keyframes slideIn {
  0%   { transform: translateY(2rem); opacity: 0.01; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes fadeIn {
  0%   { opacity: 0.01; }
  100% { opacity: 1; }
}
```

### Zoom-in on Scroll (IntersectionObserver)

```css
.animate--zoom-in {
  --zoom-in-ratio: 1;
}

.animate--zoom-in > img,
.animate--zoom-in > .svg-wrapper {
  transition: scale var(--duration-short) linear;
  scale: var(--zoom-in-ratio);
}
```

The JavaScript `animations.js` dynamically sets `--zoom-in-ratio` based on the element's intersection ratio, creating a parallax zoom effect as the user scrolls.

### Hover — Vertical Lift

```css
.animate--hover-vertical-lift .card-wrapper:hover .card--card,
.animate--hover-vertical-lift .card-wrapper:hover .card--standard .card__inner {
  transform: translateY(-0.75rem);
  transition: transform var(--duration-medium) var(--ease-out-slow);
  /* 0.3s cubic-bezier(0, 0, 0.3, 1) */
}

.animate--hover-vertical-lift .card-wrapper:active .card--card {
  transform: translateY(-0.5rem);
}

/* Button vertical lift */
.animate--hover-vertical-lift .button:not(.button--tertiary):not([disabled]):hover {
  transform: translateY(-0.25rem);
}
```

### Hover — 3D Lift (Optional Theme Setting)

```css
.animate--hover-3d-lift .card-wrapper:hover .card--card {
  transform: rotate(1deg);
  box-shadow:
    -1rem -1rem 1rem -1rem rgba(0,0,0,0.05),
    1rem 1rem 1rem -1rem rgba(0,0,0,0.05),
    0 0 0.5rem rgba(255,255,255,0),
    0 2rem 3.5rem -2rem rgba(0,0,0,0.5);
  transition: transform var(--duration-extended) ease, /* 3s */
              box-shadow var(--duration-long) ease;    /* 0.5s */
}
```

### Banner Image Scale on Hover

```css
.banner.img_animation .banner__media.scroll-trigger img,
.benefit-usp_img img {
  transition: transform 0.7s ease;
}

.banner.img_animation:hover .banner__media.scroll-trigger img,
.benefit-usp_img:hover img {
  transform: scale(1.1);
}
```

### Announcement Bar Slide Transitions

```css
.announcement-bar-slider--fade-in-next .announcement-bar__message {
  --announcement-translate-from: -1.5rem;
  opacity: 0;
  animation-name: translateAnnouncementSlideIn;
  animation-delay: var(--duration-announcement-bar); /* 0.25s */
}

@keyframes translateAnnouncementSlideIn {
  0%   { opacity: 0; transform: translate(var(--announcement-translate-from)); }
  100% { opacity: 1; transform: translate(0); }
}

@keyframes translateAnnouncementSlideOut {
  0%   { opacity: 1; transform: translate(0); }
  100% { opacity: 0; transform: translate(var(--announcement-translate-to)); }
}
```

### Footer Accordion

```css
.footer-accordion__icon {
  transition: transform 0.2s ease-in-out;
}
.footer-accordion .footer-accordion__icon {
  transform: rotate(180deg);
}
.footer-accordion[open] .footer-accordion__icon {
  transform: rotate(0);
}
.footer-accordion__content {
  overflow: hidden;
  max-height: 0;
  transition: max-height 1.5s ease-in-out, opacity 1s ease-in-out;
  opacity: 0;
}
.footer-accordion[open] .footer-accordion__content {
  max-height: 100%;
  opacity: 1;
  margin-top: 10px;
}
```

### Cart Drawer Progress Bar

```css
.progress_bar_cart_drawer #progress_drawer .progress_value_drawer {
  height: 100%;
  background: #000;
  width: 2%;
  border-radius: 25px;
  transition: width 0.4s ease;
}
```

---

## 13. Spacing System

### Section Spacing

```css
--spacing-sections-desktop: 0px;  /* zero-gap between sections */
--spacing-sections-mobile: 0px;
```

### Page Padding

```
Mobile:  1.5rem (15px) horizontal
Tablet:  5rem (50px) horizontal
Desktop: 5rem (50px) horizontal
```

### Grid Gaps

```
Mobile:  4px horizontal, 4px vertical
Desktop: 8px horizontal, 8px vertical
```

### Component Spacing

```
Title margin:         3rem 0 2rem (mobile) → 5rem 0 3.9rem (desktop)
Element margin top:   5rem
Product grid row gap: 3rem (mobile)
Footer block margin:  4rem 0 (mobile)
Footer accordion padding: 8px 0 (desktop) → 4px 0 (mobile)
Copyright padding:    20px 0 0
```

### Product Page Spacing

```css
.qty-atc-wrapper {
  gap: 9px;            /* 14px on mobile */
  margin-bottom: 25px; /* 30px on mobile */
}

.product__info-wrapper .product__info-container .product__description {
  margin-bottom: 10px;  /* 16px on mobile */
}

.product-size-badge-list {
  gap: 11px;           /* 6px on mobile */
  margin-bottom: 10px;
}

.product-info-badges {
  gap: 60px;           /* 34px on mobile */
  padding: 20px 0;
}
```

### Cart Drawer Spacing

```css
.cart-drawer .drawer__header { padding: 0 2rem; }
.cart-items { margin-top: 25px; }
.cart-item { padding: 0 5px; margin-top: 10px; }
.cart-item__image { width: 90px; height: 90px; }
.progress_bar_cart_drawer { margin: 11px 0 55px; }
.cart-drawer__footer { margin-bottom: 13px; padding: 0 2.9rem; }
```

---

## 14. Cart Drawer

### Structure

```
┌─────────────────────────┐
│  ✕  Your Cart           │
├─────────────────────────┤
│  [Free shipping msg]    │  ← 10px, uppercase, black bg, white text
├─────────────────────────┤
│  [Progress bar]         │  ← 6px height, #000 fill, rounded
│  ◯ milestone ◯ milestone │
├─────────────────────────┤
│ ┌─────────────────────┐ │
│ │[img] Title    ₹1,499│ │  ← 90×90px image
│ │      ₹1,399         │ │  ← strikethrough original
│ │   [-] 1 [+]  Remove │ │
│ └─────────────────────┘ │
├─────────────────────────┤
│  Recommended products   │  ← horizontal scroll
│  [card] [card] [card]   │  ← min-width:105px
├─────────────────────────┤
│  Subtotal: ₹1,499      │  ← 12px uppercase
│  [       CHECKOUT     ] │  ← full-width button, 12px
└─────────────────────────┘
```

### Key CSS

```css
.message_top_drawer {
  font-size: 10px;
  text-align: center;
  background: #000;
  color: #fff;
  padding: 5px 25px;
  display: flex;
  justify-content: center;
}

.message_top_drawer span {
  font-size: 9px;
  text-transform: uppercase;
}

.drawer__heading.h3 {
  font-size: 12px;
}

.cart-drawer__footer .totals__total {
  text-transform: uppercase;
  font-size: 12px;
}

.cart__checkout-button.button {
  font-size: 12px;
}

/* Recommended products in drawer */
.recommended_product_drawer {
  display: flex;
  overflow: scroll;
  width: 100%;
  gap: 10px;
}
.recommended_product_drawer .card-wrapper {
  min-width: 105px;
}
.recommended_product_drawer .card__heading {
  font-size: 9px;
  font-weight: 400;
  text-decoration: none;
}
.recommended_product_drawer .card-wrapper .quick-add__submit {
  width: 82%;
  margin: auto;
  font-size: 8px;
  min-height: unset;
  padding: 5px;
  border: 0.5px solid #969696;
}
```

---

## 15. Footer

### Structure

```
┌─────────────────────────────────────────────────┐
│ FRAGRANCES    COMPANY     POLICY      CONTACT   │
│ Throne        Know Sarkar  Privacy     Email    │
│ Noble                      T&C         WhatsApp │
│ Regal                      Shipping             │
│ Orion                      Cancellation          │
│ Bundle                     Refund                │
│ Legacy Set                                       │
├─────────────────────────────────────────────────┤
│            [IG] [YT] [FB] [X]                    │
├─────────────────────────────────────────────────┤
│ © 2026, All Rights Reserved by Brix Lifestyle   │
│                Private Limited                    │
└─────────────────────────────────────────────────┘
```

### CSS

```css
/* Footer on dark index */
.template--index .footer,
.template--index .shopify-section-group-footer-group {
  background: #000;
}

.template--index .footer-block__heading,
.template--index .footer-block.grid__item .link,
.template--index .cstm-footer-section a,
.template--index .footer__copyright,
.template--index .footer-block__newsletter .field__label,
.template--index .footer-block__newsletter .field__input {
  color: #fff !important;
}

.template--index .footer__copyright {
  color: rgba(255,255,255,0.5);
}

.template--index .footer__copyright.caption:before {
  border-bottom: 1px solid rgba(255,255,255,0.5);
}

.footer__copyright.caption {
  padding: 20px 0 0;
  border-top: 1px solid #000;
}

/* Newsletter in footer */
.footer-block__newsletter .field:after {
  border-bottom: 1px solid #000;
}
.newsletter-form__field-wrapper .field__label {
  font-size: 14px;
  font-weight: 300;
}

/* Footer link styling */
.footer__blocks-wrapper .list-menu__item--link {
  font-size: 14px;
}
.footer__blocks-wrapper {
  text-transform: uppercase;
}

/* Footer accordion (mobile) */
.footer-block.grid__item.footer-block--menu .footer-block__heading {
  font-size: 12px;
  font-weight: 500;
}

/* Social icons */
.cstm-footer-social-icon {
  padding: 0;
}
@media screen and (min-width: 750px) {
  .cstm-footer-social-icon {
    margin: 50px 0 12px;
  }
}

/* Copyright */
.copyright__content {
  font-size: 14px;
  text-transform: uppercase;
}

@media screen and (max-width: 749px) {
  .footer__copyright .copyright__content {
    font-size: 8px;
  }
}

/* Footer content layout */
@media screen and (min-width: 990px) {
  .footer__content-top a,
  .footer__content-top .footer-block__heading {
    font-weight: 200;
  }
  .footer__content-top .list-social {
    flex-wrap: nowrap;
  }
}
```

---

## 16. Responsive Breakpoints

| Breakpoint    | Value                     | Usage                    |
| :------------ | :------------------------ | :----------------------- |
| **Mobile**    | `max-width: 749px`        | `.small-hide` hidden     |
| **Tablet**    | `min-width: 750px`        | Grid/layout shifts       |
| **Desktop**   | `min-width: 990px`        | Full nav, 55/45 PDP      |
| **Wide**      | `min-width: 991px` & `max-width: 1300px` | Column clamp  |
| **Narrow**    | `max-width: 355px`        | Very small screens       |
| **Mid-range** | `max-width: 500px`        | Cart drawer adjustments  |
| **Content**   | `min-width: 1400px`       | Banner box max-width: 90rem |

### Visibility Classes

```css
@media screen and (max-width: 749px) {
  .small-hide { display: none !important; }
}
@media screen and (min-width: 750px) and (max-width: 989px) {
  .medium-hide { display: none !important; }
}
@media screen and (min-width: 990px) {
  .large-up-hide { display: none !important; }
}
```

### Hero Image Responsive Strategy

```html
<!-- Desktop: max 3840px wide images -->
<img srcset="...width=375, ...width=750, ...width=1100, ...width=1500,
             ...width=1780, ...width=2000, ...width=3000, ...width=3840"
     sizes="100vw">

<!-- Mobile: max 1500px wide images -->
<img srcset="...width=375, ...width=550, ...width=750, ...width=1000,
             ...width=1250, ...width=1500"
     sizes="100vw">
```

---

## 17. Third-Party Integrations

| Integration      | Purpose                        | Asset                                    |
| :--------------- | :----------------------------- | :--------------------------------------- |
| **Judge.me**     | Product reviews & ratings       | `shopify_v2.css`, inline star font       |
| **GoKwik**       | Checkout optimization (India)   | Inline styles + CDN for button/loader    |
| **Shiprocket**   | Order tracking                  | External link from nav                   |
| **Slick Slider** | Banner/product carousels        | `slick.min.js` + `slick.css`             |
| **Swiper**       | Touch slider                    | `swiper.min.js` + `swiper.min.css`       |
| **GSAP**         | Scroll animations               | `gsap.min.js` + `ScrollTrigger.min.js`   |
| **Canvas Confetti** | Celebration effects          | `confetti.browser.min.js`               |

### Judge.me Custom Variables

```css
--jdgm-primary-color: #108474;
--jdgm-secondary-color: rgba(16, 132, 116, 0.1);
--jdgm-star-color: #858282;
--jdgm-border-radius: 0;
--jdgm-write-review-bg-color: #108474;
--jdgm-write-review-text-color: white;
--jdgm-snippet-card-color: #fff;
--jdgm-snippet-text-color: #000;
--jdgm-snippet-lighter-text-color: #7B7B7B;
--jdgm-snippet-star-color: #108474;
--jdgm-snippet-border-radius: 8px;
--jdgm-snippet-arrows-bg-color: #fff;
--jdgm-snippet-arrows-color: #000;
--jdgm-paginate-color: #108474;
--jdgm-reviewer-name-color: #108474;
```

---

## Quick Reference — Design Principles

1. **Dark-first**: Everything starts from `#000000`. Light pages are the exception.
2. **Zero border-radius**: Buttons, inputs, media, and popups all use `0px` radius. Only variant pills (`40px`) and badges (`4rem`) break this rule.
3. **Single typeface**: Unbounded across all weights. No body/heading split.
4. **Uppercase everywhere**: Navigation, cards, CTAs, footers, and badges all use `text-transform: uppercase`.
5. **Minimal spacing between sections**: `--spacing-sections-desktop: 0px` — content is edge-to-edge.
6. **Immersive imagery**: Hero images at 3840px, 100vw full-bleed, with scale-on-hover and scroll-driven zoom effects.
7. **Glass-blur header**: Sticky header transitions from solid `#000` to `backdrop-filter: blur(8px)` on scroll.
8. **Cinematic product viewer**: 600-frame canvas scrub with lerp-smoothed frame interpolation and glow/vignette overlays.
9. **Product price hierarchy**: Sale price large and dark, original price smaller and grey with strikethrough, discount badge in black with white text.
10. **India-specific UX**: ₹ currency, GoKwik checkout, Shiprocket tracking, WhatsApp support, +91 phone input, 18+ age gate.

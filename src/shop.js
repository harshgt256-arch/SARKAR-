/* ═══════════════════════════════════════════════════════════════
   SARKAR — SHOP THE COLLECTION (#shop)
   Product cards generated from PRODUCTS, ADD TO CART interaction,
   card click-through, staggered scroll entrance. Vanilla JS.
   ───────────────────────────────────────────────────────────── */

/* ─── PRODUCT DATA ───
   Images: placeholder PNGs mapped by name — swap to the real
   throne/orion/noble/regal photos when available. */
const PRODUCTS = [
  {
    name: 'THRONE',
    accords: 'WARM · LEATHER · AMBER',
    price: '₹1,999',
    img: '/images/blubbfblubbfblub.png',
    href: 'https://www.sarkar.store/products/throne',
  },
  {
    name: 'ORION',
    accords: 'FRESH · CITRUS · AROMATIC',
    price: '₹1,999',
    img: '/images/oonshxoonshxoons.png',
    href: 'https://www.sarkar.store/products/orion',
  },
  {
    name: 'NOBLE',
    accords: 'FRESH · WOODY · AROMATIC',
    price: '₹1,999',
    img: '/images/nvrs3tnvrs3tnvrs.png',
    href: 'https://www.sarkar.store/products/noble',
  },
  {
    name: 'REGAL',
    accords: 'OUD · SMOKY · MUSK',
    price: '₹1,999',
    img: '/images/4v3vus4v3vus4v3v.png',
    href: 'https://www.sarkar.store/products/regal',
  },
];

/* ─── CARD GENERATION ─── */
function buildCard(product) {
  const card = document.createElement('article');
  card.className = 'product-card';

  const imgWrap = document.createElement('div');
  imgWrap.className = 'card-img-wrap';

  const img = document.createElement('img');
  img.src = product.img;
  img.alt = `${product.name} parfum`;
  img.loading = 'lazy';
  imgWrap.appendChild(img);

  const body = document.createElement('div');
  body.className = 'card-body';

  const name = document.createElement('h3');
  name.className = 'card-name';
  name.textContent = product.name;

  const accords = document.createElement('p');
  accords.className = 'card-accords';
  accords.textContent = product.accords;

  const row = document.createElement('div');
  row.className = 'card-row';

  const price = document.createElement('span');
  price.className = 'card-price';
  price.textContent = product.price;

  const btn = document.createElement('button');
  btn.className = 'card-btn';
  btn.type = 'button';
  btn.textContent = 'ADD TO CART';

  // ADD TO CART click — spec behavior
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent card click
    if (btn.classList.contains('added')) return;
    btn.textContent = 'ADDED ✓';
    btn.classList.add('added');
    setTimeout(() => {
      btn.textContent = 'ADD TO CART';
      btn.classList.remove('added');
    }, 1800);
  });

  row.appendChild(price);
  row.appendChild(btn);
  body.appendChild(name);
  body.appendChild(accords);
  body.appendChild(row);
  card.appendChild(imgWrap);
  card.appendChild(body);

  // Card click → product page
  card.addEventListener('click', () => {
    window.location.href = product.href;
  });

  return card;
}

function renderProducts() {
  const grid = document.querySelector('#shop .product-grid');
  if (!grid) return;
  PRODUCTS.forEach((product) => grid.appendChild(buildCard(product)));
}

/* ─── SCROLL ENTRANCE — staggered, once ─── */
function initShopEntrance() {
  const grid = document.querySelector('#shop .product-grid');
  if (!grid) return;

  const cards = grid.querySelectorAll('.product-card');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cards.forEach((card) => card.classList.add('visible'));
          io.disconnect(); // once: true
        }
      });
    },
    { threshold: 0.15 }
  );

  io.observe(grid);
}

/* ─── BOOT ─── */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initShopEntrance();
});

const PAGE_ORDER = ['index.html', 'gallery.html', 'archive.html', 'artwork.html', 'about.html', 'contact.html'];

function pageIndex(pathname) {
  const file = pathname.split('/').pop() || 'index.html';
  const name = file === '' ? 'index.html' : file;
  const idx = PAGE_ORDER.indexOf(name);
  return idx === -1 ? 0 : idx;
}

// Year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  applyTheme();
  applyGalleryStyle();
  injectThemeSelector();
  injectGalleryStyleSelector();
  injectMobileNav();
  applyEntryAnimation();

  if (document.getElementById('featured-grid')) renderFeatured();
  if (document.getElementById('gallery-grid')) renderGallery();
  if (document.getElementById('artwork-detail')) renderArtworkDetail();
  if (document.querySelector('.hero-image')) setHeroImage();

  setupPageTransitions();
});

const THEMES = [
  { value: '1a', label: '1a — Warm Earth (light)' },
  { value: '1b', label: '1b — Warm Earth (dark)' },
  { value: '2a', label: '2a — Coastal (light)' },
  { value: '2b', label: '2b — Coastal (dark)' },
  { value: '3a', label: '3a — Soft Pastel (light)' },
  { value: '3b', label: '3b — Soft Pastel (dark)' },
  { value: '4a', label: '4a — Modern Mono (light)' },
  { value: '4b', label: '4b — Modern Mono (dark)' },
  { value: '5a', label: '5a — Botanical (light)' },
  { value: '5b', label: '5b — Botanical (dark)' }
];

function applyTheme() {
  const saved = localStorage.getItem('theme') || '1a';
  document.documentElement.setAttribute('data-theme', saved);
}

const GALLERY_STYLES = [
  { value: 'a', label: 'Gallery Style A' },
  { value: 'b', label: 'Gallery Style B' }
];

function applyGalleryStyle() {
  const saved = localStorage.getItem('galleryStyle') || 'a';
  document.documentElement.setAttribute('data-gallery', saved);
}

function injectGalleryStyleSelector() {
  const nav = document.querySelector('.site-header nav');
  if (!nav || nav.querySelector('.gallery-select')) return;
  const current = localStorage.getItem('galleryStyle') || 'a';
  const select = document.createElement('select');
  select.className = 'theme-select gallery-select';
  select.setAttribute('aria-label', 'Choose gallery style');
  GALLERY_STYLES.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g.value; opt.textContent = g.label;
    if (g.value === current) opt.selected = true;
    select.appendChild(opt);
  });
  select.addEventListener('change', () => {
    localStorage.setItem('galleryStyle', select.value);
    document.documentElement.setAttribute('data-gallery', select.value);
    if (document.getElementById('gallery-grid')) renderGallery();
  });
  nav.appendChild(select);
}

function injectMobileNav() {
  const header = document.querySelector('.site-header');
  const nav = header && header.querySelector('nav');
  if (!header || !nav || header.querySelector('.nav-toggle')) return;

  const btn = document.createElement('button');
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-label', 'Toggle menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span></span><span></span><span></span>';
  header.appendChild(btn);

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = nav.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('open')) return;
    if (nav.contains(e.target) || btn.contains(e.target)) return;
    nav.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
}

function injectThemeSelector() {
  const nav = document.querySelector('.site-header nav');
  if (!nav || nav.querySelector('.theme-select')) return;
  const current = localStorage.getItem('theme') || '1a';
  const select = document.createElement('select');
  select.className = 'theme-select';
  select.setAttribute('aria-label', 'Choose theme');
  THEMES.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.value; opt.textContent = t.label;
    if (t.value === current) opt.selected = true;
    select.appendChild(opt);
  });
  select.addEventListener('change', () => {
    localStorage.setItem('theme', select.value);
    document.documentElement.setAttribute('data-theme', select.value);
  });
  nav.appendChild(select);
}

function applyEntryAnimation() {
  const dir = sessionStorage.getItem('pageDir');
  sessionStorage.removeItem('pageDir');
  const page = document.querySelector('.page');
  if (!page) return;
  // dir === 'back' means user went to a lower-index page, so new page enters from the left
  if (dir === 'back') page.classList.add('enter-left');
}

function setupPageTransitions() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || link.target === '_blank') return;
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (!url.pathname.endsWith('.html') && url.pathname !== '/' && !url.pathname.endsWith('/')) return;

    const currentIdx = pageIndex(window.location.pathname);
    const nextIdx = pageIndex(url.pathname);
    if (nextIdx === currentIdx) { e.preventDefault(); return; }
    e.preventDefault();
    const goingBack = nextIdx < currentIdx;

    sessionStorage.setItem('pageDir', goingBack ? 'back' : 'forward');

    const page = document.querySelector('.page');
    if (page) {
      page.classList.add(goingBack ? 'leaving-right' : 'leaving-left');
      setTimeout(() => { window.location.href = href; }, 380);
    } else {
      window.location.href = href;
    }
  });
}

function mainImage(art) {
  return (art.images && art.images[0]) || art.image || '';
}

const currentWorks = () => artworks.filter(a => !a.archived);
const archivedWorks = () => artworks.filter(a => a.archived);

function cardHtml(art) {
  const img = encodeURI(mainImage(art));
  const detail = art.archived ? art.year : art.price;
  return `
    <a class="card" href="artwork.html?id=${art.id}">
      <div class="card-image"><img src="${img}" alt="${art.title}" loading="lazy" /></div>
      <div class="card-info">
        <h3>${art.title}</h3>
        <p>${art.medium} &middot; ${detail}</p>
      </div>
    </a>`;
}

function renderFeatured() {
  const grid = document.getElementById('featured-grid');
  const featured = currentWorks().filter(a => a.featured).slice(0, 4);
  // Hide the section until there are featured pieces to show
  grid.closest('.featured').style.display = featured.length ? '' : 'none';
  grid.innerHTML = featured.map(cardHtml).join('');
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const style = localStorage.getItem('galleryStyle') || 'a';
  const isArchive = grid.dataset.show === 'archive';
  const pieces = isArchive ? archivedWorks() : currentWorks();

  // Gallery Style B — left empty for now, ready to design later.
  if (style === 'b') {
    grid.innerHTML = '<p style="text-align:center; color:var(--muted); padding:4rem 0;">Gallery Style B — coming soon.</p>';
    return;
  }

  function draw(filter) {
    const list = filter === 'all' ? pieces : pieces.filter(a => a.category === filter);
    const empty = pieces.length ? 'No pieces yet in this category.' : 'New work coming soon.';
    grid.innerHTML = list.length
      ? list.map(cardHtml).join('')
      : `<p style="text-align:center; color:var(--muted); grid-column:1/-1; column-span:all;">${empty}</p>`;
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      draw(btn.dataset.filter);
    });
  });

  draw('all');
}

function renderArtworkDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const art = artworks.find(a => a.id === id) || artworks[0];
  if (!art) return;

  const images = (art.images && art.images.length) ? art.images : (art.image ? [art.image] : []);
  const mainImg = document.getElementById('artwork-image');
  const thumbsWrap = document.getElementById('artwork-thumbs');
  let current = 0;

  function show(idx) {
    current = (idx + images.length) % images.length;
    mainImg.classList.remove('fade-in');
    // force reflow so animation restarts
    void mainImg.offsetWidth;
    mainImg.src = encodeURI(images[current]);
    mainImg.alt = `${art.title} — image ${current + 1}`;
    mainImg.classList.add('fade-in');
    if (thumbsWrap) {
      thumbsWrap.querySelectorAll('.thumb').forEach((t, i) => {
        t.classList.toggle('active', i === current);
      });
    }
  }

  if (thumbsWrap) {
    thumbsWrap.innerHTML = images.map((src, i) => `
      <button class="thumb" data-i="${i}" aria-label="Image ${i + 1}">
        <img src="${encodeURI(src)}" alt="" />
      </button>
    `).join('');
    thumbsWrap.querySelectorAll('.thumb').forEach(btn => {
      btn.addEventListener('click', () => show(parseInt(btn.dataset.i, 10)));
    });
  }

  const prev = document.querySelector('.slider-prev');
  const next = document.querySelector('.slider-next');
  if (prev) prev.addEventListener('click', () => show(current - 1));
  if (next) next.addEventListener('click', () => show(current + 1));

  // Hide arrows/thumbs if only one image
  if (images.length <= 1) {
    document.querySelectorAll('.slider-arrow').forEach(b => b.style.display = 'none');
    if (thumbsWrap) thumbsWrap.style.display = 'none';
  }

  show(0);

  document.getElementById('artwork-title').textContent = art.title;
  document.getElementById('artwork-medium').textContent = art.medium;
  document.getElementById('artwork-size').textContent = art.size;
  document.getElementById('artwork-year').textContent = art.year;
  document.getElementById('artwork-price').textContent = art.archived ? 'From the archive' : art.price;
  document.getElementById('artwork-description').textContent = art.description;

  const subject = encodeURIComponent(`Enquiry: ${art.title}`);
  const body = encodeURIComponent(`Hello,\n\nI'm interested in "${art.title}" (${art.size}, ${art.price}). Could you tell me more?\n\nThanks,\n`);
  document.getElementById('enquire-btn').href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  if (art.archived) {
    document.getElementById('enquire-btn').style.display = 'none';
    const back = document.querySelector('.back-link');
    back.href = 'archive.html';
    back.innerHTML = '&larr; Back to archive';
  }

  document.title = `${art.title} — Kodhere`;
}

function setHeroImage() {
  const hero = document.querySelector('.hero-image');
  // Prefer a featured current piece; fall back to any piece so the hero is never blank
  const firstFeatured = currentWorks().find(a => a.featured) || artworks[0];
  if (firstFeatured) hero.style.backgroundImage = `url('${encodeURI(mainImage(firstFeatured))}')`;
}

function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = encodeURIComponent(form.name.value);
  const email = encodeURIComponent(form.email.value);
  const message = encodeURIComponent(form.message.value);
  const subject = encodeURIComponent(`Website enquiry from ${form.name.value}`);
  const body = `From: ${name} <${email}>%0D%0A%0D%0A${message}`;
  window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  return false;
}

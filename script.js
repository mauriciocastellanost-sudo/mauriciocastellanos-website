// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Header scroll state
const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll);

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});
document.querySelectorAll('#navLinks a').forEach((link) => {
  link.addEventListener('click', () => document.body.classList.remove('nav-open'));
});

// ---- Photography gallery ----
// `photos` and `categories` come from photos-data.js (loaded before this file).
const BASE = 'https://img1.wsimg.com/isteam/ip/79b6df4d-89a9-4ef1-acb4-21cdbae3923c';

function cropUrl(file, width) {
  return `${BASE}/${file}/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:${width},cg:true`;
}
function fitUrl(file, width) {
  return `${BASE}/${file}/:/rs=w:${width},cg:true,m`;
}
function imageUrl(photo) {
  if (photo.type === 'local') return photo.file;
  return photo.type === 'crop' ? cropUrl(photo.file, 800) : fitUrl(photo.file, 800);
}
function fullImageUrl(photo) {
  if (photo.type === 'local') return photo.file;
  return photo.type === 'crop' ? cropUrl(photo.file, 1800) : fitUrl(photo.file, 1800);
}

// ---- Build gallery filter tabs from categories ----
const galleryTabs = document.getElementById('galleryTabs');

const allTab = document.createElement('button');
allTab.className = 'tab active';
allTab.dataset.filter = 'all';
allTab.textContent = 'All';
galleryTabs.appendChild(allTab);

categories.forEach((cat) => {
  const tab = document.createElement('button');
  tab.className = 'tab';
  tab.dataset.filter = cat.key;
  tab.textContent = cat.label;
  galleryTabs.appendChild(tab);
});

// ---- Render gallery items ----
const galleryGrid = document.getElementById('galleryGrid');

photos.forEach((photo, index) => {
  const item = document.createElement('div');
  item.className = 'gallery-item';
  item.dataset.category = photo.category;
  item.dataset.index = index;

  const img = document.createElement('img');
  img.src = imageUrl(photo);
  img.alt = photo.description || photo.caption;
  img.loading = 'lazy';

  const caption = document.createElement('span');
  caption.className = 'caption';
  caption.textContent = photo.caption;

  item.appendChild(img);
  item.appendChild(caption);
  galleryGrid.appendChild(item);

  item.addEventListener('click', () => openLightbox(index));
});

// ---- Gallery filter tabs (click handling) ----
document.querySelectorAll('#galleryTabs .tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('#galleryTabs .tab').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach((item) => {
      const show = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !show);
    });
  });
});

// ---- Lightbox ----
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  renderLightbox();
  lightbox.classList.add('open');
}

function renderLightbox() {
  const photo = photos[currentIndex];
  lightboxImg.src = fullImageUrl(photo);
  lightboxImg.alt = photo.description || photo.caption;
  lightboxCaption.textContent = photo.caption;
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxImg.src = '';
}

function showNext(step) {
  currentIndex = (currentIndex + step + photos.length) % photos.length;
  renderLightbox();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => showNext(-1));
lightboxNext.addEventListener('click', () => showNext(1));

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showNext(-1);
  if (e.key === 'ArrowRight') showNext(1);
});

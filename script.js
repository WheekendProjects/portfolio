// Mobile nav toggle
const navToggle = document.getElementById('navtoggle');
const navLinks = document.querySelector('.navlinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Video grid filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const videoCards = document.querySelectorAll('.video-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    videoCards.forEach(card => {
      const match = filter === 'all' || card.dataset.cat === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});

// Lightbox — click-to-enlarge for thumbnail grids
const lightboxSelector = [
  '.ep-card img',
  '.crew-card img',
  '.video-card img',
  '.era-logo-strip img',
  '.asset-strip img',
  '.lightbox-trigger'
].join(', ');

const overlay = document.createElement('div');
overlay.className = 'lightbox-overlay';
overlay.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img class="lightbox-img" alt="">';
document.body.appendChild(overlay);

const lightboxImg = overlay.querySelector('.lightbox-img');
const lightboxClose = overlay.querySelector('.lightbox-close');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  overlay.classList.add('open');
}
function closeLightbox() {
  overlay.classList.remove('open');
}

document.querySelectorAll(lightboxSelector).forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => openLightbox(img.src, img.alt));
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay || e.target === lightboxClose) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

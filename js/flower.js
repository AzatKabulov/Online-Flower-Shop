/* flower.js */
let currentIndex = 0;
const totalImages = 3;

function showImage(i) {
  const src = document.getElementById('image' + i)?.value;
  if (src) document.getElementById('mainImage').src = src;
}
function prevImage() { currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1; showImage(currentIndex); }
function nextImage() { currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1; showImage(currentIndex); }

function toggleDesc() {
  const short = document.querySelector('.desc .short');
  const full  = document.querySelector('.desc .full');
  const btn   = document.querySelector('.show-more-btn');
  if (!short || !full) return;
  const expand = short.classList.contains('active');
  short.classList.toggle('active', !expand);
  full.classList.toggle('active', expand);
  if (btn) btn.textContent = expand ? 'Show less' : 'Show more';
}

function updatePrice() {
  const el = document.getElementById('price');
  if (!el) return;
  el.textContent = document.getElementById('premium').checked
    ? el.getAttribute('data-premium-price')
    : el.getAttribute('data-standard-price');
}

function changeQty(delta) {
  const input = document.getElementById('quantity');
  const val = Math.max(1, (parseInt(input.value) || 1) + delta);
  input.value = val;
}

function buyNow() { window.location.href = 'customerinfo.html'; }

document.addEventListener('DOMContentLoaded', () => {
  // Keyboard nav for image carousel
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });
});

/* home.js */
document.addEventListener('DOMContentLoaded', () => {

  // Read more toggle
  const moreText = document.getElementById('more');
  const readMoreBtn = document.getElementById('readMoreBtn');
  if (readMoreBtn && moreText) {
    readMoreBtn.addEventListener('click', () => {
      const isHidden = moreText.style.display === 'none' || moreText.style.display === '';
      moreText.style.display = isHidden ? 'inline' : 'none';
      readMoreBtn.textContent = isHidden ? 'Read less' : 'Read more';
      readMoreBtn.setAttribute('aria-expanded', String(isHidden));
    });
  }

  // Hover image swap on flower cards
  document.querySelectorAll('.card-img-wrap img[data-hover]').forEach(img => {
    const original = img.src;
    const hover = img.getAttribute('data-hover');
    img.addEventListener('mouseenter', () => { img.src = hover; });
    img.addEventListener('mouseleave', () => { img.src = original; });
  });

  // Review carousel
  const reviews = document.querySelectorAll('.review');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

  function showReview(i) {
    reviews.forEach((r,j) => r.classList.toggle('active', j === i));
    dots.forEach((d,j) => d.classList.toggle('active', j === i));
    current = i;
  }

  if (reviews.length) {
    showReview(0);
    setInterval(() => showReview((current + 1) % reviews.length), 5000);
    dots.forEach((d,i) => d.addEventListener('click', () => showReview(i)));
  }

  // Feedback form
  const form = document.getElementById('feedbackForm');
  const msg = document.getElementById('feedbackMsg');
  if (form && msg) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!document.getElementById('feedbackText').value.trim()) return;
      form.hidden = true;
      msg.hidden = false;
    });
  }

});

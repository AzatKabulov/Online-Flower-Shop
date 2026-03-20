/* fourflowercategories.js */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.cat-card-img img[data-hover]').forEach(img => {
    const orig = img.src;
    const hover = img.getAttribute('data-hover');
    img.addEventListener('mouseenter', () => { img.src = hover; });
    img.addEventListener('mouseleave', () => { img.src = orig; });
  });
});

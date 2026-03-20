/* base.js — shared across every page */

// Search (no alerts)
function handleSearch() {
  const q = document.getElementById('searchInput')?.value.trim();
  if (q) document.getElementById('searchInput').select();
}

// Dropdown aria
document.addEventListener('DOMContentLoaded', () => {
  const dropBtn = document.querySelector('.dropbtn');
  const dropdown = dropBtn?.closest('.dropdown');
  if (dropdown) {
    dropdown.addEventListener('mouseenter', () => dropBtn.setAttribute('aria-expanded','true'));
    dropdown.addEventListener('mouseleave', () => dropBtn.setAttribute('aria-expanded','false'));
  }
});

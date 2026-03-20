/* signuporlogin.js */
function showTab(tab) {
  document.querySelectorAll('.auth-tab').forEach((t,i) => t.classList.toggle('active', (i===0&&tab==='signin')||(i===1&&tab==='signup')));
  document.getElementById('signinForm').classList.toggle('active', tab === 'signin');
  document.getElementById('signupForm').classList.toggle('active', tab === 'signup');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('signinForm').addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = '../index.html';
  });
  document.getElementById('signupForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const pass = document.getElementById('signUpPassword').value;
    if (name && email && pass) {
      localStorage.setItem('user', JSON.stringify({ name, email }));
      showTab('signin');
    }
  });
});

/* customerinfo.js */
function selectPayment(id, el) {
  document.querySelectorAll('.payment-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('selectedPayment').value = id;
  document.getElementById('paymentError').style.display = 'none';
}

function updateCharCount() {
  const val = document.getElementById('cardMessage').value;
  document.getElementById('charCount').textContent = `${val.length} / 50`;
  const err = document.getElementById('cardMessageError');
  err.style.display = val.length > 50 ? 'block' : 'none';
  if (val.length > 50) err.textContent = 'Max 50 characters.';
}

function showErr(id, msg) { const e = document.getElementById(id); e.textContent = msg; e.style.display = 'block'; }
function hideErr(id) { document.getElementById(id).style.display = 'none'; }

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('customerForm').addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    const name    = document.getElementById('name').value.trim();
    const phone   = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const post    = document.getElementById('postcode').value.trim();
    const sender  = document.getElementById('senderName').value.trim();
    const msg     = document.getElementById('cardMessage').value;
    const pay     = document.getElementById('selectedPayment').value;

    if (!name)                          { showErr('nameError','Full name is required.'); ok=false; } else hideErr('nameError');
    if (!/^\+?[\d\s\-]{7,}$/.test(phone)) { showErr('phoneError','Enter a valid phone number.'); ok=false; } else hideErr('phoneError');
    if (!address)                       { showErr('addressError','Address is required.'); ok=false; } else hideErr('addressError');
    if (!/^\d{5}$/.test(post))          { showErr('postcodeError','Postcode must be 5 digits.'); ok=false; } else hideErr('postcodeError');
    if (!sender)                        { showErr('senderNameError','Sender name is required.'); ok=false; } else hideErr('senderNameError');
    if (msg.length > 50)               { showErr('cardMessageError','Max 50 characters.'); ok=false; } else hideErr('cardMessageError');
    if (!pay)                           { showErr('paymentError','Please select a payment method.'); ok=false; } else hideErr('paymentError');

    if (ok) {
      // Show a polished success state instead of alert
      const form = document.getElementById('customerForm');
      form.innerHTML = `<div style="text-align:center;padding:2rem">
        <div style="font-size:3rem;margin-bottom:1rem">🌸</div>
        <h2 style="font-family:var(--font-d);color:var(--accent);margin-bottom:.5rem">Order placed!</h2>
        <p style="color:var(--muted)">Thank you, your flowers are on their way.</p>
        <a href="../index.html" class="btn btn-primary" style="margin-top:1.5rem;display:inline-block">Back to Shop</a>
      </div>`;
    }
  });
});

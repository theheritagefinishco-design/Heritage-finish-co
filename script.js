// Basic interactivity: theme switcher + simple form validation
document.getElementById('year').textContent = new Date().getFullYear();

const preset = document.getElementById('preset');
preset.addEventListener('change', (e) => {
  const v = e.target.value;
  document.body.className = 'theme-' + v;
});

// Small theme button for mobile
const themeToggle = document.getElementById('themeToggle');
themeToggle && themeToggle.addEventListener('click', () => {
  const next = {forest:'sepia', sepia:'navy', navy:'charcoal', charcoal:'forest'};
  const cur = (document.body.className || '').replace('theme-','') || 'forest';
  const n = next[cur] || 'forest';
  document.body.className = 'theme-' + n;
  themeToggle.setAttribute('aria-pressed', 'true');
  preset.value = n;
});

// Contact form (front-end only)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  status.textContent = '';
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || name.length < 2) return status.textContent = 'Please enter your name.';
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) return status.textContent = 'Please enter a valid email.';
  if (!message || message.length < 10) return status.textContent = 'Please include a bit more detail in the message.';

  // Simulate successful send (replace with actual API when ready)
  status.textContent = 'Thanks — your message looks good. Replace front-end with a backend API to actually send it.';
  form.reset();
});
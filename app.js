const body = document.body;
const eeView = document.getElementById('view-ee');
const friddyView = document.getElementById('view-friddy');
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

function setBrand(brand) {
  const next = brand === 'friddy' ? 'friddy' : 'ee';
  body.dataset.brand = next;
  eeView.dataset.active = String(next === 'ee');
  friddyView.dataset.active = String(next === 'friddy');
  document.querySelectorAll('[data-brand-tab]').forEach((button) => {
    button.setAttribute('aria-selected', String(button.dataset.brandTab === next));
  });
  document.getElementById('logoText').textContent = next === 'friddy' ? 'Friddy' : 'Everything Essential';
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeMenu() {
  if (!mobileNav || !menuButton) return;
  mobileNav.dataset.open = 'false';
  menuButton.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
  const isOpen = mobileNav.dataset.open === 'true';
  mobileNav.dataset.open = String(!isOpen);
  menuButton.setAttribute('aria-expanded', String(!isOpen));
}

document.querySelectorAll('[data-brand-tab]').forEach((button) => {
  button.addEventListener('click', () => setBrand(button.dataset.brandTab));
});

document.querySelectorAll('[data-set-brand]').forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    setBrand(trigger.dataset.setBrand);
  });
});

menuButton.addEventListener('click', toggleMenu);
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

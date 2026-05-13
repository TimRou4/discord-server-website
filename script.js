console.log("Website loaded");

const menuButton = document.querySelector('.menu-button');
const sideMenuLinks = document.querySelectorAll('.side-menu__nav a');

menuButton.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');

  const isOpen = document.body.classList.contains('menu-open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

sideMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

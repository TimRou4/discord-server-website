console.log("Website loaded");

const menuButton = document.querySelector('.menu-button');
const sideMenuLinks = document.querySelectorAll('[data-page]');
const currentTab = document.querySelector('#current-tab');
const pages = document.querySelectorAll('.page');

menuButton.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');

  const isOpen = document.body.classList.contains('menu-open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

sideMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    event.preventDefault();
    
    const pageId = link.dataset.page;
    const tabTitle = link.dataset.title;

    pages.forEach((page) => {
      page.classList.remove('is-active');
    });

    const activePage = document.querySelector(`#${pageId}`);

    if (activePage) {
      activePage.classList.add('is-active');
    }

    currentTab.textContent = tabTitle;

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

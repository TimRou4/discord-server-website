console.log("Website loaded");

const menuButton = document.querySelector('.menu-button');
const pageLinks = document.querySelectorAll('[data-page]');
const currentTab = document.querySelector('#current-tab');
const pages = document.querySelectorAll('.page');

function setMenuByScreenSize() {
  const isPhone = window.matchMedia('(max-width: 768px)').matches;

  if (isPhone) {
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  } else {
    document.body.classList.add('menu-open');
    menuButton.setAttribute('aria-expanded', 'true');
  }
}

setMenuByScreenSize();

menuButton.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');

  const isOpen = document.body.classList.contains('menu-open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

pageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
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

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

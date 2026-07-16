console.log("Website loaded");

const menuButton = document.querySelector('.menu-button');
const pageLinks = document.querySelectorAll('[data-page]');
const currentTab = document.querySelector('#current-tab');
const pages = document.querySelectorAll('.page');

/* ========================================= */
/* Открытие страницы */
/* ========================================= */

function openPage(pageId, tabTitle) {
  pages.forEach((page) => {
    page.classList.remove('is-active');
  });

  const activePage = document.querySelector(`#${pageId}`);

  if (activePage) {
    activePage.classList.add('is-active');
  }

  if (tabTitle) {
    currentTab.textContent = tabTitle;
  }
}


/* ========================================= */
/* Восстановление последней страницы */
/* ========================================= */

const savedPage = localStorage.getItem('ngnf-active-page');
const savedTitle = localStorage.getItem('ngnf-active-title');

if (savedPage && document.querySelector(`#${savedPage}`)) {
  openPage(savedPage, savedTitle);
}


/* ========================================= */
/* Меню при загрузке всегда закрыто */
/* ========================================= */

document.body.classList.remove('menu-open');
menuButton.setAttribute('aria-expanded', 'false');


/* ========================================= */
/* Кнопка открытия меню */
/* ========================================= */

menuButton.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');

  const isOpen = document.body.classList.contains('menu-open');

  menuButton.setAttribute(
    'aria-expanded',
    isOpen ? 'true' : 'false'
  );
});


/* ========================================= */
/* Переключение страниц */
/* ========================================= */

pageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const pageId = link.dataset.page;
    const tabTitle = link.dataset.title;

    /* Открываем нужную страницу */
    openPage(pageId, tabTitle);

    /* Запоминаем страницу */
    localStorage.setItem('ngnf-active-page', pageId);
    localStorage.setItem('ngnf-active-title', tabTitle);

    /* После выбора страницы закрываем меню */
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');

    /* Возвращаемся наверх страницы */
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


/* ========================================= */
/* Закрытие меню через Escape */
/* ========================================= */

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

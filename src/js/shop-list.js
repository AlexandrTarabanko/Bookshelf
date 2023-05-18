import svgBin from '../images/sprite.svg';
import emptyDtTab1x from '../images/shop-list/empty-desktop-tablet@1x.png';
import emptyDtTab2x from '../images/shop-list/empty-desktop-tablet@2x.png';
import emptyMob1x from '../images/shop-list/empty-mobile@1x.png';
import emptyMob2x from '../images/shop-list/empty-mobile@2x.png';
import amazonPng from '../images/png-icons/shops/amazon-icon1x.png';
import amazonPng2x from '../images/png-icons/shops/amazon-icon2x.png';
import appleBookPng from '../images/png-icons/shops/applebook-icon1x.png';
import appleBookPng2x from '../images/png-icons/shops/applebook-icon2x.png';
import bookShopPng from '../images/png-icons/shops/bookshop-icon1x.png';
import bookShopPng2x from '../images/png-icons/shops/bookshop-icon2x.png';

// import './mobile-menu.js';
// import './theme-switch.js';
// import './open-close.js';
// import './vendors/swiper-bundle.min.js';

// import './pagination.js';
// import './modals';
import './slider-set.js';

import Pagination from 'tui-pagination';

const cartEl = document.querySelector('.js-shopping-cart');
const cartListEl = document.querySelector('.js-cart-list');
const paginationContainer = document.getElementById('pagination');

const STORAGE_KEY = 'storage-data';

let itemsPerPage = 4;
let visiblePages = 2;
let resizeTimeout;

cartListEl.addEventListener('click', deleteCard);
window.addEventListener('resize', changePagOptionsByScreenWidth);

createShoppingList();

function createShoppingList() {
  const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const totalItems = storageData.length;
  if (!storageData || totalItems === 0) {
    createEmptyCart(); // виклик функції створення порожнього кошика
  } else {
    initPagination(totalItems); // ініціалізація пагінації
    createFullCart(storageData, 1); // виклик функції створення списка кошика
  }
}

// Функція створення порожнього кошика
function createEmptyCart() {
  const markup = `
    <div class="cart-empty">
      <p class="cart-empty__text">
        This page is empty, add some books and proceed to order.
      </p>
      <picture>
        <source
          srcset="
            ${emptyDtTab1x} 1x,
            ${emptyDtTab2x} 2x
          "
          media="(min-width: 768px)"
        />
        <img
          srcset="
            ${emptyMob1x} 1x,
            ${emptyMob2x} 2x
            "
          src="${emptyMob1x}"
          alt="Empty cart"
          class="cart-empty__img"
        />
      </picture>
    </div>`;

  cartEl.innerHTML = markup;
}

// Функція створення повного кошика
function createFullCart(arr, page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsOnPage = arr.slice(startIndex, endIndex);

  const markup = itemsOnPage
    .map(
      ({
        id,
        book_image,
        title,
        author,
        marketAmazon,
        marketAppleBooks,
        marketBookshop,
        list_name,
      }) =>
        `
      <li class="cart__item card js-card" data-book-id="${id}">
        <picture>
          <img
            src="${
              book_image
                ? book_image
                : './images/placeholders/very-small-placeholder.png'
            }"
            alt="${title}"
            class="card__img"
            width="110"
            height="142"
          />
        </picture>
        <div class="card__content">
          <h3 class="card__title">${title.trim()}</h3>
          <p class="card__category">${list_name.trim()}</p>
          <p class="card__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus, architecto voluptate sint debitis ab fugit
            laudantium nostrum dolore quisquam? Laboriosam nulla eum a,
            quo, molestiae sed error possimus expedita veniam maiores
            nam maxime provident quod blanditiis cum voluptate. A
            provident corrupti dignissimos ullam. Porro architecto
            maiores est ullam sed. Cum.
          </p>
          <div class="card__footer">
            <p class="card__author">${author.trim()}</p>
            <ul class="card__shops list">
              <li class="shop">
                <a
                  href="${marketAmazon}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--amazon"
                    width="28"
                    height="28"
                    srcset="
                      ${amazonPng} 1x,
                      ${amazonPng2x} 2x
                    "
                    src="${amazonPng}"
                    alt="amazon.com"
                /></a>
              </li>
              <li class="shop">
                <a
                  href="${marketAppleBooks}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--apple"
                    width="28"
                    height="28"
                    srcset="
                      ${appleBookPng} 1x,
                      ${appleBookPng2x} 2x
                    "
                    src="${appleBookPng}"
                    alt="books.apple.com"
                /></a>
              </li>
              <li class="shop">
                <a
                  href="${marketBookshop}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--bookshop"
                    width="28"
                    height="28"
                    srcset="
                      ${bookShopPng} 1x,
                      ${bookShopPng2x} 2x
                    "
                    src="${bookShopPng}"
                    alt="bookshop.org"
                /></a>
              </li>
            </ul>
          </div>
          <button
            class="card__delete button js-card__delete"
            type="button"
          >
            <svg class="icon-delete" width="22" height="22">
              <use x="1%" href="${svgBin}#icon-bin"></use>
            </svg>
          </button>
        </div>
      </li>`
    )
    .join('');

  cartListEl.innerHTML = markup;
}

// Функція ініціалізації пагінації
function initPagination(totalItems) {
  const pagination = new Pagination(paginationContainer, {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: visiblePages,
    centerAlign: true,
  });
  // Обробка подій пагінації та оновлення списку
  pagination.on('afterMove', eventData => {
    const currentPage = eventData.page;
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    createFullCart(storageData, currentPage);
  });
}

// Функція видалення картки + виклик функції перемальовки сторінки
function deleteCard(evt) {
  if (evt.target.classList.contains('js-card__delete')) {
    const card = evt.target.closest('.js-card');
    const bookId = card.dataset.bookId;
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const indexToDelete = storageData.findIndex(object => object.id === bookId);
    storageData.splice(indexToDelete, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
    card.remove();
    createShoppingList();
  }
}

// Функція зміни кількості відображення карток на сторінці в залежності від ширини екрану
function changePagOptionsByScreenWidth() {
  screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    visiblePages = 2;
    itemsPerPage = 4;
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(function () {
      createShoppingList();
      console.log('count1');
    }, 300);
  } else if (screenWidth >= 768) {
    itemsPerPage = 3;
    visiblePages = 3;
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(function () {
      createShoppingList();
      console.log('count2');
    }, 300);
  }
}

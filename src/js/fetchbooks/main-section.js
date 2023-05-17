import '../../sass/index.scss';
import bigPlaceholder from '../../images/placeholders/big-placeholder.png';
import mediumPlaceholder from '../../images/placeholders/medium-placeholder.png';
import smallPlaceholder from '../../images/placeholders/small-placeholder.png';
// import trizub from '../../images/'
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { fetchBooks } from './fetchBooks.js';
import Notiflix from 'notiflix';

const allCategoryBtn = document.querySelector('#allCategoryBtn');
const categorieList = document.querySelector('.categorie-list'); // Perevertnyk
const allBooksTitle = document.querySelector('.all-books-title'); // Perevertnyk
const bookListRef = document.querySelector('.category__books'); // Panov
const sortTitle = document.querySelector('.category-title'); // Panov

allCategoryBtn.addEventListener('click', onAllCategoriesClick);

function onAllCategoriesClick() {
  startPage();
}

startPage();

function markupBooks(array) {
  let bestBooks;
  const categories = array
    .map(arr => {
      bestBooks = arr.books
        .map(({ _id, book_image, title, author }) => {
          let placeholder;
          const imgSrc = true ? `${book_image}` : placeholder;
          if (arr.length === 0) {
            placeholder = bigPlaceholder;
            Notiflix.Notify.failure('We didnt find any book');
            if (window.innerWidth < 768) {
              placeholder = smallPlaceholder;
            } else if (window.innerWidth < 1280) {
              placeholder = mediumPlaceholder;
            }
          }
          return `
          <li class="book" id="${_id}">
            <div class="thumb">
              <img loading="lazy" class="book-photo" src="${imgSrc}" alt="${
            title || 'Not found'
          }" />
            </div>
            <h3 class="book-name">${title || 'Not found'}</h3>
            <span class="book-author">${author || 'No name'}</span>
            <div class="all-book-popup"> quick view </div>
          </li>`;
        })
        .join('');
      return `
        <li class="categorie">
          <div>
            <h3 class="categorie-name">${arr.list_name}</h3>
            <ul class="book-list">
              ${bestBooks}
            </ul>
            <button class="btn-look" type="button" name="${arr.list_name}">See more</button>
          </div> 
        </li> 
      `;
    })
    .join('');

  return categories;
}

async function startPage() {
  Loading.hourglass('Loading...', {
    messageColor: '#eac645',
    messageFontSize: '30px',
    svgSize: '100px',
    svgColor: '#4f2ee8',
  });

  bookListRef.innerHTML = '';
  sortTitle.style.display = 'none';
  allBooksTitle.style.display = 'block';
  try {
    const data = await fetchBooks();
    const markup = await markupBooks(data);
    categorieList.innerHTML = markup;
  } catch (error) {
    console.log(error.message);
  }
  Loading.remove(500);
}

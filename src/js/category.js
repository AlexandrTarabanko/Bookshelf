import bigPlaceholder from '../images/placeholders/big-placeholder.png';
import mediumPlaceholder from '../images/placeholders/medium-placeholder.png';
import smallPlaceholder from '../images/placeholders/small-placeholder.png';

const listRef = document.querySelector('.category__list');
const bookListRef = document.querySelector('.category__books');
const ENDPOINT = 'https://books-backend.p.goit.global/books/category';

listRef.addEventListener('click', onCategoryCatch);

async function onCategoryCatch(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const categoryName = e.target.name;
  try {
    const caughtCategory = await fetchByCategory(categoryName);
    const paintedList = await paintMarkup(caughtCategory, categoryName);
    bookListRef.innerHTML = paintedList;
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchByCategory(categoryName) {
  try {
    const url = `${ENDPOINT}?category=${categoryName}`;
    const query = await fetch(url);
    if (!query.ok) {
      throw new Error(`Server responded with status: ${query.status}`);
    }
    const jsonQuery = await query.json();
    return jsonQuery;
  } catch (error) {
    console.error(`Failed to fetch category: ${error.message}`);
    return [];
  }
}

async function paintMarkup(arr, categoryName) {
  if (arr.length === 0) {
    let placeholder = bigPlaceholder;
    if (window.innerWidth < 768) {
      placeholder = smallPlaceholder;
    } else if (window.innerWidth < 1280) {
      placeholder = mediumPlaceholder;
    }
    return `<li class="book">
             <img src="${placeholder}" alt="No books found" />
              <h3>No books found</h3>
            </li>`;
  }

  let words = categoryName.split(' ');
  words[words.length - 1] = `<span class='highlight'>${
    words[words.length - 1]
  }</span>`;
  categoryName = words.join(' ');

  const categoryTitleRef = document.querySelector('.category-title');
  categoryTitleRef.innerHTML = `<h2 class="category-title">${categoryName}</h2>`;

  let markup = '';
  markup += arr
    .map(
      ({ title, author, book_image, _id }) =>
        `<li id="${_id}" class="book">
        <img src="${book_image}" alt="${title}" />
        <h3>${title}</h3>
        <p>${author}</p>
         <div class="book-popup"> quick view </div>
      </li>`
    )
    .join('');

  return markup;
}

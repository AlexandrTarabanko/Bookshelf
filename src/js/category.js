import { Loading } from 'notiflix/build/notiflix-loading-aio';
const listRef = document.querySelector('.category__list'); // Button Set
const bookListRef = document.querySelector('.category__books'); // Panov
const sortTitle = document.querySelector('.category-title'); // Panov
const categorieList = document.querySelector('.categorie-list'); // Perevertnyk
const allBooksTitle = document.querySelector('.all-books-title'); // Perevertnyk
const ENDPOINT = 'https://books-backend.p.goit.global/books/category';
listRef.addEventListener('click', onCategoryCatch);
categorieList.addEventListener('click', onSeeMoreBtn);

function resetActiveState() {
  let activeElements = listRef.querySelectorAll('.active');
  activeElements.forEach(el => el.classList.remove('active'));
}
async function onSeeMoreBtn(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const query = e.target.closest('button').name;
  Loading.hourglass('Loading...', {
    messageColor: '#EAC645',
    messageFontSize: '30px',
    svgSize: '100px',
    svgColor: '#4F2EE8',
  });
  try {
    categorieList.innerHTML = '';
    allBooksTitle.style.display = 'none';
    sortTitle.style.display = 'block';
    const caughtCategory = await fetchByCategory(query);
    const paintedList = await paintMarkup(caughtCategory, query);
    bookListRef.innerHTML = paintedList;
    resetActiveState();
    e.target.classList.add('active');
  } catch (error) {
    console.error(error.message);
  }
  Loading.remove(500);
}
async function onCategoryCatch(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const categoryName = e.target.name;
  Loading.hourglass('Loading...', {
    messageColor: '#EAC645',
    messageFontSize: '30px',
    svgSize: '100px',
    svgColor: '#4F2EE8',
  });
  try {
    categorieList.innerHTML = '';
    if (categoryName === 'All categories') {
      allBooksTitle.style.display = 'block';
      sortTitle.style.display = 'none';
      resetActiveState();
      e.target.classList.add('active');
    } else {
      allBooksTitle.style.display = 'none';
      sortTitle.style.display = 'block';
      const caughtCategory = await fetchByCategory(categoryName);
      const paintedList = await paintMarkup(caughtCategory, categoryName);
      bookListRef.innerHTML = paintedList;
      resetActiveState();
      e.target.classList.add('active');
    }
  } catch (error) {
    console.error(error.message);
  }
  Loading.remove(500);
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
        `<li id="${_id}" class="books">
          <img loading="lazy" src="${book_image}" alt="${title}" />
          <h3>${title}</h3>
          <p>${author}</p>
         <div class="book-popup"> quick view </div>
      </li>`
    )
    .join('');
  return markup;
}

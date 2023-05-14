import { openModalId } from './modals';
import amazonPng from '../images/png-icons/shops/amazon-icon.png';

const allModal = document.querySelector('#allModal');
const bookList = document.querySelector('.category__books');
const storageButton = document.querySelector('.add-storage-button');
const removeStorageBtn = document.querySelector('.remove-modal-btn');
const storageDescription = document.querySelector('.storage-description');
const STORAGE_KEY = 'storage-data';
let storageArr = [];
let storageObj = {};

// deleteStorageBtn.addEventListener('click', onStorageDelete);
storageButton.addEventListener('click', onStorageAdd);
removeStorageBtn.addEventListener('click', onStorageDelete);
bookList.addEventListener('click', onIdClick);

function onIdClick(e) {
  const id = e.target.closest('li').id;
  openModalId();
  createModal(id);
}

async function createModal(bookId) {
  // storageObj = {};
  try {
    const data = await fetchBookById(bookId);
    storageCheck();
    createMarkup(data);
    return data;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}

async function fetchBookById(bookId) {
  try {
    storageObj = {};
    const response = await fetch(
      `https://books-backend.p.goit.global/books/${bookId}`
    );
    const data = await response.json();
    storageObj = {
      book_image: data.book_image,
      title: data.title,
      author: data.author,
      marketAmazon: data.buy_links[0].url,
      marketAppleBooks: data.buy_links[1].url,
      marketBookshop: data.buy_links[4].url,
      list_name: data.list_name,
      id: data._id,
    };
    return data;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}
function storageCheck() {
  const storageArr = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const idToFind = storageObj.id;

  if (!storageArr || storageArr.length === 0) {
    storageButton.style.display = 'block';
    removeStorageBtn.style.display = 'none';
    return;
  } else {
    const objToFind = storageArr.find(obj => obj.id === idToFind);
    if (!objToFind) {
      storageButton.style.display = 'block';
      removeStorageBtn.style.display = 'none';
    } else {
      storageButton.style.display = 'none';
      removeStorageBtn.style.display = 'block';
    }
  }

  // if (!objToFind) {
  // }
}

function createMarkup(data) {
  allModal.innerHTML = '';
  const bookModalImage = data.book_image;
  const bookTitle = data.title;
  const bookAuthor = data.author;
  const marketAmazon = data.buy_links[0].url;
  const marketAppleBooks = data.buy_links[1].url;
  const marketBookshop = data.buy_links[4].url;

  const html = `
  
  <img src="${bookModalImage}" alt="Book Image" class="image-about-book-modal">
  <div class="info-modal">
  <h2 class="title-about-book-modal">${bookTitle}</h2>
  <p class="author-about-book-modal"> ${bookAuthor}</p>
  <p class="text-about-book-modal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, iure nam facere exercitationem quibusdam cum in quasi impedit perferendis porro. Vero quos minima doloribus magni corporis beatae ducimus officiis! Rerum?</p>
  <ul class="shop-modal-list"> <li class="shop-modal-item"><a href="${marketAmazon}" target="_blank"
    > <img
     width="62"
    height="12"
        src="${amazonPng}"
    alt="Amazon"
  /></a></li>
  <li class="shop-modal-item"><a href="${marketAppleBooks}" target="_blank"
    > <img
    width="33"
    height="32"
       src="src/images/png-icons/shops/first-book-shop-icon.png"
    alt="AppleBooks"
  /></a></li>
  <li class="shop-modal-item"><a href="${marketBookshop}" target="_blank"
    > <img
    width="38"
    height="38"
    src="./src/images/png-icons/shops/second-book-shop-icon.png"
    alt="Book-Shop"
  /></a></li>
</ul>
</div>
  `;
  allModal.innerHTML = html;
}

function onStorageAdd() {
  const realStorageArr = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const dataToSave = storageObj;
  if (!realStorageArr || realStorageArr.length === 0) {
    storageArr.push(dataToSave);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageArr));
  } else {
    realStorageArr.push(dataToSave);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(realStorageArr));
  }

  storageDescription.textContent =
    'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
  storageCheck();
}

function onStorageDelete() {
  storageDescription.textContent = '';

  const idToDelete = storageObj.id;
  const storageArr = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const indexToDelete = storageArr.findIndex(obj => obj.id === idToDelete);
  storageArr.splice(indexToDelete, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageArr));
  storageCheck();
}

export { createModal };

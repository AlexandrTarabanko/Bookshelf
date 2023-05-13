const bookModalContainer = document.querySelector('.modal');
const book1Id = "643282b2e85766588626a0fc";

async function fetchBookData(bookId) {
    const storageId = {bookId:''}
  try {
    const response = await fetch(`https://books-backend.p.goit.global/books/${bookId}`);
    const data = await response.json();
    storageId.bookId = data._id;
    console.log(storageId)
    return data;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}
// function markupBookById(arr){
//     const bookLinks = arr.buy_links
// const firsPart = arr.map({book_image, title, author})
// }

function createBookModal(data) {
  const bookModalImage = data.book_image;
  const bookTitle = data.title;
  const bookAuthor = data.author;
  const marketAmazon = data.buy_links[0].url;
  const marketAppleBooks = data.buy_links[1].url;
  const marketBookshop = data.buy_links[4].url

  const html = `
  <img src="${bookModalImage}" alt="Book Image" class="image__about-book-modal">
  <h2>${bookTitle}</h2>
  <p> ${bookAuthor}</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, iure nam facere exercitationem quibusdam cum in quasi impedit perferendis porro. Vero quos minima doloribus magni corporis beatae ducimus officiis! Rerum?</p>
  <ul> <li><a href="${marketAmazon}" target="_blank"
    > <img
    width="28"
    height="28"
    src="src/images/png-icons/shops/amazon-icon.png"
    alt="close-icon"
  /></a></li>
  <li><a href="${marketAppleBooks}" target="_blank"
    > <img
    width="28"
    height="28"
    src="src/images/png-icons/shops/first-book-shop-icon.png"
    alt="close-icon"
  /></a></li>
  <li><a href="${marketBookshop}" target="_blank"
    > <img
    width="28"
    height="28"
    src="src/images/png-icons/shops/second-book-shop-icon.png"
    alt="close-icon"
  /></a></li>
</ul>
  `;

  bookModalContainer.insertAdjacentHTML('beforeend', html);
}

async function fetchAndCreateBookModal(bookId) {
  try {
    const data = await fetchBookData(bookId);
    createBookModal(data);
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}
fetchAndCreateBookModal(book1Id);

function createStorageData(data){
    fetchBookData(bookId)
}

const storageButton = document.querySelector('.storage-button')

const STORAGE_KEY = 'storage-data'

storageButton.addEventListener('click', onStorageAdd)
function onStorageAdd(storageId){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageId)
    )
}
// onStorageAdd(storageId)
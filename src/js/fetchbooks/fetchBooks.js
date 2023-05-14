export async function fetchBooks() {
  const URL = 'https://books-backend.p.goit.global/books/top-books';
  try {
    const responce = await fetch(URL);
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

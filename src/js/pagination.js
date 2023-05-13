import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

const booksPagination = new Pagination('pagination', {
  totalItems: 500,
  itemsPerPage: 10,
  visiblePages: 3,
});

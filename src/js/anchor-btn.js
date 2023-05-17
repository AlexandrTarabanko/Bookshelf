const scrollToTopBtn = document.querySelector('#anchorBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

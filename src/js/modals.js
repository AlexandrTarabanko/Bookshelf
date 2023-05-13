// Змінити на клік по зображенням
const openModalBtn = document.getElementById('openModalBtn');


const modal = document.querySelector('.modal');
const closeModalBtn = modal.querySelector('.close-modal-btn');
const jsBackdropModal = document.querySelector('.js-backdrop-modal')

function openModal() {
  modal.classList.remove('is-hidden');
}

function closeModal() {
  modal.classList.add('is-hidden');
}

// Змінити на клік по зображенням
openModalBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

jsBackdropModal.addEventListener('click', function (event) {
  if (event.target === jsBackdropModal) {
    closeModal();
  }
});
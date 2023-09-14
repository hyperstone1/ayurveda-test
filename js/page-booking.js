document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const btnCloseModal = document.querySelector('.modal__content-close');

  const bookingBtns = document.querySelectorAll('.rooms__booking-btn');
  bookingBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.classList.add('visible');
    });
  });

  btnCloseModal.addEventListener('click', () => {
    modal.classList.remove('visible');
  });
});

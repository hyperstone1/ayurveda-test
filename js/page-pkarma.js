const rem = function (rem) {
  if (window.innerWidth > 768) {
    return 0.005208335 * window.innerWidth * rem;
  } else {
    // где 375 это ширина моб версии макета
    return (100 / 375) * (0.1 * window.innerWidth) * rem;
  }
};

const contraindications = new Swiper('.contraindications__list', {
  slidesPerView: 'auto',
  spaceBetween: rem(10),
  centeredSlides: false,
  navigation: {
    nextEl: '.navigation-next',
    prevEl: '.navigation-prev',
  },
  // loop: true,
});

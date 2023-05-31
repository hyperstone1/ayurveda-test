document.addEventListener('DOMContentLoaded', function () {
  function addPaginationArrows() {
    let windowWidth = window.innerWidth;
    let navigationContainer = document.querySelector('.swiper-navigation');
    let slides = document.querySelectorAll('.services__item');

    const wrapper = document.querySelector('.services__list_wrapper');
    wrapper.classList.add('swiper-wrapper');

    slides.forEach((slide) => {
      slide.classList.add('swiper-slide');
    });
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return current + '<span class="current-total">-</span>' + total;
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var prevButton = document.createElement('div');
    prevButton.className = 'swiper-button-prev';
    prevButton.innerHTML = `
    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.7936 0.473335L0.356098 8.91084C0.312515 8.95437 0.277941 9.00607 0.254351 9.06297C0.230761 9.11988 0.21862 9.18088 0.21862 9.24248C0.21862 9.30408 0.230761 9.36508 0.254351 9.42198C0.277941 9.47889 0.312515 9.53058 0.356098 9.57412L8.7936 18.0116C8.88156 18.0996 9.00085 18.149 9.12524 18.149C9.24963 18.149 9.36893 18.0996 9.45688 18.0116C9.54484 17.9237 9.59425 17.8044 9.59425 17.68C9.59425 17.5556 9.54484 17.4363 9.45688 17.3483L1.81977 9.71123H21.3127C21.4371 9.71123 21.5563 9.66184 21.6442 9.57393C21.7321 9.48602 21.7815 9.3668 21.7815 9.24248C21.7815 9.11816 21.7321 8.99893 21.6442 8.91102C21.5563 8.82311 21.4371 8.77373 21.3127 8.77373H1.81977L9.45688 1.13662C9.54484 1.04866 9.59425 0.929367 9.59425 0.804977C9.59425 0.680588 9.54484 0.561293 9.45688 0.473335C9.36893 0.38538 9.24963 0.335966 9.12524 0.335966C9.00085 0.335966 8.88156 0.38538 8.7936 0.473335Z" fill="#22262A" fill-opacity="0.6"/>
    </svg>
  `;
    navigationContainer.appendChild(prevButton);

    var nextButton = document.createElement('div');
    nextButton.className = 'swiper-button-next';
    nextButton.innerHTML = `
    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.1422 17.9897L21.5797 9.55224C21.6233 9.5087 21.6579 9.45701 21.6814 9.4001C21.705 9.3432 21.7172 9.2822 21.7172 9.2206C21.7172 9.159 21.705 9.098 21.6814 9.04109C21.6579 8.98419 21.6233 8.93249 21.5797 8.88896L13.1422 0.451457C13.0542 0.3635 12.9349 0.314087 12.8105 0.314087C12.6862 0.314087 12.5669 0.363501 12.4789 0.451457C12.391 0.539414 12.3415 0.658708 12.3415 0.783098C12.3415 0.907487 12.391 1.02678 12.4789 1.11474L20.116 8.75185H0.623047C0.498727 8.75185 0.379498 8.80123 0.291591 8.88914C0.203683 8.97705 0.154297 9.09628 0.154297 9.2206C0.154297 9.34492 0.203683 9.46415 0.291591 9.55205C0.379498 9.63996 0.498727 9.68935 0.623047 9.68935H20.116L12.4789 17.3265C12.391 17.4144 12.3415 17.5337 12.3415 17.6581C12.3415 17.7825 12.391 17.9018 12.4789 17.9897C12.5669 18.0777 12.6862 18.1271 12.8105 18.1271C12.9349 18.1271 13.0542 18.0777 13.1422 17.9897Z" fill="#22262A"/>
    </svg>
  `;
    navigationContainer.appendChild(nextButton);

    swiper.navigation.init();
    swiper.navigation.update();
  }
  addPaginationArrows();
});

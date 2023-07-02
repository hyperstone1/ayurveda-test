document.addEventListener('DOMContentLoaded', () => {
  const rem = function (rem) {
    if (window.innerWidth > 768) {
      return 0.005208335 * window.innerWidth * rem;
    } else {
      // где 375 это ширина моб версии макета
      return (100 / 375) * (0.1 * window.innerWidth) * rem;
    }
  };

  function resize() {
    const width = window.innerWidth;
    console.log(width);
    const btns = document.querySelectorAll('.procedures_additional__list-btn');
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
    if (width < 768) {
      contraindications.params.spaceBetween = rem(4);
      // contraindications.params.centeredSlides = true;
      console.log(contraindications.params.spaceBetween);

      const titleProcedures = document.querySelector('.contraindications__top-title');
      const contraindicationsNav = document.querySelector('.contraindications__top-navigation');
      titleProcedures.textContent = 'Общие ограничения';
      contraindicationsNav.style.display = 'none';

      const proceduresWrapper = document.querySelector('.procedures__list');
      const allProcedures = document.querySelectorAll('.procedures__list-item');
      const proceduresBlock = document.querySelector('.procedures__slider');

      const proceduresNav = document.createElement('div');
      proceduresNav.className = 'procedures-navigation';
      const arrowPrev = document.createElement('div');
      arrowPrev.className = 'procerures-navigation-prev';
      arrowPrev.innerHTML = `
      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.23483 0.695942L0.484829 8.40849C0.449963 8.44829 0.422302 8.49554 0.403431 8.54756C0.38456 8.59958 0.374846 8.65533 0.374846 8.71164C0.374846 8.76795 0.38456 8.82371 0.403431 8.87572C0.422302 8.92774 0.449963 8.97499 0.484829 9.01479L7.23483 16.7273C7.30519 16.8077 7.40063 16.8529 7.50014 16.8529C7.59965 16.8529 7.69509 16.8077 7.76546 16.7273C7.83582 16.6469 7.87535 16.5379 7.87535 16.4242C7.87535 16.3105 7.83582 16.2014 7.76546 16.121L1.65577 9.14012H17.2501C17.3496 9.14012 17.445 9.09497 17.5153 9.01462C17.5856 8.93426 17.6251 8.82528 17.6251 8.71164C17.6251 8.598 17.5856 8.48902 17.5153 8.40866C17.445 8.32831 17.3496 8.28316 17.2501 8.28316H1.65577L7.76546 1.30223C7.83582 1.22184 7.87535 1.11279 7.87535 0.999088C7.87535 0.885386 7.83582 0.776342 7.76546 0.695942C7.69509 0.615543 7.59965 0.570375 7.50014 0.570375C7.40063 0.570375 7.30519 0.615543 7.23483 0.695942Z" fill="#22262A" fill-opacity="0.6"/>
      </svg>
      `;
      const arrowNext = document.createElement('div');
      arrowNext.className = 'procerures-navigation-next';
      arrowNext.innerHTML = `
      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9507 16.3041L17.7007 8.59151C17.7356 8.55171 17.7632 8.50446 17.7821 8.45244C17.801 8.40043 17.8107 8.34467 17.8107 8.28836C17.8107 8.23205 17.801 8.17629 17.7821 8.12428C17.7632 8.07226 17.7356 8.02501 17.7007 7.98521L10.9507 0.272662C10.8804 0.192262 10.7849 0.147095 10.6854 0.147095C10.5859 0.147095 10.4905 0.192263 10.4201 0.272662C10.3497 0.353061 10.3102 0.462106 10.3102 0.575808C10.3102 0.68951 10.3497 0.798555 10.4201 0.878954L16.5298 7.85988H0.935402C0.835946 7.85988 0.740563 7.90503 0.670237 7.98538C0.599911 8.06574 0.560402 8.17472 0.560402 8.28836C0.560402 8.402 0.599911 8.51098 0.670237 8.59134C0.740563 8.67169 0.835946 8.71684 0.935402 8.71684H16.5298L10.4201 15.6978C10.3497 15.7782 10.3102 15.8872 10.3102 16.0009C10.3102 16.1146 10.3497 16.2237 10.4201 16.3041C10.4905 16.3845 10.5859 16.4296 10.6854 16.4296C10.7849 16.4296 10.8804 16.3845 10.9507 16.3041Z" fill="#22262A"/>
      </svg>
      `;
      proceduresNav.appendChild(arrowPrev);
      proceduresNav.appendChild(arrowNext);
      proceduresBlock.appendChild(proceduresNav);

      allProcedures.forEach((item) => {
        item.classList.add('swiper-slide');
      });
      proceduresWrapper.classList.add('swiper-wrapper');
      const proceduresSlider = new Swiper('.procedures__slider', {
        slidesPerView: 'auto',
        centeredSlides: 'true',
        spaceBetween: rem(4),
        navigation: {
          nextEl: '.procerures-navigation-next',
          prevEl: '.procerures-navigation-prev',
        },
      });
    } else {
      contraindications.params.spaceBetween = rem(10);
      console.log(contraindications.params.spaceBetween);
    }

    btns.forEach((btn) => {
      const containerMain = btn.closest('.procedures_additional__list-item_main');
      const item = btn.closest('.procedures_additional__list-item');
      if (width < 768) {
        const containerRight = btn.closest('.procedures_additional__list_right');
        const title = containerMain.querySelector('.procedures_additional__list-title');
        // const btnClose = containerRight.querySelector('.procedures_additional__list-btn.btn_close');
        title.appendChild(btn);
        // title.appendChild(btnClose);
        // item.querySelector('.procedures_additional__info-img').style.display = 'none';
        console.log(containerRight);
        btn.addEventListener('click', () => {
          const info = item.querySelector('.procedures_additional__info');
          info.classList.toggle('visible');
          containerRight.classList.toggle('visible');
          if (btn.classList.contains('opened')) {
            btn.classList.add('opening');
            setTimeout(() => {
              btn.classList.remove('opening');
              btn.classList.remove('opened');
              btn.innerHTML = `<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.375 1.25C29.375 1.41576 29.3092 1.57473 29.1919 1.69194C29.0747 1.80915 28.9158 1.875 28.75 1.875H1.25C1.08424 1.875 0.925269 1.80915 0.808058 1.69194C0.690848 1.57473 0.625 1.41576 0.625 1.25C0.625 1.08424 0.690848 0.925269 0.808058 0.808058C0.925269 0.690848 1.08424 0.625 1.25 0.625H28.75C28.9158 0.625 29.0747 0.690848 29.1919 0.808058C29.3092 0.925269 29.375 1.08424 29.375 1.25ZM25 10.625C24.8342 10.625 24.6753 10.6908 24.5581 10.8081C24.4408 10.9253 24.375 11.0842 24.375 11.25V24.7406L7.94219 8.30781C7.82491 8.19054 7.66585 8.12465 7.5 8.12465C7.33415 8.12465 7.17509 8.19054 7.05781 8.30781C6.94054 8.42509 6.87465 8.58415 6.87465 8.75C6.87465 8.91585 6.94054 9.07491 7.05781 9.19219L23.4906 25.625H10C9.83424 25.625 9.67527 25.6908 9.55806 25.8081C9.44085 25.9253 9.375 26.0842 9.375 26.25C9.375 26.4158 9.44085 26.5747 9.55806 26.6919C9.67527 26.8092 9.83424 26.875 10 26.875H25C25.1658 26.875 25.3247 26.8092 25.4419 26.6919C25.5592 26.5747 25.625 26.4158 25.625 26.25V11.25C25.625 11.0842 25.5592 10.9253 25.4419 10.8081C25.3247 10.6908 25.1658 10.625 25 10.625Z" fill="#B0008E"></path>
            </svg>
              `;
            }, 1000);
          } else {
            btn.classList.add('opening');
            setTimeout(() => {
              btn.classList.remove('opening');
              btn.classList.add('opened');
              btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.7145 12.7145L1.28595 1.28589M12.7145 1.28589L1.28595 12.7145" stroke="#22262A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              `;
            }, 1000);
          }
        });
      } else {
        btn.addEventListener('click', () => {
          console.log(btn.closest('.procedures_additional__info'));
          const info = item.querySelector('.procedures_additional__info');
          info.classList.toggle('visible');
        });
      }
    });
  }

  window.addEventListener('resize', resize);
  window.addEventListener('load', resize);
});

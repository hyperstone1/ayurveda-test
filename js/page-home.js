document.addEventListener('DOMContentLoaded', function () {
  const sliderPanchakarma = document.querySelector('.panchakarma__control');
  let navigationAdded = false;
  let textContentShortened = false;
  let routeSliderInitialized = false;
  let homeSlider = null;
  let bookingSlider;
  let routeSlider;
  let clickShowAll = {
    home: {
      text: null,
      showAll: false,
    },
    doctor: {
      text: null,
      showAll: false,
    },
    about: {
      text: null,
      showAll: false,
    },
  };

  var swiperThumbs = new Swiper('.swiper-thumbs', {
    spaceBetween: 0,
    slidesPerView: 'auto', // slidesPerView: 'auto' по умолчанию
    // Добавляем breakpoints
    breakpoints: {
      // Когда ширина экрана меньше 768px
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // Когда ширина экрана больше 768px
      // Возвращаем общие настройки (slidesPerView: 'auto')
      9999: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
    },
  });
  if (sliderPanchakarma) {
    let prevPanchakarma = document.createElement('div');
    prevPanchakarma.className = 'panchakarma__control-button_prev';
    prevPanchakarma.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.14216 0.922627L0.392154 8.63518C0.357288 8.67497 0.329628 8.72223 0.310756 8.77424C0.291885 8.82626 0.282172 8.88202 0.282172 8.93832C0.282172 8.99463 0.291885 9.05039 0.310756 9.10241C0.329628 9.15442 0.357288 9.20168 0.392154 9.24147L7.14216 16.954C7.21252 17.0344 7.30796 17.0796 7.40747 17.0796C7.50698 17.0796 7.60242 17.0344 7.67278 16.954C7.74315 16.8736 7.78268 16.7646 7.78268 16.6509C7.78268 16.5372 7.74315 16.4281 7.67278 16.3477L1.56309 9.3668H17.1575C17.2569 9.3668 17.3523 9.32166 17.4226 9.2413C17.493 9.16095 17.5325 9.05196 17.5325 8.93832C17.5325 8.82469 17.493 8.7157 17.4226 8.63535C17.3523 8.55499 17.2569 8.50985 17.1575 8.50985H1.56309L7.67278 1.52892C7.74315 1.44852 7.78268 1.33948 7.78268 1.22577C7.78268 1.11207 7.74315 1.00303 7.67278 0.922627C7.60242 0.842228 7.50698 0.797059 7.40747 0.797059C7.30796 0.797059 7.21252 0.842228 7.14216 0.922627Z" fill="#22262A"/>
    </svg>
  `;

    let nextPanchakarma = document.createElement('div');
    nextPanchakarma.className = 'panchakarma__control-button_next';
    nextPanchakarma.innerHTML = `
    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8578 16.5305L17.6078 8.81795C17.6427 8.77815 17.6704 8.7309 17.6892 8.67888C17.7081 8.62687 17.7178 8.57111 17.7178 8.5148C17.7178 8.45849 17.7081 8.40274 17.6892 8.35072C17.6704 8.2987 17.6427 8.25145 17.6078 8.21165L10.8578 0.499102C10.7875 0.418703 10.692 0.373535 10.5925 0.373535C10.493 0.373535 10.3976 0.418703 10.3272 0.499103C10.2569 0.579502 10.2173 0.688547 10.2173 0.802248C10.2173 0.91595 10.2569 1.025 10.3272 1.10539L16.4369 8.08633H0.842529C0.743073 8.08633 0.647691 8.13147 0.577364 8.21182C0.507038 8.29218 0.467529 8.40116 0.467529 8.5148C0.467529 8.62844 0.507038 8.73742 0.577364 8.81778C0.647691 8.89813 0.743073 8.94328 0.842529 8.94328H16.4369L10.3272 15.9242C10.2569 16.0046 10.2173 16.1136 10.2173 16.2274C10.2173 16.3411 10.2569 16.4501 10.3272 16.5305C10.3976 16.6109 10.493 16.6561 10.5925 16.6561C10.692 16.6561 10.7875 16.6109 10.8578 16.5305Z" fill="#22262A"/>
    </svg>
  `;

    let navPanchakarma = document.createElement('div');
    navPanchakarma.className = 'panchakarma__control-navigation';
    navPanchakarma.appendChild(prevPanchakarma);
    navPanchakarma.appendChild(nextPanchakarma);
    sliderPanchakarma.appendChild(navPanchakarma);
    var swiperPanchakarma = new Swiper('.slider-panchakarma', {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      navigation: {
        nextEl: '.panchakarma__control-button_next',
        prevEl: '.panchakarma__control-button_prev',
      },
      thumbs: {
        swiper: swiperThumbs,
      },
      pagination: {
        el: '.panchakarma__control-pagination',
        type: 'fraction',
        formatFractionCurrent: function (current) {
          return '0' + current;
        },
        formatFractionTotal: function (current) {
          return '0' + current;
        },
      },
    });
  }

  var reviewsSlider = new Swiper('.reviews__slider_container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination', // CSS-селектор для контейнера пагинации
      clickable: true, // Разрешить кликать по пагинации для переключения слайдов
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    loop: true,
  });

  let homeImgSlider = new Swiper('.wrapper__slider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    allowTouchMove: false,
  });

  const scrollLink = document.querySelector('.about__right_description-link');
  scrollLink && scrollLink.addEventListener('click', (e) => smoothScroll(e, 'route'));

  function addPaginationArrows() {
    let windowWidth = window.innerWidth;
    let navigationContainer = document.querySelector('.home__slider-navigation');
    let slides = document.querySelectorAll('.services__item');

    const wrapper = document.querySelector('.services__list_wrapper');
    wrapper && wrapper.classList.add('swiper-wrapper');

    slides &&
      slides.forEach((slide) => {
        slide.classList.add('swiper-slide');
      });
    if (navigationContainer) {
      if (windowWidth < 768) {
        navigationContainer.innerHTML = '';
        let prevButton = document.createElement('div');
        prevButton.className = 'swiper-button-prev';
        prevButton.innerHTML = `
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.2064 23.7687L25.6439 15.3312C25.6875 15.2876 25.7221 15.2359 25.7456 15.179C25.7692 15.1221 25.7814 15.0611 25.7814 14.9995C25.7814 14.9379 25.7692 14.8769 25.7456 14.82C25.7221 14.7631 25.6875 14.7114 25.6439 14.6679L17.2064 6.23039C17.1184 6.14243 16.9991 6.09302 16.8748 6.09302C16.7504 6.09302 16.6311 6.14243 16.5431 6.23039C16.4552 6.31834 16.4057 6.43764 16.4057 6.56203C16.4057 6.68642 16.4552 6.80571 16.5431 6.89367L24.1802 14.5308H4.68726C4.56294 14.5308 4.44371 14.5802 4.3558 14.6681C4.26789 14.756 4.21851 14.8752 4.21851 14.9995C4.21851 15.1238 4.26789 15.2431 4.3558 15.331C4.44371 15.4189 4.56294 15.4683 4.68726 15.4683H24.1802L16.5431 23.1054C16.4552 23.1933 16.4057 23.3126 16.4057 23.437C16.4057 23.5614 16.4552 23.6807 16.5431 23.7687C16.6311 23.8566 16.7504 23.906 16.8748 23.906C16.9991 23.906 17.1184 23.8566 17.2064 23.7687Z" fill="#22262A"/>
          </svg>
        `;
        navigationContainer.appendChild(prevButton);

        let nextButton = document.createElement('div');
        nextButton.className = 'swiper-button-next';
        nextButton.innerHTML = `
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.2064 23.7687L25.6439 15.3312C25.6875 15.2876 25.7221 15.2359 25.7456 15.179C25.7692 15.1221 25.7814 15.0611 25.7814 14.9995C25.7814 14.9379 25.7692 14.8769 25.7456 14.82C25.7221 14.7631 25.6875 14.7114 25.6439 14.6679L17.2064 6.23039C17.1184 6.14243 16.9991 6.09302 16.8748 6.09302C16.7504 6.09302 16.6311 6.14243 16.5431 6.23039C16.4552 6.31834 16.4057 6.43764 16.4057 6.56203C16.4057 6.68642 16.4552 6.80571 16.5431 6.89367L24.1802 14.5308H4.68726C4.56294 14.5308 4.44371 14.5802 4.3558 14.6681C4.26789 14.756 4.21851 14.8752 4.21851 14.9995C4.21851 15.1238 4.26789 15.2431 4.3558 15.331C4.44371 15.4189 4.56294 15.4683 4.68726 15.4683H24.1802L16.5431 23.1054C16.4552 23.1933 16.4057 23.3126 16.4057 23.437C16.4057 23.5614 16.4552 23.6807 16.5431 23.7687C16.6311 23.8566 16.7504 23.906 16.8748 23.906C16.9991 23.906 17.1184 23.8566 17.2064 23.7687Z" fill="#22262A"/>
          </svg>
        `;
        navigationContainer.appendChild(nextButton);
      } else {
        navigationContainer.innerHTML = '';
        let nextButton = document.createElement('div');
        nextButton.className = 'swiper-button-next';
        nextButton.innerHTML = `
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.2064 23.7687L25.6439 15.3312C25.6875 15.2876 25.7221 15.2359 25.7456 15.179C25.7692 15.1221 25.7814 15.0611 25.7814 14.9995C25.7814 14.9379 25.7692 14.8769 25.7456 14.82C25.7221 14.7631 25.6875 14.7114 25.6439 14.6679L17.2064 6.23039C17.1184 6.14243 16.9991 6.09302 16.8748 6.09302C16.7504 6.09302 16.6311 6.14243 16.5431 6.23039C16.4552 6.31834 16.4057 6.43764 16.4057 6.56203C16.4057 6.68642 16.4552 6.80571 16.5431 6.89367L24.1802 14.5308H4.68726C4.56294 14.5308 4.44371 14.5802 4.3558 14.6681C4.26789 14.756 4.21851 14.8752 4.21851 14.9995C4.21851 15.1238 4.26789 15.2431 4.3558 15.331C4.44371 15.4189 4.56294 15.4683 4.68726 15.4683H24.1802L16.5431 23.1054C16.4552 23.1933 16.4057 23.3126 16.4057 23.437C16.4057 23.5614 16.4552 23.6807 16.5431 23.7687C16.6311 23.8566 16.7504 23.906 16.8748 23.906C16.9991 23.906 17.1184 23.8566 17.2064 23.7687Z" fill="#22262A"/>
          </svg>
        `;
        navigationContainer.appendChild(nextButton);
      }
    }

    updateSlider();
  }

  function updateSlider() {
    // Если слайдер уже инициализирован, уничтожьте его
    if (homeSlider) {
      homeSlider.destroy();
      homeSlider = null;
    }

    // Пересоздайте слайдер с обновленными настройками
    homeSlider = new Swiper('.home__slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: '.home__slider-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return current + '<span class="current-total">-</span>' + total;
        },
      },
      navigation: {
        nextEl: null,
        prevEl: null,
      },
      thumbs: {
        swiper: homeImgSlider,
      },
    });

    // Получаем ссылки на кнопки навигации
    let next = document.querySelector('.swiper-button-next');
    let prev = document.querySelector('.swiper-button-prev');

    // Назначаем кнопки навигации для слайдера
    if (next) {
      homeSlider.navigation.nextEl = next;
      next.onclick = function () {
        homeSlider.slideNext();
      };
    }
    if (prev) {
      homeSlider.navigation.prevEl = prev;

      prev.onclick = function () {
        homeSlider.slidePrev();
      };
    }

    // Обновляем навигацию
    homeSlider.navigation.update();
  }

  function handleResize() {
    const width = window.screen.width;
    addPaginationArrows();
    // let next = document.querySelector('.swiper-button-next');
    // let prev = document.querySelector('.swiper-button-prev');
    // homeSlider.navigation.nextEl = next;
    // homeSlider.navigation.prevEl = prev;
    // console.log('homeSlider: ', homeSlider);
    // homeSlider.navigation.update()

    if (width <= 768) {
      //section.class = "home"
      // let navigationContainer = document.querySelector('.home__slider-navigation');
      // if (!navigationAdded && navigationContainer) {
      //   let nextBtn = document.querySelector('.home__slider-navigation .swiper-button-next');

      //   let prevBtn = document.createElement('div');
      //   prevBtn.className = 'swiper-button-prev';
      //   prevBtn.innerHTML = `
      //     <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      //     <path d="M17.2064 23.7687L25.6439 15.3312C25.6875 15.2876 25.7221 15.2359 25.7456 15.179C25.7692 15.1221 25.7814 15.0611 25.7814 14.9995C25.7814 14.9379 25.7692 14.8769 25.7456 14.82C25.7221 14.7631 25.6875 14.7114 25.6439 14.6679L17.2064 6.23039C17.1184 6.14243 16.9991 6.09302 16.8748 6.09302C16.7504 6.09302 16.6311 6.14243 16.5431 6.23039C16.4552 6.31834 16.4057 6.43764 16.4057 6.56203C16.4057 6.68642 16.4552 6.80571 16.5431 6.89367L24.1802 14.5308H4.68726C4.56294 14.5308 4.44371 14.5802 4.3558 14.6681C4.26789 14.756 4.21851 14.8752 4.21851 14.9995C4.21851 15.1238 4.26789 15.2431 4.3558 15.331C4.44371 15.4189 4.56294 15.4683 4.68726 15.4683H24.1802L16.5431 23.1054C16.4552 23.1933 16.4057 23.3126 16.4057 23.437C16.4057 23.5614 16.4552 23.6807 16.5431 23.7687C16.6311 23.8566 16.7504 23.906 16.8748 23.906C16.9991 23.906 17.1184 23.8566 17.2064 23.7687Z" fill="#22262A"/>
      //     </svg>
      //   `;
      //   navigationContainer.insertBefore(prevBtn, nextBtn);
      //   navigationAdded = true;
      // }

      //section.class = "home_info"
      const desktopFontSize = parseFloat(
        window.getComputedStyle(document.documentElement).fontSize,
      );

      let textContainer = document.querySelector('.home_info__card_text-description');
      let cardContainer = document.querySelector('.home_info__card');
      let cardImg = document.querySelector('.home_info__card-img');

      cardContainer && cardContainer.appendChild(cardImg);
      let textContent = textContainer ? textContainer.innerHTML : null;
      // let maxLength = 500; // Максимальная длина текста
      // let restTextHome = '';
      !clickShowAll.home.text ? (clickShowAll.home.text = textContainer.innerHTML) : null;
      let homeBtnShowAll = document.querySelector('.home_info__card_text-show_all');
      if (!homeBtnShowAll && !clickShowAll.home.showAll) {
        const showAll = document.createElement('button');
        showAll.className = 'home_info__card_text-show_all';
        showAll.textContent = 'Читать все';
        if (textContainer) {
          let textContent = textContainer.innerHTML;
          console.log(textContent);
          let maxLength = 500; // Максимальная длина текста

          if (textContent && textContent.length > maxLength) {
            let shortenedText = textContent.substring(0, maxLength) + '...';
            const heightDO = textContainer.scrollHeight;
            textContainer.innerHTML = `${shortenedText} `;
            setTimeout(() => {
              const contentHeight = textContainer.scrollHeight;
              console.log('heightDO: ', heightDO, 'heightPOSLE: ', contentHeight);
              console.log('textContainer height: ', textContainer.offsetHeight);
              textContainer.style.height = `${contentHeight}px`;
              textContainer.style.overflow = 'hidden';
            }, 0);
          }
        }
        let textList = document.querySelectorAll('.home_info__card_text-description p');
        textList.forEach((item, id) => {
          if (id === textList.length - 1) {
            item.appendChild(showAll);
          }
        });

        showAll.addEventListener('click', () => {
          clickShowAll.home.showAll = true;
          textContainer.innerHTML = textContent;
          const contentHeight = textContainer.scrollHeight;
          console.log('contentHeight: ', contentHeight);
          textContainer.style.height = `${contentHeight}px`;
          setTimeout(() => {
            textContainer.style = '';
            textContainer.style.overflow = 'initial';
          }, 300);
        });
      }

      //section.class = "doctor"
      const doctorMain = document.querySelector('.doctor__main_info');
      const experience = document.querySelector('.doctor__experience');
      const btnDoctorShowAll = document.querySelector('.doctor__exprerience-show_all');
      // const textExperience = experience.textContent;
      if (experience && doctorMain && !btnDoctorShowAll && !clickShowAll.doctor.showAll) {
        const btnAll = document.createElement('button');
        btnAll.className = 'doctor__exprerience-show_all';
        btnAll.textContent = 'Читать все';
        doctorMain.appendChild(btnAll);
        experience.style.height = '0';
        btnAll.addEventListener('click', () => {
          clickShowAll.doctor.showAll = true;
          const contentHeight = experience.scrollHeight;
          // experience.classList.toggle('show');
          console.log('contentHeight: ', contentHeight);

          experience.style.height = `${contentHeight}px`;
          setTimeout(() => {
            experience.style = '';
          }, 300);
          btnAll.remove();
        });
      }

      //section.class = "panchakarma"
      const sliderPanch = document.querySelector('.panchakarma__slider');
      const panchControl = document.querySelector('.panchakarma__control');
      if (sliderPanch && panchControl) {
        sliderPanch && sliderPanch.appendChild(panchControl);
        // swiperThumbs.params.slidesPerView = 1;
        // swiperThumbs.params.spaceBetween = 20;
        swiperThumbs.params.slidesPerView = 1;
        swiperThumbs.params.spaceBetween = 20;

        swiperThumbs.on('slideChange', function () {
          var activeSlideIndex = swiperThumbs.activeIndex;
          swiperPanchakarma.slideTo(activeSlideIndex);
        });
        swiperThumbs.update();
      }

      // section.class = "about"
      let textAbout = document.querySelectorAll('.about__right_description');
      let aboutRight = document.querySelector('.about__right');
      let aboutShowAll = document.querySelector('.about__right_description-show_all');
      let textContentAbout = '';
      let restText = '';
      let maxTextLength = 881;
      let shortenedText = '';
      if (textAbout && aboutRight && !clickShowAll.about.showAll && !aboutShowAll) {
        let btnShowText = document.querySelector('.showAllAbout');
        if (!btnShowText) {
          const showAllAbout = document.createElement('button');
          showAllAbout.className = 'about__right_description-show_all';
          showAllAbout.textContent = 'Читать все';

          textAbout &&
            textAbout.forEach((item, id) => {
              if (id === 0) {
                textContentAbout = item.innerHTML;
                if (textContentAbout.length > maxTextLength) {
                  // shortenedText = textContentAbout.substring(0, maxTextLength);
                  // restText = textContentAbout.substring(maxTextLength, textContentAbout.length);
                  // item.innerHTML = `${shortenedText} `;
                  item.style.height = '72.125333vw';
                  item.style.overflow = 'hidden';
                  aboutRight.appendChild(showAllAbout);
                }
              } else {
                item.style.height = '0vw';
                item.style.overflow = 'hidden';
              }
            });

          showAllAbout &&
            showAllAbout.addEventListener('click', () => {
              textAbout[0].insertAdjacentHTML('beforeend', restText);
              console.log('textAbout[0]: ', textAbout[0].scrollHeight);

              textAbout[0].style.height = `${textAbout[0].scrollHeight}px`;
              setTimeout(() => {
                console.log('textAbout[1]: ', textAbout[1].scrollHeight);

                textAbout[1].style.height = `${textAbout[1].scrollHeight}px`;
                setTimeout(() => {
                  textAbout[0].style = '';
                  textAbout[1].style = '';
                  textAbout[1].style.overflow = 'initial';
                }, 400);
              }, 200);
              showAllAbout.style.display = 'none';
              clickShowAll.about.showAll = true;
            });
        }
      }

      // section.class = "booking"
      if (!bookingSlider || bookingSlider.destroyed) {
        let bookingNavigation = document.querySelector('.booking-navigation');
        if (!bookingNavigation) {
          // let wrapper = document.createElement('div');
          // wrapper.className = 'swiper-wrapper';
          // const slides = document.querySelectorAll('.booking__list_card');
          const bookingList = document.querySelector('.booking__list');
          const booking = document.querySelector('.booking_container');
          // slides &&
          //   slides.forEach((slide) => {
          //     slide.classList.add('swiper-slide');
          //     wrapper.appendChild(slide);
          //   });
          let prevButton = document.createElement('div');
          prevButton.className = 'booking-button-prev';
          prevButton.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.14216 0.922627L0.392154 8.63518C0.357288 8.67497 0.329628 8.72223 0.310756 8.77424C0.291885 8.82626 0.282172 8.88202 0.282172 8.93832C0.282172 8.99463 0.291885 9.05039 0.310756 9.10241C0.329628 9.15442 0.357288 9.20168 0.392154 9.24147L7.14216 16.954C7.21252 17.0344 7.30796 17.0796 7.40747 17.0796C7.50698 17.0796 7.60242 17.0344 7.67278 16.954C7.74315 16.8736 7.78268 16.7646 7.78268 16.6509C7.78268 16.5372 7.74315 16.4281 7.67278 16.3477L1.56309 9.3668H17.1575C17.2569 9.3668 17.3523 9.32166 17.4226 9.2413C17.493 9.16095 17.5325 9.05196 17.5325 8.93832C17.5325 8.82469 17.493 8.7157 17.4226 8.63535C17.3523 8.55499 17.2569 8.50985 17.1575 8.50985H1.56309L7.67278 1.52892C7.74315 1.44852 7.78268 1.33948 7.78268 1.22577C7.78268 1.11207 7.74315 1.00303 7.67278 0.922627C7.60242 0.842228 7.50698 0.797059 7.40747 0.797059C7.30796 0.797059 7.21252 0.842228 7.14216 0.922627Z" fill="#22262A"/>
            </svg>
          `;

          let nextButton = document.createElement('div');
          nextButton.className = 'booking-button-next';
          nextButton.innerHTML = `
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8578 16.5305L17.6078 8.81795C17.6427 8.77815 17.6704 8.7309 17.6892 8.67888C17.7081 8.62687 17.7178 8.57111 17.7178 8.5148C17.7178 8.45849 17.7081 8.40274 17.6892 8.35072C17.6704 8.2987 17.6427 8.25145 17.6078 8.21165L10.8578 0.499102C10.7875 0.418703 10.692 0.373535 10.5925 0.373535C10.493 0.373535 10.3976 0.418703 10.3272 0.499103C10.2569 0.579502 10.2173 0.688547 10.2173 0.802248C10.2173 0.91595 10.2569 1.025 10.3272 1.10539L16.4369 8.08633H0.842529C0.743073 8.08633 0.647691 8.13147 0.577364 8.21182C0.507038 8.29218 0.467529 8.40116 0.467529 8.5148C0.467529 8.62844 0.507038 8.73742 0.577364 8.81778C0.647691 8.89813 0.743073 8.94328 0.842529 8.94328H16.4369L10.3272 15.9242C10.2569 16.0046 10.2173 16.1136 10.2173 16.2274C10.2173 16.3411 10.2569 16.4501 10.3272 16.5305C10.3976 16.6109 10.493 16.6561 10.5925 16.6561C10.692 16.6561 10.7875 16.6109 10.8578 16.5305Z" fill="#22262A"/>
            </svg>
          `;

          let navigation = document.createElement('div');
          navigation.className = 'booking-navigation';

          let pagination = document.createElement('div');
          pagination.className = 'booking-pagination';

          let controls = document.createElement('div');
          controls.className = 'booking-controls';

          navigation.appendChild(prevButton);
          navigation.appendChild(nextButton);
          controls.appendChild(navigation);
          controls.appendChild(pagination);
          booking && booking.appendChild(controls);

          // bookingList && bookingList.appendChild(wrapper);
          bookingList && bookingList.classList.add('swiper-container');
        }
        bookingSlider = new Swiper('.booking__list', {
          slidesPerView: 'auto',
          spaceBetween: 20,
          pagination: {
            el: '.booking-pagination',
            type: 'fraction',
            formatFractionCurrent: function (current) {
              return '0' + current;
            },
            formatFractionTotal: function (current) {
              return '0' + current;
            },
          },
          navigation: {
            nextEl: '.booking-button-next',
            prevEl: '.booking-button-prev',
          },
        });
        console.log(bookingSlider);

        // bookingSlider.init();
      }

      // section.class = "license"

      const licenseContainer = document.querySelector('.license_container');
      const licenseDescription = document.querySelector('.license__text-description');
      licenseContainer && licenseContainer.appendChild(licenseDescription);

      // section.class = "route"

      const routeContainer = document.querySelector('.route_container');
      const routeList = document.querySelector('.route__list');
      routeList && routeList.classList.add('swiper-container');
      if (!routeSliderInitialized) {
        let navigationRoute = document.createElement('div');
        navigationRoute.className = 'route__slider-navigation';

        let wrapperRoute = document.createElement('div');
        wrapperRoute.className = 'swiper-wrapper';

        let routeListItems = document.querySelectorAll('.route__list-item');
        routeListItems &&
          routeListItems.forEach((item) => {
            item.classList.add('swiper-slide');
            wrapperRoute.appendChild(item);
          });

        let routePrev = document.createElement('div');
        routePrev.className = 'route-button-prev';
        routePrev.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.14216 0.922627L0.392154 8.63518C0.357288 8.67497 0.329628 8.72223 0.310756 8.77424C0.291885 8.82626 0.282172 8.88202 0.282172 8.93832C0.282172 8.99463 0.291885 9.05039 0.310756 9.10241C0.329628 9.15442 0.357288 9.20168 0.392154 9.24147L7.14216 16.954C7.21252 17.0344 7.30796 17.0796 7.40747 17.0796C7.50698 17.0796 7.60242 17.0344 7.67278 16.954C7.74315 16.8736 7.78268 16.7646 7.78268 16.6509C7.78268 16.5372 7.74315 16.4281 7.67278 16.3477L1.56309 9.3668H17.1575C17.2569 9.3668 17.3523 9.32166 17.4226 9.2413C17.493 9.16095 17.5325 9.05196 17.5325 8.93832C17.5325 8.82469 17.493 8.7157 17.4226 8.63535C17.3523 8.55499 17.2569 8.50985 17.1575 8.50985H1.56309L7.67278 1.52892C7.74315 1.44852 7.78268 1.33948 7.78268 1.22577C7.78268 1.11207 7.74315 1.00303 7.67278 0.922627C7.60242 0.842228 7.50698 0.797059 7.40747 0.797059C7.30796 0.797059 7.21252 0.842228 7.14216 0.922627Z" fill="#22262A"/>
        </svg>
      `;

        let routeNext = document.createElement('div');
        routeNext.className = 'route-button-next';
        routeNext.innerHTML = `
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8578 16.5305L17.6078 8.81795C17.6427 8.77815 17.6704 8.7309 17.6892 8.67888C17.7081 8.62687 17.7178 8.57111 17.7178 8.5148C17.7178 8.45849 17.7081 8.40274 17.6892 8.35072C17.6704 8.2987 17.6427 8.25145 17.6078 8.21165L10.8578 0.499102C10.7875 0.418703 10.692 0.373535 10.5925 0.373535C10.493 0.373535 10.3976 0.418703 10.3272 0.499103C10.2569 0.579502 10.2173 0.688547 10.2173 0.802248C10.2173 0.91595 10.2569 1.025 10.3272 1.10539L16.4369 8.08633H0.842529C0.743073 8.08633 0.647691 8.13147 0.577364 8.21182C0.507038 8.29218 0.467529 8.40116 0.467529 8.5148C0.467529 8.62844 0.507038 8.73742 0.577364 8.81778C0.647691 8.89813 0.743073 8.94328 0.842529 8.94328H16.4369L10.3272 15.9242C10.2569 16.0046 10.2173 16.1136 10.2173 16.2274C10.2173 16.3411 10.2569 16.4501 10.3272 16.5305C10.3976 16.6109 10.493 16.6561 10.5925 16.6561C10.692 16.6561 10.7875 16.6109 10.8578 16.5305Z" fill="#22262A"/>
        </svg>
      `;

        routeList && routeList.appendChild(wrapperRoute);
        navigationRoute.appendChild(routePrev);
        navigationRoute.appendChild(routeNext);
        routeContainer && routeContainer.appendChild(navigationRoute);

        routeSlider = new Swiper('.route__list', {
          slidesPerView: 'auto',
          spaceBetween: 20,
          navigation: {
            nextEl: '.route-button-next',
            prevEl: '.route-button-prev',
          },
        });
        routeSliderInitialized = true;
      }
    } else {
      clickShowAll.about.showAll = false;
      clickShowAll.doctor.showAll = false;
      clickShowAll.home.showAll = false;
      //section.class = 'home_info'
      let btnShowAllHome = document.querySelector('.home_info__card_text-show_all');
      btnShowAllHome && btnShowAllHome.remove();
      let textContainer = document.querySelector('.home_info__card_text-description');
      let homeInfoCard = document.querySelector('.home_info__card');

      let homeInfoText = document.querySelector('.home_info__card_text');
      let homeInfoImg = document.querySelector('.home_info__card-img');
      homeInfoCard.insertBefore(homeInfoImg, homeInfoText);
      clickShowAll.home.text ? (textContainer.innerHTML = clickShowAll.home.text) : null;
      textContainer.style.height = '100%';

      //section.class = 'doctor'
      const doctorExperience = document.querySelector('.doctor__experience');
      const doctorShowAll = document.querySelector('.doctor__exprerience-show_all');
      doctorShowAll && doctorShowAll.remove();
      doctorExperience.style.height = '100%';
      //section.class = 'about'
      const aboutContaienr = document.querySelectorAll('.about__right_description');
      let btnAboutShow = document.querySelector('.about__right_description-show_all');
      btnAboutShow && btnAboutShow.remove();
      aboutContaienr.forEach((container, id) => {
        container.style.overflow = 'initial';
        container.style.height = 'fit-content';
      });

      //section.class = 'license'
      const licenseContainer = document.querySelector('.license__text');
      const licenseDescription = document.querySelector('.license__text-description');
      licenseContainer && licenseContainer.appendChild(licenseDescription);

      //section.class = 'booking'
      if (bookingSlider) {
        bookingSlider.destroy();
        let bookingControls = document.querySelector('.booking-controls');
        bookingControls && bookingControls.remove();
      }
      swiperThumbs.params.slidesPerView = 'auto';
      swiperThumbs.params.spaceBetween = 0;
      swiperThumbs.update();
      console.log('swiperThumbs: ', swiperThumbs);
    }
  }
  function smoothScroll(event, targetId) {
    event.preventDefault();

    var target = document.getElementById(targetId);

    if (target) {
      var targetOffsetTop = target.offsetTop; // Вертикальное смещение целевого элемента
      var scrollDuration = 1000; // Длительность анимации в миллисекундах
      var scrollStep = Math.PI / (scrollDuration / 15); // Шаг прокрутки

      var scrollCount = 0;
      var cosParameter = targetOffsetTop / 2;

      var scrollMargin;
      var startPosition = window.pageYOffset || document.documentElement.scrollTop; // Начальная позиция прокрутки

      function scrollToTarget() {
        scrollCount += scrollStep;

        var cosScrollCount = cosParameter - cosParameter * Math.cos(scrollCount);
        scrollMargin = startPosition + cosScrollCount;

        window.scrollTo(0, scrollMargin);

        if (scrollMargin < targetOffsetTop) {
          requestAnimationFrame(scrollToTarget);
        } else {
          window.scrollTo(0, targetOffsetTop);
        }
      }

      scrollToTarget();
    }
  }

  function pxToRem(pxValue, desktopFontSize) {
    // Получаем текущий размер шрифта (в px) установленный на html элементе
    // const htmlFontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);

    // Выполняем конвертацию px в rem
    const remValue = pxValue / desktopFontSize;

    // Округляем значение до двух знаков после запятой и возвращаем результат
    return remValue.toFixed(2);
  }

  window.addEventListener('load', handleResize);
  window.addEventListener('resize', handleResize);
  // const sliderPanchakarma =document.querySelector('.slider-panchakarma')
});

document.addEventListener('DOMContentLoaded', function () {
  function addPaginationArrows() {
    let windowWidth = window.innerWidth;
    let paginationContainer = document.querySelector('.swiper-pagination');
    let slides = document.querySelectorAll('.list__item');

    if (windowWidth < 786 && paginationContainer) {
      const wrapper = document.querySelector('.packages__list_wrapper');
      wrapper.classList.add('swiper-wrapper');

      slides.forEach((slide) => {
        slide.classList.add('swiper-slide');
      });

      var swiper = new Swiper('.packages__list', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          formatFractionCurrent: function (current) {
            return '0' + current;
          },
          formatFractionTotal: function (current) {
            return '0' + current;
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
      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.23468 0.696064L0.484684 8.40862C0.449818 8.44841 0.422157 8.49566 0.403286 8.54768C0.384415 8.5997 0.374701 8.65545 0.374701 8.71176C0.374701 8.76807 0.384415 8.82383 0.403286 8.87584C0.422157 8.92786 0.449818 8.97511 0.484684 9.01491L7.23468 16.7275C7.30505 16.8079 7.40049 16.853 7.5 16.853C7.59951 16.853 7.69495 16.8079 7.76531 16.7275C7.83568 16.6471 7.87521 16.538 7.87521 16.4243C7.87521 16.3106 7.83568 16.2016 7.76531 16.1212L1.65562 9.14024H17.25C17.3495 9.14024 17.4448 9.09509 17.5152 9.01474C17.5855 8.93439 17.625 8.8254 17.625 8.71176C17.625 8.59812 17.5855 8.48914 17.5152 8.40878C17.4448 8.32843 17.3495 8.28329 17.25 8.28329H1.65562L7.76531 1.30236C7.83568 1.22196 7.87521 1.11291 7.87521 0.99921C7.87521 0.885509 7.83568 0.776464 7.76531 0.696064C7.69495 0.615665 7.59951 0.570498 7.5 0.570498C7.40049 0.570498 7.30505 0.615665 7.23468 0.696064Z" fill="#22262A" fill-opacity="0.6"/>
      </svg>
      `;
      paginationContainer.appendChild(prevButton);

      var nextButton = document.createElement('div');
      nextButton.className = 'swiper-button-next';
      nextButton.innerHTML = `
      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.9509 16.3039L17.7009 8.59138C17.7357 8.55159 17.7634 8.50434 17.7823 8.45232C17.8011 8.4003 17.8108 8.34455 17.8108 8.28824C17.8108 8.23193 17.8011 8.17617 17.7823 8.12416C17.7634 8.07214 17.7357 8.02489 17.7009 7.98509L10.9509 0.27254C10.8805 0.19214 10.7851 0.146973 10.6855 0.146973C10.586 0.146973 10.4906 0.192141 10.4202 0.27254C10.3499 0.352939 10.3103 0.461984 10.3103 0.575686C10.3103 0.689388 10.3499 0.798433 10.4202 0.878832L16.5299 7.85976H0.935547C0.836091 7.85976 0.740708 7.90491 0.670382 7.98526C0.600056 8.06561 0.560547 8.1746 0.560547 8.28824C0.560547 8.40188 0.600056 8.51086 0.670382 8.59122C0.740708 8.67157 0.836091 8.71671 0.935547 8.71671H16.5299L10.4202 15.6976C10.3499 15.778 10.3103 15.8871 10.3103 16.0008C10.3103 16.1145 10.3499 16.2235 10.4202 16.3039C10.4906 16.3843 10.586 16.4295 10.6855 16.4295C10.7851 16.4295 10.8805 16.3843 10.9509 16.3039Z" fill="#22262A"/>
      </svg>
      `;
      paginationContainer.appendChild(nextButton);

      swiper.navigation.init();
      swiper.navigation.update();
    } else {
      swiper.navigation.destroy();
      paginationContainer.innerHTML = '';
    }
  }

  const tooltipTriggers = document.querySelectorAll('.services_tooltip');
  let activeTrigger = null; // переменная для хранения активного tooltip
  // const tooltipText = document.querySelector('.tooltiptext');
  const tooltipText = document.querySelector('.tooltiptext');
  // const closeBtn = document.querySelector('.close-btn');
  tooltipTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const currentTooltipText = this.querySelector('.tooltiptext');
      const tooltipId = this.getAttribute('data-tooltip-id');

      if (activeTrigger === tooltipId) {
        // Если текущий tooltip уже активный, закрываем его
        currentTooltipText.style.visibility = 'hidden';
        currentTooltipText.style.opacity = '0';
        activeTrigger = null;
      } else {
        // Закрываем предыдущий tooltip, если есть
        if (activeTrigger) {
          const prevTrigger = document.querySelector(`[data-tooltip-id="${activeTooltipId}"]`);
          const prevTooltipText = prevTrigger.querySelector('.tooltiptext');
          prevTooltipText.style.visibility = 'hidden';
          prevTooltipText.style.opacity = '0';
        }
        currentTooltipText.style.visibility = 'visible';
        currentTooltipText.style.opacity = '1';
        activeTrigger = tooltipId;
      }

      var closeBtn = trigger.querySelector('.close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', function (event) {
          event.stopPropagation();
          currentTooltipText.style.visibility = 'hidden';
          currentTooltipText.style.opacity = '0';
          activeTrigger = null;
        });
      }
    });
  });

  window.addEventListener('click', function (event) {
    // Скрываем tooltip при клике вне него
    tooltipTriggers.forEach(function (trigger) {
      const tooltipText = trigger.querySelector('.tooltiptext');
      if (!trigger.contains(event.target)) {
        tooltipText.style.visibility = 'hidden';
        tooltipText.style.opacity = '0';
        activeTrigger = null;
      }
    });
  });

  window.addEventListener('resize', addPaginationArrows);
  addPaginationArrows();
});

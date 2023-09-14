document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.tel');
  const discont = document.querySelector('.discont');
  const discontClose = document.querySelector('.discont__close');
  const locationTitle = document.querySelector('.location_info-title');
  const contactsLocation = document.querySelector('.contacts__location');
  const locationInfo = document.querySelector('.location_info');
  const locationArrives = document.querySelector('.location_info__arrives');

  const width = window.screen.width;
  // ymaps.ready(function () {
  //   var myMap = new ymaps.Map('map', {
  //       center: [30.1228717, 78.3060407],
  //       zoom: 14,
  //       controls: [],
  //       hideFooter: true,
  //       behaviors: ['default'],
  //     }),
  //     myPlacemark1 = new ymaps.Placemark(
  //       [30.1228717, 78.3060407],
  //       {},
  //       {
  //         // Опции.
  //         // Необходимо указать данный тип макета.
  //         iconLayout: 'default#image',
  //         // Своё изображение иконки метки.
  //         // iconImageHref: './js/placemark.png',
  //         // Размеры метки.
  //         // iconImageSize: width < 768 ? [58, 78] : [96, 131.48],
  //         // Смещение левого верхнего угла иконки относительно
  //         // её "ножки" (точки привязки).
  //         // iconImageOffset: [-49, -126],
  //         // Смещение слоя с содержимым относительно слоя с картинкой.
  //         // iconContentOffset: [15, 15],
  //         // Макет содержимого.
  //       },
  //     );
  //   //   myMap.container.fitToViewport();
  //   myMap.setType('yandex#map');

  //   myMap.geoObjects.add(myPlacemark1);
  // });

  links &&
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        let phoneNumber = e.target.textContent;
        console.log(phoneNumber);
        console.log(e.target.id);
        navigator.clipboard
          .writeText(phoneNumber)
          .then(function () {
            showTooltip('copied!', e.target.id);
          })
          .catch(function () {
            showTooltip('Failed to copy.');
          });
      });
    });
  function showTooltip(message, elementId) {
    var tooltip = document.getElementById(elementId + '-tooltip');
    tooltip.innerText = message;
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';

    setTimeout(function () {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
    }, 2000);
  }

  discontClose.addEventListener('click', () => {
    discont.classList.add('vanishing');
    setTimeout(() => {
      discont.classList.remove('vanishing');
      discont.style.display = 'none';
    }, 400);
  });

  function handleResize() {
    const width = window.innerWidth;
    if (width < 768) {
      contactsLocation && contactsLocation.insertBefore(locationTitle, locationInfo);
    } else {
      // locationInfo.appendChild(locationTitle);
      locationInfo && locationInfo.insertBefore(locationTitle, locationArrives);
    }
  }
  // window.addEventListener('loaded', handleResize);
  window.addEventListener('load', handleResize);
  // window.addEventListener('onload', handleResize);
});

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.tel');
  const discont = document.querySelector('.discont');
  const discontClose = document.querySelector('.discont__close');
  const locationTitle = document.querySelector('.location_info-title');
  const contactsLocation = document.querySelector('.contacts__location');
  const locationInfo = document.querySelector('.location_info');

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
      console.log('tut');
      contactsLocation.insertBefore(locationTitle, locationInfo);
    } else {
      locationInfo.appendChild(locationTitle);
    }
  }
  // window.addEventListener('loaded', handleResize);
  window.addEventListener('load', handleResize);
  // window.addEventListener('onload', handleResize);
});

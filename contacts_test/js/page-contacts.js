document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.tel');
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
});

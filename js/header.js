document.addEventListener('DOMContentLoaded', function () {
  const select = document.querySelector('.select-box');
  const header = document.querySelector('.header');
  const burgerCheckbox = document.querySelector('.btn-burger');
  const menuColumn = document.querySelector('.menu-column');
  const langMenu = document.querySelector('.lang-menu');
  const menu = document.querySelector('.mobile-nav');
  const selectBoxIcon = document.querySelector('.select-box__icon');
  const selectOptions = document.querySelectorAll('.select-box__option');

  const lang = document.querySelectorAll('.lang');

  burgerCheckbox.addEventListener('click', function () {
    langMenu.classList.remove('visible');
    selectBoxIcon.classList.remove('open');

    if (!burgerCheckbox.classList.contains('active')) {
      if (!header.classList.contains('sticky')) {
        header.classList.add('sticky');
      }

      menuColumn.classList.add('slide-in');
      menuColumn.classList.add('active');
      burgerCheckbox.classList.add('active');
      burgerCheckbox.classList.remove('not-active');
      menu.classList.remove('hide');
      setTimeout(() => {
        menuColumn.classList.remove('slide-in');
      }, 300);
    } else {
      header.classList.remove('sticky');

      burgerCheckbox.classList.remove('active');
      burgerCheckbox.classList.add('not-active');

      menuColumn.classList.add('slide-out');
      setTimeout(() => {
        menuColumn.classList.remove('active');
        menuColumn.classList.remove('slide-out');
      }, 290);
    }
  });

  lang.forEach((item) => {
    item.addEventListener('click', () => {
      lang.forEach((obj) => {
        obj.classList.toggle('active-lang', item === obj);
      });
    });
  });

  function handleResize() {
    const selectUl = document.querySelector('.select-box__list');

    if (window.screen.width < 767) {
      // const select = document.querySelector('.select-box');
      selectUl.style.display = 'none';

      select.addEventListener('click', () => {
        burgerCheckbox.classList.remove('active');
        burgerCheckbox.classList.add('not-active');

        if (!langMenu.classList.contains('visible')) {
          if (!header.classList.contains('sticky')) {
            header.classList.add('sticky');
          }

          menuColumn.classList.add('slide-in');
          menuColumn.classList.add('active');
          langMenu.classList.add('visible');
          selectBoxIcon.classList.add('open');
          selectBoxIcon.classList.remove('close');

          menu.classList.add('hide');
          burgerCheckbox.checked = false;
          setTimeout(() => {
            menuColumn.classList.remove('slide-in');
          }, 300);
        } else {
          header.classList.remove('sticky');

          menuColumn.classList.add('slide-out');
          selectBoxIcon.classList.add('close');
          selectBoxIcon.classList.remove('open');
          langMenu.classList.remove('visible');

          setTimeout(() => {
            menu.classList.remove('hide');
            menuColumn.classList.remove('active');
            menuColumn.classList.remove('slide-out');
          }, 290);
        }
      });
    } else {
      select.addEventListener('click', () => {
        if (!selectUl.classList.contains('shown')) {
          selectUl.classList.add('shown');
          selectBoxIcon.classList.add('open');
          selectBoxIcon.classList.remove('close');
        } else {
          selectBoxIcon.classList.add('close');
          selectBoxIcon.classList.remove('open');
          selectUl.classList.add('vanishing');

          setTimeout(() => {
            selectUl.classList.remove('vanishing');
            selectUl.classList.remove('shown');
          }, 290);
        }
      });
    }
  }

  handleResize();
  selectOptions.forEach((option) => {
    option.addEventListener('click', () => {
      console.log('click option');
      if (selectBoxIcon.classList.contains('open')) selectBoxIcon.classList.remove('open');
    });
  });
  window.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  window.addEventListener('click', function () {
    if (burgerCheckbox.classList.contains('active') || langMenu.classList.contains('visible')) {
      this.document.body.style.overflow = 'hidden';
    } else {
      this.document.body.style.overflow = 'initial';
    }
  });
});

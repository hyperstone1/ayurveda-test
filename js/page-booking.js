document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const btnCloseModal = document.querySelector('.modal__content-close');
  const bookingBtns = document.querySelectorAll('.rooms__booking-btn');
  const modalDate = document.querySelector('.modal__content-date');
  const modalType = document.querySelector('.modal__content-type');
  const calendars = document.querySelectorAll('.calendar');
  const bookingRemark = document.querySelectorAll('.rooms__booking-remark');
  const tooltiptextBooking = document.querySelectorAll('.tooltiptext-booking');
  const tooltipCloseBtn = document.querySelectorAll('.tooltiptext-booking--close-btn');

  bookingRemark.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const parent = e.target.closest('.rooms__booking');
      const tooltipChild = parent.querySelector('.tooltiptext-booking');
      tooltiptextBooking.forEach((item) => {
        if (item === tooltipChild) {
          tooltipChild.classList.toggle('visible');
        } else {
          item.classList.remove('visible');
        }
      });
    });
  });

  tooltipCloseBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const parent = e.target.closest('.rooms__booking');
      const tooltipChild = parent.querySelector('.tooltiptext-booking');
      tooltipChild.classList.remove('visible');
    });
  });

  let dates = { standart: [], superior: [], suite: [] };

  //Слайдеры
  const roomsImgs = document.querySelectorAll('.rooms__img');

  roomsImgs.forEach((img) => {
    new Swiper(img, {
      slidesPerView: 'auto',
      navigation: {
        prevEl: img.querySelector('.rooms__img-prev'),
        nextEl: img.querySelector('.rooms__img-next'),
      },
    });
  });

  bookingBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.classList.add('visible');
      const data = btn.dataset.apps;
      if (data === 'standart') {
        const selectedDates = dates.standart.map((dateStr) => moment(dateStr, 'DD.MM.YYYY'));
        const startDate = moment.min(selectedDates).format('DD.MM.YYYY');
        const endDate = moment.max(selectedDates).format('DD.MM.YYYY');
        modalType.textContent = capitalizeFirstLetter(data);
        modalDate.textContent = `${startDate} - ${endDate}`;
      }
      if (data === 'superior') {
        const selectedDates = dates.superior.map((dateStr) => moment(dateStr, 'DD.MM.YYYY'));
        const startDate = moment.min(selectedDates).format('DD.MM.YYYY');
        const endDate = moment.max(selectedDates).format('DD.MM.YYYY');
        modalType.textContent = capitalizeFirstLetter(data);
        modalDate.textContent = `${startDate} - ${endDate}`;
      }
      if (data === 'suite') {
        const selectedDates = dates.suite.map((dateStr) => moment(dateStr, 'DD.MM.YYYY'));
        const startDate = moment.min(selectedDates).format('DD.MM.YYYY');
        const endDate = moment.max(selectedDates).format('DD.MM.YYYY');
        modalType.textContent = capitalizeFirstLetter(data);
        modalDate.textContent = `${startDate} - ${endDate}`;
      }
      calendars.forEach((calendar) => {
        calendar.classList.remove('visible');
      });
    });
  });

  btnCloseModal.addEventListener('click', () => {
    modal.classList.remove('visible');
  });

  var dateBtn = document.querySelectorAll('.rooms__date-wrapper');

  function renderCalendar(date, item) {
    var month1 = moment(date);
    var month2 = moment(month1).add(1, 'months');

    // Создаем основной контейнер календаря
    var calendarContainer = document.createElement('div');
    calendarContainer.className = 'calendar-container';

    // Создаем заголовок календаря для первого месяца
    var header1 = document.createElement('div');
    header1.className = 'calendar-header-wrapper';

    var prevButton1 = document.createElement('button');
    prevButton1.className = 'btn-prev';
    prevButton1.addEventListener('click', function () {
      renderCalendar(moment(month1).subtract(1, 'months'), item);
    });
    prevButton1.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M12.7934 6.23133L4.35585 14.6688C4.31227 14.7124 4.2777 14.7641 4.25411 14.821C4.23052 14.8779 4.21838 14.9389 4.21838 15.0005C4.21838 15.0621 4.23052 15.1231 4.25411 15.18C4.2777 15.2369 4.31227 15.2886 4.35585 15.3321L12.7934 23.7696C12.8813 23.8576 13.0006 23.907 13.125 23.907C13.2494 23.907 13.3687 23.8576 13.4566 23.7696C13.5446 23.6817 13.594 23.5624 13.594 23.438C13.594 23.3136 13.5446 23.1943 13.4566 23.1063L5.81953 15.4692H25.3125C25.4368 15.4692 25.556 15.4198 25.644 15.3319C25.7319 15.244 25.7812 15.1248 25.7812 15.0005C25.7812 14.8762 25.7319 14.7569 25.644 14.669C25.556 14.5811 25.4368 14.5317 25.3125 14.5317H5.81953L13.4566 6.89461C13.5446 6.80666 13.594 6.68736 13.594 6.56297C13.594 6.43858 13.5446 6.31929 13.4566 6.23133C13.3687 6.14338 13.2494 6.09396 13.125 6.09396C13.0006 6.09396 12.8813 6.14338 12.7934 6.23133Z" fill="#22262A" fill-opacity="0.6"/>
</svg>
`;

    var month1Span = document.createElement('span');
    month1Span.textContent = month1.format('MMMM YYYY'); // Здесь используем month1 для отображения названия месяца

    header1.appendChild(prevButton1);
    header1.appendChild(month1Span);

    // Создаем заголовок календаря для второго месяца
    var header2 = document.createElement('div');
    header2.className = 'calendar-header-wrapper';

    var month2Span = document.createElement('span');
    month2Span.textContent = month2.format('MMMM YYYY'); // Здесь используем month2 для отображения названия месяца

    var nextButton2 = document.createElement('button');
    nextButton2.className = 'btn-next';
    nextButton2.addEventListener('click', function () {
      renderCalendar(moment(month1).add(1, 'months'), item);
    });
    nextButton2.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M17.2066 23.7687L25.6441 15.3312C25.6877 15.2876 25.7223 15.2359 25.7459 15.179C25.7695 15.1221 25.7816 15.0611 25.7816 14.9995C25.7816 14.9379 25.7695 14.8769 25.7459 14.82C25.7223 14.7631 25.6877 14.7114 25.6441 14.6679L17.2066 6.23039C17.1187 6.14243 16.9994 6.09302 16.875 6.09302C16.7506 6.09302 16.6313 6.14243 16.5434 6.23039C16.4554 6.31834 16.406 6.43764 16.406 6.56203C16.406 6.68642 16.4554 6.80571 16.5434 6.89367L24.1805 14.5308H4.6875C4.56318 14.5308 4.44395 14.5802 4.35604 14.6681C4.26814 14.756 4.21875 14.8752 4.21875 14.9995C4.21875 15.1238 4.26814 15.2431 4.35604 15.331C4.44395 15.4189 4.56318 15.4683 4.6875 15.4683H24.1805L16.5434 23.1054C16.4554 23.1933 16.406 23.3126 16.406 23.437C16.406 23.5614 16.4554 23.6807 16.5434 23.7687C16.6313 23.8566 16.7506 23.906 16.875 23.906C16.9994 23.906 17.1187 23.8566 17.2066 23.7687Z" fill="#22262A"/>
</svg>
`;
    header2.appendChild(month2Span);
    header2.appendChild(nextButton2);

    // Создаем таблицу для первого месяца
    var table1 = document.createElement('table');
    table1.className = 'calendar-table';

    var thead1 = document.createElement('thead');
    var tbody1 = document.createElement('tbody');
    var tr1 = document.createElement('tr');

    var daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

    // Создаем заголовки дней недели
    for (var i = 0; i < daysOfWeek.length; i++) {
      var th1 = document.createElement('th');
      th1.textContent = daysOfWeek[i];
      tr1.appendChild(th1);
    }

    thead1.appendChild(tr1);

    // Создаем ячейки с датами для первого месяца
    var start1 = moment(month1).startOf('month');
    var end1 = moment(month1).endOf('month');
    var date1 = moment(start1).startOf('week');

    while (date1.isBefore(end1)) {
      if (date1.weekday() === 0) {
        var tr1 = document.createElement('tr');
      }

      var td1 = document.createElement('td');
      if (date1.isBefore(start1) || date1.isAfter(end1)) {
        td1.textContent = '';
      } else {
        td1.textContent = date1.format('D');
        td1.dataset.date = date1.format('DD.MM.YYYY');
        if (date1.isSame(moment(), 'day')) {
          td1.className = 'day today';
        } else {
          td1.className = 'day';
        }
        if (date1.isBefore(moment(), 'day')) {
          td1.classList.add('past'); // Добавляем класс для прошедших дат
        }
        if (item.dataset.apps === 'standart') {
          dates.standart.includes(date1.format('DD.MM.YYYY')) ? td1.classList.add('active') : null;
        }
        if (item.dataset.apps === 'superior') {
          dates.superior.includes(date1.format('DD.MM.YYYY')) ? td1.classList.add('active') : null;
        }
        if (item.dataset.apps === 'suite') {
          dates.suite.includes(date1.format('DD.MM.YYYY')) ? td1.classList.add('active') : null;
        }
      }

      tr1.appendChild(td1);

      if (date1.weekday() === 6) {
        tbody1.appendChild(tr1);
      }

      date1.add(1, 'days');
    }

    // Заполняем пустые ячейки в конце первой таблицы, если первый месяц не заканчивается в воскресенье
    while (date1.weekday() !== 0) {
      var td1 = document.createElement('td');
      td1.textContent = '';
      tr1.appendChild(td1);
      date1.add(1, 'days');
    }

    // Добавляем пустые ячейки в начало второй таблицы, если первый месяц заканчивается не в воскресенье
    // while (date1.weekday() !== 1) {
    //   var td2 = document.createElement('td');
    //   td2.textContent = '';
    //   tr2.appendChild(td2);
    //   date1.add(1, 'days');
    // }

    tbody1.appendChild(tr1);

    table1.appendChild(thead1);
    table1.appendChild(tbody1);

    // Создаем таблицу для второго месяца
    var table2 = document.createElement('table');
    table2.className = 'calendar-table';

    var thead2 = document.createElement('thead');
    var tbody2 = document.createElement('tbody');
    var tr2 = document.createElement('tr');

    // Создаем заголовки дней недели
    for (var i = 0; i < daysOfWeek.length; i++) {
      var th2 = document.createElement('th');
      th2.textContent = daysOfWeek[i];
      tr2.appendChild(th2);
    }

    thead2.appendChild(tr2);

    // Создаем ячейки с датами для второго месяца
    var start2 = moment(month2).startOf('month');
    var end2 = moment(month2).endOf('month');
    var date2 = moment(start2).startOf('week');

    while (date2.isBefore(end2)) {
      if (date2.weekday() === 0) {
        var tr2 = document.createElement('tr');
      }

      var td2 = document.createElement('td');
      if (date2.isBefore(start2) || date2.isAfter(end2)) {
        td2.textContent = '';
      } else {
        td2.textContent = date2.format('D');
        td2.dataset.date = date2.format('DD.MM.YYYY');

        if (date2.isSame(moment(), 'day')) {
          td2.className = 'day today';
        } else {
          td2.className = 'day';
        }
        if (date2.isBefore(moment(), 'day')) {
          td2.classList.add('past'); // Добавляем класс для прошедших дат
        }
        if (item.dataset.apps === 'standart') {
          dates.standart.includes(date2.format('DD.MM.YYYY')) ? td2.classList.add('active') : null;
        }
        if (item.dataset.apps === 'superior') {
          dates.superior.includes(date2.format('DD.MM.YYYY')) ? td2.classList.add('active') : null;
        }
        if (item.dataset.apps === 'suite') {
          dates.suite.includes(date2.format('DD.MM.YYYY')) ? td2.classList.add('active') : null;
        }
      }

      tr2.appendChild(td2);

      if (date2.weekday() === 6) {
        tbody2.appendChild(tr2);
      }

      date2.add(1, 'days');
    }

    // Заполняем оставшиеся пустые ячейки в конце таблицы, если второй месяц не начинается с понедельника
    while (date2.weekday() !== 0) {
      var td2 = document.createElement('td');
      td2.textContent = '';
      tr2.appendChild(td2);
      date2.add(1, 'days');
    }

    tbody2.appendChild(tr2);

    table2.appendChild(thead2);
    table2.appendChild(tbody2);

    // ...

    // Добавляем все элементы календаря в основной контейнер
    const headerCont = document.createElement('div');
    headerCont.className = 'calendar__header';
    headerCont.appendChild(header1);
    headerCont.appendChild(header2);
    const container = document.createElement('div');
    container.className = 'calendar__container';
    container.appendChild(table1);
    container.appendChild(table2);

    calendarContainer.appendChild(headerCont);
    calendarContainer.appendChild(container);

    // Очищаем предыдущий календарь и добавляем новый
    console.log(item);
    const calendarCont = item.querySelector('.calendar__container');
    calendarCont.innerHTML = ''; // Очищаем содержимое предыдущего календаря
    calendarCont.appendChild(calendarContainer);
  }

  dateBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const roomsDate = btn.closest('.rooms__date');

      const calendar = roomsDate.querySelector('.calendar');
      console.log('btnForCalendar: ', calendar);
      calendars.forEach((item, id) => {
        if (item === calendar) {
          if (calendar.classList.contains('visible')) {
            calendar.classList.remove('visible');
          } else {
            calendar.classList.add('visible');
          }
        } else {
          item.classList.remove('visible');
        }
      });
    });

    let firstClickedDate = null;
    let secondClickedDate = null;
    let isRangeSelection = false;

    const calendCont = document.querySelectorAll('.calendar__container');
    calendCont.forEach((calend) => {
      calend.addEventListener('click', (e) => {
        const appsType = e.target.closest('.calendar')
          ? e.target.closest('.calendar').dataset.apps
          : null;

        if (e.target.classList.contains('day')) {
          const clickedDate = moment(e.target.dataset.date, 'DD.MM.YYYY');

          // Проверяем, является ли дата прошедшей
          if (clickedDate.isBefore(moment(), 'day')) {
            return; // Игнорируем клик на прошедшей дате
          }

          if (!firstClickedDate) {
            firstClickedDate = clickedDate;
            isRangeSelection = false;
            dates[appsType] = [];
            dates[appsType].push(firstClickedDate.format('DD.MM.YYYY'));
          } else {
            if (!secondClickedDate) {
              secondClickedDate = clickedDate;
              isRangeSelection = true;
            } else {
              firstClickedDate = clickedDate;
              secondClickedDate = null;
              isRangeSelection = false;
              dates[appsType] = [];
              dates[appsType].push(firstClickedDate.format('DD.MM.YYYY'));
            }
          }

          updateCalendarSelection(appsType);
        }
      });
    });

    calendars.forEach((item, _) => {
      renderCalendar(moment(), item);
    });

    function updateCalendarSelection(type) {
      const calendar = document.querySelector(`.calendar[data-apps="${type}"]`);
      const days = calendar.querySelectorAll('.day');
      days.forEach((day) => {
        const dateStr = day.dataset.date;
        const date = moment(dateStr, 'DD.MM.YYYY');
        const isSelected = dates[type].includes(dateStr);

        if (isSelected) {
          day.classList.add('active');
        } else {
          day.classList.remove('active');
        }

        if (isRangeSelection && firstClickedDate && secondClickedDate) {
          const isInRange = date.isBetween(firstClickedDate, secondClickedDate, null, '[]');
          if (isInRange) {
            day.classList.add('active');
            dates[type].push(dateStr);
          }
        }
      });
    }
  });
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
});

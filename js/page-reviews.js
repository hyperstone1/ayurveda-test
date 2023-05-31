const data = [
  {
    username: 'Ульяна и Ольга',
    location: ' Москва, Россия',
    imgSrc: './images/reviews/user_1.jpg',
    comment: `
    Мы с мамой впервые проходили лечение в клинике.  
    У моей мамы серьезное заболевание и врачи не могут ей помочь.  
    За 21 день ей стало намного лучше, частично ушла отечность суставов, стали гнуться пальцы и колени!!!  
    Спасибо доктору Виноду, отзывчивый, внимательный, заботливый и с классным чувством юмора)) 
    Массажистки очень душевные и доброжелательные) Особое уважение шеф-повару Сохану !!!!  
    Он баловал нас вкусной едой и даже перед отъездом устроил нам мастер-класс по одному из блюд.  
    21 день пролетел незаметно - массажи, масла, маски, процедуры, что еще нужно для женского здорового состояния!  
    Очень хочется вернуться сюда снова) И я даже попросила об этом великую реку Ганг!  До новых встреч!
  `,
  },
  {
    username: 'Лилия',
    // location: 'Будапешт, Венгрия',
    imgSrc: './images/reviews/unknown_user.png',
    videoSrc: './video/liliya.mp4',
  },
  {
    username: 'Ксения Безуглова',
    location: 'Москва, Россия',
    imgSrc: './images/reviews/unknown_user.png',
    videoSrc: './video/kseniya_bezyglova.mp4',
    // comment: `
    // Я приезжаю сюда каждые шесть-семь месяцев в течение уже трёх лет.
    // Будучи совершенно уставшей от работы я здесь нахожу всё,
    // что мне не хватает в Москве: это и лечебные процедуры и совершенно другую энергетику...`,
  },
  {
    username: 'Елена Федотова',
    location: 'Будапешт, Венгрия',
    imgSrc: './images/reviews/user_3.png',
    videoSrc: './video/elena_fedotova.mp4',
    // comment: `
    // Мы с мужем посетили Ришикеш в феврале 2017 года с целью оздоровления.
    // Мы провели 2 недели в аюрведическом центре Аюрведа Бхаван.
    // За это время прошли очистительный курс (панчакарму): массажи, очистительные процедуры, вегетарианское питание.
    // Надо сказать, что действительно наше самочувствие намного улучшилось, нервная система пришла в равновесие.
    // Массажисты отличные, очень опытный аюрведический доктор, который назначал все процедуры.
    // Номера чистые, персонал очень доброжелательный и ненавязчивый.
    // Когда мы вернулись домой, то все заметили, что мы не только постройнели, но и помолодели.
    // Нам все понравилось!`,
  },
  {
    username: 'Татьяна',
    location: 'Москва, Россия',
    imgSrc: './images/reviews/user_4.png',
    videoSrc: './video/tatyana.mp4',
    // comment: `
    // Здесь я был в третий раз. Всё супер! Хотя и появились отличия.
    // Был другой доктор, персонал поменялся наполовину.
    // Но все процедуры такие же качественные, персонал заботливый, уютно.
    // Из нового понравился массаж мешочками с травами.
    // Отдельное большое спасибо за организацию путешествия по гималайским храмам. Вот еще.
    // Лекция про аюрведу была очень интересна, хоть и на английском с переводчиком ;((.
    // Но это мелочи! Всем так держать!!! Уже начал ждать следующей поездки!`,
  },
  {
    username: 'Екатерина',
    location: 'Москва, Россия',
    imgSrc: './images/reviews/unknown_user.png',
    videoSrc: './video/ekaterina.mp4',
    // comment: `
    // Мы с сестрой ездили в Аюрведу Бхаван осенью 2022 года по совету друзей.
    // Это был великолепный, мягкий детокс всего организма!
    // Вкусная диетическая, индийская еда, массажи и разнообразные процедуры каждый день, огромное внимание персонала и главного врача.
    // Особенно понравился массаж с мёдом и молоком!
    // Уже планируем вдвоем следующую поездку в Аюрведу Бхаван с мужьями !`,
  },
  {
    username: 'Елена',
    location: 'Москва, Россия',
    imgSrc: './images/reviews/unknown_user.png',
    videoSrc: './video/elena.mp4',
    // comment: `
    // Хочу поделиться отзывом о том, как я побывала в Ришекеше на панчакарме в замечательном аюрведическом центре "Аюрведа Пхагаван".
    // Это был не обычный туристический отдых с тусовками дискотеками.
    // Аюрведический отпуск точно нужен тем, кто устал (или ОЧЕНЬ УСТАЛ) физически и эмоционально, утомился от суеты и постоянной беготни, выдохся.
    // Аюрведа – буквально спасение для тех, кто забыл, что такое перерыв в бесконечном стрессе.
    // Кто постоянно напряжен. Кто плохо спит и неважно себя чувствует. Кто обесточен и обессилен.
    // Кто потерял источники для восстановления и восполнения.
    // Кто просто понял, что давно о себе не заботился.
    // О здоровье, красоте и чистоте своего тела, головы и эмоций.
    // Я чувствовала себя именно так! Процесс лечения для меня был знаком только по отзывам тех, кто мне рекомендовал туда приехать.
    // Я знала чего ожидать, как с точки зрения проведения процедур, так и финального результата.
    // Что касается последнего, он даже превзошёл мои ожидания.
    // За столь короткий срок удалось привести в порядок не только ЖКТ, но и нервную систему — наладился сон, вернулась работоспособность и энергия.
    // Решающую роль в успехе оздоровления сыграли ряд факторов, а точнее, грамотно выстроенная система.
    // Врачи этого центра обладают не только опытом в ведении Панчакармы (быстро определили проблематику, назначили комплекс процедур), но и широкими аюрведическими знаниями, накопленными поколениями.
    // Они все являются потомственными носителями этих знаний. Очень понравился массаж в 4ре руки.
    // В номерах тепло и уютно, обстановка по-домашнему доброжелательная. Время, проведённое в аюрведическом центре, принесло мне массу пользы.
    // Ну и плюсом идёт результат. Появилась легкость, минус 5 кг и привычка правильно питаться.
    // Рекомендую всем посетить аюрведический центр "Аюрведа Пхагаван".`,
  },
  {
    username: 'Ричард',
    location: 'Москва, Россия',
    imgSrc: './images/reviews/unknown_user.png',
    videoSrc: './video/richard.mp4',
    // comment: `
    // Мы с сестрой ездили в Аюрведу Бхаван осенью 2022 года по совету друзей.
    // Это был великолепный, мягкий детокс всего организма!
    // Вкусная диетическая, индийская еда, массажи и разнообразные процедуры каждый день, огромное внимание персонала и главного врача.
    // Особенно понравился массаж с мёдом и молоком!
    // Уже планируем вдвоем следующую поездку в Аюрведу Бхаван с мужьями !`,
  },
  {
    username: 'Дария и Ольга',
    location: 'Москва, Россия',
    imgSrc: './images/reviews/unknown_user.png',
    videoSrc: './video/unknown_1.mp4',

    // comment: `
    // Мы с сестрой ездили в Аюрведу Бхаван осенью 2022 года по совету друзей.
    // Это был великолепный, мягкий детокс всего организма!
    // Вкусная диетическая, индийская еда, массажи и разнообразные процедуры каждый день, огромное внимание персонала и главного врача.
    // Особенно понравился массаж с мёдом и молоком!
    // Уже планируем вдвоем следующую поездку в Аюрведу Бхаван с мужьями !`,
  },
  {
    username: 'Дария и Ольга',
    location: 'Москва, Россия',
    imgSrc: './images/reviews/unknown_user.png',
    videoSrc: './video/unknown_2.mp4',

    // comment: `
    // Мы с сестрой ездили в Аюрведу Бхаван осенью 2022 года по совету друзей.
    // Это был великолепный, мягкий детокс всего организма!
    // Вкусная диетическая, индийская еда, массажи и разнообразные процедуры каждый день, огромное внимание персонала и главного врача.
    // Особенно понравился массаж с мёдом и молоком!
    // Уже планируем вдвоем следующую поездку в Аюрведу Бхаван с мужьями !`,
  },
  {
    username: 'Катя',
    location: 'Москва, Россия',
    imgSrc: './images/reviews/ekaterina_1.jpg',
    comment: `
    В первый день, как только я приехала, мне налили стакан лимонной воды, дали ключи от номера и отправили отдыхать. 
    Паспорт? Деньги? Документы? — все потом, ведь мне нужен отдых после длительного путешествия.
    Процедуры занимают 2−4 часа в день, плюс специальное трехразовое питание. Если я проспала завтрак, — мне принесут его в номер. 
    Если я хочу поспать днём, — оставят обязательный минимум процедур, а остальное перенесут на другой день. 
    Если я захотела съездить на экскурсию, — график моего оздоровления под это подстроят.
    Утреннюю йогу, которая по расписанию в 6:30, перенесли на вечер, просто потому что я сова, и мне тяжело рано вставать.
    Доктор рекомендовал гулять. Но днём жарко, а вечером темнеет так рано, что гулять одной становится страшно. No problems! 
    Мне выделили молодого индуса для охраны и компании, который сопровождает меня на вечернем променаде.
    Здесь не надо, стиснув зубы, насиловать своё тело. Более того, здесь просят еще и расслаблять свой ум. 
    И каждый день спрашивают, какое у меня настроение. Потому что важно, чтобы выздоровление приносило радость.
    Здесь любят меня. Здесь любят мое тело.`,
  },
  {
    username: 'Юля',
    location: 'Москва, Россия',
    imgSrc: './images/reviews/yulya.png',
    comment: `
    Второй раз приезжаю в Аюрведу Бхаван на программу панчакармы.
    В этот раз меня не столько интересовал собственный вес, сколько здоровье. 
    В том году я провела здесь 23 дня, в этом — 19.
    Это медицинское учреждение, а не массажный салон или салон красоты; поэтому ваше общение с Аюрведой Бхаван начинается 
    с высылки сюда ваших анализов и заключений докторов — если у вас есть какие-то хронические заболевания. 
    У меня их нет, поэтому я просто списалась и приехала.
    Владелец и управляющая клиники- русские. Поэтому языковых барьеров тут для нас нет.
    Ришикеш вегетарианский штат, поэтому здесь нет мяса и рыбы. 
    В основном это каши на завтрак, папайя, суп «дал» из бобовых и лепешки чапати, а также сырые и свежие овощи. 
    В любой момент на кухне можно выпить крепкого индийского чаю разных сортов с медом и яблоками, и попросить свежий гранатовый сок, сок папайи, или сок прямо в кокосе — срубят и внутрь воткнут трубочку. Питание очень скучное и однообразное. Мое тело на нем себя чувствует отлично, я — нет;
    Территория клиники закрытая и чистая. Есть за пределами клиники крайне не рекомендуется.
    На панчакарме противопоказаны физическая активность, купание в водоемах и секс (к вопросу о поездке сюда на медовый месяц — не нужно). 
    Процедуры могут занимать 2 — 4 часа в день.
    Для меня шопинга здесь не существует — я не могу выходить в Ришикеш, он для меня слишком грязный и шумный. 
    Да и не интересно. Мне особо ничего не нужно. Но люди покупают что-то.
    Не стоит брать сюда с собой какие-то наряды. Их тут будет негде выгуливать.
    Я взяла много хлопковых дешевых платьев, в том числе и очень стареньких.
    В этот раз потеряла я здесь около 5 кг. Но в этом году для меня главное — состояние кожи и самочувствие. 
    Сюда ездят и люди, которым совершенно не нужно худеть, — просто за здоровьем.
    Ничего страшного нет в том, чтобы приехать сюда и получить лечение. Уезжаю я отсюда всегда в лучшей форме, чем приезжаю.`,
  },
  {
    username: 'Ольга',
    location: 'Москва, Россия',
    imgSrc: './images/reviews/olga.jpg',
    comment: `
    Лет 7 назад я пережила сильнейший и затяжной стресс, после которого начались серьёзные проблемы со здоровьем, в том числе с кожей. 
    Настолько серьезные, что я не могла летом выйти на солнце, не закутавшись в «паранджу» с головы до пят.
    Четыре года мы с мужем пытались решить эти проблемы в России, объехав всех рекомендуемых супер-врачей, включая титулованных иммунологов и аллергологов Москвы. 
    Наверное, на потраченные деньги можно было купить ещё одну квартиру…
    Как-то раз, познакомились с человеком, который, увидев мои проблемы с кожей, порекомендовал клинику в Индии.
    Честно, я сначала не поверила, т.к. в России, помимо врачей обошла многих знахарей, целителей и бабулек, снимающих сглаз… И все безрезультатно.
    Поскольку выбора уже не было, решила съездить, посмотреть новую страну, а за одно испытать на себе новое средство — аюрведическую медицину)))
    Как ни странно, но это помогло… Уезжала я оттуда с абсолютно чистой кожей, посвежевшей и отдохнувшей, как после спа курорта. 
    С багажом отличных впечатлений и ощущением, что жизнь прекрасна!
    В общем, для себя я открыла новый вид отдыха, с глубоким погружением в релакс, снятием стрессов и очищением организма. 
    Спасибо вам всем Ребята, я вас люблю!`,
  },
  {
    username: 'Дарья',
    location: 'Москва, Россия',
    imgSrc: './images/reviews/dasha.png',
    comment: `
    Удивительное — рядом. Для меня удивительное стало за тысячи километров от столицы.
    Индия! Давно мечтала попасть в эту страну. Но чтобы еще и в аюрведическую клинику! Мечта в квадрате.
    Честно говоря, не думала, что процедуры с маслом несут оздоровительную силу. Еще как несут. Токсины «пошли» стройным рядом.
    Во всем «виноваты» замечательные доктора Рагхупати Пандей и Джоши Видья. Окружили таким вниманием и заботой, как- будто я в клинике была одна. 
    Очаровательные терапевты, которые выполняли все процедуры четко и старательно.
    Вообще персонал отзывчивый и дружелюбный. Лилия- менеджер и переводчик- просто ясное солнышко.
    Еда- замечательная. Скучаю по овощным блюдам. Ну, а ОНЛИ ПАПАЙЯ на завтрак- снится.
    Огромное спасибо всем, кто был рядом. Поехать в клинику еще раз? Однозначно- Да, но уже не на 14 дней, а на 21 — минимум!`,
  },
  {
    username: 'Ольга',
    location: 'Москва, Россия',
    imgSrc: './images/reviews/olga_1.png',
    comment: `
    В клинику приехала по рекомендации дочери, которая излечилась там от очень серьезных проблем со здоровьем. 
    Была поражена результатами и решила также пройти курс лечения. 
    Меня беспокоили боли в суставах (артрит ll степени), проблемы с ЖКТ и аллергия. 
    Не ожидала, что за один курс будут такие потрясающие результаты: уже на 5-й день, ложась спать, забыла нанести обезболивающую мазь на суставы. 
    И прошло уже несколько месяцев со дня возвращения домой — суставы не беспокоят! Работа ЖКТ наладилась, чувствую себя прекрасно и заметно помолодела! 
    Постараюсь вернуться через год. Спасибо персоналу клиники за отличный приём и великолепное лечение!!!`,
  },
  {
    username: 'Ольга',
    location: 'Москва, Россия',
    imgSrc: './images/reviews/olga_2.jpg',
    comment: `
    Это было полное ощущение домашнего уюта в кругу друзей и плюс всякие полезности для женского здоровья и красоты. Всем советую!!!`,
  },
];

// Количество элементов на одной странице
const itemsPerPage = 5;
const container = document.querySelector('.reviews_list_container');
// Функция для отображения элементов на странице
let currentPage = 1;
const totalPages = Math.ceil(data.length / itemsPerPage);

function displayItems(page) {
  const list = document.querySelector('.reviews_list__list');
  list.innerHTML = '';
  const pagination = document.getElementById('pagination');
  console.log(pagination);

  if (!pagination) {
    console.log(pagination);
    const paginationElement = document.createElement('div');

    paginationElement.id = 'pagination';
    container.appendChild(paginationElement);
  }

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const itemsToDisplay = data.slice(start, end);

  itemsToDisplay.forEach((item) => {
    // Создаем блоки
    const comment = document.createElement('div');
    const userBlock = document.createElement('div');
    const userImg = document.createElement('div');
    const userInfo = document.createElement('div');
    const userName = document.createElement('span');
    const userLocation = document.createElement('span');
    const userTextBlock = document.createElement('div');

    comment.classList.add('reviews_list__list-item');
    userBlock.classList.add('reviews_list__user');
    userImg.classList.add('reviews_list__user-img');
    userInfo.classList.add('reviews_list__user_info');
    userName.classList.add('reviews_list__user_info-name');
    userLocation.classList.add('reviews_list__user_info-location');
    userTextBlock.classList.add('reviews_list__list_text');
    const img = document.createElement('img');
    img.src = item.imgSrc;
    userImg.appendChild(img);

    userName.textContent = item.username;
    userLocation.textContent = item.location;
    if (item.videoSrc && !item.comment) {
      // Создаем блок с видео и подключаем классы библиотеки video.js
      const video = document.createElement('video');
      video.classList.add('video-js');
      video.id = 'my-video';
      video.setAttribute('controls', true);
      video.setAttribute('preload', 'auto');
      video.setAttribute('data-setup', '{}');
      video.setAttribute('width', 640);
      video.setAttribute('height', 400);
      video.setAttribute('data-setup', '{}');
      const source = document.createElement('source');
      source.setAttribute('src', item.videoSrc);
      source.setAttribute('type', 'video/mp4');
      video.appendChild(source);

      userTextBlock.appendChild(video);

      // После добавления элемента видео в userTextBlock, инициализируем Video.js
    } else {
      const userTextQuotes1 = document.createElement('div');
      const userTextQuotes2 = document.createElement('div');
      const quotesImg1 = document.createElement('img');
      const quotesImg2 = document.createElement('img');
      quotesImg1.src = './images/reviews/quotes.png';
      quotesImg2.src = './images/reviews/quotes.png';
      userTextQuotes1.appendChild(quotesImg1);
      userTextQuotes2.appendChild(quotesImg2);

      userTextQuotes1.classList.add('reviews_list__list_text-quotes');
      userTextQuotes2.classList.add('reviews_list__list_text-quotes');

      const userTextReview = document.createElement('div');
      userTextReview.classList.add('reviews_list__list_text-review');
      userTextReview.textContent = item.comment;

      userTextBlock.appendChild(userTextQuotes1);
      userTextBlock.appendChild(userTextReview);
      userTextBlock.appendChild(userTextQuotes2);
    }

    userInfo.appendChild(userName);
    userInfo.appendChild(userLocation);
    userBlock.appendChild(userImg);
    userBlock.appendChild(userInfo);

    comment.appendChild(userBlock);
    comment.appendChild(userTextBlock);

    list.appendChild(comment);
  });
  setTimeout(() => {
    const videos = document.querySelectorAll('.video-js');
    videos.forEach((video) => {
      videojs(video);
    });
  }, 0);
}

function updatePaginationLinks(currentPage) {
  const paginationElement = document.getElementById('pagination');
  const links = paginationElement.getElementsByTagName('a');

  for (let i = 0; i < links.length; i++) {
    if (i + 1 === currentPage) {
      links[i].classList.add('active'); // Добавляем класс "active" к текущей активной странице
      links[i].removeAttribute('href'); // Удаляем атрибут href для отключения ссылки на текущую страницу
    } else {
      links[i].classList.remove('active'); // Удаляем класс "active" для остальных страниц
      links[i].setAttribute('href', '#'); // Восстанавливаем атрибут href для включения ссылки на другие страницы
    }
  }
}

function createPagesNumbers(page) {
  const pagination = document.getElementById('pagination');
  const paginationPages = document.querySelector('.pagination-pages');
  const first = page;
  const last = Math.ceil(data.length / itemsPerPage);
  if (!paginationPages) {
    const pages = document.createElement('div');
    pages.classList.add('pagination-pages');
    const firstPage = document.createElement('span');
    firstPage.classList.add('current_page');
    const lastPage = document.createElement('span');
    lastPage.classList.add('last_page');
    firstPage.textContent = first;
    lastPage.textContent = last;
    pages.appendChild(firstPage);
    // pages.insertAdjacentText('beforeend', '/');
    pages.appendChild(lastPage);
    pagination.appendChild(pages);
  } else {
    const firstPage = document.querySelector('.current_page');
    // const lastPage = document.querySelector('.last_page');
    firstPage.textContent = first;
  }
}

// Функция для создания ссылок пагинации
// function createPaginationLinks() {
//   const pagination = document.getElementById('pagination');
//   console.log(pagination);
//   // Вычисляем общее количество страниц
//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   for (let i = 1; i <= totalPages; i++) {
//     const linkElement = document.createElement('a');
//     linkElement.href = '#';
//     linkElement.textContent = i;

//     // Добавляем обработчик события click для каждой ссылки
//     linkElement.addEventListener('click', () => {
//       displayItems(i); // Отображаем элементы на выбранной странице
//       updatePaginationLinks(i); // Обновляем ссылки пагинации после переключения страницы
//       createPagesNumbers(i);
//     });

//     pagination.appendChild(linkElement);
//   }
// }

function createArrows() {
  const paginationElement = document.getElementById('pagination');
  if (paginationElement) {
    const arrowNext = document.createElement('a');
    arrowNext.innerHTML = `
    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.1441 17.9894L21.5816 9.55187C21.6252 9.50834 21.6598 9.45664 21.6834 9.39974C21.707 9.34283 21.7191 9.28183 21.7191 9.22023C21.7191 9.15863 21.707 9.09763 21.6834 9.04073C21.6598 8.98382 21.6252 8.93213 21.5816 8.88859L13.1441 0.45109C13.0562 0.363134 12.9369 0.313721 12.8125 0.313721C12.6881 0.313721 12.5688 0.363134 12.4809 0.451091C12.3929 0.539047 12.3435 0.658342 12.3435 0.782731C12.3435 0.907121 12.3929 1.02642 12.4809 1.11437L20.118 8.75148H0.625C0.50068 8.75148 0.381452 8.80087 0.293544 8.88877C0.205636 8.97668 0.15625 9.09591 0.15625 9.22023C0.15625 9.34455 0.205636 9.46378 0.293544 9.55169C0.381452 9.6396 0.50068 9.68898 0.625 9.68898H20.118L12.4809 17.3261C12.3929 17.414 12.3435 17.5333 12.3435 17.6577C12.3435 17.7821 12.3929 17.9014 12.4809 17.9894C12.5688 18.0773 12.6881 18.1267 12.8125 18.1267C12.9369 18.1267 13.0562 18.0773 13.1441 17.9894Z" fill="#22262A"/>
    </svg>

    `;
    arrowNext.classList.add('next-page', 'link');
    const arrowPrev = document.createElement('a');
    arrowPrev.innerHTML = `
    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.79336 0.473274L0.355854 8.91077C0.312271 8.95431 0.277697 9.00601 0.254107 9.06291C0.230516 9.11982 0.218376 9.18081 0.218376 9.24242C0.218376 9.30402 0.230516 9.36501 0.254107 9.42192C0.277697 9.47882 0.312271 9.53052 0.355854 9.57406L8.79336 18.0116C8.88131 18.0995 9.00061 18.1489 9.125 18.1489C9.24939 18.1489 9.36868 18.0995 9.45664 18.0116C9.54459 17.9236 9.59401 17.8043 9.59401 17.6799C9.59401 17.5555 9.54459 17.4362 9.45664 17.3483L1.81953 9.71117H21.3125C21.4368 9.71117 21.556 9.66178 21.644 9.57387C21.7319 9.48596 21.7812 9.36674 21.7812 9.24242C21.7812 9.1181 21.7319 8.99887 21.644 8.91096C21.556 8.82305 21.4368 8.77367 21.3125 8.77367H1.81953L9.45664 1.13656C9.54459 1.0486 9.59401 0.929306 9.59401 0.804916C9.59401 0.680527 9.54459 0.561232 9.45664 0.473274C9.36868 0.385319 9.24939 0.335905 9.125 0.335905C9.00061 0.335905 8.88131 0.385319 8.79336 0.473274Z" fill="#22262A"/>
    </svg>
    `;
    arrowPrev.classList.add('prev-page', 'link', 'inactive');
    const links = document.createElement('div');
    links.classList.add('pages-links');
    links.appendChild(arrowPrev);
    links.appendChild(arrowNext);
    paginationElement.appendChild(links);
    console.log(links);
  }
  const paginationElements = document.querySelectorAll('.link');
  paginationElements.forEach((link, i) => {
    if (i === 0) {
    }
    link.addEventListener('click', () => {
      if (link.classList.contains('prev-page')) {
        if (currentPage > 1) {
          currentPage--;
          link.classList.contains('inactive') ? link.classList.remove('inactive') : null;
          paginationElements[1].classList.remove('inactive');
        } else {
          paginationElements[1].classList.remove('inactive');
        }
        if (currentPage === 1) {
          console.log('ravno');
          link.classList.add('inactive');
        }
      } else if (link.classList.contains('next-page')) {
        if (currentPage < totalPages) {
          currentPage++;
          link.classList.contains('inactive') ? link.classList.remove('inactive') : null;
          paginationElements[0].classList.remove('inactive');
        } else {
          paginationElements[0].classList.remove('inactive');
        }
        if (currentPage === totalPages) {
          console.log('ravno');
          link.classList.add('inactive');
        }
      }
      displayItems(currentPage); // Отображаем элементы на выбранной странице
      updatePaginationLinks(currentPage); // Обновляем ссылки пагинации после переключения страницы
      createPagesNumbers(currentPage);
      window.scroll({ top: 0 });
    });
  });
}
// Показать первую страницу при загрузке страницы
displayItems(currentPage);
createPagesNumbers(currentPage);
// Создать ссылки пагинации
createArrows();
// createPaginationLinks();

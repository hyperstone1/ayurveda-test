/*Toggle Menu*/
$(document).ready(function(){
	function menuVis() {
		if($(window).width() < 992) {
			if(!$('#tmenu-nav').hasClass('active')){
				$('#tmenu-toggle').removeClass('active');
				$('#tmenu-nav').removeClass('active');
	            $('#tmenu-nav').addClass('collapse');
			}
		}else {
			$('#tmenu-nav').removeClass('collapse');
            $('#tmenu-nav').removeClass('active');
		}
		if(!$('#tmenu-authBox').hasClass('active') && !$('#tmenu-nav').hasClass('active')){
			$('#tmenu-overlay').removeClass('active');
		}
	}
	menuVis();
	$(window).on('resize',function(){
		menuVis();
	});

	$('#tmenu-toggle').click(function(){
		if ($('#tmenu-nav').hasClass('collapse')) {
			$('#tmenu-nav').removeClass('collapse');
			$('#tmenu-nav').addClass('active');
			$('#tmenu-toggle').addClass('active');
			$('#tmenu-overlay').addClass('active');
			$('#wrapper').addClass('locked');
			// Close authorization
			$('#tmenu-authBox').removeClass('active');
			$('#tmenu-authBox').addClass('collapse');
			$('#tmenu-auth-toggle').removeClass('active');
		}else {
			$('#tmenu-nav').removeClass('active');
			$('#tmenu-nav').addClass('collapse');
			$('#tmenu-toggle').removeClass('active');
			$('#tmenu-overlay').removeClass('active');
			$('#wrapper').removeClass('locked');
		};
		return;
	});

	$('#tmenu-overlay').click(function(){
		$('#tmenu-nav').removeClass('active');
		$('#tmenu-nav').addClass('collapse');
		$('#tmenu-toggle').removeClass('active');
		$('#tmenu-overlay').removeClass('active');
		//authorization
		$('#tmenu-authBox').removeClass('active');
		$('#tmenu-authBox').addClass('collapse');
		$('#tmenu-auth-toggle').removeClass('active');
		//wrapper
		$('#wrapper').removeClass('locked');
		return;
	});
});

/*Authorization*/
$(document).ready(function(){
	$('#tmenu-auth-toggle').click(function(){
		if ($('#tmenu-authBox').hasClass('collapse')) {
			$('#tmenu-authBox').removeClass('collapse');
			$('#tmenu-authBox').addClass('active');
			$('#tmenu-auth-toggle').addClass('active');
			$('#tmenu-overlay').addClass('active');
			// Close menu
			if($(window).width() < 992) {
				$('#tmenu-nav').removeClass('active');
				$('#tmenu-nav').addClass('collapse');
				$('#tmenu-toggle').removeClass('active');
				$('#wrapper').addClass('locked');
			}
		}else {
			$('#tmenu-authBox').removeClass('active');
			$('#tmenu-authBox').addClass('collapse');
			$('#tmenu-auth-toggle').removeClass('active');
			$('#tmenu-overlay').removeClass('active');
			$('#wrapper').removeClass('locked');
		};
		return;
	});

	$('#wrapper').on('click',function(){
		//authorization
		$('#tmenu-authBox').removeClass('active');
		$('#tmenu-authBox').addClass('collapse');
		$('#tmenu-auth-toggle').removeClass('active');
		return;
	});
});

/*Вторичное меню*/
$(document).ready(function(){
	function smenuVis() {
		if($(window).scrollTop() > 44) {
			$('#smenu').addClass('fixed');
		}else {
			$('#smenu').removeClass('fixed');
		}
	}
	smenuVis();
	$(window).on('scroll',function(){
		smenuVis();
	});
});

// Блок "Отзывы" – фиксация бэкграунда
$(document).ready(function(){
	if($('#smenu').length > 0) {
		$('#tmenu').css({
			position: 'absolute'
		});
	}

	$(window).on('scroll',function(){
		if($(window).scrollTop() >= $('.reviews-block').offset().top - $(window).height() + 1349) {
			$('.reviews-block').addClass('reviews-fixedBG');
		}else {
			$('.reviews-block').removeClass('reviews-fixedBG');
		}
	});

	$('#smenu-toggle').on('click',function(){
		if (!$('#smenu').hasClass('active')) {
			$('#smenu').addClass('active');
			$('#smenu-nav').addClass('active');
			$('#smenu-toggle').addClass('active');
		}else{
			$('#smenu').removeClass('active');
			$('#smenu-nav').removeClass('active');
			$('#smenu-toggle').removeClass('active');
		}
		return;
	});
	$('#wrapper').on('click',function(){
		$('#smenu').removeClass('active');
		$('#smenu-nav').removeClass('active');
		$('#smenu-toggle').removeClass('active');
	});
});

/* Стрелка "Вниз" */
$(document).ready(function(){
	$('#go-down').on('click',function(){
		// $(window).scrollTop($('#block-1').offset().top,3000);
		$('html, body').animate({
			scrollTop: $('#block-1').offset().top
		},1000,'swing');
		return;
	});
});

/* Tabs */
$(document).ready(function(){
	if($('.tabs-row').length == 0) return;
	$('.tab.active').addClass('height-fix');
	var h = $('.tab.height-fix').outerHeight();
	$('.tab.height-fix').removeClass('height-fix');
	$('.tabs-row').css({
		'min-height': h
	});

	$('.tab-switcher').each(function(){
		var tabID = '#' + $(this).attr('data-tab');
		if($(tabID).length == 0) $(this).addClass('disabled');
	});

	$('.tab-switcher').on('click',function(){
		var tabID = '#' + $(this).attr('data-tab');
		if($(this).hasClass('active')) return;
		if($(this).hasClass('disabled')) return;
		if($(tabID).length == 0) return;
		$('.tab').removeClass('active');
		$('.tab-switcher').removeClass('active');
		$(this).addClass('active');
		$(tabID).addClass('active');
		return;
	});
});
/* Tabs Arrows */
$(document).ready(function(){
	if($('.tab-next').length == 0 && $('.tab-prev').length == 0) return;
	var tabList = [];
	var amount = 0 
	$('.tab').each(function(){
		tabList[amount] = '#' + $(this).attr('id');
		amount++;
	});
	amount--;
	var k = 0;
	var active = 0;
	$('.tab').each(function(){
		if($(this).hasClass('active')) active = k;
		k++;
	});
	$('.tab-next').on('click',function(){
		if(active < amount) {
			active++;
			$('.tab').removeClass('active');
			$(tabList[active]).addClass('active');
			$('.tab-switcher').removeClass('active');
			$('[data-tab="'+ $('.tab.active').attr('id') +'"]').addClass('active');
		}
		return;
	});


	$('.tab-prev').on('click',function(){
		if(active > 0) {
			active--;
			$('.tab').removeClass('active');
			$(tabList[active]).addClass('active');
			$('.tab-switcher').removeClass('active');
			$('[data-tab="'+ $('.tab.active').attr('id') +'"]').addClass('active');
		}
		return;
	});


});

/* Выпадающий список (select) */
$(document).ready(function(){
	$('.select').each(function(){
		var selectID = '#' + $(this).attr('id');
		// ID для Input
		$(selectID).children('.select-input').attr('id',selectID + '-data');

		if($(selectID).children('.select-txt').attr('data-placeholder')){
			$(selectID).children('.select-txt').text($(selectID).children('.select-txt').attr('data-placeholder'));
		} else {
			// Содержимае первой опции
			var optVal = $(selectID).children('.select-opt-container').children('.select-opt').eq(0).text();
			// Присвоить input значение перовй опции
			$(selectID).children('.select-input').val(optVal);
			// Присвоить текст первой опции селекту
			$(selectID).children('.select-txt').text(optVal);
			// Выделить первую опцию
			$(selectID).children('.select-opt-container').children('.select-opt').eq(0).addClass('selected');
		}
		
	});
	// Раскрытие списка при клике на кнопку или текст
	$('.select-btn, .select-txt').on('click',function() {
		if($(this).parent('.select').hasClass('active')) {
			$(this).parent('.select').removeClass('active');
		} else {
			$(this).parent('.select').addClass('active');
		};
	});
	// При клике на опцию
	$('.select-opt').on('click',function() {
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		// Скрыть список
		$(this).parent('.select-opt-container').parent('.select').removeClass('active');
		// Добавить текст опции в .select-txt
		$(this).parent('.select-opt-container').siblings('.select-txt').text($(this).text());
		// Добавить текст опции в input
		$(this).parent('.select-opt-container').siblings('.select-input').val($(this).text());
	});
});
/* Сворачивание выпадающего списка при клике за его пределами */
$(document).click( function(event){
  if( $(event.target).closest(".select").length) 
    return;
  $(".select").removeClass('active');
  event.stopPropagation();
});

/* Уменьшить/увеличить количество*/
$(document).ready(function(){
	$('.room-add').on('click',function(){
		var amount = parseInt($(this).siblings('.room-people-input').val());
		if(amount < 100) amount++;
		$(this).siblings('.room-people-input').val(amount);
	});

	$('.room-reduce').on('click',function(){
		var amount = parseInt($(this).siblings('.room-people-input').val());
		if(amount > 1) amount--;
		$(this).siblings('.room-people-input').val(amount);
	});
});


/* Календарь */
$(document).ready(function(){
	// Открытие и закрытие календаря
	$('.room-date-title, .room-calendar-icon').click(function(){
		if($(this).siblings('.calendar').hasClass('active')) {
			$(this).siblings('.calendar').removeClass('active');
		} else {
			$('.calendar').removeClass('active');
			$(this).siblings('.calendar').addClass('active');
		};
	});

	// При клике на число
	$('.calendar td').on('click',function(){
		if($(this).hasClass('inactive') || $(this).hasClass('marked')) {
			return;
		} else {
			// Снятие выделения с других чисел
			$(this).parent('tr').parent('tbody').children('tr').children('td').removeClass('selected-day');
			// Выделить выбранное число
			$(this).addClass('selected-day');
			// Выбор даты при клике на число
			var calendar = $(this).parents('.calendar');
			var Day = $(this).text();
			var Month = calendar.attr('data-month');
			if(Day < 10) Day = '0' + Day;
			if(Month < 10) Month = '0' + Month;
			var calDate;
			var calVal;
			calDate = Day+'.'+Month+'.'+calendar.attr('data-year');
			calVal = calendar.attr('data-year')+'-'+Month+'-'+Day;
			// Установка даты и значения атрибута data-date для room-date-title
			calendar.siblings('.room-date-title').text(calDate);
			calendar.children('.calendar-input').val(calVal);
			calendar.children('.calendar-input').change();
		}
	});
});
/* Сворачивание календаря при клике за его пределами */
$(document).click( function(event){
  if( $(event.target).closest(".calendar").length || $(event.target).closest(".room-date-title").length || $(event.target).closest(".room-calendar-icon").length) 
    return;
  $(".calendar").removeClass('active');
  event.stopPropagation();
});
/*  Переключение месяцев */
$(document).ready(function(){
	// Названия месяцев
	var monthName = ["January","February","March","April","May","June","Juli","August","September","October","November","December"];
	// Присвоение заголовка месяца каждому календарю
	$('.calendar').each(function() {
		$(this).children('.calendar-header').children('.calendar-ttl').text(monthName[$(this).attr('data-month')-1] + ' ' + $(this).attr('data-year'));
		$(this).children('.calendar-body').children('table[data-month="'+$(this).attr('data-month')+'"]').addClass('active');
	});
	// Функция перключения месяца
	$.fn.monthTtl = function monthTtl(act){
		// Путь от кнопки переключения до календаря
		var calendar = $(this).parents('.calendar');
		// Месяц календаря по атрибуту data-month
		var monthNum = parseInt(calendar.attr('data-month') - 1);
		// Год календаря по атрибуту data-year
		var yearNum = parseInt(calendar.attr('data-year'));
		var date = new Date();
		// Количество таблиц с месяцами в календаре
		var monthAmnt = $(this).parent('.calendar-header').siblings('.calendar-body').children('table').length;
		// Номер выбранного месяца
		var currentMonth = $(this).parent('.calendar-header').siblings('.calendar-body').children('table.active').index();
		// Переключение на следующий месяц
		// Если выбранный месяц последний в календаре, переключение не происходит
		if (act == '+' && currentMonth < monthAmnt-1) {
			if (monthNum >= 11) {
				yearNum++;
				monthNum = 0;
			} else {
				monthNum++;
			}
		};
		// Переключение на предыдущий месяц
		// Если выбранный месяц является текущим, то переключение не происходит
		if (act == '-' && (monthNum != date.getMonth() || yearNum > date.getFullYear())) {
			if (monthNum <= 0) {
				yearNum--;
				monthNum = 11;
			} else {
				monthNum--;
			}
		};
		// Присвоение значение выбранного месяца и года календарю
		calendar.attr('data-month',monthNum+1);
		calendar.attr('data-year',yearNum);
		// Заголовок месяца
		$(this).siblings('.calendar-ttl').text(monthName[monthNum]+' '+yearNum);
		// Переключение месяца
		// Та таблица, атрибут data-month которой совпадает с календарем становится активной
		calendar.children('.calendar-body').children('table').removeClass('active');
		calendar.children('.calendar-body').children('table[data-month="'+calendar.attr('data-month')+'"]').addClass('active');
	}
	// Переключение месяца
	$('.calendar-next').on('click',function(){
		$(this).monthTtl('+');
	});
	$('.calendar-prev').on('click',function(){
		$(this).monthTtl('-');
	});
});
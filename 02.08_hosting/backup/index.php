<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("title", "Главная");
$APPLICATION->SetPageProperty("keywords", "Аюрведическая клиника, Гималаи");
$APPLICATION->SetPageProperty("description", "AYURVEDA BHAVAN, Главная");
$APPLICATION->SetTitle("Главная");

use \Bitrix\Main\Page\Asset;

$asset = Asset::getInstance();
$SITE_TEMPLATE_PATH = SITE_TEMPLATE_PATH;

$asset->addJs($SITE_TEMPLATE_PATH . '/js/page-contacts.js');

$asset->addCss($SITE_TEMPLATE_PATH . '/css/style.css');

$asset->addCss($SITE_TEMPLATE_PATH . '/css/page-home.css');
$asset->addJs($SITE_TEMPLATE_PATH . '/js/page-home.js');

$asset->addCss('https://unpkg.com/swiper/swiper-bundle.min.css');
$asset->addJs('https://unpkg.com/swiper/swiper-bundle.min.js');

$asset->addJs('https://vjs.zencdn.net/8.3.0/video.min.js');
$asset->addCss('https://vjs.zencdn.net/8.3.0/video-js.css');

$asset->addCss($SITE_TEMPLATE_PATH . '/css/page-reviews.css');
?>

	  <section class="home">
      <?$APPLICATION->IncludeComponent(
	"bitrix:news.list", 
	"main_slider", 
	array(
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"ADD_SECTIONS_CHAIN" => "N",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"DISPLAY_DATE" => "N",
		"DISPLAY_NAME" => "N",
		"DISPLAY_PICTURE" => "Y",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"FILTER_NAME" => "",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "1",
		"IBLOCK_TYPE" => "main_slider",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"INCLUDE_SUBSECTIONS" => "N",
		"MESSAGE_404" => "",
		"NEWS_COUNT" => "9",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => "",
		"PAGER_TITLE" => "Новости",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"PREVIEW_TRUNCATE_LEN" => "",
		"PROPERTY_CODE" => array(
			0 => "text_en",
			1 => "text_ru",
			2 => "",
			3 => "",
		),
		"SET_BROWSER_TITLE" => "N",
		"SET_LAST_MODIFIED" => "N",
		"SET_META_DESCRIPTION" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "N",
		"SHOW_404" => "N",
		"SORT_BY1" => "ID",
		"SORT_BY2" => "ID",
		"SORT_ORDER1" => "DESC",
		"SORT_ORDER2" => "ASC",
		"STRICT_SECTION_CHECK" => "N",
		"COMPONENT_TEMPLATE" => "main_slider"
	),
	false
);?>
    </section>

    <section class="home_info">
      <div class="home_info_container container">
        <div class="home_info__info">
          <div class="home_info__card">
            <div class="home_info__card-img">
              <img src="<?=SITE_TEMPLATE_PATH?>/images/home/info_card_1.webp" alt="Аюрведа" />
            </div>
            <?$APPLICATION->IncludeComponent(
              "bitrix:main.include", 
              ".default", 
              array(
                "AREA_FILE_SHOW" => "file",
                "AREA_FILE_SUFFIX" => "inc",
                "EDIT_TEMPLATE" => "",
                "COMPONENT_TEMPLATE" => ".default",
                "PATH" => "/ru/include_areas/ayurveda.php"
              ),
              false
            );?>
            <div class="home_info__card-img_woman">
              <img src="<?=SITE_TEMPLATE_PATH?>/images/home/info_card_1_woman.webp" alt="Аюрведа" />
            </div>
          </div>
        </div>
      </div>

    </section>

    <section class="panchakarma">
      <div class="panchakarma_container container">

        <div class="panchakarma__text">
          <div class="panchakarma__text_title">
            <div class="panchakarma__text_title-title">Панчакарма - как основа очищения</div>
          </div>

          <?$APPLICATION->IncludeComponent(
            "bitrix:main.include", 
            ".default", 
            array(
              "AREA_FILE_RECURSIVE" => "Y",
              "AREA_FILE_SHOW" => "file",
              "AREA_FILE_SUFFIX" => "inc",
              "EDIT_TEMPLATE" => "",
              "PATH" => "/ru/include_areas/panchakarma_description.php",
              "COMPONENT_TEMPLATE" => ".default"
            ),
            false
          );?>

        </div>
        <?$APPLICATION->IncludeComponent(
	"bitrix:news.list", 
	"panchakarma_slider", 
	array(
		"COMPONENT_TEMPLATE" => "panchakarma_slider",
		"IBLOCK_TYPE" => "main_slider",
		"IBLOCK_ID" => "2",
		"NEWS_COUNT" => "3",
		"SORT_BY1" => "ID",
		"SORT_ORDER1" => "DESC",
		"SORT_BY2" => "ID",
		"SORT_ORDER2" => "ASC",
		"FILTER_NAME" => "",
		"FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"PROPERTY_CODE" => array(
			0 => "name",
			1 => "text",
			2 => "chapter_ru",
			3 => "name_ru",
			4 => "chapter",
			5 => "text_ru",
			6 => "",
		),
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"CACHE_TYPE" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"PREVIEW_TRUNCATE_LEN" => "",
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"SET_TITLE" => "N",
		"SET_BROWSER_TITLE" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_META_DESCRIPTION" => "N",
		"SET_LAST_MODIFIED" => "N",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"ADD_SECTIONS_CHAIN" => "N",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"INCLUDE_SUBSECTIONS" => "N",
		"STRICT_SECTION_CHECK" => "N",
		"DISPLAY_DATE" => "N",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "Y",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"PAGER_TEMPLATE" => "",
		"DISPLAY_TOP_PAGER" => "N",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"PAGER_TITLE" => "Новости",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"SET_STATUS_404" => "N",
		"SHOW_404" => "N",
		"MESSAGE_404" => ""
	),
	false
);?>
      </div>
    </section>
    <section class="about">
      <div class="about_container container">
        <div class="about__left">
          <div class="about__left-title">О нас</div>

          <?$APPLICATION->IncludeComponent(
            "bitrix:main.include", 
            ".default", 
            array(
              "AREA_FILE_RECURSIVE" => "Y",
              "AREA_FILE_SHOW" => "file",
              "AREA_FILE_SUFFIX" => "inc",
              "EDIT_TEMPLATE" => "",
              "PATH" => "/ru/include_areas/discount.php",
              "COMPONENT_TEMPLATE" => ".default"
            ),
            false
          );?>

            <?$APPLICATION->IncludeComponent(
              "bitrix:main.include", 
              ".default", 
              array(
                "AREA_FILE_RECURSIVE" => "Y",
                "AREA_FILE_SHOW" => "file",
                "AREA_FILE_SUFFIX" => "inc",
                "EDIT_TEMPLATE" => "",
                "PATH" => "/ru/include_areas/download.php",
                "COMPONENT_TEMPLATE" => ".default"
              ),
              false
            );?>

        </div>
          <?$APPLICATION->IncludeComponent(
            "bitrix:main.include", 
            ".default", 
            array(
              "AREA_FILE_RECURSIVE" => "Y",
              "AREA_FILE_SHOW" => "file",
              "AREA_FILE_SUFFIX" => "inc",
              "EDIT_TEMPLATE" => "",
              "PATH" => "/ru/include_areas/about.php",
              "COMPONENT_TEMPLATE" => ".default"
            ),
            false
          );?>
      </div>
    </section>
    <section class="license">
      <div class="license_container container">
        <div class="license__text">
          <div class="license__text-title">Лицензия</div>
          <div class="license__text-description">
            <?$APPLICATION->IncludeComponent(
              "bitrix:main.include", 
              ".default", 
              array(
                "AREA_FILE_RECURSIVE" => "Y",
                "AREA_FILE_SHOW" => "file",
                "AREA_FILE_SUFFIX" => "inc",
                "EDIT_TEMPLATE" => "",
                "PATH" => "/ru/include_areas/license.php",
                "COMPONENT_TEMPLATE" => ".default"
              ),
              false
            );?>
          </div>
        </div>
        <div class="license-img">
          <img src="<?=SITE_TEMPLATE_PATH?>/images/home/license.webp" alt="" />
        </div>
          <?$APPLICATION->IncludeComponent(
	"bitrix:news.list", 
	"license", 
	array(
		"COMPONENT_TEMPLATE" => "license",
		"IBLOCK_TYPE" => "rest_entity",
		"IBLOCK_ID" => "4",
		"NEWS_COUNT" => "3",
		"SORT_BY1" => "ID",
		"SORT_ORDER1" => "DESC",
		"SORT_BY2" => "ID",
		"SORT_ORDER2" => "ASC",
		"FILTER_NAME" => "",
		"FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"PROPERTY_CODE" => array(
			0 => "name",
			1 => "name_ru",
			2 => "",
		),
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"CACHE_TYPE" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"PREVIEW_TRUNCATE_LEN" => "",
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"SET_TITLE" => "N",
		"SET_BROWSER_TITLE" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_META_DESCRIPTION" => "N",
		"SET_LAST_MODIFIED" => "N",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"ADD_SECTIONS_CHAIN" => "N",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"INCLUDE_SUBSECTIONS" => "N",
		"STRICT_SECTION_CHECK" => "N",
		"DISPLAY_DATE" => "N",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "N",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"PAGER_TEMPLATE" => "",
		"DISPLAY_TOP_PAGER" => "N",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"PAGER_TITLE" => "Новости",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"SET_STATUS_404" => "N",
		"SHOW_404" => "N",
		"MESSAGE_404" => ""
	),
	false
);?>
      </div>
    </section>
    <section id="route" class="route">
      <div class="route_container container">
        <div class="route__list-item_info">
          <div class="route__list_info">
            <div class="route__list_info-title">Как добраться до нас</div>
            <div class="route__list_info-subtitle">И не потратить уйму времени и денег</div>
            <a class="route__list_info-link" href="/<?=LANGUAGE_ID?>/kontakty/">Подробнее</a>
          </div>
          <div class="route__list_info-description">
            <?$APPLICATION->IncludeComponent(
              "bitrix:main.include", 
              ".default", 
              array(
                "AREA_FILE_RECURSIVE" => "Y",
                "AREA_FILE_SHOW" => "file",
                "AREA_FILE_SUFFIX" => "inc",
                "EDIT_TEMPLATE" => "",
                "PATH" => "/ru/include_areas/how_to_get.php",
                "COMPONENT_TEMPLATE" => ".default"
              ),
              false
            );?>
          </div>
        </div>

        <?$APPLICATION->IncludeComponent(
	"bitrix:news.list", 
	"how_to_get", 
	array(
		"COMPONENT_TEMPLATE" => "how_to_get",
		"IBLOCK_TYPE" => "main_slider",
		"IBLOCK_ID" => "3",
		"NEWS_COUNT" => "3",
		"SORT_BY1" => "ID",
		"SORT_ORDER1" => "DESC",
		"SORT_BY2" => "ID",
		"SORT_ORDER2" => "ASC",
		"FILTER_NAME" => "",
		"FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"PROPERTY_CODE" => array(
			0 => "name",
			1 => "svg",
			2 => "text",
			3 => "name_ru",
			4 => "text_ru",
			5 => "",
		),
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "36000000",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"PREVIEW_TRUNCATE_LEN" => "",
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"SET_TITLE" => "N",
		"SET_BROWSER_TITLE" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_META_DESCRIPTION" => "N",
		"SET_LAST_MODIFIED" => "N",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"ADD_SECTIONS_CHAIN" => "N",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"INCLUDE_SUBSECTIONS" => "N",
		"STRICT_SECTION_CHECK" => "N",
		"DISPLAY_DATE" => "N",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "N",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"PAGER_TEMPLATE" => "",
		"DISPLAY_TOP_PAGER" => "N",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"PAGER_TITLE" => "Новости",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"SET_STATUS_404" => "N",
		"SHOW_404" => "N",
		"MESSAGE_404" => ""
	),
	false
);?>
        
      </div>
    </section>
    <section class="booking">
      <div class="booking_container container">
        <div class="booking__info">
          <div class="booking__info_title">
            <h3 class="booking__info_title-title">Бронирование</h3>
            <a href="/<?=LANGUAGE_ID?>/prices/" class="booking__info_title-subtitle">Посмотреть цены</a>
          </div>
          <div class="booking__info_description">
            <?$APPLICATION->IncludeComponent(
              "bitrix:main.include", 
              ".default", 
              array(
                "AREA_FILE_RECURSIVE" => "Y",
                "AREA_FILE_SHOW" => "file",
                "AREA_FILE_SUFFIX" => "inc",
                "EDIT_TEMPLATE" => "",
                "PATH" => "/ru/include_areas/booking.php",
                "COMPONENT_TEMPLATE" => ".default"
              ),
              false
            );?>
          </div>
        </div>

        <?$APPLICATION->IncludeComponent(
	"bitrix:news.list", 
	"booking", 
	array(
		"COMPONENT_TEMPLATE" => "booking",
		"IBLOCK_TYPE" => "services",
		"IBLOCK_ID" => "13",
		"NEWS_COUNT" => "",
		"SORT_BY1" => "ID",
		"SORT_ORDER1" => "DESC",
		"SORT_BY2" => "ID",
		"SORT_ORDER2" => "ASC",
		"FILTER_NAME" => "",
		"FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"PROPERTY_CODE" => array(
			0 => "beds",
			1 => "name",
			2 => "number_of_people",
			3 => "name_ru",
			4 => "beds_ru",
			5 => "number_of_people_ru",
			6 => "",
		),
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "36000000",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"PREVIEW_TRUNCATE_LEN" => "",
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"SET_TITLE" => "N",
		"SET_BROWSER_TITLE" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_META_DESCRIPTION" => "N",
		"SET_LAST_MODIFIED" => "N",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"ADD_SECTIONS_CHAIN" => "N",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"PARENT_SECTION" => "2",
		"PARENT_SECTION_CODE" => "",
		"INCLUDE_SUBSECTIONS" => "N",
		"STRICT_SECTION_CHECK" => "N",
		"DISPLAY_DATE" => "N",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "Y",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"PAGER_TEMPLATE" => "",
		"DISPLAY_TOP_PAGER" => "N",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"PAGER_TITLE" => "Новости",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"SET_STATUS_404" => "N",
		"SHOW_404" => "N",
		"MESSAGE_404" => ""
	),
	false
);?>

      </div>
    </section>
    <section class="reviews">
      <div class="reviews_container container">
        <div class="reviews__title">
          <h3 class="reviews__title-text">Отзывы наших гостей</h3>
          <a class="reviews__title-link" href="/<?=LANGUAGE_ID?>/otzyvy/"> Читать все отзывы </a>
        </div>
        <div class="reviews__slider">

          <?$APPLICATION->IncludeComponent(
	"bitrix:news.list", 
	"main_comments", 
	array(
		"COMPONENT_TEMPLATE" => "main_comments",
		"IBLOCK_TYPE" => "comments",
		"IBLOCK_ID" => "5",
		"NEWS_COUNT" => "10",
		"SORT_BY1" => "ID",
		"SORT_ORDER1" => "DESC",
		"SORT_BY2" => "ID",
		"SORT_ORDER2" => "ASC",
		"FILTER_NAME" => "",
		"FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"PROPERTY_CODE" => array(
			0 => "video",
			1 => "name",
			2 => "place",
			3 => "text",
			4 => "name_ru",
			5 => "place_ru",
			6 => "text_ru",
			7 => "",
		),
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "36000000",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"PREVIEW_TRUNCATE_LEN" => "",
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"SET_TITLE" => "N",
		"SET_BROWSER_TITLE" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_META_DESCRIPTION" => "N",
		"SET_LAST_MODIFIED" => "N",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"ADD_SECTIONS_CHAIN" => "N",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"INCLUDE_SUBSECTIONS" => "N",
		"STRICT_SECTION_CHECK" => "N",
		"DISPLAY_DATE" => "N",
		"DISPLAY_NAME" => "N",
		"DISPLAY_PICTURE" => "N",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"PAGER_TEMPLATE" => "",
		"DISPLAY_TOP_PAGER" => "N",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"PAGER_TITLE" => "Новости",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"SET_STATUS_404" => "N",
		"SHOW_404" => "N",
		"MESSAGE_404" => ""
	),
	false
);?>

          <div class="reviews__swiper-navigation">
            <div class="swiper-prev">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.7936 0.473763L0.356098 8.91126C0.312515 8.9548 0.277941 9.00649 0.254351 9.0634C0.230761 9.12031 0.21862 9.1813 0.21862 9.2429C0.21862 9.3045 0.230761 9.3655 0.254351 9.42241C0.277941 9.47931 0.312515 9.53101 0.356098 9.57454L8.7936 18.012C8.88156 18.1 9.00085 18.1494 9.12524 18.1494C9.24963 18.1494 9.36893 18.1 9.45688 18.012C9.54484 17.9241 9.59425 17.8048 9.59425 17.6804C9.59425 17.556 9.54484 17.4367 9.45688 17.3488L1.81977 9.71165H21.3127C21.4371 9.71165 21.5563 9.66227 21.6442 9.57436C21.7321 9.48645 21.7815 9.36722 21.7815 9.2429C21.7815 9.11858 21.7321 8.99935 21.6442 8.91145C21.5563 8.82354 21.4371 8.77415 21.3127 8.77415H1.81977L9.45688 1.13704C9.54484 1.04909 9.59425 0.929794 9.59425 0.805405C9.59425 0.681015 9.54484 0.56172 9.45688 0.473763C9.36893 0.385807 9.24963 0.336393 9.12524 0.336393C9.00085 0.336393 8.88156 0.385807 8.7936 0.473763Z"
                  fill="#22262A"
                />
              </svg>
            </div>
            <div class="swiper-next">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1421 17.9891L21.5796 9.55163C21.6232 9.50809 21.6577 9.4564 21.6813 9.39949C21.7049 9.34259 21.717 9.28159 21.717 9.21999C21.717 9.15839 21.7049 9.09739 21.6813 9.04048C21.6577 8.98358 21.6232 8.93188 21.5796 8.88835L13.1421 0.450846C13.0541 0.36289 12.9348 0.313477 12.8104 0.313477C12.686 0.313477 12.5667 0.36289 12.4788 0.450847C12.3908 0.538803 12.3414 0.658098 12.3414 0.782487C12.3414 0.906877 12.3908 1.02617 12.4788 1.11413L20.1159 8.75124H0.622925C0.498605 8.75124 0.379376 8.80062 0.291469 8.88853C0.203561 8.97644 0.154175 9.09567 0.154175 9.21999C0.154175 9.34431 0.203561 9.46354 0.291469 9.55144C0.379376 9.63935 0.498605 9.68874 0.622925 9.68874H20.1159L12.4788 17.3258C12.3908 17.4138 12.3414 17.5331 12.3414 17.6575C12.3414 17.7819 12.3908 17.9012 12.4788 17.9891C12.5667 18.0771 12.686 18.1265 12.8104 18.1265C12.9348 18.1265 13.0541 18.0771 13.1421 17.9891Z"
                  fill="#22262A"
                />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section class="cooperation">
      <div class="cooperation_container container">
        <div class="cooperation__title">
          <h2 class="cooperation__title-text">Сотрудничество</h2>
          <div class="cooperation__title_img">
            <div class="cooperation__title_img-left">
              <img src="<?=SITE_TEMPLATE_PATH?>/images/home/cooperation_left.webp" alt="" />
            </div>
            <div class="cooperation__title_img-right">
              <img src="<?=SITE_TEMPLATE_PATH?>/images/home/cooperation_right.webp" alt="" />
            </div>
          </div>
        </div>
        <div class="cooperation__form_container">
          <h2 class="cooperation__form-title">
            Готовы к совместной работе? Мы приглашаем к взаимовыгодному сотрудничеству!
          </h2>
          <?$APPLICATION->IncludeComponent(
            "bitrix:infoportal.element.add.form", 
            "cooperation", 
            array(
              "AJAX_MODE" => "Y",
              "CUSTOM_TITLE_DATE_ACTIVE_FROM" => "",
              "CUSTOM_TITLE_DATE_ACTIVE_TO" => "",
              "CUSTOM_TITLE_DETAIL_PICTURE" => "",
              "CUSTOM_TITLE_DETAIL_TEXT" => "",
              "CUSTOM_TITLE_IBLOCK_SECTION" => "",
              "CUSTOM_TITLE_NAME" => "Наталья",
              "CUSTOM_TITLE_PREVIEW_PICTURE" => "",
              "CUSTOM_TITLE_PREVIEW_TEXT" => "",
              "CUSTOM_TITLE_TAGS" => "",
              "DEFAULT_INPUT_SIZE" => "30",
              "DETAIL_TEXT_USE_HTML_EDITOR" => "N",
              "ELEMENT_ASSOC" => "CREATED_BY",
              "GROUPS" => array(
                0 => "2",
              ),
              "IBLOCK_ID" => "8",
              "IBLOCK_TYPE" => "cooperation_message",
              "LEVEL_LAST" => "Y",
              "LIST_URL" => "",
              "MAX_FILE_SIZE" => "0",
              "MAX_LEVELS" => "100000",
              "MAX_USER_ENTRIES" => "100000",
              "PREVIEW_TEXT_USE_HTML_EDITOR" => "N",
              "PROPERTY_CODES" => array(
                0 => "9",
                1 => "16",
                2 => "NAME",
              ),
              "PROPERTY_CODES_REQUIRED" => array(
                0 => "9",
                1 => "16",
                2 => "NAME",
              ),
              "RESIZE_IMAGES" => "N",
              "SEF_MODE" => "N",
              "STATUS" => "ANY",
              "STATUS_NEW" => "N",
              "USER_MESSAGE_ADD" => "",
              "USER_MESSAGE_EDIT" => "",
              "USE_CAPTCHA" => "N",
              "COMPONENT_TEMPLATE" => ".default"
            ),
            false
          );?>
        </div>
      </div>
    </section>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
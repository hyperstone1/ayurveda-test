<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("title", "Панчакарма");
$APPLICATION->SetTitle("Панчакарма");
use \Bitrix\Main\Page\Asset;
$asset = Asset::getInstance();
$SITE_TEMPLATE_PATH = SITE_TEMPLATE_PATH;

$asset->addJs($SITE_TEMPLATE_PATH . '/js/page-pkarma.js');
$asset->addCss($SITE_TEMPLATE_PATH . '/css/page-pkarma.css');

$asset->addCss($SITE_TEMPLATE_PATH . '/css/style.css');

$asset->addJs($SITE_TEMPLATE_PATH . '/js/page-contacts.js');

$asset->addCss($SITE_TEMPLATE_PATH . '/css/page-home.css');
$asset->addJs($SITE_TEMPLATE_PATH . '/js/page-home.js');

$asset->addCss('https://unpkg.com/swiper/swiper-bundle.min.css');
$asset->addJs('https://unpkg.com/swiper/swiper-bundle.min.js');
?>

	<section class="banner">
      <div class="banner_container container">
        <div class="banner_title">
          <div class="banner_title-title">
            <p>специальные</p>
            <img src="<?=SITE_TEMPLATE_PATH?>/images/pachakarma/banner_1.png" alt="" />
            <p>процедуры</p>
            <img src="<?=SITE_TEMPLATE_PATH?>/images/pachakarma/banner_2.png" alt="" />
            <p>панчакармы</p>
          </div>
        </div>
        <div class="banner_description">
          <div class="banner_description-subscription">Оплачиваются отдельно</div>
          <div class="banner_description-text">
            <?$APPLICATION->IncludeComponent(
	"bitrix:main.include", 
	".default", 
	array(
		"AREA_FILE_RECURSIVE" => "Y",
		"AREA_FILE_SHOW" => "file",
		"AREA_FILE_SUFFIX" => "inc",
		"EDIT_TEMPLATE" => "",
		"PATH" => "/ru/include_areas/panchakarma.php",
		"COMPONENT_TEMPLATE" => ".default"
	),
	false
);?>
          </div>
        </div>
      </div>
    </section>

    <section class="contraindications">
      <div class="contraindications_container container">
        <div class="contraindications__top">
          <div class="contraindications__top-title">Общие противопоказания</div>
          <div class="contraindications__top-navigation">
            <div class="navigation-prev">
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7936 6.47334L4.3561 14.9108C4.31252 14.9544 4.27794 15.0061 4.25435 15.063C4.23076 15.1199 4.21862 15.1809 4.21862 15.2425C4.21862 15.3041 4.23076 15.3651 4.25435 15.422C4.27794 15.4789 4.31252 15.5306 4.3561 15.5741L12.7936 24.0116C12.8816 24.0996 13.0009 24.149 13.1252 24.149C13.2496 24.149 13.3689 24.0996 13.4569 24.0116C13.5448 23.9237 13.5943 23.8044 13.5943 23.68C13.5943 23.5556 13.5448 23.4363 13.4569 23.3483L5.81977 15.7112H25.3127C25.4371 15.7112 25.5563 15.6618 25.6442 15.5739C25.7321 15.486 25.7815 15.3668 25.7815 15.2425C25.7815 15.1182 25.7321 14.9989 25.6442 14.911C25.5563 14.8231 25.4371 14.7737 25.3127 14.7737H5.81977L13.4569 7.13662C13.5448 7.04866 13.5943 6.92937 13.5943 6.80498C13.5943 6.68059 13.5448 6.56129 13.4569 6.47334C13.3689 6.38538 13.2496 6.33597 13.1252 6.33597C13.0009 6.33597 12.8816 6.38538 12.7936 6.47334Z"
                  fill="#22262A"
                  fill-opacity="0.6"
                />
              </svg>
            </div>
            <div class="navigation-next">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1422 23.9897L26.5797 15.5522C26.6233 15.5087 26.6579 15.457 26.6814 15.4001C26.705 15.3432 26.7172 15.2822 26.7172 15.2206C26.7172 15.159 26.705 15.098 26.6814 15.0411C26.6579 14.9842 26.6233 14.9325 26.5797 14.889L18.1422 6.45146C18.0542 6.3635 17.9349 6.31409 17.8105 6.31409C17.6862 6.31409 17.5669 6.3635 17.4789 6.45146C17.391 6.53941 17.3415 6.65871 17.3415 6.7831C17.3415 6.90749 17.391 7.02678 17.4789 7.11474L25.116 14.7518H5.62305C5.49873 14.7518 5.3795 14.8012 5.29159 14.8891C5.20368 14.977 5.1543 15.0963 5.1543 15.2206C5.1543 15.3449 5.20368 15.4641 5.29159 15.5521C5.3795 15.64 5.49873 15.6893 5.62305 15.6893H25.116L17.4789 23.3265C17.391 23.4144 17.3415 23.5337 17.3415 23.6581C17.3415 23.7825 17.391 23.9018 17.4789 23.9897C17.5669 24.0777 17.6862 24.1271 17.8105 24.1271C17.9349 24.1271 18.0542 24.0777 18.1422 23.9897Z"
                  fill="#22262A"
                />
              </svg>
            </div>
          </div>
        </div>

        <?$APPLICATION->IncludeComponent(
	"bitrix:news.list", 
	"general_contraindications", 
	array(
		"COMPONENT_TEMPLATE" => "general_contraindications",
		"IBLOCK_TYPE" => "rest_entity",
		"IBLOCK_ID" => "6",
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
			0 => "name",
			1 => "text",
			2 => "name_ru",
			3 => "text_ru",
			4 => "",
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

    <section class="procedures">

      <div class="procedures_container container">
        <div class="procedures-title">Специальные процедуры</div>

        <?$APPLICATION->IncludeComponent(
	"bitrix:news.list", 
	"special_procedures", 
	array(
		"COMPONENT_TEMPLATE" => "special_procedures",
		"IBLOCK_TYPE" => "main_slider",
		"IBLOCK_ID" => "7",
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
			0 => "name",
			1 => "text",
			2 => "name_ru",
			3 => "text_ru",
			4 => "",
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
		"CACHE_GROUPS" => "N",
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

        <?$APPLICATION->IncludeComponent(
	"bitrix:news.list", 
	"services", 
	array(
		"COMPONENT_TEMPLATE" => "services",
		"IBLOCK_TYPE" => "special_procedures",
		"IBLOCK_ID" => "10",
		"NEWS_COUNT" => "",
		"SORT_BY1" => "ID",
		"SORT_ORDER1" => "ASC",
		"SORT_BY2" => "ID",
		"SORT_ORDER2" => "DESC",
		"FILTER_NAME" => "",
		"FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"PROPERTY_CODE" => array(
			0 => "intro",
			1 => "is_description",
			2 => "name_ru",
			3 => "text",
			4 => "intro_ru",
			5 => "name",
			6 => "description_ru",
			7 => "text_ru",
			8 => "",
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
            <a href="<?=LANGUAGE_ID?>/prices/" class="booking__info_title-subtitle">Посмотреть цены</a>
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
			0 => "beds",
			1 => "fields",
			2 => "name",
			3 => "number_of_people",
			4 => "price",
			5 => "is_booking",
			6 => "name_ru",
			7 => "number_of_lines",
			8 => "beds_ru",
			9 => "fields_ru",
			10 => "price_ru",
			11 => "number_of_people_ru",
			12 => "",
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

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
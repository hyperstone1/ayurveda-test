<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("title", "Контакты");
$APPLICATION->SetTitle("Контакты");

use \Bitrix\Main\Page\Asset;

$asset = Asset::getInstance();
$SITE_TEMPLATE_PATH = SITE_TEMPLATE_PATH;

$asset->addCss($SITE_TEMPLATE_PATH . '/css/page-contacts.css');
$asset->addJs($SITE_TEMPLATE_PATH . '/js/page-contacts.js');

$asset->addCss($SITE_TEMPLATE_PATH . '/css/style.css');

$asset->addJs($SITE_TEMPLATE_PATH . '/js/jquery-1.11.3.min.js');
$asset->addJs($SITE_TEMPLATE_PATH . '/js/bootstrap.min.js');
$asset->addJs($SITE_TEMPLATE_PATH . '/js/jquery.transit.min.js');

$asset->addJs('https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=ffac2b37-9f44-43d8-8e3e-92f15073c2d1');
?>
<div id="wrapper">
 <section class="contacts" id="block-1">
	<div class="contacts__title">
		Контакты
	</div>
	<div class="contacts__info">
		 <?$APPLICATION->IncludeComponent(
	"bitrix:news.list", 
	"communications", 
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
		"COMPONENT_TEMPLATE" => "communications",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "Y",
		"DISPLAY_DATE" => "N",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "N",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"FILTER_NAME" => "",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "11",
		"IBLOCK_TYPE" => "rest_entity",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"INCLUDE_SUBSECTIONS" => "N",
		"MESSAGE_404" => "",
		"NEWS_COUNT" => "",
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
			0 => "name",
			1 => "text",
			2 => "name_ru",
			3 => "text_ru",
			4 => "",
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
		"STRICT_SECTION_CHECK" => "N"
	),
	false
);?>
	</div>
	<div class="container">
		<div class="contacts__location">
			<div class="location_info">
				<div class="location_info-title">
					Как добраться
				</div>
				 <?$APPLICATION->IncludeComponent(
	"bitrix:main.include",
	".default",
	Array(
		"AREA_FILE_RECURSIVE" => "Y",
		"AREA_FILE_SHOW" => "file",
		"AREA_FILE_SUFFIX" => "inc",
		"COMPONENT_TEMPLATE" => ".default",
		"EDIT_TEMPLATE" => "",
		"PATH" => "/ru//include_areas/how_to.php"
	)
);?>
			</div>
			 <?$APPLICATION->IncludeComponent(
	"bitrix:news.list", 
	"how_to", 
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
		"COMPONENT_TEMPLATE" => "how_to",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "Y",
		"DISPLAY_DATE" => "N",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "N",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"FILTER_NAME" => "",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "12",
		"IBLOCK_TYPE" => "rest_entity",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"INCLUDE_SUBSECTIONS" => "N",
		"MESSAGE_404" => "",
		"NEWS_COUNT" => "",
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
			0 => "name",
			1 => "text",
			2 => "name_ru",
			3 => "text_ru",
			4 => "",
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
		"STRICT_SECTION_CHECK" => "N"
	),
	false
);?>
		</div>
		<div class="map">
			 <!-- <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d725.4822862314934!2d78.30816666753071!3d30.122962677978094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1684398052537!5m2!1sru!2sby"
              width="1600"
              height="641"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> -->
			<div id="map" class="map">
			</div>
			 <script
              async
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVzWclwddGOJh2PAH6L9EbMBVLiVtRCRg&callback=initMap"
            ></script> <script>
              const rem = function (rem) {
                if (window.innerWidth > 768) {
                  let marg = 0.005208335 * window.innerWidth * rem;
                  return marg;
                } else {
                  let marg = (100 / 375) * (0.1 * window.innerWidth) * rem;
                  return marg;
                }
              };

              let map;

              function initMap() {
                var myLatlng = new google.maps.LatLng(30.1228439, 78.3081757);
                map = new google.maps.Map(document.getElementById('map'), {
                  center: myLatlng,
                  zoom: 17,
                  disableDefaultUI: true,
                });
                const infoWindow = new google.maps.InfoWindow();
                var marker = new google.maps.Marker({
                  position: myLatlng,
                  map,
                  optimized: false,
                  icon: {
                    // url: './images/placemark.png',
                    // scaledSize: new google.maps.Size(rem(4.2), rem(4.2)), // Размер маркера
                  },
                });

                marker.addListener('click', () => {
                  infoWindow.close();
                  infoWindow.setContent(marker.getTitle());
                  infoWindow.open(marker.getMap(), marker);
                });

                // To add the marker to the map, call setMap();
                // marker.setMap(map);
              }

              window.initMap = initMap;
            </script>
			<stile>
			<?$APPLICATION->IncludeComponent(
				"bitrix:main.include",
				".default",
				Array(
					"AREA_FILE_RECURSIVE" => "Y",
					"AREA_FILE_SHOW" => "file",
					"AREA_FILE_SUFFIX" => "inc",
					"COMPONENT_TEMPLATE" => ".default",
					"EDIT_TEMPLATE" => "",
					"PATH" => "/ru/include_areas/discount.php"
				)
			);?>
		</div>
	</div>
 </section>
</div><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
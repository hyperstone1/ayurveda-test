<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>

<div class="reviews__slider_container swiper-container">
	<div class="swiper-wrapper">
	<?foreach($arResult["ITEMS"] as $arItem):?>

		<?
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
		?>

		<div class="reviews__slider_item swiper-slide" id="<?=$this->GetEditAreaId($arItem['ID']);?>">

			<div class="reviews__slider_item-img">
				<img src="<?=CFile::GetPath($arItem["PROPERTIES"]["avatar"]["VALUE"])?>" alt="" />
			</div>
			<div class="reviews__slider_item-name">
				<?if(LANGUAGE_ID === 'ru') {
					echo $arItem["DISPLAY_PROPERTIES"]["name_ru"]["DISPLAY_VALUE"];
				} else {
					echo $arItem["DISPLAY_PROPERTIES"]["name"]["DISPLAY_VALUE"];
				}?>
			</div>
			<div class="reviews__slider_item-location">
				<?if(LANGUAGE_ID === 'ru') {
					echo $arItem["DISPLAY_PROPERTIES"]["place_ru"]["DISPLAY_VALUE"];
				} else {
					echo $arItem["DISPLAY_PROPERTIES"]["place"]["DISPLAY_VALUE"];
				}?>
			</div>

			<div class="reviews__slider_item_text">

				<?if($arItem["DISPLAY_PROPERTIES"]["video"]["DISPLAY_VALUE"]):?>

				<video id="my-video" class="video-js" controls data-setup="{}">
                  <source src="<?=CFile::GetPath($arItem["PROPERTIES"]["file"]["VALUE"])?>" type="video/mp4" />
                </video>

				<?else:?>

				<div class="reviews__slider_item_text-quotes">
					<img src="<?=SITE_TEMPLATE_PATH?>/images/reviews/quotes.png" />
				</div>
				<div class="reviews__slider_item_text-review">
					<?if(LANGUAGE_ID === 'ru') {
						echo $arItem["DISPLAY_PROPERTIES"]["text_ru"]["~VALUE"]["TEXT"];
					} else {
						echo $arItem["DISPLAY_PROPERTIES"]["text"]["~VALUE"]["TEXT"];
					}?>
				</div>
				<div class="reviews__slider_item_text-quotes">
					<img src="<?=SITE_TEMPLATE_PATH?>/images/reviews/quotes.png" />
				</div>
					
				<?endif?>

			</div>
		</div>

	<?endforeach;?>

	</div>
    <div class="swiper-pagination"></div>
</div> 

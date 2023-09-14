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
CComponentUtil::__IncludeLang(dirname($_SERVER["SCRIPT_NAME"]), "/template.php");
?>

<div class="booking__list">
	<div class="booking__list-wrapper swiper-wrapper">

	<?foreach($arResult["ITEMS"] as $arItem):?>

		<?
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
		?>

		<div class="booking__list_card swiper-slide" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
			<div class="booking__list_card-img">
				<img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="" />
			</div>
			<div class="booking__list_card-text">
				<div class="booking__list_card-info">
				<div class="booking__list_card-title">
					<?if(LANGUAGE_ID === 'ru') {
						echo $arItem["DISPLAY_PROPERTIES"]["name_ru"]["DISPLAY_VALUE"];
					} else {
						echo $arItem["DISPLAY_PROPERTIES"]["name"]["DISPLAY_VALUE"];
					}?>
				</div>
					<div class="booking__list_card-description">
					<?if(LANGUAGE_ID === 'ru') {?>
						<div class="booking__list_card-beds_count"><?print_r($arItem["DISPLAY_PROPERTIES"]["beds_ru"]["DISPLAY_VALUE"]);?></div>
						<div class="booking__list_card-persons_count"><?print_r($arItem["DISPLAY_PROPERTIES"]["number_of_people_ru"]["DISPLAY_VALUE"]);?></div>
					<?} else {?>
						<div class="booking__list_card-beds_count"><?print_r($arItem["DISPLAY_PROPERTIES"]["beds"]["DISPLAY_VALUE"]);?></div>
						<div class="booking__list_card-persons_count"><?print_r($arItem["DISPLAY_PROPERTIES"]["number_of_people"]["DISPLAY_VALUE"]);?></div>
					<?}?>
					</div>
				</div>
				<div class="booking__list_card-link">
					<a href="/<?=LANGUAGE_ID?>/booking/#<?echo $arItem["DISPLAY_PROPERTIES"]["name"]["DISPLAY_VALUE"]?>" class="booking__list_card-btn"><?=GetMessage("CT_BNL_book")?></a>
				</div>
			</div>
		</div>

	<?endforeach;?>
	</div>

</div>

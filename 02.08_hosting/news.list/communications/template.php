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

<div class="contacts__address container">

<?foreach($arResult["ITEMS"] as $arItem):?>

	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>

	<div class="address" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
		<div class="address-title">
			<?if(LANGUAGE_ID === 'ru') {
				echo $arItem["DISPLAY_PROPERTIES"]["name_ru"]["DISPLAY_VALUE"];
			} else {
				echo $arItem["DISPLAY_PROPERTIES"]["name"]["DISPLAY_VALUE"];
			}?>
		</div>
		<div class="address-info">
			<?if(LANGUAGE_ID === 'ru') {
				echo $arItem["DISPLAY_PROPERTIES"]["text_ru"]["~VALUE"]["TEXT"];
			} else {
				echo $arItem["DISPLAY_PROPERTIES"]["text"]["~VALUE"]["TEXT"];
			}?>
		</div>
	</div>

<?endforeach;?>

</div>

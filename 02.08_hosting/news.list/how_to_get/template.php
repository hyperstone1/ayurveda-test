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
$namber = 0;
?>

<div class="route__list">

<?foreach($arResult["ITEMS"] as $arItem):?>
	<?$namber += 1;?>

	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>

	<div class="route__list-item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
		<div class="route__list_title">
			<div class="route__list_title-number">0<?=$namber?></div>
			<h3 class="route__list_title-title">
				<?if(LANGUAGE_ID === 'ru') {
					echo $arItem["DISPLAY_PROPERTIES"]["name_ru"]["DISPLAY_VALUE"];
				} else {
					echo $arItem["DISPLAY_PROPERTIES"]["name"]["DISPLAY_VALUE"];
				}?>
			</h3>
		</div>
		<div class="route__list-description">
		<div class="route__list-icon">
			<?=$arItem["DISPLAY_PROPERTIES"]["svg"]["DISPLAY_VALUE"];?>
		</div>
		<span>
			<?if(LANGUAGE_ID === 'ru') {
				echo $arItem["DISPLAY_PROPERTIES"]["text_ru"]["~VALUE"]["TEXT"];
			} else {
				echo $arItem["DISPLAY_PROPERTIES"]["text"]["~VALUE"]["TEXT"];
			}?>
		</span>
		</div>

	</div>

<?endforeach;?>

</div>
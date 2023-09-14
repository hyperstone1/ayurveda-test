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

<table>
	<thead>
	<tr>
		<th><?=GetMessage("CT_BNL_name")?></th>
		<th><?=GetMessage("CT_BNL_services")?></th>
		<th><?=GetMessage("CT_BNL_price")?></th>
	</tr>
	</thead>
<tbody>

<?foreach($arResult["ITEMS"] as $arItem):?>

	<?$namb = 0;?>

	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>

	<?if($arItem["DISPLAY_PROPERTIES"]["number_of_lines"]["VALUE"] > 1):?>
	<tr>
		<td rowspan="<?=$arItem["DISPLAY_PROPERTIES"]["number_of_lines"]["VALUE"]?>" class="td_name">
			<div class="services_name">
			<span>
				<?if(LANGUAGE_ID === 'ru') {
					echo $arItem["DISPLAY_PROPERTIES"]["name_ru"]["DISPLAY_VALUE"];
				} else {
					echo $arItem["DISPLAY_PROPERTIES"]["name"]["DISPLAY_VALUE"];
				}?>
			</span>
			<?if($arItem["DISPLAY_PROPERTIES"]["is_booking"]["VALUE"]):?>
			<a class="link" href="/<?=LANGUAGE_ID?>/booking/#<?echo $arItem["DISPLAY_PROPERTIES"]["name"]["DISPLAY_VALUE"];?>"><?=GetMessage("CT_BNL_booking")?></a>
			<?endif?>
			</div>
		</td>
		<td class="services">
			<?if(LANGUAGE_ID === 'ru') {
				echo $arItem["DISPLAY_PROPERTIES"]["fields_ru"]["~VALUE"][$namb]["TEXT"];
			} else {
				echo $arItem["DISPLAY_PROPERTIES"]["fields"]["~VALUE"][$namb]["TEXT"];
			}?>
		</td>
		<td class="td_price">
			<?if(LANGUAGE_ID === 'ru') {
				echo $arItem["DISPLAY_PROPERTIES"]["price_ru"]["~VALUE"][$namb]["TEXT"];
			} else {
				echo $arItem["DISPLAY_PROPERTIES"]["price"]["~VALUE"][$namb]["TEXT"];
			}?>
		</td>
	</tr>
	<?$namb += 1;?>
	<?endif;?>

	<?for($i = $namb; $i <= $arItem["DISPLAY_PROPERTIES"]["number_of_lines"]["VALUE"]-1; $i++) {?>

	<tr id="<?=$this->GetEditAreaId($arItem['ID']);?>">
		<?if($arItem["DISPLAY_PROPERTIES"]["number_of_lines"]["VALUE"] < 2):?>
		<td class="td_name">
			<?if(LANGUAGE_ID === 'ru') {
				echo $arItem["DISPLAY_PROPERTIES"]["name_ru"]["DISPLAY_VALUE"];
			} else {
				echo $arItem["DISPLAY_PROPERTIES"]["name"]["DISPLAY_VALUE"];
			}?>
		</td>
		<?endif;?>
		<td class="services">
			<?if(LANGUAGE_ID === 'ru') {
				echo $arItem["DISPLAY_PROPERTIES"]["fields_ru"]["~VALUE"][$namb]["TEXT"];
			} else {
				echo $arItem["DISPLAY_PROPERTIES"]["fields"]["~VALUE"][$namb]["TEXT"];
			}?>
		</td>
        <td class="td_price">
			<?if(LANGUAGE_ID === 'ru') {
				echo $arItem["DISPLAY_PROPERTIES"]["price_ru"]["~VALUE"][$namb]["TEXT"];
			} else {
				echo $arItem["DISPLAY_PROPERTIES"]["price"]["~VALUE"][$namb]["TEXT"];
			}?>
        </td>
	</tr>

	<?$namb += 1;?>
	<?}?>

<?endforeach;?>

<tbody>
</table>

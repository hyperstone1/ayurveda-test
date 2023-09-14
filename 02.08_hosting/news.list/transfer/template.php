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

<table class="transfer__table">
<thead>
	<tr>
		<th></th>
		<th><?=GetMessage("CT_BNL_transport")?></th>
		<th class="th_price">
		<span><?=GetMessage("CT_BNL_prise")?></span>
		<div class="services_tooltip" data-tooltip-id="tooltip1">
			<svg
			width="16"
			height="17"
			viewBox="0 0 16 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			>
			<path
				d="M9.09375 12.25C9.09375 12.3743 9.04437 12.4936 8.95646 12.5815C8.86855 12.6694 8.74932 12.7188 8.625 12.7188C8.33492 12.7188 8.05672 12.6035 7.85161 12.3984C7.64649 12.1933 7.53125 11.9151 7.53125 11.625V8.5C7.53125 8.45856 7.51479 8.41882 7.48549 8.38952C7.45619 8.36021 7.41644 8.34375 7.375 8.34375C7.25068 8.34375 7.13146 8.29436 7.04355 8.20646C6.95564 8.11855 6.90625 7.99932 6.90625 7.875C6.90625 7.75068 6.95564 7.63145 7.04355 7.54354C7.13146 7.45564 7.25068 7.40625 7.375 7.40625C7.66508 7.40625 7.94328 7.52148 8.1484 7.7266C8.35352 7.93172 8.46875 8.20992 8.46875 8.5V11.625C8.46875 11.6664 8.48522 11.7062 8.51452 11.7355C8.54382 11.7648 8.58356 11.7813 8.625 11.7813C8.74932 11.7813 8.86855 11.8306 8.95646 11.9185C9.04437 12.0065 9.09375 12.1257 9.09375 12.25ZM7.6875 5.84375C7.84202 5.84375 7.99307 5.79793 8.12154 5.71209C8.25002 5.62624 8.35015 5.50423 8.40929 5.36147C8.46842 5.21872 8.48389 5.06163 8.45374 4.91009C8.4236 4.75854 8.34919 4.61933 8.23993 4.51007C8.13067 4.40081 7.99147 4.32641 7.83992 4.29626C7.68837 4.26612 7.53129 4.28159 7.38853 4.34072C7.24578 4.39985 7.12376 4.49999 7.03792 4.62846C6.95207 4.75694 6.90625 4.90798 6.90625 5.0625C6.90625 5.2697 6.98856 5.46841 7.13508 5.61493C7.28159 5.76144 7.4803 5.84375 7.6875 5.84375ZM15.9688 8.5C15.9688 10.0761 15.5014 11.6167 14.6258 12.9272C13.7502 14.2377 12.5056 15.259 11.0495 15.8622C9.59341 16.4653 7.99116 16.6231 6.44538 16.3156C4.89959 16.0082 3.4797 15.2492 2.36525 14.1348C1.2508 13.0203 0.491847 11.6004 0.184371 10.0546C-0.123105 8.50884 0.0347026 6.90659 0.637838 5.45049C1.24097 3.99439 2.26235 2.74984 3.5728 1.87423C4.88326 0.998609 6.42393 0.53125 8 0.53125C10.1127 0.533731 12.1381 1.37409 13.632 2.86798C15.1259 4.36188 15.9663 6.38732 15.9688 8.5ZM15.0313 8.5C15.0313 7.10935 14.6189 5.74993 13.8463 4.59365C13.0737 3.43736 11.9755 2.53615 10.6907 2.00397C9.40595 1.47179 7.9922 1.33255 6.62828 1.60385C5.26435 1.87516 4.0115 2.54482 3.02816 3.52816C2.04482 4.51149 1.37516 5.76434 1.10386 7.12827C0.832555 8.4922 0.971797 9.90595 1.50398 11.1907C2.03615 12.4755 2.93737 13.5737 4.09365 14.3463C5.24993 15.1189 6.60935 15.5313 8 15.5313C9.86417 15.5292 11.6514 14.7877 12.9696 13.4696C14.2877 12.1514 15.0292 10.3642 15.0313 8.5Z"
				fill="#B0008E"
			></path>
			</svg>
			<div class="tooltiptext" style="visibility: visible; opacity: 1">
			<span><?=GetMessage("CT_BNL_prices_may_change")?></span>
			<div class="close-btn">
				<svg
				width="14"
				height="14"
				viewBox="0 0 14 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				>
				<path
					d="M12.7147 12.7145L1.28613 1.28595M12.7147 1.28595L1.28613 12.7145"
					stroke="white"
					stroke-opacity="0.7"
					stroke-width="1.33333"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
				</svg>
			</div>
			</div>
		</div>
		</th>
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
		<td rowspan="3" class="td_name">
			<?if(LANGUAGE_ID === 'ru') {
				echo $arItem["DISPLAY_PROPERTIES"]["name_ru"]["DISPLAY_VALUE"];
			} else {
				echo $arItem["DISPLAY_PROPERTIES"]["name"]["DISPLAY_VALUE"];
			}?>
		</td>
		<td class="small_car services">
			<div class="panchakarma__slider-text">
			<?if(LANGUAGE_ID === 'ru') {
				echo $arItem["DISPLAY_PROPERTIES"]["fields_ru"]["~VALUE"][$namb]["TEXT"];
			} else {
				echo $arItem["DISPLAY_PROPERTIES"]["fields"]["~VALUE"][$namb]["TEXT"];
			}?>
			</div>
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
		<td class="services transport">
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
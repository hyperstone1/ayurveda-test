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

<div class="procedures_additional">
    <div class="procedures_additional__list">

<?foreach($arResult["ITEMS"] as $arItem):?>

	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>

	<div class="procedures_additional__list-item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
		<div class="procedures_additional__list-item_main">
		<div class="procedures_additional__list-title">
			<?if(LANGUAGE_ID === 'ru') {
				echo $arItem["DISPLAY_PROPERTIES"]["name_ru"]["DISPLAY_VALUE"];
			} else {
				echo $arItem["DISPLAY_PROPERTIES"]["name"]["DISPLAY_VALUE"];
			}?>
		</div>
		<div class="procedures_additional__list_right">
			<div class="procedures_additional__list-text">
			<?if(LANGUAGE_ID === 'ru') {
					echo $arItem["DISPLAY_PROPERTIES"]["intro_ru"]["~VALUE"]["TEXT"];
				} else {
					echo $arItem["DISPLAY_PROPERTIES"]["intro"]["~VALUE"]["TEXT"];
				}?>
			</div>
			<div class="procedures_additional__list-btn">
			<svg
				width="30"
				height="27"
				viewBox="0 0 30 27"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
				d="M29.375 1.25C29.375 1.41576 29.3092 1.57473 29.1919 1.69194C29.0747 1.80915 28.9158 1.875 28.75 1.875H1.25C1.08424 1.875 0.925269 1.80915 0.808058 1.69194C0.690848 1.57473 0.625 1.41576 0.625 1.25C0.625 1.08424 0.690848 0.925269 0.808058 0.808058C0.925269 0.690848 1.08424 0.625 1.25 0.625H28.75C28.9158 0.625 29.0747 0.690848 29.1919 0.808058C29.3092 0.925269 29.375 1.08424 29.375 1.25ZM25 10.625C24.8342 10.625 24.6753 10.6908 24.5581 10.8081C24.4408 10.9253 24.375 11.0842 24.375 11.25V24.7406L7.94219 8.30781C7.82491 8.19054 7.66585 8.12465 7.5 8.12465C7.33415 8.12465 7.17509 8.19054 7.05781 8.30781C6.94054 8.42509 6.87465 8.58415 6.87465 8.75C6.87465 8.91585 6.94054 9.07491 7.05781 9.19219L23.4906 25.625H10C9.83424 25.625 9.67527 25.6908 9.55806 25.8081C9.44085 25.9253 9.375 26.0842 9.375 26.25C9.375 26.4158 9.44085 26.5747 9.55806 26.6919C9.67527 26.8092 9.83424 26.875 10 26.875H25C25.1658 26.875 25.3247 26.8092 25.4419 26.6919C25.5592 26.5747 25.625 26.4158 25.625 26.25V11.25C25.625 11.0842 25.5592 10.9253 25.4419 10.8081C25.3247 10.6908 25.1658 10.625 25 10.625Z"
				fill="#B0008E"
				/>
			</svg>
			</div>
		</div>
		</div>
		<div class="procedures_additional__info">
		<div class="procedures_additional__info_container">
			<div class="procedures_additional__info-img">
				<img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="" />
			</div>
			<div class="procedures_additional__info_text">
				<?if(LANGUAGE_ID === 'ru') {
					echo $arItem["DISPLAY_PROPERTIES"]["text_ru"]["~VALUE"]["TEXT"];
				} else {
					echo $arItem["DISPLAY_PROPERTIES"]["text"]["~VALUE"]["TEXT"];
				}?>
			</div>
		</div>
		<?if($arItem["DISPLAY_PROPERTIES"]["is_description"]["VALUE"]):?>
			<div class="procedures_additional__info-description">
				<?if(LANGUAGE_ID === 'ru') {
					echo $arItem["DISPLAY_PROPERTIES"]["description_ru"]["~VALUE"]["TEXT"];
				} else {
					echo $arItem["DISPLAY_PROPERTIES"]["description"]["~VALUE"]["TEXT"];
				}?>
			</div>
		<?endif;?>
		</div>
	</div>

<?endforeach;?>

	</div>
</div>

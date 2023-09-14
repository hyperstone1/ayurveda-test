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

<div class="license__advantages">

<?foreach($arResult["ITEMS"] as $arItem):?>

	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>

	<div class="license__advantages-item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
		<div class="license__advantages-title">
			<?if(LANGUAGE_ID === 'ru') {
				print_r($arItem["DISPLAY_PROPERTIES"]["name_ru"]["DISPLAY_VALUE"]);
			} else {
				echo $arItem["DISPLAY_PROPERTIES"]["name"]["~VALUE"];
			}?>
		</div>
        <div class="license__advantages-plus">
			<svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25" cy="25" r="25" fill="#C344AB" />
                <path
                  d="M22.1426 31.5043C21.987 31.5043 21.8412 31.4798 21.7051 31.4308C21.569 31.3818 21.4426 31.2994 21.3259 31.1835L16.3092 26.1668C16.0954 25.9529 15.9931 25.6756 16.0024 25.335C16.0117 24.9943 16.1237 24.7174 16.3384 24.5043C16.5523 24.2904 16.8245 24.1835 17.1551 24.1835C17.4856 24.1835 17.7579 24.2904 17.9717 24.5043L22.1426 28.6751L32.0301 18.7876C32.244 18.5737 32.5212 18.4668 32.8619 18.4668C33.2026 18.4668 33.4795 18.5737 33.6926 18.7876C33.9065 19.0015 34.0134 19.2788 34.0134 19.6195C34.0134 19.9601 33.9065 20.237 33.6926 20.4501L22.9592 31.1835C22.8426 31.3001 22.7162 31.383 22.5801 31.432C22.444 31.481 22.2981 31.5051 22.1426 31.5043Z"
                  fill="white"
                />
            </svg>
        </div>
    </div>

<?endforeach;?>

</div>

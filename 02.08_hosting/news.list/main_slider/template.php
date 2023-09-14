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

<div class="home__wrapper container">

	<div class="home__wrapper_info">
		<div class="home__wrapper_info-title">
			<p class="ayurveda">AYURVEDA</p>
			<p class="bhavan">BHAVAN</p>
		</div>
		<div class="home__wrapper_info-subtitle"><?=GetMessage("CT_BNL_ayurvedic_clinic_in_the_himalayas")?></div>
		<div class="home__wrapper_info-img">
			<img src="<?=SITE_TEMPLATE_PATH?>/images/home/home_clinic.webp" alt="clinic" />
		</div>
		<div class="home__wrapper_slider">
            <div class="home__slider swiper-container">
            	<div class="services__list_wrapper">

				<?foreach($arResult["ITEMS"] as $arItem):?>

					<?
					$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
					$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
					?>

					<div class="services__item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
						<div class="services__item-category">
							<?if(LANGUAGE_ID === 'ru') {
								echo $arItem["DISPLAY_PROPERTIES"]["text_ru"]["~VALUE"]["TEXT"];
							} else {
								echo $arItem["DISPLAY_PROPERTIES"]["text_en"]["~VALUE"]["TEXT"];
							}?>
						</div>
					</div>

				<?endforeach;?>
				
				</div>
            	<div class="home__slider-pagination"></div>
              	<a href="/<?=LANGUAGE_ID?>/booking/" class="services__item-booking"><?=GetMessage("CT_BNL_services_item_booking")?></a>
            </div>
        </div>
	</div>

	<div class="wrapper__img">
		<div class="home__slider-navigation"></div>
        <div class="wrapper__img-slider">
            <div class="wrapper__slider swiper-container">
              	<div class="swiper-wrapper">

				<?foreach($arResult["ITEMS"] as $arItem):?>

					<?
					$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
					$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
					?>

					<div class="swiper-slide" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                  		<img 
							src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>"
							alt="<?=$arItem["PREVIEW_PICTURE"]["ALT"]?>"
						/>
                	</div>

				<?endforeach;?>

				</div>
            </div>
        </div>
	</div>
</div>
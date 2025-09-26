<?php

  $ev_bike_shop_theme_custom_setting_css = '';

	// Global Color
	$ev_bike_shop_theme_color = get_theme_mod('ev_bike_shop_theme_color', '#3EB489');

	$ev_bike_shop_theme_custom_setting_css .=':root {';
		$ev_bike_shop_theme_custom_setting_css .='--primary-theme-color: '.esc_attr($ev_bike_shop_theme_color ).'!important;';
	$ev_bike_shop_theme_custom_setting_css .='}';

	// Scroll to top alignment
	$ev_bike_shop_scroll_alignment = get_theme_mod('ev_bike_shop_scroll_alignment', 'right');

    if($ev_bike_shop_scroll_alignment == 'right'){
        $ev_bike_shop_theme_custom_setting_css .='.scroll-up{';
            $ev_bike_shop_theme_custom_setting_css .='right: 30px;!important;';
			$ev_bike_shop_theme_custom_setting_css .='left: auto;!important;';
        $ev_bike_shop_theme_custom_setting_css .='}';
    }else if($ev_bike_shop_scroll_alignment == 'center'){
        $ev_bike_shop_theme_custom_setting_css .='.scroll-up{';
            $ev_bike_shop_theme_custom_setting_css .='left: calc(50% - 10px) !important;';
        $ev_bike_shop_theme_custom_setting_css .='}';
    }else if($ev_bike_shop_scroll_alignment == 'left'){
        $ev_bike_shop_theme_custom_setting_css .='.scroll-up{';
            $ev_bike_shop_theme_custom_setting_css .='left: 30px;!important;';
			$ev_bike_shop_theme_custom_setting_css .='right: auto;!important;';
        $ev_bike_shop_theme_custom_setting_css .='}';
    }

	// Related Product

	$ev_bike_shop_show_related_product = get_theme_mod('ev_bike_shop_show_related_product', true );

	if($ev_bike_shop_show_related_product != true){
		$ev_bike_shop_theme_custom_setting_css .='.related.products{';
			$ev_bike_shop_theme_custom_setting_css .='display: none;';
		$ev_bike_shop_theme_custom_setting_css .='}';
	}    
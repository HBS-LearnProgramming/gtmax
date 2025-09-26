<?php

class Whizzie {

	public function __construct() {
		$this->init();
	}

	public function init()
	{
	
	}

	public static function ev_bike_shop_setup_widgets(){

		set_theme_mod( 'ev_bike_shop_header_advertisement_text', 'Stay Updated With Our Latest News' );
		set_theme_mod( 'ev_bike_shop_header_email', 'info@example.com' );
		set_theme_mod( 'ev_bike_shop_header_phone_number', '+123456789' );
		set_theme_mod( 'ev_bike_shop_details_button_text', 'More Details' );
		set_theme_mod( 'ev_bike_shop_details_button_url', '#' );
		set_theme_mod( 'ev_bike_shop_header_button_text', 'BOOK NOW' );
		set_theme_mod( 'ev_bike_shop_header_button_url', '#' );

	}
}
 
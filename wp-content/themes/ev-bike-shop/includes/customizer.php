<?php

if ( class_exists("Kirki")){

	Kirki::add_config('theme_config_id', array(
		'capability'   =>  'edit_theme_options',
		'option_type'  =>  'theme_mod',
	));

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'slider',
		'settings'    => 'ev_bike_shop_logo_resizer',
		'label'       => esc_html__( 'Adjust Logo Size', 'ev-bike-shop' ),
		'section'     => 'title_tagline',
		'default'     => 70,
		'choices'     => [
			'min'  => 10,
			'max'  => 300,
			'step' => 10,
		],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_enable_logo_text',
		'section'     => 'title_tagline',
		'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Enable / Disable Site Title and Tagline', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

  	Kirki::add_field( 'theme_config_id', [
		'type'        => 'switch',
		'settings'    => 'ev_bike_shop_display_header_title',
		'label'       => esc_html__( 'Site Title Enable / Disable Button', 'ev-bike-shop' ),
		'section'     => 'title_tagline',
		'default'     => '1',
		'priority'    => 10,
		'choices'     => [
			'on'  => esc_html__( 'Enable', 'ev-bike-shop' ),
			'off' => esc_html__( 'Disable', 'ev-bike-shop' ),
		],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'switch',
		'settings'    => 'ev_bike_shop_display_header_text',
		'label'       => esc_html__( 'Tagline Enable / Disable Button', 'ev-bike-shop' ),
		'section'     => 'title_tagline',
		'default'     => '0',
		'priority'    => 10,
		'choices'     => [
			'on'  => esc_html__( 'Enable', 'ev-bike-shop' ),
			'off' => esc_html__( 'Disable', 'ev-bike-shop' ),
		],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_site_tittle_font_heading',
		'section'     => 'title_tagline',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Site Title Font Size', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'settings'    => 'ev_bike_shop_site_tittle_font_size',
		'type'        => 'number',
		'section'     => 'title_tagline',
		'transport' => 'auto',
		'output' => array(
			array(
				'element'  => array('.logo a'),
				'property' => 'font-size',
				'suffix' => 'px'
			),
		),
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_site_tittle_transform_heading',
		'section'     => 'title_tagline',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Site Title Text Transform', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'        => 'select',
		'settings'    => 'ev_bike_shop_site_tittle_transform',
		'section'     => 'title_tagline',
		'default'     => 'capitalize',
		'choices'     => [
			'none' => esc_html__( 'Normal', 'ev-bike-shop' ),
			'uppercase' => esc_html__( 'Uppercase', 'ev-bike-shop' ),
			'lowercase' => esc_html__( 'Lowercase', 'ev-bike-shop' ),
			'capitalize' => esc_html__( 'Capitalize', 'ev-bike-shop' ),
		],
		'output' => array(
			array(
				'element'  => array( '.logo a'),
				'property' => ' text-transform',
			),
		),
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_site_tagline_font_heading',
		'section'     => 'title_tagline',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Site Tagline Font Size', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'settings'    => 'ev_bike_shop_site_tagline_font_size',
		'type'        => 'number',
		'section'     => 'title_tagline',
		'transport' => 'auto',
		'output' => array(
			array(
				'element'  => array('.logo span'),
				'property' => 'font-size',
				'suffix' => 'px'
			),
		),
	) );

	Kirki::add_field( 'theme_config_id', array(
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_logo_settings_premium_features',
		'section'     => 'title_tagline',
		'priority'    => 50,
		'default'     => '<h3 style="color: #2271b1; padding:5px 20px 5px 20px; background:#fff; margin:0;  box-shadow: 0 2px 4px rgba(0,0,0, .2); ">' . esc_html__( 'Unlock More Features in the Premium Version!', 'ev-bike-shop' ) . '</h3><ul style="color: #121212; padding: 5px 20px 20px 30px; background:#fff; margin:0;" ><li style="list-style-type: square;" >' . esc_html__( 'Customizable Text Logo', 'ev-bike-shop' ) . '</li><li style="list-style-type: square;" >'.esc_html__( 'Enhanced Typography Options', 'ev-bike-shop' ) .'</li><li style="list-style-type: square;" >'.esc_html__( 'Priority Support', 'ev-bike-shop' ) .'</li><li style="list-style-type: square;" >'.esc_html__( '....and Much More', 'ev-bike-shop' ) . '</li></ul><div style="background: #fff; padding: 0px 10px 10px 20px;"><a href="' . esc_url( __( 'https://www.wpelemento.com/products/bike-shop-wordpress-theme', 'ev-bike-shop' ) ) . '" class="button button-primary" target="_blank">'. esc_html__( 'Upgrade for more', 'ev-bike-shop' ) .'</a></div>',
	) );

	// Theme color

	Kirki::add_section( 'ev_bike_shop_theme_color_setting', array(
		'title'    => __( 'Color Option', 'ev-bike-shop' ),
		'priority' => 10,
	) );

	Kirki::add_field( 'theme_config_id', array(
		'settings'    => 'ev_bike_shop_theme_color',
		'label'       => __( 'Theme color', 'ev-bike-shop'),
		'description'    => esc_html__( 'To customize the colors of the homepage, use the Elementor editor', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_theme_color_setting',
		'type'        => 'color',
		'default'     => '#3EB489',
	) );

	// TYPOGRAPHY SETTINGS
	Kirki::add_panel( 'ev_bike_shop_typography_panel', array(
		'priority' => 10,
		'title'    => __( 'Typography', 'ev-bike-shop' ),
	) );

	//Heading 1 Section

	Kirki::add_section( 'ev_bike_shop_h1_typography_setting', array(
		'title'    => __( 'Heading 1', 'ev-bike-shop' ),
		'panel'    => 'ev_bike_shop_typography_panel',
		'priority' => 0,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_h1_typography_heading',
		'section'     => 'ev_bike_shop_h1_typography_setting',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Heading 1 Typography', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'  =>  'typography',
		'settings'  => 'ev_bike_shop_h1_typography_font',
		'section'   =>  'ev_bike_shop_h1_typography_setting',
		'default'   =>  [
			'font-family'   =>  "'Figtree', sans-serif",
			'variant'       =>  '700',
			'font-size'       => '',
			'line-height'   =>  '',
			'letter-spacing'    =>  '',
			'text-transform'    =>  '',
		],
		'transport'     =>  'auto',
		'output'        =>  [
			[
				'element'   =>  'h1',
				'suffix' => '!important'
			],
		],
	) );


	//Heading 2 Section

	Kirki::add_section( 'ev_bike_shop_h2_typography_setting', array(
		'title'    => __( 'Heading 2', 'ev-bike-shop' ),
		'panel'    => 'ev_bike_shop_typography_panel',
		'priority' => 0,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_h2_typography_heading',
		'section'     => 'ev_bike_shop_h2_typography_setting',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Heading 2 Typography', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'  =>  'typography',
		'settings'  => 'ev_bike_shop_h2_typography_font',
		'section'   =>  'ev_bike_shop_h2_typography_setting',
		'default'   =>  [
			'font-family'   =>  "'Figtree', sans-serif",
			'font-size'       => '',
			'variant'       =>  '700',
			'line-height'   =>  '',
			'letter-spacing'    =>  '',
			'text-transform'    =>  '',
		],
		'transport'     =>  'auto',
		'output'        =>  [
			[
				'element'   =>  'h2',
				'suffix' => '!important'
			],
		],
	) );

	//Heading 3 Section

	Kirki::add_section( 'ev_bike_shop_h3_typography_setting', array(
		'title'    => __( 'Heading 3', 'ev-bike-shop' ),
		'panel'    => 'ev_bike_shop_typography_panel',
		'priority' => 0,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_h3_typography_heading',
		'section'     => 'ev_bike_shop_h3_typography_setting',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Heading 3 Typography', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'  =>  'typography',
		'settings'  => 'ev_bike_shop_h3_typography_font',
		'section'   =>  'ev_bike_shop_h3_typography_setting',
		'default'   =>  [
			'font-family'   =>  "'Figtree', sans-serif",
			'variant'       =>  '700',
			'font-size'       => '',
			'line-height'   =>  '',
			'letter-spacing'    =>  '',
			'text-transform'    =>  '',
		],
		'transport'     =>  'auto',
		'output'        =>  [
			[
				'element'   =>  'h3',
				'suffix' => '!important'
			],
		],
	) );

	//Heading 4 Section

	Kirki::add_section( 'ev_bike_shop_h4_typography_setting', array(
		'title'    => __( 'Heading 4', 'ev-bike-shop' ),
		'panel'    => 'ev_bike_shop_typography_panel',
		'priority' => 0,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_h4_typography_heading',
		'section'     => 'ev_bike_shop_h4_typography_setting',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Heading 4 Typography', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'  =>  'typography',
		'settings'  => 'ev_bike_shop_h4_typography_font',
		'section'   =>  'ev_bike_shop_h4_typography_setting',
		'default'   =>  [
			'font-family'   =>  "'Figtree', sans-serif",
			'variant'       =>  '700',
			'font-size'       => '',
			'line-height'   =>  '',
			'letter-spacing'    =>  '',
			'text-transform'    =>  '',
		],
		'transport'     =>  'auto',
		'output'        =>  [
			[
				'element'   =>  'h4',
				'suffix' => '!important'
			],
		],
	) );

	//Heading 5 Section

	Kirki::add_section( 'ev_bike_shop_h5_typography_setting', array(
		'title'    => __( 'Heading 5', 'ev-bike-shop' ),
		'panel'    => 'ev_bike_shop_typography_panel',
		'priority' => 0,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_h5_typography_heading',
		'section'     => 'ev_bike_shop_h5_typography_setting',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Heading 5 Typography', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'  =>  'typography',
		'settings'  => 'ev_bike_shop_h5_typography_font',
		'section'   =>  'ev_bike_shop_h5_typography_setting',
		'default'   =>  [
			'font-family'   =>  "'Figtree', sans-serif",
			'variant'       =>  '700',
			'font-size'       => '',
			'line-height'   =>  '',
			'letter-spacing'    =>  '',
			'text-transform'    =>  '',
		],
		'transport'     =>  'auto',
		'output'        =>  [
			[
				'element'   =>  'h5',
				'suffix' => '!important'
			],
		],
	) );

	//Heading 6 Section

	Kirki::add_section( 'ev_bike_shop_h6_typography_setting', array(
		'title'    => __( 'Heading 6', 'ev-bike-shop' ),
		'panel'    => 'ev_bike_shop_typography_panel',
		'priority' => 0,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_h6_typography_heading',
		'section'     => 'ev_bike_shop_h6_typography_setting',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Heading 6 Typography', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'  =>  'typography',
		'settings'  => 'ev_bike_shop_h6_typography_font',
		'section'   =>  'ev_bike_shop_h6_typography_setting',
		'default'   =>  [
			'font-family'   =>  "'Figtree', sans-serif",
			'variant'       =>  '700',
			'font-size'       => '',
			'line-height'   =>  '',
			'letter-spacing'    =>  '',
			'text-transform'    =>  '',
		],
		'transport'     =>  'auto',
		'output'        =>  [
			[
				'element'   =>  'h6',
				'suffix' => '!important'
			],
		],
	) );

	//body Typography

	Kirki::add_section( 'ev_bike_shop_body_typography_setting', array(
		'title'    => __( 'Content Typography', 'ev-bike-shop' ),
		'panel'    => 'ev_bike_shop_typography_panel',
		'priority' => 0,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_body_typography_heading',
		'section'     => 'ev_bike_shop_body_typography_setting',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Content  Typography', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'  =>  'typography',
		'settings'  => 'ev_bike_shop_body_typography_font',
		'section'   =>  'ev_bike_shop_body_typography_setting',
		'default'   =>  [
			'font-family'   =>  "'Figtree', sans-serif",
			'variant'       =>  '',
		],
		'transport'     =>  'auto',
		'output'        =>  [
			[
				'element'   => 'body',
				'suffix' => '!important'
			],
		],
	) );

	// Theme Options Panel
	Kirki::add_panel( 'ev_bike_shop_theme_options_panel', array(
		'priority' => 10,
		'title'    => __( 'Theme Options', 'ev-bike-shop' ),
	) );

	// HEADER SECTION

	Kirki::add_section( 'ev_bike_shop_section_header',array(
		'title' => esc_html__( 'Header Settings', 'ev-bike-shop' ),
		'description'    => esc_html__( 'Here you can add header information.', 'ev-bike-shop' ),
		'panel' => 'ev_bike_shop_theme_options_panel',
		'tabs'  => [
			'header' => [
				'label' => esc_html__( 'Header', 'ev-bike-shop' ),
			],
			'menu'  => [
				'label' => esc_html__( 'Menu', 'ev-bike-shop' ),
			],
		],
		'priority'       => 160,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'switch',
		'tab'      => 'header',
		'settings'    => 'ev_bike_shop_sticky_header',
		'label'       => esc_html__( 'Enable/Disable Sticky Header', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_section_header',
		'default'     => 'on',
		'priority'    => 10,
		'choices'     => [
			'on'  => esc_html__( 'Enable', 'ev-bike-shop' ),
			'off' => esc_html__( 'Disable', 'ev-bike-shop' ),
		],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'menu',
		'settings'    => 'ev_bike_shop_menu_size_heading',
		'section'     => 'ev_bike_shop_section_header',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Menu Font Size(px)', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'settings'    => 'ev_bike_shop_menu_size',
		'label'       => __( 'Enter a value in pixels. Example:20px', 'ev-bike-shop' ),
		'type'        => 'text',
		'tab'      => 'menu',
		'section'     => 'ev_bike_shop_section_header',
		'transport' => 'auto',
		'output' => array(
			array(
				'element'  => array( '#main-menu a', '#main-menu ul li a', '#main-menu li a'),
				'property' => 'font-size',
			),
		),
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'menu',
		'settings'    => 'ev_bike_shop_menu_text_transform_heading',
		'section'     => 'ev_bike_shop_section_header',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Menu Text Transform', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'        => 'select',
		'tab'      => 'menu',
		'settings'    => 'ev_bike_shop_menu_text_transform',
		'section'     => 'ev_bike_shop_section_header',
		'default'     => 'uppercase',
		'choices'     => [
			'none' => esc_html__( 'Normal', 'ev-bike-shop' ),
			'uppercase' => esc_html__( 'Uppercase', 'ev-bike-shop' ),
			'lowercase' => esc_html__( 'Lowercase', 'ev-bike-shop' ),
			'capitalize' => esc_html__( 'Capitalize', 'ev-bike-shop' ),
		],
		'output' => array(
			array(
				'element'  => array( '#main-menu a', '#main-menu ul li a', '#main-menu li a'),
				'property' => ' text-transform',
			),
		),
	 ) );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'tab'      => 'header',
		'label'    => esc_html__( 'Advertisement Text', 'ev-bike-shop' ),
		'settings' => 'ev_bike_shop_header_advertisement_text',
		'section'  => 'ev_bike_shop_section_header',
		'default'  => '',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'header',
		'settings'    => 'ev_bike_shop_header_phone_number_heading',
		'section'     => 'ev_bike_shop_section_header',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Add Phone Number', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'tab'      => 'header',
		'settings' => 'ev_bike_shop_header_phone_number',
		'section'  => 'ev_bike_shop_section_header',
		'default'  => '',
		'sanitize_callback' => 'ev_bike_shop_sanitize_phone_number',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'header',
		'settings'    => 'ev_bike_shop_enable_email_heading',
		'section'     => 'ev_bike_shop_section_header',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Add Email Address', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'tab'      => 'header',
		'settings' => 'ev_bike_shop_header_email',
		'section'  => 'ev_bike_shop_section_header',
		'default'  => '',
		'sanitize_callback' => 'sanitize_email',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'header',
		'settings'    => 'ev_bike_shop_enable_button_heading',
		'section'     => 'ev_bike_shop_section_header',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Book Now Button', 'ev-bike-shop' ) . '</h3>',
	] );


	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'tab'      => 'header',
		'label'    => esc_html__( 'Button Text', 'ev-bike-shop' ),
		'settings' => 'ev_bike_shop_header_button_text',
		'section'  => 'ev_bike_shop_section_header',
		'default'  => '',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'url',
		'tab'      => 'header',
		'label'    =>  esc_html__( 'Button Link', 'ev-bike-shop' ),
		'settings' => 'ev_bike_shop_header_button_url',
		'section'  => 'ev_bike_shop_section_header',
		'default'  => '',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'header',
		'settings'    => 'ev_bike_shop_details_button_heading',
		'section'     => 'ev_bike_shop_section_header',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'More Details Button', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'tab'      => 'header',
		'label'    => esc_html__( 'Button Text', 'ev-bike-shop' ),
		'settings' => 'ev_bike_shop_details_button_text',
		'section'  => 'ev_bike_shop_section_header',
		'default'  => '',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'url',
		'tab'      => 'header',
		'label'    =>  esc_html__( 'Button Link', 'ev-bike-shop' ),
		'settings' => 'ev_bike_shop_details_button_url',
		'section'  => 'ev_bike_shop_section_header',
		'default'  => '',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'        => 'custom',
		'tab'      => 'header',
		'settings'    => 'ev_bike_shop_logo_settings_premium_features_header',
		'section'     => 'ev_bike_shop_section_header',
		'priority'    => 50,
		'default'     => '<h3 style="color: #2271b1; padding:5px 20px 5px 20px; background:#fff; margin:0;  box-shadow: 0 2px 4px rgba(0,0,0, .2); ">' . esc_html__( 'Enhance your header design now!', 'ev-bike-shop' ) . '</h3><ul style="color: #121212; padding: 5px 20px 20px 30px; background:#fff; margin:0;" ><li style="list-style-type: square;" >' . esc_html__( 'Customize your header background color', 'ev-bike-shop' ) . '</li><li style="list-style-type: square;" >'.esc_html__( 'Adjust icon and text font sizes', 'ev-bike-shop' ) .'</li><li style="list-style-type: square;" >'.esc_html__( 'Explore enhanced typography options', 'ev-bike-shop' ) .'</li><li style="list-style-type: square;" >'.esc_html__( '....and Much More', 'ev-bike-shop' ) . '</li></ul><div style="background: #fff; padding: 0px 10px 10px 20px;"><a href="' . esc_url( __( 'https://www.wpelemento.com/products/bike-shop-wordpress-theme', 'ev-bike-shop' ) ) . '" class="button button-primary" target="_blank">'. esc_html__( 'Upgrade for more', 'ev-bike-shop' ) .'</a></div>',
	) );

	// WOOCOMMERCE SETTINGS

	Kirki::add_section( 'ev_bike_shop_woocommerce_settings', array(
		'title'          => esc_html__( 'Woocommerce Settings', 'ev-bike-shop' ),
		'description'    => esc_html__( 'Woocommerce Settings of themes', 'ev-bike-shop' ),
		'panel'    => 'woocommerce',
		'priority'       => 160,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'settings'    => 'ev_bike_shop_shop_page_sidebar',
		'label'       => esc_html__( 'Enable/Disable Shop Page Sidebar', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_woocommerce_settings',
		'default'     => 'true',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'        => 'select',
		'label'       => esc_html__( 'Shop Page Layouts', 'ev-bike-shop' ),
		'settings'    => 'ev_bike_shop_shop_page_layout',
		'section'     => 'ev_bike_shop_woocommerce_settings',
		'default'     => 'Right Sidebar',
		'choices'     => [
			'Right Sidebar' => esc_html__( 'Right Sidebar', 'ev-bike-shop' ),
			'Left Sidebar' => esc_html__( 'Left Sidebar', 'ev-bike-shop' ),
		],
		'active_callback'  => [
			[
				'setting'  => 'ev_bike_shop_shop_page_sidebar',
				'operator' => '===',
				'value'    => true,
			],
		]

	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'select',
		'label'       => esc_html__( 'Products Per Row', 'ev-bike-shop' ),
		'settings'    => 'ev_bike_shop_products_per_row',
		'section'     => 'ev_bike_shop_woocommerce_settings',
		'default'     => '3',
		'priority'    => 10,
		'choices'     => [
			'2' => '2',
			'3' => '3',
			'4' => '4',
		],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'number',
		'label'       => esc_html__( 'Products Per Page', 'ev-bike-shop' ),
		'settings'    => 'ev_bike_shop_products_per_page',
		'section'     => 'ev_bike_shop_woocommerce_settings',
		'default'     => '9',
		'priority'    => 10,
		'choices'  => [
					'min'  => 0,
					'max'  => 50,
					'step' => 1,
				],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'settings'    => 'ev_bike_shop_single_product_sidebar',
		'label'       => esc_html__( 'Enable / Disable Single Product Sidebar', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_woocommerce_settings',
		'default'     => 'true',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'        => 'select',
		'label'       => esc_html__( 'Single Product Layout', 'ev-bike-shop' ),
		'settings'    => 'ev_bike_shop_single_product_sidebar_layout',
		'section'     => 'ev_bike_shop_woocommerce_settings',
		'default'     => 'Right Sidebar',
		'choices'     => [
			'Right Sidebar' => esc_html__( 'Right Sidebar', 'ev-bike-shop' ),
			'Left Sidebar' => esc_html__( 'Left Sidebar', 'ev-bike-shop' ),
		],
		'active_callback'  => [
			[
				'setting'  => 'ev_bike_shop_single_product_sidebar',
				'operator' => '===',
				'value'    => true,
			],
		]
	) );
	
	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_show_related_product_heading',
		'section'     => 'ev_bike_shop_woocommerce_settings',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Related Product', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'settings'    => 'ev_bike_shop_show_related_product',
		'label'       => esc_html__( 'Enable or Disable Related Product', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_woocommerce_settings',
		'default'     => true,
		'priority'    => 10,
	] );

	//ADDITIONAL SETTINGS

	Kirki::add_section( 'ev_bike_shop_additional_setting',array(
		'title' => esc_html__( 'Additional Settings', 'ev-bike-shop' ),
		'panel' => 'ev_bike_shop_theme_options_panel',
		'tabs'  => [
			'general' => [
				'label' => esc_html__( 'General', 'ev-bike-shop' ),
			],
			'header-image'  => [
				'label' => esc_html__( 'Header Image', 'ev-bike-shop' ),
			],
		],
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'settings'    => 'ev_bike_shop_preloader_hide',
		'label'       => esc_html__( 'Here you can enable or disable your preloader.', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => '0',
		'priority'    => 10,
		'tab'      => 'general',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'settings'    => 'ev_bike_shop_scroll_enable_setting',
		'label'       => esc_html__( 'Here you can enable or disable your scroller.', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => '0',
		'tab'      => 'general',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'general',
		'settings'    => 'ev_bike_shop_scroll_alignment_heading',
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Scroll To Top Position', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'        => 'radio-buttonset',
		'tab'      => 'general',
		'settings'    => 'ev_bike_shop_scroll_alignment',
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => 'right',
		'choices'     => [
			'left' => esc_html__( 'left', 'ev-bike-shop' ),
			'center' => esc_html__( 'center', 'ev-bike-shop' ),
			'right' => esc_html__( 'right', 'ev-bike-shop' ),
		]
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'general',
		'settings'    => 'ev_bike_shop_scroller_border_radius_heading',
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Scroll To Top Border Radius', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'        => 'slider',
		'tab'      => 'general',
		'settings'    => 'ev_bike_shop_scroller_border_radius',
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => '3',
		'choices'     => [
			'min'  => 0,
			'max'  => 25,
			'step' => 1,
		],
		'output' => array(
			array(
				'element'  => '.scroll-up a',
				'property' => 'border-radius',
				'units' => 'px',
			),
		),
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'general',
		'settings'    => 'ev_bike_shop_cursor_outline_heading',
		'section'     => 'ev_bike_shop_additional_setting',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Dot Cursor', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'general',
		'settings'    => 'ev_bike_shop_cursor_outline',
		'label'       => esc_html__( 'Enable or Disable Dot Cursor', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => false,
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'general',
		'settings'    => 'ev_bike_shop_progress_bar_heading',
		'section'     => 'ev_bike_shop_additional_setting',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Progress Bar', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'general',
		'settings'    => 'ev_bike_shop_progress_bar',
		'label'       => esc_html__( 'Enable or Disable Progress Bar', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => true,
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'general',
		'settings'    => 'ev_bike_shop_progress_bar_position_heading',
		'section'     => 'ev_bike_shop_additional_setting',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Progress Bar Position', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
		'active_callback'  => [
			[
				'setting'  => 'ev_bike_shop_progress_bar',
				'operator' => '===',
				'value'    => true,
			],
		]
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'        => 'select',
		'tab'      => 'general',
		'settings'    => 'ev_bike_shop_progress_bar_position',
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => 'top',
		'choices'     => [
			'top' => esc_html__( 'Top', 'ev-bike-shop' ),
			'bottom' => esc_html__( 'Bottom', 'ev-bike-shop' ),
		],
		'active_callback'  => [
			[
				'setting'  => 'ev_bike_shop_progress_bar',
				'operator' => '===',
				'value'    => true,
			],
		]
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'general',
		'settings'    => 'ev_bike_shop_progress_bar_color_heading',
		'section'     => 'ev_bike_shop_additional_setting',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Progress Bar Color', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
		'active_callback'  => [
			[
				'setting'  => 'ev_bike_shop_progress_bar',
				'operator' => '===',
				'value'    => true,
			],
		]
	] );

	Kirki::add_field( 'theme_config_id', array(
		'settings'    => 'ev_bike_shop_progress_bar_color',
		'tab'      => 'general',
		'label'       => __( 'Color', 'ev-bike-shop' ),
		'type'        => 'color',
		'section'     => 'ev_bike_shop_additional_setting',
		'transport' => 'auto',
		'default'     => '#3EB489',
		'choices'     => [
			'alpha' => true,
		],
		'output' => array(
			array(
				'element'  => '#elemento-progress-bar',
				'property' => 'background-color',
			),
		),
		'active_callback'  => [
			[
				'setting'  => 'ev_bike_shop_progress_bar',
				'operator' => '===',
				'value'    => true,
			],
		]
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'general',
		'settings'    => 'ev_bike_shop_single_page_layout_heading',
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Single Page Layout', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'        => 'select',
		'tab'      => 'general',
		'settings'    => 'ev_bike_shop_single_page_layout',
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => 'One Column',
		'choices'     => [
			'Left Sidebar' => esc_html__( 'Left Sidebar', 'ev-bike-shop' ),
			'Right Sidebar' => esc_html__( 'Right Sidebar', 'ev-bike-shop' ),
			'One Column' => esc_html__( 'One Column', 'ev-bike-shop' ),
		],
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'header-image',
		'settings'    => 'ev_bike_shop_header_background_attachment_heading',
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Header Image Attachment', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'        => 'select',
		'tab'      => 'header-image',
		'settings'    => 'ev_bike_shop_header_background_attachment',
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => 'scroll',
		'choices'     => [
			'scroll' => esc_html__( 'Scroll', 'ev-bike-shop' ),
			'fixed' => esc_html__( 'Fixed', 'ev-bike-shop' ),
		],
		'output' => array(
			array(
				'element'  => '.header-image-box',
				'property' => 'background-attachment',
			),
		),
	 ) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'header-image',
		'settings'    => 'ev_bike_shop_header_image_height_heading',
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Header Image height', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'settings'    => 'ev_bike_shop_header_image_height',
		'label'       => __( 'Image Height', 'ev-bike-shop' ),
		'description'    => esc_html__( 'Enter a value in pixels. Example:500px', 'ev-bike-shop' ),
		'type'        => 'text',
		'tab'      => 'header-image',
		'default'    => [
			'desktop' => '550px',
			'tablet'  => '350px',
			'mobile'  => '200px',
		],
		'responsive' => true,
		'section'     => 'ev_bike_shop_additional_setting',
		'transport' => 'auto',
		'output' => array(
			array(
				'element'  => array('.header-image-box'),
				'property' => 'height',
				'media_query' => [
					'desktop' => '@media (min-width: 1024px)',
					'tablet'  => '@media (min-width: 768px) and (max-width: 1023px)',
					'mobile'  => '@media (max-width: 767px)',
				],
			),
		),
	) );

	 Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'header-image',
		'settings'    => 'ev_bike_shop_header_overlay_heading',
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Header Image Overlay', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'settings'    => 'ev_bike_shop_header_overlay_setting',
		'label'       => __( 'Overlay Color', 'ev-bike-shop' ),
		'type'        => 'color',
		'tab'      => 'header-image',
		'section'     => 'ev_bike_shop_additional_setting',
		'transport' => 'auto',
		'default'     => '#00000000',
		'choices'     => [
			'alpha' => true,
		],
		'output' => array(
			array(
				'element'  => '.header-image-box:before',
				'property' => 'background',
			),
		),
	) );

	 Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'header-image',
		'settings'    => 'ev_bike_shop_header_page_title',
		'label'       => esc_html__( 'Enable / Disable Header Image Page Title.', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => '1',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'header-image',
		'settings'    => 'ev_bike_shop_header_breadcrumb',
		'label'       => esc_html__( 'Enable / Disable Header Image Breadcrumb.', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_additional_setting',
		'default'     => '1',
		'priority'    => 10,
	] );

	// POST SECTION

	Kirki::add_section( 'ev_bike_shop_blog_post',array(
		'title' => esc_html__( 'Post Settings', 'ev-bike-shop' ),
		'description'    => esc_html__( 'Here you can add post information.', 'ev-bike-shop' ),
		'panel' => 'ev_bike_shop_theme_options_panel',
		'tabs'  => [
			'blog-post' => [
				'label' => esc_html__( 'Blog Post', 'ev-bike-shop' ),
			],
			'single-post'  => [
				'label' => esc_html__( 'Single Post', 'ev-bike-shop' ),
			],
		],
		'priority'       => 160,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'blog-post',
		'settings'    => 'ev_bike_shop_enable_post_animation_heading',
		'section'     => 'ev_bike_shop_blog_post',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Animation', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'blog-post',
		'settings'    => 'ev_bike_shop_enable_post_animation',
		'label'       => esc_html__( 'Enable or Disable Blog Post Animation', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => true,
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'blog-post',
		'settings'    => 'ev_bike_shop_post_layout_heading',
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Blog Layout', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'        => 'select',
		'tab'      => 'blog-post',
		'settings'    => 'ev_bike_shop_post_layout',
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => 'Right Sidebar',
		'choices'     => [
			'Left Sidebar' => esc_html__( 'Left Sidebar', 'ev-bike-shop' ),
			'Right Sidebar' => esc_html__( 'Right Sidebar', 'ev-bike-shop' ),
			'One Column' => esc_html__( 'One Column', 'ev-bike-shop' ),
			'Three Columns' => esc_html__( 'Three Columns', 'ev-bike-shop' ),
			'Four Columns' => esc_html__( 'Four Columns', 'ev-bike-shop' ),
		],
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'blog-post',
		'settings'    => 'ev_bike_shop_date_hide',
		'label'       => esc_html__( 'Enable / Disable Post Date', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => '1',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'blog-post',
		'settings'    => 'ev_bike_shop_author_hide',
		'label'       => esc_html__( 'Enable / Disable Post Author', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => '1',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'blog-post',
		'settings'    => 'ev_bike_shop_comment_hide',
		'label'       => esc_html__( 'Enable / Disable Post Comment', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => '1',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'blog-post',
		'settings'    => 'ev_bike_shop_blog_post_featured_image',
		'label'       => esc_html__( 'Enable / Disable Post Image', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => '1',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'blog-post',
		'settings'    => 'ev_bike_shop_length_setting_heading',
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Blog Post Content Limit', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'number',
		'tab'      	  => 'blog-post',
		'settings'    => 'ev_bike_shop_length_setting',
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => '15',
		'priority'    => 10,
		'choices'  => [
					'min'  => -10,
					'max'  => 40,
		 			'step' => 1,
				],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'blog-post',
		'settings'    => 'ev_bike_shop_show_pagination_heading',
		'section'     => 'ev_bike_shop_blog_post',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Blog Post Pagination', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'blog-post',
		'settings'    => 'ev_bike_shop_show_pagination',
		'label'       => esc_html__( 'Enable or Disable Blog Post Pagination', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => true,
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'single-post',
		'settings'    => 'ev_bike_shop_single_post_date_hide',
		'label'       => esc_html__( 'Enable / Disable Single Post Date', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => '1',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'single-post',
		'settings'    => 'ev_bike_shop_single_post_author_hide',
		'label'       => esc_html__( 'Enable / Disable Single Post Author', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => '1',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'single-post',
		'settings'    => 'ev_bike_shop_single_post_comment_hide',
		'label'       => esc_html__( 'Enable / Disable Single Post Comment', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => '1',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'single-post',
		'label'       => esc_html__( 'Enable / Disable Single Post Tag', 'ev-bike-shop' ),
		'settings'    => 'ev_bike_shop_single_post_tag',
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => '1',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'single-post',
		'label'       => esc_html__( 'Enable / Disable Single Post Category', 'ev-bike-shop' ),
		'settings'    => 'ev_bike_shop_single_post_category',
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => '1',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'single-post',
		'settings'    => 'ev_bike_shop_post_comment_show_hide',
		'label'       => esc_html__( 'Show / Hide Comment Box', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => '1',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'single-post',
		'settings'    => 'ev_bike_shop_single_post_featured_image',
		'label'       => esc_html__( 'Enable / Disable Single Post Image', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => '1',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'single-post',
		'settings'    => 'ev_bike_shop_single_post_radius',
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Single Post Image Border Radius(px)', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'settings'    => 'ev_bike_shop_single_post_border_radius',
		'label'       => __( 'Enter a value in pixels. Example:15px', 'ev-bike-shop' ),
		'type'        => 'text',
		'tab'      => 'single-post',
		'section'     => 'ev_bike_shop_blog_post',
		'transport' => 'auto',
		'output' => array(
			array(
				'element'  => array('.post-img img'),
				'property' => 'border-radius',
			),
		),
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'tab'      => 'single-post',
		'settings'    => 'ev_bike_shop_show_related_post_heading',
		'section'     => 'ev_bike_shop_blog_post',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Related post', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'tab'      => 'single-post',
		'settings'    => 'ev_bike_shop_show_related_post',
		'label'       => esc_html__( 'Enable or Disable Related post', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_blog_post',
		'default'     => true,
		'priority'    => 10,
	] );

	// No Results Page Settings

	Kirki::add_section( 'ev_bike_shop_no_result_section', array(
		'title'          => esc_html__( '404 & No Results Page Settings', 'ev-bike-shop' ),
		'panel'    => 'ev_bike_shop_theme_options_panel',
		'priority'       => 160,
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_page_not_found_title_heading',
		'section'     => 'ev_bike_shop_no_result_section',
		'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( '404 Page Title', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'settings' => 'ev_bike_shop_page_not_found_title',
		'section'  => 'ev_bike_shop_no_result_section',
		'default'  => esc_html__('404 Error!', 'ev-bike-shop'),
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_page_not_found_text_heading',
		'section'     => 'ev_bike_shop_no_result_section',
		'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( '404 Page Text', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'settings' => 'ev_bike_shop_page_not_found_text',
		'section'  => 'ev_bike_shop_no_result_section',
		'default'  => esc_html__('The page you are looking for may have been moved, deleted, or possibly never existed.', 'ev-bike-shop'),
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'     => 'custom',
		'settings' => 'ev_bike_shop_page_not_found_line_break',
		'section'  => 'ev_bike_shop_no_result_section',
		'default'  => '<hr>',
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_no_results_title_heading',
		'section'     => 'ev_bike_shop_no_result_section',
		'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'No Results Title', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'settings' => 'ev_bike_shop_no_results_title',
		'section'  => 'ev_bike_shop_no_result_section',
		'default'  => esc_html__('Nothing Found', 'ev-bike-shop'),
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_no_results_content_heading',
		'section'     => 'ev_bike_shop_no_result_section',
		'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'No Results Content', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'settings' => 'ev_bike_shop_no_results_content',
		'section'  => 'ev_bike_shop_no_result_section',
		'default'  => esc_html__('Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'ev-bike-shop'),
	] );

	// FOOTER SECTION

	Kirki::add_section( 'ev_bike_shop_footer_section', array(
        'title'          => esc_html__( 'Footer Settings', 'ev-bike-shop' ),
        'description'    => esc_html__( 'Here you can change copyright text', 'ev-bike-shop' ),
        'panel'    => 'ev_bike_shop_theme_options_panel',
		'priority'       => 160,
    ) );

    Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_show_footer_widget_heading',
		'section'     => 'ev_bike_shop_footer_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Enable / Disable', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'settings'    => 'ev_bike_shop_show_footer_widget',
		'label'       => esc_html__( 'Footer Widget', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_footer_section',
		'default'     => '1',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'settings'    => 'ev_bike_shop_show_footer_copyright',
		'label'       => esc_html__( 'Footer Copyright', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_footer_section',
		'default'     => '1',
		'priority'    => 10,
	] );

    Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_footer_text_heading',
		'section'     => 'ev_bike_shop_footer_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Footer Copyright Text', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

    Kirki::add_field( 'theme_config_id', [
		'type'     => 'text',
		'settings' => 'ev_bike_shop_footer_text',
		'section'  => 'ev_bike_shop_footer_section',
		'default'  => '',
		'priority' => 10,
	] );

    Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_footer_enable_heading',
		'section'     => 'ev_bike_shop_footer_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Enable / Disable Footer Link', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

    Kirki::add_field( 'theme_config_id', [
		'type'        => 'switch',
		'settings'    => 'ev_bike_shop_copyright_enable',
		'label'       => esc_html__( 'Section Enable / Disable', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_footer_section',
		'default'     => '1',
		'priority'    => 10,
		'choices'     => [
			'on'  => esc_html__( 'Enable', 'ev-bike-shop' ),
			'off' => esc_html__( 'Disable', 'ev-bike-shop' ),
		],
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_footer_background_widget_heading',
		'section'     => 'ev_bike_shop_footer_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Footer Widget Background', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id',
	[
		'settings'    => 'ev_bike_shop_footer_background_widget',
		'type'        => 'background',
		'section'     => 'ev_bike_shop_footer_section',
		'default'     => [
			'background-color'      => 'rgba(18,18,18,1)',
			'background-image'      => '',
			'background-repeat'     => 'no-repeat',
			'background-position'   => 'center center',
			'background-size'       => 'cover',
			'background-attachment' => 'scroll',
		],
		'transport'   => 'auto',
		'output'      => [
			[
				'element' => '.footer-widget',
			],
		],
	]);

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_footer_widget_alignment_heading',
		'section'     => 'ev_bike_shop_footer_section',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Footer Widget Alignment', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', array(
		'type'        => 'select',
		'settings'    => 'ev_bike_shop_footer_widget_alignment',
		'section'     => 'ev_bike_shop_footer_section',
		'default'     =>[
			'desktop' => 'left',
			'tablet'  => 'left',
			'mobile'  => 'center',
		],
		'responsive' => true,
		'label'       => __( 'Widget Alignment', 'ev-bike-shop' ),
		'transport' => 'auto',
		'choices'     => [
			'center' => esc_html__( 'center', 'ev-bike-shop' ),
			'right' => esc_html__( 'right', 'ev-bike-shop' ),
			'left' => esc_html__( 'left', 'ev-bike-shop' ),
		],
		'output' => array(
			array(
				'element'  => '.footer-area',
				'property' => 'text-align',
				'media_query' => [
					'desktop' => '@media (min-width: 1024px)',
					'tablet'  => '@media (min-width: 768px) and (max-width: 1023px)',
					'mobile'  => '@media (max-width: 767px)',
				],
			),
		),
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_footer_copright_color_heading',
		'section'     => 'ev_bike_shop_footer_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Copyright Background Color', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', array(
		'settings'    => 'ev_bike_shop_footer_copright_color',
		'type'        => 'color',
		'label'       => __( 'Background Color', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_footer_section',
		'transport' => 'auto',
		'default'     => '#121212',
		'choices'     => [
			'alpha' => true,
		],
		'output' => array(
			array(
				'element'  => '.footer-copyright',
				'property' => 'background',
			),
		),
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_footer_copright_text_color_heading',
		'section'     => 'ev_bike_shop_footer_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Copyright Text Color', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', array(
		'settings'    => 'ev_bike_shop_footer_copright_text_color',
		'type'        => 'color',
		'label'       => __( 'Text Color', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_footer_section',
		'transport' => 'auto',
		'default'     => '#ffffff',
		'choices'     => [
			'alpha' => true,
		],
		'output' => array(
			array(
				'element'  => array( '.footer-copyright a', '.footer-copyright p'),
				'property' => 'color',
			),
		),
	) );

	Kirki::add_field( 'theme_config_id', array(
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_logo_settings_premium_features_footer',
		'section'     => 'ev_bike_shop_footer_section',
		'priority'    => 50,
		'default'     => '<h3 style="color: #2271b1; padding:5px 20px 5px 20px; background:#fff; margin:0;  box-shadow: 0 2px 4px rgba(0,0,0, .2); ">' . esc_html__( 'Elevate your footer with premium features:', 'ev-bike-shop' ) . '</h3><ul style="color: #121212; padding: 5px 20px 20px 30px; background:#fff; margin:0;" ><li style="list-style-type: square;" >' . esc_html__( 'Tailor your footer layout', 'ev-bike-shop' ) . '</li><li style="list-style-type: square;" >'.esc_html__( 'Integrate an email subscription form', 'ev-bike-shop' ) .'</li><li style="list-style-type: square;" >'.esc_html__( 'Personalize social media icons', 'ev-bike-shop' ) .'</li><li style="list-style-type: square;" >'.esc_html__( '....and Much More', 'ev-bike-shop' ) . '</li></ul><div style="background: #fff; padding: 0px 10px 10px 20px;"><a href="' . esc_url( __( 'https://www.wpelemento.com/products/bike-shop-wordpress-theme', 'ev-bike-shop' ) ) . '" class="button button-primary" target="_blank">'. esc_html__( 'Upgrade for more', 'ev-bike-shop' ) .'</a></div>',
			
	) );

	// Footer Social Icons Section

	Kirki::add_section( 'ev_bike_shop_footer_social_media_section', array(
		'title'          => esc_html__( 'Footer Social Icons', 'ev-bike-shop' ),
		'panel'    => 'ev_bike_shop_theme_options_panel',
		'priority'       => 160,
	) );

    Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_footer_social_icon_hide_heading',
		'section'     => 'ev_bike_shop_footer_social_media_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Enable or Disable your Footer Social Icon', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'toggle',
		'settings'    => 'ev_bike_shop_footer_social_icon_hide',
		'label'       => esc_html__( 'Enable or Disable Social Icon.', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_footer_social_media_section',
		'default'     => false,
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'settings'    => 'ev_bike_shop_enable_footer_socail_link_align_heading',
		'section'     => 'ev_bike_shop_footer_social_media_section',
			'default'         => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Footer Social Media Text Align', 'ev-bike-shop' ) . '</h3>',
		'priority'    => 10,
	] );

	Kirki::add_field( 'theme_config_id', array(
		'settings'    => 'ev_bike_shop_enable_footer_socail_link_align',
		'type'        => 'select',
		'priority'    => 10,
		'label'       => __( 'Text Align', 'ev-bike-shop' ),
		'section'     => 'ev_bike_shop_footer_social_media_section',
		'default'     => 'left',
		'choices'     => [
			'center' => esc_html__( 'center', 'ev-bike-shop' ),
			'right' => esc_html__( 'right', 'ev-bike-shop' ),
			'left' => esc_html__( 'left', 'ev-bike-shop' ),
		],
		'output' => array(
			array(
				'element'  => array( '.footer-links'),
				'property' => 'text-align',
			),
		),
	) );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'custom',
		'priority'    => 10,
		'settings'    => 'ev_bike_shop_enable_footer_socail_link',
		'section'     => 'ev_bike_shop_footer_social_media_section',
		'default'     => '<h3 style="color: #2271b1; padding:10px; background:#fff; margin:0; border-left: solid 5px #2271b1; ">' . __( 'Footer Social Media Link', 'ev-bike-shop' ) . '</h3>',
	] );

	Kirki::add_field( 'theme_config_id', [
		'type'        => 'repeater',
		'priority'    => 10,
		'section'     => 'ev_bike_shop_footer_social_media_section',
		'row_label' => [
			'type'  => 'field',
			'value' => esc_html__( 'Footer Social Icons', 'ev-bike-shop' ),
			'field' => 'link_text',
		],
		'button_label' => esc_html__('Add New Social Icon', 'ev-bike-shop' ),
		'settings'     => 'ev_bike_shop_social_links_settings_footer',
		'default'      => '',
		'fields' 	   => [
			'link_text' => [
				'type'        => 'text',
				'label'       => esc_html__( 'Icon', 'ev-bike-shop' ),
				'description' => esc_html__( 'Add the fontawesome class ex: "fab fa-facebook-f".', 'ev-bike-shop' ). ' <a href="https://fontawesome.com/search?o=r&m=free&f=brands" target="_blank"><strong>' . esc_html__( 'View All', 'ev-bike-shop' ) . ' </strong></a>',
				'default'     => '',
			],
			'link_url' => [
				'type'        => 'url',
				'label'       => esc_html__( 'Social Link', 'ev-bike-shop' ),
				'description' => esc_html__( 'Add the social icon url here.', 'ev-bike-shop' ),
				'default'     => '',
			],
		],
		'choices' => [
			'limit' => 20
		],
	] );	

}
<?php
//about theme info
add_action( 'admin_menu', 'ev_bike_shop_gettingstarted' );
function ev_bike_shop_gettingstarted() {
	add_theme_page( esc_html__('EV Bike Shop', 'ev-bike-shop'), esc_html__('EV Bike Shop', 'ev-bike-shop'), 'edit_theme_options', 'ev_bike_shop_about', 'ev_bike_shop_mostrar_guide');
}

// Add a Custom CSS file to WP Admin Area
function ev_bike_shop_admin_theme_style() {
	wp_enqueue_style('ev-bike-shop-custom-admin-style', esc_url(get_template_directory_uri()) . '/includes/getstart/getstart.css');
	wp_enqueue_script('ev-bike-shop-tabs', esc_url(get_template_directory_uri()) . '/includes/getstart/js/tab.js');
	wp_enqueue_style( 'font-awesome-css', get_template_directory_uri().'/assets/css/fontawesome-all.css' );
}
add_action('admin_enqueue_scripts', 'ev_bike_shop_admin_theme_style');

// Changelog
if ( ! defined( 'EV_BIKE_SHOP_CHANGELOG_URL' ) ) {
    define( 'EV_BIKE_SHOP_CHANGELOG_URL', get_template_directory() . '/readme.txt' );
}

function ev_bike_shop_changelog_screen() {	
	global $wp_filesystem;
	$changelog_file = apply_filters( 'ev_bike_shop_changelog_file', EV_BIKE_SHOP_CHANGELOG_URL );
	if ( $changelog_file && is_readable( $changelog_file ) ) {
		WP_Filesystem();
		$changelog = $wp_filesystem->get_contents( $changelog_file );
		$changelog_list = ev_bike_shop_parse_changelog( $changelog );
		echo wp_kses_post( $changelog_list );
	}
}

function ev_bike_shop_parse_changelog( $content ) {
	$content = explode ( '== ', $content );
	$changelog_isolated = '';
	foreach ( $content as $key => $value ) {
		if (strpos( $value, 'Changelog ==') === 0) {
	    	$changelog_isolated = str_replace( 'Changelog ==', '', $value );
	    }
	}
	$changelog_array = explode( '= ', $changelog_isolated );
	unset( $changelog_array[0] );
	$changelog = '<div class="changelog">';
	foreach ( $changelog_array as $value) {
		$value = preg_replace( '/\n+/', '</span><span>', $value );
		$value = '<div class="block"><span class="heading">= ' . $value . '</span></div><hr>';
		$changelog .= str_replace( '<span></span>', '', $value );
	}
	$changelog .= '</div>';
	return wp_kses_post( $changelog );
}

//guidline for about theme
function ev_bike_shop_mostrar_guide() { 
	//custom function about theme customizer
	$ev_bike_shop_return = add_query_arg( array()) ;
	$ev_bike_shop_theme = wp_get_theme( 'ev-bike-shop' );
?>

    <div class="top-head">
		<div class="top-title">
			<h2><?php esc_html_e( 'EV Bike Shop', 'ev-bike-shop' ); ?></h2>
		</div>
		<div class="top-right">
			<span class="version"><?php esc_html_e( 'Version', 'ev-bike-shop' ); ?>: <?php echo esc_html($ev_bike_shop_theme['Version']);?></span>
		</div>
    </div>

    <div class="inner-cont">

	    <div class="tab-sec">
	    	<div class="tab">
				<button class="tablinks" onclick="ev_bike_shop_open_tab(event, 'wpelemento_importer_editor')"><?php esc_html_e( 'Setup With Elementor', 'ev-bike-shop' ); ?></button>
				<button class="tablinks" onclick="ev_bike_shop_open_tab(event, 'setup_customizer')"><?php esc_html_e( 'Setup With Customizer', 'ev-bike-shop' ); ?></button>
				<button class="tablinks" onclick="ev_bike_shop_open_tab(event, 'changelog_cont')"><?php esc_html_e( 'Changelog', 'ev-bike-shop' ); ?></button>
			</div>

			<div id="wpelemento_importer_editor" class="tabcontent open">
				<?php if(!class_exists('WPElemento_Importer_ThemeWhizzie')){
					$plugin_ins = EV_Bike_Shop_Plugin_Activation_WPElemento_Importer::get_instance();
					$ev_bike_shop_actions = $plugin_ins->recommended_actions;
					?>
					<div class="ev-bike-shop-recommended-plugins ">
							<div class="ev-bike-shop-action-list">
								<?php if ($ev_bike_shop_actions): foreach ($ev_bike_shop_actions as $key => $ev_bike_shop_actionValue): ?>
										<div class="ev-bike-shop-action" id="<?php echo esc_attr($ev_bike_shop_actionValue['id']);?>">
											<div class="action-inner plugin-activation-redirect">
												<h3 class="action-title"><?php echo esc_html($ev_bike_shop_actionValue['title']); ?></h3>
												<div class="action-desc"><?php echo esc_html($ev_bike_shop_actionValue['desc']); ?></div>
												<?php echo wp_kses_post($ev_bike_shop_actionValue['link']); ?>
											</div>
										</div>
									<?php endforeach;
								endif; ?>
							</div>
					</div>
				<?php }else{ ?>
					<div class="tab-outer-box">
						<h3><?php esc_html_e('Welcome to WPElemento Theme!', 'ev-bike-shop'); ?></h3>
						<p><?php esc_html_e('Click on the quick start button to import the demo.', 'ev-bike-shop'); ?></p>
						<div class="info-link">
							<a  href="<?php echo esc_url( admin_url('admin.php?page=wpelementoimporter-wizard') ); ?>"><?php esc_html_e('Quick Start', 'ev-bike-shop'); ?></a>
						</div>
					</div>
				<?php } ?>
			</div>

			<div id="setup_customizer" class="tabcontent">
				<div class="tab-outer-box">
				  	<div class="lite-theme-inner">
						<h3><?php esc_html_e('Theme Customizer', 'ev-bike-shop'); ?></h3>
						<p><?php esc_html_e('To begin customizing your website, start by clicking "Customize".', 'ev-bike-shop'); ?></p>
						<div class="info-link">
							<a target="_blank" href="<?php echo esc_url( admin_url('customize.php') ); ?>"><?php esc_html_e('Customizing', 'ev-bike-shop'); ?></a>
						</div>
						<hr>
						<h3><?php esc_html_e('Help Docs', 'ev-bike-shop'); ?></h3>
						<p><?php esc_html_e('The complete procedure to configure and manage a WordPress Website from the beginning is shown in this documentation .', 'ev-bike-shop'); ?></p>
						<div class="info-link">
							<a href="<?php echo esc_url( EV_BIKE_SHOP_FREE_THEME_DOC ); ?>" target="_blank"><?php esc_html_e('Documentation', 'ev-bike-shop'); ?></a>
						</div>
						<hr>
						<h3><?php esc_html_e('Need Support?', 'ev-bike-shop'); ?></h3>
						<p><?php esc_html_e('Our dedicated team is well prepared to help you out in case of queries and doubts regarding our theme.', 'ev-bike-shop'); ?></p>
						<div class="info-link">
							<a href="<?php echo esc_url( EV_BIKE_SHOP_SUPPORT ); ?>" target="_blank"><?php esc_html_e('Support Forum', 'ev-bike-shop'); ?></a>
						</div>
						<hr>
						<h3><?php esc_html_e('Reviews & Testimonials', 'ev-bike-shop'); ?></h3>
						<p> <?php esc_html_e('All the features and aspects of this WordPress Theme are phenomenal. I\'d recommend this theme to all.', 'ev-bike-shop'); ?></p>
						<div class="info-link">
							<a href="<?php echo esc_url( EV_BIKE_SHOP_REVIEW ); ?>" target="_blank"><?php esc_html_e('Review', 'ev-bike-shop'); ?></a>
						</div>
						<hr>
						<div class="link-customizer">
							<h3><?php esc_html_e( 'Link to customizer', 'ev-bike-shop' ); ?></h3>
							<div class="first-row">
								<div class="row-box">
									<div class="row-box1">
										<span class="dashicons dashicons-buddicons-buddypress-logo"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[control]=custom_logo') ); ?>" target="_blank"><?php esc_html_e('Upload your logo','ev-bike-shop'); ?></a>
									</div>
									<div class="row-box2">
										<span class="dashicons dashicons-menu"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[panel]=nav_menus') ); ?>" target="_blank"><?php esc_html_e('Menus','ev-bike-shop'); ?></a>
									</div>
								</div>
							
								<div class="row-box">
									<div class="row-box1">
										<span class="dashicons dashicons-align-center"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[section]=header_image') ); ?>" target="_blank"><?php esc_html_e('Header Image','ev-bike-shop'); ?></a>
									</div>
									<div class="row-box2">
										<span class="dashicons dashicons-screenoptions"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[panel]=widgets') ); ?>" target="_blank"><?php esc_html_e('Footer Widget','ev-bike-shop'); ?></a>
									</div>
								</div>
							</div>
						</div>
				  	</div>
				</div>
			</div>

			<div id="changelog_cont" class="tabcontent">
				<div class="tab-outer-box">
					<?php ev_bike_shop_changelog_screen(); ?>
				</div>
			</div>

		</div>

		<div class="inner-side-content">
			<h2><?php esc_html_e('Premium Theme', 'ev-bike-shop'); ?></h2>
			<div class="tab-outer-box">
				<img src="<?php echo esc_url(get_template_directory_uri()); ?>/screenshot.png" alt="" />
				<h3><?php esc_html_e('EV Bike Shop WordPress Theme', 'ev-bike-shop'); ?></h3>
				<div class="iner-sidebar-pro-btn">
					<span class="premium-btn"><a href="<?php echo esc_url( EV_BIKE_SHOP_BUY_NOW ); ?>" target="_blank"><?php esc_html_e('Buy Premium', 'ev-bike-shop'); ?></a>
					</span>
					<span class="demo-btn"><a href="<?php echo esc_url( EV_BIKE_SHOP_LIVE_DEMO ); ?>" target="_blank"><?php esc_html_e('Live Demo', 'ev-bike-shop'); ?></a>
					</span>
					<span class="doc-btn"><a href="<?php echo esc_url( EV_BIKE_SHOP_THEME_BUNDLE ); ?>" target="_blank"><?php esc_html_e('Theme Bundle', 'ev-bike-shop'); ?></a>
					</span>
				</div>
				<hr>
				<div class="premium-coupon">
					<div class="premium-features">
						<h3><?php esc_html_e('premium Features', 'ev-bike-shop'); ?></h3>
						<ul>
							<li><?php esc_html_e( 'Multilingual', 'ev-bike-shop' ); ?></li>
							<li><?php esc_html_e( 'Drag and drop features', 'ev-bike-shop' ); ?></li>
							<li><?php esc_html_e( 'Zero Coding Required', 'ev-bike-shop' ); ?></li>
							<li><?php esc_html_e( 'Mobile Friendly Layout', 'ev-bike-shop' ); ?></li>
							<li><?php esc_html_e( 'Responsive Layout', 'ev-bike-shop' ); ?></li>
							<li><?php esc_html_e( 'Unique Designs', 'ev-bike-shop' ); ?></li>
						</ul>
					</div>
					<div class="coupon-box">
						<h3><?php esc_html_e('Use Coupon Code', 'ev-bike-shop'); ?></h3>
						<a class="coupon-btn" href="<?php echo esc_url( EV_BIKE_SHOP_BUY_NOW ); ?>" target="_blank"><?php esc_html_e('UPGRADE NOW', 'ev-bike-shop'); ?></a>
						<div class="coupon-container">
							<h3><?php esc_html_e( 'elemento20', 'ev-bike-shop' ); ?></h3>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</div>

<?php } ?>
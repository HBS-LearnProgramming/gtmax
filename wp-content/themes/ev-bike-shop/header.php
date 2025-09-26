<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package EV Bike Shop
 */
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>

<meta http-equiv="Content-Type" content="<?php echo esc_attr(get_bloginfo('html_type')); ?>; charset=<?php echo esc_attr(get_bloginfo('charset')); ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.2, user-scalable=yes" />

<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

<?php
	if ( function_exists( 'wp_body_open' ) )
	{
		wp_body_open();
	}else{
		do_action('wp_body_open');
	}
?>
<?php if(get_theme_mod('ev_bike_shop_preloader_hide','')){ ?>
	<div class="loader">
		<div class="preloader">
			<div class="diamond">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
<?php } ?>
<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'ev-bike-shop' ); ?></a>

<div class="topheader">
	<div class="container-fluid">
		<div class="row">
			<div class="col-lg-7 col-md-6 col-sm-6 text-md-start text-center align-self-center adver-text py-2">
				<?php if ( get_theme_mod('ev_bike_shop_header_advertisement_text') ) : ?>
					<p class="mb-0"><?php echo esc_html( get_theme_mod('ev_bike_shop_header_advertisement_text' ) ); ?></p>
				<?php endif; ?>
			</div>
			<div class="col-lg-5 col-md-6 col-sm-6 align-self-center text-center text-md-end py-2">
				<?php if ( get_theme_mod('ev_bike_shop_header_email') ) : ?>
					<a href="mailto:<?php echo esc_url( get_theme_mod('ev_bike_shop_header_email')); ?>"><span class="me-4 envelope-text" ><i class="fas fa-envelope me-2"></i><?php echo esc_html( get_theme_mod('ev_bike_shop_header_email' ) ); ?></span></a>
				<?php endif; ?>
				<?php if ( get_theme_mod('ev_bike_shop_header_phone_number') ) : ?>
					<a href="tel:<?php echo esc_url( get_theme_mod('ev_bike_shop_header_phone_number')); ?>"><span class="border-left "><i class="fas fa-phone me-2 ms-2"></i><?php echo esc_html( get_theme_mod('ev_bike_shop_header_phone_number' ) ); ?></span></a>
				<?php endif; ?>
			</div>
		</div>
	</div>
</div>

<div class="middle-header">
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-md-4 col-sm-4 align-self-center">
				<?php if ( get_theme_mod('ev_bike_shop_details_button_url') || get_theme_mod('ev_bike_shop_details_button_text') ) : ?>
				<div class="details-btn my-4 text-lg-start text-md-start text-center">
				<i class="fas fa-info me-2"></i><a href="<?php echo esc_url( get_theme_mod('ev_bike_shop_details_button_url' ) ); ?>"><?php echo esc_html( get_theme_mod('ev_bike_shop_details_button_text' ) ); ?></a>
				</div>
				<?php endif; ?>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-4 align-self-center">
				<div class="logo text-center mb-3 mb-md-0">
					<div class="logo-image ">
						<?php the_custom_logo(); ?>
					</div>
					<div class="logo-content">
						<?php
							if ( get_theme_mod('ev_bike_shop_display_header_title', true) == true ) :
								echo '<a href="' . esc_url(home_url('/')) . '" title="' . esc_attr(get_bloginfo('name')) . '">';
								echo esc_attr(get_bloginfo('name'));
								echo '</a>';
							endif;
							if ( get_theme_mod('ev_bike_shop_display_header_text', false) == true ) :
								echo '<span>'. esc_attr(get_bloginfo('description')) . '</span>';
							endif;
						?>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-4 align-self-center">
				<?php if ( get_theme_mod('ev_bike_shop_header_button_url') || get_theme_mod('ev_bike_shop_header_button_text') ) : ?>
				<div class="book-btn my-4 text-lg-end text-md-end text-center">
					<a href="<?php echo esc_html( get_theme_mod('ev_bike_shop_header_button_url' ) ); ?>"><?php echo esc_html( get_theme_mod('ev_bike_shop_header_button_text' ) ); ?></a>
				</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
</div>

<header id="site-navigation" class="header text-center  py-2 <?php if( get_theme_mod( 'ev_bike_shop_sticky_header','on') != '') { ?>sticky-header<?php } else { ?>close-sticky <?php } ?>">
	<div class="container">
		<div class="nav-header-menu">
			<button class="menu-toggle my-2 py-2 px-3" aria-controls="top-menu" aria-expanded="false" type="button">
				<span aria-hidden="true"><?php esc_html_e( 'Menu', 'ev-bike-shop' ); ?></span>
			</button>
			<nav id="main-menu" class="close-panal">
				<?php
					wp_nav_menu( array(
						'theme_location' => 'main-menu',
						'container' => 'false'
					));
				?>
				<button class="close-menu my-2 p-2" type="button">
					<span aria-hidden="true"><i class="fa fa-times"></i></span>
				</button>
			</nav>
		</div>
	</div>
</header>
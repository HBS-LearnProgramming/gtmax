<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package EV Bike Shop
 */

?>

<footer class="footer-side">
  <?php if ( get_theme_mod( 'ev_bike_shop_show_footer_widget', true ) ) : ?>
    <div class="footer-widget">
      <div class="container">
        <?php
          // Check if any footer sidebar is active
          $ev_bike_shop_any_sidebar_active = false;
          for ( $ev_bike_shop_i = 1; $ev_bike_shop_i <= 4; $ev_bike_shop_i++ ) {
            if ( is_active_sidebar( "footer{$ev_bike_shop_i}-sidebar" ) ) {
              $ev_bike_shop_any_sidebar_active = true;
              break;
            }
          }
          // Count active for responsive column classes
          $ev_bike_shop_active_sidebars = 0;
          if ( $ev_bike_shop_any_sidebar_active ) {
            for ( $ev_bike_shop_i = 1; $ev_bike_shop_i <= 4; $ev_bike_shop_i++ ) {
              if ( is_active_sidebar( "footer{$ev_bike_shop_i}-sidebar" ) ) {
                $ev_bike_shop_active_sidebars++;
              }
            }
          }
          $ev_bike_shop_col_class = $ev_bike_shop_active_sidebars > 0 ? 'col-lg-' . (12 / $ev_bike_shop_active_sidebars) . ' col-md-6 col-sm-12' : 'col-lg-3 col-md-6 col-sm-12';
        ?>
        <div class="row pt-2">
          <?php for ( $ev_bike_shop_i = 1; $ev_bike_shop_i <= 4; $ev_bike_shop_i++ ) : ?>
            <div class="footer-area <?php echo esc_attr($ev_bike_shop_col_class); ?>">
              <?php if ( $ev_bike_shop_any_sidebar_active && is_active_sidebar("footer{$ev_bike_shop_i}-sidebar") ) : ?>
                <?php dynamic_sidebar("footer{$ev_bike_shop_i}-sidebar"); ?>
              <?php elseif ( ! $ev_bike_shop_any_sidebar_active ) : ?>
                  <?php if ( $ev_bike_shop_i === 1 ) : ?>
                    <aside role="complementary" aria-label="<?php echo esc_attr__( 'footer1', 'ev-bike-shop' ); ?>" id="Search" class="sidebar-widget">
                      <h4 class="title" ><?php esc_html_e( 'Search', 'ev-bike-shop' ); ?></h4>
                      <?php get_search_form(); ?>
                    </aside>

                  <?php elseif ( $ev_bike_shop_i === 2 ) : ?>
                      <aside role="complementary" aria-label="<?php echo esc_attr__( 'footer2', 'ev-bike-shop' ); ?>" id="archives" class="sidebar-widget">
                      <h4 class="title" ><?php esc_html_e( 'Archives', 'ev-bike-shop' ); ?></h4>
                      <ul>
                          <?php wp_get_archives( array( 'type' => 'monthly' ) ); ?>
                      </ul>
                      </aside>
                  <?php elseif ( $ev_bike_shop_i === 3 ) : ?>
                    <aside role="complementary" aria-label="<?php echo esc_attr__( 'footer3', 'ev-bike-shop' ); ?>" id="meta" class="sidebar-widget">
                      <h4 class="title"><?php esc_html_e( 'Meta', 'ev-bike-shop' ); ?></h4>
                      <ul>
                        <?php wp_register(); ?>
                        <li><?php wp_loginout(); ?></li>
                        <?php wp_meta(); ?>
                      </ul>
                    </aside>
                  <?php elseif ( $ev_bike_shop_i === 4 ) : ?>
                    <aside role="complementary" aria-label="<?php echo esc_attr__( 'footer4', 'ev-bike-shop' ); ?>" id="categories" class="sidebar-widget">
                      <h4 class="title" ><?php esc_html_e( 'Categories', 'ev-bike-shop' ); ?></h4>
                      <ul>
                          <?php wp_list_categories('title_li=');  ?>
                      </ul>
                    </aside>
                  <?php endif; ?>
              <?php endif; ?>
            </div>
          <?php endfor; ?>
        </div>
      </div>
    </div>
  <?php endif; ?>
  <?php if( get_theme_mod( 'ev_bike_shop_show_footer_copyright',true)) : ?>
    <div class="footer-copyright">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 align-self-center">
            <p class="mb-0 py-3 text-center text-md-start">
              <?php
                if (!get_theme_mod('ev_bike_shop_footer_text') ) { ?>
                <a href="<?php echo esc_url(__('https://www.wpelemento.com/products/free-ev-bike-wordpress-theme', 'ev-bike-shop' )); ?>" target="_blank">  
                  <?php esc_html_e('EV Bike Shop WordPress Theme','ev-bike-shop'); ?>
                </a>
            <?php } else {
                  echo esc_html(get_theme_mod('ev_bike_shop_footer_text'));
                }
              ?>
              <?php if ( get_theme_mod('ev_bike_shop_copyright_enable', true) == true ) : ?>
              <?php
                /* translators: %s: WP Elemento */
                printf( esc_html__( ' By %s', 'ev-bike-shop' ), 'WP Elemento' ); ?>
              <?php endif; ?>
            </p>
          </div>
          <div class="col-lg-6 col-md-6 align-self-center text-center text-md-end">
            <?php if ( get_theme_mod('ev_bike_shop_copyright_enable', true) == true ) : ?>
              <a href="<?php echo esc_url(__('https://wordpress.org','ev-bike-shop') ); ?>" rel="generator"><?php  /* translators: %s: WordPress */ printf( esc_html__( 'Proudly powered by %s', 'ev-bike-shop' ), 'WordPress' ); ?></a>
            <?php endif; ?>
          </div>
        </div>
        <?php if(get_theme_mod('ev_bike_shop_footer_social_icon_hide', false )== true){ ?>
          <div class="row">
            <div class="col-12 align-self-center py-1">
              <div class="footer-links">
                <?php $ev_bike_shop_settings_footer = get_theme_mod( 'ev_bike_shop_social_links_settings_footer' ); ?>
                <?php if ( is_array($ev_bike_shop_settings_footer) || is_object($ev_bike_shop_settings_footer) ){ ?>
                  <?php foreach( $ev_bike_shop_settings_footer as $ev_bike_shop_setting_footer ) { ?>
                    <a href="<?php echo esc_url( $ev_bike_shop_setting_footer['link_url'] ); ?>" target="_blank">
                      <i class="<?php echo esc_attr( $ev_bike_shop_setting_footer['link_text'] ); ?> me-2"></i>
                    </a>
                  <?php } ?>
                <?php } ?>
              </div>
            </div>
          </div>
        <?php } ?>
      </div>
    </div>
  <?php endif; ?>
  <?php if ( get_theme_mod('ev_bike_shop_scroll_enable_setting')) : ?>
    <div class="scroll-up">
      <a href="#tobottom"><i class="fa fa-arrow-up"></i></a>
    </div>
  <?php endif; ?>
  <?php if(get_theme_mod('ev_bike_shop_progress_bar', true )== true): ?>
    <div id="elemento-progress-bar" class="theme-progress-bar <?php if( get_theme_mod( 'ev_bike_shop_progress_bar_position','top') == 'top') { ?> top <?php } else { ?> bottom <?php } ?>"></div>
  <?php endif; ?>
  <?php if(get_theme_mod('ev_bike_shop_cursor_outline', false )== true): ?>
			<!-- Custom cursor -->
			<div class="cursor-point-outline"></div>
			<div class="cursor-point"></div>
			<!-- .Custom cursor -->
  <?php endif; ?>
</footer>

<?php wp_footer(); ?>

</body>
</html>
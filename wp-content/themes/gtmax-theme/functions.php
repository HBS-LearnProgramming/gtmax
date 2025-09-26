<?php
function mytheme_enqueue_styles() {
    wp_enqueue_style('mytheme-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'mytheme_enqueue_styles');

function mytheme_register_menus() {
    register_nav_menus(array(
        'header_menu' => __('Header Menu', 'mytheme'),
        'footer_menu'  => __('Footer Menu', 'mytheme'),
        
    ));
}
add_action('init', 'mytheme_register_menus');

function gtmax_enqueue_styles() {
    wp_enqueue_style(
        'gtmax-style',
        get_template_directory_uri() . '/assets/css/style.css',
        array(),
        filemtime(get_template_directory() . '/assets/css/style.css')
    );
}
add_action('wp_enqueue_scripts', 'gtmax_enqueue_styles');

function gtmax_enqueue_scripts() {
    wp_enqueue_script('footer-js', get_template_directory_uri() . '/assets/js/footer.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'gtmax_enqueue_scripts');

add_filter( 'nav_menu_link_attributes', function( $atts, $item, $args ) {
    // For example, force all links in "Header" menu to open in a new tab
    if ( $item->type === 'custom' ) {
        $atts['target'] = '_blank';
    }
    return $atts;
}, 10, 3 );

<?php
// 2026-09-05: theme never declared title-tag support, so every page
// template hardcoded a static title tag using bloginfo('name') directly -
// every page on the site showed the identical "GT Max Motors" title. Adding
// this lets WordPress core (and Rank Math's own title settings) generate
// a correct, unique title per page once the hardcoded lines are removed
// from each template.
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
});
function mytheme_enqueue_styles()
{
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
    wp_enqueue_script(
        'gtmax-menu',
        get_template_directory_uri() . '/assets/js/menu.js',
        array(),
        filemtime(get_template_directory() . '/assets/js/menu.js'),
        true
    );
}
add_action('wp_enqueue_scripts', 'gtmax_enqueue_scripts');


/**
 * Customize Navigation Menu Link Attributes:
 * 1. If an item has children (sub-items), neutralize the main link so it only acts as a dropdown trigger.
 * 2. Add custom button styling and new-tab target for "SHOP NOW" custom menu item.
 */
add_filter( 'nav_menu_link_attributes', function( $atts, $item, $args, $depth = 0 ) {
    // 1. Parent item with sub-items: neutralize URL so clicking only opens/toggles the dropdown
    $has_children = in_array( 'menu-item-has-children', (array) $item->classes, true ) || ! empty( $item->has_children );
    if ( $has_children ) {
        $atts['href']          = 'javascript:void(0);';
        $atts['role']          = 'button';
        $atts['aria-haspopup'] = 'true';
        $atts['aria-expanded'] = 'false';
        $atts['class']         = ( isset( $atts['class'] ) ? $atts['class'] . ' ' : '' ) . 'menu-dropdown-toggle';
    }

    // 2. Custom link styling for "SHOP NOW" button
    if ( $item->type === 'custom' && str_contains( strtoupper( $item->title ), 'SHOP NOW' ) ) {
        $atts['target'] = '_blank';
        $atts['class']  = ( isset( $atts['class'] ) ? $atts['class'] . ' ' : '' ) . 'show_now_btn';
    }

    return $atts;
}, 10, 4 );

/**
 * Customize Navigation Menu Item Titles:
 * 1. Add shopping bag icon for "SHOP NOW".
 * 2. Add dropdown indicator chevron for parent items with sub-items.
 */
add_filter( 'nav_menu_item_title', function( $title, $item, $args, $depth = 0 ) {
    // Add shopping bag icon for "SHOP NOW"
    if ( $item->type === 'custom' && stripos( $item->title, 'SHOP NOW' ) !== false ) {
        $title = '<i class="fa-solid fa-bag-shopping" style="margin-right:6px;"></i>' . $title;
    }

    // Add dropdown indicator chevron for parent items with sub-items
    $has_children = in_array( 'menu-item-has-children', (array) $item->classes, true ) || ! empty( $item->has_children );
    if ( $has_children ) {
        $icon = ( $depth > 0 ) ? 'fa-chevron-right' : 'fa-chevron-down';
        $title .= ' <i class="fa-solid ' . $icon . ' dropdown-arrow text-xs ml-1.5 transition-transform duration-200"></i>';
    }

    return $title;
}, 10, 4 );

/**
 * Add helper classes to parent menu items with sub-items.
 */
add_filter( 'nav_menu_css_class', function( $classes, $item, $args, $depth = 0 ) {
    $has_children = in_array( 'menu-item-has-children', (array) $classes, true ) || ! empty( $item->has_children );
    if ( $has_children ) {
        $classes[] = 'relative group menu-has-dropdown';
    }
    return array_unique( $classes );
}, 10, 4 );


add_action('add_meta_boxes', function() {
    add_meta_box(
        'custom_post_template_box',
        'Post Layout Template',
        'render_custom_post_template_box',
        'post',
        'side',
        'default'
    );
});
// start post php files as categories selection
function render_custom_post_template_box($post) {
    $selected_template = get_post_meta($post->ID, '_custom_post_template', true);
    $templates_dir = get_stylesheet_directory() . '/posts/';
    $files = glob($templates_dir . '*.php');

    echo '<select name="custom_post_template" id="custom_post_template" style="width:100%;">';

    if ($files) {
        foreach ($files as $file) {
            $filename = basename($file);
            $template_name = ucwords(str_replace(['post-', '.php'], ['', ''], $filename));
            $selected = selected($selected_template, $filename, false);
            echo "<option value='{$filename}' {$selected}>{$template_name}</option>";
        }
    }

    echo '</select>';
}


add_action('save_post', function($post_id) {
    if (isset($_POST['custom_post_template'])) {
        update_post_meta($post_id, '_custom_post_template', sanitize_text_field($_POST['custom_post_template']));
    }
});


add_filter('single_template', function($template) {
    global $post;

    $custom_template = get_post_meta($post->ID, '_custom_post_template', true);
    if ($custom_template) {
        $path = get_stylesheet_directory() . '/posts/' . $custom_template;
        if (file_exists($path)) {
            return $path;
        }
    }

    return $template;
});
// end post php files as categories selection

function gtmax_breadcrumbs() {
    if (is_front_page()) return;

    echo '<nav class="breadcrumb" aria-label="breadcrumb">';
    echo '<a href="' . home_url() . '">Home</a> » ';

    if (is_single()) {
        $category = get_the_category();
        if ($category) {
            echo '<a href="/' . $category[0]->slug . '">' . $category[0]->name . '</a> » ';
        }
        echo '<span>' . get_the_title() . '</span>';
    } elseif (is_page()) {
        echo '<span>' . get_the_title() . '</span>';
    } elseif (is_category()) {
        echo '<span>' . single_cat_title('', false) . '</span>';
    }

    echo '</nav>';
}
// add the insurance.js to insurance-page
function gtmax_enqueue_insurance_assets() {

    $is_insurance_page = is_page_template('page-Insurance.php')
        || is_page_template('page-insurance.php')
        || is_page('insurance');

    if (!$is_insurance_page) {
        return;
    }

    wp_enqueue_script(
        'sweetalert2',
        'https://cdn.jsdelivr.net/npm/sweetalert2@11',
        [],
        null,
        true
    );

    wp_enqueue_script(
        'gtmax-insurance',
        get_template_directory_uri() . '/assets/js/insurance.js',
        ['jquery', 'sweetalert2'],
        filemtime(get_template_directory() . '/assets/js/insurance.js'),
        true
    );

    wp_localize_script('gtmax-insurance', 'GTMAX_CONFIG', [
        'apiUrl' => 'https://gtmaxmanagement.test/api/insurance_registration',
        'token'  => 'Bearer a1a3e31759d4b1b179037afc6c163e63ae4815feb3f45633a40f4225ad278822e6b000642af887bf',
        'lang'   => get_locale(),
        'quotationUrl' => home_url('/insurance-quotation/'),
    ]);
}
add_action('wp_enqueue_scripts', 'gtmax_enqueue_insurance_assets');

// add the quotation.js to insurance-quotation page
function gtmax_enqueue_quotation_assets() {

    $is_quotation_page = is_page_template('page-quotation.php')
        || is_page('insurance-quotation');

    if (!$is_quotation_page) {
        return;
    }

    wp_enqueue_script(
        'sweetalert2',
        'https://cdn.jsdelivr.net/npm/sweetalert2@11',
        [],
        null,
        true
    );

    wp_enqueue_script(
        'gtmax-quotation',
        get_template_directory_uri() . '/assets/js/quotation.js',
        ['sweetalert2'],
        filemtime(get_template_directory() . '/assets/js/quotation.js'),
        true
    );

    wp_localize_script('gtmax-quotation', 'GTMAX_CONFIG', [
        'apiUrl'       => 'https://gtmaxmanagement.test/api/insurance_registration',
        'token'        => 'Bearer a1a3e31759d4b1b179037afc6c163e63ae4815feb3f45633a40f4225ad278822e6b000642af887bf',
        'lang'         => get_locale(),
        'quotationUrl' => home_url('/insurance-quotation/'),
        'paymentUrl'   => home_url('/insurance-payment/'),
    ]);
}
add_action('wp_enqueue_scripts', 'gtmax_enqueue_quotation_assets');

// add the payment.js to insurance-payment page
function gtmax_enqueue_payment_assets() {

    $is_payment_page = is_page_template('page-payment.php')
        || is_page('insurance-payment');

    if (!$is_payment_page) {
        return;
    }

    wp_enqueue_script(
        'sweetalert2',
        'https://cdn.jsdelivr.net/npm/sweetalert2@11',
        [],
        null,
        true
    );

    wp_enqueue_script(
        'gtmax-payment',
        get_template_directory_uri() . '/assets/js/payment.js',
        ['sweetalert2'],
        filemtime(get_template_directory() . '/assets/js/payment.js'),
        true
    );

    wp_localize_script('gtmax-payment', 'GTMAX_CONFIG', [
        'apiUrl'       => 'https://gtmaxmanagement.test/api/insurance_registration',
        'token'        => 'Bearer a1a3e31759d4b1b179037afc6c163e63ae4815feb3f45633a40f4225ad278822e6b000642af887bf',
        'lang'         => get_locale(),
        'quotationUrl' => home_url('/insurance-quotation/'),
        'paymentUrl'   => home_url('/insurance-payment/'),
    ]);
}
add_action('wp_enqueue_scripts', 'gtmax_enqueue_payment_assets');




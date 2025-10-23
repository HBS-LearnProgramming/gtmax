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
        if(str_contains(strtoupper($item->title),'SHOP NOW')){
            $atts['target'] = '_blank';
            if ( isset( $atts['class'] ) ) {
                $atts['class'] .= ' show_now_btn';
            } else {
                $atts['class'] = 'show_now_btn';
            }
        }
    }
    return $atts;
}, 10, 3 );

add_filter( 'nav_menu_item_title', function( $title, $item, $args, $depth ) {
    if ( $item->type === 'custom' && stripos( $item->title, 'SHOP NOW' ) !== false ) {
        // Add bag icon before the text
        $title = '<i class="fa-solid fa-bag-shopping" style="margin-right:6px;"></i>' . $title;
    }
    return $title;
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



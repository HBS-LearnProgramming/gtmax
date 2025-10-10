<?php
/**
 * Plugin Name: Animation Scroll Slide
 * Description: Animated scrollable grid with configurable child grid spans.
 * Version: 1.1.0
 * Author: GT-MAX
 */

if (!defined('ABSPATH')) exit;

function animation_scroll_slide_register_block() {
    wp_register_script(
        'animation-scroll-slide-block',
        plugins_url('build/index.js', __FILE__),
        ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-block-editor'],
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );

    wp_register_style(
        'animation-scroll-slide-style',
        plugins_url('build/index.css', __FILE__),
        [],
        filemtime(plugin_dir_path(__FILE__) . 'build/index.css')
    );

    register_block_type('acro/animation-scroll-slide', [
        'editor_script' => 'animation-scroll-slide-block',
        'style' => 'animation-scroll-slide-style',
    ]);

    register_block_type('acro/animation-grid-item', [
        'editor_script' => 'animation-scroll-slide-block',
        'style' => 'animation-scroll-slide-style',
    ]);
}
add_action('init', 'animation_scroll_slide_register_block');

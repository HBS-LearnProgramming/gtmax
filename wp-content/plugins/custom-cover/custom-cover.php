<?php
/**
 * Plugin Name: Custom Cover
 * Description: Add a customizable cover section block with background image, text, and styling options.
 * Version: 1.0
 * Author: GT-MAX
 */

if (!defined('ABSPATH')) exit;

// Register block assets
function custom_cover_register_block() {
    wp_register_script(
        'custom-cover-block',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js')
    );

    wp_register_style(
        'custom-cover-style',
        plugins_url('style.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'style.css')
    );

    wp_register_style(
        'custom-cover-editor',
        plugins_url('editor.css', __FILE__),
        array('custom-cover-style'),
        filemtime(plugin_dir_path(__FILE__) . 'editor.css')
    );

    register_block_type('custom/cover', array(
        'editor_script' => 'custom-cover-block',
        'editor_style'  => 'custom-cover-editor',
        'style'         => 'custom-cover-style',
    ));
}
add_action('init', 'custom_cover_register_block');

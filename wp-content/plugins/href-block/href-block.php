<?php
/**
 * Plugin Name: Href Block
 * Description: A custom Gutenberg block that creates an anchor (<a>) wrapper allowing inner blocks and custom link attributes.
 * Version: 1.0
 * Author: GT-MAX
 */

if (!defined('ABSPATH')) exit;

function href_block_register() {
    wp_register_script(
        'href-block-editor-script',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-block-editor'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js')
    );

    wp_register_style(
        'href-block-style',
        plugins_url('style.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'style.css')
    );

    wp_register_style(
        'href-block-editor-style',
        plugins_url('editor.css', __FILE__),
        array('href-block-style'),
        filemtime(plugin_dir_path(__FILE__) . 'editor.css')
    );

    register_block_type('custom/href-block', array(
        'editor_script' => 'href-block-editor-script',
        'editor_style'  => 'href-block-editor-style',
        'style'         => 'href-block-style',
    ));
}
add_action('init', 'href_block_register');

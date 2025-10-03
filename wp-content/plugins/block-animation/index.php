<?php
/**
 * Plugin Name: Block Animation
 * Description: A Gutenberg container block with scroll-triggered animations.
 * Author: GT-MAX
 * Version: 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit;

function block_animation_register() {
    wp_register_script(
        'block-animation-js',
        plugins_url( 'block.js', __FILE__ ), // ✅ use block.js in root
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
    );

    wp_enqueue_script(
        'block-animation-frontend',
        plugins_url( 'frontend.js', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'frontend.js' ),
        true
    );

    wp_register_style(
        'block-animation-style',
        plugins_url( 'style.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
    );

    register_block_type( __DIR__, array(
        'editor_script' => 'block-animation-js',
        'style'         => 'block-animation-style',
    ) );
}
add_action( 'init', 'block_animation_register' );

<?php
/**
 * Plugin Name: Text Animation Block
 * Description: Animated text block with typing + other animations.
 * Version: 1.2
 * Author: GT-Max
 */

if ( ! defined( 'ABSPATH' ) ) exit;

function ta_register_block_assets() {
    // Block editor JS
    wp_register_script(
        'text-animation-block-editor',
        plugins_url( 'block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-block-editor', 'wp-i18n' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
    );

    // Frontend typing runner
    wp_register_script(
        'text-animation-frontend',
        plugins_url( 'text-animation-frontend.js', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'text-animation-frontend.js' ),
        true
    );

    // CSS (editor + frontend)
    wp_register_style(
        'text-animation-block-style',
        plugins_url( 'style.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
    );
    wp_register_style(
        'text-animation-block-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
    );

    register_block_type( 'custom/text-animation-block', array(
        'editor_script' => 'text-animation-block-editor',
        'editor_style'  => 'text-animation-block-editor',
        'style'         => 'text-animation-block-style',
    ) );
}
add_action( 'init', 'ta_register_block_assets' );

// enqueue typing runner on frontend
add_action( 'wp_enqueue_scripts', function() {
    wp_enqueue_script( 'text-animation-frontend' );
});

// enqueue typing runner in editor so preview types
add_action( 'enqueue_block_editor_assets', function() {
    wp_enqueue_script( 'text-animation-frontend' );
});
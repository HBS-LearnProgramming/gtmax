<?php
/**
 * Plugin Name: Container Block
 * Description: A "container" Gutenberg block (Tailwind-like) that controls max-width, centering, padding and accepts inner blocks.
 * Version: 1.0
 * Author: GT-Max
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function cb_register_block_assets() {
    // Editor script (block.js)
    wp_register_script(
        'container-block-editor',
        plugins_url( 'block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
    );

    // Frontend style
    wp_register_style(
        'container-block-style',
        plugins_url( 'style.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
    );

    // Editor style
    wp_register_style(
        'container-block-editor-style',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
    );

    register_block_type( 'custom/container-block', array(
        'editor_script' => 'container-block-editor',
        'style'         => 'container-block-style',
        'editor_style'  => 'container-block-editor-style',
    ) );
}
add_action( 'init', 'cb_register_block_assets' );

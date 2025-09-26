<?php
/**
 * Plugin Name: Background Block
 * Description: A custom block that creates a column with customizable background image, width, and height, and supports adding inner elements.
 * Version: 1.0
 * Author: GT-Max
 */

if ( ! defined( 'ABSPATH' ) ) exit;

function background_block_enqueue_assets() {
    // Register JS
    wp_register_script(
        'background-block',
        plugins_url( 'block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-block-editor', 'wp-i18n' ), // added wp-i18n
        filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
    );
  
    // Register editor CSS
    wp_register_style(
        'background-block-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
    );

    // Register frontend CSS
    wp_register_style(
        'background-block-style',
        plugins_url( 'style.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
    );

    wp_enqueue_script(
        'background-block',
        plugins_url( 'build/block.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ]
    );

    // Register the block
    register_block_type( 'custom/background-block', array(
        'editor_script' => 'background-block',
        'editor_style'  => 'background-block-editor',
        'style'         => 'background-block-style',
    ) );
}
add_action( 'init', 'background_block_enqueue_assets' );

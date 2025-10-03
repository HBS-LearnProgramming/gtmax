<?php
/**
 * Plugin Name: Flex Column
 * Description: Gutenberg block for creating responsive flexbox-based columns with adjustable widths and alignment.
 * Version: 1.0
 * Author: GT-Max
 */

defined( 'ABSPATH' ) || exit;

function flexcol_register_block() {
    wp_register_script(
        'flexcol-block-editor',
        plugins_url( 'block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components' ),
        filemtime( plugin_dir_path(__FILE__) . 'block.js' )
    );

    wp_register_style(
        'flexcol-style',
        plugins_url( 'style.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path(__FILE__) . 'style.css' )
    );

    wp_register_style(
        'flexcol-editor-style',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path(__FILE__) . 'editor.css' )
    );

    register_block_type( 'flex/column-container', array(
        'editor_script' => 'flexcol-block-editor',
        'style'         => 'flexcol-style',
        'editor_style'  => 'flexcol-editor-style',
    ) );
}
add_action( 'init', 'flexcol_register_block' );

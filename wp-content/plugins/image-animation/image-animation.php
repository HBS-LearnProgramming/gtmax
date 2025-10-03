<?php
/**
 * Plugin Name: Image Animation
 * Description: A Gutenberg block that lets editors insert an image and choose animation per post/page. Includes shortcode fallback for classic editor.
 * Version: 1.1
 * Author: GT-Max (modified)
 */

defined( 'ABSPATH' ) || exit;

function cia_register_block() {
    // Register editor script (block.js)
    wp_register_script(
        'cia-block-editor',
        plugins_url( 'block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components', 'wp-i18n', 'wp-editor' ),
        filemtime( plugin_dir_path(__FILE__) . 'block.js' )
    );

    // Frontend style (animations)
    wp_register_style(
        'cia-style',
        plugins_url( 'style.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path(__FILE__) . 'style.css' )
    );

    // Editor style (preview in editor)
    wp_register_style(
        'cia-editor-style',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path(__FILE__) . 'editor.css' )
    );

    register_block_type( 'cia/image-animation', array(
        'editor_script' => 'cia-block-editor',
        'style'         => 'cia-style',
        'editor_style'  => 'cia-editor-style',
    ) );

    wp_enqueue_script(
        'cia-animation-refresh',
        plugins_url( 'animation-refresh.js', __FILE__ ),
        array(),
        filemtime( plugin_dir_path(__FILE__) . 'animation-refresh.js' ),
        true
    );
}
add_action( 'init', 'cia_register_block' );

/**
 * Shortcode fallback for Classic Editor or other uses.
 * Usage: [image_animation image="https://example.com/img.jpg" animation="zoom"]
 */
function cia_display_image_shortcode( $atts ) {
    $atts = shortcode_atts( array(
        'image'     => '',
        'animation' => 'fade',
    ), $atts, 'image_animation' );

    $img  = esc_url( $atts['image'] );
    $anim = esc_attr( $atts['animation'] );

    if ( ! $img ) return '';

    return '<div class="cia-image ' . $anim . '"><img src="' . $img . '" alt="" /></div>';
}
add_shortcode( 'image_animation', 'cia_display_image_shortcode' );

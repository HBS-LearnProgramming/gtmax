<?php
/**
 * Plugin Name: Suspension Icon
 * Description: Adds a suspension icon (bottom-right floating image) with customizable settings.
 * Version: 1.0
 * Author: GT-MAX
 */

if (!defined('ABSPATH')) exit;

define('SI_PLUGIN_DIR', plugin_dir_path(__FILE__));

// Admin settings
require_once SI_PLUGIN_DIR . 'admin/settings-page.php';

// Frontend render
add_action('wp_footer', 'si_render_suspension_icon');
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('si-styles', plugin_dir_url(__FILE__) . 'suspension-icon.css');
});
function si_render_suspension_icon() {
    $options = get_option('si_settings');

    if (empty($options['image'])) {
        return; // no icon uploaded
    }

    $link   = !empty($options['link']) ? esc_url($options['link']) : '#';
    $width  = !empty($options['width']) ? intval($options['width']) : 60;
    $height = !empty($options['height']) ? intval($options['height']) : 60;
    $animation = !empty($options['animation']) ? $options['animation'] : 'none';

    // 🔥 Assign animation class
    $anim_class = '';
    if ($animation === 'vibrate') $anim_class = 'si-anim-vibrate';
    if ($animation === 'bounce') $anim_class = 'si-anim-bounce';

    echo '<div class="si-suspension-icon ' . esc_attr($anim_class) . '" style="position:fixed;bottom:20px;right:20px;z-index:9999;">';
    echo '<a href="' . $link . '" target="_blank" rel="noopener">';
    echo '<img src="' . esc_url($options['image']) . '" style="width:' . $width . 'px;height:' . $height . 'px;">';
    echo '</a></div>';
}



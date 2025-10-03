<?php
if (!defined('ABSPATH')) exit;

add_action('admin_menu', 'si_add_admin_menu');
add_action('admin_init', 'si_register_settings');

function si_add_admin_menu() {
    add_options_page(
        'Suspension Icon Settings',
        'Suspension Icon',
        'manage_options',
        'suspension-icon',
        'si_settings_page_html'
    );
}

function si_register_settings() {
    register_setting('si_settings_group', 'si_settings');

    add_settings_section('si_section', 'Icon Configuration', null, 'suspension-icon');

    add_settings_field('si_image', 'Upload Icon', 'si_image_field', 'suspension-icon', 'si_section');
    add_settings_field('si_width', 'Width (px)', 'si_width_field', 'suspension-icon', 'si_section');
    add_settings_field('si_height', 'Height (px)', 'si_height_field', 'suspension-icon', 'si_section');
    add_settings_field('si_link', 'Link URL', 'si_link_field', 'suspension-icon', 'si_section');
    add_settings_field('si_animation', 'Animation', 'si_animation_field', 'suspension-icon', 'si_section');
}

function si_image_field() {
    $options = get_option('si_settings');
    $image = $options['image'] ?? '';
    echo '<input type="text" name="si_settings[image]" id="si_image" value="' . esc_url($image) . '" style="width:300px;"> ';
    echo '<button class="button" id="si_upload_button">Upload</button>';
    ?>
    <script>
    jQuery(document).ready(function($){
        var frame;
        $('#si_upload_button').on('click', function(e){
            e.preventDefault();
            if(frame){ frame.open(); return; }
            frame = wp.media({
                title: 'Select or Upload Icon',
                button: { text: 'Use this icon' },
                multiple: false
            });
            frame.on('select', function(){
                var attachment = frame.state().get('selection').first().toJSON();
                $('#si_image').val(attachment.url);
            });
            frame.open();
        });
    });
    </script>
    <?php
}

function si_width_field() {
    $options = get_option('si_settings');
    $width = $options['width'] ?? '60';
    echo '<input type="number" name="si_settings[width]" value="' . esc_attr($width) . '" min="10" style="width:80px;"> px';
}

function si_height_field() {
    $options = get_option('si_settings');
    $height = $options['height'] ?? '60';
    echo '<input type="number" name="si_settings[height]" value="' . esc_attr($height) . '" min="10" style="width:80px;"> px';
}

function si_link_field() {
    $options = get_option('si_settings');
    $link = $options['link'] ?? '';
    echo '<input type="url" name="si_settings[link]" value="' . esc_url($link) . '" style="width:300px;">';
}

add_action('admin_enqueue_scripts', 'si_admin_scripts');
function si_admin_scripts($hook) {
    // Load only on our plugin settings page
    if ($hook !== 'settings_page_suspension-icon') {
        return;
    }

    // Enqueue WordPress media uploader scripts
    wp_enqueue_media();

    // Ensure jQuery is loaded
    wp_enqueue_script('jquery');
}
function si_animation_field() {
    $options = get_option('si_settings');
    $animation = $options['animation'] ?? 'none';
    ?>
    <select name="si_settings[animation]">
        <option value="none" <?php selected($animation, 'none'); ?>>None</option>
        <option value="vibrate" <?php selected($animation, 'vibrate'); ?>>Vibrate</option>
        <option value="bounce" <?php selected($animation, 'bounce'); ?>>Bounce</option>
    </select>
    <?php
}

function si_settings_page_html() {
    if (!current_user_can('manage_options')) return;
    ?>
    <div class="wrap">
        <h1>Suspension Icon Settings</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('si_settings_group');
            do_settings_sections('suspension-icon');
            submit_button();
            ?>
        </form>
    </div>
    <?php
}

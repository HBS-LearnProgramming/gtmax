<?php
/**
 * Plugin Name: Form EmailJS
 * Plugin URI:  https://example.com
 * Description: Custom form builder integrated with EmailJS. Allows users to design and configure form attributes & items.
 * Version:     1.1.0
 * Author:      GT-MAX
 * License:     GPL2
 */

if (!defined('ABSPATH')) exit;

class FormEmailJS {
    private $option_name = 'form_emailjs_settings';

    public function __construct() {
        add_action('init', [$this, 'register_block']);
        add_action('enqueue_block_editor_assets', [$this, 'enqueue_admin_assets']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_frontend_assets']);

        // Settings page
        add_action('admin_menu', [$this, 'register_settings_page']);
        add_action('admin_init', [$this, 'register_settings']);
    }

    // Register Gutenberg block
    public function register_block() {
        register_block_type(__DIR__ . '/block.json'); 
    }

    // Enqueue block editor assets
    public function enqueue_admin_assets() {
        wp_enqueue_script(
            'form-emailjs-block',
            plugins_url('block.js', __FILE__), // ✅ direct in root
            ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'],
            filemtime(plugin_dir_path(__FILE__) . 'block.js')
        );

        wp_enqueue_style(
            'form-emailjs-style',
            plugins_url('style.css', __FILE__), // ✅ direct in root
            [],
            filemtime(plugin_dir_path(__FILE__) . 'style.css')
        );

        $options = get_option($this->option_name);
        wp_localize_script('form-emailjs-block', 'FormEmailJSSettings', [
            'serviceId'  => $options['service_id'] ?? '',
            'templateId' => $options['template_id'] ?? '',
            'publicKey'  => $options['public_key'] ?? '',
        ]);
    }

    // Enqueue frontend assets
    public function enqueue_frontend_assets() {
        $options = get_option($this->option_name);
        $public_key = !empty($options['public_key']) ? esc_js($options['public_key']) : '';
        $service_id = !empty($options['service_id']) ? esc_js($options['service_id']) : '';
        $template_id = !empty($options['template_id']) ? esc_js($options['template_id']) : '';
         wp_enqueue_style(
            'form-emailjs-style',
            plugins_url('style.css', __FILE__),
            [],
            filemtime(plugin_dir_path(__FILE__) . 'style.css')
        );

        wp_enqueue_script(
            'form-emailjs-frontend',
            plugins_url('frontend.js', __FILE__),
            ['emailjs'],
            filemtime(plugin_dir_path(__FILE__) . 'frontend.js'),
            true
        );

        wp_localize_script('form-emailjs-frontend', 'FormEmailJSSettings', [
            'serviceId'  => $service_id,
            'templateId' => $template_id,
            'publicKey'  => $public_key,
        ]);

        wp_enqueue_script(
            'emailjs',
            'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js',
            [],
            null,
            true
        );

        if ($public_key) {
            wp_add_inline_script('emailjs', "emailjs.init('{$public_key}');");
        }
    }

    // Register settings page
    public function register_settings_page() {
        add_options_page(
            'Form EmailJS Settings',
            'Form EmailJS',
            'manage_options',
            'form-emailjs',
            [$this, 'settings_page_html']
        );
    }

    // Register settings
    public function register_settings() {
        register_setting($this->option_name, $this->option_name, ['sanitize_callback' => [$this, 'sanitize_settings']]);

        add_settings_section('form_emailjs_main', 'EmailJS Configuration', null, $this->option_name);

        add_settings_field('public_key', 'Public Key', [$this, 'field_public_key'], $this->option_name, 'form_emailjs_main');
        add_settings_field('service_id', 'Service ID', [$this, 'field_service_id'], $this->option_name, 'form_emailjs_main');
        add_settings_field('template_id', 'Default Template ID', [$this, 'field_template_id'], $this->option_name, 'form_emailjs_main');
    }

    // Sanitize settings
    public function sanitize_settings($input) {
        return [
            'public_key'  => sanitize_text_field($input['public_key']),
            'service_id'  => sanitize_text_field($input['service_id']),
            'template_id' => sanitize_text_field($input['template_id']),
        ];
    }

    // Field callbacks
    public function field_public_key() {
        $options = get_option($this->option_name);
        echo '<input type="text" name="' . $this->option_name . '[public_key]" value="' . esc_attr($options['public_key'] ?? '') . '" class="regular-text">';
    }

    public function field_service_id() {
        $options = get_option($this->option_name);
        echo '<input type="text" name="' . $this->option_name . '[service_id]" value="' . esc_attr($options['service_id'] ?? '') . '" class="regular-text">';
    }

    public function field_template_id() {
        $options = get_option($this->option_name);
        echo '<input type="text" name="' . $this->option_name . '[template_id]" value="' . esc_attr($options['template_id'] ?? '') . '" class="regular-text">';
    }

    // Settings page HTML
    public function settings_page_html() {
        
        if (!current_user_can('manage_options')) return;

        $options = get_option($this->option_name);
        wp_localize_script(
            'form-emailjs-block',
            'FormEmailJSSettings',
            [
                'serviceId'  => $options['service_id'] ?? '',
                'publicKey'  => $options['public_key'] ?? '',
                'templateId' => $options['template_id'] ?? '',
            ]
        );

        // Retrieve service_id safely
        $service_id = !empty($options['service_id']) ? esc_html($options['service_id']) : '';
        ?>

        <div class="wrap">
            <h1>Form EmailJS Settings</h1>
            <form method="post" action="options.php">
                <?php
                settings_fields($this->option_name);
                do_settings_sections($this->option_name);
                submit_button();
                ?>

                <h2>Preview Saved Values</h2>
            <p><strong>Service ID:</strong> <?php echo $service_id; ?></p>
            </form>
        </div>
        <?php
    }
}

new FormEmailJS();

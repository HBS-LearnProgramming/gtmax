<?php
/**
 * Plugin Name: Slide Animation Block
 * Description: A Gutenberg block that creates a horizontal sliding flex layout with configurable animation and styles.
 * Version: 1.1.0
 * Author: GT-MAX
 */

if (!defined('ABSPATH')) exit;

// Register block
function slide_animation_block_register_block() {
    wp_register_script(
        'slide-animation-block-editor-script',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-block-editor'),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );

    wp_register_style(
        'slide-animation-block-editor-style',
        plugins_url('build/editor.css', __FILE__),
        array('wp-edit-blocks')
    );

    wp_register_style(
        'slide-animation-block-style',
        plugins_url('build/style.css', __FILE__)
    );

    register_block_type('acro/slide-animation-block', array(
        'editor_script' => 'slide-animation-block-editor-script',
        'editor_style'  => 'slide-animation-block-editor-style',
        'style'         => 'slide-animation-block-style',
        'render_callback' => 'slide_animation_block_render',
        'attributes' => array(
            'gap' => array('type' => 'string', 'default' => '20px'),
            'borderRadius' => array('type' => 'string', 'default' => '12px'),
            'boxShadow' => array('type' => 'string', 'default' => '0 4px 10px rgba(0,0,0,0.2)'),
            'padding' => array('type' => 'string', 'default' => '10px'),
            'flexBasis' => array('type' => 'string', 'default' => '300px'),
            'justifyContent' => array('type' => 'string', 'default' => 'flex-start'),
            'alignItems' => array('type' => 'string', 'default' => 'center'),
            'animationSpeed' => array('type' => 'number', 'default' => 20),
            'translateFrom' => array('type' => 'number', 'default' => -100),
            'translateTo' => array('type' => 'number', 'default' => 100),
        ),
        'supports' => array(
            'align' => true,
            'html' => false,
            'multiple' => true,
            'innerBlocks' => true,
        ),
    ));
}
add_action('init', 'slide_animation_block_register_block');

function slide_animation_block_render($attributes, $content) {
    $gap = esc_attr($attributes['gap']);
    $borderRadius = esc_attr($attributes['borderRadius']);
    $boxShadow = esc_attr($attributes['boxShadow']);
    $padding = esc_attr($attributes['padding']);
    $flexBasis = esc_attr($attributes['flexBasis']);
    $justifyContent = esc_attr($attributes['justifyContent']);
    $alignItems = esc_attr($attributes['alignItems']);
    $animationSpeed = esc_attr($attributes['animationSpeed']);
    $translateFrom = esc_attr($attributes['translateFrom']);
    $translateTo = esc_attr($attributes['translateTo']);

    ob_start(); ?>
    <div class="slide-animation-container overflow-hidden w-full py-10" 
        data-speed="<?php echo $animationSpeed; ?>"
        data-from="<?php echo $translateFrom; ?>"
        data-to="<?php echo $translateTo; ?>"
    >
        <div class="slide-flex"
            style="
                display: flex;
                gap: <?php echo $gap; ?>;
                justify-content: <?php echo $justifyContent; ?>;
                align-items: <?php echo $alignItems; ?>;
                min-width: max-content;
            ">
            <?php echo $content; ?>
        </div>
    </div>

    <style>
        .slide-flex > * {
            flex: 0 0 <?php echo $flexBasis; ?>;
            border-radius: <?php echo $borderRadius; ?>;
            box-shadow: <?php echo $boxShadow; ?>;
            padding: <?php echo $padding; ?>;
            transition: transform 0.3s infinite;
        }
    </style>
    <?php
    return ob_get_clean();
}

// Enqueue frontend animation (looping version)
add_action('wp_footer', function() {
    ?>
    <script>
    document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll(".slide-animation-container");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const flex = entry.target.querySelector(".slide-flex");

                if (!flex) return;

                if (entry.isIntersecting) {
                    // Start infinite animation when visible
                    const from = parseFloat(entry.target.dataset.from);
                    const to = parseFloat(entry.target.dataset.to);
                    const speed = parseFloat(entry.target.dataset.speed);

                    // Cancel previous animation if exists
                    if (flex._animation) {
                        flex._animation.cancel();
                    }

                    // Create new infinite animation
                    flex._animation = flex.animate([
                        { transform: `translateX(${from}%)` },
                        { transform: `translateX(${to}%)` }
                    ], {
                        duration: speed * 1000,
                        direction: "normal",
                        iterations: Infinity,
                    });
                } else {
                    // Pause animation when out of view
                    if (flex._animation) {
                        flex._animation.cancel();
                        flex._animation = null;
                    }
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(sec => observer.observe(sec));
    });
    </script>
    <?php
});

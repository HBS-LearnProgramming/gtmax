<?php
/**
 * Plugin Name: Acro Timeline
 * Description: Custom timeline block with image, title, description, and configurable styles.
 * Version: 1.0.0
 * Author: GT-MAX
 */

if (!defined('ABSPATH')) exit;

// Enqueue block assets
function acro_timeline_register_block_assets() {
    $dir = plugin_dir_path( __FILE__ );
    $url = plugin_dir_url( __FILE__ );


    // Editor script (uses WordPress globals so no build step required)
    wp_register_script(
    'acro-timeline-editor',
    $url . 'block/editor.js',
    array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-block-editor', 'wp-components', 'wp-compose' ),
    filemtime( $dir . 'block/editor.js' )
    );


    // Editor styles
    wp_register_style(
    'acro-timeline-editor-style',
    $url . 'block/editor.css',
    array( 'wp-edit-blocks' ),
    filemtime( $dir . 'block/editor.css' )
    );


    // Frontend styles
    wp_register_style(
        'acro-timeline-style',
        $url . 'block/style.css',
        array(),
        filemtime( $dir . 'block/style.css' )
    );
    wp_register_script(
        'acro-timeline-frontend',
        $url . 'block/frontend.js',
        array(),
        filemtime( $dir . 'block/frontend.js' ),
        true
    );


    register_block_type( 'acro/timeline', array(
    'editor_script' => 'acro-timeline-editor',
    'editor_style' => 'acro-timeline-editor-style',
    'style' => 'acro-timeline-style',
    'script' => 'acro-timeline-frontend',
    // render_callback optional — we include it so server-rendered output exactly matches frontend
    'render_callback' => 'acro_timeline_render_callback',
    'attributes' => array(
    'items' => array('type' => 'array', 'default' => array()),
    'orientation' => array('type' => 'string', 'default' => 'vertical'),
    'lineColor' => array('type' => 'string', 'default' => '#2d2d2d')
    )
    ) );
}
add_action( 'init', 'acro_timeline_register_block_assets' );
function acro_timeline_render_callback( $attributes, $content ) {
    $items = isset( $attributes['items'] ) ? $attributes['items'] : array();
    $orientation = isset( $attributes['orientation'] ) ? $attributes['orientation'] : 'vertical';
    $lineColor = isset( $attributes['lineColor'] ) ? $attributes['lineColor'] : '#2d2d2d';


    ob_start();
    ?>
    <div 
        class="acro-timeline-root acro-timeline-<?php echo esc_attr( $orientation ); ?>" 
        data-orientation="<?php echo esc_attr( $orientation ); ?>" 
        style="--acro-line-color: <?php echo esc_attr( $lineColor ); ?>;"
    >
    
        <div class="acro-timeline-items">
            <?php foreach ( $items as $index => $item ):
                $time = isset( $item['time'] ) ? $item['time'] : '';
                $img = isset( $item['image'] ) ? $item['image'] : '';
                $imgSize = isset( $item['imageSize'] ) ? (int) $item['imageSize'] : 100;
                $title = isset( $item['title'] ) ? $item['title'] : '';
                $desc = isset( $item['description'] ) ? $item['description'] : '';
                $textColor = isset( $item['textColor'] ) ? $item['textColor'] : '';
                $textStyle = isset( $item['textStyle'] ) ? $item['textStyle'] : array();
                ?>
                <div class="acro-timeline-item">
                    <div class="acro-timeline-time">
                        <div class="timeline-time" style="<?php echo $textColor ? 'color:' . esc_attr( $textColor ) . ';' : ''; ?> <?php ?>"><?php echo esc_html( $time ); ?></div>
                        <div class="timeline-dot" style="<?php echo $textColor ? 'background-color:' . esc_attr( $textColor ) . ';' : ''; ?> <?php ?>"></div>
                    </div>
                        <div class="acro-timeline-line"></div> 
                        <div class="acro-timeline-content">
                            


                            <div class="acro-timeline-text" style="<?php echo $textColor ? 'color:' . esc_attr( $textColor ) . ';' : ''; ?>">
                                <h3 class="acro-timeline-title" style="<?php if ( ! empty( $textStyle['bold'] ) ) echo 'font-weight:700;'; ?>"><?php echo wp_kses_post( $title ); ?></h3>
                                <div class="acro-timeline-desc" style="<?php if ( ! empty( $textStyle['italic'] ) ) echo 'font-style:italic;'; if ( ! empty( $textStyle['underline'] ) ) echo 'text-decoration:underline;'; ?>">
                                    <?php echo wp_kses_post( $desc ); ?>
                                </div>
                            <?php if ( $img ): ?>
                                <div class="acro-timeline-image" style="width:<?php echo esc_attr( $imgSize ); ?>px; height:auto;">
                                    <img src="<?php echo esc_url( $img ); ?>" alt="" style="max-width:100%; height:auto; display:block;" />
                                    
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
        <?php
    return ob_get_clean();
}
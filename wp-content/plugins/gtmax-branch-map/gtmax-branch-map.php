<?php
/**
 * Plugin Name: GT-MAX Branch Map
 * Description: Display all GT-MAX branches on a single Google Map with custom branch info.
 * Version: 1.0.0
 * Author: GT-MAX
 */

if (!defined('ABSPATH')) exit;

// Register the block and scripts
function gtmax_branch_map_register_block() {
    wp_register_script(
        'gtmax-branch-map-editor',
        plugins_url('build/index.js', __FILE__),
        ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'],
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );

    wp_register_style(
        'gtmax-branch-map-style',
        plugins_url('src/index.css', __FILE__),
        [],
        filemtime(plugin_dir_path(__FILE__) . 'src/index.css')
    );

    register_block_type('gtmax/branch-map', [
        'editor_script' => 'gtmax-branch-map-editor',
        'style' => 'gtmax-branch-map-style',
        'render_callback' => 'gtmax_branch_map_render',
        'attributes' => [
            'branches' => [
                'type' => 'array',
                'default' => [],
                'items' => ['type' => 'object']
            ],
            'mapHeight' => ['type' => 'string', 'default' => '400px'],
            'mapZoom' => ['type' => 'number', 'default' => 12],
        ],
    ]);
}
add_action('init', 'gtmax_branch_map_register_block');

// Enqueue Google Maps API for frontend
function gtmax_branch_map_enqueue_scripts() {
    wp_enqueue_script(
        'google-maps-api',
        'https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY',
        [],
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'gtmax_branch_map_enqueue_scripts');

function gtmax_branch_map_render($attributes) {
    $branches = $attributes['branches'];
    $map_id = 'gtmax-map-' . uniqid();

    ob_start();
    ?>
    <div id="<?php echo esc_attr($map_id); ?>" style="width:100%; height:<?php echo esc_attr($attributes['mapHeight']); ?>;"></div>
    <script>
    (function() {
        const branches = <?php echo json_encode($branches); ?>;
        function initMap() {
            if (!branches.length) return;

            const map = new google.maps.Map(document.getElementById('<?php echo esc_js($map_id); ?>'), {
                zoom: <?php echo esc_js($attributes['mapZoom']); ?>,
                center: { lat: parseFloat(branches[0].lat), lng: parseFloat(branches[0].lng) }
            });

            branches.forEach(branch => {
                const marker = new google.maps.Marker({
                    position: { lat: parseFloat(branch.lat), lng: parseFloat(branch.lng) },
                    map: map,
                    title: branch.title || ''
                });

                const infoWindow = new google.maps.InfoWindow({
                    content: `
                        <div style="max-width:250px">
                            ${branch.image ? `<img src="${branch.image}" style="width:${branch.imageWidth || '100px'};height:${branch.imageHeight || '100px'};border-radius:8px" />` : ''}
                            <h4>${branch.title || ''}</h4>
                            <p>${branch.description || ''}</p>
                        </div>
                    `
                });

                marker.addListener('click', () => infoWindow.open(map, marker));
            });
        }

        if (window.google && window.google.maps) {
            initMap();
        } else {
            window.addEventListener('load', initMap);
        }
    })();
    </script>
    <?php
    return ob_get_clean();
}

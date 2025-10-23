<?php
if (function_exists('yoast_breadcrumb')) {
    echo '<div class="container px-10 py-5 text-sm text-gray-600">';
    yoast_breadcrumb('<p id="breadcrumbs">','</p>');
    echo '</div>';
}
?>
<header id="site-header" class="static bg-white z-10 w-full px-10 transition-all duration-300">
    <nav class="flex items-center basis-full w-full justify-between">
        <a href="<?php echo esc_url(home_url('/')); ?>">
            <img src="<?php echo get_template_directory_uri(); ?>/images/home/0001807_gt-max.png" 
                 alt="Site Logo" class="site-logo">
        </a>
        <?php
        wp_nav_menu(array(
            'menu'           => 'Header',
            'menu_class'     => 'header-menu flex gap-5',
            'container'      => false,
        ));
        ?>
    </nav>
</header>

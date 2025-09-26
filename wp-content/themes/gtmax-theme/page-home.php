
<?php
/**
 * Template Name: WP Home
 * Description: Custom design for homepage
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <header id="site-header" class="absolute z-10 w-full px-5 transition-all duration-300">
        <!-- <div id="cloud" class="block overflow-hidden absolute -top-[100px] left-0 w-full z-0">
            <div class="flex justify-between animate-cloud relative">
                <img src="<?php echo get_template_directory_uri(); ?>/images/home/cloud.png" class="cloud-img" alt="">
                <img src="<?php echo get_template_directory_uri(); ?>/images/home/cloud.png" class="cloud-img" alt="">
            </div>
        </div> -->
        
        <nav class="flex relative items-center basis-full w-full justify-between z-10">
            <a href="<?php echo esc_url(home_url('/')); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/home/0001807_gt-max.png" 
                            alt="Site Logo" class="site-logo"></a>
            <?php
            wp_nav_menu(array(
                'menu'           => 'Header',
                'menu_class'     => 'header-menu',
                'container'      => false,
            ));
            ?>
        </nav>
    </header>

    <main>
        <?php
        if ( have_posts() ) :
            while ( have_posts() ) : the_post();
                the_content();
            endwhile;
        else :
            echo '<p>No content found</p>';
        endif;
        ?>
    </main>
    
<?php get_footer(); ?>
    
<script>
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("site-header");
    // const cloud = document.getElementById('cloud');
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.remove("absolute");
            // cloud.classList.remove('block');
            // cloud.classList.add('hidden');
            header.classList.add("fixed", "bg-white", "shadow-md");
        } else {
            header.classList.add("absolute");
            // cloud.classList.remove('hidden');
            // cloud.classList.add('block');
            header.classList.remove("fixed", "bg-white", "shadow-md");
        }
    });
});
</script>
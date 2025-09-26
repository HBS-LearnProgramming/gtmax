
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
    <header id="site-header" class="static bg-white z-10 w-full px-5 transition-all duration-300">
        <nav class="flex items-center basis-full w-full justify-between">
            <a href="<?php echo esc_url(home_url('/')); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/home/0001807_gt-max.png" 
                            alt="Site Logo" class="site-logo"></a>
            <?php
            wp_nav_menu(array(
                'menu'           => 'Header',
                'menu_class'     => 'header-menu flex gap-5',
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

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.remove('static');
            header.classList.add('fixed',"shadow-md");
        } else {
            header.classList.remove('fixed',"shadow-md");
            header.classList.add('static');
            
        }
    });
});
</script>
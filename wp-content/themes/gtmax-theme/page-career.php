
<?php
/**
 * Template Name: WP CAREER
 * Description: Custom design for careerpage
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
    <header id="site-header" class="static bg-white z-10 w-full px-20 transition-all duration-300">
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
    <div class="overflow-hidden h-auto py-10 w-full">
        <div class="animate-cloud grid p-5 grid-row-2 gap-4 grid-flow-col min-w-[1800px] max-w-fit">
            <div 
                class="career-box w-[500px] h-[450px] row-span-2"
                style="background-image: url('<?php echo esc_url( get_site_url() . '/wp-content/uploads/2025/10/IMG-20251009-WA0054.jpg' ); ?>');">
            </div>
            <div 
                class="career-box w-[300px] h-54 row-span-1"
                style="background-image: url('<?php echo esc_url( get_site_url() . '/wp-content/uploads/2025/10/IMG-20251009-WA0023.jpg' ); ?>');">
            </div>
            <div 
                class="career-box w-full h-54 px-5 text-xl row-span-1 text-primary flex items-center text-center justify-center"
                >
                We do the best, we get the best
            </div>
            <div 
                class="career-box w-[1000px] h-full row-span-2 cols-span-3"
                style="background-image: url('<?php echo esc_url( get_site_url() . '/wp-content/uploads/2025/10/IMG-20251009-WA0036.jpg' ); ?>');">
            </div>
            <div 
                class="career-box w-[300px] h-54 p-5 text-xl row-span-1 text-primary flex items-center text-center justify-center"
                >
                All going be happen, when you start your foot
            </div>
            <div 
                class="career-box w-[300px] h-54 row-span-1"
                style="background-image: url('<?php echo esc_url( get_site_url() . '/wp-content/uploads/2025/10/IMG-20251009-WA0025.jpg' ); ?>');">
            </div>
            <div 
                class="career-box w-[1000px] h-full row-span-2 cols-span-3"
                style="background-image: url('<?php echo esc_url( get_site_url() . '/wp-content/uploads/2025/10/IMG-20251009-WA0032.jpg' ); ?>');">
            </div>

            <!-- Repeat content -->
             <div 
                class="career-box w-[500px] h-[450px] row-span-2"
                style="background-image: url('<?php echo esc_url( get_site_url() . '/wp-content/uploads/2025/10/IMG-20251009-WA0054.jpg' ); ?>');">
            </div>
        </div>
    </div>

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
    const cloudContainer = document.querySelector(".animate-cloud");
    const boxes = document.querySelectorAll(".career-box");

    // Pause animation on hover
    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            cloudContainer.classList.add("paused");
        });
        box.addEventListener("mouseleave", () => {
            cloudContainer.classList.remove("paused");
        });
    });
    
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
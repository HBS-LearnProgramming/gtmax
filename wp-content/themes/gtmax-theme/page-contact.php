
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
    <header id="site-header" class="static bg-white z-10 w-full px-10 transition-all duration-300">
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

        <div class="relative mt-25">
            <div class="w-[95vw] top bg-gray-100 py-10 mx-auto absolute -top-10 left-7">
                <div class="flex justify-evenly ">
                    <div class="relative basis-1/3">
                        <div class="icon-box-cover">
                            <div class="icon-box">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                        </div>
                        <div>
                            <h1 class="contact-icon-title">Our Office Location</h1>
                            <div class="mt-4 justify-center flex">
                                <a target="_blank" href="https://maps.app.goo.gl/YYPvszJBrQnZ9SXJ8">
                                    <p>9A, Jalan Bestari 1A/KU7, </p>
                                    <p>Taman Perindustrian Kapar Bestari, </p> 
                                    <p>42200 Kapar, Selangor </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="relative basis-1/3">
                        <div class="icon-box-cover">
                            <div class="icon-box">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                        </div>
                        <div>
                            <h1 class="contact-icon-title">Email</h1>
                            <div class="mt-4 justify-center flex">
                                <div>
                                    <a href="mailto:Customercare@gtmax.com.my">Customercare@gtmax.com.my</a>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="relative basis-1/3">
                        <div class="icon-box-cover">
                            <div class="icon-box">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                        </div>
                        <div>
                            <h1 class="contact-icon-title">Contact Number</h1>
                            <div class="mt-4 justify-center flex">
                                <div>
                                    <div class="">
                                        <b>Phone</b>
                                        <a href="tel:+60332902890">: 03-3290 2890</a>
                                    </div>
                                    <div class="">
                                        <b>Fax</b>
                                        <a href="tel:+60351226998">: 03-5122 6998</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full bg-primary h-58">

            </div>
        </div>
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
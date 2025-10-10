
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
    <style>
        .animation-typing-box {
            color: #4b4960ff;
            font-family: 'D-DIN', sans-serif;
            font-size: 18px;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            margin-right: 90px;
        }

        .animation-typing-box .animation-main{
            font-size: 28px;
            font-weight: bold;
            color: #262161;
        }

        .home-cover:last-child .animation-typing-box{
            text-align: left;
            margin: 0%;
        }

        
    </style>
</head>
<body <?php body_class(); ?>>
    <header id="site-header" class="absolute z-10 w-full px-20 translate-y-6 transition-all duration-300">
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
    <div>
        <div class="home-cover relative w-full h-screen overflow-hidden flex justify-center bg-cover bg-no-repeat bg-center items-center z-0" style="background-image: url(<?php echo get_template_directory_uri() . '\images\home\homepage_img.png' ?>)">
            <video autoplay muted loop playsinline class="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover">
                <source src="<?php echo get_template_directory_uri() . '\images\home\homepage_video.mp4'; ?>" type="video/mp4">
                Your browser does not support the video tag.
            </video>


            <div class="absolute container mx-auto h-full top-0 flex justify-center items-center ">
                <div class="flex w-full translate-x-[8px] sm:translate-x-[-8px]">
                    <div class="pt-[15%] relative flex justify-start items-end">
                        <img class="sm:w-[30%] w-[30%]" src="<?php echo get_template_directory_uri() . '/images/home/word-thankfulMemorialGallery_1.png' ?>" alt="">
                    </div>
                    <div class=""></div>

                </div>
            </div>
            <div class="animation-typing-box text-lg absolute z-2 right-2">
                <span id="typing-text"></span>
            </div>
            
        </div>

        <div class="home-cover relative w-full h-screen overflow-hidden flex justify-center bg-cover bg-no-repeat bg-center items-center z-0" style="background-image: url(<?php echo wp_upload_dir()['baseurl'] . '/2025/09/web-video.gif' ?>)">
            
            <div class="animation-typing-box text-lg absolute z-2 left-20 top-50">
                <span id="typing-text2"></span>
            </div>
            
        </div>
    </div>

    <main class="relative">
        <?php
        if ( have_posts() ) :
            while ( have_posts() ) : the_post();
                the_content();
            endwhile;
        else :
            echo '<p>No content found</p>';
        endif;
        ?>
        
        <div >
            <div class="diagram-section">
            <!-- 5I Diagram -->
            <section class="fivei-diagram">
                <h2 class="diagram-title">5I Philosophy</h2>
                <div class="diagram-container">
                <div class="circle-center">5I</div>
                <div class="circle-item-hover">
                    <div class="circle-item imagination" data-title="Imagination" data-desc="Dream big and challenge.">Imagination</div>
                </div>
                <div class="circle-item-hover">
                    <div class="circle-item innovation" data-title="Innovation" data-desc="Constant change and creativity.">Innovation</div>
                </div>
                <div class="circle-item-hover"><div class="circle-item integration" data-title="Integration" data-desc="Micro view and totality.">Integration</div></div>
                <div class="circle-item-hover"><div class="circle-item involvement" data-title="Involvement" data-desc="Passion and participation.">Involvement</div></div>
                <div class="circle-item-hover"> <div class="circle-item interaction" data-title="Interaction" data-desc="Communication and socialize.">Interaction</div></div>
                </div>
                <div class="item-info"></div>
            </section>

            <!-- 5S Diagram -->
            <section class="fives-diagram">
                <h2 class="diagram-title">5S Philosophy</h2>
                <div class="diagram-container">
                    <div class="circle-center">5S</div>
                    <div class="circle-item-hover">
                        <div class="circle-item sort" data-title="Sort" data-desc="Keep only what’s needed and remove the rest.">
                            Sort
                        </div>
                    </div>
                    <div class="circle-item-hover">
                        <div class="circle-item set" data-title="Set in Order" data-desc="Organize items so everything is easy to find and use.">
                            Set in Order
                        </div>
                    </div>
                    <div class="circle-item-hover">
                        <div class="circle-item shine" data-title="Shine" data-desc="Keep the workplace clean and spot problems quickly.">
                            Shine
                        </div>
                    </div>
                    <div class="circle-item-hover">
                        <div class="circle-item standardize" data-title="Standardize" data-desc="Create rules to maintain cleanliness and order.">
                            Standardize
                        </div>
                    </div>
                    <div class="circle-item-hover">
                        <div class="circle-item sustain" data-title="Sustain" data-desc="Build habits to maintain standards long-term.">
                            Sustain
                        </div>
                    </div>
                </div>

                <div class="item-info"></div>
            </section>

            </div>

        </div>
    </main>
    
    
<?php get_footer(); ?>
<script>
document.addEventListener("DOMContentLoaded", function () {
  // Header scroll logic remains the same...
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.remove("absolute", "translate-y-6");
      header.classList.add("fixed", "bg-white", "shadow-md");
    } else {
      header.classList.add("absolute", "translate-y-6");
      header.classList.remove("fixed", "bg-white", "shadow-md");
    }
  });

  // === Diagram hover description logic ===
  const diagrams = document.querySelectorAll('.diagram-container');

  diagrams.forEach(diagram => {
    const infoBox = diagram.nextElementSibling;
    const items = diagram.querySelectorAll('.circle-item-hover');

    items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const ball = item.querySelector('.circle-item')
        const title = ball.getAttribute('data-title');
        const desc = ball.getAttribute('data-desc');
        infoBox.innerHTML = `<strong>${title}</strong>: ${desc}`;
        infoBox.style.opacity = '1';
      });
      item.addEventListener('mouseleave', () => {
        infoBox.style.opacity = '0';
      });
    });
  });
  const typingText = document.getElementById("typing-text");
  const typingText2 = document.getElementById("typing-text2");
  const currentYear = new Date().getFullYear();
  const period_industry = currentYear - 1993;
  const lines = [
    period_industry+" Years in the Motorcycle Industry,",
    "GT-MAX MOTORS (M) SDN BHD Incorporated on 14th JULY 1993,",
    "with 17 retail outlets operating at the moment."
  ];

let lineIndex = 0;
let charIndex = 0;
let typingSpeed = 30; // typing speed in ms
let lineDelay = 1000; // delay before next line starts

function typeLine() {
  if (lineIndex < lines.length) {
    const currentLine = lines[lineIndex];

    // Build previously typed lines
    let previousLines = lines.slice(0, lineIndex)
      .map((text, i) => (i === 0 ? `<span class='animation-main'>${text}</span>` : text))
      .join("<br>");

    // Build current typing progress
    let currentTyped =
      lineIndex === 0
        ? `<span class='animation-main'>${currentLine.substring(0, charIndex + 1)}</span>`
        : currentLine.substring(0, charIndex + 1);

    typingText.innerHTML = previousLines
      ? previousLines + "<br>" + currentTyped
      : currentTyped;
    typingText2.innerHTML = previousLines
      ? previousLines + "<br>" + currentTyped
      : currentTyped;
    if (charIndex < currentLine.length - 1) {
      charIndex++;
      setTimeout(typeLine, typingSpeed);
    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, lineDelay);
    }
  } else {
    
    
  }
}


typeLine();
});
</script>

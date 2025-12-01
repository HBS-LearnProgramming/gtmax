
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
            font-size: 15px;
            text-transform: uppercase;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            right: 45px;
            position: absolute;
        }

        .animation-typing-box .animation-main{
            font-size: 25px;
            font-weight: bold;
            color: #262161;
        }


        
    </style>
</head>
<body <?php body_class(); ?>>
    <header id="site-header" class="absolute z-10 w-full px-10 translate-y-6 transition-all duration-300">
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
        
        <div class="home-cover relative w-full h-[30vh] lg:h-screen overflow-hidden flex justify-center bg-cover bg-no-repeat bg-center items-center z-0" style="background-image: url(<?php echo get_template_directory_uri() . '/images/home/HQ_KAPAR_VIDEO.png' ?>)">
            <video id="myVideo" autoplay muted loop playsinline class="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover">
                <source src="<?php echo get_template_directory_uri() . '/images/home/stablizer1.mp4'; ?>" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <div class="abolute w-full h-[30vh] z-2 lg:h-screen" style="background: linear-gradient(100deg,rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 90%);">
                <div class="animation-typing-box text-lg right-3 top-1/2">
                    <span id="typing-text" class="typing-container"></span>
                </div>
            </div>
            
            
        </div>
        <!-- <div class="home-cover relative w-full h-screen overflow-hidden flex justify-center bg-cover bg-no-repeat bg-center items-center z-0" style="background-image: url(<?php echo wp_upload_dir()['baseurl'] . '/2025/09/web-video.gif' ?>)">
            
            <div class="animation-typing-box text-lg absolute z-2 left-20 top-50">
                <span id="typing-text2"></span>
            </div>
            
        </div> -->

        
    </div>
    <?php
    /**
     * Template Part - Main Content with 5I/5S Diagram
     */

    // Helper function to find ALL blocks by metadata name (recursive)
    function findBlocksByMetadataName($blocks, $targetName, &$matches = []) {
        foreach ($blocks as $block) {
            if (isset($block['attrs']['metadata']['name']) && $block['attrs']['metadata']['name'] === $targetName) {
                $matches[] = $block;
            }

            if (!empty($block['innerBlocks'])) {
                findBlocksByMetadataName($block['innerBlocks'], $targetName, $matches);
            }
        }
        return $matches;
    }
    ?>
<div class="bg-[#f6f6f6] flex px-10 items-center py-20">
    <div class=" text-2xl font-bold text-primary basis-2/12">
        Who We Are
    </div>
    <div class="basis-10/12">
        <div class="border-l border-solid border-gray-700 w-9/12 text-[30px] pl-8 text-justify">
            Founded in 1993, GT-MAX Motors (M) Sdn Bhd began as a small motorcycle repair shop in Shah Alam and has since grown into one of Malaysia’s leading motorcycle dealers.
    For over three decades, we’ve been empowering riders across the nation with reliable motorcycles, trusted service, and a passion for two-wheeled freedom.
        </div>
    </div>
</div>
<div class="flex justify-evenly pt-20">
    <div class=""></div>
    <div class="data-border">
        <h1 class="data-header" id="year-data"></h1>
        <div class="data-content">Years of trusted experience</div>
    </div>
    <div class="data-border">
        <h1 class="data-header">17 Branches </h1>
        <div class="data-content">Across Selangor and Klang Valley</div>
    </div>
    <div class="data-border">
        <h1 class="data-header">250,000+ </h1>
        <div class="data-content">Riders served</div>
    </div>
</div>
<main class="relative px-10">

<?php
if (have_posts()) :
    while (have_posts()) : the_post();

        // Parse Gutenberg blocks from page content
        $blocks = parse_blocks(get_the_content());

        // Find all "first" and "last" blocks (there might be multiple)
        $firstBlocks = findBlocksByMetadataName($blocks, 'first');
        $lastBlocks  = findBlocksByMetadataName($blocks, 'last');

        // Render ALL "first" blocks (before diagram)
        if (!empty($firstBlocks)) {
            foreach ($firstBlocks as $block) {
                echo render_block($block);
            }
        }
        ?>

        
        <div class="">
            <div class="overflow-hidden h-fit py-10 w-full mb-30">
                <div class="animate-cloud grid p-5 grid-row-2 gap-4 grid-flow-col min-w-[1800px] max-w-fit">
                    <div 
                        class="career-box w-[500px] h-[400px] row-span-2"
                        style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/home/branches/Bukit_Beruntung.jpg');">
                    </div>
                    <div 
                        class="career-box w-[300px] h-[400px] row-span-2"
                        style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/home/branches/GT-Max_Meru.jpeg');">                    
                    </div>
                    <div 
                        class="career-box w-[1000px] h-[400px] row-span-2 cols-span-3"
                        style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/home/branches/yamaha_lifestyle_zone1and2.jpg');">                    
                    </div>
                    <div 
                        class="career-box w-[300px] h-[190px] row-span-1"
                        style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/home/branches/Zone3.jpeg');">                    
                    </div>
                    <div 
                        class="career-box w-[300px] h-[190px] row-span-1"
                        style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/home/branches/yamaha_lifestyle_zone2(service).jpg');">                    
                    </div>

                    <!-- Repeat content -->
                    <div 
                        class="career-box w-[500px] h-[400px] row-span-2"
                        style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/home/branches/Bukit_Beruntung.jpg');">
                    </div>
                    <div 
                        class="career-box w-[300px] h-[400px] row-span-2"
                        style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/home/branches/GT-Max_Meru.jpeg');">                    
                    </div>
                    <div 
                        class="career-box w-[1000px] h-[400px] row-span-2 cols-span-3"
                        style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/home/branches/yamaha_lifestyle_zone1and2.jpg');">                    
                    </div>
                    <div 
                        class="career-box w-[300px] h-[190px] row-span-1"
                        style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/home/branches/Zone3.jpeg');">                    
                    </div>
                    <div 
                        class="career-box w-[300px] h-[190px] row-span-1"
                        style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/home/branches/yamaha_lifestyle_zone2(service).jpg');">                    
                    </div>
                </div>
            </div>
            <div class="flex gap-5">
                <div class="flex justify-center basis-1/2 gap-5 shadow rounded shadow-gray-700 p-8">
                    <div class="flex items-center justify-content-center">
                        <img class="w-96 h-auto" src="<?php echo get_template_directory_uri() . '\images\home\idea.png' ?>" alt="">
                    </div>
                    <div class="p-8">
                        <h1 class="diagram-title text-center">Our Vision</h1>
                        <div class="w-full text-lg mx-auto">
                            To become Malaysia’s most trusted and innovative motorcycle brand, connecting every rider to the perfect ride and service experience. 
                        </div>
                    </div>
                </div>
                <div class="flex justify-center basis-1/2 gap-5 shadow rounded shadow-gray-700 p-8">
                    <div class="flex items-center justify-content-center">
                        <img  class="w-78 h-auto"src="<?php echo get_template_directory_uri() . '\images\home\mission.png' ?>" alt="">
                    </div>
                    <div class="p-8">
                        <h1 class="diagram-title text-center">Our Mission</h1>
                        <div class="w-full text-lg mx-auto">
                            To make motorcycle ownership simple, accessible, and enjoyable — through innovation, integrity, and exceptional service.
                        </div>
                    </div>
                </div>
            </div>
            <!-- === Diagram Section === -->
            <div class="diagram-section ">
                <h1 class="diagram-title text-center text-primary typing-animation">Our Philosophy</h1>
                <div class="flex mt-20 flex-wrap lg:center justify-center">
                    <!-- 5I Diagram -->
                    <section class="fivei-diagram sm:basis-full lg:basis-auto sm:mb-30 lg:mb-0">
                        <div class="diagram-container">
                            <div class="circle-center">1C5S</div>

                            <div class="circle-item-hover">
                                <div class="circle-item customer" data-title="Customer" data-desc="Build Up Customer Loyalty through engage activities">
                                    <div>
                                        <p>1C</p>
                                        <p>CUSTOMER</p>
                                    </div>
                                    
                                </div>
                                <div class="description">
                                    <div class="dec-line"></div>
                                    <div class="content">
                                        Build Up Customer Loyalty through engage activities
                                    </div>
                                </div>
                                
                            </div>
                            <div class="circle-item-hover">
                                <div class="circle-item sales" data-title="Sales" data-desc="Increase motorcycle sales. And Build up strong shop branding through motorsports activies.">
                                    <div>
                                        <p>1S</p>
                                        <p>SALES</p>
                                    </div>
                                </div>
                                <div class="description">
                                    <div class="dec-line"></div>
                                    <div class="content">
                                        Increase motorcycle sales. And Build up strong shop branding through motorsports activies.
                                    </div>
                                </div>
                            </div>
                            <div class="circle-item-hover">
                                <div class="circle-item services" data-title="Services" data-desc="Gain customer trues through mechanics upskilling and excellent after sales support.">
                                    <div>
                                        <p>2S</p>
                                        <p>SERVICES</p>
                                    </div>
                                </div>
                                <div class="description">
                                    <div class="dec-line"></div>
                                    <div class="content">
                                        Gain customer trues through mechanics upskilling and excellent after sales support.
                                    </div>
                                </div>
                            </div>
                            <div class="circle-item-hover">
                                <div class="circle-item sparepart" data-title="Spare Part" data-desc="Build up YGP and Yamalube branding to boost up sales.">
                                    <div>
                                        <p>3S</p>
                                        <p>SPARE PART</p>
                                    </div>
                                </div>
                                <div class="description">
                                    <div class="content">
                                        Build up YGP and Yamalube branding to boost up sales.
                                    </div>
                                    <div class="dec-line"></div>
                                </div>
                            </div>
                            <div class="circle-item-hover">
                                <div class="circle-item society" data-title="Society" data-desc="Contribute back to society and increase brand awareness.">
                                    <div>
                                        <p>4S</p>
                                        <p>SOCIETY</p>
                                    </div>
                                </div>
                                <div class="description">
                                    <div class="content">
                                        Contribute back to society and increase brand awareness.
                                    </div>
                                    <div class="dec-line"></div>
                                </div>
                            </div>
                            <div class="circle-item-hover">
                                <div class="circle-item safety" data-title="Safety" data-desc="Enhance safety awareness of the customer.">
                                    <div>
                                        <p>5S</p>
                                        <p>SAFETY</p>
                                    </div>
                                </div>
                                <div class="description">
                                    
                                    <div class="content">
                                        Enhance safety awareness of the customer.
                                    </div>
                                    <div class="dec-line"></div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="item-info"></div>
                    </section>

                </div>
                
            
            </div>


        </div>

        <?php
        // Render ALL "last" blocks (after diagram)
        if (!empty($lastBlocks)) {
            foreach ($lastBlocks as $block) {
                echo render_block($block);
            }
        }

    endwhile;
else :
    echo '<p>No content found.</p>';
endif;
?>
</main>



    
    
<?php get_footer(); ?>
<script>
document.addEventListener("DOMContentLoaded", function () {
  // Header scroll logic
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

    const text = "Our Philosophy";
    const title = document.querySelector(".typing-animation");
    let index = 0;
    let typing = false; // Prevent overlapping animations

    function type() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(type, 60);
        } else {
            typing = false; // finished typing
            title.classList.remove("show-cursor");
        }
    }

    function startTyping() {
        if (!typing) {
            typing = true;
            index = 0;
            title.textContent = ""; // reset text
            title.classList.add("show-cursor");
            type();
        }
    }

    // 👀 Observe when the element enters the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startTyping(); // restart typing when visible
            }
        });
    }, { threshold: 0.5 }); // 0.5 = trigger when 50% visible

    observer.observe(title);
    const description = document.querySelectorAll('.description');
    const tooltip = document.createElement('div');
    if (window.innerWidth < 1000) {
        description.forEach(el => el.style.display = 'none');
        // === Tooltip logic for diagram items ===
        
        tooltip.className = 'diagram-tooltip';
        document.body.appendChild(tooltip);

        const diagrams = document.querySelectorAll('.diagram-container');
        diagrams.forEach(diagram => {
            const items = diagram.querySelectorAll('.circle-item-hover');

            items.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                const ball = item.querySelector('.circle-item');
                const title = ball.getAttribute('data-title');
                const desc = ball.getAttribute('data-desc');
                tooltip.innerHTML = `<strong>${title}</strong><br>${desc}`;
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';

                const rect = e.target.getBoundingClientRect();
                const tooltipX = rect.left + rect.width / 2;
                const tooltipY = rect.top - 10; // above the circle
                tooltip.style.left = `${tooltipX}px`;
                tooltip.style.top = `${tooltipY}px`;
            });

            item.addEventListener('mousemove', (e) => {
                const tooltipX = e.pageX + 15;
                const tooltipY = e.pageY - 20;
                tooltip.style.left = `${tooltipX}px`;
                tooltip.style.top = `${tooltipY}px`;
            });

            item.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
            });
            });
        });
    }else{
        description.forEach(el => {
            el.style.display = 'flex';
            el.style.alignItems = 'center';
        });

        // Hide tooltip when desktop view is active
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
    }
  

  // === Typing animation logic (unchanged) ===
  const typingText = document.getElementById("typing-text");
//   const typingText2 = document.getElementById("typing-text2");
  const currentYear = new Date().getFullYear();
  const period_industry = currentYear - 1993;
  document.getElementById('year-data').innerText= period_industry+' Years';
  const lines = [
    period_industry + " Years in the Motorcycle Industry",
    "GT-MAX MOTORS (M) SDN BHD Incorporated on 14th JULY 1993,",
    "with 17 retail outlets operating at the moment."
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let typingSpeed = 30;
  let lineDelay = 1000;

  function typeLine() {
    if (lineIndex < lines.length) {
      const currentLine = lines[lineIndex];
      let previousLines = lines.slice(0, lineIndex)
        .map((text, i) => (i === 0 ? `<span class='animation-main'>${text}</span>` : text))
        .join("<br>");
        console.log('previousLines: ', previousLines);
      let currentTyped =
        lineIndex === 0
          ? `<span class='animation-main'>${currentLine.substring(0, charIndex + 1)}</span>`
          : currentLine.substring(0, charIndex + 1);

      typingText.innerHTML = previousLines
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
    }
  }
  const linesHTML = lines.map((line, index) => {
    const animClass = "slideLeft";
    const extraClass = index === 0 ? "animation-main" : "";
    return `<div class="${animClass} ${extraClass}">${line}</div><br>`;
  }).join("");

  typingText.innerHTML = linesHTML;

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

});

</script>

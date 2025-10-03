<div class="flex flex-wrap gap-20 container justify-between px-5 border-t border-solid border-gray-500 pt-5 ">
        <div>
            <script type="text/javascript"
                    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
            </script>
            <script src="https://kit.fontawesome.com/7ccdf6a3cd.js" crossorigin="anonymous"></script>
            <script type="text/javascript">
            (function(){
                emailjs.init({
                    publicKey: "-6JWNPn2ntc3Cl1-A",
                });
            })();
            </script>
            <form action="" id="subscribe-form">
                <label class="text-gray-400" for="email">Newsletter</label>
                <div class="flex">
                    
                    <input type="email" id="email" class="border rounded-l border-solid border-gray-300 px-5 py-2 outline-0 m-0" placeholder="Enter your email here...">
                    <button type="submit" class="bg-yellow-400 rounded-r text-white text-xl px-3 py-1 hover:cursor-pointer hover:bg-yellow-500"><i class="fa-solid fa-envelope"></i></button>
                    <div class="loader loader--style1" id="loading" title="0">
                        <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
                        <path opacity="0.2" fill="#016c11ff" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                            s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                            c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
                        <path fill="#016c11ff" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                            C22.32,8.481,24.301,9.057,26.013,10.047z">
                            <animateTransform attributeType="xml"
                            attributeName="transform"
                            type="rotate"
                            from="0 20 20"
                            to="360 20 20"
                            dur="0.5s"
                            repeatCount="indefinite"/>
                            </path>
                        </svg>
                        </div>
                </div>
            </form>
            <p id="status" class="mt-2 text-sm"></p>
        </div>
        <?php $footer_menu = ['information', 'customer service']; 
            foreach ($footer_menu as $menu) { ?>
                <div>
                    <h1 class="uppercase font-bold text-base"><?= esc_html($menu) ?></h1>
                    <?php
                    wp_nav_menu(array(
                        'menu'           => $menu,
                        'menu_class'     => 'footer-menu',
                        'container'      => false,
                    ));
                    ?>
                </div>
               
        <?php 
            }
        ?>
        <div>
            <div>
                <h1 class="uppercase font-bold">follow us</h1>
                <div class="flex gap-1 mt-2">
                    <a target="_blank" href="https://www.facebook.com/photo.php?fbid=944869707679358&id=100064690118199&set=a.496755992490734"><img class="icon_size" src="<?php echo get_template_directory_uri(); ?>/images/icon/facebook.png" alt="" srcset=""></a>
                    <a target="_blank" href="https://www.youtube.com/@gtmaxmotors9580"><img class="icon_size" src="<?php echo get_template_directory_uri(); ?>/images/icon/youtube.png" alt="" srcset=""></a>
                    <a target="_blank" href="https://www.instagram.com/gtmaxmotors/"><img class="icon_size" src="<?php echo get_template_directory_uri(); ?>/images/icon/instagram.png" alt="" srcset=""></a>
                    <a target="_blank" href="https://www.tiktok.com/@gtmaxmotorofficial"><img class="icon_size" src="<?php echo get_template_directory_uri(); ?>/images/icon/tiktok.png" alt="" srcset=""></a>
                </div>
            </div>
        </div>

    </div>

    <footer>
        <!-- <p class="bg-[#484444] text-center"><span class="text-white">Copyright &copy; <?php echo date("Y"); ?> <?php bloginfo('name'); ?>. All rights reserved.</span></p> -->
        <p class="bg-[#484444] text-center"><span class="text-white">Power by <?php bloginfo('name'); ?></span></p>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>


<?php
/**
 * Template Name: WP insurance
 * Description: Custom design for insurance page
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
    <style>
        .input-error {
            border-color: #dc2626 !important;
        }

        .input-success {
            border-color: #16a34a !important;
        }
    </style>
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
        <div class="container px-10 mx-auto mt-20 lg:mt-0 lg:min-h-auto h-auto min-h-[78.5vh]">
            <div class="lg:w-1/2 w-full mx-auto">
                <div class="flex justify-end gap-4 my-6">
                    <button class="lang-btn px-4 py-2 border rounded text-[#478ac9] font-bold cursor-pointer hover:scale-110" data-lang="en">EN</button>
                    <button class="lang-btn px-4 py-2 border rounded text-[#478ac9] font-bold cursor-pointer hover:scale-110" data-lang="zh">中文</button>
                    <button class="lang-btn px-4 py-2 border rounded text-[#478ac9] font-bold cursor-pointer hover:scale-110" data-lang="bm">BM</button>
                </div>
            </div>
            <!-- start insurance form design -->
            <div class="lg:w-1/2 w-full mx-auto mb-20">
                <h1 data-i18n="main_title" class="text-4xl font-bold text-center mx-1 mb-4">Renew Your Motor Insurance in <span class="text-[#478ac9]">Minutes</span></h1>
                <form id="insurance-form" class="flex flex-col gap-7">
                    <h2 data-i18n="quote_title" class="text-[#478ac9] text-left text-2xl font-bold ml-10">We Will Send you a Quote</h2>
                    <div class="flex flex-col gap-2">
                        <label data-i18n="name" class="font-bold text-2xl" for="name">Name</label>
                        <input class="form-input border border-[#e5e5e5] w-full stroke-[#e5e5e5] text-lg px-3 py-2 outline-none" type="text" name="name" id="name" placeholder="Enter your name">
                        <p class="text-red-600 text-sm mt-1 hidden" data-error-for="name"></p>
                    </div>
                    <div class="flex gap-5 flex-col lg:flex-row">
                        <div class="flex flex-col lg:basis-1/2 gap-2">
                            <label data-i18n="nric" class="font-bold text-2xl" for="nric">Vehicle Owner's NRIC</label>
                            <input class="form-input border border-[#e5e5e5] w-full stroke-[#e5e5e5] text-lg px-3 py-2 outline-none" type="text" name="nric" id="nric" placeholder="XXXXXX-XX-XXXX">
                            <p class="text-red-600 text-sm mt-1 hidden" data-error-for="nric"></p>
                        </div>
                        <div class="flex flex-col lg:basis-1/2 gap-2">
                            <label data-i18n="vehicle_no" class="font-bold text-2xl" for="vehicle_number">Vehicle Registration Number</label>
                            <input class="form-input border border-[#e5e5e5] w-full stroke-[#e5e5e5] text-lg px-3 py-2 outline-none" type="text" name="vehicle_number" id="vehicle_number" placeholder="ABCXXXX">
                            <p class="text-red-600 text-sm mt-1 hidden" data-error-for="vehicle_number"></p>
                        </div>
                    </div>
                    <div class="flex gap-5 flex-col lg:flex-row">
                        <div class="flex flex-col lg:basis-1/2 gap-2">
                            <label data-i18n="whatsapp" class="font-bold text-2xl" for="whatsapp_number">Whatsapp Number</label>
                            <input class="form-input border border-[#e5e5e5] w-full stroke-[#e5e5e5] text-lg px-3 py-2 outline-none" type="text" name="whatsapp_number" id="whatsapp_number" placeholder="Enter your phone (e.g. 60123456789)">
                            <p class="text-red-600 text-sm mt-1 hidden" data-error-for="whatsapp_number"></p>
                        </div>
                        <div class="flex flex-col lg:basis-1/2 gap-2">
                            <label data-i18n="email" class="font-bold text-2xl" for="email">Email</label>
                            <input class="form-input border border-[#e5e5e5] w-full stroke-[#e5e5e5] text-lg px-3 py-2 outline-none" type="text" name="email" id="email" placeholder="Enter a valid email address">
                            <p class="text-red-600 text-sm mt-1 hidden" data-error-for="email"></p>
                        </div>
                    </div>
                    <div>
                        <div class="flex gap-2">
                            <input type="checkbox" class="form-input" name="send_whatsapp" id="send_whatsapp">
                            <label class="text-2xl " data-i18n="send_whatsapp" for="send_whatsapp">Yes, send my quote via email.</label>

                        </div>
                        
                    </div>
                    <div data-i18n="agreement">
                        By submitting, I agree to receive quotes, reminders, and offers from GT-MAX via email and have read and accepted the <span class="text-[#478ac9]">Terms and Conditions</span> and <span class="text-[#478ac9]">Privacy Policy</span>.
                    </div>
                    <button data-i18n="submit" class="bg-[#387cbd] cursor-pointer text-white text-center py-2 rounded-lg text-2xl font-bold hover:scale-110" type="submit">Get Quote Now!</button>
                    
                </form>
            </div>
            <!-- end insurance form design -->
             <!-- start available payment method -->
            <!-- <div class="my-20">
                <h1 data-i18n="payment_method" class="text-center font-bold text-4xl">Available Payment Method</h1>
                <div class="lg:w-8/12 w-full xl:gap-10 gap-20 mx-auto flex flex-wrap items-center">

                    <?php 
                        $images = [
                            '1720588265-logo.png',
                            'ambank-seeklogo.png',
                            'images.png',
                            'RHB_Logo.svg.png',
                            'CIMB-Logo.jpg',
                            'OCBC-Bank-Logo.png',
                            'UOB_Logo.svg.png',
                            'b50ac0e9-e9dc-4a83-8057-6edb75aad9df-PBBLogo.jpg',
                            'Affin_Bank_logo.svg.png',
                            'Standard_Chartered_2021.svg.png',
                            'Maybank-Logo.png',
                            'Alliance-Bank-Logo-Vector.svg-.png',
                            'spaylater-logo_x602.webp',
                            'duit-now-seeklogo.png'
                        ];
                        foreach ($images as $image) {
                        
                    ?>
                    <div>
                        <img alt="" class="w-[100px]" src="<?php echo get_template_directory_uri(); ?>/images/insurance/<?php echo $image; ?>">
                    </div>
                    <?php } ?>
                </div>
            </div> -->
            
            <!-- end available payment method -->
        </div>
    </main>
<?php get_footer(); ?>

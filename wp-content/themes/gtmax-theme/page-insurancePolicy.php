<?php
/**
 * Template Name: WP Insurance Policy
 * Description: Custom design for insurance policy and refund policy page with classified FAQs
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <title><?php bloginfo('name'); ?> - Insurance Policy</title>
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

    <main class="refund-policy-container">
        <!-- Main Title & Subtitle -->
        <section class="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h1 class="text-3xl md:text-4xl font-extrabold text-[#1a202c] tracking-tight mb-3">
                Insurance Policy
            </h1>
            <p class="text-slate-500 text-sm md:text-base font-normal">
                Have a question regarding GT-Max's insurance policy, purchasing, or refund process? Please read below.
            </p>
        </section>

        <!-- Refund Process Section -->
        <section class="max-w-6xl mx-auto mb-16 md:mb-20">
            <h2 class="text-2xl md:text-3xl font-extrabold text-center text-[#1a202c] mb-10 md:mb-12">
                Refund Process
            </h2>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
                <!-- Step 1 -->
                <div class="refund-step-item">
                    <div class="refund-icon-circle">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/icon/support.png" 
                             alt="Request a Refund" 
                             class="w-10 h-10 object-contain">
                    </div>
                    <h3 class="refund-step-title">
                        1. Request a Refund
                    </h3>
                    <p class="refund-step-desc">
                        Contact us via WhatsApp or Email to submit a refund request.
                    </p>
                </div>

                <!-- Step 2 -->
                <div class="refund-step-item">
                    <div class="refund-icon-circle">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/icon/24Hours.png" 
                             alt="Refund Processed in 24H" 
                             class="w-10 h-10 object-contain">
                    </div>
                    <h3 class="refund-step-title">
                        2. Refund Processed in 24H
                    </h3>
                    <p class="refund-step-desc">
                        Every refund request is verified and processed in 24 hours during working days.
                    </p>
                </div>

                <!-- Step 3 -->
                <div class="refund-step-item">
                    <div class="refund-icon-circle">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/icon/notification.png" 
                             alt="Receive a Notification" 
                             class="w-10 h-10 object-contain">
                    </div>
                    <h3 class="refund-step-title">
                        3. Receive a Notification
                    </h3>
                    <p class="refund-step-desc">
                        You'll receive a notification via email. Payment will be processed by banks.
                    </p>
                </div>

                <!-- Step 4 -->
                <div class="refund-step-item">
                    <div class="refund-icon-circle">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/icon/refund.png" 
                             alt="Refund Credited" 
                             class="w-10 h-10 object-contain">
                    </div>
                    <h3 class="refund-step-title">
                        4. Refund Credited
                    </h3>
                    <p class="refund-step-desc">
                        You will receive the refund payment in 1 working day.
                    </p>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="max-w-4xl mx-auto mb-16 md:mb-20">
            <h2 class="text-2xl md:text-3xl font-extrabold text-center text-[#1a202c] mb-10 md:mb-12">
                Frequently Asked Questions (FAQ)
            </h2>

            <!-- Refund FAQ Category -->
            <div class="mb-12">
                <div class="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
                    <span class="inline-flex items-center justify-center bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                        Refund Policy
                    </span>
                    <h3 class="text-xl font-bold text-[#1a202c]">
                        Refund FAQ
                    </h3>
                </div>

                <div class="space-y-4">
                    <!-- FAQ Item 1 -->
                    <div class="refund-faq-card">
                        <h4 class="refund-faq-question">
                            1. My roadtax cannot be renewed due to JPJ / PDRM blacklist. Would I receive a refund?
                        </h4>
                        <p class="refund-faq-answer">
                            Yes. You'll receive a refund for your roadtax payment.
                        </p>
                    </div>

                    <!-- FAQ Item 2 -->
                    <div class="refund-faq-card">
                        <h4 class="refund-faq-question">
                            2. My insurance policy has lower price than charged. Would I receive a refund?
                        </h4>
                        <p class="refund-faq-answer">
                            Yes. If your actual policy has a lower price, we'll inform you via email to submit a refund request.
                        </p>
                    </div>

                    <!-- FAQ Item 3 -->
                    <div class="refund-faq-card">
                        <h4 class="refund-faq-question">
                            3. How long does it take?
                        </h4>
                        <p class="refund-faq-answer">
                            You'll receive confirmation for refund in 1 working day.
                        </p>
                    </div>

                    <!-- FAQ Item 4 -->
                    <div class="refund-faq-card">
                        <h4 class="refund-faq-question">
                            4. Is there any processing fee?
                        </h4>
                        <p class="refund-faq-answer">
                            No processing fee will be applied.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Other FAQ Category -->
            <div>
                <div class="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
                    <span class="inline-flex items-center justify-center bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                        General & After-Sales
                    </span>
                    <h3 class="text-xl font-bold text-[#1a202c]">
                        Other FAQ
                    </h3>
                </div>

                <div class="space-y-4">
                    <!-- FAQ Item 1 -->
                    <div class="refund-faq-card">
                        <h4 class="refund-faq-question">
                            1. Can I purchase this product direct from insurance company?
                        </h4>
                        <p class="refund-faq-answer">
                            Yes, to purchase direct from your preferred insurer, you may contact insurer, visit insurer’s website or walk-in to nearest insurer’s branch.
                        </p>
                    </div>

                    <!-- FAQ Item 2 -->
                    <div class="refund-faq-card">
                        <h4 class="refund-faq-question">
                            2. Is there any after sales & claims services offered to customer after Insurance purchase?
                        </h4>
                        <p class="refund-faq-answer">
                            Yes, GT-MAX Motors (M) Sdn. Bhd. as a registered agent provides 1) product advisory, 2) assistance in changing/updating policy details, and 3) claims assistance. Alternatively, you may also contact your chosen insurance company directly for after sales services.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Further Inquiry Section -->
        <section class="max-w-4xl mx-auto text-center pt-2 pb-8">
            <h2 class="text-xl md:text-2xl font-bold text-[#1a202c] mb-6">
                For any further inquiry, please talk to us.
            </h2>
            <div class="flex flex-wrap items-center justify-center gap-4">
                <!-- WhatsApp Button -->
                <a href="https://wa.me/60125181299" target="_blank" rel="noopener noreferrer" 
                   class="btn-whatsapp">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/icon/whatsapp.png" alt="WhatsApp Icon" class="w-5 h-5 object-contain invert brightness-200">
                    <span>WhatsApp</span>
                </a>

                <!-- Contact Us Button -->
                <a href="<?php echo esc_url(home_url('/contact/')); ?>" 
                   class="btn-contact-us">
                    <span>Contact Us</span>
                </a>
            </div>
        </section>
    </main>

<?php get_footer(); ?>
<script>
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("site-header");

    if (header) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                header.classList.remove('static');
                header.classList.add('fixed', 'shadow-md');
            } else {
                header.classList.remove('fixed', 'shadow-md');
                header.classList.add('static');
            }
        });
    }
});
</script>

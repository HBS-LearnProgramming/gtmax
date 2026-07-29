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
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
    <style>
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes shake {

            0%,
            100% {
                transform: translateX(0);
            }

            25% {
                transform: translateX(-5px);
            }

            75% {
                transform: translateX(5px);
            }
        }

        body {
            background: #ffffff;
            scroll-behavior: smooth;
        }

        * {
            -webkit-tap-highlight-color: transparent;
        }

        .hero-section {
            background: linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%);
            border-bottom: 1px solid #e2e8f0;
        }

        .modern-card {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            transition: all 0.3s ease;
        }

        .modern-card:hover {
            border-color: #cbd5e1;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
        }

        /* Remove hover effects on touch devices */
        @media (hover: none) and (pointer: coarse) {
            .modern-card:hover {
                box-shadow: none;
                border-color: #e2e8f0;
            }

            .benefit-card:hover {
                transform: none;
                box-shadow: none;
                background: #f8fafc;
                border-color: #e2e8f0;
            }

            .lang-btn:hover {
                background: white;
                border-color: #e2e8f0;
                color: #64748b;
            }

            .lang-btn.active:hover {
                background: #3b82f6;
                color: white;
                border-color: #3b82f6;
            }
        }

        .modern-input {
            border: 2px solid #e2e8f0;
            transition: all 0.2s ease;
            background: white;
            border-radius: 10px;
        }

        .modern-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.05);
        }

        .input-error {
            border-color: #fc9468 !important;
            animation: shake 0.3s;
        }

        .input-success {
            border-color: #10b981 !important;
        }

        .input-with-icon {
            position: relative;
        }

        .input-icon {
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            pointer-events: none;
            opacity: 0.6;
        }

        .input-with-icon input {
            padding-left: 45px;
        }

        .input-with-icon textarea {
            padding-left: 45px;
        }

        /* Keep textarea icon aligned with first text line instead of vertical center. */
        .input-with-icon.textarea-with-icon .input-icon {
            top: 16px;
            transform: none;
            width: 22px;
            height: 22px;
        }

        .lang-btn {
            border: 2px solid #e2e8f0;
            background: white;
            color: #64748b;
            transition: all 0.2s ease;
            font-weight: 600;
            border-radius: 10px;
        }

        .lang-btn:hover {
            border-color: #3b82f6;
            color: #3b82f6;
            background: #eff6ff;
        }

        .lang-btn.active {
            background: #3b82f6;
            color: white !important;
            border-color: #3b82f6;
        }

        .submit-btn {
            background: #3b82f6;
            border: none;
            transition: all 0.3s ease;
            font-weight: 600;
        }

        .submit-btn:hover {
            background: #2563eb;
            transform: translateY(-1px);
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }

        .submit-btn:active {
            transform: translateY(0);
        }

        /* Theme transition */
        .submit-btn,
        .badge,
        .info-box,
        .lang-btn.active,
        h1 span,
        .text-blue-600 {
            transition: all 0.3s ease;
        }

        .info-box {
            background: #f0f9ff;
            border: 1px solid #bae6fd;
            border-radius: 10px;
        }

        .fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
        }

        .badge {
            background: #3b82f6;
            color: white;
            border-radius: 6px;
            font-size: 0.75rem;
            font-weight: 700;
            padding: 8px 16px;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            display: inline-block;
            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
        }

        .benefit-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 16px;
            transition: all 0.2s ease;
        }

        .benefit-card:hover {
            background: white;
            border-color: #3b82f6;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
        }

        .benefit-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Smart Slider 3 Container Sizing */
        .insurance-partners-slider {
            max-height: 100px;
            overflow: hidden;
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 20px;
        }

        .insurance-partners-slider .n2-ss-slider-wrapper {
            max-height: 60px !important;
            height: 60px !important;
            overflow: hidden !important;
        }

        .insurance-partners-slider .n2-ss-slider,
        .insurance-partners-slider .n2-ss-slider-1,
        .insurance-partners-slider .n2-ss-slide {
            max-height: 60px !important;
            height: 60px !important;
        }

        .insurance-partners-slider img {
            max-height: 50px !important;
            height: auto !important;
            width: auto !important;
            object-fit: contain !important;
            margin: 0 auto !important;
            display: block !important;
        }

        .insurance-partners-slider .n2-ss-slide-background,
        .insurance-partners-slider .n2-ss-slide-background-image {
            background-size: contain !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            max-height: 50px !important;
        }

        .insurance-partners-slider .n2-ss-layers-container {
            max-height: 60px !important;
        }

        .insurance-partners-slider * {
            max-height: 60px !important;
        }

        /* Static partner logo grid (replaces slider) */
        .insurance-partners-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 12px;
        }

        .insurance-partner-item {
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            background: #f8fafc;
            padding: 10px;
            min-height: 82px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .insurance-partner-item img {
            width: 100%;
            max-width: 150px;
            height: 52px;
            object-fit: contain;
            display: block;
        }

        .bank-logos-wrapper {
            margin-top: 20px;
        }

        .bank-category-block+.bank-category-block {
            margin-top: 14px;
        }

        .bank-logos-title {
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #64748b;
            margin-bottom: 10px;
        }

        .bank-logos-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 10px;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 12px;
        }

        .bank-logo-item {
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            background: #f8fafc;
            min-height: 72px;
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .bank-logo-item img {
            width: 100%;
            max-width: 120px;
            height: 42px;
            object-fit: contain;
            display: block;
        }

        /* Dynamic Theme Colors */
        .theme-blue .submit-btn {
            background: #3b82f6 !important;
        }

        .theme-blue .submit-btn:hover {
            background: #2563eb !important;
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3) !important;
        }

        .theme-blue .modern-input:focus {
            border-color: #3b82f6 !important;
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.05) !important;
        }

        .theme-blue .lang-btn.active {
            background: #3b82f6 !important;
            color: white !important;
            border-color: #3b82f6 !important;
        }

        .theme-blue .badge {
            background: #3b82f6 !important;
            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3) !important;
        }

        .theme-blue .info-box {
            background: #eff6ff !important;
            border-color: #bfdbfe !important;
        }

        .theme-blue a {
            color: #3b82f6 !important;
        }

        .theme-blue h1 span {
            color: #3b82f6 !important;
        }

        .theme-blue .text-blue-600 {
            color: #3b82f6 !important;
        }

        .theme-blue .benefit-icon.bg-blue-100 {
            background: #dbeafe !important;
        }

        .theme-red .submit-btn {
            background: #fc9468 !important;
        }

        .theme-red .submit-btn:hover {
            background: #b91c1c !important;
            box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3) !important;
        }

        .theme-red .modern-input:focus {
            border-color: #fc9468 !important;
            box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.05) !important;
        }

        .theme-red .lang-btn.active {
            background: #fc9468 !important;
            color: white !important;
            border-color: #fc9468 !important;
        }

        .theme-red .badge {
            background: #fc9468 !important;
            box-shadow: 0 2px 8px rgba(220, 38, 38, 0.3) !important;
        }

        .theme-red .info-box {
            background: #fef2f2 !important;
            border-color: #fecaca !important;
        }

        .theme-red a {
            color: #fc9468 !important;
        }

        .theme-red h1 span {
            color: #fc9468 !important;
        }

        .theme-red .text-blue-600 {
            color: #fc9468 !important;
        }

        .theme-red .benefit-icon.bg-blue-100 {
            background: #fee2e2 !important;
            color: #fc9468 !important;
        }

        .theme-purple .submit-btn {
            background: #9333ea !important;
        }

        .theme-purple .submit-btn:hover {
            background: #7e22ce !important;
            box-shadow: 0 10px 30px rgba(147, 51, 234, 0.3) !important;
        }

        .theme-purple .modern-input:focus {
            border-color: #9333ea !important;
            box-shadow: 0 0 0 4px rgba(147, 51, 234, 0.05) !important;
        }

        .theme-purple .lang-btn.active {
            background: #9333ea !important;
            color: white !important;
            border-color: #9333ea !important;
        }

        .theme-purple .badge {
            background: #9333ea !important;
            box-shadow: 0 2px 8px rgba(147, 51, 234, 0.3) !important;
        }

        .theme-purple .info-box {
            background: #faf5ff !important;
            border-color: #e9d5ff !important;
        }

        .theme-purple a {
            color: #9333ea !important;
        }

        .theme-purple h1 span {
            color: #9333ea !important;
        }

        .theme-purple .text-blue-600 {
            color: #9333ea !important;
        }

        .theme-purple .benefit-icon.bg-blue-100 {
            background: #f3e8ff !important;
            color: #9333ea !important;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
            body {
                font-size: 14px;
                -webkit-text-size-adjust: 100%;
            }

            /* Improve touch targets for buttons */
            .submit-btn,
            .lang-btn {
                min-height: 44px;
            }

            /* Header Mobile */
            #site-header {
                padding: 12px 16px !important;
                position: sticky;
                top: 0;
                background: white;
                z-index: 100;
            }

            .site-logo {
                max-width: 100px;
                height: auto;
            }

            .header-menu {
                display: none;
            }

            /* Hero Section Mobile */
            .hero-section {
                padding: 24px 0 !important;
            }

            .container {
                padding-left: 16px !important;
                padding-right: 16px !important;
            }

            /* Badge and Language Switcher */
            .flex.justify-between.items-center.mb-10 {
                flex-direction: column;
                gap: 16px;
                margin-bottom: 24px !important;
                align-items: flex-start !important;
            }

            .badge {
                font-size: 0.65rem;
                padding: 6px 12px;
                letter-spacing: 0.5px;
            }

            .lang-btn {
                font-size: 12px;
                padding: 8px 12px !important;
                border-radius: 6px;
            }

            /* Main Title Mobile */
            h1 {
                font-size: 1.75rem !important;
                line-height: 1.3 !important;
                margin-bottom: 16px;
            }

            h1 .text-blue-600 {
                display: inline;
            }

            /* Hero Description */
            .hero-description,
            p[data-i18n="hero_description"] {
                font-size: 14px !important;
                line-height: 1.5 !important;
            }

            /* Benefit Cards Mobile */
            .benefit-card {
                padding: 12px;
                margin-bottom: 12px;
            }

            .benefit-icon {
                width: 32px;
                height: 32px;
            }

            .benefit-card h3 {
                font-size: 13px;
            }

            .benefit-card p {
                font-size: 12px;
            }

            /* Insurance Partners Slider */
            .insurance-partners-slider {
                padding: 12px;
                margin-top: 16px;
                max-height: 80px;
            }

            .insurance-partners-slider .n2-ss-slider-wrapper {
                max-height: 50px !important;
                height: 50px !important;
            }

            .insurance-partners-slider img {
                max-height: 40px !important;
            }

            .insurance-partners-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 8px;
                padding: 10px;
                margin-top: 16px;
            }

            .insurance-partner-item {
                min-height: 68px;
                padding: 10px 8px;
            }

            .insurance-partner-item img {
                max-width: 130px;
                height: 40px;
            }

            .bank-logos-wrapper {
                margin-top: 16px;
            }

            .bank-category-block+.bank-category-block {
                margin-top: 10px;
            }

            .bank-logos-title {
                font-size: 10px;
                margin-bottom: 8px;
            }

            .bank-logos-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 8px;
                padding: 10px;
            }

            .bank-logo-item {
                min-height: 66px;
                padding: 8px;
            }

            .bank-logo-item img {
                max-width: 115px;
                height: 38px;
            }

            /* Form Card Mobile */
            .modern-card {
                padding: 20px !important;
                border-radius: 12px;
                margin-top: 0px !important;
            }

            .modern-card h2 {
                font-size: 1.25rem !important;
            }

            .modern-card p {
                font-size: 13px !important;
            }

            /* Form Labels */
            label {
                font-size: 13px !important;
                margin-bottom: 6px;
            }

            /* Form Inputs Mobile */
            .modern-input {
                font-size: 14px !important;
                padding: 12px 12px 12px 40px !important;
                border-radius: 8px;
            }

            .input-with-icon input {
                padding-left: 40px !important;
            }

            .input-with-icon textarea {
                padding-left: 40px !important;
            }

            .input-icon {
                width: 18px;
                height: 18px;
                left: 12px;
            }

            /* Checkbox Labels Mobile */
            .text-sm {
                font-size: 12px !important;
            }

            input[type="checkbox"] {
                width: 16px !important;
                height: 16px !important;
                flex-shrink: 0;
            }

            .flex.items-center.gap-2 {
                align-items: flex-start !important;
                gap: 8px !important;
            }

            .flex.items-center.gap-2 label {
                padding-top: 1px;
                line-height: 1.4;
            }

            /* Info Box Mobile */
            .info-box {
                padding: 12px !important;
                border-radius: 8px;
            }

            /* Submit Button Mobile */
            .submit-btn {
                padding: 14px 24px !important;
                font-size: 15px !important;
                border-radius: 10px;
                font-weight: 600;
                width: 100%;
                display: block;
            }

            /* Quote Title and Subtitle */
            .border-b.border-gray-100.pb-6.mb-6 {
                padding-bottom: 16px !important;
                margin-bottom: 20px !important;
            }

            /* Grid Layouts - Stack on Mobile */
            .grid.md\\:grid-cols-2 {
                grid-template-columns: 1fr !important;
                gap: 16px !important;
            }

            .grid.lg\\:grid-cols-5 {
                grid-template-columns: 1fr !important;
            }

            /* Mobile: Use display: contents on wrapper to allow child reordering */
            .mobile-reorder-wrapper {
                display: contents;
            }

            /* Mobile reordering: Title -> Form -> Benefits -> Partners */
            #hero-title-section {
                order: 1;
            }

            #insurance-form-section {
                order: 2;
            }

            #benefits-section {
                order: 3;
            }

            #partners-section {
                order: 4;
            }

            /* Disable animations on mobile for performance */
            .fade-in-up {
                animation: none;
                opacity: 1;
                transform: translateY(0);
            }

            /* Error Messages */
            .text-red-600 {
                font-size: 11px !important;
            }

            /* Terms Text */
            .text-xs {
                font-size: 11px !important;
            }

            /* Language Buttons Container */
            .flex.gap-3 {
                width: 100%;
                justify-content: flex-start;
                flex-wrap: wrap;
            }

            /* Disable complex animations on mobile for performance */
            .fade-in-up {
                animation: none;
                opacity: 1;
                transform: translateY(0);
            }

            /* Space adjustments */
            .space-y-2>*+* {
                margin-top: 8px !important;
            }

            .space-y-3>*+* {
                margin-top: 12px !important;
            }

            .space-y-5>*+* {
                margin-top: 16px !important;
            }

            .space-y-6>*+* {
                margin-top: 20px !important;
            }

            /* Partners Title */
            p[data-i18n="partners_title"] {
                font-size: 10px !important;
            }
        }

        /* Extra Small Mobile Devices (320px - 375px) */
        @media (max-width: 375px) {
            h1 {
                font-size: 1.5rem !important;
            }

            .lang-btn {
                font-size: 11px;
                padding: 6px 10px !important;
            }

            .badge {
                font-size: 0.6rem;
                padding: 5px 10px;
            }

            .modern-card {
                padding: 16px !important;
            }

            .modern-input {
                font-size: 13px !important;
                padding: 10px 10px 10px 36px !important;
            }

            .input-icon {
                width: 16px;
                height: 16px;
                left: 10px;
            }

            .input-with-icon.textarea-with-icon .input-icon {
                top: 14px;
                width: 20px;
                height: 20px;
            }

            .submit-btn {
                padding: 12px 20px !important;
                font-size: 14px !important;
            }
        }

        /* Tablet Portrait (768px - 1024px) */
        @media (min-width: 768px) and (max-width: 1024px) {
            h1 {
                font-size: 2.5rem !important;
            }

            .modern-card {
                padding: 32px !important;
            }

            .grid.lg\\:grid-cols-5 {
                grid-template-columns: 1fr !important;
            }
        }

        /* Desktop: Reset to normal layout */
        @media (min-width: 1024px) {
            .mobile-reorder-wrapper {
                display: block;
            }

            #hero-title-section,
            #insurance-form-section,
            #benefits-section,
            #partners-section {
                order: 0;
            }
        }

        /* Custom SweetAlert2 popup styling for vehicle confirmation */
        .vehicle-confirm-popup-html {
            margin: 0 !important;
            padding: 0 !important;
            text-align: left !important;
        }

        .variant-card {
            border: 2px solid #e2e8f0;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            background: #ffffff;
        }

        .variant-card:hover {
            border-color: #3b82f6;
            background-color: #f8fafc;
            transform: translateY(-1px);
        }

        .variant-card.selected-active {
            border-color: #3b82f6 !important;
            background-color: #eff6ff !important;
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.08);
        }

        .variant-card input[type="radio"]:checked + div .custom-radio {
            border-color: #3b82f6 !important;
            background-color: #3b82f6 !important;
        }

        .variant-card input[type="radio"]:checked + div .custom-radio div {
            display: block !important;
        }

        #variant-list-container::-webkit-scrollbar {
            width: 6px;
        }

        #variant-list-container::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 4px;
        }

        #variant-list-container::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }

        #variant-list-container::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
    </style>
</head>

<body <?php body_class(); ?>>
    <header id="site-header"
        class="bg-white static z-10 w-full px-10 py-4 border-b border-gray-100 transition-all duration-300">
        <nav class="flex items-center basis-full w-full justify-between">
            <a href="<?php echo esc_url(home_url('/')); ?>"><img
                    src="<?php echo get_template_directory_uri(); ?>/images/home/0001807_gt-max.png" alt="Site Logo"
                    class="site-logo"></a>
            <?php
            wp_nav_menu(array(
                'menu' => 'Header',
                'menu_class' => 'header-menu flex gap-5',
                'container' => false,
            ));
            ?>
        </nav>
    </header>

    <main class="min-h-screen theme-purple" id="main-content">
        <div class="hero-section py-6 lg:py-8">
            <div class="container px-4 lg:px-10 mx-auto max-w-7xl">
                <!-- Header Image Section -->
                <div class="mb-6 fade-in-up">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/home/insurance.jpg"
                        alt="Insurance Banner" class="w-full rounded-2xl shadow-lg"
                        style="max-width: 100%; height: auto; max-height: 220px; object-fit: cover; object-position: center;">
                </div>

                <!-- Badge Row with Language Switcher -->
                <div class="flex justify-between items-center mb-10 fade-in-up">
                    <span class="badge" data-i18n="badge_text">VEHICLE INSURANCE</span>
                    <div class="flex gap-3">
                        <button class="lang-btn px-5 py-2.5 cursor-pointer active" data-lang="bm">🇲🇾 BM</button>
                        <button class="lang-btn px-5 py-2.5 cursor-pointer" data-lang="en">🇬🇧 EN</button>
                        <button class="lang-btn px-5 py-2.5 cursor-pointer" data-lang="zh">🇨🇳 中文</button>
                    </div>
                </div>
                <!--start insurance form design -->
                <div class="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
                    <!-- Left Column Wrapper - Uses display: contents on mobile to allow reordering -->
                    <div class="lg:col-span-2 mobile-reorder-wrapper">
                        <!-- Hero Title Section -->
                        <div id="hero-title-section" class="fade-in-up mb-3 lg:mb-8">
                            <h1 data-i18n="main_title"
                                class="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                                Renew Your Insurance in
                                <span class="text-blue-600">Minutes</span> for Motor & Car
                            </h1>
                            <p data-i18n="hero_description" class="text-lg text-gray-600 mt-4 leading-relaxed">Compare
                                quotes from Malaysia's leading
                                insurance providers. Fast, secure, and hassle-free.</p>
                        </div>

                        <!-- Partners Section -->
                        <div id="partners-section" class="fade-in-up mb-3 lg:mb-8">
                            <p data-i18n="partners_title"
                                class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Trusted by
                                leading insurers</p>
                            <div class="insurance-partners-grid">
                                <?php
                                // Auto-load all image files in /images/insurance so every logo appears without slider setup.
                                $insurance_image_paths = glob(
                                    get_template_directory() . '/images/insurance/*.{png,jpg,jpeg,webp,svg}',
                                    GLOB_BRACE
                                );

                                if (!is_array($insurance_image_paths)) {
                                    $insurance_image_paths = [];
                                }

                                if (!empty($insurance_image_paths)) {
                                    natsort($insurance_image_paths);
                                }

                                foreach ($insurance_image_paths as $image_path) {
                                    $image = basename($image_path);
                                    ?>
                                    <div class="insurance-partner-item">
                                        <img src="<?php echo esc_url(get_template_directory_uri() . '/images/insurance/' . $image); ?>"
                                            alt="<?php echo esc_attr(pathinfo($image, PATHINFO_FILENAME)); ?>"
                                            loading="lazy">
                                    </div>
                                    <?php
                                }
                                ?>
                            </div>
                        </div>

                        <!-- Benefits Section -->
                        <div id="benefits-section" class="fade-in-up space-y-3">
                            <div class="benefit-card">
                                <div class="flex items-start gap-4">
                                    <div class="benefit-icon bg-blue-100 text-blue-600">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 data-i18n="benefit_instant_title"
                                            class="font-semibold text-gray-900 text-sm">Instant Quotes</h3>
                                        <p data-i18n="benefit_instant_desc" class="text-sm text-gray-600 mt-1">Get
                                            comparison quotes in seconds</p>
                                    </div>
                                </div>
                            </div>
                            <div class="benefit-card">
                                <div class="flex items-start gap-4">
                                    <div class="benefit-icon bg-green-100 text-green-600">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 data-i18n="benefit_rates_title" class="font-semibold text-gray-900 text-sm">
                                            Best Rates</h3>
                                        <p data-i18n="benefit_rates_desc" class="text-sm text-gray-600 mt-1">Competitive
                                            pricing guaranteed</p>
                                    </div>
                                </div>
                            </div>
                            <div class="benefit-card">
                                <div class="flex items-start gap-4">
                                    <div class="benefit-icon bg-purple-100 text-purple-600">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 data-i18n="benefit_secure_title"
                                            class="font-semibold text-gray-900 text-sm">Secure & Safe</h3>
                                        <p data-i18n="benefit_secure_desc" class="text-sm text-gray-600 mt-1">Your data
                                            is protected</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Form Section -->
                    <div id="insurance-form-section" class="lg:col-span-3 fade-in-up" style="animation-delay: 0.2s">
                        <form id="insurance-form" class="modern-card p-8 lg:p-10 space-y-6">
                            <div class="border-b border-gray-100 pb-6 mb-6">
                                <h2 data-i18n="quote_title" class="text-2xl font-bold text-gray-900">
                                    Get Your Quote
                                </h2>
                                <p data-i18n="quote_subtitle" class="text-gray-600 mt-2 text-sm">Complete the form to
                                    receive an instant quotation
                                </p>
                            </div>

                            <!-- Name Field -->
                            <div class="space-y-2">
                                <label class="font-semibold text-sm text-gray-700" for="name">
                                    <span data-i18n="name">Full Name</span><span class="text-red-500 ml-0.5">*</span>
                                </label>
                                <div class="input-with-icon">
                                    <img src="<?php echo get_template_directory_uri(); ?>/images/icon/user.png" alt=""
                                        class="input-icon">
                                    <input class="modern-input form-input w-full text-base px-4 py-3.5" type="text"
                                        name="name" id="name" placeholder="Enter your full name"
                                        data-i18n-placeholder="name_placeholder">
                                </div>
                                <p class="text-red-600 text-sm mt-1 hidden font-medium" data-error-for="name"></p>
                            </div>

                            <!-- GTMAX Staff -->
                            <div class="info-box p-4">
                                <div class="flex gap-3 items-start">
                                    <input type="checkbox" class="form-input w-5 h-5 mt-0.5 accent-blue-600 rounded"
                                        name="is_gtmax_staff" id="is_gtmax_staff">
                                    <label class="text-sm font-medium text-gray-700" data-i18n="is_gtmax_staff"
                                        for="is_gtmax_staff">
                                        Are You GTMAX Staff?
                                    </label>
                                </div>
                                <div id="staff_id_wrapper" class="hidden mt-3">
                                    <input class="modern-input form-input w-full text-base px-4 py-3.5" type="text"
                                        name="staff_id" id="staff_id" placeholder="GR00XXX"
                                        data-i18n-placeholder="staff_id_placeholder" maxlength="20">
                                    <p class="text-red-600 text-sm mt-1 hidden font-medium" data-error-for="staff_id">
                                    </p>
                                </div>
                            </div>

                            <!-- NRIC & Vehicle Row -->
                            <div class="grid md:grid-cols-2 gap-5">
                                <div class="space-y-2">
                                    <label class="font-semibold text-sm text-gray-700" for="nric">
                                        <span id="nric_label_text" data-i18n="nric">NRIC Number</span><span
                                            class="text-red-500 ml-0.5">*</span>
                                    </label>
                                    <div class="input-with-icon">
                                        <img src="<?php echo get_template_directory_uri(); ?>/images/icon/nric.png"
                                            alt="" class="input-icon" id="nric_icon">
                                        <input class="modern-input form-input w-full text-base px-4 py-3.5" type="text"
                                            name="nric" id="nric" placeholder="XXXXXX-XX-XXXX" maxlength="14"
                                            inputmode="numeric" autocomplete="off">
                                    </div>
                                    <div class="flex items-center gap-2 mt-2">
                                        <input type="checkbox" class="form-input w-4 h-4 accent-blue-600 rounded"
                                            name="is_malaysian" id="is_malaysian" checked>
                                        <label data-i18n="is_malaysian" class="text-sm text-gray-600"
                                            for="is_malaysian">Malaysian Citizen</label>
                                    </div>
                                    <p class="text-red-600 text-sm mt-1 hidden font-medium" data-error-for="nric"></p>
                                </div>

                                <div class="space-y-2">
                                    <label class="font-semibold text-sm text-gray-700" for="vehicle_number">
                                        <span id="vehicle_label">Motor Registration</span><span
                                            class="text-red-500 ml-0.5">*</span>
                                    </label>
                                    <div class="input-with-icon">
                                        <img src="<?php echo get_template_directory_uri(); ?>/images/icon/motor.png"
                                            alt="" class="input-icon" id="vehicle_icon">
                                        <input class="modern-input form-input w-full text-base px-4 py-3.5" type="text"
                                            name="vehicle_number" id="vehicle_number" placeholder="ABC1234"
                                            data-i18n-placeholder="vehicle_placeholder">
                                    </div>
                                    <!-- <div class="flex items-center gap-2 mt-2">
                                        <input type="checkbox" class="form-input w-4 h-4 accent-blue-600 rounded"
                                            name="vehicle_type" id="vehicle_type">
                                        <label data-i18n="vehicle_type" class="text-sm text-gray-600"
                                            for="vehicle_type">Car Registered</label>
                                    </div> -->
                                    <p class="text-red-600 text-sm mt-1 hidden font-medium"
                                        data-error-for="vehicle_number">
                                    </p>
                                </div>
                            </div>

                            <!-- WhatsApp & Email Row -->
                            <p class="text-xs text-gray-400 italic mb-2" data-i18n="contact_hint">At least one of
                                WhatsApp or Email is required</p>
                            <div class="grid md:grid-cols-2 gap-5">
                                <div class="space-y-2">
                                    <label data-i18n="whatsapp" class="font-semibold text-sm text-gray-700"
                                        for="whatsapp_number">
                                        WhatsApp Number
                                    </label>
                                    <div class="input-with-icon">
                                        <img src="<?php echo get_template_directory_uri(); ?>/images/icon/whatsapp.png"
                                            alt="" class="input-icon">
                                        <input class="modern-input form-input w-full text-base px-4 py-3.5" type="text"
                                            name="whatsapp_number" id="whatsapp_number" placeholder="60123456789"
                                            data-i18n-placeholder="whatsapp_placeholder">
                                    </div>
                                    <p class="text-red-600 text-sm mt-1 hidden font-medium"
                                        data-error-for="whatsapp_number">
                                    </p>
                                </div>

                                <div class="space-y-2">
                                    <label data-i18n="email" class="font-semibold text-sm text-gray-700" for="email">
                                        Email Address
                                    </label>
                                    <div class="input-with-icon">
                                        <img src="<?php echo get_template_directory_uri(); ?>/images/icon/mail.png"
                                            alt="" class="input-icon">
                                        <input class="modern-input form-input w-full text-base px-4 py-3.5" type="text"
                                            name="email" id="email" placeholder="your@email.com"
                                            data-i18n-placeholder="email_placeholder">
                                    </div>
                                    <p class="text-red-600 text-sm mt-1 hidden font-medium" data-error-for="email"></p>
                                </div>
                            </div>

                            <!-- Start Address Row -->
                           <div class="space-y-2">
                                <label class="font-semibold text-sm text-gray-700"
                                    for="postcode">
                                    <span id="postcode_label" data-i18n="postcode">Postcode</span><span
                                            class="text-red-500 ml-0.5">*</span>
                                </label>
                                <div class="input-with-icon">
                                    <img src="<?php echo get_template_directory_uri(); ?>/images/icon/postcode.png"
                                        alt="" class="input-icon">
                                    <input class="modern-input form-input w-full text-base px-4 py-3.5" type="text"
                                        name="postcode" id="postcode" placeholder="Enter your postcode"
                                        data-i18n-placeholder="postcode_placeholder">
                                </div>
                                <p class="text-red-600 text-sm mt-1 hidden font-medium"
                                    data-error-for="postcode">
                                </p>
                            </div>



                            <p class="text-red-600 text-sm hidden font-medium" data-error-for="contact"></p>

                            <!-- Email Opt-in -->
                            <div class="info-box p-4">
                                <div class="flex gap-3 items-start">
                                    <input type="checkbox" class="form-input w-5 h-5 mt-0.5 accent-blue-600 rounded"
                                        name="send_whatsapp" id="send_whatsapp">
                                    <label class="text-sm font-medium text-gray-700" data-i18n="send_whatsapp"
                                        for="send_whatsapp">
                                        Send quotation via email
                                    </label>
                                </div>
                            </div>

                            <!-- Terms -->
                            <div class="text-xs text-gray-500 leading-relaxed" data-i18n="agreement">
                                By submitting, I agree to receive quotes and offers from GT-MAX, and accept the <span
                                    class="text-blue-600 font-semibold hover:underline cursor-pointer">Terms &
                                    Conditions</span> and <span
                                    class="text-blue-600 font-semibold hover:underline cursor-pointer">Privacy
                                    Policy</span>.
                            </div>

                            <!-- Submit Button -->
                            <button data-i18n="submit"
                                class="submit-btn w-full cursor-pointer text-white text-center py-4 text-base rounded-xl font-semibold"
                                type="submit">
                                Get Quote Now
                            </button>
                        </form>

                        <!-- Bank Logos Section -->
                        <div class="bank-logos-wrapper fade-in-up" style="animation-delay: 0.25s">
                            <p class="bank-logos-title" data-i18n="bank_logos_title">Available Payment Methods</p>
                            <?php
                            // Categorize payment logos by filename keywords while keeping a fixed display order.
                            $payment_image_paths = glob(
                                get_template_directory() . '/images/bank/*.{png,jpg,jpeg,webp,svg}',
                                GLOB_BRACE
                            );

                            if (!is_array($payment_image_paths)) {
                                $payment_image_paths = [];
                            }

                            $payment_categories = [
                                'online_bank_title' => [
                                    'affin',
                                    'alliance',
                                    'ambank',
                                    'cimb',
                                    'hongleong',
                                    'hsbc',
                                    'maybank',
                                    'ocbc',
                                    'publicbank',
                                    'rhb',
                                    'standard',
                                    'uob',
                                ],
                                'ewallet_title' => [
                                    'boost',
                                    'grabpay',
                                    'spaylater',
                                    'touchngo',
                                    'duitnow',
                                    'mae',
                                    'atome',
                                    'paylatergrab'
                                ],
                            ];

                            $categorized_images = [
                                'online_bank_title' => [],
                                'ewallet_title' => [],
                            ];

                            foreach ($payment_image_paths as $payment_image_path) {
                                $payment_image = basename($payment_image_path);
                                $image_key = strtolower(pathinfo($payment_image, PATHINFO_FILENAME));
                                $image_key = preg_replace('/[^a-z0-9]/', '', $image_key);

                                foreach ($payment_categories as $category_key => $keywords) {
                                    foreach ($keywords as $keyword) {
                                        $normalized_keyword = preg_replace('/[^a-z0-9]/', '', strtolower($keyword));

                                        if (strpos($image_key, $normalized_keyword) !== false) {
                                            $categorized_images[$category_key][$normalized_keyword] = $payment_image;
                                            continue 3;
                                        }

                                        if ($normalized_keyword === 'touchngo' && strpos($image_key, 'tng') !== false) {
                                            $categorized_images[$category_key][$normalized_keyword] = $payment_image;
                                            continue 3;
                                        }

                                        if ($normalized_keyword === 'duitnow' && strpos($image_key, 'duit') !== false && strpos($image_key, 'now') !== false) {
                                            $categorized_images[$category_key][$normalized_keyword] = $payment_image;
                                            continue 3;
                                        }
                                    }
                                }
                            }

                            foreach ($payment_categories as $category_key => $keywords) {
                                ?>
                                <div class="bank-category-block">
                                    <p class="bank-logos-title" data-i18n="<?php echo esc_attr($category_key); ?>">
                                        <?php echo $category_key === 'online_bank_title' ? 'Online Bank' : 'E-Wallet'; ?>
                                    </p>
                                    <div class="bank-logos-grid">
                                        <?php
                                        foreach ($keywords as $keyword) {
                                            $normalized_keyword = preg_replace('/[^a-z0-9]/', '', strtolower($keyword));
                                            if (empty($categorized_images[$category_key][$normalized_keyword])) {
                                                continue;
                                            }

                                            $matched_image = $categorized_images[$category_key][$normalized_keyword];
                                            ?>
                                            <div class="bank-logo-item">
                                                <img src="<?php echo esc_url(get_template_directory_uri() . '/images/bank/' . $matched_image); ?>"
                                                    alt="<?php echo esc_attr(pathinfo($matched_image, PATHINFO_FILENAME)); ?>"
                                                    loading="lazy">
                                            </div>
                                            <?php
                                        }
                                        ?>
                                    </div>
                                </div>
                                <?php
                            }
                            ?>
                        </div>
                    </div>
                </div>
                <!-- end insurance form design -->
            </div>
        </div>
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

    <script>
        // Set theme directory path for JavaScript
        const THEME_URI = '<?php echo get_template_directory_uri(); ?>';

        // Language button handling with theme switching
        document.addEventListener('DOMContentLoaded', function () {
            const langButtons = document.querySelectorAll('.lang-btn');
            const mainContent = document.getElementById('main-content');

            langButtons.forEach(button => {
                button.addEventListener('click', function (e) {
                    e.preventDefault();

                    // Remove active class from all buttons
                    langButtons.forEach(btn => btn.classList.remove('active'));

                    // Add active class to clicked button
                    this.classList.add('active');

                    // Get selected language
                    const selectedLang = this.getAttribute('data-lang');
                    // console.log('Language selected:', selectedLang);

                    // Change theme based on language
                    mainContent.classList.remove('theme-blue', 'theme-red', 'theme-purple');

                    if (selectedLang === 'en') {
                        mainContent.classList.add('theme-blue');
                    } else if (selectedLang === 'zh') {
                        mainContent.classList.add('theme-red');
                    } else if (selectedLang === 'bm') {
                        mainContent.classList.add('theme-purple');
                    }

                    // You can add your language switching logic here
                    // For example: loadLanguage(selectedLang);
                });
            });

            // Vehicle type checkbox toggle
            const vehicleTypeCheckbox = document.getElementById('vehicle_type');
            const vehicleLabel = document.getElementById('vehicle_label');
            const vehicleIcon = document.getElementById('vehicle_icon');

            if (vehicleTypeCheckbox && vehicleLabel && vehicleIcon) {
                vehicleTypeCheckbox.addEventListener('change', function () {
                    if (this.checked) {
                        vehicleLabel.textContent = 'Car Registration';
                        vehicleIcon.src = '<?php echo get_template_directory_uri(); ?>/images/icon/car.png';
                    } else {
                        vehicleLabel.textContent = 'Motor Registration';
                        vehicleIcon.src = '<?php echo get_template_directory_uri(); ?>/images/icon/motor.png';
                    }
                });
            }

            // NRIC / Passport checkbox toggle
            const isMalaysianCheckbox = document.getElementById('is_malaysian');
            const nricLabel = document.querySelector('label[for="nric"]');
            const nricInput = document.getElementById('nric');

            if (isMalaysianCheckbox && nricLabel && nricInput) {
                isMalaysianCheckbox.addEventListener('change', function () {
                    if (this.checked) {
                        nricLabel.textContent = 'NRIC Number';
                        nricInput.placeholder = 'XXXXXX-XX-XXXX';
                        nricInput.maxLength = 14;
                        nricInput.setAttribute('inputmode', 'numeric');
                    } else {
                        nricLabel.textContent = 'Passport Number';
                        nricInput.placeholder = 'Enter passport number';
                        nricInput.maxLength = 20;
                        nricInput.setAttribute('inputmode', 'text');
                    }
                    nricInput.value = ''; // Clear the input when switching
                });
            }
        });
    </script>

    <?php get_footer(); ?>
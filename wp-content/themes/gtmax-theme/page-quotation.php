<?php
/**
 * Template Name: WP Insurance Quotation
 * Description: Quotation review page for the insurance flow
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <title>Insurance Quotation | <?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
    <style>
        /* ── Reset / Base ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f1f5f9; font-family: 'Inter', 'Segoe UI', system-ui, sans-serif; color: #1e293b; }

        /* ── Layout ── */
        .qt-wrapper { max-width: 1200px; margin: 0 auto; padding: 24px 16px 60px; }

        .qt-page-header {
            display: flex; align-items: flex-start; gap: 20px; margin-bottom: 32px;
        }
        .qt-page-title  { font-size: 1.9rem; font-weight: 800; color: #0f172a; line-height: 1.2; }
        .qt-page-subtitle { font-size: 0.95rem; color: #64748b; margin-top: 6px; }

        .qt-grid {
            display: grid;
            grid-template-columns: 1fr 360px;
            gap: 24px;
            align-items: start;
        }
        @media (max-width: 900px) {
            .qt-grid { grid-template-columns: 1fr; }
            .qt-right { order: -1; }
        }

        /* ── Cards ── */
        .qt-card {
            background: #ffffff;
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            padding: 24px;
            margin-bottom: 20px;
            box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }
        .qt-card-header {
            display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
        }
        .qt-card-icon  { font-size: 1.4rem; }
        .qt-card-title { font-size: 1.1rem; font-weight: 700; color: #0f172a; }
        .qt-card-subtitle { font-size: 0.82rem; color: #94a3b8; margin-top: 2px; }

        /* ── Vehicle Detail Grid ── */
        .qt-vehicle-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 20px; }
        @media (max-width: 560px) { .qt-vehicle-grid { grid-template-columns: 1fr; } }

        .qt-vehicle-row { display: flex; flex-direction: column; gap: 2px; }
        .qt-vehicle-label {
            font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em;
            text-transform: uppercase; color: #94a3b8;
        }
        .qt-vehicle-value { font-size: 0.95rem; font-weight: 600; color: #0f172a; }

        /* ── Premium Summary ── */
        .qt-premium-card { position: sticky; top: 24px; }
        .qt-premium-rows { display: flex; flex-direction: column; gap: 12px; }
        .qt-premium-row  { display: flex; justify-content: space-between; font-size: 0.9rem; color: #475569; }
        .qt-premium-row.discount span:last-child { color: #16a34a; font-weight: 600; }
        .qt-premium-divider { border-top: 1px solid #e2e8f0; margin: 16px 0; }

        .qt-premium-total-row {
            display: flex; justify-content: space-between; align-items: center;
            font-size: 1.1rem; font-weight: 800; color: #0f172a;
        }
        .qt-premium-total-row span:last-child { color: #2563eb; font-size: 1.3rem; }

        .qt-excess-note {
            margin-top: 12px; padding: 10px 14px;
            background: #fef9c3; border: 1px solid #fde68a; border-radius: 8px;
            font-size: 0.82rem; color: #92400e;
        }

        /* ── Proceed Button ── */
        .qt-btn-proceed {
            display: block; width: 100%; margin-top: 20px;
            padding: 14px; border: none; border-radius: 12px; cursor: pointer;
            background: linear-gradient(135deg, #2563eb, #4f46e5);
            color: #fff; font-size: 1rem; font-weight: 700;
            box-shadow: 0 4px 16px rgba(37,99,235,0.25);
            transition: all 0.2s ease;
        }
        .qt-btn-proceed:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,0.35); }
        .qt-btn-proceed:active { transform: translateY(0); }

        /* ── Back Button ── */
        .qt-btn-back-top {
            display: inline-flex; align-items: center; gap: 6px;
            padding: 8px 18px; border-radius: 10px; border: 1.5px solid #cbd5e1;
            background: #fff; color: #475569; font-size: 0.9rem; font-weight: 600;
            cursor: pointer; white-space: nowrap; flex-shrink: 0;
            transition: border-color 0.15s, color 0.15s;
        }
        .qt-btn-back-top:hover { border-color: #2563eb; color: #2563eb; }

        /* ── Add-on Cards ── */
        .qt-addons-list { display: flex; flex-direction: column; gap: 10px; }

        /* ── Select All Button ── */
        .qt-btn-select-all {
            flex-shrink: 0;
            padding: 6px 16px;
            border-radius: 999px;
            border: 1.5px solid #2563eb;
            background: #eff6ff;
            color: #2563eb;
            font-size: 0.78rem;
            font-weight: 700;
            cursor: pointer;
            letter-spacing: 0.03em;
            white-space: nowrap;
            transition: background 0.18s, color 0.18s, border-color 0.18s, transform 0.12s;
        }
        .qt-btn-select-all:hover {
            background: #2563eb;
            color: #fff;
            transform: translateY(-1px);
        }
        .qt-btn-select-all.active {
            background: #dcfce7;
            border-color: #16a34a;
            color: #15803d;
        }
        .qt-btn-select-all.active:hover {
            background: #16a34a;
            color: #fff;
            border-color: #16a34a;
        }

        .qt-addon-card {
            display: flex; align-items: center; justify-content: space-between; gap: 14px;
            padding: 14px 16px;
            border: 2px solid #e2e8f0; border-radius: 12px;
            cursor: pointer;
            transition: border-color 0.18s, background 0.18s, box-shadow 0.18s;
            background: #fafbfc;
        }
        .qt-addon-card:hover  { border-color: #93c5fd; background: #f0f7ff; }
        .qt-addon-card.selected {
            border-color: #2563eb !important;
            background: #eff6ff !important;
            box-shadow: 0 0 0 3px rgba(37,99,235,0.10);
        }

        .qt-addon-left  { display: flex; align-items: center; gap: 14px; flex: 1; min-width: 0; }
        .qt-addon-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; flex-shrink: 0; }

        .qt-addon-info { flex: 1; min-width: 0; }
        .qt-addon-name { font-size: 0.88rem; font-weight: 600; color: #1e293b; }
        .qt-addon-desc { font-size: 0.75rem; color: #94a3b8; margin-top: 2px; line-height: 1.4; }

        .qt-addon-price {
            font-size: 0.95rem; font-weight: 700; color: #1e293b; text-align: right;
        }
        .qt-addon-free { color: #16a34a; font-weight: 800; font-size: 0.82rem; }

        /* Badge */
        .qt-addon-badge {
            display: inline-block; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em;
            text-transform: uppercase; padding: 2px 8px; border-radius: 999px;
        }
        .qt-addon-badge.included { background: #dcfce7; color: #166534; }
        .qt-addon-badge.optional { background: #f1f5f9; color: #64748b; }

        /* ── Toggle Switch ── */
        .qt-toggle-wrap { position: relative; display: inline-block; flex-shrink: 0; }

        .qt-addon-toggle {
            /* hide default checkbox but keep it in DOM */
            position: absolute; opacity: 0; width: 0; height: 0;
        }

        .qt-toggle-slider {
            display: block; width: 42px; height: 24px;
            background: #cbd5e1; border-radius: 999px; cursor: pointer;
            position: relative; transition: background 0.2s;
        }
        .qt-toggle-slider::after {
            content: ""; position: absolute;
            width: 18px; height: 18px; top: 3px; left: 3px;
            border-radius: 50%; background: #fff;
            box-shadow: 0 1px 4px rgba(0,0,0,0.18);
            transition: transform 0.2s;
        }
        .qt-addon-toggle:checked ~ .qt-toggle-slider { background: #2563eb; }
        .qt-addon-toggle:checked ~ .qt-toggle-slider::after { transform: translateX(18px); }

        /* ── No Data State ── */
        .qt-no-data {
            text-align: center; padding: 80px 20px;
            background: #fff; border-radius: 20px; border: 1px solid #e2e8f0;
            max-width: 480px; margin: 60px auto;
        }
        .qt-no-data-icon { font-size: 3rem; margin-bottom: 16px; }
        .qt-no-data h2   { font-size: 1.3rem; font-weight: 700; color: #0f172a; margin-bottom: 10px; }
        .qt-no-data p    { font-size: 0.9rem; color: #64748b; line-height: 1.6; margin-bottom: 24px; }

        /* ── Generic Error Card ── */
        .qt-error-card {
            text-align: center;
            padding: 72px 28px;
            background: #fffbeb;
            border-radius: 20px;
            border: 1px solid #fde68a;
            max-width: 520px;
            margin: 60px auto;
            box-shadow: 0 4px 32px rgba(245,158,11,.10);
            animation: qt-fade-in .45s ease both;
        }
        .qt-error-icon  { font-size: 3rem; margin-bottom: 16px; display: block; }
        .qt-error-title { font-size: 1.35rem; font-weight: 800; color: #92400e; margin-bottom: 12px; }
        .qt-error-msg   { font-size: 0.9rem; color: #78350f; line-height: 1.65; margin-bottom: 28px; }

        /* ── Expired Quotation Screen ── */
        .qt-expired-screen {
            text-align: center;
            padding: 80px 28px;
            background: #fff;
            border-radius: 20px;
            border: 1px solid #fca5a5;
            max-width: 520px;
            margin: 60px auto;
            box-shadow: 0 4px 32px rgba(220,38,38,.10);
            animation: qt-fade-in .45s ease both;
        }
        @keyframes qt-fade-in { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:none; } }

        .qt-expired-icon {
            font-size: 3.4rem;
            margin-bottom: 18px;
            display: block;
            animation: qt-swing 2.4s ease-in-out infinite;
        }
        @keyframes qt-swing {
            0%,100% { transform: rotate(-8deg); }
            50%      { transform: rotate( 8deg); }
        }

        .qt-expired-title {
            font-size: 1.45rem;
            font-weight: 800;
            color: #dc2626;
            margin-bottom: 12px;
        }
        .qt-expired-msg {
            font-size: 0.92rem;
            color: #64748b;
            line-height: 1.65;
            margin-bottom: 30px;
        }
        .qt-btn-reapply {
            display: inline-block;
            padding: 13px 32px;
            border-radius: 12px;
            background: linear-gradient(135deg,#dc2626,#b91c1c);
            color: #fff;
            font-size: 0.98rem;
            font-weight: 700;
            text-decoration: none;
            box-shadow: 0 4px 16px rgba(220,38,38,.30);
            transition: transform .18s, box-shadow .18s;
        }
        .qt-btn-reapply:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(220,38,38,.40);
        }
        .qt-btn-reapply:active { transform: translateY(0); }

        /* Header */
        header.qt-header {
            background: #fff; border-bottom: 1px solid #e2e8f0;
            padding: 14px 24px; display: flex; align-items: center;
            justify-content: space-between;
        }
        header.qt-header a img { height: 36px; }

        /* Language Switcher */
        .qt-lang-switcher { display: flex; gap: 8px; align-items: center; }
        .qt-lang-btn {
            border: 2px solid #e2e8f0;
            background: #fff;
            color: #64748b;
            font-size: 0.82rem;
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.18s, background 0.18s, color 0.18s;
            white-space: nowrap;
        }
        .qt-lang-btn:hover {
            border-color: #2563eb;
            color: #2563eb;
            background: #eff6ff;
        }
        .qt-lang-btn.active {
            background: #2563eb;
            color: #fff !important;
            border-color: #2563eb;
        }
        @media (max-width: 480px) {
            .qt-lang-btn { font-size: 0.75rem; padding: 5px 10px; }
        }
    </style>
</head>
<body <?php body_class(); ?>>

    <header class="qt-header">
        <a href="<?php echo esc_url(home_url('/')); ?>">
            <img src="<?php echo get_template_directory_uri(); ?>/images/home/0001807_gt-max.png"
                 alt="GT Max Logo">
        </a>
        <div class="qt-lang-switcher">
            <button class="qt-lang-btn" data-lang="bm" id="qt-lang-bm">🇲🇾 BM</button>
            <button class="qt-lang-btn" data-lang="en" id="qt-lang-en">🇬🇧 EN</button>
            <button class="qt-lang-btn" data-lang="zh" id="qt-lang-zh">🇨🇳 中文</button>
        </div>
    </header>
    <script>
    (function() {
        var currentLang;
        try { currentLang = localStorage.getItem('gtmax_lang') || 'bm'; } catch(e) { currentLang = 'bm'; }

        // Mark the active button on load
        document.querySelectorAll('.qt-lang-btn').forEach(function(btn) {
            if (btn.getAttribute('data-lang') === currentLang) {
                btn.classList.add('active');
            }
            btn.addEventListener('click', function() {
                var lang = this.getAttribute('data-lang');
                try { localStorage.setItem('gtmax_lang', lang); } catch(e) {}
                document.querySelectorAll('.qt-lang-btn').forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
                // Reload so quotation.js re-renders with the new language
                window.location.reload();
            });
        });
    })();
    </script>

    <main>
        <div id="quotation-root">
            <!-- Rendered by quotation.js -->
            <div style="text-align:center;padding:80px 20px;color:#94a3b8;">Loading quotation...</div>
        </div>
    </main>

<?php get_footer(); ?>

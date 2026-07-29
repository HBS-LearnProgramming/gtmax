<?php
/**
 * Template Name: WP Insurance Payment
 * Description: Payment confirmation, result, and receipt page for the insurance flow
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <title>Payment & Quotation Details | <?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
    <style>
        /* ── Reset / Base ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f8fafc; font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif; color: #1e293b; }

        /* ── Header ── */
        header.pm-header {
            background: #ffffff;
            border-bottom: 1px solid #e2e8f0;
            padding: 14px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }
        header.pm-header a img { height: 38px; width: auto; display: block; }

        /* ── Language Switcher ── */
        .pm-lang-switcher { display: flex; gap: 8px; align-items: center; }
        .pm-lang-btn {
            border: 2px solid #e2e8f0; background: #fff; color: #64748b;
            font-size: 0.82rem; font-weight: 600; padding: 6px 14px; border-radius: 8px;
            cursor: pointer; transition: all .18s ease; white-space: nowrap;
        }
        .pm-lang-btn:hover { border-color: #2563eb; color: #2563eb; background: #eff6ff; }
        .pm-lang-btn.active { background: #2563eb; color: #fff !important; border-color: #2563eb; }
        @media (max-width: 480px) { .pm-lang-btn { font-size: .75rem; padding: 5px 10px; } }

        /* ── Layout ── */
        .pm-wrapper { max-width: 1140px; margin: 0 auto; padding: 32px 20px 70px; }

        .pm-page-header {
            display: flex; align-items: flex-start; gap: 20px; margin-bottom: 32px;
        }
        .pm-page-title    { font-size: 1.9rem; font-weight: 800; color: #0f172a; line-height: 1.2; }
        .pm-page-subtitle { font-size: 0.95rem; color: #64748b; margin-top: 6px; }

        .pm-grid {
            display: grid;
            grid-template-columns: 1fr 360px;
            gap: 28px;
            align-items: start;
        }
        @media (max-width: 900px) {
            .pm-grid { grid-template-columns: 1fr; }
            .pm-right { order: -1; }
        }

        /* ── Cards ── */
        .pm-card {
            background: #ffffff;
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            padding: 24px;
            margin-bottom: 22px;
            box-shadow: 0 2px 8px rgba(0,0,0,.03);
            transition: border-color 0.2s ease;
        }
        .pm-card:hover { border-color: #cbd5e1; }
        .pm-card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
        .pm-card-icon   { font-size: 1.4rem; }
        .pm-card-title  { font-size: 1.1rem; font-weight: 700; color: #0f172a; }

        /* ── Detail rows ── */
        .pm-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 20px; }
        @media (max-width: 560px) { .pm-details-grid { grid-template-columns: 1fr; } }

        .pm-detail-row   { display: flex; flex-direction: column; gap: 3px; }
        .pm-detail-label {
            font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em;
            text-transform: uppercase; color: #94a3b8;
        }
        .pm-detail-value { font-size: 0.95rem; font-weight: 600; color: #0f172a; word-break: break-word; }

        /* ── Add-on list ── */
        .pm-addon-list  { display: flex; flex-direction: column; gap: 10px; }
        .pm-addon-item  {
            display: flex; justify-content: space-between; align-items: center;
            padding: 12px 16px; background: #f0fdf4; border-radius: 10px;
            border: 1.5px solid #bbf7d0;
        }
        .pm-addon-name  { font-size: 0.88rem; font-weight: 600; color: #166534; }
        .pm-addon-price { font-size: 0.9rem; font-weight: 700; color: #0f172a; }

        /* ── Summary sidebar ── */
        .pm-summary-card { position: sticky; top: 24px; }
        .pm-sum-rows     { display: flex; flex-direction: column; gap: 12px; }
        .pm-sum-row      { display: flex; justify-content: space-between; font-size: 0.9rem; color: #475569; }
        .pm-sum-row.discount span:last-child { color: #16a34a; font-weight: 600; }
        .pm-sum-divider  { border-top: 1px solid #e2e8f0; margin: 18px 0; }

        .pm-sum-total {
            display: flex; justify-content: space-between; align-items: center;
            font-size: 1.1rem; font-weight: 800; color: #0f172a;
        }
        .pm-total-amount { color: #2563eb; font-size: 1.4rem; }

        .pm-excess-note {
            margin-top: 14px; padding: 12px 14px;
            background: #fef9c3; border: 1px solid #fde68a; border-radius: 10px;
            font-size: 0.84rem; color: #854d0e; line-height: 1.4;
        }

        /* ── Buttons ── */
        .pm-confirm-btn {
            display: block; width: 100%; margin-top: 22px;
            padding: 16px; border: none; border-radius: 12px; cursor: pointer;
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            color: #fff; font-size: 1.02rem; font-weight: 700;
            box-shadow: 0 4px 16px rgba(37,99,235,.28);
            transition: all .2s ease; text-align: center; text-decoration: none;
        }
        .pm-confirm-btn:hover   { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,.38); }
        .pm-confirm-btn:active  { transform: translateY(0); }
        .pm-confirm-btn:disabled { opacity: .7; cursor: not-allowed; transform: none; }

        .pm-secondary-btn {
            display: inline-flex; align-items: center; justify-content: center; gap: 8px;
            padding: 12px 24px; border-radius: 10px; border: 1.5px solid #cbd5e1;
            background: #fff; color: #475569; font-size: 0.95rem; font-weight: 600;
            cursor: pointer; transition: all .18s ease; text-decoration: none;
        }
        .pm-secondary-btn:hover { border-color: #2563eb; color: #2563eb; background: #eff6ff; }

        .pm-back-btn {
            display: inline-flex; align-items: center; gap: 6px;
            padding: 8px 18px; border-radius: 10px; border: 1.5px solid #cbd5e1;
            background: #fff; color: #475569; font-size: 0.9rem; font-weight: 600;
            cursor: pointer; white-space: nowrap; flex-shrink: 0;
            transition: border-color .15s, color .15s;
        }
        .pm-back-btn:hover { border-color: #2563eb; color: #2563eb; }

        /* ── Status Screens (Success / Failed / Cancelled / Expired) ── */
        .pm-status-card {
            text-align: center; padding: 48px 32px;
            background: #ffffff; border-radius: 20px;
            max-width: 680px; margin: 40px auto;
            border: 1px solid #e2e8f0;
            box-shadow: 0 10px 30px rgba(0,0,0,0.06);
            animation: pm-fadein .4s ease both;
        }
        @keyframes pm-fadein { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:none; } }

        .pm-status-icon {
            width: 76px; height: 76px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 2.4rem; margin: 0 auto 20px;
        }
        .pm-status-success .pm-status-icon { background: #dcfce7; color: #15803d; }
        .pm-status-failed .pm-status-icon  { background: #fee2e2; color: #b91c1c; }
        .pm-status-cancel .pm-status-icon  { background: #fef3c7; color: #b45309; }
        .pm-status-expired .pm-status-icon { background: #fee2e2; color: #dc2626; }

        .pm-status-title { font-size: 1.55rem; font-weight: 800; color: #0f172a; margin-bottom: 8px; }
        .pm-status-msg   { font-size: 0.98rem; color: #64748b; line-height: 1.6; margin-bottom: 28px; }

        .pm-receipt-box {
            background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 12px;
            padding: 20px 24px; margin-bottom: 28px; text-align: left;
        }
        .pm-receipt-header {
            display: flex; justify-content: space-between; align-items: center;
            border-bottom: 1px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 14px;
        }
        .pm-receipt-title { font-size: 0.85rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b; }
        .pm-receipt-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 20px; }
        @media (max-width: 480px) { .pm-receipt-grid { grid-template-columns: 1fr; } }

        .pm-btn-group { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

        /* ── Print Receipt Styles ── */
        @media print {
            header.pm-header, footer, .pm-lang-switcher, .pm-btn-group, .pm-back-btn, #pm-countdown { display: none !important; }
            body { background: #fff !important; color: #000 !important; }
            .pm-wrapper { padding: 0 !important; max-width: 100% !important; }
            .pm-status-card { border: none !important; box-shadow: none !important; padding: 0 !important; max-width: 100% !important; }
            .pm-receipt-box { border: 1px solid #000 !important; background: #fff !important; }
        }
    </style>
</head>
<body <?php body_class(); ?>>

    <header class="pm-header">
        <a href="<?php echo esc_url(home_url('/')); ?>">
            <img src="<?php echo get_template_directory_uri(); ?>/images/home/0001807_gt-max.png" alt="GT Max Logo">
        </a>
        <div class="pm-lang-switcher">
            <button class="pm-lang-btn" data-lang="bm" id="pm-lang-bm">🇲🇾 BM</button>
            <button class="pm-lang-btn" data-lang="en" id="pm-lang-en">🇬🇧 EN</button>
            <button class="pm-lang-btn" data-lang="zh" id="pm-lang-zh">🇨🇳 中文</button>
        </div>
    </header>

    <script>
    (function () {
        var lang;
        try { lang = localStorage.getItem('gtmax_lang') || 'bm'; } catch(e) { lang = 'bm'; }
        document.querySelectorAll('.pm-lang-btn').forEach(function (btn) {
            if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
            btn.addEventListener('click', function () {
                try { localStorage.setItem('gtmax_lang', this.getAttribute('data-lang')); } catch(e) {}
                window.location.reload();
            });
        });
    })();
    </script>

    <main>
        <div id="payment-root">
            <div style="text-align:center;padding:80px 20px;color:#94a3b8;">
                <div style="display:inline-block;width:40px;height:40px;border:4px solid #e2e8f0;border-top-color:#2563eb;border-radius:50%;animation:spin 1s linear infinite;margin-bottom:15px;"></div>
                <div>Loading payment details…</div>
            </div>
        </div>
    </main>

    <style>@keyframes spin{to{transform:rotate(360deg)}}</style>

<?php get_footer(); ?>

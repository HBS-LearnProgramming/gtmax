(function () {
    /* -------------------------------------------------------------------------
       GT Max Insurance Payment JS
       Handles:
       - Payment Initiation (GET /payment/initiate/{uuid})
       - Payment Return Redirect from Fiuu (POST /payment/return)
       - Payment Cancel Redirect from Fiuu (POST /payment/cancel)
       - Payment Summary & Success Receipt Rendering
       ------------------------------------------------------------------------- */

    var translations = {
        en: {
            page_title: 'Payment Summary',
            page_subtitle: 'Review your details and confirm payment to proceed with your motor insurance.',
            back_btn: '← Back',
            section_customer: 'Customer Details',
            section_vehicle: 'Vehicle & Coverage',
            section_summary: 'Payment Summary',
            label_name: 'Full Name',
            label_nric: 'NRIC / Passport',
            label_email: 'Email',
            label_whatsapp: 'WhatsApp',
            label_postcode: 'Postcode',
            label_plate: 'Vehicle No.',
            label_make: 'Make & Model',
            label_year: 'Year',
            label_variant: 'Variant',
            label_coverage: 'Coverage Type',
            label_sum_insured: 'Sum Insured',
            label_ncd: 'NCD',
            label_basic: 'Basic Premium',
            label_ncd_disc: 'NCD Discount',
            label_annual: 'Annual Premium',
            label_addons: 'Add-on Covers',
            label_tax: 'Service Tax (8%)',
            label_stamp: 'Stamp Duty',
            label_total: 'Total Payable',
            confirm_btn: 'Proceed to Payment 🔒',
            confirming_btn: '⏳ Redirecting to Fiuu Gateway...',
            confirmed_btn: '✅ Payment Completed!',
            expired_title: 'Quotation Expired',
            expired_msg: 'This quotation has expired. Please start a new quote to get updated pricing.',
            expired_btn: 'Get New Quote',
            error_title: 'Something Went Wrong',
            error_try_again: '← Try Again',
            loading: 'Loading payment details…',
            excess_label: 'Excess Amount',
            countdown_label: 'Quotation expires in:',

            // Success State
            success_title: 'Payment Successful!',
            success_msg: 'Thank you! Your payment has been received and your motor insurance application has been submitted successfully.',
            receipt_title: 'Payment Receipt & Transaction Reference',
            label_tran_id: 'Transaction ID (Fiuu)',
            label_order_ref: 'Quotation Reference',
            label_date: 'Payment Date',
            label_amount: 'Amount Paid',
            btn_print: '🖨️ Print Receipt',
            btn_home: '🏠 Return to Home',

            // Failed State
            failed_title: 'Payment Failed',
            failed_msg: 'Your payment transaction could not be processed. Please check your payment details or try a different payment method.',
            btn_retry: '🔄 Try Payment Again',

            // Cancelled State
            cancel_title: 'Payment Cancelled',
            cancel_msg: 'You have cancelled the payment process. Your quotation remains saved until it expires.',
            btn_cancel_retry: '💳 Resume & Pay Now',
        },
        bm: {
            page_title: 'Ringkasan Pembayaran',
            page_subtitle: 'Semak butiran anda dan sahkan pembayaran untuk meneruskan insurans motor.',
            back_btn: '← Kembali',
            section_customer: 'Butiran Pelanggan',
            section_vehicle: 'Kenderaan & Perlindungan',
            section_summary: 'Ringkasan Pembayaran',
            label_name: 'Nama Penuh',
            label_nric: 'NRIC / Pasport',
            label_email: 'E-mel',
            label_whatsapp: 'WhatsApp',
            label_postcode: 'Poskod',
            label_plate: 'No. Kenderaan',
            label_make: 'Jenama & Model',
            label_year: 'Tahun',
            label_variant: 'Varian',
            label_coverage: 'Jenis Perlindungan',
            label_sum_insured: 'Jumlah Diinsuranskan',
            label_ncd: 'NCD',
            label_basic: 'Premium Asas',
            label_ncd_disc: 'Diskaun NCD',
            label_annual: 'Premium Tahunan',
            label_addons: 'Perlindungan Tambahan',
            label_tax: 'Cukai Perkhidmatan (8%)',
            label_stamp: 'Duti Setem',
            label_total: 'Jumlah Perlu Dibayar',
            confirm_btn: 'Teruskan ke Pembayaran 🔒',
            confirming_btn: '⏳ Mengalih ke Fiuu Payment...',
            confirmed_btn: '✅ Pembayaran Selesai!',
            expired_title: 'Sebut Harga Telah Tamat Tempoh',
            expired_msg: 'Sebut harga ini telah tamat tempoh. Sila mulakan semula untuk mendapatkan sebut harga terkini.',
            expired_btn: 'Dapatkan Sebut Harga Baru',
            error_title: 'Ralat Berlaku',
            error_try_again: '← Cuba Lagi',
            loading: 'Memuatkan butiran pembayaran…',
            excess_label: 'Amaun Lebihan',
            countdown_label: 'Sebut harga tamat tempoh dalam:',

            // Success State
            success_title: 'Pembayaran Berjaya!',
            success_msg: 'Terima kasih! Pembayaran anda telah diterima dan permohonan insurans motor anda telah berjaya dihantar.',
            receipt_title: 'Resit Pembayaran & Rujukan Transaksi',
            label_tran_id: 'ID Transaksi (Fiuu)',
            label_order_ref: 'Rujukan Sebut Harga',
            label_date: 'Tarikh Pembayaran',
            label_amount: 'Jumlah Dibayar',
            btn_print: '🖨️ Cetak Resit',
            btn_home: '🏠 Kembali ke Utama',

            // Failed State
            failed_title: 'Pembayaran Gagal',
            failed_msg: 'Transaksi pembayaran anda tidak dapat diproses. Sila semak butiran kad/akaun anda atau cuba kaedah pembayaran lain.',
            btn_retry: '🔄 Cuba Pembayaran Semula',

            // Cancelled State
            cancel_title: 'Pembayaran Dibatalkan',
            cancel_msg: 'Anda telah membatalkan proses pembayaran. Sebut harga anda masih disimpan sehingga tamat tempoh.',
            btn_cancel_retry: '💳 Teruskan Pembayaran',
        },
        zh: {
            page_title: '付款摘要',
            page_subtitle: '请确认您的信息并确认付款以继续办理车险。',
            back_btn: '← 返回',
            section_customer: '客户资料',
            section_vehicle: '车辆与保障',
            section_summary: '付款摘要',
            label_name: '全名',
            label_nric: 'NRIC / 护照',
            label_email: '电子邮件',
            label_whatsapp: 'WhatsApp',
            label_postcode: '邮政编码',
            label_plate: '车牌号',
            label_make: '品牌与型号',
            label_year: '年份',
            label_variant: '车型',
            label_coverage: '保障类型',
            label_sum_insured: '保额',
            label_ncd: 'NCD',
            label_basic: '基本保费',
            label_ncd_disc: 'NCD 折扣',
            label_annual: '年度保费',
            label_addons: '附加险种',
            label_tax: '服务税 (8%)',
            label_stamp: '印花税',
            label_total: '应付总额',
            confirm_btn: '前往安全付款 🔒',
            confirming_btn: '⏳ 正在跳转至 Fiuu 支付网关...',
            confirmed_btn: '✅ 付款已完成！',
            expired_title: '报价已过期',
            expired_msg: '此报价已失效，请重新申请报价。',
            expired_btn: '重新获取报价',
            error_title: '出现错误',
            error_try_again: '← 重试',
            loading: '正在加载付款详情…',
            excess_label: '超额金额',
            countdown_label: '报价将在以下时间后过期:',

            // Success State
            success_title: '付款成功！',
            success_msg: '感谢您！我们已收到您的付款，您的汽车保险申请已成功提交。',
            receipt_title: '付款收据及交易凭证',
            label_tran_id: '交易编号 (Fiuu)',
            label_order_ref: '报价参考号',
            label_date: '付款日期',
            label_amount: '已付金额',
            btn_print: '🖨️ 打印收据',
            btn_home: '🏠 返回首页',

            // Failed State
            failed_title: '付款失败',
            failed_msg: '您的付款交易无法处理。请检查您的支付信息或尝试其他支付方式。',
            btn_retry: '🔄 重新尝试付款',

            // Cancelled State
            cancel_title: '付款已取消',
            cancel_msg: '您已取消付款流程。在过期之前，您的报价将继续保存。',
            btn_cancel_retry: '💳 继续支付',
        },
    };

    function getLang() {
        try { return localStorage.getItem('gtmax_lang') || 'bm'; } catch (e) { return 'bm'; }
    }

    function fmt(num) {
        return 'RM ' + parseFloat(num || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function mask(str) {
        if (!str) return '—';
        if (str.length <= 4) return str;
        return str.slice(0, -4).replace(/./g, '*') + str.slice(-4);
    }

    /* ── Countdown ─────────────────────────────────────────────────────────── */
    var _cdTimer = null;

    function startCountdown(expiryMs, t, root) {
        if (!expiryMs || isNaN(expiryMs)) return;

        if (!document.getElementById('pm-cd-style')) {
            var s = document.createElement('style');
            s.id = 'pm-cd-style';
            s.textContent = [
                '@keyframes pm-pulse{0%,100%{opacity:1}50%{opacity:.6}}',
                '@keyframes pm-tick{0%{transform:scale(1)}50%{transform:scale(1.1)}100%{transform:scale(1)}}',
                '#pm-countdown{position:sticky;top:0;z-index:999;background:linear-gradient(90deg,#1e40af,#4f46e5);',
                'color:#fff;display:flex;align-items:center;justify-content:center;gap:14px;',
                'padding:10px 20px;font-family:inherit;box-shadow:0 2px 12px rgba(79,70,229,.35);}',
                '#pm-countdown .pm-cd-label{font-size:.85rem;font-weight:600;opacity:.9;white-space:nowrap;}',
                '#pm-countdown .pm-cd-clock{display:flex;gap:6px;align-items:center;}',
                '#pm-countdown .pm-cd-seg{display:flex;flex-direction:column;align-items:center;}',
                '#pm-countdown .pm-cd-num{background:rgba(255,255,255,.18);border-radius:6px;',
                'padding:4px 10px;font-size:1.2rem;font-weight:800;min-width:40px;text-align:center;',
                'font-variant-numeric:tabular-nums;animation:pm-tick 1s ease-in-out infinite;}',
                '#pm-countdown .pm-cd-unit{font-size:.6rem;opacity:.75;margin-top:2px;text-transform:uppercase;letter-spacing:.06em;}',
                '#pm-countdown .pm-cd-colon{font-size:1.2rem;font-weight:900;margin-bottom:10px;opacity:.7;}',
                '#pm-countdown.pm-urgent{background:linear-gradient(90deg,#b91c1c,#dc2626)!important;animation:pm-pulse 1s ease-in-out infinite;}',
                '@media(max-width:540px){#pm-countdown .pm-cd-label{display:none}#pm-countdown .pm-cd-num{font-size:1rem;padding:3px 7px;min-width:32px}}',
            ].join('');
            document.head.appendChild(s);
        }

        function seg(id) {
            return '<div class="pm-cd-seg"><div class="pm-cd-num" id="pm-cd-' + id + '">00</div><div class="pm-cd-unit">' + id + '</div></div>';
        }
        var banner = document.createElement('div');
        banner.id = 'pm-countdown';
        banner.innerHTML = '<span class="pm-cd-label">' + t.countdown_label + '</span>'
            + '<div class="pm-cd-clock">'
            + seg('hrs') + '<span class="pm-cd-colon">:</span>'
            + seg('min') + '<span class="pm-cd-colon">:</span>'
            + seg('sec')
            + '</div>';

        var mainEl = document.querySelector('main') || document.body.firstElementChild;
        if (mainEl && mainEl.parentNode) {
            mainEl.parentNode.insertBefore(banner, mainEl);
        } else {
            document.body.insertBefore(banner, document.body.firstChild);
        }

        function pad(n) { return String(n).padStart(2, '0'); }

        function tick() {
            var diff = expiryMs - Date.now();
            if (diff <= 0) {
                if (_cdTimer) { clearInterval(_cdTimer); _cdTimer = null; }
                var b = document.getElementById('pm-countdown');
                if (b) b.remove();
                root.innerHTML = expiredHtml(t);
                return;
            }
            var total = Math.floor(diff / 1000);
            var h = Math.floor(total / 3600);
            var m = Math.floor((total % 3600) / 60);
            var sec = total % 60;
            var hEl = document.getElementById('pm-cd-hrs');
            var mEl = document.getElementById('pm-cd-min');
            var sEl = document.getElementById('pm-cd-sec');
            if (hEl) hEl.textContent = pad(h);
            if (mEl) mEl.textContent = pad(m);
            if (sEl) sEl.textContent = pad(sec);
            var bEl = document.getElementById('pm-countdown');
            if (bEl) {
                if (total < 300) bEl.classList.add('pm-urgent');
                else bEl.classList.remove('pm-urgent');
            }
        }
        tick();
        _cdTimer = setInterval(tick, 1000);
    }

    /* ── HTML Render Helpers ────────────────────────────────────────────────── */
    function dRow(label, value) {
        return '<div class="pm-detail-row"><span class="pm-detail-label">' + label + '</span><span class="pm-detail-value">' + (value || '—') + '</span></div>';
    }
    function pRow(label, value, extra) {
        return '<div class="pm-sum-row' + (extra ? ' ' + extra : '') + '"><span>' + label + '</span><span>' + value + '</span></div>';
    }

    function expiredHtml(t) {
        return '<div class="pm-status-card pm-status-expired"><div class="pm-status-icon">⏳</div>'
            + '<h2 class="pm-status-title">' + t.expired_title + '</h2>'
            + '<p class="pm-status-msg">' + t.expired_msg + '</p>'
            + '<a href="/insurance" class="pm-confirm-btn" style="display:inline-block;width:auto;padding:12px 32px;">' + t.expired_btn + '</a></div>';
    }

    function errorHtml(t, msg) {
        return '<div class="pm-status-card pm-status-failed"><div class="pm-status-icon">⚠️</div>'
            + '<h2 class="pm-status-title">' + t.error_title + '</h2>'
            + '<p class="pm-status-msg">' + (msg || '') + '</p>'
            + '<a href="/insurance" class="pm-secondary-btn">' + t.error_try_again + '</a></div>';
    }

    /* ── Render Payment Success Screen ──────────────────────────────────────── */
    function renderSuccessScreen(t, root, uuid, resData) {
        var quotation = resData.quotation || {};
        var qRes = quotation.quotation_result_updated || quotation.quotation_result;
        var details = qRes ? qRes.payment_details : null;

        var tranId = resData.tranID || (details ? details.tranID : null) || '—';
        var amount = resData.amount || (details ? details.amount : null) || '—';
        var dateStr = (details && details.updated_at) ? new Date(details.updated_at).toLocaleString() : new Date().toLocaleString();

        var html = '<div class="pm-status-card pm-status-success">'
            + '<div class="pm-status-icon">✓</div>'
            + '<h1 class="pm-status-title">' + t.success_title + '</h1>'
            + '<p class="pm-status-msg">' + t.success_msg + '</p>'
            + '<div class="pm-receipt-box">'
            + '<div class="pm-receipt-header"><span class="pm-receipt-title">' + t.receipt_title + '</span><span>' + (quotation.payload ? quotation.payload.vehicle_number || '' : '') + '</span></div>'
            + '<div class="pm-receipt-grid">'
            + dRow(t.label_order_ref, uuid)
            + dRow(t.label_tran_id, tranId)
            + dRow(t.label_amount, typeof amount === 'number' || !isNaN(parseFloat(amount)) ? fmt(amount) : amount)
            + dRow(t.label_date, dateStr)
            + '</div></div>'
            + '<div class="pm-btn-group">'
            + '<button id="pm-print-btn" class="pm-secondary-btn">' + t.btn_print + '</button>'
            + '<a href="/" class="pm-confirm-btn" style="width:auto;margin-top:0;padding:12px 28px;">' + t.btn_home + '</a>'
            + '</div>'
            + '</div>';

        root.innerHTML = html;

        var printBtn = document.getElementById('pm-print-btn');
        if (printBtn) {
            printBtn.addEventListener('click', function () { window.print(); });
        }
    }

    /* ── Render Payment Failed Screen ───────────────────────────────────────── */
    function renderFailedScreen(t, root, uuid, errorMsg) {
        var html = '<div class="pm-status-card pm-status-failed">'
            + '<div class="pm-status-icon">✕</div>'
            + '<h1 class="pm-status-title">' + t.failed_title + '</h1>'
            + '<p class="pm-status-msg">' + (errorMsg || t.failed_msg) + '</p>'
            + '<div class="pm-btn-group">'
            + '<a href="/insurance-payment/?uuid=' + encodeURIComponent(uuid) + '" class="pm-confirm-btn" style="width:auto;margin-top:0;padding:12px 28px;">' + t.btn_retry + '</a>'
            + '<a href="/insurance" class="pm-secondary-btn">' + t.back_btn + '</a>'
            + '</div>'
            + '</div>';

        root.innerHTML = html;
    }

    /* ── Render Payment Cancelled Screen ────────────────────────────────────── */
    function renderCancelledScreen(t, root, uuid) {
        var html = '<div class="pm-status-card pm-status-cancel">'
            + '<div class="pm-status-icon">🚫</div>'
            + '<h1 class="pm-status-title">' + t.cancel_title + '</h1>'
            + '<p class="pm-status-msg">' + t.cancel_msg + '</p>'
            + '<div class="pm-btn-group">'
            + '<a href="/insurance-payment/?uuid=' + encodeURIComponent(uuid) + '" class="pm-confirm-btn" style="width:auto;margin-top:0;padding:12px 28px;">' + t.btn_cancel_retry + '</a>'
            + '<a href="/insurance" class="pm-secondary-btn">' + t.back_btn + '</a>'
            + '</div>'
            + '</div>';

        root.innerHTML = html;
    }

    /* ── Render Payment Summary & Initiation Screen ──────────────────────────── */
    function renderSummaryPage(data, t, root, uuid) {
        var customer = data.customer || {};
        var payload = data.payload || {};
        var rawMsg = data.message || {};
        var quote = (rawMsg && rawMsg.quotation_result_updated)
            ? rawMsg.quotation_result_updated
            : ((rawMsg && rawMsg.quotation_result) ? rawMsg.quotation_result : rawMsg);
        var premium = quote.premium || {};

        var addons = (quote.additionalCover || []).filter(function (a) { return a.selectedIndicator; });
        var addonSum = addons.reduce(function (acc, a) { return acc + parseFloat(a.displayPremium || 0); }, 0);
        var grandTotal = parseFloat(premium.premiumDueAfterPTV || premium.premiumDueRounded || premium.premiumDue || 0);

        // Customer info
        var customerHtml = '<div class="pm-card">'
            + '<div class="pm-card-header"><span class="pm-card-icon">👤</span><div><h2 class="pm-card-title">' + t.section_customer + '</h2></div></div>'
            + '<div class="pm-details-grid">'
            + dRow(t.label_name, customer.name || '—')
            + dRow(t.label_nric, mask(customer.nric))
            + (customer.email ? dRow(t.label_email, customer.email) : '')
            + (customer.whatsapp_number ? dRow(t.label_whatsapp, customer.whatsapp_number) : '')
            + (customer.postcode ? dRow(t.label_postcode, customer.postcode) : '')
            + '</div></div>';

        // Vehicle info
        var vehicleHtml = '<div class="pm-card">'
            + '<div class="pm-card-header"><span class="pm-card-icon">🏍️</span><div><h2 class="pm-card-title">' + t.section_vehicle + '</h2></div></div>'
            + '<div class="pm-details-grid">'
            + dRow(t.label_plate, customer.vehicle_number || payload.vehicle_number || payload.vehicleLicenseId || '—')
            + dRow(t.label_make, (payload.vehicleMake || '') + ' ' + (payload.vehicleModel || payload.vehicleModelDesc || ''))
            + dRow(t.label_year, payload.yearOfManufacture || '—')
            + dRow(t.label_variant, payload.vehicleVariant || '—')
            + dRow(t.label_coverage, payload.coverageType || '—')
            + dRow(t.label_ncd, (premium.ncdPct || payload.ncdPercentage || 0) + '%')
            + dRow(t.label_sum_insured, fmt(payload.vehicleMarketValue))
            + '</div></div>';

        // Selected add-ons list
        var addonsHtml = '';
        if (addons.length > 0) {
            addonsHtml = '<div class="pm-card">'
                + '<div class="pm-card-header"><span class="pm-card-icon">🛡️</span><div><h2 class="pm-card-title">' + t.label_addons + '</h2></div></div>'
                + '<div class="pm-addon-list">'
                + addons.map(function (a) {
                    var pVal = parseFloat(a.displayPremium || 0);
                    return '<div class="pm-addon-item">'
                        + '<span class="pm-addon-name">' + (a.coverName || '') + '</span>'
                        + '<span class="pm-addon-price">' + (pVal > 0 ? fmt(pVal) : '') + '</span>'
                        + '</div>';
                }).join('')
                + '</div></div>';
        }

        // Payment summary sidebar
        var summaryHtml = '<div class="pm-card pm-summary-card" id="pm-summary">'
            + '<div class="pm-card-header"><span class="pm-card-icon">💳</span><div><h2 class="pm-card-title">' + t.section_summary + '</h2></div></div>'
            + '<div class="pm-sum-rows">'
            + pRow(t.label_basic, fmt(premium.basicPremium))
            + pRow(t.label_ncd_disc, '− ' + fmt(premium.ncdAmt), 'discount')
            + pRow(t.label_annual, fmt(premium.annualPremium))
            + (addonSum > 0 ? pRow(t.label_addons, fmt(addonSum)) : '')
            + pRow(t.label_tax, fmt(premium.serviceTaxAmount))
            + pRow(t.label_stamp, fmt(premium.stampDuty))
            + '</div>'
            + '<div class="pm-sum-divider"></div>'
            + '<div class="pm-sum-total"><span>' + t.label_total + '</span><span class="pm-total-amount">' + fmt(grandTotal) + '</span></div>'
            + (premium.excessAmount ? '<div class="pm-excess-note">⚠️ ' + t.excess_label + ': <strong>' + fmt(premium.excessAmount) + '</strong></div>' : '')
            + '<button id="pm-confirm-btn" class="pm-confirm-btn">' + t.confirm_btn + '</button>'
            + '</div>';

        root.innerHTML = '<div class="pm-wrapper">'
            + '<div class="pm-page-header">'
            + '<button id="pm-back-btn" class="pm-back-btn">' + t.back_btn + '</button>'
            + '<div><h1 class="pm-page-title">' + t.page_title + '</h1>'
            + '<p class="pm-page-subtitle">' + t.page_subtitle + '</p></div>'
            + '</div>'
            + '<div class="pm-grid">'
            + '<div class="pm-left">'
            + customerHtml
            + vehicleHtml
            + addonsHtml
            + '</div>'
            + '<div class="pm-right">' + summaryHtml + '</div>'
            + '</div>'
            + '</div>';

        // Back button
        var backBtn = document.getElementById('pm-back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', function () { history.back(); });
        }

        // Confirm Payment button -> Initiates Payment via Fiuu Hosted Payment Page
        var confirmBtn = document.getElementById('pm-confirm-btn');
        if (confirmBtn) {
            confirmBtn.addEventListener('click', function () {
                var btn = this;
                btn.disabled = true;
                btn.textContent = t.confirming_btn;

                // Extract raw token if present to prevent 401 error on direct browser navigation
                var rawToken = (GTMAX_CONFIG.token || '').replace(/^Bearer\s+/i, '');
                var initiateUrl = GTMAX_CONFIG.apiUrl + '/payment/initiate/' + encodeURIComponent(uuid);
                if (rawToken) {
                    initiateUrl += '?api_token=' + encodeURIComponent(rawToken);
                }
                window.location.href = initiateUrl;
            });
        }
    }

    /* ── Main Router & Bootstrapper ──────────────────────────────────────────── */
    function initPaymentPage() {
        var lang = getLang();
        var t = translations[lang] || translations.bm;
        var root = document.getElementById('payment-root');
        if (!root) return;

        var searchParams = new URLSearchParams(window.location.search);
        var uuid = searchParams.get('uuid') || searchParams.get('orderid');

        if (!uuid) {
            root.innerHTML = errorHtml(t, 'No quotation reference found. Please return to the insurance form.');
            return;
        }

        // Check URL parameters for Return / Cancel status from Fiuu Gateway
        var status = searchParams.get('status');
        var tranID = searchParams.get('tranID');
        var skey = searchParams.get('skey');

        // Case A: User cancelled payment on Fiuu gateway
        if (status === 'cancelled' || status === 'cancel') {
            fetch(GTMAX_CONFIG.apiUrl + '/payment/cancel', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': GTMAX_CONFIG.token,
                },
                body: JSON.stringify({ uuid: uuid, orderid: uuid, status: 'cancelled' }),
            })
                .then(function (res) { return res.json(); })
                .then(function (data) { renderCancelledScreen(t, root, uuid); })
                .catch(function (err) {
                    console.error(err);
                    renderCancelledScreen(t, root, uuid);
                });
            return;
        }

        // Case B: User returned from Fiuu with status parameters (or POST/GET callback return)
        if (tranID || skey || (status !== null && status !== undefined && status !== '')) {
            // Build key-value map of search params to send to backend handleReturn API
            var returnPayload = {};
            searchParams.forEach(function (val, key) { returnPayload[key] = val; });
            if (!returnPayload.uuid) returnPayload.uuid = uuid;

            fetch(GTMAX_CONFIG.apiUrl + '/payment/return', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': GTMAX_CONFIG.token,
                },
                body: JSON.stringify(returnPayload),
            })
                .then(function (res) { return res.json(); })
                .then(function (resData) {
                    if (resData.success || resData.is_completed) {
                        renderSuccessScreen(t, root, uuid, resData);
                    } else {
                        renderFailedScreen(t, root, uuid, resData.error_desc || resData.message);
                    }
                })
                .catch(function (err) {
                    console.error(err);
                    renderFailedScreen(t, root, uuid, 'Failed to verify payment status. Please contact support.');
                });
            return;
        }

        // Case C: Standard Page View — Load quotation details from backend
        fetch(GTMAX_CONFIG.apiUrl + '/return_quotation/' + uuid, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': GTMAX_CONFIG.token,
            },
        })
            .then(function (res) {
                return res.json().then(function (d) { return { status: res.status, data: d }; });
            })
            .then(function (result) {
                var resStatus = result.status;
                var d = result.data;

                if (resStatus === 410 || d.is_expired === true) {
                    root.innerHTML = expiredHtml(t);
                    return;
                }
                if (!d.success) {
                    root.innerHTML = errorHtml(t, d.message || 'Quotation not found.');
                    return;
                }

                // If quotation is already Completed (already paid), render Success Screen directly
                if (d.status === 'completed' || d.status === 'Completed') {
                    renderSuccessScreen(t, root, uuid, { success: true, quotation: { quotation_result: d.message } });
                    return;
                }

                // Otherwise, render Payment Summary screen for initiation
                renderSummaryPage(d, t, root, uuid);

                var hrs = parseInt(d.hours_remaining || 0, 10);
                var min = parseInt(d.minutes_remaining || 0, 10);
                var sec = parseInt(d.seconds_remaining || 0, 10);
                var remainMs = ((hrs * 3600) + (min * 60) + sec) * 1000;
                if (remainMs > 0) startCountdown(Date.now() + remainMs, t, root);
            })
            .catch(function (err) {
                console.error(err);
                root.innerHTML = errorHtml(t, 'Error loading payment details. Please try again later.');
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPaymentPage);
    } else {
        initPaymentPage();
    }
})();

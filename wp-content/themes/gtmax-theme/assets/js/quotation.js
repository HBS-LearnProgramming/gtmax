(function () {
    /* -------------------------------------------------------------------------
       Quotation Page - reads data stored by insurance.js in sessionStorage
       ------------------------------------------------------------------------- */

    const STORAGE_KEY = "gtmax_quotation_data";

    const translations = {
        en: {
            page_title: "Your Insurance Quotation",
            page_subtitle: "Review your premium breakdown and choose any optional add-on covers before proceeding.",
            back_btn: "← Back",
            section_vehicle: "Vehicle Details",
            section_premium: "Premium Breakdown",
            section_addons: "Optional Add-on Covers",
            section_addons_sub: "Toggle covers you wish to include. Prices shown are indicative.",
            label_plate: "Registration No.",
            label_make: "Make & Model",
            label_year: "Year",
            label_ncd: "NCD",
            label_variant: "Variant",
            label_coverage: "Coverage Type",
            label_sum_insured: "Sum Insured",
            label_basic_premium: "Basic Premium",
            label_ncd_amount: "NCD Discount",
            label_annual_premium: "Annual Premium",
            label_service_tax: "Service Tax (8%)",
            label_stamp_duty: "Stamp Duty",
            label_total_due: "Total Premium Due",
            label_excess: "Excess Amount",
            proceed_btn: "Confirm Quotation",
            no_data_title: "No Quotation Data Found",
            no_data_msg: "Please return to the insurance form and complete the quote request first.",
            free_label: "FREE",
            included_label: "Included",
            optional_label: "Optional",
            expired_title: "Your Quotation Has Expired",
            expired_msg: "This quotation is no longer valid. Please start a new quote to get updated pricing.",
            expired_btn: "Get a New Quote",
            countdown_label: "Quotation expires in:",
            select_all: "Select All",
            deselect_all: "Deselect All",
        },
        bm: {
            page_title: "Sebut Harga Insurans Anda",
            page_subtitle: "Semak pecahan premium anda dan pilih perlindungan tambahan pilihan sebelum meneruskan.",
            back_btn: "← Kembali",
            section_vehicle: "Butiran Kenderaan",
            section_premium: "Pecahan Premium",
            section_addons: "Perlindungan Tambahan Pilihan",
            section_addons_sub: "Togol perlindungan yang ingin anda sertakan. Harga yang ditunjukkan adalah anggaran.",
            label_plate: "No. Pendaftaran",
            label_make: "Jenama & Model",
            label_year: "Tahun",
            label_ncd: "NCD",
            label_variant: "Varian",
            label_coverage: "Jenis Perlindungan",
            label_sum_insured: "Jumlah Diinsuranskan",
            label_basic_premium: "Premium Asas",
            label_ncd_amount: "Diskaun NCD",
            label_annual_premium: "Premium Tahunan",
            label_service_tax: "Cukai Perkhidmatan (8%)",
            label_stamp_duty: "Duti Setem",
            label_total_due: "Jumlah Premium Perlu Dibayar",
            label_excess: "Amaun Lebihan",
            proceed_btn: "Sahkan Sebut Harga",
            no_data_title: "Tiada Data Sebut Harga",
            no_data_msg: "Sila kembali ke borang insurans dan lengkapkan permintaan sebut harga terlebih dahulu.",
            free_label: "PERCUMA",
            included_label: "Disertakan",
            optional_label: "Pilihan",
            expired_title: "Sebut Harga Anda Telah Tamat Tempoh",
            expired_msg: "Sebut harga ini tidak lagi sah. Sila mulakan sebut harga baru untuk mendapatkan harga terkini.",
            expired_btn: "Dapatkan Sebut Harga Baru",
            countdown_label: "Sebut harga tamat tempoh dalam:",
            select_all: "Pilih Semua",
            deselect_all: "Nyahpilih Semua",
        },
        zh: {
            page_title: "您的保险报价",
            page_subtitle: "查看您的保费明细，并在继续之前选择任意附加险种。",
            back_btn: "← 返回",
            section_vehicle: "车辆详情",
            section_premium: "保费明细",
            section_addons: "可选附加险种",
            section_addons_sub: "切换您希望纳入的险种，显示价格仅供参考。",
            label_plate: "车牌号码",
            label_make: "品牌与型号",
            label_year: "年份",
            label_ncd: "NCD",
            label_variant: "车型",
            label_coverage: "保障类型",
            label_sum_insured: "保额",
            label_basic_premium: "基本保费",
            label_ncd_amount: "NCD 折扣",
            label_annual_premium: "年度保费",
            label_service_tax: "服务税 (8%)",
            label_stamp_duty: "印花税",
            label_total_due: "应付保费总额",
            label_excess: "超额金额",
            proceed_btn: "确认报价",
            no_data_title: "未找到报价数据",
            no_data_msg: "请返回保险表单并先完成报价请求。",
            free_label: "免费",
            included_label: "已包含",
            optional_label: "可选",
            expired_title: "您的报价已过期",
            expired_msg: "此报价已失效，请重新申请报价以获取最新价格。",
            expired_btn: "重新获取报价",
            countdown_label: "报价将在以下时间后过期:",
            select_all: "全选",
            deselect_all: "取消全选",
        },
    };

    function getLang() {
        try { return localStorage.getItem("gtmax_lang") || "bm"; } catch { return "bm"; }
    }

    function fmt(num) {
        return "RM " + parseFloat(num || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const selectedAddons = new Set();
    var _countdownTimer = null;

    /* ── Expired Screen ─────────────────────────────────────────────────────── */
    function renderExpiredScreen(t, root) {
        if (_countdownTimer) { clearInterval(_countdownTimer); _countdownTimer = null; }
        // Also remove countdown banner if it exists
        var banner = document.getElementById('qt-countdown-banner');
        if (banner) banner.remove();

        root.innerHTML = '<div class="qt-expired-screen">'
            + '<div class="qt-expired-icon">⏳</div>'
            + '<h2 class="qt-expired-title">' + t.expired_title + '</h2>'
            + '<p class="qt-expired-msg">' + t.expired_msg + '</p>'
            + '<a href="/insurance" class="qt-btn-reapply">' + t.expired_btn + '</a>'
            + '</div>';
    }

    /* ── Generic Error Card ──────────────────────────────────────────────────── */
    function renderErrorCard(message) {
        return '<div class="qt-error-card">'
            + '<div class="qt-error-icon">⚠️</div>'
            + '<h2 class="qt-error-title">Something went wrong</h2>'
            + '<p class="qt-error-msg">' + message + '</p>'
            + '<a href="/insurance" class="qt-btn-reapply">← Try Again</a>'
            + '</div>';
    }

    /* ── Countdown Banner ───────────────────────────────────────────────────── */
    // expiryMs: absolute Unix millisecond timestamp when the quotation expires
    function startCountdown(expiryMs, t, root) {
        if (!expiryMs || isNaN(expiryMs)) return;

        // Inject banner styles once
        if (!document.getElementById('qt-countdown-style')) {
            var s = document.createElement('style');
            s.id = 'qt-countdown-style';
            s.innerHTML = [
                '@keyframes qt-pulse { 0%,100%{opacity:1} 50%{opacity:.65} }',
                '@keyframes qt-clocktick { 0%{transform:scale(1)} 50%{transform:scale(1.12)} 100%{transform:scale(1)} }',
                '#qt-countdown-banner {',
                '  position:sticky; top:0; z-index:999;',
                '  background:linear-gradient(90deg,#1e40af,#4f46e5);',
                '  color:#fff; display:flex; align-items:center; justify-content:center;',
                '  gap:14px; padding:10px 20px; font-family:inherit;',
                '  box-shadow:0 2px 12px rgba(79,70,229,.35);',
                '}',
                '#qt-countdown-banner .qt-cd-label {',
                '  font-size:.85rem; font-weight:600; opacity:.9; white-space:nowrap;',
                '}',
                '#qt-countdown-banner .qt-cd-clock {',
                '  display:flex; gap:6px; align-items:center;',
                '}',
                '#qt-countdown-banner .qt-cd-seg {',
                '  display:flex; flex-direction:column; align-items:center;',
                '}',
                '#qt-countdown-banner .qt-cd-num {',
                '  background:rgba(255,255,255,.18); border-radius:6px;',
                '  padding:4px 10px; font-size:1.25rem; font-weight:800;',
                '  font-variant-numeric:tabular-nums; min-width:42px; text-align:center;',
                '  letter-spacing:.04em; animation:qt-clocktick 1s ease-in-out infinite;',
                '}',
                '#qt-countdown-banner .qt-cd-unit {',
                '  font-size:.62rem; opacity:.75; margin-top:2px; text-transform:uppercase; letter-spacing:.06em;',
                '}',
                '#qt-countdown-banner .qt-cd-colon {',
                '  font-size:1.3rem; font-weight:900; margin-bottom:10px; opacity:.7;',
                '}',
                '#qt-countdown-banner.qt-cd-urgent {',
                '  background:linear-gradient(90deg,#b91c1c,#dc2626) !important;',
                '  animation:qt-pulse 1s ease-in-out infinite;',
                '}',
                '@media(max-width:540px){',
                '  #qt-countdown-banner .qt-cd-label{display:none}',
                '  #qt-countdown-banner .qt-cd-num{font-size:1rem;padding:3px 7px;min-width:34px}',
                '}'
            ].join('');
            document.head.appendChild(s);
        }

        // Build banner HTML
        function seg(id) {
            return '<div class="qt-cd-seg">'
                + '<div class="qt-cd-num" id="qt-cd-' + id + '">00</div>'
                + '<div class="qt-cd-unit">' + id + '</div>'
                + '</div>';
        }
        var banner = document.createElement('div');
        banner.id = 'qt-countdown-banner';
        banner.innerHTML = '<span class="qt-cd-label">' + t.countdown_label + '</span>'
            + '<div class="qt-cd-clock">'
            + seg('hrs') + '<span class="qt-cd-colon">:</span>'
            + seg('min') + '<span class="qt-cd-colon">:</span>'
            + seg('sec')
            + '</div>';

        // Insert banner: before main (or as first child of body)
        var mainEl = document.querySelector('main') || document.body.firstElementChild;
        if (mainEl && mainEl.parentNode) {
            mainEl.parentNode.insertBefore(banner, mainEl);
        } else {
            document.body.insertBefore(banner, document.body.firstChild);
        }

        function pad(n) { return String(n).padStart(2, '0'); }

        function tick() {
            var now = Date.now();
            var diff = expiryMs - now;

            if (diff <= 0) {
                renderExpiredScreen(t, root);
                return;
            }

            var totalSec = Math.floor(diff / 1000);
            var hrs = Math.floor(totalSec / 3600);
            var min = Math.floor((totalSec % 3600) / 60);
            var sec = totalSec % 60;

            var hEl = document.getElementById('qt-cd-hrs');
            var mEl = document.getElementById('qt-cd-min');
            var sEl = document.getElementById('qt-cd-sec');
            if (hEl) hEl.textContent = pad(hrs);
            if (mEl) mEl.textContent = pad(min);
            if (sEl) sEl.textContent = pad(sec);

            // Turn red when < 5 minutes
            var bannerEl = document.getElementById('qt-countdown-banner');
            if (bannerEl) {
                if (totalSec < 300) { bannerEl.classList.add('qt-cd-urgent'); }
                else { bannerEl.classList.remove('qt-cd-urgent'); }
            }
        }

        tick(); // immediate first paint
        _countdownTimer = setInterval(tick, 1000);
    }

    function initQuotationPage() {
        var lang = getLang();
        var t = translations[lang] || translations.bm;
        var root = document.getElementById("quotation-root");

        if (!root) return;

        var urlParams = new URLSearchParams(window.location.search);
        var uuid = urlParams.get('uuid');

        if (uuid) {
            // Render loading indicator
            root.innerHTML = '<div style="text-align:center;padding:80px 20px;color:#94a3b8;"><div style="display:inline-block;width:40px;height:40px;border:4px solid #e2e8f0;border-top-color:#2563eb;border-radius:50%;animation:spin 1s linear infinite;margin-bottom:15px;"></div><div>Loading quotation details...</div></div>';

            // Inject spin animation css dynamic style if not present
            if (!document.getElementById('spin-anim-style')) {
                var style = document.createElement('style');
                style.id = 'spin-anim-style';
                style.innerHTML = '@keyframes spin { to { transform: rotate(360deg); } }';
                document.head.appendChild(style);
            }

            fetch(GTMAX_CONFIG.apiUrl + '/return_quotation/' + uuid, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': GTMAX_CONFIG.token
                }
            })
                .then(function (res) {
                    // Always parse JSON — we need the body even on 410 (expired)
                    return res.json().then(function (data) {
                        return { status: res.status, data: data };
                    });
                })
                .then(function (result) {
                    var status = result.status;
                    var resData = result.data;
                    console.log('resData', resData)
                    // ── 410 Gone = quotation expired on the server ────────────────
                    if (status === 410 || resData.is_expired === true) {
                        renderExpiredScreen(t, root);
                        return;
                    }

                    // ── Other error (404, 500, etc.) ─────────────────────────────
                    if (!resData.success) {
                        root.innerHTML = renderErrorCard(resData.message || 'Quotation not found. Please try again.');
                        return;
                    }

                    var rawMessage = resData.message || {};
                    var quote = (rawMessage && rawMessage.quotation_result) ? rawMessage.quotation_result : rawMessage;
                    var payload = resData.payload || {};

                    renderPage(quote, payload, t, root);

                    // Build expiryMs from hours_remaining + minutes_remaining + seconds_remaining
                    // (server computed these relative to now, so we anchor to Date.now())
                    var hrs = parseInt(resData.hours_remaining || 0, 10);
                    var min = parseInt(resData.minutes_remaining || 0, 10);
                    var sec = parseInt(resData.seconds_remaining || 0, 10);
                    var totalRemainingMs = ((hrs * 3600) + (min * 60) + sec) * 1000;

                    if (totalRemainingMs > 0) {
                        startCountdown(Date.now() + totalRemainingMs, t, root);
                    }
                })
                .catch(function (err) {
                    console.error(err);
                    root.innerHTML = renderErrorCard('Error loading quotation details. Please try again later.');
                });
        } else {
            // Fallback to SessionStorage
            var raw = sessionStorage.getItem(STORAGE_KEY);
            if (!raw) {
                root.innerHTML = '<div class="qt-no-data"><div class="qt-no-data-icon">⚠️</div><h2>' + t.no_data_title + '</h2><p>' + t.no_data_msg + '</p><button onclick="history.back()" class="qt-btn-back-top">' + t.back_btn + '</button></div>';
                return;
            }

            var data;
            try { data = JSON.parse(raw); } catch (e) { root.innerHTML = '<p style="color:red;">Failed to parse quotation data.</p>'; return; }

            var quote = data.quote || {};
            var payload = data.payload || {};
            renderPage(quote, payload, t, root);
        }
    }

    function renderPage(quote, payload, t, root) {
        var premium = quote.premium || {};
        var addons = quote.additionalCover || [];

        addons.forEach(function (cover, idx) { if (cover.selectedIndicator) selectedAddons.add(idx); });

        var addonHtml = "";
        if (addons.length > 0) {
            var allSelected = addons.every(function (_, idx) { return selectedAddons.has(idx); });
            var addonCards = addons.map(function (cover, idx) { return renderAddonCard(cover, idx, t); }).join("");
            addonHtml = '<div class="qt-card" id="addons-card">'
                + '<div class="qt-card-header">'
                + '<span class="qt-card-icon">🛡️</span>'
                + '<div style="flex:1;"><h2 class="qt-card-title">' + t.section_addons + '</h2>'
                + '<p class="qt-card-subtitle">' + t.section_addons_sub + '</p></div>'
                + '<button id="qt-select-all-btn" class="qt-btn-select-all' + (allSelected ? ' active' : '') + '">'
                + (allSelected ? t.deselect_all : t.select_all)
                + '</button>'
                + '</div>'
                + '<div class="qt-addons-list" id="addons-list">' + addonCards + '</div>'
                + '</div>';
        }

        var addonPremiumRow = '<div class="qt-premium-row" id="addon-premium-row" style="display:none;"><span>Add-ons</span><span id="addon-premium-total">RM 0.00</span></div>';

        root.innerHTML = '<div class="qt-wrapper">'
            + '<div class="qt-page-header">'
            + '<button id="qt-back-btn" class="qt-btn-back-top">' + t.back_btn + '</button>'
            + '<div><h1 class="qt-page-title">' + t.page_title + '</h1>'
            + '<p class="qt-page-subtitle">' + t.page_subtitle + '</p></div>'
            + '</div>'
            + '<div class="qt-grid">'

            /* LEFT */
            + '<div class="qt-left">'
            + '<div class="qt-card">'
            + '<div class="qt-card-header"><span class="qt-card-icon">🏍️</span><h2 class="qt-card-title">' + t.section_vehicle + '</h2></div>'
            + '<div class="qt-vehicle-grid">'
            + vRow(t.label_plate, payload.vehicleLicenseId || payload.vehicle_number || "—")
            + vRow(t.label_make, (payload.vehicleMake || "") + " " + (payload.vehicleModel || payload.vehicleModelDesc || ""))
            + vRow(t.label_year, payload.yearOfManufacture || "—")
            + vRow(t.label_variant, payload.vehicleVariant || "—")
            + vRow(t.label_coverage, payload.coverageType || "—")
            + vRow(t.label_ncd, (premium.ncdPct || payload.ncdPercentage || 0) + "%")
            + vRow(t.label_sum_insured, fmt(payload.vehicleMarketValue))
            + '</div></div>'
            + addonHtml
            + '</div>'

            /* RIGHT */
            + '<div class="qt-right">'
            + '<div class="qt-card qt-premium-card" id="premium-summary">'
            + '<div class="qt-card-header"><span class="qt-card-icon">💰</span><h2 class="qt-card-title">' + t.section_premium + '</h2></div>'
            + '<div class="qt-premium-rows">'
            + pRow(t.label_basic_premium, fmt(premium.basicPremium))
            + pRow(t.label_ncd_amount, "− " + fmt(premium.ncdAmt), "discount")
            + pRow(t.label_annual_premium, fmt(premium.annualPremium))
            + addonPremiumRow
            + '<div class="qt-premium-row"><span>' + t.label_service_tax + '</span><span id="qt-service-tax">' + fmt(premium.serviceTaxAmount) + '</span></div>'
            + pRow(t.label_stamp_duty, fmt(premium.stampDuty))
            + '</div>'
            + '<div class="qt-premium-divider"></div>'
            + '<div class="qt-premium-total-row"><span>' + t.label_total_due + '</span><span id="qt-grand-total">' + fmt(premium.premiumDueAfterPTV || premium.premiumDueRounded || premium.premiumDue) + '</span></div>'
            + (premium.excessAmount ? '<div class="qt-excess-note">⚠️ ' + t.label_excess + ': <strong>' + fmt(premium.excessAmount) + '</strong></div>' : "")
            + '<button id="qt-proceed-btn" class="qt-btn-proceed">' + t.proceed_btn + '</button>'
            + '</div>'
            + '</div>'

            + '</div></div>';

        /* Wire toggles */
        document.querySelectorAll(".qt-addon-toggle").forEach(function (toggle) {
            toggle.addEventListener("change", function () {
                var idx = parseInt(toggle.dataset.idx, 10);
                if (toggle.checked) { selectedAddons.add(idx); } else { selectedAddons.delete(idx); }
                recalcAddonTotal(addons, premium);
                updateSelectAllBtn(addons, t);
            });
        });
        recalcAddonTotal(addons, premium);

        /* Wire Select All button */
        var selectAllBtn = document.getElementById('qt-select-all-btn');
        if (selectAllBtn) {
            selectAllBtn.addEventListener('click', function () {
                var allSelected = addons.every(function (_, idx) { return selectedAddons.has(idx); });
                document.querySelectorAll('.qt-addon-toggle').forEach(function (cb) {
                    var idx = parseInt(cb.dataset.idx, 10);
                    cb.checked = !allSelected;
                    if (!allSelected) { selectedAddons.add(idx); } else { selectedAddons.delete(idx); }
                });
                recalcAddonTotal(addons, premium);
                updateSelectAllBtn(addons, t);
            });
        }

        document.getElementById("qt-back-btn").addEventListener("click", function () { history.back(); });

        document.getElementById("qt-proceed-btn").addEventListener("click", function () {
            var btn = this;

            // Build the chosen addon list with updated selectedIndicator flags
            var updatedAddons = addons.map(function (cover, idx) {
                return Object.assign({}, cover, { selectedIndicator: selectedAddons.has(idx) });
            });
            console.log('updatedAddons', updatedAddons);
            // Merge selected add-ons back into the quotation result
            var updatedQuote = Object.assign({}, quote, { selectedAdditionalCover: updatedAddons.filter(function (cover) { return cover.selectedIndicator; }) });

            // uuid comes from the URL ?uuid=...
            var urlParams = new URLSearchParams(window.location.search);
            var uuid = urlParams.get('uuid');

            // Build POST body
            var body = {
                uuid: uuid,
                quotation_result: updatedQuote,
                payload: payload,
            };

            // Loading state
            btn.disabled = true;
            btn.textContent = '⏳ Submitting...';

            fetch(GTMAX_CONFIG.apiUrl + '/updateQuotation', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': GTMAX_CONFIG.token,
                },
                body: JSON.stringify(body),
            })
                .then(function (res) {
                    return res.json().then(function (data) {
                        return { status: res.status, data: data };
                    });
                })
                .then(function (result) {
                    if (result.data.success) {
                        btn.textContent = '✅ Redirecting to payment...';
                        btn.style.background = 'linear-gradient(135deg,#16a34a,#15803d)';
                        // Redirect to payment page with the same uuid
                        var paymentUrl = GTMAX_CONFIG.paymentUrl + '?uuid=' + encodeURIComponent(result.data.message || uuid);
                        window.location.href = paymentUrl;
                    } else {
                        btn.disabled = false;
                        btn.textContent = t.proceed_btn;
                        var errorMsg = result && result.data && result.data.error_message ? result.data.error_message : 'Submission failed';
                        if (typeof Swal !== 'undefined') {
                            Swal.fire('Error', errorMsg, 'error');
                        } else {
                            alert(errorMsg);
                        }
                    }
                })
                .catch(function (err) {
                    btn.disabled = false;
                    btn.textContent = t.proceed_btn;
                    var errMsg = err && err.message ? err.message : 'Network error. Please check your connection and try again.';
                    if (typeof Swal !== 'undefined') {
                        Swal.fire('Error', errMsg, 'error');
                    } else {
                        alert(errMsg);
                    }
                });
        });
    }

    function vRow(label, value) {
        return '<div class="qt-vehicle-row"><span class="qt-vehicle-label">' + label + '</span><span class="qt-vehicle-value">' + value + '</span></div>';
    }

    function pRow(label, value, cls) {
        return '<div class="qt-premium-row ' + (cls || "") + '"><span>' + label + '</span><span>' + value + '</span></div>';
    }

    function renderAddonCard(cover, idx, t) {
        var isSelected = selectedAddons.has(idx);
        var premiumVal = parseFloat(cover.displayPremium || 0);
        var priceLabel = premiumVal > 0 ? fmt(premiumVal) : '';
        var badge = isSelected
            ? '<span class="qt-addon-badge included">' + t.included_label + '</span>'
            : '<span class="qt-addon-badge optional">' + t.optional_label + '</span>';

        return '<label class="qt-addon-card' + (isSelected ? " selected" : "") + '" for="addon-' + idx + '">'
            + '<div class="qt-addon-left">'
            + '<div class="qt-toggle-wrap">'
            + '<input type="checkbox" id="addon-' + idx + '" class="qt-addon-toggle" data-idx="' + idx + '" data-premium="' + (cover.displayPremium || 0) + '"' + (isSelected ? " checked" : "") + '>'
            + '<span class="qt-toggle-slider"></span>'
            + '</div>'
            + '<div class="qt-addon-info">'
            + '<div class="qt-addon-name">' + cover.coverName + '</div>'
            + (cover.coverDescription ? '<div class="qt-addon-desc">' + cover.coverDescription + '</div>' : "")
            + '</div></div>'
            + '<div class="qt-addon-right">' + badge + (priceLabel ? '<div class="qt-addon-price">' + priceLabel + '</div>' : '') + '</div>'
            + '</label>';
    }

    function recalcAddonTotal(addons, premium) {
        var baseTotal = parseFloat(premium.premiumDueAfterPTV || premium.premiumDueRounded || premium.premiumDue || 0);
        var initialTax = parseFloat(premium.serviceTaxAmount || 0);

        var unselectedAddonsSum = 0;
        var newlySelectedAddonsSum = 0;

        addons.forEach(function (cover, idx) {
            var pVal = parseFloat(cover.displayPremium || 0);
            var isCurrentlySelected = selectedAddons.has(idx);
            var wasInitiallySelected = !!cover.selectedIndicator;

            if (wasInitiallySelected && !isCurrentlySelected) {
                unselectedAddonsSum += pVal;
            } else if (!wasInitiallySelected && isCurrentlySelected) {
                newlySelectedAddonsSum += pVal;
            }
        });

        var netAddonDiff = newlySelectedAddonsSum - unselectedAddonsSum;
        var taxDiff = netAddonDiff * 0.08;

        var updatedTax = Math.max(0, initialTax + taxDiff);
        var grand = baseTotal + netAddonDiff + taxDiff;

        // Update Service Tax (8%) display
        var taxEl = document.getElementById("qt-service-tax");
        if (taxEl) taxEl.textContent = fmt(updatedTax);

        // Update Total Payable display
        var grandEl = document.getElementById("qt-grand-total");
        if (grandEl) grandEl.textContent = fmt(grand);

        // Update Add-on diff row display
        var addonRow = document.getElementById("addon-premium-row");
        var addonTotalEl = document.getElementById("addon-premium-total");
        if (addonRow && addonTotalEl) {
            if (netAddonDiff !== 0) {
                addonRow.style.display = "";
                addonTotalEl.textContent = (netAddonDiff > 0 ? "+ " : "− ") + fmt(Math.abs(netAddonDiff));
            } else {
                addonRow.style.display = "none";
            }
        }

        document.querySelectorAll(".qt-addon-card").forEach(function (card) {
            var cb = card.querySelector(".qt-addon-toggle");
            card.classList.toggle("selected", !!(cb && cb.checked));
        });
    }

    function updateSelectAllBtn(addons, t) {
        var btn = document.getElementById('qt-select-all-btn');
        if (!btn) return;
        var allSelected = addons.every(function (_, idx) { return selectedAddons.has(idx); });
        btn.textContent = allSelected ? t.deselect_all : t.select_all;
        if (allSelected) { btn.classList.add('active'); } else { btn.classList.remove('active'); }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initQuotationPage);
    } else {
        initQuotationPage();
    }
})();

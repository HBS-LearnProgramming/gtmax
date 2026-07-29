(function () {
    const initInsurancePage = () => {
        const translations = {
            en: {
                // Badge
                badge_text: 'VEHICLE INSURANCE',
                // Hero Section
                main_title: 'Renew Your Insurance in <span class="text-blue-600">Minutes</span> for Motor & Car',
                hero_description: 'Compare quotes from Malaysia\'s leading insurance providers. Fast, secure, and hassle-free.',
                // Benefits
                benefit_instant_title: 'Instant Quotes',
                benefit_instant_desc: 'Get comparison quotes in seconds',
                benefit_rates_title: 'Best Rates',
                benefit_rates_desc: 'Competitive pricing guaranteed',
                benefit_secure_title: 'Secure & Safe',
                benefit_secure_desc: 'Your data is protected',
                // Partners
                partners_title: 'Trusted by leading insurers',
                bank_logos_title: 'Available Payment Methods',
                online_bank_title: 'Online Bank',
                ewallet_title: 'E-Wallet',
                // Form
                quote_title: 'Get Your Quote',
                quote_subtitle: 'Complete the form to receive an instant quotation',
                name: 'Full Name',
                name_placeholder: 'Enter your full name',
                nric: 'NRIC Number',
                passport: 'Passport Number',
                is_malaysian: 'Malaysian Citizen',
                motor_registration: 'Motor Registration',
                car_registration: 'Car Registration',
                vehicle_type: 'Car Registered',
                vehicle_placeholder: 'ABC1234',
                whatsapp: 'WhatsApp Number',
                whatsapp_placeholder: '60123456789',
                email: 'Email Address',
                email_placeholder: 'your@email.com',
                address1: 'Address (1)',
                address2: 'Address (2)',
                postcode_placeholder: 'Enter your postcode for cover note',
                state_placeholder: 'Enter your state',
                postcode: 'Postcode for cover note',
                state: 'State',
                city: 'City',
                country: 'Country',
                address_placeholder: 'Enter your address',
                city_placeholder: 'Enter your city',
                country_placeholder: 'Enter your country',
                optional: '(Optional)',
                send_whatsapp: 'Yes, send quotation to my email',
                agreement: 'By submitting, I agree to receive quotes and offers from GT-MAX, and accept the <a href="#" class="text-blue-600 font-semibold hover:underline">Terms & Conditions</a> and <a href="#" class="text-blue-600 font-semibold hover:underline">Privacy Policy</a>.',
                submit: 'Get Quote Now',
                nric_placeholder: 'XXXXXX-XX-XXXX',
                passport_placeholder: 'Enter passport number',
                contact_hint: 'At least one of WhatsApp or Email is required',
                contact_required: 'Please provide at least one: WhatsApp Number or Email Address.',
                is_gtmax_staff: 'Are You GTMAX Staff?',
                staff_id_placeholder: 'GR00XXX',
                vehicle_confirm_title: 'Confirm Vehicle Details',
                select_variant: 'Select Vehicle Variant / Model:',
                plate_number: 'Plate Number',
                make_model: 'Make & Model',
                year_manufacture: 'Year of Manufacture',
                ncd_percentage: 'NCD Percentage',
                engine_no: 'Engine Number',
                chassis_no: 'Chassis Number',
                confirm_btn: 'Confirm & Submit',
                cancel_btn: 'Cancel',
                thank_you_title: 'Thank You!',
                thank_you_message: 'Thank you for registering your insurance using the GT Max Motor Platform. Please check your Email or WhatsApp to get your quotation.',
                validation_select_variant: 'Please select a vehicle variant/model.'
            },
            zh: {
                // Badge
                badge_text: '车辆保险',
                // Hero Section
                main_title: '在<span class="text-blue-600">几分钟内</span>更新您的保险为摩托车和汽车',
                hero_description: '比较马来西亚领先保险公司的报价。快速、安全、无忧。',
                // Benefits
                benefit_instant_title: '即时报价',
                benefit_instant_desc: '几秒钟内获取比较报价',
                benefit_rates_title: '最优惠价格',
                benefit_rates_desc: '保证具有竞争力的定价',
                benefit_secure_title: '安全可靠',
                benefit_secure_desc: '您的数据受到保护',
                // Partners
                partners_title: '受领先保险公司信赖',
                bank_logos_title: '可用付款方式',
                online_bank_title: '网上银行',
                ewallet_title: '电子钱包',
                // Form
                quote_title: '我们将发送报价给您',
                quote_subtitle: '填写表格以获取即时报价',
                name: '姓名',
                name_placeholder: '请输入您的姓名',
                nric: '车主身份证号码',
                passport: '车主护照号码',
                is_malaysian: '我是马来西亚公民',
                motor_registration: '摩托车注册',
                car_registration: '汽车注册',
                vehicle_type: '汽车注册',
                vehicle_placeholder: 'ABC1234',
                whatsapp: 'Whatsapp号码',
                whatsapp_placeholder: '60123456789',
                email: '电子邮件',
                email_placeholder: 'your@email.com',
                address1: '地址 (1)',
                address2: '地址 (2)',
                state: '州',
                postcode: '邮政编码（用于保险单）',
                optional: '（选填）',
                send_whatsapp: '是的，通过电子邮件发送我的报价。',
                agreement: '提交即表示我同意通过电子邮件接收GT-MAX的报价、提醒和优惠，并已阅读且接受<a href="#" class="text-blue-600 font-semibold hover:underline">条款与条件</a>及<a href="#" class="text-blue-600 font-semibold hover:underline">隐私政策</a>。',
                submit: '立即获取报价！',
                nric_placeholder: 'XXXXXX-XX-XXXX',
                passport_placeholder: '请输入护照号码',
                postcode_placeholder: '请输入您的邮政编码（用于保险单）',
                state_placeholder: '请输入您的州',
                address_placeholder: '请输入您的地址',
                city_placeholder: '请输入您的城市',
                country_placeholder: '请输入您的国家',
                city: '城市',
                country: '国家',
                contact_hint: 'WhatsApp 号码或电子邮件，至少需填写一项',
                contact_required: '请至少填写以下其中一项：WhatsApp 号码或电子邮件地址。',
                is_gtmax_staff: '您是 GTMAX 员工吗？',
                staff_id_placeholder: 'GR00XXX',
                vehicle_confirm_title: '确认车辆信息',
                select_variant: '请选择车辆版本/型号：',
                plate_number: '车牌号码',
                make_model: '品牌与型号',
                year_manufacture: '制造年份',
                ncd_percentage: 'NCD 折扣率',
                engine_no: '发动机号码',
                chassis_no: '车架号码',
                confirm_btn: '确认并提交',
                cancel_btn: '取消',
                thank_you_title: '谢谢您！',
                thank_you_message: '感谢您使用 GT Max Motor Platform 注册您的保险。请检查您的电子邮件或 WhatsApp 以获取报价。',
                validation_select_variant: '请选择一个车辆版本/型号。'
            },
            bm: {
                // Badge
                badge_text: 'INSURANS KENDERAAN',
                // Hero Section
                main_title: 'Perbaharui Insurans Anda dalam <span class="text-blue-600">Minit</span> untuk Motor & Kereta',
                hero_description: 'Bandingkan sebut harga daripada penyedia insurans terkemuka Malaysia. Pantas, selamat, dan tanpa kerumitan.',
                // Benefits
                benefit_instant_title: 'Sebut Harga Segera',
                benefit_instant_desc: 'Dapatkan perbandingan sebut harga dalam beberapa saat',
                benefit_rates_title: 'Harga Terbaik',
                benefit_rates_desc: 'Harga kompetitif dijamin',
                benefit_secure_title: 'Selamat & Terjamin',
                benefit_secure_desc: 'Data anda dilindungi',
                // Partners
                partners_title: 'Dipercayai oleh syarikat insurans terkemuka',
                bank_logos_title: 'Kaedah Pembayaran Tersedia',
                online_bank_title: 'Perbankan Dalam Talian',
                ewallet_title: 'E-Dompet',
                // Form
                quote_title: 'Kami Akan Hantar Sebut Harga Kepada Anda',
                quote_subtitle: 'Lengkapkan borang untuk menerima sebut harga segera',
                name: 'Nama',
                name_placeholder: 'Masukkan nama penuh anda',
                nric: 'No. IC Pemilik Kenderaan',
                passport: 'No. Pasport Pemilik Kenderaan',
                is_malaysian: 'Saya warganegara Malaysia',
                motor_registration: 'Pendaftaran Motor',
                car_registration: 'Pendaftaran Kereta',
                vehicle_type: 'Kereta Didaftarkan',
                vehicle_placeholder: 'ABC1234',
                whatsapp: 'Nombor Whatsapp',
                whatsapp_placeholder: '60123456789',
                email: 'Emel',
                email_placeholder: 'your@email.com',
                address1: 'Alamat (1)',
                address2: 'Alamat (2)',
                postcode_placeholder: 'Masukkan poskod anda (untuk nota perlindungan)',
                state_placeholder: 'Masukkan negeri anda',
                postcode: 'Poskod untuk nota perlindungan',
                state: 'Negeri',
                address_placeholder: 'Masukkan alamat anda',
                optional: '(Pilihan)',
                send_whatsapp: 'Ya, hantar sebut harga saya melalui emel.',
                agreement: 'Dengan menghantar, saya bersetuju menerima sebut harga, peringatan, dan tawaran daripada GT-MAX melalui emel serta telah membaca dan menerima <a href="#" class="text-blue-600 font-semibold hover:underline">Terma dan Syarat</a> dan <a href="#" class="text-blue-600 font-semibold hover:underline">Polisi Privasi</a>.',
                submit: 'Dapatkan Sebut Harga Sekarang!',
                nric_placeholder: 'XXXXXX-XX-XXXX',
                passport_placeholder: 'Masukkan nombor pasport',
                city_placeholder: 'Masukkan bandar anda',
                country_placeholder: 'Masukkan negara anda',
                city: 'Bandar',
                country: 'Negara',
                contact_hint: 'Sekurang-kurangnya satu antara WhatsApp atau Emel diperlukan',
                contact_required: 'Sila isi sekurang-kurangnya satu: Nombor WhatsApp atau Emel.',
                is_gtmax_staff: 'Adakah Anda Kakitangan GTMAX?',
                staff_id_placeholder: 'GR00XXX',
                vehicle_confirm_title: 'Sahkan Maklumat Kenderaan',
                select_variant: 'Sila Pilih Varian / Model Kenderaan:',
                plate_number: 'Nombor Pendaftaran',
                make_model: 'Jenama & Model',
                year_manufacture: 'Tahun Buatan',
                ncd_percentage: 'Peratusan NCD',
                engine_no: 'Nombor Enjin',
                chassis_no: 'Nombor Casis',
                confirm_btn: 'Sahkan & Hantar',
                cancel_btn: 'Batal',
                thank_you_title: 'Terima Kasih!',
                thank_you_message: 'Terima kasih kerana mendaftar insurans anda menggunakan Platform Motor GT Max. Sila semak Emel atau WhatsApp anda untuk mendapatkan sebut harga.',
                validation_select_variant: 'Sila pilih varian/model kenderaan.'
            }
        };

        const nricInput = document.getElementById('nric');
        const nricLabel = document.getElementById('nric_label_text');
        const isMalaysianCheckbox = document.getElementById('is_malaysian');
        const nricIcon = document.getElementById('nric_icon');

        const vehicleTypeCheckbox = document.getElementById('vehicle_type');
        const vehicleLabel = document.getElementById('vehicle_label');
        const vehicleIcon = document.getElementById('vehicle_icon');

        const getSelectedLang = () => {
            return localStorage.getItem('site_lang') || 'bm';
        };

        const formatNric = (value) => {
            const digits = value.replace(/\D/g, '').slice(0, 12);
            let formatted = '';

            if (digits.length > 0) {
                formatted += digits.slice(0, 6);
            }
            if (digits.length > 6) {
                formatted += '-' + digits.slice(6, 8);
            }
            if (digits.length > 8) {
                formatted += '-' + digits.slice(8, 12);
            }

            return formatted;
        };

        const formatPassport = (value) => value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 20);

        const updateIdentityFieldUI = (lang) => {
            if (!nricInput) {
                return;
            }

            const selectedLang = translations[lang] ? lang : 'bm';
            const isMalaysian = !isMalaysianCheckbox || isMalaysianCheckbox.checked;

            if (nricLabel) {
                nricLabel.textContent = isMalaysian
                    ? translations[selectedLang].nric
                    : translations[selectedLang].passport;
            }

            nricInput.placeholder = isMalaysian
                ? translations[selectedLang].nric_placeholder
                : translations[selectedLang].passport_placeholder;
            nricInput.maxLength = isMalaysian ? 14 : 20;
            nricInput.setAttribute('inputmode', isMalaysian ? 'numeric' : 'text');
            nricInput.value = isMalaysian ? formatNric(nricInput.value) : formatPassport(nricInput.value);

            // Update NRIC/Passport icon if it exists and THEME_URI is defined
            // Both NRIC and Passport use nric.png as per requirements
            if (nricIcon && typeof THEME_URI !== 'undefined') {
                nricIcon.src = THEME_URI + '/images/icon/nric.png';
            }
        };

        const updateVehicleFieldUI = (lang) => {
            if (!vehicleLabel) {
                return;
            }

            const selectedLang = translations[lang] ? lang : 'bm';
            const isCarRegistered = vehicleTypeCheckbox && vehicleTypeCheckbox.checked;

            vehicleLabel.textContent = isCarRegistered
                ? translations[selectedLang].car_registration
                : translations[selectedLang].motor_registration;

            // Update vehicle icon if it exists and THEME_URI is defined
            if (vehicleIcon && typeof THEME_URI !== 'undefined') {
                vehicleIcon.src = isCarRegistered
                    ? THEME_URI + '/images/icon/car.png'
                    : THEME_URI + '/images/icon/motor.png';
            }
        };

        const applyTranslations = (lang) => {
            const selectedLang = translations[lang] ? lang : 'bm';

            document.querySelectorAll('[data-i18n]').forEach((element) => {
                const key = element.getAttribute('data-i18n');
                const translatedText = translations[selectedLang][key];

                if (!translatedText) {
                    return;
                }

                // Elements that should use innerHTML (contain HTML tags like <span> or <a>)
                const htmlKeys = ['main_title', 'agreement'];

                if (htmlKeys.includes(key)) {
                    element.innerHTML = translatedText;
                    return;
                }

                element.textContent = translatedText;
            });

            // Handle placeholder translations
            document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
                const key = element.getAttribute('data-i18n-placeholder');
                const translatedText = translations[selectedLang][key];
                if (translatedText) {
                    element.placeholder = translatedText;
                }
            });

            document.querySelectorAll('.lang-btn').forEach((button) => {
                const isActive = button.getAttribute('data-lang') === selectedLang;
                button.classList.toggle('active', isActive);
            });

            updateIdentityFieldUI(selectedLang);
            updateVehicleFieldUI(selectedLang);
        };

        document.querySelectorAll('.lang-btn').forEach((button) => {
            button.addEventListener('click', () => {
                const selectedLang = button.getAttribute('data-lang') || 'bm';
                localStorage.setItem('site_lang', selectedLang);
                applyTranslations(selectedLang);
            });
        });

        if (nricInput) {
            nricInput.addEventListener('input', () => {
                const isMalaysian = !isMalaysianCheckbox || isMalaysianCheckbox.checked;
                nricInput.value = isMalaysian ? formatNric(nricInput.value) : formatPassport(nricInput.value);
            });
        }

        if (isMalaysianCheckbox) {
            isMalaysianCheckbox.addEventListener('change', () => {
                updateIdentityFieldUI(getSelectedLang());
            });
        }

        if (vehicleTypeCheckbox) {
            vehicleTypeCheckbox.addEventListener('change', () => {
                updateVehicleFieldUI(getSelectedLang());
            });
        }

        const isGtmaxStaffCheckbox = document.getElementById('is_gtmax_staff');
        const staffIdWrapper = document.getElementById('staff_id_wrapper');
        if (isGtmaxStaffCheckbox && staffIdWrapper) {
            isGtmaxStaffCheckbox.addEventListener('change', () => {
                staffIdWrapper.classList.toggle('hidden', !isGtmaxStaffCheckbox.checked);
                if (!isGtmaxStaffCheckbox.checked) {
                    const staffIdInput = document.getElementById('staff_id');
                    if (staffIdInput) staffIdInput.value = '';
                }
            });
        }

        // Always initialize with BM on page load
        localStorage.setItem('site_lang', 'bm');
        applyTranslations('bm');

        const form = document.getElementById('insurance-form');
        if (!form || typeof GTMAX_CONFIG === 'undefined' || typeof Swal === 'undefined') {
            return;
        }

        const updateEmailOptInState = () => {
            const emailInput = form.email;
            const emailOptInCheckbox = form.send_whatsapp;

            if (!emailInput || !emailOptInCheckbox) {
                return;
            }

            const hasEmail = emailInput.value.trim().length > 0;
            emailOptInCheckbox.disabled = !hasEmail;

            if (!hasEmail) {
                emailOptInCheckbox.checked = false;
            }
        };

        if (form.email) {
            form.email.addEventListener('input', updateEmailOptInState);
            form.email.addEventListener('change', updateEmailOptInState);
        }

        updateEmailOptInState();

        const clearErrors = () => {
            document.querySelectorAll('[data-error-for]').forEach(el => {
                el.textContent = '';
                el.classList.add('hidden');
            });
            document.querySelectorAll('.form-input').forEach(input => {
                input.classList.remove('input-error');
            });
        };

        const showFieldErrors = (errors) => {
            const contactFields = ['whatsapp_number', 'email'];
            const hasContactError = contactFields.some(f => errors[f]);
            if (hasContactError) {
                const lang = getSelectedLang();
                const contactError = document.querySelector('[data-error-for="contact"]');
                if (contactError) {
                    contactError.textContent = translations[lang].contact_required;
                    contactError.classList.remove('hidden');
                }
                contactFields.forEach(f => {
                    const input = document.getElementById(f === 'whatsapp_number' ? 'whatsapp_number' : 'email');
                    if (input) input.classList.add('input-error');
                });
            }
            Object.entries(errors).forEach(([field, messages]) => {
                if (contactFields.includes(field)) return;
                const input = document.getElementById(field);
                const errorEl = document.querySelector(`[data-error-for="${field}"]`);
                if (input) input.classList.add('input-error');
                if (errorEl) {
                    errorEl.textContent = messages[0];
                    errorEl.classList.remove('hidden');
                }
            });
        };

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            clearErrors();

            // At least one of WhatsApp or Email is required
            const whatsappVal = form.whatsapp_number.value.trim();
            const emailVal = form.email.value.trim();
            if (!whatsappVal && !emailVal) {
                const lang = getSelectedLang();
                const contactError = document.querySelector('[data-error-for="contact"]');
                if (contactError) {
                    contactError.textContent = translations[lang].contact_required;
                    contactError.classList.remove('hidden');
                }
                document.getElementById('whatsapp_number').classList.add('input-error');
                document.getElementById('email').classList.add('input-error');
                return;
            }

            Swal.fire({
                title: 'Submitting...',
                text: 'Please wait a minute...',

                allowOutsideClick: false,
                allowEscapeKey: false,
                didOpen: () => Swal.showLoading()
            });

            const payload = {
                name: form.name.value.trim(),
                nric: form.nric.value.trim(),
                is_malaysian: form.is_malaysian && form.is_malaysian.checked ? 1 : 0,
                vehicle_number: form.vehicle_number.value.trim(),
                vehicle_type: form.vehicle_type && form.vehicle_type.checked ? 'Car' : 'Motorcycle',
                whatsapp_number: form.whatsapp_number.value.trim(),
                email: form.email.value.trim(),
                postcode: form.postcode ? form.postcode.value.trim() : '',
                send_whatsapp: form.email.value.trim() && form.send_whatsapp.checked ? 1 : 0,
                staff_id: (form.is_gtmax_staff && form.is_gtmax_staff.checked && form.staff_id) ? form.staff_id.value.trim() : '',
                language: localStorage.getItem('site_lang') || 'bm'
            };

            try {
                const res = await fetch(GTMAX_CONFIG.apiUrl, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': GTMAX_CONFIG.token,
                    },
                    body: JSON.stringify(payload)
                });

                const data = await res.json();
                console.log('return data', data);
                Swal.close();

                if (!res.ok) {
                    if (data?.errors) {
                        showFieldErrors(data.errors);
                        Swal.fire('Error', 'Please fix the highlighted fields', 'error');
                    } else {
                        Swal.fire('Error', data?.error_message || 'Submission failed', 'error');
                    }
                    return;
                }

                if (data && data.success) {
                    const lang = getSelectedLang();
                    const t = translations[lang];
                    const message = data.message;
                    console.log('message:', message);

                    // Prepare marital status and coverage options
                    const maritalOptions = message.maritalStatusSelection || {
                        '0': 'Single',
                        '1': 'Married',
                        '2': 'Divorced / Widowed'
                    };
                    const coverageOptions = message.coverageTypeSelection || {
                        '01': 'Comprehensive',
                        '20': 'Third Party'
                    };

                    const maritalSelectHtml = `
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Marital Status</label>
                            <select id="swal-marital-status" class="w-full p-2.5 border-2 border-slate-200 rounded-xl bg-white text-sm font-medium focus:border-blue-500 focus:ring-0 transition-colors">
                                ${Object.entries(maritalOptions).map(([key, val]) => `<option value="${key}">${val}</option>`).join('')}
                            </select>
                        </div>
                    `;

                    const coverageSelectHtml = `
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Coverage Type</label>
                            <select id="swal-coverage-type" class="w-full p-2.5 border-2 border-slate-200 rounded-xl bg-white text-sm font-medium focus:border-blue-500 focus:ring-0 transition-colors">
                                ${Object.entries(coverageOptions).map(([key, val]) => `<option value="${key}" ${message.coverType === val ? 'selected' : ''}>${val}</option>`).join('')}
                            </select>
                        </div>
                    `;

                    // Prepare variants list html
                    let variantsHtml = '';
                    if (message.nvicList && message.nvicList.length > 0) {
                        message.nvicList.forEach((item, index) => {
                            variantsHtml += `
                                <label class="variant-card flex items-center justify-between p-3.5 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50/20 transition-all duration-200 mb-2 relative">
                                    <input type="radio" name="selected_nvic" value="${item.nvic || item.azVariant}" data-index="${index}" class="absolute opacity-0 variant-radio">
                                    <div class="flex items-center gap-3">
                                        <div class="custom-radio flex items-center justify-center w-5 h-5 rounded-full border-2 border-gray-300 bg-white transition-all duration-200">
                                            <div class="w-2.5 h-2.5 rounded-full bg-blue-600 hidden"></div>
                                        </div>
                                        <div>
                                            <div class="font-bold text-gray-800 text-sm md:text-base">${item.vehicleVariant}</div>
                                            <div class="text-xs text-gray-500 mt-0.5">Engine CC: ${item.vehicleEngineCC || ''} | Type: ${item.engineType || ''}</div>
                                        </div>
                                    </div>
                                    <div class="text-right min-w-[90px]">
                                        <div class="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Market Value</div>
                                        <div class="font-extrabold text-blue-600 text-sm md:text-base">RM ${item.vehicleMarketValue}</div>
                                    </div>
                                </label>
                            `;
                        });
                    }

                    const htmlContent = `
                        <div class="vehicle-confirm-container text-left text-gray-800 p-6 md:p-8 font-sans">
                            <div class="mb-5 pb-3 border-b border-gray-100 flex items-center justify-between">
                                <h3 class="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <span class="inline-block w-1.5 h-6 bg-blue-600 rounded-full"></span>
                                    ${t.vehicle_confirm_title}
                                </h3>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-x-4 gap-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm">
                                <div>
                                    <span class="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">${t.plate_number}</span>
                                    <span class="font-bold text-gray-900 text-base uppercase">${message.vehicleLicenseId || payload.vehicle_number || '-'}</span>
                                </div>
                                <div>
                                    <span class="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">${t.make_model}</span>
                                    <span class="font-semibold text-gray-900">${message.vehicleMake || ''} ${message.vehicleModelDesc || ''}</span>
                                </div>
                                <div>
                                    <span class="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">${t.year_manufacture}</span>
                                    <span class="font-semibold text-gray-900">${message.yearOfManufacture || '-'}</span>
                                </div>
                                <div>
                                    <span class="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">${t.ncd_percentage}</span>
                                    <span class="font-bold text-green-600 text-base">${message.ncdPercentage || '0'}%</span>
                                </div>
                                
                                <div class="col-span-2 my-1 border-t border-slate-200/60"></div>
                                
                                <div>
                                    <span class="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">${t.engine_no}</span>
                                    <span class="font-mono text-gray-700 text-xs break-all">${message.vehicleEngine || '-'}</span>
                                </div>
                                <div>
                                    <span class="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">${t.chassis_no}</span>
                                    <span class="font-mono text-gray-700 text-xs break-all">${message.vehicleChassis || '-'}</span>
                                </div>
                            </div>

                            ${variantsHtml ? `
                                <div class="mb-6">
                                    <label class="block text-sm font-bold text-gray-900 mb-2">${t.select_variant}</label>
                                    <div class="space-y-2 max-h-[220px] overflow-y-auto pr-1" id="variant-list-container">
                                        ${variantsHtml}
                                    </div>
                                    <div id="variant-error-msg" class="text-red-500 text-xs mt-1 hidden font-semibold"></div>
                                </div>
                            ` : ''}

                            <div class="grid grid-cols-2 gap-4 mb-6">
                                ${maritalSelectHtml}
                                ${coverageSelectHtml}
                            </div>

                            <div class="flex flex-col sm:flex-row gap-3 pt-3 border-t border-gray-100">
                                <button id="btn-swal-confirm" class="flex-1 px-5 py-3.5 bg-blue-600 text-white font-bold rounded-xl shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:shadow-lg transition-all duration-200 text-center text-sm cursor-pointer">
                                    ${t.confirm_btn}
                                </button>
                                <button id="btn-swal-cancel" class="px-5 py-3.5 bg-gray-100 text-gray-500 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 text-center text-sm cursor-pointer">
                                    ${t.cancel_btn}
                                </button>
                            </div>
                        </div>
                    `;

                    Swal.fire({
                        html: htmlContent,
                        showConfirmButton: false,
                        allowOutsideClick: false,
                        width: '600px',
                        customClass: {
                            popup: 'rounded-2xl shadow-xl border border-gray-100 p-0 overflow-hidden',
                            htmlContainer: 'vehicle-confirm-popup-html'
                        },
                        didOpen: () => {
                            const confirmBtn = document.getElementById('btn-swal-confirm');
                            const cancelBtn = document.getElementById('btn-swal-cancel');
                            const cards = document.querySelectorAll('.variant-card');
                            let selectedVariant = null;

                            cards.forEach(card => {
                                card.addEventListener('click', () => {
                                    cards.forEach(c => c.classList.remove('selected-active'));
                                    card.classList.add('selected-active');
                                    const radio = card.querySelector('input[type="radio"]');
                                    if (radio) {
                                        radio.checked = true;
                                        const index = parseInt(radio.getAttribute('data-index'), 10);
                                        selectedVariant = message.nvicList[index];
                                    }
                                    const errorMsg = document.getElementById('variant-error-msg');
                                    if (errorMsg) errorMsg.classList.add('hidden');
                                });
                            });

                            confirmBtn.addEventListener('click', async () => {
                                if (message.nvicList && message.nvicList.length > 0 && !selectedVariant) {
                                    const errorMsg = document.getElementById('variant-error-msg');
                                    if (errorMsg) {
                                        errorMsg.textContent = t.validation_select_variant;
                                        errorMsg.classList.remove('hidden');
                                    }
                                    return;
                                }

                                // Capture dropdown values BEFORE Swal replaces the DOM
                                const selectedMaritalStatus = document.getElementById('swal-marital-status')?.value ?? '';
                                const selectedCoverageType = document.getElementById('swal-coverage-type')?.value ?? '';
                                console.log("selectedMaritalStatus", selectedMaritalStatus, selectedCoverageType);
                                Swal.fire({
                                    title: 'Submitting confirmation...',
                                    allowOutsideClick: false,
                                    didOpen: () => Swal.showLoading()
                                });

                                const confirmPayload = {
                                    ...payload,
                                    ...message,
                                    maritalStatus: selectedMaritalStatus,
                                    coverageType: selectedCoverageType,
                                    confirm: 1
                                };

                                if (selectedVariant) {
                                    confirmPayload.nvic = selectedVariant.nvic || selectedVariant.azVariant;
                                    confirmPayload.azVariant = selectedVariant.azVariant;
                                    confirmPayload.nvicSelection = selectedVariant.nvic || selectedVariant.azVariant;
                                    confirmPayload.nvicSelectionId = selectedVariant.nvic || selectedVariant.azVariant;
                                    confirmPayload.vehicleVariant = selectedVariant.vehicleVariant;
                                    confirmPayload.vehicleMarketValue = selectedVariant.vehicleMarketValue;
                                    confirmPayload.vehicleEngineCC = selectedVariant.vehicleEngineCC;
                                    confirmPayload.engineType = selectedVariant.engineType;

                                }

                                try {
                                    const confirmRes = await fetch(`${GTMAX_CONFIG.apiUrl}/quote`, {
                                        method: 'POST',
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json',
                                            'Authorization': GTMAX_CONFIG.token,
                                        },
                                        body: JSON.stringify(confirmPayload)
                                    });

                                    const confirmData = await confirmRes.json();
                                    Swal.close();

                                    if (!confirmRes.ok) {
                                        Swal.fire('Error', confirmData?.error_message || 'Confirmation failed', 'error');
                                        return;
                                    }

                                    // Store quotation data for the quotation review page
                                    try {
                                        const quotationData = {
                                            quote: confirmData.message || confirmData,
                                            payload: confirmPayload,
                                        };
                                        sessionStorage.setItem('gtmax_quotation_data', JSON.stringify(quotationData));

                                        // Also persist the current language so quotation page picks it up
                                        const currentLang = getSelectedLang();
                                        localStorage.setItem('gtmax_lang', currentLang);
                                    } catch (storageErr) {
                                        console.warn('sessionStorage not available:', storageErr);
                                    }

                                    // Redirect to the quotation review page
                                    const quotationUrl = (typeof GTMAX_CONFIG !== 'undefined' && GTMAX_CONFIG.quotationUrl)
                                        ? GTMAX_CONFIG.quotationUrl
                                        : window.location.origin + '/insurance-quotation/';

                                    const uuid = confirmData.message;
                                    window.location.href = quotationUrl + '?uuid=' + encodeURIComponent(uuid);


                                } catch (confirmErr) {
                                    Swal.close();
                                    Swal.fire('Network Error', 'Please try again later', 'error');
                                    console.error(confirmErr);
                                }
                            });

                            cancelBtn.addEventListener('click', () => {
                                Swal.close();
                            });
                        }
                    });
                } else {
                    Swal.fire('Success', 'Request submitted successfully!', 'success');
                    form.reset();
                    updateEmailOptInState();
                    if (staffIdWrapper) staffIdWrapper.classList.add('hidden');
                    updateIdentityFieldUI(getSelectedLang());
                    updateVehicleFieldUI(getSelectedLang());
                }

            } catch (err) {
                Swal.close();
                Swal.fire('Network Error', 'Please try again later', 'error');
                console.error(err);
            }
        });

    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initInsurancePage);
        return;
    }

    initInsurancePage();
})();

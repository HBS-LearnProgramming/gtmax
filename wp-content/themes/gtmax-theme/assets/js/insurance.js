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
                address: 'Address',
                address_placeholder: 'Enter your address',
                optional: '(Optional)',
                send_whatsapp: 'Yes, send quotation to my email',
                agreement: 'By submitting, I agree to receive quotes and offers from GT-MAX, and accept the <a href="#" class="text-blue-600 font-semibold hover:underline">Terms & Conditions</a> and <a href="#" class="text-blue-600 font-semibold hover:underline">Privacy Policy</a>.',
                submit: 'Get Quote Now',
                nric_placeholder: 'XXXXXX-XX-XXXX',
                passport_placeholder: 'Enter passport number',
                contact_hint: 'At least one of WhatsApp or Email is required',
                contact_required: 'Please provide at least one: WhatsApp Number or Email Address.',
                is_gtmax_staff: 'Are You GTMAX Staff?',
                staff_id_placeholder: 'GR00XXX'
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
                address: '地址',
                address_placeholder: '请输入您的地址',
                optional: '（选填）',
                send_whatsapp: '是的，通过电子邮件发送我的报价。',
                agreement: '提交即表示我同意通过电子邮件接收GT-MAX的报价、提醒和优惠，并已阅读且接受<a href="#" class="text-blue-600 font-semibold hover:underline">条款与条件</a>及<a href="#" class="text-blue-600 font-semibold hover:underline">隐私政策</a>。',
                submit: '立即获取报价！',
                nric_placeholder: 'XXXXXX-XX-XXXX',
                passport_placeholder: '请输入护照号码',
                contact_hint: 'WhatsApp 号码或电子邮件，至少需填写一项',
                contact_required: '请至少填写以下其中一项：WhatsApp 号码或电子邮件地址。',
                is_gtmax_staff: '您是 GTMAX 员工吗？',
                staff_id_placeholder: 'GR00XXX'
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
                address: 'Alamat',
                address_placeholder: 'Masukkan alamat anda',
                optional: '(Pilihan)',
                send_whatsapp: 'Ya, hantar sebut harga saya melalui emel.',
                agreement: 'Dengan menghantar, saya bersetuju menerima sebut harga, peringatan, dan tawaran daripada GT-MAX melalui emel serta telah membaca dan menerima <a href="#" class="text-blue-600 font-semibold hover:underline">Terma dan Syarat</a> dan <a href="#" class="text-blue-600 font-semibold hover:underline">Polisi Privasi</a>.',
                submit: 'Dapatkan Sebut Harga Sekarang!',
                nric_placeholder: 'XXXXXX-XX-XXXX',
                passport_placeholder: 'Masukkan nombor pasport',
                contact_hint: 'Sekurang-kurangnya satu antara WhatsApp atau Emel diperlukan',
                contact_required: 'Sila isi sekurang-kurangnya satu: Nombor WhatsApp atau Emel.',
                is_gtmax_staff: 'Adakah Anda Kakitangan GTMAX?',
                staff_id_placeholder: 'GR00XXX'
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
                address: form.address ? form.address.value.trim() : '',
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
                Swal.close();

                if (!res.ok) {
                    if (data?.errors) {
                        showFieldErrors(data.errors);
                        Swal.fire('Error', 'Please fix the highlighted fields', 'error');
                    } else {
                        Swal.fire('Error', data?.message || 'Submission failed', 'error');
                    }
                    return;
                }

                Swal.fire('Success', 'Request submitted successfully!', 'success');
                form.reset();
                updateEmailOptInState();
                if (staffIdWrapper) staffIdWrapper.classList.add('hidden');
                updateIdentityFieldUI(getSelectedLang());
                updateVehicleFieldUI(getSelectedLang());

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

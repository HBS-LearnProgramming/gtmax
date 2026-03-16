(function () {
    const initInsurancePage = () => {
        const translations = {
            en: {
                main_title: 'Renew Your Motor Insurance in <span class="text-[#478ac9]">Minutes</span>',
                quote_title: 'We Will Send you a Quote',
                name: 'Name',
                nric: "Vehicle Owner\'s NRIC",
                passport: 'Vehicle Owner\'s Passport Number',
                is_malaysian: 'I am a Malaysian citizen',
                vehicle_no: 'Vehicle Registration Number',
                whatsapp: 'Whatsapp Number',
                email: 'Email',
                send_whatsapp: 'Yes, send my quote via email.',
                agreement: 'By submitting, I agree to receive quotes, reminders, and offers from GT-MAX via email and have read and accepted the <span class="text-[#478ac9]">Terms and Conditions</span> and <span class="text-[#478ac9]">Privacy Policy</span>.',
                submit: 'Get Quote Now!',
                nric_placeholder: 'XXXXXX-XX-XXXX',
                passport_placeholder: 'Enter passport number'
            },
            zh: {
                main_title: '在<span class="text-[#478ac9]">几分钟内</span>更新您的汽车保险',
                quote_title: '我们将发送报价给您',
                name: '姓名',
                nric: '车主身份证号码',
                passport: '车主护照号码',
                is_malaysian: '我是马来西亚公民',
                vehicle_no: '车辆注册号码',
                whatsapp: 'Whatsapp号码',
                email: '电子邮件',
                send_whatsapp: '是的，通过电子邮件发送我的报价。',
                agreement: '提交即表示我同意通过电子邮件接收GT-MAX的报价、提醒和优惠，并已阅读且接受<span class="text-[#478ac9]">条款与条件</span>及<span class="text-[#478ac9]">隐私政策</span>。',
                submit: '立即获取报价！',
                nric_placeholder: 'XXXXXX-XX-XXXX',
                passport_placeholder: '请输入护照号码'
            },
            bm: {
                main_title: 'Perbaharui Insurans Motor Anda dalam <span class="text-[#478ac9]">Minit</span>',
                quote_title: 'Kami Akan Hantar Sebut Harga Kepada Anda',
                name: 'Nama',
                nric: 'No. IC Pemilik Kenderaan',
                passport: 'No. Pasport Pemilik Kenderaan',
                is_malaysian: 'Saya warganegara Malaysia',
                vehicle_no: 'Nombor Pendaftaran Kenderaan',
                whatsapp: 'Nombor Whatsapp',
                email: 'Emel',
                send_whatsapp: 'Ya, hantar sebut harga saya melalui emel.',
                agreement: 'Dengan menghantar, saya bersetuju menerima sebut harga, peringatan, dan tawaran daripada GT-MAX melalui emel serta telah membaca dan menerima <span class="text-[#478ac9]">Terma dan Syarat</span> dan <span class="text-[#478ac9]">Polisi Privasi</span>.',
                submit: 'Dapatkan Sebut Harga Sekarang!',
                nric_placeholder: 'XXXXXX-XX-XXXX',
                passport_placeholder: 'Masukkan nombor pasport'
            }
        };

        const nricInput = document.getElementById('nric');
        const nricLabel = document.querySelector('label[for="nric"]');
        const isMalaysianCheckbox = document.getElementById('is_malaysian');

        const getSelectedLang = () => {
            const lang = localStorage.getItem('site_lang') || 'en';
            return translations[lang] ? lang : 'en';
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

            const selectedLang = translations[lang] ? lang : 'en';
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
        };

        const applyTranslations = (lang) => {
            const selectedLang = translations[lang] ? lang : 'en';

            document.querySelectorAll('[data-i18n]').forEach((element) => {
                const key = element.getAttribute('data-i18n');
                const translatedText = translations[selectedLang][key];

                if (!translatedText) {
                    return;
                }

                if (key === 'main_title' || key === 'agreement') {
                    element.innerHTML = translatedText;
                    return;
                }

                element.textContent = translatedText;
            });

            document.querySelectorAll('.lang-btn').forEach((button) => {
                const isActive = button.getAttribute('data-lang') === selectedLang;
                button.classList.toggle('bg-[#478ac9]', isActive);
                button.classList.toggle('text-white', isActive);
            });

            updateIdentityFieldUI(selectedLang);
        };

        document.querySelectorAll('.lang-btn').forEach((button) => {
            button.addEventListener('click', () => {
                const selectedLang = button.getAttribute('data-lang') || 'en';
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

        applyTranslations(getSelectedLang());

        const form = document.getElementById('insurance-form');
        if (!form || typeof GTMAX_CONFIG === 'undefined' || typeof Swal === 'undefined') {
            return;
        }

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
            Object.entries(errors).forEach(([field, messages]) => {
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
                whatsapp_number: form.whatsapp_number.value.trim(),
                email: form.email.value.trim(),
                send_whatsapp: form.send_whatsapp.checked ? 1 : 0,
                language: localStorage.getItem('site_lang') || 'en'
            };
            console.log('payload', payload);

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
                updateIdentityFieldUI(getSelectedLang());

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

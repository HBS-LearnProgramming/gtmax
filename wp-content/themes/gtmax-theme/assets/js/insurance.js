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
                identity_type: 'Identity Type',
                id_type_nric: 'NRIC (MyKad)',
                id_type_old_ic: 'Old IC / Others',
                id_type_pass: 'Passport',
                id_type_pol: 'Police / Army ID',
                nric: 'NRIC Number',
                old_ic: 'Old IC / Other ID',
                passport: 'Passport Number',
                police_army_id: 'Police / Army ID Number',
                gender: 'Gender',
                gender_male: 'Male / Man',
                gender_female: 'Female / Woman',
                is_malaysian: 'Malaysian Citizen',
                motor_registration: 'Motor Registration',
                car_registration: 'Car Registration',
                vehicle_type: 'Car Registered',
                vehicle_placeholder: 'ABC1234',
                whatsapp: 'Mobile Number',
                whatsapp_placeholder: '60123456789',
                email: 'Email Address',
                email_placeholder: 'your@email.com',
                address1: 'Address (1)',
                address2: 'Address (2)',
                postcode_placeholder: 'Enter postcode',
                state_placeholder: 'Enter state',
                postcode: 'Postcode',
                state: 'State',
                city: 'City',
                country: 'Country',
                address_placeholder: 'Enter address',
                city_placeholder: 'Enter city',
                country_placeholder: 'Enter country',
                optional: '(Optional)',
                send_whatsapp: 'Yes, send quotation to my email',
                agreement: 'I confirm that I have read and understood the <a href="https://az.my/partner-CMCC-motorcycleplus-PDS_ENG" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline hover:text-blue-800">Product Disclosure Sheet</a>, <a href="https://az.my/partner-AMP-PW_ENG" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline hover:text-blue-800">Policy Wording</a> & <a href="https://az.my/PrivacyNotice-AGIC" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline hover:text-blue-800">Privacy Notice</a>, and agree to the processing of my personal data for the purposes stated in the Privacy Notice.',
                relationship_title: 'Registered Agent Relationship Disclosure',
                relationship_disclosure: 'GT-MAX Motors (M) Sdn. Bhd. is a registered agent of Allianz General Insurance Company (Malaysia) Berhad.',
                pidm_title: 'PIDM Protection Statement',
                pidm_disclosure: 'The benefit(s) payable under eligible certificate/policy/product is(are) protected by PIDM up to limits. Please refer to <a href="https://www.pidm.gov.my/pidm2022/files/92/92bdfcde-3534-4a29-9031-5186387623ee.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline hover:text-blue-800">PIDM’s TIPS Brochure</a> or contact Allianz General Insurance Company (Malaysia) Berhad or PIDM (visit <a href="https://www.pidm.gov.my" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline hover:text-blue-800">www.pidm.gov.my</a>).',
                submit: 'Get Quote Now',
                nric_placeholder: 'XXXXXX-XX-XXXX',
                old_ic_placeholder: 'Enter Old IC / Other ID',
                passport_placeholder: 'Enter passport number',
                police_army_placeholder: 'Enter Police / Army ID',
                contact_hint: 'At least one of Mobile Number or Email is required',
                contact_required: 'Please provide at least one: Mobile Number or Email Address.',
                whatsapp_invalid: 'Please enter a valid phone number (e.g. 60123456789 or 0123456789).',
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
                validation_select_variant: 'Please select a vehicle variant/model.',
                recommended: 'Recommended',
                birthday: 'Date of Birth',
                birthday_placeholder: 'YYYY-MM-DD',
                postcode_not_found: 'Invalid postcode or postcode not found.',
                marital_status: 'Marital Status',
                marital_single: 'Single',
                marital_married: 'Married',
                marital_divorced: 'Divorced / Widowed',
                coverage_type: 'Coverage Type',
                coverage_comprehensive: 'Comprehensive',
                coverage_third_party: 'Third Party',
                nationality: 'Nationality'
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
                identity_type: '身份证明类型',
                id_type_nric: '身份证 (MyKad)',
                id_type_old_ic: '旧身份证 / 其他',
                id_type_pass: '护照',
                id_type_pol: '警察 / 军人身份证',
                nric: '车主身份证号码',
                old_ic: '旧身份证号码 / 其他',
                passport: '车主护照号码',
                police_army_id: '警察 / 军人身份证号码',
                gender: '性别',
                gender_male: '男 (Male)',
                gender_female: '女 (Female)',
                is_malaysian: '我是马来西亚公民',
                motor_registration: '摩托车注册',
                car_registration: '汽车注册',
                vehicle_type: '汽车注册',
                vehicle_placeholder: 'ABC1234',
                whatsapp: '电话号码',
                whatsapp_placeholder: '60123456789',
                email: '电子邮件',
                email_placeholder: 'your@email.com',
                address1: '地址 (1)',
                address2: '地址 (2)',
                state: '州属',
                postcode: '邮政编码',
                optional: '（选填）',
                send_whatsapp: '是的，通过电子邮件发送我的报价。',
                agreement: '我确认已阅读并理解 <a href="https://az.my/partner-CMCC-motorcycleplus-PDS_ENG" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline hover:text-blue-800">产品披露说明书</a>、<a href="https://az.my/partner-AMP-PW_ENG" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline hover:text-blue-800">保单条款</a> 及 <a href="https://az.my/PrivacyNotice-AGIC" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline hover:text-blue-800">隐私通知</a>，并同意根据隐私通知所述目的处理我的个人数据。',
                relationship_title: '注册代理关系披露',
                relationship_disclosure: 'GT-MAX Motors (M) Sdn. Bhd. 是 Allianz General Insurance Company (Malaysia) Berhad 的注册代理人。',
                pidm_title: 'PIDM 保障声明',
                pidm_disclosure: '受保障证书/保单/产品下应付的利益受 PIDM 保障至相关上限。请参阅 <a href="https://www.pidm.gov.my/pidm2022/files/92/92bdfcde-3534-4a29-9031-5186387623ee.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline hover:text-blue-800">PIDM TIPS 手册</a> 或联系 Allianz General Insurance Company (Malaysia) Berhad 或 PIDM（浏览 <a href="https://www.pidm.gov.my" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline hover:text-blue-800">www.pidm.gov.my</a>）。',
                submit: '立即获取报价！',
                nric_placeholder: 'XXXXXX-XX-XXXX',
                old_ic_placeholder: '请输入旧身份证号码',
                passport_placeholder: '请输入护照号码',
                police_army_placeholder: '请输入警察/军人身份证号码',
                postcode_placeholder: '请输入邮政编码',
                state_placeholder: '请输入州属',
                address_placeholder: '请输入地址',
                city_placeholder: '请输入城市',
                country_placeholder: '请输入国家',
                city: '城市',
                state: '州属',
                country: '国家',
                contact_hint: '手机号码或电子邮件，至少需填写一项',
                contact_required: '请至少填写以下其中一项：手机号码或电子邮件地址。',
                whatsapp_invalid: '请输入有效的电话号码（例如 60123456789 或 0123456789）。',
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
                validation_select_variant: '请选择一个车辆版本/型号。',
                recommended: '推荐',
                birthday: '出生日期',
                birthday_placeholder: 'YYYY-MM-DD',
                postcode_not_found: '邮政编码无效或未找到。',
                marital_status: '婚姻状况',
                marital_single: '单身',
                marital_married: '已婚',
                marital_divorced: '离婚 / 丧偶',
                coverage_type: '保障类型',
                coverage_comprehensive: '综合险 (Comprehensive)',
                coverage_third_party: '第三方险 (Third Party)',
                nationality: '国籍'
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
                identity_type: 'Jenis Identiti',
                id_type_nric: 'NRIC (MyKad)',
                id_type_old_ic: 'Kad Pengenalan Lama / Lain-lain',
                id_type_pass: 'Pasport',
                id_type_pol: 'ID Polis / Tentera',
                nric: 'No. IC Pemilik Kenderaan',
                old_ic: 'No. KP Lama / Lain-lain Pemilik',
                passport: 'No. Pasport Pemilik Kenderaan',
                police_army_id: 'No. ID Polis / Tentera Pemilik',
                gender: 'Jantina',
                gender_male: 'Lelaki (Male)',
                gender_female: 'Perempuan (Female)',
                is_malaysian: 'Saya warganegara Malaysia',
                motor_registration: 'Pendaftaran Motor',
                car_registration: 'Pendaftaran Kereta',
                vehicle_type: 'Kereta Didaftarkan',
                vehicle_placeholder: 'ABC1234',
                whatsapp: 'Nombor Telefon',
                whatsapp_placeholder: '60123456789',
                email: 'Emel',
                email_placeholder: 'your@email.com',
                address1: 'Alamat (1)',
                address2: 'Alamat (2)',
                postcode_placeholder: 'Masukkan poskod',
                state_placeholder: 'Masukkan negeri',
                city_placeholder: 'Masukkan bandar',
                postcode: 'Poskod',
                city: 'Bandar',
                state: 'Negeri',
                address_placeholder: 'Masukkan alamat',
                optional: '(Pilihan)',
                send_whatsapp: 'Ya, hantar sebut harga saya melalui emel.',
                agreement: 'Saya mengesahkan bahawa saya telah membaca dan memahami <a href="https://az.my/partner-CMCC-motorcycleplus-PDS_ENG" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline hover:text-blue-800">Lembaran Pendedahan Produk</a>, <a href="https://az.my/partner-AMP-PW_ENG" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline hover:text-blue-800">Teks Polisi</a> & <a href="https://az.my/PrivacyNotice-AGIC" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline hover:text-blue-800">Notis Privasi</a>, dan bersetuju dengan pemprosesan data peribadi saya untuk tujuan yang dinyatakan dalam Notis Privasi.',
                relationship_title: 'Pendedahan Hubungan Ejen Berdaftar',
                relationship_disclosure: 'GT-MAX Motors (M) Sdn. Bhd. adalah ejen berdaftar Allianz General Insurance Company (Malaysia) Berhad.',
                pidm_title: 'Penyataan Perlindungan PIDM',
                pidm_disclosure: 'Manfaat yang dibayar di bawah sijil/polisi/produk yang layak dilindungi oleh PIDM sehingga had perlindungan. Sila rujuk <a href="https://www.pidm.gov.my/pidm2022/files/92/92bdfcde-3534-4a29-9031-5186387623ee.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline hover:text-blue-800">Broshur TIPS PIDM</a> atau hubungi Allianz General Insurance Company (Malaysia) Berhad atau PIDM (layari <a href="https://www.pidm.gov.my" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline hover:text-blue-800">www.pidm.gov.my</a>).',
                submit: 'Dapatkan Sebut Harga Sekarang!',
                nric_placeholder: 'XXXXXX-XX-XXXX',
                old_ic_placeholder: 'Masukkan Nombor KP Lama',
                passport_placeholder: 'Masukkan nombor pasport',
                police_army_placeholder: 'Masukkan ID Polis / Tentera',
                city_placeholder: 'Masukkan bandar anda',
                country_placeholder: 'Masukkan negara anda',
                city: 'Bandar',
                country: 'Negara',
                contact_hint: 'Sekurang-kurangnya satu antara Nombor Telefon atau Emel diperlukan',
                contact_required: 'Sila isi sekurang-kurangnya satu: Nombor Telefon atau Emel.',
                whatsapp_invalid: 'Sila masukkan nombor telefon yang sah (cth. 60123456789 atau 0123456789).',
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
                validation_select_variant: 'Sila pilih varian/model kenderaan.',
                recommended: 'Disyorkan',
                birthday: 'Tarikh Lahir',
                dob_placeholder: 'YYYY-MM-DD',
                postcode_not_found: 'Poskod tidak sah atau tidak dijumpai.',
                marital_status: 'Taraf Perkahwinan',
                marital_single: 'Bujang',
                marital_married: 'Berkahwin',
                marital_divorced: 'Bercerai / Duda / Janda',
                coverage_type: 'Jenis Perlindungan',
                coverage_comprehensive: 'Komprehensif (Comprehensive)',
                coverage_third_party: 'Pihak Ketiga (Third Party)',
                nationality: 'Kewarganegaraan'
            }
        };

        const nricInput = document.getElementById('nric');
        const nricLabel = document.getElementById('nric_label_text');
        const nricIcon = document.getElementById('nric_icon');

        const vehicleTypeCheckbox = document.getElementById('vehicle_type');
        const vehicleLabel = document.getElementById('vehicle_label');
        const vehicleIcon = document.getElementById('vehicle_icon');
        const whatsappInput = document.getElementById('whatsapp_number');

        const getSelectedLang = () => {
            return localStorage.getItem('site_lang') || 'bm';
        };

        const formatPhone = (value) => {
            if (!value) return '';
            const hasPlus = value.startsWith('+');
            const digits = value.replace(/\D/g, '').slice(0, 11);
            return hasPlus ? '+' + digits : digits;
        };

        const isValidPhone = (value) => {
            if (!value) return true;
            const digits = value.replace(/\D/g, '');
            return digits.length >= 9 && digits.length <= 11;
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
            const identityTypeSelect = document.getElementById('identity_type');
            const selectedType = identityTypeSelect ? identityTypeSelect.value : 'NRIC';

            if (nricLabel) {
                if (selectedType === 'NRIC') {
                    nricLabel.textContent = translations[selectedLang].nric;
                } else if (selectedType === 'OLD_IC') {
                    nricLabel.textContent = translations[selectedLang].old_ic;
                } else if (selectedType === 'PASS') {
                    nricLabel.textContent = translations[selectedLang].passport;
                } else if (selectedType === 'POL') {
                    nricLabel.textContent = translations[selectedLang].police_army_id;
                }
            }

            if (selectedType === 'NRIC') {
                nricInput.placeholder = translations[selectedLang].nric_placeholder;
                nricInput.maxLength = 14;
                nricInput.setAttribute('inputmode', 'numeric');
                nricInput.value = formatNric(nricInput.value);
            } else if (selectedType === 'OLD_IC') {
                nricInput.placeholder = translations[selectedLang].old_ic_placeholder;
                nricInput.maxLength = 20;
                nricInput.setAttribute('inputmode', 'text');
                nricInput.value = formatPassport(nricInput.value);
            } else if (selectedType === 'PASS') {
                nricInput.placeholder = translations[selectedLang].passport_placeholder;
                nricInput.maxLength = 20;
                nricInput.setAttribute('inputmode', 'text');
                nricInput.value = formatPassport(nricInput.value);
            } else if (selectedType === 'POL') {
                nricInput.placeholder = translations[selectedLang].police_army_placeholder;
                nricInput.maxLength = 20;
                nricInput.setAttribute('inputmode', 'text');
                nricInput.value = formatPassport(nricInput.value);
            }

            const genderWrapper = document.getElementById('gender_wrapper');
            if (genderWrapper) {
                genderWrapper.classList.remove('hidden');
            }

            const nationalityWrapper = document.getElementById('nationality_wrapper');
            const nationalitySelect = document.getElementById('nationality');
            if (selectedType === 'PASS') {
                if (nationalityWrapper) nationalityWrapper.classList.remove('hidden');
            } else {
                if (nationalityWrapper) nationalityWrapper.classList.add('hidden');
                if (nationalitySelect) nationalitySelect.value = 'MALAYSIA';
            }

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
                const htmlKeys = [
                    'main_title',
                    'agreement',
                    'relationship_disclosure',
                    'level_of_service_a',
                    'direct_channel_a',
                    'pidm_disclosure'
                ];

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

        const identityTypeSelect = document.getElementById('identity_type');

        const parseNricData = (nricVal) => {
            if (!nricVal) return null;
            const digits = nricVal.replace(/\D/g, '');
            if (digits.length < 6) return null;

            const yyStr = digits.slice(0, 2);
            const mmStr = digits.slice(2, 4);
            const ddStr = digits.slice(4, 6);

            const yy = parseInt(yyStr, 10);
            const mm = parseInt(mmStr, 10);
            const dd = parseInt(ddStr, 10);

            if (isNaN(yy) || isNaN(mm) || isNaN(dd)) return null;
            if (mm < 1 || mm > 12) return null;
            if (dd < 1 || dd > 31) return null;

            const currentYearShort = parseInt(new Date().getFullYear().toString().slice(-2), 10);
            const fullYear = (yy > currentYearShort) ? (1900 + yy) : (2000 + yy);

            const formattedMm = String(mm).padStart(2, '0');
            const formattedDd = String(dd).padStart(2, '0');
            const birthday = `${fullYear}-${formattedMm}-${formattedDd}`;

            let gender = null;
            if (digits.length >= 12) {
                const lastDigit = parseInt(digits.slice(11, 12), 10);
                if (!isNaN(lastDigit)) {
                    gender = (lastDigit % 2 === 1) ? 'M' : 'F';
                }
            } else if (digits.length > 6) {
                const lastDigit = parseInt(digits.slice(-1), 10);
                if (!isNaN(lastDigit)) {
                    gender = (lastDigit % 2 === 1) ? 'M' : 'F';
                }
            }

            return { birthday, gender };
        };

        const genderSelect = document.getElementById('gender');
        const dobInput = document.getElementById('birthday');

        const autoDetectNricDetails = () => {
            const identityTypeSelect = document.getElementById('identity_type');
            const selectedType = identityTypeSelect ? identityTypeSelect.value : 'NRIC';
            if (selectedType !== 'NRIC' || !nricInput) return;

            const parsed = parseNricData(nricInput.value);
            if (parsed) {
                if (parsed.gender && genderSelect) {
                    genderSelect.value = parsed.gender;
                }
                if (parsed.birthday && dobInput) {
                    dobInput.value = parsed.birthday;
                }
            }
        };

        if (nricInput) {
            nricInput.addEventListener('input', () => {
                const selectedType = identityTypeSelect ? identityTypeSelect.value : 'NRIC';
                if (selectedType === 'NRIC') {
                    nricInput.value = formatNric(nricInput.value);
                    autoDetectNricDetails();
                } else {
                    nricInput.value = formatPassport(nricInput.value);
                }
            });
        }

        if (identityTypeSelect) {
            identityTypeSelect.addEventListener('change', () => {
                updateIdentityFieldUI(getSelectedLang());
            });
        }

        if (whatsappInput) {
            whatsappInput.setAttribute('inputmode', 'tel');
            whatsappInput.addEventListener('input', () => {
                whatsappInput.value = formatPhone(whatsappInput.value);
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

        let postcodeAbortController = null;
        let lastSearchedPostcode = '';

        const handlePostcodeLookup = async () => {
            if (!form.postcode) return;
            const val = form.postcode.value.trim().replace(/\D/g, '');
            const spinnerEl = document.getElementById('postcode-spinner');
            const postcodeErrorEl = document.querySelector('[data-error-for="postcode"]');

            if (val.length !== 5) {
                lastSearchedPostcode = '';
                if (postcodeErrorEl && val.length === 0) {
                    postcodeErrorEl.textContent = '';
                    postcodeErrorEl.classList.add('hidden');
                    form.postcode.classList.remove('input-error');
                }
                if (spinnerEl) spinnerEl.classList.add('hidden');
                return;
            }

            if (val === lastSearchedPostcode) {
                return;
            }

            if (postcodeAbortController) {
                postcodeAbortController.abort();
            }
            postcodeAbortController = new AbortController();

            lastSearchedPostcode = val;
            if (spinnerEl) spinnerEl.classList.remove('hidden');
            if (postcodeErrorEl) {
                postcodeErrorEl.textContent = '';
                postcodeErrorEl.classList.add('hidden');
            }
            form.postcode.classList.remove('input-error');

            const searchPostcodeBaseUrl = (typeof GTMAX_CONFIG !== 'undefined' && GTMAX_CONFIG.apiUrl)
                ? GTMAX_CONFIG.apiUrl + '/search_postcode'
                : 'https://gtmaxmanagement.test/api/insurance_registration/search_postcode';

            try {
                const response = await fetch(`${searchPostcodeBaseUrl}/${val}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': (typeof GTMAX_CONFIG !== 'undefined' && GTMAX_CONFIG.token) ? GTMAX_CONFIG.token : ''
                    },
                    signal: postcodeAbortController.signal
                });

                const data = await response.json();

                if (response.ok && data && (data.success === true || data.city || (data.data && data.data.city))) {
                    const city = data.city || (data.data && data.data.city) || '';
                    const state = data.state || (data.data && data.data.state) || '';
                    if (form.city) form.city.value = city;
                    if (form.state) form.state.value = state;

                    if (postcodeErrorEl) {
                        postcodeErrorEl.textContent = '';
                        postcodeErrorEl.classList.add('hidden');
                    }
                    form.postcode.classList.remove('input-error');
                    if (form.city) form.city.classList.remove('input-error');
                    if (form.state) form.state.classList.remove('input-error');
                } else {
                    const lang = getSelectedLang();
                    const errorMsg = (data && (data.message || data.error)) ||
                        (data && data.errors && data.errors.postcode ? (Array.isArray(data.errors.postcode) ? data.errors.postcode[0] : data.errors.postcode) : null) ||
                        (translations[lang] && translations[lang].postcode_not_found) ||
                        'Invalid postcode';

                    if (postcodeErrorEl) {
                        postcodeErrorEl.textContent = errorMsg;
                        postcodeErrorEl.classList.remove('hidden');
                    }
                    form.postcode.classList.add('input-error');
                }
            } catch (err) {
                if (err.name === 'AbortError') return;

                const lang = getSelectedLang();
                const errorMsg = (translations[lang] && translations[lang].postcode_not_found) || 'Invalid postcode';
                if (postcodeErrorEl) {
                    postcodeErrorEl.textContent = errorMsg;
                    postcodeErrorEl.classList.remove('hidden');
                }
                form.postcode.classList.add('input-error');
            } finally {
                if (spinnerEl) spinnerEl.classList.add('hidden');
            }
        };

        if (form.postcode) {
            form.postcode.addEventListener('input', handlePostcodeLookup);
            form.postcode.addEventListener('change', handlePostcodeLookup);
            form.postcode.addEventListener('blur', handlePostcodeLookup);
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
            const fieldMap = {
                'identityType': 'identityType',
                'identity_type': 'identityType',
                'address1': 'address1',
                'address_1': 'address1',
                'addressLine1': 'address1',
                'address2': 'address2',
                'address_2': 'address2',
                'addressLine2': 'address2',
                'birthday': 'birthday',
                'whatsapp_number': 'whatsapp_number',
                'email': 'email',
                'staff_id': 'staff_id',
                'nric': 'nric',
                'name': 'name',
                'vehicle_number': 'vehicle_number',
                'vehicle_type': 'vehicle_type',
                'gender': 'gender',
                'postcode': 'postcode',
                'city': 'city',
                'state': 'state',
                'maritalStatus': 'maritalStatus',
                'marital_status': 'maritalStatus',
                'coverageType': 'coverageType',
                'coverage_type': 'coverageType',
                'nationality': 'nationality',
                'send_whatsapp': 'send_whatsapp',
                'is_malaysian': 'nric'
            };

            const elementIdMap = {
                'identityType': 'identity_type'
            };

            let firstErrorElement = null;

            // Ensure staff_id input wrapper is unhidden if staff_id error exists
            if (errors.staff_id) {
                const isGtmaxStaffCheckbox = document.getElementById('is_gtmax_staff');
                const staffIdWrapper = document.getElementById('staff_id_wrapper');
                if (isGtmaxStaffCheckbox) isGtmaxStaffCheckbox.checked = true;
                if (staffIdWrapper) staffIdWrapper.classList.remove('hidden');
            }

            // Ensure gender/birthday wrappers are unhidden if gender/birthday errors exist
            if (errors.gender) {
                const genderWrapper = document.getElementById('gender_wrapper');
                if (genderWrapper) genderWrapper.classList.remove('hidden');
            }
            if (errors.birthday) {
                const dobWrapper = document.getElementById('birthday_wrapper');
                if (dobWrapper) dobWrapper.classList.remove('hidden');
            }
            if (errors.nationality) {
                const nationalityWrapper = document.getElementById('nationality_wrapper');
                if (nationalityWrapper) nationalityWrapper.classList.remove('hidden');
            }

            // Handle contact general message if both contact fields are missing
            const whatsappVal = form.whatsapp_number ? form.whatsapp_number.value.trim() : '';
            const emailVal = form.email ? form.email.value.trim() : '';
            const contactErrorEl = document.querySelector('[data-error-for="contact"]');

            if (!whatsappVal && !emailVal && (errors.whatsapp_number || errors.email)) {
                const lang = getSelectedLang();
                if (contactErrorEl) {
                    contactErrorEl.textContent = translations[lang].contact_required;
                    contactErrorEl.classList.remove('hidden');
                    if (!firstErrorElement) firstErrorElement = contactErrorEl;
                }
            }

            Object.entries(errors).forEach(([rawField, messages]) => {
                if (!messages) return;

                const canonicalField = fieldMap[rawField] || rawField;
                const elementId = elementIdMap[canonicalField] || canonicalField;

                const input = document.getElementById(elementId);
                const errorEl = document.querySelector(`[data-error-for="${canonicalField}"]`) ||
                    document.querySelector(`[data-error-for="${rawField}"]`);

                if (input) {
                    input.classList.add('input-error');
                    if (!firstErrorElement) firstErrorElement = input;
                }

                if (errorEl) {
                    const msgText = Array.isArray(messages) ? (messages[0] || '') : messages;
                    if (msgText) {
                        errorEl.textContent = msgText;
                        errorEl.classList.remove('hidden');
                        if (!firstErrorElement) firstErrorElement = errorEl;
                    }
                }
            });

            if (firstErrorElement) {
                firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                if (typeof firstErrorElement.focus === 'function') {
                    firstErrorElement.focus();
                }
            }
        };

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            clearErrors();

            Swal.fire({
                title: 'Submitting...',
                text: 'Please wait a minute...',

                allowOutsideClick: false,
                allowEscapeKey: false,
                didOpen: () => Swal.showLoading()
            });

            const selectedIdentityType = form.identityType ? form.identityType.value : 'NRIC';
            const isPassport = selectedIdentityType === 'PASS';
            const isMalaysian = !isPassport;
            const nationalityVal = isPassport ? (form.nationality ? form.nationality.value : 'MALAYSIA') : 'MALAYSIA';

            const payload = {
                name: form.name.value.trim(),
                identityType: form.identityType ? form.identityType.value : 'NRIC',
                nric: form.nric.value.trim(),
                is_malaysian: isMalaysian ? 1 : 0,
                nationality: nationalityVal,
                gender: form.gender ? form.gender.value : '',
                birthday: form.birthday ? form.birthday.value.trim() : '',
                maritalStatus: form.maritalStatus ? form.maritalStatus.value : '0',
                coverageType: form.coverageType ? form.coverageType.value : '01',
                vehicle_number: form.vehicle_number.value.trim(),
                vehicle_type: form.vehicle_type && form.vehicle_type.checked ? 'Car' : 'Motorcycle',
                whatsapp_number: form.whatsapp_number.value.trim(),
                email: form.email.value.trim(),
                address1: form.address1 ? form.address1.value.trim() : '',
                address2: form.address2 ? form.address2.value.trim() : '',
                postcode: form.postcode ? form.postcode.value.trim() : '',
                city: form.city ? form.city.value.trim() : '',
                state: form.state ? form.state.value.trim() : '',
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

                    // Prepare variants list html
                    let variantsHtml = '';
                    if (message.nvicList && message.nvicList.length > 0) {
                        message.nvicList.forEach((item, index) => {
                            const isRecommended = (item.recommendInd === 'Y' || item.recommendInd === 'y');
                            const activeClass = isRecommended ? ' selected-active' : '';
                            const checkedAttr = isRecommended ? ' checked' : '';
                            const dotHidden = isRecommended ? '' : ' hidden';
                            const recBadge = isRecommended
                                ? `<span class="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border border-amber-300 ml-1.5 shadow-sm">⭐ ${t.recommended || 'Recommended'}</span>`
                                : '';

                            const modelData = item.model_data || {};
                            const modelDesc = modelData.MvModelDesc || '';
                            const makeYear = modelData.MakeYear || message.yearOfManufacture || '';
                            const variantName = modelData.Variant;
                            const engineCC = modelData.VehicleEngineCC || '';
                            const engineType = modelData.EngineType || '';

                            const rawMarketVal = (item.vehicleMarketValue !== undefined && item.vehicleMarketValue !== null)
                                ? item.vehicleMarketValue
                                : (modelData.SumInsured || 0);
                            const marketValNum = parseFloat(rawMarketVal);
                            const formattedMarketValue = !isNaN(marketValNum) ? marketValNum.toFixed(2) : rawMarketVal;

                            variantsHtml += `
                                <label class="variant-card flex items-center justify-between p-3.5 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50/20 transition-all duration-200 mb-2 relative${activeClass}">
                                    <input type="radio" name="selected_nvic" value="${item.nvic || item.azVariant}" data-index="${index}" class="absolute opacity-0 variant-radio"${checkedAttr}>
                                    <div class="flex items-center gap-3">
                                        <div class="custom-radio flex items-center justify-center w-5 h-5 rounded-full border-2 border-gray-300 bg-white transition-all duration-200">
                                            <div class="w-2.5 h-2.5 rounded-full bg-blue-600${dotHidden}"></div>
                                        </div>
                                        <div>
                                            <div class="font-bold text-gray-800 text-sm md:text-base flex items-center flex-wrap gap-1">
                                                ${modelDesc ? `<span class="bg-blue-100 text-blue-800 text-[11px] font-extrabold uppercase px-2 py-0.5 rounded-md border border-blue-200">${modelDesc}</span>` : ''}
                                                ${variantName}
                                                ${recBadge}
                                            </div>
                                            <div class="text-xs text-gray-500 mt-1 flex items-center gap-2 flex-wrap">
                                                ${makeYear ? `<span>Year: <strong>${makeYear}</strong></span>` : ''}
                                                ${engineCC ? `<span>Engine: <strong>${engineCC} CC</strong></span>` : ''}
                                                ${engineType ? `<span>Type: <strong>${engineType}</strong></span>` : ''}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-right min-w-[100px]">
                                        <div class="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Sum Insured</div>
                                        <div class="font-extrabold text-blue-600 text-sm md:text-base">RM ${formattedMarketValue}</div>
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

                            // Pre-select recommended variant if present in nvicList
                            if (message.nvicList && message.nvicList.length > 0) {
                                const recIndex = message.nvicList.findIndex(item => item.recommendInd === 'Y' || item.recommendInd === 'y');
                                if (recIndex !== -1) {
                                    selectedVariant = message.nvicList[recIndex];
                                } else if (message.nvicList.length === 1) {
                                    selectedVariant = message.nvicList[0];
                                }
                            }

                            cards.forEach(card => {
                                card.addEventListener('click', () => {
                                    cards.forEach(c => {
                                        c.classList.remove('selected-active');
                                        const dot = c.querySelector('.custom-radio div');
                                        if (dot) dot.classList.add('hidden');
                                    });
                                    card.classList.add('selected-active');
                                    const radio = card.querySelector('input[type="radio"]');
                                    if (radio) {
                                        radio.checked = true;
                                        const index = parseInt(radio.getAttribute('data-index'), 10);
                                        selectedVariant = message.nvicList[index];
                                    }
                                    const dot = card.querySelector('.custom-radio div');
                                    if (dot) dot.classList.remove('hidden');
                                    const errorMsg = document.getElementById('variant-error-msg');
                                    if (errorMsg) errorMsg.classList.add('hidden');
                                });
                            });

                            confirmBtn.addEventListener('click', async () => {
                                if (message.nvicList && message.nvicList.length > 0 && !selectedVariant) {
                                    const errorMsg = document.getElementById('variant-error-msg');
                                    console.log('errorMsg: ', errorMsg);
                                    if (errorMsg) {
                                        errorMsg.textContent = t.validation_select_variant;
                                        errorMsg.classList.remove('hidden');
                                    }
                                    return;
                                }

                                Swal.fire({
                                    title: 'Submitting confirmation...',
                                    allowOutsideClick: false,
                                    didOpen: () => Swal.showLoading()
                                });

                                const confirmPayload = {
                                    ...payload,
                                    ...message,
                                    maritalStatus: payload.maritalStatus,
                                    coverageType: payload.coverageType,
                                    confirm: 1
                                };

                                if (selectedVariant) {
                                    const modelData = selectedVariant.model_data || {};
                                    confirmPayload.selectedVariant = selectedVariant;
                                    confirmPayload.azVariant = modelData.AzVariant;
                                    confirmPayload.nvicSelectionId = selectedVariant.nvic;
                                    confirmPayload.vehicleVariant = modelData.Variant;
                                    confirmPayload.vehicleMarketValue = selectedVariant.vehicleMarketValue;
                                    confirmPayload.sumInsured = modelData.SumInsured;
                                    confirmPayload.vehicleEngineCC = modelData.VehicleEngineCC;
                                    confirmPayload.engineType = modelData.EngineType;
                                    confirmPayload.mvModelDesc = modelData.MvModelDesc || message.vehicleModelDesc || '';
                                    confirmPayload.mvModelCode = modelData.MvModelCode || '';
                                    confirmPayload.makeYear = modelData.MakeYear || message.yearOfManufacture || '';
                                    confirmPayload.mvCode = modelData.MvCode;
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
                                    console.log('confirmData: ', confirmData);
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

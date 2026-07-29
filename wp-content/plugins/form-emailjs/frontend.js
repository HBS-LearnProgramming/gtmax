document.addEventListener("DOMContentLoaded", function () {

    if (typeof emailjs === "undefined") {
        console.error("EmailJS SDK not loaded.");
        return;
    }

    try {
        emailjs.init(FormEmailJSSettings.publicKey);
    } catch (e) {
        console.error("EmailJS init failed:", e);
    }

    // Dynamic LARAVEL_API_URL using GTMAX_CONFIG with fallbacks
    const LARAVEL_API_URL = (typeof GTMAX_CONFIG !== "undefined" && GTMAX_CONFIG.resumeUrl)
        ? GTMAX_CONFIG.resumeUrl
        : ((typeof GTMAX_CONFIG !== "undefined" && GTMAX_CONFIG.apiUrl)
            ? GTMAX_CONFIG.apiUrl.replace(/\/insurance_registration\/?$/, "") + "/resume_upload"
            : "https://gtmaxmanagement.test/api/resume_upload");

    // Dynamic Authorization token using GTMAX_CONFIG with fallbacks
    function getAuthToken() {
        if (typeof GTMAX_CONFIG !== "undefined" && GTMAX_CONFIG.token) {
            return GTMAX_CONFIG.token.startsWith("Bearer ") ? GTMAX_CONFIG.token : "Bearer " + GTMAX_CONFIG.token;
        }
        if (typeof FormEmailJSSettings !== "undefined" && FormEmailJSSettings.apiToken) {
            return FormEmailJSSettings.apiToken.startsWith("Bearer ") ? FormEmailJSSettings.apiToken : "Bearer " + FormEmailJSSettings.apiToken;
        }
        return "";
    }

    const forms = document.querySelectorAll("form.form-emailjs");

    forms.forEach(form => {

        const fileInput = form.querySelector('input[type="file"]');

        /* ================================
           FILE UI (ONLY IF FILE EXISTS)
        ================================= */
        if (fileInput) {
            fileInput.addEventListener("change", function () {
                const customUploadBox = form.querySelector('.custom-file-upload');
                if (!customUploadBox) return;

                const existingName = customUploadBox.querySelector('.file-name');
                if (existingName) existingName.remove();

                if (this.files && this.files.length > 0) {
                    const span = document.createElement("span");
                    span.className = "file-name";
                    span.textContent = this.files[0].name;
                    customUploadBox.appendChild(span);
                }
            });
        }

        /* ================================
           FORM SUBMIT
        ================================= */
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const serviceID =
                form.dataset.serviceId ||
                FormEmailJSSettings?.serviceId ||
                "";

            const templateID =
                form.dataset.templateId ||
                FormEmailJSSettings?.templateId ||
                "";

            if (!serviceID || !templateID) {
                alert("EmailJS Service ID or Template ID missing.");
                return;
            }

            const formData = new FormData(form);
            const sendData = {};

            formData.forEach((value, key) => {
                if (key && !(value instanceof File)) {
                    sendData[key] = value;
                }
            });

            const btn = form.querySelector("button[type=submit]");
            const oldText = btn?.innerText;

            if (btn) {
                btn.disabled = true;
                btn.innerText = "Sending...";
            }

            /* ================================
               FILE UPLOAD (ONLY IF FILE SELECTED)
            ================================= */
            if (fileInput && fileInput.files.length > 0) {

                fetch(LARAVEL_API_URL, {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json",
                        "Authorization": getAuthToken()
                    }
                })
                .then(res => res.json())
                .then(data => {
                    // Pass uploaded file URL/string to EmailJS
                    sendData.file = data.message || "";
                    return emailjs.send(serviceID, templateID, sendData);
                })
                .then(() => {
                    successHandler(form, btn, oldText);
                })
                .catch(error => {
                    errorHandler(error, btn, oldText);
                });

            } else {
                // ✅ NO FILE — NORMAL EMAILJS SEND
                emailjs.send(serviceID, templateID, sendData)
                    .then(() => {
                        successHandler(form, btn, oldText);
                    })
                    .catch(error => {
                        errorHandler(error, btn, oldText);
                    });
            }
        });
    });

    /* ================================
       HELPERS
    ================================= */
    function successHandler(form, btn, oldText) {
        if (btn) btn.innerText = "✅ Sent!";
        setTimeout(() => {
            if (btn) {
                btn.disabled = false;
                btn.innerText = oldText;
            }
            form.reset();
        }, 1500);
    }

    function errorHandler(error, btn, oldText) {
        console.error("❌ Error:", error);
        if (btn) btn.innerText = "❌ Failed!";
        setTimeout(() => {
            if (btn) {
                btn.disabled = false;
                btn.innerText = oldText;
            }
        }, 1500);
    }
});

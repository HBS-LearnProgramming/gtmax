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

    const LARAVEL_API_URL = "https://gtmaxmanagement.gtmax.com.my/api/resume_upload";
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
                        "Authorization": "Bearer 1d54075a11ab47358afa886b5f363c19125cb6b1e64af7a4164355a11d502452e15afb3bea47e869"
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

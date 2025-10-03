document.addEventListener("DOMContentLoaded", function () {
    // Ensure emailjs is available
    if (typeof emailjs === "undefined") {
        console.error("EmailJS SDK not loaded.");
    }
    (function(){
        try {
            emailjs.init(FormEmailJSSettings.publicKey);
        } catch (e) {
            console.error("EmailJS init failed:", e);
        }
    })();

    const forms = document.querySelectorAll("form.form-emailjs");

    forms.forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // First try data attributes on the form
            const serviceID = form.dataset.serviceId || form.getAttribute("data-service-id") || (window.FormEmailJSSettings && FormEmailJSSettings.serviceId) || '';
            const templateID = form.dataset.templateId || form.getAttribute("data-template-id") || (window.FormEmailJSSettings && FormEmailJSSettings.templateId) || '';

            if (!serviceID || !templateID) {
                alert("EmailJS service/template not configured. Please set Service ID in plugin settings and/or Template ID on the block.");
                return;
            }
            console.log(FormEmailJSSettings);

            // Build form data object
            const formData = {};
            new FormData(form).forEach((value, key) => {
                // skip empty names
                if (key) formData[key] = value;
            });

            // Button UX
            const btn = form.querySelector("button[type=submit]") || form.querySelector("button");
            const oldText = btn ? btn.innerText : '';
            if (btn) { btn.disabled = true; btn.innerText = "Sending..."; }

            // Send with EmailJS
            emailjs.send(serviceID, templateID, formData).then(function (response) {
                if (btn) { btn.innerText = "✅ Sent!"; }
                // success UX: reset if you want
                setTimeout(function () {
                    if (btn) { btn.disabled = false; btn.innerText = oldText; }
                    try { form.reset(); } catch (e) {}
                }, 1500);
            }, function (error) {
                console.error("EmailJS send failed:", error);
                if (btn) { btn.innerText = "❌ Failed!"; }
                setTimeout(function () {
                    if (btn) { btn.disabled = false; btn.innerText = oldText; }
                }, 1500);
            });
        });
    });
});

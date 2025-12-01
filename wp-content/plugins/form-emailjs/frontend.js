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
    const LARAVEL_API_URL = "https://aimanagement.azurewebsites.net/api/resume_upload";
    const forms = document.querySelectorAll("form.form-emailjs");

    forms.forEach(form => {
        const file = form.querySelector("input[type=file]");
        console.log('file: ', file.value);
        
        file.addEventListener('change', function() {
            console.log('file value: ', this.value);

            const customUploadBox = document.querySelector('.custom-file-upload');

            // ✅ Remove previous filename span (optional, if you only want to show the latest file)
            const existingName = customUploadBox.querySelector('.file-name');
            if (existingName) existingName.remove();

            // ✅ Only add if a file is selected
            if (this.files && this.files.length > 0) {
                const fileName = this.files[0].name;

                // Create and style span
                const fileNameSpan = document.createElement('span');
                fileNameSpan.textContent = fileName;
                fileNameSpan.classList.add('file-name');

                // ✅ Append after all other existing tags/elements
                customUploadBox.appendChild(fileNameSpan);
            }
        });

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // First try data attributes on the form
            const serviceID = form.dataset.serviceId || form.getAttribute("data-service-id") || (window.FormEmailJSSettings && FormEmailJSSettings.serviceId) || '';
            const templateID = form.dataset.templateId || form.getAttribute("data-template-id") || (window.FormEmailJSSettings && FormEmailJSSettings.templateId) || '';

            if (!serviceID || !templateID) {
                alert("EmailJS service/template not configured. Please set Service ID in plugin settings and/or Template ID on the block.");
                return;
            }
            

            // Build form data object
            const formData = new FormData(form);
            // new FormData(form).forEach((value, key) => {
            //     // skip empty names
            //     if (key) formData[key] = value;
            // });
            const sendData = {};
            new FormData(form).forEach((value, key) => {
                // skip empty names
                if (key) sendData[key] = value;
            });
            // Button UX
            const btn = form.querySelector("button[type=submit]") || form.querySelector("button");
            
            const oldText = btn ? btn.innerText : '';
            if (btn) { btn.disabled = true; btn.innerText = "Sending..."; }
            if(sendData['file']){
                console.log('file: ', sendData['file']);
                fetch(LARAVEL_API_URL, {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json",
                    },
                })
                .then(response => response.json())
                .then(data => {
                    sendData['file'] = data.message;
                    emailjs.send(serviceID, templateID, sendData).then(function (response) {
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
                    alert("Upload successful!");
                })
                .catch(error => {
                    console.error("❌ Error:", error);
                    alert("Upload failed!");
                });
            }
                
            // Send with EmailJS
            if(!sendData['file']){
                emailjs.send(serviceID, templateID, sendData).then(function (response) {
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
            }
            
        });
    });
});

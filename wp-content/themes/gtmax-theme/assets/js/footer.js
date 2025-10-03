
 (function(){
    emailjs.init({
        publicKey: "WVhZQX9Brwom1O3U2",
    });
})();
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscribe-form");
    const status = document.getElementById("status");
    const loading = document.getElementById('loading');
    loading.style.display='none';
    form.addEventListener("submit", function (e) {
        loading.style.display='block';
        e.preventDefault();
        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            status.textContent = "❌ Invalid email format. Please enter a valid email.";
            status.className = "mt-2 text-red-600 text-sm";
            loading.style.display='none';
            return; // stop sending
        }
        // ✅ Replace with your EmailJS Service ID & Template ID
        const serviceID = "service_j2bkmui";
        const templateID = "template_dfrw2jh";
        var templateParams = {
            email: email,
        }
        emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                status.textContent = "✅ Subscription successful!";
                status.className = "mt-2 text-green-600 text-sm";
                loading.style.display='none';
                setTimeout(() => {
                    status.textContent = "";
                }, 5000);
                form.reset();
            })
            .catch((err) => {
                status.textContent = "❌ Failed to send: " + JSON.stringify(err);
                status.className = "mt-2 text-red-600 text-sm";
                loading.style.display='none';
            });
    });
});
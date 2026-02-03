(function () {

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
            vehicle_number: form.vehicle_number.value.trim(),
            whatsapp_number: form.whatsapp_number.value.trim(),
            email: form.email.value.trim(),
            send_whatsapp: form.send_whatsapp.checked ? 1 : 0,
            language: localStorage.getItem('site_lang') || 'en'
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

        } catch (err) {
            Swal.close();
            Swal.fire('Network Error', 'Please try again later', 'error');
            console.error(err);
        }
    });

})();

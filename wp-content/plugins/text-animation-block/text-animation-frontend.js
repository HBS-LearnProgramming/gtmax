(function () {
    function typeIntoSpan(wrapper, speed, delay) {
        if (!wrapper) return;

        // Reset old typing state
        wrapper.__ta_typed = false;
        const span = wrapper.querySelector('span');
        if (!span) return;

        const full = span.dataset.taFullText || (span.textContent || '').replace(/\u00A0/g, ' ');
        span.dataset.taFullText = full;

        span.textContent = '';
        span.style.whiteSpace = 'pre';

        // remove old cursor if exists
        const oldCursor = wrapper.querySelector('.ta-typing-cursor');
        if (oldCursor) oldCursor.remove();

        const cursor = document.createElement('span');
        cursor.className = 'ta-typing-cursor';
        wrapper.appendChild(cursor);

        let i = 0;
        function step() {
            span.textContent = full.substring(0, i);
            i++;
            if (i <= full.length) {
                setTimeout(step, speed);
            }
        }

        setTimeout(step, delay || 0);
    }

    function initTyping(wrapper) {
        const s = parseInt(wrapper.getAttribute('data-typing-speed') || wrapper.dataset.typingSpeed || '60', 10);
        const d = parseInt(wrapper.getAttribute('data-typing-delay') || wrapper.dataset.typingDelay || '0', 10);
        typeIntoSpan(wrapper, isNaN(s) ? 60 : s, isNaN(d) ? 0 : d);
    }

    function initAll() {
        document.querySelectorAll('.animated-text.typing').forEach(initTyping);
    }

    // normal init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }

    // rerun on scroll into view
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    initTyping(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.animated-text.typing').forEach(block => {
            observer.observe(block);
        });
    }
})();

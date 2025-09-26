// text-animation-frontend.js
(function () {
    function typeIntoSpan(wrapper, speed, delay) {
        if (!wrapper) return;
        if (wrapper.__ta_typed) return;
        wrapper.__ta_typed = true;

        var span = wrapper.querySelector('span');
        if (!span) span = wrapper;

        var full = span.dataset.taFullText;
        if (typeof full === 'undefined') {
            full = (span.textContent || '').replace(/\u00A0/g, ' ');
            span.dataset.taFullText = full;
        }

        span.textContent = '';
        span.style.whiteSpace = 'pre';

        var cursor = document.createElement('span');
        cursor.className = 'ta-typing-cursor';
        wrapper.appendChild(cursor);

        var i = 0;
        if (!speed || speed <= 0) {
            span.textContent = full;
            return;
        }

        function step() {
            span.textContent = full.substring(0, i);
            i++;
            if (i <= full.length) {
                setTimeout(step, speed);
            }
        }

        // NEW: start after delay
        setTimeout(step, delay || 0);
    }

    function initAll() {
        var nodes = document.querySelectorAll('.animated-text.typing');
        nodes.forEach(function (wrapper) {
            var s = parseInt(wrapper.getAttribute('data-typing-speed') || wrapper.dataset.typingSpeed || '', 10);
            if (isNaN(s)) s = 60;

            var d = parseInt(wrapper.getAttribute('data-typing-delay') || wrapper.dataset.typingDelay || '', 10);
            if (isNaN(d)) d = 0;

            typeIntoSpan(wrapper, s, d);
        });
    }


    // init on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }

    // observe for blocks inserted dynamically (works in editor)
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
            if (!m.addedNodes) return;
            m.addedNodes.forEach(function (node) {
                if (!node || !node.querySelector) return;
                // if the node itself is the wrapper
                if (node.classList && node.classList.contains && node.classList.contains('animated-text') && node.classList.contains('typing')) {
                    var s = parseInt(node.getAttribute('data-typing-speed') || node.dataset.typingSpeed || '', 10);
                    if (isNaN(s)) s = 60;
                    typeIntoSpan(node, s);
                }
                // any child wrappers
                var childs = node.querySelectorAll && node.querySelectorAll('.animated-text.typing') || [];
                childs.forEach(function (el) {
                    var s = parseInt(el.getAttribute('data-typing-speed') || el.dataset.typingSpeed || '', 10);
                    if (isNaN(s)) s = 60;
                    typeIntoSpan(el, s);
                });
            });
        });
    });

    observer.observe(document.documentElement || document.body, { childList: true, subtree: true });
})();

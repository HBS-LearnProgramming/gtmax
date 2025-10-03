document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".animated-block");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const el = entry.target;
            const duration = el.getAttribute("data-duration") || 600;
            const delay = el.getAttribute("data-delay") || 0;

            el.style.transitionDuration = duration + "ms";
            el.style.transitionDelay = delay + "ms";

            if (entry.isIntersecting) {
                // Add class when visible
                el.classList.add("visible");
            } else {
                // Remove class when leaving viewport so it can rerun
                el.classList.remove("visible");
            }
        });
    }, { threshold: 0.2 });

    blocks.forEach(block => observer.observe(block));
});

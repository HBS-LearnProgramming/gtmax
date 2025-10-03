document.addEventListener("DOMContentLoaded", () => {
  const animatedBlocks = document.querySelectorAll(".cia-image[data-animate]");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const anim = el.dataset.animate;

          // Reset animation (force reflow)
          el.classList.remove(anim);
          void el.offsetWidth;
          el.classList.add(anim);

          // Apply delay to <img>
          const img = el.querySelector("img");
          if (img && img.dataset.delay) {
            img.style.animationDelay = (parseInt(img.dataset.delay, 10) / 1000) + "s";
          }
        }
      });
    }, { threshold: 0.5 });

    animatedBlocks.forEach(block => observer.observe(block));
  }
});

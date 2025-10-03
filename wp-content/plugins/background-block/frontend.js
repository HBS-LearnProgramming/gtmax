document.addEventListener("DOMContentLoaded", () => {
  const bgBlocks = document.querySelectorAll(".bg-block");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const block = entry.target;

          // Restart CSS animations (image-animation)
          block.querySelectorAll("[data-animate]").forEach(el => {
            el.classList.remove(el.dataset.animate); // remove
            void el.offsetWidth;                     // force reflow
            el.classList.add(el.dataset.animate);    // re-add
          });

          // Restart typing animations (text-animation-block)
          block.querySelectorAll("[data-typing]").forEach(el => {
            const text = el.getAttribute("data-text") || "";
            const speed = parseInt(el.dataset.speed || "100", 10);
            startTyping(el, text, speed);
          });
        }
      });
    }, { threshold: 0.5 });

    bgBlocks.forEach(block => observer.observe(block));
  }
});

// Typing effect restart
function startTyping(el, text, speed = 100) {
  el.textContent = "";
  let i = 0;
  clearInterval(el._typingInterval); // reset old interval
  el._typingInterval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(el._typingInterval);
  }, speed);
}

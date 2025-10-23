(function () {
  function setTimelineOrientation() {
    const timelines = document.querySelectorAll('.acro-timeline-root');
    timelines.forEach(tl => {
      const userOrientation = tl.dataset.orientation;
      if (window.innerWidth < 700 && userOrientation === 'horizontal') {
        tl.classList.remove('acro-timeline-horizontal');
        tl.classList.add('acro-timeline-vertical');
      } else {
        tl.classList.remove('acro-timeline-vertical');
        tl.classList.add('acro-timeline-' + userOrientation);
      }
    });
  }

  // ✅ Stable duplication method
  function manageTimelineDuplication() {
    const timelines = document.querySelectorAll('.acro-timeline-horizontal .acro-timeline-items');

    timelines.forEach(container => {
      // Remove old duplicate if any
      container.parentElement.querySelectorAll('.acro-timeline-items.duplicate').forEach(dup => dup.remove());

      // Clone and append a clean copy
      const clone = container.cloneNode(true);
      clone.classList.add('duplicate');
      clone.dataset.duplicated = 'true';
      container.parentElement.appendChild(clone);
    });
  }

  function pause_animation() {
    const timeContents = document.querySelectorAll('.acro-timeline-content');
    const timelines = document.querySelectorAll('.acro-timeline-items');

    timeContents.forEach(content => {
      content.addEventListener("mouseenter", () => {
        timelines.forEach(timeline => timeline.classList.add('paused'));
      });

      content.addEventListener("mouseleave", () => {
        timelines.forEach(timeline => timeline.classList.remove('paused'));
      });
    });
  }

  // ✅ Reset animations cleanly, including duplicates
  function reset_animation_on_scroll() {
    const timelines = document.querySelectorAll('.acro-timeline-items');
    // document.querySelectorAll('.acro-timeline-items.duplicate').forEach(dup => dup.remove());
    
    

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const element = entry.target;
        if (entry) {
          element.style.animation = 'none';
          void element.offsetWidth; // trigger reflow
          element.style.animation = '';
        }
      });
    }, { threshold: 0.1 });

    timelines.forEach(timeline => observer.observe(timeline));
  }

  // ✅ Safe reinitialization (when resize or reload)
  function reinitializeTimeline() {
    setTimelineOrientation();
    reset_animation_on_scroll();
    pause_animation();
  }

  window.addEventListener('resize', reinitializeTimeline);
  window.addEventListener('load', reinitializeTimeline);
})();

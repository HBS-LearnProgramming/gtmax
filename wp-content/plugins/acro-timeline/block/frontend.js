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
  
  document.addEventListener("DOMContentLoaded", () => {
    const timelines = document.querySelectorAll(".acro-timeline-root[data-orientation='horizontal']");

    timelines.forEach((timeline) => {
      const timelineItems = timeline.querySelector(".acro-timeline-items");
      if (!timelineItems) return;

      // Create container for left and right buttons
      const btnLeft = document.createElement("button");
      const btnRight = document.createElement("button");
      const buttonBox = document.createElement('div');

      btnLeft.className = "acro-nav-button acro-left-btn";
      btnLeft.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
      btnRight.className = "acro-nav-button acro-right-btn";
      btnRight.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
      buttonBox.className = "acro-button-box";
      buttonBox.appendChild(btnLeft);
      buttonBox.appendChild(btnRight);
      // Insert navigation buttons OUTSIDE the timeline
      timeline.parentElement.style.position = "relative"; // ensure positioning context
      timeline.parentElement.appendChild(buttonBox);

      // Track manual progress control
      let currentPercent = 0;
      const step = 5; // manual move step
      const maxLeft = 20;
      const maxRight = -90;
      let autoTimer;

      function getCurrentPercent() {
        const style = window.getComputedStyle(timelineItems);
        const matrix = new WebKitCSSMatrix(style.transform || style.webkitTransform);
        const translateX = matrix.m41; // X translation in px
        const width = timelineItems.scrollWidth;
        return (translateX / width) * 100; // % based on full width
      }

      function applyProgress(direction) {
        currentPercent = getCurrentPercent();

        // Check bounds
        if ((direction === "left" && currentPercent > maxLeft) ||
            (direction === "right" && currentPercent < maxRight)) {
          currentPercent = direction === "left" ? maxLeft : maxRight;
          timelineItems.style.animation = 'slide-left-to-right 50s linear infinite';
          timelineItems.style.transform = '';
        } else {
          timelineItems.style.animation = 'none';
          timelineItems.style.transform = `translateX(${currentPercent + (direction === "left" ? step : -step)}%)`;
        }
        resetAutoTimer();
      }

      function move(direction) {
        currentPercent += direction === "left" ? step : -step;

        // if (currentPercent > 20) currentPercent = 20;
        // if (currentPercent < -100) currentPercent = -100;
        applyProgress(direction, currentPercent);
      }

      // Button events
      btnLeft.addEventListener("click", () => move("left"));
      btnRight.addEventListener("click", () => move("right"));

      function startAutoAnimation() {
        timelineItems.style.animation = 'slide-left-to-right 50s linear infinite';
        timelineItems.style.transform = '';
      }

      function resetAutoTimer() {
        clearTimeout(autoTimer);
        autoTimer = setTimeout(startAutoAnimation, 10000); // 10s
      }

      // Start the timer initially
      resetAutoTimer();
    });
  });



  window.addEventListener('resize', reinitializeTimeline);
  window.addEventListener('load', reinitializeTimeline);
})();

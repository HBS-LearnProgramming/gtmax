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

  function addTimelineIcons() {
    // Remove any previously added icons (avoid duplication)
    document.querySelectorAll('.timeline-icon').forEach(icon => icon.remove());

    // Loop through each horizontal timeline container
    const containers = document.querySelectorAll('.acro-timeline-horizontal .acro-timeline-items');

    containers.forEach(container => {
      const items = container.querySelectorAll('.acro-timeline-item');

      if (items.length > 0) {
        const lastItem = items[items.length - 1];
        const line = lastItem.querySelector('.acro-timeline-line');

        if (line) {
          // Create and style the icon
          const icon = document.createElement('i');
          icon.className = 'fa-solid fa-arrow-right timeline-icon';
          

          // Append the icon to the last timeline line
          line.appendChild(icon);
        }
      }
    });
  }

  function duplicateTimelineItems() {
    const timelines = document.querySelectorAll('.acro-timeline-horizontal .acro-timeline-items');

    timelines.forEach(container => {
      if (!container.dataset.duplicated) {
        const clone = container.cloneNode(true);
        clone.classList.add('duplicate');
        container.parentElement.appendChild(clone);
        container.dataset.duplicated = 'true';
      }
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

  window.addEventListener('resize', ()=>{
    setTimelineOrientation();
    // addTimelineIcons();
  });
  window.addEventListener('load', ()=>{
    setTimelineOrientation(); duplicateTimelineItems(); 
    // addTimelineIcons(); 
    pause_animation();
  });
})();

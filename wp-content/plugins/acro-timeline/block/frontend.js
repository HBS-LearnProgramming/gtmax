(function () {
  function setTimelineOrientation() {
    const timelines = document.querySelectorAll('.acro-timeline-root');
    timelines.forEach(tl => {
      const userOrientation = tl.dataset.orientation;
      if (window.innerWidth < 1024 && userOrientation === 'horizontal') {
        tl.classList.remove('acro-timeline-horizontal');
        tl.classList.add('acro-timeline-vertical');
      } else {
        tl.classList.remove('acro-timeline-vertical');
        tl.classList.add('acro-timeline-' + userOrientation);
      }
    });
  }

  window.addEventListener('resize', setTimelineOrientation);
  window.addEventListener('load', setTimelineOrientation);
})();

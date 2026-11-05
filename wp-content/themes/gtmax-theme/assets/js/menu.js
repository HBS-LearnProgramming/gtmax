// Header menu: click a parent item to open/close its sub menu dropdown
document.addEventListener('DOMContentLoaded', function () {
    const parents = document.querySelectorAll('.header-menu .menu-item-has-children');
    if (!parents.length) return;

    function closeAll(except) {
        parents.forEach(function (item) {
            if (item === except) return;
            item.classList.remove('is-open');
            const link = item.querySelector(':scope > a');
            if (link) link.setAttribute('aria-expanded', 'false');
        });
    }

    parents.forEach(function (item) {
        const link = item.querySelector(':scope > a');
        if (!link) return;

        link.setAttribute('aria-haspopup', 'true');
        link.setAttribute('aria-expanded', 'false');

        link.addEventListener('click', function (e) {
            e.preventDefault();
            const willOpen = !item.classList.contains('is-open');
            closeAll(item);
            item.classList.toggle('is-open', willOpen);
            link.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        });
    });

    // Close when clicking outside the menu
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.header-menu .menu-item-has-children')) {
            closeAll();
        }
    });

    // Close with the Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeAll();
    });
});

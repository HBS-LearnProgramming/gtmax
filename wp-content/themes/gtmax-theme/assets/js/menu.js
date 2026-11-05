document.addEventListener('DOMContentLoaded', function () {
    /* ---------------------------------------------------------------
       1. Mobile menu: inject a hamburger button into every header nav
       --------------------------------------------------------------- */
    const header = document.getElementById('site-header');
    const menu = header ? header.querySelector('.header-menu') : null;

    if (header && menu) {
        if (!menu.id) menu.id = 'site-header-menu';

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'mobile-menu-toggle';
        toggle.setAttribute('aria-label', 'Open menu');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', menu.id);
        toggle.innerHTML = '<span></span><span></span><span></span>';
        menu.insertAdjacentElement('afterend', toggle);

        function setMobileOpen(open) {
            header.classList.toggle('menu-open', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        }

        toggle.addEventListener('click', function (e) {
            e.stopPropagation();
            setMobileOpen(!header.classList.contains('menu-open'));
        });

        // Close the panel after choosing a real link (not a dropdown parent)
        menu.addEventListener('click', function (e) {
            const link = e.target.closest('a');
            if (link && !link.parentElement.classList.contains('menu-item-has-children')) {
                setMobileOpen(false);
            }
        });

        // Close when tapping outside the header
        document.addEventListener('click', function (e) {
            if (!header.contains(e.target)) setMobileOpen(false);
        });

        // Close with Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') setMobileOpen(false);
        });

        // Reset when resizing back to desktop
        window.addEventListener('resize', function () {
            if (window.innerWidth > 1100) setMobileOpen(false);
        });
    }

    /* ---------------------------------------------------------------
       2. Sub menu: click a parent item to open/close its dropdown
       --------------------------------------------------------------- */
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

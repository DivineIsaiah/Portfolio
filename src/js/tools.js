
export function initToolsSection() {
    const navLinks = document.querySelectorAll('.tools__nav-link');
    const categories = document.querySelectorAll('.tools__category');

    if (!navLinks.length || !categories.length) {
        return;
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const href = link.getAttribute('href');

            if (!href || !href.startsWith('#')) {
                return;
            }

            const targetId = href.slice(1);

            categories.forEach(category => {
                category.classList.toggle(
                    'is-active',
                    category.id === targetId
                );
            });

            navLinks.forEach(navLink => {
                navLink.classList.toggle(
                    'is-active',
                    navLink === link
                );
            });
        });
    });

    const defaultLink = document.querySelector(
        '.tools__nav-link[href="#frontend"]'
    );

    if (defaultLink) {
        defaultLink.click();
    }
}

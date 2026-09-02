export function initToolsSection() {
    const navLinks = document.querySelectorAll('.tools__nav-link');
    const categories = document.querySelectorAll('.tools__category');

    if (!navLinks.length || !categories.length) {
        return;
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);

            categories.forEach(cat => {
                cat.classList.toggle('is-active', cat.id === targetId);
            });

            navLinks.forEach(l => l.classList.toggle('is-active', l === link));
        });
    });

    const defaultLink = document.querySelector('.tools__nav-link[href="#frontend"]');
    if (defaultLink) {
        defaultLink.click();
    }
}
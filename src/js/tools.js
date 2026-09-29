
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

const journeyItems = document.querySelectorAll('.journey__item');

const observerOptions = {
  root: null,
  rootMargin: '-10% 0px -70% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('journey__item--active');
    } else {
      entry.target.classList.remove('journey__item--active');
    }
  });
}, observerOptions);

journeyItems.forEach((item) => observer.observe(item));


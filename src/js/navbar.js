export function initNavbar() {
    const navbar = document.querySelector('.nav-bar');
    if (!navbar) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;

                if (currentScrollY <= 0) {
                  
                    navbar.classList.remove('nav-bar--hidden');
                } else if (currentScrollY < lastScrollY) {
                    
                    navbar.classList.remove('nav-bar--hidden');
                } else if (currentScrollY > lastScrollY) {
                   
                    navbar.classList.add('nav-bar--hidden');
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true;
        }
    });
}
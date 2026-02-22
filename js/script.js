document.addEventListener('DOMContentLoaded', () => {
    // Footer D logo — 3 clicks to open Admin Dashboard
    const footerLogo = document.querySelector('.footer-logo-col img');
    let clickCount = 0;
    let clickTimer;

    if (footerLogo) {
        footerLogo.addEventListener('click', (e) => {
            e.preventDefault();
            clickCount++;

            if (clickCount === 1) {
                clickTimer = setTimeout(() => {
                    clickCount = 0;
                }, 1000);
            }

            if (clickCount === 3) {
                clearTimeout(clickTimer);
                clickCount = 0;
                window.location.href = 'https://devseas-admin.loca.lt/admin/login';
            }
        });
        footerLogo.style.cursor = 'pointer';
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});

// Mobile Dropdown Toggle (Global function called by onclick)
function toggleDropdown(e, link) {
    if (window.innerWidth <= 992) {
        // e.preventDefault(); // Removed because it stops navigation to the products.html page itself.
        const parent = link.parentElement;
        parent.classList.toggle('active');

        // Close other dropdowns
        document.querySelectorAll('.nav-item').forEach(item => {
            if (item !== parent) item.classList.remove('active');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Footer D logo — double-click to open Admin Dashboard
    const footerLogo = document.querySelector('.footer-logo-col img');

    if (footerLogo) {
        footerLogo.addEventListener('dblclick', (e) => {
            e.preventDefault();
            window.location.href = 'https://devseasglobal1.vercel.app/admin/login';
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

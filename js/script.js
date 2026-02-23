document.addEventListener('DOMContentLoaded', () => {
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
        const parent = link.parentElement;
        const dropdown = parent.querySelector('.dropdown-menu');

        // Only prevent navigation and show dropdown if a dropdown menu exists
        if (dropdown) {
            e.preventDefault();
            parent.classList.toggle('active');

            // Close other dropdowns
            document.querySelectorAll('.nav-item').forEach(item => {
                if (item !== parent) item.classList.remove('active');
            });
        }
    }
}

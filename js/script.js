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
});

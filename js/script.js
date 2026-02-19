document.addEventListener('DOMContentLoaded', () => {
    const logoLink = document.querySelector('.logo-container');

    if (logoLink) {
        let clickCount = 0;
        let clickTimer;

        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            clickCount++;

            clearTimeout(clickTimer);

            if (clickCount === 3) {
                // Navigate to the Admin Dashboard (Laravel App)
                // Using the assumed Vercel URL structure based on user's repo name
                // Ideally this should be dynamic or env var, but static site has limits.
                window.location.href = 'https://devseasglobal1.vercel.app/admin/login';
            } else {
                clickTimer = setTimeout(() => {
                    // Navigate to Home if not 3 clicks
                    window.location.href = logoLink.getAttribute('href');
                    clickCount = 0;
                }, 500); // 500ms window to click 3 times
            }
        });
    }
});

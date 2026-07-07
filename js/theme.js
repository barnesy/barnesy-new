export function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');
    const html = document.documentElement;

    if (!themeToggle || !moonIcon || !sunIcon) return;

    // Check for saved theme preference or default to dark
    const currentTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (currentTheme === 'light' || (!currentTheme && prefersLight)) {
        html.setAttribute('data-theme', 'light');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    } else {
        html.removeAttribute('data-theme');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');

        if (currentTheme === 'light') {
            // Switch to dark
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        } else {
            // Switch to light
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        }
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                html.removeAttribute('data-theme');
                moonIcon.classList.remove('hidden');
                sunIcon.classList.add('hidden');
            } else {
                html.setAttribute('data-theme', 'light');
                moonIcon.classList.add('hidden');
                sunIcon.classList.remove('hidden');
            }
        }
    });

    // Contact area theme buttons
    const lightModeBtn = document.getElementById('lightModeBtn');
    const darkModeBtn = document.getElementById('darkModeBtn');

    if (lightModeBtn) {
        lightModeBtn.addEventListener('click', () => {
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        });
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        });
    }
}

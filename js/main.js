import { initNavigation } from './navigation.js';
import { initTheme } from './theme.js';
import { initAnimations } from './animations.js';
import { initHeroEditorial } from './hero-editorial.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTheme();
    initHeroEditorial();
    
    // Only run complex animations on the homepage if the container exists
    if (document.getElementById('tokenAnimation')) {
        initAnimations();
    }
});

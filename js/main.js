import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initHeroEditorial } from './hero-editorial.js';
import { initInteractiveCard } from './interactive-card.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHeroEditorial();
    initInteractiveCard();
    
    // Only run complex animations on the homepage if the container exists
    if (document.getElementById('tokenAnimation')) {
        initAnimations();
    }
});

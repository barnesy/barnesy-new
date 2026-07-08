export function initHeroEditorial() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP or ScrollTrigger not loaded');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const heroContent = document.querySelector('.hero-editorial-content');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (!heroContent) return;

    // 1. Initial Load Animation (Fade & slide up)
    if (heroTitle && heroSubtitle) {
        gsap.to([heroTitle, heroSubtitle], {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.2
        });
    }

    // 2. Subtle Parallax on Scroll
    // The hero content moves down slightly as we scroll, creating a parallax effect
    gsap.to(heroContent, {
        y: 100, // Move down 100px over the scroll duration
        opacity: 0, // Fade out
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-editorial',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // 3. Project Grid Slide-Up Reveal
    // Stagger the project cards as they enter the viewport
    const projectCards = document.querySelectorAll('.editorial-card');
    if (projectCards.length > 0) {
        gsap.fromTo(projectCards, 
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.editorial-grid',
                    start: 'top 95%', // Trigger slightly earlier
                }
            }
        );
    }
}

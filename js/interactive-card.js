export function initInteractiveCard() {
    if (typeof gsap === 'undefined') return;

    const cards = document.querySelectorAll('.interactive-logo-card');
    
    cards.forEach(card => {
        const arrow = card.querySelector('.interactive-cursor');
        if (!arrow) return;

        let isHovering = false;
        let originalX = 0;
        let originalY = 0;

        // GSAP quickTo for highly performant tracking
        const xTo = gsap.quickTo(arrow, "x", {duration: 0.15, ease: "power2.out"});
        const yTo = gsap.quickTo(arrow, "y", {duration: 0.15, ease: "power2.out"});
        const scaleTo = gsap.quickTo(arrow, "scale", {duration: 0.3, ease: "back.out(2)"});

        let originalRect = null;

        card.addEventListener('mouseenter', () => {
            isHovering = true;
            
            if (gsap.getProperty(arrow, "x") === 0) {
                originalRect = arrow.getBoundingClientRect();
                originalX = originalRect.left;
                originalY = originalRect.top;
            }
            
            arrow.style.transition = 'none';
            scaleTo(1.1);
        });

        card.addEventListener('mousemove', (e) => {
            if (!isHovering || originalX === 0 || !originalRect) return;
            
            const tipPercentX = parseFloat(card.getAttribute('data-cursor-x')) || 0;
            const tipPercentY = parseFloat(card.getAttribute('data-cursor-y')) || 0;
            
            const tipScreenX = originalRect.width * tipPercentX;
            const tipScreenY = originalRect.height * tipPercentY;
            
            // Delta from the top-left of the entire SVG to put the tip at the cursor
            const deltaX = e.clientX - originalX - tipScreenX;
            const deltaY = e.clientY - originalY - tipScreenY;
            
            xTo(deltaX);
            yTo(deltaY);
        });

        card.addEventListener('mouseleave', () => {
            isHovering = false;
            
            // Spring back to perfectly complete the logo
            gsap.to(arrow, {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "elastic.out(1.2, 0.5)",
                onComplete: () => {
                    // Restore CSS transition just in case
                    arrow.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                }
            });
        });
    });
}

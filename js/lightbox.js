export function initLightbox() {
    const images = Array.from(document.querySelectorAll('.case-study-image, .img-full, .image-grid img, .case-study-image-container img'));
    if (images.length === 0) return;

    // Create lightbox DOM
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
        <button class="lightbox-close" aria-label="Close lightbox">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <button class="lightbox-prev" aria-label="Previous image">
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="lightbox-next" aria-label="Next image">
            <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
        <div class="lightbox-content">
            <img class="lightbox-image" src="" alt="">
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(overlay);

    const lightboxImg = overlay.querySelector('.lightbox-image');
    const lightboxCaption = overlay.querySelector('.lightbox-caption');
    const btnClose = overlay.querySelector('.lightbox-close');
    const btnPrev = overlay.querySelector('.lightbox-prev');
    const btnNext = overlay.querySelector('.lightbox-next');

    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        updateLightboxContent();
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind lightbox
    }

    function closeLightbox() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightboxContent() {
        const img = images[currentIndex];
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        
        // Find caption if it exists (usually a figcaption or p.image-caption nearby)
        let captionText = '';
        const parent = img.parentElement;
        if (parent.tagName === 'FIGURE') {
            const figcap = parent.querySelector('figcaption');
            if (figcap) captionText = figcap.textContent;
        } else if (parent.tagName === 'A' && parent.parentElement.classList.contains('case-study-image-container')) {
             const p = parent.parentElement.querySelector('.image-caption');
             if (p) captionText = p.textContent;
        } else if (parent.classList.contains('case-study-image-container')) {
            const p = parent.querySelector('.image-caption');
            if (p) captionText = p.textContent;
        }
        
        lightboxCaption.textContent = captionText || img.alt || '';

        // Hide/show navigation buttons based on index
        btnPrev.style.display = currentIndex > 0 ? 'flex' : 'none';
        btnNext.style.display = currentIndex < images.length - 1 ? 'flex' : 'none';
    }

    function nextImage() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateLightboxContent();
        }
    }

    function prevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            updateLightboxContent();
        }
    }

    // Attach click listeners to images
    images.forEach((img, index) => {
        // Prevent default if image is wrapped in a link to itself
        const parentA = img.closest('a');
        if (parentA) {
            parentA.addEventListener('click', (e) => {
                e.preventDefault();
                openLightbox(index);
            });
        } else {
            img.addEventListener('click', () => openLightbox(index));
        }
    });

    // Lightbox controls
    btnClose.addEventListener('click', closeLightbox);
    btnNext.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
    btnPrev.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });

    // Close on background click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.classList.contains('lightbox-content')) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!overlay.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });
}

export function initAnimations() {

            // Check for reduced motion preference
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

            const container = document.getElementById('tokenAnimation');
            const pageLabel = document.getElementById('pageLabel');
            if (!container || !pageLabel) return;

            const tokens = [];
            const isMobile = window.innerWidth < 768;

            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const scale = isMobile ? 0.5 : 0.8;
            const grid = 8 * scale; // 8px grid system

            // Standardized spacing system
            const SPACING = {
                PADDING: 20,        // Edge padding
                NAV_HEIGHT: 48,     // Global nav height
                GAP_LARGE: 24,      // Between major sections
                GAP_MEDIUM: 16,     // Between elements
                GAP_SMALL: 8,       // Within grouped items
                // Calculated positions
                CONTENT_LEFT: -280,  // -300 + 20
                CONTENT_RIGHT: 280,  // 300 - 20
                NAV_TOP: -240,
                NAV_BOTTOM: -192,    // -240 + 48
                HEADER_TOP: -168,    // -192 - 24
                CONTENT_TOP: -136    // -168 - 32 (after header)
            };

            // Define complete page layouts with standard page chrome
            const pageLayouts = {
                'Dashboard': {
                    label: 'Dashboard',
                    position: 'top-left',
                    patterns: [
                        {
                            name: 'Page Container',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 480, x: -300, y: -240, delay: 0 }
                            ]
                        },
                        {
                            name: 'Global Nav',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 48, x: -300, y: -240, delay: 50 },
                                { type: 'square', w: 32, h: 32, x: -288, y: -232, delay: 100 },
                                { type: 'line', w: 80, h: 2, x: -240, y: -224, delay: 150 },
                                { type: 'line', w: 60, h: 2, x: -140, y: -224, delay: 200 },
                                { type: 'circle', w: 32, h: 32, x: 252, y: -232, delay: 250 }
                            ]
                        },
                        {
                            name: 'Page Header',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'line', w: 200, h: 4, x: -280, y: -168, delay: 300 },
                                { type: 'line', w: 160, h: 2, x: -280, y: -152, delay: 350 }
                            ]
                        },
                        {
                            name: 'Metrics Cards',
                            offset: { x: 0, y: 0 },
                            elements: [
                                // Card 1 - starts at -120 (24px below header)
                                { type: 'square', w: 173, h: 100, x: -280, y: -120, delay: 400, featured: true },
                                { type: 'line', w: 80, h: 3, x: -268, y: -100, delay: 450 },
                                { type: 'line', w: 60, h: 2, x: -268, y: -84, delay: 475 },
                                { type: 'line', w: 70, h: 2, x: -268, y: -76, delay: 480 },
                                // Card 2 - 16px gap from card 1
                                { type: 'square', w: 173, h: 100, x: -91, y: -120, delay: 500 },
                                { type: 'line', w: 80, h: 3, x: -79, y: -100, delay: 550 },
                                { type: 'line', w: 55, h: 2, x: -79, y: -84, delay: 575 },
                                { type: 'line', w: 65, h: 2, x: -79, y: -76, delay: 580 },
                                // Card 3 - 16px gap from card 2
                                { type: 'square', w: 173, h: 100, x: 98, y: -120, delay: 600 },
                                { type: 'line', w: 80, h: 3, x: 110, y: -100, delay: 650 },
                                { type: 'line', w: 50, h: 2, x: 110, y: -84, delay: 675 },
                                { type: 'line', w: 60, h: 2, x: 110, y: -76, delay: 680 }
                            ]
                        },
                        {
                            name: 'Main Content',
                            offset: { x: 0, y: 0 },
                            elements: [
                                // Content starts at 4 (24px gap below cards at -120+100=-20, then -20+24=4)
                                { type: 'square', w: 560, h: 216, x: -280, y: 4, delay: 700 },
                                { type: 'line', w: 180, h: 3, x: -260, y: 20, delay: 750 },
                                // Table header columns - 16px below title
                                { type: 'line', w: 100, h: 2, x: -260, y: 44, delay: 800 },
                                { type: 'line', w: 80, h: 2, x: -140, y: 44, delay: 805 },
                                { type: 'line', w: 90, h: 2, x: -40, y: 44, delay: 810 },
                                { type: 'line', w: 85, h: 2, x: 70, y: 44, delay: 815 },
                                // Table rows - 8px gaps
                                { type: 'line', w: 480, h: 2, x: -260, y: 60, delay: 850 },
                                { type: 'line', w: 470, h: 2, x: -260, y: 76, delay: 855 },
                                { type: 'line', w: 465, h: 2, x: -260, y: 92, delay: 860 },
                                { type: 'line', w: 460, h: 2, x: -260, y: 108, delay: 865 },
                                { type: 'line', w: 475, h: 2, x: -260, y: 124, delay: 870 },
                                { type: 'line', w: 455, h: 2, x: -260, y: 140, delay: 875 },
                                { type: 'line', w: 470, h: 2, x: -260, y: 156, delay: 880 },
                                { type: 'line', w: 450, h: 2, x: -260, y: 172, delay: 885 }
                            ]
                        }
                    ]
                },
                'Landing Page': {
                    label: 'Landing Page',
                    position: 'top-right',
                    patterns: [
                        {
                            name: 'Page Container',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 480, x: -300, y: -240, delay: 0 }
                            ]
                        },
                        {
                            name: 'Global Nav',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 48, x: -300, y: -240, delay: 50 },
                                { type: 'square', w: 32, h: 32, x: -288, y: -232, delay: 100 },
                                { type: 'line', w: 80, h: 2, x: -240, y: -224, delay: 150 },
                                { type: 'line', w: 60, h: 2, x: -140, y: -224, delay: 200 }
                            ]
                        },
                        {
                            name: 'Hero Section',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 560, h: 180, x: -280, y: -168, delay: 300, featured: true },
                                { type: 'line', w: 300, h: 4, x: -260, y: -140, delay: 350 },
                                { type: 'line', w: 280, h: 3, x: -260, y: -120, delay: 375 },
                                { type: 'line', w: 420, h: 2, x: -260, y: -100, delay: 400 },
                                { type: 'line', w: 400, h: 2, x: -260, y: -92, delay: 405 },
                                { type: 'line', w: 410, h: 2, x: -260, y: -84, delay: 410 },
                                { type: 'line', w: 380, h: 2, x: -260, y: -76, delay: 415 },
                                { type: 'square', w: 120, h: 40, x: -260, y: -40, delay: 450 }
                            ]
                        },
                        {
                            name: 'Features',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 160, h: 160, x: -280, y: 56, delay: 500 },
                                { type: 'circle', w: 48, h: 48, x: -256, y: 72, delay: 550 },
                                { type: 'line', w: 100, h: 2, x: -268, y: 140, delay: 575 },
                                { type: 'line', w: 120, h: 2, x: -268, y: 152, delay: 580 },
                                { type: 'line', w: 115, h: 2, x: -268, y: 160, delay: 585 },
                                { type: 'line', w: 110, h: 2, x: -268, y: 168, delay: 590 },
                                { type: 'square', w: 160, h: 160, x: -100, y: 56, delay: 650 },
                                { type: 'circle', w: 48, h: 48, x: -76, y: 72, delay: 700 },
                                { type: 'line', w: 90, h: 2, x: -88, y: 140, delay: 725 },
                                { type: 'line', w: 115, h: 2, x: -88, y: 152, delay: 730 },
                                { type: 'line', w: 110, h: 2, x: -88, y: 160, delay: 735 },
                                { type: 'line', w: 120, h: 2, x: -88, y: 168, delay: 740 },
                                { type: 'square', w: 160, h: 160, x: 80, y: 56, delay: 800 },
                                { type: 'circle', w: 48, h: 48, x: 104, y: 72, delay: 850 },
                                { type: 'line', w: 95, h: 2, x: 92, y: 140, delay: 875 },
                                { type: 'line', w: 110, h: 2, x: 92, y: 152, delay: 880 },
                                { type: 'line', w: 120, h: 2, x: 92, y: 160, delay: 885 },
                                { type: 'line', w: 105, h: 2, x: 92, y: 168, delay: 890 }
                            ]
                        }
                    ]
                },
                'Form Page': {
                    label: 'Form Page',
                    position: 'bottom-left',
                    patterns: [
                        {
                            name: 'Page Container',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 480, x: -300, y: -240, delay: 0 }
                            ]
                        },
                        {
                            name: 'Global Nav',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 48, x: -300, y: -240, delay: 50 },
                                { type: 'square', w: 32, h: 32, x: -288, y: -232, delay: 100 },
                                { type: 'line', w: 80, h: 2, x: -240, y: -224, delay: 150 }
                            ]
                        },
                        {
                            name: 'Page Header',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'line', w: 180, h: 4, x: -280, y: -168, delay: 250 },
                                { type: 'line', w: 200, h: 2, x: -280, y: -140, delay: 300 }
                            ]
                        },
                        {
                            name: 'Form',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 400, h: 300, x: -200, y: -100, delay: 350 },
                                { type: 'line', w: 80, h: 2, x: -180, y: -76, delay: 400 },
                                { type: 'square', w: 360, h: 36, x: -180, y: -56, delay: 450 },
                                { type: 'line', w: 100, h: 2, x: -170, y: -48, delay: 475 },
                                { type: 'line', w: 80, h: 2, x: -180, y: -4, delay: 500 },
                                { type: 'square', w: 360, h: 36, x: -180, y: 16, delay: 550 },
                                { type: 'line', w: 95, h: 2, x: -170, y: 24, delay: 575 },
                                { type: 'line', w: 100, h: 2, x: -180, y: 68, delay: 600 },
                                { type: 'line', w: 60, h: 2, x: -180, y: 60, delay: 610 },
                                { type: 'square', w: 360, h: 60, x: -180, y: 88, delay: 650, featured: true },
                                { type: 'line', w: 120, h: 2, x: -170, y: 98, delay: 675 },
                                { type: 'line', w: 110, h: 2, x: -170, y: 106, delay: 680 },
                                { type: 'line', w: 105, h: 2, x: -170, y: 114, delay: 685 },
                                { type: 'square', w: 120, h: 36, x: -60, y: 164, delay: 700 }
                            ]
                        }
                    ]
                },
                'Detail Page': {
                    label: 'Detail Page',
                    position: 'bottom-right',
                    patterns: [
                        {
                            name: 'Page Container',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 480, x: -300, y: -240, delay: 0 }
                            ]
                        },
                        {
                            name: 'Global Nav',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 48, x: -300, y: -240, delay: 50 },
                                { type: 'square', w: 32, h: 32, x: -288, y: -232, delay: 100 },
                                { type: 'line', w: 80, h: 2, x: -240, y: -224, delay: 150 },
                                { type: 'line', w: 60, h: 2, x: -140, y: -224, delay: 200 },
                                { type: 'circle', w: 32, h: 32, x: 252, y: -232, delay: 250 }
                            ]
                        },
                        {
                            name: 'Page Header',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'line', w: 180, h: 4, x: -280, y: -168, delay: 300 },
                                { type: 'line', w: 140, h: 2, x: -280, y: -140, delay: 350 }
                            ]
                        },
                        {
                            name: 'Main Content',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 360, h: 280, x: -280, y: -100, delay: 400, featured: true },
                                { type: 'line', w: 200, h: 3, x: -260, y: -80, delay: 450 },
                                { type: 'line', w: 320, h: 2, x: -260, y: -56, delay: 475 },
                                { type: 'line', w: 310, h: 2, x: -260, y: -48, delay: 480 },
                                { type: 'line', w: 330, h: 2, x: -260, y: -40, delay: 485 },
                                { type: 'line', w: 300, h: 2, x: -260, y: -32, delay: 490 },
                                { type: 'line', w: 325, h: 2, x: -260, y: -24, delay: 495 },
                                { type: 'line', w: 180, h: 3, x: -260, y: -4, delay: 520 },
                                { type: 'line', w: 315, h: 2, x: -260, y: 20, delay: 545 },
                                { type: 'line', w: 305, h: 2, x: -260, y: 28, delay: 550 },
                                { type: 'line', w: 320, h: 2, x: -260, y: 36, delay: 555 },
                                { type: 'line', w: 310, h: 2, x: -260, y: 44, delay: 560 },
                                { type: 'line', w: 300, h: 2, x: -260, y: 52, delay: 565 },
                                { type: 'line', w: 330, h: 2, x: -260, y: 60, delay: 570 }
                            ]
                        },
                        {
                            name: 'Sidebar',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 200, h: 280, x: 92, y: -100, delay: 650 },
                                { type: 'square', w: 160, h: 80, x: 112, y: -80, delay: 700 },
                                { type: 'line', w: 80, h: 2, x: 132, y: -60, delay: 725 },
                                { type: 'line', w: 100, h: 2, x: 132, y: -48, delay: 730 },
                                { type: 'line', w: 90, h: 2, x: 132, y: -40, delay: 735 },
                                { type: 'line', w: 120, h: 2, x: 132, y: 20, delay: 750 },
                                { type: 'line', w: 110, h: 2, x: 132, y: 32, delay: 770 },
                                { type: 'line', w: 105, h: 2, x: 132, y: 40, delay: 775 },
                                { type: 'square', w: 100, h: 32, x: 142, y: 60, delay: 800 }
                            ]
                        }
                    ]
                },
                'Modal': {
                    label: 'Modal Dialog',
                    position: 'center-left',
                    patterns: [
                        {
                            name: 'Page Container',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 480, x: -300, y: -240, delay: 0 }
                            ]
                        },
                        {
                            name: 'Global Nav',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 48, x: -300, y: -240, delay: 50 },
                                { type: 'square', w: 32, h: 32, x: -288, y: -232, delay: 100 },
                                { type: 'line', w: 80, h: 2, x: -240, y: -224, delay: 150 },
                                { type: 'line', w: 60, h: 2, x: -140, y: -224, delay: 200 }
                            ]
                        },
                        {
                            name: 'Page Header',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'line', w: 160, h: 4, x: -280, y: -168, delay: 250 }
                            ]
                        },
                        {
                            name: 'Modal Dialog',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 440, h: 280, x: -220, y: -100, delay: 300, featured: true },
                                { type: 'line', w: 180, h: 3, x: -200, y: -76, delay: 350 },
                                { type: 'circle', w: 28, h: 28, x: 178, y: -82, delay: 400 },
                                { type: 'line', w: 380, h: 2, x: -200, y: -44, delay: 425 },
                                { type: 'line', w: 370, h: 2, x: -200, y: -36, delay: 430 },
                                { type: 'line', w: 390, h: 2, x: -200, y: -28, delay: 435 },
                                { type: 'line', w: 360, h: 2, x: -200, y: -20, delay: 440 },
                                { type: 'line', w: 375, h: 2, x: -200, y: -12, delay: 445 },
                                { type: 'line', w: 380, h: 2, x: -200, y: -4, delay: 450 },
                                { type: 'line', w: 390, h: 2, x: -200, y: 12, delay: 475 },
                                { type: 'line', w: 365, h: 2, x: -200, y: 20, delay: 480 },
                                { type: 'line', w: 370, h: 2, x: -200, y: 28, delay: 485 },
                                { type: 'line', w: 350, h: 2, x: -200, y: 36, delay: 490 },
                                { type: 'square', w: 100, h: 36, x: -60, y: 120, delay: 600 },
                                { type: 'square', w: 100, h: 36, x: 60, y: 120, delay: 650 }
                            ]
                        }
                    ]
                },
                'Drawer': {
                    label: 'Side Drawer',
                    position: 'center-right',
                    patterns: [
                        {
                            name: 'Page Container',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 480, x: -300, y: -240, delay: 0 }
                            ]
                        },
                        {
                            name: 'Global Nav',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 48, x: -300, y: -240, delay: 50 },
                                { type: 'square', w: 32, h: 32, x: -288, y: -232, delay: 100 },
                                { type: 'line', w: 80, h: 2, x: -240, y: -224, delay: 150 },
                                { type: 'circle', w: 28, h: 28, x: -80, y: -234, delay: 200 }
                            ]
                        },
                        {
                            name: 'Page Header',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'line', w: 180, h: 4, x: -280, y: -168, delay: 250 }
                            ]
                        },
                        {
                            name: 'Drawer Panel',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 280, h: 400, x: 12, y: -192, delay: 300, featured: true },
                                { type: 'line', w: 140, h: 3, x: 32, y: -168, delay: 350 },
                                { type: 'line', w: 100, h: 2, x: 32, y: -152, delay: 375 },
                                { type: 'circle', w: 28, h: 28, x: 248, y: -174, delay: 400 },
                                { type: 'square', w: 40, h: 40, x: 32, y: -100, delay: 450 },
                                { type: 'line', w: 120, h: 2, x: 84, y: -88, delay: 475 },
                                { type: 'line', w: 80, h: 2, x: 84, y: -76, delay: 480 },
                                { type: 'square', w: 40, h: 40, x: 32, y: -30, delay: 550 },
                                { type: 'line', w: 110, h: 2, x: 84, y: -18, delay: 575 },
                                { type: 'line', w: 75, h: 2, x: 84, y: -6, delay: 580 },
                                { type: 'square', w: 40, h: 40, x: 32, y: 40, delay: 650 },
                                { type: 'line', w: 100, h: 2, x: 84, y: 52, delay: 675 },
                                { type: 'line', w: 70, h: 2, x: 84, y: 64, delay: 680 }
                            ]
                        }
                    ]
                },
                'Settings Page': {
                    label: 'Settings',
                    position: 'bottom-left',
                    patterns: [
                        {
                            name: 'Page Container',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 480, x: -300, y: -240, delay: 0 }
                            ]
                        },
                        {
                            name: 'Global Nav',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 48, x: -300, y: -240, delay: 50 },
                                { type: 'square', w: 32, h: 32, x: -288, y: -232, delay: 100 },
                                { type: 'line', w: 80, h: 2, x: -240, y: -224, delay: 150 },
                                { type: 'circle', w: 32, h: 32, x: 252, y: -232, delay: 200 }
                            ]
                        },
                        {
                            name: 'Page Header',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'line', w: 180, h: 4, x: -280, y: -168, delay: 250 },
                                { type: 'line', w: 140, h: 2, x: -280, y: -152, delay: 300 }
                            ]
                        },
                        {
                            name: 'Settings Sidebar',
                            offset: { x: 0, y: 0 },
                            elements: [
                                // Sidebar - 200px wide, 24px below header
                                { type: 'square', w: 200, h: 328, x: -280, y: -120, delay: 350 },
                                { type: 'line', w: 120, h: 2, x: -268, y: -104, delay: 400, featured: true },
                                { type: 'line', w: 100, h: 2, x: -268, y: -72, delay: 425 },
                                { type: 'line', w: 110, h: 2, x: -268, y: -40, delay: 450 },
                                { type: 'line', w: 90, h: 2, x: -268, y: -8, delay: 475 },
                                { type: 'line', w: 105, h: 2, x: -268, y: 24, delay: 500 },
                                { type: 'line', w: 95, h: 2, x: -268, y: 56, delay: 525 }
                            ]
                        },
                        {
                            name: 'Settings Content',
                            offset: { x: 0, y: 0 },
                            elements: [
                                // Content area - 16px gap from sidebar
                                { type: 'square', w: 344, h: 328, x: -48, y: -120, delay: 550 },
                                { type: 'line', w: 160, h: 3, x: -28, y: -104, delay: 600 },
                                // Setting row 1 - 24px below title
                                { type: 'line', w: 100, h: 2, x: -28, y: -72, delay: 650 },
                                { type: 'square', w: 48, h: 24, x: 228, y: -76, delay: 675 },
                                { type: 'line', w: 260, h: 2, x: -28, y: -56, delay: 680 },
                                // Setting row 2 - 16px gap
                                { type: 'line', w: 120, h: 2, x: -28, y: -32, delay: 700 },
                                { type: 'square', w: 48, h: 24, x: 228, y: -36, delay: 725 },
                                { type: 'line', w: 240, h: 2, x: -28, y: -16, delay: 730 },
                                // Setting row 3 - 16px gap
                                { type: 'line', w: 140, h: 2, x: -28, y: 8, delay: 750 },
                                { type: 'square', w: 48, h: 24, x: 228, y: 4, delay: 775 },
                                { type: 'line', w: 280, h: 2, x: -28, y: 24, delay: 780 }
                            ]
                        }
                    ]
                },
                'Table Page': {
                    label: 'Data Table',
                    position: 'bottom-right',
                    patterns: [
                        {
                            name: 'Page Container',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 480, x: -300, y: -240, delay: 0 }
                            ]
                        },
                        {
                            name: 'Page Title',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'line', w: 160, h: 4, x: -280, y: -256, delay: 50 }
                            ]
                        },
                        {
                            name: 'Global Nav',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 48, x: -300, y: -240, delay: 100 },
                                { type: 'square', w: 32, h: 32, x: -288, y: -232, delay: 150 },
                                { type: 'line', w: 80, h: 2, x: -240, y: -224, delay: 200 },
                                { type: 'line', w: 60, h: 2, x: -140, y: -224, delay: 250 }
                            ]
                        },
                        {
                            name: 'Table Header',
                            offset: { x: 0, y: 0 },
                            elements: [
                                // Action button - top right, 16px below nav
                                { type: 'square', w: 100, h: 32, x: 172, y: -176, delay: 300 }
                            ]
                        },
                        {
                            name: 'Table',
                            offset: { x: 0, y: 0 },
                            elements: [
                                // Table container - 16px below nav
                                { type: 'square', w: 560, h: 424, x: -280, y: -176, delay: 350, featured: true },
                                // Header row - 12px padding inside table
                                { type: 'line', w: 100, h: 2, x: -268, y: -160, delay: 400 },
                                { type: 'line', w: 120, h: 2, x: -148, y: -160, delay: 405 },
                                { type: 'line', w: 90, h: 2, x: -8, y: -160, delay: 410 },
                                { type: 'line', w: 80, h: 2, x: 102, y: -160, delay: 415 },
                                { type: 'line', w: 60, h: 2, x: 202, y: -160, delay: 420 },
                                // Data rows - 8px gaps
                                { type: 'line', w: 520, h: 2, x: -268, y: -144, delay: 450 },
                                { type: 'line', w: 510, h: 2, x: -268, y: -128, delay: 460 },
                                { type: 'line', w: 515, h: 2, x: -268, y: -112, delay: 470 },
                                { type: 'line', w: 505, h: 2, x: -268, y: -96, delay: 480 },
                                { type: 'line', w: 520, h: 2, x: -268, y: -80, delay: 490 },
                                { type: 'line', w: 500, h: 2, x: -268, y: -64, delay: 500 },
                                { type: 'line', w: 515, h: 2, x: -268, y: -48, delay: 510 },
                                { type: 'line', w: 510, h: 2, x: -268, y: -32, delay: 520 },
                                { type: 'line', w: 520, h: 2, x: -268, y: -16, delay: 530 },
                                { type: 'line', w: 505, h: 2, x: -268, y: 0, delay: 540 },
                                { type: 'line', w: 515, h: 2, x: -268, y: 16, delay: 550 },
                                { type: 'line', w: 510, h: 2, x: -268, y: 32, delay: 560 },
                                { type: 'line', w: 520, h: 2, x: -268, y: 48, delay: 570 },
                                { type: 'line', w: 500, h: 2, x: -268, y: 64, delay: 580 },
                                { type: 'line', w: 515, h: 2, x: -268, y: 80, delay: 590 },
                                { type: 'line', w: 510, h: 2, x: -268, y: 96, delay: 600 },
                                { type: 'line', w: 520, h: 2, x: -268, y: 112, delay: 610 },
                                { type: 'line', w: 505, h: 2, x: -268, y: 128, delay: 620 },
                                { type: 'line', w: 515, h: 2, x: -268, y: 144, delay: 630 },
                                { type: 'line', w: 510, h: 2, x: -268, y: 160, delay: 640 },
                                // Pagination - 24px from bottom of table
                                { type: 'square', w: 32, h: 32, x: 100, y: 200, delay: 700 },
                                { type: 'square', w: 32, h: 32, x: 148, y: 200, delay: 710 },
                                { type: 'square', w: 32, h: 32, x: 196, y: 200, delay: 720 }
                            ]
                        }
                    ]
                },
                'Profile Page': {
                    label: 'User Profile',
                    position: 'center-left',
                    patterns: [
                        {
                            name: 'Page Container',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 480, x: -300, y: -240, delay: 0 }
                            ]
                        },
                        {
                            name: 'Global Nav',
                            offset: { x: 0, y: 0 },
                            elements: [
                                { type: 'square', w: 600, h: 48, x: -300, y: -240, delay: 50 },
                                { type: 'square', w: 32, h: 32, x: -288, y: -232, delay: 100 },
                                { type: 'line', w: 80, h: 2, x: -240, y: -224, delay: 150 },
                                { type: 'circle', w: 32, h: 32, x: 252, y: -232, delay: 200 }
                            ]
                        },
                        {
                            name: 'Profile Header',
                            offset: { x: 0, y: 0 },
                            elements: [
                                // Profile banner - 24px below nav
                                { type: 'square', w: 560, h: 120, x: -280, y: -168, delay: 250, featured: true },
                                // Avatar - centered, overlaps banner
                                { type: 'circle', w: 80, h: 80, x: -40, y: -128, delay: 300 },
                                // Name and bio - 16px below avatar
                                { type: 'line', w: 160, h: 3, x: -80, y: -32, delay: 350 },
                                { type: 'line', w: 200, h: 2, x: -100, y: -16, delay: 375 },
                                { type: 'line', w: 180, h: 2, x: -90, y: -4, delay: 380 }
                            ]
                        },
                        {
                            name: 'Profile Tabs',
                            offset: { x: 0, y: 0 },
                            elements: [
                                // Tabs - 24px below header content
                                { type: 'line', w: 80, h: 2, x: -280, y: 28, delay: 400 },
                                { type: 'line', w: 100, h: 2, x: -184, y: 28, delay: 410 },
                                { type: 'line', w: 90, h: 2, x: -68, y: 28, delay: 420 }
                            ]
                        },
                        {
                            name: 'Profile Content',
                            offset: { x: 0, y: 0 },
                            elements: [
                                // Content cards - 24px below tabs
                                { type: 'square', w: 560, h: 160, x: -280, y: 60, delay: 450 },
                                { type: 'line', w: 140, h: 3, x: -260, y: 76, delay: 500 },
                                { type: 'line', w: 480, h: 2, x: -260, y: 96, delay: 525 },
                                { type: 'line', w: 460, h: 2, x: -260, y: 108, delay: 530 },
                                { type: 'line', w: 470, h: 2, x: -260, y: 120, delay: 535 },
                                { type: 'line', w: 450, h: 2, x: -260, y: 132, delay: 540 }
                            ]
                        }
                    ]
                }
            };

            // Count total primitives needed
            let totalPrimitives = 0;
            Object.values(pageLayouts).forEach(layout => {
                layout.patterns.forEach(pattern => {
                    totalPrimitives += pattern.elements.length;
                });
            });

            // Create cloud of primitives (more than needed for visual richness)
            const cloudSize = Math.max(totalPrimitives * 1.5, 200);
            const typeDistribution = { square: 0.20, line: 0.75, circle: 0.05 };

            for (let i = 0; i < cloudSize; i++) {
                const rand = Math.random();
                let type;
                if (rand < typeDistribution.square) type = 'square';
                else if (rand < typeDistribution.square + typeDistribution.line) type = 'line';
                else type = 'circle';

                const token = document.createElement('div');
                token.className = 'token token-' + type + ' floating';

                // Random size for cloud diversity
                const size = type === 'line' ?
                    { w: (20 + Math.random() * 60) * scale, h: 2 * scale } :
                    { w: (16 + Math.random() * 32) * scale, h: (16 + Math.random() * 32) * scale };

                token.style.width = size.w + 'px';
                token.style.height = size.h + 'px';

                // Random cloud position - spread widely across viewport
                const cloudX = vw * (0.05 + Math.random() * 0.9);
                const cloudY = vh * (0.05 + Math.random() * 0.9);
                token.style.left = cloudX + 'px';
                token.style.top = cloudY + 'px';
                token.style.opacity = '0.15';

                // Stagger animation
                token.style.animationDelay = (Math.random() * 8) + 's';

                container.appendChild(token);
                tokens.push({
                    element: token,
                    type: type,
                    inUse: false,
                    cloudPos: { x: cloudX, y: cloudY },
                    cloudSize: size
                });
            }

            // Assemble a page layout from patterns
            function assemblePageLayout(layoutName) {
                const layout = pageLayouts[layoutName];
                if (!layout) return;

                pageLabel.textContent = layout.label;
                pageLabel.classList.add('visible');

                // Calculate base position based on layout.position
                let baseX = vw / 2;
                let baseY = vh / 2;

                if (layout.position) {
                    const padding = 100; // Padding from viewport edges
                    switch (layout.position) {
                        case 'top-left':
                            baseX = 320 * scale;
                            baseY = 260 * scale;
                            break;
                        case 'top-right':
                            baseX = vw - 320 * scale;
                            baseY = 260 * scale;
                            break;
                        case 'bottom-left':
                            baseX = 320 * scale;
                            baseY = vh - 260 * scale;
                            break;
                        case 'bottom-right':
                            baseX = vw - 320 * scale;
                            baseY = vh - 260 * scale;
                            break;
                        case 'center-left':
                            baseX = 320 * scale;
                            baseY = vh / 2;
                            break;
                        case 'center-right':
                            baseX = vw - 320 * scale;
                            baseY = vh / 2;
                            break;
                    }
                }

                // Assemble all patterns in the layout
                layout.patterns.forEach(pattern => {
                    pattern.elements.forEach((element, index) => {
                        setTimeout(() => {
                            // Find available primitive from cloud
                            const token = tokens.find(t => t.type === element.type && !t.inUse);
                            if (!token) return;

                            token.inUse = true;
                            const el = token.element;

                            // Remove from cloud
                            el.classList.remove('floating');
                            el.classList.add('assembling');

                            // Apply grid alignment
                            const alignedX = Math.round(((pattern.offset.x + element.x) * scale) / grid) * grid;
                            const alignedY = Math.round(((pattern.offset.y + element.y) * scale) / grid) * grid;
                            const alignedW = Math.round((element.w * scale) / grid) * grid;
                            const alignedH = Math.round((element.h * scale) / grid) * grid;

                            // Pull from cloud to position with full opacity
                            el.style.left = (baseX + alignedX) + 'px';
                            el.style.top = (baseY + alignedY) + 'px';
                            el.style.width = alignedW + 'px';
                            el.style.height = alignedH + 'px';
                            el.style.opacity = element.featured ? '1' : '0.8';

                            if (element.featured) {
                                el.classList.add('featured');
                            }
                        }, element.delay);
                    });
                });

                // Calculate total assembly time
                let maxDelay = 0;
                layout.patterns.forEach(pattern => {
                    pattern.elements.forEach(element => {
                        maxDelay = Math.max(maxDelay, element.delay);
                    });
                });

                return maxDelay + 800; // Return time when assembly is complete
            }

            function dissolveToCloud() {
                pageLabel.classList.remove('visible');

                // Return all primitives to cloud
                tokens.forEach(token => {
                    if (token.inUse) {
                        const el = token.element;

                        // Return to cloud position and size
                        el.style.left = token.cloudPos.x + 'px';
                        el.style.top = token.cloudPos.y + 'px';
                        el.style.width = token.cloudSize.w + 'px';
                        el.style.height = token.cloudSize.h + 'px';
                        el.style.opacity = '0.15';

                        el.classList.remove('assembling', 'featured');
                        el.classList.add('floating');

                        token.inUse = false;
                    }
                });
            }

            // Page layout cycling
            const layoutNames = Object.keys(pageLayouts);
            let currentLayoutIndex = 0;

            function cyclePageLayouts() {
                const layoutName = layoutNames[currentLayoutIndex];

                // Assemble the page layout
                const assemblyTime = assemblePageLayout(layoutName);

                // Hold for viewing, then dissolve
                setTimeout(() => {
                    dissolveToCloud();

                    // Wait for dissolution, then build next layout
                    setTimeout(() => {
                        currentLayoutIndex = (currentLayoutIndex + 1) % layoutNames.length;
                        cyclePageLayouts();
                    }, 1500); // Dissolve time
                }, assemblyTime + 4000); // Assembly + hold time
            }

            // Start the generative cycle
            setTimeout(() => {
                cyclePageLayouts();
            }, 1500);

        
}

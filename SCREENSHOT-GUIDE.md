# Design System Case Study - Screenshot Guide

This guide will help you capture and organize screenshots for the barnesy-new design system case study.

## Agent Studio URL
https://seamstressprod-9falxmbtz-chris-barnes-projects-4875159b.vercel.app/dashboard

## Screenshot Directory
All screenshots should be saved to: `~/barnesy-new/images/design-system/`

## Required Screenshots

### 1. Hero/Overview Section
**Filename:** `agent-studio-dashboard.png`
- Full dashboard view showing the main interface
- Shows the overall layout and design
- Best quality, full viewport

### 2. Pattern Library Components
**Filename:** `patterns-v37-overview.png`
- Screenshot showing the pattern library structure
- If available, capture the Figma file or component library view

### 3. Design Tokens
**Filename:** `design-tokens.png`
- Variables and design tokens in action
- Color palette, typography, spacing system
- Can be from Figma or the implemented system

### 4. AI Generation Process
**Filename:** `seamstress-generation.png`
- Screenshot of Seamstress generating code
- Natural language input → code output
- Shows the AI workflow in action

### 5. Component Examples
**Filenames:** `component-*.png` (e.g., `component-cards.png`, `component-forms.png`)
- Individual UI components from Agent Studio
- Shows pattern implementation
- Capture 3-5 key component types

### 6. Before/After Comparison (Optional)
**Filenames:** `before-system.png`, `after-system.png`
- Shows improvement from old to new design system
- Side-by-side comparison if possible

### 7. Mobile Responsive Views
**Filename:** `agent-studio-mobile.png`
- Mobile view of the Agent Studio dashboard
- Shows responsive design implementation

## Screenshot Naming Convention

Use kebab-case for all filenames:
- `agent-studio-dashboard.png`
- `patterns-v37-overview.png`
- `design-tokens.png`
- `seamstress-generation.png`
- `component-[name].png`

## How to Take Screenshots

### Android Native (Recommended)
1. Navigate to the Agent Studio URL in Chrome
2. Press **Power + Volume Down** simultaneously
3. Screenshots save to `/storage/emulated/0/Pictures/Screenshots/`
4. Move to: `~/storage/downloads/` for easy access via Termux

### Chrome Desktop (Best for full-page)
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Set viewport to desired size (1920x1080 recommended)
4. Right-click → "Capture screenshot" or "Capture full size screenshot"

## Moving Screenshots to Project

After taking screenshots on Android:

```bash
# Move from Android Screenshots to project
cp /storage/emulated/0/Pictures/Screenshots/Screenshot_*.png ~/barnesy-new/images/design-system/

# Rename appropriately
mv ~/barnesy-new/images/design-system/Screenshot_*.png ~/barnesy-new/images/design-system/agent-studio-dashboard.png
```

## Image Optimization

Before adding to the case study:
- Recommended width: 1200-1920px
- Format: PNG for UI screenshots (JPG for photos)
- Optimize file size if needed (aim for < 500KB per image)

## Next Steps

After capturing screenshots:
1. Rename files according to the naming convention above
2. Place all images in `~/barnesy-new/images/design-system/`
3. Update `design-system-case-study.html` with actual image references
4. Verify all images display correctly in the browser

## Current Status

- [ ] agent-studio-dashboard.png
- [ ] patterns-v37-overview.png
- [ ] design-tokens.png
- [ ] seamstress-generation.png
- [ ] component-*.png (3-5 examples)
- [ ] Mobile responsive view
- [ ] Before/After comparison (optional)

## Questions?

Review the case study HTML at:
`~/barnesy-new/design-system-case-study.html`

The placeholders show where each image will be inserted.

# Design System Screenshots

This folder contains screenshots for the design system case study.

## Required Screenshots Checklist

### Primary Screenshots (Required)

- [ ] **agent-studio-dashboard.png** - Main dashboard view of Agent Studio
- [ ] **patterns-v37-overview.png** - Pattern library overview from Figma or documentation
- [ ] **design-tokens.png** - Design tokens, variables, color/typography system
- [ ] **seamstress-generation.png** - AI code generation in action

### Component Examples (3-5 recommended)

- [ ] **component-cards.png** - Card component examples
- [ ] **component-forms.png** - Form inputs and controls
- [ ] **component-navigation.png** - Navigation/menu patterns
- [ ] **component-buttons.png** - Button variations (optional)
- [ ] **component-data.png** - Tables/lists/data display (optional)

### Optional Screenshots

- [ ] **agent-studio-mobile.png** - Mobile responsive view
- [ ] **before-system.png** - Old design system (for comparison)
- [ ] **after-system.png** - New design system (for comparison)
- [ ] **workflow-diagram.png** - Design → AI → Code workflow

## Quick Start

### From Android Screenshots folder:

```bash
# Run the helper script
~/barnesy-new/organize-screenshots.sh

# Or manually copy:
cp /storage/emulated/0/Pictures/Screenshots/Screenshot_*.png ~/barnesy-new/images/design-system/

# Then rename appropriately
```

### From Downloads folder:

```bash
cp /storage/emulated/0/Download/*.png ~/barnesy-new/images/design-system/
```

### Verify screenshots are in place:

```bash
ls -lh ~/barnesy-new/images/design-system/
```

## Testing the Case Study

Open in browser:
```bash
termux-open ~/barnesy-new/design-system-case-study.html
```

Or if you have a local server running:
```bash
cd ~/barnesy-new
python -m http.server 8000
# Then visit: http://localhost:8000/design-system-case-study.html
```

## Screenshot Specifications

- **Format:** PNG preferred (JPG acceptable for photos)
- **Width:** 1200-1920px recommended
- **Aspect ratio:** 16:9 or native browser viewport
- **File size:** < 500KB per image (optimize if larger)

## Need Help?

See the main SCREENSHOT-GUIDE.md in the parent directory for detailed instructions.

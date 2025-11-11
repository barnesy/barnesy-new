#!/data/data/com.termux/files/usr/bin/bash

# Screenshot Organization Helper Script
# This script helps move and rename screenshots for the design system case study

set -e

DEST_DIR="$HOME/barnesy-new/images/design-system"
SCREENSHOTS_DIR="/storage/emulated/0/Pictures/Screenshots"
DOWNLOADS_DIR="/storage/emulated/0/Download"

echo "=================================================="
echo " Design System Screenshot Organizer"
echo "=================================================="
echo ""

# Check if destination directory exists
if [ ! -d "$DEST_DIR" ]; then
    echo "Creating destination directory: $DEST_DIR"
    mkdir -p "$DEST_DIR"
fi

# Function to list recent screenshots
list_screenshots() {
    echo "Recent screenshots:"
    echo ""

    if [ -d "$SCREENSHOTS_DIR" ]; then
        echo "From Android Screenshots:"
        ls -lt "$SCREENSHOTS_DIR"/*.png 2>/dev/null | head -10 || echo "  No PNG files found"
    fi

    echo ""
    if [ -d "$DOWNLOADS_DIR" ]; then
        echo "From Downloads:"
        ls -lt "$DOWNLOADS_DIR"/*.png 2>/dev/null | head -10 || echo "  No PNG files found"
    fi
}

# Function to copy and rename screenshot
copy_screenshot() {
    local source_file="$1"
    local dest_name="$2"

    if [ -f "$source_file" ]; then
        cp "$source_file" "$DEST_DIR/$dest_name"
        echo "✓ Copied: $dest_name"
    else
        echo "✗ File not found: $source_file"
    fi
}

# Main menu
echo "What would you like to do?"
echo ""
echo "1) List recent screenshots"
echo "2) Copy specific screenshot"
echo "3) Copy all from Screenshots folder"
echo "4) View current case study images"
echo "5) Exit"
echo ""
read -p "Enter choice [1-5]: " choice

case $choice in
    1)
        list_screenshots
        ;;
    2)
        echo ""
        read -p "Enter source path: " source_path
        read -p "Enter destination name (e.g., agent-studio-dashboard.png): " dest_name
        copy_screenshot "$source_path" "$dest_name"
        ;;
    3)
        echo ""
        echo "Copying all screenshots to $DEST_DIR..."
        if [ -d "$SCREENSHOTS_DIR" ]; then
            cp "$SCREENSHOTS_DIR"/*.png "$DEST_DIR/" 2>/dev/null && echo "✓ Copied screenshots" || echo "✗ No screenshots found"
        fi
        ;;
    4)
        echo ""
        echo "Current images in $DEST_DIR:"
        ls -lh "$DEST_DIR" 2>/dev/null || echo "  Directory is empty"
        ;;
    5)
        echo "Exiting..."
        exit 0
        ;;
    *)
        echo "Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "Done! Check SCREENSHOT-GUIDE.md for naming conventions."
echo ""

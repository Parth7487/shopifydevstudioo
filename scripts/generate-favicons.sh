#!/bin/bash

# Generate favicon PNG files from SVG
# Requires ImageMagick to be installed: sudo apt-get install imagemagick

echo "Generating favicon PNG files from SVG..."

# Create scripts directory if it doesn't exist
mkdir -p scripts

# Generate different sizes
convert public/favicon.svg -resize 16x16 public/favicon-16x16.png
convert public/favicon.svg -resize 32x32 public/favicon-32x32.png
convert public/favicon.svg -resize 180x180 public/apple-touch-icon.png

# Generate ICO file (16x16 and 32x32 combined)
convert public/favicon.svg -resize 16x16 favicon-16.png
convert public/favicon.svg -resize 32x32 favicon-32.png
convert favicon-16.png favicon-32.png public/favicon.ico

# Clean up temporary files
rm favicon-16.png favicon-32.png

echo "Favicon generation complete!"
echo "Generated files:"
echo "  - public/favicon-16x16.png"
echo "  - public/favicon-32x32.png"
echo "  - public/apple-touch-icon.png"
echo "  - public/favicon.ico" 
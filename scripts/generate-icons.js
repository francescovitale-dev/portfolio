const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceImage = path.join(__dirname, '../src/assets/images/og_image.png');
const outputDir = path.join(__dirname, '../public');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate favicon.ico (multiple sizes)
sharp(sourceImage)
  .resize(32, 32)
  .toFile(path.join(outputDir, 'favicon-32x32.png'))
  .then(() => {
    sharp(sourceImage)
      .resize(16, 16)
      .toFile(path.join(outputDir, 'favicon-16x16.png'))
      .then(() => {
        // Convert to .ico format
        sharp(sourceImage)
          .resize(64, 64)
          .toFile(path.join(outputDir, 'favicon.ico'));
      });
  });

// Generate apple-touch-icon.png
sharp(sourceImage)
  .resize(180, 180)
  .toFile(path.join(outputDir, 'apple-touch-icon.png'));

// Generate logo192.png
sharp(sourceImage)
  .resize(192, 192)
  .toFile(path.join(outputDir, 'logo192.png'));

// Generate logo512.png
sharp(sourceImage)
  .resize(512, 512)
  .toFile(path.join(outputDir, 'logo512.png'));

// Generate mstile-150x150.png
sharp(sourceImage)
  .resize(150, 150)
  .toFile(path.join(outputDir, 'mstile-150x150.png'));

console.log('Icon generation completed!'); 
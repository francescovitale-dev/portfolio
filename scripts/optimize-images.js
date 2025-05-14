const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../src/assets/images');

// Function to optimize a single image
async function optimizeImage(filePath) {
  const fileName = path.basename(filePath);
  const ext = path.extname(filePath).toLowerCase();
  
  // Skip if not an image
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    return;
  }

  try {
    // Create optimized version
    await sharp(filePath)
      .webp({ quality: 80 }) // Convert to WebP with 80% quality
      .toFile(filePath.replace(ext, '.webp'));

    // Create a smaller version for thumbnails
    await sharp(filePath)
      .resize(400, 400, { fit: 'inside' })
      .webp({ quality: 70 })
      .toFile(filePath.replace(ext, '-thumb.webp'));

    console.log(`Optimized: ${fileName}`);
  } catch (error) {
    console.error(`Error optimizing ${fileName}:`, error);
  }
}

// Function to process all images in a directory
async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      await optimizeImage(filePath);
    }
  }
}

// Start processing
console.log('Starting image optimization...');
processDirectory(imageDir)
  .then(() => console.log('Image optimization completed!'))
  .catch(error => console.error('Error during optimization:', error)); 
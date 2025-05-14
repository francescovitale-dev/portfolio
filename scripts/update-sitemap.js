const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

// Read the current sitemap
fs.readFile(sitemapPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading sitemap:', err);
    return;
  }

  // Get current date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Replace all lastmod dates with today's date
  const updatedSitemap = data.replace(
    /<lastmod>.*?<\/lastmod>/g,
    `<lastmod>${today}</lastmod>`
  );

  // Write the updated sitemap back to file
  fs.writeFile(sitemapPath, updatedSitemap, 'utf8', (err) => {
    if (err) {
      console.error('Error writing sitemap:', err);
      return;
    }
    console.log('Sitemap updated successfully!');
  });
}); 
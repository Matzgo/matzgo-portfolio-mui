const fs = require('fs');
const path = require('path');

const htaccessPath = path.join(__dirname, 'build', '.htaccess'); // or './.htaccess' if not inside 'dist'
const lineToAdd = 'ErrorDocument 404 /index.html';

fs.readFile(htaccessPath, 'utf8', (err, data) => {
  if (err && err.code !== 'ENOENT') {
    console.error('Error reading .htaccess:', err);
    return;
  }

  const alreadyExists = data && data.includes(lineToAdd);
  if (alreadyExists) {
    console.log('.htaccess already contains the line.');
    return;
  }

  const updatedContent = (data || '') + '\n' + lineToAdd + '\n';
  fs.writeFile(htaccessPath, updatedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to .htaccess:', err);
    } else {
      console.log('Successfully updated .htaccess.');
    }
  });
});

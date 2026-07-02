const fs = require('fs');
const content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');
// Find all strings like children:"Something"
const matches = content.match(/children:\s*"([^"]+)"/g) || [];
const unique = [...new Set(matches)];
console.log(unique.join('\n'));

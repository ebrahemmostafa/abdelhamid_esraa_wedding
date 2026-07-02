const fs = require('fs');
const content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');
const matches = content.match(/https?:\/\/[^\s\"']+/ig) || [];
console.log([...new Set(matches)].filter(url => url.includes('map') || url.includes('goo.gl') || url.includes('location')).join('\n'));

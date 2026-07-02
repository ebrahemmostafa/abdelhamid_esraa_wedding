const fs = require('fs');
const content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

const regex = /https?:\/\/(?:www\.)?google\.com\/maps[^\s"']+|https?:\/\/maps\.app\.goo\.gl[^\s"']+/gi;
const matches = content.match(regex) || [];
console.log([...new Set(matches)].join('\n'));

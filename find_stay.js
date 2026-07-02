const fs = require('fs');
const content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

const matches = content.match(/id=\"[a-zA-Z0-9-]*stay[a-zA-Z0-9-]*\"/ig);
console.log(matches);

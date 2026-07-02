const fs = require('fs');
const content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

// Find declaration
let decIdx = content.indexOf('vs = {');
console.log(content.substring(decIdx - 50, decIdx + 250));

// Find usages
let idx = content.indexOf('vs.');
while(idx !== -1) {
    console.log(content.substring(idx - 100, idx + 200));
    idx = content.indexOf('vs.', idx + 1);
}

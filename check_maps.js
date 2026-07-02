const fs = require('fs');
const content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

// Find all occurrences of openMaps
let idx = content.indexOf('openMaps');
while (idx !== -1) {
    console.log(content.substring(idx - 150, idx + 150));
    idx = content.indexOf('openMaps', idx + 1);
}

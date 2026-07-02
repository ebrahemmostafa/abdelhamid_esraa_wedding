const fs = require('fs');
const content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

let idx = content.indexOf('_blank');
while (idx !== -1) {
    console.log(content.substring(idx - 150, idx + 150));
    idx = content.indexOf('_blank', idx + 1);
}

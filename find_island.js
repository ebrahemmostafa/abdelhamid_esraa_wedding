const fs = require('fs');
const content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

const key = 'attire: "Island Chic"';
let idx = content.indexOf(key);
if (idx !== -1) {
    console.log(content.substring(idx - 1500, idx + 1500));
}

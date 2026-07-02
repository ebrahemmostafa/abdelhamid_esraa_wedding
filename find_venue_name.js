const fs = require('fs');
const content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

const key = 'venue_name: "VIP HALL The Great Sea Street"';
let idx = content.indexOf(key);
console.log(content.substring(idx - 200, idx + 500));

const fs = require('fs');
const content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

const key = 'accommodation.title';
let idx = content.indexOf(key);
while(idx !== -1) {
    if (content.substring(idx - 10, idx).includes('(')) {
        console.log(content.substring(idx - 300, idx + 500));
    }
    idx = content.indexOf(key, idx + 1);
}

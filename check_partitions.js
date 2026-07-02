const fs = require('fs');
let content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');
console.log('rsvp events:', content.includes('children: e("rsvp.whichEvents")'));
console.log('dress code:', content.includes('"Dress Code"'));
console.log('stay:', content.includes('"Transportation and accommodation'));

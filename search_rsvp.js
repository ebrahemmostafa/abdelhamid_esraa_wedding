const fs = require('fs');
const content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');
const idx = content.indexOf('rsvp.whichEvents');
let currentIdx = content.indexOf('rsvp.whichEvents', idx + 1);
while(currentIdx !== -1) {
    console.log(content.substring(currentIdx - 200, currentIdx + 500));
    currentIdx = content.indexOf('rsvp.whichEvents', currentIdx + 1);
}

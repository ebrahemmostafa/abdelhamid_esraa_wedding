const fs = require('fs');
const content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

function searchAround(searchStr, contextBefore = 500, contextAfter = 1000) {
    let idx = content.indexOf(searchStr);
    if (idx !== -1) {
        console.log(`\n\n--- MATCH for "${searchStr}" ---`);
        console.log(content.substring(idx - contextBefore, idx + contextAfter));
    }
}

// RSVP Events section:
searchAround('children: e("rsvp.whichEvents")');

// Your Stay section:
searchAround('children: ["Your ", h.jsx("span", {');

// Dress code section:
searchAround('dress.title');

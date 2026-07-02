const fs = require('fs');
let content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

// We don't want to replace "abdelhamid_esraa_wedding"
// So let's first mask it
content = content.split('abdelhamid_esraa_wedding').join('__ABDELHAMID_ESRAA_REPO__');

// Now replace different casings of wedding -> engagement
content = content.replace(/wedding/g, 'engagement');
content = content.replace(/Wedding/g, 'Engagement');
content = content.replace(/WEDDING/g, 'ENGAGEMENT');

// German translations
content = content.replace(/Hochzeit/g, 'Verlobung');
content = content.replace(/hochzeit/g, 'verlobung');

// Unmask the repo name
content = content.split('__ABDELHAMID_ESRAA_REPO__').join('abdelhamid_esraa_wedding');

fs.writeFileSync('js/index-B3R5Kdbb.js', content);
console.log('Replaced wedding with engagement in JS file.');

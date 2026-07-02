const fs = require('fs');
let content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

// Replace the date variable for the countdown
content = content.replace(/engagement_date:\s*"2026-07-26"/g, 'engagement_date: "2026-07-26T20:00:00"');

fs.writeFileSync('js/index-B3R5Kdbb.js', content);
console.log('Countdown updated!');

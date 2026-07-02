const fs = require('fs');
let content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

// English full dates
content = content.replace(/28 June – 01 July 2027/g, 'Sunday 26 July 2026');
content = content.replace(/01 July 2027/g, 'Sunday 26 July 2026');
content = content.replace(/28 June 2027/g, 'Sunday 26 July 2026');
content = content.replace(/29 June 2027/g, 'Sunday 26 July 2026');

// Short dates (English)
content = content.replace(/1st July/g, '26th July');
content = content.replace(/28th June/g, '26th July');
content = content.replace(/29th June/g, '26th July');

// Times
content = content.replace(/6:00 PM/g, '8:00 PM');
content = content.replace(/7\.30pm/g, '8:00 pm');
content = content.replace(/4\.30pm/g, '8:00 pm');
content = content.replace(/18:30 Uhr/g, '20:00 Uhr');
content = content.replace(/18:00 Uhr/g, '20:00 Uhr');
content = content.replace(/18:30/g, '20:00');

// Formats
content = content.replace(/2027-07-01/g, '2026-07-26');
content = content.replace(/20270628\/20270702/g, '20260726/20260727');

// German full dates
content = content.replace(/28\. Juni – 01\. Juli 2027/g, 'Sonntag, 26. Juli 2026');
content = content.replace(/01\. Juli 2027/g, 'Sonntag, 26. Juli 2026');
content = content.replace(/28\. Juni 2027/g, 'Sonntag, 26. Juli 2026');

// Short dates (German)
content = content.replace(/01\. Juli/g, '26. Juli');

// Replace any remaining standalone "2027" floating texts
content = content.replace(/children:\s*"2027"/g, 'children: "2026"');
content = content.replace(/children:\s*"28 June"/g, 'children: "Sunday"');
content = content.replace(/children:\s*"01 July"/g, 'children: "26 July 2026"');
content = content.replace(/children:\s*\["28 June ",/g, 'children: ["26 July ",');
content = content.replace(/"Until 01 July 2027"/g, '"Until Sunday 26 July 2026 8:00 pm"');

// Fix potential duplicates if replaced strings already contained the target
// Just to be safe, though these replaces don't overlap dangerously.

fs.writeFileSync('js/index-B3R5Kdbb.js', content);
console.log('Dates and times updated successfully!');

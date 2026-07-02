const fs = require('fs');
const content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

const dressMatches = content.match(/children:\s*e\(\"dress\.title\"\)/g);
if (dressMatches) {
    console.log('Found dress.title usage in JSX!');
    let idx = content.indexOf('children: e("dress.title")');
    console.log(content.substring(idx - 500, idx + 1000));
} else {
    // maybe it is not translated or using another format
    let idx = content.indexOf('Dress Code');
    if (idx !== -1) {
        console.log(content.substring(idx - 500, idx + 500));
    }
}

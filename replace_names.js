const fs = require('fs');

function replaceInFile(filePath, replacements) {
    let content = fs.readFileSync(filePath, 'utf8');
    for (const [search, replace] of replacements) {
        content = content.split(search).join(replace);
    }
    fs.writeFileSync(filePath, content);
}

// 1. Update index.html
replaceInFile('index.html', [
    ['Maldives-demo', 'Abdelhamed & Esraa']
]);

// 2. Update js/index-B3R5Kdbb.js
replaceInFile('js/index-B3R5Kdbb.js', [
    ['Rosie', 'Abdelhamed'],
    ['Scott', 'Esraa']
]);

console.log('Names updated successfully!');

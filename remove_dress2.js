const fs = require('fs');
let content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

const dressCodeStr = 'children: "Dress Code"';
const startIdx = content.indexOf(dressCodeStr);
if (startIdx !== -1) {
    // Find where the section starts. It starts with: `}), h.jsxs(he.div, {` and contains `className: "text-center",`
    const searchBefore = '}), h.jsxs(he.div, {\n                initial: {\n                    opacity: 0,';
    const beforeIdx = content.lastIndexOf('}), h.jsxs(he.div, {', startIdx);
    
    // We want to remove from beforeIdx to the end of that section.
    // That section is followed by another `}), h.jsxs(he.div, {` or `})`
    // Let's just find the end of `e.title))]` or similar.
    const searchAfter = '}, e.title))\n                })]\n            })]';
    const afterIdx = content.indexOf('}, e.title))\n                })]\n            })]', startIdx);
    
    if (beforeIdx !== -1 && afterIdx !== -1) {
        const fullBlock = content.substring(beforeIdx, afterIdx + searchAfter.length);
        console.log("Removing block of size:", fullBlock.length);
        content = content.replace(fullBlock, '            })]'); // keeping the closing bracket of the previous element
        fs.writeFileSync('js/index-B3R5Kdbb.js', content);
        console.log('Dress Code removed!');
    } else {
        console.log('Could not find before/after idx');
    }
}

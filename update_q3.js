const fs = require('fs');
let content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

const q3Target = 'date: "VIP HALL The Great Sea Street · Sunday 26 July 2026 · 8:00 pm"';
const q3Replace = 'date: h.jsxs(h.Fragment, {children: [h.jsx("a", {href: "https://maps.app.goo.gl/btM3xGSjJtN5p6W68?g_st=iw", target: "_blank", style: {textDecoration: "underline"}, children: "VIP HALL The Great Sea Street"}), " · Sunday 26 July 2026 · 8:00 pm"]})';

content = content.replace(q3Target, q3Replace);

fs.writeFileSync('js/index-B3R5Kdbb.js', content);
console.log('q3 updated with map link!');

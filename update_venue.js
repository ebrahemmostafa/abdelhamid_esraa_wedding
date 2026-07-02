const fs = require('fs');
let content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

const target = 'date: "Venue to be revealed · Sunday 26 July 2026"';
const replace = 'date: h.jsxs(h.Fragment, {children: [h.jsx("a", {href: "https://maps.app.goo.gl/btM3xGSjJtN5p6W68?g_st=iw", target: "_blank", style: {textDecoration: "underline"}, children: "VIP HALL The Great Sea Street"}), " · Sunday 26 July 2026"]})';

content = content.replace(target, replace);
fs.writeFileSync('js/index-B3R5Kdbb.js', content);
console.log('Replaced Venue to be revealed');

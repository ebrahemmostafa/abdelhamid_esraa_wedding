const fs = require('fs');
let content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

// Replace 1: In the UI where it renders as p
// h.jsx("p", { className: "font-display md:text-4xl text-primary mt-1 text-3xl leading-none", children: "VIP HALL The Great Sea Street" })
content = content.replace(/h\.jsx\(\"p\", \{([^}]*)children:\s*\"VIP HALL The Great Sea Street\"/g, 
'h.jsx("a", {$1href: "https://maps.app.goo.gl/btM3xGSjJtN5p6W68?g_st=iw", target: "_blank", style: {textDecoration: "underline"}, children: "VIP HALL The Great Sea Street"');

// Replace 2: In the UI where it renders as another p (italic)
// h.jsx("p", { className: "font-body text-foreground/60 italic tracking-wide mt-2", children: "VIP HALL The Great Sea Street" })
// (Covered by regex above)

// Replace 3: In the translation dictionary
// We can just add HTML tags inside the string if dangerouslySetInnerHTML is used, but it's not.
// Wait! If the user clicks the venue location on the Hero section...
// In hero component:
content = content.replace(/venue_location:\s*\"VIP HALL The Great Sea Street\"/g, 
'venue_location: "VIP HALL The Great Sea Street"'); // Don't touch tc object if not needed.

// But wait, what if the Hero section renders venue_location directly as a string?
// `children: tc.venue_location`
// Let's replace the Hero location rendering:
content = content.replace(/children:\s*tc\.venue_location/g, 
'children: h.jsx("a", {href: "https://maps.app.goo.gl/btM3xGSjJtN5p6W68?g_st=iw", target: "_blank", style: {textDecoration: "underline"}, children: tc.venue_location})');

// Or where it's used as:
content = content.replace(/children:\s*e\.venue_location/g, 
'children: h.jsx("a", {href: "https://maps.app.goo.gl/btM3xGSjJtN5p6W68?g_st=iw", target: "_blank", style: {textDecoration: "underline"}, children: e.venue_location})');


fs.writeFileSync('js/index-B3R5Kdbb.js', content);
console.log('Location links added successfully!');

const fs = require('fs');
let content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

// 1. Remove from q3() array
content = content.replace(
`        t = [{
            label: "Welcome Dinner",
            date: "VIP HALL The Great Sea Street · Sunday 26 July 2026 · 8:00 pm"
        }, {
            label: "Engagement Party",`,
`        t = [{
            label: "Engagement Party",`
);

// 2. Remove from aF array (Line 22990)
content = content.replace(
`    aF = [{
        title: "Welcome Dinner",
        date: "26th July 2027",
        attire: "Island Chic",
        palette: [{
            name: "White",
            hex: "#F5F1EA"
        }]
    }, {
        title: "Engagement Party",`,
`    aF = [{
        title: "Engagement Party",`
);

content = content.replace(
`    aF = [{
        title: "Welcome Dinner",
        date: "26th July 2026",
        attire: "Island Chic",
        palette: [{
            name: "White",
            hex: "#F5F1EA"
        }]
    }, {
        title: "Engagement Party",`,
`    aF = [{
        title: "Engagement Party",`
);

// 3. Remove from RSVP list in UU() (Line 31838)
content = content.replace(
`    } = Xu(), t = [{
        id: "welcome-dinner",
        label: "Welcome Dinner — Sunday 26 July 2026",
        hasAllergies: !0
    }, {
        id: "engagement",`,
`    } = Xu(), t = [{
        id: "engagement",`
);

// 4. Remove from Admin list (Line 35378)
content = content.replace(
`        D = [{
            id: "welcome-dinner",
            label: "Welcome Dinner — 28 June"
        }, {
            id: "engagement",`,
`        D = [{
            id: "engagement",`
);

content = content.replace(
`        D = [{
            id: "welcome-dinner",
            label: "Welcome Dinner — Sunday 26 July 2026"
        }, {
            id: "engagement",`,
`        D = [{
            id: "engagement",`
);

fs.writeFileSync('js/index-B3R5Kdbb.js', content);
console.log('Welcome Dinner removed successfully!');

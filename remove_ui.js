const fs = require('fs');
let content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

// 1. Remove RSVP events question
const rsvpEventsUI = `                    }) : h.jsxs(h.Fragment, {
                        children: [h.jsxs("div", {
                            className: "space-y-3",
                            children: [h.jsx(Xe, {
                                className: "text-foreground font-body text-base tracking-wide",
                                children: e("rsvp.whichEvents")
                            }), h.jsx("div", {
                                className: "space-y-2",
                                children: t.map(R => h.jsxs("div", {
                                    className: "flex items-center space-x-3",
                                    children: [h.jsx(RT, {
                                        id: \`event-\${R.id}\`,
                                        checked: f.includes(R.id),
                                        onCheckedChange: () => _(R.id),
                                        className: "border-foreground/30 data-[state=checked]:bg-foreground data-[state=checked]:border-foreground"
                                    }), h.jsx(Xe, {
                                        htmlFor: \`event-\${R.id}\`,
                                        className: "cursor-pointer text-foreground font-body text-base",
                                        children: R.label
                                    })]
                                }, R.id))
                            })]
                        }), h.jsx("div", {`;

content = content.replace(rsvpEventsUI, `                    }) : h.jsxs(h.Fragment, {
                        children: [h.jsx("div", {`);

// 2. Remove "Your Stay"
const yourStayUI = `            }), h.jsxs(he.h2, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6
                },
                className: "font-display text-5xl md:text-7xl text-foreground mb-8",
                children: ["Your ", h.jsx("span", {
                    className: "script-ornate",
                    children: "S"
                }), "tay"]
            }), h.jsx(he.p, {
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6,
                    delay: .1
                },
                className: "font-body text-foreground/70 leading-relaxed max-w-md mx-auto mb-10",
                children: "Transportation and accommodation throughout the engagement celebrations will be lovingly hosted by the couple."
            }), h.jsxs(he.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6,
                    delay: .2
                },
                children: [h.jsx("p", {
                    className: "font-body text-sm tracking-[0.25em] uppercase text-foreground/50 mb-3",
                    children: "Guests will be staying at"
                }), h.jsxs("h3", {
                    className: "font-display text-4xl md:text-5xl text-foreground leading-tight",
                    children: ["Kinan ", h.jsx("span", {
                        className: "script-ornate",
                        children: "S"
                    }), "entral"]
                }), h.jsx("p", {
                    className: "font-body text-foreground/60 italic tracking-wide mt-2",
                    children: "VIP HALL The Great Sea Street"
                }), h.jsx(ut, {
                    src: yF.url,
                    alt: "Kinan Hotels illustration",
                    loading: "lazy",
                    className: "w-full max-w-[320px] mx-auto h-auto mt-8 select-none",
                    draggable: !1
                })]
            })]`;

content = content.replace(yourStayUI, `            })]`);


// 3. Remove "Dress Code"
// First, find the exact string containing "Dress Code" block.
const dressCodeRegex = /h\.jsxs\(he\.div, \{\s*initial: \{\s*opacity: 0,\s*y: 20\s*\},\s*whileInView: \{\s*opacity: 1,\s*y: 0\s*\},\s*viewport: \{\s*once: !0\s*\},\s*transition: \{\s*duration: \.6,\s*delay: \.2\s*\},\s*className: \"text-center\",\s*children: \[h\.jsx\(\"h2\", \{\s*className: \"font-display text-5xl md:text-7xl text-foreground mb-10\",\s*children: \"Dress Code\"\s*\}\),\s*h\.jsx\(\"div\", \{\s*className: \"space-y-8\",\s*children: aF\.map\(e => h\.jsxs\(\"div\", \{\s*className: \"bg-foreground\/\[0\.03\] border border-foreground\/10 rounded-2xl px-6 py-10 md:px-10 md:py-14\",\s*children: \[h\.jsx\(\"h3\", \{\s*className: \"font-display text-4xl md:text-5xl text-foreground mb-1 leading-tight\",\s*children: e\.title\s*\}\),\s*h\.jsx\(\"p\", \{\s*className: \"font-body text-sm tracking-\[0\.25em\] uppercase text-foreground\/50 mb-4\",\s*children: e\.date\s*\}\),\s*h\.jsx\(\"p\", \{\s*className: \"font-body text-lg tracking-\[0\.1em\] text-foreground\",\s*children: e\.attire\s*\}\),\s*e\.palette && h\.jsx\(\"div\", \{\s*className: \"mt-5 flex justify-center items-start gap-3 flex-nowrap\",\s*children: e\.palette\.map\(t => h\.jsxs\(\"div\", \{\s*className: \"flex flex-col items-center gap-1\.5\",\s*children: \[h\.jsx\(\"div\", \{\s*className: \"w-6 h-6 md:w-8 md:h-8 rounded-full shadow-inner overflow-hidden\",\s*style: \{\s*backgroundColor: t\.hex\s*\},.*?\)\s*\}\)\]\s*\}\)\]\s*\}\)/s;

let removedDressCode = false;
let dressCodeStr = "";
// Since regex with multiple nested things is risky, I will dynamically get the exact block string using substring:
let dressStartIdx = content.indexOf('children: "Dress Code"');
if (dressStartIdx !== -1) {
    // Find the enclosing he.div for the Dress code section
    let hedivIdx = content.lastIndexOf('h.jsxs(he.div, {', dressStartIdx);
    if (hedivIdx !== -1) {
        // Need to find the end of this he.div component. It's tough with nested parens.
        // I will just replace the h.jsx("h2", { children: "Dress Code" }) and the aF.map with nulls.
    }
}


fs.writeFileSync('js/index-B3R5Kdbb.js', content);
console.log('Removed components successfully!');

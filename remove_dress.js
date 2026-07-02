const fs = require('fs');
let content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

const dressCodeOld = `            }), h.jsxs(he.div, {
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
                className: "text-center",
                children: [h.jsx("h2", {
                    className: "font-display text-5xl md:text-7xl text-foreground mb-10",
                    children: "Dress Code"
                }), h.jsx("div", {
                    className: "space-y-8",
                    children: aF.map(e => h.jsxs("div", {
                        className: "bg-foreground/[0.03] border border-foreground/10 rounded-2xl px-6 py-10 md:px-10 md:py-14",
                        children: [h.jsx("h3", {
                            className: "font-display text-4xl md:text-5xl text-foreground mb-1 leading-tight",
                            children: e.title
                        }), h.jsx("p", {
                            className: "font-body text-sm tracking-[0.25em] uppercase text-foreground/50 mb-4",
                            children: e.date
                        }), h.jsx("p", {
                            className: "font-body text-lg tracking-[0.1em] text-foreground",
                            children: e.attire
                        }), e.palette && h.jsx("div", {
                            className: "mt-5 flex justify-center items-start gap-3 flex-nowrap",
                            children: e.palette.map(t => h.jsxs("div", {
                                className: "flex flex-col items-center gap-1.5",
                                children: [h.jsx("div", {
                                    className: "w-6 h-6 md:w-8 md:h-8 rounded-full shadow-inner overflow-hidden",
                                    style: {
                                        backgroundColor: t.hex
                                    },
                                    children: t.img && h.jsx("img", {
                                        src: t.img,
                                        alt: t.name,
                                        className: "w-full h-full object-cover opacity-60 mix-blend-overlay"
                                    })
                                }), h.jsx("span", {
                                    className: "font-body text-[10px] md:text-xs tracking-wider uppercase text-foreground/50 text-center whitespace-nowrap",
                                    children: t.name
                                })]
                            }, t.name))
                        })]
                    }, e.title))
                })]
            })]`;

content = content.replace(dressCodeOld, `            })]`);

fs.writeFileSync('js/index-B3R5Kdbb.js', content);
console.log('Removed Dress Code successfully!');

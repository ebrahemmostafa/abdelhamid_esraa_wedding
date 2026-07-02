const fs = require('fs');
let content = fs.readFileSync('js/index-B3R5Kdbb.js', 'utf8');

const replacements = {
  "Istanbul, Turkey": "VIP HALL The Great Sea Street",
  "Istanbul, Türkei": "VIP HALL The Great Sea Street",
  "Vaavu Fulidhoo, Maldives": "VIP HALL The Great Sea Street",
  "The Peninsula Hotel Istanbul": "VIP HALL The Great Sea Street",
  "The Peninsula Private Quay, Istanbul": "VIP HALL The Great Sea Street",
  "The Peninsula Private Quay": "VIP HALL The Great Sea Street",
  "Fulidhoo Beach": "VIP HALL The Great Sea Street",
  "Kinan Sentral": "VIP HALL The Great Sea Street",
  "The Peninsula Istanbul, Kemankeş Karamustafa Paşa, Karaköy, Istanbul, Turkey": "VIP HALL The Great Sea Street",
  "The Peninsula Istanbul, Kemankeş Karamustafa Paşa, Karaköy, Istanbul, Türkei": "VIP HALL The Great Sea Street",
  '"events.engagementName1": "The Peninsula"': '"events.engagementName1": "VIP HALL"',
  '"events.engagementName2": "Hotel Istanbul"': '"events.engagementName2": "The Great Sea Street"',
  '"events.cruiseName1": "The Peninsula"': '"events.cruiseName1": "VIP HALL"',
  '"events.cruiseName2": "Private Quay"': '"events.cruiseName2": "The Great Sea Street"',
};

for (const [key, value] of Object.entries(replacements)) {
  // Use split/join for exact string replacement
  content = content.split(key).join(value);
}

fs.writeFileSync('js/index-B3R5Kdbb.js', content);
console.log('Location updated successfully!');

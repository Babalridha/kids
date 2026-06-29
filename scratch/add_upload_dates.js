import fs from 'fs';
import path from 'path';

const directory = './src/content/series';

const seriesBaseDates = {
  "glimpses-of-karbala-with-nana": "2026-05-01",
  "mawla-ali": "2026-05-10",
  "mahe-ramadhan": "2026-05-15",
  "lady-of-light": "2026-05-20",
  "imam-sajjad": "2026-05-25",
  "heavenly-ladies": "2026-06-01",
  "imam-mahdi-over-6": "2026-06-05",
  "imam-mahdi-under-6": "2026-06-10",
  "little-lights": "2026-06-15",
  "ramadhan": "2026-06-18",
  "shining-sun": "2026-06-22",
  "little-ruqayya": "2026-06-24",
  "shaheed-khamenei": "2026-06-28"
};

function addDays(dateStr, days) {
  const date = new Date(dateStr);
  date.setDate(date.getDate() + days);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function migrateFile(filePath, slug) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const baseDate = seriesBaseDates[slug] || "2026-06-01";
  
  if (data.episodes && Array.isArray(data.episodes)) {
    data.episodes = data.episodes.map((ep, idx) => {
      const newEp = { ...ep };
      if (!ep.uploadDate) {
        newEp.uploadDate = addDays(baseDate, idx);
      }
      return newEp;
    });
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

fs.readdirSync(directory).forEach(file => {
  if (file.endsWith('.json')) {
    const slug = path.basename(file, '.json');
    const fullPath = path.join(directory, file);
    migrateFile(fullPath, slug);
    console.log(`Updated upload dates for: ${file}`);
  }
});

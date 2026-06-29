import fs from 'fs';
import path from 'path';

const directory = './src/content/series';

function migrateFile(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (data.episodes && Array.isArray(data.episodes)) {
    data.episodes = data.episodes.map(ep => {
      const newEp = { ...ep };
      const duration = ep.duration;
      
      if (ep.audio && typeof ep.audio === 'object') {
        newEp.audio = {};
        if (ep.audio.en) {
          // If already migrated, don't overwrite with invalid structure
          if (typeof ep.audio.en === 'object' && ep.audio.en.url) {
            newEp.audio.en = ep.audio.en;
          } else {
            newEp.audio.en = {
              url: ep.audio.en,
              duration: duration || ''
            };
          }
        }
        if (ep.audio.fr) {
          if (typeof ep.audio.fr === 'object' && ep.audio.fr.url) {
            newEp.audio.fr = ep.audio.fr;
          } else {
            newEp.audio.fr = {
              url: ep.audio.fr,
              duration: duration || ''
            };
          }
        }
      }
      
      // Remove the top-level duration key
      delete newEp.duration;
      return newEp;
    });
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

fs.readdirSync(directory).forEach(file => {
  if (file.endsWith('.json')) {
    const fullPath = path.join(directory, file);
    migrateFile(fullPath);
    console.log(`Migrated: ${file}`);
  }
});

import { parseFile } from 'music-metadata';
import https from 'https';
import fs from 'fs';
import path from 'path';

const urls = [
  "https://media.kids.babalridha.com/shaheed-khamenei/en/audio/01.mp3",
  "https://media.kids.babalridha.com/shaheed-khamenei/en/audio/02.mp3",
  "https://media.kids.babalridha.com/shaheed-khamenei/en/audio/03.mp3",
  "https://media.kids.babalridha.com/shaheed-khamenei/en/audio/04.mp3",
  "https://media.kids.babalridha.com/shaheed-khamenei/en/audio/05.mp3",
  "https://media.kids.babalridha.com/shaheed-khamenei/en/audio/06.mp3",
  "https://media.kids.babalridha.com/shaheed-khamenei/en/audio/07.mp3",
  "https://media.kids.babalridha.com/shaheed-khamenei/en/audio/08.mp3",
  "https://media.kids.babalridha.com/shaheed-khamenei/en/audio/09.mp3"
];

function downloadAndGetDuration(url) {
  return new Promise((resolve) => {
    const tempFile = path.join("/tmp", `temp-${Math.random().toString(36).slice(2)}.mp3`);
    const file = fs.createWriteStream(tempFile);
    
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        resolve({ url, error: `HTTP ${res.statusCode}` });
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        parseFile(tempFile)
          .then(metadata => {
            const durSec = metadata.format.duration;
            const mins = Math.floor(durSec / 60);
            const secs = Math.floor(durSec % 60);
            const formatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            resolve({ url, duration: formatted, raw: durSec });
            fs.unlinkSync(tempFile);
          })
          .catch(err => {
            resolve({ url, error: err.message });
            try { fs.unlinkSync(tempFile); } catch(e) {}
          });
      });
    }).on('error', (err) => {
      resolve({ url, error: err.message });
      try { fs.unlinkSync(tempFile); } catch(e) {}
    });
  });
}

async function main() {
  console.log("Analyzing audio files for Shaheed Khamenei series...");
  for (const url of urls) {
    const res = await downloadAndGetDuration(url);
    if (res.error) {
      console.log(`❌ ${res.url}: ${res.error}`);
    } else {
      console.log(`✅ ${res.url}: ${res.duration} (${Math.round(res.raw)} seconds)`);
    }
  }
}

main();

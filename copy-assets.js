import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parentDir = path.resolve(__dirname, '..');
const targetPublicAssets = path.resolve(__dirname, 'public/assets');

const foldersToCopy = [
  '2-Company-Logo',
  '3-clients-logos',
  '4-icon-on-current-site',
  '5-portfolio-1-a-plus-hire',
  '5-portfolio-2-Block-IMS',
  '5-portfolio-3-Unified-money-mino',
  '5-portfolio-4-Webo-360',
  '5-portfolio-5-Y-CMS',
  '5-portfolio-7-some-websites',
  '7-tech-logo'
];

function copyFolderRecursive(source, target) {
  if (!fs.existsSync(source)) return;
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const files = fs.readdirSync(source);
  files.forEach(file => {
    const curSource = path.join(source, file);
    const curTarget = path.join(target, file);
    if (fs.statSync(curSource).isDirectory()) {
      copyFolderRecursive(curSource, curTarget);
    } else {
      fs.copyFileSync(curSource, curTarget);
    }
  });
}

console.log('Copying asset directories to public/assets...');
foldersToCopy.forEach(folder => {
  const src = path.join(parentDir, folder);
  const dist = path.join(targetPublicAssets, folder);
  copyFolderRecursive(src, dist);
  console.log(`Copied ${folder} -> public/assets/${folder}`);
});
console.log('Asset copy complete!');

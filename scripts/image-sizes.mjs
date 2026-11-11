/*
 * Generates src/data/imageSizes.json — intrinsic width/height for every image
 * in public/.
 *
 * WHY
 * <img> without width and height causes layout shift as images load, and the
 * SEO audit flags it. Hand-typing dimensions works until someone swaps a file
 * and forgets, at which point the attributes are worse than useless because
 * they reserve the wrong space. Reading them from the files at build time
 * means they cannot drift.
 *
 * Headers are parsed directly rather than pulling in a dependency: PNG, JPEG
 * and WebP all carry their dimensions in the first few bytes.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const OUT = path.join(ROOT, 'src/data/imageSizes.json');

function pngSize(b) {
  if (b.length < 24 || b.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
}

function jpegSize(b) {
  if (b.length < 4 || b[0] !== 0xff || b[1] !== 0xd8) return null;
  let i = 2;
  while (i < b.length) {
    if (b[i] !== 0xff) { i++; continue; }
    const marker = b[i + 1];
    // SOF0–SOF15, excluding DHT/JPG/DAC which share the range.
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
    }
    i += 2 + b.readUInt16BE(i + 2);
  }
  return null;
}

function webpSize(b) {
  if (b.length < 30 || b.toString('ascii', 0, 4) !== 'RIFF' || b.toString('ascii', 8, 12) !== 'WEBP') {
    return null;
  }
  const fmt = b.toString('ascii', 12, 16);
  if (fmt === 'VP8 ') {
    return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
  }
  if (fmt === 'VP8L') {
    const bits = b.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  if (fmt === 'VP8X') {
    const w = b[24] | (b[25] << 8) | (b[26] << 16);
    const h = b[27] | (b[28] << 8) | (b[29] << 16);
    return { width: w + 1, height: h + 1 };
  }
  return null;
}

const READERS = { '.png': pngSize, '.jpg': jpegSize, '.jpeg': jpegSize, '.webp': webpSize };

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const sizes = {};
let skipped = 0;
for (const file of walk(PUBLIC)) {
  const reader = READERS[path.extname(file).toLowerCase()];
  if (!reader) continue;
  const dims = reader(fs.readFileSync(file));
  const key = '/' + path.relative(PUBLIC, file).split(path.sep).join('/');
  if (dims && dims.width && dims.height) sizes[key] = dims;
  else skipped++;
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(sizes, null, 2) + '\n');
console.log(`[image-sizes] ${Object.keys(sizes).length} images measured${skipped ? `, ${skipped} unreadable` : ''}.`);

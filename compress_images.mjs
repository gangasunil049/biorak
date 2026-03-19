import sharp from 'sharp';
import { readdir, stat, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// All directories that have images
const dirs = [
    path.join(__dirname, 'src', 'assets'),
    path.join(__dirname, 'public', 'gallery'),
    path.join(__dirname, 'public'),
];

const MAX_WIDTH = 1400;
const JPG_QUALITY = 78;
const PNG_QUALITY = 80;
const SKIP_BELOW_KB = 60;

async function compressDir(dir) {
    let files;
    try { files = await readdir(dir); } catch { return; }

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

        const filePath = path.join(dir, file);
        const { size } = await stat(filePath);
        const kb = Math.round(size / 1024);

        if (kb < SKIP_BELOW_KB) {
            console.log(`SKIP  ${file} [${kb}KB – already small]`);
            continue;
        }

        try {
            const img = sharp(filePath);
            const meta = await img.metadata();

            let t = sharp(filePath);
            if ((meta.width || 0) > MAX_WIDTH) {
                t = t.resize({ width: MAX_WIDTH, withoutEnlargement: true });
            }

            if (ext === '.png') {
                t = t.png({ quality: PNG_QUALITY, compressionLevel: 9, adaptiveFiltering: true });
            } else {
                t = t.jpeg({ quality: JPG_QUALITY, progressive: true, mozjpeg: true });
            }

            const buf = await t.toBuffer();
            const outKb = Math.round(buf.length / 1024);
            const saved = Math.round((1 - outKb / kb) * 100);

            if (outKb < kb) {
                await writeFile(filePath, buf);
                console.log(`OK    ${file}: ${kb}KB → ${outKb}KB  (${saved}% saved)`);
            } else {
                console.log(`SKIP  ${file} [already optimal ${kb}KB]`);
            }
        } catch (e) {
            console.error(`ERR   ${file}: ${e.message}`);
        }
    }
}

for (const dir of dirs) {
    console.log(`\n📁 ${path.relative(__dirname, dir) || '.'}`);
    await compressDir(dir);
}
console.log('\n✅ All done!');

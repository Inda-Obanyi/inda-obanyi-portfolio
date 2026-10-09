
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const images = [
  "public/projects/floodguard-ai.png",
  "public/projects/airline-satisfaction.png",
  "public/projects/resume-screening.png",
  "public/projects/fraudguard-ai.png",
];

async function optimizeImages() {
  for (const image of images) {
    const input = path.join(root, image);
    const output = input.replace(/\.png$/i, ".webp");

    const metadata = await sharp(input).metadata();

    await sharp(input)
      .webp({
        quality: 82,
        effort: 6,
      })
      .toFile(output);

    const original = (await fs.stat(input)).size;
    const optimized = (await fs.stat(output)).size;

    const reduction = (
      ((original - optimized) / original) *
      100
    ).toFixed(1);

    console.log(
      `${path.basename(input)}: ` +
      `${(original / 1024).toFixed(1)} KB → ` +
      `${(optimized / 1024).toFixed(1)} KB ` +
      `(${reduction}% reduction, ` +
      `${metadata.width}x${metadata.height})`
    );
  }
}

optimizeImages().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

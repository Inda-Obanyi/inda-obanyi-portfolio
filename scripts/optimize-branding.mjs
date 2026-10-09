import sharp from "sharp";

const input = "public/images/favicon.png";

async function optimize() {
  await sharp(input)
    .resize(32, 32, { fit: "contain" })
    .png({ compressionLevel: 9 })
    .toFile("public/images/favicon-32.png");

  await sharp(input)
    .resize(180, 180, { fit: "contain" })
    .png({ compressionLevel: 9 })
    .toFile("public/images/apple-touch-icon.png");

  await sharp(input)
    .resize(256, 256, { fit: "contain" })
    .webp({ quality: 85, effort: 6 })
    .toFile("public/images/navbar-logo.webp");

  console.log("Favicon and navbar assets generated successfully.");
}

optimize().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

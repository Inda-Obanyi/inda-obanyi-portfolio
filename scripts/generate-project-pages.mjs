
import fs from "node:fs/promises";
import path from "node:path";
import projects from "../src/data/projects.js";

const SITE_URL = "https://indaobanyi.vercel.app";
const DIST_DIR = path.resolve("dist");

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;");
}

function escapeJsonForHtml(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function replaceMeta(html, attribute, key, content) {
  const pattern = new RegExp(
    `<meta\\s+(?=[^>]*\\b${attribute}=["']${key}["'])[^>]*>`,
    "i"
  );

  const tag =
    `<meta ${attribute}="${key}" ` +
    `content="${escapeHtml(content)}" />`;

  if (!pattern.test(html)) {
    return html.replace("</head>", `  ${tag}\n</head>`);
  }

  return html.replace(pattern, tag);
}

function replaceCanonical(html, url) {
  const pattern =
    /<link\s+(?=[^>]*\brel=["']canonical["'])[^>]*>/i;

  const tag =
    `<link rel="canonical" href="${escapeHtml(url)}" />`;

  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n</head>`);
}

function removeMeta(html, attribute, key) {
  const pattern = new RegExp(
    `<meta\\s+(?=[^>]*\\b${attribute}=["']${key}["'])[^>]*>\\s*`,
    "gi"
  );

  return html.replace(pattern, "");
}

function getProjectImage(project) {
  // Retain the original PNG for social previews.
  // The React application continues using optimized WebP.
  const image = project.image || "/images/portfolio-preview.png";

  return image.replace(/\.webp$/i, ".png");
}

async function generate() {
  const templatePath = path.join(DIST_DIR, "index.html");
  const template = await fs.readFile(templatePath, "utf8");

  for (const project of projects) {
    if (!project.id || !project.title) {
      throw new Error("Project is missing an id or title.");
    }

    const url = `${SITE_URL}/projects/${project.id}`;

    const title =
      `${project.title} | AI/ML Project | Inda Obanyi`;

    const description =
      project.shortDescription ||
      project.description ||
      `${project.title} is an AI engineering project by Inda Obanyi.`;

    const imagePath = getProjectImage(project);
    const imageUrl = `${SITE_URL}${imagePath}`;

    const imageAlt =
      `${project.title} - AI/ML project by Inda Obanyi`;

    let html = template;

    // Document title
    html = html.replace(
      /<title>[\s\S]*?<\/title>/i,
      `<title>${escapeHtml(title)}</title>`
    );

    // Primary metadata
    html = replaceMeta(
      html, "name", "description", description
    );

    html = replaceCanonical(html, url);

    // Open Graph
    const ogTags = {
      "og:type": "article",
      "og:site_name": "Inda Obanyi Portfolio",
      "og:title": title,
      "og:description": description,
      "og:url": url,
      "og:image": imageUrl,
      "og:image:secure_url": imageUrl,
      "og:image:type": "image/png",
      "og:image:alt": imageAlt,
    };

    for (const [key, value] of Object.entries(ogTags)) {
      html = replaceMeta(html, "property", key, value);
    }

    // Original preview dimensions may not match
    // the project screenshot dimensions.
    html = removeMeta(html, "property", "og:image:width");
    html = removeMeta(html, "property", "og:image:height");

    // Twitter / X
    const twitterTags = {
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": imageUrl,
      "twitter:image:alt": imageAlt,
    };

    for (const [key, value] of Object.entries(twitterTags)) {
      html = replaceMeta(html, "name", key, value);
    }

    // Structured data
    const schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: project.title,
      description,
      url,
      image: imageUrl,
      author: {
        "@type": "Person",
        name: "Inda Obanyi",
        url: `${SITE_URL}/`,
      },
      ...(project.github
        ? { codeRepository: project.github }
        : {}),
      programmingLanguage: (project.technologies || [])
        .filter((item) =>
          ["Python", "JavaScript", "TypeScript", "SQL"].includes(item)
        ),
    };

    const schemaTag =
      `<script type="application/ld+json">` +
      `${escapeJsonForHtml(schema)}` +
      `</script>`;

    html = html.replace(
      "</head>",
      `  ${schemaTag}\n</head>`
    );

    const outputDirectory = path.join(
      DIST_DIR,
      "projects",
      project.id
    );

    await fs.mkdir(outputDirectory, {
      recursive: true,
    });

    await fs.writeFile(
      path.join(outputDirectory, "index.html"),
      html,
      "utf8"
    );

    console.log(`Generated: /projects/${project.id}`);
  }

  console.log(
    `Successfully generated ${projects.length} project pages.`
  );
}

generate().catch((error) => {
  console.error("Metadata generation failed:", error);
  process.exitCode = 1;
});

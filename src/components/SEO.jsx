import { useEffect } from "react";

const SITE_URL = "https://indaobanyi.vercel.app";
const DEFAULT_IMAGE = "/images/portfolio-preview.png";

const DEFAULT_DESCRIPTION =
  "Inda Obanyi is an AI/ML Engineer and Machine Learning Engineer building practical artificial intelligence, machine learning, data science, and intelligent software systems for real-world problems.";

/* ============================================================
   HELPERS
============================================================ */

function getAbsoluteUrl(value) {
  if (!value) {
    return SITE_URL;
  }

  if (
    value.startsWith("http://") ||
    value.startsWith("https://")
  ) {
    return value;
  }

  const normalizedValue = value.startsWith("/")
    ? value
    : `/${value}`;

  return `${SITE_URL}${normalizedValue}`;
}

function setMeta(selector, attribute, value) {
  if (!value) {
    return;
  }

  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");

    const match =
      attribute === "name"
        ? selector.match(/\[name="(.+)"\]/)
        : selector.match(/\[property="(.+)"\]/);

    if (match?.[1]) {
      element.setAttribute(attribute, match[1]);
    }

    document.head.appendChild(element);
  }

  element.setAttribute("content", value);
}

function setCanonical(url) {
  let canonical = document.head.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function setStructuredData(data) {
  const scriptId = "dynamic-structured-data";

  let script = document.getElementById(scriptId);

  if (!data) {
    if (script) {
      script.remove();
    }

    return;
  }

  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

/* ============================================================
   SEO COMPONENT
============================================================ */

function SEO({
  title = "AI/ML Engineer & Machine Learning Engineer",
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  imageAlt = "Inda Obanyi AI and Machine Learning Portfolio",
  type = "website",
  noIndex = false,
  structuredData = null,
}) {
  useEffect(() => {
    /* --------------------------------------------------------
       TITLE
    --------------------------------------------------------- */

    const safeTitle =
      typeof title === "string" && title.trim()
        ? title.trim()
        : "AI/ML Engineer & Machine Learning Engineer";

    const fullTitle = safeTitle.includes("Inda Obanyi")
      ? safeTitle
      : `${safeTitle} | Inda Obanyi`;

    /* --------------------------------------------------------
       URLS
    --------------------------------------------------------- */

    const canonicalUrl = getAbsoluteUrl(path);
    const imageUrl = getAbsoluteUrl(image);

    /* --------------------------------------------------------
       DOCUMENT TITLE
    --------------------------------------------------------- */

    document.title = fullTitle;

    /* --------------------------------------------------------
       PRIMARY SEO
    --------------------------------------------------------- */

    setMeta(
      'meta[name="description"]',
      "name",
      description
    );

    setMeta(
      'meta[name="robots"]',
      "name",
      noIndex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large"
    );

    /* --------------------------------------------------------
       OPEN GRAPH
    --------------------------------------------------------- */

    setMeta(
      'meta[property="og:title"]',
      "property",
      fullTitle
    );

    setMeta(
      'meta[property="og:description"]',
      "property",
      description
    );

    setMeta(
      'meta[property="og:url"]',
      "property",
      canonicalUrl
    );

    setMeta(
      'meta[property="og:type"]',
      "property",
      type
    );

    setMeta(
      'meta[property="og:site_name"]',
      "property",
      "Inda Obanyi Portfolio"
    );

    setMeta(
      'meta[property="og:image"]',
      "property",
      imageUrl
    );

    setMeta(
      'meta[property="og:image:secure_url"]',
      "property",
      imageUrl
    );

    setMeta(
      'meta[property="og:image:alt"]',
      "property",
      imageAlt
    );

    /* --------------------------------------------------------
       TWITTER / X
    --------------------------------------------------------- */

    setMeta(
      'meta[name="twitter:card"]',
      "name",
      "summary_large_image"
    );

    setMeta(
      'meta[name="twitter:title"]',
      "name",
      fullTitle
    );

    setMeta(
      'meta[name="twitter:description"]',
      "name",
      description
    );

    setMeta(
      'meta[name="twitter:image"]',
      "name",
      imageUrl
    );

    setMeta(
      'meta[name="twitter:image:alt"]',
      "name",
      imageAlt
    );

    /* --------------------------------------------------------
       CANONICAL URL
    --------------------------------------------------------- */

    setCanonical(canonicalUrl);

    /* --------------------------------------------------------
       STRUCTURED DATA
    --------------------------------------------------------- */

    setStructuredData(structuredData);

    /* --------------------------------------------------------
       CLEANUP

       Removes route-specific JSON-LD when navigating away from
       a page so project schema does not leak into another route.
    --------------------------------------------------------- */

    return () => {
      const script = document.getElementById(
        "dynamic-structured-data"
      );

      if (script) {
        script.remove();
      }
    };
  }, [
    title,
    description,
    path,
    image,
    imageAlt,
    type,
    noIndex,
    structuredData,
  ]);

  return null;
}

export default SEO;
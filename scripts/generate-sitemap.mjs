// Generates dist/sitemap.xml from the prerendered output.
// Every route vite-react-ssg emits (dist/**/index.html) becomes a <url>,
// so the sitemap can never drift out of sync with the built pages.
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://www.transess.com";
// fileURLToPath decodes %20 etc. so paths with spaces resolve correctly.
const distDir = fileURLToPath(new URL("../dist", import.meta.url));
const today = new Date().toISOString().split("T")[0];

/** Recursively collect every index.html under dist. */
function findIndexHtml(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (name === "assets") continue; // skip build assets
      findIndexHtml(full, acc);
    } else if (name === "index.html") {
      acc.push(full);
    }
  }
  return acc;
}

const routes = findIndexHtml(distDir)
  .map((file) => {
    const relDir = relative(distDir, file).split(sep).slice(0, -1).join("/");
    return relDir === "" ? "/" : `/${relDir}`;
  })
  .sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));

const urls = routes
  .map((route) => {
    const isHome = route === "/";
    const loc = `${SITE}${route}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${isHome ? "weekly" : "monthly"}</changefreq>
    <priority>${isHome ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(join(distDir, "sitemap.xml"), xml);
console.log(`✓ sitemap.xml written with ${routes.length} URLs`);

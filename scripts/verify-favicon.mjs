#!/usr/bin/env node
/**
 * Favicon & robots.txt verification script
 * 
 * Verifies that after deployment:
 *  - /robots.txt is accessible and allows favicon crawling
 *  - /favicon.ico returns 200 with correct Content-Type
 *  - /favicon.png returns 200 with correct Content-Type
 *  - Caching headers permit search engine recrawl
 *
 * Usage:
 *   node scripts/verify-favicon.mjs                          # checks default URL
 *   node scripts/verify-favicon.mjs https://www.transess.com # checks custom URL
 *   BASE_URL=https://staging.example.com node scripts/verify-favicon.mjs
 *
 * Exit codes:
 *   0 = all checks passed
 *   1 = one or more checks failed
 */

const DEFAULT_BASE_URL = "https://www.transess.com";
const baseUrl = (process.argv[2] || process.env.BASE_URL || DEFAULT_BASE_URL).replace(/\/$/, "");

const COLORS = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  gray: "\x1b[90m",
};

const c = (color, text) => `${COLORS[color]}${text}${COLORS.reset}`;
const PASS = c("green", "✓ PASS");
const FAIL = c("red", "✗ FAIL");
const WARN = c("yellow", "⚠ WARN");

const results = [];

function record(name, ok, detail = "", level = "fail") {
  results.push({ name, ok, detail, level });
  const tag = ok ? PASS : level === "warn" ? WARN : FAIL;
  console.log(`  ${tag}  ${name}${detail ? c("gray", " — " + detail) : ""}`);
}

async function fetchHead(url) {
  // Try HEAD first; some CDNs return different info on GET, so fall back if needed
  try {
    const res = await fetch(url, { method: "HEAD", redirect: "follow" });
    if (res.status === 405 || res.status === 501) throw new Error("HEAD not allowed");
    return res;
  } catch {
    return fetch(url, { method: "GET", redirect: "follow" });
  }
}

async function fetchText(url) {
  const res = await fetch(url, { redirect: "follow" });
  const text = await res.text();
  return { res, text };
}

async function checkRobots() {
  console.log(c("bold", "\n📄 robots.txt"));
  const url = `${baseUrl}/robots.txt`;
  try {
    const { res, text } = await fetchText(url);
    record("Status 200", res.status === 200, `got ${res.status}`);
    record(
      "Content-Type text/plain",
      (res.headers.get("content-type") || "").includes("text/plain"),
      res.headers.get("content-type") || "missing"
    );

    // Parse robots.txt minimally to confirm favicon paths aren't disallowed for Googlebot/*
    const blocks = text.split(/\n(?=User-agent:)/i);
    const checkAgent = (agent) => {
      const escaped = agent.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const boundary = agent === "*" ? "" : "\\b";
      const block = blocks.find((b) =>
        new RegExp(`^User-agent:\\s*${escaped}${boundary}`, "im").test(b)
      );
      if (!block) return { found: false, blocked: [] };
      const disallows = [...block.matchAll(/^Disallow:\s*(\S+)/gim)].map((m) => m[1]);
      const blocked = ["/favicon.ico", "/favicon.png"].filter((path) =>
        disallows.some((d) => d !== "" && path.startsWith(d))
      );
      return { found: true, blocked };
    };

    for (const agent of ["Googlebot", "*"]) {
      const { found, blocked } = checkAgent(agent);
      if (!found) {
        record(`User-agent ${agent} present`, false, "missing block", "warn");
        continue;
      }
      record(
        `User-agent ${agent} does not block favicons`,
        blocked.length === 0,
        blocked.length ? `blocked: ${blocked.join(", ")}` : "ok"
      );
    }

    record(
      "Sitemap directive present",
      /^Sitemap:\s*https?:\/\//im.test(text),
      "needed for indexing"
    );
  } catch (err) {
    record(`Fetch ${url}`, false, err.message);
  }
}

async function checkFavicon(path, expectedContentTypes) {
  console.log(c("bold", `\n🖼  ${path}`));
  const url = `${baseUrl}${path}`;
  try {
    const res = await fetchHead(url);
    record("Status 200", res.status === 200, `got ${res.status}`);

    const ct = (res.headers.get("content-type") || "").toLowerCase();
    record(
      `Content-Type matches (${expectedContentTypes.join(" | ")})`,
      expectedContentTypes.some((e) => ct.includes(e)),
      ct || "missing"
    );

    const contentLength = res.headers.get("content-length");
    if (contentLength) {
      const size = parseInt(contentLength, 10);
      record("File size > 0 bytes", size > 0, `${size} bytes`);
    }

    // Caching: warn if immutable / very long max-age would block recrawl
    const cacheControl = res.headers.get("cache-control") || "";
    const etag = res.headers.get("etag");
    const lastModified = res.headers.get("last-modified");
    const hasValidator = !!(etag || lastModified);

    record(
      "Recrawl-friendly caching",
      hasValidator || !/immutable|max-age=\d{7,}/i.test(cacheControl),
      cacheControl || (hasValidator ? `validator: ${etag ? "ETag" : "Last-Modified"}` : "no cache headers"),
      "warn"
    );

    // robots blocking via X-Robots-Tag
    const xRobots = (res.headers.get("x-robots-tag") || "").toLowerCase();
    record(
      "X-Robots-Tag does not block indexing",
      !xRobots.includes("noindex") && !xRobots.includes("none"),
      xRobots || "not set"
    );
  } catch (err) {
    record(`Fetch ${url}`, false, err.message);
  }
}

async function main() {
  console.log(c("bold", `\n🔍 Verifying favicon & robots.txt on ${c("blue", baseUrl)}\n`));
  console.log(c("gray", `Started: ${new Date().toISOString()}`));

  await checkRobots();
  await checkFavicon("/favicon.ico", ["image/x-icon", "image/vnd.microsoft.icon", "image/ico"]);
  await checkFavicon("/favicon.png", ["image/png"]);

  const failed = results.filter((r) => !r.ok && r.level !== "warn");
  const warned = results.filter((r) => !r.ok && r.level === "warn");

  console.log(c("bold", "\n📊 Summary"));
  console.log(`   Total checks: ${results.length}`);
  console.log(`   ${c("green", `Passed: ${results.filter((r) => r.ok).length}`)}`);
  if (warned.length) console.log(`   ${c("yellow", `Warnings: ${warned.length}`)}`);
  if (failed.length) console.log(`   ${c("red", `Failed: ${failed.length}`)}`);

  if (failed.length > 0) {
    console.log(c("red", "\n❌ Verification failed. Search engines may not crawl your favicon correctly.\n"));
    process.exit(1);
  }
  console.log(c("green", "\n✅ All critical checks passed. Favicon is ready for search engine recrawl.\n"));
  process.exit(0);
}

main().catch((err) => {
  console.error(c("red", `\nFatal error: ${err.message}\n`));
  process.exit(1);
});

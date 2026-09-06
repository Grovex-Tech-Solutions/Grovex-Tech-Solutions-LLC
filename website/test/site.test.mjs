import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const publicFile = (name) => readFile(new URL(`../public/${name}`, import.meta.url), "utf8");

test("publishes only a closed private-systems notice", async () => {
  const html = await publicFile("index.html");
  assert.match(html, /Private systems operation/);
  assert.match(html, /not accepting clients, users, investors, or access requests/);
  assert.match(html, /Nothing on this site is an offer of investment, advisory, brokerage, or\s+trading services/);
  assert.match(html, /mailto:cpenrod@grovextech\.com/);
  assert.match(html, /noindex, nofollow, noarchive, noimageindex/);
  assert.doesNotMatch(html, /googletagmanager|gtag\(/i);
  assert.match(html, /pathname === "\/sw\.js"/);
  assert.match(html, /retiredCachePrefixes\.some/);
  assert.doesNotMatch(html, /registrations\.map/);
  assert.doesNotMatch(html, /names\.map\(\(name\) => caches\.delete/);
});

test("blocks crawlers and replaces legacy routes with the notice", async () => {
  assert.equal(await publicFile("robots.txt"), "User-agent: *\nDisallow: /\n");
  assert.equal(await publicFile("_redirects"), "/* /index.html 200\n");
});

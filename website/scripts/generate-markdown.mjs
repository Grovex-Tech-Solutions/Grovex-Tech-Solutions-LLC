import { readdir, readFile, rm, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import TurndownService from 'turndown';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(root, 'out');
const markdownDirectory = path.join(outputDirectory, '__markdown');

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '_next' || entry.name === '__markdown') return [];
      return htmlFiles(absolutePath);
    }
    return entry.isFile() && entry.name.endsWith('.html') ? [absolutePath] : [];
  }));
  return files.flat();
}

function yamlString(value) {
  return JSON.stringify(value.replace(/\s+/g, ' ').trim());
}

function frontmatter(document) {
  const value = (selector) => document.querySelector(selector)?.getAttribute('content')?.trim();
  const fields = {
    title: value('meta[name="title"]') || value('meta[property="og:title"]') || document.title.trim(),
    description: value('meta[name="description"]') || value('meta[property="og:description"]'),
    image: value('meta[property="og:image"]'),
  };
  const populated = Object.entries(fields).filter(([, fieldValue]) => fieldValue);
  if (populated.length === 0) return '';
  return `---\n${populated.map(([key, fieldValue]) => `${key}: ${yamlString(fieldValue)}`).join('\n')}\n---\n\n`;
}

function markdownForHtml(html) {
  const dom = new JSDOM(html);
  const { document } = dom.window;
  const jsonLd = [...document.querySelectorAll('script[type="application/ld+json"]')]
    .map((script) => script.textContent?.trim())
    .filter(Boolean);
  const content = document.querySelector('main') || document.body;
  content.querySelectorAll('script, style, noscript, svg, template').forEach((element) => element.remove());

  const turndown = new TurndownService({
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    emDelimiter: '*',
    headingStyle: 'atx',
  });
  turndown.remove(['button', 'form']);
  const body = turndown.turndown(content.innerHTML).trim();
  const structuredData = jsonLd.length > 0 ? `\n\n\`\`\`json\n${jsonLd.join('\n')}\n\`\`\`` : '';
  return `${frontmatter(document)}${body}${structuredData}\n`;
}

function destinationFor(source) {
  const relative = path.relative(outputDirectory, source);
  if (relative === 'index.html') return path.join(markdownDirectory, 'index.md');
  if (path.basename(relative) === 'index.html') {
    return path.join(markdownDirectory, path.dirname(relative), 'index.md');
  }
  return path.join(markdownDirectory, relative.replace(/\.html$/, ''), 'index.md');
}

await rm(markdownDirectory, { recursive: true, force: true });
const sources = await htmlFiles(outputDirectory);
for (const source of sources) {
  const destination = destinationFor(source);
  const markdown = markdownForHtml(await readFile(source, 'utf8'));
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, markdown, 'utf8');
}
console.log(`Generated ${sources.length} Markdown page variants.`);
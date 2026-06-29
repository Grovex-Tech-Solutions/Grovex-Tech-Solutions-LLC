import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = join(process.cwd(), 'public', 'pixel_art');
mkdirSync(outDir, { recursive: true });

const palette = {
  ink: '#071419',
  deep: '#0b2f35',
  teal: '#0d9488',
  mint: '#5eead4',
  blue: '#3b82f6',
  sky: '#60a5fa',
  violet: '#8b5cf6',
  gold: '#f5c451',
  green: '#34d399',
  slate: '#334155',
  white: '#f8fafc',
  glass: '#dffcf7',
};

function rect(x, y, w, h, fill, opacity = 1) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"${opacity < 1 ? ` opacity="${opacity}"` : ''}/>`;
}

function gridBackground() {
  let cells = '';
  for (let x = 0; x < 64; x += 4) cells += rect(x, 0, 1, 64, palette.mint, 0.05);
  for (let y = 0; y < 64; y += 4) cells += rect(0, y, 64, 1, palette.sky, 0.045);
  return cells;
}

function svg(name, body, bg = palette.ink) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" shape-rendering="crispEdges" role="img" aria-labelledby="title desc">
  <title id="title">${name}</title>
  <desc id="desc">Pixel art visual asset for GroveX website cards and hero panels.</desc>
  <rect width="64" height="64" fill="${bg}"/>
  ${gridBackground()}
  ${body}
</svg>
`;
}

const assets = {
  'hero-systems-map.svg': svg('GroveX systems map', `
  ${rect(4, 7, 56, 50, '#082027')}
  ${rect(7, 10, 50, 44, '#0a3940')}
  ${rect(9, 12, 46, 40, '#092d36')}
  ${rect(12, 18, 10, 8, palette.mint)}${rect(14, 20, 6, 4, palette.ink)}
  ${rect(12, 35, 10, 8, palette.sky)}${rect(14, 37, 6, 4, palette.ink)}
  ${rect(42, 18, 10, 8, palette.green)}${rect(44, 20, 6, 4, palette.ink)}
  ${rect(42, 35, 10, 8, palette.gold)}${rect(44, 37, 6, 4, palette.ink)}
  ${rect(23, 24, 18, 16, palette.deep)}${rect(26, 27, 12, 10, palette.teal)}${rect(29, 30, 6, 4, palette.white)}
  ${rect(22, 21, 4, 3, palette.mint)}${rect(38, 21, 4, 3, palette.mint)}${rect(22, 41, 4, 3, palette.sky)}${rect(38, 41, 4, 3, palette.gold)}
  ${rect(22, 21, 20, 2, palette.mint)}${rect(21, 25, 2, 12, palette.sky)}${rect(41, 25, 2, 12, palette.green)}${rect(22, 41, 20, 2, palette.gold)}
  ${rect(6, 6, 10, 2, palette.mint)}${rect(48, 56, 10, 2, palette.sky)}
  ${rect(50, 8, 5, 5, palette.gold)}${rect(54, 12, 2, 2, palette.gold)}
  `),

  'card-web-foundation.svg': svg('Web foundation pixel interface', `
  ${rect(6, 9, 52, 42, '#102a33')}${rect(8, 11, 48, 38, '#edfdfb')}
  ${rect(8, 11, 48, 7, palette.teal)}${rect(11, 13, 3, 3, palette.gold)}${rect(16, 13, 3, 3, palette.mint)}${rect(21, 13, 3, 3, palette.sky)}
  ${rect(12, 23, 18, 4, palette.deep)}${rect(12, 29, 26, 3, palette.teal)}${rect(12, 35, 14, 3, palette.sky)}
  ${rect(39, 23, 10, 16, '#d7faf5')}${rect(41, 25, 6, 4, palette.teal)}${rect(41, 31, 6, 2, palette.sky)}${rect(41, 35, 4, 2, palette.gold)}
  ${rect(18, 53, 28, 3, palette.slate)}${rect(25, 50, 14, 3, palette.slate)}
  `),

  'card-operations-grid.svg': svg('Operations grid pixel asset', `
  ${rect(9, 9, 46, 46, '#0b2630')}
  ${rect(13, 13, 12, 12, palette.teal)}${rect(15, 15, 8, 8, '#08333a')}
  ${rect(39, 13, 12, 12, palette.sky)}${rect(41, 15, 8, 8, '#092b3d')}
  ${rect(13, 39, 12, 12, palette.green)}${rect(15, 41, 8, 8, '#0a332b')}
  ${rect(39, 39, 12, 12, palette.gold)}${rect(41, 41, 8, 8, '#37290b')}
  ${rect(25, 18, 14, 3, palette.mint)}${rect(30, 25, 4, 14, palette.mint)}${rect(25, 44, 14, 3, palette.mint)}
  ${rect(30, 30, 4, 4, palette.white)}${rect(29, 29, 6, 1, palette.white)}${rect(29, 34, 6, 1, palette.white)}
  `),

  'card-custom-systems.svg': svg('Custom systems pixel terminal', `
  ${rect(7, 12, 50, 38, '#081f25')}${rect(10, 15, 44, 32, '#06161b')}
  ${rect(13, 18, 8, 3, palette.mint)}${rect(23, 18, 6, 3, palette.sky)}${rect(31, 18, 12, 3, palette.green)}
  ${rect(14, 26, 6, 3, palette.gold)}${rect(22, 26, 18, 3, palette.teal)}${rect(42, 26, 5, 3, palette.sky)}
  ${rect(18, 34, 10, 3, palette.violet)}${rect(30, 34, 16, 3, palette.mint)}
  ${rect(14, 42, 24, 3, palette.green)}${rect(40, 42, 6, 3, palette.gold)}
  ${rect(50, 18, 2, 27, palette.mint, 0.75)}${rect(47, 43, 5, 2, palette.white)}
  ${rect(7, 50, 50, 3, palette.teal)}
  `),

  'card-reflexnet-dreamscope.svg': svg('ReflexNet Dreamscope pixel signal field', `
  ${rect(5, 8, 54, 48, '#06151f')}
  ${rect(8, 11, 48, 42, '#0a2030')}
  ${rect(10, 29, 6, 2, palette.sky)}${rect(18, 25, 5, 2, palette.mint)}${rect(25, 31, 5, 2, palette.sky)}
  ${rect(32, 23, 6, 2, palette.violet)}${rect(40, 28, 6, 2, palette.green)}${rect(48, 20, 5, 2, palette.gold)}
  ${rect(12, 32, 7, 2, palette.sky)}${rect(21, 36, 7, 2, palette.mint)}${rect(30, 33, 8, 2, palette.violet)}${rect(40, 37, 6, 2, palette.green)}${rect(48, 34, 4, 2, palette.gold)}
  ${rect(31, 16, 2, 31, palette.violet, 0.55)}${rect(34, 16, 1, 31, palette.mint, 0.35)}
  ${rect(49, 18, 6, 6, palette.gold)}${rect(51, 20, 2, 2, palette.white)}
  ${rect(46, 31, 8, 8, palette.gold)}${rect(49, 34, 2, 2, palette.white)}
  ${rect(9, 12, 12, 2, palette.sky)}${rect(9, 50, 28, 2, palette.mint)}
  `),

  'card-local-presence.svg': svg('Local presence pixel storefront', `
  ${rect(8, 23, 48, 28, '#123139')}
  ${rect(12, 16, 40, 9, palette.teal)}${rect(14, 18, 36, 3, palette.mint)}
  ${rect(13, 28, 12, 20, '#e8fffb')}${rect(16, 32, 6, 6, palette.sky)}${rect(16, 41, 6, 7, palette.deep)}
  ${rect(29, 28, 22, 12, '#dffcf7')}${rect(32, 31, 16, 3, palette.teal)}${rect(32, 36, 10, 2, palette.sky)}
  ${rect(31, 43, 18, 5, palette.gold)}${rect(34, 45, 12, 2, '#3d2f09')}
  ${rect(6, 51, 52, 4, palette.slate)}${rect(44, 10, 5, 5, palette.gold)}${rect(48, 14, 2, 2, palette.gold)}
  `),
};

for (const [filename, contents] of Object.entries(assets)) {
  writeFileSync(join(outDir, filename), contents);
}

writeFileSync(join(outDir, 'README.md'), `# GroveX pixel art assets\n\nCrisp SVG visual assets for GroveX cards, hero panels, and proof surfaces.\n\nDesign rules:\n- serious teal/blue systems palette\n- no emoji-based UI\n- accessible alt text at use sites\n- SVG shape-rendering uses crispEdges for pixel-art feel\n- static-hosting safe under /pixel_art/*\n\nAssets generated by scripts/generate-pixel-art.mjs.\n`);

console.log(JSON.stringify({ outDir, files: Object.keys(assets) }, null, 2));

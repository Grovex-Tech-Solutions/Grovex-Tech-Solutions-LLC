function quality(parameter) {
  const match = parameter.match(/^q\s*=\s*(0(?:\.\d+)?|1(?:\.0+)?)$/i);
  return match ? Number(match[1]) : null;
}

export function acceptsMarkdown(acceptHeader) {
  if (!acceptHeader) return false;
  return acceptHeader.split(',').some((range) => {
    const [mediaType, ...parameters] = range.split(';').map((part) => part.trim());
    if (mediaType.toLowerCase() !== 'text/markdown') return false;
    const declaredQuality = parameters.map(quality).find((value) => value !== null);
    return declaredQuality === undefined || declaredQuality > 0;
  });
}

function markdownPath(pathname) {
  if (pathname.startsWith('/__markdown/')) return null;
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const finalSegment = normalized.split('/').pop() || '';
  if (finalSegment.includes('.')) return null;
  return normalized === '/'
    ? '/__markdown/index.md'
    : `/__markdown${normalized}/index.md`;
}

function appendVary(headers, value) {
  const existing = headers.get('Vary');
  const values = new Set((existing || '').split(',').map((item) => item.trim()).filter(Boolean));
  values.add(value);
  headers.set('Vary', [...values].join(', '));
}

async function htmlResponse(context) {
  const response = await context.next();
  const headers = new Headers(response.headers);
  appendVary(headers, 'Accept');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export async function onRequest(context) {
  const { request } = context;
  const requestUrl = new URL(request.url);
  const assetPath = markdownPath(requestUrl.pathname);
  if (!['GET', 'HEAD'].includes(request.method) || !assetPath) return context.next();
  if (!acceptsMarkdown(request.headers.get('Accept'))) return htmlResponse(context);

  const assetUrl = new URL(assetPath, requestUrl);
  const assetResponse = await context.env.ASSETS.fetch(new Request(assetUrl, { method: 'GET' }));
  if (!assetResponse.ok) return htmlResponse(context);

  const markdown = await assetResponse.text();
  const headers = new Headers(assetResponse.headers);
  headers.set('Content-Type', 'text/markdown; charset=utf-8');
  headers.set('Content-Length', String(new TextEncoder().encode(markdown).length));
  headers.set('X-Markdown-Tokens', String(Math.ceil(markdown.length / 4)));
  appendVary(headers, 'Accept');

  return new Response(request.method === 'HEAD' ? null : markdown, {
    status: 200,
    headers,
  });
}

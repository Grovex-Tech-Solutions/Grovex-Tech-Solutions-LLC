import { describe, expect, it, vi } from 'vitest';
import { acceptsMarkdown, onRequest } from '../../functions/_middleware.js';

describe('Markdown content negotiation', () => {
  it.each([
    'text/markdown',
    'text/html, text/markdown;q=0.8',
    'TEXT/MARKDOWN; charset=utf-8',
  ])('recognizes an explicit Markdown media range: %s', (value) => {
    expect(acceptsMarkdown(value)).toBe(true);
  });

  it.each([null, 'text/html', '*/*', 'text/markdown;q=0'])('keeps HTML as the default: %s', (value) => {
    expect(acceptsMarkdown(value)).toBe(false);
  });

  it('serves the generated page variant with negotiation headers', async () => {
    const next = vi.fn();
    const fetch = vi.fn().mockResolvedValue(new Response('# About GroveX\n', {
      headers: { 'Cache-Control': 'public, max-age=3600' },
    }));
    const response = await onRequest({
      request: new Request('https://grovextech.com/about/?source=agent', {
        headers: { Accept: 'text/markdown' },
      }),
      env: { ASSETS: { fetch } },
      next,
    });

    expect(fetch).toHaveBeenCalledWith(expect.objectContaining({
      url: 'https://grovextech.com/__markdown/about/index.md',
    }));
    expect(next).not.toHaveBeenCalled();
    expect(response.headers.get('content-type')).toBe('text/markdown; charset=utf-8');
    expect(response.headers.get('vary')).toContain('Accept');
    expect(response.headers.get('x-markdown-tokens')).toMatch(/^\d+$/);
    expect(await response.text()).toBe('# About GroveX\n');
  });

  it('passes browser requests through unchanged', async () => {
    const htmlResponse = new Response('<html></html>');
    const next = vi.fn().mockResolvedValue(htmlResponse);
    const response = await onRequest({
      request: new Request('https://grovextech.com/', { headers: { Accept: 'text/html' } }),
      env: { ASSETS: { fetch: vi.fn() } },
      next,
    });

    expect(response).toBe(htmlResponse);
    expect(next).toHaveBeenCalledOnce();
  });

  it('falls back to the normal response when no Markdown asset exists', async () => {
    const htmlResponse = new Response('not found', { status: 404 });
    const next = vi.fn().mockResolvedValue(htmlResponse);
    const response = await onRequest({
      request: new Request('https://grovextech.com/missing/', { headers: { Accept: 'text/markdown' } }),
      env: { ASSETS: { fetch: vi.fn().mockResolvedValue(new Response(null, { status: 404 })) } },
      next,
    });

    expect(response).toBe(htmlResponse);
    expect(next).toHaveBeenCalledOnce();
  });
});
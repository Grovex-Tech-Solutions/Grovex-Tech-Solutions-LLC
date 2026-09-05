import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it, vi } from 'vitest';
import { onRequest } from '@/lib/markdown-negotiation.js';

const publicPath = (...segments: string[]) => resolve(process.cwd(), 'public', ...segments);

interface LinkTarget {
  href: string;
  type?: string;
}

interface ApiCatalogEntry {
  anchor: string;
  'service-desc': LinkTarget[];
  'service-doc': LinkTarget[];
  status?: LinkTarget[];
}

interface ApiCatalog {
  linkset: ApiCatalogEntry[];
}

const parseJson = <T>(path: string): T => JSON.parse(readFileSync(path, 'utf8')) as T;

describe('RFC 9727 API catalog', () => {
  const catalogPath = publicPath('.well-known', 'api-catalog');
  const catalog = parseJson<ApiCatalog>(catalogPath);

  it('publishes a non-empty Linkset with required API relations', () => {
    expect(catalog.linkset.length).toBeGreaterThan(0);

    for (const entry of catalog.linkset) {
      expect(() => new URL(entry.anchor)).not.toThrow();
      expect(entry['service-desc'].length).toBeGreaterThan(0);
      expect(entry['service-doc'].length).toBeGreaterThan(0);

      for (const target of [...entry['service-desc'], ...entry['service-doc'], ...(entry.status ?? [])]) {
        expect(() => new URL(target.href)).not.toThrow();
      }
    }
  });

  it('links to the published OpenAPI description and human documentation', () => {
    const entry = catalog.linkset[0];
    expect(entry['service-desc']).toContainEqual({
      href: 'https://grovextech.com/api/openapi.json',
      type: 'application/json',
    });
    expect(entry['service-doc']).toContainEqual({
      href: 'https://grovextech.com/api/docs/',
      type: 'text/html',
    });

    const openApi = parseJson<{ openapi: string; paths: Record<string, unknown> }>(
      publicPath('api', 'openapi.json'),
    );
    expect(openApi.openapi).toBe('3.1.0');
    expect(openApi.paths).toHaveProperty('/.well-known/api-catalog');
  });

  it('serves the catalog with the required Linkset response media type', async () => {
    const next = vi.fn().mockResolvedValue(new Response(JSON.stringify(catalog), {
      headers: { 'Content-Type': 'application/octet-stream' },
    }));
    const response = await onRequest({
      request: new Request('https://grovextech.com/.well-known/api-catalog'),
      env: { ASSETS: { fetch: vi.fn() } },
      next,
    });

    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toBe('application/linkset+json');
    expect(await response.json()).toEqual(catalog);
    expect(next).toHaveBeenCalledOnce();
  });
});

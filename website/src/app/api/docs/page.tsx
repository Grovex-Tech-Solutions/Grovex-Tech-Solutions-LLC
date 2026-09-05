import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Documentation | GroveX',
  description: 'Documentation for the GroveX RFC 9727 API catalog and automated API discovery interface.',
  alternates: {
    canonical: 'https://grovextech.com/api/docs/',
  },
};

export default function ApiDocsPage() {
  return (
    <main className="container mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-dark">
          Developer documentation
        </p>
        <h1 className="mb-5 text-4xl font-bold md:text-5xl">GroveX API Catalog API</h1>
        <p className="max-w-3xl text-lg text-foreground-secondary">
          GroveX publishes a machine-readable catalog so automated clients can discover public API
          descriptions and documentation using RFC 9727.
        </p>
      </header>

      <section className="mb-10 rounded-xl border border-slate-200 bg-slate-50 p-6 text-slate-950 md:p-8">
        <h2 className="mb-4 text-2xl font-bold">Catalog endpoint</h2>
        <code className="block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-100">
          GET https://grovextech.com/.well-known/api-catalog
        </code>
        <p className="mt-4 text-slate-700">
          A successful request returns HTTP 200 and the media type{' '}
          <code>application/linkset+json</code>. The response contains a Linkset with one entry for
          each public GroveX API.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Machine-readable description</h2>
        <p className="mb-4 text-foreground-secondary">
          The OpenAPI 3.1 description documents the discovery endpoint and its response schema.
        </p>
        <a
          className="font-semibold text-primary underline decoration-2 underline-offset-4 hover:text-primary-hover focus:outline-none focus:ring-2 focus:ring-primary-focus"
          href="/api/openapi.json"
        >
          View the OpenAPI document
        </a>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Example request</h2>
        <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-100">
          <code>{`curl --header 'Accept: application/linkset+json' \\
  https://grovextech.com/.well-known/api-catalog`}</code>
        </pre>
        <p className="mt-4 text-foreground-secondary">
          The catalog follows the JSON Linkset representation defined by RFC 9264 and the API
          catalog conventions defined by RFC 9727.
        </p>
      </section>
    </main>
  );
}

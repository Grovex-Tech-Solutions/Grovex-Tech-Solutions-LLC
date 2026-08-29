import type { Metadata } from "next";
import Link from "next/link";
import { PixelArtImage, pixelArtAssets } from "@/components/PixelArtAsset";

export const metadata: Metadata = {
  title: "Pixel Art Visual System | GroveX",
  description:
    "A GroveX visual asset library for crisp pixel-art cards, hero panels, and technical proof surfaces without emoji-based UI.",
  alternates: {
    canonical: "https://grovextech.com/pixel_art",
  },
  openGraph: {
    title: "Pixel Art Visual System | GroveX",
    description: "Crisp GroveX card and hero assets for websites, systems, operations, and technical proof surfaces.",
    type: "website",
    url: "https://grovextech.com/pixel_art",
  },
};

const scopeRows = [
  {
    label: "Marketing site",
    purpose: "Convert local business visitors with clear services, prices, proof, local presence, and contact paths.",
    visualRole: "Use calm, readable pixel art as supporting context. Never let art obscure the offer.",
  },
  {
    label: "Portfolio proof",
    purpose: "Show visible work, public technical artifacts, and safe evidence surfaces.",
    visualRole: "Use denser systems visuals for paper-mode research, dashboards, and technical evidence.",
  },
  {
    label: "Asset library",
    purpose: "Keep reusable visuals in one route and one public folder so cards and hero panels stay consistent.",
    visualRole: "Every asset must carry a job: explain a service, support trust, or frame a technical proof surface.",
  },
] as const;

const assetList = Object.values(pixelArtAssets);

export default function PixelArtPage() {
  return (
    <main className="overflow-hidden bg-background">
      <section className="relative isolate bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(94,234,212,0.22),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(96,165,250,0.18),transparent_30%),linear-gradient(135deg,rgba(13,148,136,0.18),transparent_45%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-teal-200/25 bg-teal-200/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-teal-100">
              GroveX visual system
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              Pixel art assets for serious UI, not decoration for decoration&apos;s sake.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              This route separates the website&apos;s practical conversion scope from reusable visual assets. The goal is a cohesive GroveX look: crisp, technical, approachable, mobile-safe, and free of emoji-driven interface shortcuts.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-teal-300 px-6 py-3 font-bold text-slate-950 shadow-[0_0_40px_rgba(94,234,212,0.28)] transition hover:scale-[1.02] hover:bg-teal-200"
              >
                View services
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                View portfolio proof
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-teal-300/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
              <PixelArtImage asset="heroSystemsMap" className="w-full rounded-[1.75rem]" />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {assetList.slice(1, 4).map((asset) => (
                  <div key={asset.key} className="rounded-2xl border border-white/10 bg-slate-950/50 p-3">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{asset.bestUse}</div>
                    <div className="mt-1 font-bold text-white">{asset.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="scope-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Scope separation
            </div>
            <h2 id="scope-heading" className="text-3xl font-black text-foreground sm:text-4xl">
              One website, three responsibilities.
            </h2>
            <p className="mt-4 leading-8 text-foreground-secondary">
              GroveX can feel polished without making every page carry the same job. Service pages should sell clearly. Portfolio pages should prove capability. The asset system should keep the visual language reusable and coherent.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {scopeRows.map((row) => (
              <article key={row.label} className="rounded-3xl border border-border bg-background-secondary/60 p-6 shadow-soft">
                <h3 className="text-xl font-bold text-foreground">{row.label}</h3>
                <p className="mt-4 leading-7 text-foreground-secondary">{row.purpose}</p>
                <div className="mt-5 rounded-2xl border border-primary/10 bg-primary/5 p-4 text-sm font-medium leading-6 text-primary">
                  {row.visualRole}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-background to-background-secondary px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="asset-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
                Asset library
              </div>
              <h2 id="asset-heading" className="text-3xl font-black text-foreground sm:text-4xl">
                Reusable card and hero visuals.
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-foreground-secondary">
                These SVG assets are static-hosting safe under <code className="rounded bg-background px-1.5 py-1 font-mono text-sm text-foreground">/pixel_art</code> and can be used by service cards, hero panels, portfolio proof pages, and future product pages.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {assetList.map((asset) => (
              <article key={asset.key} className="overflow-hidden rounded-3xl border border-border bg-background shadow-soft transition hover:-translate-y-1 hover:shadow-large">
                <div className="relative bg-slate-950 p-6">
                  <PixelArtImage asset={asset.key} className="mx-auto aspect-square w-full max-w-[260px]" />
                </div>
                <div className="p-6">
                  <div className="mb-3 inline-flex rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    {asset.bestUse}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{asset.title}</h3>
                  <p className="mt-3 leading-7 text-foreground-secondary">{asset.description}</p>
                  <code className="mt-4 block rounded-xl bg-background-secondary p-3 text-xs text-foreground">
                    {asset.src}
                  </code>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

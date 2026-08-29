import Link from "next/link";
import EvidenceCard from "@/app/components/EvidenceCard";
import { PixelArtImage } from "@/components/PixelArtAsset";
import { homepageEvidenceProjects } from "@/lib/portfolio-evidence";

export default function EnhancedHero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 px-4 pb-14 pt-20 text-white sm:px-6 sm:pb-16 sm:pt-24 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,rgba(94,234,212,0.18),transparent_32%),radial-gradient(circle_at_82%_14%,rgba(96,165,250,0.16),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_58%,#111827_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/25 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-100">
            124 Grant Street, Turtle Creek, PA 15145
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            Reliable websites, systems, and IT support for local business.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            GroveX helps small businesses improve their web presence, fix operational friction, and build practical technology that stays understandable after launch.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-teal-300 px-6 py-3 font-bold text-slate-950 shadow-[0_0_40px_rgba(94,234,212,0.28)] transition hover:scale-[1.02] hover:bg-teal-200"
            >
              Request a business systems review
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Review public evidence
            </Link>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -inset-8 rounded-[3rem] bg-teal-300/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
            <PixelArtImage asset="heroSystemsMap" className="w-full rounded-[1.75rem]" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-3 text-center">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Web</div>
                <div className="mt-1 text-sm font-bold">Clear conversion paths</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-3 text-center">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Ops</div>
                <div className="mt-1 text-sm font-bold">Practical support</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-3 text-center">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Build</div>
                <div className="mt-1 text-sm font-bold">Custom systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6" aria-labelledby="hero-evidence-heading">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="hero-evidence-heading" className="text-sm font-bold uppercase tracking-[0.2em] text-teal-100">
            Public evidence, with maturity stated
          </h2>
          <p className="text-sm text-slate-300">No customer outcome or live-trading claim is implied.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {homepageEvidenceProjects.map((project) => (
            <EvidenceCard key={project.id} project={project} variant="compact" />
          ))}
        </div>
      </section>
    </section>
  );
}

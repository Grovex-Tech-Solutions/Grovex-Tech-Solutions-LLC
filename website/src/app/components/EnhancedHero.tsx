import Link from "next/link";
import { PixelArtImage } from "@/components/PixelArtAsset";

const proofPoints = [
  "124 Grant Street, Turtle Creek",
  "Websites, systems, and IT support",
  "Built for owner-led local business",
];

export default function EnhancedHero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white" role="banner" aria-label="GroveX homepage hero">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(20,184,166,0.30),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(59,130,246,0.22),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_48%,#042f2e_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:44px_44px]" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-px w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-teal-200/70 to-transparent" aria-hidden="true" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-teal-200/20 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-teal-50 shadow-2xl backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_22px_rgba(94,234,212,0.9)]" aria-hidden="true" />
              124 Grant Street, Turtle Creek, PA 15145
            </div>

            <h1 className="max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Reliable websites, systems, and IT support for local business.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              We&apos;re your local tech partner in Turtle Creek. We build websites that bring in customers, keep your devices and networks running, clean up the busywork, and handle the everyday technology so you can get back to running your business.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row" role="group" aria-label="Primary GroveX actions">
              <Link
                href="/contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-teal-300 px-7 py-3 text-base font-black text-slate-950 shadow-[0_18px_60px_rgba(45,212,191,0.28)] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Request a Business Systems Review
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-7 py-3 text-base font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-teal-200/60 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Explore Services
              </Link>
            </div>

            <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {proofPoints.map((point, index) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-sm">
                  <dt className="font-mono text-xs font-black tracking-[0.24em] text-teal-200">0{index + 1}</dt>
                  <dd className="mt-2 text-sm font-semibold leading-5 text-slate-100">{point}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none" aria-label="GroveX visual systems map">
            <div className="absolute -inset-6 rounded-[2.25rem] bg-gradient-to-br from-teal-300/20 via-blue-400/10 to-transparent blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/70 to-transparent" aria-hidden="true" />
              <div className="rounded-[1.55rem] border border-white/10 bg-slate-900/75 p-3">
                <PixelArtImage asset="heroSystemsMap" className="h-auto w-full rounded-[1.25rem]" />
              </div>
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-slate-950/72 p-4 text-left shadow-xl backdrop-blur-md">
                <div className="font-mono text-xs font-black uppercase tracking-[0.26em] text-teal-100">What we do</div>
                <div className="mt-1 text-xl font-black tracking-[-0.03em] text-white">Websites, IT support, and custom software — all from one local team.</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">Technical enough to fix the real problem, local enough to stand behind the work.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

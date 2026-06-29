import Link from "next/link";

const nextSteps = [
  "Talk through the website, support, systems, or workflow problem",
  "Identify whether the next move is a page, repair, setup, software build, or process cleanup",
  "Scope a practical GroveX service path with clear pricing and handoff expectations",
];

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-24" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.24),transparent_28%),radial-gradient(circle_at_82%_30%,rgba(59,130,246,0.18),transparent_32%),linear-gradient(135deg,#020617_0%,#0f172a_55%,#042f2e_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:42px_42px]" aria-hidden="true" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.055] p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-teal-200/20 bg-teal-300/10 px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-teal-100">
                Start with GroveX
              </div>
              <h2 id="cta-heading" className="max-w-3xl text-3xl font-black tracking-[-0.045em] text-white sm:text-4xl lg:text-6xl">
                Start with the practical bottleneck.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Talk with GroveX about the website, support, systems, or workflow problem slowing the business down right now. The first step is a practical business systems review, not a vague pitch.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-teal-300 px-7 py-3 text-base font-black text-slate-950 shadow-[0_18px_60px_rgba(45,212,191,0.25)] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Request a Business Systems Review
                </Link>
                <a
                  href="mailto:info@grovextech.com?subject=Business%20Systems%20Review%20Request"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-7 py-3 text-base font-bold text-white transition hover:-translate-y-0.5 hover:border-teal-200/60 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Email GroveX
                </a>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5">
              <div className="font-mono text-xs font-black uppercase tracking-[0.24em] text-teal-100">Review sequence</div>
              <ol className="mt-5 space-y-3">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-300 font-mono text-xs font-black tracking-[0.18em] text-slate-950">0{index + 1}</span>
                    <span className="pt-1 text-base font-semibold leading-6 text-slate-100">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-5 space-y-2 text-sm leading-6 text-slate-400">
                <p>Call: <a href="tel:+14122069453" className="font-semibold text-teal-100 hover:text-white">(412) 206-9453</a></p>
                <p>Email: <a href="mailto:info@grovextech.com" className="font-semibold text-teal-100 hover:text-white">info@grovextech.com</a></p>
                <p>Rooted in Turtle Creek, serving the Mon Valley and nearby businesses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const operatingPrinciples = [
  {
    marker: "01",
    title: "Operations before hype",
    description:
      "GroveX focuses on the website, systems, devices, and workflows that need to be stable before a business spends more money on marketing, software, or new platforms.",
  },
  {
    marker: "02",
    title: "Practical strategy for the actual bottleneck",
    description:
      "Recommendations are shaped around the owner’s budget, the current bottleneck, and the next move that will make the business clearer or easier to run.",
  },
  {
    marker: "03",
    title: "Execution across the stack",
    description:
      "From customer-facing websites to behind-the-scenes tech cleanup, GroveX handles the systems work that supports reliable local-business growth.",
  },
  {
    marker: "04",
    title: "Real local accountability",
    description:
      "GroveX is based in Turtle Creek and works with nearby businesses that need direct, accountable technical help rather than a remote handoff.",
  },
];

const metrics = [
  { value: "Local", label: "124 Grant Street, Turtle Creek" },
  { value: "Clear", label: "Plain-English guidance" },
  { value: "Useful", label: "Real fixes, no fluff" },
  { value: "Direct", label: "Web, IT, software, and support" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24" aria-labelledby="approach-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(20,184,166,0.12),transparent_28%),radial-gradient(circle_at_88%_35%,rgba(59,130,246,0.10),transparent_30%)]" aria-hidden="true" />
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="mb-5 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-teal-700 shadow-soft">
              Why GroveX
            </div>
            <h2 id="approach-heading" className="max-w-3xl text-3xl font-black tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-6xl">
              Honest, practical tech help — grounded in your actual business.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              GroveX helps local businesses make smart technology decisions, sharpen what customers see, and cut the friction slowing things down — no jargon, no overselling.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                  <div className="text-2xl font-black tracking-[-0.04em] text-slate-950">{metric.value}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-500">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {operatingPrinciples.map((principle) => (
              <article key={principle.marker} className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-large sm:p-8">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-teal-300 via-blue-400 to-slate-300 opacity-70" aria-hidden="true" />
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-teal-200 bg-teal-50 font-mono text-sm font-black tracking-[0.2em] text-teal-800 transition group-hover:bg-teal-300 group-hover:text-slate-950">
                    {principle.marker}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-[-0.035em] text-slate-950">{principle.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{principle.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

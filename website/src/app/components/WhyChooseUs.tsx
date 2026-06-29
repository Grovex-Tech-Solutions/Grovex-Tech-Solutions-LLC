const operatingPrinciples = [
  {
    marker: "01",
    title: "Start with the bottleneck",
    description:
      "We identify whether the real issue is the website, support path, workflow, device layer, or business process before prescribing a fix.",
  },
  {
    marker: "02",
    title: "Design for handoff",
    description:
      "Pages, systems, and documentation should be understandable by the owner and maintainable after the initial build is complete.",
  },
  {
    marker: "03",
    title: "Make proof visible",
    description:
      "Portfolio work and technical experiments sit one layer deeper, giving serious buyers evidence without overwhelming the first impression.",
  },
  {
    marker: "04",
    title: "Keep it operational",
    description:
      "The work is judged by whether it reduces friction, improves communication, and helps the business run with fewer recurring issues.",
  },
];

const metrics = [
  { value: "Local", label: "Turtle Creek presence" },
  { value: "Static", label: "Fast deployable pages" },
  { value: "Clear", label: "Plain-English systems" },
  { value: "Built", label: "Implementation over theater" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24" aria-labelledby="approach-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(20,184,166,0.12),transparent_28%),radial-gradient(circle_at_88%_35%,rgba(59,130,246,0.10),transparent_30%)]" aria-hidden="true" />
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="mb-5 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-teal-700 shadow-soft">
              Operating principles
            </div>
            <h2 id="approach-heading" className="max-w-3xl text-3xl font-black tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-6xl">
              Serious design is the visible edge of serious operations.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              GroveX should feel crafted and technical, but the purpose is practical: help a business owner understand the next move and trust that the implementation will hold up.
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

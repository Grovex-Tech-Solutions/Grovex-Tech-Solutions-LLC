import Link from "next/link";
import { PixelArtImage, type PixelArtAssetKey } from "@/components/PixelArtAsset";

const layers: Array<{
  title: string;
  eyebrow: string;
  description: string;
  asset: PixelArtAssetKey;
  href: string;
}> = [
  {
    eyebrow: "Local business website",
    title: "Explain what GroveX does without sanding off the local context",
    description: "The site should quickly tell nearby owners that GroveX builds websites, landing pages, service pages, and customer contact paths for real small-business needs.",
    asset: "webFoundation",
    href: "/services",
  },
  {
    eyebrow: "Business systems and IT",
    title: "Keep support, devices, workflows, and operations connected",
    description: "GroveX is not just a pretty-page shop. The offer includes dependable help for networks, devices, software ideas, workflow cleanup, repairs, and owner-facing support.",
    asset: "operationsGrid",
    href: "/services",
  },
  {
    eyebrow: "Technical proof",
    title: "Show advanced work after the core GroveX offer is clear",
    description: "Portfolio work like Finance Feedback Engine and ReflexNet proves depth, but it should support the GroveX story rather than replace the website's local-business message.",
    asset: "reflexnetDreamscope",
    href: "/portfolio",
  },
];

export default function OperatingSystemSection() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-white py-14 sm:py-18 lg:py-20" aria-labelledby="operating-system-heading">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px)] [background-size:36px_36px]" aria-hidden="true" />
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-teal-800">
              GroveX site architecture
            </div>
            <h2 id="operating-system-heading" className="max-w-3xl text-3xl font-black tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">
              Clear local offer first. Deeper technical proof after.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-slate-600 lg:ml-auto">
            This redesign should make GroveX easier to understand, not less specific. The front page now keeps the Turtle Creek business context, practical service categories, and direct path to a systems review while still feeling crafted and technical.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {layers.map((layer, index) => (
            <Link
              key={layer.title}
              href={layer.href}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-soft transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-large focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
            >
              <div className="absolute right-5 top-5 font-mono text-sm font-black tracking-[0.22em] text-slate-300">0{index + 1}</div>
              <div className="relative h-44 overflow-hidden rounded-[1.25rem] border border-slate-900/10 bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(45,212,191,0.22),transparent_32%),radial-gradient(circle_at_78%_70%,rgba(59,130,246,0.20),transparent_36%)]" />
                <PixelArtImage asset={layer.asset} className="absolute inset-0 h-full w-full object-contain p-5 transition duration-500 group-hover:scale-[1.035]" />
              </div>
              <div className="p-3 pt-5">
                <div className="font-mono text-xs font-black uppercase tracking-[0.24em] text-teal-700">{layer.eyebrow}</div>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.035em] text-slate-950">{layer.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{layer.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

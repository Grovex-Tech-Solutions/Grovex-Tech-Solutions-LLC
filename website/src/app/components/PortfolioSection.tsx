import Link from "next/link";
import { PixelArtImage, type PixelArtAssetKey } from "@/components/PixelArtAsset";

type Capability = {
  id: string;
  title: string;
  description: string;
  category: string;
  art: PixelArtAssetKey;
  href: string;
  cta: string;
};

const capabilities: Capability[] = [
  {
    id: "web-foundation",
    title: "Web & Operations Foundations",
    description: "Websites, landing pages, service-page cleanup, and infrastructure that helps local businesses explain what they do and capture qualified inquiries.",
    category: "Strategy",
    art: "webFoundation",
    href: "/services",
    cta: "View website work",
  },
  {
    id: "operations-grid",
    title: "Operations, IT & Repair Support",
    description: "Support for devices, networks, workflows, and critical troubleshooting needs so the business runs cleaner behind the scenes.",
    category: "Operations",
    art: "operationsGrid",
    href: "/services",
    cta: "View support work",
  },
  {
    id: "custom-systems",
    title: "Custom Systems",
    description: "Software, automations, dashboards, and internal tools that cut friction, reduce repeat work, and support better decision-making.",
    category: "Build",
    art: "customSystems",
    href: "/software-development",
    cta: "Explore systems",
  },
  {
    id: "finance-feedback-engine",
    title: "Finance Feedback Engine",
    description: "A public technical showcase for auditable trading-system feedback loops, experiment gates, and workflow-gated paper-mode evidence.",
    category: "Systems proof",
    art: "reflexnetDreamscope",
    href: "/portfolio/finance-feedback-engine",
    cta: "View proof",
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="capabilities-heading">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" aria-hidden="true" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-teal-800">
              What GroveX builds
            </div>
            <h2 id="capabilities-heading" className="max-w-3xl text-3xl font-black tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-6xl">
              Business technology infrastructure for local operators.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-slate-600 lg:ml-auto">
            GroveX brings together websites, support, and systems work so local businesses can operate from a stronger, more dependable base.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item, index) => (
            <article key={item.id} className="group relative flex min-h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-large" aria-labelledby={`capability-${item.id}-title`}>
              <div className="relative h-52 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(94,234,212,0.22),transparent_32%),radial-gradient(circle_at_78%_12%,rgba(96,165,250,0.20),transparent_30%),radial-gradient(circle_at_58%_92%,rgba(20,184,166,0.16),transparent_35%)]" />
                <PixelArtImage asset={item.art} className="absolute inset-0 h-full w-full object-contain p-5 transition duration-500 group-hover:scale-[1.04]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/65 px-3 py-1 font-mono text-xs font-black tracking-[0.2em] text-teal-100 backdrop-blur">
                  0{index + 1}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="font-mono text-xs font-black uppercase tracking-[0.22em] text-teal-700">{item.category}</div>
                <h3 id={`capability-${item.id}-title`} className="mt-3 text-2xl font-black tracking-[-0.035em] text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{item.description}</p>
                <Link href={item.href} className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:border-teal-300 hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">
                  {item.cta}
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/services" className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-black text-white shadow-large transition hover:-translate-y-0.5 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2">
            View all services
          </Link>
          <Link href="/pixel_art" className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2">
            View visual asset system
          </Link>
        </div>
      </div>
    </section>
  );
}

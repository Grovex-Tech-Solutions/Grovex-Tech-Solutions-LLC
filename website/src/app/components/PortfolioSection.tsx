import Link from "next/link";
import { PixelArtImage, type PixelArtAssetKey } from "@/components/PixelArtAsset";

const serviceLanes: ReadonlyArray<{
  title: string;
  description: string;
  category: string;
  art: PixelArtAssetKey;
  href: string;
  cta: string;
}> = [
  {
    title: "Web & Operations Foundations",
    description:
      "Clear websites, local search basics, and business operations support built around a practical scope.",
    category: "Services offered",
    art: "webFoundation",
    href: "/services",
    cta: "Explore services",
  },
  {
    title: "Operations, IT & Repair Support",
    description:
      "Device setup, troubleshooting, workflow cleanup, and practical systems help for day-to-day reliability.",
    category: "Services offered",
    art: "operationsGrid",
    href: "/services",
    cta: "See support options",
  },
  {
    title: "Custom Systems",
    description:
      "Focused software, automations, integrations, and reporting tools when an off-the-shelf product does not fit.",
    category: "Services offered",
    art: "customSystems",
    href: "/software-development",
    cta: "View software capabilities",
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="work-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-teal-800/20 bg-teal-800/10 px-4 py-2 text-sm font-semibold text-teal-900 dark:text-teal-100">
            Offers and evidence stay separate
          </div>
          <h2 id="work-heading" className="text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            Services describe what we offer. Public evidence shows what exists.
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground-secondary">
            Service lanes are intentionally not presented as delivered work. The public evidence row above states project maturity and limitations separately.
          </p>
        </div>

        <section aria-labelledby="service-lanes-heading">
          <h3 id="service-lanes-heading" className="text-xl font-bold text-foreground">
            Service lanes
          </h3>
          <div className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceLanes.map((item) => (
              <article key={item.title} className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background-secondary/50 shadow-soft">
                <div className="bg-slate-950 p-5">
                  <PixelArtImage asset={item.art} className="mx-auto aspect-square w-full max-w-[210px]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.16em] text-teal-900 dark:text-teal-100">{item.category}</div>
                  <h4 className="mt-3 text-xl font-bold text-foreground">{item.title}</h4>
                  <p className="mt-3 flex-1 leading-7 text-slate-700 dark:text-slate-200">{item.description}</p>
                  <Link href={item.href} className="mt-5 font-bold text-teal-900 underline decoration-teal-900/30 underline-offset-4 hover:decoration-teal-900 dark:text-teal-100">
                    {item.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-10 border-t border-border pt-8">
          <Link href="/portfolio" className="font-bold text-teal-900 underline decoration-teal-900/30 underline-offset-4 hover:decoration-teal-900 dark:text-teal-100">
            Review the full evidence inventory and policy
          </Link>
        </div>
      </div>
    </section>
  );
}

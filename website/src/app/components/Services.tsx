import HomeTechSupportIcon from "./icons/HomeTechSupportIcon";
import SmallBusinessIcon from "./icons/SmallBusinessIcon";
import CommunityEducationIcon from "./icons/CommunityEducationIcon";
import WebsiteDesignIcon from "./icons/WebsiteDesignIcon";
import { PrimaryButton } from "@/components/ui";

const services = [
  {
    id: "web-development",
    eyebrow: "01 / Web presence",
    title: "Websites & Landing Pages",
    description: "Credible service pages, local-search foundations, and conversion paths that explain the offer before asking visitors to call.",
    icon: WebsiteDesignIcon,
    link: "/services#web-development",
  },
  {
    id: "small-business-it",
    eyebrow: "02 / Reliability",
    title: "Business Systems & IT Support",
    description: "Device, network, support, and operations help for businesses that need fewer recurring technical interruptions.",
    icon: SmallBusinessIcon,
    link: "/services#small-business-it",
  },
  {
    id: "home-support",
    eyebrow: "03 / Workflow",
    title: "Custom Software & Cleanup",
    description: "Internal tools, automations, and process improvements that reduce repeated manual work and make handoffs clearer.",
    icon: HomeTechSupportIcon,
    link: "/services#home-support",
  },
  {
    id: "community-education",
    eyebrow: "04 / Readiness",
    title: "Strategy, Training & Planning",
    description: "Practical recommendations before you spend more on ads, tools, or platforms that may not match the bottleneck.",
    icon: CommunityEducationIcon,
    link: "/services#community-education",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20 lg:py-24" aria-labelledby="services-heading">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-teal-100">
              Core services
            </div>
            <h2 id="services-heading" className="max-w-3xl text-3xl font-black tracking-[-0.045em] text-white sm:text-4xl lg:text-6xl">
              Practical technical work, organized around the business problem.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-slate-300 lg:ml-auto">
            The redesign treats GroveX as a serious technical studio: fewer generic promises, more explicit paths from customer-facing clarity to behind-the-scenes reliability.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4" role="list" aria-label="GroveX business services">
          {services.map((service) => (
            <article
              key={service.id}
              role="listitem"
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-teal-200/50 hover:bg-white/[0.07]"
              aria-labelledby={`service-title-${service.id}`}
              aria-describedby={`service-desc-${service.id}`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/50 to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
              <div className="mb-8 flex items-center justify-between gap-4">
                <div className="rounded-2xl border border-teal-200/20 bg-teal-300/10 p-4 text-teal-100 transition group-hover:bg-teal-300 group-hover:text-slate-950" aria-hidden="true">
                  <service.icon className="h-7 w-7" />
                </div>
                <div className="font-mono text-xs font-black uppercase tracking-[0.22em] text-slate-500">{service.eyebrow}</div>
              </div>

              <h3 id={`service-title-${service.id}`} className="text-2xl font-black tracking-[-0.035em] text-white transition group-hover:text-teal-100">
                {service.title}
              </h3>
              <p id={`service-desc-${service.id}`} className="mt-4 min-h-28 text-base leading-7 text-slate-300">
                {service.description}
              </p>

              <a
                href={service.link}
                className="mt-7 inline-flex min-h-[44px] items-center rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-teal-100 transition hover:border-teal-200/60 hover:bg-teal-300 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label={`Learn more about ${service.title}`}
              >
                Open service path
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[1.5rem] border border-teal-200/15 bg-gradient-to-r from-teal-300/10 via-white/[0.04] to-blue-400/10 p-6 text-center sm:p-8">
          <p className="mx-auto mb-6 max-w-3xl text-lg leading-8 text-slate-200">
            Start with the bottleneck. GroveX can map whether the right next move is a stronger page, a support fix, a workflow tool, or a cleaner operating process.
          </p>
          <PrimaryButton href="/contact">Request a Business Systems Review</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

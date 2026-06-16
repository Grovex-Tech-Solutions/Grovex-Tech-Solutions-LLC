import Link from "next/link";

const serviceCapabilities = [
  {
    id: "growth-foundation",
    title: "Growth Foundations",
    description: "Websites, landing pages, messaging cleanup, and infrastructure that helps local businesses look trustworthy before they scale traffic.",
    category: "Strategy",
    icon: "🌱",
    href: "/services"
  },
  {
    id: "operations-support",
    title: "Operations, IT & Repair Support",
    description: "Support for devices, networks, workflows, and critical repair/troubleshooting needs so the business runs cleaner behind the scenes.",
    category: "Operations",
    icon: "🛠️",
    href: "/services"
  },
  {
    id: "custom-systems",
    title: "Custom Systems",
    description: "Software, automations, and internal tools that cut friction, reduce repeat work, and support better decision-making.",
    category: "Build",
    icon: "⚙️",
    href: "/services"
  },
  {
    id: "finance-feedback-engine",
    title: "Finance Feedback Engine",
    description: "A public technical showcase for auditable trading-system feedback loops, experiment gates, and evidence-gated research workflows.",
    category: "Systems Proof",
    icon: "📈",
    href: "/portfolio/finance-feedback-engine"
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-background-secondary" aria-labelledby="capabilities-heading">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            What We Build
          </div>

          <h2 id="capabilities-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-slide-up text-foreground">
            Growth Infrastructure for Local Business
          </h2>

          <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            GroveX brings together websites, support, and systems work so local businesses can grow from a stronger, more dependable base.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 max-w-7xl mx-auto">
          {serviceCapabilities.map((service, index) => (
            <article
              key={service.id}
              className={`bg-background dark:bg-background-secondary rounded-2xl overflow-hidden shadow-soft hover:shadow-large border border-border/50 dark:border-border hover:border-primary/20 dark:hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 animate-slide-up animation-delay-${400 + index * 100}`}
              role="article"
              aria-labelledby={`service-${service.id}-title`}
            >
              {service.id === "finance-feedback-engine" ? (
                <div className="relative h-48 overflow-hidden bg-slate-950 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,211,238,0.35),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.3),transparent_32%),radial-gradient(circle_at_55%_90%,rgba(16,185,129,0.25),transparent_35%)]" />
                  <svg aria-hidden="true" viewBox="0 0 420 210" className="absolute inset-0 h-full w-full opacity-90">
                    <defs>
                      <linearGradient id="homeFfeLine" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="55%" stopColor="#a78bfa" />
                        <stop offset="100%" stopColor="#34d399" />
                      </linearGradient>
                    </defs>
                    <path d="M38 154 C96 76 142 126 188 78 S285 68 342 116 382 92 396 44" fill="none" stroke="url(#homeFfeLine)" strokeLinecap="round" strokeWidth="8" />
                    {[38, 126, 188, 272, 342, 396].map((x, i) => {
                      const y = [154, 104, 78, 76, 116, 44][i];
                      return <circle key={x} cx={x} cy={y} r="8" fill="#020617" stroke="#67e8f9" strokeWidth="3" />;
                    })}
                  </svg>
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur">
                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100">Systems proof</div>
                    <div className="mt-1 text-lg font-black">Feedback loops with evidence gates</div>
                  </div>
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-6xl">
                  {service.icon}
                </div>
              )}

              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 id={`service-${service.id}-title`} className="text-xl font-bold text-foreground">{service.title}</h3>
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">{service.category}</span>
                </div>

                <p className="text-foreground-secondary mb-4">{service.description}</p>

                <Link href={service.href} className="inline-flex items-center text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-1 text-sm">
                  {service.id === "finance-feedback-engine" ? "View Showcase" : "Learn More"}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-glow hover:scale-105 transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="View all available services"
          >
            <span>View All Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

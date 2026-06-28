import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const showcaseProjects = [
  {
    title: "GroveX Tech Website & Positioning",
    description:
      "A cleaner, B2B-first web presence for GroveX Tech that sharpens the message, improves trust signals, and makes the service model easier to evaluate.",
    image: "/Capture.webp",
    repoUrl: "https://github.com/Grovex-Tech-Solutions/Grovex-Tech-Solutions-LLC",
    liveUrl: "https://grovextech.com",
    tags: ["Next.js", "Brand Positioning", "Operational Foundation"],
  },
  {
    title: "Finance Feedback Engine",
    description:
      "Live public technical showcase for trading-system research focused on runtime correctness, audit trails, safer feedback loops, and a workflow-gated paper-mode evidence feed.",
    image: "/assets/derrr/social-preview.png",
    repoUrl: "https://github.com/Grovex-Tech-Solutions/finance_feedback_engine",
    liveUrl: "/portfolio/finance-feedback-engine",
    liveLabel: "View Showcase",
    tags: ["Python", "LLM Systems", "Research Infrastructure"],
  },
  {
    title: "Client Web & Automation Builds",
    description:
      "Practical business-facing work across websites, support flows, and custom systems that reduce friction and make operations easier to run day to day.",
    image: "/saas_products.webp",
    repoUrl: "https://github.com/Grovex-Tech-Solutions/all-around-photos",
    liveUrl: "https://github.com/Grovex-Tech-Solutions",
    tags: ["Automation", "Web Development", "Business Systems"],
  },
] as const;

export const metadata: Metadata = {
  title: "Our Work & Credentials | GroveX Tech",
  description:
    "See GroveX Tech work across websites, software, IT support, and practical systems built to help local businesses operate with more confidence.",
  openGraph: {
    title: "Our Work & Credentials | GroveX Tech",
    description: "Client work, reviews, and technical proof from GroveX Tech",
    type: "website",
    url: "https://grovextech.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Grovex Technologies & Software Solutions LLC",
            description:
              "Websites, software, IT support, and business systems in Turtle Creek, PA",
            url: "https://grovextech.com/portfolio",
            address: {
              "@type": "PostalAddress",
              streetAddress: "124 Grant Street",
              addressLocality: "Turtle Creek",
              addressRegion: "PA",
              postalCode: "15145",
              addressCountry: "US",
            },
          }),
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-6 inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary animate-fade-in">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-secondary"></span>
            Building Trust Through Visible Work
          </div>

          <h1 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Our Work & Credentials
          </h1>
          <p className="mx-auto max-w-3xl px-2 text-base leading-relaxed text-foreground-secondary sm:text-lg md:text-xl">
            Visible examples that show how GroveX Tech approaches websites, systems, support, and software work.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800 sm:p-8">
            <div className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
                Where to Find Us
              </h2>
              <p className="text-foreground-secondary">
                GroveX is anchored at a real local address in Turtle Creek
              </p>
            </div>

            <div className="relative min-h-[500px] w-full">
              <iframe
                src="https://www.google.com/maps?q=124+Grant+Street,+Turtle+Creek,+PA+15145&output=embed"
                width="100%"
                height="500"
                className="rounded-lg border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GroveX Tech location on Google Maps"
              />
              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=124+Grant+Street,+Turtle+Creek,+PA+15145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 font-medium text-primary transition-all hover:bg-primary/20 hover:text-primary-hover"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                  </svg>
                  View the location on Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-slate-950 via-slate-900 to-primary/80 text-white shadow-lg">
            <div className="flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Public Work Evidence
                </div>
                <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                  Technical Capability
                </h2>
                <p className="max-w-xl leading-relaxed text-white/80">
                  GroveX Tech combines web, systems, support, and software experience to help local businesses clean up operations, strengthen their online presence, and make the work easier to inspect.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold">Public</div>
                  <div className="mt-1 text-sm text-white/75">repos and project pages visitors can inspect</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold">Web + Ops</div>
                  <div className="mt-1 text-sm text-white/75">websites, support, automation, and software</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold">GitHub-Backed</div>
                  <div className="mt-1 text-sm text-white/75">visible artifacts instead of vague claims</div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://github.com/Grovex-Tech-Solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition-all hover:scale-[1.02] hover:bg-white/90"
                >
                  View GroveX Tech on GitHub
                </a>
                <a
                  href="https://github.com/Zzzero-hash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition-all hover:scale-[1.02] hover:bg-white/10"
                >
                  See Christian&apos;s recent work
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-12 sm:mb-16" aria-labelledby="showcase-heading">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="showcase-heading" className="text-2xl font-bold text-foreground sm:text-3xl">
                Recent Build Highlights
              </h2>
              <p className="mt-2 max-w-3xl text-foreground-secondary">
                A few visible examples of current GroveX work, with direct links back to code, project pages, or public artifacts where available.
              </p>
            </div>
            <a
              href="https://github.com/Grovex-Tech-Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Browse the GitHub organization
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {showcaseProjects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-border/60 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800"
              >
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="mb-5 text-sm leading-relaxed text-foreground-secondary sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                    >
                      View Code
                    </a>
                    {project.liveUrl.startsWith("/") ? (
                      <Link
                        href={project.liveUrl}
                        className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                      >
                        {"liveLabel" in project ? project.liveLabel : "Open Project"}
                      </Link>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                      >
                        {"liveLabel" in project ? project.liveLabel : "Open Project"}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8 text-center sm:p-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Ready to Fix the Next Bottleneck?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-foreground-secondary">
            Whether you need a better website, cleaner systems, or a more dependable support setup, GroveX Tech can help scope the next practical step.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-primary-hover hover:shadow-glow"
            >
              <span>Start the Conversation</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-primary bg-transparent px-8 py-4 font-semibold text-primary transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white"
            >
              <span>View Our Services</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import HomeTechSupportIcon from "./icons/HomeTechSupportIcon";
import SmallBusinessIcon from "./icons/SmallBusinessIcon";
import CommunityEducationIcon from "./icons/CommunityEducationIcon";
import WebsiteDesignIcon from "./icons/WebsiteDesignIcon";
import { PrimaryButton } from "@/components/ui";

const services = [
  {
    id: "web-development",
    title: "Websites & Landing Pages",
    description: "Credible business websites and landing pages that explain the offer clearly, support local search, and make it easier for qualified customers to reach you.",
    icon: WebsiteDesignIcon,
    link: "/services#web-development",
  },
  {
    id: "small-business-it",
    title: "Business Systems & IT Support",
    description: "Dependable support for infrastructure, devices, networks, and day-to-day operations so your team can run without unnecessary friction.",
    icon: SmallBusinessIcon,
    link: "/services#small-business-it",
  },
  {
    id: "home-support",
    title: "Custom Software & Workflow Cleanup",
    description: "Internal tools, automations, and process improvements that reduce repeat work and create a stronger operational base for growth.",
    icon: HomeTechSupportIcon,
    link: "/services#home-support",
  },
  {
    id: "community-education",
    title: "Strategy, Training & Readiness",
    description: "Practical guidance for owners who need clearer service pages, stronger local search basics, and a realistic technology plan before adding more tools or ad spend.",
    icon: CommunityEducationIcon,
    link: "/services#community-education",
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-background-secondary" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <header className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            B2B Technology Foundation
          </div>

          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up text-foreground">
            Business Websites, Systems, and Support
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-200 font-medium">
            GroveX helps small-business owners strengthen the operational basics: credible websites, reliable devices and networks, cleaner workflows, and support that reduces downtime.
          </p>

          <div className="flex justify-center mt-8 animate-fade-in animation-delay-400">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-6xl mx-auto" role="list" aria-label="Our business services">
          {services.map((service, index) => (
            <article
              key={service.id}
              role="listitem"
              className={`animate-slide-up animation-delay-${600 + index * 100} group`}
              aria-labelledby={`service-title-${service.id}`}
              aria-describedby={`service-desc-${service.id}`}
            >
              <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-soft hover:shadow-large hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                <div
                  className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-4 mb-4 w-fit group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <div className="flex-grow">
                  <h3
                    id={`service-title-${service.id}`}
                    className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                  >
                    {service.title}
                  </h3>

                  <p
                    id={`service-desc-${service.id}`}
                    className="text-foreground-secondary mb-4 leading-relaxed"
                  >
                    {service.description}
                  </p>
                </div>

                <a
                  href={service.link}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-2 mt-auto group-hover:translate-x-1 transition-all duration-300 min-h-[44px]"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16 sm:mt-20 animate-fade-in animation-delay-1200">
          <p className="text-foreground-secondary mb-6 text-lg max-w-3xl mx-auto">
            If your business needs a stronger website, cleaner operations, or more dependable technology, this is the place to start.
          </p>
          <PrimaryButton
            href="/contact"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            }
          >
            Request a Business Systems Review
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

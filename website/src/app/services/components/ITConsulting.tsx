import OptimizedImage from "@/components/OptimizedImage";

export default function ITConsulting() {
  return (
    <section id="small-business-it" className="py-16 border-b border-border scroll-mt-24">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Small Business IT Packages</h2>
          <p className="text-foreground-secondary mb-6">
            Affordable IT solutions designed specifically for local small businesses. We understand that as a small business owner in Turtle Creek, you need reliable technology that fits your budget and serves your customers effectively.
          </p>
          
          <div className="space-y-6">
            {/* Starter Website Package */}
            <div className="bg-background-secondary border border-border p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Starter Website Package - $499</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">WordPress website with professional design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Domain registration and hosting setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Local SEO optimization for Turtle Creek area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Google My Business setup and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Basic training on content updates</span>
                </li>
              </ul>
            </div>

            {/* Small Office IT Setup */}
            <div className="bg-background-secondary border border-border p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Small Office IT Setup - $299-599</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Router and network security configuration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Printer integration and wireless setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Basic cybersecurity package</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Email setup for business accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Point-of-sale system integration (if needed)</span>
                </li>
              </ul>
            </div>

            {/* Managed Care Plans */}
            <div className="bg-background-secondary border border-border p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-4">Monthly Support Plans</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-border pl-4">
                  <p className="font-medium text-foreground">Tech Support Essentials - $49/month</p>
                  <p className="text-sm text-foreground-secondary">Antivirus, monthly updates, email support</p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <p className="font-medium text-foreground">Business Protection - $139/month</p>
                  <p className="text-sm text-foreground-secondary">Priority support, network monitoring, health reports</p>
                </div>
                <div className="border-l-2 border-primary pl-4 bg-primary/10 -ml-px py-2 rounded-r">
                  <p className="font-medium text-primary">Peace of Mind - Complete Care - $149/month <span className="text-xs bg-primary text-white px-2 py-0.5 rounded ml-2">Best Value</span></p>
                  <p className="text-sm text-foreground-secondary">Everything in Business Protection + monthly on-site visit, advanced cybersecurity, quarterly planning</p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <p className="font-medium text-foreground">Enterprise Partnership - $299/month</p>
                  <p className="text-sm text-foreground-secondary">Unlimited on-site visits, 24/7 support, dedicated account manager</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary/10 rounded-lg">
            <p className="text-sm font-medium text-primary">
              💡 All packages include transparent pricing with no hidden fees. We believe in honest, upfront costs so you can budget with confidence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href="/contact?service=small-business-it"
              className="inline-flex items-center justify-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors"
            >
              Request an Assessment
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="mailto:info@grovextech.com?subject=IT%20consulting%20inquiry"
              className="inline-flex items-center justify-center border border-primary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Email Our Team
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-background-secondary dark:bg-background p-4 rounded-xl relative overflow-hidden border border-border">
            {/* IT/Network themed animated elements */}
            <div className="absolute top-8 right-6 w-8 h-6 bg-primary/20 rounded animate-pulse [animation-delay:1s]">
              <div className="flex justify-between items-center h-full p-1">
                <div className="w-1 h-4 bg-primary/40 rounded"></div>
                <div className="w-1 h-3 bg-primary/40 rounded"></div>
                <div className="w-1 h-5 bg-primary/40 rounded"></div>
                <div className="w-1 h-2 bg-primary/40 rounded"></div>
              </div>
            </div>
            <div className="absolute bottom-8 left-4 w-7 h-7 bg-primary/15 rounded animate-bounce [animation-delay:2s] [animation-duration:2.8s] border border-primary/25">
              <div className="absolute inset-2 border-2 border-primary/30 rounded"></div>
              <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary/50 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="absolute top-1/4 right-4 w-6 h-4 bg-primary/25 rounded-sm animate-ping [animation-delay:0.5s]">
              <div className="w-full h-1 bg-primary/40 mt-1"></div>
              <div className="w-4 h-1 bg-primary/30 mt-0.5"></div>
            </div>
            <OptimizedImage
              src="/it_consult.png"
              alt="Small Business IT Consultation Services - Professional IT solutions for local businesses"
              width={600}
              height={400}
              className="rounded-lg w-full h-64 md:h-80 object-contain relative z-10"
              priority={false}
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

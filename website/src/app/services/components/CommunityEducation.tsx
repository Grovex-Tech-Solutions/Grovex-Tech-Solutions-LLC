import OptimizedImage from "@/components/OptimizedImage";

export default function CommunityEducation() {
  return (
    <section id="community-education" className="py-16 bg-background-secondary rounded-2xl p-8 scroll-mt-24">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-black">Strategy, Training & Readiness</h2>
          <p className="text-foreground-secondary mb-6">
            GroveX helps local owners and teams get clearer offers, stronger digital foundations, and practical technology guidance through direct consulting engagements.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-background border border-border p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">Digital Readiness Support</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Offer clarity:</strong> sharpen what you sell and who it is for</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Website readiness:</strong> identify gaps before spending on traffic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Marketing foundations:</strong> improve local search, content, and conversion basics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Practical systems guidance:</strong> choose simple tools that match your workflow</span>
                </li>
              </ul>
            </div>

            <div className="bg-background border border-border p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">One-on-One Guidance</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Small business reviews:</strong> understand what is helping or hurting your online presence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Action plans:</strong> prioritize the next few improvements instead of chasing every tactic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Founder/operator support:</strong> translate business goals into practical digital steps</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg mb-6">
            <p className="text-sm font-medium text-primary">
              Need practical help prioritizing your next digital improvements? Start with a focused conversation about your current goals and constraints.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact?service=community-education"
              className="inline-flex items-center justify-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors"
            >
              Request Strategy Help
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center border border-primary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-background-secondary dark:bg-background p-4 rounded-xl relative overflow-hidden border border-border">
            {/* Education/readiness themed animated elements */}
            <div className="absolute top-6 right-5 w-7 h-8 bg-primary/20 rounded animate-pulse [animation-delay:0.3s]">
              <div className="w-full h-1 bg-primary/40 mt-1"></div>
              <div className="w-5 h-1 bg-primary/30 mt-1"></div>
              <div className="w-4 h-1 bg-primary/30 mt-1"></div>
              <div className="w-6 h-1 bg-primary/30 mt-1"></div>
              <div className="w-3 h-1 bg-primary/30 mt-1"></div>
            </div>
            <div className="absolute bottom-7 left-5 w-6 h-6 bg-primary/15 rounded animate-bounce [animation-delay:1.8s] [animation-duration:2.6s] border border-primary/25">
              <div className="absolute inset-1 bg-primary/20 rounded"></div>
              <div className="absolute top-2 left-2 w-2 h-1 bg-primary/40"></div>
            </div>
            <div className="absolute top-1/2 left-8 w-8 h-5 bg-primary/25 rounded animate-ping [animation-delay:2.2s]">
              <div className="flex justify-between items-center h-full p-1">
                <div className="w-1 h-3 bg-primary/40"></div>
                <div className="w-1 h-2 bg-primary/40"></div>
                <div className="w-1 h-4 bg-primary/40"></div>
                <div className="w-1 h-1 bg-primary/40"></div>
              </div>
            </div>
            <OptimizedImage
              src="/community_ed.png"
              alt="Strategy, training, and readiness guidance for local business owners"
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

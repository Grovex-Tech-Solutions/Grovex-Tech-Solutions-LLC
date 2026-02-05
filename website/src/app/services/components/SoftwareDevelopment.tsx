import OptimizedImage from "@/components/OptimizedImage";

export default function SoftwareDevelopment() {
  return (
    <section id="web-development" className="py-16 border-b border-border scroll-mt-24">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-4 rounded-xl relative overflow-hidden">
            {/* Web development themed animated elements */}
            <div className="absolute top-6 left-4 w-8 h-6 bg-purple-200/40 rounded animate-pulse [animation-delay:0.5s]">
              <div className="flex space-x-1 p-1">
                <div className="w-1 h-1 bg-purple-400/60 rounded-full"></div>
                <div className="w-1 h-1 bg-purple-400/60 rounded-full"></div>
                <div className="w-1 h-1 bg-purple-400/60 rounded-full"></div>
              </div>
              <div className="w-full h-1 bg-purple-300/40 mt-1"></div>
            </div>
            <div className="absolute bottom-4 right-6 w-6 h-8 bg-pink-300/30 rounded animate-bounce [animation-delay:1.5s] [animation-duration:2.5s]">
              <div className="w-full h-2 bg-pink-400/50"></div>
              <div className="w-3/4 h-1 bg-pink-300/40 mt-1"></div>
              <div className="w-1/2 h-1 bg-pink-300/40 mt-1"></div>
            </div>
            <div className="absolute top-1/3 left-8 w-6 h-6 bg-purple-300/50 rounded animate-ping [animation-delay:3s] border border-purple-400/30">
              <div className="absolute inset-2 border border-purple-400/40"></div>
            </div>
            <OptimizedImage 
              src="/simple-web-design.png"
              alt="Simple Website Design - Custom web design solution for local businesses"
              width={600}
              height={480}
              className="rounded-lg w-full h-64 md:h-80 object-contain relative z-10"
              quality={90}
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Simple Website Design</h2>
          <p className="text-foreground-secondary mb-6">
            Professional, affordable websites for local businesses and community organizations. We focus on simple, effective designs that help you reach more customers in Turtle Creek and the surrounding area.
          </p>
          <div className="space-y-4">
            {/* Website Pricing Tiers */}
            <div className="bg-white border border-border p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Website Packages</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start border-b border-border pb-3">
                  <div>
                    <p className="font-medium">Starter Website - $499</p>
                    <p className="text-sm text-foreground-secondary">Up to 5 pages, mobile-responsive, basic SEO, 3 months support</p>
                  </div>
                </div>
                <div className="flex justify-between items-start border-b border-border pb-3 bg-primary/5 -mx-5 px-5 py-2">
                  <div>
                    <p className="font-medium text-primary">Professional Website - $899 <span className="text-xs bg-primary text-white px-2 py-0.5 rounded ml-2">Popular</span></p>
                    <p className="text-sm text-foreground-secondary">Up to 10 pages, custom design, CMS, advanced SEO, analytics, 6 months support</p>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Enterprise Website - $1,299+</p>
                    <p className="text-sm text-foreground-secondary">Unlimited pages, e-commerce, booking system, custom features, 12 months support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white border border-border p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">All Websites Include</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Local SEO to help customers find you online</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Responsive design that works on all devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Integration with social media and Google Business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground">Ongoing support and maintenance starting at $49/month</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

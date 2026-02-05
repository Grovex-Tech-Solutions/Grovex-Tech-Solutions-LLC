import OptimizedImage from "@/components/OptimizedImage";

export default function ComputerRepair() {
  return (
    <section id="home-support" className="py-16 scroll-mt-24">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Home & Personal Tech Support</h2>
          <p className="text-foreground-secondary mb-6">
            From slow laptops to smartphone setup, we provide friendly, local tech support right in your home or at our Turtle Creek location. No need to drive downtown - we&apos;re here to help the neighbors we see every day.
          </p>
          
          <div className="bg-background-secondary border-l-4 border-primary p-4 rounded-lg mb-6 shadow-sm">
            <p className="text-sm font-medium text-foreground">
              <strong className="text-primary">Free Diagnostic Assessment</strong> - We diagnose your problem at no charge and provide upfront pricing before any work begins. No surprises.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-primary">Our Home Tech Services</h3>
            <div className="bg-white border border-border p-6 rounded-lg shadow-sm">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Computer Repair & Virus Removal:</strong> Fix slow computers, remove malware, and restore performance - $99-149</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Wi-Fi Optimization & Setup:</strong> Get your home network running smoothly and securely - $99</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Smartphone Setup & Training for Seniors:</strong> Patient, step-by-step help with phones and tablets - $49/hour</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Data Backup & Recovery:</strong> Protect your photos, documents, and memories - $99-299</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Software Installation & Updates:</strong> Keep your programs current and secure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Email Setup & Management:</strong> Get your email working on all your devices</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-background-secondary border border-border p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-primary mb-2">On-Site Visits</h4>
              <p className="text-sm text-foreground">
                We come to you! Serving Turtle Creek, Wilmerding, Monroeville, and the Mon Valley.
                Service fee: $50 ($25 for seniors 65+)
              </p>
            </div>
            <div className="bg-background-secondary border-l-4 border-amber-500 dark:border-amber-400 p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-foreground mb-2">Emergency Service - $149</h4>
              <p className="text-sm text-foreground-secondary">
                Business system down? Same-day response guaranteed. On-site within 2 hours for critical issues.
              </p>
            </div>
          </div>

          {/* Senior Tech Safety Net */}
          <div className="bg-primary/10 border border-primary/30 p-5 rounded-lg mb-6 shadow-sm">
            <h4 className="font-semibold text-primary mb-2">Senior Tech Safety Net - $29/month</h4>
            <p className="text-sm text-foreground mb-3">
              Peace of mind for seniors and their families. Unlimited phone support, scam protection training, monthly device checkups, and patient assistance whenever you need it.
            </p>
            <p className="text-xs text-foreground-secondary italic">
              A community-focused service you won&apos;t find at big box stores.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact?service=home-support"
              className="inline-flex items-center justify-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors"
            >
              Book Home Visit
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="mailto:info@threeriverstech.com?subject=Home%20tech%20support%20request"
              className="inline-flex items-center justify-center border border-primary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Email Our Team
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-background-secondary dark:bg-background p-4 rounded-xl relative overflow-hidden border border-border">
            {/* Tech-themed animated elements */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-primary/20 rounded-sm animate-pulse transform rotate-12">
              <div className="w-full h-1 bg-primary/40 mt-1"></div>
              <div className="w-3/4 h-1 bg-primary/30 mt-1"></div>
            </div>
            <div className="absolute bottom-6 left-6 w-8 h-6 bg-primary/15 rounded animate-bounce [animation-delay:1s] [animation-duration:3s]">
              <div className="w-full h-2 bg-primary/30 rounded-t"></div>
              <div className="w-full h-2 bg-primary/20 mt-1"></div>
            </div>
            <div className="absolute top-1/2 right-8 w-5 h-5 bg-primary/25 rounded-full animate-ping [animation-delay:2s] border-2 border-primary/20">
              <div className="absolute inset-1 bg-primary/30 rounded-full"></div>
            </div>
            <OptimizedImage
              src="/computer_repair.png"
              alt="Computer Repair Services - Professional laptop and desktop repair for Turtle Creek residents"
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

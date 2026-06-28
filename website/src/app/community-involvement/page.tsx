import Link from "next/link";
import { generateStaticPageMetadata, generateLocalSeoMetadata } from "@/lib/metadata-generators";

export const metadata = generateLocalSeoMetadata(generateStaticPageMetadata("community-involvement"));

export default function CommunityInvolvementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            name: "Community Involvement - GroveX",
            description: "Learn how GroveX supports Turtle Creek through practical technology guidance, local presence, and accountable small-business support.",
            url: "https://grovextech.com/community-involvement",
            publisher: {
              "@type": "LocalBusiness",
              name: "GroveX",
              address: "124 Grant Street, Turtle Creek, PA 15145"
            }
          })
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Local Presence, Practical Support</h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed px-2">
            GroveX is being built as a local technology partner with a real address, practical services, and a clear focus on helping nearby businesses operate better.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center text-foreground">How GroveX Shows Up Locally</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-2xl">🤝</div>
                <h3 className="text-lg font-bold mb-2 text-foreground">Local Relationships</h3>
                <p className="text-sm text-foreground-secondary">Working directly with nearby businesses and organizations when there is a practical technology need to solve.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-2xl">🏬</div>
                <h3 className="text-lg font-bold mb-2 text-foreground">Visible Local Presence</h3>
                <p className="text-sm text-foreground-secondary">Maintaining a clear local presence at 124 Grant Street so business owners know where to find accountable help.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white text-2xl">🎓</div>
                <h3 className="text-lg font-bold mb-2 text-foreground">Practical Education</h3>
                <p className="text-sm text-foreground-secondary">Sharing knowledge that helps residents and local operators feel more capable with the tools they depend on.</p>
              </div>
            </div>

            <p className="text-foreground-secondary text-center max-w-3xl mx-auto">
              GroveX is rooted in the belief that local technology support should be visible, practical, and tied to real business needs.
            </p>
          </div>

          <div className="bg-background-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center text-foreground">Why This Matters</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Stronger Business Foundations</h3>
                <p className="text-foreground-secondary mb-4">
                  Better websites, cleaner systems, and clear customer paths help local businesses earn trust before they spend more on advertising.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-3 text-sm sm:text-base text-foreground"><span aria-hidden="true" className="text-primary mt-0.5 flex-shrink-0">✓</span><span className="leading-relaxed">Clearer presentation for customers</span></li>
                  <li className="flex items-start gap-3 text-sm sm:text-base text-foreground"><span aria-hidden="true" className="text-primary mt-0.5 flex-shrink-0">✓</span><span className="leading-relaxed">Less friction in day-to-day operations</span></li>
                  <li className="flex items-start gap-3 text-sm sm:text-base text-foreground"><span aria-hidden="true" className="text-primary mt-0.5 flex-shrink-0">✓</span><span className="leading-relaxed">A stronger base for future marketing</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Practical Local Improvement</h3>
                <p className="text-foreground-secondary mb-4">
                  The work around 124 Grant Street is intentionally practical: a reachable place for technology help, website questions, and business systems cleanup.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-3 text-sm sm:text-base text-foreground"><span aria-hidden="true" className="text-primary mt-0.5 flex-shrink-0">✓</span><span className="leading-relaxed">A more visible local technology contact</span></li>
                  <li className="flex items-start gap-3 text-sm sm:text-base text-foreground"><span aria-hidden="true" className="text-primary mt-0.5 flex-shrink-0">✓</span><span className="leading-relaxed">Clearer handoffs between local needs and technical help</span></li>
                  <li className="flex items-start gap-3 text-sm sm:text-base text-foreground"><span aria-hidden="true" className="text-primary mt-0.5 flex-shrink-0">✓</span><span className="leading-relaxed">Community-rooted support that stays realistic</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Need a Practical Technology Partner Nearby?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              If you care about clearer customer presentation, better systems, and fewer technology bottlenecks, let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/contact" className="bg-white text-primary font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 hover:shadow-large transform hover:-translate-y-1 transition-[shadow,transform,background-color] duration-300 text-center min-h-[48px] flex items-center justify-center">
                Request a Business Systems Review
              </Link>
              <Link href="/about" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white font-semibold py-3 px-6 rounded-xl hover:bg-white hover:text-primary transform hover:-translate-y-1 transition-[shadow,transform,background-color,color] duration-300 text-center min-h-[48px] flex items-center justify-center">
                Learn the Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";

export default function SpaceStorySection() {
  return (
    <section className="section-padding bg-background" aria-labelledby="space-story-heading">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-3xl p-8 sm:p-10 lg:p-14">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              The Space
            </div>

            <h2 id="space-story-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              A Shared-Space Story Taking Root at 124 Grant Street
            </h2>

            <p className="text-lg sm:text-xl text-foreground-secondary leading-relaxed mb-6">
              GroveX is being shaped around more than services. The long-term vision is a place where technology, creativity, and local commerce strengthen each other—starting with a tech studio alongside a flower shop.
            </p>

            <div className="mb-8 rounded-3xl overflow-hidden border border-border/60 shadow-large bg-black">
              <video
                className="w-full h-auto"
                controls
                preload="metadata"
                playsInline
              >
                <source src="/videos/grovex-space-flythrough.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mb-8 rounded-2xl bg-background p-5 border border-border/60 shadow-soft text-left max-w-3xl mx-auto">
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                <span className="font-semibold text-primary">Video credit:</span> Huge shoutout to <span className="font-semibold">allaroundphotosllc</span>. This video was made by <span className="font-semibold">Jonathan Brattina</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-8">
              <div className="rounded-2xl bg-background p-5 border border-border/60 shadow-soft">
                <h3 className="font-semibold text-foreground mb-2">Storefront Energy</h3>
                <p className="text-sm text-foreground-secondary">A physical presence that feels active, cared for, and easy to trust.</p>
              </div>
              <div className="rounded-2xl bg-background p-5 border border-border/60 shadow-soft">
                <h3 className="font-semibold text-foreground mb-2">Better Systems</h3>
                <p className="text-sm text-foreground-secondary">The back-end operations, tools, and support that keep growth from getting messy.</p>
              </div>
              <div className="rounded-2xl bg-background p-5 border border-border/60 shadow-soft">
                <h3 className="font-semibold text-foreground mb-2">Future Marketing Readiness</h3>
                <p className="text-sm text-foreground-secondary">A stronger destination for organic traffic now and paid traffic later.</p>
              </div>
            </div>

            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-glow transition-all duration-300 min-h-[48px]">
              Talk About the Vision
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

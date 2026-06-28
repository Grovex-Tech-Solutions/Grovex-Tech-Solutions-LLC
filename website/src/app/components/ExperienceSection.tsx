export default function ExperienceSection() {
  const expertise = [
    {
      title: "Cybersecurity & Risk Awareness",
      description: "Penn State Greater Allegheny training in Cybersecurity Analytics & Operations helps shape secure, dependable systems that businesses can actually maintain.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      skills: ["Security Reviews", "Risk Reduction", "Reliable Systems", "Safer Operations"]
    },
    {
      title: "Hands-On Support Experience",
      description: "Daily help desk work keeps the approach grounded: solve the real problem, explain it clearly, and make the fix sustainable instead of fragile.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      skills: ["Troubleshooting", "User Training", "IT Support", "Plain-English Help"]
    },
    {
      title: "Modern Web & Business Systems",
      description: "Websites, landing pages, and custom tools are built with performance, accessibility, conversion clarity, and maintainability in mind.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ["Next.js", "Landing Pages", "SEO", "Conversion Foundations"]
    },
    {
      title: "Local Accountability",
      description: "GroveX is being built as a long-term local business. The focus is straightforward: help nearby companies present clearly, operate reliably, and choose technology they can maintain.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ["Community Presence", "Accountable Support", "Practical Systems", "Local Business Support"]
    }
  ];

  return (
    <section className="section-padding bg-background-secondary" aria-labelledby="experience-heading">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <header className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
            Practical Experience, Practical Results
          </div>

          <h2 id="experience-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What GroveX Is Built On
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            GroveX blends technical depth, support experience, and local accountability into a business designed to solve practical problems for other small businesses.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {expertise.map((item, index) => (
            <article
              key={index}
              className="group relative bg-background dark:bg-background-secondary rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 border border-border/50 hover:border-primary/20 p-6 sm:p-8"
              role="article"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500"></div>

              <div className="relative">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-foreground-secondary mb-6 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-background-secondary dark:bg-background text-foreground-secondary text-xs font-medium rounded-full border border-border group-hover:border-primary/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-10 border border-primary/10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Building GroveX Around Real Work</h3>
          <p className="text-lg text-foreground-secondary mb-6 max-w-3xl mx-auto leading-relaxed">
            GroveX is being built around useful delivery first: clear scopes, working systems, local support, and evidence from real projects rather than inflated claims.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/about" className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-glow hover:scale-105 transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              <span>Learn More About GroveX</span>
            </a>
            <a href="/contact" className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white hover:shadow-glow hover:scale-105 transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              <span>Request a Business Systems Review</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

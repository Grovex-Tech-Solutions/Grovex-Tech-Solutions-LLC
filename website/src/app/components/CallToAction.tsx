import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-6xl">
        <header className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Start with the Practical Bottleneck
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Talk with GroveX about the website, support, systems, or workflow problem that is slowing the business down right now.
          </p>
        </header>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-large border border-white/20 animate-scale-in animation-delay-400">
          <div className="text-center space-y-6">
            <p className="text-white/90 text-lg mb-6">
              Need a practical next step? Reach out directly and we can scope the issue clearly.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+14122069453"
                className="block w-full bg-white text-primary font-bold py-4 px-8 rounded-xl hover:bg-gray-50 hover:shadow-large transform hover:-translate-y-1 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary min-h-[48px] text-lg border border-primary/30 focus:border-primary"
                aria-label="Call GroveX for a business systems review"
              >
                📞 Call Now: (412) 206-9453
              </a>

              <a
                href="mailto:info@grovextech.com?subject=Business Systems Review Request&body=Hi! I'd like to talk about:%0D%0A%0D%0ABusiness/Project: %0D%0ANeeds: %0D%0AGoals: %0D%0A%0D%0APlease contact me to schedule a conversation.%0D%0A%0D%0AThank you!"
                className="block w-full bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl hover:bg-white/30 hover:shadow-large transform hover:-translate-y-1 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary min-h-[48px] text-lg border border-white/30 focus:border-white"
                aria-label="Send email for a GroveX business systems review"
              >
                📧 Email GroveX
              </a>

              <div className="text-white/80 text-sm">
                <p>📍 Rooted in Turtle Creek, serving the Mon Valley and nearby businesses</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-600">
          <Link
            href="/contact"
            className="bg-white text-primary border-2 border-white font-bold py-4 px-8 rounded-xl hover:bg-primary hover:text-white hover:shadow-large transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary text-center min-h-[48px] flex items-center justify-center text-lg shadow-soft"
          >
            Request a Business Systems Review
          </Link>
        </div>
      </div>
    </section>
  );
}

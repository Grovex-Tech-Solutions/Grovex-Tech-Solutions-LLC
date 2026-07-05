import { ServiceIcon } from "@/components/OptimizedImage";
import { generateServicePageMetadata, generateLocalSeoMetadata } from "@/lib/metadata-generators";
import StructuredData from "@/components/StructuredData";
import { generatePageStructuredData } from "@/lib/structured-data";

export const metadata = generateLocalSeoMetadata(generateServicePageMetadata("software-development"));

export default function SoftwareDevelopmentSkillsPage() {
  return (
    <>
      <StructuredData data={generatePageStructuredData("service", {
        name: "Software Development Skills - GroveX",
        description: "Software development support for web applications, internal tools, APIs, and business workflow systems.",
        url: "https://grovextech.com/software-development",
        breadcrumbs: [
          { name: "Home", url: "https://grovextech.com" },
          { name: "Services", url: "https://grovextech.com/services" },
          { name: "Software Development", url: "https://grovextech.com/software-development" }
        ],
        serviceName: "Custom Software Development",
        serviceDescription: "Custom software development services for web applications, internal tools, APIs, and practical business systems."
      })} />
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Software Development for Business Operations</h1>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Building practical web apps, internal tools, and integrations for business workflows
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Technical Capabilities</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4 py-1">
                <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                <p className="text-foreground-secondary">
                  Creating responsive, maintainable user interfaces for websites, dashboards, portals, and internal business tools.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-1">
                <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                <p className="text-foreground-secondary">
                  Building server-side applications, APIs, and integrations with clear data flow, maintainable deployment paths, and practical performance targets.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-1">
                <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
                <p className="text-foreground-secondary">
                  Designing mobile-friendly workflows and, when needed, cross-platform mobile applications for field teams, customers, or internal operations.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-1">
                <h3 className="text-xl font-semibold mb-2">Database Design</h3>
                <p className="text-foreground-secondary">
                  Data modeling and storage using tools like PostgreSQL, SQLite, and cloud databases when the business needs reliable records and reporting.
                </p>
              </div>
            </div>
          </div>

          <div>
            <ServiceIcon 
              service="dev"
              size="large"
              className="rounded-xl w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-8 mb-16 border border-slate-200">
          <h2 className="text-3xl font-bold mb-6 text-center text-slate-950">Development Methodologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white text-slate-950 rounded-lg border border-slate-200 shadow-soft">
              <div className="text-primary-dark text-4xl mb-4 font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-950">Agile Development</h3>
              <p className="text-slate-700">
                Iterative approach with continuous feedback and improvement cycles
              </p>
            </div>
            <div className="text-center p-6 bg-white text-slate-950 rounded-lg border border-slate-200 shadow-soft">
              <div className="text-primary-dark text-4xl mb-4 font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-950">DevOps Practices</h3>
              <p className="text-slate-700">
                CI/CD pipelines, automated testing, and deployment strategies
              </p>
            </div>
            <div className="text-center p-6 bg-white text-slate-950 rounded-lg border border-slate-200 shadow-soft">
              <div className="text-primary-dark text-4xl mb-4 font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-950">Quality Assurance</h3>
              <p className="text-slate-700">
                Comprehensive testing including unit, integration, and end-to-end testing
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Technologies We Work With</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">JavaScript</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">TypeScript</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">React</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">Next.js</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">Node.js</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">Python</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">Java</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">C#</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">PostgreSQL</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">MongoDB</span>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-foreground-secondary mb-8">
              GroveX chooses proven tools based on the business problem, maintainability, and the ability to support the system after launch.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-hover hover:shadow-glow hover:scale-105 transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-focus"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

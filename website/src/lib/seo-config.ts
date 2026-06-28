import { PageMetadataConfig } from "@/lib/metadata";
import type { ServicesSeoConfig, ServiceSeoConfig } from "@/types/seo";

// SEO configuration for all pages
export const seoConfig: Record<string, PageMetadataConfig> = {
  home: {
    title: "GroveX | Websites, Systems & Sustainable Growth in Turtle Creek",
    description: "GroveX helps local businesses build sustainable growth foundations with websites, software, IT support, and practical marketing-ready systems in Turtle Creek and the Mon Valley.",
    keywords: [
      "local business growth Turtle Creek",
      "website design Turtle Creek PA",
      "Google Ads landing page setup",
      "small business systems Mon Valley",
      "software development Turtle Creek",
      "IT support for local business",
      "growth infrastructure Pennsylvania",
      "business technology support"
    ],
    canonical: "https://grovextech.com",
    ogTitle: "GroveX | Websites, Systems, and IT Support from Turtle Creek",
    ogDescription: "Websites, software, IT support, and workflow infrastructure for local businesses that want stronger systems and fewer bottlenecks."
  },
  services: {
    title: "GroveX Services | Websites, Systems, IT Support & Growth Ops",
    description: "Explore GroveX services for websites, software, IT support, operations cleanup, and practical business technology infrastructure designed for local businesses and community-rooted brands.",
    keywords: [
      "website design services Turtle Creek",
      "local business systems",
      "IT support Mon Valley",
      "custom software for local business",
      "operations support Pennsylvania",
      "marketing-ready websites",
      "small business automation",
      "business technology services Turtle Creek"
    ],
    canonical: "https://grovextech.com/services",
    ogTitle: "GroveX Services | Business Technology Infrastructure",
    ogDescription: "From websites to internal systems, GroveX helps local operators build a stronger foundation for reliable work."
  },
  "software-development": {
    title: "Custom Software Development for Sustainable Growth | GroveX",
    description: "GroveX builds custom software, web apps, APIs, and internal tools that help local businesses reduce friction, scale operations, and support long-term growth.",
    keywords: [
      "custom software development",
      "web application development",
      "mobile app development",
      "API development",
      "enterprise software",
      "full-stack development",
      "React development",
      "Node.js development"
    ],
    canonical: "https://grovextech.com/software-development",
    ogTitle: "GroveX Software Development | Systems That Scale With You",
    ogDescription: "Custom software and internal tools designed to support sustainable growth, cleaner operations, and better customer experiences."
  },
  about: {
    title: "About GroveX | Turtle Creek Business Technology Partner",
    description: "Meet Christian Penrod and learn how GroveX is growing from a local tech foundation into a practical business technology partner rooted in Turtle Creek, community trust, and practical execution.",
    keywords: [
      "about GroveX Turtle Creek",
      "Christian Penrod founder Turtle Creek PA",
      "business technology partner Mon Valley",
      "community-rooted business systems",
      "community involvement technology PA",
      "local business Turtle Creek 15145",
      "Mon Valley business technology partner",
      "Turtle Creek entrepreneur"
    ],
    canonical: "https://grovextech.com/about",
    ogTitle: "About GroveX | A Local Business Technology Partner Taking Root",
    ogDescription: "Learn how GroveX is combining technology, local business support, and long-term growth thinking from 124 Grant Street."
  },
  contact: {
    title: "Contact GroveX | Request a Business Systems Review",
    description: "Talk with GroveX about websites, software, IT support, local business systems, or a stronger foundation for future Google Ads and customer acquisition.",
    keywords: [
      "contact GroveX Turtle Creek",
      "website consultation Pennsylvania",
      "IT support Turtle Creek contact",
      "business systems consultation",
      "local business services contact",
      "Turtle Creek business technology contact",
      "Google Ads landing page help",
      "connect with GroveX"
    ],
    canonical: "https://grovextech.com/contact",
    ogTitle: "Contact GroveX | Plan the Next Practical Systems Fix",
    ogDescription: "Reach out to GroveX to map out websites, software, support systems, and practical business technology infrastructure for your business."
  },
  "community-involvement": {
    title: "Community Involvement Turtle Creek PA | Local Partnerships & Events",
    description: "See how GroveX invests in Turtle Creek through local partnerships, education, shared-space energy, and support for community-rooted business growth.",
    keywords: [
      "community involvement Turtle Creek PA",
      "local partnerships Mon Valley",
      "Memorial Day parade sponsor Turtle Creek",
      "digital readiness guidance PA",
      "community events Turtle Creek",
      "local business support Mon Valley",
      "Turtle Creek technology guidance",
      "shared storefront vision"
    ],
    canonical: "https://grovextech.com/community-involvement",
    ogTitle: "Community Involvement | GroveX in Turtle Creek",
    ogDescription: "Learn how GroveX supports local momentum through partnerships, practical technology guidance, and a stronger shared-space vision at 124 Grant Street."
  },
  portfolio: {
    title: "Our Work | GroveX Growth Systems & Client Results",
    description: "Explore GroveX work across websites, software, IT support, and practical systems that help local businesses look sharper, operate better, and grow with confidence.",
    keywords: [
      "portfolio",
      "case studies",
      "successful projects",
      "client work",
      "growth systems",
      "software projects",
      "IT implementations",
      "marketing-ready websites"
    ],
    canonical: "https://grovextech.com/portfolio",
    ogTitle: "GroveX Portfolio | Business Systems in Action",
    ogDescription: "See how GroveX turns local business needs into stronger websites, clearer systems, and more reliable operations."
  },
  "it-consulting": {
    title: "IT Consulting & Business Systems Strategy | GroveX",
    description: "GroveX helps businesses audit infrastructure, clean up operations, strengthen security, and build dependable systems that support sustainable growth.",
    keywords: [
      "IT consulting",
      "infrastructure assessment",
      "cloud migration",
      "cybersecurity consulting",
      "technology strategy",
      "IT planning",
      "business technology consulting"
    ],
    canonical: "https://grovextech.com/services/it-consulting",
    ogTitle: "GroveX IT Consulting | Stronger Systems for Growth",
    ogDescription: "Infrastructure, security, and technology planning for businesses that need dependable operations behind the scenes."
  },
  "saas-products": {
    title: "Software Products & Automation Tools | GroveX",
    description: "Explore GroveX software products and automation tools built to simplify operations, support customer follow-up, and create repeatable momentum for small businesses.",
    keywords: [
      "SaaS products",
      "business software",
      "cloud applications",
      "subscription software",
      "business automation",
      "productivity tools",
      "enterprise SaaS"
    ],
    canonical: "https://grovextech.com/services/saas-products",
    ogTitle: "GroveX Software Products | Workflow Tools That Reduce Friction",
    ogDescription: "Automation, reporting, and workflow tools that help growing businesses operate with more clarity and less friction."
  },
  "computer-repair": {
    title: "Repair & Business Device Support in Turtle Creek | GroveX",
    description: "GroveX offers selective repair and troubleshooting support for business devices, office tech, and local critical issues in Turtle Creek and the Mon Valley—without making consumer repair the core brand identity.",
    keywords: [
      "business device repair Turtle Creek",
      "office tech support Mon Valley",
      "computer repair Turtle Creek PA 15145",
      "laptop repair Monroeville area",
      "network troubleshooting Pennsylvania",
      "small business tech rescue",
      "local repair support PA"
    ],
    canonical: "https://grovextech.com/services/computer-repair",
    ogTitle: "GroveX Repair & Support | Business Continuity When Tech Breaks",
    ogDescription: "Selective repair, troubleshooting, and device support for small businesses and local critical issues across Turtle Creek and nearby communities."
  }
};

export const servicesSeoConfig: ServicesSeoConfig = {
  "software-development": {
    features: [
      "Custom Web Applications",
      "Mobile App Development",
      "API Development & Integration",
      "Database Design & Optimization",
      "Cloud-Native Solutions",
      "E-commerce Platforms"
    ],
    technologies: [
      "React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker"
    ]
  },
  "it-consulting": {
    features: [
      "Infrastructure Assessment",
      "Cloud Migration Strategy",
      "Cybersecurity Consulting",
      "Technology Planning",
      "System Integration",
      "Performance Optimization"
    ],
    technologies: [
      "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Ansible", "Linux", "Windows Server"
    ]
  },
  "saas-products": {
    features: [
      "Business Process Automation",
      "Customer Relationship Management",
      "Project Management Tools",
      "Analytics & Reporting",
      "Integration Capabilities",
      "Mobile Access"
    ],
    technologies: [
      "React", "Node.js", "PostgreSQL", "Redis", "Elasticsearch", "Docker", "AWS", "Stripe API"
    ]
  },
  "computer-repair": {
    features: [
      "Hardware Diagnostics",
      "Software Troubleshooting",
      "Data Recovery Services",
      "System Optimization",
      "Virus Removal",
      "Hardware Upgrades"
    ],
    technologies: [
      "Windows", "macOS", "Linux", "Hardware Testing Tools", "Data Recovery Software", "Antivirus Solutions"
    ]
  }
};

export function getPageSeoConfig(pageKey: string): PageMetadataConfig | null {
  return seoConfig[pageKey] || null;
}

export function getServiceSeoConfig(serviceKey: string): ServiceSeoConfig | null {
  return servicesSeoConfig[serviceKey] || null;
}

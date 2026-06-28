import { Metadata } from "next";
import { generateOpenGraphMetadata, generateTwitterMetadata } from "./social-metadata";
import { getSocialImage } from "./social-images";

// Base configuration for consistent metadata across the site
export const siteConfig = {
  name: "GroveX",
  description: "A local business technology partner in Turtle Creek, PA providing websites, IT support, software, and practical systems for small businesses.",
  url: "https://grovextech.com",
  ogImage: "/company_logo.png",
  creator: "Grovex Technologies & Software Solutions LLC",
  keywords: [
    "local business growth Turtle Creek",
    "website design Mon Valley",
    "software development Pennsylvania",
    "IT support Mon Valley",
    "small business systems Turtle Creek",
    "business technology infrastructure",
    "Google Ads landing pages",
    "business technology support",
    "Turtle Creek technology",
    "Mon Valley business support"
  ]
};

// Business information for consistent contact details
export const businessInfo = {
  name: "Grovex Technologies & Software Solutions LLC",
  description:
    "GroveX delivers trustworthy technology and business technology infrastructure for Turtle Creek and nearby communities, covering websites, digital systems, modern web experiences, and dependable IT support with a local focus.",
  phone: "(412) 206-9453",
  email: "info@grovextech.com",
  address: {
    street: "124 Grant Street",
    city: "Turtle Creek",
    state: "PA",
    zipCode: "15145",
    country: "US"
  },
  hours: {
    weekdays: "Monday - Friday: 9:00 AM - 5:00 PM",
    saturday: "Saturday: 11:00 AM - 5:00 PM", 
    sunday: "Sunday: 11:00 AM - 5:00 PM"
  },
  socialMedia: {
    linkedin: "https://www.linkedin.com/company/grovextech/",
    twitter: "https://x.com/grovextech",
    facebook: "https://www.facebook.com/grovextech"
  },
  serviceAreas: [
    "Turtle Creek, PA",
    "Monroeville, PA", 
    "Wilmerding, PA",
    "Mon Valley",
    "Western Pennsylvania",
    "Pittsburgh Metro Area"
  ]
};

// Interface for page-specific metadata configuration
export interface PageMetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  noIndex?: boolean;
  noFollow?: boolean;
}

/**
 * Generate comprehensive metadata for a page
 */
export function generatePageMetadata(config: PageMetadataConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogTitle,
    ogDescription,
    ogImage = siteConfig.ogImage,
    ogType = "website",
    noIndex = false,
    noFollow = false
  } = config;

  // Combine page-specific keywords with site-wide keywords
  const allKeywords = [...siteConfig.keywords, ...keywords].join(", ");

  // Build robots directive
  const robots = [];
  if (noIndex) robots.push("noindex");
  if (noFollow) robots.push("nofollow");
  const robotsString = robots.length > 0 ? robots.join(", ") : "index, follow";

  // Generate enhanced social media metadata
  const socialConfig = {
    title: ogTitle || title,
    description: ogDescription || description,
    image: ogImage,
    imageAlt: `${siteConfig.name} - ${ogTitle || title}`,
    url: canonical || siteConfig.url,
    type: ogType
  };

  const openGraph = generateOpenGraphMetadata(socialConfig);
  const twitter = generateTwitterMetadata(socialConfig);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`
    },
    description,
    keywords: allKeywords,
    creator: siteConfig.creator,
    robots: robotsString,
    alternates: canonical ? {
      canonical
    } : undefined,
    openGraph,
    twitter,
    other: {
      "theme-color": "#1e40af", // Primary blue color
      "color-scheme": "light dark",
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "format-detection": "telephone=no"
    }
  };
}

/**
 * Generate metadata for service pages
 */
export function generateServiceMetadata(
  serviceName: string,
  serviceDescription: string,
  serviceKeywords: string[] = []
): Metadata {
  const serviceKey = serviceName.toLowerCase().replace(/\s+/g, '-');
  const serviceImage = getSocialImage("service", serviceKey);
  
  return generatePageMetadata({
    title: `${serviceName} Services - Professional ${serviceName} Solutions`,
    description: `Expert ${serviceName.toLowerCase()} services from GroveX. ${serviceDescription}`,
    keywords: [serviceName.toLowerCase(), ...serviceKeywords],
    canonical: `${siteConfig.url}/services/${serviceKey}`,
    ogTitle: `${serviceName} Services - ${siteConfig.name}`,
    ogDescription: `Professional ${serviceName.toLowerCase()} solutions tailored to your business needs.`,
    ogImage: serviceImage
  });
}

/**
 * Generate metadata for blog/article pages
 */
export function generateArticleMetadata(
  title: string,
  description: string,
  publishDate?: string,
  author?: string,
  tags: string[] = []
): Metadata {
  const metadata = generatePageMetadata({
    title,
    description,
    keywords: tags,
    ogType: "article"
  });

  // Add article-specific Open Graph properties
  if (metadata.openGraph) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime: publishDate,
      authors: author ? [author] : undefined,
      tags
    };
  }

  return metadata;
}

/**
 * Generate metadata for portfolio/case study pages
 */
export function generatePortfolioMetadata(
  projectName: string,
  projectDescription: string,
  projectImage?: string,
  technologies: string[] = []
): Metadata {
  const projectKey = projectName.toLowerCase().replace(/\s+/g, '-');
  const portfolioImage = projectImage || getSocialImage("portfolio", projectKey);
  
  return generatePageMetadata({
    title: `${projectName} - Portfolio Case Study`,
    description: `${projectDescription} - A GroveX project showing how stronger systems support sustainable growth.`,
    keywords: ["portfolio", "case study", "project", ...technologies],
    canonical: `${siteConfig.url}/portfolio/${projectKey}`,
    ogTitle: `${projectName} - GroveX Portfolio`,
    ogDescription: projectDescription,
    ogImage: portfolioImage
  });
}

/**
 * Generate dynamic metadata based on page parameters
 */
export function generateDynamicMetadata(
  pageType: "service" | "article" | "portfolio" | "page",
  params: Record<string, unknown>
): Metadata {
  switch (pageType) {
    case "service":
      return generateServiceMetadata(
        params.serviceName as string,
        params.serviceDescription as string,
        params.keywords as string[]
      );
    case "article":
      return generateArticleMetadata(
        params.title as string,
        params.description as string,
        params.publishDate as string,
        params.author as string,
        params.tags as string[]
      );
    case "portfolio":
      return generatePortfolioMetadata(
        params.projectName as string,
        params.projectDescription as string,
        params.projectImage as string,
        params.technologies as string[]
      );
    default:
      return generatePageMetadata(params as unknown as PageMetadataConfig);
  }
}

import { Metadata } from "next";
import { generatePageMetadata, siteConfig } from "./metadata";
import { getPageSeoConfig, getServiceSeoConfig } from "./seo-config";

export function generateStaticPageMetadata(pageKey: string): Metadata {
  const config = getPageSeoConfig(pageKey);

  if (!config) {
    return generatePageMetadata({
      title: `Page Not Found - ${siteConfig.name}`,
      description: siteConfig.description,
      canonical: `${siteConfig.url}/${pageKey}`
    });
  }

  return generatePageMetadata(config);
}

export function generateServicePageMetadata(serviceKey: string): Metadata {
  const seoConfig = getPageSeoConfig(serviceKey);
  const serviceConfig = getServiceSeoConfig(serviceKey);

  if (!seoConfig) {
    return generatePageMetadata({
      title: `Service - ${siteConfig.name}`,
      description: siteConfig.description,
      canonical: `${siteConfig.url}/services/${serviceKey}`
    });
  }

  let enhancedDescription = seoConfig.description;
  if (serviceConfig?.features) {
    enhancedDescription += ` Services include: ${serviceConfig.features.slice(0, 3).join(', ')}.`;
  }

  const enhancedKeywords = [
    ...(seoConfig.keywords || []),
    ...(serviceConfig?.technologies || [])
  ];

  return generatePageMetadata({
    ...seoConfig,
    description: enhancedDescription,
    keywords: enhancedKeywords
  });
}

export function generatePortfolioPageMetadata(
  projectId?: string,
  projectData?: {
    title: string;
    description: string;
    image?: string;
    technologies?: string[];
    client?: string;
    year?: string;
  }
): Metadata {
  if (!projectId || !projectData) {
    return generateStaticPageMetadata("portfolio");
  }

  const { title, description, image, technologies = [], client, year } = projectData;

  return generatePageMetadata({
    title: `${title} - Portfolio Case Study`,
    description: `${description} ${client ? `Project for ${client}` : ""} ${year ? `(${year})` : ""} - A GroveX project showing how stronger systems support sustainable growth.`,
    keywords: ["portfolio", "case study", "project", ...technologies],
    canonical: `${siteConfig.url}/portfolio/${projectId}`,
    ogTitle: `${title} - GroveX Portfolio`,
    ogDescription: description,
    ogImage: image || siteConfig.ogImage
  });
}

export function generateBlogPageMetadata(
  slug?: string,
  articleData?: {
    title: string;
    description: string;
    publishDate: string;
    author: string;
    tags: string[];
    image?: string;
  }
): Metadata {
  if (!slug || !articleData) {
    return generatePageMetadata({
      title: "Tech Insights & Blog - GroveX",
      description: "Stay updated with GroveX insights on websites, software, IT infrastructure, sustainable growth, and practical systems for local businesses.",
      keywords: ["tech blog", "growth systems", "software development", "IT consulting", "tutorials"],
      canonical: `${siteConfig.url}/blog`,
      ogTitle: "Tech Blog - GroveX",
      ogDescription: "Expert insights on technology, operations, and sustainable growth for local business."
    });
  }

  const { title, description, publishDate, author, tags, image } = articleData;

  const metadata = generatePageMetadata({
    title,
    description,
    keywords: tags,
    canonical: `${siteConfig.url}/blog/${slug}`,
    ogType: "article",
    ogImage: image || siteConfig.ogImage
  });

  if (metadata.openGraph) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime: publishDate,
      authors: [author],
      tags
    };
  }

  return metadata;
}

export function generateSearchPageMetadata(query?: string): Metadata {
  const title = query
    ? `Search Results for "${query}" - GroveX`
    : "Search - GroveX";

  const description = query
    ? `Search results for "${query}" on GroveX. Find information about our services, portfolio, and growth systems.`
    : "Search GroveX for information about our services, portfolio, case studies, and growth systems.";

  return generatePageMetadata({
    title,
    description,
    keywords: ["search", "find", "growth systems"],
    canonical: `${siteConfig.url}/search${query ? `?q=${encodeURIComponent(query)}` : ""}`,
    noIndex: true
  });
}

export function generateErrorPageMetadata(errorCode: number): Metadata {
  const errorMessages = {
    404: {
      title: "Page Not Found (404)",
      description: "The page you're looking for doesn't exist. Explore our services, portfolio, or contact us for assistance."
    },
    500: {
      title: "Server Error (500)",
      description: "We're experiencing technical difficulties. Please try again later or contact our support team."
    }
  };

  const errorInfo = errorMessages[errorCode as keyof typeof errorMessages] || {
    title: `Error (${errorCode})`,
    description: "An error occurred. Please try again or contact our support team for assistance."
  };

  return generatePageMetadata({
    title: `${errorInfo.title} - GroveX`,
    description: errorInfo.description,
    keywords: ["error", "help", "support"],
    noIndex: true,
    noFollow: true
  });
}

export function generateMetadataWithBreadcrumbs(
  baseMetadata: Metadata,
  breadcrumbs: Array<{ name: string; url: string }>
): Metadata {
  const breadcrumbText = breadcrumbs.map((b) => b.name).join(" > ");

  return {
    ...baseMetadata,
    description: baseMetadata.description + ` Navigation: ${breadcrumbText}`,
  };
}

export function generateLocalSeoMetadata(baseMetadata: Metadata): Metadata {
  const localKeywords = [
    "local business growth Turtle Creek",
    "website design Turtle Creek Pennsylvania",
    "Mon Valley business systems",
    "small business IT Turtle Creek PA",
    "Google Ads landing pages Pennsylvania",
    "website development Mon Valley",
    "Turtle Creek business technology",
    "Monroeville area business systems",
    "Wilmerding PA tech support",
    "Pittsburgh suburb web design",
    "Western Pennsylvania software development",
    "local business technology partner 15145",
    "affordable IT support Turtle Creek"
  ];

  const enhancedDescription = `${baseMetadata.description} Serving Turtle Creek PA 15145, Monroeville, Wilmerding, and Mon Valley communities with websites, business systems, and practical support.`;

  const existingKeywords = typeof baseMetadata.keywords === "string" ? baseMetadata.keywords : "";
  const combinedKeywords = existingKeywords ? `${existingKeywords}, ${localKeywords.join(', ')}` : localKeywords.join(', ');

  const filteredOther = baseMetadata.other
    ? Object.fromEntries(Object.entries(baseMetadata.other).filter(([, value]) => value !== undefined))
    : {};

  return {
    ...baseMetadata,
    description: enhancedDescription,
    keywords: combinedKeywords,
    other: {
      ...filteredOther,
      "geo.region": "PA-US",
      "geo.placename": "Turtle Creek",
      "geo.position": "40.4058;-79.8214",
      ICBM: "40.4058, -79.8214"
    }
  };
}

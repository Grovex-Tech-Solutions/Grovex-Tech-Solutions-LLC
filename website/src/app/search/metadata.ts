import { Metadata } from "next";

export const searchMetadata: Metadata = {
  title: "Search Results - GroveX Services & Business Systems",
  description: "Search results for GroveX services, projects, and business systems. Find the website, software, and support help your business needs.",
  keywords: "search, GroveX, business systems, websites, software, IT support, business solutions",
  alternates: {
    canonical: "https://grovextech.com/search",
  },
  openGraph: {
    title: "Search Results - GroveX",
    description: "Search results for business systems, projects, and services.",
    url: "https://grovextech.com/search",
    siteName: "GroveX",
    images: [
      {
        url: "/company_logo.png",
        width: 1200,
        height: 630,
        alt: "GroveX - Search Results",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import { Metadata } from "next";

export const searchMetadata: Metadata = {
  title: "Search Results - Technology Solutions & Services",
  description: "Search results for technology solutions, projects, and services from Grovex Tech & Solutions LLC. Find the IT services and solutions that meet your business needs.",
  keywords: "search, technology solutions, projects, services, Grovex Tech & Solutions LLC, IT services, business solutions",
  alternates: {
    canonical: "https://grovextech.com/search",
  },
  openGraph: {
    title: "Search Results - Grovex Tech & Solutions LLC",
    description: "Search results for technology solutions, projects, and services.",
    url: "https://grovextech.com/search",
    siteName: "Grovex Tech & Solutions LLC",
    images: [
      {
        url: "/company_logo.png",
        width: 1200,
        height: 630,
        alt: "Grovex Tech & Solutions LLC - Search Results",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

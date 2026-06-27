import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import type { Metadata, Viewport } from 'next';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "./components/Footer";
import StructuredData from "@/components/StructuredData";
import { generateOrganizationSchema, generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/structured-data";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Base domain for absolute URLs (update if production domain differs)
const siteUrl = 'https://grovextech.com';
// Public analytics identifier (only load GA when defined)
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'GroveX — Technology & Growth for Local Business',
    template: '%s | GroveX'
  },
  description: 'Community-rooted websites, IT support, creative systems, and practical growth infrastructure for local businesses.',
  applicationName: 'GroveX',
  keywords: [
    'IT support','web design','software development','computer repair','Mon Valley','small business systems','Google Ads landing pages'
  ],
  authors: [{ name: 'Grovex Technologies & Software Solutions LLC' }],
  creator: 'Grovex Technologies & Software Solutions LLC',
  publisher: 'Grovex Technologies & Software Solutions LLC',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'GroveX',
    title: 'GroveX — Technology & Growth for Local Business',
    description: 'Community-rooted technology, websites, and growth systems built for trust, clarity, and momentum.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GroveX — Technology & Growth for Local Business',
    description: 'Community-rooted technology, websites, and growth systems built for trust, clarity, and momentum.'
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  }
};

// Explicit viewport export for tests and performance expectations
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5,
  viewportFit: 'cover'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/company_logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/company_logo.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/company_logo.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/company_logo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />        
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      </head>
       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
         {gaId && (
           <>
             <Script
               src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
               strategy="afterInteractive"
             />
             <Script id="gtag-init" strategy="afterInteractive">
               {`
                 window.dataLayer = window.dataLayer || [];
                 function gtag(){dataLayer.push(arguments);}
                 gtag('js', new Date());
                 gtag('config', '${gaId}');
               `}
             </Script>
           </>
         )}
        <Header/>
        <main id="main-content" role="main">{children}</main>
        <Footer />
        <StructuredData data={[generateOrganizationSchema(), generateLocalBusinessSchema(), generateWebSiteSchema()]} />
      </body>
    </html>
  );
}

// Content Management Types for Grovex Tech & Solutions LLC Website

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface SocialMediaLinks {
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface BusinessInfo {
  name: string;
  description: string;
  phone: string;
  email: string;
  address: Address;
  hours: BusinessHours[];
  socialMedia: SocialMediaLinks;
  foundedYear: number;
  employeeCount: string;
  specialties: string[];
  tagline: string;
  mission: string;
  values: string[];
}

export interface OpenGraphConfig {
  title: string;
  description: string;
  images: Array<{
    url: string;
    width: number;
    height: number;
    alt: string;
  }>;
  type: 'website' | 'article';
  siteName: string;
  locale: string;
}

export interface TwitterConfig {
  card: 'summary' | 'summary_large_image';
  title: string;
  description: string;
  images: string[];
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  openGraph: OpenGraphConfig;
  twitter: TwitterConfig;
  structuredData?: Record<string, unknown>;
}

export interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  backgroundImage?: string;
  features?: string[];
}

export interface ServiceContent {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  pricing: {
    startingPrice?: string;
    priceRange?: string;
    customPricing?: boolean;
  };
  cta: CTAButton;
  image?: string;
}

export interface TestimonialContent {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  service?: string;
  image?: string;
}

export interface CTAContent {
  headline: string;
  description: string;
  primaryButton: CTAButton;
  secondaryButton?: CTAButton;
  backgroundType: 'gradient' | 'image' | 'solid';
  backgroundColor?: string;
  backgroundImage?: string;
}

export interface PageContent {
  hero: HeroContent;
  services: ServiceContent[];
  testimonials: TestimonialContent[];
  callToAction: CTAContent;
  seo: SEOConfig;
}

export interface ContentModel {
  pages: {
    [key: string]: PageContent;
  };
  global: {
    business: BusinessInfo;
    navigation: Array<{
      label: string;
      href: string;
      children?: Array<{
        label: string;
        href: string;
      }>;
    }>;
    footer: {
      description: string;
      quickLinks: Array<{
        label: string;
        href: string;
      }>;
      legalLinks: Array<{
        label: string;
        href: string;
      }>;
    };
    seo: {
      siteName: string;
      defaultTitle: string;
      defaultDescription: string;
      defaultKeywords: string[];
      twitterHandle?: string;
      facebookAppId?: string;
    };
  };
  services: ServiceContent[];
  testimonials: TestimonialContent[];
}

export interface ContentLoadOptions {
  environment?: 'development' | 'production';
  locale?: string;
  validateContent?: boolean;
  fallback?: boolean;
}

export interface ContentValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

// Pricing Structure Types

export type LaborRateType = 'residential' | 'business' | 'emergency';
export type TripChargeType = 'localHomeVisit' | 'extendedHomeVisit' | 'businessVisit';
export type RetainerPlanTier = 
  | 'managedCareBasic' 
  | 'managedCarePlus' 
  | 'managedCarePremium' 
  | 'managedCareEnterprise' 
  | 'seniorTechSafetyNet';

export interface LaborRate {
  hourlyRate: number;
  description: string;
  minimumCharge: number;
  notes: string;
}

export interface TripCharge {
  fee: number;
  seniorFee?: number;
  description: string;
  coverage: string;
  notes: string;
}

export interface RetainerPlan {
  monthlyFee: number;
  name: string;
  description: string;
  includes: string[];
  idealFor: string;
  notes: string;
  isRecommended?: boolean;
  isCommunitySpecial?: boolean;
}

export interface ServicePackageItem {
  price?: number;
  priceRange?: string;
  hourlyRate?: number;
  /** Percentage value (0-100) for markup or discount calculations */
  percentage?: number;
  description: string;
  includes?: string[];
  notes: string;
  isRecommended?: boolean;
  isEmergency?: boolean;
}

export interface PricingPolicy {
  philosophy: string;
  principles: string[];
  differentiation?: string[];
  paymentTerms: {
    residential: string;
    business: string;
    warranty: string;
  };
}

export interface PricingStructure {
  pricing: {
    laborRates: {
      [K in LaborRateType]: K extends 'emergency' ? LaborRate | undefined : LaborRate;
    };
    tripCharges: {
      [K in TripChargeType]: TripCharge;
    };
    retainerPlans: {
      [K in RetainerPlanTier]: K extends 'managedCareBasic' | 'managedCarePlus' | 'managedCarePremium' 
        ? RetainerPlan 
        : RetainerPlan | undefined;
    };
    servicePackages: {
      computerRepair: Record<string, ServicePackageItem>;
      businessIT: Record<string, ServicePackageItem>;
      communityEducation: Record<string, ServicePackageItem>;
      commodityHardware?: Record<string, ServicePackageItem>;
    };
    pricingPolicy: PricingPolicy;
  };
}
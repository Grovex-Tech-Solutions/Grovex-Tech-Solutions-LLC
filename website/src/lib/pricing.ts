// Pricing data loader for Three Rivers Tech
import pricingData from '@/content/pricing.json';
import type { PricingStructure, ServicePackageItem } from '@/lib/types/content';

/**
 * Get the complete pricing structure
 */
export function getPricingStructure(): PricingStructure {
  return pricingData as PricingStructure;
}

/**
 * Get labor rates for residential, business, or emergency services
 */
export function getLaborRate(type: 'residential' | 'business' | 'emergency') {
  return pricingData.pricing.laborRates[type];
}

/**
 * Get trip charge information for a specific service area
 */
export function getTripCharge(type: 'localHomeVisit' | 'extendedHomeVisit' | 'businessVisit') {
  return pricingData.pricing.tripCharges[type];
}

/**
 * Get retainer plan details
 */
export function getRetainerPlan(tier: 'managedCareBasic' | 'managedCarePlus' | 'managedCarePremium' | 'managedCareEnterprise' | 'seniorTechSafetyNet') {
  return pricingData.pricing.retainerPlans[tier];
}

/**
 * Get all retainer plans for comparison
 */
export function getAllRetainerPlans() {
  return Object.values(pricingData.pricing.retainerPlans);
}

/**
 * Get service package pricing
 */
export function getServicePackage(category: 'computerRepair' | 'businessIT' | 'communityEducation' | 'commodityHardware', service: string): ServicePackageItem | undefined {
  const categoryPackages = pricingData.pricing.servicePackages[category] as Record<string, ServicePackageItem>;
  return categoryPackages?.[service];
}

/**
 * Get pricing policy and principles
 */
export function getPricingPolicy() {
  return pricingData.pricing.pricingPolicy;
}

/**
 * Format a price for display
 */
export function formatPrice(price: number): string {
  return `$${price.toLocaleString()}`;
}

/**
 * Format a price range for display
 */
export function formatPriceRange(min: number, max: number): string {
  return `$${min.toLocaleString()}-$${max.toLocaleString()}`;
}

/**
 * Get hourly rate display string
 */
export function getHourlyRateDisplay(type: 'residential' | 'business' | 'emergency'): string {
  const rate = getLaborRate(type);
  return `$${rate.hourlyRate}/hour`;
}

/**
 * Get recommended retainer plans (those marked as recommended)
 */
export function getRecommendedRetainerPlans() {
  return Object.values(pricingData.pricing.retainerPlans).filter(
    (plan) => (plan as { isRecommended?: boolean }).isRecommended
  );
}

/**
 * Get business retainer plans (excluding senior-specific plans)
 */
export function getBusinessRetainerPlans() {
  const plans = pricingData.pricing.retainerPlans;
  return [
    plans.managedCareBasic,
    plans.managedCarePlus,
    plans.managedCarePremium,
    plans.managedCareEnterprise,
  ];
}

/**
 * Get community/senior-focused plans
 */
export function getCommunityPlans() {
  return pricingData.pricing.retainerPlans.seniorTechSafetyNet;
}

/**
 * Get pricing strategy information
 */
export function getPricingStrategy() {
  return pricingData.pricing.pricingStrategy;
}

/**
 * Get trip charge display string
 */
export function getTripChargeDisplay(type: 'localHomeVisit' | 'extendedHomeVisit' | 'businessVisit'): string {
  const charge = getTripCharge(type);
  return charge.fee === 0 ? 'Free' : `$${charge.fee}`;
}

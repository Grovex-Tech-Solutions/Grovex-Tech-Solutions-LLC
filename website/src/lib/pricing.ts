// Pricing data loader for Grovex Tech & Solutions LLC
import pricingData from '@/content/pricing.json';
import type { 
  PricingStructure, 
  ServicePackageItem, 
  LaborRate, 
  TripCharge, 
  RetainerPlan,
  PricingPolicy,
  RetainerPlanTier,
  LaborRateType,
  TripChargeType
} from '@/types/content';

/**
 * Get the complete pricing structure with full type safety
 */
const pricing = (pricingData as PricingStructure).pricing;

/**
 * Get the complete pricing structure
 */
export function getPricingStructure(): PricingStructure {
  return pricingData as PricingStructure;
}

/**
 * Get labor rates for residential, business, or emergency services
 */
export function getLaborRate(type: LaborRateType): LaborRate {
  const rate = pricing.laborRates[type];
  if (!rate) {
    throw new Error(`Labor rate for type "${type}" not found`);
  }
  return rate;
}

/**
 * Get trip charge information for a specific service area
 */
export function getTripCharge(type: TripChargeType): TripCharge {
  const charge = pricing.tripCharges[type];
  if (!charge) {
    throw new Error(`Trip charge for type "${type}" not found`);
  }
  return charge;
}

/**
 * Get retainer plan details
 */
export function getRetainerPlan(tier: RetainerPlanTier): RetainerPlan | undefined {
  return pricing.retainerPlans[tier];
}

/**
 * Get all retainer plans for comparison
 */
export function getAllRetainerPlans(): RetainerPlan[] {
  return Object.values(pricing.retainerPlans).filter(
    (plan): plan is RetainerPlan => plan !== undefined
  );
}

/**
 * Get service package pricing
 */
export function getServicePackage(
  category: keyof typeof pricing.servicePackages, 
  service: string
): ServicePackageItem | undefined {
  const categoryPackages = pricing.servicePackages[category];
  return categoryPackages?.[service];
}

/**
 * Get all service packages for a specific category
 */
export function getServicePackagesByCategory(
  category: keyof typeof pricing.servicePackages
): Record<string, ServicePackageItem> {
  const packages = pricing.servicePackages[category];
  return packages || {};
}

/**
 * Get pricing policy and principles
 */
export function getPricingPolicy(): PricingPolicy {
  return pricing.pricingPolicy;
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
 * Get a formatted string for any service package pricing model
 */
export function getServicePackagePriceDisplay(item: ServicePackageItem): string {
  if (item.price !== undefined) return formatPrice(item.price);
  if (item.priceRange) return `$${item.priceRange}`;
  if (item.hourlyRate) return `$${item.hourlyRate}/hour`;
  if (item.percentage) return `${item.percentage}% markup`;
  return 'Contact for pricing';
}

/**
 * Get hourly rate display string
 */
export function getHourlyRateDisplay(type: LaborRateType): string {
  const rate = getLaborRate(type);
  return `$${rate.hourlyRate}/hour`;
}

/**
 * Get recommended retainer plans (those marked as recommended)
 */
export function getRecommendedRetainerPlans(): RetainerPlan[] {
  return getAllRetainerPlans().filter((plan) => plan.isRecommended);
}

/**
 * Get business retainer plans (excluding senior-specific plans)
 */
export function getBusinessRetainerPlans(): RetainerPlan[] {
  const plans = pricing.retainerPlans;
  const businessPlans = [
    plans.managedCareBasic,
    plans.managedCarePlus,
    plans.managedCarePremium,
    plans.managedCareEnterprise,
  ];
  return businessPlans.filter((plan): plan is RetainerPlan => plan !== undefined);
}

/**
 * Get community/senior-focused plans
 */
export function getCommunityPlans(): RetainerPlan | undefined {
  return pricing.retainerPlans.seniorTechSafetyNet;
}

/**
 * Get trip charge display string
 */
export function getTripChargeDisplay(type: TripChargeType): string {
  const charge = getTripCharge(type);
  return charge.fee === 0 ? 'Free' : `$${charge.fee}`;
}

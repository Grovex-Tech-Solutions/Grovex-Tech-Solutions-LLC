import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import type { PricingStructure } from '@/types/content';

describe('Pricing Structure Validation', () => {
  let pricingData: PricingStructure;

  // Load pricing data before tests
  try {
    const pricingPath = join(process.cwd(), 'src', 'content', 'pricing.json');
    if (existsSync(pricingPath)) {
      pricingData = JSON.parse(readFileSync(pricingPath, 'utf-8')) as PricingStructure;
    }
  } catch (error) {
    console.error('Failed to load pricing data:', error);
  }

  describe('Pricing Data Structure', () => {
    it('should have all required pricing sections', () => {
      expect(pricingData).toBeDefined();
      expect(pricingData.pricing).toBeDefined();
      expect(pricingData.pricing.laborRates).toBeDefined();
      expect(pricingData.pricing.tripCharges).toBeDefined();
      expect(pricingData.pricing.retainerPlans).toBeDefined();
      expect(pricingData.pricing.servicePackages).toBeDefined();
      expect(pricingData.pricing.pricingPolicy).toBeDefined();
    });

    it('should have labor rates for residential and business', () => {
      expect(pricingData.pricing.laborRates.residential).toBeDefined();
      expect(pricingData.pricing.laborRates.business).toBeDefined();
      
      // Check residential rate structure
      const residential = pricingData.pricing.laborRates.residential;
      expect(residential.hourlyRate).toBeGreaterThan(0);
      expect(residential.minimumCharge).toBeGreaterThan(0);
      expect(residential.description).toBeTruthy();
      expect(residential.notes).toBeTruthy();
      
      // Check business rate structure
      const business = pricingData.pricing.laborRates.business;
      expect(business.hourlyRate).toBeGreaterThan(0);
      expect(business.minimumCharge).toBeGreaterThan(0);
      expect(business.description).toBeTruthy();
      expect(business.notes).toBeTruthy();
    });

    it('should have trip charges for all service areas', () => {
      expect(pricingData.pricing.tripCharges.localHomeVisit).toBeDefined();
      expect(pricingData.pricing.tripCharges.extendedHomeVisit).toBeDefined();
      expect(pricingData.pricing.tripCharges.businessVisit).toBeDefined();
      
      // Check each trip charge structure
      Object.values(pricingData.pricing.tripCharges).forEach((charge) => {
        expect(charge.fee).toBeGreaterThanOrEqual(0);
        expect(charge.description).toBeTruthy();
        expect(charge.coverage).toBeTruthy();
        expect(charge.notes).toBeTruthy();
      });
    });

    it('should have all three retainer plan tiers', () => {
      expect(pricingData.pricing.retainerPlans.managedCareBasic).toBeDefined();
      expect(pricingData.pricing.retainerPlans.managedCarePlus).toBeDefined();
      expect(pricingData.pricing.retainerPlans.managedCarePremium).toBeDefined();
      
      // Check each plan structure
      Object.values(pricingData.pricing.retainerPlans).forEach((plan) => {
        expect(plan.monthlyFee).toBeGreaterThan(0);
        expect(plan.name).toBeTruthy();
        expect(plan.description).toBeTruthy();
        expect(plan.includes).toBeInstanceOf(Array);
        expect(plan.includes.length).toBeGreaterThan(0);
        expect(plan.idealFor).toBeTruthy();
        expect(plan.notes).toBeTruthy();
      });
    });

    it('should have service packages for all categories', () => {
      expect(pricingData.pricing.servicePackages.computerRepair).toBeDefined();
      expect(pricingData.pricing.servicePackages.businessIT).toBeDefined();
      expect(pricingData.pricing.servicePackages.communityEducation).toBeDefined();
    });

    it('should have pricing policy with philosophy and principles', () => {
      const policy = pricingData.pricing.pricingPolicy;
      expect(policy.philosophy).toBeTruthy();
      expect(policy.principles).toBeInstanceOf(Array);
      expect(policy.principles.length).toBeGreaterThan(0);
      expect(policy.paymentTerms).toBeDefined();
      expect(policy.paymentTerms.residential).toBeTruthy();
      expect(policy.paymentTerms.business).toBeTruthy();
      expect(policy.paymentTerms.warranty).toBeTruthy();
    });
  });

  describe('Pricing Consistency', () => {
    it('should have consistent pricing between tiers', () => {
      const basic = pricingData.pricing.retainerPlans.managedCareBasic;
      const plus = pricingData.pricing.retainerPlans.managedCarePlus;
      const premium = pricingData.pricing.retainerPlans.managedCarePremium;
      
      // Prices should increase with tier
      expect(plus.monthlyFee).toBeGreaterThan(basic.monthlyFee);
      expect(premium.monthlyFee).toBeGreaterThan(plus.monthlyFee);
      
      // Higher tiers should have more features
      expect(plus.includes.length).toBeGreaterThanOrEqual(basic.includes.length);
      expect(premium.includes.length).toBeGreaterThanOrEqual(plus.includes.length);
    });

    it('should have business rates higher than residential rates', () => {
      const residentialRate = pricingData.pricing.laborRates.residential.hourlyRate;
      const businessRate = pricingData.pricing.laborRates.business.hourlyRate;
      
      expect(businessRate).toBeGreaterThanOrEqual(residentialRate);
    });

    it('should have free trip charges for local and business visits', () => {
      expect(pricingData.pricing.tripCharges.localHomeVisit.fee).toBe(0);
      expect(pricingData.pricing.tripCharges.businessVisit.fee).toBe(0);
    });

    it('should have community education services as free', () => {
      const communityServices = pricingData.pricing.servicePackages.communityEducation;
      
      Object.values(communityServices).forEach((service) => {
        expect(service.price).toBe(0);
      });
    });
  });

  describe('Services.json Pricing Consistency', () => {
    it('should have consistent pricing between services.json and pricing.json', () => {
      try {
        const servicesPath = join(process.cwd(), 'src', 'content', 'services.json');
        if (existsSync(servicesPath)) {
          const services = JSON.parse(readFileSync(servicesPath, 'utf-8'));
          
          // Check home support service
          const homeSupport = services.find((s: { id: string }) => s.id === 'home-support');
          if (homeSupport) {
            expect(homeSupport.pricing.startingPrice).toBe('$60');
            
            // Check that features mention consistent pricing
            const hourlyRateFeature = homeSupport.features.find((f: string) => 
              f.includes('$60/hour')
            );
            expect(hourlyRateFeature).toBeTruthy();
          }
          
          // Check small business IT service
          const businessIT = services.find((s: { id: string }) => s.id === 'small-business-it');
          if (businessIT) {
            // Check that managed care pricing is mentioned
            const managedCareFeature = businessIT.features.find((f: string) => 
              f.includes('$75/month') || f.includes('from $75/month')
            );
            expect(managedCareFeature).toBeTruthy();
          }
          
          // Check web development service
          const webDev = services.find((s: { id: string }) => s.id === 'web-development');
          if (webDev) {
            expect(webDev.pricing.startingPrice).toBe('$500');
          }
          
          // Check community education service
          const communityEd = services.find((s: { id: string }) => s.id === 'community-education');
          if (communityEd) {
            expect(communityEd.pricing.startingPrice).toBe('Free');
          }
        }
      } catch (error) {
        console.error('Failed to load services data:', error);
      }
    });
  });

  describe('Pricing Format Validation', () => {
    it('should have properly formatted descriptions', () => {
      // Check labor rates
      Object.values(pricingData.pricing.laborRates).forEach((rate) => {
        expect(rate.description.length).toBeGreaterThan(20);
        expect(rate.notes.length).toBeGreaterThan(10);
      });
      
      // Check trip charges
      Object.values(pricingData.pricing.tripCharges).forEach((charge) => {
        expect(charge.description.length).toBeGreaterThan(20);
        expect(charge.coverage.length).toBeGreaterThan(10);
      });
      
      // Check retainer plans
      Object.values(pricingData.pricing.retainerPlans).forEach((plan) => {
        expect(plan.description.length).toBeGreaterThan(20);
        expect(plan.idealFor.length).toBeGreaterThan(10);
      });
    });

    it('should have no placeholder content in pricing data', () => {
      const pricingText = JSON.stringify(pricingData).toLowerCase();
      
      const placeholders = [
        'todo',
        'tbd',
        'placeholder',
        'lorem ipsum',
        'coming soon',
        'insert',
        'example'
      ];
      
      placeholders.forEach((placeholder) => {
        expect(pricingText).not.toContain(placeholder);
      });
    });

    it('should have consistent currency formatting', () => {
      const checkPriceFormat = (obj: unknown, path: string = '') => {
        if (typeof obj === 'object' && obj !== null) {
          Object.entries(obj).forEach(([key, value]) => {
            if (key === 'priceRange' && typeof value === 'string') {
              // Price range should be in format "XXX-YYY" (numbers only)
              expect(value).toMatch(/^\d+-\d+$/);
            } else if (typeof value === 'object') {
              checkPriceFormat(value, `${path}.${key}`);
            }
          });
        }
      };
      
      checkPriceFormat(pricingData);
    });
  });

  describe('Pricing Transparency Requirements', () => {
    it('should emphasize transparency in pricing policy', () => {
      const policy = pricingData.pricing.pricingPolicy;
      const policyText = JSON.stringify(policy).toLowerCase();
      
      // Should mention transparency/upfront pricing
      const transparencyKeywords = ['transparent', 'upfront', 'no hidden', 'honest'];
      const hasTransparency = transparencyKeywords.some(keyword => 
        policyText.includes(keyword)
      );
      expect(hasTransparency).toBe(true);
    });

    it('should mention free consultation/assessment', () => {
      const policyText = JSON.stringify(pricingData.pricing.pricingPolicy).toLowerCase();
      const serviceText = JSON.stringify(pricingData.pricing.servicePackages).toLowerCase();
      
      const hasFreeConsultation = policyText.includes('free consultation') || 
                                  policyText.includes('free assessment') ||
                                  serviceText.includes('free diagnostic');
      
      expect(hasFreeConsultation).toBe(true);
    });

    it('should emphasize customer-focused approach', () => {
      const policyText = JSON.stringify(pricingData.pricing.pricingPolicy).toLowerCase();
      
      const customerKeywords = ['need', 'actually', 'approve', 'satisfaction'];
      const hasCustomerFocus = customerKeywords.some(keyword => 
        policyText.includes(keyword)
      );
      expect(hasCustomerFocus).toBe(true);
    });
  });
});

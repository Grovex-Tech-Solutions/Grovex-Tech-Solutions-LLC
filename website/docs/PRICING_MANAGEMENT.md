# Pricing Management Guide

This document outlines the pricing structure and management process for Grovex Tech & Solutions LLC services.

## Overview

Grovex Tech & Solutions LLC follows a transparent, customer-focused pricing philosophy: **"Small-town prices, big-city know-how."** All pricing information is centralized in `/website/src/content/pricing.json` to ensure consistency across the website.

## Pricing Structure

### 1. Labor Rates

**Residential Services**
- **Hourly Rate:** $60/hour
- **Minimum Charge:** $60 (first hour)
- **Billing:** First hour minimum, then 15-minute increments
- **Use Cases:** Computer repair, virus removal, tech support, senior training

**Business Services**
- **Hourly Rate:** $75/hour
- **Minimum Charge:** $75 (first hour)
- **Billing:** First hour minimum, then 15-minute increments
- **Use Cases:** IT support, help desk, business system maintenance

### 2. Trip Charges

**Local Home Visit (Turtle Creek, PA 15145)**
- **Fee:** FREE
- **Coverage:** Turtle Creek residents
- **Special:** On-site fee waived for seniors 65+

**Extended Home Visit (Mon Valley Area)**
- **Fee:** $25
- **Coverage:** Monroeville, Wilmerding, East Pittsburgh, Braddock, and surrounding communities within 15 miles
- **Waived:** Trip charge waived with 1+ hours of service

**Business Visit**
- **Fee:** FREE
- **Coverage:** All Mon Valley area businesses
- **Note:** Initial consultation and assessment always free

### 3. Retainer Plans (Managed Care)

**Basic Plan - $75/month**
- Monthly system maintenance and updates
- Priority help desk support (4-hour response)
- Remote support via phone, email, or remote desktop
- Basic cybersecurity monitoring
- Monthly system health report
- 10% discount on additional services
- **Ideal For:** Small businesses with 1-5 computers

**Plus Plan - $150/month**
- All Basic Plan features
- Priority help desk support (2-hour response)
- Two on-site visits per month
- Advanced cybersecurity protection
- Quarterly technology planning consultation
- Network monitoring and optimization
- 15% discount on additional services
- **Ideal For:** Growing businesses with 5-15 computers

**Premium Plan - $300/month**
- All Plus Plan features
- Priority help desk support (1-hour response)
- Unlimited on-site visits
- 24/7 emergency support hotline
- Comprehensive cybersecurity suite
- Monthly technology strategy sessions
- Proactive system optimization
- Dedicated account manager
- 20% discount on additional services
- **Ideal For:** Established businesses with 15+ computers or complex IT needs

### 4. Service Packages

#### Computer Repair
- **Free Diagnostics:** No charge for assessment
- **Virus Removal:** $75-$150 (depending on severity)
- **Hardware Repair:** $100-$300 (parts + labor)
- **Data Recovery:** $100-$300 (complexity dependent)
- **Wi-Fi Setup:** $100 (flat rate)
- **Senior Training:** $60/hour (patient, step-by-step)

#### Business IT
- **Starter Website:** $500 (WordPress, SEO, domain, support)
- **Small Office Setup:** $300-$600 (network, security, integration)
- **Custom Website:** $800-$2,500 (advanced features, e-commerce)

#### Community Education
- **All Workshops:** FREE for community members
- **Includes:** Computer skills, online safety, smartphone training, digital marketing

## Pricing Philosophy

### Core Principles
1. **Transparent, upfront pricing** - No hidden fees or surprise charges
2. **Free consultation** - Honest assessment before any work begins
3. **Customer needs first** - We tell you what you actually need, not what makes us the most money
4. **Approval required** - You approve the price before we start
5. **Senior discounts** - Community-friendly rates for seniors

### Payment Terms
- **Residential:** Payment due upon completion. Cash, check, or major credit cards accepted.
- **Business:** Net 15 terms for established business clients. Monthly retainer clients billed automatically.
- **Warranty:** All work comes with a 30-day satisfaction guarantee.

## Managing Pricing

### Updating Prices

1. **Edit the centralized pricing file:**
   ```bash
   /website/src/content/pricing.json
   ```

2. **Update relevant sections:**
   - Labor rates: `pricing.laborRates.residential` or `pricing.laborRates.business`
   - Trip charges: `pricing.tripCharges.localHomeVisit`, `extendedHomeVisit`, or `businessVisit`
   - Retainer plans: `pricing.retainerPlans.managedCareBasic`, `managedCarePlus`, or `managedCarePremium`
   - Service packages: `pricing.servicePackages.computerRepair`, `businessIT`, or `communityEducation`

3. **Run validation tests:**
   ```bash
   npm run test -- src/test/pricing-validation.test.ts
   ```

4. **Update services.json if needed:**
   Ensure pricing in `/website/src/content/services.json` matches the centralized pricing structure.

### Accessing Pricing in Code

Use the helper functions from `/website/src/lib/pricing.ts`:

```typescript
import { 
  getLaborRate, 
  getTripCharge, 
  getRetainerPlan,
  getServicePackage,
  getPricingPolicy,
  formatPrice,
  formatPriceRange 
} from '@/lib/pricing';

// Get residential hourly rate
const residentialRate = getLaborRate('residential');
console.log(residentialRate.hourlyRate); // 60

// Get trip charge for local home visit
const localVisit = getTripCharge('localHomeVisit');
console.log(localVisit.fee); // 0 (free)

// Get basic retainer plan
const basicPlan = getRetainerPlan('managedCareBasic');
console.log(basicPlan.monthlyFee); // 75

// Format prices for display
console.log(formatPrice(500)); // "$500"
console.log(formatPriceRange(100, 300)); // "$100-$300"
```

### TypeScript Types

All pricing types are defined in `/website/src/lib/types/content.ts`:
- `PricingStructure` - Main pricing structure
- `LaborRate` - Hourly rate structure
- `TripCharge` - Trip charge structure
- `RetainerPlan` - Managed care plan structure
- `ServicePackageItem` - Individual service pricing
- `PricingPolicy` - Pricing philosophy and terms

## Consistency Checklist

When updating pricing, ensure:

- [ ] Pricing in `pricing.json` is updated
- [ ] Related pricing in `services.json` matches
- [ ] Features in `services.json` mention correct prices
- [ ] All validation tests pass
- [ ] Documentation is updated if principles change
- [ ] Website content reflects new pricing (if displaying prices)

## Testing

Run the comprehensive pricing validation test suite:

```bash
# Run pricing tests only
npm run test -- src/test/pricing-validation.test.ts

# Run all tests
npm run test
```

The test suite validates:
- All required pricing sections exist
- Price consistency between tiers
- Format validation
- No placeholder content
- Consistency with services.json
- Transparency requirements

## Three-Step Workflow

Every pricing quote follows this process:

1. **Free Consultation/Assessment**
   - Assess client needs
   - Provide honest assessment
   - No charge for diagnosis

2. **Upfront Estimates**
   - Clear price estimate before work begins
   - No hidden fees policy
   - Customer approval required

3. **Needs-Based Sales**
   - Recommend what client actually needs
   - No upselling unnecessary services
   - Focus on solving the problem

## Contact for Pricing Questions

For questions about pricing structure or updates, contact:
- **Email:** info@grovextech.com
- **Phone:** (412) 206-9453
- **Location:** 124 Grant Street, Turtle Creek, PA 15145

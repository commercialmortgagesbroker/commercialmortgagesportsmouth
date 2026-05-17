import type { MarketData } from "./types";

/**
 * Per-area market data, Commercial Mortgages Portsmouth.
 *
 * The MarketData[] interface is shared with the dev-fin reference repos and
 * is consumed by area-page market widgets. Field names retain dev-fin
 * vocabulary (`activeDevSites`, `avgDevTimelineMonths`, `planningApprovalRate`)
 * but the values here are calibrated to commercial-mortgage relevance:
 *   - `activeDevSites` counts active commercial-mortgage-relevant items in
 *     the local pipeline, Portsmouth City Council planning applications
 *     inside the area's postcode catchment plus known transactional activity.
 *     Hayling Island figures derive from Havant Borough Council.
 *   - `avgDevTimelineMonths` reads as "average commercial mortgage process
 *     to drawdown" in months for mainstream owner-occupier / investment.
 *   - `avgPricePerSqft` is residential price per sqft per HM Land Registry,
 *     used as a market-temperature gauge for the wider local market.
 *     Residential transactions are NOT a direct commercial signal; they
 *     proxy area health for ground-floor retail, semi-commercial blended
 *     yield, and tenant-covenant catchment underwriting.
 *   - `rentalYield` is residential headline yield, used as a directional
 *     indicator for semi-commercial blended-yield underwriting.
 *
 * Slugs match AREAS in src/lib/constants.ts.
 */

export const marketData: MarketData[] = [
  {
    slug: "old-portsmouth",
    areaName: "Old Portsmouth and Spice Island",
    avgPricePerSqft: 460,
    planningApprovalRate: 72,
    avgDevTimelineMonths: 7,
    population: 5800,
    growthRate: 1.4,
    activeDevSites: 12,
    rentalYield: 4.6,
    conservationCoverage: 92,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Portsmouth LPA)",
      planningSource: "Portsmouth City Council Planning Portal, PO1 conservation core",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "portsea-gunwharf",
    areaName: "Portsea and Gunwharf Quays",
    avgPricePerSqft: 480,
    planningApprovalRate: 78,
    avgDevTimelineMonths: 7,
    population: 9400,
    growthRate: 3.6,
    activeDevSites: 22,
    rentalYield: 5.2,
    conservationCoverage: 40,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Portsmouth LPA)",
      planningSource: "Portsmouth City Council Planning Portal, PO1 Gunwharf and Portsea",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "city-centre-commercial-road",
    areaName: "City Centre and Commercial Road",
    avgPricePerSqft: 360,
    planningApprovalRate: 76,
    avgDevTimelineMonths: 6,
    population: 22000,
    growthRate: 2.4,
    activeDevSites: 20,
    rentalYield: 5.6,
    conservationCoverage: 28,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Portsmouth LPA)",
      planningSource: "Portsmouth City Council Planning Portal, PO1 central retail spine",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "southsea-inner",
    areaName: "Southsea Inner and Albert Road",
    avgPricePerSqft: 400,
    planningApprovalRate: 70,
    avgDevTimelineMonths: 6,
    population: 19500,
    growthRate: 2.1,
    activeDevSites: 18,
    rentalYield: 6.4,
    conservationCoverage: 32,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Portsmouth LPA)",
      planningSource: "Portsmouth City Council Planning Portal, PO5 Albert Road and Article 4",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "southsea-seafront",
    areaName: "Southsea Seafront and Common",
    avgPricePerSqft: 440,
    planningApprovalRate: 72,
    avgDevTimelineMonths: 7,
    population: 14200,
    growthRate: 1.8,
    activeDevSites: 14,
    rentalYield: 5.8,
    conservationCoverage: 38,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Portsmouth LPA)",
      planningSource: "Portsmouth City Council Planning Portal, PO4 PO5 seafront",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "eastney",
    areaName: "Eastney",
    avgPricePerSqft: 360,
    planningApprovalRate: 74,
    avgDevTimelineMonths: 6,
    population: 11800,
    growthRate: 2.5,
    activeDevSites: 7,
    rentalYield: 6.0,
    conservationCoverage: 18,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Portsmouth LPA)",
      planningSource: "Portsmouth City Council Planning Portal, PO4 Eastney",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "north-end",
    areaName: "North End",
    avgPricePerSqft: 320,
    planningApprovalRate: 68,
    avgDevTimelineMonths: 6,
    population: 24400,
    growthRate: 1.9,
    activeDevSites: 16,
    rentalYield: 7.2,
    conservationCoverage: 12,
    valueCategory: "value",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Portsmouth LPA)",
      planningSource: "Portsmouth City Council Planning Portal, PO2 HMO conversion belt and Article 4",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "stamshaw-tipner",
    areaName: "Stamshaw and Tipner Regeneration",
    avgPricePerSqft: 340,
    planningApprovalRate: 80,
    avgDevTimelineMonths: 7,
    population: 10600,
    growthRate: 5.4,
    activeDevSites: 13,
    rentalYield: 6.0,
    conservationCoverage: 8,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Portsmouth LPA)",
      planningSource: "Portsmouth City Council Planning Portal, PO2 M275 Tipner West regeneration",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "hilsea",
    areaName: "Hilsea",
    avgPricePerSqft: 300,
    planningApprovalRate: 78,
    avgDevTimelineMonths: 6,
    population: 13600,
    growthRate: 2.2,
    activeDevSites: 11,
    rentalYield: 5.6,
    conservationCoverage: 6,
    valueCategory: "value",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Portsmouth LPA)",
      planningSource: "Portsmouth City Council Planning Portal, PO2 PO3 Hilsea and Voyager Park",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "cosham",
    areaName: "Cosham and Lakeside North Harbour",
    avgPricePerSqft: 340,
    planningApprovalRate: 76,
    avgDevTimelineMonths: 7,
    population: 14900,
    growthRate: 2.6,
    activeDevSites: 15,
    rentalYield: 5.0,
    conservationCoverage: 14,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Portsmouth LPA)",
      planningSource: "Portsmouth City Council Planning Portal, PO6 Cosham and Lakeside",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "drayton-farlington",
    areaName: "Drayton and Farlington",
    avgPricePerSqft: 360,
    planningApprovalRate: 74,
    avgDevTimelineMonths: 7,
    population: 16400,
    growthRate: 1.7,
    activeDevSites: 9,
    rentalYield: 4.6,
    conservationCoverage: 16,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Portsmouth LPA)",
      planningSource: "Portsmouth City Council Planning Portal, PO6 A2030 care-home corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "hayling-island-fringe",
    areaName: "Hayling Island and Havant Fringe",
    avgPricePerSqft: 380,
    planningApprovalRate: 72,
    avgDevTimelineMonths: 7,
    population: 17800,
    growthRate: 1.9,
    activeDevSites: 8,
    rentalYield: 5.4,
    conservationCoverage: 22,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Havant Borough LPA)",
      planningSource: "Havant Borough Council Planning Portal, PO11 Hayling Island",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
];

export function getMarketData(slug: string) {
  return marketData.find((d) => d.slug === slug);
}

export function getAllMarketData() {
  return marketData;
}

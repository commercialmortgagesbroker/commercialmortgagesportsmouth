/**
 * Sold-data mapping, Portsmouth (Commercial Mortgages context).
 *
 * HM Land Registry data is published at local-authority (town) level. The
 * Portsmouth City Council LPA covers the island city. The Hayling Island
 * fringe sits within Havant Borough Council LPA but we still read the
 * residential temperature signal from the Portsmouth town file.
 *
 * On commercial mortgage pages, residential sold data is used as a temperature
 * gauge for the wider area, commercial owner-occupier and semi-commercial
 * pricing track the residential curve, even though commercial-tagged Land
 * Registry data is much sparser.
 */

import portsmouthData from "@/data/sold-data/portsmouth.json";

export interface SoldTransaction {
  price: number;
  date: string;
  postcode: string;
  propertyType: string;
  newBuild: boolean;
  tenure: string;
  address: string;
}

export interface SoldDataFile {
  updatedAt: string;
  townSlug: string;
  countySlug: string;
  stats: {
    medianPrice: number;
    medianByType: Record<string, number>;
    transactionCount12m: number;
    yoyChange: number;
    newBuildCount: number;
    existingCount: number;
    newBuildPremium: number | null;
  };
  recentTransactions: SoldTransaction[];
}

const DISTRICT_TO_TOWN: Record<string, { data: SoldDataFile; label: string }> = {
  "old-portsmouth": { data: portsmouthData as SoldDataFile, label: "Portsmouth LPA" },
  "portsea-gunwharf": { data: portsmouthData as SoldDataFile, label: "Portsmouth LPA" },
  "city-centre-commercial-road": { data: portsmouthData as SoldDataFile, label: "Portsmouth LPA" },
  "southsea-inner": { data: portsmouthData as SoldDataFile, label: "Portsmouth LPA" },
  "southsea-seafront": { data: portsmouthData as SoldDataFile, label: "Portsmouth LPA" },
  eastney: { data: portsmouthData as SoldDataFile, label: "Portsmouth LPA" },
  "north-end": { data: portsmouthData as SoldDataFile, label: "Portsmouth LPA" },
  "stamshaw-tipner": { data: portsmouthData as SoldDataFile, label: "Portsmouth LPA" },
  hilsea: { data: portsmouthData as SoldDataFile, label: "Portsmouth LPA" },
  cosham: { data: portsmouthData as SoldDataFile, label: "Portsmouth LPA" },
  "drayton-farlington": { data: portsmouthData as SoldDataFile, label: "Portsmouth LPA" },
  "hayling-island-fringe": { data: portsmouthData as SoldDataFile, label: "Havant Borough LPA" },
};

export function getSoldDataForDistrict(slug: string):
  | { data: SoldDataFile; lpaLabel: string }
  | null {
  const entry = DISTRICT_TO_TOWN[slug];
  if (!entry) return null;
  return { data: entry.data, lpaLabel: entry.label };
}

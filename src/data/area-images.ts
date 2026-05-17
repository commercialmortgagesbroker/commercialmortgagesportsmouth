/**
 * Area hero images, Unsplash CDN photo IDs for Portsmouth districts.
 */

export interface AreaImage {
  /** Unsplash CDN long-form photo ID. */
  id: string;
  /** Accessibility/SEO alt text. */
  alt: string;
}

export const AREA_IMAGES: Record<string, AreaImage> = {
  "old-portsmouth": {
    id: "1699021566217-f4ce5875b2e1",
    alt: "Old Portsmouth heritage waterfront with listed buildings",
  },
  "portsea-gunwharf": {
    id: "1626010935539-710125f7e294",
    alt: "Gunwharf Quays outlet retail and Spinnaker Tower waterfront",
  },
  "city-centre-commercial-road": {
    id: "1699021566678-edb0d7af1d5e",
    alt: "Commercial Road pedestrian retail spine with Cascades Centre",
  },
  "southsea-inner": {
    id: "1699021565667-07f81d7d137c",
    alt: "Southsea Albert Road independent F&B and boutique-retail parade",
  },
  "southsea-seafront": {
    id: "1626011338434-2a000a7c63c0",
    alt: "Southsea seafront with South Parade Pier and Victorian hotels",
  },
  eastney: {
    id: "1697407503401-8991afe14b00",
    alt: "Eastney Highland Road residential-led mixed-use parade",
  },
  "north-end": {
    id: "1603135946711-e2f73c019c44",
    alt: "North End Portsmouth London Road terraced HMO conversion belt",
  },
  "stamshaw-tipner": {
    id: "1638803702682-4b2c833e543f",
    alt: "Stamshaw and Tipner M275 gateway regeneration zone",
  },
  hilsea: {
    id: "1699818268277-242624112ff9",
    alt: "Hilsea Retail Park out-of-city Class E and light industrial corridor",
  },
  cosham: {
    id: "1683459269288-63ce626a67f2",
    alt: "Cosham and Lakeside North Harbour office park and high street",
  },
  "drayton-farlington": {
    id: "1699021566037-2079b9459957",
    alt: "Drayton and Farlington A2030 care-home corridor district centre",
  },
  "hayling-island-fringe": {
    id: "1626011789898-0b317546acb0",
    alt: "Hayling Island Beachlands seafront hotel and holiday-let cluster",
  },
};

/** Canonical hero image for the /areas index page and city-wide contexts. */
export const AREAS_INDEX_IMAGE: AreaImage = {
  id: "1526637201259-da59cb348242",
  alt: "Portsmouth aerial view of Portsea Island and Solent harbour",
};

/** Safe lookup, returns the area image, or the canonical city image as fallback. */
export function getAreaImage(slug: string): AreaImage {
  return AREA_IMAGES[slug] ?? AREAS_INDEX_IMAGE;
}

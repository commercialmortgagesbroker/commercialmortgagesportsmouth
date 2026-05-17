// Per-site configuration. The single CSS variable that varies between
// network sites is the accent triplet, see DESIGN-BRIEF.md §11.
export const siteConfig = {
  "name": "Commercial Mortgages Portsmouth",
  "domain": "commercialmortgagesportsmouth.co.uk",
  "locationName": "Portsmouth",
  "county": "hampshire",
  "town": "portsmouth",
  "tagline": "Specialist commercial mortgages in Portsmouth and the Solent",
  "description": "Specialist commercial mortgage broker for Portsmouth, the Solent and South Hampshire. Defence and naval, leisure and hospitality, HMO portfolio, retail, semi-commercial and trading-business finance from a 90+ lender panel. Indicative terms in 48 hours, mid-2026 rates 6.0 to 9.0% pa.",
  "keyword": "commercial mortgages portsmouth",
  "heroSubtitle": "Owner-occupier, investment, leisure and hospitality, HMO portfolio, semi-commercial and trading-business commercial mortgages, sourced from a 90+ lender panel and structured around your Portsmouth or Solent asset. Indicative terms in 48 hours.",
  "phone": "07595 366094",
  "email": "enquiries@commercialmortgagesportsmouth.co.uk",
  "leadEmail": "commercialmortgagesbroker@gmail.com",
  "address": {
    "street": "Portsmouth",
    "city": "Portsmouth",
    "postcode": "",
    "country": "United Kingdom"
  },
  "coordinates": {
    "lat": 50.8198,
    "lon": -1.0880
  },
  "siteType": "commercial-mortgages",
  "siteMode": "primary",
  "primarySiteUrl": "https://commercialmortgagesportsmouth.co.uk",
  "satelliteSiteUrl": "https://portsmouthcommercialmortgages.co.uk",
  "ccLocationUrl": "https://commercialmortgagesbroker.co.uk/locations/hampshire/portsmouth",
  "accent": {
    "hex": "#5d7d3a",
    "hsl": "hsl(83, 36%, 36%)",
    "hue": 83
  },
  "stats": [
    { "value": "£250M+", "label": "Arranged" },
    { "value": "90+", "label": "Lenders" },
    { "value": "48hr", "label": "Decisions" },
    { "value": "75%", "label": "Max LTV" }
  ],
  "ghlSiteTag": "CommercialMortgagesPortsmouth",
  "ghlSource": "Commercial Mortgages Portsmouth Primary Website",
  "ghlWidgetId": ""
} as const;

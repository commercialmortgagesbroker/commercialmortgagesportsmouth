/**
 * Case studies, Commercial Mortgages Portsmouth.
 *
 * Ten anonymised case studies covering the Portsmouth market hooks:
 * Southsea PO4 student HMO portfolio, Gunwharf Quays leisure refinance,
 * Lakeside North Harbour office investment, Queen Alexandra Hospital
 * dental owner-occupier, Cascades retail refinance, Albert Road
 * independent F&B owner-occupier, Tipner Regeneration mixed-use bridge,
 * Drayton care home, Old Portsmouth heritage hotel acquisition,
 * Voyager Park defence-supply-chain industrial.
 *
 * Real Portsmouth postcodes/districts. Specifics on rate, LTV, term and
 * lender (eight named lenders only: Shawbrook, InterBay Commercial,
 * LendInvest, Cynergy Bank, Lloyds, NatWest, Barclays, Santander). Rates
 * inside the 6.0 to 9.0 pct pa band. boroughSlug matches the 12 Portsmouth
 * area slugs in src/lib/constants.ts.
 */

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  borough: string;
  boroughSlug: string;
  financeType: string;
  loanAmount: string;
  gdv: string;
  ltv: string;
  term: string;
  units: number;
  schemeType: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  keyStats: { label: string; value: string }[];
  coordinates: [number, number];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    title: "Student HMO portfolio refinance, Southsea PO4",
    slug: "southsea-po4-student-hmo-portfolio-refinance",
    borough: "Southsea Seafront and Common",
    boroughSlug: "southsea-seafront",
    financeType: "Portfolio Refinance (HMO)",
    loanAmount: "£2.65M",
    gdv: "£3.60M",
    ltv: "74%",
    term: "25 years",
    units: 9,
    schemeType: "Nine-property student HMO portfolio (52 bed-spaces)",
    summary:
      "A Portsmouth-based HMO operator refinanced a nine-property Southsea (PO4) student HMO portfolio into a single £2.65M facility at 74% LTV, 25-year amortisation, 7.45% pa via InterBay Commercial.",
    challenge:
      "Nine terraced HMOs across the Southsea PO4 student catchment, all sitting on existing C4 or sui generis HMO planning consents and all licensed under the Portsmouth City Council additional HMO licensing scheme. 52 bed-spaces combined, tenanted to University of Portsmouth and Solent feeder students alongside young-professional renters supported by the Queen Alexandra Hospital and Portsmouth Naval Base employer catchment. Gross rent £312K pa, valuation £3.60M.\n\nThe operator had financed the portfolio across three legacy lenders, two on variable rates and one on a maturing fix, with personal-guarantee exposure the borrower wanted to reduce. Portsmouth has the highest HMO change-of-use volume in our network and the lender pool reads ongoing licensing compliance as a normal underwriting constraint, but the underwriter still had to take a view on the sui generis 8-bed property in the pack where the planning consent had landed only fourteen months earlier.",
    solution:
      "InterBay Commercial quoted 7.45% pa over a 25-year amortisation at 74% LTV (£2.65M against £3.60M valuation). Blended ICR test at 152% stressed at a notional rate 2 percentage points above pay rate. Pass.\n\nThe credit submission included the nine HMO planning consents and lawful-development certificates, the Portsmouth City Council HMO licence pack, three years of borrower rental track record at 95% occupancy across academic and summer-let periods, the SPV pack and the deposit proof. The three legacy redemptions ran in parallel through one solicitor instruction. Credit approval at week 4, full legal completion at week 9.",
    outcome:
      "Three legacy facilities consolidated into one clean 25-year structure. Rate certainty for five years across the portfolio. Personal-guarantee exposure reduced from 30% of facility to 22%. The operator has subsequently used the same lender for a tenth-property acquisition on the same Southsea catchment.",
    keyStats: [
      { label: "Facility", value: "£2.65M" },
      { label: "Property value", value: "£3.60M" },
      { label: "LTV", value: "74%" },
      { label: "Rate", value: "7.45% pa" },
      { label: "Term", value: "25 years" },
      { label: "Blended ICR", value: "152%" },
    ],
    coordinates: [50.7810, -1.0810],
  },
  {
    id: "cs-002",
    title: "Leisure asset refinance, Gunwharf Quays",
    slug: "gunwharf-quays-leisure-refinance",
    borough: "Portsea and Gunwharf Quays",
    boroughSlug: "portsea-gunwharf",
    financeType: "Trading-Business Mortgage (Hospitality)",
    loanAmount: "£2.20M",
    gdv: "£3.15M",
    ltv: "70%",
    term: "20 years (5yr fix)",
    units: 1,
    schemeType: "Waterfront restaurant-and-bar trading asset, Gunwharf Quays catchment",
    summary:
      "An experienced hospitality operator refinanced a waterfront restaurant-and-bar trading asset adjacent to Gunwharf Quays (PO1) off a maturing 5-year fix with a £2.20M trading-business mortgage at 70% LTV, 20-year amortisation, 7.95% pa via Cynergy Bank.",
    challenge:
      "Established 140-cover restaurant and 90-cover waterfront bar within the Gunwharf Quays catchment, trading consistently with covers materially supported by year-round tourism flow from Spinnaker Tower, HMS Victory and the Mary Rose attraction cluster plus the wider Old Portsmouth heritage flow. Turnover £2.65M, EBITDA £385K on the most recent full year. The previous 5-year fix at 5.45% pa was maturing inside ninety days.\n\nThe complication was the long-leasehold-under-freehold structure that is normal on the Gunwharf Quays Land Securities estate, plus a requirement to take a view on goodwill separately within the trading valuation. Two mainstream commercial desks declined on the long-leasehold structure despite the trading consistency.",
    solution:
      "Cynergy Bank quoted 7.95% pa on a 5-year fix inside a 20-year amortisation at 70% LTV (£2.20M against £3.15M valuation). EBITDA cover at 1.74x stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin for the sector. Cynergy's hospitality desk accepted the Gunwharf long-leasehold-under-freehold position on the strength of the head-lease term remaining (118 years unexpired) and a specialist hospitality RICS valuation that addressed goodwill separately.\n\nThe credit submission included three years of audited accounts, current management figures, the operator's hospitality track record across two previous South Coast hospitality sites, the head-lease pack, the licence pack and a six-month forward management projection. Specialist hospitality RICS valuer instructed. We negotiated the personal guarantee cap down from 30% to 22% of facility. Credit approval at week 4, full legal completion at week 9 from start.",
    outcome:
      "Refinance completed with rate certainty for five years and personal-guarantee exposure materially reduced. Monthly interest cost approximately £14K pa below the alternative that did proceed to indicative terms over the 5-year fix. Operator has subsequently approached us about a second Old Portsmouth hospitality acquisition.",
    keyStats: [
      { label: "Facility", value: "£2.20M" },
      { label: "Property value", value: "£3.15M" },
      { label: "LTV", value: "70%" },
      { label: "Rate", value: "7.95% pa" },
      { label: "Term", value: "20 years (5yr fix)" },
      { label: "EBITDA cover", value: "1.74x" },
    ],
    coordinates: [50.7960, -1.1010],
  },
  {
    id: "cs-003",
    title: "Multi-let office investment acquisition, Lakeside North Harbour",
    slug: "lakeside-north-harbour-office-investment",
    borough: "Cosham and Lakeside North Harbour",
    boroughSlug: "cosham",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£3.45M",
    gdv: "£4.95M",
    ltv: "70%",
    term: "25 years (5yr fix)",
    units: 1,
    schemeType: "Single multi-let office building, Lakeside North Harbour campus",
    summary:
      "A South Coast investor acquired a single multi-let office building on the Lakeside North Harbour campus at Cosham (PO6) for £4.95M with a £3.45M commercial investment mortgage at 70% LTV, 25-year amortisation, 7.15% pa via Shawbrook.",
    challenge:
      "32,000 sqft of refurbished multi-let office space within the Lakeside North Harbour IBM-legacy office park, c. 1.5M sqft total campus. The acquisition asset was let across four tenants on FRI leases of varying terms, weighted average unexpired lease term 6.2 years, anchored by a defence supply chain consultancy on a 10-year FRI with 8 years unexpired and supported by two professional-services occupiers and a clinical research tenant tied to the Queen Alexandra Hospital catchment. Net rent £372K pa, valuation £4.95M.\n\nThe investor had a 90-day completion target. Multi-let office at this scale needs a lender comfortable with the blended tenant covenant pack, the campus management structure and the historic occupancy track record on the wider Lakeside estate, which a portion of the mainstream commercial pool will not entertain at speed.",
    solution:
      "Shawbrook quoted 7.15% pa on a 5-year fix inside a 25-year amortisation at 70% LTV (£3.45M against £4.95M valuation). ICR cover at 153% stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin across the blended tenant covenant base.\n\nThe credit submission included four FRI leases, tenant covenant packs on the defence supply chain consultancy and the clinical research tenant, three-year rent collection history at 99% on-time across the building, the Lakeside campus management agreement, the SPV pack and the deposit proof. Specialist Hampshire commercial valuer with recent Lakeside North Harbour comparables on file. Credit approval at week 4, full legal completion at week 8 from start, comfortably inside the 90-day window.",
    outcome:
      "Acquisition completed inside the vendor window with the asset held on a clean 25-year structure and rate certainty for five years. The investor has subsequently approached us about a second Lakeside North Harbour acquisition on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£3.45M" },
      { label: "Property value", value: "£4.95M" },
      { label: "LTV", value: "70%" },
      { label: "Rate", value: "7.15% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "ICR", value: "153%" },
    ],
    coordinates: [50.8460, -1.0670],
  },
  {
    id: "cs-004",
    title: "Dental practice freehold purchase, Queen Alexandra Hospital catchment",
    slug: "queen-alexandra-dental-practice-owner-occupier",
    borough: "Cosham and Lakeside North Harbour",
    boroughSlug: "cosham",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£985K",
    gdv: "£1.35M",
    ltv: "73%",
    term: "25 years",
    units: 1,
    schemeType: "Owner-occupier mixed NHS-and-private dental practice freehold",
    summary:
      "An established Cosham dental partnership acquired the freehold of its practice premises in the Queen Alexandra Hospital catchment (PO6) for £1.35M with a £985K owner-occupier commercial mortgage at 73% LTV, 25-year term, 6.45% pa via NatWest.",
    challenge:
      "Established mixed NHS-and-private dental practice, three principals, six surgeries, trading from leased Cosham premises for eleven years inside the Queen Alexandra Hospital healthcare ancillary catchment. NHS GDS contract value £495K pa supplemented by a stable private-fee mix; the practice sits inside the dominant Portsmouth Hospitals University NHS Trust catchment which generates a strong referral and patient flow. Turnover £1.12M, EBITDA £345K on the most recent full year.\n\nThe freeholder offered the property at £1.35M open market valuation with a four-month decision window. The partnership had £365K deposit available from accumulated retained earnings. The challenge was matching the deal to a high-street commercial desk willing to give meaningful rate competition on a defensive regulated-profession sector, which is a particular sweet spot for the NatWest healthcare desk and the Cambridge & Counties Hampshire SME book.",
    solution:
      "NatWest commercial banking quoted 6.45% pa over 25 years at 73% LTV (£985K against £1.35M valuation). EBITDA cover at 2.25x stressed, comfortable margin for the regulated profession sector. Barclays and Cambridge & Counties also quoted; NatWest offered the cleanest covenant package on personal guarantee structure and the longest term.\n\nThe credit submission ran on three years of audited partnership accounts, the NHS GDS contract evidence, principal-level CV pack and GDC registration evidence, deposit proof, the building survey and a clean dental decontamination compliance report. Specialist healthcare RICS valuer instructed in parallel with credit underwriting; valuation back at week 2. Credit approval at week 3. Full legal completion at week 7 from initial enquiry.",
    outcome:
      "Freehold acquired ahead of the partnership's four-month decision window. Monthly mortgage payment £6,580 against monthly EBITDA of £28,750, very strong cover. Rate saving against the high-street alternative quoted: approximately £14K pa over the 5-year fix period.",
    keyStats: [
      { label: "Facility", value: "£985K" },
      { label: "Property value", value: "£1.35M" },
      { label: "LTV", value: "73%" },
      { label: "Rate", value: "6.45% pa" },
      { label: "Term", value: "25 years" },
      { label: "EBITDA cover", value: "2.25x" },
    ],
    coordinates: [50.8470, -1.0680],
  },
  {
    id: "cs-005",
    title: "Retail parade refinance, Cascades Centre catchment",
    slug: "cascades-retail-refinance",
    borough: "City Centre and Commercial Road",
    boroughSlug: "city-centre-commercial-road",
    financeType: "Portfolio Refinance (Commercial Investment)",
    loanAmount: "£2.85M",
    gdv: "£4.10M",
    ltv: "70%",
    term: "25 years (5yr fix)",
    units: 4,
    schemeType: "Four-unit retail parade adjacent to the Cascades Centre",
    summary:
      "A Hampshire-based investor refinanced a four-unit retail parade adjacent to the Cascades Centre on Commercial Road (PO1) into a single £2.85M facility at 70% LTV, 25-year amortisation, 7.35% pa via Shawbrook.",
    challenge:
      "Four-unit retail parade on the immediate Cascades Centre fringe of the Commercial Road central retail spine. Mixed tenant covenant base: one national high-street fashion retailer on a 10-year FRI with 6 years unexpired, one regional bakery and coffee chain on a 5-year FRI, one independent jeweller and one flexible-term let to an independent F&B operator. Weighted average unexpired lease term 5.1 years. Combined gross rent £342K pa, valuation £4.10M.\n\nPrevious facility was a maturing 5-year fix at 5.65% pa across the parade with a 30% of facility personal guarantee. The investor wanted a fresh 5-year fix and a meaningful reduction in personal guarantee exposure on the strength of three years of clean rental track record across the parade.",
    solution:
      "Shawbrook quoted 7.35% pa on a 5-year fix inside a 25-year amortisation at 70% LTV (£2.85M against £4.10M valuation). ICR cover at 158% stressed at a notional rate 1.5 percentage points above pay rate, comfortable across the blended tenant covenant base.\n\nWe negotiated the personal guarantee cap down from 30% to 24% of facility on the strength of three years of clean rent collection history (97% on-time across the four units) and the diversified tenant covenant base including the national fashion retailer. The credit submission included three FRI leases plus the flexible let, tenant covenant packs on the national covenants, three-year rent collection history, the SPV pack and the original Commercial Road parade planning consent. Credit approval at week 4, full legal completion at week 9.",
    outcome:
      "Refinance completed with rate certainty for five years, personal guarantee exposure materially reduced and the consolidated parade held on a clean single facility. The investor has subsequently used the same lender for a second Commercial Road retail acquisition.",
    keyStats: [
      { label: "Facility", value: "£2.85M" },
      { label: "Property value", value: "£4.10M" },
      { label: "LTV", value: "70%" },
      { label: "Rate", value: "7.35% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "ICR", value: "158%" },
    ],
    coordinates: [50.8000, -1.0900],
  },
  {
    id: "cs-006",
    title: "Independent restaurant freehold purchase, Albert Road",
    slug: "albert-road-fb-owner-occupier",
    borough: "Southsea Inner and Albert Road",
    boroughSlug: "southsea-inner",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£665K",
    gdv: "£925K",
    ltv: "72%",
    term: "15 years",
    units: 1,
    schemeType: "Free-of-tie independent restaurant freehold, Albert Road F&B spine",
    summary:
      "An experienced Albert Road F&B operator acquired the freehold of its restaurant premises (PO5) for £925K with a £665K owner-occupier mortgage at 72% LTV, 15-year term, 7.45% pa via Cynergy Bank.",
    challenge:
      "Independent restaurant trading from leased premises on the Albert Road F&B spine for nine years. Very strong covers profile supported by the year-round Southsea inner catchment, the University of Portsmouth staff-and-postgrad lunch trade, the Queen Alexandra Hospital and Portsmouth Naval Base corporate spillover and a loyal local catchment. Turnover £905K, EBITDA £132K on the most recent full year.\n\nThe landlord served notice to sell at £925K with a tight three-month decision window. The operator had £260K deposit available from accumulated retained profit. The challenge was speed and the Albert Road F&B sector underwrite, several mainstream commercial desks decline central-Portsmouth leisure on perceived volatility despite the actual trading consistency.",
    solution:
      "Cynergy Bank quoted 7.45% pa over 15 years at 72% LTV (£665K against £925K valuation). EBITDA cover at 1.58x stressed at a notional rate 1.5 percentage points above pay rate, comfortable for the sector. Licensed-trade and hospitality specialist RICS valuer.\n\nThe credit submission included three years of accounts, current management figures, the licence pack, deposit proof, identity and source-of-funds documents. Cynergy's licensed-trade desk approved in 13 working days. Specialist valuer instructed in parallel with credit underwriting; valuation back at week 2. Full legal completion at 31 working days from initial enquiry.",
    outcome:
      "Freehold acquired ahead of the vendor's three-month decision window. Monthly mortgage payment £6,140 against monthly EBITDA of £11,000, comfortable cover for continued reinvestment in kitchen kit. Operator has approached us about a second Albert Road F&B opportunity on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£665K" },
      { label: "Property value", value: "£925K" },
      { label: "LTV", value: "72%" },
      { label: "Rate", value: "7.45% pa" },
      { label: "Term", value: "15 years" },
      { label: "EBITDA cover", value: "1.58x" },
    ],
    coordinates: [50.7860, -1.0810],
  },
  {
    id: "cs-007",
    title: "Mixed-use bridge-to-let, Tipner Regeneration zone",
    slug: "tipner-regeneration-mixed-use-bridge",
    borough: "Stamshaw and Tipner Regeneration",
    boroughSlug: "stamshaw-tipner",
    financeType: "Commercial Bridge-to-Let",
    loanAmount: "£1.45M",
    gdv: "£1.95M",
    ltv: "74%",
    term: "12-month bridge + 25-year term-out",
    units: 1,
    schemeType: "Vacant mixed-use freehold (Class E ground + 7 flats above), Tipner Regeneration fringe",
    summary:
      "A Portsmouth-based investor acquired a £1.95M vacant mixed-use freehold on the Tipner Regeneration fringe (PO2) with a £1.45M 12-month bridge at 0.88% per month via LendInvest, with an agreed term-out at 7.05% pa onto a 25-year commercial investment mortgage on completion of letting.",
    challenge:
      "The asset was a former retail-with-warehouse block on the Tipner Lane fringe of the Tipner Regeneration zone, vacant possession at acquisition. The investor's plan: light internal works (£165K budget, Class E partition reconfiguration on the ground floor, seven self-contained flat fit-out on the upper floors, services upgrade), then re-let on a single Class E FRI lease to a regional convenience operator on the ground and assured shorthold tenancies on the seven flats above.\n\nNo investment lender would fund the asset at acquisition because there was no income, but the income was clearly deliverable inside 9 to 12 months. Bridge-to-let was the right answer; the question was getting the term-out commitment locked at acquisition rather than hoping to refinance later in a different rate environment.",
    solution:
      "LendInvest quoted a 12-month bridge at 0.88% per month (10.55% pa equivalent) at 74% LTV against open-market vacant possession value, with the agreed term-out at 7.05% pa onto a 25-year amortisation on completion of letting. Both offers issued together at acquisition, the term-out was conditional on the Class E FRI lease completing at minimum £42K pa and the seven AST flats stabilising at 95% occupancy.\n\nLight works completed in 5 months. The Class E unit re-let on a 7-year FRI at £45K pa to a regional convenience operator at month 6. The seven flats stabilised at month 7. Term-out drew at month 8, replacing the bridge with a 25-year investment commercial mortgage at the agreed 7.05% pa.",
    outcome:
      "Total bridge cost £102K over 8 months, well inside the value-add envelope. Stabilised asset at exit valued at £2.45M (against £1.95M acquisition + £165K capex), generating £160K of equity uplift before the long-term hold. Investor has used the bridge-to-let model twice more across the Stamshaw and Tipner Regeneration belt.",
    keyStats: [
      { label: "Bridge facility", value: "£1.45M" },
      { label: "Acquisition value", value: "£1.95M" },
      { label: "Bridge LTV", value: "74%" },
      { label: "Bridge rate", value: "0.88% pm" },
      { label: "Term-out rate", value: "7.05% pa" },
      { label: "Stabilised value", value: "£2.45M" },
    ],
    coordinates: [50.8290, -1.0950],
  },
  {
    id: "cs-008",
    title: "Care home freehold refinance, Drayton",
    slug: "drayton-care-home-refinance",
    borough: "Drayton and Farlington",
    boroughSlug: "drayton-farlington",
    financeType: "Trading-Business Mortgage (Care)",
    loanAmount: "£2.05M",
    gdv: "£2.85M",
    ltv: "72%",
    term: "20 years (5yr fix)",
    units: 1,
    schemeType: "Owner-operator 36-bed nursing-and-residential care home freehold",
    summary:
      "An experienced care operator refinanced a 36-bed nursing-and-residential care home in Drayton (PO6) along the A2030 care-home corridor off a maturing 5-year fix with a £2.05M trading-business mortgage at 72% LTV, 20-year term, 7.95% pa via Cynergy Bank.",
    challenge:
      "Established 36-bed nursing-and-residential care home in the Drayton district centre on the A2030 care-home corridor, owner-operator structure, trading consistently with occupancy averaging 93% across the most recent 24 months and a stable mix of local-authority-funded and self-funded residents. The home sits inside the wider Queen Alexandra Hospital healthcare catchment, which supports the referral pipeline. CQC rating Good across the most recent two inspections. Turnover £2.35M, EBITDA £395K on the most recent full year. The previous 5-year fix at 5.35% pa was maturing inside 90 days.\n\nThe complication was a modest planned capex programme to refresh shared bathrooms and update the call-bell system flagged at the most recent CQC inspection. Two mainstream commercial desks were cautious on the capex programme; one declined on internal sector-exposure limits.",
    solution:
      "Cynergy Bank quoted 7.95% pa on a 5-year fix inside a 20-year amortisation at 72% LTV (£2.05M against £2.85M valuation). EBITDA cover at 1.71x stressed at a notional rate 1.5 percentage points above pay rate, comfortable for the sector. Cynergy's healthcare desk accepted the capex programme on the strength of a costed contractor plan and a fixed completion date for the works.\n\nThe credit submission included three years of audited accounts, the CQC inspection report pack, the registered-manager CV, the bed-mix and resident-fee pack, the local-authority placement evidence, the deposit proof and the costed capex plan with fixed-price contractor quotes. Specialist healthcare RICS valuer instructed. Credit approval at week 5, full legal completion at week 9 from initial enquiry.",
    outcome:
      "Refinance completed with rate certainty for five years across the freehold. Monthly interest cost approximately £17K pa below the alternative quote that did proceed to indicative terms. Operator has subsequently approached us about a second Hampshire care home acquisition on the same Cynergy route.",
    keyStats: [
      { label: "Facility", value: "£2.05M" },
      { label: "Property value", value: "£2.85M" },
      { label: "LTV", value: "72%" },
      { label: "Rate", value: "7.95% pa" },
      { label: "Term", value: "20 years (5yr fix)" },
      { label: "EBITDA cover", value: "1.71x" },
    ],
    coordinates: [50.8500, -1.0270],
  },
  {
    id: "cs-009",
    title: "Heritage hotel acquisition, Old Portsmouth",
    slug: "old-portsmouth-heritage-hotel-acquisition",
    borough: "Old Portsmouth and Spice Island",
    boroughSlug: "old-portsmouth",
    financeType: "Trading-Business Mortgage (Hospitality)",
    loanAmount: "£2.95M",
    gdv: "£4.20M",
    ltv: "70%",
    term: "20 years",
    units: 1,
    schemeType: "Independent 22-bedroom heritage hotel and restaurant freehold",
    summary:
      "An experienced hospitality operator acquired the freehold of a 22-bedroom independent heritage hotel and restaurant in Old Portsmouth (PO1) for £4.20M with a £2.95M trading-business mortgage at 70% LTV, 20-year term, 8.05% pa via Cynergy Bank.",
    challenge:
      "Established trading business inside the Old Portsmouth heritage hospitality cluster, twenty-two letting bedrooms above a 75-cover restaurant and waterfront bar. Trading consistently with occupancy averaging 76% across the previous 24 months and restaurant covers materially supported by year-round tourism flow from Spinnaker Tower, HMS Victory, the Mary Rose and the wider Gunwharf Quays catchment alongside the Portsmouth cross-Solent ferry passenger flow. ADR £155, EBITDA £535K on the most recent full year of vendor accounts.\n\nThe vendor offered the freehold and goodwill for sale at £4.20M with a 120-day completion window. The complication was the listed-building status of the Old Portsmouth conservation area property, which triggered a specialist heritage RICS valuation premium and a tighter underwriting view on the planned cosmetic refurbishment programme. Two mainstream commercial desks declined on the listed-building heritage premium.",
    solution:
      "Cynergy Bank quoted 8.05% pa over 20 years at 70% LTV (£2.95M against £4.20M valuation). EBITDA cover at 1.69x stressed at a notional rate 1.5 percentage points above pay rate, comfortable for the sector. Cynergy's hospitality desk accepted the listed-building heritage position on the strength of a specialist heritage hospitality RICS valuation and a costed conservation-area refurbishment plan signed off by a heritage architect.\n\nThe credit submission included three years of vendor accounts, the operator's hospitality track record across two previous South Coast hotels, the heritage-architect refurbishment scope, the licence pack and a six-month post-completion management projection. We negotiated the personal guarantee cap down from 30% to 24% of facility on the strength of the operator track record. Credit approval at week 5, full legal completion at week 10 from start, comfortably inside the 120-day window.",
    outcome:
      "Acquisition completed on schedule with the operator now controlling an Old Portsmouth heritage hospitality asset on long-term debt with a reduced personal-guarantee exposure. The borrower has subsequently approached us about a second Portsmouth heritage hospitality opportunity on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£2.95M" },
      { label: "Property value", value: "£4.20M" },
      { label: "LTV", value: "70%" },
      { label: "Rate", value: "8.05% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "1.69x" },
    ],
    coordinates: [50.7920, -1.1050],
  },
  {
    id: "cs-010",
    title: "Defence supply chain industrial refinance, Voyager Park",
    slug: "voyager-park-defence-supply-chain-industrial",
    borough: "Hilsea",
    boroughSlug: "hilsea",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£3.25M",
    gdv: "£4.65M",
    ltv: "70%",
    term: "20 years (5yr fix)",
    units: 1,
    schemeType: "Single-let 38,000 sqft B2/B8 industrial investment, Voyager Park",
    summary:
      "An investor refinanced a single-let 38,000 sqft B2/B8 industrial investment at Voyager Park (PO3) off a maturing 5-year fix with a £3.25M commercial investment mortgage at 70% LTV, 20-year amortisation, 6.95% pa via Shawbrook.",
    challenge:
      "38,000 sqft of modern B2/B8 industrial space and ancillary office on Voyager Park, let to an established Royal Navy and BAE Systems Maritime Services supply chain occupier on an 8-year FRI lease with 5 years unexpired at refinance, located on the Voyager Park defence supply chain industrial belt with direct A27 and A3 access into the wider M27 Solent corridor. Net rent £328K pa, valued at £4.65M by the lender's panel valuer. The investor was carrying a maturing 5-year fix at 5.05% pa and wanted a fresh 5-year fix at the right rate.\n\nThe high-street commercial incumbent quoted 7.65% pa over 20 years, wider than the Solent industrial corridor should price on a clean defence supply chain covenant and a meaningful unexpired term. The Portsmouth defence cluster reads as a single market with the wider Solent industrial corridor and lenders that price the corridor properly on the first call quote tighter.",
    solution:
      "We benchmarked the deal across four Solent-corridor-active investment lender desks. Shawbrook quoted 6.95% pa on a 5-year fix inside a 20-year amortisation at 70% LTV (£3.25M against £4.65M valuation). ICR cover at 162% stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin on the defence supply chain covenant.\n\nThe credit submission included the FRI lease, the tenant covenant pack with three years of accounts and evidence of the underlying Royal Navy and BAE Systems Maritime Services contract pipeline, the Voyager Park site planning history, occupancy track record, the SPV pack and the deposit proof. RICS Red Book valuation by a specialist Hampshire industrial valuer in 17 working days. Full credit approval at week 4, legal completion at week 8 from initial enquiry.",
    outcome:
      "Refinance completed with rate certainty for five years. Monthly interest cost approximately £23K pa below the high-street incumbent's quoted rate over the 5-year fix. Investor has subsequently used the same lender route for a second defence supply chain industrial acquisition.",
    keyStats: [
      { label: "Facility", value: "£3.25M" },
      { label: "Property value", value: "£4.65M" },
      { label: "LTV", value: "70%" },
      { label: "Rate", value: "6.95% pa" },
      { label: "Term", value: "20 years (5yr fix)" },
      { label: "ICR", value: "162%" },
    ],
    coordinates: [50.8390, -1.0850],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

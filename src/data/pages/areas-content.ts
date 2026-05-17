/**
 * Per-district area page content, Commercial Mortgages Portsmouth.
 *
 * Each area page is a Bradley-Benner local landing page where the ward /
 * neighbourhood IS the primary entity. Heading vocabulary uses different
 * entity variants across URL / title / H1 / H2s / H3s, no phrase repeats.
 *
 * Differentiation comes from layered local data:
 *   1. Real Portsmouth City Council (and Havant Borough Council for Hayling)
 *      planning applications filtered by postcode catchment, cited by
 *      reference number, address and proposal.
 *   2. HM Land Registry residential transactions used as market temperature
 *      ONLY, never claimed as commercial transactions.
 *   3. Sector-specific lender appetite naming the lenders most likely
 *      to fund the dominant local commercial mortgage profile.
 *
 * NeuronWriter discipline: every page must hit mortgage / commercial mortgage
 * / Portsmouth / [area] / finance / lender / broker, plus the entity set,
 * FCA, stamp duty, refinancing, LTV.
 *
 * Slugs match AREAS in src/lib/constants.ts and AREA_IMAGES in src/data/area-images.ts.
 */

export interface PlanningRef {
  ref: string;
  address: string;
  postcode: string;
  proposal: string;
}

export interface AreaDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    h1: string;
    lede: string;
  };
  marketContext: {
    h2: string;
    body: string[];
  };
  planningContext: {
    h2: string;
    body: string;
    refs: PlanningRef[];
  };
  schemeTypes: {
    h2: string;
    items: Array<{ label: string; detail: string; typicalSize?: string }>;
  };
  finance: {
    h2: string;
    body: string;
    structures: Array<{ product: string; applicability: string }>;
  };
  lenderAppetite: {
    h2: string;
    body: string;
  };
  /** Property types most active in this district, slugs from property-types-content.ts. */
  relatedAssetClasses: string[];
  faqs: Array<{ question: string; answer: string }>;
}

const standardCmStructures = [
  { product: "Owner-occupier", applicability: "Businesses buying their trading premises, EBITDA cover at 1.3–1.5x, LTV to 75% on bricks." },
  { product: "Commercial investment", applicability: "Let assets, ICR at 140–160% stressed, LTV typically 65–75%." },
  { product: "Semi-commercial", applicability: "Shop+flat archetypes, blended ICR ~145%, LTVs to 75% via specialists." },
  { product: "Bridge-to-let", applicability: "Vacant or value-add acquisitions with refurb / re-let exit onto term mortgage." },
  { product: "Refinancing", applicability: "Maturing facilities, equity release on stabilised commercial assets, rate-driven switches." },
];

export interface AreasHubContent {
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
  };
  intro: {
    h2: string;
    body: string[];
  };
  groupings: Array<{
    title: string;
    description: string;
    slugs: string[];
  }>;
  closing: {
    h2: string;
    body: string;
  };
}

export const areasHubContent: AreasHubContent = {
  hero: {
    eyebrow: "Where we lend",
    h1: "Commercial Mortgages Portsmouth by Area",
    lede:
      "From Gunwharf Quays outlet leisure and Old Portsmouth heritage hospitality in PO1 to Cosham and Lakeside North Harbour 1.5M sqft IBM-legacy office park in PO6, the Portsmouth commercial mortgage market is not one market, it is twelve. Each district carries its own dominant property type, its own typical facility size and its own lender shortlist. Every area page below stitches together the live Portsmouth City Council public access portal, HM Land Registry transaction temperature and the named lenders most likely to fund a deal there.",
  },
  intro: {
    h2: "How the Portsmouth commercial mortgage market splits by district",
    body: [
      "Pricing on a Commercial Road central retail freehold in PO1 is not the same as pricing on a North End PO2 sui generis HMO conversion or a Hayling Island seafront hotel trading-business. ICR thresholds on a Southsea Albert Road shop-with-flat are not the same as on a Lakeside North Harbour Grade B office floor. The lender shortlist for a Drayton care home freehold is almost entirely different from the shortlist for a Tipner West regeneration mixed-use site. Every area page below carries the specifics that matter, postcode, named planning applications drawn from the Portsmouth City Council public access portal (and Havant Borough where the Hayling Island fringe sits across the local authority boundary), dominant commercial sector mix, expected LTV and rate range, and the lenders we lean on first.",
      "We arrange commercial mortgages, finance and refinancing across all twelve districts. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated. Stamp duty land tax applies on every commercial purchase at the commercial rates, your conveyancer will price it. Where a lender takes more than 60% LTV against a trading business, expect EBITDA cover testing in addition to bricks-and-mortar valuation. Hampshire Trust Bank is locally headquartered in Hampshire and runs an active Portsmouth book.",
    ],
  },
  groupings: [
    {
      title: "Central island core, PO1 heritage, retail spine and Gunwharf leisure",
      description:
        "The PO1 commercial mortgage core. Old Portsmouth heritage hospitality on Spice Island and Broad Street, Portsea and Gunwharf Quays Land Securities outlet retail and waterfront leisure, City Centre and Commercial Road central retail spine including the Cascades Centre and Guildhall Square office cluster. Anchor facility sizes £400K to £4M.",
      slugs: ["old-portsmouth", "portsea-gunwharf", "city-centre-commercial-road"],
    },
    {
      title: "Southsea leisure and independent retail",
      description:
        "Southsea inner anchored by Albert Road and Osborne Road independent F&B and serviced offices in PO5, Southsea seafront PO4 and PO5 leisure hotels and holiday-let market threading along Clarence Esplanade and The Clocktower, Eastney PO4 residential-led rising mixed-use frontage. Trading-business, semi-commercial and small-cap leisure investment.",
      slugs: ["southsea-inner", "southsea-seafront", "eastney"],
    },
    {
      title: "North island, HMO conversion belt and Tipner regeneration",
      description:
        "North End PO2 dense terraced HMO conversion zone along London Road and Kirby Road, Stamshaw and Tipner West regeneration on the M275 gateway in PO2 with light industrial transitioning to mixed-use, Hilsea PO2 and PO3 out-of-city retail park and light industrial gateway including Hilsea Retail Park and Voyager Park. Specialist HMO, semi-commercial and trade-counter territory.",
      slugs: ["north-end", "stamshaw-tipner", "hilsea"],
    },
    {
      title: "Mainland Portsmouth, Cosham healthcare and Hayling fringe",
      description:
        "Cosham PO6 anchored by Lakeside North Harbour 1.5M sqft IBM-legacy office park on Western Road and Queen Alexandra Hospital, Drayton and Farlington PO6 suburban district centres along the A2030 care-home corridor, Hayling Island and Havant Fringe PO11 seafront hotel and holiday-let market sitting inside Havant Borough LPA. Larger ticket investment, care-home and hospitality finance.",
      slugs: ["cosham", "drayton-farlington", "hayling-island-fringe"],
    },
  ],
  closing: {
    h2: "Beyond the twelve, wider Portsmouth and the Solent corridor",
    body:
      "We routinely arrange commercial mortgages outside the twelve districts above, including Fareham, Gosport, Lee-on-the-Solent, Waterlooville, Havant and Emsworth, plus Southampton, Winchester and Chichester inside the wider Hampshire and Solent corridor. The same 90+ lender panel applies, with Allica, Shawbrook, HTB, Cambridge & Counties, Paragon, Together and YBS Commercial all active across the South Coast and Hampshire Trust Bank locally headquartered in Hampshire. If your deal is in a Portsmouth postcode that does not have its own page yet, call us direct, we will route you to the right product and the right lenders inside an hour.",
  },
};

export const areaDetails: Record<string, AreaDetail> = {
  "old-portsmouth": {
    slug: "old-portsmouth",
    name: "Old Portsmouth and Spice Island",
    metaTitle: "Commercial Mortgages Old Portsmouth and Spice Island | Heritage Hospitality Broker, PO1",
    metaDescription:
      "Commercial mortgages for Old Portsmouth and Spice Island, PO1 heritage waterfront hospitality, listed pubs, boutique hotel and Bath Square office investment. HMS Victory visitor catchment, Naval Base fringe. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Old Portsmouth and Spice Island",
      lede:
        "Old Portsmouth and Spice Island sit at the southern tip of Portsea Island in PO1, threading from the cobbled lanes around Broad Street and Bath Square along the historic waterfront to the Round Tower and Square Tower fortifications and out across the Camber to Spice Island. The fabric is Grade I and Grade II listed waterfront pub stock, narrow-frontage boutique hotel and guesthouse accommodation, heritage office accommodation in converted naval and merchant buildings, and a tightly bounded F&B parade that trades against the HMS Victory and Royal Navy heritage visitor catchment of roughly 50,000 people a year through the Historic Dockyard. We arrange commercial mortgages for PO1 listed waterfront pub freehold and trading-business refinance along Bath Square and Broad Street, boutique hotel and guesthouse acquisition across Spice Island, heritage office investment inside the conservation area, and the small-cap mixed-use blocks that wrap the harbour edge. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Old Portsmouth and Spice Island commercial property market",
      body: [
        "Old Portsmouth is the most architecturally protected commercial submarket in Portsmouth and the densest concentration of listed waterfront hospitality on the central Solent. The Bath Square and Broad Street pub cluster (The Still and West, The Spice Island Inn, The Bridge Tavern, The Dolphin) carries a heritage-licensed trade that ties directly to the HMS Victory, Mary Rose and Spinnaker Tower visitor flow through the Historic Dockyard, the cross-harbour Wightlink and Hovertravel passenger footfall, and the Naval Base civilian catchment immediately to the north. Around the pub stack, boutique hotel, guesthouse and serviced-apartment accommodation along Broad Street and the Camber funds against trading accounts rather than bricks-and-mortar comparison, and heritage office floors in converted merchant buildings carry a small but resilient owner-occupier professional firm base.",
        "Transactions are dominated by long-hold private operators on the Bath Square and Broad Street pub freehold, boutique hospitality and guesthouse operators buying their building, and a steady flow of waterfront restaurant and small-hotel refinancings against the heritage visitor cycle. The deep-volume zone for our PO1 Old Portsmouth commercial mortgage book sits in the £400K to £2.5M bracket, listed pub freehold, small boutique hotel acquisition, heritage office floors and small mixed-use blocks. Pricing currently 6.5 to 8.5% pa for clean heritage hospitality investment on Bath Square, with strong-covenant flag-operated stock at 6.5 to 7.5% and independent listed pub freehold at 7.5 to 8.5%. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from the post-pandemic hospitality recovery cycle matured into a higher base-rate environment.",
        "HM Land Registry residential transactions inside the PO1 conservation core cluster around the converted naval terraces along Broad Street and the Camber, with recent files including a Nobbs Lane PO1 2EY semi-freehold at £383,000 and an Isambard Brunel Road PO1 2RX flat at £105,000 that signals the wider central PO1 leasehold flat trade. They are not a direct commercial signal but they confirm that heritage Old Portsmouth continues to absorb residential buyer demand against the backdrop of the wider Portsmouth city centre and Gunwharf Quays leisure economy, which underwrites the ground-floor pub, hotel and restaurant trading-business income that most of our Old Portsmouth and Spice Island commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Old Portsmouth and Spice Island (PO1)",
      body:
        'One headline Portsmouth City Council public-access file anchors the current Old Portsmouth and Spice Island commercial mortgage pipeline. The Spice Island heritage hospitality scheme at Bath Square (Ref <strong>25/00812/FUL</strong>) covers the refurbishment of a listed waterfront pub and boutique hotel accommodation on Spice Island, the canonical Old Portsmouth heritage repositioning that an operator funds through development finance during the works phase and then refinances against on a trading-business mortgage on operator EBITDA at 60 to 70% LTV once trading accounts are established. The Portsea Class E ground-floor and HMO upper-floor mansard scheme (Ref <strong>26/00251/FUL</strong>) in the immediately adjacent PO1 3SE block is the canonical semi-commercial archetype that lenders fund on blended ICR on the Class E retail income and the seven-bed sui generis HMO above. Stamp duty applies at the commercial rates on each freehold acquisition, trading-business refinance is unaffected.',
      refs: [
        {
          ref: "25/00812/FUL",
          address: "Spice Island, Bath Square, Old Portsmouth PO1 2JL",
          postcode: "PO1 2JL",
          proposal: "Old Portsmouth heritage hospitality scheme, refurbishment of listed waterfront pub and boutique hotel accommodation on Spice Island.",
        },
        {
          ref: "26/00251/FUL",
          address: "Portsea, Portsmouth PO1 3SE",
          postcode: "PO1 3SE",
          proposal: "Class E ground floor retained, conversion of C4 upper floors to 7-bed sui generis HMO with mansard extension in Portsea, adjacent to the Old Portsmouth conservation area.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Old Portsmouth and Spice Island",
      items: [
        { label: "Listed waterfront pub freehold", detail: "Grade I and Grade II listed Bath Square, Broad Street and Spice Island pub freehold with heritage licensed trade.", typicalSize: "£500K to £2M facility" },
        { label: "Boutique hotel and guesthouse", detail: "Small Broad Street and Spice Island boutique hotel and guesthouse operator freehold against HMS Victory visitor catchment.", typicalSize: "£600K to £2.5M" },
        { label: "Heritage office investment", detail: "Converted naval and merchant building Grade B office floors inside the PO1 conservation area.", typicalSize: "£400K to £1.5M" },
        { label: "Waterfront restaurant freehold", detail: "Camber and waterfront restaurant operator freehold against visitor-led seasonal trading cycle.", typicalSize: "£400K to £1.5M" },
        { label: "Small mixed-use block", detail: "Ground-floor pub or restaurant with managed serviced-apartment or residential above wrapping the harbour edge.", typicalSize: "£500K to £2M" },
        { label: "Owner-occupier professional services", detail: "Small legal, accountancy and maritime consultancy firms buying heritage office floors of 1,200 to 3,000 sq ft.", typicalSize: "£300K to £1M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Old Portsmouth and Spice Island",
      body: 'Listed pub, boutique hotel and waterfront restaurant trading-business mortgage via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA, accommodation revenue and barrelage where licensed. Heritage office and mixed-use investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier professional firms moving into PO1 heritage offices via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Vacant listed pub or boutique hotel repositioning routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>, exit onto stabilised trading-business mortgage once a trading record is in place. Refinancing maturing hospitality facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Old Portsmouth heritage pub, boutique hotel and waterfront F&B",
      body:
        "Heritage hospitality is the deepest single sector in Old Portsmouth and Spice Island, and the lender pool narrows to a heritage-comfortable shortlist on listed waterfront stock. <strong>Cynergy Bank</strong> runs one of the most active UK hospitality books and sits at the top of our shortlist on Bath Square and Broad Street listed pub freehold, boutique hotel and guesthouse, prime independent stock at 60 to 70% LTV and 7.0 to 8.5% pa on EBITDA cover at 1.5 to 1.8x. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> cover heritage mixed-use and Class E upper-floor repositioning across the PO1 conservation core. <strong>LendInvest</strong> covers refurbishment and bridge-to-let where the listed asset is being repositioned, including the Spice Island heritage hospitality scheme archetype at Bath Square. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest flag-operated boutique hotel and heritage office investment freeholds at 60 to 65% LTV and 6.5 to 7.5% pa, with Lloyds and NatWest carrying the strongest South Coast commercial RM presence in the central Portsmouth catchment. Allica Bank is active across South Coast hospitality on small listed pub, boutique hotel and waterfront F&B owner-occupier freehold. HTB and Together take selected listed-pub and boutique-hotel investment and mixed-use heritage deals. Cambridge & Counties, Paragon and YBS Commercial take selected PO1 heritage investment and mixed-use deals where the operator track record and listed-building maintenance plan fit each lender policy. Hampshire Trust Bank is headquartered in Hampshire and brings strong local knowledge to Old Portsmouth heritage hospitality and conservation-area mixed-use freehold deals. Refinancing on a stabilised listed waterfront pub or boutique hotel typically prices 7.0 to 8.5% pa at 60 to 70% LTV across the operator-EBITDA-led product. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["leisure-hospitality", "pub-restaurant", "office", "mixed-use", "semi-commercial", "holiday-let-portfolio"],
    faqs: [
      {
        question: "What LTV is achievable on a Bath Square or Broad Street listed pub freehold?",
        answer:
          "Up to 70% LTV on a trading listed pub freehold with operator EBITDA cover at 1.5 to 1.8x. A Bath Square or Broad Street heritage pub with two or more years of accounts and a stable barrelage prices best at 60 to 65% LTV at around 7.0 to 7.5% pa with <strong>Cynergy Bank</strong>, with independent stock at 65 to 70% LTV at 7.5 to 8.5% pa. The binding constraint is operator EBITDA, not headline LTV, and listed-building maintenance plan, conservation-area constraints and Grade I or Grade II status feed into the underwriting on every PO1 waterfront pub deal.",
      },
      {
        question: "Can we get a commercial mortgage on a vacant Spice Island heritage pub repositioning?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> or a development-finance route during the works phase. The Spice Island heritage hospitality scheme approved under planning reference 25/00812/FUL Bath Square PO1 2JL is exactly this profile, a 12 to 24 month bridge funds the listed-building refurbishment and re-opening, then terms out to trading-business mortgage once an operator EBITDA track record of 12 to 24 months is in place at 60 to 70% LTV with <strong>Cynergy Bank</strong>, Allica Bank or HTB.',
      },
      {
        question: "What product fits a boutique hotel operator buying their Old Portsmouth freehold?",
        answer:
          'Trading-business mortgage on operator EBITDA at 60 to 70% LTV with <strong>Cynergy Bank</strong>, Allica Bank or HTB, or owner-occupier mortgage via <a href="/services/owner-occupier-commercial-mortgage">owner-occupier route</a> if the operator buys through a partnership or limited-company vehicle. Typical 7.0 to 8.5% pa on the trading-business product, 6.5 to 7.5% pa on the owner-occupier route subject to EBITDA cover at 1.3 to 1.5x. Hampshire Trust Bank is locally headquartered and brings strong appetite for Old Portsmouth boutique hospitality deals.',
      },
      {
        question: "Which lenders are comfortable with PO1 listed-building stock?",
        answer:
          "<strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, <strong>Cynergy Bank</strong> and Together carry the strongest heritage-comfortable appetite across PO1 conservation-area listed pub, boutique hotel, heritage office and mixed-use stock. Cambridge & Counties and HTB take selected Grade II listed-building investment and mixed-use deals where the maintenance plan and operator covenant fit policy. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest flag-operated boutique hotel and heritage office investment freeholds at 60 to 65% LTV. We use those heritage-comfortable desks for every Old Portsmouth and Spice Island deal where listed-building consent, conservation-area constraints or the heritage maintenance plan carries weight in underwriting. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
      },
    ],
  },

  "portsea-gunwharf": {
    slug: "portsea-gunwharf",
    name: "Portsea and Gunwharf Quays",
    metaTitle: "Commercial Mortgages Portsea and Gunwharf Quays | Outlet Retail and Leisure Broker, PO1",
    metaDescription:
      "Commercial mortgages for Portsea and Gunwharf Quays, PO1 Land Securities outlet retail flagship, Spinnaker Tower leisure, marina F&B and Class E plus HMO mixed-use. Tourist-led trading-business and investment finance. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Portsea and Gunwharf Quays",
      lede:
        "Portsea and Gunwharf Quays sit on the western edge of Portsea Island in PO1, threading from the dense terraced Portsea grid around Queen Street and St Georges Square down through the Gunwharf Quays outlet retail and leisure scheme owned by Land Securities to the Spinnaker Tower and the harbour-edge restaurant and bar parade along Gunwharf Road. The fabric is a tightly woven mix of national-multiple outlet retail and F&B accommodation inside the Gunwharf Quays scheme, marina-fronting independent restaurant and bar freehold along the harbour edge, Class E ground-floor and HMO upper-floor mixed-use across the Portsea grid serving the University of Portsmouth and Naval Base civilian catchment, and a small office cluster around Queen Street. We arrange commercial mortgages for PO1 outlet retail unit acquisition inside Gunwharf Quays, marina F&B and Spinnaker Tower-adjacent restaurant trading-business refinance, Class E and HMO semi-commercial freehold across Portsea, and the small-cap mixed-use blocks that thread the regeneration zone. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Portsea and Gunwharf Quays commercial property market",
      body: [
        "Gunwharf Quays is the flagship outlet retail and leisure destination on the central Solent and one of the most institutionally owned single commercial assets in Portsmouth. The Land Securities scheme combines outlet retail accommodation, marina-fronting restaurant and bar units, the Spinnaker Tower visitor attraction and a substantial managed apart-hotel and serviced-apartment stack against a Solent visitor catchment of several million a year through the Wightlink ferry terminal, the cross-harbour Hovertravel link and the Gunwharf Quays car-borne footfall from the M275 and the A3. Around the scheme, the Portsea grid carries one of the densest semi-commercial and HMO conversion blocks in PO1, Class E ground-floor retail with sui generis HMO upper floors trading against the University of Portsmouth and Naval Base civilian catchment.",
        "Transactions inside the Gunwharf Quays scheme are dominated by Land Securities-led institutional asset management and a tightly held outlet retail leaseholder base, while around the scheme the deep-volume zone for our PO1 Portsea and Gunwharf commercial mortgage book sits in the £400K to £2.5M bracket, marina F&B trading-business refinance, small flag-operated apart-hotel freehold, Class E and HMO mixed-use blocks across the Portsea grid, and small mixed-use blocks along Queen Street. Pricing currently 6.5 to 8.5% pa for clean tourist-led leisure investment along Gunwharf Road, with strong-covenant outlet retail and flag-operated apart-hotel stock at 6.0 to 7.0% and independent marina F&B and Portsea semi-commercial at 7.5 to 8.5%. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from the post-pandemic hospitality recovery cycle matured.",
        "HM Land Registry residential transactions inside the PO1 Portsea and Gunwharf footprint cluster around the Gunwharf Quays managed apart-hotel and serviced-apartment stack and the Portsea terraced grid, with recent files including the Isambard Brunel Road PO1 2RX flat at £105,000 that signals the central PO1 leasehold flat trade and the Portsea terraced freehold market that sits behind the HMO conversion pipeline. They are not a direct commercial signal but they confirm that the Portsea and Gunwharf catchment continues to absorb residential supply against the backdrop of the wider Portsmouth tourist economy, which underwrites the ground-floor outlet retail, marina F&B and Class E plus HMO semi-commercial income that most of our Portsea and Gunwharf Quays commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Portsea and Gunwharf Quays (PO1)",
      body:
        'Two headline Portsmouth City Council public-access files anchor the current Portsea and Gunwharf Quays commercial mortgage pipeline. The Gunwharf Quays anchor unit reconfiguration scheme (Ref <strong>26/00198/FUL</strong>) covers the Land Securities-led F&B refresh and outlet retail tenant mix update inside the flagship leisure scheme on Gunwharf Road PO1 3TZ, asset-management capex that the institutional owner refinances against on a Grade A retail and leisure investment facility while individual unit operators refinance trading-business mortgages against the new tenant mix. The Portsea Class E ground-floor and HMO upper-floor mansard scheme (Ref <strong>26/00251/FUL</strong>) at PO1 3SE is the canonical Portsea semi-commercial archetype, Class E ground retained, conversion of C4 upper floors to seven-bed sui generis HMO with mansard extension, funded against blended ICR on the Class E retail income and the sui generis HMO rent above. Stamp duty applies at the commercial rates on each freehold acquisition, trading-business refinance is unaffected.',
      refs: [
        {
          ref: "26/00198/FUL",
          address: "Gunwharf Quays, Gunwharf Road, Portsmouth PO1 3TZ",
          postcode: "PO1 3TZ",
          proposal: "Gunwharf Quays anchor unit reconfiguration, Land Securities-led F&B refresh and outlet retail tenant mix update in the flagship leisure scheme.",
        },
        {
          ref: "26/00251/FUL",
          address: "Portsea, Portsmouth PO1 3SE",
          postcode: "PO1 3SE",
          proposal: "Class E ground floor retained, conversion of C4 upper floors to 7-bed sui generis HMO with mansard extension in Portsea, canonical semi-commercial archetype on the Portsea grid.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Portsea and Gunwharf Quays",
      items: [
        { label: "Gunwharf Quays outlet retail unit", detail: "Land Securities outlet retail unit leaseholder freehold and trading-business purchase inside the flagship scheme.", typicalSize: "£500K to £2.5M facility" },
        { label: "Marina F&B and Spinnaker-adjacent restaurant", detail: "Gunwharf Road and harbour-edge restaurant, bar and cafe operator freehold against tourist-led footfall.", typicalSize: "£500K to £2M" },
        { label: "Apart-hotel and serviced apartment", detail: "Gunwharf Quays managed apart-hotel and serviced-apartment operator freehold and trading-business refinance.", typicalSize: "£1M to £5M" },
        { label: "Portsea Class E plus HMO mixed-use", detail: "Ground-floor Class E retail or food with sui generis HMO above on the Portsea grid, semi-commercial archetype.", typicalSize: "£400K to £1.5M" },
        { label: "Spinnaker Tower leisure-led trading-business", detail: "Visitor-attraction adjacent leisure, F&B and themed-experience operator freehold.", typicalSize: "£500K to £2M" },
        { label: "Queen Street small-cap office and mixed-use", detail: "Small Queen Street and St Georges Square office and mixed-use blocks serving Portsea SME base.", typicalSize: "£300K to £1.2M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Portsea and Gunwharf Quays",
      body: 'Outlet retail and Land Securities-scheme investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Marina F&B, Spinnaker-adjacent restaurant and apart-hotel trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA, accommodation revenue and barrelage where licensed. Portsea Class E and HMO semi-commercial freehold via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Owner-occupier professional firms moving into Queen Street office floors via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Vacant or repositioning outlet retail and marina F&B routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing tourist-led leisure facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Gunwharf Quays outlet retail, marina F&B and Portsea semi-commercial",
      body:
        "Tourist-led leisure and outlet retail is the deepest single sector in Portsea and Gunwharf Quays. <strong>Cynergy Bank</strong> sits at the top of our shortlist on Gunwharf Road and harbour-edge marina F&B, restaurant and apart-hotel trading-business freehold, prime independent stock at 60 to 70% LTV and 7.0 to 8.0% pa on EBITDA cover at 1.5 to 1.8x. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and Allica Bank dominate the Portsea Class E ground and sui generis HMO upper mixed-use semi-commercial bracket at 65 to 75% LTV and 7.0 to 8.5% pa on blended ICR. <strong>LendInvest</strong> covers refurbishment and bridge-to-let where the Portsea Class E plus HMO block is being repositioned, including the canonical 26/00251/FUL archetype with mansard extension. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest Land Securities-scheme outlet retail leaseholder freehold and flag-operated apart-hotel deals at 60 to 65% LTV and 6.5 to 7.5% pa, with HSBC UK Business Banking running its Portsmouth presence out of the Gunwharf scheme. Allica Bank is active across South Coast hospitality and tourist-led F&B on Gunwharf and Spinnaker-adjacent stock. HTB, Cambridge & Counties, Paragon, Together and YBS Commercial take selected Portsea mixed-use, HMO portfolio and apart-hotel deals where the operator track record and covenant fit each lender policy. Hampshire Trust Bank is headquartered in Hampshire and brings strong local knowledge to Portsea semi-commercial, HMO portfolio and Gunwharf-adjacent owner-occupier freehold deals. Refinancing on a stabilised marina F&B or outlet retail asset typically prices 7.0 to 8.5% pa at 60 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "leisure-hospitality", "pub-restaurant", "mixed-use", "semi-commercial", "holiday-let-portfolio"],
    faqs: [
      {
        question: "What LTV is achievable on a Gunwharf Quays outlet retail unit freehold?",
        answer:
          "Up to 70% LTV on a let outlet retail unit inside the Land Securities scheme. Strong-covenant national-multiple outlet retail tenants on long FRI leases price best at 60 to 65% LTV at around 6.5 to 7.0% pa with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> or <strong>Santander</strong>. Secondary-covenant outlet stock with mixed lease lengths typically caps at 65 to 70%. The binding constraint is almost always ICR and the strength of the institutional scheme service-charge regime, not headline LTV.",
      },
      {
        question: "Can we get a commercial mortgage on a Spinnaker Tower-adjacent restaurant repositioning?",
        answer:
          'Yes, on trading-business mortgage with <strong>Cynergy Bank</strong>, Allica Bank or HTB on operator EBITDA at 60 to 70% LTV and 7.0 to 8.5% pa. The Gunwharf Quays anchor unit reconfiguration scheme approved under planning reference 26/00198/FUL Gunwharf Road PO1 3TZ is exactly this profile, each new tenant unit becomes fundable once an operator with two years of accounts is in place. Tourist-led visitor flow through the Spinnaker Tower and Gunwharf Quays car-borne footfall sits behind the trading case on every restaurant deal in the cluster.',
      },
      {
        question: "What product fits a Portsea Class E plus HMO mixed-use block?",
        answer:
          'Semi-commercial mortgage on blended ICR via <a href="/services/semi-commercial-mortgage">semi-commercial route</a> with <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, Allica Bank or HTB. The Portsea Class E ground-floor and HMO upper-floor mansard scheme approved under planning reference 26/00251/FUL PO1 3SE is the canonical archetype, typical 70 to 75% LTV at 7.0 to 8.5% pa on blended ICR at 140 to 160% across the Class E retail income and the seven-bed sui generis HMO above. Hampshire Trust Bank is locally headquartered and brings strong appetite for Portsea HMO conversion and semi-commercial deals.',
      },
      {
        question: "Which lenders run dedicated Gunwharf or central Portsmouth desks?",
        answer:
          "<strong>Lloyds</strong> Commercial Banking, <strong>NatWest</strong> Commercial, <strong>Barclays</strong> Business Banking and <strong>Santander</strong> Corporate all maintain South Coast regional teams active on central Portsmouth and Gunwharf deals, with HSBC UK Business Banking running its Portsmouth base from the Gunwharf scheme. <strong>Cynergy Bank</strong>, Allica Bank and HTB carry dedicated hospitality programmes that take Gunwharf marina F&B and apart-hotel deals routinely. We use those local desks for PO1 Gunwharf and Portsea deals where local knowledge of the Land Securities scheme, the marina tourist economy and the Portsea HMO conversion grain carries weight in underwriting. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "city-centre-commercial-road": {
    slug: "city-centre-commercial-road",
    name: "City Centre and Commercial Road",
    metaTitle: "Commercial Mortgages Portsmouth City Centre and Commercial Road | Retail Spine Broker, PO1",
    metaDescription:
      "Commercial mortgages for Portsmouth City Centre and Commercial Road, PO1 retail spine, Cascades Centre, Guildhall Square office and Class E investment. Listed-building Commercial Road frontage, central retail and mixed-use. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Portsmouth City Centre and Commercial Road",
      lede:
        "Portsmouth City Centre and Commercial Road run through the heart of PO1, threading from the Cascades Shopping Centre at the northern end of the Commercial Road pedestrian retail spine south past the heritage-listed Commercial Road frontage to Guildhall Square, the Civic Offices and the central professional office cluster. The fabric is post-war and Victorian retail terrace along Commercial Road, the covered Cascades Centre at the northern anchor, mid-rise Grade B office floors around Guildhall Square and Stanhope Road, and a dense run of Class E ground-floor with office or residential above through the central retail spine. The post-2020 Class E flexibility has accelerated repositioning across upper floors, with managed flexible workspace, gym, leisure and residential prior-approval routes feeding into the freehold market. We arrange commercial mortgages for PO1 retail spine freehold investment along Commercial Road, Cascades anchor unit and tenant freehold acquisition, Guildhall Square Grade B office investment, central F&B trading-business refinance, and the small mixed-use blocks that thread the retail spine. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Portsmouth City Centre and Commercial Road commercial property market",
      body: [
        "Portsmouth City Centre and Commercial Road is the deepest central retail catchment on Portsea Island and the primary high-street retail spine for the wider Portsmouth city-region of roughly 210,000 residents. The Cascades Shopping Centre at the northern anchor combines covered retail accommodation with the central F&B and leisure tenant mix, while the pedestrianised Commercial Road frontage south of Cascades runs through a heritage-listed Victorian and post-war retail terrace down to Guildhall Square. Around the spine, the Civic Offices, the Guildhall and the Stanhope Road professional office cluster carry the central legal, accountancy and consultancy SME base, and the post-2020 Class E flexibility has accelerated upper-floor repositioning across the central spine into managed flexible workspace, gym, leisure and Class E plus residential prior-approval routes.",
        "Transactions are dominated by long-hold private investors and family offices on the Commercial Road parade, owner-occupier independents buying their central retail unit, and a steady flow of central restaurant, bar and cafe refinancings through the Guildhall Square and Cascades-adjacent visitor spine. The deep-volume zone for our PO1 Commercial Road commercial mortgage book sits in the £400K to £2.5M bracket, in-line retail freehold, upper-floor mixed-use, small mixed-use blocks and Class E professional offices. Pricing currently 6.5 to 8.5% pa for clean central retail investment on Commercial Road, with Cascades-anchor strong-covenant stock at 6.5 to 7.5% and secondary Commercial Road parade at 7.5 to 8.5%. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 matured into a higher base-rate environment.",
        "HM Land Registry residential transactions inside the PO1 central catchment cluster around the converted upper floors above Commercial Road and the leasehold flat market that sits behind the Class E plus residential prior-approval pipeline, with recent files including the Isambard Brunel Road PO1 2RX flat at £105,000 that signals the central PO1 leasehold flat trade and the Nobbs Lane PO1 2EY semi-freehold at £383,000. They are not a direct commercial signal but they confirm that the Commercial Road catchment continues to absorb residential supply against the backdrop of the wider Portsmouth city economy, which underwrites the ground-floor retail, restaurant and upper-floor short-let revenue that most of our central PO1 commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Portsmouth City Centre and Commercial Road (PO1)",
      body:
        'Two headline Portsmouth City Council public-access files anchor the current Commercial Road commercial mortgage pipeline. The Commercial Road retail unit refresh scheme at 116 to 118 Commercial Road (Ref <strong>26/00475/FUL</strong>) covers Class E retail unit entrance door replacement and shopfront refresh on the central retail spine at PO1 1EP, asset-management capex that the freeholder refinances against on a Class E retail investment facility, with the companion listed-building consent file extending the heritage frontage works in parallel. The Cascades Centre reconfiguration scheme (Ref <strong>25/02278/FUL</strong>) at the Cascades Shopping Centre on Commercial Road PO1 4SQ covers anchor unit subdivision and new F&B accommodation in the central Portsmouth retail scheme, the canonical central retail repositioning that the institutional owner refinances against on a Grade A retail investment facility while individual unit operators refinance trading-business mortgages against the new tenant mix. Stamp duty applies at the commercial rates on each freehold acquisition, trading-business refinance is unaffected.',
      refs: [
        {
          ref: "26/00475/FUL",
          address: "116-118 Commercial Road, Portsmouth PO1 1EP",
          postcode: "PO1 1EP",
          proposal: "Class E retail unit entrance door replacement and shopfront refresh on the Commercial Road central retail spine, with companion listed-building consent in parallel.",
        },
        {
          ref: "25/02278/FUL",
          address: "Cascades Shopping Centre, Commercial Road, Portsmouth PO1 4SQ",
          postcode: "PO1 4SQ",
          proposal: "Cascades Centre reconfiguration, anchor unit subdivision and new F&B accommodation in the central Portsmouth retail scheme.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Portsmouth City Centre and Commercial Road",
      items: [
        { label: "Commercial Road retail freehold", detail: "Heritage-frontage Class E retail freehold along the Commercial Road pedestrian spine, including listed-building and conservation-area stock.", typicalSize: "£500K to £2.5M facility" },
        { label: "Cascades Centre anchor and tenant freehold", detail: "Cascades Shopping Centre anchor unit and tenant freehold and trading-business purchase inside the central scheme.", typicalSize: "£500K to £3M" },
        { label: "Guildhall Square Grade B office", detail: "Mid-rise Grade B office floors serving central legal, accountancy and consultancy firms around Guildhall Square and Stanhope Road.", typicalSize: "£500K to £2.5M" },
        { label: "Central F&B trading-business", detail: "Commercial Road, Guildhall Square and Cascades-adjacent restaurant, bar and cafe trading-business refinance and freehold purchase.", typicalSize: "£400K to £1.8M" },
        { label: "Class E plus residential prior-approval mixed-use", detail: "Upper-floor Class E to residential prior-approval blocks above Commercial Road and central side streets.", typicalSize: "£400K to £1.5M" },
        { label: "Owner-occupier professional services", detail: "Solicitor, accountancy and consultancy practices buying Guildhall Square floors of 1,500 to 4,000 sq ft.", typicalSize: "£400K to £1.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Portsmouth City Centre and Commercial Road",
      body: 'Central retail and mixed-use investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier professional services moving into Guildhall Square offices via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Central restaurant, bar and cafe refinance via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Class E plus upper-floor residential prior-approval blocks via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Vacant or repositioning Commercial Road stock and Class E leisure repositioning routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Commercial Road retail, Cascades and Guildhall Square office",
      body:
        "Deep across the PO1 central core, with a tighter heritage-comfortable shortlist on the listed Commercial Road frontage. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime Commercial Road and Cascades parade stock and owner-occupier Guildhall Square professional firms at 60 to 65% LTV and 6.5 to 7.5% pa, with HSBC UK Business Banking running its central Portsmouth base across the Gunwharf and Commercial Road catchment. Allica Bank runs an active South Coast book and routinely tops the shortlist on independent Commercial Road retail freehold and central mixed-use deals where speed and relationship underwriting matter. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> are active on heritage-listed Commercial Road frontage, Class E professional offices and upper-floor repositioning, with Cynergy Bank prominent on central F&B and hospitality refinance against operator EBITDA. <strong>LendInvest</strong> covers value-add and bridge-to-let on Class E to residential prior-approval conversions and heritage Commercial Road stock. HTB, Cambridge & Counties, Paragon, Together and YBS Commercial take selected PO1 freehold investment and mixed-use deals in the £400K to £2.5M bracket. Hampshire Trust Bank is headquartered in Hampshire and brings strong local knowledge to Commercial Road owner-occupier, Guildhall Square office and central mixed-use freehold deals. Refinancing on a stabilised secondary Commercial Road retail asset typically prices 7.5 to 8.5% pa at 65 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "office", "mixed-use", "leisure-hospitality", "semi-commercial", "pub-restaurant"],
    faqs: [
      {
        question: "What LTV is achievable on a Commercial Road retail freehold?",
        answer:
          "Up to 70% LTV on let prime Commercial Road retail. A Commercial Road or Cascades parade freehold with a strong-covenant retail or restaurant tenant prices best at 60 to 65% LTV at around 6.5 to 7.0% pa with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> or <strong>Santander</strong>. Secondary Commercial Road upper-floor stock with mixed covenants typically caps at 65 to 70%. The binding constraint is almost always ICR, not headline LTV, and the heritage-listed Commercial Road frontage at 116 to 118 Commercial Road and similar sites narrows the lender pool to heritage-comfortable desks.",
      },
      {
        question: "Can we get a commercial mortgage on a Cascades anchor unit reconfiguration?",
        answer:
          'Yes, on commercial investment mortgage via the <a href="/services/commercial-investment-mortgage">investment route</a> for the freeholder, and on trading-business mortgage for individual unit operators. The Cascades Centre reconfiguration scheme approved under planning reference 25/02278/FUL Commercial Road PO1 4SQ is exactly this profile, the anchor subdivision and new F&B accommodation refinances against on a Grade A retail investment facility at 60 to 70% LTV, while individual new F&B unit operators fund through trading-business mortgage with <strong>Cynergy Bank</strong>, Allica Bank or HTB.',
      },
      {
        question: "What product fits a professional firm buying a Guildhall Square office floor?",
        answer:
          "Owner-occupier commercial mortgage with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> or Allica Bank. Typical 70 to 75% LTV at 6.5 to 7.5% pa on partnership or limited-company accounts, EBITDA cover at 1.3 to 1.5x. This is the canonical central PO1 professional-services route, and Hampshire Trust Bank is locally headquartered with strong appetite for Portsmouth owner-occupier professional firm deals.",
      },
      {
        question: "Which lenders are comfortable with listed-building Commercial Road frontage?",
        answer:
          "<strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, <strong>Cynergy Bank</strong> and Together carry the strongest heritage-comfortable appetite across Commercial Road listed-building and conservation-area frontage stock. Cambridge & Counties and HTB take selected Grade II listed-building investment and mixed-use deals where the maintenance plan and operator covenant fit policy. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest let assets where the listed status is established and the covenant pool is strong. We use those heritage-comfortable desks for every Commercial Road deal where listed-building consent or conservation-area constraints carry weight in underwriting. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
      },
    ],
  },

  "southsea-inner": {
    slug: "southsea-inner",
    name: "Southsea Inner and Albert Road",
    metaTitle: "Commercial Mortgages Southsea Inner and Albert Road | Boutique Retail and F&B Broker, PO5",
    metaDescription:
      "Commercial mortgages for Southsea Inner and Albert Road, PO5 independent F&B parade, Palmerston Road and Osborne Road boutique retail, serviced offices and Class E mixed-use. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Southsea Inner and Albert Road",
      lede:
        "Southsea Inner and Albert Road sit in PO5 immediately south of Portsmouth city centre, threading from the Palmerston Road boutique retail parade and the Osborne Road serviced-office and hotel cluster south through the dense Albert Road independent F&B spine to the Elm Grove and Marmion Road parades. The fabric is Victorian and Edwardian retail terrace, a tight independent restaurant, bar and cafe parade along Albert Road, a serviced-office and small Grade B office cluster around Osborne Road and Palmerston Road, and a deep run of Class E ground-floor with flat above semi-commercial stock through the central PO5 grid. We arrange commercial mortgages for PO5 boutique retail freehold along Palmerston Road and Marmion Road, Albert Road independent F&B trading-business refinance and freehold purchase, Osborne Road serviced-office investment, and the small Class E mixed-use blocks that thread the inner Southsea grid. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Southsea Inner and Albert Road commercial property market",
      body: [
        "Albert Road is the densest independent restaurant, bar and cafe parade in Portsmouth and one of the most distinctive single F&B spines on the central Solent. The independent operator base trades against a residential catchment of densely populated Victorian and Edwardian terraced PO5 streets, the University of Portsmouth student footfall, and a strong young-professional demographic spilling out of the wider Southsea catchment. Around Albert Road, the Palmerston Road and Marmion Road boutique retail parades carry an independent fashion, lifestyle and homeware tenant mix, the Osborne Road serviced-office and hotel cluster funds against a long-hold private investor and operator base, and the Class E ground-floor and flat-above stock across the PO5 grid carries one of the deepest semi-commercial submarkets in Portsmouth.",
        "Transactions are dominated by independent operators buying their Albert Road restaurant freehold, long-hold private investors on the Palmerston Road and Marmion Road parade, and a steady flow of serviced-office and small-hotel refinancings around Osborne Road. The deep-volume zone for our PO5 Southsea Inner commercial mortgage book sits in the £400K to £1.8M bracket, independent F&B freehold, Class E retail with flat above semi-commercial, small serviced-office and small mixed-use blocks. Pricing currently 6.5 to 8.5% pa for clean PO5 boutique retail investment on Palmerston Road, with strong-covenant flag-operated stock at 6.5 to 7.5% and independent Albert Road F&B freehold at 7.5 to 8.5%. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from the post-pandemic hospitality recovery cycle matured.",
        "HM Land Registry residential transactions inside the PO5 Southsea Inner footprint cluster around the Albert Road and Elm Grove terraced grid and the leasehold flat market that sits behind the Class E plus residential semi-commercial pipeline, with recent files including the Fordingbridge Road PO4 9JW Southsea terrace at £367,000 that signals the wider Southsea terraced market that underpins the Class E plus flat above semi-commercial rental stack. They are not a direct commercial signal but they confirm that PO5 Southsea Inner continues to absorb residential demand, which underwrites the ground-floor F&B, retail and upper-floor flat rental income that most of our Southsea Inner commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Southsea Inner and Albert Road (PO5)",
      body:
        'Two headline Portsmouth City Council public-access files anchor the current Southsea Inner and Albert Road commercial mortgage pipeline. The Albert Road independent F&B parade refurbishment scheme (Ref <strong>25/02545/FUL</strong>) at PO5 1QY covers frontage works and change of use of upper floors to managed flexible workspace, the canonical Albert Road repositioning that a freeholder funds through development finance during the works phase and refinances against on a semi-commercial mortgage on blended ICR once the ground-floor F&B tenant mix is stabilised and the upper-floor flexible workspace is let. The Southsea Class E sub-division scheme (Ref <strong>26/00342/FUL</strong>) at PO5 2RJ covers sub-division of a Class E building into two commercial units retaining office accommodation alongside addition of second-floor residential, the canonical PO5 mixed-use repositioning that lenders fund on blended ICR across the two Class E units and the new residential floor above. Stamp duty applies at the commercial rates on each freehold acquisition, trading-business refinance is unaffected.',
      refs: [
        {
          ref: "25/02545/FUL",
          address: "Albert Road, Southsea PO5 1QY",
          postcode: "PO5 1QY",
          proposal: "Albert Road independent F&B parade refurbishment, frontage works and change of use of upper floors to managed flexible workspace.",
        },
        {
          ref: "26/00342/FUL",
          address: "Southsea, Portsmouth PO5 2RJ",
          postcode: "PO5 2RJ",
          proposal: "Sub-division of Class E building into two commercial units retaining office accommodation alongside addition of second-floor residential.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Southsea Inner and Albert Road",
      items: [
        { label: "Albert Road independent F&B freehold", detail: "Independent restaurant, bar and cafe operator freehold along the dense Albert Road parade.", typicalSize: "£400K to £1.5M facility" },
        { label: "Palmerston Road and Marmion Road boutique retail", detail: "Independent boutique retail freehold along the PO5 high-street parade.", typicalSize: "£400K to £1.2M" },
        { label: "Osborne Road serviced office", detail: "Serviced-office and small Grade B office floors serving central PO5 professional firms and SMEs.", typicalSize: "£400K to £1.5M" },
        { label: "Class E plus flat semi-commercial", detail: "Ground-floor Class E retail or food with one or two flats above, classic PO5 semi-commercial archetype across Elm Grove and the inner Southsea grid.", typicalSize: "£300K to £1.2M" },
        { label: "Boutique hotel and small hotel freehold", detail: "Osborne Road small heritage hotel and guesthouse operator freehold against Southsea visitor catchment.", typicalSize: "£600K to £2M" },
        { label: "Flexible workspace mixed-use", detail: "Upper-floor managed flexible workspace above Albert Road and Marmion Road F&B parade.", typicalSize: "£400K to £1.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Southsea Inner and Albert Road",
      body: 'Albert Road independent F&B and boutique hotel trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA, accommodation revenue and barrelage where licensed. Class E plus flat semi-commercial freehold via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Boutique retail and Osborne Road office investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier professional firms moving into Osborne Road office floors via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Vacant or repositioning Albert Road F&B stock and Class E to flexible workspace conversions route through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing PO5 facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Albert Road F&B, Palmerston Road retail and PO5 semi-commercial",
      body:
        "Independent F&B and PO5 semi-commercial is the deepest single combined sector in Southsea Inner. <strong>Cynergy Bank</strong> sits at the top of our shortlist on Albert Road independent restaurant, bar and cafe freehold and Osborne Road small boutique hotel, prime independent stock at 60 to 70% LTV and 7.0 to 8.5% pa on EBITDA cover at 1.5 to 1.8x. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and Allica Bank dominate the Class E plus flat above PO5 semi-commercial bracket and the Albert Road upper-floor flexible workspace conversion at 65 to 75% LTV and 7.0 to 8.5% pa on blended ICR. <strong>LendInvest</strong> covers refurbishment and bridge-to-let where the Albert Road parade or Class E building is being repositioned, including the canonical 25/02545/FUL frontage and flexible workspace archetype. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest Palmerston Road and Marmion Road boutique retail investment freeholds and owner-occupier professional firms at 60 to 65% LTV and 6.5 to 7.5% pa. Allica Bank is active across South Coast F&B and independent retail on small Albert Road, Palmerston Road and Osborne Road freehold. HTB, Cambridge & Counties, Paragon, Together and YBS Commercial take selected PO5 semi-commercial, HMO portfolio and F&B deals where the operator track record and covenant fit each lender policy. Hampshire Trust Bank is headquartered in Hampshire and brings strong local knowledge to Southsea Inner Class E plus flat semi-commercial, Albert Road independent freehold and Osborne Road owner-occupier deals. Refinancing on a stabilised Albert Road F&B or PO5 semi-commercial asset typically prices 7.0 to 8.5% pa at 65 to 75% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["leisure-hospitality", "pub-restaurant", "semi-commercial", "retail", "office", "mixed-use"],
    faqs: [
      {
        question: "What LTV is achievable on an Albert Road independent restaurant freehold?",
        answer:
          "Up to 70% LTV on a trading Albert Road restaurant freehold with operator EBITDA cover at 1.5 to 1.8x. An Albert Road operator with two or more years of accounts and a stable trading record prices best at 60 to 65% LTV at around 7.0 to 7.5% pa with <strong>Cynergy Bank</strong>, with newer or repositioning operators at 65 to 70% LTV at 7.5 to 8.5% pa. The binding constraint is operator EBITDA, not headline LTV, and the strength of the Albert Road independent F&B parade footfall feeds into the underwriting on every operator deal in the cluster.",
      },
      {
        question: "What product fits a PO5 Class E plus flat above semi-commercial block?",
        answer:
          'Semi-commercial mortgage on blended ICR via <a href="/services/semi-commercial-mortgage">semi-commercial route</a> with <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, Allica Bank or HTB. The Southsea Class E sub-division scheme approved under planning reference 26/00342/FUL PO5 2RJ is the canonical archetype, typical 70 to 75% LTV at 7.0 to 8.5% pa on blended ICR at 140 to 160% across the Class E commercial income and the flat or residential floor above. Hampshire Trust Bank is locally headquartered and brings strong appetite for PO5 semi-commercial freehold deals.',
      },
      {
        question: "Can we get a commercial mortgage on Osborne Road serviced offices?",
        answer:
          'Yes, on commercial investment mortgage via the <a href="/services/commercial-investment-mortgage">investment route</a> for the freeholder, with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong>, <strong>Shawbrook</strong> or <strong>InterBay Commercial</strong> typical at 60 to 70% LTV and 6.5 to 7.5% pa on ICR. Owner-occupier professional firms buying an Osborne Road floor route via the owner-occupier product at 70 to 75% LTV on EBITDA cover at 1.3 to 1.5x.',
      },
      {
        question: "Which lenders are most active on Albert Road F&B refinance?",
        answer:
          "<strong>Cynergy Bank</strong>, Allica Bank and HTB carry the strongest appetite across Albert Road independent F&B trading-business refinance. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and Together cover the Class E plus flat above semi-commercial bracket. <strong>LendInvest</strong> covers refurbishment and bridge-to-let on Albert Road parade repositioning. We use those specialist desks for every PO5 Albert Road operator deal where the EBITDA underwriting model carries the deal. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
      },
    ],
  },

  "southsea-seafront": {
    slug: "southsea-seafront",
    name: "Southsea Seafront and Common",
    metaTitle: "Commercial Mortgages Southsea Seafront and Common | Hotel, Leisure and Holiday-Let Broker, PO4 PO5",
    metaDescription:
      "Commercial mortgages for Southsea Seafront and Common, PO4 and PO5 seafront hotel and guesthouse, Osborne Road hotel cluster, holiday-let portfolio, restaurant and Clocktower-area leisure investment. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Southsea Seafront and Common",
      lede:
        "Southsea Seafront and Common run along the southern edge of Portsea Island across PO4 and PO5, threading from the Clarence Pier and Clocktower at the western seafront edge along the Esplanade and South Parade past Southsea Common and the South Parade Pier east to the Eastney boundary. The fabric is seafront hotel and guesthouse accommodation along South Parade and the Esplanade, a deep cluster of independent and flag-operated hotels around Osborne Road and the central Southsea seafront block, a substantial Class C1 hotel and short-let holiday-let portfolio across the PO4 and PO5 seafront grid, and the central leisure-led trading-business stock around The Clocktower, South Parade Pier and the seafront restaurant and bar parade. We arrange commercial mortgages for PO4 and PO5 seafront hotel and guesthouse trading-business refinance and freehold acquisition, Osborne Road hotel and apart-hotel investment, Southsea Common-fringe restaurant and bar freehold purchase, and the holiday-let portfolios that anchor the Southsea seafront short-let market. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Southsea Seafront and Common commercial property market",
      body: [
        "Southsea Seafront and Common is the deepest single hotel and short-let leisure submarket in Portsmouth and one of the most distinctive seafront hospitality clusters on the central Solent. The Osborne Road heritage hotel terrace combines independent and flag-operated hotel and apart-hotel accommodation against a Southsea Common and South Parade Pier visitor catchment that draws from the wider Portsmouth city economy, the cross-Solent and Wightlink ferry footfall, the Naval Base civilian catchment, and a substantial seasonal South Coast leisure visitor base. Around the hotel cluster, the South Parade and Esplanade restaurant and bar parade trades against operator EBITDA, the Class C1 hotel stock layers in alongside short-let serviced-apartment and holiday-let portfolio accommodation, and the central Clocktower zone carries a leisure-led mixed-use repositioning pipeline.",
        "Transactions are dominated by independent and small-flag hotel operators on the Osborne Road and South Parade hotel terrace, holiday-let portfolio operators consolidating across the PO4 and PO5 short-let grid, and a steady flow of seafront restaurant and bar refinancings against the seasonal leisure cycle. The deep-volume zone for our PO4 and PO5 Southsea Seafront commercial mortgage book sits in the £600K to £3M bracket, hotel and guesthouse freehold, apart-hotel acquisition, small Class C1 hotel investment and holiday-let portfolio refinance. Pricing currently 6.5 to 9.0% pa for clean Southsea seafront hospitality investment, with strong-covenant flag-operated apart-hotel stock at 6.5 to 7.5% and independent hotel freehold at 7.5 to 8.5%. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from the post-pandemic hospitality recovery cycle matured.",
        "HM Land Registry residential transactions inside the PO4 Southsea Seafront catchment cluster around the converted hotel and short-let stack along the Esplanade and the terraced PO4 grid that sits behind the holiday-let portfolio market, with recent files including the Fordingbridge Road PO4 9JW Southsea terrace at £367,000 that signals the wider Southsea terraced market that underpins the holiday-let portfolio supply pipeline. They are not a direct commercial signal but they confirm that the Southsea Seafront catchment continues to absorb residential supply, which underwrites the hotel accommodation, holiday-let and seafront F&B trading-business income that most of our Southsea Seafront and Common commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Southsea Seafront and Common (PO4 / PO5)",
      body:
        'Two headline Portsmouth City Council public-access files anchor the current Southsea Seafront and Common commercial mortgage pipeline. The Clocktower leisure and mixed-use scheme (Ref <strong>26/00299/FUL</strong>) at PO5 3PA covers a seafront leisure and visitor accommodation development on the central Southsea seafront, the canonical Southsea seafront leisure repositioning that the developer funds through development finance and refinances against on a trading-business or commercial investment mortgage once the leisure and visitor accommodation is trading. The Osborne Road heritage hotel change-of-use scheme (Ref <strong>25/02412/COU</strong>) at PO5 3LR covers retention of independent hotel use with new ground-floor F&B and conference accommodation, the canonical Osborne Road hotel terrace repositioning that lenders fund on operator EBITDA at 60 to 70% LTV once the new F&B and conference revenue streams are established. Stamp duty applies at the commercial rates on each freehold acquisition, trading-business refinance is unaffected.',
      refs: [
        {
          ref: "26/00299/FUL",
          address: "The Clocktower, Clocktower Drive, Southsea PO5 3PA",
          postcode: "PO5 3PA",
          proposal: "The Clocktower Southsea leisure and mixed-use sui generis scheme, seafront leisure and visitor accommodation development on the central Southsea seafront.",
        },
        {
          ref: "25/02412/COU",
          address: "Osborne Road, Southsea PO5 3LR",
          postcode: "PO5 3LR",
          proposal: "Change of use of Osborne Road heritage hotel building, retention of independent hotel use with new ground-floor F&B and conference accommodation.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Southsea Seafront and Common",
      items: [
        { label: "Osborne Road heritage hotel freehold", detail: "Independent and small-flag heritage hotel and guesthouse operator freehold along the Osborne Road hotel terrace.", typicalSize: "£800K to £3M facility" },
        { label: "South Parade and Esplanade hotel investment", detail: "Class C1 seafront hotel and apart-hotel investment freehold along South Parade and the Esplanade against Southsea Common visitor catchment.", typicalSize: "£1M to £4M" },
        { label: "Apart-hotel and serviced apartment", detail: "Southsea seafront managed apart-hotel and serviced-apartment operator freehold and trading-business refinance.", typicalSize: "£800K to £3M" },
        { label: "Holiday-let portfolio refinance", detail: "PO4 and PO5 seafront short-let and holiday-let portfolio consolidated into single facility against Airbnb and short-let revenue.", typicalSize: "£1M to £5M" },
        { label: "Seafront restaurant and bar freehold", detail: "South Parade, Clarence Pier and Southsea Common-fringe restaurant, bar and cafe operator freehold against seasonal leisure trading cycle.", typicalSize: "£500K to £2M" },
        { label: "Clocktower leisure mixed-use", detail: "Central Clocktower-zone leisure-led mixed-use and visitor accommodation repositioning.", typicalSize: "£1M to £5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Southsea Seafront and Common",
      body: 'Seafront hotel, apart-hotel and restaurant trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA, accommodation revenue and barrelage where licensed. Hotel and apart-hotel investment freehold via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Holiday-let portfolios via <a href="/services/portfolio-refinance" class="text-secondary font-medium hover:underline">portfolio refinance</a> on aggregated short-let revenue. Owner-occupier hotel and guesthouse operators buying their building via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Vacant or repositioning seafront hotel and Clocktower-zone leisure routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>, exit onto stabilised trading-business mortgage post trading-record. Refinancing maturing hospitality facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Southsea Seafront hotel, apart-hotel and holiday-let portfolio",
      body:
        "Seafront hospitality and holiday-let portfolio is the deepest single sector in Southsea Seafront and Common. <strong>Cynergy Bank</strong> sits at the top of our shortlist on Osborne Road and South Parade hotel and apart-hotel trading-business freehold, prime independent stock at 60 to 70% LTV and 7.0 to 8.0% pa on EBITDA cover at 1.5 to 1.8x. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and Allica Bank dominate the Class C1 hotel investment freehold and seafront mixed-use bracket at 65 to 70% LTV and 7.0 to 8.5% pa. <strong>LendInvest</strong> covers refurbishment and bridge-to-let where the Osborne Road hotel terrace or Clocktower-zone leisure asset is being repositioned, including the canonical 25/02412/COU Osborne Road and 26/00299/FUL Clocktower archetypes. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest flag-operated seafront hotel and apart-hotel investment freeholds at 60 to 65% LTV and 6.5 to 7.5% pa. Allica Bank is active across South Coast hospitality on small Osborne Road hotel, seafront guesthouse and apart-hotel owner-occupier freehold. HTB and Together cover selected seafront hotel and apart-hotel investment and mixed-use leisure deals. Cambridge & Counties, Paragon and YBS Commercial take selected Southsea seafront hotel investment and holiday-let portfolio deals where the operator track record and short-let revenue mix fit each lender policy, with Paragon prominent on Southsea holiday-let portfolio refinance. Hampshire Trust Bank is headquartered in Hampshire and brings strong local knowledge to Osborne Road heritage hotel, Southsea Common-fringe restaurant and PO4 holiday-let portfolio deals. Refinancing on a stabilised Osborne Road hotel or South Parade apart-hotel typically prices 7.0 to 8.5% pa at 60 to 70% LTV across the operator-EBITDA-led product. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["leisure-hospitality", "pub-restaurant", "holiday-let-portfolio", "mixed-use", "retail", "office"],
    faqs: [
      {
        question: "What LTV is achievable on an Osborne Road hotel freehold?",
        answer:
          "Up to 70% LTV on a trading Osborne Road hotel freehold with operator EBITDA cover at 1.5 to 1.8x. An Osborne Road heritage hotel with two or more years of accounts prices best at 60 to 65% LTV at around 7.0 to 7.5% pa with <strong>Cynergy Bank</strong>, with newer or repositioning hotel operators at 65 to 70% LTV at 7.5 to 8.5% pa. The Osborne Road heritage hotel change-of-use scheme approved under planning reference 25/02412/COU PO5 3LR is exactly this profile, the new ground-floor F&B and conference accommodation feeds into the underwriting case once the new revenue streams are established.",
      },
      {
        question: "Can we refinance a PO4 holiday-let portfolio?",
        answer:
          'Yes, on portfolio refinance via the <a href="/services/portfolio-refinance">portfolio route</a> with <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, Paragon or Together typical at 65 to 75% LTV and 7.0 to 8.5% pa on aggregated short-let revenue. The PO4 Southsea seafront short-let market has been a strong holiday-let portfolio consolidation zone over the 2024 to 2026 window, and Paragon is particularly active on Southsea holiday-let portfolio refinance.',
      },
      {
        question: "What product fits The Clocktower seafront leisure repositioning?",
        answer:
          'Bridge-to-let or development finance during the works phase via <a href="/services/commercial-bridge-to-let">bridge-to-let</a>, then trading-business mortgage on operator EBITDA at 60 to 70% LTV with <strong>Cynergy Bank</strong>, Allica Bank or HTB once trading accounts are established. The Clocktower Southsea leisure and mixed-use sui generis scheme approved under planning reference 26/00299/FUL Clocktower Drive PO5 3PA is exactly this profile, the seafront leisure and visitor accommodation development is fundable once each leisure or accommodation unit has a 12 to 24 month operator EBITDA track record.',
      },
      {
        question: "Which lenders run dedicated Southsea seafront hospitality desks?",
        answer:
          "<strong>Cynergy Bank</strong>, Allica Bank and HTB all maintain dedicated hospitality programmes that take Osborne Road hotel and South Parade apart-hotel deals routinely. Paragon covers the Southsea holiday-let portfolio refinance bracket actively. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> Commercial all maintain South Coast regional teams active on flag-operated seafront hotel deals. We use those specialist desks for PO4 and PO5 seafront deals where the operator-EBITDA underwriting model carries the deal. Hampshire Trust Bank is locally headquartered with strong appetite for Southsea seafront heritage hotel, holiday-let portfolio and seafront restaurant freehold deals. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  eastney: {
    slug: "eastney",
    name: "Eastney",
    metaTitle: "Commercial Mortgages Eastney Portsmouth | Rising Mixed-Use and Residential Broker, PO4",
    metaDescription:
      "Commercial mortgages for Eastney Portsmouth, PO4 residential-heavy mixed-use rising along Eastney Road, neighbourhood retail and F&B, small-cap semi-commercial and holiday-let stock. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Eastney",
      lede:
        "Eastney sits at the south-eastern tip of Portsea Island in PO4, threading from the Eastney Road and Henderson Road residential grid east through the Eastney Lake and Royal Marines Eastney heritage area to the seafront edge at Fort Cumberland. The fabric is predominantly residential terraced and semi-detached PO4 stock, with a rising mixed-use neighbourhood retail and F&B frontage along Eastney Road serving the dense residential catchment, a small but growing holiday-let and short-let portfolio along the seafront fringe, and a quiet but resilient small-cap semi-commercial market across the local parade. We arrange commercial mortgages for PO4 Eastney mixed-use freehold along Eastney Road, neighbourhood retail and F&B trading-business refinance, small Class E plus flat semi-commercial blocks, and the rising holiday-let portfolio market along the Eastney seafront edge. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Eastney commercial property market",
      body: [
        "Eastney is the most residential-heavy of the Portsea Island sub-markets and the quietest commercial mortgage submarket in central Portsmouth, but the mixed-use frontage along Eastney Road has been rising steadily through 2024 to 2026 as the wider PO4 residential market has absorbed neighbourhood retail and F&B demand from the dense surrounding terraced grid. The Eastney Road parade combines a small independent convenience retail and takeaway tenant mix, a handful of independent restaurant and cafe operators, and a small Class E plus flat above semi-commercial stack that funds on blended ICR. Around the parade, the Eastney seafront edge from Fort Cumberland to the Eastney Lake carries a small but growing holiday-let and short-let portfolio that links into the wider Southsea Seafront short-let economy.",
        "Transactions are dominated by long-hold private investors on Eastney Road parade semi-commercial, owner-occupier independents buying their neighbourhood retail unit, and a steady flow of small holiday-let portfolio acquisitions along the seafront fringe. The deep-volume zone for our PO4 Eastney commercial mortgage book sits in the £300K to £1.2M bracket, neighbourhood retail freehold, Class E plus flat semi-commercial, small independent F&B and small holiday-let portfolios. Pricing currently 7.0 to 8.5% pa for clean PO4 neighbourhood semi-commercial investment along Eastney Road, with strong-covenant convenience retail at 6.5 to 7.5% and independent F&B and holiday-let portfolio at 7.5 to 8.5%. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 matured.",
        "HM Land Registry residential transactions inside the PO4 Eastney catchment cluster around the Eastney Road and Henderson Road terraced grid, with recent files including the Fordingbridge Road PO4 9JW Southsea terrace at £367,000 that signals the wider PO4 terraced market that underpins both the Class E plus flat semi-commercial rental stack and the rising holiday-let portfolio supply. They are not a direct commercial signal but they confirm that PO4 Eastney continues to absorb residential demand, which underwrites the ground-floor neighbourhood retail and F&B, semi-commercial and holiday-let income that most of our Eastney commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Eastney (PO4)",
      body:
        'One headline Portsmouth City Council public-access file anchors the current Eastney commercial mortgage pipeline. The Eastney mixed-use scheme at Eastney Road (Ref <strong>25/01345/FUL</strong>) at PO4 9PJ covers a new ground-floor neighbourhood retail and F&B accommodation with managed residential above on the rising PO4 mixed-use frontage, the canonical Eastney mixed-use repositioning that the developer funds through development finance during the works phase and refinances against on a semi-commercial mortgage on blended ICR once the ground-floor retail and F&B tenant mix is stabilised and the managed residential above is let. The Manners Road sui generis HMO scheme at PO4 0BB (Ref <strong>26/00496/FUL</strong>) sits in the adjacent Southsea HMO conversion belt and reflects the wider PO4 HMO conversion volume that links into the Eastney portfolio market. Stamp duty applies at the commercial rates on each freehold acquisition, trading-business refinance is unaffected.',
      refs: [
        {
          ref: "25/01345/FUL",
          address: "Eastney Road, Eastney, Portsmouth PO4 9PJ",
          postcode: "PO4 9PJ",
          proposal: "Eastney mixed-use scheme, new ground-floor neighbourhood retail and F&B with managed residential above on the rising PO4 mixed-use frontage.",
        },
        {
          ref: "26/00496/FUL",
          address: "38 Manners Road, Southsea PO4 0BB",
          postcode: "PO4 0BB",
          proposal: "Change of use from licensed C4 HMO to 8-bed sui generis HMO, illustrative of the wider PO4 HMO conversion belt that links into the Eastney portfolio market.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Eastney",
      items: [
        { label: "Eastney Road mixed-use", detail: "Ground-floor neighbourhood retail or F&B with managed residential above on the rising Eastney Road frontage.", typicalSize: "£400K to £1.5M facility" },
        { label: "Neighbourhood retail freehold", detail: "Independent convenience retail and small parade retail freehold serving the dense PO4 residential catchment.", typicalSize: "£250K to £800K" },
        { label: "Class E plus flat semi-commercial", detail: "Ground-floor Class E retail or food with one flat above on the Eastney parade, classic PO4 semi-commercial archetype.", typicalSize: "£300K to £900K" },
        { label: "Independent F&B trading-business", detail: "Eastney Road independent restaurant, cafe and takeaway operator freehold against neighbourhood catchment.", typicalSize: "£300K to £1M" },
        { label: "Holiday-let portfolio", detail: "Eastney seafront-fringe and Fort Cumberland-adjacent short-let and holiday-let portfolio against the wider Southsea Seafront short-let economy.", typicalSize: "£500K to £2M" },
        { label: "HMO portfolio refinance", detail: "PO4 HMO portfolio consolidation linking into the wider Southsea and PO4 HMO conversion belt.", typicalSize: "£500K to £2.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Eastney",
      body: 'Eastney Road mixed-use and Class E plus flat semi-commercial freehold via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Neighbourhood retail and small mixed-use investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Independent F&B trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Holiday-let portfolio and HMO portfolio refinance via <a href="/services/portfolio-refinance" class="text-secondary font-medium hover:underline">portfolio refinance</a> on aggregated short-let or HMO revenue. Owner-occupier independent retailers buying their Eastney Road unit via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Vacant or repositioning Eastney Road parade stock routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing PO4 facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Eastney Road mixed-use, neighbourhood retail and PO4 portfolio",
      body:
        "Rising mixed-use and semi-commercial is the deepest single sector in Eastney. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and Allica Bank dominate the Eastney Road Class E plus flat above semi-commercial and rising mixed-use bracket at 65 to 75% LTV and 7.0 to 8.5% pa on blended ICR. <strong>Cynergy Bank</strong> sits at the top of our shortlist on Eastney Road independent restaurant, cafe and takeaway operator freehold, prime independent stock at 60 to 70% LTV and 7.0 to 8.5% pa on EBITDA cover at 1.5 to 1.8x. <strong>LendInvest</strong> covers refurbishment and bridge-to-let where the Eastney Road parade is being repositioned, including the canonical 25/01345/FUL Eastney mixed-use archetype with managed residential above. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest Eastney Road and neighbourhood retail investment freeholds at 60 to 70% LTV and 6.5 to 7.5% pa. Allica Bank is active across South Coast neighbourhood retail and small mixed-use on Eastney Road owner-occupier and investment freehold. HTB, Cambridge & Counties, Paragon, Together and YBS Commercial take selected PO4 semi-commercial, HMO portfolio and holiday-let portfolio deals, with Paragon prominent on PO4 HMO and holiday-let portfolio refinance and Together active on small mixed-use repositioning. Hampshire Trust Bank is headquartered in Hampshire and brings strong local knowledge to Eastney Road mixed-use, PO4 holiday-let portfolio and neighbourhood retail freehold deals. Refinancing on a stabilised Eastney Road mixed-use block or Class E plus flat semi-commercial asset typically prices 7.0 to 8.5% pa at 65 to 75% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["semi-commercial", "mixed-use", "retail", "pub-restaurant", "hmo-block", "holiday-let-portfolio"],
    faqs: [
      {
        question: "What LTV is achievable on an Eastney Road mixed-use freehold?",
        answer:
          "Up to 75% LTV on an Eastney Road Class E plus flat above mixed-use freehold with blended ICR at 140 to 160% across the ground-floor Class E commercial rent and the residential flat rental above. A stabilised Eastney Road mixed-use block prices best at 65 to 70% LTV at around 7.0 to 7.5% pa with <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> or Allica Bank, with newer or repositioning stock at 70 to 75% LTV at 7.5 to 8.5% pa. The Eastney mixed-use scheme approved under planning reference 25/01345/FUL Eastney Road PO4 9PJ is exactly this profile.",
      },
      {
        question: "Can we refinance a PO4 holiday-let portfolio along the Eastney seafront edge?",
        answer:
          'Yes, on portfolio refinance via the <a href="/services/portfolio-refinance">portfolio route</a> with <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, Paragon or Together typical at 65 to 75% LTV and 7.0 to 8.5% pa on aggregated short-let revenue. The Eastney seafront edge links into the wider Southsea Seafront short-let economy, and Paragon is particularly active on PO4 holiday-let portfolio refinance across the wider Southsea grid.',
      },
      {
        question: "What product fits an Eastney Road independent F&B operator buying their freehold?",
        answer:
          'Trading-business mortgage on operator EBITDA at 60 to 70% LTV with <strong>Cynergy Bank</strong>, Allica Bank or HTB, or owner-occupier mortgage via <a href="/services/owner-occupier-commercial-mortgage">owner-occupier route</a> if the operator buys through a partnership or limited-company vehicle. Typical 7.0 to 8.5% pa on the trading-business product, 6.5 to 7.5% pa on the owner-occupier route subject to EBITDA cover at 1.3 to 1.5x. Hampshire Trust Bank is locally headquartered and brings strong appetite for Eastney Road independent F&B and neighbourhood retail freehold deals.',
      },
      {
        question: "Which lenders are most active on PO4 Eastney HMO portfolio refinance?",
        answer:
          "Paragon, <strong>InterBay Commercial</strong>, Together and Cambridge & Counties cover the PO4 HMO portfolio refinance bracket actively, with Paragon particularly prominent across the wider PO4 HMO conversion belt. Smaller HMO portfolio refinance routes through <strong>Shawbrook</strong> and Allica Bank where the portfolio includes Class E plus HMO mixed stock. We use those specialist desks for every PO4 Eastney portfolio refinance where the aggregated HMO revenue model carries the deal. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
      },
    ],
  },

  "north-end": {
    slug: "north-end",
    name: "North End",
    metaTitle: "Commercial Mortgages North End Portsmouth | HMO Conversion Specialist Broker, PO2",
    metaDescription:
      "Commercial mortgages for North End Portsmouth, PO2 dense terraced HMO conversion belt along London Road and Kirby Road, sui generis 7-bed and 9-bed HMO investment, semi-commercial parade, owner-occupier independent retail. Paragon, InterBay, Together, Allica panel. 90+ lender panel.",
    hero: {
      h1: "Commercial Mortgages North End",
      lede:
        "North End sits in the PO2 postcode, an island-city terraced belt that runs from the London Road parade north of the Kingston Cemetery through Kirby Road, Powerscourt Road and Stubbington Avenue. The fabric is the densest small-HMO conversion zone on the South Coast, late-Victorian and Edwardian terraced houses being reconfigured into 7-bed and 9-bed sui generis Houses in Multiple Occupation serving University of Portsmouth and young-professional demand in a city whose population density is the highest of any local authority outside London. We arrange commercial mortgages for North End HMO investment portfolios, semi-commercial shop-with-flat freeholds along London Road, owner-occupier independent retail and small-cap convenience and Class E ground-floor reconfigurations across the PO2 footprint. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The North End commercial property market",
      body: [
        "North End is the volume engine of Portsmouth HMO conversion activity. The PO2 belt around London Road, Kirby Road and the residential grid east of the A3 carries the largest C3 to C4 and C4 to sui generis HMO conversion flow in this network, driven by the c. 28,000-student University of Portsmouth catchment and a stable young-professional naval and BAE Systems shipyard demographic. Average HMO bed rents PO2 sit in the £550 to £700 per bed range in 2026 on professionally managed 7-bed sui generis stock, with 9-bed schemes (where licensing and parking allow) clearing well above that on the best London Road and Powerscourt Road properties. London Road itself carries a parade of small-cap independent retail, takeaways, barbers, convenience and a thinning tail of national-multiple presence, with semi-commercial shop-with-flat dominating the freehold purchase and refinance pipeline. Portsmouth City Council Article 4 directions cover parts of the PO1 to PO5 ring, so new C3 to C4 conversions in central wards require full planning consent rather than permitted development, which we factor into LTV and timing on every North End conversion deal.",
        "Most North End commercial mortgage deals run in the £250K to £900K facility bracket, sui generis HMO investment, semi-commercial London Road parade purchases, and owner-occupier independents buying their unit. Pricing on a stabilised, licensed, sui generis 7-bed HMO with two years of trading history currently runs 7.0 to 8.5% pa at 70 to 75% LTV through Paragon, InterBay Commercial and Together, with the lower end available to portfolio landlords presenting an aggregated, well-documented book. Semi-commercial shop-with-flat blended ICR pricing runs 7.5 to 9.0% pa at 75% LTV via InterBay Commercial, Together and HTB. Owner-occupier independent retail on London Road prices 6.5 to 8.0% pa at 70 to 75% LTV through Allica Bank and Hampshire Trust Bank.",
        "HM Land Registry residential transactions across PO2 cluster firmly in the terraced bracket, with recent files including a £321K Drayton Road PO2 7HW comparable that captures the late-Victorian terraced conversion-stock pricing point feeding the HMO investment market, and the median PO2 terrace pricing at c. £260K supports the cost-base on which the 7-bed sui generis HMO yield model works. They are not direct commercial signals, but they confirm the underlying acquisition cost and refinance valuation backstop that all North End HMO and semi-commercial lending sits against. Refinancing of maturing 2020 and 2021 HMO facilities is the single largest 2026 product flow across the PO2 belt.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in North End (PO2)",
      body:
        'Two live Portsmouth City Council public access portal files anchor the current North End commercial mortgage pipeline. The Kirby Road sui generis HMO change of use (Ref <strong>26/00486/FUL</strong>) covers a C3 dwelling to 7-bed sui generis HMO conversion at 135 Kirby Road PO2 0PX in the North End HMO conversion corridor, the canonical PO2 conversion archetype that funds through Paragon, InterBay Commercial or Together at 70 to 75% LTV post-licensing on a sui generis HMO investment mortgage. The London Road 9-bed HMO change of use (Ref <strong>25/02145/COU</strong>) covers a large terraced dwelling on London Road PO2 0LN converting to a sui generis 9-bed HMO in the PO2 student and young-professional belt, a higher-bed scheme that lifts gross rent meaningfully and prices through the same specialist panel with HTB and Together both selectively running 9-bed plus stock. Stamp duty land tax applies at the commercial rates on every HMO and semi-commercial freehold purchase, with HMO acquisitions priced as residential or commercial depending on the SDLT treatment of the specific property, your conveyancer will price it on the facts.',
      refs: [
        {
          ref: "26/00486/FUL",
          address: "135 Kirby Road, Portsmouth PO2 0PX",
          postcode: "PO2 0PX",
          proposal: "Change of use from C3 dwelling to 7-bed sui generis HMO in the North End HMO conversion corridor serving University of Portsmouth and young-professional naval and BAE Systems shipyard demand.",
        },
        {
          ref: "25/02145/COU",
          address: "London Road, North End, Portsmouth PO2 0LN",
          postcode: "PO2 0LN",
          proposal: "North End parade conversion of large terraced dwelling to sui generis 9-bed HMO in the PO2 student and young-professional HMO belt along London Road.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in North End",
      items: [
        { label: "Sui generis 7-bed HMO investment", detail: "C3 or C4 terraced house converted to licensed sui generis 7-bed HMO in the PO2 student and young-professional belt.", typicalSize: "£300K to £700K facility" },
        { label: "Sui generis 9-bed plus HMO", detail: "Larger terraced houses on London Road and Powerscourt Road taking 9-bed plus configurations with parking and licensing in place.", typicalSize: "£500K to £1.2M" },
        { label: "London Road semi-commercial parade", detail: "Class E ground-floor retail with C3 or C4 flat above on the London Road parade, classic shop-with-flat archetype.", typicalSize: "£250K to £700K" },
        { label: "Owner-occupier independent retail", detail: "Independent retailers, barbers, convenience and takeaways buying their London Road or Kingston Road unit.", typicalSize: "£200K to £600K" },
        { label: "Portfolio HMO refinance", detail: "Multi-property HMO investor consolidating 4 to 12 PO2 properties onto a single facility through portfolio refinance.", typicalSize: "£1.5M to £6M" },
        { label: "Class E ground reconfiguration", detail: "Class E retail reconfiguration with upper-floor C3 or sui generis HMO addition, mixed semi-commercial and HMO investment hybrid.", typicalSize: "£350K to £900K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in North End",
      body: 'Sui generis HMO investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR, with specialist HMO desks at Paragon and InterBay Commercial. Semi-commercial shop-with-flat via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Owner-occupier independents via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Pre-licensing acquisitions and HMO conversion projects route through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Multi-property HMO portfolio refinance through <a href="/services/portfolio-refinance" class="text-secondary font-medium hover:underline">portfolio refinance</a> is the highest-volume single product in 2026 across the PO2 belt.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for North End sui generis HMO and London Road semi-commercial",
      body:
        "Deep across the PO2 HMO and semi-commercial panel. Paragon runs the canonical portfolio HMO desk and routinely tops the shortlist on PO2 sui generis 7-bed and 9-bed stabilised investment at 70 to 75% LTV and 7.0 to 8.0% pa. <strong>InterBay Commercial</strong> and Together compete hard on single-property sui generis HMO and on semi-commercial London Road shop-with-flat at 75% LTV blended ICR. HTB covers larger 9-bed plus schemes and Class E ground plus HMO above hybrid deals where the structure does not fit the cleaner specialist HMO desks. Allica Bank handles owner-occupier independent retail on London Road and Kingston Road at 6.5 to 8.0% pa, with relationship underwriting on independents that beats the high street on speed. <strong>Shawbrook</strong> takes selected sui generis HMO and Class E hybrid deals where bridge-to-let through licensing is part of the deal structure. <strong>Cynergy Bank</strong> covers the small-cap F&B and takeaway trading-business along London Road. Hampshire Trust Bank is locally headquartered in Hampshire and runs an active Portsmouth HMO investment book, particularly on owner-occupier independents and small-portfolio investors. Allica, HTB, Paragon, Together, YBS Commercial and Cambridge & Counties all take selected PO2 HMO and semi-commercial deals in the £250K to £900K bracket. Refinancing on a stabilised licensed sui generis 7-bed HMO typically prices 7.0 to 8.0% pa at 70 to 75% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["hmo-block", "semi-commercial", "retail", "mixed-use", "pub-restaurant", "office"],
    faqs: [
      {
        question: "What LTV is achievable on a North End sui generis 7-bed HMO?",
        answer:
          "Up to 75% LTV on a licensed stabilised sui generis 7-bed HMO with at least 12 months of trading history. Paragon and InterBay Commercial both quote 70 to 75% at 7.0 to 8.0% pa, with portfolio landlords presenting an aggregated documented book sometimes pricing tighter. Pre-licensing acquisitions route through bridge-to-let first, then term out post-licensing. Article 4 directions cover parts of the central Portsmouth wards, so new C3 to C4 conversions need full planning consent rather than permitted development, which we factor into LTV and timing on every deal.",
      },
      {
        question: "Can we fund a 9-bed plus sui generis HMO like the London Road scheme (Ref 25/02145/COU)?",
        answer:
          "Yes, HTB and Together both selectively run 9-bed plus sui generis HMO stock at 70% LTV post-licensing and on stabilised trading. The PO2 25/02145/COU profile, a large London Road terraced dwelling converting to 9-bed sui generis, is exactly the kind of higher-bed scheme that lifts gross rent meaningfully and funds at 7.5 to 8.5% pa with the right operator track record. Stamp duty applies at the commercial or higher residential rates depending on SDLT treatment of the specific property.",
      },
      {
        question: "What lender for London Road semi-commercial shop-with-flat?",
        answer:
          "InterBay Commercial, Together and HTB all run active South Coast semi-commercial books and quote to 75% LTV on classic London Road shop-with-flat archetypes at blended ICR 145 to 160% stressed. Rate range 7.5 to 9.0% pa depending on covenant strength on the Class E ground tenant and AST quality on the flat. Hampshire Trust Bank takes selected stronger-covenant semi-commercial deals on the parade.",
      },
      {
        question: "How does North End portfolio HMO refinance work in 2026?",
        answer:
          "Paragon and Together both run portfolio HMO refinance desks taking aggregated 4 to 12 property PO2 HMO books onto a single facility at 70 to 75% LTV. Aggregated rental coverage and bed-value methodology drives the underwrite. Facility size typically £1.5M to £6M on PO2 HMO portfolios. This is the highest-volume 2026 product as 2020 and 2021 single-property HMO fixes mature into a higher base-rate environment and operators consolidate operationally.",
      },
    ],
  },

  "stamshaw-tipner": {
    slug: "stamshaw-tipner",
    name: "Stamshaw and Tipner Regeneration",
    metaTitle: "Commercial Mortgages Stamshaw Tipner Portsmouth | M275 Regeneration Broker, PO2",
    metaDescription:
      "Commercial mortgages for Stamshaw and Tipner West Regeneration, PO2 M275 gateway mixed-use regen zone, light industrial transitioning to mixed-use, ground-floor commercial within residential-led schemes. Shawbrook, Allica, HTB, Together panel. 90+ lender panel.",
    hero: {
      h1: "Commercial Mortgages Stamshaw and Tipner Regeneration",
      lede:
        "Stamshaw and Tipner sit on the northern edge of Portsea Island in the PO2 postcode, the M275 motorway gateway into the island city. Tipner West Regeneration is the live mixed-use regen zone, Phase 2 delivery now consented, with residential alongside ground-floor commercial and light industrial space replacing legacy yards and storage along Tipner Lane. Stamshaw to the east carries a tighter terraced grid with light industrial fringes around the railway corridor. We arrange commercial mortgages for ground-floor commercial space within the Tipner West regeneration scheme, owner-occupier light industrial purchases along Tipner Lane and Stamshaw Road, value-add bridge-to-let on transitioning legacy industrial sites and semi-commercial purchases threading through the Stamshaw residential grid. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Stamshaw and Tipner commercial property market",
      body: [
        "Stamshaw and Tipner make up the M275 gateway commercial corridor on the northern edge of Portsea Island. Tipner West Regeneration is the live story, a Portsmouth City Council and homes-led mixed-use scheme covering c. 21 hectares of brownfield land moving from light industrial and storage use to residential-led mixed-use with a meaningful ground-floor Class E and light industrial component. Phase 1 has delivered, Phase 2 is consented and on site through 2026 with further phases in the pipeline. The commercial mortgage opportunity here breaks into three distinct flows: ground-floor commercial units within the regen scheme available for purchase or refinance by owner-occupiers or investors once a tenant covenant is in place, transitioning legacy light industrial stock along Tipner Lane and Twyford Avenue that lenders can fund on a bridge-to-let to consented redevelopment exit, and the smaller-cap Stamshaw residential-grid semi-commercial and convenience parade purchases serving the local catchment.",
        "Most Stamshaw and Tipner commercial mortgage deals run in the £350K to £2M facility bracket. Owner-occupier light industrial on Tipner Lane currently prices 6.5 to 8.0% pa at 65 to 75% LTV through Allica Bank, HTB and YBS Commercial, with the recent Tipner West Phase 2 consent (Ref 26/00145/FUL) lifting valuation comparables on adjacent stock as the regeneration story plays through. Ground-floor commercial units within the regen scheme price as Class E investment at 6.5 to 8.5% pa at 65 to 75% LTV through Allica Bank, HTB, Shawbrook and Cambridge & Counties depending on tenant covenant. Bridge-to-let on transitioning sites runs 9.0% pa via Shawbrook and Together over 12 to 24 months with a clear consent-and-let exit. Semi-commercial along the Stamshaw residential edge sits at 7.5 to 9.0% pa at 75% LTV via Together and InterBay Commercial.",
        "HM Land Registry residential transactions across PO2 cluster around the terraced and post-war flatted stock, with the Tipner West regeneration delivery feeding new-build apartment supply into the corridor. The £321K Drayton Road PO2 7HW comparable and the wider PO2 terrace price point anchor the cost base for legacy stock purchases, while the new-build pricing emerging from Tipner West Phase 1 supports the ground-floor commercial Zone A assumptions feeding the investment underwrite. Refinancing of pre-regen acquisitions, where owners bought legacy industrial 24 to 36 months ago and now have a consented regeneration uplift in the bag, is a meaningful 2026 product flow.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Stamshaw and Tipner (PO2)",
      body:
        'The Portsmouth City Council public access portal carries the headline Tipner regeneration file that defines commercial mortgage availability across the corridor. The Tipner West Phase 2 mixed-use delivery (Ref <strong>26/00145/FUL</strong>) covers a residential alongside ground-floor commercial and light industrial scheme at Tipner West Regeneration on Tipner Lane PO2 8QR, M275 gateway into Portsea Island. The consent unlocks ground-floor Class E commercial space available for owner-occupier or investment purchase post-delivery, and the consented regeneration overlay materially lifts valuation on adjacent legacy industrial stock along Tipner Lane and Twyford Avenue. Lender treatment of Tipner West stock has moved meaningfully through 2025 and 2026 as the consent and delivery story has gained traction with Allica Bank, HTB, Shawbrook and Cambridge & Counties all running active South Coast regeneration books. We refinance and acquire on the consented scheme and on adjacent transitioning sites through the appropriate bridge-to-let or term investment route. Stamp duty land tax applies at the commercial rates on every freehold purchase, refinancing is unaffected.',
      refs: [
        {
          ref: "26/00145/FUL",
          address: "Tipner West Regeneration, Tipner Lane, Portsmouth PO2 8QR",
          postcode: "PO2 8QR",
          proposal: "Tipner Regeneration Phase 2 mixed-use delivery, residential alongside ground-floor commercial and light industrial accommodation on the M275 gateway into Portsea Island.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Stamshaw and Tipner",
      items: [
        { label: "Ground-floor regen Class E", detail: "New-build Class E commercial units within the Tipner West regeneration scheme on Tipner Lane, available for owner-occupier or investment purchase.", typicalSize: "£400K to £1.5M facility" },
        { label: "Tipner Lane light industrial", detail: "Owner-occupier light industrial purchases on Tipner Lane and Twyford Avenue, B2 workshop and B8 storage stock.", typicalSize: "£500K to £2M" },
        { label: "Transitioning regen bridge-to-let", detail: "Value-add acquisitions on legacy industrial sites with consented or pending regeneration redevelopment exit.", typicalSize: "£500K to £3M" },
        { label: "Stamshaw semi-commercial parade", detail: "Small convenience and Class E ground with C3 flat above on the Stamshaw residential grid.", typicalSize: "£250K to £600K" },
        { label: "Trade-counter on the M275 gateway", detail: "Trade-counter retail and small-cap industrial units serving construction and defence supply chains.", typicalSize: "£300K to £1M" },
        { label: "Refinance on consented uplift", detail: "Existing owners of legacy industrial sites refinancing on consented regeneration valuation uplift.", typicalSize: "£500K to £2.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Stamshaw and Tipner",
      body: 'Ground-floor regen Class E investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR once a tenant covenant is in place. Owner-occupier light industrial via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Transitioning regen sites with consented redevelopment exit route through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Semi-commercial Stamshaw parade via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Refinancing on consented uplift through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is meaningful 2026 flow.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Tipner West regeneration and PO2 light industrial",
      body:
        "Active across the M275 gateway. Allica Bank runs an engaged South Coast book and is a routine first call on Tipner Lane owner-occupier light industrial purchases and post-delivery ground-floor Class E investment at 6.5 to 8.0% pa at 70 to 75% LTV. HTB covers larger ticket light industrial and the regen ground-floor Class E investment piece at similar pricing with appetite for stronger covenant tenants. <strong>Shawbrook</strong> takes the bridge-to-let on transitioning legacy industrial sites with a consented redevelopment exit, typically 9.0% pa over 12 to 24 months. Cambridge & Counties selectively covers ground-floor regen Class E investment within the Tipner West scheme once tenants are placed. YBS Commercial covers owner-occupier industrial on Tipner Lane at the tighter end of pricing. Together runs the value-end semi-commercial along the Stamshaw residential grid and selected bridge-to-let on transitioning industrial stock. <strong>InterBay Commercial</strong> takes Stamshaw semi-commercial. Hampshire Trust Bank is locally headquartered in Hampshire and runs an active Portsmouth regeneration book, particularly on consented uplift refinance. Allica, HTB, Paragon, Together, YBS Commercial and Cambridge & Counties all take selected M275 corridor deals in the £350K to £2M bracket. Refinancing on a consented regeneration uplift typically prices 7.0 to 8.5% pa at 65 to 75% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["industrial-warehouse", "mixed-use", "retail", "office", "semi-commercial", "trade-counter"],
    faqs: [
      {
        question: "What LTV is achievable on a Tipner West ground-floor Class E unit?",
        answer:
          "Up to 75% LTV on a let new-build Class E unit within the Tipner West regeneration scheme once a tenant covenant is in place. Allica Bank, HTB and Cambridge & Counties all quote at 65 to 75% LTV at 6.5 to 8.0% pa depending on covenant strength and lease length. Pre-letting purchases route through bridge-to-let first then term out post-stabilisation. The consented regen overlay (Ref 26/00145/FUL) materially helps valuation and timeline.",
      },
      {
        question: "Can we fund a value-add purchase on a legacy Tipner Lane industrial site?",
        answer:
          "Yes, through bridge-to-let. Shawbrook and Together both take 12 to 24 month bridge facilities on transitioning legacy industrial along Tipner Lane and Twyford Avenue, with a consented redevelopment or repositioning exit. Typical 60 to 65% LTV at 9.0% pa rolled, with the term-out route to investment mortgage post-stabilisation at 65 to 70% LTV. The consented Tipner West Phase 2 scheme nearby (Ref 26/00145/FUL) is the canonical exit pattern.",
      },
      {
        question: "Owner-occupier light industrial on Tipner Lane, what rate?",
        answer:
          "Currently 6.5 to 8.0% pa at 65 to 75% LTV. Allica Bank, HTB and YBS Commercial all compete actively on PO2 M275 corridor light industrial owner-occupier deals. EBITDA cover 1.3 to 1.5x. Stamp duty applies at the commercial rates on the freehold purchase. Hampshire Trust Bank is locally headquartered in Hampshire and takes selected stronger-covenant industrial deals on the corridor.",
      },
      {
        question: "How does refinancing on consented regeneration uplift work?",
        answer:
          "Existing owners of legacy industrial sites along Tipner Lane and Twyford Avenue whose sites now sit inside the consented regeneration scheme, or who have a consented redevelopment in their own name, can refinance on the uplifted consented valuation. Typical 65 to 75% LTV at 7.0 to 8.5% pa through Allica Bank, HTB, Shawbrook and Cambridge & Counties. The consented regen overlay materially helps the underwriting comp, and several owners along the M275 gateway are now refinancing 24 to 36 month-old acquisitions on the strength of the Phase 2 consent.",
      },
    ],
  },

  hilsea: {
    slug: "hilsea",
    name: "Hilsea",
    metaTitle: "Commercial Mortgages Hilsea Portsmouth | Retail Park and Light Industrial Broker, PO2 PO3",
    metaDescription:
      "Commercial mortgages for Hilsea Portsmouth, PO2 and PO3 out-of-city retail park and light industrial gateway including Hilsea Retail Park on London Road and Voyager Park on Portfield Road. Drive-through F&B, Class E retail, B2 light industrial and B8 storage. Allica, HTB, Shawbrook, YBS Commercial panel.",
    hero: {
      h1: "Commercial Mortgages Hilsea",
      lede:
        "Hilsea sits at the northern A3 gateway into Portsea Island, straddling PO2 and PO3 postcodes around Hilsea Lines and the London Road retail park spine. The fabric is out-of-city Class E retail park stock anchored by Hilsea Retail Park, a corridor of light industrial and Class B8 storage along Portfield Road and Voyager Park, and a tail of small-cap secondary retail along the London Road parade. The recent expansion consent on Hilsea Retail Park and the industrial expansion at Voyager Park lift the active scheme count meaningfully across the corridor. We arrange commercial mortgages for retail park investment freeholds and ground leases at Hilsea Retail Park, drive-through F&B trading-business freeholds, owner-occupier and investor light industrial at Voyager Park and along Walton Road, and small-cap parade investment along London Road on the Hilsea side of the North End boundary. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Hilsea commercial property market",
      body: [
        "Hilsea is the A3 northern gateway commercial corridor, the first commercial cluster a driver hits coming south off the M27 into Portsea Island. Hilsea Retail Park on London Road anchors the out-of-city retail park stock, a strong roster of national and regional Class E and drive-through tenants supporting attractive ground rent and Zone A retail park economics. Voyager Park on Portfield Road carries the live light industrial expansion piece, the recent Voyager Park scheme (Ref 25/01612/FUL) for new Class B2 light industrial and Class B8 storage accommodation supporting Solent corridor distribution lifts available freehold stock and refinance comparables across the corridor. Walton Road industrial estate sits just north of the Hilsea corridor with the recent Walton Road refurbishment (Ref 25/01478/FUL) for new Class B2 workshop and trade-counter units serving the Portsmouth defence supply chain. The combined cluster gives Hilsea one of the most active out-of-city commercial fabrics on Portsea Island.",
        "Most Hilsea commercial mortgage deals run in the £400K to £3M facility bracket. Hilsea Retail Park investment stock currently prices at 6.5 to 8.0% pa at 60 to 70% LTV through Allica Bank, HTB, Shawbrook and Cambridge & Counties on let stock with strong-covenant tenant mixes. Drive-through F&B trading-business at the retail park edge prices 7.0 to 8.5% pa at 65 to 70% LTV through Cynergy Bank and HTB on operator EBITDA. Light industrial owner-occupier at Voyager Park and Walton Road prices 6.5 to 7.5% pa at 70 to 75% LTV through Allica Bank, HTB and YBS Commercial. Class B8 storage investment sits at 6.5 to 8.0% pa at 65 to 75% LTV through the same panel. Secondary London Road parade investment on the Hilsea side prices wider at 7.5 to 9.0% pa at 65 to 75% LTV via Together and InterBay Commercial.",
        "HM Land Registry residential transactions in the PO2 and PO3 fringe support the commuter and family-housing demographic that anchors the retail park catchment. The PO3 terraced and semi-detached stock and the modest flatted supply around the corridor combine to give Hilsea Retail Park a stable resident and drive-by catchment supporting Class E retail and drive-through F&B trading. They are not direct commercial signals, but they back the underwriting assumptions on tenant covenant strength and footfall projections at the Hilsea Retail Park edge. Refinancing of maturing 5-year fixes from 2020 and 2021 is the dominant 2026 product flow across the corridor.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Hilsea (PO2 / PO3)",
      body:
        'Two live Portsmouth City Council public access portal files anchor the current Hilsea commercial mortgage pipeline. The Hilsea Retail Park expansion (Ref <strong>25/00945/FUL</strong>) covers new Class E retail and F&B units alongside drive-through accommodation on the A3 gateway at Hilsea Retail Park, London Road PO2 9SD, the canonical out-of-city retail park scheme that funds either as new-build freehold investment post-letting at 65 to 70% LTV through Allica Bank, HTB or Shawbrook, or as drive-through F&B trading-business freehold at 65 to 70% LTV through Cynergy Bank and HTB on operator EBITDA. The Voyager Park industrial expansion (Ref <strong>25/01612/FUL</strong>) covers new Class B2 light industrial and Class B8 storage accommodation supporting Solent corridor distribution at Voyager Park, Portfield Road PO3 5FN, an owner-occupier light industrial and Class B8 storage scheme that funds at 70 to 75% LTV through Allica Bank, HTB and YBS Commercial. Stamp duty applies at the commercial rates on each freehold purchase, refinancing is unaffected.',
      refs: [
        {
          ref: "25/00945/FUL",
          address: "Hilsea Retail Park, London Road, Hilsea PO2 9SD",
          postcode: "PO2 9SD",
          proposal: "Hilsea Retail Park expansion, new Class E retail and F&B units alongside drive-through accommodation on the A3 northern gateway into Portsea Island.",
        },
        {
          ref: "25/01612/FUL",
          address: "Voyager Park, Portfield Road, Portsmouth PO3 5FN",
          postcode: "PO3 5FN",
          proposal: "Voyager Park industrial expansion, new Class B2 light industrial and Class B8 storage accommodation supporting Solent corridor distribution.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Hilsea",
      items: [
        { label: "Hilsea Retail Park Class E", detail: "Out-of-city Class E retail park freehold and ground lease investment on London Road with strong-covenant national and regional tenants.", typicalSize: "£800K to £3M facility" },
        { label: "Drive-through F&B", detail: "Drive-through fast-food and coffee operator freehold and ground lease at the retail park edge.", typicalSize: "£600K to £1.8M" },
        { label: "Voyager Park light industrial", detail: "Owner-occupier and investor B2 light industrial and B8 storage on Portfield Road and across the Voyager Park estate.", typicalSize: "£400K to £1.5M" },
        { label: "Walton Road trade-counter", detail: "Walton Road industrial estate Class B2 workshop and trade-counter units serving the Portsmouth defence supply chain.", typicalSize: "£350K to £1.2M" },
        { label: "London Road parade secondary retail", detail: "Smaller-cap secondary retail and convenience freehold along the Hilsea section of London Road.", typicalSize: "£250K to £700K" },
        { label: "Refinance on retail park asset management", detail: "Hilsea Retail Park or Voyager Park investor refinance on completed capex and re-letting.", typicalSize: "£500K to £2.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Hilsea",
      body: 'Retail park investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Drive-through F&B trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on EBITDA cover. Owner-occupier light industrial via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. Vacant or value-add Class E or B8 stock routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Hilsea Retail Park, Voyager Park and corridor light industrial",
      body:
        "Strong across the Hilsea corridor. Allica Bank runs an active South Coast book and routinely tops the shortlist on Voyager Park owner-occupier light industrial and Hilsea Retail Park let investment stock at 6.5 to 7.5% pa at 70 to 75% LTV. HTB covers larger ticket retail park investment, drive-through F&B trading-business and B8 storage investment at 65 to 75% LTV. <strong>Shawbrook</strong> takes Hilsea Retail Park investment and value-add bridge-to-let on Class E reconfiguration deals, particularly where capex programmes feed into the refinance pipeline. YBS Commercial covers owner-occupier light industrial at Voyager Park and Walton Road at the tighter end of pricing for strong-covenant SME borrowers. Cambridge & Counties selectively covers retail park investment with stable tenant mixes. <strong>Cynergy Bank</strong> runs the drive-through F&B trading-business piece on operator EBITDA. Paragon takes selected portfolio investment combining London Road parade and Hilsea Retail Park exposure. Together covers the wider secondary London Road parade and value-end semi-commercial stock. Hampshire Trust Bank is locally headquartered in Hampshire and runs an active Portsmouth book covering retail park investment and light industrial owner-occupier across the corridor. Allica, HTB, Paragon, Together, YBS Commercial and Cambridge & Counties all take selected Hilsea deals in the £400K to £3M bracket. Refinancing on a stabilised Hilsea Retail Park asset typically prices 6.5 to 8.0% pa at 65 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "industrial-warehouse", "leisure-hospitality", "mixed-use", "mot-garage-petrol", "office"],
    faqs: [
      {
        question: "What LTV is achievable on a Hilsea Retail Park let freehold?",
        answer:
          "Up to 70% LTV on let retail park stock with strong-covenant Class E tenants. Allica Bank, HTB and Shawbrook all quote 65 to 70% LTV at 6.5 to 8.0% pa depending on covenant strength and lease length. The recent expansion consent (Ref 25/00945/FUL) adds new-build Class E and drive-through F&B units that lenders treat favourably once tenanted. Cambridge & Counties selectively covers retail park stock with stable tenant mixes.",
      },
      {
        question: "Can we fund a drive-through F&B operator freehold at Hilsea Retail Park?",
        answer:
          "Yes. Cynergy Bank and HTB both run active drive-through F&B trading-business books and quote at 65 to 70% LTV at 7.0 to 8.5% pa on operator EBITDA. The Hilsea Retail Park expansion (Ref 25/00945/FUL) added drive-through accommodation on the A3 gateway, the canonical out-of-city drive-through profile. Stamp duty applies at the commercial rates on the freehold purchase.",
      },
      {
        question: "What rate on Voyager Park or Walton Road light industrial owner-occupier?",
        answer:
          "Currently 6.5 to 7.5% pa at 70 to 75% LTV. Allica Bank, HTB and YBS Commercial all compete actively on the Voyager Park (Ref 25/01612/FUL) and Walton Road (Ref 25/01478/FUL) profile. EBITDA cover 1.3 to 1.5x. Hampshire Trust Bank is locally headquartered in Hampshire and runs an active Portsmouth light industrial book on the Hilsea corridor.",
      },
      {
        question: "How does B8 storage investment fund at Voyager Park?",
        answer:
          "Class B8 storage investment at Voyager Park funds at 65 to 75% LTV at 6.5 to 8.0% pa through Allica Bank, HTB, Shawbrook and Cambridge & Counties on let stock with industrial covenant tenants. The Solent corridor distribution narrative supports the underwriting. Vacant or pre-letting acquisitions route through bridge-to-let first then term out at investment mortgage post-stabilisation.",
      },
    ],
  },

  cosham: {
    slug: "cosham",
    name: "Cosham and Lakeside North Harbour",
    metaTitle: "Commercial Mortgages Cosham Lakeside Portsmouth | Office Park and Healthcare Broker, PO6",
    metaDescription:
      "Commercial mortgages for Cosham and Lakeside North Harbour Portsmouth, PO6 1.5M sqft IBM-legacy Grade B office park on Western Road, Queen Alexandra Hospital healthcare cluster, Cosham High Street district retail. Allica, HTB, Shawbrook, Cambridge & Counties panel. 90+ lender panel.",
    hero: {
      h1: "Commercial Mortgages Cosham and Lakeside North Harbour",
      lede:
        "Cosham is the PO6 mainland gateway, the first commercial district north of Portsea Island once a driver clears the M275 viaduct and the A27. The fabric is the largest office park on the South Coast, Lakeside North Harbour on Western Road, the IBM-legacy 1.5 million sq ft Grade B office cluster now multi-tenant after IBM's footprint contraction, anchored alongside Queen Alexandra Hospital, the dominant Portsmouth Hospitals University NHS Trust acute site, and the Cosham High Street district retail centre. We arrange commercial mortgages for Lakeside North Harbour Grade B office investment and owner-occupier floors, Queen Alexandra Hospital ancillary healthcare and dental and clinic freeholds, Cosham High Street retail parade investment and owner-occupier independents, and the wider PO6 trading-business and care-home corridor stock. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Cosham and Lakeside North Harbour commercial property market",
      body: [
        "Cosham is the PO6 mainland gateway into Portsmouth, the first commercial district north of the M275 viaduct off Portsea Island. The commercial fabric is unusually concentrated for an outer Portsmouth ward and runs across three distinct sub-markets. Lakeside North Harbour on Western Road carries the largest single office park on the South Coast at around 1.5 million sq ft of Grade B office space, the legacy IBM campus that, since IBM's footprint contraction, has gradually re-leased as multi-tenant Grade B office stock with active reconfiguration and refurbishment programmes running through 2025 and 2026. Queen Alexandra Hospital on Southwick Hill Road anchors the Portsmouth Hospitals University NHS Trust acute footprint and pulls a substantial ancillary cluster of dental practices, private clinics, GP surgeries and care homes through the surrounding PO6 wards. Cosham High Street and the district retail centre carry a deep independent and small-multiple retail and F&B parade alongside the standard suburban professional-services and convenience fabric.",
        "Most Cosham and Lakeside commercial mortgage deals run in the £500K to £5M facility bracket, with the largest at Lakeside North Harbour reaching £8M+ on whole-floor or whole-building Grade B office investment freeholds. Lakeside Grade B office investment currently prices at 7.0 to 8.5% pa at 60 to 70% LTV through Allica Bank, HTB, Shawbrook and Cambridge & Counties on let stock, with stronger-covenant single-tenant floors at the tighter end. Owner-occupier professional firms buying their own Lakeside or Cosham office floor price 6.5 to 8.0% pa at 70 to 75% LTV through Allica Bank, HTB and YBS Commercial. Queen Alexandra Hospital ancillary healthcare freeholds, dental and private clinic, price 6.5 to 8.0% pa at 70 to 80% LTV through Hampshire Trust Bank and Allica Bank's health desk on NHS contract value plus EBITDA. Cosham High Street retail and F&B sits at 7.0 to 8.5% pa at 65 to 75% LTV.",
        "HM Land Registry residential transactions across PO6 confirm a stable family-housing demographic with a strong NHS, MoD and professional-services resident base. The PO6 semi-detached and detached stock supports the affluent professional catchment that drives Lakeside professional-services demand and Queen Alexandra ancillary healthcare consumer demand. They are not direct commercial signals, but they underwrite the tenant covenant assumptions on Cosham High Street retail and the Lakeside owner-occupier office buyer profile. Refinancing of maturing 5-year fixes from 2020 and 2021 is the dominant 2026 product flow across the corridor, with Lakeside Grade B office investment particularly active as 2020 acquisitions reach end-of-fix into a more cautious office investment market.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Cosham and Lakeside (PO6)",
      body:
        'Three live Portsmouth City Council public access portal files anchor the current Cosham and Lakeside commercial mortgage pipeline. The Lakeside North Harbour office park reconfiguration (Ref <strong>26/00098/FUL</strong>) covers refurbishment of IBM-legacy Grade B office floors for multi-tenant occupation at Lakeside North Harbour, Western Road PO6 3EN, the canonical Lakeside refurbishment scheme that supports new owner-occupier and let-investment underwriting as floors come back to market. The Cosham High Street retail parade refurbishment (Ref <strong>25/02012/FUL</strong>) covers frontage works and new F&B accommodation in the Cosham district centre at Cosham High Street PO6 3AB, the live district-centre asset management activity that funds either as owner-occupier independent retail at 6.5 to 8.0% pa at 70 to 75% LTV or as parade investment at 7.0 to 8.5% pa at 65 to 75% LTV. The Queen Alexandra Hospital ancillary healthcare scheme (Ref <strong>25/01875/FUL</strong>) covers a new dental practice and private clinic accommodation in the Cosham healthcare cluster at Queen Alexandra Hospital, Southwick Hill Road PO6 3LY, the live ancillary healthcare freehold pipeline that we place through Hampshire Trust Bank and Allica Bank health desk on NHS contract value plus EBITDA. Stamp duty applies at the commercial rates on each freehold purchase, refinancing is unaffected.',
      refs: [
        {
          ref: "26/00098/FUL",
          address: "Lakeside North Harbour, Western Road, Portsmouth PO6 3EN",
          postcode: "PO6 3EN",
          proposal: "Lakeside North Harbour office park reconfiguration, refurbishment of IBM-legacy Grade B office floors for multi-tenant occupation within the 1.5 million sq ft Lakeside campus.",
        },
        {
          ref: "25/02012/FUL",
          address: "Cosham High Street, Portsmouth PO6 3AB",
          postcode: "PO6 3AB",
          proposal: "Cosham High Street retail parade refurbishment, frontage works and new F&B accommodation in the Cosham district centre.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Cosham and Lakeside",
      items: [
        { label: "Lakeside Grade B office investment", detail: "Multi-tenant Grade B office investment freehold and ground lease at Lakeside North Harbour on Western Road, post-IBM reconfiguration stock.", typicalSize: "£1M to £8M facility" },
        { label: "Lakeside owner-occupier office floor", detail: "Professional firms and SME headquarters buying their own Lakeside Grade B office floor of 3,000 to 10,000 sq ft.", typicalSize: "£600K to £3M" },
        { label: "Queen Alexandra ancillary healthcare", detail: "Dental practices, private clinics, GP and pharmacy freeholds inside the Queen Alexandra Hospital ancillary cluster.", typicalSize: "£500K to £2M" },
        { label: "Cosham High Street retail parade", detail: "Cosham district centre retail and F&B parade investment and owner-occupier freehold.", typicalSize: "£300K to £1.2M" },
        { label: "PO6 care home", detail: "Care home freehold inside the PO6 ward catchment serving the affluent NHS and MoD retiree base.", typicalSize: "£1M to £4M" },
        { label: "Refinance on Lakeside asset management capex", detail: "Lakeside North Harbour landlord refinance on completed refurbishment and re-letting.", typicalSize: "£1.5M to £6M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Cosham and Lakeside",
      body: 'Lakeside Grade B office investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier professional firms buying their Lakeside floor via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Queen Alexandra ancillary healthcare via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on NHS contract value plus EBITDA. Cosham High Street semi-commercial via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Vacant or repositioning Lakeside floors route through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Lakeside North Harbour, Queen Alexandra and Cosham High Street",
      body:
        "Deep across the Cosham corridor. Allica Bank runs an engaged South Coast book and routinely tops the shortlist on Lakeside owner-occupier office floors, Cosham High Street retail and Queen Alexandra ancillary healthcare freeholds at 6.5 to 8.0% pa at 70 to 75% LTV, with Allica's health desk taking dental and private clinic with NHS contract value plus EBITDA. HTB covers larger Lakeside Grade B office investment and the upper end of Cosham retail parade investment at 65 to 75% LTV. <strong>Shawbrook</strong> takes Lakeside Grade B office investment particularly where capex programmes feed into the underwrite and value-add bridge-to-let on Lakeside repositioning floors. Cambridge & Counties selectively covers Lakeside Grade B let investment at 65 to 70% LTV on stronger-covenant tenant mixes. YBS Commercial covers owner-occupier office at the tighter end of pricing for strong-covenant SME borrowers. Paragon takes portfolio investment combining Lakeside and Cosham retail exposure. Together covers value-end Cosham High Street semi-commercial and selected ancillary healthcare freeholds. Hampshire Trust Bank is locally headquartered in Hampshire and runs one of the most active Portsmouth books, particularly on Queen Alexandra ancillary healthcare and Lakeside owner-occupier office floors. Allica, HTB, Paragon, Together, YBS Commercial and Cambridge & Counties all take selected Cosham and Lakeside deals in the £500K to £5M bracket. Refinancing on a stabilised Lakeside Grade B office investment typically prices 7.0 to 8.5% pa at 60 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "healthcare-care-home", "retail", "semi-commercial", "mixed-use", "leisure-hospitality"],
    faqs: [
      {
        question: "What LTV is achievable on a Lakeside North Harbour Grade B office investment?",
        answer:
          "Up to 70% LTV on let Lakeside Grade B office stock. Allica Bank, HTB, Shawbrook and Cambridge & Counties all quote 60 to 70% LTV at 7.0 to 8.5% pa depending on covenant strength, lease length and the post-refurbishment income profile. The Lakeside reconfiguration consent (Ref 26/00098/FUL) supports the underwriting on refurbished multi-tenant Grade B floors. Stamp duty applies at the commercial rates on the freehold purchase.",
      },
      {
        question: "Can we fund a Queen Alexandra Hospital ancillary dental or clinic freehold?",
        answer:
          "Yes. Hampshire Trust Bank is locally headquartered in Hampshire and runs one of the most active Portsmouth ancillary healthcare books, with Allica Bank's health desk also meaningful. Quote 70 to 80% LTV on the bricks plus NHS UDA contract value at 6.5 to 8.0% pa. The Queen Alexandra Hospital ancillary healthcare consent (Ref 25/01875/FUL) is the canonical PO6 healthcare ancillary profile.",
      },
      {
        question: "What rate on Cosham High Street retail parade investment?",
        answer:
          "Currently 7.0 to 8.5% pa at 65 to 75% LTV. Allica Bank, HTB and Shawbrook all compete actively on Cosham High Street parade stock, with the recent Cosham retail parade refurbishment (Ref 25/02012/FUL) lifting comparables across the district centre. Owner-occupier independents buying their own parade unit price tighter at 6.5 to 8.0% pa through Allica Bank and Hampshire Trust Bank.",
      },
      {
        question: "How do we fund a Lakeside owner-occupier office floor purchase?",
        answer:
          "Professional firms and SME headquarters buying a 3,000 to 10,000 sq ft Lakeside Grade B office floor route through owner-occupier commercial mortgage at 70 to 75% LTV at 6.5 to 8.0% pa through Allica Bank, HTB and YBS Commercial. EBITDA cover 1.3 to 1.5x. The Lakeside reconfiguration consent (Ref 26/00098/FUL) brings new floors to market as refurbishment completes, expanding available owner-occupier stock.",
      },
    ],
  },

  "drayton-farlington": {
    slug: "drayton-farlington",
    name: "Drayton and Farlington",
    metaTitle: "Commercial Mortgages Drayton Farlington Portsmouth | Care Home and Suburban District Broker, PO6",
    metaDescription:
      "Commercial mortgages for Drayton and Farlington Portsmouth, PO6 suburban district centres along the A2030 corridor, dense care-home cluster, Drayton Lane and Farlington high street. Care home freehold, suburban retail and dental. Hampshire Trust Bank, Allica, Cambridge & Counties, Shawbrook panel.",
    hero: {
      h1: "Commercial Mortgages Drayton and Farlington",
      lede:
        "Drayton and Farlington sit on the eastern PO6 mainland edge of Portsmouth, two suburban district centres threaded along the A2030 corridor running east from Cosham toward the Havant Borough boundary. The fabric is dominated by the densest care-home cluster on this stretch of the South Coast, with a thick concentration of CQC Good and Outstanding-rated care home freeholds anchored by the affluent NHS and MoD retiree resident base, supported by a tighter retail and professional-services district centre along Drayton Lane and the parade running into Farlington. We arrange commercial mortgages for PO6 care home freehold purchase and refinance, ancillary dental and medical practice freeholds in the Queen Alexandra Hospital orbit, suburban district-centre retail parade investment and owner-occupier independents along Drayton Lane, and small-cap semi-commercial threading through the A2030 spine. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Drayton and Farlington commercial property market",
      body: [
        "Drayton and Farlington are two suburban district centres on the eastern PO6 mainland edge, threaded along the A2030 corridor that runs east from Cosham past Drayton Lane and on to the Havant Borough boundary at Farlington. The commercial fabric is unusually weighted toward care-home freehold investment, with the A2030 corridor carrying one of the densest care-home clusters on the central South Coast. CQC Good and Outstanding stock is well represented, drawing on the affluent NHS, MoD and professional-services retiree base that anchors the surrounding PO6 wards. Drayton Lane and the district parade carry a tighter suburban retail and professional-services centre alongside the standard suburban convenience and small-cap F&B fabric. Farlington adds a smaller district parade and a meaningful Queen Alexandra Hospital ancillary catchment for dental and medical practice freeholds.",
        "Most Drayton and Farlington commercial mortgage deals run in the £400K to £5M facility bracket. PO6 care home freehold investment currently prices at 7.5 to 9.0% pa at 55 to 65% LTV through Shawbrook, Hampshire Trust Bank, Cambridge & Counties and Allica Bank's health desk on CQC Good plus and stabilised EBITDA. Multi-site PO6 care home group consolidation routes through portfolio refinance at 60 to 70% LTV at 7.5 to 8.5% pa with aggregated EBITDA and bed-value methodology. Ancillary dental and medical practice freeholds in the A2030 corridor price 6.5 to 8.0% pa at 70 to 80% LTV through Hampshire Trust Bank and Allica Bank's health desk on NHS contract value plus EBITDA. Drayton Lane and Farlington district-centre retail and parade investment sits at 7.0 to 8.5% pa at 65 to 75% LTV through Allica Bank, HTB and Cambridge & Counties. Owner-occupier independents along Drayton Lane price 6.5 to 8.0% pa at 70 to 75% LTV.",
        "HM Land Registry residential transactions across PO6 east confirm the affluent professional and retiree resident base that drives the care-home occupancy and the ancillary healthcare demand. The Drayton and Farlington semi-detached and detached stock supports the strong tenant-covenant and demographic underwrite that PO6 care-home lenders rely on. They are not direct commercial signals, but they back the underwriting assumptions on private-pay care occupancy and the dental and medical practice consumer demand that the cluster relies on. Refinancing of maturing 5-year fixes from 2020 and 2021 is the dominant 2026 product flow across the corridor, with PO6 care home freehold refinance particularly busy as 2020 acquisitions reach end-of-fix and operators consolidate.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Drayton and Farlington (PO6)",
      body:
        'A live Portsmouth City Council public access portal file anchors the current Drayton and Farlington commercial mortgage pipeline. The Drayton care home cluster scheme (Ref <strong>25/01745/FUL</strong>) covers a new 64-bed care home accommodation alongside ancillary healthcare in the A2030 corridor at Drayton Lane, Drayton PO6 1HJ, the canonical PO6 care-home development profile that funds through Shawbrook, Hampshire Trust Bank, Cambridge & Counties and Allica Bank health desk at 55 to 65% LTV on the bricks plus EBITDA cover once trading is stabilised and CQC rating is confirmed. The surrounding Queen Alexandra Hospital ancillary healthcare consent at Southwick Hill Road PO6 3LY (Ref <strong>25/01875/FUL</strong>) is the corresponding ancillary dental and private clinic profile that sits inside the same A2030 catchment. Stamp duty applies at the commercial rates on each care home and healthcare freehold purchase, refinancing is unaffected.',
      refs: [
        {
          ref: "25/01745/FUL",
          address: "Drayton Lane, Drayton, Portsmouth PO6 1HJ",
          postcode: "PO6 1HJ",
          proposal: "Drayton care home cluster scheme, new 64-bed care home accommodation alongside ancillary healthcare in the A2030 corridor.",
        },
        {
          ref: "25/01875/FUL",
          address: "Queen Alexandra Hospital, Southwick Hill Road, Cosham PO6 3LY",
          postcode: "PO6 3LY",
          proposal: "Queen Alexandra Hospital ancillary healthcare scheme, new dental practice and private clinic accommodation in the Cosham healthcare cluster serving the A2030 corridor.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Drayton and Farlington",
      items: [
        { label: "PO6 care home freehold", detail: "CQC Good and Outstanding-rated care home freehold investment along the A2030 corridor, premium and mid-tier stock.", typicalSize: "£1.5M to £5M facility" },
        { label: "Multi-site PO6 care group", detail: "Operator with 2+ care homes consolidating PO6 freeholds onto a single facility through portfolio refinance.", typicalSize: "£3M to £10M" },
        { label: "Ancillary dental and medical", detail: "Dental practice and private clinic freeholds inside the Queen Alexandra Hospital orbit serving the A2030 corridor.", typicalSize: "£500K to £2M" },
        { label: "Drayton Lane retail parade", detail: "Suburban district-centre retail parade investment and owner-occupier independents on Drayton Lane.", typicalSize: "£300K to £900K" },
        { label: "Farlington district parade", detail: "Smaller suburban district parade retail and convenience freehold.", typicalSize: "£250K to £700K" },
        { label: "Day nursery", detail: "PO6 professional-catchment day nursery freehold serving the affluent A2030 corridor demographic.", typicalSize: "£500K to £1.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Drayton and Farlington",
      body: 'Care home freehold routes via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on CQC plus EBITDA. Multi-site care group consolidation via <a href="/services/portfolio-refinance" class="text-secondary font-medium hover:underline">portfolio refinance</a>. Ancillary dental and medical via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA plus NHS contract value. Drayton Lane parade investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Semi-commercial via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Refinancing maturing facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for PO6 care homes, A2030 corridor and Drayton Lane parade",
      body:
        "Specialist across the A2030 corridor. <strong>Shawbrook</strong> runs one of the deepest South Coast care home books and routinely tops the shortlist on PO6 care home freehold purchase and refinance at 55 to 65% LTV at 7.5 to 9.0% pa on CQC Good plus and stabilised EBITDA. Cambridge & Counties covers multi-site PO6 care group consolidation and the upper end of single-site care home freehold at similar pricing with appetite for stronger covenant operators. Allica Bank health desk takes ancillary dental and private clinic freeholds in the Queen Alexandra Hospital orbit at 70 to 80% LTV on NHS contract value plus EBITDA at 6.5 to 8.0% pa, and covers Drayton Lane owner-occupier independent retail at the tighter end. HTB covers Drayton Lane retail parade investment and selected larger care home freeholds at 65 to 75% LTV. Paragon takes portfolio investment combining PO6 care home and Drayton Lane parade exposure. Together covers value-end Farlington district parade and selected semi-commercial. YBS Commercial selectively covers owner-occupier dental and parade retail at the tighter end of pricing. Hampshire Trust Bank is locally headquartered in Hampshire and runs one of the most active Portsmouth care home and ancillary healthcare books, with a particular focus on the PO6 corridor and the A2030 cluster. Allica, HTB, Paragon, Together, YBS Commercial and Cambridge & Counties all take selected Drayton and Farlington deals in the £400K to £5M bracket. Refinancing on a stabilised PO6 care home freehold typically prices 7.5 to 8.5% pa at 55 to 65% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["healthcare-care-home", "retail", "semi-commercial", "office", "nursery-school", "mixed-use"],
    faqs: [
      {
        question: "What CQC rating do PO6 care home lenders need?",
        answer:
          "Generally CQC Good or above. Shawbrook, Hampshire Trust Bank, Cambridge & Counties and Allica Bank's health desk all underwrite to Good plus and stabilised EBITDA. Requires Improvement can fund at 50 to 60% LTV with a clear remediation plan in place. Inadequate is unfundable until the rating recovers. Stamp duty applies at the commercial rates on the freehold. The Drayton 64-bed scheme (Ref 25/01745/FUL) is the canonical PO6 care home development profile.",
      },
      {
        question: "Can we refinance a multi-site PO6 care group?",
        answer:
          "Yes. 2+ site PO6 care groups route through portfolio refinance with Shawbrook, Cambridge & Counties and Hampshire Trust Bank. Aggregated EBITDA cover and bed-value methodology. Facility size £3M to £10M typical on PO6 stock. The A2030 corridor concentration helps operational efficiency and supports favourable aggregated underwrite at 60 to 70% LTV.",
      },
      {
        question: "What rate on Drayton Lane retail parade investment?",
        answer:
          "Currently 7.0 to 8.5% pa at 65 to 75% LTV. Allica Bank, HTB and Cambridge & Counties all compete actively on Drayton Lane parade stock. Owner-occupier independents buying their own parade unit price tighter at 6.5 to 8.0% pa through Allica Bank and Hampshire Trust Bank. Hampshire Trust Bank is locally headquartered in Hampshire and runs an active Portsmouth book on the corridor.",
      },
      {
        question: "How do we fund an ancillary dental freehold on the A2030 corridor?",
        answer:
          "Through Hampshire Trust Bank or Allica Bank's health desk at 70 to 80% LTV on the bricks plus NHS UDA contract value at 6.5 to 8.0% pa. The Queen Alexandra Hospital ancillary consent (Ref 25/01875/FUL) is the canonical PO6 healthcare ancillary profile. EBITDA cover and NHS contract value drive the underwrite, with the affluent A2030 catchment supporting private-pay consumer demand on the cluster.",
      },
    ],
  },

  "hayling-island-fringe": {
    slug: "hayling-island-fringe",
    name: "Hayling Island and Havant Fringe",
    metaTitle: "Commercial Mortgages Hayling Island Portsmouth | Hotel and Holiday-Let Broker, PO11",
    metaDescription:
      "Commercial mortgages for Hayling Island and Havant Fringe, PO11 seafront hotel and holiday-let market in Havant Borough LPA. Eastoke Road and Beachlands seafront hospitality, holiday parks, C1 hotel freehold. Cynergy Bank, HTB, Shawbrook, Allica panel. 90+ lender panel.",
    hero: {
      h1: "Commercial Mortgages Hayling Island and Havant Fringe",
      lede:
        "Hayling Island sits across the eastern bridge from Portsmouth in the PO11 postcode, technically inside Havant Borough Council planning jurisdiction but firmly inside the Portsmouth commercial mortgage catchment we cover for the South Coast network. The fabric is dominated by the seafront hotel and holiday-let market along Eastoke Road, Beachlands and the southern coastal strip, supported by a modest holiday-park sector and the wider Havant Fringe district parade running through Mengham and West Town. Hayling's tourism economy serves the South Coast staycation and Portsmouth visitor draw, with peak summer occupancy and shoulder-season conference and group leisure trade. We arrange commercial mortgages for Class C1 hotel freehold purchase and refinance along the seafront, holiday-park business and freehold, individual holiday-let portfolio mortgages, and the smaller-cap retail and F&B parade investment across the Havant Fringe district. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Hayling Island and Havant Fringe commercial property market",
      body: [
        "Hayling Island sits in the PO11 postcode across the eastern bridge from Portsmouth, inside Havant Borough Council planning jurisdiction rather than Portsmouth City Council, a critical local distinction we factor into every Hayling commercial mortgage we arrange. The fabric is dominated by the seafront hotel and holiday-let market, with a strip of Class C1 hotel stock running along Eastoke Road, Beachlands and the southern coastal frontage anchoring the local tourism economy. A modest holiday-park sector adds capacity through the summer season alongside the Hayling beach huts and the wider South Coast staycation draw. The Havant Fringe district parade running through Mengham and West Town adds a tighter retail and F&B catchment serving both the resident base and the tourist economy. Pre-let commercial Class E and holiday-let investment portfolio finance threads through the broader PO11 footprint.",
        "Most Hayling Island and Havant Fringe commercial mortgage deals run in the £400K to £3M facility bracket. Hayling seafront Class C1 hotel freehold currently prices at 7.5 to 9.0% pa at 55 to 65% LTV through Cynergy Bank, HTB and Shawbrook on operator EBITDA, with the larger 30+ bed schemes pricing at the tighter end of the LTV range. Holiday-let portfolio investment in PO11 prices 7.0 to 8.5% pa at 65 to 75% LTV through Paragon, HTB and Allica Bank's leisure desk on aggregated rental coverage. Holiday-park business and freehold prices 7.5 to 8.5% pa at 55 to 65% LTV through Cynergy Bank and Shawbrook on operator EBITDA. Havant Fringe district parade retail and F&B investment sits at 7.0 to 8.5% pa at 65 to 75% LTV through Allica Bank, HTB and Cambridge & Counties. Owner-occupier independents in Mengham and West Town price 6.5 to 8.0% pa at 70 to 75% LTV.",
        "HM Land Registry residential transactions across PO11 confirm the dual-market profile, a stable owner-occupied resident base on the western Hayling stock plus an active second-home and holiday-let buyer market on the eastern seafront strip. The mix supports both the resident retail catchment on the Mengham parade and the holiday-let investment income that drives the bulk of the PO11 commercial mortgage flow. They are not direct commercial signals, but they back the underwriting assumptions on hotel and holiday-let trading and the seasonal occupancy profile that PO11 hospitality lenders rely on. Refinancing of maturing 5-year fixes from 2020 and 2021 is the dominant 2026 product flow across the corridor, with Hayling seafront Class C1 hotel refinance particularly busy.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Hayling Island and Havant Fringe (PO11)",
      body:
        'A live Havant Borough Council planning portal file anchors the current Hayling Island and Havant Fringe commercial mortgage pipeline. The Hayling Island seafront hotel and holiday-let scheme (Ref <strong>25/01078/FUL</strong>) covers a new 48-bed Class C1 hotel and ancillary leisure accommodation at Hayling Island, Eastoke Road, Hayling Island PO11 9JQ, the canonical PO11 seafront hospitality development profile that funds through Cynergy Bank, HTB and Shawbrook on operator EBITDA. A larger 48-bed Class C1 hotel typically funds at 55 to 65% LTV at 7.5 to 9.0% pa with operator track record evidence required, with Allica Bank also taking selected hotel deals at the tighter end of pricing where covenant strength and operating history support. Havant Borough Council planning timelines and local plan considerations differ from Portsmouth City Council, we factor this into every Hayling commercial mortgage we arrange. Stamp duty applies at the commercial rates on each freehold purchase, refinancing is unaffected.',
      refs: [
        {
          ref: "25/01078/FUL",
          address: "Hayling Island, Eastoke Road, Hayling Island PO11 9JQ",
          postcode: "PO11 9JQ",
          proposal: "Hayling Island seafront hotel and holiday-let scheme, new 48-bed Class C1 hotel and ancillary leisure accommodation on the Eastoke Road seafront strip inside Havant Borough Council planning jurisdiction.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Hayling Island and Havant Fringe",
      items: [
        { label: "Hayling seafront Class C1 hotel", detail: "Class C1 hotel freehold along Eastoke Road, Beachlands and the southern seafront strip, 20 to 60-bed stock serving South Coast staycation and Portsmouth visitor draw.", typicalSize: "£900K to £3M facility" },
        { label: "Holiday-let portfolio investment", detail: "Multi-property PO11 holiday-let investor portfolio finance on aggregated rental coverage.", typicalSize: "£600K to £2.5M" },
        { label: "Holiday park business and freehold", detail: "PO11 holiday park business and freehold purchase or refinance, summer seasonal occupancy profile.", typicalSize: "£800K to £2.5M" },
        { label: "Havant Fringe district parade", detail: "Mengham and West Town district parade retail and F&B investment and owner-occupier freehold.", typicalSize: "£250K to £700K" },
        { label: "Seafront F&B trading-business", detail: "Independent restaurants, cafes and bars along the Hayling seafront strip, seasonal trading-business mortgage profile.", typicalSize: "£300K to £900K" },
        { label: "Holiday-let single-property mortgage", detail: "Individual PO11 holiday-let freehold mortgage for owner-investors on a single trading property.", typicalSize: "£200K to £600K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Hayling Island and Havant Fringe",
      body: 'Class C1 hotel freehold routes via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Holiday-let portfolio investment via <a href="/services/portfolio-refinance" class="text-secondary font-medium hover:underline">portfolio refinance</a> on aggregated rental coverage. Holiday-park business and freehold via trading-business mortgage. Havant Fringe district parade via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a>. Vacant or seasonal acquisitions route through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Hayling seafront hotels, holiday lets and Havant Fringe parade",
      body:
        "Specialist across the PO11 seafront and Havant Fringe. <strong>Cynergy Bank</strong> runs one of the most engaged South Coast hospitality books and routinely tops the shortlist on Hayling Class C1 hotel freehold at 55 to 65% LTV at 7.5 to 9.0% pa on operator EBITDA with operator track record evidence. HTB covers larger 30+ bed Hayling hotel stock and holiday-let portfolio investment at 60 to 70% LTV. <strong>Shawbrook</strong> takes holiday-park business and freehold purchase and refinance at 55 to 65% LTV on operator EBITDA, and selected Hayling Class C1 hotel deals. Paragon runs the canonical multi-property holiday-let portfolio investment desk at 65 to 75% LTV on aggregated rental coverage with bed-value and seasonal occupancy methodology. Allica Bank takes selected stronger-covenant Hayling hotel deals on its leisure desk and Mengham owner-occupier independent retail at the tighter end. Cambridge & Counties selectively covers Havant Fringe parade investment with stable tenant mixes. YBS Commercial takes selected holiday-let portfolio investment at the tighter end of pricing. Together covers value-end Mengham parade semi-commercial and selected holiday-let single-property finance. Hampshire Trust Bank is locally headquartered in Hampshire and runs an active Portsmouth and South Coast hospitality book, with appetite for Hayling Class C1 hotel and holiday-let portfolio finance. Allica, HTB, Paragon, Together, YBS Commercial and Cambridge & Counties all take selected Hayling Island and Havant Fringe deals in the £400K to £3M bracket. Refinancing on a stabilised Hayling Class C1 hotel typically prices 7.5 to 8.5% pa at 55 to 65% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["leisure-hospitality", "pub-restaurant", "retail", "semi-commercial", "mixed-use", "office"],
    faqs: [
      {
        question: "What LTV is achievable on a Hayling seafront Class C1 hotel?",
        answer:
          "Typically 55 to 65% LTV on Class C1 hotel freehold along the Eastoke Road and Beachlands seafront strip. Cynergy Bank, HTB and Shawbrook all quote 55 to 65% LTV at 7.5 to 9.0% pa on operator EBITDA with operator track record evidence required. Allica Bank takes selected stronger-covenant hotel deals at the tighter end. The Hayling seafront 48-bed scheme (Ref 25/01078/FUL) is the canonical PO11 hotel development profile. Hayling sits inside Havant Borough Council planning jurisdiction rather than Portsmouth City Council, a distinction we factor into every deal.",
      },
      {
        question: "Can we fund a PO11 holiday-let portfolio?",
        answer:
          "Yes. Paragon runs the canonical multi-property holiday-let portfolio investment desk at 65 to 75% LTV on aggregated rental coverage with bed-value and seasonal occupancy methodology. HTB and YBS Commercial also active. Typical 7.0 to 8.5% pa pricing on aggregated Hayling holiday-let portfolios of 4+ properties. Single-property holiday-let mortgages route through specialist holiday-let mortgage products at 70 to 75% LTV.",
      },
      {
        question: "What rate on Havant Fringe district parade investment?",
        answer:
          "Currently 7.0 to 8.5% pa at 65 to 75% LTV. Allica Bank, HTB and Cambridge & Counties all compete actively on Mengham and West Town parade stock. Owner-occupier independents buying their own parade unit price tighter at 6.5 to 8.0% pa through Allica Bank and Hampshire Trust Bank. Hampshire Trust Bank is locally headquartered in Hampshire and runs an active South Coast book on the corridor.",
      },
      {
        question: "How does Havant Borough Council planning differ from Portsmouth?",
        answer:
          "Hayling Island sits inside Havant Borough Council planning jurisdiction rather than Portsmouth City Council, which means Havant's local plan, Article 4 directions and design-policy positions apply to every Hayling deal. Determination timelines and local consultation patterns differ from Portsmouth, we factor this into every Hayling commercial mortgage we arrange. The Hayling seafront 48-bed Class C1 hotel scheme (Ref 25/01078/FUL) sat through the Havant Borough Council process and is now consented, the canonical example of PO11 hotel development risk and timeline.",
      },
    ],
  },
};

export function getAreaDetail(slug: string): AreaDetail | null {
  return areaDetails[slug] ?? null;
}

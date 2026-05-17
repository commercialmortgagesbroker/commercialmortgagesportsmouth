/**
 * Property-type / asset-class commercial mortgage pages, Portsmouth.
 *
 * Twelve sector pages plus a hub. Each sector covers the lender-appetite
 * realities, cover tests (ICR / DSCR / EBITDA), sector-specific underwriting
 * concerns, and Portsmouth-specific examples. Voice matches the home page,
 * editorial, broker-led, specifics over slogans, real lender names where
 * defensible per NAMED-LENDERS.md.
 *
 * Slugs match src/lib/constants.ts and are used as /property-types/[slug] routes.
 */

export interface AssetTypeFaq {
  question: string;
  answer: string; // HTML allowed
}

export interface AssetTypeDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
    metrics: Array<{ label: string; value: string }>;
  };
  overview: { h2: string; body: string[] };
  schemeTypes: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  financeStructures: {
    h2: string;
    intro: string;
    structures: Array<{ product: string; applicability: string }>;
  };
  portsmouthContext: { h2: string; body: string };
  lenderAppetite: { h2: string; body: string };
  faqs: AssetTypeFaq[];
}

export interface PropertyTypesHubContent {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
  };
  intro: { h2: string; body: string[] };
  underwriting: {
    h2: string;
    body: string;
    items: Array<{ label: string; detail: string }>;
  };
  closingCta: { h2: string; body: string };
}

const standardStructures = [
  { product: "Owner-occupier commercial mortgage", applicability: "Where the borrower's business trades from the property, EBITDA cover at 1.3 to 1.5x." },
  { product: "Commercial investment mortgage", applicability: "Let assets, ICR-led underwriting at 140 to 160% stressed cover." },
  { product: "Commercial bridge-to-let", applicability: "Vacant or value-add acquisition with agreed term-out onto investment mortgage." },
  { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing assets." },
];

// Hub page content
export const propertyTypesHubContent: PropertyTypesHubContent = {
  metaTitle: "Commercial Mortgages Portsmouth by Property Type | 12 Sectors, 90+ Lenders",
  metaDescription:
    "Commercial mortgage finance for Portsmouth property, twelve sector pages covering retail, office, industrial, leisure, healthcare, pubs, MOT, nurseries, mixed-use, semi-commercial, HMO and holiday-let. Sector-specific lender appetite, real mid-2026 rates.",
  hero: {
    eyebrow: "Twelve sectors",
    h1: "Commercial Mortgages by Property Type Portsmouth",
    lede:
      "A Portsmouth commercial mortgage on a Lakeside North Harbour office prices nothing like a Gunwharf Quays leisure investment or a Southsea PO5 student HMO block. The asset class drives the lender list, the LTV band, the cover test and the rate. Twelve sector pages, each with the underwriting that actually applies and the lenders that actually write the deal.",
  },
  intro: {
    h2: "The asset class is the first variable a commercial mortgage lender prices.",
    body: [
      "Borrowers often start with the geography, the LTV they want, or the rate they have read about. Lenders start with the property type. A commercial mortgage on a Commercial Road retail investment runs through a different desk to one on an Albert Road wet-led pub freehold or a North End converted HMO, different cover test, different LTV cap, different valuation methodology, different rate.",
      "Across the broker panel, the practical division splits twelve ways. Three pure investment classes (<a href=\"/property-types/retail\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">retail</a>, <a href=\"/property-types/office\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">office</a>, <a href=\"/property-types/industrial-warehouse\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">industrial and warehouse</a>) underwritten on ICR against a tenant covenant. Five trading-business classes (<a href=\"/property-types/leisure-hospitality\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">leisure and hospitality</a>, <a href=\"/property-types/healthcare-care-home\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">healthcare and care homes</a>, <a href=\"/property-types/pub-restaurant\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">pubs and restaurants</a>, <a href=\"/property-types/mot-garage-petrol\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">MOT and forecourt</a>, <a href=\"/property-types/nursery-school\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">nurseries and schools</a>) underwritten on EBITDA cover with sector-specialist regulators (CQC, Ofsted, VOSA) feeding the credit decision. Four mixed-tenure or hybrid classes (<a href=\"/property-types/mixed-use\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">mixed-use</a>, <a href=\"/property-types/semi-commercial\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">semi-commercial</a>, <a href=\"/property-types/hmo-block\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">HMO blocks</a>, <a href=\"/property-types/holiday-let-portfolio\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">holiday-let portfolios</a>) where lender appetite varies dramatically with the residential proportion or the operating model.",
      "Portsmouth is leisure-heavy, HMO-heavy and defence-supply-chain-led. The M27 Solent corridor west of the city is one of the most active industrial-warehouse markets on the South Coast, and the Solent industrial yield reads tighter than the Portsmouth-only data suggests because lenders price the corridor not the city. Portsmouth also runs the densest HMO conversion volume in our network on the back of around 28,000 University of Portsmouth students. Each page below sets out the LTV band, the cover test, the sector-specific underwriting concerns, the rate range in mid-2026, the lenders most active on the panel, and worked Portsmouth examples. Where a deal sits awkwardly between sectors, a pub with an operator flat above, an Old Portsmouth heritage building used as both hotel and restaurant, a Commercial Road retail-plus-flat with upper floors run as short-stay, we say so and explain how lenders treat it.",
    ],
  },
  underwriting: {
    h2: "Three cover tests, twelve sectors. Which test applies to you decides the lender.",
    body:
      "The single most important variable on a commercial mortgage is which cover test the lender uses to size the loan. Get this wrong at outset and the offer either prices materially down at credit committee or falls over. Three tests dominate.",
    items: [
      {
        label: "ICR, interest cover ratio",
        detail:
          "Used on let investment property, retail, office, industrial, semi-commercial, mixed-use. Tests rent against interest only at a stressed notional rate, typically 140 to 160%. The driver is the lease and the tenant covenant, not the borrower's income.",
      },
      {
        label: "DSCR, debt-service cover ratio",
        detail:
          "Used on portfolios and on assets where capital amortisation matters to the lender. Tests net rent against the full mortgage payment (interest plus capital), typically 130 to 145%. Common on portfolio refinance and on larger HMO and FHL portfolios, particularly relevant given the Portsmouth HMO portfolio market.",
      },
      {
        label: "EBITDA cover",
        detail:
          "Used on owner-occupier and trading-business mortgages, pubs, care homes, MOT centres, nurseries, dental practices, hotels. Tests business operating profit against the mortgage payment, typically 1.3 to 1.5x for mainstream sectors and 1.5 to 2.0x for higher-risk trading sectors. Filed accounts and a credible forward-looking forecast both matter.",
      },
      {
        label: "Sector overlays",
        detail:
          "On top of the cover test, sector-specific overlays drive the credit decision: CQC rating on care homes, Ofsted on nurseries, VOSA approval on MOT centres, barrelage on pubs, lease length on retail, occupancy and ADR on hotels and FHLs.",
      },
    ],
  },
  closingCta: {
    h2: "Send the property, the LTV target and the trading or rental income.",
    body:
      "We will tell you which sector the deal sits in, which lender desks will look at it, which cover test will apply, and what indicative terms look like across the panel. Indicative numbers in 48 hours. If the deal does not work, wrong sector for the LTV, cover test fails, regulator rating insufficient, we say so up front rather than burning weeks at valuation.",
  },
};

export const assetTypeDetails: Record<string, AssetTypeDetail> = {
  // Retail
  retail: {
    slug: "retail",
    name: "Retail",
    metaTitle: "Retail Commercial Mortgages Portsmouth | Gunwharf Quays, Commercial Road, Cascades, Cosham, Southsea, Hilsea Retail Park",
    metaDescription:
      "Commercial mortgage finance for retail property in Portsmouth, Gunwharf Quays (Land Securities outlet), Commercial Road, Cascades Centre, Cosham High Street, Southsea Albert Road and Palmerston Road, Hilsea Retail Park. Investment LTVs to 75%, ICR 140 to 160%, mid-2026 rates 6.5 to 8.5% pa. NatWest, Lloyds, Barclays, InterBay Commercial.",
    hero: {
      eyebrow: "Retail",
      h1: "Retail Commercial Mortgages Portsmouth",
      lede:
        "Investment finance for let retail property and owner-occupier finance for independent retailers buying their unit. Portsmouth retail is anchored by Gunwharf Quays (Land Securities outlet flagship) and the Commercial Road central spine, with deep district-centre stock at Cosham High Street, Cascades Centre and Southsea inner (Albert Road and Palmerston Road), and an out-of-city retail park at Hilsea. Lender appetite varies sharply by retail sub-type. Investment LTV 65 to 75%, ICR 140 to 160% stressed, mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "Investment LTV", value: "65 to 75%" },
        { label: "Cover test", value: "ICR 140 to 160%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£150K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting a Portsmouth retail commercial mortgage",
      body: [
        "The Portsmouth retail estate splits into four practical brackets and lenders price each one differently. <strong>Prime PO1 city-centre and waterfront</strong> covers Gunwharf Quays (the Land Securities outlet flagship, around 90 stores plus leisure on the historic Portsea waterfront), the Commercial Road pedestrianised spine and the Cascades Centre, institutional-grade pitches dominated by national outlet, fashion and F&B covenants. <strong>Independent-led prime</strong> covers Albert Road and Palmerston Road in Southsea (PO5), the dense independent retail and F&B cluster that anchors the city's most-walked Class E core outside Gunwharf and Commercial Road. <strong>District and neighbourhood retail</strong> covers Cosham High Street (PO6), North End shopping parade (PO2), Fratton Road (PO1) and Albert Road's secondary stretches. <strong>Out-of-city retail park</strong> covers Hilsea Retail Park (PO2) at the borough fringe.",
        "Investment underwriting tests <strong>ICR</strong>, rent versus stressed interest, at typically 140 to 160%. The two drivers a credit committee reads first are <strong>unexpired lease term</strong> and <strong>tenant covenant</strong>. A 10-year FRI to a national outlet operator at Gunwharf Quays prices materially better than three two-year leases to local independents on the same Albert Road pitch. WAULT (weighted-average unexpired lease term) under five years pulls LTV down 5 to 10 percentage points and pricing 50 to 75bps wider.",
        "Worked example: a Commercial Road retail unit on a 10-year FRI to a national fashion covenant, £1.35M valuation, £95K passing rent. ICR at 145% on a 7.6% pa stressed rate sizes the loan to roughly £970K, about 72% LTV. <strong>NatWest</strong>, <strong>Lloyds</strong> and <strong>Barclays</strong> all compete on prime CBD investment of this profile. Worked example two: an Albert Road unit let to two independent operators on shorter leases, £455K valuation, two-year tail to the lead tenant. Same ICR test sizes the loan to roughly 60% LTV; <strong>InterBay Commercial</strong>, Together and <strong>LendInvest</strong> are the realistic desks at 8.5 to 9.0% pa.",
        'For shop-with-flat semi-commercial archetypes, see the <a href="/property-types/semi-commercial">semi-commercial commercial mortgage page</a>; for retail-led mixed-use blocks, see <a href="/property-types/mixed-use">mixed-use</a>. Vacant retail acquisition routes through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> with refurb and re-let exit onto term investment.',
      ],
    },
    schemeTypes: {
      h2: "Retail asset types we fund",
      items: [
        { label: "Gunwharf Quays outlet retail (PO1)", detail: "Gunwharf Quays (Land Securities outlet flagship), the dominant outlet shopping destination on the central South Coast. Institutional investment territory; long FRI leases to national outlet and F&B covenants." },
        { label: "Prime city-centre retail (PO1)", detail: "Commercial Road pedestrianised spine, Cascades Centre, the wider city-centre retail core. National multiple covenants dominate the let stock; owner-occupier independents active on the secondary frontages." },
        { label: "Southsea inner independent prime", detail: "Albert Road and Palmerston Road (PO5). Independent-led F&B and retail, the densest Class E walk-in trade outside the covered scheme. Strong term-time footfall on the back of the University of Portsmouth student catchment." },
        { label: "District centre retail", detail: "Cosham High Street (PO6), North End shopping parade (PO2), Fratton Road (PO1). Mixed national and independent covenant, convenience and service retail anchoring residential neighbourhoods." },
        { label: "Hilsea Retail Park and out-of-city", detail: "Hilsea Retail Park (PO2), out-of-town big-box format on the M275 corridor. Strong national-covenant tenant base." },
        { label: "Owner-occupier independent retailer", detail: "Independent businesses buying the freehold they trade from, EBITDA cover route via the owner-occupier service. Common across Albert Road, Palmerston Road and Cosham High Street." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Portsmouth retail",
      intro:
        "Most retail deals route as investment (let asset, ICR-led) or owner-occupier (independent retailer buying their unit, EBITDA-led). Vacant or short-lease assets route through commercial bridge-to-let with an agreed exit. Multi-asset retail portfolios consolidate via portfolio refinance.",
      structures: standardStructures,
    },
    portsmouthContext: {
      h2: "The Portsmouth retail estate",
      body: 'Portsmouth retail is shaped by an unusual combination of an outlet-led waterfront destination (Gunwharf Quays), a long pedestrianised city-centre spine (Commercial Road), a covered centre (Cascades) and a deep network of district and inner-suburb parades serving a city population of around 210,000 inside a tightly-bounded island geography. Gunwharf Quays (Land Securities, opened 2001 on the former HMS Vernon naval site) anchors the prime outlet pitch, around 90 outlet stores plus leisure and the Spinnaker Tower as the visitor magnet, the dominant outlet shopping destination on the central South Coast. Commercial Road runs the pedestrianised national-multiple spine through the city centre with the Cascades Centre as the covered anchor. Albert Road and Palmerston Road in Southsea (PO5) hold the densest independent F&B and retail cluster outside the covered schemes. Cosham High Street (PO6) anchors the northern district centre serving the Cosham, Drayton and Farlington catchment. North End (PO2) and Fratton Road (PO1) round out the district network. Hilsea Retail Park (PO2) on the M275 corridor carries the out-of-town big-box stock. Recent planning activity (the 26/00475/FUL and 26/00469/FUL Class E works at 116 to 118 Commercial Road being typical examples) shows active investment in the prime CBD retail stock.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Portsmouth retail",
      body: 'Strongest pricing on convenience and food-led retail with national covenants and on Gunwharf Quays and Commercial Road prime investment let on long FRI leases. Mid-strength on Albert Road and Palmerston Road independent prime, where rents are strong but covenants are independent. Tighter on suburban high-street pure-comparison units, particularly where WAULT is under five years. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime investment with strong covenants, typical 7.0 to 7.75% pa at 65 to 70% LTV. Mid-market and challenger appetite from Allica Bank, <strong>Shawbrook</strong>, Hampshire Trust Bank (locally headquartered in Hampshire, strong on Portsmouth deals), HTB and Cambridge & Counties on district-centre and Cosham High Street investment at 8.0 to 8.75% pa. <strong>InterBay Commercial</strong> (OSB Group) and <strong>LendInvest</strong> take the harder cases, short lease tail, secondary covenant, semi-commercial overlap, at 8.5 to 9.0% pa. High-street desks routinely decline retail with WAULT under three years; Together and InterBay Commercial are the realistic desks for that profile.',
    },
    faqs: [
      {
        question: "What LTV can I get on a Portsmouth retail investment mortgage?",
        answer: "Up to 75% LTV on let retail with strong national covenants and a long FRI lease. Semi-commercial shop-with-flat reaches 75% on the right archetype, common across Albert Road and Cosham High Street. Vacant retail or short leases (under three years tail) typically cap at 60 to 65%. Convenience-led with a supermarket covenant prices at the keenest end of the band.",
      },
      {
        question: "What ICR do retail lenders need?",
        answer: "Typical 140 to 160% stressed at a notional rate 1 to 2% above pay rate. Prime Gunwharf Quays or Commercial Road with a 10-year FRI to a national covenant sometimes funds at 130%. Albert Road independent parade with mid-covenant sits at 150 to 160%. The stressed rate is the variable that catches borrowers out, the headline ICR on the actual rate often looks fine, but stressed it pulls the loan size down materially.",
      },
      {
        question: "Are retail rates wider than office or industrial investment?",
        answer: "Retail typically prices 25 to 50bps wider than equivalent office investment in mid-2026, and 50 to 75bps wider than industrial. Convenience and food-led close that gap, supermarket-anchored retail prices closer to industrial than to comparison high-street. The rate gap between sectors has narrowed since 2023 as institutional appetite for prime retail has reasserted.",
      },
      {
        question: "Can I get a commercial mortgage on a vacant retail unit?",
        answer: 'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month bridge funds acquisition plus refurbishment plus the re-letting period; exit is onto a term investment mortgage once the new lease is in place. The lender for the bridge will normally also be the term-out lender. We model both legs at outset so you know the all-in cost of the strategy before exchange.',
      },
      {
        question: "Gunwharf Quays prime, what does it price at right now?",
        answer: "Gunwharf Quays investment with a national outlet or F&B covenant on a 10-year FRI prices in the 6.5 to 7.5% pa band at 65% LTV in mid-2026. Lloyds, NatWest, Barclays and Santander all compete on this profile. The scheme's outlet anchor draw, Land Securities management and waterfront leisure overlay position it close to institutional-grade in lender terms.",
      },
    ],
  },

  // Office
  office: {
    slug: "office",
    name: "Office",
    metaTitle: "Office Commercial Mortgages Portsmouth | Lakeside North Harbour, Guildhall Square, Voyager Park, Old Portsmouth",
    metaDescription:
      "Commercial mortgage finance for office property in Portsmouth, Lakeside North Harbour (Cosham, IBM legacy 1.5M sq ft Grade B), Guildhall Square, Commercial Road upper floors, Voyager Park, Old Portsmouth heritage office. LTVs 65 to 75%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Office",
      h1: "Office Commercial Mortgages Portsmouth",
      lede:
        "Investment and owner-occupier mortgage finance for Portsmouth office property. Lakeside North Harbour at Cosham (the IBM legacy campus, around 1.5 million sq ft of Grade B) is the largest single office estate in the city, Guildhall Square anchors the central professional-services stock, Commercial Road upper floors run the small-cap city-centre office, Voyager Park serves the modern park-format occupier and Old Portsmouth carries heritage office stock. Investment LTV 65 to 75%, owner-occupier to 75% on EBITDA cover, mid-2026 rates 7.0 to 9.0% pa.",
      metrics: [
        { label: "LTV", value: "65 to 75%" },
        { label: "Cover test", value: "ICR 140 to 155% / EBITDA 1.3 to 1.5x" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£300K to £10M" },
      ],
    },
    overview: {
      h2: "Underwriting a Portsmouth office commercial mortgage",
      body: [
        "Portsmouth office stock reflects the city's defence, naval, university and back-office economy. The occupier base is exceptionally varied, driven by the Royal Navy and BAE Systems Maritime Services at the naval base and shipyard, Portsmouth City Council at Guildhall Square, Queen Alexandra Hospital and Portsmouth Hospitals University NHS Trust, the University of Portsmouth and a multi-tenant occupier base at Lakeside North Harbour following the IBM consolidation. The commercial mortgage market splits four ways. <strong>Lakeside North Harbour (PO6)</strong> the dominant Cosham office campus, around 1.5 million sq ft of Grade B office space, multi-let after IBM consolidated, lender appetite is solid where covenants are intact and leases run beyond five years. <strong>Central Guildhall Square and Commercial Road upper floors (PO1)</strong>, the £400K to £3M owner-occupier and small-investment bracket. <strong>Voyager Park (PO3) and modern industrial-park-format office</strong>, the smaller modern park-format occupiers along the Airport Service Road corridor. <strong>Old Portsmouth heritage office (PO1)</strong>, listed and conservation-area office stock around the High Street and Spice Island.",
        "Investment underwriting tests <strong>ICR</strong> at 140 to 155% on let office stock. Tenant covenant carries even more weight than on retail, a five-year unbroken lease to a defence supply-chain or professional-services firm prices materially better than the same building let on three two-year leases. Multi-let assets with rolling renewals price at the wider end. Owner-occupier office routes through the EBITDA-cover product at 1.3 to 1.5x, the marine consultancy buying its Old Portsmouth townhouse, the legal firm taking the freehold of its Guildhall Square office, the engineering practice buying a Lakeside North Harbour suite.",
        "<strong>Lakeside North Harbour</strong> is a discrete sub-pool. The estate's Grade B vintage and the IBM legacy mean valuations sit below modern equivalents on a £/sq ft basis, but the multi-tenant occupier base post-IBM consolidation has produced steady refinance flow. Lenders read each Lakeside building on its own letting evidence rather than as a single campus story. <strong>Old Portsmouth heritage office</strong> needs heritage-comfortable lenders given the listed-building and conservation-area constraints on alteration.",
        "Worked example: a Guildhall Square 5,600 sq ft office investment, £1.55M valuation, let on a 7-year FRI to a regional law firm at £108K passing rent. ICR at 145% sizes a £985K loan at 64% LTV; <strong>Lloyds</strong>, <strong>NatWest</strong> and <strong>Santander</strong> all price this profile at 7.5 to 8.0% pa on a five-year fix. Worked example two: an Old Portsmouth heritage office freehold purchase by a marine-services consultancy, £695K, EBITDA cover 1.4x. Owner-occupier route at 70% LTV places with Hampshire Trust Bank or <strong>Shawbrook</strong> at 7.5 to 8.25% pa.",
      ],
    },
    schemeTypes: {
      h2: "Office asset types we fund",
      items: [
        { label: "Lakeside North Harbour campus office", detail: "Lakeside North Harbour (PO6) at Cosham. The IBM legacy campus, around 1.5 million sq ft of Grade B, multi-tenant post-consolidation. Each building underwritten on its own letting evidence." },
        { label: "Central Guildhall Square office", detail: "Guildhall Square and the streets around Portsmouth City Council and the Civic Offices (PO1). Victorian and 1960s purpose-built stock plus continual upper-floor conversion." },
        { label: "Commercial Road upper-floor office", detail: "Upper floors above the Commercial Road retail spine (PO1). Small-cap office, often part of mixed-use blocks. £200K to £1M bracket." },
        { label: "Voyager Park modern office", detail: "Voyager Park (PO3) and the wider Airport Service Road modern park stock. B1 office and B1/B2 hybrid in modern unit format." },
        { label: "Old Portsmouth heritage office", detail: "High Street and Spice Island office (PO1), listed and conservation-area stock. Heritage-comfortable lenders only." },
        { label: "Owner-occupier office freehold", detail: "Professional services buying their building, marine consultancy, defence supply-chain, legal, accountancy. EBITDA cover route at 1.3 to 1.5x." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Portsmouth office",
      intro:
        "Investment routes via commercial investment mortgage on ICR; owner-occupier via the EBITDA-cover route; vacant or value-add via bridge-to-let with an agreed term-out. Serviced and licence-let stock routes through specialist desks.",
      structures: standardStructures,
    },
    portsmouthContext: {
      h2: "The Portsmouth office estate",
      body: 'Portsmouth office stock divides into four clear clusters. Lakeside North Harbour (PO6) on the Cosham M27 corridor is the city\'s largest single office estate, around 1.5 million sq ft of Grade B campus office, originally developed for IBM and now multi-let following IBM consolidation; lender comfort with the campus is solid where individual buildings are well-tenanted on five-plus year leases. The central CBD around Guildhall Square (PO1) carries Victorian and 1960s purpose-built stock plus continual upper-floor conversion above Commercial Road retail, the densest professional-services freehold market in the city. Voyager Park (PO3) on the Airport Service Road corridor holds modern park-format office stock in B1 and B1/B2 hybrid units. Old Portsmouth (PO1) carries heritage and listed office stock around the High Street and Spice Island, a small but valued sub-pool with conservation-area constraints. The naval base and BAE Systems shipyard generate substantial defence supply-chain office demand that anchors the wider Portsmouth occupier base across all four clusters. The structural supply position is steady rather than stretched, central CBD owner-occupier demand outstrips speculative supply, and refinancing flow across the Lakeside estate is a meaningful share of total commercial mortgage volume.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Portsmouth office",
      body: 'Strong on prime let stock with national covenants and unexpired lease term over five years. Mid-strength on secondary CBD with mid-covenant tenants on shorter leases. Tighter, but still fundable, on vacant or part-let secondary office routed through bridge-to-let with a credible refurbishment story. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime investment at 7.0 to 7.75% pa for 65% LTV with strong covenants. Hampshire Trust Bank (locally HQ\'d in Hampshire, with a strong Portsmouth book), <strong>Shawbrook</strong>, Allica Bank, HTB and Cambridge & Counties cover mid-market at 7.75 to 8.5% pa. <strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> handle secondary, short-lease and refurb-to-let stories at 8.25 to 9.0% pa. Lakeside North Harbour buildings with conventional FRI lettings sit on the standard panel; Old Portsmouth heritage stock routes through heritage-comfortable lenders only.',
    },
    faqs: [
      {
        question: "What LTV can I get on a Portsmouth office investment?",
        answer: "Up to 75% LTV on strong-covenant let stock with five-plus years unexpired. ICR cover tested at 140 to 155% stressed. Vacant or short-lease assets cap at 60 to 65% LTV. WAULT under three years usually pulls the loan to 60% even where the building is otherwise well-let.",
      },
      {
        question: "Is post-Covid Portsmouth office stock still fundable?",
        answer: "Yes. The Lakeside North Harbour campus has worked through the IBM consolidation cycle and the Grade B stock is materially repriced to reflect that, which has made underwriting easier rather than harder. Bridge-to-let funds acquisition plus refurbishment plus re-letting; specialists like Shawbrook, LendInvest and HTB have appetite for genuine refurbishment stories with credible exit lettings. The EPC-B 2030 deadline has if anything strengthened lender comfort with refurb plans, because it forces the upgrade work the older Lakeside stock needs anyway.",
      },
      {
        question: "Lakeside North Harbour office purchase, can you fund it?",
        answer: "Yes, where the asset is let on conventional FRI to a single tenant or owner-occupied by a strong-covenant business. The campus is well-known to South Coast underwriters; each building is read on its own letting evidence rather than as a single Lakeside story. Above £5M the deal typically routes through structured commercial debt outside the standard broker panel.",
      },
      {
        question: "What about owner-occupier office purchase in Guildhall Square?",
        answer: 'Routes via the <a href="/services/owner-occupier-commercial-mortgage">owner-occupier commercial mortgage</a>. EBITDA cover 1.3 to 1.5x; LTV up to 75%; rate 7.0 to 8.25% pa for strong covenants. The accountancy or legal firm taking the freehold of its existing leased Guildhall Square or Commercial Road building is the archetypal deal, typically £400K to £1.5M facility.',
      },
      {
        question: "Are Old Portsmouth heritage offices fundable?",
        answer: "Yes, but the lender pool narrows. Listed and conservation-area office around the High Street and Spice Island routes through heritage-comfortable lenders, Hampshire Trust Bank, Shawbrook, Cambridge & Counties. Slightly tighter LTV (typically 65% rather than 70%) reflecting listed-building consent constraints on alteration; otherwise comparable terms to non-listed stock. Pricing typically 7.75 to 8.5% pa at 65 to 70% LTV.",
      },
    ],
  },

  // Industrial / warehouse
  "industrial-warehouse": {
    slug: "industrial-warehouse",
    name: "Industrial & Warehouse",
    metaTitle: "Industrial Commercial Mortgages Portsmouth | Lakeside, Portsfield, Voyager Park, Walton Road, Airport Service Road, Tipner",
    metaDescription:
      "Commercial mortgage finance for industrial and warehouse property in Portsmouth, Lakeside campus, Portsfield, Voyager Park, Walton Road industrial estate (PO6), Airport Service Road (PO3), Tipner Lane regeneration. Defence supply-chain anchor, M27 and M275 Solent corridor. Mid-2026 rates 6.0 to 7.75% pa.",
    hero: {
      eyebrow: "Industrial & warehouse",
      h1: "Industrial and Warehouse Commercial Mortgages Portsmouth",
      lede:
        "Investment and owner-occupier finance for B2/B8 industrial property and trade-counter units across one of the deepest defence-led industrial markets on the South Coast. Lakeside campus, Portsfield, Voyager Park, Walton Road industrial estate (PO6), Airport Service Road (PO3) and Tipner Lane (regeneration zone) carry significant stock. Royal Navy, BAE Systems Maritime Services and the wider defence supply chain anchor the demand side. Hampshire industrial yields read tighter than the Portsmouth-only data suggests because lenders price the M27 Solent corridor as one market across the wider South Coast. Investment LTV to 75%, owner-occupier to 75%, rates 6.0 to 7.75% pa.",
      metrics: [
        { label: "LTV", value: "70 to 75%" },
        { label: "Cover test", value: "ICR 140 to 155% / EBITDA 1.3 to 1.5x" },
        { label: "Rate range", value: "6.0 to 7.75% pa" },
        { label: "Facility", value: "£250K to £15M" },
      ],
    },
    overview: {
      h2: "Underwriting a Portsmouth industrial commercial mortgage",
      body: [
        "Portsmouth industrial is anchored by the defence supply chain feeding Portsmouth Naval Base and BAE Systems Maritime Services at the shipyard, plus the M27 and M275 Solent corridor logistics demand. The market splits four ways. <strong>Lakeside and Portsfield (PO6)</strong> covers the M27-corridor industrial-park stock, mixed B1/B2/B8 occupiers serving the wider Solent corridor. <strong>Voyager Park and Airport Service Road (PO3)</strong> holds modern unit-format industrial along the Airport Service Road corridor and around the former Portsmouth Airport site. <strong>Walton Road industrial estate (PO6)</strong> carries dense B2/B8 stock plus automotive trade. <strong>Tipner Lane (PO2)</strong> sits in the Tipner Regeneration zone, currently transitioning as the wider regen masterplan progresses, with some legacy industrial stock still operational.",
        "Industrial enjoys broad lender competition nationally in mid-2026 because the asset class has performed consistently well through 2022 to 2026, and Portsmouth stock benefits from the Solent corridor logistics demand plus the defence supply-chain anchor. Investment LTVs of 75% are achievable on strong-covenant let assets with five-plus years unexpired; owner-occupier 70 to 75% on businesses with two years' clean accounts and EBITDA cover of 1.3 to 1.5x. Deal sizes range widely, central Portsmouth owner-occupier industrial sits in the £300K to £2M bracket; the Solent corridor portfolios and institutional-grade B8 sheds at Lakeside and Portsfield routinely sit in the £3M to £15M bracket.",
        "<strong>Lenders price the M27 Solent corridor as one market.</strong> Large logistics operators (Whitbread, Lidl regional, DHL, Amazon last-mile) treat Portsmouth, Fareham, Eastleigh and the wider M27 belt as a single labour shed; valuers pull comparables across the corridor and credit committees price the corridor not the city. The defence supply-chain layer is distinct, a pool of long-tenured occupiers tied to Royal Navy and BAE Systems contracts that lenders price favourably given the public-sector-adjacent covenant strength.",
        "Worked example: a Portsfield industrial unit, 38,000 sq ft, let on a 12-year FRI to a defence supply-chain operator, £6.2M valuation, £445K passing rent. ICR at 140% on a 7.2% pa stressed rate sizes a loan to roughly £4.4M, about 71% LTV. <strong>NatWest</strong>, <strong>Lloyds</strong> and <strong>Barclays</strong> all compete on this profile at 6.75 to 7.25% pa on a five-year fix. Worked example two: a Walton Road light-industrial trade-counter unit, 11,800 sq ft, owner-occupier purchase by an existing operator, £1.75M valuation, EBITDA cover 1.55x. Placed with <strong>Lloyds</strong> at 70% LTV, 6.45% pa, 20-year term.",
      ],
    },
    schemeTypes: {
      h2: "Industrial asset types we fund",
      items: [
        { label: "Lakeside and Portsfield M27-corridor industrial", detail: "Lakeside campus and Portsfield (PO6), mixed B1/B2/B8 stock on the M27 corridor. Defence supply-chain and Solent logistics occupier base." },
        { label: "Voyager Park and Airport Service Road", detail: "Voyager Park and the Airport Service Road corridor (PO3). Modern unit-format industrial; B1/B2 hybrid and trade-counter overlap." },
        { label: "Walton Road industrial estate", detail: "Walton Road (PO6), dense B2/B8 stock plus automotive trade. Mixed-tenant estate format common." },
        { label: "Tipner Lane regeneration-fringe industrial", detail: "Tipner Lane (PO2) within the Tipner Regeneration zone. Legacy industrial transitioning; lenders read the regen masterplan carefully." },
        { label: "Trade-counter retail-in-industrial", detail: "Toolstation, Howdens, Screwfix, City Plumbing and similar trade-counter format across Voyager Park, Walton Road and the Airport Service Road corridor. Treated as industrial investment with retail-tenant covenant overlay." },
        { label: "Owner-occupier SME industrial", detail: "Manufacturing, engineering, marine services and defence supply-chain SMEs buying their workshop or warehouse, the £300K to £2M bracket. EBITDA-led owner-occupier route." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Portsmouth industrial",
      intro:
        "Investment routes via commercial investment mortgage on ICR; owner-occupier via the EBITDA-cover route; vacant industrial via bridge-to-let. Multi-let estate portfolios consolidate via portfolio refinance.",
      structures: standardStructures,
    },
    portsmouthContext: {
      h2: "The Portsmouth industrial estate",
      body: 'Portsmouth industrial sits at the eastern end of the M27 Solent corridor, anchored by the Royal Navy at Portsmouth Naval Base and BAE Systems Maritime Services at the shipyard. The defence supply chain feeds occupier demand across the local industrial estates and into the wider M27 logistics shed. Lakeside campus and Portsfield (PO6) on the M27 corridor hold the largest single concentration of mixed B1/B2/B8 industrial-park stock, serving both defence supply-chain occupiers and wider Solent corridor logistics. Voyager Park and the Airport Service Road corridor (PO3) carry modern unit-format industrial in B1/B2 hybrid format. Walton Road (PO6) carries dense B2/B8 stock plus a substantial automotive trade. Tipner Lane (PO2) sits within the Tipner Regeneration zone, with legacy industrial stock currently transitioning as the wider regeneration masterplan progresses. Smaller workshop and trade-counter stock is distributed through the inner-Portsmouth pockets. The structural picture is consistent demand-side strength, the cross-Solent logistics shed treats Portsmouth, Fareham, Eastleigh and the wider M27 belt as one labour market, and Hampshire industrial yields read tighter than the Portsmouth-only data suggests because lenders price the corridor not the city. The defence-supply-chain layer adds a covenant overlay that lenders treat favourably.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Portsmouth industrial",
      body: 'Strong across the asset class, one of the most competitive lender pools of any sector on the South Coast. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all compete on prime let industrial at Lakeside, Portsfield, Voyager Park and Walton Road at 6.5 to 7.5% pa, 65 to 75% LTV with strong covenants. Larger institutional B8 sheds above £5M facility size often route through Lloyds Real Estate Banking or Barclays Corporate Real Estate. Hampshire Trust Bank (locally HQ\'d, strong on Portsmouth), Allica Bank, <strong>Shawbrook</strong>, HTB and Cambridge & Counties dominate mid-market and owner-occupier industrial at 6.5 to 7.75% pa. <strong>InterBay Commercial</strong>, Together and Aldermore take the multi-let and value-add cases at 7.5 to 8.25% pa. Owner-occupier industrial enjoys best-in-class pricing of any sector, 6.0 to 7.25% pa for SMEs with two years\' clean accounts, EBITDA cover 1.3 to 1.5x. The Solent corridor labour-shed dynamic means underwriters routinely pull comparables from Fareham, Eastleigh and the wider M27 belt; they read the market as one. Defence supply-chain occupiers price at the keenest end on covenant strength.',
    },
    faqs: [
      {
        question: "What rate can I get on Portsmouth industrial investment?",
        answer: "Currently 6.0 to 7.75% pa for prime let industrial with strong covenants and five-plus years unexpired. Larger institutional B8 sheds at Lakeside and Portsfield with national logistics or defence supply-chain covenants price at the keenest end. Trade-counter with national covenant prices at 7.0 to 7.5%. Owner-occupier industrial with two years' clean accounts prices at 6.0 to 7.25% pa, the keenest pricing of any commercial sector.",
      },
      {
        question: "Can I fund an owner-occupier industrial purchase at Lakeside or Portsfield?",
        answer: 'Yes, typically 70 to 75% LTV on strong-covenant SME buyers via the <a href="/services/owner-occupier-commercial-mortgage">owner-occupier route</a>. EBITDA cover 1.3 to 1.5x. Hampshire Trust Bank, Allica Bank and Shawbrook are the most active mid-market owner-occupier desks; Lloyds, NatWest and Barclays compete on the larger end where borrowing is above £1M and the covenant is strong. Lakeside and Portsfield are well-known to underwriters as modern, well-located M27-corridor stock.',
      },
      {
        question: "How do lenders price the Solent corridor?",
        answer: "As one market. Large logistics operators (Whitbread, Lidl regional, DHL, Amazon last-mile) treat Portsmouth, Fareham, Eastleigh and the wider M27 belt as a single labour shed, and lenders follow them. Valuers pull comparables across the corridor and credit committees price the corridor not the city. Hampshire industrial yields read tighter than the Portsmouth-only sold-data and comparison set would suggest because the Fareham and Eastleigh end of the corridor pulls institutional pricing in.",
      },
      {
        question: "What about defence supply-chain occupiers, how do lenders treat them?",
        answer: "Favourably. Defence supply-chain occupiers tied to Royal Navy and BAE Systems contracts are treated as public-sector-adjacent covenants, lender comfort is high on revenue stability and contract tenure. Strong covenants on long FRI leases at Lakeside, Portsfield and Voyager Park price 25 to 50bps inside generic industrial because of the covenant overlay.",
      },
      {
        question: "Tipner regeneration zone, can I fund industrial there?",
        answer: "Yes, with caveats. Legacy industrial stock at Tipner Lane still trades and refinances, but lenders read the wider Tipner Regeneration masterplan carefully, planning and future-use risk feeds into the underwriting view. Specialist lenders (Shawbrook, HTB, Together) engage on regen-fringe industrial where the operator is established and the immediate-use position is stable. Pricing typically 7.5 to 8.5% pa at 65 to 70% LTV reflecting the transitional position.",
      },
    ],
  },

  // Leisure & hospitality
  "leisure-hospitality": {
    slug: "leisure-hospitality",
    name: "Leisure & Hospitality",
    metaTitle: "Leisure Commercial Mortgages Portsmouth | Gunwharf Quays, Southsea Seafront, Old Portsmouth, Hayling Island Fringe",
    metaDescription:
      "Trading-business commercial mortgage finance for leisure and hospitality property in Portsmouth, Gunwharf Quays, Southsea seafront (Osborne Road hotels), Old Portsmouth heritage hospitality (Spice Island), Albert Road independents, Hayling Island fringe. EBITDA, occupancy and RevPAR underwriting. LTVs 60 to 70%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Leisure & hospitality",
      h1: "Leisure and Hospitality Commercial Mortgages Portsmouth",
      lede:
        "Trading-business and investment finance for hotels, aparthotels, restaurant-led leisure and F&B-anchored venues across Portsmouth. Spinnaker Tower and Gunwharf Quays anchor the waterfront leisure economy, Southsea seafront and Osborne Road carry the hotel cluster, Old Portsmouth heritage hospitality runs through Spice Island and the High Street, Albert Road in Southsea holds the densest independent operator cluster, and the Hayling Island fringe adds a holiday-market overlay. Brand affiliation, operator track record and waterfront-versus-side-street location matter materially. LTVs 60 to 70%, rates 7.0 to 9.0% pa. <strong>Cynergy Bank</strong> is the most active named lender for Portsmouth independent hospitality.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£500K to £15M" },
      ],
    },
    overview: {
      h2: "Underwriting a Portsmouth leisure or hospitality commercial mortgage",
      body: [
        "Leisure and hospitality is the most operator-led segment of the commercial mortgage market. Underwriting tests <strong>EBITDA cover</strong> at 1.5 to 2.0x, wider than mainstream owner-occupier, because the trading is more volatile and recovery on default depends more on goodwill and operator continuity than on bricks-and-mortar value alone. The headline metrics a lender reads first are <strong>occupancy</strong>, <strong>ADR (average daily rate)</strong> and <strong>RevPAR (revenue per available room)</strong> for hotels and aparthotels; for gyms and F&B venues it is membership retention or covers per session against operating margin.",
        "Portsmouth's hospitality story is shaped by three demand drivers. <strong>Tourism flow</strong> through Spinnaker Tower, HMS Victory, the Mary Rose and Gunwharf Quays outlet shopping draws a strong day-trip and overnight-stay catchment from the wider South Coast and London commuter belt. <strong>Cruise and ferry traffic</strong> through Portsmouth International Port adds business and overnight stay demand. <strong>Student-led demand</strong> from around 28,000 University of Portsmouth students supports F&B and lower-end accommodation through term-time. Hotels split sharply by location and by brand affiliation. <strong>Gunwharf Quays</strong> holds the prime waterfront hotel and aparthotel cluster anchored by the outlet shopping environment and Spinnaker Tower. <strong>Southsea seafront and Osborne Road</strong> (PO5) carry the densest hotel cluster, mostly mid-scale and small independent stock along the seafront and the Common-facing streets. <strong>Old Portsmouth heritage hospitality</strong> runs through Spice Island and the High Street with listed-building stock. <strong>Albert Road (PO5)</strong> carries the densest independent F&B operator cluster. <strong>Branded franchise hotels</strong> price materially better than independents because the franchise system gives lenders comfort on demand stability and recovery options. Branded budget freehold prices at 7.5 to 8.5% pa at 65% LTV; independent boutique hotels in the same size band sit at 8.5 to 9.0% pa at 60 to 65% LTV. Aparthotels and serviced-apartment formats route through hotel-comfortable lenders, particularly active around Gunwharf Quays and the central waterfront.",
        "Worked example: a 58-bed branded franchise budget hotel in the central CBD, £5.4M valuation, EBITDA £775K. <strong>Shawbrook</strong> placed at 65% LTV, 7.25% pa, 25-year term, EBITDA cover 1.85x. Worked example two: an independent 25-bed Osborne Road boutique hotel near Southsea seafront, £1.95M valuation, EBITDA £235K. Independent route is narrower, <strong>Cynergy Bank</strong> is the lead named lender, OakNorth and Allied Irish Bank UK also realistic. Placed at 60% LTV, 9.0% pa, 20-year term, EBITDA cover 1.7x.",
        "Bars and licensed F&B venues route through licensed-trade specialist desks, see also our <a href=\"/property-types/pub-restaurant\">pub and restaurant page</a>. Albert Road, Osborne Road and Old Portsmouth (Spice Island) carry the bulk of Portsmouth's mid-scale F&B operator activity. Gyms split between corporate chain (PureGym, The Gym Group, corporate-financed, not brokered) and independent / small-chain operators where commercial mortgage lenders test membership economics and equipment depreciation alongside EBITDA.",
      ],
    },
    schemeTypes: {
      h2: "Leisure and hospitality assets we fund",
      items: [
        { label: "Gunwharf Quays waterfront hospitality", detail: "Hotels, aparthotels and F&B around Gunwharf Quays and the Spinnaker Tower. Premium waterfront cluster anchored by the outlet-and-leisure mixed-use environment." },
        { label: "Southsea seafront and Osborne Road hotels", detail: "Mid-scale and small independent hotel stock along Southsea seafront, Osborne Road and the Common-facing streets (PO5). Densest hotel cluster in the city." },
        { label: "Old Portsmouth heritage hospitality", detail: "Listed and conservation-area hospitality in Spice Island and the High Street (PO1). Heritage-comfortable lenders only." },
        { label: "Albert Road independent F&B", detail: "Albert Road (PO5) independent restaurant, bar and cafe cluster. Strong term-time student footfall plus year-round Southsea resident base." },
        { label: "Aparthotel and serviced apartments", detail: "Gunwharf Quays, central CBD and seafront serviced-apartment formats. Operator-letting model, investment if let on FRI to brand, trading if owner-operated." },
        { label: "Hayling Island fringe holiday hospitality", detail: "Hotels and overnight-stay stock on the Hayling Island fringe (technically Havant LA but in catchment). Holiday-market overlay rather than business or cruise demand." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Portsmouth leisure",
      intro:
        "Trading-business mortgage is the primary route for owner-operated leisure assets, on EBITDA cover. Investment mortgage applies where the asset is let on FRI to a brand or operator covenant. Bridge-to-let funds vacant hotel acquisition with refurbishment and repositioning before income stabilisation.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator hotels, gyms, aparthotels, leisure venues, EBITDA, occupancy and ADR underwritten." },
        { product: "Commercial investment mortgage", applicability: "Where the asset is let on FRI to a brand or operator covenant, Premier Inn franchise on a 25-year lease for instance." },
        { product: "Commercial bridge-to-let", applicability: "Vacant hotel acquisition with refurbishment or repositioning before income stabilisation; exit onto term trading-business mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing leisure freehold, typically funding an extension, refurbishment programme or onward acquisition." },
      ],
    },
    portsmouthContext: {
      h2: "The Portsmouth leisure economy",
      body: 'Portsmouth\'s leisure economy is anchored by three flows: tourism through Spinnaker Tower, HMS Victory, the Mary Rose and Gunwharf Quays outlet shopping drawing a strong day-trip and overnight-stay catchment from the wider South Coast and London commuter belt; cruise-and-ferry traffic through Portsmouth International Port; and student-led demand from around 28,000 University of Portsmouth students. Gunwharf Quays (PO1) carries the prime modern waterfront hotel and hospitality cluster, anchored by the outlet retail, the Spinnaker Tower visitor draw and a leisure-led mixed-use environment combining hotels, F&B and entertainment. Southsea seafront and Osborne Road (PO5) hold the densest hotel cluster, mid-scale and small independent stock running along the seafront and the Common-facing streets. Old Portsmouth heritage hospitality clusters around Spice Island and the High Street (PO1), listed-building stock with strong tourist draw. Albert Road (PO5) holds the densest independent F&B operator cluster on the back of the Southsea inner residential and student catchment. The Hayling Island fringe (technically Havant LA but in Portsmouth catchment) adds a holiday-market overlay rather than business or cruise demand. Recent change-of-use activity (the 26/00299/FUL Clocktower mixed-use leisure scheme being a typical example) shows active operator demand. The tourism flow means the hospitality market is less seasonal than typical regional UK, the year-round visitor draw of the historic dockyard attractions plus the Gunwharf outlet shopping supports demand twelve months a year.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Portsmouth leisure",
      body: '<strong>Cynergy Bank</strong> is the most active named lender for Portsmouth independent hospitality, the bank holds a deep South Coast independent-hotel book and will look at deals other lenders decline. Branded franchise hotels well-served by <strong>Shawbrook</strong>, Cambridge & Counties, Hampshire Trust Bank (locally HQ\'d, strong on Portsmouth) and selectively Allica Bank, typical 7.5 to 8.5% pa at 65% LTV with EBITDA cover 1.7x+. Independent hotels narrower, Cynergy Bank, OakNorth, Allied Irish Bank UK and Metro Bank are the realistic desks; ASK Partners on the structured-debt end above £5M. Aparthotels hotel-comfortable lenders only; appetite has broadened materially since 2024 as the operating model has matured, and Portsmouth\'s year-round tourism flow makes underwriting easier than in more-seasonal markets. Bars and licensed venues route through Cynergy Bank and specialist licensed-trade desks. Independent gym and fitness narrower still, Cynergy Bank and Together for the trickier cases. High-street commercial desks (NatWest, Lloyds, Barclays) typically decline trading-business hotel and gym; they will look at branded-hotel investment let on FRI to a brand covenant.',
    },
    faqs: [
      {
        question: "Can I get a commercial mortgage on a Portsmouth independent hotel?",
        answer: "Yes, typically 60 to 65% LTV on independent hotels with two-plus years' trading and EBITDA cover at 1.7x or better. Specialist underwriting on EBITDA, occupancy and ADR. Cynergy Bank is the most active named lender for Portsmouth independents; OakNorth and Allied Irish Bank UK also realistic. Mid-2026 rates 8.5 to 9.0% pa for the 22 to 50 bed bracket; pricing tightens on larger independents with stronger track record. The year-round tourism flow through Spinnaker Tower, the historic dockyard and Gunwharf Quays materially helps the underwriting story.",
      },
      {
        question: "What about pubs and bars specifically?",
        answer: 'See our dedicated <a href="/property-types/pub-restaurant">pub and restaurant commercial mortgage page</a>, these route through licensed-trade specialist desks (Cynergy Bank, ASK Partners) with barrelage, beer-tie status and freehold-versus-leasehold all material. Gastropubs with strong food revenue overlap with this leisure category but are scored differently.',
      },
      {
        question: "How is a Portsmouth hotel valued for lending?",
        answer: "Specialist RICS valuer using EBITDA-multiple methodology, typically 7 to 9x EBITDA for branded franchise, 5 to 7x for independent. Bricks-and-mortar value calculated separately and the lender takes the lower of the two figures. Brand affiliation typically adds 1.5 to 2x to the EBITDA multiple; AA Rosettes and Visit England rating influence the multiple at the margin. Gunwharf Quays waterfront and Southsea seafront bricks-and-mortar values tend to be high enough that the going-concern valuation rarely undershoots.",
      },
      {
        question: "Aparthotel, investment mortgage or trading-business?",
        answer: "Depends on the operating structure. Where the asset is let on a long FRI lease to the operator brand (a national aparthotel operator takes a 25-year FRI on the building, runs the operations, pays rent), it is investment, ICR-led at 140 to 150%. Where the owner operates the aparthotel themselves under a soft franchise or marketing agreement, it is trading-business, EBITDA-led at 1.5 to 2.0x cover. Portsmouth has both formats active, particularly around Gunwharf Quays and the central waterfront.",
      },
      {
        question: "Are gyms harder to fund than hotels?",
        answer: "On the independent end, yes. The lender pool is narrower, equipment depreciation is treated as a real cost rather than a non-cash add-back, and membership churn is scrutinised. Cynergy Bank and Together are the realistic desks; rates 8.5 to 9.0% pa at 60 to 65% LTV. Gyms with a 12-month-plus track record, strong retention, and a freehold premises fund cleanly; new openings or leasehold operations do not.",
      },
    ],
  },

  // Healthcare / care home
  "healthcare-care-home": {
    slug: "healthcare-care-home",
    name: "Healthcare & Care Home",
    metaTitle: "Care Home Commercial Mortgages Portsmouth | CQC, Queen Alexandra Hospital Halo, Cosham, North End, Drayton",
    metaDescription:
      "Specialist commercial mortgage finance for CQC-rated care homes, GP surgeries and dental practices in Portsmouth. Queen Alexandra Hospital halo across Cosham, North End and the A2030 Drayton and Farlington corridor. CQC-led underwriting, LTVs 60 to 70%.",
    hero: {
      eyebrow: "Healthcare",
      h1: "Care Home Mortgages Portsmouth",
      lede:
        "Trading-business mortgage finance for care homes, GP surgeries, dental practices and other healthcare property. CQC rating drives lender appetite on care; NHS contract security on dental and GP. Queen Alexandra Hospital at Cosham (Portsmouth Hospitals University NHS Trust) anchors the city's dominant healthcare cluster and supports a deep care-home and primary-care belt across North End and the A2030 Drayton and Farlington corridor. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa. Specialist sector, wrong desk first time can lose six weeks.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.5 to 9.0% pa" },
        { label: "Facility", value: "£500K to £8M" },
      ],
    },
    overview: {
      h2: "Underwriting a Portsmouth care home commercial mortgage",
      body: [
        "Healthcare in the Portsmouth commercial mortgage market splits cleanly. <strong>Care homes</strong>, operational properties with bed-by-bed economics, sit firmly in the trading-business mortgage world. CQC rating drives appetite; weighted-average bed value, occupancy, fee-rate mix (private versus local-authority funded) and staffing cost feed the underwrite. <strong>Medical and dental practices</strong> route either as owner-occupier (EBITDA cover 1.3 to 1.5x) or trading-business (sector-specialist underwrite at 1.5x), depending on size, structure and whether NHS contract value is being underwritten as quasi-collateral.",
        "Care home credit decisions hinge on the <strong>CQC rating</strong> first and everything else second. <strong>Good</strong> or <strong>Outstanding</strong> is the threshold for mainstream lender appetite at standard LTV and pricing. <strong>Requires Improvement</strong> can fund, but at tighter LTV (50 to 60%), wider pricing (8.75 to 9.0% pa) and a clear written remediation plan. <strong>Inadequate</strong> is unfundable on mainstream desks until the rating recovers; specialist private credit may engage, but rarely at sensible terms. Lenders also look at the bed mix, small homes (sub-30 beds) are harder to fund than 50 to 80 bed homes, because operating leverage matters; under 20 beds typically declines on high-street desks.",
        "Worked example: a 56-bed CQC-rated Good care home on the Drayton corridor, £3.8M valuation, EBITDA £495K, predominantly private-pay fee mix. <strong>Shawbrook</strong> placed at 65% LTV, 7.5% pa on a 5-year fix, 25-year term, EBITDA cover 1.85x. Worked example two: a Cosham dental practice freehold purchase by the existing principal partner, £1.35M, EBITDA £195K, mixed NHS / private revenue, half a mile from Queen Alexandra Hospital. Owner-occupier route at 75% LTV, 6.95% pa on a 20-year term, placed via a specialist health desk that will use NHS UDA contract value as additional security.",
        "Cosham, North End and the A2030 Drayton and Farlington corridor (PO6) are the dominant Portsmouth healthcare ancillary clusters. Queen Alexandra Hospital on Southwick Hill Road in Cosham draws a deep cluster of dental practices, GP surgeries, private clinics and allied health operators across the surrounding streets, with the wider primary-care belt running through North End on the back of the dense residential catchment. The A2030 corridor through Drayton and Farlington carries a particularly heavy care-home concentration, suburban plot sizes have supported purpose-built and converted care premises along the corridor.",
      ],
    },
    schemeTypes: {
      h2: "Healthcare asset types we fund",
      items: [
        { label: "Care home (owner-operator)", detail: "Across Cosham, North End and the A2030 Drayton and Farlington corridor. CQC Good or Outstanding for mainstream pricing." },
        { label: "Supported living and SEN housing", detail: "Specialist housing with care; institutional and SME operator. Local-authority contract security drives lender comfort." },
        { label: "GP surgery, owner-occupier and let", detail: "Owner-occupier purchase by a GP partnership; let GP surgery investment with NHS lease covenant." },
        { label: "Dental practice freehold", detail: "Owner-occupier dental, the Queen Alexandra Hospital halo in Cosham is the dominant location. NHS UDA contract value used as additional security on most placements." },
        { label: "Pharmacy", detail: "Independent pharmacy owner-occupier; let-to-pharmacy investment. Strong covenant, broad lender pool." },
        { label: "Health and wellness / private clinics", detail: "Physiotherapy, opticians, podiatry, private clinics drawing the Queen Alexandra Hospital halo. Owner-occupier route on EBITDA cover." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Portsmouth healthcare",
      intro:
        "Care homes use trading-business mortgages on EBITDA / occupancy / CQC underwriting. Smaller medical and dental routes via owner-occupier on EBITDA cover. Investment routes via standard commercial investment mortgage where there is a covenant tenant, most commonly an NHS lease on a GP surgery.",
      structures: standardStructures,
    },
    portsmouthContext: {
      h2: "The Portsmouth healthcare property estate",
      body: 'Queen Alexandra Hospital, run by Portsmouth Hospitals University NHS Trust, sits on Southwick Hill Road in Cosham (PO6) and is the dominant healthcare anchor for the entire city catchment, supporting a deep healthcare ancillary property cluster. The hospital draws dental practices, GP surgeries, private clinics and allied health operators across Cosham and into North End (PO2) along the dense residential corridor. The A2030 corridor running through Drayton and Farlington (PO6) holds a particularly heavy care-home concentration; suburban plot sizes along the corridor have supported purpose-built and converted care premises, with multiple sizeable homes operating between Drayton, Farlington and the Havant fringe. North End (PO2) carries a secondary cluster of GP surgeries and dental practices serving the dense terraced residential catchment. Outer Portsmouth suburbs hold smaller-cap GP surgeries that fund routinely on owner-occupier or NHS-lease investment routes. The Queen Alexandra Hospital halo extends beyond the city boundary north into the Havant and Waterlooville catchment, which feeds Portsmouth-led broker volume on healthcare deals.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Portsmouth healthcare",
      body: 'Care homes, <strong>Shawbrook</strong>, Cambridge & Counties and Hampshire Trust Bank (locally HQ\'d in Hampshire, strong on Portsmouth) dominate at 7.5 to 9.0% pa at 60 to 70% LTV; CQC Good or better is essential. Dental, Hampshire Trust Bank, Allica Bank\'s health desk and Together cover the range; NHS UDA contract value treated as quasi-collateral by the specialist desks. The Queen Alexandra Hospital-adjacent dental cluster in Cosham has been a steady refinance volume zone through 2024 to 2026. GP surgery, <strong>NatWest</strong>, <strong>Lloyds</strong> and the challengers compete on owner-occupier purchase by a GP partnership at near-best owner-occupier pricing (6.5 to 7.5% pa) given the strength of the implied NHS revenue. Pharmacy, well-served across multiple lenders given the strong covenant and the consistent fee structure. Independent specialist clinics narrower; route through Allica Bank or <strong>Shawbrook</strong> on owner-occupier at 7.5 to 8.5% pa.',
    },
    faqs: [
      {
        question: "What CQC rating do care home commercial mortgage lenders need?",
        answer: "Generally <strong>Good</strong> or <strong>Outstanding</strong> for standard terms (60 to 70% LTV, 7.5 to 9.0% pa). <strong>Requires Improvement</strong> can fund at tighter LTV (50 to 60%), wider pricing (8.75 to 9.0% pa) and with a clear written remediation plan from the operator. <strong>Inadequate</strong> is unfundable on mainstream desks until the rating recovers, typically a 12-month process under the CQC inspection cycle.",
      },
      {
        question: "How are Portsmouth care homes valued for lending?",
        answer: "Specialist RICS valuer using an EBITDA-multiple methodology, typically 6 to 8x trailing EBITDA, with weighted-average bed value calibration as a sense-check. Bricks-and-mortar value (Existing Use Value, EUV) calculated separately. The lender takes the lower of the going-concern value and the EUV. CQC Outstanding adds 0.5 to 1.0x to the EBITDA multiple; private-pay fee mix above 70% lifts it further.",
      },
      {
        question: "Can I get a dental practice commercial mortgage in Cosham?",
        answer: "Yes, this is one of the most active sub-niches in Portsmouth healthcare property. Owner-occupier route on EBITDA cover (1.3 to 1.5x). NHS UDA contract value treated as additional security by the specialist desks. Hampshire Trust Bank and Allica Bank's health desk are the most active. LTVs 70 to 75%; mid-2026 rates 6.5 to 8.0% pa for established principal-led practices. The Queen Alexandra Hospital-adjacent cluster in Cosham supports unusually strong patient throughput and consistent revenue stability, which feeds the lender comfort.",
      },
      {
        question: "What about a GP surgery let to an NHS partnership, investment route?",
        answer: "Yes, NHS lease covenant on a GP surgery let to a partnership prices very keenly. Typically 6.0 to 7.5% pa at 65 to 70% LTV. The implied NHS covenant strength gets the deal close to gilt-equivalent treatment by some desks. Owner-occupier purchase by the partnership uses the standard EBITDA-cover route.",
      },
      {
        question: "Small care homes, what is the floor?",
        answer: "Mainstream lender appetite drops sharply below 30 beds and effectively stops below 20. Operating leverage matters in care, staffing cost is largely fixed, so EBITDA per bed compresses materially on small homes. Specialist owner-operator routes can fund 25 to 30 bed homes at tighter LTV. Below that, private credit or direct vendor finance are the realistic routes.",
      },
    ],
  },

  // Pub & restaurant
  "pub-restaurant": {
    slug: "pub-restaurant",
    name: "Pub & Restaurant",
    metaTitle: "Pub Mortgages Portsmouth | Albert Road, Osborne Road, Old Portsmouth Spice Island, Gunwharf",
    metaDescription:
      "Trading-business mortgage finance for pubs, gastropubs, bars and restaurants in Portsmouth. Albert Road Southsea, Osborne Road, Old Portsmouth heritage pubs at Spice Island, Gunwharf Quays. Barrelage and EBITDA underwriting. LTVs 60 to 65%, mid-2026 rates 6.5 to 8.5% pa.",
    hero: {
      eyebrow: "Pub & restaurant",
      h1: "Pub and Restaurant Mortgages Portsmouth",
      lede:
        "Specialist licensed-trade commercial mortgages for freehold pubs, gastropubs, wet-led pubs and restaurants. Underwriting uses barrelage, full-trading EBITDA, license type, beer-tie status and freehold-versus-leasehold structure. Portsmouth's combination of tourist traffic, around 28,000 University of Portsmouth students and a high-density independent operator base on Albert Road makes it one of the more active licensed-trade markets on the South Coast. Different lenders dominate different sub-niches, getting the right desk first time matters more here than almost any other commercial sub-sector.",
      metrics: [
        { label: "LTV", value: "60 to 65%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£300K to £3M" },
      ],
    },
    overview: {
      h2: "Underwriting a Portsmouth pub commercial mortgage",
      body: [
        "Pubs and restaurants are the most specialised sub-segment of trading-business commercial mortgages, and the one where lender choice matters most. The credit decision turns on five variables: <strong>barrelage</strong> (annual beer volume, the proxy for wet-led trade), <strong>full-trading EBITDA</strong>, <strong>license type</strong> (premises, on-sales, off-sales, late-night, sui generis nightclub), <strong>beer-tie status</strong> (free-of-tie versus tied to a brewery or pub-co), and <strong>freehold-versus-leasehold structure</strong>. Different lenders dominate different sub-niches.",
        "<strong>Free-of-tie freehold pubs</strong> sit at the keenest pricing, the operator owns the asset outright and controls the supply contracts, giving the lender comfort on margin and recovery options. Typical 60 to 65% LTV at 8.0 to 8.5% pa. <strong>Tied pubs</strong> price 50 to 100bps wider because tied beer prices compress operator margin. <strong>Tenanted leasehold pubs</strong> are narrowest, only one or two specialist desks engage, and pricing reflects the limited recovery options. <strong>Gastropubs</strong> with strong food revenue (45%+ of turnover from food) sit closer to mainstream restaurant pricing, the food margin smooths what would otherwise be wet-led volatility.",
        "Worked example: a free-of-tie freehold gastropub on Albert Road in Southsea, £1.1M valuation, full-trading EBITDA £195K (60% food / 40% wet), 310 barrels per annum. <strong>Cynergy Bank</strong> placed at 65% LTV, 8.5% pa on a 5-year fix, 20-year term. EBITDA cover 1.78x. Worked example two: a heritage wet-led tied freehold in Spice Island, Old Portsmouth, £765K valuation, EBITDA £108K, 480 barrels per annum. Tighter case, placed via ASK Partners at 60% LTV, 9.0% pa, 15-year term.",
        "Albert Road and Osborne Road in Southsea (PO5) carry the densest independent F&B cluster, drawing both on year-round resident demand, summer seafront overflow and term-time student trade from around 28,000 University of Portsmouth students. Old Portsmouth heritage pubs around Spice Island and the High Street (PO1) carry the tourist-led and visitor-spend overlay tied to the historic dockyard and Spinnaker Tower draw. Gunwharf Quays adds a waterfront leisure-led F&B cluster anchored by the outlet retail and visitor flow. Portsmouth trades a healthy volume of change-of-use cases each year, retail-to-takeaway, retail-to-restaurant, restaurant-to-bar, these become commercial mortgage refinance candidates the moment the new lease completes and a six-month trading record is in place.",
      ],
    },
    schemeTypes: {
      h2: "Pub and restaurant assets we fund",
      items: [
        { label: "Free-of-tie freehold pub", detail: "Best-priced licensed-trade asset class. Owner-operator EBITDA-led, full margin control on supply contracts." },
        { label: "Tied freehold pub", detail: "Tied to brewery or pub-co supply contract; tighter operator margin, 50 to 100bps pricing penalty versus free-of-tie." },
        { label: "Tenanted leasehold pub", detail: "Operating leasehold from pub-co landlord; narrowest lender pool, specialist desks only." },
        { label: "Gastropub / restaurant-led pub", detail: "Food revenue 45%+ of turnover. EBITDA from food-led operations rather than pure wet-led barrelage." },
        { label: "Independent restaurant", detail: "Operator-led restaurant business and freehold. Trading-business underwrite on covers per session, margin and EBITDA. Albert Road, Osborne Road, Spice Island and Gunwharf clusters." },
        { label: "Pub with operator flat above", detail: "Semi-commercial overlap; some lenders treat as semi-commercial commercial mortgage at better LTV." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Portsmouth pubs and restaurants",
      intro:
        "Predominantly trading-business mortgage on owner-operator EBITDA. Investment route applies where the pub is let on FRI to a chain operator with covenant strength. Bridge-to-let funds vacant pub acquisition or change-of-use scenarios with a clear stabilisation plan.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator pubs, gastropubs and restaurants, EBITDA, barrelage and license type underwritten." },
        { product: "Commercial investment mortgage", applicability: "Pub or restaurant let on FRI to a chain operator (Greene King, Mitchells & Butlers, Stonegate, JD Wetherspoon)." },
        { product: "Commercial bridge-to-let", applicability: "Vacant pub acquisition, change-of-use deals or refurbishment before stabilisation; exit onto term trading-business mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing pub freehold; commonly funds extension, kitchen refurbishment or onward acquisition." },
      ],
    },
    portsmouthContext: {
      h2: "The Portsmouth licensed-trade economy",
      body: 'Portsmouth carries an active licensed-trade economy combining tourist trade (Spinnaker Tower, HMS Victory, the Mary Rose, Gunwharf Quays outlet shopping), student trade from around 28,000 University of Portsmouth students, naval-base footfall and a year-round resident base on a tightly-bounded island geography. Albert Road in Southsea (PO5) holds the densest central independent operator cluster, particularly strong on independent gastropubs, small-format restaurants and bars, with sustained term-time student trade plus year-round Southsea resident demand. Osborne Road (PO5) runs the secondary independent F&B spine closer to the seafront with a stronger hotel-and-leisure overlay. Old Portsmouth heritage pubs at Spice Island and the High Street (PO1) carry the tourist-led visitor-spend cluster tied to the historic dockyard and the Spinnaker Tower draw. Gunwharf Quays (PO1) holds a separate hospitality-led F&B cluster anchored by the outlet retail and waterfront leisure environment. The volume of change-of-use F&B activity is healthy, the 26/00299/FUL Clocktower mixed-use leisure scheme being a recent example, these become commercial mortgage refinance candidates the moment the new lease completes and a six-month trading record is in place.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Portsmouth pubs and restaurants",
      body: '<strong>Cynergy Bank</strong> is the most active named lender for Portsmouth licensed-trade, strong appetite on free-of-tie freehold pubs and gastropubs at 8.0 to 8.5% pa, 60 to 65% LTV. ASK Partners and Allica Bank\'s licensed-trade desk compete strongly on the same profile. Together covers more challenged cases (tied pubs, shorter trading history, secondary location) at wider pricing. <strong>Shawbrook</strong> takes selective licensed-trade where the operator track record is strong and food revenue dominates. Hampshire Trust Bank (locally HQ\'d, strong on Portsmouth) active on multi-site restaurant operator portfolios. Allied Irish Bank UK and Metro Bank engage selectively on hospitality-led freehold pubs. High-street commercial desks (NatWest, Lloyds, Barclays) do not engage with owner-operator pubs at all; they will look at investment-let pub assets where a chain operator has a long FRI lease in place.',
    },
    faqs: [
      {
        question: "Can I get a freehold pub commercial mortgage in Portsmouth?",
        answer: "Yes, free-of-tie freehold pubs are the best-priced licensed-trade asset class. Typical 60 to 65% LTV, mid-2026 rate 8.0 to 8.5% pa, term 15 to 20 years. Cynergy Bank and ASK Partners are the most active desks; both will look at established operator track records and gastropub-led food trade as positives. Portsmouth's tourist, student and resident demand mix strengthens the underwriting story versus comparable regional markets.",
      },
      {
        question: "What barrelage do lenders need?",
        answer: "Sufficient to support the EBITDA cover, there is no fixed barrelage threshold. What matters is profitable trading. A 200-barrel pub with strong food revenue and an EBITDA margin above 22% can fund where a 400-barrel wet-led pub with thin margin (12 to 15%) cannot. Lenders read margin and EBITDA cover, not barrelage as a standalone metric, but barrelage is the headline number in the underwriting pack.",
      },
      {
        question: "What about a pub I have traded for less than two years?",
        answer: "Specialist desks consider 12-month trading where the operator has prior pub experience and the deal otherwise makes sense. Typically tighter LTV (55 to 60%) and 50 to 75bps wider pricing. New operators with no licensed-trade background struggle materially, underwriters treat the operator risk as the dominant variable. Six months' trading is the practical floor and only viable where the operator has come from a multi-site pub group.",
      },
      {
        question: "Restaurants without alcohol, different underwrite?",
        answer: "Yes. Coffee shops, dessert lounges, dry restaurants and cafes route through restaurant-comfortable trading-business desks with no barrelage or license-type complications. Often closer to mainstream owner-occupier pricing, 8.0 to 8.5% pa at 65% LTV. Allica Bank and Shawbrook engage; Cynergy Bank also looks at the larger end. The dry-restaurant pool is broader than the licensed-trade pool.",
      },
      {
        question: "Tied pub or free-of-tie, does it matter for the mortgage?",
        answer: "Materially. Free-of-tie pricing is 50 to 100bps inside tied. Tied freeholds are still fundable but the pool narrows, Cynergy Bank, Together and ASK Partners will engage; high-street and most challenger banks decline because the tie compresses operator margin. If you are buying a tied freehold, factor in the cost of buying out of the tie versus accepting the wider mortgage pricing, sometimes the buy-out maths works.",
      },
    ],
  },

  // MOT / garage / petrol
  "mot-garage-petrol": {
    slug: "mot-garage-petrol",
    name: "MOT, Garage & Petrol Forecourt",
    metaTitle: "MOT Garage Mortgages Portsmouth | Walton Road, Hilsea, Voyager Park, Airport Service Road",
    metaDescription:
      "Specialist commercial mortgage finance for MOT centres, vehicle workshops, body shops and petrol forecourts in Portsmouth. Walton Road industrial estate, Hilsea industrial, Voyager Park, Airport Service Road (PO3). VOSA approval, environmental due diligence, sector-specialist lender pool. LTVs 60 to 70%, mid-2026 rates 7.0 to 8.5% pa.",
    hero: {
      eyebrow: "MOT, garage & petrol",
      h1: "MOT and Petrol Forecourt Mortgages Portsmouth",
      lede:
        "Specialist trading-business finance for MOT centres, vehicle workshops, body shops and petrol forecourts. Portsmouth garage and forecourt stock concentrates on Walton Road industrial estate (PO6), Hilsea industrial (PO2), Voyager Park (PO3) and the Airport Service Road corridor (PO3). VOSA approval, environmental due diligence, EBITDA cover and sector-specialist valuation all material. Wrong desk first time can lose six weeks. LTVs 60 to 70%, mid-2026 rates 7.0 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.0 to 8.5% pa" },
        { label: "Facility", value: "£250K to £2M" },
      ],
    },
    overview: {
      h2: "Underwriting an MOT or petrol forecourt commercial mortgage",
      body: [
        "MOT centres, vehicle workshops, body shops and petrol forecourts sit in a specialist trading-business niche where four variables drive credit committee. <strong>VOSA approval</strong> for MOT testing premises (the formal authority to operate, transferred or reissued on change of ownership). <strong>Full-trading EBITDA</strong> underwritten at 1.5 to 2.0x cover. <strong>Environmental status</strong> of the site, legacy contamination from fuel storage, waste oil or solvents on body shops. <strong>Sector-accredited RICS valuer</strong> view on bricks-and-mortar versus going-concern value, often diverging materially.",
        "Together dominates the Portsmouth garage and MOT mortgage market. They have meaningful flexibility on environmental risk that high-street and most challenger desks will not take, plus a deep South Coast automotive book built up over twenty years. <strong>Cynergy Bank</strong> covers cleaner cases where there is no environmental flag. <strong>Shawbrook</strong> takes selective workshop premises with no fuel storage history. Allica Bank's specialist desk engages on mid-market MOT and trade-counter overlap.",
        "Petrol forecourts are narrower still. <strong>Phase II contamination assessment</strong> (intrusive ground investigation, soil sampling, groundwater monitoring) is the critical-path item, typically £8 to £15K of cost and 4 to 6 weeks of timeline. Tank integrity report from a VPS or equivalent specialist sits alongside. Most mainstream commercial desks decline forecourts outright; Together and a small number of structured-lending desks engage. Typical LTV 55 to 65% reflecting the contamination-recovery risk.",
        "Worked example: a Walton Road MOT and workshop premises (PO6), £655K freehold purchase, full-trading EBITDA £108K, clean Phase I report. Together placed at 65% LTV, 8.85% pa on a 5-year fix, 18-year term, EBITDA cover 1.65x. Worked example two: an independent petrol forecourt on the Hilsea industrial fringe adjacent to the M275, £1.4M, EBITDA £185K. Phase II clean. Placed via Together at 60% LTV, 9.0% pa, 15-year term. Portsmouth MOT and garage stock concentrates on Walton Road industrial estate, Hilsea industrial, Voyager Park and the Airport Service Road corridor; smaller workshop pockets across PO1, PO2 and PO5 round out the supply.",
      ],
    },
    schemeTypes: {
      h2: "MOT, garage and petrol assets we fund",
      items: [
        { label: "MOT testing centre", detail: "VOSA-approved testing premises, owner-occupier most common. Existing VOSA approval taken as evidence of operational continuity." },
        { label: "Vehicle workshop and mechanic", detail: "General automotive workshops and servicing premises. Cleaner environmental profile than body shops or forecourts. Walton Road, Hilsea, Voyager Park and Airport Service Road locations." },
        { label: "Body shop and panel beating", detail: "Crash repair and panel beating premises. Solvent and paint storage history makes Phase I assessment standard, Phase II often required." },
        { label: "Petrol forecourt", detail: "Independent petrol stations. Phase II contamination assessment, tank integrity report and 4 to 6 week environmental timeline standard. Hilsea fringe and outer M275 corridor locations." },
        { label: "Tyre and exhaust centre", detail: "Quick-fit format independent operators. Cleaner environmental profile; closer to mainstream owner-occupier pricing." },
        { label: "Used-car sales lot", detail: "Vehicle sales premises, specialist underwriting on stock turnover, sales mix and EBITDA. MOT plus used-car combined sites common." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Portsmouth MOT, garage and petrol",
      intro:
        "Predominantly trading-business mortgage on owner-operator EBITDA. Specialist underwriting steps add 2 to 4 weeks versus mainstream commercial; environmental due diligence is the critical-path item on petrol and most body shops.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator MOT, garage, body shop, used-car lot, EBITDA, VOSA and environmental status underwritten." },
        { product: "Owner-occupier commercial mortgage", applicability: "Where the trading covenant is exceptionally strong and bricks-and-mortar value supports the LTV, workshop premises with no environmental flag and a 5-year-plus track record." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition where environmental remediation is needed before stable trading; exit onto term once Phase II clearance issued." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing MOT or forecourt freehold." },
      ],
    },
    portsmouthContext: {
      h2: "The Portsmouth garage and forecourt market",
      body: 'Portsmouth garage and forecourt stock concentrates on four practical clusters: Walton Road industrial estate (PO6), Hilsea industrial (PO2) along the M275 corridor, Voyager Park (PO3) and the Airport Service Road corridor (PO3). Walton Road carries dense workshop and MOT premises plus a strong automotive trade footprint. Hilsea industrial holds larger-format workshop and forecourt stock serving the M275 corridor. Voyager Park and the Airport Service Road run modern unit-format MOT and workshop premises along the former Portsmouth Airport site corridor. Smaller workshop and MOT stock is scattered across PO1, PO2 and PO5 inner-Portsmouth pockets. The volume of independent operators buying their site freehold sits typically in the £300K to £1.5M bracket. Larger forecourt and trade-counter automotive activity routes through the South Coast network beyond the Portsmouth city boundary, the M27 corridor and the Fareham and Waterlooville belt carry significant volumes. The Solent corridor labour-shed dynamic that benefits Portsmouth industrial extends to automotive premises, lenders read the corridor not just the city when pricing forecourt and workshop deals.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Portsmouth MOT, garage and forecourt",
      body: 'Together dominates the Portsmouth garage and MOT mortgage market, they accept environmental risk that most lenders will not, hold a deep South Coast automotive book and have specialist underwriters who know the sector well. Pricing 8.5 to 9.0% pa at 60 to 70% LTV. <strong>Cynergy Bank</strong> takes selective cases on cleaner sites without environmental history. <strong>Shawbrook</strong> covers workshop premises without fuel storage risk at 7.5 to 8.5% pa. Allica Bank\'s specialist desk engages on the mid-market end. Hampshire Trust Bank (locally HQ\'d in Hampshire) selectively on cleaner automotive trading premises. Petrol forecourt, Together plus a small number of structured-lending desks; LTV typically 55 to 65% reflecting contamination risk and longer environmental timeline. High-street commercial desks (NatWest, Lloyds, Barclays) decline the sector as a class.',
    },
    faqs: [
      {
        question: "Do I need VOSA approval to fund an MOT centre?",
        answer: "Existing VOSA approval helps materially, lenders take it as evidence of operational continuity and reduce key-person risk. New VOSA applications can fund at tighter terms if the operator has a strong personal track record (typically 5+ years as a tester or workshop manager). Centres with VOSA suspended or revoked typically cannot fund until the approval is reinstated.",
      },
      {
        question: "What environmental due diligence is needed for a petrol forecourt?",
        answer: "Phase I contamination assessment as standard (desktop review of historical use). Phase II (intrusive ground investigation including soil sampling and groundwater monitoring) typically required for fuel stations. Tank integrity report from a VPS or equivalent specialist. Total cost £8 to £15K, total timeline 4 to 6 weeks. The Phase II report drives the lender's view on residual environmental liability, a clean report unlocks the keenest available pricing.",
      },
      {
        question: "Can a body shop fund without environmental issues flagged?",
        answer: "Most body shops have legacy solvent and paint storage on site. A clean Phase I will be required; if anything flags, Phase II steps in. Together has the strongest body-shop appetite of any UK lender, they will engage on cases with limited contamination provided remediation is feasible. Body shops with active environmental enforcement notices effectively cannot fund until the notice is discharged.",
      },
      {
        question: "What term length on an MOT garage commercial mortgage?",
        answer: "Typically 15 to 20 years. Shorter than mainstream owner-occupier (20 to 25 years) reflecting the specialist asset and the operational risk inherent in single-key-person automotive businesses. Lenders rarely write 25-year terms in the sector because business succession is harder than in mainstream owner-occupier sectors.",
      },
      {
        question: "Used-car sales lot, pure trading or part-property deal?",
        answer: "Treated as part-property, part-trading. The bricks-and-mortar value of the site (forecourt, office, workshop) underwrites the security. The trading EBITDA underwrites the cover test. Combined MOT-plus-used-car sites are common across the Walton Road and Hilsea fringe and often fund cleaner than pure used-car because the MOT revenue smooths the volatility of vehicle sales.",
      },
    ],
  },

  // Nursery / school
  "nursery-school": {
    slug: "nursery-school",
    name: "Nursery & School",
    metaTitle: "Nursery Commercial Mortgages Portsmouth | Drayton, Farlington, Cosham, North End",
    metaDescription:
      "Specialist commercial mortgage finance for day nurseries, pre-schools and independent schools in Portsmouth. Drayton, Farlington, Cosham and North End suburban catchments. Ofsted-led underwriting, registered capacity and occupancy economics. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa.",
    hero: {
      eyebrow: "Nursery & school",
      h1: "Day Nursery and School Mortgages Portsmouth",
      lede:
        "Trading-business commercial mortgages for day nurseries, pre-schools and small independent schools across Portsmouth. Ofsted rating drives lender appetite; registered capacity, occupancy and fee mix feed the underwrite. Active across Drayton, Farlington, Cosham and North End where the suburban catchments support fee-paying day-care demand. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.5 to 9.0% pa" },
        { label: "Facility", value: "£500K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting a Portsmouth nursery commercial mortgage",
      body: [
        "Day nurseries are a stable, well-regulated trading-business asset class, and one where lender comfort has grown materially since the early-2020s sector consolidation. Underwriting tests four variables. <strong>Ofsted rating</strong> (Outstanding, Good, Requires Improvement, Inadequate) drives appetite at the threshold; most lenders need Good or Outstanding for standard terms. <strong>Registered capacity</strong> against current occupancy gives lenders comfort on revenue stability. <strong>Fee mix</strong>, private fees versus Free Early Years Education (FEEE) funded places, determines margin profile. <strong>Operator track record</strong> in the sector matters more here than in many other trading classes because nursery turnaround is slow.",
        "<strong>Outstanding</strong> nurseries fund at the keenest end, 65 to 70% LTV, 7.0 to 7.75% pa. <strong>Good</strong> sits at standard pricing, 60 to 70% LTV, 7.75 to 8.75% pa. <strong>Requires Improvement</strong> can still fund but at 50 to 60% LTV, 8.75 to 9.0% pa, with a credible Ofsted remediation plan and typically a 12-month trading history showing improvement trajectory. <strong>Inadequate</strong> is generally unfundable on mainstream desks until the rating recovers, typically a six-to-twelve-month process under the Ofsted re-inspection cycle.",
        "Active Portsmouth nursery clusters: <strong>Drayton (PO6)</strong> the affluent suburban catchment along the A2030 corridor where dual-income professional households support fee-paying day-care demand. <strong>Farlington (PO6)</strong> adjacent to Drayton with similar catchment characteristics and a heavy care-home and nursery suburban concentration. <strong>Cosham (PO6)</strong> serving the wider PO6 catchment plus Queen Alexandra Hospital staff households. <strong>North End (PO2)</strong> the inner-suburban dense terraced catchment, smaller-scale nurseries serving working family demand. Multi-site operators consolidating their portfolio into a single facility route through portfolio refinance with a sector-specialist lender on the desk. Worked example: a 55-place Drayton day nursery, Ofsted Good, £1.75M valuation, 91% occupancy, EBITDA £208K. <strong>Shawbrook</strong> placed at 65% LTV, 7.85% pa on a 5-year fix, 25-year term. Worked example two: a Cosham and Farlington two-site nursery group, £2.15M aggregate valuation, EBITDA £278K aggregate. Routed via portfolio refinance with Cambridge & Counties at 60% LTV, 8.55% pa.",
        "Independent schools are a smaller, more specialist niche in Portsmouth, served by Portsmouth Grammar School, Portsmouth High School and a small preparatory school footprint. Lender pool narrower; underwriting includes <strong>pupil roll trend</strong>, <strong>fee structure</strong> (annual fees, charitable status implications) and <strong>ISI inspection grade</strong>. Pricing wider than nursery, typically 6.5 to 8.5% pa. Cambridge & Counties, Reliance Bank and Hampshire Trust Bank are the realistic desks for £1M to £5M independent school freehold deals.",
      ],
    },
    schemeTypes: {
      h2: "Nursery and school assets we fund",
      items: [
        { label: "Single-site day nursery", detail: "Owner-operator nursery freehold purchase or refinance. Most common deal type, Drayton, Farlington, Cosham and North End catchments." },
        { label: "Multi-site nursery group", detail: "2 to 10 sites consolidated into a single portfolio facility. Aggregated EBITDA cover, blanket-charge structure common." },
        { label: "Pre-school and playgroup", detail: "Smaller-cap registered pre-school premises; often community-anchored, charitable structures common." },
        { label: "Independent primary or prep school", detail: "Specialist underwriting; pupil roll trend and ISI inspection grade material. Cambridge & Counties, Reliance Bank, Hampshire Trust Bank most active." },
        { label: "Special educational needs (SEN) provision", detail: "Specialist SEN settings; lender pool narrower but appetite present where local-authority contracts underpin revenue." },
        { label: "Forest school and outdoor nursery", detail: "Niche subset; specialist desks engage where the operator has a Good Ofsted and 18+ months trading." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Portsmouth nursery and school",
      intro:
        "Trading-business mortgage is the primary route. Multi-site groups route through portfolio refinance with a sector-specialist desk. Larger independent schools may route through structured commercial debt where the facility size justifies it.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Single-site owner-operator nursery or school, EBITDA, Ofsted and capacity underwritten." },
        { product: "Portfolio refinance", applicability: "Multi-site nursery groups, aggregated facility across 2+ sites with blanket-charge structure." },
        { product: "Owner-occupier commercial mortgage", applicability: "Where the trading is mature and the lender treats the case as standard owner-occupier on EBITDA cover, Ofsted Good or better, 3+ years trading." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise for refurbishment, capacity expansion or onward acquisition." },
      ],
    },
    portsmouthContext: {
      h2: "The Portsmouth nursery and school market",
      body: 'Portsmouth carries a dual-income professional catchment built on the Royal Navy and BAE Systems Maritime Services, Portsmouth City Council, Queen Alexandra Hospital and Portsmouth Hospitals University NHS Trust, the University of Portsmouth and the multi-tenant occupier base at Lakeside North Harbour. This drives sustained demand for fee-paying day-care across Drayton (PO6) where the affluent A2030-corridor suburb concentrates the highest-fee catchment, Farlington (PO6) adjacent with similar catchment characteristics, Cosham (PO6) serving the wider PO6 catchment and Queen Alexandra Hospital staff households, and North End (PO2) anchoring the inner-suburban dense terraced family catchment. Independent schools cluster around Portsmouth Grammar School (Old Portsmouth) and Portsmouth High School (Southsea), with a small preparatory school footprint distributed across the city. Outer Portsmouth suburbs and the wider Hampshire fringe hold pre-school and playgroup premises that fund routinely through trading-business mortgage. The two-university footprint feeds nursery demand from staff households as well, particularly in the PO6 corridor where many University of Portsmouth and Queen Alexandra Hospital staff live.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Portsmouth nursery and school",
      body: 'Aldermore, <strong>Shawbrook</strong>, Cambridge & Counties and Allica Bank all have meaningful nursery appetite. Mid-2026 pricing 7.5 to 8.75% pa at 60 to 70% LTV. Hampshire Trust Bank (locally HQ\'d in Hampshire, strong on Portsmouth) covers larger multi-site groups (5+ sites, £3M+ aggregate facility). SEN provision narrower, Shawbrook and specialist desks. Independent school pool narrower still, typically Cambridge & Counties, Reliance Bank and Hampshire Trust Bank at 6.5 to 8.5% pa. High-street commercial desks (NatWest, Lloyds, Barclays) rarely engage with single-site owner-operator nursery; they will look at let nursery investment where a multi-site operator takes a long FRI lease on the building.',
    },
    faqs: [
      {
        question: "What Ofsted rating do nursery commercial mortgage lenders need?",
        answer: "<strong>Good</strong> or <strong>Outstanding</strong> for standard terms (60 to 70% LTV, 7.5 to 8.75% pa). <strong>Requires Improvement</strong> can fund at 50 to 60% LTV and 8.75 to 9.0% pa with a clear written remediation plan and typically a 12-month trading history showing improvement. <strong>Inadequate</strong> is generally unfundable on mainstream desks until the rating recovers, usually six to twelve months under the Ofsted re-inspection cycle.",
      },
      {
        question: "Can I fund a multi-site nursery group?",
        answer: 'Yes, typically through <a href="/services/portfolio-refinance">portfolio refinance</a>. Aggregated ICR and EBITDA cover across the sites; blanket-charge or aggregated facility structure. Specialist desks like Cambridge & Counties, Aldermore and Hampshire Trust Bank are most active. We have placed 2-site, 4-site and 7-site nursery group facilities through this route across the South Coast.',
      },
      {
        question: "What occupancy do nursery lenders need?",
        answer: "Mature nurseries trade at 80%+ occupancy on registered capacity; lenders look for sustained occupancy at this level over the last 12 to 24 months. Underutilised nurseries (sub-65% occupancy) need a credible plan, capacity reduction, fee rebalancing or operator change, to fund. New nurseries with no trading record route through bridge-to-let plus term-out, with the term-out conditional on hitting agreed occupancy milestones.",
      },
      {
        question: "Independent school, different lender pool to nursery?",
        answer: "Yes, narrower and more specialist. Pupil roll trend over 3 to 5 years, ISI inspection grade, fee structure and charitable status are all material. Cambridge & Counties, Reliance Bank and Hampshire Trust Bank are the most active desks. Mid-2026 pricing 6.5 to 8.5% pa at 60 to 65% LTV. Larger independents (£5M+ facility) may route through structured commercial debt outside the broker panel.",
      },
      {
        question: "How is FEEE funding treated by lenders?",
        answer: "Free Early Years Education (FEEE / 30-hours funded) is treated as government-backed revenue, strong covenant equivalent, but at a margin profile materially below private fees. Lenders read the fee mix carefully. Nurseries with 60%+ private fees price at the keener end; FEEE-dominant nurseries (75%+ funded) sit wider because the margin is structurally compressed and capacity to absorb cost increases is tighter. Drayton and Farlington nurseries typically run with stronger private-fee weighting than the city average.",
      },
    ],
  },

  // Mixed-use
  "mixed-use": {
    slug: "mixed-use",
    name: "Mixed-Use",
    metaTitle: "Mixed-Use Commercial Mortgages Portsmouth | Commercial Road, Tipner Regeneration, Southsea Class E, Eastney",
    metaDescription:
      "Mixed-use commercial mortgage finance in Portsmouth, predominantly-commercial blocks with residential element. Commercial Road, Tipner Regeneration, Southsea Class E sub-divisions, Eastney rising mixed-use. LTVs to 75%, mid-2026 rates 6.5 to 8.5% pa.",
    hero: {
      eyebrow: "Mixed-use",
      h1: "Mixed-Use Commercial Mortgages Portsmouth",
      lede:
        "Single-facility commercial mortgages for predominantly-commercial mixed-use property, retail with residential, office with residential, leisure with operator residential. Lender appetite varies dramatically with the residential proportion; we know which lender writes which split. Active across Commercial Road, the Tipner Regeneration zone, Southsea Class E sub-divisions (the 26/00342/FUL archetype combining commercial retention with new residential) and rising mixed-use in Eastney. LTVs to 75%, mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "65 to 75%" },
        { label: "Cover test", value: "Blended ICR 140 to 155%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£250K to £10M" },
      ],
    },
    overview: {
      h2: "Underwriting a Portsmouth mixed-use commercial mortgage",
      body: [
        "Mixed-use covers any single asset combining commercial and residential tenure, from the classic shop-with-flat archetype (covered separately on our <a href=\"/property-types/semi-commercial\">semi-commercial commercial mortgage page</a>) up to large mixed-use development blocks with ground-floor retail and 20+ apartments above. Lender appetite varies dramatically with the <strong>residential proportion by floorspace and by income</strong>. <strong>Predominantly-commercial</strong> (under 40% residential by floorspace) is treated as commercial investment with a residential overlay, ICR-tested, mainstream commercial desks engage. <strong>Predominantly-residential</strong> (60%+ residential) prices closer to specialist BTL or semi-commercial pricing.",
        "The classic shop-plus-flat archetype is well-served and routes through the dedicated semi-commercial product where the residential element is 40%+. Larger mixed-use blocks (10+ apartments plus ground-floor commercial), common in Portsmouth along Commercial Road, the Tipner Regeneration pipeline and the Southsea Class E sub-division stock, require a different lender pool, <strong>Shawbrook</strong>, Cambridge & Counties and OakNorth on the larger end, with mainstream high-street active where the building is well-tenanted across both elements. Heritage and listed mixed-use, particularly Old Portsmouth Spice Island and High Street stock, routes through heritage-comfortable lenders only.",
        "Worked example: a Commercial Road mixed-use block, ground-floor retail let to a national coffee chain on a 10-year FRI, six apartments above let on ASTs at market rents, £2.25M valuation. Predominantly-commercial mix (55% commercial by floorspace, 65% commercial by income). <strong>NatWest</strong> placed at 70% LTV, 6.95% pa on a 5-year fix, 25-year term, blended ICR 145%. Worked example two: an Albert Road mixed-use block in Southsea, ground-floor independent retail on a 5-year lease, four apartments above on ASTs, £1.55M. Tighter cover; placed via <strong>InterBay Commercial</strong> at 70% LTV, 7.55% pa.",
        'Portsmouth has an active mixed-use regen pipeline. <strong>Commercial Road (PO1)</strong> carries continual mixed-use refinance and upper-floor conversion activity. <strong>Tipner Regeneration (PO2)</strong> is the major masterplan-led mixed-use zone combining residential, commercial and leisure across multiple phases on the Tipner Lane and Stamshaw fringe. <strong>Southsea Class E sub-division</strong> (the 26/00342/FUL archetype, sub-dividing a Class E building into two commercial units, retaining office and adding residential at second floor) is generating new mixed-use stock as Class E owners take advantage of the post-2020 flexibility to add residential above existing commercial. <strong>Eastney rising mixed-use (PO4)</strong> shows the same pattern further east, residential-heavy area with rising mixed-use conversion volume. These schemes generate commercial mortgage refinance candidates as new lettings stabilise.',
      ],
    },
    schemeTypes: {
      h2: "Mixed-use assets we fund",
      items: [
        { label: "Shop-plus-flat-above", detail: "Classic semi-commercial archetype, 40%+ residential by floorspace. See dedicated semi-commercial page for product mechanics." },
        { label: "Retail plus multi-flat block", detail: "Ground-floor retail with 4 to 10 apartments above; mid-cap commercial investment with blended income test. Common across Commercial Road and the Southsea Class E sub-division stock." },
        { label: "Office plus residential block", detail: "Ground or first-floor office with apartments above; Tipner Regeneration and Southsea Class E sub-division typical." },
        { label: "Pub plus operator flat", detail: "Pub or restaurant with operator residential above; semi-commercial overlap or trading-business depending on operator structure." },
        { label: "Listed-building mixed-use conversion", detail: "Old Portsmouth Spice Island and High Street stock; heritage-comfortable lenders only." },
        { label: "Large mixed-use blocks", detail: "10+ apartments plus commercial; portfolio-style underwrite, larger lender pool engagement, structured-debt territory above £8M. Tipner Regeneration typical." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Portsmouth mixed-use",
      intro:
        "Single-facility commercial investment mortgage is the primary route. Where the residential element exceeds 40% by floorspace, the deal qualifies for semi-commercial pricing. Bridge-to-let funds vacant or value-add mixed-use acquisition with refurbishment and re-letting before stabilisation.",
      structures: standardStructures,
    },
    portsmouthContext: {
      h2: "The Portsmouth mixed-use estate",
      body: 'Portsmouth has an extensive mixed-use stock distributed across the city centre and outer parade network on a tightly-bounded island geography that compresses the building grain unusually densely. Old Portsmouth and the Spice Island heritage core carry listed and conservation-area buildings with retail, hospitality or office on lower floors and conversion residential above. Commercial Road (PO1) runs continual Class E to mixed-use and Class E to residential upper-floor conversion activity (the 26/00475/FUL and 26/00469/FUL Class E retail works at 116 to 118 Commercial Road being typical examples) creating new mixed-use stock as upper floors are converted. Albert Road and Palmerston Road in Southsea (PO5) hold a deep independent shop-plus-flat stock. The district centres at Cosham High Street and North End all run on shop-plus-flat-above stock dating from the 1880s through the 1930s. The major regeneration mixed-use sits at Tipner Regeneration (PO2), a masterplan-led scheme combining residential, commercial and leisure across multi-phase delivery on the Stamshaw and Tipner Lane fringe. Southsea Class E sub-division (the 26/00342/FUL archetype) is generating new mixed-use through deliberate sub-division and residential addition to existing Class E buildings. Eastney (PO4) shows rising mixed-use conversion volume as the area transitions from purely residential. The volume of mixed-use stock is one of the city\'s defining commercial-property characteristics, the building grain is dense, plot sizes are small, and almost every parade has shop-plus-flat archetype somewhere on it.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Portsmouth mixed-use",
      body: 'Strong across most mixed-use sub-types in mid-2026. <strong>InterBay Commercial</strong> (OSB Group), Together, Aldermore, YBS Commercial and HTB dominate small-to-mid mixed-use at 7.5 to 8.5% pa, 65 to 75% LTV. <strong>Shawbrook</strong>, Cambridge & Counties and OakNorth on larger blocks at 7.75 to 8.5% pa. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest, well-tenanted predominantly-commercial mixed-use blocks at 7.0 to 7.75% pa. Hampshire Trust Bank (locally HQ\'d in Hampshire, strong on Portsmouth) competitive across the mid-cap range. Predominantly-residential mixed-use routes more naturally through InterBay Commercial and the specialist semi-commercial pool. Heritage and listed mixed-use, particularly Old Portsmouth Spice Island and High Street stock, needs heritage-comfortable lenders, Shawbrook, Cambridge & Counties and Together engage where the conservation cost is reasonable.',
    },
    faqs: [
      {
        question: "What residential / commercial split qualifies as mixed-use?",
        answer: "Anything with both commercial and residential income. Where residential is 40%+ by floorspace, semi-commercial pricing typically applies. Below 40%, treated as commercial investment with a residential overlay. The income mix matters as much as the floorspace mix, a building that is 45% residential by floorspace but 65% residential by income is priced as predominantly-residential.",
      },
      {
        question: "Can I get 75% LTV on a Portsmouth mixed-use block?",
        answer: "Yes on classic shop-plus-flat semi-commercial archetypes via InterBay Commercial or Together. Larger mixed-use blocks (10+ apartments plus commercial) typically cap at 70% LTV. Predominantly-commercial mixed-use with strong covenants on the commercial element can stretch to 75% with NatWest, Lloyds or Barclays. Vacant or part-let mixed-use caps at 60 to 65% via bridge-to-let.",
      },
      {
        question: "How are mixed-use assets valued for lending?",
        answer: "RICS Red Book valuation splits commercial value, residential value and total. Both ICR (commercial rent against interest) and AST income (residential rent against interest) feed into the blended affordability test. Some lenders use the lower of the two cover ratios; others blend by floorspace weighting. The valuation methodology can swing the loan size by 5 to 10%, we benchmark across multiple lenders to find the one whose methodology fits the asset best.",
      },
      {
        question: "What about listed and heritage mixed-use in Old Portsmouth?",
        answer: "Listed-building mixed-use (Spice Island, High Street stock, conservation-area buildings) routes through heritage-comfortable lenders, Shawbrook, Cambridge & Counties, Together. Slightly tighter LTV (typically 65% rather than 70%); otherwise comparable terms to non-listed mixed-use. The lender's quantity surveyor will scrutinise ongoing maintenance liability and any listed-building consent implications.",
      },
      {
        question: "Mixed-use bridge-to-let, viable strategy?",
        answer: 'Yes. A bridge funds acquisition plus refurbishment plus re-letting (commercial and residential both), with term-out onto mixed-use commercial mortgage at 12 to 24 months once both elements are stabilised. <a href="/services/commercial-bridge-to-let">Bridge-to-let</a> rates 8.5 to 9.0% pa for the bridge leg; term-out into 7.5 to 8.5% pa once stabilised. We model both legs at outset. The Southsea Class E sub-division and Tipner Regeneration pipelines commonly generate candidates for this strategy.',
      },
    ],
  },

  // Semi-commercial
  "semi-commercial": {
    slug: "semi-commercial",
    name: "Semi-Commercial",
    metaTitle: "Semi-Commercial Mortgages Portsmouth | Albert Road, Osborne Road, Cosham High Street, Commercial Road Parade",
    metaDescription:
      "Semi-commercial commercial mortgage finance in Portsmouth, shop-with-flat-above and other 40%+ residential mixed assets. Albert Road, Osborne Road, Cosham High Street, Commercial Road parade. Up to 75% LTV. We arrange the unregulated cases (let residential) and refer owner-occupied flat cases to a regulated broker. InterBay Commercial, Together, Shawbrook.",
    hero: {
      eyebrow: "Semi-commercial",
      h1: "Semi-Commercial Mortgages Portsmouth",
      lede:
        "Single-facility commercial mortgages for the shop-with-flat-above archetype and other residential-commercial mixed assets where residential floorspace is 40%+. Up to 75% LTV. Blended ICR around 145%. Mid-2026 rates 6.5 to 8.5% pa. We arrange the unregulated cases (let residential element); cases where the borrower or family member occupies the flat fall under the FCA's regulated mortgage perimeter and we refer those out to a regulated broker.",
      metrics: [
        { label: "LTV", value: "70 to 75%" },
        { label: "Cover test", value: "Blended ICR 140 to 150%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£150K to £2M" },
      ],
    },
    overview: {
      h2: "Underwriting a Portsmouth semi-commercial commercial mortgage",
      body: [
        "Semi-commercial is the term for commercial mortgages on mixed-use property where the residential element is at least 40% of total floorspace, typically the classic <strong>shop-with-flat-above</strong> archetype that defines Portsmouth's parade network, from Albert Road through to Cosham High Street. The product gives lenders comfort from the residential security (easier to re-let an empty flat than an empty retail unit), so semi-commercial routinely prices 50 to 100bps inside pure commercial investment on the same building.",
        "There is one structural complication every borrower must understand. Commercial mortgages are <strong>unregulated</strong> by definition and fall outside the FCA's regulated mortgage perimeter, which is what we arrange. <strong>If the borrower or an immediate family member personally occupies the residential element</strong>, the deal moves inside the regulated mortgage perimeter and stops being a commercial mortgage. We do not hold FCA authorisation because the products we arrange are unregulated, so where a deal falls into regulated territory we refer it to a regulated mortgage broker partner. We flag this at outset rather than discover it three weeks into legals. The classic case: the independent retailer who buys the freehold of their Albert Road shop and lives in the flat above sits inside the regulated perimeter; the same building bought as an investment with the flat let on an AST sits inside our unregulated commercial scope.",
        "Active Portsmouth semi-commercial spines: <strong>Albert Road (PO5)</strong> the densest central independent F&B and retail cluster in Southsea. <strong>Osborne Road (PO5)</strong> the secondary Southsea spine closer to the seafront with a stronger leisure overlay. <strong>Cosham High Street (PO6)</strong> the northern district-centre spine, classic Victorian shop-plus-flat stock. <strong>Commercial Road parade (PO1)</strong> the central city-centre spine, the densest large-cap semi-commercial frontage in the city. Most semi-commercial deals are £200K to £900K facility size. Worked example: an Albert Road shop with two flats above, £575K valuation, retail let on a 10-year FRI to a national coffee covenant, both flats let on ASTs (unregulated, in our scope). <strong>InterBay Commercial</strong> placed at 75% LTV, 6.95% pa on a 5-year fix, 25-year term, blended ICR 148%. Worked example two: a Cosham High Street shop-plus-three-flats with all flats let on ASTs to arms-length tenants, £745K, placed via Together at 70% LTV, 8.25% pa, blended ICR 145%.",
        "See our <a href=\"/services/semi-commercial-mortgage\">dedicated semi-commercial service page</a> for the product mechanics in detail. For purely residential blocks above commercial, see <a href=\"/property-types/hmo-block\">HMO blocks</a>; for predominantly-commercial buildings with smaller residential elements, see <a href=\"/property-types/mixed-use\">mixed-use</a>.",
      ],
    },
    schemeTypes: {
      h2: "Semi-commercial assets we fund",
      items: [
        { label: "Shop with one or two flats above", detail: "Classic Portsmouth parade archetype. Albert Road PO5, Osborne Road PO5, Cosham High Street PO6, Commercial Road PO1, North End PO2." },
        { label: "Restaurant or pub with operator flat (let)", detail: "Operator flat above licensed-trade premises let on AST. Sits as unregulated commercial. Owner-occupied flat cases fall outside our scope, referred to a regulated broker." },
        { label: "Office with residential conversion above", detail: "Office at ground or first floor with residential floors above (post-Class E to mixed change-of-use, common across the Southsea Class E sub-division pipeline)." },
        { label: "Vacant semi-commercial acquisition", detail: "Bridge-to-let funded acquisition with refurbishment and re-letting both elements before term-out." },
        { label: "Multi-flat above commercial", detail: "Larger semi-commercial blocks with 3 to 5 flats above ground-floor retail. Specialist underwriting on blended ICR." },
        { label: "Heritage and conservation conversions", detail: "Listed-building semi-commercial; heritage-comfortable lenders only. Old Portsmouth Spice Island and High Street stock." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Portsmouth semi-commercial",
      intro:
        "Single-facility semi-commercial commercial mortgage is the primary route on unregulated cases (residential element let on AST or to a limited-company tenant). Bridge-to-let funds vacant acquisition with agreed exit onto term semi-commercial. Cases where the borrower or family member will occupy the residential element fall outside the unregulated commercial scope, we refer those to a regulated mortgage broker partner.",
      structures: standardStructures,
    },
    portsmouthContext: {
      h2: "The Portsmouth semi-commercial estate",
      body: 'A deep, active product across Portsmouth. The classic parade spines, Albert Road PO5, Osborne Road PO5, Cosham High Street PO6, Commercial Road parade PO1 and North End PO2, all run on shop-plus-flat-above stock dating from the 1880s through the 1930s. Heritage stock in Old Portsmouth and around Spice Island adds further depth with listed-building considerations. Recent change-of-use activity along Commercial Road and the Southsea Class E sub-division pipeline (the 26/00342/FUL archetype sub-dividing Class E buildings with residential additions) has been creating new semi-commercial profiles as upper floors are retained or converted to flats. The semi-commercial market trades steadily across Portsmouth, these assets rarely sit vacant for long because the residential element is intrinsically lettable given the city\'s housing stock pressure, the tightly-bounded island geography limiting new supply, and the University of Portsmouth student catchment anchoring tenant demand.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Portsmouth semi-commercial",
      body: 'Strong on the unregulated cases we arrange. <strong>InterBay Commercial</strong> (OSB Group) is the most active named lender on the Portsmouth shop-plus-flat archetype, typical 7.5 to 8.25% pa at 70 to 75% LTV. Together covers more challenged cases (vacant flat at acquisition, weaker commercial covenant) at 8.25 to 9.0% pa. <strong>Shawbrook</strong>, Aldermore, YBS Commercial, HTB, Hampshire Trust Bank (locally HQ\'d, strong on Portsmouth) and Cambridge & Counties all have meaningful semi-commercial appetite on let residential cases. Each has a distinct LTV / minimum-loan / covenant profile, we know which fits what. Cases that fall inside the regulated mortgage perimeter (owner-occupied residential element) are out of scope for us and we refer those to a regulated broker.',
    },
    faqs: [
      {
        question: "What floorspace split qualifies as semi-commercial?",
        answer: "Residential typically <strong>40%+ by floorspace</strong>. Below that threshold, the deal is treated as pure commercial investment with wider pricing, sometimes 50 to 100bps wider. The split is measured by gross internal floor area; lenders' valuers calculate this from the RICS Red Book report, not from headline marketing particulars.",
      },
      {
        question: "What rate can I expect on a Portsmouth semi-commercial mortgage?",
        answer: "Currently <strong>6.5 to 8.5% pa</strong> at 65 to 75% LTV on standard shop-plus-flat. Specialists like InterBay Commercial and Together quote competitively to 75% LTV. Strong-covenant retail with an established AST history on the residential element prices at the keener end; vacant residential or short-lease commercial pulls pricing wider.",
      },
      {
        question: "Is semi-commercial regulated by the FCA?",
        answer: "Commercial mortgages are <strong>unregulated</strong> by definition and fall outside the FCA's regulated mortgage perimeter, and that is the territory we operate in. We do not hold FCA authorisation because the products we arrange are unregulated. Critical exception for semi-commercial: where the borrower or an immediate family member personally occupies one of the flats, the deal moves <strong>inside</strong> the regulated mortgage perimeter and is no longer in our scope. We refer those cases out to a regulated mortgage broker partner. Limited-company borrower with arms-length AST tenancies on the flat sits unregulated and is in our scope.",
      },
      {
        question: "What about HMOs above retail?",
        answer: 'HMO blocks above commercial route through a slightly different lender pool, see our <a href="/property-types/hmo-block">HMO block commercial mortgage page</a>. Southsea PO4 and PO5 plus North End PO2 carry the densest student HMO stock in the city, with Portsea PO1 also active. The product mechanics differ from standard semi-commercial, room-by-room ICR rather than blended building ICR, and a narrower lender pool.',
      },
      {
        question: "Can I refinance a semi-commercial onto buy-to-let?",
        answer: "No, buy-to-let products are sized against single residential dwellings let to AST tenants, not against commercial-plus-residential mixed assets. The semi-commercial route stays semi-commercial through any refinance. The exception is where the commercial element has been formally split off (separate title, separate access, separate utilities), at which point each element can be financed separately.",
      },
    ],
  },

  // HMO block
  "hmo-block": {
    slug: "hmo-block",
    name: "HMO Block",
    metaTitle: "HMO Mortgages Portsmouth | Southsea PO4/PO5, North End PO2, Portsea PO1 Student Belt",
    metaDescription:
      "Commercial mortgage finance for HMO blocks (5+ rooms) in Portsmouth, Southsea PO4/PO5 student belt, North End PO2 dense terraced conversion zone, Portsea PO1 mansard HMOs. Around 28,000 University of Portsmouth students drive the most active HMO conversion market in the network. Paragon, Together, Foundation Home Loans, Fleet Mortgages dominate. LTVs to 75%.",
    hero: {
      eyebrow: "HMO block",
      h1: "HMO Block Mortgages Portsmouth",
      lede:
        "Specialist commercial mortgages for licensed HMO blocks of five rooms or more, student-let and professional-let. LTVs to 75%, blended ICR 140 to 160%. Portsmouth runs the most active HMO conversion market in our network, the Southsea PO4 and PO5 student belt, the dense North End PO2 terraced conversion zone, and Portsea PO1 with its characteristic mansard-extension HMOs all carry deep stock anchored by around 28,000 University of Portsmouth students. Paragon Bank, Together, Foundation Home Loans and Fleet Mortgages dominate the panel. Many 7 to 9 bed sui generis HMOs. Mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "Up to 75%" },
        { label: "Cover test", value: "ICR 140 to 160%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£250K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting a Portsmouth HMO commercial mortgage",
      body: [
        "HMO blocks of five or more rooms route through commercial mortgage rather than mainstream buy-to-let. Underwriting is room-by-room, <strong>licensed HMO status</strong>, rent per room, occupancy, total rent against blended ICR. Most lenders cap loan at the lower of (LTV multiplied by value) or (ICR multiplied by rent divided by stress rate). LTVs of 75% are achievable on strongly-let HMO blocks with established occupancy and a clean licensing record.",
        "Portsmouth is the most active HMO conversion market in our network, driven by around 28,000 University of Portsmouth students plus a strong professional and naval-base tenant base, all sat on a tightly-bounded island geography that compresses demand into the existing terraced stock. The combined catchment generates persistent demand for shared-house accommodation, particularly across the PO4 and PO5 Southsea student belt and the PO2 North End dense terraced belt. <strong>Southsea PO4 (Manners Road, Fordingbridge Road, Lonsdale Avenue and the eastern Southsea grid)</strong> is the densest student HMO sub-market, the streets behind Albert Road and Southsea seafront carry saturated 5 to 9 bed converted Victorian and Edwardian terraces. <strong>Southsea PO5 (the inner Southsea grid around Albert Road and Palmerston Road)</strong> carries flatted HMO conversion plus student HMO stock combined with a strong term-time F&B economy. <strong>North End PO2</strong> is the inner-suburban dense terraced conversion zone, the streets between Kingston Road and the M275 carry the largest single concentration of HMO change-of-use activity in the city, including many 7 to 9 bed sui generis HMOs. <strong>Portsea PO1</strong> on the central island carries HMO stock with characteristic mansard upper-storey extensions creating extra rooms, the 26/00251/FUL archetype combining Class E ground with C4 upper converting to 7-bed sui generis HMO with mansard being a typical recent example.",
        "Portsmouth City Council operates additional HMO licensing across the densest HMO neighbourhoods. Existing licensed HMOs trade and refinance freely; new conversions in additional-licensing areas need licensing and may need full planning consent depending on the type of HMO. The 12-month commercial-mortgage-relevant planning pipeline includes a heavy share of HMO change-of-use activity, the 26/00496/FUL change of a Manners Road C4 to 8-bed sui generis HMO and the 26/00486/FUL Kirby Road C3 to 7-bed sui generis HMO being typical examples, evidence of ongoing supply rotation and active conversion volume.",
        "Worked example: a 7-bed Manners Road PO4 student HMO (Southsea seafront-belt), £535K valuation, £48,500 gross annual rent, 95% historical occupancy, all-inclusive let. Paragon Bank placed at 75% LTV, 6.85% pa on a 5-year fix, blended ICR 148%. Worked example two: a 5-property PO2 and PO4 professional and student HMO portfolio across North End and Southsea, £2.25M aggregate, £172K aggregate rent, mixed AST and per-room let. Routed via portfolio refinance with <strong>LendInvest</strong> at 70% LTV, 7.25% pa, aggregated DSCR.",
      ],
    },
    schemeTypes: {
      h2: "HMO block assets we fund",
      items: [
        { label: "Student HMO (5 to 8 rooms)", detail: "Southsea PO4 and PO5 student belt; the streets immediately around Albert Road and the University of Portsmouth campus. All-inclusive let typical, 90%+ occupancy norm." },
        { label: "Large sui generis HMO (7 to 9 rooms)", detail: "Many 7, 8 and 9 bed sui generis HMOs across PO2 North End, PO4 Southsea and PO1 Portsea, often with mansard upper-storey extensions. Specialist lender pool, premium pricing." },
        { label: "Professional HMO (5 to 8 rooms)", detail: "North End PO2 and the wider city HMO catchment. Higher per-room rents, slightly lower occupancy than student stock; naval-base and professional tenant mix." },
        { label: "Multi-property HMO portfolio", detail: "5+ HMO portfolio refinance via aggregated facility. Blanket-charge structure or property-by-property charges." },
        { label: "HMO conversion finance", detail: "Bridge-to-let funded conversion of houses to HMO, with licensing and planning consent path mapped before exchange. Heavy volume in North End PO2." },
        { label: "Above-shop HMO", detail: "HMO blocks above retail, semi-commercial / HMO hybrid; specialist underwriting on the combined commercial and residential income. Albert Road and Commercial Road common locations." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Portsmouth HMO blocks",
      intro:
        "HMO commercial mortgage is the primary route for licensed HMOs of 5+ rooms. Conversion projects route through bridge-to-let. Multi-property HMO portfolios consolidate via portfolio refinance with aggregated DSCR cover.",
      structures: [
        { product: "HMO commercial mortgage", applicability: "Licensed 5+ room HMOs, let to students or professionals on a per-room basis or all-inclusive." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition plus HMO conversion, with agreed term-out onto HMO mortgage once licensed and let." },
        { product: "Portfolio refinance", applicability: "5+ HMO portfolios consolidated into a single aggregated facility with blanket-charge or property-by-property structure." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing HMO block." },
      ],
    },
    portsmouthContext: {
      h2: "The Portsmouth HMO market",
      body: 'Portsmouth runs the most active HMO conversion market in our network, driven by around 28,000 University of Portsmouth students plus a strong professional and naval-base tenant base, all sat on a tightly-bounded island geography that compresses demand into the existing terraced stock. <strong>Southsea PO4 and PO5</strong> is the densest student HMO sub-market, the streets behind Albert Road and Southsea seafront (Manners Road, Fordingbridge Road, Lonsdale Avenue and the eastern Southsea grid) are saturated with 5 to 9 bed converted Victorian and Edwardian terraces let to students. <strong>North End PO2</strong> on the inner-suburban dense terraced belt carries the largest single concentration of HMO change-of-use activity in the city, the streets between Kingston Road and the M275 are running active conversion from C3 to C4 and sui generis HMO month on month. <strong>Portsea PO1</strong> on the central island carries HMO stock with characteristic mansard upper-storey extensions creating extra rooms, often pushing sui generis 7-bed-plus territory. Portsmouth City Council operates additional HMO licensing across the densest HMO neighbourhoods; the recent commercial-mortgage-relevant planning pipeline includes the 26/00496/FUL Manners Road C4 to 8-bed sui generis change, the 26/00486/FUL Kirby Road C3 to 7-bed sui generis change and the 26/00251/FUL Portsea Class E ground plus C4 upper to 7-bed sui generis with mansard, all live examples of the ongoing conversion flow. The high volume of large 7 to 9 bed sui generis HMOs makes Portsmouth a particular niche for Paragon, Together, Foundation Home Loans and Fleet Mortgages who all carry deep Portsmouth books.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Portsmouth HMO",
      body: 'Strong. Paragon Bank is particularly active on the Portsmouth student HMO belt and has built a deep PO4 and PO5 book over the past decade. Foundation Home Loans and Fleet Mortgages run substantial Portsmouth HMO programmes given the city\'s position as the densest HMO conversion market in the network. Together, <strong>InterBay Commercial</strong> (OSB Group), <strong>LendInvest</strong>, Cambridge & Counties and Aldermore all have meaningful HMO appetite. Each has a different room-count threshold (some go 4+, most 5+, some 6+ for premium pricing) and a different stance on student-versus-professional let. Mid-2026 pricing 6.5 to 8.5% pa at 70 to 75% LTV. LTV up to 80% on selective lenders with portfolio history and strong occupancy track record. Sui generis 7 to 9 bed HMOs route through the specialist large-HMO desks (Together, Foundation Home Loans, Paragon, Fleet Mortgages) where the room-count is comfortable. High-street commercial desks (NatWest, Lloyds, Barclays) typically decline HMO above five rooms; specialist commercial and BTL desks dominate.',
    },
    faqs: [
      {
        question: "What size HMO qualifies for commercial versus BTL pricing?",
        answer: "<strong>5+ rooms</strong> typically qualifies for HMO commercial mortgage. 4-room HMOs route through specialist BTL with HMO product. Above 7 rooms, the lender pool narrows further but Paragon Bank, Together, Foundation Home Loans and Fleet Mortgages all engage actively, particularly important given Portsmouth has many 7 to 9 bed sui generis HMOs. Above 10 rooms (large HMO), it becomes a fully specialist sub-segment with its own pricing logic.",
      },
      {
        question: "What about Portsmouth City Council HMO licensing?",
        answer: "Portsmouth City Council operates additional HMO licensing across most of the city's densest HMO neighbourhoods including the PO4 and PO5 Southsea student streets and the PO2 North End terraced belt. Existing licensed HMOs trade and refinance freely; new conversions in additional-licensing areas need licensing and may need full planning consent depending on the type of HMO (sui generis 7-bed-plus typically needs full planning). The licensing regime has supported HMO values materially by formalising stock. The publicly-accessible licensing register is a useful proxy for HMO stock counts at postcode level.",
      },
      {
        question: "Can I fund HMO conversion?",
        answer: 'Yes, via <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. Bridge funds acquisition plus conversion works; term-out onto HMO commercial mortgage once licensed and let. We map the planning and licensing path before exchange so the route to a licensed asset is clear. North End PO2 conversion activity is particularly heavy at the moment, the 26/00486/FUL Kirby Road and 26/00496/FUL Manners Road conversions being typical examples of the pipeline. Sui generis 7-bed-plus conversions almost always need full planning consent; we map both the planning and the licensing route before exchange.',
      },
      {
        question: "What ICR do HMO commercial mortgage lenders need?",
        answer: "Typically <strong>140 to 155%</strong> on aggregated room rent against interest cost stressed at a notional rate 1 to 2% above pay rate. Strong-occupancy student HMOs in PO4 and PO5 routinely pass at 145%. All-inclusive student lets sometimes carry a slightly tighter ICR (150 to 160%) because lenders factor in the utility and council tax costs the operator absorbs.",
      },
      {
        question: "Multi-property HMO portfolio, same lenders?",
        answer: 'Largely yes, but the product structure shifts to <a href="/services/portfolio-refinance">portfolio refinance</a>. Aggregated DSCR across the properties (typically 130 to 145%), single facility, blanket charge or property-by-property charges. Paragon Bank, LendInvest, Together, Foundation Home Loans and Fleet Mortgages all run active HMO portfolio programmes; the Portsmouth student-belt portfolio is one of the largest HMO portfolio refinance volumes in any UK city. 5+ properties is the typical threshold for portfolio pricing.',
      },
    ],
  },

  // Holiday-let portfolio
  "holiday-let-portfolio": {
    slug: "holiday-let-portfolio",
    name: "Holiday-Let Portfolio",
    metaTitle: "Holiday-Let Mortgages Portsmouth | Spinnaker Tower Short-Lets, Southsea Seafront Apart-Hotels, Hayling Island",
    metaDescription:
      "Specialist commercial mortgage finance for FHL (furnished holiday let) portfolios in Portsmouth. Spinnaker Tower and Gunwharf Quays short-let stock, Southsea seafront apart-hotels, Hayling Island fringe. Year-round tourism demand from the historic dockyard attractions and outlet shopping supports a less-seasonal short-let market than typical regional UK. LTVs to 70%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Holiday-let portfolio",
      h1: "Holiday Let Portfolio Mortgages Portsmouth",
      lede:
        "Specialist commercial mortgages for FHL (furnished holiday let) portfolios and apart-hotel stock across Portsmouth. Aggregated facility across 3+ properties on occupancy-and-ADR underwriting. Year-round tourism demand from Spinnaker Tower, HMS Victory, the Mary Rose and Gunwharf Quays outlet shopping underpins a less-seasonal short-let market than typical regional UK, with deep clusters in Gunwharf-area short-lets, Southsea seafront apart-hotels and Hayling Island fringe. LTVs to 70%, mid-2026 rates 7.0 to 9.0% pa. Mainstream commercial desks largely do not engage, wrong desk first time loses six weeks.",
      metrics: [
        { label: "LTV", value: "Up to 70%" },
        { label: "Cover test", value: "DSCR 130 to 145%" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£300K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting an FHL portfolio commercial mortgage",
      body: [
        "FHL (furnished holiday let) properties qualify for distinct treatment, they are commercially-let assets generating short-stay holiday income rather than long-term residential rent. Lender underwriting tests four variables. <strong>Average occupancy</strong> across the calendar year (sustained 55 to 65%+ is the Portsmouth threshold given the year-round tourism demand profile). <strong>Average daily rate (ADR)</strong> by season. <strong>Seasonality</strong>, strong-season weeks at high ADR matter as much as headline annual figure. <strong>Platform mix</strong>, Airbnb, Booking.com, direct, plus owner-managed versus agent-managed.",
        "Most FHL portfolio lenders need <strong>3+ properties</strong> to consider portfolio-refinance pricing. Single-asset FHL routes through specialist BTL with FHL product (different pool, different logic). Portfolio underwriting tests <strong>aggregated DSCR</strong> at 130 to 145% across all properties, the diversification of income across multiple FHLs gives lenders comfort that one bad season at a single property does not break the portfolio.",
        "Portsmouth FHL territory has a distinctive demand profile compared to typical UK seaside markets. Year-round tourism flow through the historic dockyard attractions (Spinnaker Tower, HMS Victory, the Mary Rose) and Gunwharf Quays outlet shopping means hospitality demand is structurally less seasonal than typical regional UK, the visitor draw generates overnight-stay demand twelve months a year, not just summer peaks. Spinnaker Tower and the wider Gunwharf Quays district carry the densest waterfront short-let cluster. Southsea seafront and the Common-facing streets hold a substantial apart-hotel and serviced-apartment cluster. The Hayling Island fringe (technically Havant LA but in Portsmouth catchment) adds a more seasonal seaside-holiday FHL overlay.",
        "Worked example: a 4-property Gunwharf-and-Spinnaker FHL portfolio, two Gunwharf serviced apartments and two Southsea seafront apart-hotel units, £1.85M aggregate valuation, £208K aggregate annual gross income, 70% blended occupancy, mixed Airbnb-and-Booking.com let. <strong>LendInvest</strong> placed at 65% LTV, 8.75% pa on a 5-year fix, 25-year term, aggregated DSCR 142%. Worked example two: a 3-property Southsea seafront apart-hotel portfolio in Osborne Road and Clarence Esplanade adjacent stock, £1.65M aggregate, £178K aggregate annual gross income, 74% blended occupancy. Placed via Together at 65% LTV, 8.55% pa, treating the apart-hotel structure as portfolio FHL with operator-management overlay.",
      ],
    },
    schemeTypes: {
      h2: "Holiday-let portfolio assets we fund",
      items: [
        { label: "Single-asset FHL", detail: "Single property let on FHL basis, typically a central serviced apartment, Gunwharf short-let or Southsea seafront apart-hotel unit. Routes through specialist BTL with FHL product rather than portfolio facility." },
        { label: "FHL portfolio (3+ properties)", detail: "Aggregated portfolio facility for 3+ FHLs across Portsmouth. DSCR-led, blanket-charge or property-by-property structure." },
        { label: "Gunwharf and Spinnaker short-let stock", detail: "Serviced apartments and short-lets in and around Gunwharf Quays and the Spinnaker Tower district. Strong year-round occupancy on the back of tourism flow and outlet shopping draw." },
        { label: "Southsea seafront apart-hotel portfolio", detail: "Seafront-adjacent apart-hotel operators along Osborne Road and Clarence Esplanade. Operator-management overlay; specialist desks." },
        { label: "B&B and boutique guesthouse", detail: "Operator-owned overnight-stay business; trading-business overlap with leisure category. Operator-occupied B&B routes through trading-business mortgage." },
        { label: "Hayling Island fringe holiday let", detail: "More seasonal seaside-holiday FHL stock on the Hayling Island fringe (Havant LA, in Portsmouth catchment). Treated as standard seaside FHL with seasonal demand profile." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for FHL portfolios",
      intro:
        "FHL commercial mortgage on a portfolio basis is the primary route for 3+ properties. Single-asset FHLs route through specialist BTL or commercial investment. Operator-occupied B&Bs route through trading-business mortgage with operator-residence allowance.",
      structures: [
        { product: "FHL portfolio mortgage", applicability: "3+ FHL properties aggregated under a single facility. DSCR-led at 130 to 145% on blended income." },
        { product: "Trading-business mortgage", applicability: "Operator-occupied B&B or guesthouse, EBITDA, occupancy and ADR underwritten." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition plus refurbishment of property for new FHL use; term-out onto FHL portfolio once stabilised." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise across an established FHL portfolio." },
      ],
    },
    portsmouthContext: {
      h2: "The Portsmouth FHL market",
      body: 'Portsmouth has a distinctive FHL market shaped by year-round tourism flow through the historic dockyard attractions and Gunwharf Quays outlet shopping rather than the purely seasonal seaside-holiday demand profile typical of UK coastal markets. Spinnaker Tower, HMS Victory and the Mary Rose draw a sustained twelve-month visitor flow; Gunwharf Quays outlet shopping and the wider waterfront leisure cluster adds another year-round footfall driver. Gunwharf Quays and the surrounding Spinnaker Tower district hold the densest waterfront short-let cluster, serviced apartments and apart-hotel units commanding premium pricing on the back of the marina-and-outlet environment and Spinnaker visitor draw. Southsea seafront and the Common-facing streets (Osborne Road, Clarence Esplanade) hold a substantial apart-hotel and serviced-apartment cluster, mid-scale stock with strong summer peak but also business-traveller and dockyard-visit overflow demand twelve months a year. The Hayling Island fringe (technically Havant LA but in Portsmouth catchment) adds a more seasonal seaside-holiday FHL overlay. Demand drivers: dockyard tourism, weekend short-break trade from the wider South East and London commuter belt, weekday business and conference traffic, and student-related visiting-family demand through term-time. Stock typically 1 to 3 bedroom converted apartments and apart-hotel units commanding £100 to £350 per night at peak; waterfront-view and Spinnaker-adjacent premium adds 25 to 40% to ADR.',
    },
    lenderAppetite: {
      h2: "Lender appetite for FHL portfolios",
      body: '<strong>LendInvest</strong>, Together and Hampshire Trust Bank (locally HQ\'d in Hampshire, strong on Portsmouth) are the most active specialist FHL portfolio lenders. Cambridge & Counties covers larger portfolios (5+ properties, £2M+ aggregate facility). Cumberland Building Society engages on selective South Coast stock. Select private credit on bespoke structures. Mid-2026 pricing 7.0 to 9.0% pa at 60 to 70% LTV. Mainstream commercial desks (NatWest, Lloyds, Barclays, Santander) largely decline FHL outright, they treat short-stay income as too volatile. Specialist BTL desks (Paragon Bank, Aldermore, Foundation Home Loans) cover single-asset FHL but not portfolio-aggregated structures. Get the right specialist first time, wrong desk loses six weeks. Portsmouth\'s year-round dockyard tourism flow means underwriters take Portsmouth FHL more comfortably than equivalent stock in more-seasonal markets.',
    },
    faqs: [
      {
        question: "Is an FHL a commercial mortgage or buy-to-let?",
        answer: "Single-asset FHL often routes through specialist BTL with FHL product, different pool, different logic. Portfolios of 3+ properties route through commercial portfolio facilities at better aggregated terms and DSCR-led underwriting. The threshold matters: at 2 properties, you are still in BTL territory; at 3, the portfolio commercial pool opens up.",
      },
      {
        question: "What occupancy do FHL lenders need?",
        answer: "Sustained <strong>55 to 65%+ annual occupancy</strong> across the portfolio is the Portsmouth threshold; the year-round dockyard tourism flow supports higher annualised occupancy than most regional markets. Strong-season weeks at high ADR matter as much as headline annual figure, a Gunwharf apart-hotel unit at 85% occupancy through summer peak weeks and 55% off-peak reads better than the same unit at flat 65% across all months. We model a full 12-month occupancy and ADR curve before submission so the lender sees the seasonality story explicitly.",
      },
      {
        question: "Are B&B and FHL the same lender pool?",
        answer: 'Overlapping but distinct. Operator-owned B&B with on-site owner residence routes as <a href="/services/trading-business-mortgage">trading-business mortgage</a> on EBITDA cover. Pure FHL with guest-only occupancy and no on-site operator routes as FHL portfolio on DSCR. Mixed structures (a B&B that also takes some FHL bookings) need careful structuring at outset to avoid landing in the wrong product.',
      },
      {
        question: "What about platform reliance, Airbnb concentration?",
        answer: "Lenders prefer multi-platform booking mix (Airbnb plus Booking.com plus direct) rather than single-platform reliance. Airbnb-only FHLs can fund but at slightly tighter terms, typically 5% lower LTV and 25 to 50bps wider pricing. The reasoning is that platform policy or fee changes can affect economics overnight; multi-platform diversification mitigates that. We benchmark booking mix in the underwriting pack.",
      },
      {
        question: "FHL tax changes, do lenders factor them in?",
        answer: "Yes. The April 2025 abolition of the FHL tax regime (FHLs now treated like ordinary residential lets for tax purposes) has fed into lender modelling, net rent assumptions tightened, DSCR cover ratios moved 5 to 10 percentage points wider for new applications. The change has not closed the FHL market, but it has narrowed pricing slightly and made operator-track-record more important. We flag the post-April-2025 net-yield position in every FHL submission.",
      },
    ],
  },
};

export function getAssetTypeDetail(slug: string): AssetTypeDetail | null {
  return assetTypeDetails[slug] ?? null;
}

export const ASSET_TYPE_LINKS = Object.values(assetTypeDetails).map((a) => ({
  slug: a.slug,
  name: a.name,
}));

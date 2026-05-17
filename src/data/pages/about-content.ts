/**
 * /about page content, Commercial Mortgages Portsmouth.
 *
 * Voice: editorial, broker-led, first-person plural ("we").
 *
 * Regulatory position (2026-05-17): Commercial mortgages are
 * UNREGULATED lending. The broker is NOT FCA-authorised because
 * the products arranged sit outside the FCA's regulated mortgage
 * perimeter. Where a deal would require FCA authorisation, we
 * refer to a regulated firm. Never claim FCA authorisation.
 *
 * Rate range mid-2026: 6.0-9.0% pa overall.
 */

export interface AboutContent {
  hero: {
    h1: string;
    lede: string;
  };
  story: {
    h2: string;
    body: string[];
  };
  numbers: Array<{ value: string; label: string }>;
  approach: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  credibility: {
    h2: string;
    body: string;
  };
}

export const aboutContent: AboutContent = {
  hero: {
    h1: "An experienced commercial mortgage broker for Portsmouth, the Solent and South Hampshire",
    lede:
      "Twenty years of UK property and commercial banking, including senior corporate banking roles on the lender side. £250M+ of unregulated commercial mortgages arranged across HMO portfolio refinance, defence supply chain industrial, Queen Alexandra Hospital healthcare ancillary, Gunwharf and Southsea leisure, owner-occupier and investment deals. Placed with the eight named lenders below and another eighty across our panel, including Allica Bank, Hampshire Trust Bank, Cambridge & Counties, YBS Commercial and Aldermore on the owner-occupier and SME freehold side and Paragon, Together, Foundation Home Loans and Fleet Mortgages on the HMO portfolio side, each active across the PO postcode footprint and the wider Solent corridor.",
  },

  story: {
    h2: "Specialist, not generalist",
    body: [
      "Our team has been working in property and commercial banking since 2005, and we have stayed in the same lane ever since. Two decades of UK commercial finance, including senior corporate banking roles, sit behind every introduction we make. Most of that career was spent on the <strong>lender side</strong>, writing credit papers, sitting in committees, declining loans and approving them. That experience shapes how we structure and present every Portsmouth commercial mortgage application now we work on the broker side. We know what credit committees need to see, what triggers a decline, and where there is genuine flexibility versus where there is not.",

      "We broker commercial mortgages and only commercial mortgages. Owner-occupier, commercial investment, semi-commercial (the unregulated cases), portfolio refinance, trading-business, commercial remortgage, commercial bridging and second-charge commercial. We do not place residential mortgages, residential buy-to-let, regulated bridging, car finance, asset finance or unsecured business loans. Those are different markets with different lenders and different broker specialisms. We would rather be excellent at one product family than mediocre across six. If you call us about a residential remortgage, regulated semi-commercial, or anything else that would require FCA authorisation, we will refer you to a regulated firm that handles it properly.",

      'Across the past decade we have arranged in excess of <span class="figure-inline">&pound;250M</span> of commercial mortgages. Facility sizes from <span class="figure-inline">&pound;150K</span> to <span class="figure-inline">&pound;10M+</span>, terms 5 to 25 years, and every mainstream sector relevant to the Portsmouth market: Southsea (PO4, PO5) HMO portfolio refinance and large sui generis HMO conversion, Voyager Park and Walton Road defence supply chain industrial owner-occupier, Lakeside North Harbour (PO6) multi-let office investment, Queen Alexandra Hospital healthcare ancillary including dental and allied-health freeholds, Gunwharf Quays leisure refinance, Albert Road and Osborne Road independent F&B owner-occupier, Cosham and Drayton care home refinance, Tipner Regeneration bridge-to-let, Old Portsmouth heritage hotel acquisition, and Commercial Road and Cascades Centre central retail freeholds. Our work covers the PO1 to PO6 postcode footprint and the wider PO11 Hayling Island fringe across the Havant borough boundary, plus the wider South Hampshire market that reads as a single M27 Solent corridor with the cross-Solent industrial market. See <a href="/case-studies" class="text-secondary font-medium hover:underline">our case studies</a> for representative recent placements.',

      'Portsmouth has three specialisms that shape our weekly deal flow, and the network HMO book in particular makes Portsmouth our highest HMO conversion city by volume. <strong>HMO portfolios and large sui generis conversion.</strong> The University of Portsmouth (c. 28,000 students) and the surrounding student catchment, combined with the dense terraced PO2 and PO4 stock, generates the most active HMO change-of-use planning pipeline in our network. Portsmouth City Council planning applications regularly include C3 to C4 and C4 to sui generis 7-bed-plus conversions, and stabilised HMO portfolios across Southsea, North End and Stamshaw refinance cleanly. Paragon, Together, Foundation Home Loans and Fleet Mortgages lead the lender competition on stabilised HMO portfolio refinance where the C4 or sui generis planning consent is already in hand. <strong>Defence supply chain industrial.</strong> The Royal Navy and BAE Systems Maritime Services cluster at Portsmouth Naval Base anchors a substantial defence supply chain industrial footprint across Voyager Park, Walton Road and the Airport Service Road PO3 light-industrial belt, with covenants that lenders price favourably on long-term public-sector-adjacent demand. Cambridge & Counties, Allica Bank, Aldermore and Hampshire Trust Bank lead the owner-occupier and SME freehold competition on this corridor. <strong>Queen Alexandra Hospital healthcare ancillary.</strong> Cosham and the Drayton care-home corridor concentrate a substantial healthcare and care-home freehold catchment anchored by Queen Alexandra Hospital. <strong>Cynergy Bank</strong>, HTB and Cambridge & Counties are active across dental, GP and care home owner-occupier. Hampshire Trust Bank, which is locally headquartered in Portsmouth, prices particularly cleanly on Hampshire SME freeholds where the borrower has clean filed accounts.',

      "<strong>We are not FCA-authorised because commercial mortgages on commercial property are an unregulated activity in the UK.</strong> They fall outside the Financial Conduct Authority's regulated mortgage perimeter. Our consumer credit and regulated mortgage referrals are handled by FCA-authorised partners. That position is not unusual. Most commercial mortgage brokers operate the same way, because the products themselves are unregulated by definition. What it does mean: the underwriting discipline we apply to every deal comes from years on the credit side of the table, not from a regulated obligation. The standards a credit committee expects do not change because the product sits outside FCA scope.",
    ],
  },

  numbers: [
    { value: "£250M+", label: "Commercial mortgages arranged" },
    { value: "90+", label: "Lenders on panel" },
    { value: "20+ yrs", label: "Property and commercial banking" },
    { value: "48 hrs", label: "Indicative terms" },
  ],

  approach: {
    h2: "How we work",
    items: [
      {
        label: "Specialist focus",
        detail:
          "Unregulated commercial mortgages only. No cross-selling, no loss-leader products, no residential, no regulated bridging, no unsecured. Single product family, deep expertise.",
      },
      {
        label: "Lender-side perspective",
        detail:
          "Twenty years sitting behind credit committees teaches you how to package an application the way a credit officer wants to read it. Fewer decline surprises, faster approval, sharper terms.",
      },
      {
        label: "Portsmouth market depth",
        detail:
          "We know the Portsmouth-active and Solent-corridor lender desks personally. NatWest, Lloyds, Barclays and Santander commercial banking out of the Commercial Road, Cosham and Gunwharf relationship desks. Shawbrook, InterBay Commercial and LendInvest cover the central retail, semi-commercial and HMO stock from Commercial Road through Albert Road into the Southsea, North End and PO2 conversion belt. Cynergy Bank prices well on the Gunwharf Quays and Old Portsmouth hospitality cluster and on healthcare ancillary across the Queen Alexandra Hospital catchment. Allica Bank, Hampshire Trust Bank and Aldermore take the owner-occupier file from Cosham healthcare and Albert Road F&B through to Voyager Park defence supply chain industrial. Hampshire Trust Bank is locally headquartered in Portsmouth, which we use to our clients' advantage on Hampshire SME freeholds. YBS Commercial leads on stabilised industrial investment along the M27 corridor; Cambridge & Counties prices keenly on Hampshire SME freeholds; Paragon, Together, Foundation Home Loans and Fleet Mortgages lead the lender pool on Southsea, North End and PO2 HMO portfolio refinance. We know which Hampshire RICS valuers each lender prefers and which comparable evidence the local panel will accept.",
      },
      {
        label: "Straight answers",
        detail:
          "If the deal does not work, wrong sector for that LTV, EBITDA cover too tight, ERC kills the remortgage maths, vendor's price unsupported by RICS comparables, you hear it on day one. Not after a wasted valuation fee.",
      },
      {
        label: "End-to-end execution",
        detail:
          "Single point of contact from initial enquiry through indicative terms, full application, RICS Red Book valuation, credit approval, solicitor instruction, completion and drawdown. You speak to one person; we coordinate everything else.",
      },
      {
        label: "Repeat clients",
        detail:
          "Most clients return for the next deal. Second freehold acquisition, portfolio addition, end-of-fix refinancing. The lender relationships we have built for you compound over time, which materially helps the next case.",
      },
    ],
  },

  credibility: {
    h2: "Why a specialist Portsmouth broker",
    body: 'The Portsmouth commercial mortgage market has genuine regional nuance: <strong>Portsmouth City Council</strong> as the unitary planning authority with its portal at <a href="https://publicaccess.portsmouth.gov.uk">publicaccess.portsmouth.gov.uk</a> covering the full PO1 to PO6 city footprint and an unusually long determination cycle that lenders read as a sequencing risk rather than a refusal risk; the Royal Navy and BAE Systems Maritime Services cluster at Portsmouth Naval Base anchoring the defence supply chain industrial belt across Voyager Park, Walton Road and the Airport Service Road PO3 light-industrial estates; Gunwharf Quays (Land Securities) as the dominant outlet-retail and leisure anchor with Spinnaker Tower, HMS Victory and the Mary Rose driving year-round tourism flow; Commercial Road, the Cascades Centre and Victoria Park / Guildhall Square as the central retail spine; Albert Road and Osborne Road for independent F&B and serviced offices; the Southsea inner (PO5) and seafront (PO4, PO5) leisure-hotel-holiday-let belt; Lakeside North Harbour at Cosham (PO6) as the IBM-legacy multi-tenant office park anchoring c. 1.5M sqft of B1 and B2 stock; Queen Alexandra Hospital as the dominant healthcare anchor with the Drayton and Farlington (PO6) care-home corridor along the A2030; the Tipner Regeneration mixed-use zone; and the dense PO2 (North End, Stamshaw) and PO4 (Southsea) terraced HMO conversion catchment that generates the highest HMO change-of-use volume in our network. The eight lenders we name and show logos for are <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, <strong>LendInvest</strong>, <strong>Cynergy Bank</strong>, <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong>, each with confirmed permission to display marks. Behind those sit another eighty lender relationships including Allica Bank, Hampshire Trust Bank (locally headquartered in Portsmouth), Cambridge & Counties, YBS Commercial and Aldermore on the Hampshire SME owner-occupier and industrial investment side, Paragon, Together, Foundation Home Loans and Fleet Mortgages on the Southsea, North End and PO2 HMO portfolio side, plus OakNorth, Octopus Real Estate and the long tail of specialist commercial mortgage desks. Hampshire Trust Bank, being headquartered in Hampshire, is consistently strong on Portsmouth deals; Cambridge & Counties prices particularly keenly on Hampshire SME freeholds where the borrower has clean filed accounts and a coherent deposit story. National brokers tend to default to whichever desk paid the broker conference fee that quarter. We default to whichever desk will fund your deal cleanest, and we will tell you which one that is on the first call.',
  },
};

/**
 * /faq page content, Commercial Mortgages Portsmouth.
 *
 * Four sections, 20 questions. Each answer 80 to 150 words for citable
 * passage-level depth. Required entities (used factually, never as
 * authorisation claims): mortgage, commercial mortgage, portsmouth, finance,
 * lender, broker, stamp duty, limited companies, refinance, residential.
 * Commercial mortgages are unregulated lending, do NOT claim FCA
 * authorisation. FAQ schema injected server-side.
 *
 * Voice: first-person plural ("we"). Rate range mid-2026: 6.0 to 9.0 pct pa.
 */

export interface FaqItem {
  question: string;
  answer: string; // HTML allowed
}

export interface FaqSection {
  heading: string;
  items: FaqItem[];
}

export const faqContent: FaqSection[] = [
  {
    heading: "The basics",
    items: [
      {
        question: "What is a commercial mortgage?",
        answer:
          'A commercial mortgage is long-term debt secured against income-producing or owner-occupied <strong>commercial</strong> property, offices, retail, industrial-warehouse, semi-commercial shop+flats, healthcare, hospitality and trading-business premises. In the Portsmouth market for mid-2026, typical facility size 150K to 10M pounds; LTV 65 to 75 percent; term 5 to 25 years; rate 6.0 to 9.0 percent pa. Repayment is normally monthly capital and interest on a reducing balance. The lender takes a first legal charge over the property and usually a personal or limited company guarantee. See <a href="/services">our commercial mortgage services</a> for the full eight-product breakdown across owner-occupier, investment, semi-commercial, portfolio refinance and trading-business.',
      },
      {
        question: "Do commercial mortgages sit inside the FCA regulated mortgage perimeter?",
        answer:
          'No. Commercial mortgages are unregulated lending and fall outside the FCA\'s regulated mortgage perimeter. <strong>We are not FCA-authorised</strong> because the products we arrange are unregulated by definition. We place owner-occupier, investment, semi-commercial (where the borrower does not occupy the residential element), portfolio refinance, trading-business, commercial remortgage, commercial bridging and second-charge commercial. Regulated cases (semi-commercial where the borrower occupies the residential element, regulated bridging, residential mortgages, consumer buy-to-let) are referred to an FCA-authorised firm. Most commercial mortgage brokers operate the same way, because the underlying products do not require FCA authorisation.',
      },
      {
        question: "Who is a commercial mortgage for?",
        answer:
          'Three primary audiences and our week splits roughly evenly across all three. <strong>Owner-occupier business buyers</strong>, buying or refinancing the freehold of premises their own business trades from. Cosham and Drayton dental and professional services, Albert Road and Osborne Road independent F&B operators, Voyager Park and Walton Road defence supply chain industrial trade-business owners, healthcare ancillary across the Queen Alexandra Hospital catchment, independent retail operators on Commercial Road, Albert Road and the Cascades Centre. <strong>Commercial property investors and landlords</strong>, buying or refinancing let commercial assets, single-let or multi-let, sometimes a portfolio of five or more, including the dense PO2 and PO4 HMO portfolios. <strong>Trading-business owner-operators</strong>, hotels, restaurants, pubs, day nurseries, care homes, buying the operational property and the going concern together. The product, the lender pool and the underwriting style are different across the three; the broker discipline is the same.',
      },
      {
        question: "What is the difference between a commercial mortgage and development finance?",
        answer:
          'A <strong>commercial mortgage</strong> funds the purchase or refinance of a completed, income-producing or owner-occupied commercial property. Funds drawn in a single tranche at completion. Term 5 to 25 years. Monthly capital and interest. <strong>Development finance</strong> funds construction or heavy refurbishment and is drawn in tranches against build-progress monitoring, with interest rolled or serviced and capital repaid at exit (sale or refinance) typically 12 to 24 months later. <strong>Bridge-to-let</strong> sits in between for short-term value-add, buy a vacant or under-let asset, refurbish or re-tenant, then term out onto a long-term commercial mortgage once stabilised. A Tipner Regeneration mixed-use refit or a vacant Commercial Road retail-to-Class E conversion is a typical bridge-to-let candidate. We broker commercial mortgages and bridge-to-let; we do not place pure ground-up development finance.',
      },
    ],
  },
  {
    heading: "Eligibility, deposit and pricing",
    items: [
      {
        question: "What deposit do I need for a commercial mortgage in Portsmouth?",
        answer:
          'Typically <strong>25 to 30 percent</strong> for owner-occupier and commercial investment. Semi-commercial often 25 percent. Trading-business (Gunwharf Quays leisure, Old Portsmouth heritage hotel, Albert Road restaurant, Drayton care home) sits tighter at <strong>30 to 40 percent</strong>, reflecting the specialist underwrite. The deposit must be genuine equity and traceable: accumulated retained profit in the trading limited company, sale proceeds of another asset, family gift with a written declaration, or pension drawdown if structured cleanly. Lenders will not accept a second loan secured against the same property as the deposit. Personal guarantees do not count as equity. On owner-occupier deals where EBITDA cover is comfortable, occasional 80 percent LTV products exist but pricing is materially wider, usually not the right answer.',
      },
      {
        question: "Can I get a commercial mortgage with limited trading history?",
        answer:
          'For owner-occupier, two years of clean filed accounts is the comfortable minimum. We routinely place deals with <span class="figure-inline">12 to 18 months</span> trading where the sector is well understood, dental, GP, pharmacy, established skilled trades, regulated professions. The lender wants to see growing turnover, stable margins and a credible business case for the freehold purchase. For commercial investment the test is tenant covenant and lease length, not borrower trading history, a five-year-old single-asset SPV with a defence supply chain covenant on the Voyager Park belt or a Queen Alexandra Hospital-adjacent healthcare tenant prices well. <strong>InterBay Commercial</strong>, <strong>Cynergy Bank</strong>, Allica Bank, Hampshire Trust Bank and Cambridge & Counties have meaningful flexibility on borrower history that high-street commercial desks will not entertain on the same case.',
      },
      {
        question: "Can a limited company take out a commercial mortgage?",
        answer:
          "Yes, and most commercial mortgages in the UK are written into <strong>limited companies</strong>. For commercial investment, a special-purpose vehicle (SPV) limited company is the standard structure: a single asset or portfolio held in a clean SPV with the SIC code 68209 (real-estate-related activities). For owner-occupier, the borrower is usually the trading limited company itself, with the property held on its balance sheet. Trading-business mortgages can be structured either way, into the trading company or into a separate property-holding limited company that leases the property back to the operating business. Lenders price both routes; the choice depends on tax efficiency, lender appetite and exit planning. We model the alternatives at indicative-terms stage.",
      },
      {
        question: "What rates are Portsmouth commercial mortgage lenders pricing at right now?",
        answer:
          'Mid-2026 ranges by product type, all inside the <span class="figure-inline">6.0 to 9.0 percent pa</span> band. Owner-occupier on strong covenants in defensive sectors (Cosham dental, Queen Alexandra Hospital ancillary healthcare, Lakeside North Harbour professional offices): <span class="figure-inline">6.0 to 7.5 percent</span> pa. Commercial investment with prime tenant on a long lease, including defence supply chain covenants on the Voyager Park industrial belt and Lakeside multi-let office investment: <span class="figure-inline">6.5 to 8.0 percent</span> pa. Semi-commercial shop+flat across Commercial Road, Albert Road and the PO2 conversion belt: <span class="figure-inline">7.0 to 8.0 percent</span> pa. Trading-business (Gunwharf Quays leisure, Old Portsmouth heritage hotel, Albert Road F&B, Drayton care home): <span class="figure-inline">7.5 to 9.0 percent</span> pa. HMO portfolio refinance across Southsea, North End and Stamshaw: <span class="figure-inline">7.0 to 8.5 percent</span> pa. Drivers: LTV, EBITDA or ICR / DSCR cover, lease length, tenant covenant, sector and borrower track record.',
      },
      {
        question: "What fees should I expect on a Portsmouth commercial mortgage?",
        answer:
          '<strong>Arrangement fee:</strong> 1 to 2 percent of the facility, often added to the loan rather than paid up-front. <strong>RICS Red Book valuation fee:</strong> 1,500 to 8,000 pounds depending on asset complexity, sector-specialist (Gunwharf Quays leisure, Old Portsmouth heritage hotel, Drayton care home, listed-building work in the Old Portsmouth conservation area, multi-let industrial at Voyager Park) and large investment lots cost more. <strong>Legal fees:</strong> both sides, your solicitor 2,500 to 8,000 pounds typical for commercial conveyancing, the lender\'s solicitor recharged at cost 1,500 to 4,000 pounds. <strong>Broker fee:</strong> usually included in the arrangement fee with no extra charge to the borrower; on complex specialist cases a separate broker fee is sometimes agreed. <strong>Exit / redemption fee:</strong> some 5-year fixes carry early-repayment charges of 3 to 5 percent in years 1 to 2, tapering. Total fee cost typically lands at 2 to 3 percent of the facility.',
      },
      {
        question: "Do I pay stamp duty on commercial property in Portsmouth?",
        answer:
          'Yes, Stamp Duty Land Tax (SDLT) applies to commercial property purchases in England, including Portsmouth. The non-residential bands run 0 percent on the first 150,000 pounds, 2 percent on the next 100,000 pounds, and 5 percent on the balance above 250,000 pounds. There is no first-time-buyer relief, no second-property surcharge and no annual tax on enveloped dwellings issue (commercial does not engage ATED). Mixed-use property, a semi-commercial shop with a flat above on Commercial Road or Albert Road, is taxed entirely on the non-residential rates if the commercial element is genuine, which is materially cheaper than residential stamp duty. SDLT is paid by the buyer at completion through the solicitor. SDLT is a cost the lender will not finance, it must come from your equity.',
      },
    ],
  },
  {
    heading: "Process and timing",
    items: [
      {
        question: "How long does a commercial mortgage take to complete in Portsmouth?",
        answer:
          'Indicative terms within <span class="figure-inline">48 hours</span> of a complete enquiry. Full completion typically <span class="figure-inline">4 to 8 weeks</span> for mainstream owner-occupier, commercial investment and semi-commercial. <span class="figure-inline">6 to 10 weeks</span> for trading-business cases (Gunwharf Quays leisure, Old Portsmouth heritage hotel, Albert Road F&B, Drayton care home) and HMO portfolio refinance reflecting the multi-property redemption sequencing across Southsea, North End and Stamshaw. The critical-path item is almost always the RICS Red Book valuation. Faster turnaround is possible on clean owner-occupier deals, fastest recent completion was <strong>28 working days</strong> from initial enquiry on a Lakeside North Harbour professional office acquisition, where the borrower had filed accounts ready, a tight legal pack and the lender had recent comparable approvals on file at the same Hampshire valuer.',
      },
      {
        question: "What is a RICS Red Book valuation and why does it matter?",
        answer:
          "The Royal Institution of Chartered Surveyors (RICS) Red Book is the global standard for property valuation. Every commercial mortgage lender requires a Red Book valuation by a RICS-registered surveyor on its panel before it will draw down funds. The valuer inspects the property, reviews leases and tenant covenants, examines comparable evidence in the local market, considers the physical condition, and reports on market value, vacant possession value, and (for trading-business) sometimes goodwill value separately. The lender lends against this figure, not against the price the buyer is paying or the seller is asking. Aggressive valuation assumptions are the most common reason commercial deals stall at credit committee. Hampshire valuers cost 1,500 to 8,000 pounds depending on asset complexity.",
      },
      {
        question: "Do I need a solicitor for a commercial mortgage?",
        answer:
          "Yes, and you need a solicitor experienced in commercial property and commercial finance, not your residential conveyancer. The lender instructs its own solicitor to act on the loan documentation; you instruct your solicitor to act on the property purchase or refinance. The two solicitors negotiate the facility agreement, the first legal charge, the debenture, the personal guarantee, the security pack, conditions precedent and CPSE replies. Standard commercial conveyancing runs three to four weeks from instruction; complex multi-asset cases longer. Legal fees both sides typically 4,000 to 12,000 pounds combined. We can recommend Portsmouth and Solent commercial property solicitors who are familiar with the lender desks on our panel, which materially helps the timeline.",
      },
      {
        question: "What documents will I need to apply?",
        answer:
          "<strong>Owner-occupier:</strong> two years of filed accounts, current management figures, a six-month projection, deposit proof, identity and address verification, the property sale memorandum, source-of-funds documents. <strong>Commercial investment:</strong> the lease, tenant covenant pack (tenant's accounts where relevant), rent roll, occupancy history, the SPV pack (incorporation, beneficial ownership, accounts if seasoned), deposit proof, identity. <strong>Trading-business:</strong> sector-specific evidence on top of the owner-occupier pack, CQC inspection reports for care, Ofsted for nursery, NHS contract value for dental, occupancy and ADR for hotel, barrelage and licence for pub. We send a tailored document checklist on the first call.",
      },
    ],
  },
  {
    heading: "Portsmouth-specific questions",
    items: [
      {
        question: "Which planning portal do I use for Portsmouth commercial property?",
        answer:
          'One planning authority covers the entire Portsmouth commercial market. <strong>Portsmouth City Council</strong> is the unitary planning authority and the portal sits at <a href="https://publicaccess.portsmouth.gov.uk">publicaccess.portsmouth.gov.uk</a>. The portal covers the full PO1 to PO6 city footprint, from Old Portsmouth, Portsea and Gunwharf through Commercial Road, Southsea, Eastney, North End, Stamshaw, Tipner, Hilsea, Cosham, Drayton and Farlington. Filter by application type "Full" and use class E(a) to E(g), Sui Generis (hotel, pub, hot-food takeaway) or C4 / Sui Generis (HMO) to surface commercial-relevant decisions. The council has an unusually long determination cycle, lenders read this as a sequencing risk rather than a refusal risk, the underlying approval rate once decisions land is high. Where a property purchase depends on a planning consent, lenders want sight of the decision notice and any conditions before drawdown. The PO11 Hayling Island fringe sits under Havant Borough Council, a different portal.',
      },
      {
        question: "Which Portsmouth postcodes do you cover?",
        answer:
          'The full PO postcode footprint that touches the Portsmouth commercial market. <strong>PO1</strong> covers Old Portsmouth, Portsea, Gunwharf Quays and the Commercial Road city centre. <strong>PO2</strong> covers North End and Stamshaw, the densest HMO conversion zone and the Tipner Regeneration belt. <strong>PO3</strong> covers Copnor, Baffins and the Airport Service Road light-industrial belt. <strong>PO4</strong> covers Southsea (terraced HMO belt, leisure-adjacent) and Eastney. <strong>PO5</strong> covers Southsea inner (boutique retail, Albert Road F&B, serviced offices and the seafront). <strong>PO6</strong> covers Cosham (Lakeside North Harbour, Queen Alexandra Hospital), Drayton and Farlington. We also cover the <strong>PO11</strong> Hayling Island fringe across the Havant borough boundary, the wider M27 Solent corridor with the cross-Solent industrial market, and the South Hampshire SME and industrial belt that lenders price as a single market.',
      },
      {
        question: "How does defence supply chain industrial lender appetite work in Portsmouth?",
        answer:
          'The Royal Navy and BAE Systems Maritime Services cluster at Portsmouth Naval Base anchors a substantial defence supply chain industrial footprint across Voyager Park, Walton Road and the Airport Service Road PO3 light-industrial belt. Lenders read defence supply chain covenants and the public-sector-adjacent demand favourably because the underlying contracts are long-term, the tenant base is sticky and the trading covenants are stable through cycle. Cambridge & Counties, Allica Bank, Aldermore and Hampshire Trust Bank lead the owner-occupier and SME freehold competition on this corridor; YBS Commercial is strong on stabilised investment lots; <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> compete on multi-let industrial. Pricing for a stabilised single-let B8 unit at Voyager Park with three years of unexpired lease to a defence supply chain covenant: <span class="figure-inline">6.5 to 7.5 percent</span> pa at 65 to 70 percent LTV. Multi-let estates and shorter-WAULT cases sit wider.',
      },
      {
        question: "How active is Portsmouth on HMO conversion finance compared to the wider network?",
        answer:
          'Portsmouth is our highest HMO conversion city by volume. The University of Portsmouth (c. 28,000 students), combined with the dense terraced PO2 (North End, Stamshaw) and PO4 (Southsea) stock and the Solent feeder student catchment, generates the most active C3 to C4 and C4 to sui generis 7-bed-plus change-of-use planning pipeline in our network. The Portsmouth City Council planning portal regularly lists 7-bed and 8-bed sui generis HMO conversions and Class E ground-floor with C4 upper-floor combined schemes. Stabilised HMO portfolios with existing C4 or sui generis consents are financeable cleanly at 65 to 75 percent LTV. <strong>InterBay Commercial</strong>, Paragon, Together, Foundation Home Loans and Fleet Mortgages lead the lender pool; pricing for a stabilised portfolio: <span class="figure-inline">7.0 to 8.0 percent</span> pa at 70 to 75 percent LTV. Speculative C3-to-C4 conversion finance is much harder to place without an existing planning consent in hand. We need to see the planning consent or lawful-development certificate before submitting to credit.',
      },
      {
        question: "Is Hampshire Trust Bank really headquartered in Portsmouth?",
        answer:
          'Hampshire Trust Bank is headquartered in Hampshire and is consistently strong on Portsmouth deals. It is not one of the eight lenders we name and show logos for on this site, but it sits prominently behind those eight as one of our most active challenger relationships for Portsmouth owner-occupier and SME freehold cases. The local headquarters means the credit and relationship teams understand the Portsmouth market, the PO postcode catchment, Hampshire RICS valuer dynamics and the Hampshire SME borrower profile in detail. We use that to our clients\' advantage where the deal suits the lender\'s appetite: clean filed accounts, defensive sector, sensible LTV, coherent deposit story. Pricing for a stabilised Hampshire SME owner-occupier freehold with two years of clean accounts: <span class="figure-inline">6.5 to 7.5 percent</span> pa at 70 to 75 percent LTV on a 20-year amortisation.',
      },
      {
        question: "How does Queen Alexandra Hospital healthcare ancillary lender appetite work?",
        answer:
          'Queen Alexandra Hospital at Cosham (PO6) is the dominant healthcare anchor for Portsmouth, run by Portsmouth Hospitals University NHS Trust, and the Cosham and Drayton corridor concentrates a substantial private-healthcare freehold catchment alongside a thick care-home cluster along the A2030. Dental, GP, pharmacy and allied-healthcare freeholds with NHS contract evidence or a stable private-fee mix are a defensive sector for lenders. <strong>Cynergy Bank</strong>, HTB and Cambridge & Counties are the active desks on healthcare and dental owner-occupier; Cambridge & Counties prices particularly cleanly on Hampshire SME freeholds. Pricing for a stabilised dental owner-occupier with two years of clean accounts and an NHS GDS contract: <span class="figure-inline">6.0 to 7.0 percent</span> pa at 70 to 75 percent LTV on a 20 to 25 year term. The lender underwrites the CQC or GDC rating, the contract length and the principal\'s CV.',
      },
      {
        question: "How does the Gunwharf Quays and Old Portsmouth hospitality cluster price?",
        answer:
          'Gunwharf Quays is Portsmouth\'s flagship outlet-retail and waterfront-leisure anchor, owned by Land Securities and supported by year-round tourism flow from Spinnaker Tower, HMS Victory, the Mary Rose and the wider Old Portsmouth heritage hospitality cluster. The lender pool tightens to hospitality specialists on Gunwharf and Old Portsmouth restaurant-with-rooms and boutique-hotel cases: <strong>Cynergy Bank</strong>, Allied Irish Bank UK and Metro Bank lead, each pricing on EBITDA cover, ADR, occupancy track record and the building condition. Pricing for a stabilised independent restaurant-with-rooms in the Gunwharf or Old Portsmouth catchment with three years of clean accounts: <span class="figure-inline">7.5 to 8.5 percent</span> pa at 65 to 70 percent LTV on a 15 to 20 year term. Long-leasehold-under-freehold structures are common on the Gunwharf estate; the head-lease term matters to the underwrite. Listed-building work in the Old Portsmouth conservation area triggers a specialist heritage valuation premium.',
      },
    ],
  },
];

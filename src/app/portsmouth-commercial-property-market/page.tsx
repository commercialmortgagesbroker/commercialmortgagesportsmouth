/**
 * Editorial flagship, The Portsmouth commercial property market in 2026.
 *
 * Long-form market piece targeting the head term "Portsmouth commercial
 * property market 2026". Designed to host the contextual outbound link
 * to the parent brokerage at
 * commercialmortgagesbroker.co.uk/locations/hampshire/portsmouth inside
 * the lender-pool section, framed as the wider regional network we sit
 * inside.
 *
 * Voice: editorial, broker-led, first-person plural. No em dashes. Only
 * the 8 named lenders are bolded on this site: Shawbrook, InterBay
 * Commercial, LendInvest, Cynergy Bank, Lloyds, NatWest, Barclays and
 * Santander. Hampshire Trust Bank is named without bolding but
 * emphasised as the locally-headquartered Hampshire challenger. Other
 * panel names (Allica Bank, HTB, Cambridge and Counties, YBS Commercial,
 * Aldermore, Paragon, Together, Foundation Home Loans, Fleet Mortgages,
 * OakNorth) are named without bolding. Rates 6.0 to 9.0% pa overall. No
 * FCA-authorisation claims. Commercial mortgages on non-dwelling
 * property are unregulated.
 *
 * Data: real Portsmouth economy figures (c. 210,000 population, the only
 * UK island city, densest local authority outside London, Royal Navy
 * and BAE Maritime defence anchor at Portsmouth Naval Base, University
 * of Portsmouth c. 28,000-student footprint, Gunwharf Quays leisure-led
 * outlet, Lakeside North Harbour IBM-legacy office park at Cosham,
 * Queen Alexandra Hospital, Tipner Regeneration on the M275 approach)
 * and the sold-data digest from the PO1 to PO6 postcode footprint.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateArticleSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";

const siteUrl = `https://${siteConfig.domain}`;
const articleUrl = `${siteUrl}/portsmouth-commercial-property-market`;
const publishDate = "2026-05-17";
const modifiedDate = "2026-05-17";

const hampshireBrokerUrl =
  "https://commercialmortgagesbroker.co.uk/locations/hampshire/portsmouth";

const title = "Portsmouth Commercial Property Market 2026";
const description =
  "An editorial read on the Portsmouth commercial property market at mid-2026: the Royal Navy and BAE Maritime defence anchor at Portsmouth Naval Base, the Gunwharf Quays leisure-led outlet flank with the Spinnaker Tower halo, the Commercial Road and Cascades central retail spine, the Lakeside North Harbour IBM-legacy office park at Cosham, the University of Portsmouth 28,000-student HMO catchment across Southsea PO4 and PO5, North End PO2 and Portsea, the Queen Alexandra Hospital healthcare cluster on the A2030 corridor at Cosham and Drayton, the Tipner Regeneration mixed-use scheme on the M275 approach and where commercial mortgage rates sit heading into 2027.";

export const metadata: Metadata = {
  title: `${title} | Commercial Mortgages Portsmouth`,
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    title,
    description,
    url: articleUrl,
    type: "article",
    publishedTime: publishDate,
    modifiedTime: modifiedDate,
    siteName: siteConfig.name,
  },
};

// Portsmouth regeneration anchors and live commercial-relevant planning
// applications, drawn from the master brief and the Portsmouth City
// Council planning extract digest at mid-2026. Each entry reflects a
// live, publicly-documented commercial-relevant scheme or application
// inside the city footprint.
const planningHighlights = [
  {
    ref: "Tipner Regeneration, PO2",
    address: "Tipner Lane and the M275 approach",
    proposal:
      "The flagship Portsmouth regeneration scheme. A multi-phase mixed-use redevelopment on the Tipner Lane industrial flank sitting on the M275 approach into the city, with residential, employment and leisure floor plate alongside a reshaped highway and active-travel network. The single largest addition to the Portsmouth commercial and residential supply this decade.",
  },
  {
    ref: "Gunwharf Quays, PO1",
    address: "Gunwharf Quays and the Spinnaker Tower halo",
    proposal:
      "The Land Securities outlet retail, leisure, residential and hotel scheme on the former HMS Vernon naval estate. Anchored by the Spinnaker Tower viewing platform, the outlet retail core and the marina-front food and beverage parade. A continuing absorption of leisure and hospitality stock through 2026 and 2027.",
  },
  {
    ref: "26/00475/FUL Commercial Road, PO1 1EP",
    address: "116 to 118 Commercial Road",
    proposal:
      "Class E retail application, entrance door replacement on a live central retail asset on the Commercial Road precinct. Pending. A representative live signal of the working central retail flank.",
  },
  {
    ref: "26/00496/FUL Manners Road, PO4 0BB",
    address: "38 Manners Road, Southsea",
    proposal:
      "Change of use Class C4 to an eight-bedroom sui generis HMO. Pending. A representative live signal of the deepest large-HMO conversion pipeline in the network, with Southsea PO4 and PO5 carrying the densest sui generis seven to nine-bed flow.",
  },
  {
    ref: "26/00486/FUL Kirby Road, PO2 0PX",
    address: "135 Kirby Road, North End",
    proposal:
      "Change of use Class C3 to a seven-bedroom sui generis HMO. Pending. A North End PO2 case on the dense terraced HMO conversion belt sitting between Portsea and Cosham.",
  },
  {
    ref: "26/00251/FUL Portsea, PO1",
    address: "Portsea ground floor and uppers",
    proposal:
      "Class E ground floor retained alongside a Class C4 to seven-bedroom sui generis HMO conversion on the upper floors, with a mansard extension. Pending. The shop-with-HMO-above archetype that drives the bulk of the Portsmouth semi-commercial mortgage refinance flow.",
  },
];

const comparables = [
  {
    headline: "Southsea PO4 eight-bed HMO acquisition",
    detail:
      "Investor acquiring a freehold Victorian terrace in Southsea PO4 to convert from Class C4 to a sui generis eight-bedroom student HMO under a live planning application, mansard extension included. Stabilised University of Portsmouth catchment underpinning the projected rent roll, three years of HMO trading on the wider portfolio.",
    terms: "70% LTV · 7.45% pa · 5-year fix · 25-year term · Shawbrook",
  },
  {
    headline: "Lakeside North Harbour office investment refinance",
    detail:
      "Investor holding a 32,000 sq ft Class E office block at Lakeside North Harbour in Cosham, on the IBM-legacy office park, refinancing off a 2021 five-year fix. Stabilised multi-tenant occupier base with naval supply chain and professional services covenants underpinning the rent roll.",
    terms: "65% LTV · 7.25% pa · 5-year fix · 20-year term · Cynergy Bank",
  },
  {
    headline: "Gunwharf Quays marina-front hospitality refinance",
    detail:
      "Independent operator holding a 64-cover marina-front restaurant in the Gunwharf Quays outlet scheme refinancing off a 2021 five-year fix into a stabilised trading-business facility. Three years of clean trading accounts post-pandemic and EBITDA cover comfortably above 1.6 times.",
    terms: "65% LTV · 7.85% pa · 5-year fix · 20-year term · InterBay Commercial",
  },
];

export default function PortsmouthCommercialPropertyMarket2026() {
  return (
    <>
      <SchemaInjector
        schema={generateArticleSchema(
          title,
          description,
          articleUrl,
          publishDate,
          modifiedDate,
        )}
      />
      <Breadcrumbs
        items={[
          { label: "Insights", href: "/blog" },
          {
            label: "Portsmouth commercial property market 2026",
            href: "/portsmouth-commercial-property-market",
          },
        ]}
      />

      {/* Editorial hero */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow">Market read &middot; May 2026</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h1 className="mt-8 font-editorial text-5xl leading-[1.02] tracking-tight md:text-7xl">
                Portsmouth Commercial Property Market{" "}
                <em className="not-italic text-[color:var(--color-accent)]">
                  2026
                </em>
                .
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[color:var(--color-ink-soft)]">
                A working broker read on the Portsmouth commercial
                property market at mid-2026. The Royal Navy and BAE
                Systems Maritime defence anchor at Portsmouth Naval
                Base. The Gunwharf Quays leisure-led outlet scheme
                with the Spinnaker Tower halo, the Commercial Road
                and Cascades central retail spine and the Old
                Portsmouth heritage flank. The Lakeside North Harbour
                IBM-legacy office park in Cosham and the wider
                Voyager Park, Walton Road and Airport Service Road
                industrial cluster on the naval supply chain. The
                University of Portsmouth 28,000-student HMO catchment
                running through Southsea PO4 and PO5, North End PO2
                and Portsea, the deepest sui generis conversion
                pipeline in the network. The Queen Alexandra Hospital
                healthcare anchor on the A2030 corridor at Cosham and
                Drayton. The Tipner Regeneration on the M275 approach.
                The lender pool that funds it. Where rates sit now
                and what we are watching into 2027.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-[color:var(--color-rule)] py-5 text-sm text-[color:var(--color-muted)]">
                <span>
                  By the desk at{" "}
                  <span className="text-[color:var(--color-ink)]">
                    Commercial Mortgages Portsmouth
                  </span>
                </span>
                <span aria-hidden>&middot;</span>
                <time dateTime={publishDate}>17 May 2026</time>
                <span aria-hidden>&middot;</span>
                <span>19 min read</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TL;DR callout */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] bg-white p-8 shadow-sm md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                TL;DR
              </p>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-[color:var(--color-ink-soft)] md:text-lg">
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    01
                  </span>
                  <span>
                    Portsmouth is the only{" "}
                    <span className="figure-inline">island city</span>{" "}
                    in the United Kingdom and the densest local
                    authority outside London, with a population of
                    roughly <span className="figure-inline">210,000</span>{" "}
                    inside a compact footprint that sits on the M27
                    spine of the central South Coast. The
                    economy is anchored by the Royal Navy and BAE
                    Systems Maritime defence cluster at Portsmouth
                    Naval Base, the leisure-led Gunwharf Quays and
                    Southsea seafront axis and the University of
                    Portsmouth student footprint.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    02
                  </span>
                  <span>
                    Central retail Zone A on the Commercial Road
                    precinct and the Cascades Centre sits in a
                    stratified band in 2026, with the working
                    high-street parade carrying the national
                    multiples and the Class E flexibility on the
                    upper floors feeding a steady semi-commercial
                    refinance flow. Gunwharf Quays carries the
                    leisure-led outlet retail and hospitality
                    anchor on the former HMS Vernon estate. Lakeside
                    North Harbour at Cosham, the IBM-legacy office
                    park, carries roughly 1.5 million square feet of
                    Class E office on the M27 junction approach.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    03
                  </span>
                  <span>
                    The University of Portsmouth student footprint of
                    around <span className="figure-inline">28,000</span>{" "}
                    drives the deepest HMO conversion pipeline in our
                    network, materially heavier than the other South
                    Coast HMO flow at comparable headcount. The
                    Southsea PO4 and PO5 belt sitting next to the
                    University of Portsmouth campus carries the
                    densest large-HMO conversion stock, with North End
                    PO2 and Portsea picking up the terraced and
                    shop-with-HMO-above flow. The sui generis seven to
                    nine-bedroom configuration is the recurring
                    application shape.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    04
                  </span>
                  <span>
                    Tipner Regeneration on the M275 approach, Gunwharf
                    Quays on the former HMS Vernon estate, the
                    Commercial Road and Cascades central retail
                    spine, Lakeside North Harbour at Cosham, the
                    Royal Navy Portsmouth Naval Base, the BAE Systems
                    Maritime shipyard and the Queen Alexandra
                    Hospital cluster at Cosham are the seven anchors
                    of the Portsmouth regeneration and naval-spine
                    pipeline through to 2027. Tipner is the single
                    largest addition to the Portsmouth commercial
                    and residential supply.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    05
                  </span>
                  <span>
                    Median residential price across the city sits at{" "}
                    <span className="figure-inline">&pound;255,000</span>{" "}
                    on the latest twelve-month sold data with a
                    flat-to-positive reading of{" "}
                    <span className="figure-inline">+2.0%</span>{" "}
                    year on year, a contrast to the softer reading
                    across the Solent. New build volume is at zero
                    in the twelve-month window: Portsmouth is the
                    most extreme re-trading market in our network,
                    which directly feeds the BTL, HMO and
                    semi-commercial refinance pipeline rather than
                    the new-build investment flow.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    06
                  </span>
                  <span>
                    Mid-2026 Portsmouth commercial mortgage rates sit
                    at{" "}
                    <span className="figure-inline">6.0 to 9.0%</span>{" "}
                    pa across the eight main product types. Owner
                    occupier industrial and trade-counter on the
                    naval supply chain runs 60 to 70 percent LTV at
                    the stronger end of the range. Retail and office
                    investment runs 65 to 75 percent LTV. Student
                    and professional HMO refinance runs 65 to 75
                    percent LTV. Hospitality trading-business runs
                    60 to 70 percent LTV at the higher pricing end.{" "}
                    <strong>Shawbrook</strong>,{" "}
                    <strong>InterBay Commercial</strong>,{" "}
                    <strong>LendInvest</strong>,{" "}
                    <strong>Cynergy Bank</strong>,{" "}
                    <strong>Lloyds</strong>,{" "}
                    <strong>NatWest</strong>,{" "}
                    <strong>Barclays</strong> and{" "}
                    <strong>Santander</strong> are the eight on our
                    active panel, with Hampshire Trust Bank, the
                    locally-headquartered Hampshire challenger,
                    sitting alongside on the wider pool.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats grid, Portsmouth economy */}
      <section className="section data-band">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 max-w-3xl">
              <span className="eyebrow">The numbers under the market</span>
              <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
                Portsmouth in eight figures.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-paper)]/70">
                The macro backdrop that drives lender appetite. Drawn
                from Portsmouth City Council, the published Royal
                Navy and BAE Systems Maritime employment base, the
                University of Portsmouth student roll, ONS
                sub-national indicators, the 2021 census and Land
                Registry sold data for the PO1 through PO6 postcodes.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  210K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  City population
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Inside the Portsmouth City Council boundary at the
                  latest mid-year estimate, on a footprint that is
                  the densest local authority outside London.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  5K+
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Defence cluster headcount
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Royal Navy uniformed and civilian at Portsmouth
                  Naval Base plus BAE Systems Maritime Services at
                  the Portsmouth shipyard, the structural anchor of
                  the city economy.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  28K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  University students
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  University of Portsmouth headcount across the city
                  centre and Southsea campuses, driving the deepest
                  HMO conversion pipeline in the network.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  &pound;255K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Median res price
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Twelve-month median across the PO1 through PO6
                  postcodes, a proxy for general market temperature
                  on a terraced-house dominant residential stock.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  1,870
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Res transactions
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Twelve-month residential turnover across the city,
                  with active churn through the PO4 and PO2
                  HMO-conversion belts and the central PO1 flatted
                  stock.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  +2.0%
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Year on year
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Year-on-year change in median residential price.
                  Flat-to-positive reading, a contrast to the
                  softer Solent corridor median elsewhere.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  96
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Commercial planning apps
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Commercial-mortgage-relevant planning applications
                  received over the latest twelve months. The
                  Portsmouth determination cycle runs long; historic
                  approval once decided sits around 92 to 96 percent.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  90min
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  By train to London
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  South Western Railway service from Portsmouth and
                  Southsea or Portsmouth Harbour to London Waterloo,
                  with the A3(M) and M27 running north and east into
                  the wider South Coast and London commuter belt.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-[color:var(--color-paper)]/55">
            Sources: Portsmouth City Council, Royal Navy and BAE
            Systems Maritime published employment data, University of
            Portsmouth student roll, ONS sub-national economic
            indicators, the 2021 census and Land Registry sold data
            for the PO1 through PO6 postcodes.
          </p>
        </div>
      </section>

      {/* Section 1: Portsmouth at a glance */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">01 &middot; Context</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Portsmouth at a glance: the only UK island city, the
                densest local authority outside London, the Royal Navy
                and BAE Maritime defence anchor and a 28,000-student
                university.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  This is the working broker read on the Portsmouth
                  commercial property market at mid-2026. We have
                  written it for owner-occupiers and investors looking
                  at the naval supply chain industrial cluster along
                  Voyager Park, Walton Road and Airport Service Road,
                  hospitality operators thinking about buying or
                  refinancing on Gunwharf Quays, Southsea seafront or
                  the Old Portsmouth heritage flank, investors holding
                  student and professional HMO stock through the
                  Southsea PO4 and PO5 belt, North End PO2 and
                  Portsea, retail and food and beverage operators on
                  Commercial Road, the Cascades Centre, Albert Road
                  and Osborne Road, office occupiers watching the
                  Lakeside North Harbour and Guildhall Square
                  flanks, healthcare investors holding stock on the
                  Queen Alexandra Hospital halo at Cosham and Drayton
                  and developer-investors watching the Tipner
                  Regeneration delivery on the M275 approach. The aim
                  is practical: what is happening in each part of the
                  market, where lender appetite sits in 2026, what
                  the rate range is across each product and how we
                  read the Portsmouth pipeline through to the end of
                  2027. The voice is first-person plural because we
                  sit across deals every week, not because we are
                  pretending to speak for anyone else. Where we name
                  a lender, it is one of the eight on our active
                  panel that we quote against routinely on Portsmouth
                  deals, with the wider ninety-strong network sitting
                  behind that for the defence-and-industrial,
                  hospitality, HMO portfolio and specialist cases.
                </p>
                <p>
                  Portsmouth is a unitary authority on the South
                  Coast of England, sitting on Portsea Island. It is
                  the only city in the United Kingdom built on an
                  island, and the densest local authority outside
                  London by population per square mile. The city
                  population sits at roughly 210,000 inside a compact
                  footprint where the working-age skew is driven by
                  the Royal Navy and BAE Systems Maritime defence
                  cluster, the wider naval supply chain and the
                  University of Portsmouth student catchment. The
                  city is bolted onto the national motorway network
                  at the M275 spur running off the M27 at the top of
                  Portsea Island and the A3(M) running north toward
                  the M25 at Junction 12. South Western Railway runs
                  Portsmouth and Southsea and Portsmouth Harbour
                  stations through to London Waterloo in around 90
                  minutes on the direct service. The Solent corridor
                  runs west along the M27 into the wider Hampshire
                  labour shed, and we cover the corridor read on the
                  industrial property pages.
                </p>
                <p>
                  The economy is anchored by four structural pillars.
                  Defence is the first and the most structurally
                  important: the Royal Navy Portsmouth Naval Base
                  carries roughly 3,500 uniformed and civilian
                  personnel, with BAE Systems Maritime Services
                  running the Portsmouth shipyard alongside with
                  another 1,500 plus on the dockyard estate. The
                  wider naval supply chain feeds a deep
                  industrial-occupier base along the PO3 and PO6
                  flanks at Voyager Park, Walton Road industrial
                  estate, Airport Service Road industrial and the
                  Tipner Lane industrial flank now folding into the
                  regeneration. The defence cluster is the
                  structural backbone of the city commercial economy
                  and underpins the lender stance on industrial
                  freehold and owner-occupier covenant.
                </p>
                <p>
                  Higher education is the second pillar. The
                  University of Portsmouth carries around 28,000
                  students across the central PO1 campus footprint
                  alongside the Southsea PO5 academic flank. This is
                  one of the larger university student populations
                  on the South Coast and the catchment drives the
                  deepest sui generis HMO conversion pipeline in our
                  network. The PO4 and PO5 Southsea belt sitting
                  next to the university carries the densest student
                  HMO stock, with North End PO2 picking up the
                  terraced HMO flow and Portsea covering the
                  shop-with-HMO-above conversion archetype. Leisure
                  and tourism is the third pillar. Gunwharf Quays on
                  the former HMS Vernon estate carries the
                  outlet-retail and leisure anchor with the Spinnaker
                  Tower halo overhead; Southsea seafront, Old
                  Portsmouth and the Historic Dockyard with HMS
                  Victory and the Mary Rose carry the wider tourism
                  draw.
                </p>
                <p>
                  Healthcare and corporate occupiers round out the
                  picture. Queen Alexandra Hospital in Cosham is the
                  dominant NHS anchor for the Portsmouth Hospitals
                  University NHS Trust and one of the largest
                  hospital estates on the South Coast. The
                  surrounding A2030 corridor carries a thick cluster
                  of care home, day hospital and healthcare-ancillary
                  commercial stock across Cosham and Drayton. The
                  Lakeside North Harbour campus at Cosham, the
                  IBM-legacy office park sitting on roughly 1.5
                  million square feet of Class E floor plate on the
                  M27 junction approach, carries the central
                  Portsmouth office occupier base alongside the
                  Guildhall Square cluster, with multi-tenant
                  professional services, naval supply chain office
                  occupiers and the wider Portsmouth City Council
                  estate taking up the floor plate. We pull the
                  threads together in the sector deep-dives below.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 1 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                Portsmouth is the only island city in the United
                Kingdom and the densest local authority outside
                London. The Royal Navy defence spine, the Gunwharf
                Quays leisure flank, the Lakeside North Harbour
                office park and the deepest sui generis HMO
                conversion pipeline in our network are the four
                pillars that lenders read very differently to any
                other South Coast city.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Where the market is in 2026 */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">02 &middot; The 2026 picture</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Where the Portsmouth commercial market sits in 2026.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Two and a half years on from the 2023 rate peak,
                  the Portsmouth commercial market has reset around
                  four defining shapes. The Royal Navy and BAE
                  Maritime defence anchor underpinning the
                  industrial and office covenant. A leisure-led
                  Gunwharf Quays and Southsea hospitality flank that
                  reads quite differently to the port-led commercial
                  markets elsewhere on the Solent. The deepest HMO
                  conversion pipeline in the network on the PO4 and
                  PO5 Southsea belt and the PO2 North End terraces.
                  And a regeneration spine through Tipner on the
                  M275 approach that is the single largest addition
                  to commercial and residential supply this decade.
                  Each shape runs on its own cycle. Together they
                  produce a commercial market with a structurally
                  defensive industrial base, a leisure-heavy
                  hospitality flank, a deep semi-commercial and HMO
                  refinance floor and a meaningful central
                  regeneration pipeline.
                </p>
                <p>
                  Retail in Portsmouth tells a stratified story. The
                  Commercial Road precinct, running north from the
                  Cascades Centre through the city centre to the
                  Guildhall Square flank, carries the working
                  high-street parade with a mix of multiples and
                  independents. Class E flexibility has fed a steady
                  drip of upper-floor conversion, with shop-with-flats
                  and shop-with-offices freeholds the recurring
                  semi-commercial archetype. Gunwharf Quays on the
                  former HMS Vernon estate carries the leisure-led
                  outlet retail anchor, with the Land Securities
                  scheme drawing footfall from the wider South Coast
                  catchment. Southsea inner along Albert Road and
                  Osborne Road carries the boutique retail and
                  independent food and beverage cluster. Lender
                  appetite is strongest on the Commercial Road
                  shop-with-flats archetype, with semi-commercial
                  pricing at 65 to 75 percent LTV through the
                  challenger and specialist panel.
                </p>
                <p>
                  HMO and student depth is the second defining shape
                  and the most distinctive feature of the Portsmouth
                  commercial market. The Southsea PO4 and PO5 belt
                  sitting next to the University of Portsmouth campus
                  carries the densest large-HMO conversion stock in
                  the network, with sui generis seven to nine-bedroom
                  configurations the recurring application shape.
                  North End PO2 picks up the terraced HMO flow on a
                  slightly cheaper rent profile, and Portsea covers
                  the shop-with-HMO-above conversion archetype on
                  the city-centre fringe. The planning extract at
                  mid-2026 carries multiple live Class C4 to sui
                  generis conversion applications, with the Manners
                  Road eight-bed at PO4 0BB and the Kirby Road
                  seven-bed at PO2 0PX representative of the working
                  pipeline. Stabilised licensed sui generis stock
                  with three years of clean rent rolls draws the
                  strongest lender appetite, with portfolio
                  refinance through the specialist HMO panel running
                  at 65 to 75 percent LTV.
                </p>
                <p>
                  Office and defence supply chain is the third shape.
                  The Lakeside North Harbour campus at Cosham, the
                  IBM-legacy office park sitting on roughly 1.5
                  million square feet of Class E floor plate at the
                  M27 junction approach, carries the central
                  Portsmouth office occupier base alongside the
                  Guildhall Square cluster in the city centre. The
                  multi-tenant occupier mix includes naval supply
                  chain office occupiers, professional services firms,
                  the wider Portsmouth City Council estate and a long
                  tail of SME occupiers. The defence supply chain
                  industrial base at Voyager Park, Walton Road and
                  Airport Service Road carries the working light
                  industrial occupier population, with the Tipner
                  Lane flank now folding into the regeneration. The
                  Royal Navy and BAE Maritime covenant underpins the
                  lender stance on the supply chain freehold and
                  trade-counter market, and we read defence-adjacent
                  industrial as one of the strongest priced asset
                  classes in the city.
                </p>
                <p>
                  Yields across the city held through 2025 and into
                  the first half of 2026 broadly in line with the
                  regional Hampshire average. Prime central office
                  investment with strong unexpired sits at 7.5 to
                  8.5 percent net. Lakeside North Harbour multi-let
                  office investment runs 8.0 to 9.0 percent gross
                  depending on weighted average lease term and
                  occupier mix. Industrial-warehouse on the defence
                  supply chain with naval covenant runs 7.0 to 8.0
                  percent net. Trading-business hospitality on
                  Gunwharf Quays marina-front, Southsea seafront and
                  Old Portsmouth heritage stock runs 7.5 to 9.0
                  percent gross. Semi-commercial mixed-use on
                  Commercial Road, the Cascades Centre flank and the
                  Southsea inner parades runs 7.0 to 8.5 percent
                  gross. Stabilised sui generis HMO portfolio across
                  the PO4 and PO5 belt runs 7.0 to 8.0 percent gross
                  on three-year rent rolls. The pricing reflects what
                  we read as a defence-anchored, leisure-flanked and
                  HMO-heavy market with a deep semi-commercial floor
                  underpinning the freehold yield stack.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Live regeneration and planning callout */}
      <section className="section data-band">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="eyebrow">Live regeneration and planning</span>
                <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
                  Six anchors worth knowing about.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/70">
                  Drawn from the Portsmouth City Council planning
                  extract and the public-domain Portsmouth
                  regeneration pipeline at mid-2026. A
                  market-temperature read on what is being delivered,
                  what is rotating and what is being absorbed across
                  the central, seafront, Cosham and naval flanks.
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                Updated 2026-05-17
              </p>
            </div>
          </ScrollReveal>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {planningHighlights.map((app, i) => (
              <ScrollReveal key={app.ref} delay={i * 0.04}>
                <li className="flex h-full flex-col gap-3 border border-[color:var(--color-paper)]/15 bg-[color:var(--color-paper)]/5 p-5 backdrop-blur-sm">
                  <span className="font-mono text-xs text-[color:var(--color-accent)]">
                    {app.ref}
                  </span>
                  <p className="font-editorial text-base text-[color:var(--color-paper)]">
                    {app.address}
                  </p>
                  <p className="text-sm leading-relaxed text-[color:var(--color-paper)]/75">
                    {app.proposal}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: The regeneration and naval spine */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">03 &middot; Regeneration and naval spine</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                The regeneration and naval spine: Tipner, Gunwharf
                Quays, Commercial Road and the Cascades, Spinnaker
                Tower, Lakeside North Harbour, the Royal Navy and
                BAE Maritime estate and Queen Alexandra Hospital.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  The Portsmouth regeneration and naval spine runs
                  across the PO1, PO2, PO5 and PO6 footprint and
                  out to the M275 approach at Tipner. Each scheme
                  and each cluster sits on its own delivery
                  programme, but together they make up the most
                  significant addition to Portsmouth commercial,
                  mixed-use and industrial supply this decade. We
                  cover them in the order that matters most for
                  lenders watching pipeline.
                </p>
                <p>
                  Tipner Regeneration, sitting on the Tipner Lane
                  industrial flank at the M275 approach into Portsea
                  Island in PO2, is the flagship Portsmouth
                  regeneration scheme and the single largest
                  addition to the city commercial and residential
                  supply this decade. The multi-phase scheme covers
                  residential, employment and leisure floor plate on
                  a reshaped highway and active-travel network, with
                  the existing industrial occupier base on Tipner
                  Lane folding into the wider redevelopment over the
                  delivery cycle. The footprint sits at the gateway
                  into the city on the M275 approach, which gives it
                  a useful regional-catchment draw alongside the
                  internal city demand. Lender stance on Tipner
                  stabilised investment will sit with the
                  clearing-bank corporate desks alongside the larger
                  SME challenger panel; owner-occupier acquisition on
                  smaller floor plates within the scheme footprint
                  will sit with the SME and specialist challenger
                  panel.
                </p>
                <p>
                  Gunwharf Quays, sitting on the former HMS Vernon
                  estate in PO1 alongside the central harbour, is
                  the leisure-led anchor of the central Portsmouth
                  retail and hospitality market. The Land
                  Securities outlet retail scheme draws footfall
                  from the wider South Coast catchment, with the
                  Spinnaker Tower viewing platform sitting overhead
                  as the most recognisable Portsmouth tourism asset.
                  The marina-front food and beverage parade carries
                  the densest hospitality occupier cluster in the
                  city, with a long tail of independent and branded
                  operators on rolling trading-business cycles.
                  Investment appetite on stabilised Gunwharf Quays
                  product sits with the clearing-bank corporate
                  desks; trading-business refinance on the marina
                  front sits with the SME hospitality challenger
                  panel at 60 to 70 percent LTV.
                </p>
                <p>
                  Commercial Road and the Cascades Centre carry the
                  central retail spine of the city, running north
                  from the Cascades through the working
                  high-street parade toward the Guildhall Square
                  flank. The precinct picks up the bulk of the
                  national multiples and a long tail of independent
                  operators on the central frontages, with Class E
                  flexibility feeding upper-floor conversion and
                  semi-commercial refinance flow. The Cascades
                  Centre carries the covered retail anchor at the
                  northern end of the precinct, with steady multiple
                  occupier coverage and ground-floor leisure rotation
                  through 2026. Live planning applications on the
                  116 to 118 Commercial Road parade at PO1 1EP signal
                  the working asset rotation on the central retail
                  flank. Lender appetite on Commercial Road
                  shop-with-flats is strong, with 65 to 75 percent
                  LTV available on the working semi-commercial
                  archetype through the specialist panel.
                </p>
                <p>
                  The Spinnaker Tower halo, the Old Portsmouth
                  heritage flank and the Southsea seafront pick up
                  the wider tourism and leisure catchment. The
                  Spinnaker Tower at Gunwharf Quays draws the
                  central tourism visitor flow alongside the Mary
                  Rose Museum, HMS Victory and the Historic Dockyard
                  on the Portsmouth Naval Base estate. Old
                  Portsmouth, sitting in the southern PO1 footprint,
                  carries the heritage hospitality cluster with
                  independent restaurants, pubs and small hotel
                  product. Southsea seafront, running through PO4
                  and PO5, carries the seafront leisure flank with
                  Southsea Common, The Clocktower flank and the
                  wider hospitality and leisure parade. Hayling
                  Island, technically across the Havant boundary,
                  picks up the wider holiday-let and small hotel
                  market that lenders read inside the Portsmouth
                  catchment.
                </p>
                <p>
                  Lakeside North Harbour at Cosham, sitting in PO6
                  next to the M27 junction approach, is the central
                  Portsmouth office anchor. The IBM-legacy campus
                  carries roughly 1.5 million square feet of Class
                  E office floor plate across a multi-let occupier
                  base including naval supply chain firms,
                  professional services occupiers, the wider
                  Portsmouth City Council estate and a long tail of
                  SME occupiers. Multi-let office investment on the
                  Lakeside campus prices at 8.0 to 9.0 percent
                  gross depending on weighted average lease term and
                  occupier mix; owner-occupier acquisition on
                  smaller floor plates sits with the SME challenger
                  panel at 65 to 75 percent LTV. Voyager Park,
                  Walton Road industrial estate, Airport Service
                  Road industrial and the wider PO3 and PO6
                  industrial flanks carry the naval supply chain and
                  general light industrial occupier base.
                </p>
                <p>
                  The Royal Navy Portsmouth Naval Base and the BAE
                  Systems Maritime shipyard anchor the structural
                  defence economy. The Royal Navy carries roughly
                  3,500 uniformed and civilian personnel on the
                  Portsmouth dockyard estate alongside BAE Systems
                  Maritime Services with another 1,500 plus. The
                  wider naval supply chain feeds the industrial
                  occupier base across the PO3 and PO6 flanks, with
                  freight, fabrication, marine engineering and
                  professional services occupiers across the
                  Voyager Park, Walton Road and Airport Service Road
                  industrial clusters. Lender stance on defence
                  supply chain industrial freehold is structurally
                  strong, with the Royal Navy and BAE Systems
                  covenant underpinning the long-term occupier
                  picture across the supply chain stock. Queen
                  Alexandra Hospital at Cosham, the dominant NHS
                  anchor for the Portsmouth Hospitals University NHS
                  Trust, sits at the heart of the A2030 corridor
                  with a thick care home, day hospital and
                  healthcare-ancillary commercial cluster spreading
                  through Cosham and Drayton.
                </p>
                <p>
                  Lender stance on Portsmouth regeneration and naval
                  finance is positioned as follows. Stabilised
                  investment with strong unexpired on the
                  post-delivery Tipner Regeneration commercial floor
                  plate, the Lakeside North Harbour multi-let stock
                  and the Gunwharf Quays anchor will sit with the
                  clearing-bank corporate desks alongside the larger
                  SME challengers, with{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong> all carrying Hampshire
                  and South Coast appetite into the 2 million to 15
                  million pound lot size band on the cleanest cases.
                  Owner-occupier acquisition on smaller floor plates
                  and on Voyager Park, Walton Road and Airport
                  Service Road industrial freehold will sit with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong>,{" "}
                  <strong>Cynergy Bank</strong> and{" "}
                  <strong>LendInvest</strong> on the more SME-led
                  cases, with Hampshire Trust Bank, the
                  locally-headquartered Hampshire challenger, sitting
                  alongside as a strong relationship name on
                  Portsmouth deals.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 2 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                Tipner Regeneration on the M275 approach is the
                single largest addition to Portsmouth commercial and
                residential supply this decade. The Royal Navy and
                BAE Maritime defence covenant underpins the
                industrial yield stack. The University of Portsmouth
                28,000-student catchment drives the deepest sui
                generis HMO conversion pipeline in our network.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Sector deep-dives */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">04 &middot; Sector deep-dives</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                HMO and student, leisure and hospitality, office and
                defence supply chain, healthcare.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    HMO and student: Southsea PO4 and PO5, North End
                    PO2, Portsea, University of Portsmouth catchment.
                  </strong>{" "}
                  Portsmouth carries the deepest HMO conversion
                  pipeline in our network, materially heavier than
                  other comparable South Coast university cities at
                  similar student headcount. The University of Portsmouth at around
                  28,000 students drives the structural demand, with
                  the Southsea PO4 and PO5 belt sitting next to the
                  campus and carrying the densest large-HMO
                  conversion stock. The sui generis seven to
                  nine-bedroom configuration is the recurring
                  application shape, with the Manners Road eight-bed
                  at PO4 0BB and the Kirby Road seven-bed at PO2 0PX
                  representative live applications. North End PO2
                  picks up the terraced HMO flow on a slightly
                  cheaper rent profile; Portsea covers the
                  shop-with-HMO-above conversion archetype on the
                  city-centre fringe. Lot sizes on converted
                  Victorian and Edwardian HMO product in Southsea
                  typically run 350,000 to 950,000 pounds; sui
                  generis large-format HMO with mansard extension
                  runs 500,000 to 1.4 million. HMO acquisition or
                  refinance prices 7.0 to 8.5 percent pa at 65 to 75
                  percent LTV through{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong> on the specialist HMO
                  panel, with Paragon, Together and Foundation Home
                  Loans on the wider HMO portfolio panel.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Leisure and hospitality: Gunwharf Quays, Southsea
                    seafront, Old Portsmouth heritage, Hayling Island.
                  </strong>{" "}
                  Portsmouth hospitality trades on the leisure-led
                  Gunwharf Quays anchor, the Southsea seafront flank,
                  the Old Portsmouth heritage cluster and the wider
                  tourism draw of the Historic Dockyard. Gunwharf
                  Quays on the former HMS Vernon estate carries the
                  outlet-retail and marina-front F&amp;B anchor, with
                  the Spinnaker Tower halo overhead drawing the
                  central tourism visitor flow. Southsea seafront,
                  running through PO4 and PO5, carries the seafront
                  hospitality and leisure parade alongside Southsea
                  Common. Old Portsmouth, sitting in the southern
                  PO1 footprint, carries the heritage independent
                  hospitality cluster on a more boutique rent
                  profile. Hayling Island, across the Havant
                  boundary but inside the Portsmouth catchment,
                  picks up the holiday-let and small hotel market.
                  Trading-business acquisition on Portsmouth hotels
                  prices 7.5 to 9.0 percent pa at 60 to 70 percent
                  LTV through{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Cynergy Bank</strong> on the
                  trading-business panel. Independent F&amp;B
                  freeholds on Albert Road and Osborne Road price
                  7.0 to 8.5 percent pa at 60 to 65 percent LTV.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Office and defence supply chain: Lakeside North
                    Harbour, Guildhall Square, Voyager Park, Walton
                    Road, naval supply chain industrial.
                  </strong>{" "}
                  Portsmouth office trades on the Lakeside North
                  Harbour campus at Cosham as the dominant anchor,
                  with the Guildhall Square flank picking up the
                  central city office cluster. The Lakeside campus,
                  the IBM-legacy office park sitting on roughly 1.5
                  million square feet of Class E floor plate at the
                  M27 junction approach, carries a multi-let
                  occupier base across naval supply chain firms,
                  professional services occupiers, the wider
                  Portsmouth City Council estate and a long tail of
                  SME occupiers. Multi-let office investment on the
                  Lakeside campus prices at 8.0 to 9.0 percent
                  gross. The defence supply chain industrial base
                  along Voyager Park, Walton Road and Airport
                  Service Road carries the working light industrial
                  occupier population with Royal Navy and BAE
                  Maritime covenant underpinning the long-term
                  occupier picture. Owner-occupier industrial
                  acquisition prices 6.75 to 8.0 percent pa at 60 to
                  70 percent LTV through{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong> and{" "}
                  <strong>Barclays</strong> on the SME and clearing
                  bank panel.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Healthcare: Queen Alexandra Hospital halo,
                    Cosham and Drayton care home cluster, A2030
                    corridor.
                  </strong>{" "}
                  Queen Alexandra Hospital at Cosham is the dominant
                  NHS anchor for the Portsmouth Hospitals University
                  NHS Trust and one of the largest hospital estates
                  on the South Coast. The hospital halo carries a
                  thick cluster of healthcare-ancillary commercial
                  stock across Cosham and the wider PO6 footprint,
                  including private clinic, day hospital, care home
                  and supported living product. The A2030 corridor
                  running east from Cosham through Drayton picks up
                  the densest care home concentration in the city,
                  with a long tail of small and medium operator
                  freehold and leasehold stock. Lender appetite on
                  care home acquisition and refinance is
                  case-by-case, with three years of clean CQC
                  inspection record and stabilised occupancy rate
                  the underwriting baseline. Owner-occupier care
                  home freehold prices 7.0 to 8.5 percent pa at 60
                  to 70 percent LTV through{" "}
                  <strong>Cynergy Bank</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Santander</strong> on the SME panel.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 3 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                The Southsea PO4 and PO5 sui generis HMO pipeline,
                the Gunwharf Quays leisure flank, the Lakeside North
                Harbour office park and the Queen Alexandra Hospital
                halo carry the four most active commercial mortgage
                conversations on Portsmouth desks in 2026.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: Mortgage market */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">05 &middot; The mortgage market</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                What is available in Portsmouth in 2026.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Commercial mortgage product across Portsmouth runs
                  between{" "}
                  <span className="figure-inline">6.0 and 9.0%</span>{" "}
                  pa at mid-2026, depending on sector, covenant, LTV
                  and term. Owner-occupier industrial and
                  trade-counter freehold along the naval supply chain
                  flanks at Voyager Park, Walton Road and Airport
                  Service Road sits at the strongest end of the
                  range, 6.75 to 8.0 percent pa at 60 to 70 percent
                  LTV on five to fifteen-year fixed-amortisation
                  terms. Owner-occupier professional services and
                  creative freehold on the central spine and the
                  Lakeside North Harbour campus runs similar pricing
                  where the borrower has credible trading accounts,
                  6.5 to 7.5 percent pa at 65 to 75 percent LTV.
                  Investment commercial mortgages on stabilised
                  retail and office product with strong unexpired
                  sit at 6.5 to 7.75 percent pa at 65 to 75 percent
                  LTV on the cleanest cases.
                </p>
                <p>
                  Defence supply chain industrial is the strongest
                  priced segment in the city, reflecting the Royal
                  Navy and BAE Systems Maritime covenant and the
                  structural appetite from challenger and clearing
                  bank panels. Naval supply chain industrial
                  investment with strong unexpired runs 6.75 to 8.0
                  percent pa at 65 to 70 percent LTV through{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong> on the clearing bank
                  and SME panel. Owner-occupier trade-counter and
                  small industrial freehold on Walton Road, Voyager
                  Park and Airport Service Road prices 6.75 to 8.0
                  percent pa at 60 to 70 percent LTV on cases with
                  three years of clean trading accounts. Hampshire
                  Trust Bank, the locally-headquartered Hampshire
                  challenger, sits alongside as a strong relationship
                  name on Portsmouth industrial freehold deals.
                </p>
                <p>
                  Hospitality trading-business is the toughest
                  segment: typically 7.5 to 9.0 percent pa at 60 to
                  70 percent LTV, with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Cynergy Bank</strong> the most active
                  trading-business names on the Gunwharf Quays
                  marina front, the Southsea seafront flank, the
                  Old Portsmouth heritage cluster and the wider
                  Hayling Island holiday-let pipeline. Independent
                  hotel freeholds in Old Portsmouth and the Southsea
                  seafront price 7.5 to 8.5 percent pa at 60 to 65
                  percent LTV on cases with three years of clean
                  trading accounts. Branded hotel investment with
                  strong covenant on the central seafront sits with
                  the clearing-bank corporate desks at{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong>.
                </p>
                <p>
                  HMO acquisition or refinance on the student and
                  professional sharer stock through the Southsea
                  PO4 and PO5 belt, North End PO2 and Portsea runs
                  7.0 to 8.5 percent pa at 65 to 75 percent LTV.{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong> anchor the HMO
                  specialist panel alongside Paragon, Together and
                  Foundation Home Loans on the wider HMO portfolio
                  panel, with Fleet Mortgages writing into the
                  smaller-ticket HMO pipeline. Portsmouth portfolio
                  refinancers particularly value the depth of
                  large-format sui generis coverage across the
                  panel, with seven to nine-bedroom HMO product the
                  recurring application shape. Semi-commercial
                  mixed-use shop-with-flats on Commercial Road,
                  Albert Road, Osborne Road and the Cascades Centre
                  flank runs up to 75 percent LTV at 7.0 to 8.0
                  percent pa across the strong shop-with-flat
                  archetype with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Cynergy Bank</strong> consistently
                  competitive. Bridging across the catchment sits at
                  0.75 to 1.10 percent per month on the mainstream
                  specialist desks, with the cleanest cases on
                  lower-LTV change-of-use and refurb-to-term plays
                  pricing toward the lower end.
                </p>
                <p>
                  Lender appetite splits by sector. Naval supply
                  chain industrial and Lakeside North Harbour
                  office is the most contested asset class in
                  Portsmouth, with{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong>,{" "}
                  <strong>Santander</strong> and{" "}
                  <strong>Shawbrook</strong> all bidding into the
                  defence covenant cases alongside Hampshire Trust
                  Bank on the local relationship flank. HMO and
                  portfolio is the second most active segment, with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong> writing the bulk of
                  the Southsea PO4 and PO5 sui generis pipeline
                  alongside Paragon and Together on the wider
                  portfolio panel. The clearing banks at{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong> carry credible
                  Portsmouth appetite into the prime central retail,
                  Gunwharf Quays anchor, Lakeside North Harbour
                  investment and central professional services
                  freehold flank. The challenger SME panel writes
                  the bulk of the mid-market:{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong>,{" "}
                  <strong>LendInvest</strong> and{" "}
                  <strong>Cynergy Bank</strong> sit at the centre
                  of the specialist pool, with Allica Bank, HTB,
                  Cambridge and Counties, YBS Commercial, Aldermore,
                  Paragon, Together, Foundation Home Loans, Fleet
                  Mortgages and OakNorth on the wider 90-strong
                  network. Hampshire Trust Bank sits inside the
                  wider panel as the locally-headquartered Hampshire
                  challenger with a particularly active Portsmouth
                  relationship book.
                </p>
                <p>
                  We are part of a broader UK commercial mortgage
                  brokerage network. For the wider regional view
                  across Hampshire, taking in Winchester,
                  Basingstoke, Eastleigh, Havant and the wider Solent
                  corridor alongside the Portsmouth catchment, see{" "}
                  <a
                    href={hampshireBrokerUrl}
                    rel="external noopener noreferrer"
                    target="_blank"
                    className="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4 hover:text-[color:var(--color-accent)]"
                  >
                    our Hampshire commercial mortgage broker hub
                  </a>
                  , which sets out the parent brokerage Portsmouth
                  desk and the panel coverage across the wider
                  Hampshire and South Coast footprint.
                </p>
              </div>
            </ScrollReveal>

            {/* Lender table */}
            <ScrollReveal delay={0.1}>
              <div className="mt-12 overflow-hidden border border-[color:var(--color-rule)] bg-white">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper)] font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-muted)]">
                      <th className="px-5 py-4">Lender</th>
                      <th className="px-5 py-4">Sweet spot</th>
                      <th className="px-5 py-4">Typical LTV</th>
                      <th className="px-5 py-4">Indicative rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[color:var(--color-rule)]">
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Shawbrook
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Semi-commercial, large HMO, owner-occupier
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">6.95 to 8.25%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        InterBay Commercial
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Semi-commercial, HMO, hospitality
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        LendInvest
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        HMO, BTL portfolio, refurb-to-term
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Cynergy Bank
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Investment, hospitality, healthcare
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.25%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Lloyds
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Clearing bank, prime investment, owner-occupier
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.0 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        NatWest
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Clearing bank, prime investment, defence supply chain
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.0 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Barclays
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Clearing bank, prime investment, corporate
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.0 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Santander
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Clearing bank, hospitality, healthcare, investment
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">6.25 to 7.75%</td>
                    </tr>
                  </tbody>
                </table>
                <p className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-paper)] px-5 py-4 text-xs leading-relaxed text-[color:var(--color-muted)]">
                  Plus Hampshire Trust Bank, the locally-headquartered
                  Hampshire challenger, sitting on the wider panel as
                  a strong relationship name on Portsmouth deals.
                  Plus Allica Bank, HTB, Cambridge and Counties, YBS
                  Commercial, Aldermore, Paragon, Together,
                  Foundation Home Loans, Fleet Mortgages and OakNorth
                  on the wider HMO, portfolio and SME challenger
                  panel. Plus another 80 panel members across
                  challenger banks, specialists and private credit.
                  Rates indicative for mid-2026 Portsmouth primary
                  product. Actual offers depend on covenant, LTV,
                  sector and term.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Recent comparables */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="eyebrow">Recent comparables</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Three deals from the desk this quarter.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[color:var(--color-muted)]">
                Anonymised. Representative rate, LTV, term and lender
                across three of the most common Portsmouth case
                shapes.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {comparables.map((c, i) => (
              <ScrollReveal key={c.headline} delay={i * 0.08}>
                <div className="card h-full">
                  <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-muted)]">
                    Case {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 font-editorial text-xl leading-tight">
                    {c.headline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                    {c.detail}
                  </p>
                  <p className="mt-6 fig text-base text-[color:var(--color-accent)]">
                    {c.terms}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Five recent deal flavours */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">06 &middot; Deal flavours</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Five recent deal shapes from across Portsmouth.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Five anonymised composite deal flavours, each drawn
                  from the recurring shapes we see across Portsmouth.
                  Names removed, terms representative of the range we
                  are pricing through Q1 and Q2 2026.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Southsea PO4 eight-bed sui generis HMO
                    acquisition.
                  </strong>{" "}
                  An investor acquiring a freehold Victorian terrace
                  in Southsea PO4 to convert from Class C4 to a sui
                  generis eight-bedroom student HMO under a live
                  planning application, mansard extension included.
                  Stabilised University of Portsmouth catchment, three
                  years of HMO trading on the wider portfolio, full
                  licensed-HMO documentation. 70% LTV at 7.45% pa
                  with <strong>Shawbrook</strong>, five-year fix,
                  25-year amortisation.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Lakeside North Harbour office investment
                    refinance.
                  </strong>{" "}
                  An investor holding a 32,000 sq ft Class E office
                  block at Lakeside North Harbour in Cosham, on the
                  IBM-legacy campus, refinancing off a 2021 five-year
                  fix. Stabilised multi-tenant occupier base with
                  naval supply chain and professional services
                  covenants. 65% LTV at 7.25% pa with{" "}
                  <strong>Cynergy Bank</strong>, five-year fix,
                  20-year amortisation.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Gunwharf Quays marina-front hospitality
                    refinance.
                  </strong>{" "}
                  An independent operator holding a 64-cover
                  marina-front restaurant in the Gunwharf Quays
                  outlet scheme refinancing off a 2021 five-year fix
                  into a stabilised trading-business facility with{" "}
                  <strong>InterBay Commercial</strong>. 65% LTV at
                  7.85% pa, five-year fix, 20-year amortisation. The
                  Spinnaker Tower halo footfall and the wider
                  Gunwharf catchment supported the trading-business
                  underwrite on the marina-front F&amp;B archetype.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Walton Road industrial freehold acquisition.
                  </strong>{" "}
                  An owner-occupier acquiring a 9,500 sq ft trade
                  counter and warehouse freehold on the Walton Road
                  industrial estate, with five years of clean naval
                  supply chain trading accounts. Combined building
                  purchase and working-capital facility with{" "}
                  <strong>Shawbrook</strong> alongside Hampshire
                  Trust Bank on the relationship flank. 65% LTV at
                  7.05% pa, five-year fix, 20-year amortisation. The
                  Royal Navy and BAE Maritime covenant depth
                  supported the SME panel underwrite at the upper
                  LTV.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Cosham care home portfolio refinance.
                  </strong>{" "}
                  An operator with three 40-bed care home freeholds
                  along the A2030 corridor in Cosham and Drayton
                  refinancing onto a single portfolio loan with{" "}
                  <strong>Santander</strong>. 65% LTV at 7.35% pa,
                  five-year fix, 20-year amortisation. Three years
                  of clean CQC inspection record and stabilised
                  occupancy above 92 percent on the wider portfolio.
                  The Queen Alexandra Hospital halo and the A2030
                  corridor catchment supported the SME underwrite on
                  the care home archetype.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 4 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                The Tipner Regeneration delivery, the M27 corridor
                industrial absorption, the defence procurement cycle
                and the 2020 to 2022 refinance wave sit at the
                centre of our Portsmouth watching brief through to
                the end of 2027.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 7: Outlook */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">07 &middot; Outlook</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Outlook for late 2026 and 2027.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Four structural factors sit at the centre of the
                  Portsmouth market watching brief through late 2026
                  and 2027. The first is Tipner Regeneration delivery.
                  The flagship Portsmouth scheme is the single
                  largest addition to commercial and residential
                  supply this decade, with phased residential,
                  employment and leisure floor plate landing through
                  2026 and into 2027 alongside the reshaped highway
                  network on the M275 approach. Letting pace,
                  occupier mix on the employment floor plate and the
                  ground-floor leisure tenancy shape will reset
                  reference values for the Portsmouth gateway
                  commercial market. The second is the M27 corridor
                  industrial absorption running west into the wider
                  Solent industrial spine, with the corridor
                  read as a single industrial-warehouse labour shed
                  by the major occupier population and lender panels
                  alike. Investment yields on the M27 corridor are
                  among the tightest in the South Coast commercial
                  market and we expect that to hold through 2027.
                </p>
                <p>
                  The third is the defence procurement cycle. Royal
                  Navy and BAE Systems Maritime activity on the
                  Portsmouth dockyard estate is structurally tied to
                  Ministry of Defence procurement, with the Type 26
                  and Type 31 frigate programmes underpinning the
                  shipyard workload through the decade alongside the
                  carrier strike group operational support cycle.
                  The wider naval supply chain demand picture across
                  the Voyager Park, Walton Road and Airport Service
                  Road industrial flanks is structurally tied to
                  the procurement pipeline, and the lender stance on
                  supply chain freehold is supported by the
                  long-term covenant picture. We track the defence
                  procurement cycle as a material driver of the
                  Portsmouth industrial yield stack through 2027.
                </p>
                <p>
                  The fourth is the structural refinancing wave from
                  the 2020 to 2022 vintage of five-year fixed
                  commercial mortgage debt. Borrowers who locked at
                  3 to 4.5 percent pa five years ago are refinancing
                  into a 6 to 9 percent world. For Portsmouth
                  assets the maths usually works because rents and
                  yields have held: defence supply chain industrial
                  on the Royal Navy and BAE Maritime covenant, HMO
                  and portfolio on the structurally strong
                  University of Portsmouth catchment, central retail
                  and mixed-use on the steady Commercial Road and
                  Cascades absorption flow, semi-commercial on the
                  shop-with-flats and shop-with-HMO-above archetype,
                  and healthcare on the Queen Alexandra Hospital
                  halo and A2030 corridor catchment. The
                  conversation is structural rather than distressed.
                  The trading-business hospitality flank on Gunwharf
                  Quays, Southsea seafront and Old Portsmouth carries
                  the most case-by-case underwrite work; defence
                  supply chain industrial carries the cleanest
                  refinance pipeline.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-lg border border-[color:var(--color-ink)] bg-[color:var(--color-ink)] p-10 text-[color:var(--color-paper)] md:p-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 80% 50%, color-mix(in oklch, var(--color-accent), transparent 50%) 0%, transparent 55%)",
                }}
              />
              <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
                <div>
                  <span className="eyebrow">08 &middot; How to talk to us</span>
                  <h2 className="mt-6 font-editorial text-4xl leading-[1.05] text-[color:var(--color-paper)] md:text-[3.25rem]">
                    Buying, refinancing or holding through 2026?{" "}
                    <span className="text-[color:var(--color-accent)]">
                      Send the deal.
                    </span>
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/75">
                    Whether you are looking at a Southsea PO4 or PO5
                    sui generis HMO acquisition or conversion, a
                    North End PO2 terraced HMO refinance, a Gunwharf
                    Quays marina-front hospitality refinance, an Old
                    Portsmouth heritage hotel or independent
                    restaurant freehold, a Lakeside North Harbour
                    multi-let office investment, a Voyager Park,
                    Walton Road or Airport Service Road industrial
                    freehold on the naval supply chain, a Commercial
                    Road or Cascades semi-commercial shop-with-flats,
                    a Queen Alexandra Hospital halo care home
                    acquisition or a Tipner Regeneration commercial
                    play, the working method is the same. Send
                    through the property details, the LTV target, a
                    rough sense of the trading position or rental
                    income, and we will take it from there. We
                    shortlist three to five lenders from the eight
                    on our active panel,{" "}
                    <strong>Shawbrook</strong>,{" "}
                    <strong>InterBay Commercial</strong>,{" "}
                    <strong>LendInvest</strong>,{" "}
                    <strong>Cynergy Bank</strong>,{" "}
                    <strong>Lloyds</strong>,{" "}
                    <strong>NatWest</strong>,{" "}
                    <strong>Barclays</strong> and{" "}
                    <strong>Santander</strong>, plus the wider
                    ninety-strong network including Hampshire Trust
                    Bank on the local relationship flank, Allica
                    Bank, HTB, Cambridge and Counties, YBS Commercial
                    and Aldermore on the SME challenger flank,
                    Paragon, Together and Foundation Home Loans on
                    the HMO portfolio flank, Fleet Mortgages on the
                    smaller-ticket HMO flank and OakNorth on the
                    larger SME flank. We run live appetite and come
                    back with structured terms covering rate, LTV,
                    term, fees and conditions inside 48 hours. If
                    the numbers do not work, you will know inside
                    two business hours. Phone, email or send through
                    the site contact form.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link href="/contact" className="btn btn-accent">
                    Get indicative terms
                  </Link>
                  <Link
                    href="/calculator"
                    className="btn btn-ghost"
                    style={{
                      borderColor: "var(--color-paper)",
                      color: "var(--color-paper)",
                    }}
                  >
                    Run the calculator
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footnote */}
      <section className="section-tight">
        <div className="container-editorial">
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-[color:var(--color-muted)]">
            Rate ranges and lender positioning quoted reflect the
            Portsmouth commercial mortgage market in May 2026.
            Indicative only; actual offers depend on individual deal
            characteristics. This piece is updated quarterly.
            Commercial mortgages on non-dwelling property are
            unregulated lending. We are not FCA-authorised because
            the products we arrange are unregulated. Where a deal
            would require FCA authorisation, we refer to a regulated
            firm.
          </p>
        </div>
      </section>
    </>
  );
}

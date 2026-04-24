import type { Metadata } from "next";
import Image from "next/image";
import SignupForm from "./signup-form";

export const metadata: Metadata = {
  title: "SB 214: Franklin County's Power Grab Over Kerr Lake - Henderson-Vance FYI",
  description:
    "Senate Bill 214 Part V would give Franklin County eminent domain power over Vance, Warren, and Halifax County land for a Kerr Lake water pipeline. Every claim sourced to public records.",
  openGraph: {
    title: "SB 214: Franklin County's Power Grab Over Kerr Lake",
    description:
      "4 lines buried in a routine bill would strip your county's right to say no. All facts sourced.",
    type: "article",
  },
};

const sb214Cards = [
  { src: "/carousel/sb214-card-01-hook.png", alt: "SB 214 - Franklin County's power grab over Kerr Lake" },
  { src: "/carousel/sb214-card-02-language.png", alt: "The exact bill language from Part V" },
  { src: "/carousel/sb214-card-03-process.png", alt: "How Part V was inserted without public notice" },
  { src: "/carousel/sb214-card-04-vote.png", alt: "The vote - 28-21, party line" },
  { src: "/carousel/sb214-card-05-why.png", alt: "Why - Franklin County wants 15.7 MGD from Kerr Lake" },
  { src: "/carousel/sb214-card-06-money.png", alt: "The money - $200M pipeline, $2M to federal study" },
  { src: "/carousel/sb214-card-07-alternative.png", alt: "A better way - invest in KLRWS" },
  { src: "/carousel/sb214-card-08-tar-river.png", alt: "The Tar River runs through Franklin County" },
  { src: "/carousel/sb214-card-09-cohn.png", alt: "Rep. Bryan Cohn - you don't go take it by force" },
  { src: "/carousel/sb214-card-10-action.png", alt: "Take action - call, show up, speak up" },
];

const contacts = [
  { name: "Rep. Bryan Cohn (D)", district: "District 32 (Granville + Vance)", phone: "(919) 733-5824" },
  { name: "Rep. Matthew Winslow (R)", district: "District 7 (Franklin + part of Vance)", phone: "(919) 715-3032" },
  { name: "Rep. Rodney Pierce (D)", district: "District 27 (Halifax, Northampton, Warren)", phone: "(919) 733-5662" },
  { name: "Sen. Lisa Barnes (R)", district: "District 11 (Franklin, Nash, Vance)", phone: "(919) 715-3030" },
  { name: "Sen. Norman Sanderson (R)", district: "District 2 (Halifax, Warren + others)", phone: "(919) 733-5706" },
];

const timeline = [
  { date: "2005", event: "Army Corps grants KLRWS 20 MGD allocation from Kerr Lake." },
  { date: "2017", event: "Franklin County adopts Water Allocation Ordinance, restricting new connections." },
  { date: "2020-2024", event: "Franklin County makes repeated requests to Henderson for more water. Henderson declines." },
  { date: "Feb. 2025", event: "Engineering study estimates $78.9M pipeline cost from Vance to Franklin County." },
  { date: "March 2025", event: "SB 214 filed. Original text: deannexations only. No mention of Franklin County." },
  { date: "June 2025", event: "Franklin County submits Letter of Intent to Army Corps for Kerr Lake reallocation." },
  { date: "Aug. 2025", event: "Franklin County signs $2M agreement with Army Corps for reallocation study." },
  { date: "Oct. 2025", event: "Franklin County issues $200M RFQ for private water plant and pipeline." },
  { date: "March 2026", event: "Army Corps holds public scoping meeting. Residents voice strong opposition." },
  { date: "April 7", event: "Granville County sends formal opposition letter. Citizens group meets at Warren County Middle School." },
  { date: "April 15", event: "Warrenton Board unanimously approves opposition resolution." },
  { date: "April 21", event: "Conference committee inserts Part V into SB 214. No public hearing." },
  { date: "April 22", event: "Senate passes SB 214 conference report 28-21. Barnes (Vance County) votes Yes." },
  { date: "April 24", event: "Army Corps public comment deadline. Vance County Commissioners hold emergency meeting, adopt resolution opposing SB 214 Part V. Warren County Commissioners hold emergency meeting." },
  { date: "April 24", event: "The Herald reports Franklin County Commission Chairwoman Roxanne Bragg was unaware the provision bypassed county commissioners' consent." },
  { date: "April 28", event: "Citizens gather at NC General Assembly (9 AM). Rep. Pierce holds press conference in Room 1328 (11 AM). House vote on SB 214." },
  { date: "April 29", event: "Governor's Rural Listening Session at VGCC, Henderson. 3:30 PM." },
];

export default function WaterPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative px-6 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red/10 via-background to-background" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 h-1 w-20 bg-red" />
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red">
            House Vote Tuesday, April 28 - Be There
          </p>
          <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            SB 214: Franklin County&apos;s Power Grab{" "}
            <span className="text-gold">Over Kerr Lake</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-muted md:text-xl">
            4 lines buried in a routine bill would strip Vance, Warren, and
            Halifax Counties of their legal right to approve property
            acquisitions by Franklin County, including condemnation by eminent
            domain.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-sm text-subtle">
            Every claim on this page is sourced to public records. No agenda, just facts.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/reports/SB214-Franklin-County-Water-Fact-Sheet.pdf"
              className="rounded bg-gold px-8 py-3 text-sm font-bold uppercase tracking-widest text-background transition hover:bg-gold-dim"
            >
              Download the Full Fact Sheet (PDF)
            </a>
            <a
              href="#take-action"
              className="rounded border border-red/40 bg-red/10 px-8 py-3 text-sm font-bold uppercase tracking-widest text-red transition hover:bg-red/20"
            >
              Take Action Now
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-subtle">
            <a href="/" className="hover:text-gold transition">Home</a>
            <a href="#what" className="hover:text-gold transition">What Is SB 214</a>
            <a href="#opposition" className="hover:text-gold transition">Opposition</a>
            <a href="#why" className="hover:text-gold transition">Why</a>
            <a href="#better-way" className="hover:text-gold transition">A Better Way</a>
            <a href="#fairness" className="hover:text-gold transition">In Fairness</a>
            <a href="#timeline" className="hover:text-gold transition">Timeline</a>
            <a href="#take-action" className="hover:text-gold transition">Take Action</a>
            <a href="#join" className="hover:text-gold transition">Get Involved</a>
            <a href="#cards" className="hover:text-gold transition">Share Cards</a>
          </div>
        </div>
      </section>

      {/* What Is SB 214 */}
      <section id="what" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            What Is <span className="text-gold">SB 214?</span>
          </h2>
          <p className="mb-6 text-muted leading-relaxed">
            Senate Bill 214, titled &quot;Various Local Provisions VII,&quot; is an omnibus
            local government bill that passed the NC Senate on April 22, 2026.
            Buried inside it is <strong className="text-foreground">Part V: Franklin County
            Property Acquisitions</strong>, a four-line provision that would strip
            Vance, Warren, and Halifax Counties of their legal right to approve or
            deny property acquisitions by Franklin County within their borders.
          </p>
          <p className="text-xs text-subtle mb-8">
            Source: NC General Assembly, SB 214 Conference Committee Substitute, S214-PCCS35356-BAxr-6, Page 2, Lines 33-37
          </p>

          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6 mb-8">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">
              The Exact Language
            </h3>
            <p className="text-foreground italic leading-relaxed">
              &quot;Notwithstanding the provisions of G.S. 153A-15, the County of
              Franklin may acquire, including by condemnation, real property or an
              interest in real property located in Halifax, Vance, or Warren County,
              without the consent or approval of the other county&apos;s Board of
              Commissioners.&quot;
            </p>
            <p className="mt-3 text-xs text-subtle">
              Source: SB 214, Section 5
            </p>
          </div>

          <h3 className="mb-3 text-lg font-bold text-blue">
            What G.S. 153A-15 Protects
          </h3>
          <p className="mb-2 text-muted leading-relaxed">
            North Carolina General Statute 153A-15 requires any county seeking to
            acquire or condemn property in another county to first obtain consent
            from that county&apos;s Board of Commissioners. This law protects counties
            from losing tax base and regulatory authority when outside governments
            take property within their borders. Part V of SB 214 overrides this
            protection for Franklin County&apos;s benefit.
          </p>
          <p className="text-xs text-subtle">
            Source: NC General Statutes, Chapter 153A, Section 15
          </p>
        </div>
      </section>

      {/* How It Passed */}
      <section className="px-6 py-16 bg-navy/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            How It Passed the Senate
          </h2>
          <p className="mb-6 text-muted leading-relaxed">
            Part V was <strong className="text-foreground">not in any version of
            SB 214 before the conference committee</strong>. The original bill,
            filed March 3, 2025, dealt only with deannexations in Southport,
            Yadkinville, and Kannapolis. The Franklin County provision was inserted
            during conference committee in April 2026, added to a routine bill
            where it would attract minimal public attention.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            <div className="rounded-lg border border-card-border bg-card p-4">
              <p className="text-2xl font-extrabold text-red">28-21</p>
              <p className="text-sm text-muted">Party-line vote, April 22, 2026</p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-4">
              <p className="text-2xl font-extrabold text-gold">4 people</p>
              <p className="text-sm text-muted">Conference committee wrote Part V</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <div className="rounded border border-card-border bg-card p-4">
              <p className="text-sm font-semibold text-foreground">Every Republican voted Yes. Every Democrat voted No.</p>
              <p className="text-xs text-subtle">Source: Roll Call #502</p>
            </div>
            <div className="rounded border border-card-border bg-card p-4">
              <p className="text-sm font-semibold text-foreground">Sponsor: Senator Benton Sawrey (R), District 10, Johnston County.</p>
              <p className="text-xs text-subtle">Source: ncleg.gov/Members/Biography/s/445</p>
            </div>
            <div className="rounded border border-card-border bg-card p-4">
              <p className="text-sm font-semibold text-foreground">Conference Committee: Sen. Sawrey (Chair), Sen. Dana Jones (R), Rep. Allen Chesser (R, Chair), Rep. Mike Schietzelt (R).</p>
              <p className="text-xs text-subtle">Source: ncleg.gov/Legislation/Bills/Conferees/2025/S214</p>
            </div>
          </div>

          {/* Barnes callout */}
          <div className="rounded-lg border border-red/30 bg-red/10 p-6 mb-6">
            <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-red">
              Senator Barnes Voted Yes
            </h3>
            <p className="text-foreground leading-relaxed">
              Senator Lisa S. Barnes (R), District 11, represents <strong>both
              Franklin County and Vance County</strong>. She voted Yes on a bill
              that benefits Franklin County while stripping protections from Vance
              County, one of the counties she is elected to represent.
            </p>
            <p className="mt-2 text-xs text-subtle">
              Source: Roll Call #502; ncleg.gov/Members/Biography/s/427
            </p>
          </div>

          <p className="mb-2 text-muted leading-relaxed">
            Senator Norman Sanderson (R), District 2, represents both Halifax and
            Warren Counties. He was the <strong className="text-foreground">only
            Republican to vote No</strong>.
          </p>

          {/* Cohn quotes */}
          <div className="mt-8 rounded-lg border border-blue/30 bg-blue/5 p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-blue">
              Rep. Bryan Cohn Spoke Against It
            </h3>
            <p className="mb-4 text-sm text-muted">
              Representative Bryan Cohn (D), District 32, represents Granville and
              Vance Counties. He spoke on the floor against SB 214, stating he had
              been on the phone since 7:14 that morning with colleagues across his
              district who knew nothing about the provision.
            </p>
            <div className="space-y-3">
              {[
                "This bill and this provision is about taking control. It allows one county to assert control over another without those local leaders' consent in those affected communities.",
                "We often make a big deal in this chamber about protecting the rights of local governments and local elected officials, and this goes right in the face of those positions we have taken in the past.",
                "Local control belongs with local government and we are overstepping our bounds as a body by voting for this.",
                "Take the reasoning out of it. This will not stop at Warren, Vance, and Halifax County. This will land in your backyard. We are setting a dangerous precedent by allowing one county to assert control over another.",
                "If you want to be able to develop infrastructure that affects multiple counties and allows for growth and prosperity across the region, then work together in partnerships. You don't go take it by force.",
                "This is what this is leading to, the takeover of water infrastructure that is owned by majority and minority communities, and has been for many, many decades.",
                "Let's rework it and bring it back, but I cannot stand for this bill. It is egregious.",
              ].map((quote, i) => (
                <p key={i} className="border-l-2 border-blue/40 pl-4 text-sm italic text-muted">
                  &quot;{quote}&quot;
                </p>
              ))}
            </div>
            <p className="mt-4 text-xs text-subtle">
              Source: Rep. Bryan Cohn, floor remarks, April 22, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Regional Opposition */}
      <section id="opposition" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            The Region Is <span className="text-red">Pushing Back</span>
          </h2>
          <p className="mb-8 text-muted leading-relaxed">
            Within days of Part V becoming public, county governments across
            the region began passing formal resolutions opposing SB 214. Every
            county named in the bill has taken official action. Not a single
            governing body has spoken in support.
          </p>

          <div className="space-y-4 mb-8">
            {/* Halifax */}
            <div className="rounded-lg border border-card-border bg-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="shrink-0 rounded bg-red px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
                  Unanimous
                </span>
                <h3 className="text-sm font-bold text-foreground">Halifax County Board of Commissioners</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-2">
                Held an emergency meeting and unanimously approved a resolution
                opposing SB 214. More than 300 people attended. Not a single
                speaker supported the bill.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-2">
                Chairman Vernon J. Bryant personally contacted every
                municipality in the county to request opposition resolutions
                and is reaching out to Halifax Horizons, the Economic
                Development Commission, the Intergovernmental Association,
                Roanoke Rapids Sanitary District, and the Upper Coastal Plains
                Council of Governments. Halifax County is organizing two buses
                to the NC General Assembly on April 28.
              </p>
              <p className="text-xs text-subtle">
                Source: Roanoke Rapids Daily Herald, April 24, 2026
              </p>
            </div>

            {/* Warren County */}
            <div className="rounded-lg border border-card-border bg-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="shrink-0 rounded bg-red px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
                  Emergency Meeting
                </span>
                <h3 className="text-sm font-bold text-foreground">Warren County Board of Commissioners</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-2">
                Held an emergency meeting on April 24 at the Warren County
                Armory Civic Center for approval of a resolution opposing
                SB 214 Section 5.
              </p>
              <p className="text-xs text-subtle">
                Source: The Warren Record
              </p>
            </div>

            {/* Vance County */}
            <div className="rounded-lg border border-card-border bg-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="shrink-0 rounded bg-red px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
                  Emergency Meeting
                </span>
                <h3 className="text-sm font-bold text-foreground">Vance County Board of Commissioners</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-2">
                Chairperson Carolyn Faines called an emergency meeting on
                April 24 to adopt a resolution opposing SB 214, Part V,
                Section 5.
              </p>
            </div>

            {/* City of Henderson */}
            <div className="rounded-lg border border-card-border bg-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="shrink-0 rounded bg-red px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
                  Emergency Meeting
                </span>
                <h3 className="text-sm font-bold text-foreground">City of Henderson</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-2">
                The City of Henderson, which controls 60% ownership of the Kerr
                Lake Regional Water System, is holding an emergency meeting in
                opposition to SB 214. Mayor Melissa Elliott has spoken out
                against the bill.
              </p>
            </div>

            {/* Granville County */}
            <div className="rounded-lg border border-card-border bg-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="shrink-0 rounded bg-gold px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-background">
                  Formal Opposition
                </span>
                <h3 className="text-sm font-bold text-foreground">Granville County Board of Commissioners</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Sent a formal letter of opposition on April 7, weeks before
                Part V was even inserted into SB 214, opposing Franklin
                County&apos;s request to the Army Corps for a direct Kerr Lake
                water allocation.
              </p>
            </div>

            {/* Warrenton */}
            <div className="rounded-lg border border-card-border bg-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="shrink-0 rounded bg-red px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
                  Unanimous
                </span>
                <h3 className="text-sm font-bold text-foreground">Town of Warrenton Board of Commissioners</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Unanimously approved a resolution on April 15 opposing
                Franklin County&apos;s request to the Army Corps, supporting
                positions outlined in Granville County&apos;s opposition letter
                and the KLRWS Board&apos;s position on maintaining system
                integrity and equitable cost distribution.
              </p>
              <p className="text-xs text-subtle">
                Source: The Warren Record
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6">
            <p className="text-foreground leading-relaxed font-semibold">
              Six governing bodies across four counties. Zero in support.
              This is not a partisan issue. It is a regional consensus that
              Part V was wrong, and the affected communities deserve a voice.
            </p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            Why: Franklin County Wants{" "}
            <span className="text-gold">Kerr Lake Water</span>
          </h2>
          <p className="mb-8 text-muted leading-relaxed">
            Franklin County does not border Kerr Lake. It is not an owner of the
            Kerr Lake Regional Water System. It currently purchases treated water
            through the City of Henderson. But Franklin County is pursuing an
            independent water intake directly from Kerr Lake, requiring a pipeline
            through Vance County. Part V gives them the power to condemn land for
            that pipeline even if Vance County says no.
          </p>

          <h3 className="mb-4 text-lg font-bold text-gold">
            The Facts (from Franklin County&apos;s Own Website)
          </h3>
          <ul className="space-y-3 mb-8">
            {[
              { fact: "Population projected to double by 2060; water demand projected to triple by 2075." },
              { fact: "Industrial customers account for 44% of current water demand." },
              { fact: "Requesting 15.7 million gallons per day (10,200 acre-feet) from Kerr Lake." },
              { fact: "Feb. 2025 engineering study: $78.9 million pipeline from Vance to Franklin County." },
              { fact: "$200 million RFQ for public-private water plant and pipeline (Sept/Oct 2025)." },
              { fact: "$2 million agreement with Army Corps to fund reallocation study (Aug 2025)." },
              { fact: "Henderson declined repeated requests for additional supply (2020-2024)." },
              { fact: "Current water contract with Henderson through KLRWS expires in 2038." },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="text-sm text-muted">{item.fact}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-subtle mb-10">
            All facts above sourced from franklincountync.gov/649/Future-Water
          </p>

          <h3 className="mb-4 text-lg font-bold text-gold">
            The Kerr Lake Regional Water System
          </h3>
          <ul className="space-y-3 mb-8">
            {[
              "KLRWS is owned by Henderson (60%), Oxford (20%), and Warren County (20%). Franklin County is not an owner.",
              "Army Corps granted KLRWS a 20 MGD annual average day allocation in 2005.",
              "Treatment plant expanding from 10 MGD to 20 MGD, cost exceeding $109 million.",
              "NC HB 74 attempted to redirect $10M in KLRWS expansion funding, including $3M to Franklin County.",
              "If Franklin County leaves the system, remaining partners absorb the lost revenue.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mb-4 text-lg font-bold text-blue">
            The Interbasin Transfer Problem
          </h3>
          <p className="text-muted leading-relaxed">
            Kerr Lake sits in the Roanoke River Basin. Franklin County sits in the
            Tar River Basin. Any water moved from Kerr Lake to Franklin County is
            an interbasin transfer, requiring a separate certificate from the NC
            Environmental Management Commission. The existing KLRWS certificate
            authorizes 14.2 MGD total. Franklin County&apos;s additional 15.7 MGD
            would exceed current limits.
          </p>
        </div>
      </section>

      {/* A Better Path Forward */}
      <section id="better-way" className="px-6 py-16 bg-navy/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            A Better Path Forward:{" "}
            <span className="text-gold">Work Together</span>
          </h2>
          <p className="mb-8 text-muted leading-relaxed">
            Franklin County has a real water challenge. No one disputes that. But
            the solution should strengthen the region, not divide it. Right now,
            Franklin County is preparing to spend over $200 million on a private
            pipeline and a new water plant, plus $2 million on a federal Army Corps
            study. That money flows to private contractors and the U.S. Treasury.
            It does not benefit Henderson, Vance County, Warren County, or the Kerr
            Lake Regional Water System.
          </p>

          <h3 className="mb-4 text-lg font-bold text-gold">
            The Best Option: Invest in KLRWS
          </h3>
          <p className="mb-4 text-muted leading-relaxed">
            The KLRWS has served this region for nearly 50 years. Rather than
            abandoning this system, Franklin County should be strengthening it. A
            regional partnership where everyone invests and everyone benefits is the
            right answer.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Strengthen KLRWS (already expanding from 10 to 20 MGD) rather than creating a competing system.",
              "Keep dollars in the region instead of sending $2M to the Army Corps and $200M to private developers.",
              "Eliminate the need for eminent domain. No pipeline, no condemnation, no override of G.S. 153A-15.",
              "Avoid the interbasin transfer problem. Purchases through KLRWS are already covered by the existing IBT certificate.",
              "Protect the financial stability of the system. If Franklin County leaves, remaining partners absorb the loss.",
              "Maintain good-faith relationships between neighboring counties.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6 mb-10">
            <p className="text-foreground leading-relaxed">
              Franklin County&apos;s $200 million would go further invested into a
              system that already exists, already works, and already serves them.
              With Franklin County as a committed partner rather than a departing
              customer, the system could be expanded even further. Every dollar
              stays in the region. Every community benefits. That is how neighboring
              counties are supposed to work together.
            </p>
          </div>

          <h3 className="mb-4 text-lg font-bold text-blue">
            The Tar River Runs Through Franklin County
          </h3>
          <p className="mb-4 text-muted leading-relaxed">
            The Tar River flows directly through Louisburg, Franklin County&apos;s
            county seat. Rocky Mount&apos;s water system has 26 MGD capacity but uses
            only about 10 MGD, leaving roughly 16 MGD of unused capacity, nearly
            the exact amount Franklin County is requesting from Kerr Lake.
          </p>
          <div className="rounded-lg border border-blue/30 bg-blue/5 p-6 mb-10">
            <p className="text-foreground leading-relaxed">
              If the water Franklin County needs is available 30 miles away in its
              own river basin, with no eminent domain, no interbasin transfer, and
              no federal study required, why is the state legislature being asked to
              strip property protections from three neighboring counties so Franklin
              County can take water from a lake it does not border?
            </p>
          </div>

          <h3 className="mb-4 text-lg font-bold text-red">
            The Resale Concern
          </h3>
          <p className="mb-4 text-muted leading-relaxed">
            Nothing in Part V restricts what Franklin County does with the water or
            property it acquires. Once Franklin County controls a 15.7 MGD
            independent intake and its own $200 million treatment plant, it becomes
            a wholesale water provider. Franklin County already resells water to
            Youngsville, Bunn, and Lake Royale. The counties whose land gets
            condemned for the pipeline do not see a dime of that revenue.
          </p>
        </div>
      </section>

      {/* In Fairness */}
      <section id="fairness" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            In Fairness: Franklin County Has{" "}
            <span className="text-gold">Real Needs</span>
          </h2>
          <p className="mb-6 text-muted leading-relaxed">
            This is not about denying Franklin County water. Their challenge is
            real and it is documented. According to Franklin County&apos;s own public
            filings:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Franklin County made \"repeated written and verbal attempts to purchase additional water from the KLRWS through Henderson\" over four years.",
              "The current infrastructure is \"capped at 5 million gallons per day\" and \"will be insufficient to meet the projected demand of Franklin County and the region by 2040.\"",
              "Even expanding the existing pipe at $50M+ \"will not provide the capacity needed to meet the demand of the region.\"",
              "Franklin County adopted a 2017 ordinance limiting new connections. They have been managing this crisis responsibly.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-subtle mb-8">
            All quotes sourced from franklincountync.gov/649/Future-Water
          </p>

          <div className="rounded-lg border border-blue/30 bg-blue/5 p-6 mb-8">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-blue">
              Franklin County&apos;s Own Chair Didn&apos;t Know
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-3">
              The Herald reached out to Chairwoman Roxanne Bragg of the Franklin
              County Board of Commissioners about what prompted the legislative
              move.
            </p>
            <p className="border-l-2 border-blue/40 pl-4 text-sm italic text-muted mb-3">
              &quot;Well, we need water - that&apos;s what prompted it. The bottom
              line is we need to get water in Franklin County, and we&apos;re doing
              what we can do to get water.&quot;
            </p>
            <p className="text-sm text-muted leading-relaxed mb-3">
              When asked whether it was morally and ethically right to bypass
              the consent of county commissioners, Bragg said she did not know
              anything about that. After being read the provision, Bragg
              deferred to Franklin County Attorney Gena McCray, who could not
              be reached by deadline.
            </p>
            <p className="text-sm text-foreground leading-relaxed font-semibold">
              The chairwoman of the county this provision was written for did
              not know it bypassed neighboring counties&apos; consent. That tells
              you everything about how Part V was created.
            </p>
            <p className="mt-3 text-xs text-subtle">
              Source: The Herald, April 24, 2026
            </p>
          </div>

          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6 mb-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">
              A Call to Our Own Leaders
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              If Franklin County has been asking for more water for four years and
              the answer has been no, then our leaders in Vance County and Henderson
              need to come to the table too. Henderson controls 60% of KLRWS. That
              comes with responsibility to every community the system serves,
              including Franklin County.
            </p>
            <p className="text-foreground leading-relaxed font-semibold">
              We are calling on the Vance County Board of Commissioners, the
              Henderson City Council, and the KLRWS partners to proactively engage
              Franklin County in good-faith negotiations for a regional solution.
              Expand the system. Renegotiate the terms. Find a partnership that
              works for everyone. Do it before the state legislature does it for
              you, on terms that benefit no one in this region.
            </p>
          </div>
          <p className="text-muted leading-relaxed">
            The door should be open. But it should be a door, not a battering ram.
            SB 214 Part V is a battering ram. The alternative is neighbors sitting
            down at the same table and solving this together, the way it should have
            been done from the start.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="px-6 py-16 bg-navy/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            Timeline of <span className="text-gold">Key Events</span>
          </h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 border-l-2 border-card-border pb-6 pl-6 last:pb-0">
                <div>
                  <p className="text-sm font-bold text-blue">{item.date}</p>
                  <p className="text-sm text-muted">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Take Action */}
      <section id="take-action" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            What We Do <span className="text-red">Next</span>
          </h2>

          <div className="rounded-lg border border-red/30 bg-red/10 p-6 mb-10">
            <p className="text-foreground font-semibold leading-relaxed">
              The House vote is scheduled for Tuesday, April 28. We are
              organizing citizens to travel to the NC General Assembly to meet
              with representatives, attend a press conference, and be present
              for the vote.
            </p>
          </div>

          {/* Step 1 - NCGA */}
          <div className="rounded-lg border-2 border-red/50 bg-red/10 p-6 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="shrink-0 rounded bg-red px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                Be There
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-red">
                Tuesday, April 28
              </p>
            </div>
            <h3 className="mb-3 text-lg font-bold text-foreground">
              Step 1: Show Up at the NC General Assembly
            </h3>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              We are organizing a citizen delegation to the NC General Assembly
              in Raleigh on Tuesday, April 28. Meet with your representatives,
              attend the press conference, and be present when the House votes
              on SB 214.
            </p>
            <div className="rounded border border-card-border bg-card p-4 mb-4">
              <ul className="space-y-2 text-sm">
                <li><strong className="text-foreground">Gather:</strong> <span className="text-muted">9:00 AM at the NC General Assembly, Raleigh</span></li>
                <li><strong className="text-foreground">Press Conference:</strong> <span className="text-muted">11:00 AM, Room 1328 (hosted by Rep. Rodney Pierce)</span></li>
                <li><strong className="text-foreground">House Vote:</strong> <span className="text-muted">SB 214 on the calendar. Conference reports cannot be amended. Up-or-down vote only.</span></li>
              </ul>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Rep. Rodney Pierce (D), District 27, representing Halifax,
              Northampton, and Warren Counties, is leading the press conference
              against SB 214. Halifax County is sending two buses of citizens
              to Raleigh. Your presence in the building sends a message that
              cannot be ignored.
            </p>
          </div>

          {/* Step 2 */}
          <h3 className="mb-4 text-lg font-bold text-gold">
            Step 2: Call Your Representatives Before Tuesday
          </h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="py-2 text-left text-gold font-semibold">Name</th>
                  <th className="py-2 text-left text-gold font-semibold">District</th>
                  <th className="py-2 text-left text-gold font-semibold">Phone</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c, i) => (
                  <tr key={i} className="border-b border-card-border/50">
                    <td className="py-2 text-foreground">{c.name}</td>
                    <td className="py-2 text-muted">{c.district}</td>
                    <td className="py-2">
                      <a href={`tel:${c.phone.replace(/[^0-9]/g, "")}`} className="text-blue hover:text-gold transition">
                        {c.phone}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-card-border bg-card p-6 mb-10">
            <h4 className="mb-2 text-sm font-bold uppercase tracking-widest text-blue">What to Say</h4>
            <p className="text-sm text-muted italic leading-relaxed">
              &quot;I am a resident of [Vance/Warren/Halifax] County. I am calling to
              urge you to vote NO on SB 214. Part V of this bill strips our county
              commissioners of the right to approve or deny property acquisitions by
              Franklin County within our borders, including condemnation by eminent
              domain. This provision was inserted during conference committee without
              public input. Our counties deserve a voice in decisions about our own
              land.&quot;
            </p>
          </div>

          {/* Momentum - Emergency Meetings */}
          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6 mb-10">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">
              Momentum Is Building
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-3">
              On April 24, both Vance County and Warren County held emergency
              commissioners meetings to address SB 214. Vance County adopted a
              formal resolution opposing Part V. The counties that would lose
              their protections are on record against this bill.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Rep. Rodney Pierce (D-27) personally reached out to this citizen
              project and invited our coalition to attend his press conference
              at the General Assembly on April 28.
            </p>
          </div>

          {/* Step 3 */}
          <h3 className="mb-4 text-lg font-bold text-gold">
            Step 3: Show Up at VGCC on April 29
          </h3>
          <p className="mb-4 text-muted leading-relaxed">
            Governor Stein&apos;s Rural Listening Session is coming to Henderson the
            day after the House vote is scheduled. Senior administration officials
            will be in the room to hear directly from rural communities. This is our
            chance to put SB 214 and the Kerr Lake water issue in front of the
            Governor&apos;s office.
          </p>
          <div className="rounded-lg border border-card-border bg-card p-6 mb-4">
            <ul className="space-y-2 text-sm">
              <li><strong className="text-foreground">Date:</strong> <span className="text-muted">Tuesday, April 29, 2026</span></li>
              <li><strong className="text-foreground">Location:</strong> <span className="text-muted">VGCC Civic Center, 200 Community College Road, Henderson, NC 27537</span></li>
              <li><strong className="text-foreground">Doors:</strong> <span className="text-muted">3:30 PM | Public Comment: 3:45 PM</span></li>
              <li><strong className="text-foreground">Attending:</strong> <span className="text-muted">Dept. of Revenue Secretary McKinley Wooten + Office of State Budget Director Kristin Walker</span></li>
              <li><strong className="text-foreground">Open to the public.</strong> <span className="text-muted">No RSVP required.</span></li>
              <li className="pt-2">
                <a
                  href="https://governor.nc.gov/josh-stein/investing-rural-nc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue hover:text-gold transition"
                >
                  governor.nc.gov/josh-stein/investing-rural-nc &rarr;
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6 mb-10">
            <p className="text-foreground leading-relaxed">
              If the House passes SB 214 on April 28, the April 29 session becomes
              our opportunity to ask Governor Stein to veto it. If the House has not
              yet voted, it is our opportunity to put pressure on before they do.
              Either way, showing up matters. Bring your neighbors.
            </p>
          </div>

          {/* Step 4 */}
          <h3 className="mb-4 text-lg font-bold text-gold">
            Step 4: Submit Comments to the Army Corps
          </h3>
          <p className="mb-2 text-muted leading-relaxed">
            The Army Corps reallocation study is separate from SB 214 and will
            continue regardless. Written public comments are part of the official
            federal record. The extended comment deadline was April 24, 2026,
            but late comments may still be considered.
          </p>
          <p className="mb-1 text-sm text-foreground">
            Email: <a href="mailto:CESAW-JHKerr-Reallocation-Franklin@usace.army.mil" className="text-blue hover:text-gold transition break-all">CESAW-JHKerr-Reallocation-Franklin@usace.army.mil</a>
          </p>
          <p className="mb-10 text-xs text-subtle">
            USACE project page: saw.usace.army.mil/Locations/District-Lakes-and-Dams/John-H-Kerr-1/JHK-Reallocation-Franklin-County/
          </p>

          {/* Step 4 */}
          <h3 className="mb-4 text-lg font-bold text-gold">
            Step 5: Share This
          </h3>
          <p className="text-muted leading-relaxed">
            Forward the fact sheet to your neighbors, your commissioners, your
            church, your civic organizations. Post it on social media. Print copies
            for community boards. The more people who know about Part V before the
            vote, the harder it is to pass quietly.
          </p>
        </div>
      </section>

      {/* Get Involved */}
      <section id="join" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            Get <span className="text-gold">Involved</span>
          </h2>

          <p className="mb-6 text-muted leading-relaxed">
            We are forming a coalition of citizens from Vance, Warren, Halifax,
            and Granville Counties who believe water policy should be decided
            through good-faith partnerships, not legislative overreach.
          </p>

          <div className="rounded-lg border border-card-border bg-card p-6 mb-8">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
              What We Stand For
            </h3>
            <ul className="space-y-3">
              {[
                {
                  title: "Local control.",
                  desc: "County commissioners should have a voice when another county wants to acquire land within their borders. That is existing law. SB 214 Part V overrides it.",
                },
                {
                  title: "Regional partnership.",
                  desc: "Franklin County needs water. The answer is investing in the Kerr Lake Regional Water System together, not building a competing system that undermines the existing one.",
                },
                {
                  title: "Transparency.",
                  desc: "Part V was inserted with no public hearing, no committee review, and no notice to affected counties. Citizens deserve to know what is being decided in their name.",
                },
                {
                  title: "Fairness on all sides.",
                  desc: "We call on Henderson and Vance County to come to the table with Franklin County in good faith. If they have been asking for four years, our leaders owe them a serious conversation.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-sm text-muted">
                    <strong className="text-foreground">{item.title}</strong>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-card-border bg-card p-6 mb-8">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
              What We Are Doing
            </h3>
            <ul className="space-y-3">
              {[
                "Organizing residents to attend the Governor's Rural Listening Session at VGCC on April 29 (3:30 PM).",
                "Coordinating calls to House members before the vote on SB 214.",
                "Planning a respectful, silent presence at the NC General Assembly when SB 214 reaches the House floor.",
                "Building a contact list of citizens willing to attend public meetings and commissioner sessions.",
                "Sharing sourced, factual information so every resident can form their own informed opinion.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  <span className="text-sm text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6 mb-8">
            <p className="text-sm text-muted leading-relaxed">
              This is not about being against Franklin County. It is about making
              sure decisions that affect our land, our water, and our communities
              are made through dialogue, not through 4 lines inserted into a bill
              at the last minute. If you believe neighbors should work together
              instead of going around each other, we want to hear from you.
            </p>
          </div>

          <h3 className="mb-6 text-lg font-bold text-gold">
            Sign Up
          </h3>
          <SignupForm />
        </div>
      </section>

      {/* Visual Cards */}
      <section id="cards" className="px-6 py-16 bg-navy/30">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-2xl font-extrabold md:text-3xl">
            Share These <span className="text-gold">Cards</span>
          </h2>
          <p className="mb-10 text-center text-sm text-subtle">
            Save and share on social media. Click any card to view full size.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {sb214Cards.map((card) => (
              <a
                key={card.src}
                href={card.src}
                target="_blank"
                className="group overflow-hidden rounded-lg border border-card-border transition hover:border-gold/40"
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={540}
                  height={540}
                  className="h-auto w-full transition group-hover:scale-[1.02]"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-extrabold md:text-3xl">
            Download the Full <span className="text-gold">Fact Sheet</span>
          </h2>
          <p className="mb-8 text-sm text-muted">
            9 pages, every claim sourced, printable. Hand it to your neighbor.
          </p>
          <a
            href="/reports/SB214-Franklin-County-Water-Fact-Sheet.pdf"
            className="inline-block rounded bg-gold px-10 py-4 text-sm font-bold uppercase tracking-widest text-background transition hover:bg-gold-dim"
          >
            Download PDF
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-card-border px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm text-muted">
            This page is a citizen education project. It is not funded by any
            company, activist organization, or political campaign.
          </p>
          <p className="mb-4 text-sm text-muted">
            Share it. Print it. Hand it to your neighbor. Form your own opinion,
            but form it with the facts in front of you.
          </p>
          <p className="text-xs text-subtle">
            Henderson-Vance FYI &middot; April 2026
          </p>
        </div>
      </footer>
    </main>
  );
}

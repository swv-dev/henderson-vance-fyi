import type { Metadata } from "next";
import Image from "next/image";
import SignupForm from "./signup-form";

export const metadata: Metadata = {
  title: "Water Crisis: SB 214, Franklin County Letter, and the Future of KLRWS - Henderson-Vance FYI",
  description:
    "Franklin County demands 51% stake in the Kerr Lake Regional Water System. Full analysis of the May 2026 letter, KLRWS ownership, Kerr Lake allocations, and what a fair deal looks like. Plus the complete SB 214 timeline.",
  openGraph: {
    title: "Franklin County Demands 51% Stake in Our Water System",
    description:
      "Full analysis of the May 2026 letter, KLRWS ownership, Kerr Lake numbers, and what a fair deal looks like. Every claim sourced.",
    type: "article",
  },
};

const franklinCards = [
  { src: "/carousel/franklin-01-hook.png", alt: "A formal proposal for our water system is on the table" },
  { src: "/carousel/franklin-02-letter.png", alt: "Two options - what the Preble letter proposes" },
  { src: "/carousel/franklin-03-ownership.png", alt: "Who owns KLRWS - Henderson 60%, Oxford 20%, Warren 20%" },
  { src: "/carousel/franklin-04-math.png", alt: "The math doesn't work - 6.9 + 14.3 = 21.2 MGD exceeds both caps" },
  { src: "/carousel/franklin-05-kerrlake.png", alt: "Kerr Lake by the numbers - 335 billion gallons, 2.1% allocated" },
  { src: "/carousel/franklin-06-stakes.png", alt: "What each side brings to the table" },
  { src: "/carousel/franklin-07-revenue.png", alt: "This deal is worth $15M+ per year in revenue" },
  { src: "/carousel/franklin-08-pattern.png", alt: "When negotiations stall, everyone loses" },
  { src: "/carousel/franklin-09-protections.png", alt: "A deal can work but only with these protections" },
  { src: "/carousel/franklin-10-cta.png", alt: "Read the full analysis at henderson-vance.fyi/water" },
];

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
  { date: "2019", event: "SB 320 passes Senate 20-17, would withhold $18M in KLRWS funding. Governor Cooper vetoes it.", highlight: true },
  { date: "2020-2024", event: "Franklin County makes repeated requests to Henderson for more water. Henderson declines." },
  { date: "Feb. 2025", event: "Engineering study estimates $78.9M pipeline cost from Vance to Franklin County." },
  { date: "March 2025", event: "SB 214 filed. Original text: deannexations only. No mention of Franklin County." },
  { date: "June 2025", event: "Franklin County submits Letter of Intent to Army Corps for Kerr Lake reallocation." },
  { date: "Aug. 2025", event: "Franklin County signs $2M agreement with Army Corps for reallocation study." },
  { date: "Oct. 2025", event: "Franklin County issues $200M RFQ for private water plant and pipeline." },
  { date: "March 2026", event: "Army Corps holds public scoping meeting at Warren County Armory. 300+ attend. Tremendous opposition." },
  { date: "April 7", event: "Granville County sends formal opposition letter. Citizens group meets at Warren County Middle School." },
  { date: "April 15", event: "Warrenton Board unanimously approves opposition resolution. Haliwa-Saponi Tribal Council adopts opposition resolution." },
  { date: "April 21", event: "Conference committee inserts Part V into SB 214. No public hearing." },
  { date: "April 22", event: "Senate passes SB 214 conference report 28-21. Barnes (Vance County) votes Yes. Sen. Sanderson (R) is the only Republican to vote No." },
  { date: "April 22", event: "House Speaker Destin Hall pulls SB 214 from the House calendar after floor opposition from Rep. Cohn and Rep. Pierce. Bill rescheduled to April 28.", highlight: true },
  { date: "April 24", event: "Army Corps public comment deadline. Vance County, Warren County, City of Henderson, and Roanoke Rapids Sanitary District hold emergency meetings and adopt resolutions opposing SB 214 Part V." },
  { date: "April 24", event: "The Herald reports Franklin County Commission Chairwoman Roxanne Bragg was unaware the provision bypassed county commissioners' consent." },
  { date: "April 26", event: "WRAL and the NC Tribune publish major reports on SB 214. Statewide attention grows.", highlight: true },
  { date: "April 28", event: "Roughly 100 citizens from Halifax, Vance, and Warren Counties travel to Raleigh by bus. Rep. Pierce holds press conference at the Legislative Building with 10 speakers including mayors, county chairs, tribal leaders, and attorneys. SB 214 pulled from House calendar.", highlight: true },
  { date: "April 28", event: "House Speaker Destin Hall announces Section 5 will not appear in the revised conference report. Senate leaders agree to remove it. Franklin County also admitted neighbors were not notified in advance." },
  { date: "April 29", event: "Both chambers vote on revised SB 214 conference report without Section 5 or Section 7 (Forsyth school board provision). Section 5 is officially dead.", highlight: true },
  { date: "April 29", event: "Governor Stein's Rural Listening Session at VGCC, Henderson. 3:30 PM." },
  { date: "May 21", event: "Franklin County Manager Ryan Preble sends formal letter to Henderson, Oxford, and Warren County demanding 51% KLRWS stake or expansion rights. Letter CC'd to General Assembly, Granville County, SGWASA, attorneys, and media (WRAL, Henderson Dispatch, Warren Dispatch, Franklin Times). 30-day deadline: June 21, 2026.", highlight: true },
];

export default function WaterPage() {
  return (
    <main className="flex-1">
      {/* Victory Banner */}
      <section className="bg-gold/15 border-b border-gold/40 px-6 py-5">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">
            Update - April 29, 2026
          </p>
          <p className="text-lg font-extrabold text-foreground md:text-xl mb-2">
            Section 5 of SB 214 Has Been Removed.
          </p>
          <p className="text-sm text-muted md:text-base">
            After unprecedented regional opposition, both chambers voted on a revised conference report without the Franklin County eminent domain provision.{" "}
            <strong className="text-foreground">But remain vigilant.</strong>{" "}
            House Speaker Destin Hall indicated the provision could return if local negotiations fail.{" "}
            <a href="#press-conference" className="text-gold underline hover:text-gold-dim transition">
              Watch the press conference &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="relative px-6 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red/10 via-background to-background" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 h-1 w-20 bg-gold" />
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
            Communities Spoke Up. Section 5 Was Removed.
          </p>
          <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            SB 214: How a Regional Coalition{" "}
            <span className="text-gold">Stopped a Power Grab</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-muted md:text-xl">
            4 lines buried in a routine bill would have stripped Vance, Warren, and
            Halifax Counties of their legal right to approve property
            acquisitions by Franklin County, including condemnation by eminent
            domain. After unprecedented opposition from eight governing bodies, a
            tribal nation, and roughly 100 citizens who traveled to Raleigh by
            bus, Section 5 was removed.
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
            <a href="#press-conference" className="hover:text-gold transition">Press Conference</a>
            <a href="#what" className="hover:text-gold transition">What Was SB 214</a>
            <a href="#opposition" className="hover:text-gold transition">Opposition</a>
            <a href="#why" className="hover:text-gold transition">Why</a>
            <a href="#better-way" className="hover:text-gold transition">A Better Way</a>
            <a href="#news" className="hover:text-gold transition">News Coverage</a>
            <a href="#precedent" className="hover:text-gold transition">Legal Precedent</a>
            <a href="#fairness" className="hover:text-gold transition">In Fairness</a>
            <a href="#franklin-letter" className="hover:text-gold transition text-red font-semibold">Franklin County Letter</a>
            <a href="#klrws" className="hover:text-gold transition">Know Your Water System</a>
            <a href="#kerr-lake" className="hover:text-gold transition">Kerr Lake Numbers</a>
            <a href="#fair-deal" className="hover:text-gold transition">A Fair Deal</a>
            <a href="#timeline" className="hover:text-gold transition">Timeline</a>
            <a href="#whats-next" className="hover:text-gold transition">What&apos;s Next</a>
            <a href="#join" className="hover:text-gold transition">Get Involved</a>
            <a href="#cards" className="hover:text-gold transition">Share Cards</a>
          </div>
        </div>
      </section>

      {/* Press Conference */}
      <section id="press-conference" className="px-6 py-16 bg-navy/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            The Press Conference That{" "}
            <span className="text-gold">Changed Everything</span>
          </h2>
          <p className="mb-6 text-muted leading-relaxed">
            On April 28, 2026, roughly 100 citizens from Halifax, Warren, and
            Vance Counties traveled to the NC Legislative Building in Raleigh
            by bus and van to stand against SB 214. Rep. Rodney Pierce organized
            a press conference where ten speakers stood together: mayors, county
            commission chairs, a tribal leader, an attorney, and state
            representatives. The bill was pulled from the House calendar that
            same day. By April 29, both chambers voted on a revised conference
            report without Section 5.
          </p>

          {/* Video Embed */}
          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6 mb-8">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">
              Watch the Full Press Conference (60 min)
            </h3>
            <p className="text-sm text-muted mb-4">
              12,000+ views. 10 speakers. The moment communities stood up and
              said no.
            </p>
            <a
              href="https://www.facebook.com/share/v/1CVjgDtJg5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-gold px-8 py-3 text-sm font-bold uppercase tracking-widest text-background transition hover:bg-gold-dim"
            >
              Watch on Facebook &rarr;
            </a>
          </div>

          {/* Speakers */}
          <h3 className="mb-4 text-lg font-bold text-gold">
            Who Spoke
          </h3>
          <div className="space-y-4 mb-8">
            {[
              {
                name: "Rep. Rodney Pierce (D-27)",
                role: "Halifax, Northampton, Warren Counties",
                quote: "This should not be a partisan issue. Whether you are a Democrat, a Republican, or unaffiliated, the idea that one county can take property in another county without consent should concern you.",
              },
              {
                name: "Rep. Deb Butler",
                role: "NC House, Finance Committee Subcommittee",
                quote: "North Carolina stands alone, and not in a good way, when it comes to municipal de-annexation. Every single de-annexation must go through the General Assembly because of who you know.",
              },
              {
                name: "Rep. Bryan Cohn (D-32)",
                role: "Granville County, parts of Vance County",
                quote: "This is a unilateral request from one county to be able to enter another county without permission from their elected officials and annex and condemn real property.",
              },
              {
                name: "Mayor Melissa Elliott",
                role: "City of Henderson",
                quote: "Water is life, land is legacy, and justice belongs to poor people too. You cannot take our land, you cannot take our water, and you cannot take our future.",
              },
              {
                name: "Melissa Dixon, Attorney",
                role: "Roanoke Rapids Sanitary District",
                quote: "This attempt by Franklin County to use a local bill to allow it to take land from its neighboring counties is illegal, is immoral, and it is unconscionable.",
              },
              {
                name: "Earl Evans, Vice Chairman",
                role: "Haliwa-Saponi Indian Tribe",
                quote: "My ancestors have called this place home since time immemorial. We are celebrating 500 years of endurance and survival. What is most disappointing is that something like this would occur without consulting with a tribal nation who is your neighbor.",
              },
              {
                name: "Chairman Vernon J. Bryant",
                role: "Halifax County Board of Commissioners",
                quote: "I'm here to tell you, Raleigh, today my commissioners are upset. Every one of them. The fact that another county would want to legislate to take those resources without consent is appalling.",
              },
              {
                name: "Chairman Al Cooper",
                role: "Warren County Board of Commissioners",
                quote: "For too long and too often, Warren County has taken the brunt of bad actions by the NC General Assembly. We have suffered because of a PCB dump, gerrymandering, insufficient funding for schools, and now our land and water resources are up for grabs.",
              },
              {
                name: "Chairwoman Carolyn Faines",
                role: "Vance County Board of Commissioners",
                quote: "I see bullies every day. And one thing a bully does, they try to take. But we stand today, and we stand together.",
              },
              {
                name: "Rep. Amber Baker (D-72)",
                role: "Forsyth County (spoke on Section 7)",
                quote: "You didn't like the election, so we're going to change it and make them run again in two years. That's not how it happens. You don't get a do-over when you don't like the results.",
              },
            ].map((speaker, i) => (
              <div key={i} className="rounded-lg border border-card-border bg-card p-5">
                <div className="mb-2">
                  <p className="text-sm font-bold text-foreground">{speaker.name}</p>
                  <p className="text-xs text-subtle">{speaker.role}</p>
                </div>
                <p className="border-l-2 border-gold/40 pl-4 text-sm italic text-muted">
                  &quot;{speaker.quote}&quot;
                </p>
              </div>
            ))}
          </div>

          {/* Key Outcome */}
          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6 mb-8">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">
              The Result
            </h3>
            <p className="text-foreground leading-relaxed mb-3">
              Rep. Pierce, after the removal:{" "}
              <span className="italic">&quot;Its removal shows that when communities speak up,
              their voices can make a difference.&quot;</span>
            </p>
            <p className="text-foreground leading-relaxed mb-3">
              Sen. Norman Sanderson (R), the only Republican to vote against
              SB 214 in the original vote, also deserves credit for standing
              with his constituents across party lines.
            </p>
            <p className="text-foreground leading-relaxed">
              Inside the building, Deputy Majority Whip Howard Penny Jr. (R-53)
              told Vance County citizens he was firmly opposed, calling the
              provision a &quot;hijacked bill&quot; and warning that if one county
              is allowed to condemn land in another, &quot;you can&apos;t put
              that genie back in the box.&quot; Opposition crossed party lines at
              every level.
            </p>
          </div>

          {/* Warning */}
          <div className="rounded-lg border border-red/30 bg-red/10 p-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-red">
              Remain Vigilant
            </h3>
            <p className="text-foreground leading-relaxed">
              House Speaker Destin Hall indicated the legislature could
              resurrect the provision if local negotiations fail. The Army Corps
              reallocation study continues, with a draft environmental
              assessment expected in fall 2027. The underlying water dispute is
              not resolved. Section 5 is gone, but the pressure that created it
              remains.
            </p>
          </div>
        </div>
      </section>

      {/* What Is SB 214 */}
      <section id="what" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            What Was <span className="text-gold">SB 214 Section 5?</span>
          </h2>
          <p className="mb-6 text-muted leading-relaxed">
            Senate Bill 214, titled &quot;Various Local Provisions VII,&quot; is an omnibus
            local government bill that passed the NC Senate on April 22, 2026.
            Buried inside it was <strong className="text-foreground">Part V, Section 5: Franklin County
            Property Acquisitions</strong>, a four-line provision that would have stripped
            Vance, Warren, and Halifax Counties of their legal right to approve or
            deny property acquisitions by Franklin County within their borders.
            After regional opposition, Section 5 was removed on April 29.
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

          {/* Pierce quotes */}
          <div className="mt-6 rounded-lg border border-red/30 bg-red/5 p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-red">
              Rep. Rodney Pierce Called It &quot;Manifest Destiny&quot;
            </h3>
            <p className="mb-4 text-sm text-muted">
              Representative Rodney Pierce (D), District 27, represents Halifax,
              Northampton, and Warren Counties. He spoke on the floor against SB
              214 during the Wednesday session before Speaker Hall pulled the bill.
            </p>
            <div className="space-y-3">
              {[
                "This straight-up sounds like Manifest Destiny. We just say this is what we want in your county, and we take it.",
                "This bill is no longer what it started as. It has become a vehicle for overreach, stripping rural counties of their rights.",
                "When legislation that impacts land, water and development aligns this closely with a lawmaker's private business interests, the public deserves transparency and accountability.",
                "This bill is about more than deannexation. It's about who controls our land, our water, and our future.",
              ].map((quote, i) => (
                <p key={i} className="border-l-2 border-red/40 pl-4 text-sm italic text-muted">
                  &quot;{quote}&quot;
                </p>
              ))}
            </div>
            <p className="mt-4 text-xs text-subtle">
              Sources:{" "}
              <a href="https://www.wral.com/news/nccapitol/water-access-bill-growth-franklin-vance-warren-halifax-county-nc-legislature-april-2026/" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">WRAL</a>,{" "}
              <a href="https://www.rrdailyherald.com/news/local/rep-pierce-opposes-sb-214-cites-concerns-over-local-control/article_b63fa958-1716-57bf-a329-330eee5ba74f.html" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">Roanoke Rapids Daily Herald</a>,{" "}
              <a href="https://www.961bbb.com/2026/04/24/senate-proposal-sparks-backlash-over-property-water-control-concerns/" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">CMG Plus</a>
            </p>
          </div>

          {/* Penny - Republican opposition */}
          <div className="mt-6 rounded-lg border border-gold/30 bg-gold/5 p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
              Republican Leadership Opposed It Too
            </h3>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              Deputy Majority Whip Howard Penny Jr. (R), District 53, represents
              Harnett County and is a former county commission chair. He spoke
              with citizens from Vance County at the General Assembly on April 28
              and was unequivocal in his opposition.
            </p>
            <div className="space-y-3">
              {[
                "I'm not gonna support that. I live with a bank of Cape Fear River. We got a Harnett regional water. And we can't - anybody want to buy it, they share in the plant, the lines, the process. Franklin County needs to get their hands in their pocket and go find a partner that will work with them.",
                "He hijacked the bill. The bill was basically a clean de-annexation bill. Had nothing to do with this. And then he went in, hijacked the bill, and put that verbiage in there for Franklin County.",
                "Think about the impact on all 100 counties if one county is allowed to do this, and you're on a lake or tributary that's got water. You can't put that genie back in the box.",
                "Basic way a conference report works up here - you take members from the Senate, members from the House, and the conferees come together. Most of the time, we don't take the time to read it because it's been through conference, we assume everything was worked out. In this case, we didn't know this language was added into it.",
              ].map((quote, i) => (
                <p key={i} className="border-l-2 border-gold/40 pl-4 text-sm italic text-muted">
                  &quot;{quote}&quot;
                </p>
              ))}
            </div>
            <p className="mt-4 text-xs text-subtle">
              Source: Conversation with citizens from Vance County, NC General Assembly, April 28, 2026
            </p>
          </div>

          {/* Sossaman - Former Rep */}
          <div className="mt-6 rounded-lg border border-gold/30 bg-gold/5 p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
              Former Rep. Sossaman: Still Fighting From the Outside
            </h3>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              Former Representative Frank Sossaman (R), who represented
              Granville and Vance Counties, has been working behind the scenes
              to stop SB 214 even out of office, spending hours contacting
              current representatives and the Speaker. In an interview on
              April 28, he laid out why Section 5 is dangerous.
            </p>
            <div className="space-y-3">
              {[
                "If this would come into law today, they go after water. Tomorrow, they go after natural resources. And the next day, they go after a landfill. They don't want a landfill in their county, so they'll go to Vance County and get property and have their landfill over here. This right here is just the beginning of a snowball.",
                "What the federal government and the state really wants to happen across North Carolina is to have regional water systems. The federal government has money appropriated for those regional water systems. It also has grant money it can award.",
                "If it becomes a regional water system, the system would pay Henderson what it has invested. It wouldn't be a burden on just one person, it would be a collective deal. Then Henderson could take that money and invest in economic development, in infrastructure, and really moving Henderson forward.",
                "A lot of times you trust leadership who is guiding a bill along. You read over it, but you don't do a deep dive. Good faith. But when they started looking closer at the language - no, no, this can't be. This is opening Pandora's box.",
              ].map((quote, i) => (
                <p key={i} className="border-l-2 border-gold/40 pl-4 text-sm italic text-muted">
                  &quot;{quote}&quot;
                </p>
              ))}
            </div>
            <p className="mt-4 text-xs text-subtle">
              Source: Interview with Charles Turrentine Jr., April 28, 2026
            </p>
          </div>

          {/* Winslow response */}
          <div className="mt-6 rounded-lg border border-card-border bg-card p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-muted">
              Rep. Winslow&apos;s Response
            </h3>
            <p className="mb-3 text-sm text-muted">
              Representative Matthew Winslow (R), District 7, represents Franklin
              County and part of Vance County. He has announced he will not seek
              re-election.
            </p>
            <p className="border-l-2 border-card-border pl-4 text-sm italic text-muted">
              &quot;It&apos;s very narrowly tailored so that it&apos;s only giving access to water resources to Franklin County.&quot;
            </p>
            <p className="mt-3 text-xs text-subtle">
              Source:{" "}
              <a href="https://www.wral.com/news/nccapitol/water-access-bill-growth-franklin-vance-warren-halifax-county-nc-legislature-april-2026/" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">WRAL, April 26, 2026</a>
            </p>
            <p className="mt-3 text-sm text-foreground leading-relaxed">
              Note: The bill&apos;s actual language contains no limitation to water
              infrastructure. It authorizes condemnation of any &quot;real property
              or an interest in real property.&quot; Henderson City Manager Paylor
              Spruill warned it could apply to the KLRWS facility, transmission
              lines, or even county courthouses.
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
                  Unanimous
                </span>
                <h3 className="text-sm font-bold text-foreground">Warren County Board of Commissioners</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-2">
                Held an emergency meeting on April 24 at the Warren County
                Armory Civic Center and unanimously approved a resolution
                opposing SB 214 Section 5.
              </p>
              <p className="text-xs text-subtle">
                Source: The Warren Record
              </p>
            </div>

            {/* Vance County */}
            <div className="rounded-lg border border-card-border bg-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="shrink-0 rounded bg-red px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
                  Unanimous
                </span>
                <h3 className="text-sm font-bold text-foreground">Vance County Board of Commissioners</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-2">
                Chairperson Carolyn Faines called an emergency meeting on
                April 24. The board voted unanimously to oppose SB 214,
                Part V, Section 5.
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

            {/* Haliwa-Saponi */}
            <div className="rounded-lg border border-card-border bg-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="shrink-0 rounded bg-red px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
                  Resolution
                </span>
                <h3 className="text-sm font-bold text-foreground">Haliwa-Saponi Indian Tribe Tribal Council</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                The state-recognized tribal nation, whose citizens primarily
                live in Halifax, Franklin, and Warren Counties, adopted a
                formal resolution opposing SB 214 Section 5. Vice Chairman
                Earl Evans spoke at the April 28 press conference, noting the
                tribe was never consulted despite being directly impacted.
              </p>
            </div>

            {/* Roanoke Rapids Sanitary District */}
            <div className="rounded-lg border border-card-border bg-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="shrink-0 rounded bg-red px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
                  Resolution
                </span>
                <h3 className="text-sm font-bold text-foreground">Roanoke Rapids Sanitary District</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                An independent governmental entity created under state law,
                the Sanitary District adopted a resolution opposing the
                provision. Their attorney, Melissa Dixon, a board-certified
                real estate law expert, argued at the press conference that
                Section 5 was illegal under Article 2 of the NC Constitution,
                citing <em>City of Asheville v. State of NC (2016)</em>.
              </p>
            </div>
          </div>

          {/* Local Officials Quotes */}
          <div className="rounded-lg border border-red/30 bg-red/5 p-6 mb-8">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-red">
              What Local Leaders Are Saying
            </h3>
            <div className="space-y-4">
              <div>
                <p className="border-l-2 border-red/40 pl-4 text-sm italic text-muted">
                  &quot;Totally disrespectful... as low as you can go.&quot;
                </p>
                <p className="mt-1 pl-4 text-xs text-subtle">
                  Halifax County Chairman Vernon J. Bryant
                  (<a href="https://www.rrdailyherald.com/news/local/halifax-county-pushes-back-against-bill-allowing-cross-county-land-seizures-franklin-chairwoman-says-we/article_6ac7ce83-43c6-583e-8843-f91fcd862ad8.html" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">Daily Herald</a>)
                </p>
              </div>
              <div>
                <p className="border-l-2 border-red/40 pl-4 text-sm italic text-muted">
                  &quot;Robbery... unethical.&quot;
                </p>
                <p className="mt-1 pl-4 text-xs text-subtle">
                  Vance County Chairperson Carolyn Faines
                  (<a href="https://www.hendersondispatch.com/archives/local-leaders-rallying-against-sb214/article_947eff14-1113-5afd-8cfe-5123f64b8c8d.html" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">Henderson Dispatch</a>)
                </p>
              </div>
              <div>
                <p className="border-l-2 border-red/40 pl-4 text-sm italic text-muted">
                  &quot;Water is life, land is legacy, and justice belongs to poor people too. You cannot take our land, you cannot take our water, and you cannot take our future.&quot;
                </p>
                <p className="mt-1 pl-4 text-xs text-subtle">
                  Henderson Mayor Melissa Elliott
                  (Press Conference, April 28, 2026)
                </p>
              </div>
              <div>
                <p className="border-l-2 border-red/40 pl-4 text-sm italic text-muted">
                  &quot;I have never seen such legislation in 40 years of local government work.&quot;
                </p>
                <p className="mt-1 pl-4 text-xs text-subtle">
                  Halifax County Attorney Glynn Rollins
                  (<a href="https://www.rrdailyherald.com/news/local/halifax-county-pushes-back-against-bill-allowing-cross-county-land-seizures-franklin-chairwoman-says-we/article_6ac7ce83-43c6-583e-8843-f91fcd862ad8.html" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">Daily Herald</a>)
                </p>
              </div>
              <div>
                <p className="border-l-2 border-red/40 pl-4 text-sm italic text-muted">
                  &quot;This provision could affect the KLRWS facility, transmission lines, or even county courthouses.&quot;
                </p>
                <p className="mt-1 pl-4 text-xs text-subtle">
                  Henderson City Manager Paylor Spruill
                  (<a href="https://www.hendersondispatch.com/archives/local-leaders-rallying-against-sb214/article_947eff14-1113-5afd-8cfe-5123f64b8c8d.html" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">Henderson Dispatch</a>)
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6">
            <p className="text-foreground leading-relaxed font-semibold">
              Eight governing bodies across four counties, plus a tribal
              nation and an independent sanitary district. Zero in support.
              This was not a partisan issue. It was a regional consensus that
              Section 5 was wrong, and the affected communities deserved a
              voice. They used that voice, and Section 5 was removed.
            </p>
          </div>
        </div>
      </section>

      {/* News Coverage */}
      <section id="news" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            News <span className="text-gold">Coverage</span>
          </h2>
          <p className="mb-8 text-muted leading-relaxed">
            SB 214 Section 5 drew statewide and national attention. Here is
            every major report we have found, linked directly to the source,
            from the initial backlash through the removal.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                outlet: "WRAL",
                title: "Protesters flood legislature to oppose land-grab bill over water access",
                reporter: "Staff",
                date: "April 28, 2026",
                url: "https://www.wral.com/news/nccapitol/franklin-county-water-land-legislature-bill-protest-april-2026/",
              },
              {
                outlet: "Yahoo News (National)",
                title: "NC lawmakers scrap eminent domain provision in bill after outcry from local leaders",
                reporter: "AP / Staff",
                date: "April 29, 2026",
                url: "https://www.yahoo.com/news/articles/nc-lawmakers-scrap-eminent-domain-214025231.html",
              },
              {
                outlet: "WUNC (NPR)",
                title: "Neighboring counties push back on Franklin County effort to obtain property for water plant",
                reporter: "Staff",
                date: "April 28, 2026",
                url: "https://www.wunc.org/politics/2026-04-28/franklin-county-property-water-plant-push-back",
              },
              {
                outlet: "Roanoke Rapids Daily Herald",
                title: "Senate strips controversial provision from SB 214 after regional backlash",
                reporter: "Staff",
                date: "April 29, 2026",
                url: "https://www.rrdailyherald.com/news/local/senate-strips-controversial-provision-from-sb-214-after-regional-backlash/article_4c02ebdc-61c4-5f70-a70d-eeb233c8663d.html",
              },
              {
                outlet: "Henderson Dispatch",
                title: "Lawmakers remove Section V from SB 214",
                reporter: "Staff",
                date: "April 29, 2026",
                url: "https://www.hendersondispatch.com/archives/lawmakers-remove-section-v-from-sb-214/article_a3324741-fc6c-5f0f-880c-1a291b12ac1e.html",
              },
              {
                outlet: "Carolina Journal",
                title: "Bill on Franklin County water leads to debate on local authority",
                reporter: "Staff",
                date: "April 2026",
                url: "https://www.carolinajournal.com/bill-on-franklin-county-water-leads-to-debate-on-local-authority/",
              },
              {
                outlet: "Carolina Public Press",
                title: "Franklin County water grab, Forsyth school board topics of NC bill",
                reporter: "Staff",
                date: "April 2026",
                url: "https://carolinapublicpress.org/75435/legislating-or-meddling-proposed-nc-bill-takes-on-local-water-and-school-board-disputes/",
              },
              {
                outlet: "The Warren Record",
                title: "State Rep. Pierce condemns Senate Bill 214, calls it 'A direct threat to rural counties and local control'",
                reporter: "Staff",
                date: "April 2026",
                url: "https://www.warrenrecord.com/news/article_a79384f3-ca9e-46af-a5ca-181f3412a5b7.html",
              },
              {
                outlet: "WRAL",
                title: "Water wars: Booming population, drought driving tension in NC statehouse and beyond",
                reporter: "Will Doran",
                date: "April 26, 2026",
                url: "https://www.wral.com/news/nccapitol/water-access-bill-growth-franklin-vance-warren-halifax-county-nc-legislature-april-2026/",
              },
              {
                outlet: "RRSpin",
                title: "Speakers band together to oppose SB 214",
                reporter: "Staff",
                date: "April 28, 2026",
                url: "https://www.rrspin.com/news/11729-speakers-band-together-to-oppose-sb-214.html",
              },
              {
                outlet: "RRSpin (Opinion)",
                title: "A land grab nobody saw coming",
                reporter: "James David Gailliard",
                date: "April 27, 2026",
                url: "https://www.rrspin.com/opinion/11725-a-land-grab-nobody-saw-coming.html",
              },
              {
                outlet: "RRSpin",
                title: "Franklin County responds to proposed Senate bill",
                reporter: "Staff",
                date: "April 2026",
                url: "https://www.rrspin.com/news/11718-franklin-county-responds-to-proposed-senate-bill.html",
              },
              {
                outlet: "NC Tribune",
                title: "Could Franklin Co. grab Henderson's water plant?",
                reporter: "Staff",
                date: "April 26, 2026",
                url: "https://www.nctribune.com",
              },
              {
                outlet: "Henderson Dispatch",
                title: "Local leaders rallying against SB214",
                reporter: "Tyler Davis",
                date: "April 24, 2026",
                url: "https://www.hendersondispatch.com/archives/local-leaders-rallying-against-sb214/article_947eff14-1113-5afd-8cfe-5123f64b8c8d.html",
              },
              {
                outlet: "Roanoke Rapids Daily Herald",
                title: "Halifax County pushes back against bill allowing cross-county land seizures",
                reporter: "Richard Holm",
                date: "April 23, 2026",
                url: "https://www.rrdailyherald.com/news/local/halifax-county-pushes-back-against-bill-allowing-cross-county-land-seizures-franklin-chairwoman-says-we/article_6ac7ce83-43c6-583e-8843-f91fcd862ad8.html",
              },
              {
                outlet: "Roanoke Rapids Daily Herald",
                title: "Rep. Pierce opposes SB 214, cites concerns over local control",
                reporter: "Staff Reports",
                date: "April 24, 2026",
                url: "https://www.rrdailyherald.com/news/local/rep-pierce-opposes-sb-214-cites-concerns-over-local-control/article_b63fa958-1716-57bf-a329-330eee5ba74f.html",
              },
              {
                outlet: "Roanoke Rapids Daily Herald",
                title: "Roanoke Rapids joins Halifax in opposing bill allowing outside county to seize land",
                reporter: "Staff",
                date: "April 2026",
                url: "https://www.rrdailyherald.com/news/local/roanoke-rapids-joins-halifax-in-opposing-bill-allowing-outside-county-to-seize-land/article_473c2ff6-01f0-5eb7-b578-8802e56e8bf4.html",
              },
              {
                outlet: "CMG Plus / WPTF / 96.1 BBB (Syndicated)",
                title: "Senate proposal sparks local backlash over property, water control concerns",
                reporter: "Laura Gabel & John C. Rose",
                date: "April 24, 2026",
                url: "https://www.961bbb.com/2026/04/24/senate-proposal-sparks-backlash-over-property-water-control-concerns/",
              },
              {
                outlet: "The Warren Record",
                title: "Warrenton board unanimously approves resolution opposing request",
                reporter: "Staff",
                date: "April 15, 2026",
                url: "https://www.warrenrecord.com/news/article_f2a051c9-d32a-4ade-a56a-332be145cd59.html",
              },
              {
                outlet: "The Warren Record",
                title: "Three citizens ask county commissioners for formal opposition",
                reporter: "Staff",
                date: "April 2026",
                url: "https://www.warrenrecord.com/news/article_fde323d5-bd29-40e7-a3be-fb519046297e.html",
              },
            ].map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-card-border bg-card p-5 transition hover:border-gold/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue mb-1">
                      {article.outlet}
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-gold transition leading-snug">
                      {article.title}
                      <span className="ml-1 inline-block text-subtle group-hover:text-gold transition">&rarr;</span>
                    </p>
                    <p className="mt-1 text-xs text-subtle">
                      {article.reporter} | {article.date}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6">
            <p className="text-foreground leading-relaxed">
              Know of coverage we missed? Share it with us at{" "}
              <a href="#join" className="text-gold hover:text-gold-dim transition font-semibold">
                the signup form below
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Precedent: Asheville */}
      <section id="precedent" className="px-6 py-16 bg-navy/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            Legal Precedent:{" "}
            <span className="text-red">They Tried This Before</span>
          </h2>

          {/* Asheville */}
          <div className="rounded-lg border border-red/30 bg-red/5 p-6 mb-8">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-red">
              Asheville Water System (2013-2016)
            </h3>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              In 2013, the NC General Assembly passed House Bill 488, forcing the
              City of Asheville to transfer its entire water system to a regional
              authority. The system included 40 pumping stations, 1,600 miles of
              pipe, and 124,000 customers. Asheville had operated it for over 100
              years.
            </p>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              Asheville sued. After a three-year legal battle, the{" "}
              <strong className="text-foreground">NC Supreme Court ruled 5-2
              that the forced transfer was unconstitutional</strong>, citing
              Article II, Section 24 of the NC Constitution, which prohibits
              local acts &quot;relating to health, sanitation, and the abatement
              of nuisances.&quot;
            </p>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              Justice Sam Ervin IV wrote that the forced transfer was{" "}
              <span className="text-foreground italic">&quot;not a valid exercise
              of sovereign power of legislative branch of government to take or
              condemn property for a public use.&quot;</span>
            </p>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              44 cities and towns filed briefs or resolutions supporting
              Asheville, recognizing that if the legislature could take one
              city&apos;s water system, it could take anyone&apos;s.
            </p>
            <p className="text-xs text-subtle">
              Sources:{" "}
              <a href="https://ncnewsline.com/briefs/after-five-year-legal-battle-nc-supreme-court-rules-asheville-can-keep-its-water-system/" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">NC Newsline</a>,{" "}
              <a href="https://mountainx.com/news/n-c-supreme-court-rules-taking-of-asheville-water-system-unconstitutional/" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">Mountain Xpress</a>,{" "}
              <a href="https://caselaw.findlaw.com/court/nc-supreme-court/1762832.html" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">FindLaw: City of Asheville v. State (2016)</a>
            </p>
          </div>

          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6 mb-8">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">
              Why This Matters for SB 214
            </h3>
            <p className="text-foreground leading-relaxed mb-3">
              Rep. Cohn called Part V &quot;grossly unconstitutional.&quot; The
              Asheville ruling established that the NC legislature cannot use
              local acts to forcibly transfer water infrastructure between local
              governments. SB 214 Part V goes even further, granting one county
              eminent domain power over another county&apos;s land without consent.
            </p>
            <p className="text-foreground leading-relaxed">
              The same constitutional provision, Article II, Section 24, that
              struck down the Asheville seizure applies here. If the legislature
              could not take Asheville&apos;s water system, it cannot give Franklin
              County the power to take Henderson&apos;s.
            </p>
          </div>

          {/* SB 320 */}
          <div className="rounded-lg border border-card-border bg-card p-6 mb-8">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-blue">
              Senate Bill 320 (2019): The First Attempt
            </h3>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              This is not the first time the legislature has been used as leverage
              over Kerr Lake water. In 2019, Senate Bill 320 would have required
              the state to withhold $18 million in federal grants for the KLRWS
              expansion until every local government filed a rate agreement, or
              waived their right to one. The bill was widely seen as a tool to
              pressure Henderson on behalf of Franklin County.
            </p>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              The Senate passed SB 320 on a party-line vote, 20-17.{" "}
              <strong className="text-foreground">Governor Roy Cooper vetoed
              it</strong>, warning that local governments should not use state
              laws to gain the upper hand in negotiations over vital resources
              like water.
            </p>
            <p className="text-xs text-subtle">
              Sources:{" "}
              <a href="https://www.wral.com/fight-over-rates-threatens-18-million-kerr-lake-water-project/18334424/" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">WRAL (2019)</a>,{" "}
              <a href="https://www.ncleg.gov/BillLookup/2019/S320" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">NC General Assembly: SB 320</a>
            </p>
          </div>

          <div className="rounded-lg border border-red/30 bg-red/10 p-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-red">
              A Pattern
            </h3>
            <p className="text-foreground leading-relaxed">
              2019: Use the legislature to hold KLRWS funding hostage. Vetoed.
              2026: Use the legislature to strip counties of their consent
              rights. SB 214 Part V is the second time in seven years that the
              General Assembly has been asked to override local control of Kerr
              Lake water on Franklin County&apos;s behalf. The method escalates
              each time.
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

      {/* Franklin County Letter - May 2026 */}
      <section id="franklin-letter" className="px-6 py-16 bg-navy/30">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red">
            May 21, 2026
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            The Next Move: Franklin County&apos;s{" "}
            <span className="text-gold">Formal Demand</span>
          </h2>
          <p className="mb-6 text-muted leading-relaxed">
            Three weeks after SB 214 Section 5 was removed, Franklin County
            Manager Ryan C. Preble sent a six-page letter to the city managers
            of Henderson, Oxford, and Warren County. The letter was also sent
            via email and U.S. Mail to members of the General Assembly, Granville
            County, South Granville Water and Sewer Authority (SGWASA), two
            attorneys, and four media outlets including WRAL, the Henderson
            Dispatch, the Warren Dispatch, and the Franklin Times.
          </p>
          <p className="mb-8 text-muted leading-relaxed">
            This is not a private negotiation. The letter was made public from
            the moment it was sent. Below is our analysis of every claim in the
            letter, verified against public records, regulatory filings, and
            the facts we have compiled over the past three months.
          </p>

          {/* Download */}
          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6 mb-10">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">
              Read the Full Letter
            </h3>
            <p className="text-sm text-muted mb-4">
              6 pages. From Franklin County Manager Ryan C. Preble to the city
              managers of Henderson, Oxford, and Warren County. Dated May 21, 2026.
            </p>
            <a
              href="/reports/franklin-county-letter-may-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-gold px-8 py-3 text-sm font-bold uppercase tracking-widest text-background transition hover:bg-gold-dim"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Letter (PDF)
            </a>
          </div>

          {/* What the letter demands */}
          <h3 className="mb-4 text-lg font-bold text-red">
            What the Letter Demands
          </h3>
          <p className="mb-6 text-muted leading-relaxed">
            Franklin County presents two options and asks for a signed response
            by <strong className="text-foreground">June 21, 2026</strong> (30
            days). The letter includes signature lines for all three recipients.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            <div className="rounded-lg border border-red/30 bg-red/5 p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-red mb-3">
                Option 1
              </p>
              <p className="text-sm text-foreground font-semibold mb-2">
                Sell Franklin a 51% stake in KLRWS at fair market value.
              </p>
              <p className="text-sm text-muted">
                This would give Franklin County majority ownership and control
                over the water system that Henderson built and has operated for
                over 50 years. Henderson currently holds 60%.
              </p>
            </div>
            <div className="rounded-lg border border-gold/30 bg-gold/5 p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-gold mb-3">
                Option 2
              </p>
              <p className="text-sm text-foreground font-semibold mb-2">
                Sell Franklin a lower percentage with the right to expand at
                Franklin&apos;s cost.
              </p>
              <p className="text-sm text-muted">
                Franklin would receive an ownership stake proportional to its
                financial investment, plus the right to develop additional
                capacity within KLRWS at its own expense.
              </p>
            </div>
          </div>

          {/* Franklin's challenge - from the letter */}
          <h3 className="mb-4 text-lg font-bold text-blue">
            Franklin County&apos;s Challenge (From the Letter)
          </h3>
          <p className="mb-6 text-muted leading-relaxed">
            The letter documents a 19-year history of Franklin County seeking
            long-term water supply. These facts come directly from the letter
            and are verifiable against public records:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Franklin County has 5.5 MGD in water supply from Henderson, Raleigh, and the Franklinton plant. It has already allocated 4.082 MGD.",
              "If demand were measured as annual average instead of maximum daily, Franklin would exceed the 80% Rule (R.61-58.7C(12)), triggering a freeze on new water allocations.",
              "Franklin receives applications for 120,000 GPD per year but can only award 75,000 GPD. The queue for allocation is approximately two years.",
              "Franklin's updated 50-year Master Plan (at the request of the Army Corps) shows a need for 14.3 MGD of finished water and 15.7 MGD of raw water.",
              "Rocky Mount and Wilson both declined to sell water to Franklin County.",
              "The existing 24-inch pipeline from KLRWS can only convey 5 MGD. Henderson would need to sell 67% of its supply and upgrade its entire distribution system to serve Franklin.",
              "Franklin engaged the Army Corps for a Kerr Lake reallocation study, which began in December 2025. The draft report is expected September 2027.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-subtle mb-8">
            Source: Letter from Ryan C. Preble, Franklin County Manager, May 21, 2026.{" "}
            <a href="/reports/franklin-county-letter-may-2026.pdf" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
              Read the full letter (PDF)
            </a>
          </p>

          {/* 19 years of attempts */}
          <h3 className="mb-4 text-lg font-bold text-blue">
            19 Years of Attempts (From the Letter)
          </h3>
          <p className="mb-6 text-muted leading-relaxed">
            The letter documents Franklin County&apos;s history of seeking
            water partnerships. This timeline is drawn directly from the
            letter&apos;s claims:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "2007: Franklin begins talking with Warren County about purchasing water. Warren's engineers (Rivers and Associates) study connecting the systems.",
              "2021-2022: Franklin holds discussions with Warren, Vance, and Granville about installing distribution infrastructure. Offers $750,000 per county ($150K on signing, $100K on permitting, $225K during construction, $275K on permit issuance) plus $0.05/1,000 gallons with a 0.025% annual escalator.",
              "Warren was unwilling to let Franklin install lines without Henderson's consent. Vance said no unless Henderson consented. Henderson did not consent.",
              "Discussions with Granville and SGWASA evolved into an $8.55 million joint project, but SGWASA would only consider a swap of water and sewer services. The deal fell through.",
              "After Granville/SGWASA talks collapsed, their legal counsel offered two legislative proposals (including one in 2023 that required $50M from the General Assembly). Franklin did not support either because neither met its long-term needs.",
              "Henderson City Attorney Rix Edwards asked Franklin for a term sheet. Franklin's terms: either a 51% stake or, at minimum, some ownership plus the ability to expand KLRWS capacity at Franklin's cost.",
              "Both City Manager Terrell Blackmon and his successor Hassan Kingsbury declined short-term supply increases and did not agree to Franklin having an ownership interest or expansion rights.",
              "April 4, 2025: Franklin told City Manager Kingsbury it would proceed to obtain supply elsewhere.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-subtle mb-8">
            Source: Letter from Ryan C. Preble, Franklin County Manager, May 21, 2026. These are Franklin County&apos;s claims. Henderson has not publicly responded.
          </p>

          {/* Who was CC'd */}
          <div className="rounded-lg border border-red/30 bg-red/10 p-6 mb-8">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-red">
              Who Was CC&apos;d on This Letter
            </h3>
            <p className="text-sm text-muted mb-4">
              This letter was not sent privately. It was distributed to elected
              officials, attorneys, and journalists simultaneously. This is a
              public pressure campaign, not a private negotiation.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                "Members of the General Assembly",
                "Granville County",
                "Jim Wrenn, Esq.",
                "SGWASA",
                "Dana Simpson, Esq.",
                "Warren Dispatch",
                "Henderson Dispatch",
                "Franklin Times",
                "WRAL",
              ].map((recipient, i) => (
                <p key={i} className="text-sm text-foreground flex gap-2">
                  <span className="text-red">&bull;</span> {recipient}
                </p>
              ))}
            </div>
          </div>

          {/* The deadline */}
          <div className="rounded-lg border-2 border-red/50 bg-red/10 p-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-red">
              The Deadline
            </h3>
            <p className="text-foreground leading-relaxed font-semibold mb-3">
              Franklin County is asking Henderson, Oxford, and Warren County to
              indicate willingness to accept the &quot;Basic Terms&quot; by{" "}
              <span className="text-red">June 21, 2026</span>.
            </p>
            <p className="text-sm text-muted">
              The letter includes signature lines for Gary Spruill (Henderson
              City Manager), W. Brent Taylor (Oxford City Manager), and Crystal
              Smith (Warren County Manager). There is no legal obligation to
              respond within 30 days. The deadline is a pressure mechanism, made
              more effective by the media CC list.
            </p>
          </div>
        </div>
      </section>

      {/* Know Your Water System */}
      <section id="klrws" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            The System Franklin County Wants Into
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            Know Your <span className="text-gold">Water System</span>
          </h2>
          <p className="mb-8 text-muted leading-relaxed">
            The Kerr Lake Regional Water System has served this region since
            the mid-1970s. Henderson built it, operates it, and holds the
            majority stake. Before anyone can evaluate what Franklin County
            is asking for, every citizen should understand what we have.
          </p>

          {/* Ownership Table */}
          <h3 className="mb-4 text-lg font-bold text-gold">
            KLRWS Ownership
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-card-border text-xs uppercase tracking-wider text-blue">
                  <th className="px-4 py-3">Partner</th>
                  <th className="px-4 py-3">Ownership</th>
                  <th className="px-4 py-3">Role</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">City of Henderson</td>
                  <td className="px-4 py-3 font-bold text-gold">60%</td>
                  <td className="px-4 py-3">Operator and majority owner</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">City of Oxford</td>
                  <td className="px-4 py-3">20%</td>
                  <td className="px-4 py-3">Partner owner</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Warren County</td>
                  <td className="px-4 py-3">20%</td>
                  <td className="px-4 py-3">Partner owner</td>
                </tr>
                <tr className="border-b border-card-border/50 bg-red/5">
                  <td className="px-4 py-3 font-semibold text-foreground">Franklin County</td>
                  <td className="px-4 py-3 text-red">0%</td>
                  <td className="px-4 py-3">Wholesale customer (not an owner)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-subtle mb-8">
            Source:{" "}
            <a href="https://henderson.nc.gov/departments/public_utilities/kerr_lake_regional_water_system/index.php" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
              City of Henderson KLRWS page
            </a>,{" "}
            <a href="https://www.deq.nc.gov/about/divisions/water-resources/water-planning/water-supply-planning/interbasin-transfer-certification/regulated-interbasin-transfers/kerr-lake" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
              NC DEQ IBT Certification
            </a>
          </p>

          {/* Capacity */}
          <h3 className="mb-4 text-lg font-bold text-gold">
            System Capacity
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            <div className="rounded-lg border border-card-border bg-card p-4">
              <p className="text-2xl font-extrabold text-gold">6.9 MGD</p>
              <p className="text-sm text-muted">Current daily draw</p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-4">
              <p className="text-2xl font-extrabold text-blue">10 MGD</p>
              <p className="text-sm text-muted">Current plant rated capacity</p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-4">
              <p className="text-2xl font-extrabold text-gold">20 MGD</p>
              <p className="text-sm text-muted">Expansion target (under construction, ~$80M)</p>
            </div>
            <div className="rounded-lg border border-red/30 bg-red/5 p-4">
              <p className="text-2xl font-extrabold text-red">14.2 MGD</p>
              <p className="text-sm text-muted">IBT certificate cap (hard regulatory ceiling)</p>
            </div>
          </div>

          {/* IBT Breakdown */}
          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6 mb-8">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">
              The Interbasin Transfer Ceiling
            </h3>
            <p className="text-sm text-muted mb-4">
              Kerr Lake sits in the Roanoke River Basin. Most KLRWS customers are
              in other basins. Moving water across basin lines requires an IBT
              certificate from the NC Environmental Management Commission. The
              current certificate caps transfers at 14.2 MGD across three basins:
            </p>
            <div className="grid gap-2 sm:grid-cols-3 mb-4">
              <div className="rounded border border-card-border bg-card p-3 text-center">
                <p className="text-lg font-bold text-foreground">10.7 MGD</p>
                <p className="text-xs text-subtle">Tar River Basin</p>
              </div>
              <div className="rounded border border-card-border bg-card p-3 text-center">
                <p className="text-lg font-bold text-foreground">1.7 MGD</p>
                <p className="text-xs text-subtle">Fishing Creek Basin</p>
              </div>
              <div className="rounded border border-card-border bg-card p-3 text-center">
                <p className="text-lg font-bold text-foreground">1.8 MGD</p>
                <p className="text-xs text-subtle">Neuse River Basin</p>
              </div>
            </div>
            <p className="text-sm text-foreground font-semibold">
              Exceeding 14.2 MGD requires a new IBT proceeding, which takes
              years and includes public comment where any entity can object.
            </p>
            <p className="mt-3 text-xs text-subtle">
              Source:{" "}
              <a href="https://www.deq.nc.gov/about/divisions/water-resources/water-planning/water-supply-planning/interbasin-transfer-certification/regulated-interbasin-transfers/kerr-lake" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
                NC DEQ Kerr Lake IBT Certification
              </a>
            </p>
          </div>

          {/* The 5 MGD bottleneck */}
          <div className="rounded-lg border border-red/30 bg-red/5 p-6 mb-8">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-red">
              The Pipeline Bottleneck
            </h3>
            <p className="text-sm text-muted mb-3">
              Even with the plant expanding to 20 MGD, the 24-inch
              transmission main serving Henderson, Vance County, and Franklin
              County can only convey <strong className="text-foreground">5
              MGD</strong>. Henderson and Vance County need some of that 5 MGD
              themselves. This is why Franklin cannot simply buy more water from
              Henderson. The pipe is the constraint, not the plant.
            </p>
            <p className="text-xs text-subtle">
              Source: Letter from Ryan C. Preble, May 21, 2026 (footnote 3);{" "}
              <a href="https://henderson.nc.gov/departments/public_utilities/kerr_lake_regional_water_system/klrws_expansion.php" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
                KLRWS Expansion page
              </a>
            </p>
          </div>

          {/* Who gets water */}
          <h3 className="mb-4 text-lg font-bold text-gold">
            Who Gets Water from KLRWS
          </h3>
          <p className="mb-4 text-muted leading-relaxed">
            KLRWS serves over 50,000 customers across portions of four
            counties through its three owner-partners and their wholesale
            customers:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mb-8">
            {[
              { name: "City of Henderson", type: "Owner (60%)" },
              { name: "City of Oxford", type: "Owner (20%)" },
              { name: "Warren County", type: "Owner (20%)" },
              { name: "Town of Warrenton", type: "Wholesale" },
              { name: "Town of Norlina", type: "Wholesale" },
              { name: "Town of Kittrell", type: "Wholesale" },
              { name: "Town of Stovall", type: "Wholesale" },
              { name: "Town of Middleburg", type: "Wholesale" },
              { name: "Vance County", type: "Wholesale" },
              { name: "Granville County", type: "Wholesale" },
              { name: "Franklin County", type: "Wholesale (not an owner)" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded border border-card-border bg-card p-3">
                <span className={`h-2 w-2 rounded-full ${item.type.includes("Owner") ? "bg-gold" : "bg-blue"}`} />
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-subtle">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-subtle mb-8">
            Source:{" "}
            <a href="https://henderson.nc.gov/departments/public_utilities/kerr_lake_regional_water_system/index.php" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
              City of Henderson KLRWS page
            </a>,{" "}
            <a href="https://www.franklincountync.gov/649/Future-Water" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
              Franklin County Future Water
            </a>
          </p>

          {/* The expansion */}
          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">
              The $80 Million Expansion
            </h3>
            <p className="text-sm text-muted mb-3">
              KLRWS is currently expanding from 10 MGD to 20 MGD. Ground was
              broken in May 2023. CDM Smith is the design-build contractor. The
              project cost has grown from the original $39.9 million estimate to
              approximately $80 million due to COVID-era inflation. Funding
              secured includes $45.9 million in grants and loans plus $15 million
              in water revenue bonds.
            </p>
            <p className="text-sm text-muted mb-3">
              Oxford&apos;s 20% share of the expansion was partially funded by a
              $10 million state appropriation in October 2023. In 2025, House Bill
              74 attempted to redirect that $10 million to other districts.
              Oxford and its partners fought back. The expansion cost is shared
              60/20/20 per the ownership structure.
            </p>
            <p className="text-xs text-subtle">
              Sources:{" "}
              <a href="https://henderson.nc.gov/departments/public_utilities/kerr_lake_regional_water_system/klrws_expansion.php" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
                KLRWS Expansion
              </a>,{" "}
              <a href="https://www.wunc.org/politics/2025-05-07/oxford-nc-funding-water-plant" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
                WUNC
              </a>,{" "}
              <a href="https://www.hendersondispatch.com/news/kerr-lake-water-partners-working-to-cover-shortfall-for-treatment-expansion/article_24b04bfe-4195-51ac-8f24-55fe3c32317d.html" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
                Henderson Dispatch
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Kerr Lake: The Full Picture */}
      <section id="kerr-lake" className="px-6 py-16 bg-navy/30">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            The Source
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            Kerr Lake: <span className="text-gold">The Full Picture</span>
          </h2>
          <p className="mb-8 text-muted leading-relaxed">
            John H. Kerr Reservoir (Kerr Lake) was built by the Army Corps
            of Engineers between 1947 and 1952 on the Roanoke River at the
            NC/VA state line. It is managed by the USACE Wilmington District.
            Water supply is only one of its authorized purposes, alongside
            flood control, hydropower, recreation, and fish and wildlife.
          </p>

          {/* Key stats */}
          <div className="grid gap-4 sm:grid-cols-3 mb-8">
            <div className="rounded-lg border border-card-border bg-card p-4 text-center">
              <p className="text-2xl font-extrabold text-gold">335B</p>
              <p className="text-xs text-subtle">Gallons in usable conservation pool</p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-4 text-center">
              <p className="text-2xl font-extrabold text-blue">48,900</p>
              <p className="text-xs text-subtle">Acres at full pool</p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-4 text-center">
              <p className="text-2xl font-extrabold text-gold">800 mi</p>
              <p className="text-xs text-subtle">Shoreline</p>
            </div>
          </div>

          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6 mb-8">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">
              Current Lake Level (May 22, 2026)
            </h3>
            <p className="text-foreground font-semibold mb-2">
              299.30 ft MSL - 99.77% of full pool
            </p>
            <p className="text-sm text-muted">
              North Carolina is experiencing its worst drought since the 1930s
              Dust Bowl. March 2026 was the driest month on record. 61% of the
              state is under extreme drought. Despite this, Kerr Lake remains
              near full pool because its large watershed buffers short-term
              precipitation deficits. But hydrologists warn groundwater
              recharge is failing, and the lake cannot hold indefinitely.
            </p>
            <p className="mt-3 text-xs text-subtle">
              Sources:{" "}
              <a href="https://kerr.uslakes.info/Level/" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
                Kerr Lake live level
              </a>,{" "}
              <a href="https://farmvilleherald.com/2026/05/much-of-area-now-in-extreme-drought-status/" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
                Farmville Herald (drought)
              </a>
            </p>
          </div>

          {/* Who draws from Kerr Lake */}
          <h3 className="mb-4 text-lg font-bold text-gold">
            Everyone Drawing Water from Kerr Lake
          </h3>
          <p className="mb-6 text-muted leading-relaxed">
            Only six entities have formal water storage contracts or
            grandfathered rights with the Army Corps to withdraw water from
            Kerr Lake. KLRWS (Henderson) holds the largest allocation.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-card-border text-xs uppercase tracking-wider text-blue">
                  <th className="px-4 py-3">Entity</th>
                  <th className="px-4 py-3">Allocation</th>
                  <th className="px-4 py-3">% of Pool</th>
                  <th className="px-4 py-3">Max Withdrawal</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">KLRWS (Henderson, NC)</td>
                  <td className="px-4 py-3">10,292 AF</td>
                  <td className="px-4 py-3">~1.0%</td>
                  <td className="px-4 py-3 font-bold text-gold">20 MGD</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">City of Virginia Beach</td>
                  <td className="px-4 py-3">10,200 AF</td>
                  <td className="px-4 py-3">1.066%</td>
                  <td className="px-4 py-3">Via Lake Gaston pipeline</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">VA Dept. of Corrections</td>
                  <td className="px-4 py-3">23 AF</td>
                  <td className="px-4 py-3">0.0024%</td>
                  <td className="px-4 py-3">0.06 MGD</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Dominion / Mecklenburg Cogen</td>
                  <td className="px-4 py-3">600 AF</td>
                  <td className="px-4 py-3">0.063%</td>
                  <td className="px-4 py-3">~3 MGD</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Town of Clarksville, VA</td>
                  <td className="px-4 py-3">Grandfathered</td>
                  <td className="px-4 py-3">No limit</td>
                  <td className="px-4 py-3">~0.23 MGD avg</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Burlington Industries</td>
                  <td className="px-4 py-3">Grandfathered</td>
                  <td className="px-4 py-3">No limit</td>
                  <td className="px-4 py-3">Plant closed 2004</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-gold/40">
                  <td className="px-4 py-3 font-bold text-foreground">Total Allocated</td>
                  <td className="px-4 py-3 font-bold text-gold">~21,115 AF</td>
                  <td className="px-4 py-3 font-bold text-gold">~2.1%</td>
                  <td className="px-4 py-3" />
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6 mb-8">
            <p className="text-foreground leading-relaxed font-semibold mb-3">
              Approximately 98% of Kerr Lake&apos;s usable conservation pool is
              not formally allocated for water supply.
            </p>
            <p className="text-sm text-muted">
              That does not mean it is &quot;free.&quot; The unallocated portion
              serves hydropower generation, low-flow augmentation for downstream
              ecosystems, fish and wildlife habitat, and recreation (1 million+
              annual visitors). These are all authorized project purposes that
              compete with water supply. Any new allocation requires the Army
              Corps to determine whether water can be reallocated without
              harming these other purposes.
            </p>
            <p className="mt-3 text-xs text-subtle">
              Source:{" "}
              <a href="https://epec.saw.usace.army.mil/kerrpert.txt" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
                USACE Kerr Dam Pertinent Data
              </a>,{" "}
              <a href="https://www.saw.usace.army.mil/Locations/District-Lakes-and-Dams/John-H-Kerr-1/JHK-Reallocation-Franklin-County/" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
                USACE Reallocation Study
              </a>
            </p>
          </div>

          {/* The math that doesn't work */}
          <div className="rounded-lg border-2 border-red/50 bg-red/10 p-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-red">
              The Math That Doesn&apos;t Work
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              Franklin County wants 14.3 MGD of finished water. KLRWS currently
              draws 6.9 MGD. Combined, that&apos;s 21.2 MGD.
            </p>
            <div className="grid gap-2 sm:grid-cols-3 mb-4">
              <div className="rounded border border-card-border bg-card p-3 text-center">
                <p className="text-lg font-bold text-foreground">6.9 MGD</p>
                <p className="text-xs text-subtle">Current KLRWS draw</p>
              </div>
              <div className="rounded border border-card-border bg-card p-3 text-center">
                <p className="text-lg font-bold text-foreground">+ 14.3 MGD</p>
                <p className="text-xs text-subtle">Franklin&apos;s 50-year demand</p>
              </div>
              <div className="rounded border border-red/30 bg-red/5 p-3 text-center">
                <p className="text-lg font-bold text-red">= 21.2 MGD</p>
                <p className="text-xs text-subtle">Exceeds both caps</p>
              </div>
            </div>
            <p className="text-sm text-foreground font-semibold mb-2">
              That exceeds both the USACE allocation (20 MGD) and the IBT
              certificate (14.2 MGD).
            </p>
            <p className="text-sm text-muted">
              Franklin County&apos;s full 50-year demand cannot be met under
              existing regulatory approvals. A new IBT proceeding would take
              years. A new USACE allocation would require Congressional
              authorization if it exceeds the original project scope. These
              are not negotiation points. They are regulatory ceilings.
            </p>
          </div>
        </div>
      </section>

      {/* What a Fair Deal Looks Like */}
      <section id="fair-deal" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            The Path Forward
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            What a <span className="text-gold">Fair Deal</span> Could Look Like
          </h2>
          <p className="mb-8 text-muted leading-relaxed">
            Franklin County&apos;s water challenge is real. A 51% ownership
            stake is not the answer. But Option 2 in the Preble letter -
            a lower percentage with the right to expand at Franklin&apos;s
            cost - is a conversation worth having. If the terms are
            right, this could be a deal that works for everyone in the region.
            But the terms must be right.
          </p>

          {/* Why option 1 is off the table */}
          <div className="rounded-lg border border-red/30 bg-red/5 p-6 mb-8">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-red">
              Why 51% Cannot Happen
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-3">
              Henderson built and has operated KLRWS for over 50 years. It
              currently holds 60% ownership. A 51% transfer to Franklin County
              means Franklin controls the board, controls rate-setting, controls
              expansion priorities, and controls who else gets water.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Henderson and Vance County depend on this water for their own
              growth, including potential data center developments that could
              consume 300,000 to 1 million gallons per day. Handing majority
              control to a county that is contiguous to Wake County and will
              grow significantly faster than Vance County is handing them the
              keys to our water future.
            </p>
          </div>

          {/* Why option 2 can work */}
          <h3 className="mb-4 text-lg font-bold text-gold">
            Why Option 2 Can Work - With Protections
          </h3>
          <p className="mb-6 text-muted leading-relaxed">
            Franklin County paying for its own infrastructure while purchasing
            water through KLRWS is a win-win. Henderson gets revenue. Franklin
            gets water. The system gets stronger. But the governance terms must
            protect the communities that built this system.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                title: "Ownership proportional to investment, not demand.",
                desc: "Franklin's stake should reflect what they invest into the system, determined by an independent appraisal of total enterprise value. The letter says Franklin wants ownership 'commensurate with its debt.' That's reasonable, but the denominator matters. KLRWS's value includes 50 years of operations, the USACE allocation, the IBT certificate, and institutional relationships, not just hard assets.",
              },
              {
                title: "Henderson must retain operating authority.",
                desc: "Henderson built it, Henderson runs it. Operational control cannot transfer to a new partner regardless of ownership percentage. This should be written into any agreement as non-negotiable.",
              },
              {
                title: "Supermajority voting for major decisions.",
                desc: "Rate changes, new partners, asset sales, and capital expenditures above a threshold should require 75% approval. This gives Henderson effective veto power even without majority ownership, and ensures no two partners can override the system's founders.",
              },
              {
                title: "Expansion rights capped at 14.3 MGD.",
                desc: "Franklin's own 50-year plan defines this number. Cap it. If they need more in the future, they come back to the table. No open-ended expansion rights.",
              },
              {
                title: "Existing customer priority during drought.",
                desc: "When Kerr Lake levels drop, water curtailment should be proportional to historical investment, not current ownership percentage. Partners who have been in since the 1970s get priority over a partner that joined in 2026.",
              },
              {
                title: "Non-circumvention clause.",
                desc: "After SB 214 and SB 320, any agreement must include explicit language: Franklin permanently waives the right to pursue legislative action or eminent domain against KLRWS participants. If they go back to the General Assembly while under contract, the agreement terminates.",
              },
              {
                title: "Kerr Lake exclusivity.",
                desc: "If Franklin secures an independent Army Corps allocation for Kerr Lake and builds its own treatment facility drawing from the lake, their KLRWS ownership automatically forfeits to the existing partners. Henderson is sacrificing its own growth capacity to sell water to Franklin. If Franklin then puts its own straw in the same lake, that's a direct conflict. Different sources (Tar River, Lake Gaston) would not trigger this clause.",
              },
              {
                title: "Transfer restrictions.",
                desc: "Franklin cannot sell, assign, or transfer its ownership stake to any third party, especially private utilities or developers, without unanimous consent of existing partners.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-card-border bg-card p-5">
                <p className="text-sm font-bold text-foreground mb-2">{item.title}</p>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* The Money */}
          <h3 className="mb-4 text-lg font-bold text-gold">
            The Money: What This Deal Is Actually Worth
          </h3>
          <p className="mb-6 text-muted leading-relaxed">
            This is not just a water negotiation. This is a revenue opportunity
            for Henderson and the KLRWS partners. Franklin County needs water
            at scale, and they are willing to pay for it. The question is
            whether Henderson comes to the table with a real offer or continues
            to say no until the state legislature or the Army Corps forces a
            worse outcome.
          </p>

          {/* Current rate situation */}
          <div className="rounded-lg border border-red/30 bg-red/5 p-6 mb-6">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-red">
              What Franklin Pays Now
            </h4>
            <p className="text-sm text-muted leading-relaxed mb-3">
              Franklin County pays Henderson{" "}
              <strong className="text-foreground text-red">$11.44 per 1,000
              gallons</strong> for bulk municipal water through KLRWS. For
              comparison, the highest wholesale rate we found anywhere in
              North Carolina is $4.62 (Fayetteville to Hoke County).
              Franklin County is paying{" "}
              <strong className="text-foreground">more than double the most
              expensive wholesale rate in the state</strong>.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-3">
              Rep. Matthew Winslow (R-Franklin) stated publicly that Henderson
              charges Franklin County{" "}
              <strong className="text-foreground">&quot;four times as much as
              other customers who receive water from the compact.&quot;</strong>{" "}
              At $11.44, the math checks out: if KLRWS partner rates are
              approximately $2.85/1,000 gallons, the 4x claim is accurate.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-3">
              Franklin County&apos;s residents then pay $12.53/1,000 gallons
              over 2,000 gallons of consumption, with a $51.47 monthly base
              rate. That means Franklin County is marking up only $1.09 per
              1,000 gallons from its wholesale cost. Their residents are
              essentially paying Henderson&apos;s wholesale rate as their
              retail rate.
            </p>
            <p className="text-xs text-subtle">
              Sources:{" "}
              <a href="https://www.wral.com/news/nccapitol/water-access-bill-growth-franklin-vance-warren-halifax-county-nc-legislature-april-2026/" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
                WRAL, April 26, 2026
              </a>,{" "}
              <a href="https://www.wunc.org/politics/2026-04-28/franklin-county-property-water-plant-push-back" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
                WUNC
              </a>,{" "}
              <a href="https://www.franklincountync.gov/649/Future-Water" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
                Franklin County
              </a>
            </p>
          </div>

          {/* NC wholesale benchmarks */}
          <div className="rounded-lg border border-card-border bg-card p-6 mb-6">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-blue">
              What Other NC Systems Charge (Wholesale)
            </h4>
            <p className="text-sm text-muted leading-relaxed mb-4">
              For context, here is what other North Carolina regional water
              systems charge wholesale customers per 1,000 gallons:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-card-border text-xs uppercase tracking-wider text-blue">
                    <th className="px-4 py-2">Seller</th>
                    <th className="px-4 py-2">Buyer</th>
                    <th className="px-4 py-2">Rate / 1,000 gal</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-2 text-foreground">Fayetteville PWC</td>
                    <td className="px-4 py-2">Hoke County</td>
                    <td className="px-4 py-2 font-semibold">$4.62</td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-2 text-foreground">Johnston County</td>
                    <td className="px-4 py-2">Municipal customers</td>
                    <td className="px-4 py-2 font-semibold">$3.95</td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-2 text-foreground">Asheville</td>
                    <td className="px-4 py-2">Wholesale volume</td>
                    <td className="px-4 py-2 font-semibold">$2.91</td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-2 text-foreground">Asheville</td>
                    <td className="px-4 py-2">Capacity-based</td>
                    <td className="px-4 py-2 font-semibold">$1.64</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              The typical range for NC regional wholesale water is{" "}
              <strong className="text-foreground">$1.50 to $5.00 per 1,000
              gallons</strong>. Franklin County currently pays Henderson{" "}
              <strong className="text-foreground">$11.44 per 1,000
              gallons</strong> - more than double the highest rate in this
              table and roughly four times what KLRWS partner communities
              pay. A fair volume-based rate would bring Franklin closer to
              these benchmarks while still generating significant revenue
              for KLRWS.
            </p>
            <p className="mt-3 text-xs text-subtle">
              Sources:{" "}
              <a href="https://dashboards.efc.sog.unc.edu/nc" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
                UNC EFC NC Water Rates Dashboard
              </a>,{" "}
              <a href="https://www.ashevillenc.gov/service/rates-fees/" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
                Asheville Rates
              </a>,{" "}
              <a href="https://www.johnstonnc.gov/utilities/dPDFs/FeePagetActive1-9.cfm" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gold transition">
                Johnston County Fee Schedule
              </a>
            </p>
          </div>

          {/* Volume pricing opportunity */}
          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6 mb-6">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">
              The Revenue Opportunity
            </h4>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Franklin County&apos;s 50-year demand is 14.3 MGD. At wholesale
              rates, even with volume discounts, this represents significant
              long-term revenue for KLRWS. A volume-based declining block
              rate structure, standard in NC wholesale agreements, would give
              Franklin real savings at scale while guaranteeing KLRWS
              consistent income:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-card-border text-xs uppercase tracking-wider text-gold">
                    <th className="px-4 py-2">Volume Tier</th>
                    <th className="px-4 py-2">Daily Volume</th>
                    <th className="px-4 py-2">Rate Approach</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-2 text-foreground font-semibold">Base</td>
                    <td className="px-4 py-2">0 - 2 MGD</td>
                    <td className="px-4 py-2">Standard wholesale rate (match partner rate)</td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-2 text-foreground font-semibold">Tier 2</td>
                    <td className="px-4 py-2">2 - 5 MGD</td>
                    <td className="px-4 py-2">10-15% volume discount</td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-2 text-foreground font-semibold">Tier 3</td>
                    <td className="px-4 py-2">5 - 10 MGD</td>
                    <td className="px-4 py-2">15-25% volume discount</td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-2 text-foreground font-semibold">Tier 4</td>
                    <td className="px-4 py-2">10+ MGD</td>
                    <td className="px-4 py-2">20-30% volume discount</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-3">
              On top of the per-gallon rate, a{" "}
              <strong className="text-foreground">fixed monthly capacity
              charge</strong> guarantees KLRWS revenue regardless of how much
              Franklin actually draws in a given month. This is standard
              practice in NC wholesale agreements.
            </p>
            <p className="text-sm text-foreground font-semibold">
              At even a conservative $3.00/1,000 gallons on 5 MGD, that is
              over $5.4 million per year in revenue for KLRWS. At full
              buildout (14.3 MGD), the annual revenue potential exceeds
              $15 million. That money stays in the region and funds the
              system everyone depends on.
            </p>
          </div>

          {/* Rate protections */}
          <div className="rounded-lg border border-card-border bg-card p-6 mb-6">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-blue">
              Rate Protections That Must Be in Any Agreement
            </h4>
            <ul className="space-y-3">
              {[
                {
                  title: "Floor rate.",
                  desc: "Franklin's per-gallon rate can never drop below KLRWS's actual cost of production. The system cannot sell water at a loss.",
                },
                {
                  title: "CPI escalator.",
                  desc: "Annual rate increases tied to the Consumer Price Index or actual operating cost increases, whichever is greater. The 0.025% annual escalator Franklin offered in 2021 is not serious. Standard practice is 2-3% per year.",
                },
                {
                  title: "Most-favored-customer clause.",
                  desc: "Franklin's effective rate per gallon can never be lower than what Henderson and Vance County residents pay. Bulk discounts for volume are appropriate, but Franklin cannot get a better deal than the communities that built the system.",
                },
                {
                  title: "Minimum purchase commitment.",
                  desc: "Franklin commits to purchasing a minimum volume each year, increasing on a ramp-up schedule. This protects KLRWS from investing in capacity that Franklin then chooses not to use.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  <span className="text-sm text-muted">
                    <strong className="text-foreground">{item.title}</strong>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Accountability */}
          <div className="rounded-lg border-2 border-gold/50 bg-gold/10 p-6 mb-8">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">
              A Call to Henderson: Come to the Table
            </h4>
            <p className="text-sm text-foreground leading-relaxed mb-3">
              Henderson has said no to Franklin County for years. That cannot
              continue. Every time Henderson refuses to negotiate, Franklin
              County goes to the General Assembly or the Army Corps, and the
              outcome gets worse for everyone in the region.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-3">
              SB 320 in 2019 happened because negotiations stalled. SB 214
              Section 5 in 2026 happened because negotiations stalled. This
              letter happened because negotiations stalled. The pattern is
              clear: when Henderson does not engage, Franklin escalates.
            </p>
            <p className="text-sm text-foreground leading-relaxed font-semibold mb-3">
              This deal is worth tens of millions of dollars in long-term
              revenue for KLRWS. Franklin County is offering to pay for its own
              infrastructure. The money is real. The demand is real. The
              alternative to a negotiated deal is a forced outcome that benefits
              no one in this region.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Henderson controls 60% of KLRWS. That comes with the
              responsibility to lead, not just to hold. Citizens of Henderson
              and Vance County should be asking their elected officials and
              city management: what is our counteroffer? Because right now,
              the only proposals on the table are coming from Franklin County.
            </p>
          </div>

          {/* What Henderson gives up */}
          <div className="rounded-lg border border-red/30 bg-red/10 p-6 mb-8">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-red">
              What Henderson Gives Up
            </h3>
            <p className="text-sm text-foreground leading-relaxed mb-3">
              This is not Henderson selling surplus water. This is Henderson
              selling its own future and its own stake in the system it built.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-3">
              <strong className="text-foreground">Growth capacity.</strong>{" "}
              KLRWS is expanding to 20 MGD. The gap between the current 6.9 MGD
              draw and 20 MGD is what Henderson and Vance County need for their
              own growth. Potential data centers. Population increases. Economic
              development. Every gallon allocated to Franklin is a gallon
              Henderson cannot use.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-3">
              <strong className="text-foreground">Ownership and control.</strong>{" "}
              Any ownership stake given to Franklin comes directly out of
              Henderson&apos;s 60%. Henderson is not just selling water. It is
              permanently reducing its own share of control over the system it
              built, funded, and operated for over 50 years. That percentage
              does not come back.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-3">
              <strong className="text-foreground">And here is the real
              risk.</strong>{" "}
              Franklin County is simultaneously pursuing a $2 million Army Corps
              reallocation study to secure its own independent 15.7 MGD
              allocation directly from Kerr Lake. If that study succeeds and
              Franklin builds its own treatment plant on the lake, Henderson
              will have permanently given up ownership percentage and governance
              control for nothing. Franklin would have its own water source AND
              a stake in Henderson&apos;s system. Henderson would have less
              control, less capacity, and no ongoing revenue to show for it.
            </p>
            <p className="text-sm text-foreground leading-relaxed font-semibold">
              That is why the Kerr Lake exclusivity clause is non-negotiable.
              If Franklin puts its own straw in Kerr Lake, their KLRWS
              ownership forfeits. Henderson cannot sacrifice both water and
              control and get nothing in return.
            </p>
          </div>

          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6">
            <p className="text-foreground leading-relaxed font-semibold mb-3">
              The door is open. It should stay open.
            </p>
            <p className="text-sm text-muted">
              Franklin County has a legitimate need. Henderson has a system worth
              investing in. The answer is not a 51% takeover. The answer is not
              a battering ram through the General Assembly. The answer is
              neighbors sitting down at the same table with clear terms,
              fair pricing, governance protections, and a commitment to the
              region. That has always been the answer.
            </p>
          </div>
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
              <div key={i} className={`flex gap-4 border-l-2 pb-6 pl-6 last:pb-0 ${item.highlight ? "border-gold" : "border-card-border"}`}>
                <div>
                  <p className={`text-sm font-bold ${item.highlight ? "text-gold" : "text-blue"}`}>{item.date}</p>
                  <p className={`text-sm ${item.highlight ? "text-foreground font-semibold" : "text-muted"}`}>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section id="whats-next" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-extrabold md:text-3xl">
            What Comes <span className="text-gold">Next</span>
          </h2>

          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6 mb-10">
            <p className="text-foreground font-semibold leading-relaxed">
              Section 5 is gone. But the underlying water dispute is
              accelerating. On May 21, 2026, Franklin County sent a formal
              letter demanding either a 51% KLRWS stake or expansion rights,
              with a <strong>June 21, 2026 deadline</strong>. The letter was
              CC&apos;d to the General Assembly and media. Here is what to
              watch and what you can still do.
            </p>
          </div>

          {/* What happened */}
          <div className="rounded-lg border border-card-border bg-card p-6 mb-10">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
              What Happened
            </h3>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">April 28:</strong> Roughly 100 citizens from Halifax, Vance, and Warren Counties traveled to Raleigh by bus. Rep. Pierce held a press conference with 10 speakers. The bill was pulled from the House calendar.</p>
              <p><strong className="text-foreground">April 28 (evening):</strong> Speaker Hall announced Section 5 would not appear in the revised conference report. Senate leaders agreed to remove it. Section 7 (Forsyth County school board) was also removed.</p>
              <p><strong className="text-foreground">April 29:</strong> Both chambers voted on the revised SB 214 without Section 5 or Section 7. The eminent domain provision is officially dead.</p>
              <p><strong className="text-foreground">Key detail:</strong> Franklin County admitted neighboring jurisdictions &quot;were not notified in advance&quot; of the provision.</p>
            </div>
          </div>

          {/* Remain vigilant */}
          <h3 className="mb-4 text-lg font-bold text-red">
            Why &quot;Remain Vigilant&quot;
          </h3>
          <ul className="space-y-3 mb-10">
            {[
              "May 21, 2026: Franklin County Manager Ryan Preble sent a formal letter demanding 51% KLRWS stake or expansion rights. Deadline: June 21, 2026. CC'd to GA members and media.",
              "Speaker Hall indicated the legislature could resurrect the provision if local negotiations fail. The Preble letter creates public pressure for a response.",
              "The Army Corps reallocation study continues. Franklin is funding the entire $2M study. Draft report expected September 2027, final report May 2028.",
              "Franklin County's $200M RFQ for a private water plant and pipeline is still active.",
              "The pattern escalates: SB 320 (2019, vetoed), SB 214 Section 5 (2026, removed), Preble letter (2026, pending). Each attempt is more aggressive and more public.",
              "Franklin's full 50-year demand (14.3 MGD) exceeds both the USACE allocation (20 MGD combined) and the IBT certificate (14.2 MGD). The regulatory math does not support their ask at full scale.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>

          {/* What you can do */}
          <h3 className="mb-4 text-lg font-bold text-gold">
            What You Can Still Do
          </h3>

          {/* Contact reps */}
          <h4 className="mb-3 text-sm font-bold text-foreground">
            1. Thank the leaders who stood up. Hold others accountable.
          </h4>
          <div className="overflow-x-auto mb-8">
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

          {/* Army Corps */}
          <h4 className="mb-3 text-sm font-bold text-foreground">
            2. Submit comments to the Army Corps (study is ongoing).
          </h4>
          <p className="mb-2 text-muted leading-relaxed text-sm">
            The Army Corps reallocation study is separate from SB 214 and will
            continue regardless. Written public comments are part of the official
            federal record. The formal comment deadline was April 24, 2026,
            but late comments may still be considered.
          </p>
          <p className="mb-1 text-sm text-foreground">
            Email: <a href="mailto:CESAW-JHKerr-Reallocation-Franklin@usace.army.mil" className="text-blue hover:text-gold transition break-all">CESAW-JHKerr-Reallocation-Franklin@usace.army.mil</a>
          </p>
          <p className="mb-8 text-xs text-subtle">
            USACE project page: saw.usace.army.mil/Locations/District-Lakes-and-Dams/John-H-Kerr-1/JHK-Reallocation-Franklin-County/
          </p>

          {/* Stay connected */}
          <h4 className="mb-3 text-sm font-bold text-foreground">
            3. Stay connected and share this page.
          </h4>
          <p className="mb-4 text-muted leading-relaxed text-sm">
            Forward this page to your neighbors, your commissioners, your
            church, your civic organizations. The more people who understand
            what happened and what could come next, the harder it is to try
            again quietly.
          </p>

          {/* Demand negotiations */}
          <h4 className="mb-3 text-sm font-bold text-foreground">
            4. Demand good-faith regional negotiations.
          </h4>
          <p className="text-muted leading-relaxed text-sm">
            The best way to prevent another Section 5 is for Henderson, Vance
            County, and the KLRWS partners to proactively engage Franklin County
            in a regional water solution. And for Franklin County to come to
            the table as a partner, not with a battering ram.
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

      {/* Franklin Letter Cards */}
      <section id="franklin-cards" className="px-6 py-16 bg-navy/30">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-2xl font-extrabold md:text-3xl">
            Share These <span className="text-gold">Cards</span>
          </h2>
          <p className="mb-2 text-center text-sm text-muted">
            Franklin County letter, KLRWS ownership, Kerr Lake numbers, and
            what a fair deal looks like. 10 cards, every fact sourced.
          </p>
          <p className="mb-10 text-center text-xs text-subtle">
            Save and share on social media. Click any card to view full size.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {franklinCards.map((card) => (
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

      {/* SB 214 Visual Cards */}
      <section id="cards" className="px-6 py-16">
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

      {/* Downloads */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-extrabold md:text-3xl">
            Download the <span className="text-gold">Reports</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href="/reports/klrws-water-analysis-may-2026.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-gold/30 bg-gold/5 p-6 transition hover:border-gold/60 hover:bg-gold/10"
            >
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-gold">
                New - May 2026
              </p>
              <h3 className="mb-2 text-lg font-bold group-hover:text-gold transition">
                The Kerr Lake Water Question
              </h3>
              <p className="mb-4 text-sm text-muted">
                Franklin County letter analysis, KLRWS ownership, Kerr Lake
                allocations, rate benchmarks, revenue projections, and
                governance protections. Every claim sourced.
              </p>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Full Report
              </div>
            </a>
            <a
              href="/reports/SB214-Franklin-County-Water-Fact-Sheet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-card-border bg-card p-6 transition hover:border-gold/40 hover:bg-card/80"
            >
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue">
                April 2026
              </p>
              <h3 className="mb-2 text-lg font-bold group-hover:text-gold transition">
                SB 214 Fact Sheet
              </h3>
              <p className="mb-4 text-sm text-muted">
                9 pages on the eminent domain provision, the coalition that
                stopped it, and what comes next. Printable.
              </p>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </div>
            </a>
          </div>
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
            Henderson-Vance FYI &middot; Updated May 2026
          </p>
        </div>
      </footer>
    </main>
  );
}

import Image from "next/image";

const carouselCards = [
  { src: "/carousel/card-1-hook.png", alt: "2 data center proposals are on the table" },
  { src: "/carousel/card-2-water.png", alt: "Water impact - what the numbers say" },
  { src: "/carousel/card-3-jobs.png", alt: "Jobs - what communities actually got" },
  { src: "/carousel/card-3b-parcels.png", alt: "The full land assembly - 619 acres" },
  { src: "/carousel/card-3c-map.png", alt: "Parcel map of the rezoning corridor" },
  { src: "/carousel/card-4-natelli.png", alt: "Who is Natelli Holdings?" },
  { src: "/carousel/card-5-energy.png", alt: "Power and your electric bill" },
  { src: "/carousel/card-5b-revenue.png", alt: "Tax revenue - what you are not being told" },
  { src: "/carousel/card-6-good-deal.png", alt: "What a good deal looks like" },
  { src: "/carousel/card-7-questions.png", alt: "Questions worth asking, demands worth making" },
  { src: "/carousel/card-8-cta.png", alt: "Show up, speak up - April 20 meeting" },
];

const slides = [
  { src: "/slides/4522.jpg", alt: "USACE slide - Why Are We Here?" },
  { src: "/slides/4523.jpg", alt: "USACE slide - study overview" },
  { src: "/slides/4524.jpg", alt: "USACE slide - water reallocation" },
  { src: "/slides/4526.jpg", alt: "USACE slide - conservation pool" },
  { src: "/slides/4527.jpg", alt: "USACE slide - study area map" },
  { src: "/slides/4529.jpg", alt: "USACE slide - timeline" },
  { src: "/slides/4531.jpg", alt: "USACE slide - public comment" },
];

function DownloadIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-8 h-1 w-20 bg-gold" />
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Henderson-Vance{" "}
            <span className="text-gold">FYI</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-muted md:text-xl">
            What every citizen should know about data centers, water, and the
            future of Henderson and Vance County.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-sm text-subtle">
            Two citizen-researched reports. 100+ cited sources. Not funded by any
            company, activist organization, or political campaign.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#reports"
              className="rounded bg-gold px-8 py-3 text-sm font-bold uppercase tracking-widest text-background transition hover:bg-gold-dim"
            >
              Read the Reports
            </a>
            <a
              href="#meeting"
              className="rounded border border-red/40 bg-red/10 px-8 py-3 text-sm font-bold uppercase tracking-widest text-red transition hover:bg-red/20"
            >
              April 20 Meeting
            </a>
          </div>
        </div>
      </section>

      {/* Urgent Meeting Banner */}
      <section id="meeting" className="px-6 py-10">
        <div className="mx-auto max-w-3xl rounded-lg border border-red/40 bg-red/10 p-6 md:p-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red">
            Special Called Meeting - ZMA26-001 Vote
          </p>
          <p className="mb-2 text-2xl font-extrabold md:text-3xl">
            Monday, April 20, 2026 at 4:00 PM
          </p>
          <p className="mb-4 text-muted">
            Vance County Board of Commissioners, 122 Young Street, Henderson
          </p>
          <p className="text-sm text-subtle">
            Purpose: <strong className="text-foreground">&quot;Consider and take action&quot;</strong> on
            the Natelli Holdings rezoning (ZMA26-001). Also streaming on YouTube.
            This special meeting was called with four days&apos; notice, the legal
            minimum under NC open meetings law.
          </p>
        </div>
      </section>

      {/* Key Facts */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            At a Glance
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-10 text-3xl font-extrabold">
            What&apos;s Happening
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                The Rezoning
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Natelli Holdings LLC, a Maryland-based land developer, is seeking
                to rezone approximately <strong className="text-foreground">113 acres</strong> across
                three parcels from Employment and Institutional Area to Light
                Industrial. Combined with adjacent Triangle North parcels, the
                corridor totals <strong className="text-foreground">619 acres</strong> along US-158 Business.
                No development plan has been submitted. No end user has been named.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Natelli&apos;s Track Record
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Natelli&apos;s Apex, NC proposal (250 MW, 189 acres near Shearon
                Harris Nuclear Plant) was <strong className="text-foreground">withdrawn in March 2026</strong> after
                4,700 petition signatures and public opposition from a U.S.
                Representative. Apex then voted unanimously to draft a data center
                moratorium. That same developer is now asking Vance County for the
                same thing.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Water
              </p>
              <p className="text-sm leading-relaxed text-muted">
                A single data center using evaporative cooling consumes{" "}
                <strong className="text-foreground">300,000 to 1 million gallons per day</strong>.
                That water evaporates and never returns to the watershed. The Kerr
                Lake Regional Water System currently draws 6.9 MGD. Franklin
                County is simultaneously requesting 15.7 MGD from the same
                reservoir. No federal entity is modeling the cumulative demand.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Power &amp; Your Bill
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Duke Energy has filed for a combined{" "}
                <strong className="text-foreground">$1.7 billion rate increase</strong> across
                its NC subsidiaries, adding $17-$28/month to residential bills. In
                Virginia, where data centers consume 26% of electricity, Dominion
                customers are paying $16/month more, projected to reach $37/month
                by 2040.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Jobs
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Permanent operational staff at a typical data center:{" "}
                <strong className="text-foreground">30 to 200 people</strong>. Apple&apos;s $1 billion
                Maiden, NC facility employs fewer than 50. The subsidy package
                totaled $321 million, or $6.4 million per permanent job. Of 36
                states with data center incentives, 16 have no minimum job
                creation requirement.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Tax Breaks
              </p>
              <p className="text-sm leading-relaxed text-muted">
                North Carolina&apos;s data center tax exemptions have{" "}
                <strong className="text-foreground">
                  no job requirement, no expiration, and no sunset
                </strong>
                . NC is one of only seven states where the exemption never ends.
                The state currently loses $45-57 million per year in foregone
                revenue. Virginia&apos;s exemption now costs $1.6 billion annually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Response */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            April 6, 2026
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-6 text-3xl font-extrabold">
            What Citizens Said
          </h2>
          <p className="mb-8 max-w-2xl text-muted">
            Approximately 150 residents attended the Board of Commissioners
            meeting. The overflow crowd filled the stairwell. More than 20
            citizens spoke during the public hearing. Every speaker from the
            community opposed the rezoning except two.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded border border-card-border bg-card p-5">
              <p className="mb-1 text-sm font-bold text-blue">Tyler Matthews</p>
              <p className="text-xs text-subtle">Watkins community</p>
              <p className="mt-2 text-sm text-muted">
                Provided the most detailed water analysis. A data center would add
                4-15% to the regional system&apos;s daily draw. That water evaporates.
              </p>
            </div>
            <div className="rounded border border-card-border bg-card p-5">
              <p className="mb-1 text-sm font-bold text-blue">Natalie Stone</p>
              <p className="text-xs text-subtle">NC State University</p>
              <p className="mt-2 text-sm text-muted">
                Broke down the power math. Kerr Lake Dam generates 227 MW. The
                Apex project Natelli withdrew was 300 MW. Once operational, actual
                consumption becomes confidential.
              </p>
            </div>
            <div className="rounded border border-card-border bg-card p-5">
              <p className="mb-1 text-sm font-bold text-blue">Garland Askew</p>
              <p className="text-xs text-subtle">Carolina Pines</p>
              <p className="mt-2 text-sm text-muted">
                Mapped the impact zones: 110 homes within a half-mile. Dabney
                Elementary, VGCC, Henderson Country Club, and 217 homes in
                Huntstone within two miles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Download */}
      <section id="reports" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Full Reports
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            Read Everything
          </h2>
          <p className="mb-10 max-w-2xl text-muted">
            Both reports are free to download, share, and print. They are compiled
            from public records, county meeting transcripts, investigative
            journalism, government reports, and peer-reviewed research.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <a
              href="/reports/vance-county-data-center-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-card-border bg-card p-8 transition hover:border-gold/40 hover:bg-card/80"
            >
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-gold">
                New - April 2026
              </p>
              <h3 className="mb-2 text-xl font-bold group-hover:text-gold">
                Data Centers and Vance County
              </h3>
              <p className="mb-1 text-sm text-muted">
                What every citizen should know before the next vote.
              </p>
              <p className="mb-6 text-xs text-subtle">
                69 cited sources. Includes Vance County Board of Commissioners and
                Henderson City Council meeting analysis.
              </p>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-gold">
                <DownloadIcon />
                Download PDF
              </div>
            </a>

            <a
              href="/reports/kerr-lake-report-v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-card-border bg-card p-8 transition hover:border-gold/40 hover:bg-card/80"
            >
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue">
                March 2026
              </p>
              <h3 className="mb-2 text-xl font-bold group-hover:text-gold">
                Kerr Lake, Data Centers, and the Case for Recreation
              </h3>
              <p className="mb-1 text-sm text-muted">
                A resource analysis for Vance County and the Kerr-Tar region.
              </p>
              <p className="mb-6 text-xs text-subtle">
                48 cited sources. Updated with findings from the March 26, 2026
                USACE NEPA Public Scoping Session.
              </p>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-gold">
                <DownloadIcon />
                Download PDF
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Carousel Gallery */}
      <section id="carousel" className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Share These
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            Key Facts - Visual Cards
          </h2>
          <p className="mb-10 max-w-2xl text-muted">
            Save and share these on social media, print them out, or text them to
            your neighbors. Right-click or long-press to save any image.
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {carouselCards.map((card) => (
              <a
                key={card.src}
                href={card.src}
                target="_blank"
                rel="noopener noreferrer"
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

      {/* USACE Slides */}
      <section id="slides" className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            March 26, 2026
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            USACE NEPA Scoping Meeting
          </h2>
          <p className="mb-10 max-w-2xl text-muted">
            Photos from the U.S. Army Corps of Engineers NEPA Public Scoping
            Session at the Warren County Armory Civic Center. The Corps is
            evaluating Franklin County&apos;s request for 15.7 million gallons per day
            from Kerr Lake&apos;s conservation pool.
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {slides.map((slide) => (
              <a
                key={slide.src}
                href={slide.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-lg border border-card-border transition hover:border-gold/40"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={600}
                  height={450}
                  className="h-auto w-full transition group-hover:scale-[1.02]"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Other Communities */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Lessons
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            What Other Communities Did
          </h2>
          <p className="mb-10 max-w-2xl text-muted">
            Some communities rejected data center proposals. Others negotiated
            terms that turned a potential threat into measurable benefit. Both
            approaches offer lessons for Vance County.
          </p>

          <div className="mb-10">
            <h3 className="mb-4 text-lg font-bold text-gold">
              Communities That Set Boundaries
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-card-border text-xs uppercase tracking-wider text-blue">
                    <th className="px-4 py-3">Community</th>
                    <th className="px-4 py-3">What Happened</th>
                    <th className="px-4 py-3">Outcome</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">Apex, NC</td>
                    <td className="px-4 py-3">Natelli withdrew after 4,700 petition signatures</td>
                    <td className="px-4 py-3">Moratorium drafted</td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">Port Washington, WI</td>
                    <td className="px-4 py-3">First anti-data center referendum in U.S., 66% voted yes</td>
                    <td className="px-4 py-3">Large tax breaks now require voter approval</td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">Tucson, AZ</td>
                    <td className="px-4 py-3">City council unanimously rejected Amazon &quot;Project Blue&quot;</td>
                    <td className="px-4 py-3">Water concerns were deciding factor</td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">Warrenton, VA</td>
                    <td className="px-4 py-3">Residents voted out all council members who supported rezoning</td>
                    <td className="px-4 py-3">New council reversed course</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-gold">
              Communities That Negotiated Well
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-card-border text-xs uppercase tracking-wider text-blue">
                    <th className="px-4 py-3">Community</th>
                    <th className="px-4 py-3">What They Demanded</th>
                    <th className="px-4 py-3">What They Got</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">Cedar Rapids, IA</td>
                    <td className="px-4 py-3">Wage floor + performance-linked tax break</td>
                    <td className="px-4 py-3">70% exemption only if 31+ jobs at $26.20/hr minimum; $18M community fund over 18 years</td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">Lancaster, PA</td>
                    <td className="px-4 py-3">Hard water cap</td>
                    <td className="px-4 py-3">20,000 gallons/day maximum in writing</td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">Richmond Co., NC</td>
                    <td className="px-4 py-3">Infrastructure investment</td>
                    <td className="px-4 py-3">$1.5M fire station, two trucks, fiber/water upgrades county-wide, workforce pipeline with community college</td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">Lea County, NM</td>
                    <td className="px-4 py-3">Comprehensive policy before any developer arrived</td>
                    <td className="px-4 py-3">Closed-loop cooling required, no rate increases, mandatory decommissioning, PILOT payments to all taxing entities</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Meetings */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Stay Involved
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-8 text-3xl font-extrabold">
            Upcoming Meetings
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-card-border bg-card p-6">
              <h3 className="mb-3 text-lg font-bold">
                Board of Commissioners
              </h3>
              <p className="mb-2 text-sm text-muted">
                First Monday at 6 PM, 122 Young Street
              </p>
              <p className="text-xs text-subtle">
                May 4 &middot; Jun 1 &middot; Jul 6 &middot; Aug 3 &middot; Sep 14
              </p>
              <p className="mt-2 text-xs text-subtle">
                vancecounty.org for agendas
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <h3 className="mb-3 text-lg font-bold">
                Henderson City Council
              </h3>
              <p className="mb-2 text-sm text-muted">
                Second Monday at 6 PM, 134 Rose Avenue
              </p>
              <p className="text-xs text-subtle">
                May 11 &middot; Jun 8 &middot; Jul 13 &middot; Aug 10 &middot; Sep 14
              </p>
              <p className="mt-2 text-xs text-subtle">
                henderson.nc.gov for agendas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-card-border px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm text-muted">
            This site is a citizen education project. It is not funded by any data
            center company, any activist organization, or any political campaign.
          </p>
          <p className="mb-4 text-sm text-muted">
            Share it. Print it. Hand it to your neighbor. Form your own opinion,
            but form it with the facts in front of you.
          </p>
          <p className="text-xs text-subtle">
            Vance County, North Carolina &middot; April 2026
          </p>
        </div>
      </footer>
    </main>
  );
}

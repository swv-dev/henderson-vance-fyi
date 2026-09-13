import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Natelli Files 900 MW Data Center Campus -Henderson-Vance FYI",
  description:
    "On September 9, 2026, Natelli Holdings filed a multi-phase development plan for a 900 MW data center campus on 528 acres in Vance County. They also submitted a redlined version of the county's draft data center ordinance, weakening protections. Full analysis with sources.",
  openGraph: {
    title: "Natelli Files 900 MW Data Center Campus -Henderson-Vance FYI",
    description:
      "On September 9, 2026, Natelli Holdings filed a multi-phase development plan for a 900 MW data center campus on 528 acres in Vance County. Full analysis with sources.",
    type: "article",
  },
};

function SourceLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue hover:text-gold transition underline underline-offset-2"
    >
      {text}
    </a>
  );
}

export default function NatelliFilingPage() {
  return (
    <main className="flex-1">
      {/* Back nav */}
      <div className="px-6 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-subtle hover:text-gold transition"
        >
          &larr; Henderson-Vance FYI
        </Link>
      </div>

      {/* ── 1. Hero ── */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-8 h-1 w-20 bg-gold" />
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">
            September 9, 2026
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Natelli Files{" "}
            <span className="text-gold">900 MW Campus Plan</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-muted md:text-xl">
            Natelli Holdings LLC filed a phased development plan for a 900 MW
            data center campus on 528 acres between I-85 and US-158, east of Poplar Creek Road. The same day,
            they submitted a redlined version of the county&apos;s draft Unified
            Development Ordinance, weakening protections across the board. The
            moratorium has not been adopted.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-sm text-subtle">
            Every claim on this page is sourced to filed documents and public records.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-subtle">
            <a href="#filing-facts" className="hover:text-gold transition">Filing Details</a>
            <a href="#vesting" className="hover:text-gold transition">The Vesting Play</a>
            <a href="#redline" className="hover:text-gold transition">The UDO Redline</a>
            <a href="#water-projections" className="hover:text-gold transition">Updated Water Projections</a>
            <a href="#whats-next" className="hover:text-gold transition">What Happens Next</a>
            <a href="#dates" className="hover:text-gold transition">Key Dates</a>
            <a href="#sept-14" className="hover:text-gold transition">Sept 14 Agenda</a>
            <a href="#documents" className="hover:text-gold transition">Documents</a>
          </div>
        </div>
      </section>

      {/* ── 2. Key Facts Grid ── */}
      <section id="filing-facts" className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            The Filing
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-2 text-3xl font-extrabold">Key Facts</h2>
          <p className="mb-10 text-sm text-subtle">
            Source: Vance County Technology Campus Final Site Plan, NC Rodgers
            Consulting for Natelli Holdings LLC, filed September 9, 2026.
          </p>

          <div className="grid gap-5 grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg border border-card-border bg-card p-5">
              <p className="text-2xl font-extrabold text-gold md:text-3xl">900 MW</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Total campus capacity</p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-5">
              <p className="text-2xl font-extrabold text-gold md:text-3xl">528.92 acres</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Nine parcels between I-85 and US-158</p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-5">
              <p className="text-2xl font-extrabold text-gold md:text-3xl">Up to 12</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Buildings plus security building and auxiliary facilities</p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-5">
              <p className="text-2xl font-extrabold text-gold md:text-3xl">4,000,000 sq ft</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Total data center space</p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-5">
              <p className="text-2xl font-extrabold text-gold md:text-3xl">4 phases</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Multi-phase development plan</p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-5">
              <p className="text-2xl font-extrabold text-gold md:text-3xl">Light Industrial</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Zoned by right, no rezoning required</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Who Is Natelli ── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Background
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-8 text-3xl font-extrabold">Who Is Natelli</h2>

          <div className="rounded-lg border border-card-border bg-card p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
              Natelli Holdings LLC
            </p>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Also referenced in filings as Natelli Investments LLC. c/o Natelli
              Holdings, 1903 N. Harrison Avenue, Suite 100, Cary, NC 27513.
              Contact: Thomas Natelli Jr.
            </p>
            <div className="rounded border border-red/30 bg-red/5 p-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-red">
                Prior Activity
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Natelli&apos;s Apex, NC proposal -250 MW, 189 acres near the
                Shearon Harris Nuclear Plant -was{" "}
                <strong className="text-foreground">withdrawn in March 2026</strong>{" "}
                after 4,700 petition signatures and opposition from a U.S.
                Representative. Apex then voted unanimously to draft a data
                center moratorium. The same developer is now in Vance County
                with a project{" "}
                <strong className="text-foreground">nearly 4x the size</strong>.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Sources: WRAL, Triangle Business Journal, Town of Apex public records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. The Vesting Play ── */}
      <section id="vesting" className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            The Legal Strategy
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-8 text-3xl font-extrabold">The Vesting Play</h2>

          <div className="space-y-5">
            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                NCGS 160D-108(j)(4)
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Once site plan approval is granted for the initial phase, the
                entire multi-phase development is{" "}
                <strong className="text-foreground">
                  vested under the rules in place at that time, for seven years
                </strong>
                . Separately, NCGS 160D-107 states that a development
                moratorium does not apply to development set forth in a
                multi-phase development plan.
              </p>
            </div>

            <div className="rounded-lg border border-gold/30 bg-gold/5 p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                In Their Own Words
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                Natelli&apos;s letter states they have been{" "}
                <em>
                  &ldquo;closely following the discussions around the possible
                  imposition of a moratorium and adoption of new regulations&rdquo;
                </em>{" "}
                and that{" "}
                <em>
                  &ldquo;the uncertainty this causes is very problematic,&rdquo;
                </em>{" "}
                so they{" "}
                <em>
                  &ldquo;reluctantly made the decision today to file a plan for
                  development of the site.&rdquo;
                </em>
              </p>
              <p className="text-xs text-subtle">
                Source: Natelli letter dated September 9, 2026.
              </p>
            </div>

            <div className="rounded-lg border border-red/30 bg-red/10 p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red">
                Translation
              </p>
              <p className="text-sm text-muted leading-relaxed">
                If the county approves Phase 1, the entire 900 MW, 4-phase
                campus locks in under current rules{" "}
                <strong className="text-foreground">for 7 years</strong>. Even
                if a moratorium is adopted tomorrow, NCGS 160D-107 exempts
                vested multi-phase plans.
              </p>
              <p className="mt-4 text-sm font-bold text-red">
                The moratorium has not been adopted as of September 12, 2026.
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs text-subtle">
            Sources: NCGS 160D-108(j)(4), NCGS 160D-107, Natelli letter dated
            September 9, 2026.
          </p>
        </div>
      </section>

      {/* ── 5. The UDO Redline ── */}
      <section id="redline" className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Most Important Section
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">The UDO Redline</h2>
          <p className="mb-8 text-sm text-muted leading-relaxed">
            Natelli submitted a marked-up copy of the county&apos;s draft UDO
            Section 5.13.4 (Data Centers). Below is every change they
            requested.
          </p>

          {/* Footnote callout */}
          <div className="mb-8 rounded-lg border border-gold/30 bg-gold/5 p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
              Footnote 300
            </p>
            <p className="text-sm text-muted leading-relaxed">
              The draft UDO states: NFOCUS had recommended more restrictive
              standards in 2022 with the original data center amendment, but
              the recommendation was{" "}
              <em>&ldquo;deemed unnecessary.&rdquo;</em> Vance County was told
              what standards to adopt four years ago and said no. They are now
              writing them under deadline while the applicant marks up the
              draft.
            </p>
            <p className="mt-3 text-xs text-subtle">
              Source: Vance County Draft UDO, July 2026, Sec. 5.13.4, footnotes 300–308.
            </p>
          </div>

          {/* Redline Table */}
          <div className="overflow-x-auto rounded-lg border border-card-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border bg-navy">
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-blue">
                    What the County Proposed
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-gold">
                    What Natelli Wants
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-red">
                    Why It Matters
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="border-b border-card-border bg-card">
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    School/hospital/daycare separation:{" "}
                    <strong className="text-foreground">1,000 feet</strong>
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    <strong className="text-gold">500 feet</strong>
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    Cuts the buffer zone in half for the most sensitive community facilities.
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="border-b border-card-border">
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    Residential setback:{" "}
                    <strong className="text-foreground">500 feet</strong> from residential property
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    <strong className="text-gold">Waived</strong> when the adjoining parcel is under common ownership with the data center
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    If Natelli owns the adjacent residential-zoned lot, they can build right up to it. NFOCUS originally recommended 300 feet (footnote 303).
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="border-b border-card-border bg-card">
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    Maximum height:{" "}
                    <strong className="text-foreground">60 feet</strong>
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    <strong className="text-gold">75 feet</strong>, measured from finished ground level to roof membrane
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    15 feet taller, with a measurement method that could add more.
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="border-b border-card-border">
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    Privacy fence:{" "}
                    <strong className="text-foreground">8-foot fence required</strong>
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    <strong className="text-gold">&ldquo;In areas where necessary&rdquo;</strong>
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    Discretionary language that allows skipping the fence entirely.
                  </td>
                </tr>
                {/* Row 5 */}
                <tr className="border-b border-card-border bg-card">
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    Utility confirmation: County{" "}
                    <strong className="text-foreground">&ldquo;shall require&rdquo;</strong>{" "}
                    utility provider documentation
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    County{" "}
                    <strong className="text-gold">&ldquo;shall request&rdquo;</strong>
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    Changes a mandate to a request. The utility provider is no longer obligated to confirm capacity.
                  </td>
                </tr>
                {/* Row 6 -most consequential */}
                <tr className="border-b border-red/20 bg-red/5">
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    Cooling systems:{" "}
                    <strong className="text-foreground">Closed-loop systems required</strong>
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    <strong className="text-gold">
                      &ldquo;Closed loop or hybrid systems which utilize closed loop, air or evaporative cooling&rdquo;
                    </strong>
                  </td>
                  <td className="px-4 py-4 leading-relaxed align-top">
                    <strong className="text-red">
                      Opens the door to evaporative cooling, which consumes millions of gallons per day. This is the single most consequential change.
                    </strong>
                  </td>
                </tr>
                {/* Row 7 */}
                <tr className="border-b border-card-border">
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    Generator use:{" "}
                    <strong className="text-foreground">Only during power disruptions</strong>
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    Also{" "}
                    <strong className="text-gold">
                      &ldquo;when specifically required by Duke Energy, the State of North Carolina or the NC Utilities Commission&rdquo;
                    </strong>{" "}
                    plus routine testing and maintenance
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    Expands when diesel generators can run, increasing noise and emissions.
                  </td>
                </tr>
                {/* Row 8 */}
                <tr className="border-b border-card-border bg-card">
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    Abandonment trigger:{" "}
                    <strong className="text-foreground">12 months</strong> of ceased operations = abandoned
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    <strong className="text-gold">18 months</strong>, plus &ldquo;clear and convincing evidence&rdquo; standard required, plus extensive list of activities that do NOT constitute abandonment
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    Makes it nearly impossible for the county to declare a facility abandoned. Maintenance of permits, insurance, security, or even &ldquo;marketing&rdquo; counts as active use.
                  </td>
                </tr>
                {/* Row 9 */}
                <tr className="border-b border-card-border">
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    Abandoned infrastructure:{" "}
                    <strong className="text-foreground">Private substations removed</strong>
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    <strong className="text-gold">
                      &ldquo;Private substations, sewer pump stations, water treatment facilities and infrastructure which could benefit future uses on the site shall be retained for future use at the option of the property owner&rdquo;
                    </strong>
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    The owner keeps private utility infrastructure indefinitely.
                  </td>
                </tr>
                {/* Row 10 */}
                <tr>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    Consultant review:{" "}
                    <strong className="text-foreground">County reviews application</strong>
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    <strong className="text-gold">
                      &ldquo;At the request of the applicant, the Planning Department shall arrange an informal consultation with the applicant to review the consultant&apos;s report prior to any formal action&rdquo;
                    </strong>
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed align-top">
                    The applicant gets to see and respond to the county&apos;s own expert analysis before any public hearing.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-xs text-subtle">
            Source: Vance County Draft UDO, July 2026, Sec. 5.13.4, footnotes 300–308.
          </p>
        </div>
      </section>

      {/* ── 6. Updated Water Projections ── */}
      <section id="water-projections" className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Water Impact
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-6 text-3xl font-extrabold">
            What 900 MW Actually Means for Water
          </h2>
          <p className="mb-10 text-sm text-muted leading-relaxed max-w-3xl">
            Our original analysis estimated a single data center at 300,000 to
            1 million gallons per day. That figure is accurate for a single
            building in the 30–100 MW range. Natelli&apos;s filing changes the
            scale entirely: a 900 MW campus with up to 12 buildings, and a redline that
            specifically allows evaporative cooling.
          </p>

          {/* Water use table */}
          <div className="overflow-x-auto rounded-lg border border-card-border mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border bg-navy">
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-blue">
                    Scenario
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-gold">
                    Daily Water Use
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted">
                    Annual
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-red/20 bg-red/5">
                  <td className="px-4 py-4 font-semibold text-foreground">
                    Full evaporative (worst case)
                  </td>
                  <td className="px-4 py-4 font-extrabold text-red">
                    ~10.3 million gal/day
                  </td>
                  <td className="px-4 py-4 text-muted">~3.76 billion gal/yr</td>
                </tr>
                <tr className="border-b border-card-border bg-card">
                  <td className="px-4 py-4 font-semibold text-foreground">
                    Hybrid cooling{" "}
                    <span className="text-xs font-normal text-gold">
                      (Natelli&apos;s redline allows this)
                    </span>
                  </td>
                  <td className="px-4 py-4 font-extrabold text-red">
                    3.6–6.2 million gal/day
                  </td>
                  <td className="px-4 py-4 text-muted">1.3–2.3 billion gal/yr</td>
                </tr>
                <tr className="border-b border-card-border">
                  <td className="px-4 py-4 font-semibold text-foreground">
                    Pure closed-loop (best-in-class)
                  </td>
                  <td className="px-4 py-4 font-extrabold text-gold">
                    ~1.35 million gal/day
                  </td>
                  <td className="px-4 py-4 text-muted">~493 million gal/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold text-foreground">
                    Zero-water air-cooled{" "}
                    <span className="text-xs font-normal text-subtle">
                      (Microsoft new gen)
                    </span>
                  </td>
                  <td className="px-4 py-4 font-extrabold text-blue">
                    Near zero
                  </td>
                  <td className="px-4 py-4 text-muted">Near zero</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Comparison cards */}
          <h3 className="mb-5 text-lg font-bold text-foreground">
            Real-World Comparisons
          </h3>
          <div className="mb-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-lg border border-card-border bg-card p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Google -Council Bluffs, IA
              </p>
              <p className="text-2xl font-extrabold text-red">
                2.8M gal/day
              </p>
              <p className="mt-1 text-sm text-muted">
                Consumed (evaporative cooling).
              </p>
              <p className="mt-3 text-xs text-subtle">
                Source: GIJN, WeAreIowa
              </p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Vantage 1,300 MW campus -WI
              </p>
              <p className="text-2xl font-extrabold text-gold">
                22,000 gal/day
              </p>
              <p className="mt-1 text-sm text-muted">
                Closed-loop. vs 5 million gal/day if evaporative -{" "}
                <strong className="text-foreground">a 227x difference</strong>.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Source: Vantage Data Centers blog
              </p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Meta Forest City, NC -30 MW
              </p>
              <p className="text-2xl font-extrabold text-gold">
                ~11,500 gal/day
              </p>
              <p className="mt-1 text-sm text-muted">
                Average (best-in-class WUE 0.26 L/kWh).
              </p>
              <p className="mt-3 text-xs text-subtle">
                Source: WUNC
              </p>
            </div>
          </div>

          {/* Red context callout */}
          <div className="mb-8 rounded-lg border border-red/30 bg-red/10 p-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red">
              Context
            </p>
            <p className="text-sm text-muted leading-relaxed">
              At the hybrid-cooling midpoint (5 million gallons per day),
              Natelli&apos;s campus would consume the equivalent daily water
              demand of{" "}
              <strong className="text-foreground">
                50,000 to 60,000 people
              </strong>
              , more than the entire population of Vance County (approximately
              43,000). The KLRWS currently draws{" "}
              <strong className="text-foreground">6.9 MGD</strong> to serve all
              of its customers across four counties. No public analysis has been
              provided by Natelli on the water requirements of this campus.
            </p>
          </div>

          {/* The "or" callout */}
          <div className="rounded-lg border border-gold/30 bg-gold/5 p-5">
            <p className="text-sm text-muted leading-relaxed">
              Natelli&apos;s redline changes the county&apos;s proposed{" "}
              <em>&ldquo;closed systems&rdquo;</em> requirement to{" "}
              <em>
                &ldquo;closed loop or hybrid systems which utilize closed loop,
                air or evaporative cooling.&rdquo;
              </em>{" "}
              The word <strong className="text-foreground">&ldquo;or&rdquo;</strong> is
              doing enormous work. It is the difference between{" "}
              <strong className="text-foreground">22,000 gallons per day</strong>{" "}
              and{" "}
              <strong className="text-foreground">5 million</strong>.
            </p>
          </div>

          <p className="mt-6 text-xs text-subtle">
            Sources: AKCP Data Center Water Footprint 2026, Introl WUE Guide,
            MOST Policy Initiative, WUNC April 2026, WRAL, Vantage Data
            Centers, GIJN.
          </p>
        </div>
      </section>

      {/* ── 7. What Happens Next ── */}
      <section id="whats-next" className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Timeline
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-8 text-3xl font-extrabold">What Happens Next</h2>

          <div className="space-y-4">
            <div className="rounded-lg border border-red/30 bg-red/10 p-5">
              <p className="text-sm font-bold text-red">
                The moratorium has NOT been adopted as of September 12, 2026.
              </p>
            </div>

            {/* Moratorium details */}
            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
                The Proposed 60-Day Moratorium
              </p>
              <p className="mb-4 text-sm text-muted leading-relaxed">
                A moratorium notice was published{" "}
                <strong className="text-foreground">September 5, 2026</strong>.
                The proposed ordinance is a temporary 60-day measure that would
                terminate the earlier of{" "}
                <strong className="text-foreground">November 13, 2026</strong>{" "}
                or upon adoption of UDO data center amendments. It has not been
                adopted. A public hearing is scheduled for September 14, 2026.
                The draft ordinance acknowledges that data centers were added as
                permitted by right in L-I and O-I zones on{" "}
                <strong className="text-foreground">February 5, 2024</strong>{" "}
                &ldquo;with no additional requirements for such development.&rdquo;
              </p>
              <p className="mb-3 text-sm text-muted leading-relaxed">
                The ordinance also states there are{" "}
                <strong className="text-foreground">
                  &ldquo;no known large scale active and one pending data centers in
                  Vance County&rdquo;
                </strong>{" "}
                -confirming Natelli is the pending application.
              </p>
              <div className="mt-4 space-y-2 text-sm text-muted">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-gold font-bold">&#9670;</span>
                  <span>
                    Staff must present text zoning amendments to Planning Board by{" "}
                    <strong className="text-foreground">September 15, 2026</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-gold font-bold">&#9670;</span>
                  <span>
                    Public hearing on new zoning ordinance targeted on or before{" "}
                    <strong className="text-foreground">October 5, 2026</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-gold font-bold">&#9670;</span>
                  <span>
                    Moratorium expires{" "}
                    <strong className="text-foreground">November 13, 2026</strong>{" "}
                    if not extended or superseded by new ordinance
                  </span>
                </div>
              </div>
            </div>

            {/* Critical exemption */}
            <div className="rounded-lg border border-gold/30 bg-gold/5 p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
                Critical Exemption -Section 2 of the Moratorium Ordinance
              </p>
              <p className="mb-4 text-sm text-muted leading-relaxed">
                The moratorium &ldquo;shall not apply to:&rdquo;
              </p>
              <ol className="space-y-3 text-sm text-muted leading-relaxed list-none">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded bg-gold/20 px-2 py-0.5 text-xs font-bold text-gold">
                    (i)
                  </span>
                  <span>
                    any{" "}
                    <strong className="text-foreground">
                      complete land development applications currently in review
                    </strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded bg-gold/20 px-2 py-0.5 text-xs font-bold text-gold">
                    (ii)
                  </span>
                  <span>
                    the development of an{" "}
                    <strong className="text-foreground">
                      ancillary or accessory use of a data center
                    </strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded bg-gold/20 px-2 py-0.5 text-xs font-bold text-gold">
                    (iii)
                  </span>
                  <span>
                    nothing herein shall impair{" "}
                    <strong className="text-foreground">
                      vested rights established pursuant to North Carolina law
                    </strong>
                  </span>
                </li>
              </ol>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                This means Natelli&apos;s September 9 filing -if accepted as a
                complete application -may be{" "}
                <strong className="text-foreground">
                  exempt from the moratorium by the moratorium&apos;s own text
                </strong>
                . Natelli filed four days after the moratorium notice was published.
              </p>
            </div>

            {/* Natelli quote callout */}
            <div className="rounded-lg border border-blue/30 bg-blue/5 p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue">
                Why They Filed When They Did
              </p>
              <blockquote className="border-l-2 border-gold pl-4 text-sm text-muted leading-relaxed italic">
                &ldquo;We have been closely following the discussions around the
                possible imposition of a moratorium... The uncertainty this causes is
                very problematic for us at this stage of our efforts. We therefore
                reluctantly made the decision today to file a plan for development of
                the site.&rdquo;
              </blockquote>
              <p className="mt-3 text-xs text-subtle">
                Natelli letter, September 9, 2026. The moratorium notice was
                published September 5. Natelli filed four days later.
              </p>
            </div>

            <div id="sept-14" className="rounded-lg border border-gold/30 bg-card p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
                September 14, 2026 -Board of Commissioners Meeting
              </p>
              <p className="mb-4 text-sm text-muted leading-relaxed">
                Three public hearings relevant to data center development are on the agenda:
              </p>
              <ul className="space-y-3 text-sm text-muted leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded bg-gold/20 px-2 py-0.5 text-xs font-bold text-gold">
                    Item 5 - 6:20 PM
                  </span>
                  <span>
                    <strong className="text-foreground">ZMA26-002</strong> - Rezoning
                    request (CPNONE LLC), GC1 to HC, US 1-158 Hwy &amp; Warrenton Rd.
                    Not a data center application, but part of the same meeting.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded bg-gold/20 px-2 py-0.5 text-xs font-bold text-gold">
                    Item 6 - 6:30 PM
                  </span>
                  <span>
                    <strong className="text-foreground">OA26-001</strong> - UDO
                    Section 4 text amendment adding data center development standards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded bg-red/20 px-2 py-0.5 text-xs font-bold text-red">
                    Item 7 - 6:40 PM
                  </span>
                  <span>
                    <strong className="text-foreground">Proposed 60-day moratorium</strong>{" "}
                    on new data center development (Jonathan Care, County Attorney)
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
                The Critical Fork
              </p>
              <ul className="space-y-3 text-sm text-muted leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-gold font-bold">&#9670;</span>
                  <span>
                    If Natelli&apos;s September 9 application is deemed{" "}
                    <strong className="text-foreground">complete</strong>, it
                    may already be exempt from the moratorium under Section 2(i).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-red font-bold">&#9670;</span>
                  <span>
                    If Phase 1 is approved, the{" "}
                    <strong className="text-foreground">
                      entire campus vests for 7 years
                    </strong>{" "}
                    under NCGS 160D-108(j)(4) -and NCGS 160D-107 separately
                    exempts vested multi-phase plans from moratoriums.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-xs text-subtle">
            Sources: Vance County Board of Commissioners Masterfile, September
            14, 2026 meeting. NCGS 160D-107, 160D-108.
          </p>
        </div>
      </section>

      {/* ── 7b. Key Dates ── */}
      <section id="dates" className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Chronology
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-8 text-3xl font-extrabold">Key Dates</h2>

          <div className="overflow-x-auto rounded-lg border border-card-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border bg-navy">
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-blue">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-gold">
                    Event
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-card-border bg-card">
                  <td className="px-4 py-4 text-muted align-top whitespace-nowrap">
                    February 5, 2024
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed">
                    Board permits data centers by right in L-I and O-I zones -
                    no additional requirements
                  </td>
                </tr>
                <tr className="border-b border-card-border">
                  <td className="px-4 py-4 text-muted align-top whitespace-nowrap">
                    August 25, 2026
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed">
                    Joint BoCC/Planning Board work session -consensus to draft
                    UDO text amendment
                  </td>
                </tr>
                <tr className="border-b border-card-border bg-card">
                  <td className="px-4 py-4 text-muted align-top whitespace-nowrap">
                    September 3, 2026
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed">
                    UDO amendment public notice published
                  </td>
                </tr>
                <tr className="border-b border-card-border">
                  <td className="px-4 py-4 text-muted align-top whitespace-nowrap">
                    September 5, 2026
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed">
                    <strong className="text-foreground">Moratorium public notice published</strong>
                  </td>
                </tr>
                <tr className="border-b border-card-border bg-card">
                  <td className="px-4 py-4 text-muted align-top whitespace-nowrap">
                    September 9, 2026
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed">
                    <strong className="text-foreground">
                      Natelli files 900 MW multi-phase development plan and
                      redlined UDO
                    </strong>{" "}
                    -four days after moratorium notice
                  </td>
                </tr>
                <tr className="border-b border-card-border">
                  <td className="px-4 py-4 text-muted align-top whitespace-nowrap">
                    September 10, 2026
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed">
                    Planning Board reviews text amendment
                  </td>
                </tr>
                <tr className="border-b border-card-border bg-card">
                  <td className="px-4 py-4 text-muted align-top whitespace-nowrap">
                    September 14, 2026<br />
                    <span className="text-xs text-subtle">6:20 PM</span>
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed">
                    Public Hearing -ZMA26-002 rezoning (CPNONE LLC)
                  </td>
                </tr>
                <tr className="border-b border-card-border">
                  <td className="px-4 py-4 text-muted align-top whitespace-nowrap">
                    September 14, 2026<br />
                    <span className="text-xs text-subtle">6:30 PM</span>
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed">
                    Public Hearing -OA26-001 UDO data center text amendment
                  </td>
                </tr>
                <tr className="border-b border-card-border bg-card">
                  <td className="px-4 py-4 text-muted align-top whitespace-nowrap">
                    September 14, 2026<br />
                    <span className="text-xs text-subtle">6:40 PM</span>
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed">
                    Public Hearing -60-day moratorium ordinance
                  </td>
                </tr>
                <tr className="border-b border-card-border">
                  <td className="px-4 py-4 text-muted align-top whitespace-nowrap">
                    September 15, 2026
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed">
                    Staff deadline to present text amendments to Planning Board
                  </td>
                </tr>
                <tr className="border-b border-card-border bg-card">
                  <td className="px-4 py-4 text-muted align-top whitespace-nowrap">
                    October 5, 2026
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed">
                    Target date for public hearing on new zoning ordinance
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-muted align-top whitespace-nowrap">
                    November 13, 2026
                  </td>
                  <td className="px-4 py-4 text-muted leading-relaxed">
                    <strong className="text-foreground">
                      Moratorium expiration
                    </strong>{" "}
                    (if not extended or superseded by new ordinance)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-xs text-subtle">
            Source: Vance County Board of Commissioners Masterfile, September
            14, 2026 meeting.
          </p>
        </div>
      </section>

      {/* ── 8. Documents ── */}
      <section id="documents" className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Primary Sources
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-8 text-3xl font-extrabold">Documents</h2>

          {/* Natelli Filing Documents */}
          <div className="mt-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">
              Natelli Filing Documents
            </p>
            <p className="mb-6 text-sm text-muted leading-relaxed">
              Images from Natelli&apos;s September 9, 2026 filing - the letter
              and their redlined UDO submission. Click any image to open full size.
            </p>

            <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
              {[
                {
                  src: "/natelli-docs/natelli-letter-page1.jpg",
                  label: "Natelli Letter - Page 1",
                  desc: "September 9, 2026",
                },
                {
                  src: "/natelli-docs/natelli-letter-page2.jpg",
                  label: "Natelli Letter - Page 2",
                  desc: "Filed to vest rights",
                },
                {
                  src: "/natelli-docs/udo-redline-sec5134-start.jpg",
                  label: "UDO Redline - Sec. 5.13.4",
                  desc: "Data Centers section begins",
                },
                {
                  src: "/natelli-docs/udo-redline-setbacks.jpg",
                  label: "UDO Redline - Setbacks",
                  desc: "Common ownership waiver, school separation",
                },
                {
                  src: "/natelli-docs/udo-redline-height-noise.jpg",
                  label: "UDO Redline - Height & Noise",
                  desc: "60 to 75 ft, fence changes, noise threshold",
                },
                {
                  src: "/natelli-docs/udo-redline-utility-cooling.jpg",
                  label: "UDO Redline - Utility & Cooling",
                  desc: "Require to request, evaporative cooling added",
                },
                {
                  src: "/natelli-docs/udo-redline-cooling-abandonment.jpg",
                  label: "UDO Redline - Cooling & Abandonment",
                  desc: "Generator expansion, 12 to 18 month abandonment",
                },
                {
                  src: "/natelli-docs/udo-redline-abandonment-consultants.jpg",
                  label: "UDO Redline - Abandonment & Consultants",
                  desc: "Clear and convincing evidence standard",
                },
                {
                  src: "/natelli-docs/udo-redline-consultants-end.jpg",
                  label: "UDO Redline - Consultants",
                  desc: "Pre-review consultation, market-rate fees",
                },
              ].map((doc) => (
                <a
                  key={doc.src}
                  href={doc.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg border border-card-border bg-card overflow-hidden transition hover:border-gold/40"
                >
                  <div className="relative aspect-[8.5/11] bg-navy/50 overflow-hidden">
                    <Image
                      src={doc.src}
                      alt={doc.label}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-semibold text-foreground group-hover:text-gold transition leading-snug">
                      {doc.label}
                    </p>
                    <p className="mt-0.5 text-xs text-subtle">{doc.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">
              Additional Resources
            </p>
            <div className="space-y-2 text-sm text-muted">
              <p>
                <a
                  href="https://www.vancecounty.org/wp-content/uploads/2026/09/Masterfile-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:text-gold transition underline underline-offset-2"
                >
                  September 14 Board Meeting Masterfile (full PDF, 69 MB)
                </a>{" "}
                - vancecounty.org
              </p>
              <p>
                <a
                  href="https://www.vancecounty.org/wp-content/uploads/2026/07/UDO-2026-PDF-DRAFT-Articles-1-12-July2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:text-gold transition underline underline-offset-2"
                >
                  Vance County Draft UDO, July 2026
                </a>{" "}
                - vancecounty.org
              </p>
              <p>
                <a
                  href="https://www.vancecounty.org/about-vance/public-records-request-repository/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:text-gold transition underline underline-offset-2"
                >
                  Vance County Public Records Repository
                </a>{" "}
                - vancecounty.org
              </p>
              <p>
                <a
                  href="https://wizs.com/data-center-developer-files-plan-with-county-amid-talk-of-moratorium-udo-revision/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:text-gold transition underline underline-offset-2"
                >
                  WIZS: Data Center Developer Files Plan Amid Talk of Moratorium
                </a>{" "}
                - wizs.com
              </p>
              <p>
                <a
                  href="https://www.vancecounty.org/wp-content/uploads/2026/07/Vance-County-Data-Center-Fact-Sheet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:text-gold transition underline underline-offset-2"
                >
                  Vance County Data Center Fact Sheet
                </a>{" "}
                - vancecounty.org
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Research ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Related Research
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-8 text-3xl font-extrabold">
            What We Already Know
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/noise"
              className="group rounded-lg border border-card-border bg-card p-6 transition hover:border-gold/40"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Noise &amp; Infrasound</p>
              <p className="text-sm font-bold group-hover:text-gold transition mb-2">
                What does a data center actually sound like?
              </p>
              <p className="text-xs text-subtle">
                20 visual cards on audible noise, infrasound, distance decay, and what good regulation looks like. Sourced from peer-reviewed research.
              </p>
            </Link>
            <Link
              href="/sb730"
              className="group rounded-lg border border-card-border bg-card p-6 transition hover:border-gold/40"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">SB 730 Analysis</p>
              <p className="text-sm font-bold group-hover:text-gold transition mb-2">
                The Ratepayer Protection Act
              </p>
              <p className="text-xs text-subtle">
                What SB 730 does, what it misses, and why it matters for Vance County. 100 MW threshold, cooling mandates, tax exemption gaps. Stalled in Senate since June.
              </p>
            </Link>
            <Link
              href="/economic-development"
              className="group rounded-lg border border-card-border bg-card p-6 transition hover:border-gold/40"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Economic Development</p>
              <p className="text-sm font-bold group-hover:text-gold transition mb-2">
                The Conversation Has Been Brought to the Table
              </p>
              <p className="text-xs text-subtle">
                Independent analysis of the State of Economic Development presentation. Jobs, tax revenue, incentives, and what other communities demanded. 40+ sources.
              </p>
            </Link>
            <Link
              href="/water"
              className="group rounded-lg border border-card-border bg-card p-6 transition hover:border-gold/40"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Water &amp; SB 214</p>
              <p className="text-sm font-bold group-hover:text-gold transition mb-2">
                The Kerr Lake Water Question
              </p>
              <p className="text-xs text-subtle">
                SB 214 Section 5, the Franklin County letter, KLRWS ownership, Kerr Lake allocations, and the Army Corps reallocation study. Full timeline and analysis.
              </p>
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <a
              href="/reports/vance-county-data-center-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-card-border bg-card p-4 transition hover:border-gold/40"
            >
              <span className="text-gold text-lg">&#8595;</span>
              <div>
                <p className="text-sm font-bold group-hover:text-gold transition">Data Centers and Vance County (PDF)</p>
                <p className="text-xs text-subtle">69 cited sources. April 2026.</p>
              </div>
            </a>
            <a
              href="/reports/kerr-lake-report-v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-card-border bg-card p-4 transition hover:border-gold/40"
            >
              <span className="text-gold text-lg">&#8595;</span>
              <div>
                <p className="text-sm font-bold group-hover:text-gold transition">Kerr Lake, Data Centers, and Recreation (PDF)</p>
                <p className="text-xs text-subtle">48 cited sources. March 2026.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Site Navigation */}
      <section className="px-6 py-10 border-t border-card-border">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <Link href="/" className="text-subtle hover:text-gold transition">Home</Link>
            <Link href="/natelli-filing" className="text-subtle hover:text-gold transition">Natelli Filing</Link>
            <Link href="/water" className="text-subtle hover:text-gold transition">Water &amp; SB 214</Link>
            <Link href="/sb730" className="text-subtle hover:text-gold transition">SB 730</Link>
            <Link href="/economic-development" className="text-subtle hover:text-gold transition">Economic Development</Link>
            <Link href="/noise" className="text-subtle hover:text-gold transition">Noise Report</Link>
            <Link href="/community" className="text-subtle hover:text-gold transition">Community Voice</Link>
            <Link href="/#officials" className="text-subtle hover:text-gold transition font-semibold">Elected Officials</Link>
            <Link href="/#resources" className="text-subtle hover:text-gold transition font-semibold">Resources</Link>
          </div>
        </div>
      </section>

      {/* ── 9. Footer ── */}
      <footer className="border-t border-card-border px-6 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs text-subtle leading-relaxed">
            This page was published on September 12, 2026 at Henderson-Vance.fyi.
            Every claim is sourced to filed documents and public records. This
            is a citizen education project, not funded by any company, activist
            organization, or political campaign.
          </p>
        </div>
      </footer>
    </main>
  );
}

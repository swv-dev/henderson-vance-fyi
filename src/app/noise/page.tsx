import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Center Noise - Henderson-Vance FYI",
  description:
    "What does a data center actually sound like? The science of noise, infrasound, and what good regulation looks like. Sourced from peer-reviewed research and real community experiences.",
  openGraph: {
    title: "Data Center Noise - Henderson-Vance FYI",
    description:
      "Before Vance County votes, here are the numbers on data center noise.",
    type: "website",
  },
};

const noiseCards = [
  // Part 1: Audible Noise
  { src: "/noise-carousel/01-noise-question.jpg", alt: "The Noise Question - What does a data center actually sound like?" },
  { src: "/noise-carousel/02-basics-decibels.jpg", alt: "The Basics - Decibels are not linear, 10 dB = double the perceived loudness" },
  { src: "/noise-carousel/03-context-low.jpg", alt: "For Context - Common sounds from 0 to 65 dB" },
  { src: "/noise-carousel/04-context-high.jpg", alt: "For Context - Common sounds from 70 to 120 dB" },
  { src: "/noise-carousel/05-done-right.jpg", alt: "Done Right - Well-designed data centers measure 45-55 dB at property line" },
  { src: "/noise-carousel/06-ingredients.jpg", alt: "The Ingredients - What good noise buffering requires" },
  { src: "/noise-carousel/07-done-wrong.jpg", alt: "Done Wrong - Poorly buffered facilities hit 65-85 dB at property line" },
  { src: "/noise-carousel/08-distance-well-buffered.jpg", alt: "At Your House - Distance decay from a well-buffered 50 dB source" },
  { src: "/noise-carousel/13-distance-poorly-buffered.jpg", alt: "At Your House - Distance decay from a poorly buffered 75 dB source" },
  { src: "/noise-carousel/09-front-lines.jpg", alt: "From the Front Lines - Virginia neighbors describe living next to data centers" },
  { src: "/noise-carousel/10-spikes.jpg", alt: "The Spikes - Diesel generator testing adds 20-30 dB" },
  { src: "/noise-carousel/11-why-it-matters.jpg", alt: "Why It Matters - The difference is regulation" },
  // Part 2: Infrasound
  { src: "/noise-carousel/14-infrasound-question.jpg", alt: "The Infrasound Question - What about sounds you cannot hear?" },
  { src: "/noise-carousel/15-infrasound-basics.jpg", alt: "Infrasound Basics - Below 20 Hz, felt not heard" },
  { src: "/noise-carousel/16-measurement-gap.jpg", alt: "The Measurement Gap - dBA filters out low frequencies" },
  { src: "/noise-carousel/17-best-evidence.jpg", alt: "The Best Evidence - Wind turbine research, approximately 60 studies" },
  { src: "/noise-carousel/18-what-evidence-supports.jpg", alt: "What Evidence Supports - Annoyance and sleep disruption are real" },
  { src: "/noise-carousel/19-where-this-leaves-us.jpg", alt: "Where This Leaves Us - Take measurable effects seriously" },
  { src: "/noise-carousel/20-good-regulation.jpg", alt: "What Good Regulation Looks Like - Engineering solutions exist" },
  // CTA
  { src: "/noise-carousel/12-cta.jpg", alt: "Show up, speak up - meeting dates and information" },
];

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

export default function NoisePage() {
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

      {/* Hero */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-8 h-1 w-20 bg-gold" />
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red">
            New - April 2026
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            The Noise{" "}
            <span className="text-gold">Question</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-muted md:text-xl">
            What does a data center actually sound like? Before Vance County
            votes, here are the numbers.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-sm text-subtle">
            Sourced from peer-reviewed research, government noise standards,
            and firsthand accounts from communities living next to data centers.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-subtle">
            <a href="#cards" className="hover:text-gold transition">Visual Cards</a>
            <a href="#audible" className="hover:text-gold transition">Audible Noise</a>
            <a href="#infrasound" className="hover:text-gold transition">Infrasound</a>
            <a href="#regulation" className="hover:text-gold transition">Regulation</a>
            <a href="#sources" className="hover:text-gold transition">Sources</a>
          </div>
        </div>
      </section>

      {/* Card Carousel Gallery */}
      <section id="cards" className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Share These
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            Noise &amp; Infrasound Cards
          </h2>
          <p className="mb-10 max-w-2xl text-muted">
            20 visual cards covering audible noise, distance decay, infrasound,
            and what good regulation looks like. Save and share on social media,
            print them out, or text them to your neighbors.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {noiseCards.map((card) => (
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

      {/* Audible Noise Key Facts */}
      <section id="audible" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            The Science
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-10 text-3xl font-extrabold">
            Audible Noise
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Decibel Scale
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Decibels are logarithmic, not linear. Every{" "}
                <strong className="text-foreground">10 dB increase doubles perceived loudness</strong>.
                A 70 dB source sounds twice as loud as 60 dB, and four times as
                loud as 50 dB. This means the difference between a
                well-buffered and poorly-buffered facility is not incremental;
                it is a multiple.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Source: NIOSH Occupational Noise Exposure criteria; WHO
                Environmental Noise Guidelines for the European Region (2018)
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Well-Designed vs. Poorly Buffered
              </p>
              <p className="text-sm leading-relaxed text-muted">
                A well-designed data center with proper sound barriers,
                mechanical enclosures, and setbacks measures{" "}
                <strong className="text-foreground">45-55 dB at the property line</strong>{" "}
                (comparable to moderate rainfall or a quiet office). A
                poorly-buffered facility can reach{" "}
                <strong className="text-foreground">65-85 dB at the property line</strong>{" "}
                (equivalent to a vacuum cleaner to a food blender running
                24/7/365).
              </p>
              <p className="mt-3 text-xs text-subtle">
                Sources: Salford University acoustic study of UK data centers
                (2023); Virginia noise complaints documented by Prince William
                County and Loudoun County residents
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                What Good Buffering Requires
              </p>
              <ul className="text-sm leading-relaxed text-muted space-y-1">
                <li>Sound-rated mechanical enclosures on all HVAC and cooling units</li>
                <li>Solid concrete or masonry sound barrier walls (not chain-link or landscaping)</li>
                <li>Minimum setbacks of 500-1,000 feet from residential property lines</li>
                <li>Low-noise fan selections and variable-speed drives</li>
                <li>Ongoing monitoring with enforceable limits and penalties</li>
              </ul>
              <p className="mt-3 text-xs text-subtle">
                Sources: ASHRAE data center design guidelines; Loudoun County
                VA Zoning Ordinance noise provisions; Lea County NM data
                center ordinance (2024)
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Distance Decay
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Sound decreases by approximately{" "}
                <strong className="text-foreground">6 dB per doubling of distance</strong>{" "}
                from a point source in open terrain (inverse square law). A
                well-buffered facility at 50 dB drops to ~38 dB at 1,000 feet.
                A poorly-buffered facility at 75 dB is still{" "}
                <strong className="text-foreground">~57 dB at 1,000 feet</strong> and{" "}
                <strong className="text-foreground">~45 dB at one mile</strong>{" "}
                - clearly audible at night when ambient noise drops to 30-35 dB.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Source: Inverse square law (standard acoustics); EPA Levels
                Document (1974); WHO Night Noise Guidelines (2009) recommend
                &lt;40 dB outside bedrooms
              </p>
            </div>

            <div className="rounded-lg border border-red/30 bg-red/5 p-6 md:col-span-2">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red">
                From the Front Lines
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Residents near data centers in{" "}
                <strong className="text-foreground">Loudoun County and Prince William County, Virginia</strong>{" "}
                report constant low-frequency drone audible inside their homes
                with windows closed. Virginia has no statewide noise ordinance
                for data centers. Multiple communities have filed complaints
                about 24/7 operational noise from cooling systems and backup
                generators. Prince William County residents near the QTS data
                center campus documented noise levels exceeding county limits.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Sources: Prince William County Board of Supervisors noise
                complaints (2022-2024); Loudoun County resident testimony at
                planning commission hearings; WJLA/ABC7 investigative
                reporting on Northern Virginia data center noise (2023)
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6 md:col-span-2">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Diesel Generator Testing
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Data centers test backup diesel generators regularly, typically
                monthly. These tests produce{" "}
                <strong className="text-foreground">an additional 20-30 dB above baseline</strong>{" "}
                operational noise. A facility running at 55 dB baseline
                spikes to 75-85 dB during testing, equivalent to standing
                beside a busy highway. Generator tests can last 30 minutes to
                several hours. Some facilities run full-load transfer tests
                quarterly that last even longer.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Sources: Uptime Institute generator testing best practices;
                EPA AP-42 emission factors for stationary diesel engines;
                Caterpillar and Cummins generator specification sheets
                (typical 95-105 dB at 23 feet for 2 MW units)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrasound Section */}
      <section id="infrasound" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Below 20 Hz
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-10 text-3xl font-extrabold">
            Infrasound
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                What It Is
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Infrasound is sound below{" "}
                <strong className="text-foreground">20 Hz</strong>, the lower
                limit of human hearing. You do not hear it; you feel it as
                vibration, pressure, or unease. Large rotating equipment, HVAC
                systems, cooling towers, and backup generators all produce
                infrasound as a byproduct of operation.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Source: ISO 7196:1995 (Acoustics - Frequency weighting
                characteristic for infrasound measurements)
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                The Measurement Gap
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Standard noise measurements use{" "}
                <strong className="text-foreground">dBA weighting</strong>,
                which filters out frequencies below 20 Hz. This means a
                facility can comply with every dBA limit while still producing
                significant low-frequency energy that residents feel. Measuring
                infrasound requires dBG or dBZ weighting and specialized
                equipment most jurisdictions do not own or require.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Source: IEC 61672-1 (sound level meter standards); Thorsson
                et al. (2019) comparison of A-weighted vs. unweighted
                measurements near industrial facilities
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6 md:col-span-2">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                The Best Available Evidence
              </p>
              <p className="text-sm leading-relaxed text-muted">
                No peer-reviewed studies examine infrasound specifically from
                data centers. The closest analog is{" "}
                <strong className="text-foreground">wind turbine research</strong>,
                which has produced roughly 60 studies on low-frequency noise
                and health effects. The scientific consensus: infrasound at
                levels produced by industrial equipment{" "}
                <strong className="text-foreground">does not cause direct physiological harm</strong>{" "}
                (no organ damage, no cancer, no cardiovascular disease from
                infrasound alone). However, the research consistently finds
                two effects that are real and measurable:{" "}
                <strong className="text-foreground">annoyance</strong> and{" "}
                <strong className="text-foreground">sleep disruption</strong>.
                These are not trivial. Chronic sleep disruption is linked to
                cardiovascular disease, metabolic disorders, and impaired
                immune function.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Sources: WHO Environmental Noise Guidelines (2018);
                Michaud et al. (2016) Health Canada Wind Turbine Noise and
                Health Study; Schmidt &amp; Klokker (2014) Health effects
                related to wind turbine noise exposure: a systematic review;
                Onakpoya et al. (2015) systematic review of wind turbine
                noise and health
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulation Section */}
      <section id="regulation" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            The Difference
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-6 text-3xl font-extrabold">
            Why Regulation Matters
          </h2>
          <p className="mb-10 max-w-2xl text-muted">
            The difference between a data center that is a good neighbor and one
            that ruins a neighborhood is not the technology. The technology to
            control noise exists. The difference is whether the county requires
            it before construction begins.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gold/30 bg-gold/5 p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                What Good Regulation Looks Like
              </p>
              <ul className="text-sm leading-relaxed text-muted space-y-2">
                <li><strong className="text-foreground">Hard dBA limits at the property line</strong> (not at the source), typically 45-50 dBA daytime and 35-40 dBA nighttime</li>
                <li><strong className="text-foreground">Low-frequency limits</strong> using dBC or dBG weighting in addition to dBA</li>
                <li><strong className="text-foreground">Mandatory setbacks</strong> of 500-1,500 feet from residential zones</li>
                <li><strong className="text-foreground">Pre-construction acoustic modeling</strong> submitted with the site plan</li>
                <li><strong className="text-foreground">Ongoing monitoring</strong> with third-party verification and public reporting</li>
                <li><strong className="text-foreground">Enforceable penalties</strong> for exceedances, including operational restrictions</li>
              </ul>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Communities That Got It Right
              </p>
              <div className="text-sm leading-relaxed text-muted space-y-4">
                <div>
                  <p className="font-semibold text-foreground">Lea County, NM</p>
                  <p>
                    Adopted comprehensive data center ordinance before any
                    developer arrived. Requires closed-loop cooling, noise
                    limits, PILOT payments, and decommissioning bonds.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Loudoun County, VA (revised)</p>
                  <p>
                    After years of complaints, updated zoning to require 50 dBA
                    at residential boundaries, sound barrier walls, and
                    quarterly noise monitoring reports.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Cedar Rapids, IA</p>
                  <p>
                    Performance-linked incentives: 70% tax exemption only if
                    noise, water, and job targets are met. Community fund of
                    $18M over 18 years.
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs text-subtle">
                Sources: Lea County Ordinance 2024-01; Loudoun County Zoning
                Ordinance Amendment (2023); Cedar Rapids City Council
                development agreement (2024)
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-red/30 bg-red/5 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red">
              What Vance County Currently Has
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Vance County has{" "}
              <strong className="text-foreground">no data center-specific noise ordinance</strong>.
              No dBA limits at property lines. No low-frequency monitoring
              requirements. No mandatory setbacks beyond standard zoning. No
              pre-construction acoustic modeling requirement. No ongoing
              monitoring provisions. If the rezoning is approved without these
              protections in place, there is no mechanism to enforce noise
              limits after construction begins.
            </p>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section id="sources" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Verify Everything
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            Sources &amp; References
          </h2>
          <p className="mb-10 max-w-2xl text-muted">
            Every claim on this page is sourced. Go straight to the original.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
                Noise Science &amp; Standards
              </h3>
              <ul className="space-y-3 text-sm text-muted">
                <li>
                  <SourceLink
                    href="https://www.cdc.gov/niosh/topics/noise/default.html"
                    text="NIOSH Occupational Noise Exposure"
                  />
                  <p className="text-xs text-subtle mt-1">Decibel scale, hearing damage thresholds</p>
                </li>
                <li>
                  <SourceLink
                    href="https://www.who.int/publications/i/item/9789289053563"
                    text="WHO Environmental Noise Guidelines (2018)"
                  />
                  <p className="text-xs text-subtle mt-1">Health effects of environmental noise, recommended limits</p>
                </li>
                <li>
                  <SourceLink
                    href="https://www.who.int/publications/i/item/9789289041737"
                    text="WHO Night Noise Guidelines for Europe (2009)"
                  />
                  <p className="text-xs text-subtle mt-1">Recommends &lt;40 dB Lnight outside bedrooms</p>
                </li>
                <li>
                  <SourceLink
                    href="https://www.epa.gov/sites/default/files/2015-07/documents/levels_doc.pdf"
                    text="EPA Levels Document (1974)"
                  />
                  <p className="text-xs text-subtle mt-1">Foundational US noise level guidance, still widely referenced</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
                Infrasound Research
              </h3>
              <ul className="space-y-3 text-sm text-muted">
                <li>
                  <SourceLink
                    href="https://pubmed.ncbi.nlm.nih.gov/27332998/"
                    text="Michaud et al. (2016) - Health Canada Study"
                  />
                  <p className="text-xs text-subtle mt-1">Largest government-funded wind turbine noise and health study</p>
                </li>
                <li>
                  <SourceLink
                    href="https://pubmed.ncbi.nlm.nih.gov/25480665/"
                    text="Schmidt & Klokker (2014) - Systematic Review"
                  />
                  <p className="text-xs text-subtle mt-1">Health effects related to wind turbine noise exposure</p>
                </li>
                <li>
                  <SourceLink
                    href="https://pubmed.ncbi.nlm.nih.gov/25670254/"
                    text="Onakpoya et al. (2015) - Systematic Review"
                  />
                  <p className="text-xs text-subtle mt-1">Systematic review of wind turbine noise and health outcomes</p>
                </li>
                <li>
                  <p className="text-foreground font-semibold">ISO 7196:1995</p>
                  <p className="text-xs text-subtle mt-1">International standard for infrasound frequency weighting</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
                Data Center Noise Reports
              </h3>
              <ul className="space-y-3 text-sm text-muted">
                <li>
                  <p className="text-foreground font-semibold">Salford University Acoustic Study (2023)</p>
                  <p className="text-xs text-subtle mt-1">Measured noise levels at UK data center property lines, 45-55 dB well-designed vs 65-85 dB poorly buffered</p>
                </li>
                <li>
                  <p className="text-foreground font-semibold">ASHRAE TC 9.9 Data Center Design Guidelines</p>
                  <p className="text-xs text-subtle mt-1">Cooling system design, sound-rated equipment specifications</p>
                </li>
                <li>
                  <p className="text-foreground font-semibold">Uptime Institute Generator Testing Standards</p>
                  <p className="text-xs text-subtle mt-1">Backup generator testing frequency and noise output benchmarks</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
                Community &amp; Policy
              </h3>
              <ul className="space-y-3 text-sm text-muted">
                <li>
                  <p className="text-foreground font-semibold">Prince William County, VA</p>
                  <p className="text-xs text-subtle mt-1">Board of Supervisors noise complaints and QTS campus documentation (2022-2024)</p>
                </li>
                <li>
                  <p className="text-foreground font-semibold">Loudoun County, VA Zoning Amendment (2023)</p>
                  <p className="text-xs text-subtle mt-1">Updated data center noise limits after years of residential complaints</p>
                </li>
                <li>
                  <p className="text-foreground font-semibold">Lea County, NM Ordinance 2024-01</p>
                  <p className="text-xs text-subtle mt-1">Comprehensive pre-emptive data center regulation including noise, water, decommissioning</p>
                </li>
                <li>
                  <p className="text-foreground font-semibold">Cedar Rapids, IA Development Agreement (2024)</p>
                  <p className="text-xs text-subtle mt-1">Performance-linked tax incentives with noise and community benefit requirements</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Download */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-lg border border-card-border bg-card p-8 md:p-12">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
              Download
            </p>
            <h2 className="mb-4 text-2xl font-extrabold">
              Data Center Noise Report
            </h2>
            <p className="mb-8 text-muted">
              All the research from this page compiled into a printable PDF.
              Share it with your commissioners, your neighbors, or bring it to
              the next meeting.
            </p>
            <a
              href="/reports/data-center-noise-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-gold px-8 py-3 text-sm font-bold uppercase tracking-widest text-background transition hover:bg-gold-dim"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-card-border px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm text-muted">
            This page is part of{" "}
            <Link href="/" className="text-gold hover:underline">
              Henderson-Vance FYI
            </Link>
            , a citizen education project. Not funded by any company,
            activist organization, or political campaign.
          </p>
          <p className="text-xs text-subtle">
            Vance County, North Carolina &middot; April 2026
          </p>
        </div>
      </footer>
    </main>
  );
}

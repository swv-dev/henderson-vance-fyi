import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SB 730 Ratepayer Protection Act - Henderson-Vance FYI",
  description:
    "A citizen-researched, fully sourced breakdown of NC Senate Bill 730, the Ratepayer Protection Act. What it does, what it misses, and what it means for Vance County ratepayers.",
  openGraph: {
    title: "SB 730 Ratepayer Protection Act - Henderson-Vance FYI",
    description:
      "What every North Carolinian should know about Senate Bill 730. Every claim sourced.",
    type: "website",
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

export default function SB730Page() {
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
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Senate Bill{" "}
            <span className="text-gold">730</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-muted md:text-xl">
            The Ratepayer Protection Act and what it means for Vance County.
          </p>
          <p className="mx-auto max-w-xl text-sm text-subtle">
            Citizen-researched. Every claim sourced. Updated June 2026.
          </p>
        </div>
      </section>

      {/* ── 2. Status Banner ── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border-2 border-gold/60 bg-card p-6 md:p-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">
              Current Status
            </p>
            <ul className="space-y-3 text-sm text-muted leading-relaxed">
              <li>
                <strong className="text-foreground">Passed the NC House 69-44</strong> on June 3, 2026.
              </li>
              <li>
                Now in the <strong className="text-foreground">Senate Rules and Operations Committee</strong> for concurrence.
              </li>
              <li>
                Governor Stein has <strong className="text-foreground">not signed it</strong>.
              </li>
              <li>
                Filed by <strong className="text-foreground">Sen. Steve Jarvis (R-30)</strong> and{" "}
                <strong className="text-foreground">Sen. Buck Newton (R-4)</strong>.
                House version led by <strong className="text-foreground">Rep. Dean Arp (R-Union)</strong>.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 3. What the Bill Does (The Good Parts) ── */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            The Provisions
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            What the Bill Does
          </h2>
          <p className="mb-10 text-muted">
            These provisions apply to data centers with{" "}
            <strong className="text-foreground">100 MW or more</strong> of peak monthly demand.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Closed-Loop Cooling Mandatory
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Evaporative and open-loop systems are <strong className="text-foreground">banned</strong>.
                Annual third-party verification required. This directly protects
                local water supply from large-scale consumption.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                15-Year Minimum Utility Contracts
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Contracts must include <strong className="text-foreground">minimum billing requirements</strong>,
                performance provisions, and default protections so costs do not
                shift to residential ratepayers if a data center scales back or leaves.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Grid Cost Responsibility
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Data centers must pay for their own{" "}
                <strong className="text-foreground">transmission upgrades, new substations, and generation capacity</strong>.
                Residential customers do not subsidize their infrastructure.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Foreign Ownership Ban
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Entities tied to <strong className="text-foreground">China, Russia, Iran, and North Korea</strong> cannot
                acquire, lease, or hold interests in data centers or data center
                land in North Carolina. Effective December 1, 2026.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Eminent Domain Ban
              </p>
              <p className="text-sm leading-relaxed text-muted">
                <strong className="text-foreground">Cannot use eminent domain</strong> to acquire
                property for data center construction. Private land stays private.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Local Incentives Ban
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Local governments cannot offer{" "}
                <strong className="text-foreground">property tax abatements, PILOTs, grants, or subsidies</strong> to
                data centers above 100 MW. Exception: projects with existing local
                development approvals.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6 md:col-span-2">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Environmental and Noise Review
              </p>
              <p className="text-sm leading-relaxed text-muted">
                A <strong className="text-foreground">500-foot noise study</strong> is required. Local
                governments may also require review of air quality, water,
                agricultural impact, thermal plumes, parks, and historic sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. What the Bill Does Not Do (The Gaps) ── */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red">
            The Gaps
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-10 text-3xl font-extrabold">
            What the Bill Does Not Do
          </h2>

          {/* Gap 1 */}
          <div className="mb-6 rounded-lg border-2 border-red/40 bg-card p-6 md:p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red">
              Gap 1: State Tax Exemptions Untouched
            </p>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              NC&apos;s data center sales tax exemption program (G.S. 105-164.13(55a)){" "}
              <strong className="text-foreground">remains fully intact</strong> under SB 730.
            </p>
            <ul className="mb-4 space-y-2 text-sm text-muted leading-relaxed">
              <li>
                <strong className="text-foreground">37 data centers</strong> currently qualify.
              </li>
              <li>
                Current cost: <strong className="text-foreground">$45 to $57 million per year</strong> in foregone revenue.
              </li>
              <li>
                If all planned projects build out: up to{" "}
                <strong className="text-foreground">$450 million per year</strong>.
              </li>
              <li>
                Construction-phase exemptions alone:{" "}
                <strong className="text-foreground">$1.5 to $2.3 billion</strong>.
              </li>
              <li>
                Exempts electricity, servers, hardware, software, HVAC, and construction
                materials from the ~7% combined state and local sales tax.
              </li>
              <li>
                Qualification: $75M+ investment over 5 years, above-county-average wages,
                health insurance.
              </li>
              <li>
                <strong className="text-foreground">No sunset date.</strong> NC is one of only 7 states
                where the exemption never expires.
              </li>
              <li>
                NC is a &ldquo;dark&rdquo; state with{" "}
                <strong className="text-foreground">no centralized reporting</strong> of aggregate data
                center tax break costs.
              </li>
            </ul>
            <p className="text-xs text-subtle">
              Sources: EDPNC, NC Dept. of Commerce (April 2026), Good Jobs First,
              Stateline (April 2026)
            </p>
          </div>

          {/* Gap 2 */}
          <div className="rounded-lg border-2 border-red/40 bg-card p-6 md:p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red">
              Gap 2: The Coal Retirement Block (Section 10)
            </p>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              The NC Utilities Commission{" "}
              <strong className="text-foreground">
                cannot authorize retirement of any baseload generating facility above 100 MW
              </strong>{" "}
              until a certificate has been issued for construction of at least{" "}
              <strong className="text-foreground">1,000 MW of new nuclear capacity</strong>.
            </p>
            <ul className="mb-4 space-y-2 text-sm text-muted leading-relaxed">
              <li>
                In practice: Duke Energy cannot retire its remaining coal plants until a
                nuclear permit is issued.
              </li>
              <li>
                Coal plants run{" "}
                <strong className="text-foreground">30% more expensive per MWh</strong> than clean energy
                alternatives.
              </li>
              <li>
                EDF analysis: forces ratepayers to underwrite approximately{" "}
                <strong className="text-foreground">$128 million per year</strong>.
              </li>
              <li>
                Nuclear timeline: Georgia&apos;s AP1000 reactors were{" "}
                <strong className="text-foreground">7 years behind schedule</strong> and{" "}
                <strong className="text-foreground">$20 billion over budget</strong>. South Carolina&apos;s
                AP1000 was never completed. Consumers there are still paying for it.
              </li>
              <li>
                This provision{" "}
                <strong className="text-foreground">directly contradicts</strong> the bill&apos;s
                &ldquo;ratepayer protection&rdquo; name.
              </li>
            </ul>
            <p className="text-xs text-subtle">
              Sources: EDF (June 2026), CleanAIRE NC, Canary Media, WFAE
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. The Three Bills Side by Side ── */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Comparison
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-10 text-3xl font-extrabold">
            The Three Bills Side by Side
          </h2>

          <div className="overflow-x-auto rounded-lg border border-card-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-card-border text-xs uppercase tracking-wider text-blue">
                  <th className="px-4 py-3 min-w-[160px]">Feature</th>
                  <th className="px-4 py-3 min-w-[180px]">SB 730 (R)</th>
                  <th className="px-4 py-3 min-w-[180px]">HB 1063 (D)</th>
                  <th className="px-4 py-3 min-w-[180px]">HB 1213 (Bipartisan)</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Sponsors</td>
                  <td className="px-4 py-3">Sen. Jarvis, Sen. Newton; House: Rep. Arp</td>
                  <td className="px-4 py-3">Reps. Prather, Johnson-Hostler, Longest, Helfrich + 14 Dems</td>
                  <td className="px-4 py-3">Reps. Loftis (R), Ward (R), Harrison (D)</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">MW Threshold</td>
                  <td className="px-4 py-3">100 MW</td>
                  <td className="px-4 py-3">40 MW</td>
                  <td className="px-4 py-3">None (all qualifying)</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Status</td>
                  <td className="px-4 py-3">Passed House 69-44, in Senate Rules</td>
                  <td className="px-4 py-3">Referred to House Rules 4/28, stalled</td>
                  <td className="px-4 py-3">Introduced 4/30, no committee vote</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Closed-loop cooling</td>
                  <td className="px-4 py-3 text-gold">Yes</td>
                  <td className="px-4 py-3 text-gold">Yes</td>
                  <td className="px-4 py-3 text-red">No</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">15-year contracts</td>
                  <td className="px-4 py-3 text-gold">Yes</td>
                  <td className="px-4 py-3">Cost-based rates required</td>
                  <td className="px-4 py-3 text-red">No</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Grid cost responsibility</td>
                  <td className="px-4 py-3 text-gold">Yes</td>
                  <td className="px-4 py-3 text-gold">Yes</td>
                  <td className="px-4 py-3 text-red">No</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Environmental review</td>
                  <td className="px-4 py-3">Yes, 500 ft</td>
                  <td className="px-4 py-3">Yes, DEQ disclosure</td>
                  <td className="px-4 py-3 text-red">No</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Foreign ownership ban</td>
                  <td className="px-4 py-3 text-gold">Yes</td>
                  <td className="px-4 py-3 text-red">No</td>
                  <td className="px-4 py-3 text-red">No</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Eminent domain ban</td>
                  <td className="px-4 py-3 text-gold">Yes</td>
                  <td className="px-4 py-3 text-red">No</td>
                  <td className="px-4 py-3 text-red">No</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">On-site clean energy</td>
                  <td className="px-4 py-3 text-red">No</td>
                  <td className="px-4 py-3 text-gold">Yes, 25% zero-carbon</td>
                  <td className="px-4 py-3 text-red">No</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Water use reporting</td>
                  <td className="px-4 py-3">Implied</td>
                  <td className="px-4 py-3 text-gold">Yes, if over 1B liters/yr</td>
                  <td className="px-4 py-3 text-red">No</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">State sales tax exemption</td>
                  <td className="px-4 py-3 text-red">Untouched</td>
                  <td className="px-4 py-3 text-gold">Repealed</td>
                  <td className="px-4 py-3 text-gold">Repealed</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Local incentives ban</td>
                  <td className="px-4 py-3">Yes, 100 MW+</td>
                  <td className="px-4 py-3">Yes, 40 MW+</td>
                  <td className="px-4 py-3">Not addressed</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Coal retirement block</td>
                  <td className="px-4 py-3 text-red">Yes</td>
                  <td className="px-4 py-3 text-gold">No</td>
                  <td className="px-4 py-3 text-gold">No</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">CEPS expansion</td>
                  <td className="px-4 py-3 text-gold">Yes</td>
                  <td className="px-4 py-3 text-red">No</td>
                  <td className="px-4 py-3 text-red">No</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-lg border border-card-border bg-card p-6">
            <p className="text-sm leading-relaxed text-muted">
              <strong className="text-foreground">HB 1213 has strong bipartisan support.</strong>{" "}
              House Speaker Tim Moore and Governor Stein have both called for rolling
              back the electricity exemption. The substance may be folded into the
              state budget rather than passing standalone. Governor Stein separately
              proposed phasing out all NC data center tax incentives by 2033.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. What Is Actually Driving Your Electric Bill ── */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Fact Check
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            What Is Actually Driving Your Electric Bill
          </h2>
          <p className="mb-10 text-muted">
            Data centers are not currently driving rate increases. They represent{" "}
            <strong className="text-foreground">less than 1%</strong> of Duke Energy&apos;s peak
            demand today. The threat is real, but it is forward-looking. Here is
            what is actually raising your bill right now.
          </p>

          <div className="space-y-5">
            {/* Driver 1 */}
            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                1. Grid Modernization and Capital Investment
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Duke&apos;s 10-year capital plan:{" "}
                <strong className="text-foreground">$145 billion</strong> company-wide,{" "}
                <strong className="text-foreground">$75 billion</strong> for grid modernization.
                In NC, $7.7 billion in grid upgrades for the DEC territory alone. This
                is the primary justification in every rate case filing. The NC Utilities
                Commission approved a 3-year stepped increase starting January 2024.
                Cumulative: approximately{" "}
                <strong className="text-foreground">14% increase</strong>, from $130 to $149 per
                month for a typical 1,000 kWh customer. The pending 2025 rate case
                originally asked for 18% over 2 years. Duke lowered it to approximately{" "}
                <strong className="text-foreground">11.6%</strong> on June 23, 2026, after AG
                Jeff Jackson pushed back.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Source: Duke Energy rate filings, NCUC, WUNC (June 23, 2026)
              </p>
            </div>

            {/* Driver 2 */}
            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                2. Coal Ash Cleanup
              </p>
              <p className="text-sm leading-relaxed text-muted">
                <strong className="text-foreground">14 NC sites.</strong> Total estimated cost:{" "}
                <strong className="text-foreground">$8 to $10 billion</strong>. After a settlement
                with the AG&apos;s office, ratepayers bear approximately 50% of cleanup
                costs. Shareholders absorb the other half. This is baked into current
                rates and will continue for years.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Source: Utility Dive, NCUC filings
              </p>
            </div>

            {/* Driver 3 */}
            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                3. Fuel Costs (Coal and Gas Pass-Through)
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Passed directly to customers via fuel adjustment.{" "}
                <strong className="text-foreground">No NCUC approval needed.</strong> The January
                2026 winter storm alone generated{" "}
                <strong className="text-foreground">$800 million</strong> in fuel and purchased power
                costs Duke is seeking to recover. Coal fuel costs increased approximately
                20% from 2018 to 2024.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Source: Duke Energy filings, WFAE, Carolina Journal
              </p>
            </div>
          </div>

          {/* Forward-looking note */}
          <div className="mt-6 rounded-lg border border-gold/30 bg-card p-6">
            <p className="text-sm leading-relaxed text-muted">
              Duke projects data centers will reach approximately{" "}
              <strong className="text-foreground">10% of total electricity sales by 2030</strong>,
              with approximately 6 GW in the pipeline. Duke&apos;s June 23, 2026, rate case
              revision removed $173.2 million in large-load customer infrastructure
              upgrades from the residential rate request, acknowledging these costs
              should not fall on residential ratepayers. The question is not whether
              data centers will affect your bill. The question is{" "}
              <strong className="text-foreground">who pays for the infrastructure they require</strong>.
              SB 730 tries to answer that. Section 10 undermines it.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. The 100 MW Loophole ── */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red">
            The Gap
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            Why 100 MW Is Too High
          </h2>
          <p className="mb-10 text-muted">
            SB 730&apos;s 100 MW threshold creates a loophole. A company can split a
            300 MW campus into <strong className="text-foreground">three 99 MW buildings</strong> on
            adjacent parcels, and none of them trigger a single provision in the bill.
            No cooling mandate, no contracts, no environmental review.
          </p>

          <div className="overflow-x-auto rounded-lg border border-card-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-card-border text-xs uppercase tracking-wider text-blue">
                  <th className="px-4 py-3">Jurisdiction</th>
                  <th className="px-4 py-3">Threshold</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3">FERC RM26-4 (proposed)</td>
                  <td className="px-4 py-3 font-semibold text-foreground">20 MW</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3">Virginia GS-5</td>
                  <td className="px-4 py-3 font-semibold text-foreground">25 MW</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3">Alabama Power</td>
                  <td className="px-4 py-3 font-semibold text-foreground">30 MW</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3">HB 1063 (NC, Dem)</td>
                  <td className="px-4 py-3 font-semibold text-foreground">40 MW</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3">Tennessee HB 1847 (signed May 2026)</td>
                  <td className="px-4 py-3 font-semibold text-foreground">50 MW</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3">Pennsylvania PUC</td>
                  <td className="px-4 py-3 font-semibold text-foreground">50 MW / 100 MW aggregate</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3">Texas SB 6</td>
                  <td className="px-4 py-3 font-semibold text-foreground">75 MW</td>
                </tr>
                <tr className="border-b border-card-border/50 bg-card">
                  <td className="px-4 py-3 font-semibold text-gold">NC SB 730</td>
                  <td className="px-4 py-3 font-semibold text-gold">100 MW</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-muted">
            <strong className="text-foreground">86% of utility tariffs</strong> tracked by the SEPA
            DELTa database set their threshold below 100 MW. North Carolina&apos;s
            threshold is an outlier.
          </p>
          <p className="mt-2 text-xs text-subtle">
            Source: SEPA DELTa Database, LBNL (January 2025)
          </p>
        </div>
      </section>

      {/* ── 8. Anti-Fragmentation Solutions ── */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Proven Models
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-10 text-3xl font-extrabold">
            How Other States Closed This Loophole
          </h2>

          <div className="space-y-5">
            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Virginia DEQ (January 2025)
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Three-factor aggregation test. Facilities under common control, in
                the same industrial category, and on contiguous or adjacent property
                must be treated as a <strong className="text-foreground">single source</strong>.
                Distance benchmarks: less than 0.125 miles = presumed single source.
                0.125 to 0.25 miles = case-by-case. Greater than 0.25 miles = presumed
                separate.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Source: Hunton Andrews Kurth
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Virginia GS-5 Tariff (Effective January 1, 2027)
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Explicit &ldquo;campus aggregation&rdquo; clause. Geographically proximate
                facilities are treated as a{" "}
                <strong className="text-foreground">single load</strong> for rate class purposes.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Source: Virginia SCC
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Pennsylvania PUC Model Tariff (2026)
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Dual threshold.{" "}
                <strong className="text-foreground">50 MW individually OR 100 MW in aggregate</strong>.
                One sentence closes the loophole.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Source: K&amp;L Gates
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Illinois EPA
              </p>
              <p className="text-sm leading-relaxed text-muted">
                5-year temporal lookback. Emissions from the current project must be
                aggregated with all projects in the current year plus the previous 4
                calendar years. Plus a &ldquo;technical and economic dependency&rdquo; test.
                If Phase 2&apos;s site plan, financing, and infrastructure all assume
                Phase 1 exists,{" "}
                <strong className="text-foreground">it is aggregated with Phase 1</strong>.
              </p>
              <p className="mt-3 text-xs text-subtle">
                Source: Trinity Consultants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. A Better Framework ── */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            A Path Forward
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            What Graduated Regulation Could Look Like
          </h2>
          <p className="mb-10 text-muted">
            Instead of a single binary threshold where everything under 100 MW is
            unregulated and everything over is fully regulated, a graduated framework
            scales requirements with consumption. No single threshold to game. No
            cliff to exploit.
          </p>

          {/* Universal Requirements */}
          <h3 className="mb-4 text-xl font-bold text-foreground">
            Universal Requirements (All Data Centers)
          </h3>
          <div className="mb-10 overflow-x-auto rounded-lg border border-card-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-card-border text-xs uppercase tracking-wider text-blue">
                  <th className="px-4 py-3">Requirement</th>
                  <th className="px-4 py-3">Rationale</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Closed-loop cooling mandatory</td>
                  <td className="px-4 py-3">
                    Water supply protection. A 30 MW facility drains the same aquifer per
                    gallon as a 300 MW facility.
                  </td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Noise study and limits (50 dBA day, 45 dBA night at property line)
                  </td>
                  <td className="px-4 py-3">
                    Data center HVAC, generators, and cooling run 24/7/365. This is
                    permanent, not construction noise.
                  </td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Annual third-party verification (cooling and noise)
                  </td>
                  <td className="px-4 py-3">Self-reporting invites underreporting.</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">Foreign ownership ban</td>
                  <td className="px-4 py-3">
                    National security does not scale with megawatts.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Graduated Tiers */}
          <h3 className="mb-4 text-xl font-bold text-foreground">
            Graduated Tiers
          </h3>
          <div className="mb-6 overflow-x-auto rounded-lg border border-card-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-card-border text-xs uppercase tracking-wider text-blue">
                  <th className="px-4 py-3">Tier</th>
                  <th className="px-4 py-3">Requirements</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">
                    Tier 1 (20 to 40 MW)
                  </td>
                  <td className="px-4 py-3">
                    Water use disclosure, grid upgrade cost transparency, basic
                    environmental notice to county, annual NCUC reporting.
                  </td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">
                    Tier 2 (40 to 60 MW)
                  </td>
                  <td className="px-4 py-3">
                    Plus 5-year minimum utility contract, demand flexibility participation,
                    DEQ environmental disclosure.
                  </td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">
                    Tier 3 (60 to 100 MW)
                  </td>
                  <td className="px-4 py-3">
                    Plus full environmental review (air, water, agriculture, historic
                    sites), 10-year contract, 75% minimum billing, collateral, 25%
                    on-site clean energy.
                  </td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">
                    Tier 4 (100+ MW)
                  </td>
                  <td className="px-4 py-3">
                    Plus 15-year contract, 85% minimum billing, full infrastructure cost
                    responsibility, eminent domain ban.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-5 rounded-lg border border-card-border bg-card p-6">
            <p className="text-sm leading-relaxed text-muted">
              This framework draws on proven mechanisms from Virginia&apos;s GS-5 tariff,
              Ireland&apos;s CRU Connection Policy (the closest existing graduated model),
              the EU Energy Efficiency Directive, Pennsylvania&apos;s aggregate threshold,
              and Tennessee&apos;s HB 1847.{" "}
              <strong className="text-foreground">
                It is not theoretical. Every component exists in active law or regulation
                somewhere.
              </strong>
            </p>
          </div>

          <div className="rounded-lg border border-card-border bg-card p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
              Anti-Fragmentation
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Combined with Pennsylvania-style aggregation (individual OR aggregate
              threshold), Virginia-style distance tests, and Illinois-style temporal
              lookback, there is no profitable stopping point just below any tier
              boundary. Fragmentation does not work when every facility faces universal
              baseline requirements and aggregate demand triggers higher tiers.
            </p>
          </div>
        </div>
      </section>

      {/* ── 10. What You Can Do ── */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Take Action
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-10 text-3xl font-extrabold">
            What You Can Do
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Contact Your Representatives
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Tell them to amend Section 10 (the coal retirement block), lower the
                threshold, add aggregation language, and repeal the state tax exemption.
                Your voice matters.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Stay Informed
              </p>
              <p className="text-sm leading-relaxed text-muted">
                This bill is in the Senate Rules Committee. The next vote could come at
                any time. Follow the bill status at{" "}
                <SourceLink
                  href="https://www.ncleg.gov/BillLookUp/2025/S730"
                  text="ncleg.gov"
                />.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Share This Page
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Every fact on this page is sourced. Share it with your neighbors, your
                commissioners, your state representative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. Sources ── */}
      <section id="sources" className="px-6 pb-14">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            References
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-10 text-3xl font-extrabold">
            Sources
          </h2>

          <ol className="list-decimal space-y-3 pl-6 text-sm text-muted leading-relaxed">
            <li>
              <SourceLink
                href="https://www.ncleg.gov/BillLookUp/2025/S730"
                text="NC General Assembly, SB 730 Bill Lookup"
              />
            </li>
            <li>
              <SourceLink
                href="https://webservices.ncleg.gov/ViewDocSiteFile/119259"
                text="NC General Assembly, SB 730 Bill Text"
              />
            </li>
            <li>
              <SourceLink
                href="https://ncnewsline.com/2026/06/02/nc-house-lawmakers-fast-track-data-center-regulation-bill/"
                text="NC Newsline, &ldquo;House fast-tracks data center regulation bill,&rdquo; June 2, 2026"
              />
            </li>
            <li>
              <SourceLink
                href="https://ncnewsline.com/2026/06/03/nc-house-advances-bill-to-regulate-data-centers-require-more-nuclear-power/"
                text="NC Newsline, &ldquo;House advances bill to regulate data centers,&rdquo; June 3, 2026"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.cbs17.com/news/capitol-report/nc-house-passes-data-center-regulation-bill/"
                text="CBS 17, &ldquo;NC House passes data center regulation bill&rdquo;"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.carolinajournal.com/nc-house-passes-ratepayer-protection-act/"
                text="Carolina Journal, &ldquo;NC House passes Ratepayer Protection Act&rdquo;"
              />
            </li>
            <li>
              <SourceLink
                href="https://cleanairenc.org/blog/2026/06/04/statement-sb-730-fails-ratepayers/"
                text="CleanAIRE NC, &ldquo;SB 730 fails ratepayers,&rdquo; June 4, 2026"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.edf.org/media/new-analysis-senate-bill-730-forces-north-carolinians-underwrite-128-million-year-dukes-aging"
                text="EDF, &ldquo;SB 730 forces NC to underwrite $128M/year for Duke&apos;s aging coal plants&rdquo;"
              />
            </li>
            <li>
              <SourceLink
                href="https://ncejn.org/press-release-under-the-pretense-of-protection-senate-bill-730-shifts-financial-risks-to-north-carolinians/"
                text="NCEJN, &ldquo;Under the pretense of protection, SB 730 shifts financial risks to North Carolinians&rdquo;"
              />
            </li>
            <li>
              <SourceLink
                href="https://progressivereform.org/cpr-blog/many-states-moving-to-regulate-data-centers-north-carolina-just-took-step-sideways/"
                text="Center for Progressive Reform, &ldquo;NC took a step sideways&rdquo;"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.wfae.org/2026-06-04/nc-house-passes-data-center-regulation"
                text="WFAE, &ldquo;NC House passes data center regulation amid coal concerns,&rdquo; June 4, 2026"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.canarymedia.com/articles/fossil-fuels/north-carolina-bill-coal-nuclear"
                text="Canary Media, &ldquo;NC bill would prop up coal until new nuclear is approved&rdquo;"
              />
            </li>
            <li>
              <SourceLink
                href="https://edpnc.com/incentives/data-centers-sales-use-tax-exemptions/"
                text="EDPNC, Data Centers Sales and Use Tax Exemptions"
              />
            </li>
            <li>
              <SourceLink
                href="https://goodjobsfirst.org/data-center-tax-breaks-becoming-billion-dollar-budget-sinkholes/"
                text="Good Jobs First, &ldquo;Data Center Tax Breaks Becoming Billion-Dollar Budget Sinkholes&rdquo;"
              />
            </li>
            <li>
              <SourceLink
                href="https://stateline.org/2026/04/15/many-states-dont-report-losses-from-data-center-tax-breaks-study-says/"
                text="Stateline, &ldquo;Many states don&apos;t report losses from data center tax breaks,&rdquo; April 2026"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.wunc.org/term/news/2026-04-22/data-centers-nc-dont-pay-taxes-on-supplies"
                text="WUNC, &ldquo;Data centers in NC don&apos;t pay taxes on supplies or electricity,&rdquo; April 22, 2026"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.wunc.org/politics/2026-06-15/north-carolina-tax-incentives-data-centers-phase-out-proposal"
                text="WUNC, &ldquo;Gov. Stein proposes phasing out NC&apos;s tax incentives for data centers by 2033,&rdquo; June 15, 2026"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.wunc.org/politics/2026-05-08/nc-legislative-leaders-support-rolling-back-data-center-sales-tax-exemptions/"
                text="WUNC, &ldquo;NC legislative leaders support rolling back data center sales tax exemptions&rdquo;"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.duke-energy.com/home/billing/dec-nc-rate-case"
                text="Duke Energy, 2025 DEC and DEP Rate Case"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.wunc.org/term/news/2026-06-23/duke-energy-lowering-rate-request-nc-utilities-commission"
                text="WUNC, &ldquo;Duke Energy takes rare step of lowering rate request,&rdquo; June 23, 2026"
              />
            </li>
            <li>
              <SourceLink
                href="https://sepapower.org/large-load-tariffs-database/"
                text="SEPA DELTa Database"
              />
            </li>
            <li>
              <SourceLink
                href="https://eta-publications.lbl.gov/sites/default/files/2025-01/electricity_rate_designs_for_large_loads_evolving_practices_and_opportunities_final.pdf"
                text="LBNL, &ldquo;Electricity Rate Designs for Large Loads,&rdquo; January 2025"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.hunton.com/the-nickel-report/what-data-center-developers-need-to-know-about-virginia-deqs-recent-air-permitting-guidance"
                text="Virginia DEQ Clarification 2025-02 (Hunton Andrews Kurth)"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.scc.virginia.gov/media/sccvirginiagov-home/about-the-scc/fact-sheets/scc-data-center-initiatives-02-2026.pdf"
                text="Virginia SCC, GS-5 Data Center Initiatives Fact Sheet"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.klgates.com/Pennsylvania-Public-Utility-Commission-Adopts-Model-Interconnection-Tariff-for-Large-Load-Customers-5-29-2026"
                text="K&amp;L Gates, &ldquo;Pennsylvania PUC Model Interconnection Tariff,&rdquo; May 2026"
              />
            </li>
            <li>
              <SourceLink
                href="https://trinityconsultants.com/resources/growing-pains-strategic-permitting-for-illinois-data-center-expansions/"
                text="Trinity Consultants, &ldquo;Illinois Data Center Permitting&rdquo;"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.philiplee.ie/re-balancing-the-digital-bargain-irelands-new-cru-large-energy-user-connection-policy/"
                text="Ireland CRU Large Energy User Connection Policy (Philip Lee LLP analysis)"
              />
            </li>
            <li>
              <SourceLink
                href="https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficiency-targets-directive-and-rules/energy-efficiency-directive/energy-performance-data-centres_en"
                text="EU Energy Efficiency Directive, Data Centre Reporting"
              />
            </li>
            <li>
              <SourceLink
                href="https://svalleynow.com/2026/06/01/new-tennessee-law-now-in-effect-to-shield-utility-customers-from-data-center-costs/amp/"
                text="Tennessee HB 1847, signed May 2026"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.ferc.gov/news-events/news/ferc-act-large-load-interconnection-docket-june-2026"
                text="FERC Docket RM26-4, Large Load Interconnection"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.wral.com/news/nccapitol/data-center-nuclear-plant-duke-energy-price-bill-nc-june-2026/"
                text="WRAL, &ldquo;NC House passes bill to crack down on data centers&rdquo;"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.datacenterknowledge.com/build-design/north-carolina-tests-who-pays-for-the-ai-power-boom"
                text="Data Center Knowledge, &ldquo;NC tests who pays for AI power boom&rdquo;"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.utilitydive.com/news/duke-coal-ash-clean-up-settlement-shifts-11b-in-costs-away-from-north-car/593925/"
                text="Utility Dive, &ldquo;Duke coal ash cleanup settlement&rdquo;"
              />
            </li>
            <li>
              <SourceLink
                href="https://www.wfae.org/energy-environment/2026-04-28/duke-energy-plans-to-raise-rates-in-june-heres-what-theyre-paying-for"
                text="WFAE, &ldquo;Duke Energy plans to raise rates,&rdquo; April 28, 2026"
              />
            </li>
          </ol>
        </div>
      </section>

      {/* ── Footer ── */}
      <section className="border-t border-card-border px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm leading-relaxed text-subtle">
            This page is a citizen education project. It is not funded by any data
            center company, activist organization, or political campaign. Every claim
            is sourced. Share it. Print it. Form your own opinion, but form it with
            the facts in front of you.
          </p>
        </div>
      </section>
    </main>
  );
}

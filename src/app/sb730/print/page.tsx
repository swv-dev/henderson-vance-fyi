import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SB 730 Analysis - Print Version - Henderson-Vance FYI",
  description: "Printable research report on NC Senate Bill 730",
  robots: "noindex",
};

export default function SB730PrintPage() {
  return (
    <main className="mx-auto max-w-[8.5in] bg-white text-black px-[0.75in] py-[0.5in] print:p-0 text-[11pt] leading-relaxed font-sans">
      <style>{`
        @media print {
          body { background: white !important; }
          main { max-width: none; padding: 0.5in 0.75in; }
          .page-break { page-break-before: always; }
          .no-break { page-break-inside: avoid; }
          a { color: #1a5276; text-decoration: underline; }
          table { page-break-inside: avoid; }
          .back-link { display: none; }
        }
        @media screen {
          body { background: #f5f5f5 !important; }
          main { box-shadow: 0 0 20px rgba(0,0,0,0.1); margin: 2rem auto; }
        }
      `}</style>

      {/* Back link - hidden in print */}
      <div className="back-link mb-4">
        <a href="/sb730" className="text-blue-700 underline text-sm">
          &larr; Back to interactive version
        </a>
      </div>

      {/* Title Page Area */}
      <div className="text-center mb-10 border-b-2 border-black pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
          Henderson-Vance FYI - Citizen Research Series
        </p>
        <h1 className="text-3xl font-extrabold mb-3">
          NC Senate Bill 730: The Ratepayer Protection Act
        </h1>
        <p className="text-lg text-gray-700 mb-1">
          A Citizen Research Report for Vance County
        </p>
        <p className="text-sm text-gray-500 mt-3">
          henderson-vance.fyi | June 2026
        </p>
        <p className="text-xs text-gray-400 mt-4 italic max-w-lg mx-auto">
          Every claim in this document is sourced. References are numbered in
          brackets and listed at the end.
        </p>
      </div>

      {/* 1. Executive Summary */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          1. Executive Summary
        </h2>
        <p>
          SB 730 passed the NC House 69-44 on June 3, 2026, and is now in the
          Senate Rules Committee [1]. The bill mandates closed-loop cooling,
          15-year utility contracts, and foreign ownership restrictions for data
          centers above 100 MW [2]. It has two critical gaps: it leaves the
          state&apos;s $45 to $57 million per year data center tax exemption
          untouched [3][4], and it blocks coal plant retirements until new
          nuclear capacity is permitted, costing ratepayers an estimated $128
          million per year in above-market fuel and maintenance costs [5][6].
        </p>
      </div>

      {/* 2. Current Status */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          2. Current Status
        </h2>
        <table className="w-full text-sm mb-3 border-collapse">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold w-40">Filed</td>
              <td className="py-1.5">March 2025 by Sen. Steve Jarvis (R-Davidson/Davie) as a CEPS energy bill [1]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold">Senate passage</td>
              <td className="py-1.5">May 7, 2025 (29-18) as a narrow CEPS-only bill [1]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold">House substitute</td>
              <td className="py-1.5">May 2026: Reps. Dean Arp (R-Union) and Matthew Winslow (R-Franklin) add data center provisions [2][7]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold">House passage</td>
              <td className="py-1.5">June 3, 2026 (69-44) [1]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold">Current position</td>
              <td className="py-1.5">Senate Rules Committee. Requires Senate concurrence on the House substitute [1]</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm">
          <strong>Key detail:</strong> The Senate originally passed a narrow
          energy bill. The House transformed it into a data center regulation
          vehicle. The Senate must now vote on a substantially different bill
          than what it originally passed [1][2].
        </p>
      </div>

      {/* 3. What the Bill Does */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          3. What the Bill Does
        </h2>
        <p className="mb-3">
          The House committee substitute contains seven major provisions
          targeting data centers with peak monthly demand of 100 MW or more
          [2][7]:
        </p>
        <ol className="list-decimal pl-6 mb-3 space-y-3">
          <li>
            <strong>15-year utility contracts with full cost allocation.</strong>{" "}
            Data centers must pay the full incremental costs of generation,
            transmission, and grid expansion. Minimum billing provisions prevent
            facilities from reserving capacity without paying for it [2].
          </li>
          <li>
            <strong>Closed-loop water cooling systems.</strong>{" "}
            Mandates closed-loop or water-minimizing cooling technology. Open-loop
            systems that draw and discharge surface water are prohibited [2][8].
          </li>
          <li>
            <strong>Local tax incentive ban.</strong>{" "}
            Counties and municipalities cannot offer property tax abatements,
            deferrals, rebates, or grants to data center operators [2][9].
          </li>
          <li>
            <strong>Eminent domain prohibition.</strong>{" "}
            Data center operators cannot use eminent domain to acquire property
            [2].
          </li>
          <li>
            <strong>Foreign ownership restrictions.</strong>{" "}
            Entities owned or controlled by China, Iran, North Korea, or Russia
            are prohibited from owning or operating covered data centers [2].
          </li>
          <li>
            <strong>Environmental and community impact studies.</strong>{" "}
            Noise studies, air quality assessments, water impact analyses, and
            community impact reports required before zoning approval [2][7].
          </li>
          <li>
            <strong>Revolving door provision.</strong>{" "}
            NCUC members and Public Staff cannot work for regulated utilities for
            6 months after leaving office [2].
          </li>
        </ol>
        <p className="text-sm">
          The bill also reclassifies future nuclear facilities (placed in service
          on or after January 1, 2007) as &quot;new clean energy&quot; under the
          Clean Energy and Clean Transportation Act (CEPS). All three existing NC
          nuclear stations predate this cutoff and are not reclassified [1][10].
        </p>
      </div>

      <div className="page-break" />

      {/* 4. What the Bill Does Not Do */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          4. What the Bill Does Not Do
        </h2>

        <h3 className="text-base font-bold mb-2">Gap 1: State Tax Exemptions Remain Untouched</h3>
        <p className="mb-3">
          North Carolina exempts data centers from state sales tax on electricity,
          equipment, and construction materials under GS 105-164.13 [3]. The
          fiscal impact is substantial:
        </p>
        <table className="w-full text-sm mb-3 border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th className="text-left py-2 pr-4">Exemption Category</th>
              <th className="text-left py-2 pr-4">Current Annual Cost</th>
              <th className="text-left py-2">Projected at Full Buildout</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4">Electricity sales tax</td>
              <td className="py-1.5 pr-4">~$20M/yr</td>
              <td className="py-1.5">~$200M/yr</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4">Hardware/equipment</td>
              <td className="py-1.5 pr-4">~$25-37M/yr</td>
              <td className="py-1.5">~$250M/yr</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4">Construction materials (one-time)</td>
              <td className="py-1.5 pr-4" colSpan={2}>$1.5-2.3B cumulative</td>
            </tr>
            <tr className="border-b-2 border-gray-400">
              <td className="py-1.5 pr-4 font-semibold">Total annual</td>
              <td className="py-1.5 pr-4 font-semibold">$45-57M/yr</td>
              <td className="py-1.5 font-semibold">Up to ~$450M/yr</td>
            </tr>
          </tbody>
        </table>
        <p className="mb-3 text-sm">
          SB 730 bans local incentives while preserving state incentives. This
          asymmetry weakens local bargaining power: counties cannot offer tax
          breaks to negotiate community benefit agreements, but the state
          continues providing them with no performance requirements [3][4][9].
        </p>
        <p className="text-sm">
          The May 2026 budget framework proposes repealing only the electricity
          exemption (~$20M/yr), preserving hardware and construction exemptions
          [11]. NC is one of 12 states with no regular public reporting on
          exemption costs [4].
        </p>

        <h3 className="text-base font-bold mb-2 mt-4">Gap 2: Coal Retirement Block</h3>
        <p className="mb-3">
          A companion provision (originally in SB 770, now incorporated into
          the House substitute) prohibits the NCUC from authorizing retirement of
          any baseload plant until Duke Energy obtains a certificate of public
          necessity for new nuclear capacity [5][6].
        </p>
        <p className="mb-3">
          Duke&apos;s coal fleet includes approximately 6.2 GW across multiple
          stations, all scheduled for retirement by 2036 under the Carbon Plan.
          Key facilities include Mayo Plant in Person County (2031), Roxboro
          Steam Station (2034), and Marshall Steam Station (2032-2034) [5][12].
        </p>
        <p className="mb-3">
          Nuclear certificates require NRC review, public hearings, and
          state-level certificates of public convenience and necessity. The
          timeline is typically 5 to 10 years. The Vogtle expansion in Georgia
          took 15 years and cost $34 billion against a $14 billion estimate. The
          VC Summer project in South Carolina was abandoned after $9 billion in
          spending [13]. Coal retirements could be blocked indefinitely.
        </p>
        <p>
          Running aging coal plants above market rates costs ratepayers an
          estimated $128 million per year in above-market fuel and maintenance
          expenses, plus continued air quality and health impacts on surrounding
          communities [5][6].
        </p>
      </div>

      <div className="page-break" />

      {/* 5. Comparison Table */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          5. Comparison: SB 730 vs HB 1063 vs HB 1213
        </h2>
        <table className="w-full text-[9pt] mb-3 border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th className="text-left py-2 pr-3 w-[28%]">Dimension</th>
              <th className="text-left py-2 pr-3 w-[28%]">SB 730 (R)</th>
              <th className="text-left py-2 pr-3 w-[24%]">HB 1063 (D)</th>
              <th className="text-left py-2 w-[20%]">HB 1213 (Bipartisan)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-3 font-semibold">Threshold</td>
              <td className="py-1.5 pr-3">100 MW peak demand [2]</td>
              <td className="py-1.5 pr-3">40 MW peak demand OR 1B liters/yr water [14]</td>
              <td className="py-1.5">N/A (tax-focused) [15]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-3 font-semibold">State sales tax exemptions</td>
              <td className="py-1.5 pr-3">Not addressed [2]</td>
              <td className="py-1.5 pr-3">Repealed effective Jan 1, 2027 [14]</td>
              <td className="py-1.5">Full repeal [15]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-3 font-semibold">Local tax incentives</td>
              <td className="py-1.5 pr-3">Banned [2]</td>
              <td className="py-1.5 pr-3">Banned [14]</td>
              <td className="py-1.5">Not addressed [15]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-3 font-semibold">Clean energy mandate</td>
              <td className="py-1.5 pr-3">None [2]</td>
              <td className="py-1.5 pr-3">25% on-site required [14]</td>
              <td className="py-1.5">Not addressed [15]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-3 font-semibold">Water/cooling</td>
              <td className="py-1.5 pr-3">Closed-loop required [2]</td>
              <td className="py-1.5 pr-3">Closed-loop + evaporative banned + DEQ rules [14]</td>
              <td className="py-1.5">Not addressed [15]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-3 font-semibold">Cost allocation</td>
              <td className="py-1.5 pr-3">Full incremental cost [2]</td>
              <td className="py-1.5 pr-3">&quot;Entire cost&quot; + no rate increases for others [14]</td>
              <td className="py-1.5">Not addressed [15]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-3 font-semibold">Eminent domain</td>
              <td className="py-1.5 pr-3">Banned [2]</td>
              <td className="py-1.5 pr-3">Not addressed [14]</td>
              <td className="py-1.5">Not addressed [15]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-3 font-semibold">Foreign ownership</td>
              <td className="py-1.5 pr-3">Adversary nations banned [2]</td>
              <td className="py-1.5 pr-3">Not addressed [14]</td>
              <td className="py-1.5">Not addressed [15]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-3 font-semibold">NCUC certification</td>
              <td className="py-1.5 pr-3">None [2]</td>
              <td className="py-1.5 pr-3">Formal certification required [14]</td>
              <td className="py-1.5">Not addressed [15]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-3 font-semibold">CEPS/nuclear changes</td>
              <td className="py-1.5 pr-3">Future nuclear = clean energy [1]</td>
              <td className="py-1.5 pr-3">Not addressed [14]</td>
              <td className="py-1.5">Not addressed [15]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-3 font-semibold">Political viability</td>
              <td className="py-1.5 pr-3">Advancing (R majority) [1]</td>
              <td className="py-1.5 pr-3">Long shot (D minority) [14]</td>
              <td className="py-1.5">Possible in budget [15]</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 6. Tax Break Breakdown */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          6. The Tax Break Breakdown
        </h2>

        <h3 className="text-base font-bold mb-2">State Sales Tax Exemption</h3>
        <p className="mb-3">
          Under GS 105-164.13, data centers meeting investment thresholds
          ($150M over 5 years for Tier 1, $75M for Tier 2 and 3 counties) are
          exempt from state sales tax on electricity, computer equipment,
          cooling systems, and construction materials [3]. The exemption has no
          sunset date and no performance reporting requirement. NC is one of 12
          states that do not regularly publish the cost of these exemptions [4].
        </p>

        <h3 className="text-base font-bold mb-2">JDIG Grants</h3>
        <p className="mb-3">
          The Job Development Investment Grant program can provide cash grants
          to data centers, but these are rarely used because data centers create
          few jobs relative to their investment size. A $1 billion facility may
          employ 50 to 100 permanent workers [16].
        </p>

        <h3 className="text-base font-bold mb-2">Local Incentives (What SB 730 Bans)</h3>
        <p className="mb-3">
          Counties have offered property tax abatements, fee waivers, and
          infrastructure subsidies to attract data centers. SB 730 prohibits all
          local tax incentives for covered facilities [2][9]. While this
          prevents a &quot;race to the bottom&quot; between counties, it also
          eliminates the primary tool counties use to negotiate community benefit
          agreements, performance benchmarks, and local hiring commitments.
        </p>

        <h3 className="text-base font-bold mb-2">What Each Bill Does Differently</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>SB 730:</strong> Bans local incentives. Preserves all state exemptions [2].</li>
          <li><strong>HB 1063:</strong> Bans local incentives AND repeals state sales tax exemptions effective January 1, 2027 [14].</li>
          <li><strong>HB 1213:</strong> Full repeal of all state data center tax exemptions. Does not address local incentives [15].</li>
          <li><strong>Budget framework (May 2026):</strong> Repeals only the electricity exemption (~$20M/yr). Preserves hardware and construction exemptions [11].</li>
        </ul>
      </div>

      <div className="page-break" />

      {/* 7. What Is Actually Driving Rate Increases */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          7. What Is Actually Driving Electric Rate Increases
        </h2>
        <p className="mb-4">
          Data centers are frequently cited as the cause of rising electricity
          rates. The evidence shows they are a future concern, not a current
          driver. The top three verified contributors to recent rate increases
          in Duke Energy Carolinas territory [17][18][19]:
        </p>
        <table className="w-full text-sm mb-3 border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th className="text-left py-2 pr-4">Driver</th>
              <th className="text-left py-2 pr-4">Annual Cost to Ratepayers</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold">Grid modernization and Carbon Plan compliance</td>
              <td className="py-1.5 pr-4">$800M-1.2B/yr in capital spend flowing into rates</td>
              <td className="py-1.5">Current and increasing [17]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold">Coal plant operating costs (above-market fuel + maintenance)</td>
              <td className="py-1.5 pr-4">~$128M/yr above replacement cost</td>
              <td className="py-1.5">Current; SB 730 extends this [5][6]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold">Natural gas price volatility</td>
              <td className="py-1.5 pr-4">Variable; $200-400M swing in fuel cost recovery</td>
              <td className="py-1.5">Ongoing [18]</td>
            </tr>
          </tbody>
        </table>
        <p>
          Data center load growth is projected to add 5 to 8 GW of demand in
          the Carolinas by 2035 [17][20]. If that demand is not matched by new
          generation, it will increase rates. SB 730&apos;s cost allocation
          provisions address this by requiring data centers to pay their
          incremental infrastructure costs. But the coal retirement block works
          in the opposite direction, locking in above-market generation costs
          for all ratepayers.
        </p>
      </div>

      {/* 8. The 100 MW Threshold Problem */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          8. The 100 MW Threshold Problem
        </h2>
        <p className="mb-3">
          SB 730 applies only to facilities with 100 MW or more of peak monthly
          demand [2]. This threshold is significantly higher than what most
          jurisdictions and utilities use:
        </p>
        <table className="w-full text-sm mb-3 border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th className="text-left py-2 pr-4">Jurisdiction / Utility</th>
              <th className="text-left py-2 pr-4">Threshold</th>
              <th className="text-left py-2">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4">NC HB 1063</td>
              <td className="py-1.5 pr-4 font-mono">40 MW</td>
              <td className="py-1.5">[14]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4">Virginia (2026 legislative package)</td>
              <td className="py-1.5 pr-4 font-mono">25 MW</td>
              <td className="py-1.5">[21]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4">Georgia Power tariff</td>
              <td className="py-1.5 pr-4 font-mono">10 MW</td>
              <td className="py-1.5">[22]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4">Ireland CRU (Commission for Regulation of Utilities)</td>
              <td className="py-1.5 pr-4 font-mono">5 MW</td>
              <td className="py-1.5">[23]</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4">US tracked large-load tariffs (median)</td>
              <td className="py-1.5 pr-4 font-mono">25-50 MW</td>
              <td className="py-1.5">[22]</td>
            </tr>
          </tbody>
        </table>
        <p className="mb-3">
          A survey of US utility tariffs for large loads found that 86% of
          tracked tariffs use thresholds below 100 MW [22]. SB 730&apos;s
          threshold exempts the majority of data center facilities in the state.
        </p>

        <h3 className="text-base font-bold mb-2">Campus Fragmentation</h3>
        <p>
          A developer can build multiple sub-100 MW buildings on adjacent
          parcels, each under a separate LLC, and escape all provisions of
          SB 730 [2]. Nothing in the bill aggregates load across commonly owned
          or affiliated facilities. A 300 MW campus split into four 75 MW
          buildings with four LLCs is legally four unregulated facilities.
        </p>
      </div>

      <div className="page-break" />

      {/* 9. Anti-Fragmentation Solutions */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          9. Anti-Fragmentation Solutions
        </h2>
        <p className="mb-3">
          Other jurisdictions have recognized and addressed the fragmentation
          problem:
        </p>
        <table className="w-full text-sm mb-3 border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th className="text-left py-2 pr-4 w-[22%]">Jurisdiction</th>
              <th className="text-left py-2 pr-4 w-[22%]">Mechanism</th>
              <th className="text-left py-2">How It Works</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold align-top">Virginia DEQ</td>
              <td className="py-1.5 pr-4 align-top">Aggregate load assessment</td>
              <td className="py-1.5">Environmental review considers total campus load across all buildings and phases, regardless of corporate structure [21][24].</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold align-top">Virginia GS-5 tariff</td>
              <td className="py-1.5 pr-4 align-top">Single-site aggregation</td>
              <td className="py-1.5">Dominion Energy&apos;s GS-5 tariff aggregates all meters on a contiguous site under common ownership or control [21].</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold align-top">Pennsylvania PUC</td>
              <td className="py-1.5 pr-4 align-top">Beneficial ownership piercing</td>
              <td className="py-1.5">Aggregate threshold applies to all facilities sharing beneficial ownership within a utility territory, regardless of LLC structure [25].</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold align-top">Illinois EPA</td>
              <td className="py-1.5 pr-4 align-top">Proximity-based aggregation</td>
              <td className="py-1.5">Facilities within a defined radius (typically 1 mile) are assessed as a single source for permitting purposes [26].</td>
            </tr>
          </tbody>
        </table>
        <p>
          SB 730 contains none of these mechanisms. Without anti-fragmentation
          language, the 100 MW threshold is not a floor; it is a target to
          design around.
        </p>
      </div>

      {/* 10. Graduated Framework Proposal */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          10. A Graduated Framework Proposal
        </h2>
        <p className="mb-3">
          Rather than a single binary threshold, a graduated framework applies
          universal baseline standards to all data centers with tiered
          requirements that scale with facility size:
        </p>

        <h3 className="text-base font-bold mb-2">Universal Baseline (All Data Centers)</h3>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Closed-loop or air-cooled systems (no open-loop surface water withdrawal)</li>
          <li>Noise limits at property lines (50 dBA daytime, 40 dBA nighttime)</li>
          <li>Foreign adversary ownership restrictions</li>
          <li>Annual water and energy usage reporting</li>
        </ul>

        <h3 className="text-base font-bold mb-2">Graduated Tiers</h3>
        <table className="w-full text-sm mb-3 border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th className="text-left py-2 pr-4">Tier</th>
              <th className="text-left py-2 pr-4">Capacity</th>
              <th className="text-left py-2">Additional Requirements</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold">Tier 1</td>
              <td className="py-1.5 pr-4 font-mono">10-25 MW</td>
              <td className="py-1.5">Community impact notice, noise study, water use reporting</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold">Tier 2</td>
              <td className="py-1.5 pr-4 font-mono">25-50 MW</td>
              <td className="py-1.5">Full environmental impact study, cost allocation for grid upgrades, pre-construction acoustic modeling</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold">Tier 3</td>
              <td className="py-1.5 pr-4 font-mono">50-100 MW</td>
              <td className="py-1.5">NCUC review, community benefit agreement, 10% on-site clean energy, decommissioning bond</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold">Tier 4</td>
              <td className="py-1.5 pr-4 font-mono">100+ MW</td>
              <td className="py-1.5">Full NCUC certification, 25% on-site clean energy, utility contract with full cost allocation, annual public reporting</td>
            </tr>
          </tbody>
        </table>
        <p>
          This approach eliminates the cliff effect of a single threshold while
          ensuring that even smaller facilities meet baseline environmental and
          community standards.
        </p>
      </div>

      <div className="page-break" />

      {/* 11. What Other States Are Doing */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          11. What Other States Are Doing
        </h2>
        <table className="w-full text-sm mb-3 border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th className="text-left py-2 pr-4 w-[20%]">Jurisdiction</th>
              <th className="text-left py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold align-top">Virginia</td>
              <td className="py-1.5">15 data center bills filed in the 2026 session. Dominion Energy&apos;s GS-5 tariff aggregates campus loads. JLARC found roughly one-third of state data centers within 200 feet of residential zoning. Loudoun County adopted 50 dBA limits at residential boundaries [21][24][27].</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold align-top">Tennessee</td>
              <td className="py-1.5">HB 1847 signed into law. Requires large-load customers (including data centers) to pay full cost of grid infrastructure. No exemptions for existing contracts [28].</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold align-top">Ireland</td>
              <td className="py-1.5">Three-tier CRU framework: facilities above 5 MW require grid impact assessment, mandatory on-site generation, and curtailment agreements during grid stress [23].</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold align-top">European Union</td>
              <td className="py-1.5">Energy Efficiency Directive (EED) requires annual public reporting of energy consumption, water use, waste heat recovery, and PUE for all facilities above 500 kW [29].</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold align-top">Pennsylvania</td>
              <td className="py-1.5">PUC aggregate threshold applies across all commonly owned facilities within a utility territory, preventing fragmentation [25].</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 12. What Vance County Should Watch */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          12. What Vance County Should Watch
        </h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Senate concurrence vote timing.</strong>{" "}
            The Senate must vote on the House substitute, which is substantially
            different from what it originally passed. Watch for whether it goes
            to conference committee or receives a straight up-or-down vote [1].
          </li>
          <li>
            <strong>Governor Stein&apos;s position.</strong>{" "}
            Stein has called for &quot;reexamining&quot; data center tax
            incentives but has not taken a public position on SB 730 specifically.
            A veto is possible if the coal retirement block remains [30].
          </li>
          <li>
            <strong>Whether the coal provision gets stripped.</strong>{" "}
            The coal retirement block is the most controversial provision. If
            removed in conference or by Senate amendment, the bill becomes
            significantly more viable and less costly to ratepayers [5][6].
          </li>
          <li>
            <strong>Budget negotiations on the tax exemption.</strong>{" "}
            The state budget is a separate vehicle. The May 2026 framework
            repeals only the electricity exemption. Watch for whether hardware
            and construction exemptions survive the final budget [11].
          </li>
          <li>
            <strong>Natelli rezoning implications.</strong>{" "}
            Michael Natelli is attempting to rezone 40 acres in Vance County for
            an &quot;industrial park.&quot; Residents have raised concerns this
            is a data center precursor. Natelli was previously involved in a
            withdrawn data center project in Apex (Wake County). If the rezoning
            is approved before SB 730 passes, none of the bill&apos;s
            environmental study requirements would apply retroactively [31].
          </li>
          <li>
            <strong>Person County precedent.</strong>{" "}
            Adjacent Person County sold 1,350 acres to Microsoft in October 2024
            for approximately $27 million under an NDA that prevented public
            disclosure before closing. The Mayo coal plant in Person County is
            one of the facilities whose retirement could be blocked by
            SB 730&apos;s nuclear provision [12][32].
          </li>
        </ol>
      </div>

      <div className="page-break" />

      {/* 13. Sources */}
      <div className="mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          Sources
        </h2>
        <ol className="text-[9pt] text-gray-700 space-y-2 list-decimal pl-5">
          <li>
            NC General Assembly. &quot;Senate Bill 730: Expand CEPS/Nuclear and Hydro.&quot; Bill text,
            actions, and votes. 2025-2026 session.
            <br /><span className="text-gray-500">ncleg.gov/BillLookUp/2025/S730</span>
          </li>
          <li>
            NC Newsline. &quot;NC bills target data center boom, seeking tax changes, consumer
            protections.&quot; May 8, 2026. House committee substitute provisions.
            <br /><span className="text-gray-500">ncnewsline.com/2026/05/08/nc-bills-target-data-center-boom-seeking-tax-changes-consumer-protections/</span>
          </li>
          <li>
            NC General Statutes, GS 105-164.13. Sales and use tax exemptions for
            qualifying data centers. Investment thresholds and covered property.
          </li>
          <li>
            WRAL. &quot;NC&apos;s data center tax breaks could reach billions, but no one
            tracks the cost.&quot; April 2026. Estimates $45-57M/yr current, up to $450M/yr at buildout.
            <br /><span className="text-gray-500">wral.com</span>
          </li>
          <li>
            WUNC. &quot;NC bill would require Duke progress on nuclear before coal plant retirements.&quot;
            May 20, 2026. SB 770 / coal retirement provision.
            <br /><span className="text-gray-500">wunc.org</span>
          </li>
          <li>
            NCSEA (NC Sustainable Energy Association). &quot;Analyzing Duke&apos;s 2026 Carbon Plan.&quot;
            Above-market coal operating costs estimated at $128M/yr.
          </li>
          <li>
            NC Newsline. &quot;NC House panel advances data center restrictions.&quot; May 20, 2026.
            Details of House Energy &amp; Public Utilities Committee substitute.
            <br /><span className="text-gray-500">ncnewsline.com</span>
          </li>
          <li>
            WSOCTV. &quot;NC lawmakers push forward data center regulations, changes to energy policy.&quot;
            May 2026. Closed-loop cooling and water provisions.
            <br /><span className="text-gray-500">wsoctv.com/news/local/nc-lawmakers-push-forward-data-center-regulations-changes-energy-policy/</span>
          </li>
          <li>
            WUNC. &quot;Opposition to data centers &apos;catching a fire&apos; across NC.&quot; April 10, 2026.
            Statewide community resistance and local incentive concerns.
            <br /><span className="text-gray-500">wunc.org</span>
          </li>
          <li>
            NC General Statutes, GS 62-133.8. Clean Energy and Clean Transportation Act (CEPS).
            Nuclear facility definitions and renewable energy facility exclusions.
          </li>
          <li>
            WUNC. &quot;NC budget framework would roll back electricity exemption for data centers.&quot;
            May 14, 2026. Budget proposes ~$20M/yr electricity exemption repeal only.
            <br /><span className="text-gray-500">wunc.org</span>
          </li>
          <li>
            Duke Energy. Carbon Plan filing, 2026. Coal fleet retirement schedule: Mayo (2031),
            Roxboro (2034), Marshall (2032-2034), Cleveland (2031-2033). Total ~6.2 GW.
          </li>
          <li>
            Southern Alliance for Clean Energy. Vogtle nuclear expansion analysis: 15 years,
            $34B final cost vs $14B estimate. VC Summer abandonment at $9B.
          </li>
          <li>
            NC General Assembly. &quot;House Bill 1063.&quot; 2025-2026 session. 40 MW threshold,
            state tax repeal, 25% on-site clean energy, NCUC certification.
            <br /><span className="text-gray-500">ncleg.gov/Sessions/2025/Bills/House/HTML/H1063v1.html</span>
          </li>
          <li>
            Carolina Journal. &quot;Bipartisan bill targets NC data center tax breaks.&quot; 2026.
            HB 1213 provisions and sponsor statements.
          </li>
          <li>
            NC Commerce. Job Development Investment Grant (JDIG) program guidelines.
            Data center employment ratios: 50-100 permanent jobs per $1B facility.
          </li>
          <li>
            Duke Energy Carolinas. 2026 rate case filing. Grid modernization capital expenditures
            and Carbon Plan compliance costs.
          </li>
          <li>
            NCUC. Duke Energy fuel cost recovery proceedings, 2024-2026. Natural gas price
            volatility impact on retail rates.
          </li>
          <li>
            CPR Blog (Center for Progressive Reform). &quot;NC Must Change Course on Carbon Plan.&quot;
            Rate increase drivers and cost allocation analysis.
          </li>
          <li>
            UNC School of Media and Journalism. &quot;NC data center boom reshaping energy
            environment.&quot; Load growth projections: 5-8 GW by 2035.
          </li>
          <li>
            Virginia General Assembly. 2026 session data center legislation package.
            15 bills filed. 25 MW threshold. GS-5 tariff provisions.
          </li>
          <li>
            Utility Dive / S&amp;P Global. Survey of US utility large-load tariffs, 2025-2026.
            86% of tracked tariffs use thresholds below 100 MW. Median: 25-50 MW.
          </li>
          <li>
            Commission for Regulation of Utilities (Ireland). Data centre grid connection
            framework. Three-tier system: 5 MW threshold, mandatory on-site generation,
            curtailment agreements.
          </li>
          <li>
            Virginia Department of Environmental Quality. Aggregate load assessment
            methodology for data center campus permitting.
          </li>
          <li>
            Pennsylvania Public Utility Commission. Beneficial ownership aggregation
            rule for large-load customer classification.
          </li>
          <li>
            Illinois Environmental Protection Agency. Proximity-based source aggregation
            rules for air quality permitting.
          </li>
          <li>
            Virginia Joint Legislative Audit and Review Commission (JLARC). Data center
            report, 2024. Roughly one-third of state data centers within 200 feet of
            residential zoning.
          </li>
          <li>
            Tennessee General Assembly. HB 1847. Large-load customer cost allocation
            requirements. Signed into law 2026.
          </li>
          <li>
            European Union. Energy Efficiency Directive (EED), Article 12. Data center
            reporting requirements for facilities above 500 kW. PUE, water use,
            waste heat recovery.
          </li>
          <li>
            Gov. Josh Stein. Public statements on data center tax incentives, April 2026.
            &quot;Reexamine those incentives.&quot;
          </li>
          <li>
            Vance County Planning Department. ZMA26-001 rezoning application. Michael Natelli,
            40 acres, &quot;industrial park&quot; designation. Prior involvement in withdrawn
            Apex data center project.
          </li>
          <li>
            The Assembly NC. Person County Microsoft land purchase, October 2024. 1,350 acres
            (Person County Mega Park), ~$27M. NDA controversy.
          </li>
          <li>
            NCSEA. &quot;Building Out Data Centers Equitably.&quot; Policy recommendations for
            balanced data center development in NC.
          </li>
          <li>
            GovTech. &quot;NC Mulls Regulating Data Centers as Energy Demand Grows.&quot; Overview
            of legislative approaches and stakeholder positions.
          </li>
        </ol>
      </div>

      {/* Footer */}
      <div className="border-t-2 border-black pt-4 mt-12 text-center">
        <p className="text-sm text-gray-600 mb-2">
          henderson-vance.fyi/sb730
        </p>
        <p className="text-xs text-gray-500">
          This report is a citizen education project. Not funded by any data
          center company, activist organization, or political campaign. 34
          sources cited. All publicly verifiable.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Vance County, North Carolina - June 2026
        </p>
      </div>
    </main>
  );
}

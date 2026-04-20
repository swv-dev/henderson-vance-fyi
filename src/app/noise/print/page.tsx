import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Center Noise Report - Henderson-Vance FYI (Print Version)",
  robots: "noindex",
};

export default function NoisePrintPage() {
  return (
    <main className="mx-auto max-w-[8.5in] bg-white text-black px-[0.75in] py-[0.5in] print:p-0 text-[11pt] leading-relaxed font-sans">
      <style>{`
        @media print {
          body { background: white !important; }
          main { max-width: none; padding: 0.5in 0.75in; }
          .page-break { page-break-before: always; }
          .no-break { page-break-inside: avoid; }
          a { color: #1a5276; text-decoration: underline; }
        }
        @media screen {
          body { background: #f5f5f5 !important; }
          main { box-shadow: 0 0 20px rgba(0,0,0,0.1); margin: 2rem auto; }
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-black pb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
          Henderson-Vance FYI - Citizen Research Series
        </p>
        <h1 className="text-3xl font-extrabold mb-2">
          Data Center Noise
        </h1>
        <p className="text-lg text-gray-700">
          What every citizen should know before the vote
        </p>
        <p className="text-sm text-gray-500 mt-2">
          April 2026 - henderson-vance.fyi/noise
        </p>
      </div>

      {/* Executive Summary */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          Executive Summary
        </h2>
        <p className="mb-3">
          Data centers produce continuous noise from cooling systems, fans, and
          backup generators that operate 24 hours a day, 365 days a year. The
          difference between a facility that is a good neighbor and one that
          degrades quality of life is not the technology - it is whether the
          county requires noise mitigation before construction begins.
        </p>
        <p className="mb-3">
          Well-designed facilities with proper sound barriers, mechanical
          enclosures, and adequate setbacks measure 45-55 dB at the property
          line. Poorly buffered facilities reach 65-85 dB - equivalent to a
          vacuum cleaner to a food blender running without pause.
        </p>
        <p>
          Vance County currently has no data center-specific noise ordinance.
          No dBA limits at property lines. No low-frequency monitoring
          requirements. No mandatory setbacks beyond standard zoning. No
          pre-construction acoustic modeling requirement. This report explains
          why these protections matter and what other communities have done.
        </p>
      </div>

      {/* Section 1: How Decibels Work */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          1. How Decibels Work
        </h2>
        <p className="mb-3">
          Decibels (dB) measure sound intensity on a logarithmic scale. This
          means every 10 dB increase represents a doubling of perceived
          loudness, not a small increment [1, 2]. The CDC identifies hearing
          loss as the third most common chronic physical condition among U.S.
          adults, with health effects extending beyond hearing to include
          cardiovascular disease, cognitive decline, and depression [3]:
        </p>
        <table className="w-full text-sm mb-3 border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th className="text-left py-2 pr-4">Level</th>
              <th className="text-left py-2 pr-4">Example</th>
              <th className="text-left py-2">Perceived Loudness</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-mono">30 dB</td>
              <td className="py-1.5 pr-4">Quiet rural night</td>
              <td className="py-1.5">Baseline</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-mono">40 dB</td>
              <td className="py-1.5 pr-4">Library, quiet home</td>
              <td className="py-1.5">2x baseline</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-mono">50 dB</td>
              <td className="py-1.5 pr-4">Moderate rainfall</td>
              <td className="py-1.5">4x baseline</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-mono">60 dB</td>
              <td className="py-1.5 pr-4">Normal conversation</td>
              <td className="py-1.5">8x baseline</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-mono">70 dB</td>
              <td className="py-1.5 pr-4">Vacuum cleaner</td>
              <td className="py-1.5">16x baseline</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-mono">80 dB</td>
              <td className="py-1.5 pr-4">Food blender, busy traffic</td>
              <td className="py-1.5">32x baseline</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-mono">85 dB</td>
              <td className="py-1.5 pr-4">Sustained hearing damage threshold</td>
              <td className="py-1.5">~45x baseline</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500">
          Sources: [1] [2] [4] [7]
        </p>
      </div>

      {/* Section 2 */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          2. Data Center Noise Levels
        </h2>
        <p className="mb-3">
          Data center noise comes primarily from three sources: cooling systems
          (CRAC/CRAH units, chillers, cooling towers), mechanical ventilation
          fans, and backup diesel generators. These systems run continuously.
        </p>

        <h3 className="text-base font-bold mb-2">Well-Designed Facilities (45-55 dB at property line)</h3>
        <p className="mb-3">
          Facilities with proper sound-rated mechanical enclosures, solid
          concrete or masonry barrier walls, adequate setbacks (500+ feet),
          low-noise fan selections, and variable-speed drives achieve 45-55 dB
          at the property line. This is comparable to moderate rainfall and is
          generally considered acceptable for residential adjacency.
        </p>

        <h3 className="text-base font-bold mb-2">Poorly Buffered Facilities (65-85 dB at property line)</h3>
        <p className="mb-3">
          Facilities without these investments - relying on chain-link fencing,
          landscaping, or minimal setbacks - routinely produce 65-85 dB at the
          property line. At 70 dB, the noise is louder than a vacuum cleaner.
          At 85 dB, it reaches the threshold for hearing damage with sustained
          exposure. This runs 24/7/365.
        </p>
        <p className="text-xs text-gray-500">
          Sources: [31] [32] [38] [40]
        </p>
      </div>

      <div className="page-break" />

      {/* Section 3 */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          3. Distance Decay
        </h2>
        <p className="mb-3">
          Sound intensity decreases by approximately 6 dB per doubling of
          distance from a point source in open terrain (inverse square law).
          This means:
        </p>
        <table className="w-full text-sm mb-3 border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th className="text-left py-2 pr-4">Distance</th>
              <th className="text-left py-2 pr-4">Well-Buffered (50 dB start)</th>
              <th className="text-left py-2">Poorly Buffered (75 dB start)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4">Property line</td>
              <td className="py-1.5 pr-4 font-mono">50 dB</td>
              <td className="py-1.5 font-mono">75 dB</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4">500 feet</td>
              <td className="py-1.5 pr-4 font-mono">~44 dB</td>
              <td className="py-1.5 font-mono">~69 dB</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4">1,000 feet</td>
              <td className="py-1.5 pr-4 font-mono">~38 dB</td>
              <td className="py-1.5 font-mono">~57 dB</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4">Half mile</td>
              <td className="py-1.5 pr-4 font-mono">~30 dB</td>
              <td className="py-1.5 font-mono">~49 dB</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4">One mile</td>
              <td className="py-1.5 pr-4 font-mono">~24 dB</td>
              <td className="py-1.5 font-mono">~45 dB</td>
            </tr>
          </tbody>
        </table>
        <p className="mb-3">
          The WHO recommends nighttime noise below 40 dB outside bedrooms to
          prevent sleep disruption. A poorly buffered facility is still above
          this threshold at one mile. Rural ambient noise at night is typically
          30-35 dB, meaning the data center would be the dominant sound source
          for every home within that radius.
        </p>
        <p className="text-xs text-gray-500">
          Sources: [6] [8]; inverse square law (standard acoustics)
        </p>
      </div>

      {/* Section 4 */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          4. Generator Testing Spikes
        </h2>
        <p className="mb-3">
          Data centers maintain banks of diesel backup generators for power
          redundancy. Industry standards require regular testing, typically
          monthly for 30 minutes to several hours, with full-load transfer
          tests quarterly. A typical 2 MW diesel generator produces 95-105 dB
          at 23 feet (per Caterpillar and Cummins specification sheets).
        </p>
        <p className="mb-3">
          During testing, noise at the property line increases by 20-30 dB
          above baseline operational noise. A facility running at 55 dB
          baseline spikes to 75-85 dB during generator tests. Without
          scheduling requirements or notification provisions, these tests can
          occur at any time.
        </p>
        <p className="text-xs text-gray-500">
          Sources: [33] [34] [35]
        </p>
      </div>

      {/* Section 5 */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          5. Community Experience: Northern Virginia
        </h2>
        <p className="mb-3">
          Northern Virginia hosts the largest concentration of data centers in
          the world. Residents near facilities in Loudoun County and Prince
          William County report:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Constant low-frequency drone audible inside homes with windows closed</li>
          <li>Sleep disruption requiring white noise machines or earplugs</li>
          <li>Property value concerns in adjacent neighborhoods</li>
          <li>Noise complaints that took years to result in zoning changes</li>
        </ul>
        <p className="mb-3">
          Virginia has no statewide noise ordinance for data centers. Loudoun
          County eventually updated its zoning to require 50 dBA at
          residential boundaries, sound barrier walls, and quarterly noise
          monitoring reports - but only after years of complaints from
          residents who were already living next to the facilities.
        </p>
        <p className="text-xs text-gray-500">
          Sources: [36] [38] [40] [41]
        </p>
      </div>

      <div className="page-break" />

      {/* Section 6: Infrasound */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          6. Infrasound
        </h2>
        <p className="mb-3">
          Infrasound is sound below 20 Hz, the lower limit of human hearing [9].
          It is not heard but felt as vibration, pressure, or unease. Research
          has shown that outer hair cells of the cochlea respond to infrasound
          at levels well below the threshold of conscious hearing, providing a
          physiological mechanism for symptoms even when the sound is not
          &quot;audible&quot; [13]. Large rotating equipment, HVAC systems, cooling
          towers, and diesel generators all produce infrasound.
        </p>

        <h3 className="text-base font-bold mb-2">The Measurement Gap</h3>
        <p className="mb-3">
          Standard noise measurements use dBA (A-weighted) weighting, which
          filters out frequencies below 20 Hz by design [10]. A facility can comply
          with every dBA limit while producing significant low-frequency energy
          that residents feel in their homes. Measuring infrasound requires
          dBG or dBZ (unweighted) measurements and specialized equipment that
          most jurisdictions do not own or require. A systematic review found
          a pooled prevalence of 10.5% high annoyance from low-frequency noise
          across sources [11].
        </p>

        <h3 className="text-base font-bold mb-2">What the Research Shows</h3>
        <p className="mb-3">
          No peer-reviewed studies examine infrasound specifically from data
          centers. The closest analog is wind turbine research, which has
          produced roughly 60 studies. The scientific consensus from systematic
          reviews (Schmidt & Klokker 2014; Onakpoya et al. 2015) and the
          largest government study (Michaud et al. 2016, Health Canada):
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Infrasound at industrial levels does not cause direct physiological harm - no organ damage, no cancer, no cardiovascular disease from infrasound alone [18, 28, 29]</li>
          <li>Annoyance is consistently associated with proximity to noise sources and is real and measurable. The Onakpoya et al. meta-analysis found odds of high annoyance at OR 4.08 (95% CI: 2.37-7.04) [17]</li>
          <li>Sleep disruption is documented and clinically significant, with odds ratio OR 2.94 (95% CI: 1.98-4.37) [17]</li>
          <li>Chronic sleep disruption is independently linked to cardiovascular disease, metabolic disorders, and impaired immune function. The WHO estimates 903,000 DALYs lost annually in Western Europe to noise-induced sleep disturbance [23]</li>
          <li>Wind turbine noise produces higher annoyance at a given dB level than road traffic noise - at 40 dB(A), approximately 10% are highly annoyed by turbines vs ~3% for road traffic [21]</li>
          <li>Low-frequency noise exposure is associated with measurable impairment in attention, memory, and executive function [14]</li>
        </ul>
        <p className="mb-3">
          The honest position: do not overstate the risks (infrasound is not
          causing organ damage), but do not dismiss the effects that are well
          documented. Annoyance and sleep disruption are health outcomes that
          deserve regulatory attention. The wind turbine literature is the
          closest peer-reviewed analog to data center noise because both
          sources share continuous 24/7 operation, dominant low-frequency
          energy, and proximity to residential areas [16, 17, 18, 36].
        </p>
        <p className="text-xs text-gray-500">
          Sources: [7] [9] [11] [13] [16] [17] [18] [19] [20] [21] [22] [23] [28] [29]
        </p>
      </div>

      {/* Section 7: What Good Regulation Looks Like */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          7. What Good Regulation Looks Like
        </h2>
        <p className="mb-3">
          The technology to control data center noise exists. The question is
          whether the county requires it. Effective regulation includes:
        </p>
        <ol className="list-decimal pl-6 mb-3 space-y-2">
          <li><strong>Hard dBA limits at the property line</strong> (not at the source): 45-50 dBA daytime, 35-40 dBA nighttime</li>
          <li><strong>Low-frequency limits</strong> using dBC or dBG weighting in addition to dBA to capture infrasound</li>
          <li><strong>Mandatory setbacks</strong> of 500-1,500 feet from residential zones</li>
          <li><strong>Pre-construction acoustic modeling</strong> submitted with the site plan and verified by independent review</li>
          <li><strong>Ongoing monitoring</strong> with third-party verification, public reporting, and community complaint mechanisms</li>
          <li><strong>Enforceable penalties</strong> for exceedances, including operational restrictions and financial penalties</li>
          <li><strong>Generator testing restrictions</strong>: daytime-only, advance notification to adjacent property owners</li>
        </ol>

        <h3 className="text-base font-bold mb-2 mt-4">Communities That Got It Right</h3>
        <table className="w-full text-sm mb-3 border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th className="text-left py-2 pr-4">Community</th>
              <th className="text-left py-2">What They Require</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold align-top">Lea County, NM</td>
              <td className="py-1.5">Comprehensive ordinance adopted before any developer arrived. Closed-loop cooling, noise limits, PILOT payments to all taxing entities, decommissioning bonds.</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold align-top">Loudoun County, VA</td>
              <td className="py-1.5">After years of complaints: 50 dBA at residential boundaries, sound barrier walls, quarterly noise monitoring reports.</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-1.5 pr-4 font-semibold align-top">Cedar Rapids, IA</td>
              <td className="py-1.5">Performance-linked: 70% tax exemption only if noise, water, and job targets are met. $18M community fund over 18 years.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 8 */}
      <div className="no-break mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          8. Vance County&apos;s Current Position
        </h2>
        <p className="mb-3">
          As of April 2026, Vance County has:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>No data center-specific noise ordinance</li>
          <li>No dBA limits at property lines for industrial facilities</li>
          <li>No low-frequency (infrasound) monitoring requirements</li>
          <li>No mandatory setbacks beyond standard zoning buffers</li>
          <li>No pre-construction acoustic modeling requirement</li>
          <li>No ongoing noise monitoring provisions</li>
          <li>No generator testing scheduling requirements</li>
        </ul>
        <p>
          If the ZMA26-001 rezoning is approved without these protections in
          place, there is no regulatory mechanism to enforce noise limits after
          construction begins. The time to establish standards is before the
          vote, not after the facility is built.
        </p>
      </div>

      <div className="page-break" />

      {/* References */}
      <div className="mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
          References
        </h2>

        <h3 className="text-base font-bold mb-2 mt-4">Noise Science &amp; Standards</h3>
        <ol className="text-[9pt] text-gray-700 space-y-2 list-decimal pl-5">
          <li>
            NIOSH. &quot;Criteria for a Recommended Standard: Occupational Noise Exposure, Revised Criteria 1998.&quot;
            Publication 98-126. Centers for Disease Control and Prevention, June 1998.
            <br /><span className="text-gray-500">cdc.gov/niosh/docs/98-126</span>
          </li>
          <li>
            NIOSH. &quot;Understanding Noise Exposure Limits: Occupational vs. General Environmental Noise.&quot;
            Science Bulletin, February 8, 2016. Establishes NIOSH REL of 85 dBA/8 hrs (3-dB exchange rate)
            and EPA community limit of 70 dBA/24 hrs (55 dBA outdoors, 45 dBA indoors).
            <br /><span className="text-gray-500">cdc.gov/niosh/bulletin/2016/noise.html</span>
          </li>
          <li>
            CDC/NIOSH. &quot;About Occupational Hearing Loss.&quot; Key finding: ~27 million U.S. workers
            exposed to hazardous noise annually. Health effects beyond hearing include cardiovascular disease,
            cognitive decline, depression, and anxiety.
            <br /><span className="text-gray-500">cdc.gov/niosh/noise/about/index.html</span>
          </li>
          <li>
            CDC Healthy Schools. &quot;Noise-Induced Hearing Loss Signs.&quot; Decibel chart for common sounds:
            normal conversation 60 dB, vacuum 70 dB, power tools 100 dB, ambulance siren 120 dB.
            <br /><span className="text-gray-500">archive.cdc.gov/www_cdc_gov/healthyschools/noise/signs.htm</span>
          </li>
          <li>
            CDC/NIOSH. &quot;Noise and Reproductive Health.&quot; Low-frequency sounds travel through the body
            more easily than high-frequency noise and can affect fetal development. 85 dBA threshold applies during pregnancy.
            <br /><span className="text-gray-500">cdc.gov/niosh/reproductive-health/prevention/noise.html</span>
          </li>
          <li>
            U.S. Environmental Protection Agency. &quot;Information on Levels of Environmental Noise Requisite to
            Protect Public Health and Welfare with an Adequate Margin of Safety.&quot; EPA 550/9-74-004, March 1974.
            <br /><span className="text-gray-500">epa.gov/sites/default/files/2015-07/documents/levels_doc.pdf</span>
          </li>
          <li>
            World Health Organization. <em>Environmental Noise Guidelines for the European Region.</em>
            WHO Regional Office for Europe, October 10, 2018. ISBN 9789289053563. Conditionally recommends
            wind turbine noise below 45 dB(A) Lden. First WHO guidelines to name wind turbines as a source.
            <br /><span className="text-gray-500">who.int/europe/publications/i/item/9789289053563</span>
          </li>
          <li>
            World Health Organization. <em>Night Noise Guidelines for Europe.</em> 2009. Recommends
            Lnight below 40 dB outside bedrooms to prevent sleep disruption.
            <br /><span className="text-gray-500">who.int/publications/i/item/9789289041737</span>
          </li>
        </ol>

        <h3 className="text-base font-bold mb-2 mt-4">Infrasound &amp; Low-Frequency Noise</h3>
        <ol className="text-[9pt] text-gray-700 space-y-2 list-decimal pl-5" start={9}>
          <li>
            ISO 7196:1995. &quot;Acoustics - Frequency weighting characteristic for infrasound measurements.&quot;
            International Organization for Standardization. Defines G-weighting for infrasound below 20 Hz.
          </li>
          <li>
            IEC 61672-1. &quot;Electroacoustics - Sound level meters.&quot; International Electrotechnical Commission.
            Standard A-weighting filters out frequencies below 20 Hz by design.
          </li>
          <li>
            Pawlaczyk-Luszczynska M et al. &quot;Health effects from low-frequency noise and infrasound in the
            general population: Is it time to listen? A systematic review of observational studies.&quot;
            <em>Science of the Total Environment</em>, 2016. PMID: 26994804. Pooled prevalence of high annoyance
            from LFN: 10.5%.
          </li>
          <li>
            Bolin K, Bluhm G, Eriksson G, Nilsson ME. &quot;Infrasound and low frequency noise from wind turbines:
            exposure and health effects.&quot; <em>Environmental Research Letters</em> 6(3):035103, 2011.
            DOI: 10.1088/1748-9326/6/3/035103. KTH Royal Institute of Technology / Karolinska Institute, Sweden.
          </li>
          <li>
            Salt AN, Hullar TE. &quot;Responses of the ear to low frequency sounds, infrasound and wind turbines.&quot;
            <em>Hearing Research</em> 268(1-2):12-21, September 2010. PMID: 20561575. Demonstrates outer hair cells
            respond to infrasound below conscious hearing thresholds - provides physiological mechanism for vestibular symptoms.
          </li>
          <li>
            Zhang Y et al. &quot;Effect of low-frequency noise exposure on cognitive function: a systematic review
            and meta-analysis.&quot; <em>BMC Public Health</em> 24, 2024. PMC: PMC10775542. LFN exposure associated with
            measurable impairment in attention, memory, and executive function.
          </li>
          <li>
            Berglund B, Hassmen P, Soames Job RF. &quot;Sources and effects of low-frequency noise.&quot;
            <em>Journal of the Acoustical Society of America</em> 99(5):2985-3002, 1996. Foundational WHO document
            establishing LFN as a distinct health concern.
          </li>
        </ol>

        <h3 className="text-base font-bold mb-2 mt-4">Wind Turbine Noise &amp; Health (Closest Peer-Reviewed Analog to Data Center Noise)</h3>
        <ol className="text-[9pt] text-gray-700 space-y-2 list-decimal pl-5" start={16}>
          <li>
            Schmidt JH, Klokker M. &quot;Health Effects Related to Wind Turbine Noise Exposure: A Systematic Review.&quot;
            <em>PLOS ONE</em> 9(12):e114183, December 2014. PMID: 25474326. Found dose-response relationship between
            wind turbine noise and annoyance, sleep disturbance, and possibly psychological distress.
          </li>
          <li>
            Onakpoya IJ, O&apos;Sullivan J, Thompson MJ, Heneghan CJ. &quot;The effect of wind turbine noise on sleep and
            quality of life: A systematic review and meta-analysis of observational studies.&quot; <em>Environment International</em>
            82:1-9, September 2015. PMID: 25982992. University of Oxford. Meta-analysis of 6 studies (n=2,364):
            odds of high annoyance OR 4.08 (95% CI: 2.37-7.04); odds of sleep disturbance OR 2.94 (95% CI: 1.98-4.37).
          </li>
          <li>
            Michaud DS et al. &quot;Exposure to wind turbine noise: Perceptual responses and reported health effects.&quot;
            <em>Journal of the Acoustical Society of America</em> 139(3):1443-1454, March 2016. PMID: 27036283. Health Canada
            study, n=1,238. Did NOT find associations with chronic pain, hypertension, heart disease, diabetes, or tinnitus.
            DID find statistically significant dose-response for annoyance.
          </li>
          <li>
            Pedersen E, Persson Waye K. &quot;Perception and annoyance due to wind turbine noise: A dose-response
            relationship.&quot; <em>Journal of the Acoustical Society of America</em> 116(6):3460-3470, December 2004.
            PMID: 15658697. n=351, Sweden. Odds of high annoyance increased 1.87x per noise level category.
          </li>
          <li>
            Pedersen E, Persson Waye K. &quot;Wind turbine noise, annoyance and self-reported health and well-being
            in different living environments.&quot; <em>Occupational and Environmental Medicine</em> 64(7):480-486, July 2007.
            PMID: 17332136. n=754 across 7 areas. Higher annoyance associated with lower sleep quality.
          </li>
          <li>
            Janssen SA, Vos H, Eisses AR, Pedersen E. &quot;A comparison between exposure-response relationships for
            wind turbine annoyance and annoyance due to other noise sources.&quot; <em>Journal of the Acoustical Society of
            America</em> 130(6):3746-3753, December 2011. PMID: 22225031. Wind turbine noise produces higher annoyance at
            a given dB level than road traffic noise. At 40 dB(A): ~10% highly annoyed by turbines vs ~3% for road traffic.
          </li>
          <li>
            Shepherd D et al. &quot;Evaluating the impact of wind turbine noise on health-related quality of life.&quot;
            <em>Noise and Health</em> 13(54):333-339, 2011. PMID: 21959113. Residents within 2 km reported significantly
            lower quality of life, physical health, and sleep quality.
          </li>
        </ol>

        <h3 className="text-base font-bold mb-2 mt-4">Cardiovascular &amp; Sleep Effects of Environmental Noise</h3>
        <ol className="text-[9pt] text-gray-700 space-y-2 list-decimal pl-5" start={23}>
          <li>
            Munzel T, Gori T, Babisch W, Basner M. &quot;Cardiovascular effects of environmental noise exposure.&quot;
            <em>European Heart Journal</em> 35(13):829-836, April 2014. PMID: 24616334. Environmental noise causes
            repeated nocturnal arousal activating the HPA axis. WHO estimates 903,000 DALYs lost annually in Western Europe
            to noise-induced sleep disturbance; 61,000 DALYs to noise-induced cardiovascular disease.
          </li>
          <li>
            Smith MG, Cordoza M, Basner M. &quot;Environmental Noise and Effects on Sleep: An Update to the WHO Systematic
            Review and Meta-Analysis.&quot; <em>Environmental Health Perspectives</em> 130(7):076001, July 2022. PMID: 35857401.
            Per 10 dB increase in nighttime noise, odds of high sleep disturbance: aircraft 1.94, road 2.13, rail 3.06.
          </li>
          <li>
            Jarup L et al. &quot;Hypertension and Exposure to Noise Near Airports: the HYENA Study.&quot;
            <em>Environmental Health Perspectives</em> 116(3):329-333, March 2008. PMID: 18335099. Night noise above
            35 dB associated with hypertension in multi-country European study.
          </li>
          <li>
            Poulsen AH et al. &quot;Short-term nighttime wind turbine noise and cardiovascular events: A nationwide
            case-crossover study from Denmark.&quot; <em>Environment International</em> 114:160-166, May 2018. PMID: 29505969.
            All hospitalizations and deaths from stroke (16,913 cases) and MI (17,559 cases) among Danes, 1982-2013.
          </li>
          <li>
            Poulsen AH et al. &quot;Long-Term Exposure to Wind Turbine Noise and Risk for Myocardial Infarction and Stroke:
            A Nationwide Cohort Study.&quot; <em>Environmental Health Perspectives</em> 127(3), March 2019. PMID: 30864814.
          </li>
        </ol>

        <h3 className="text-base font-bold mb-2 mt-4">Government Expert Panels &amp; Policy Reviews</h3>
        <ol className="text-[9pt] text-gray-700 space-y-2 list-decimal pl-5" start={28}>
          <li>
            Massachusetts Department of Environmental Protection / Department of Public Health. &quot;Wind Turbine
            Health Impact Study: Report of the Independent Expert Panel.&quot; January 2012. Found limited evidence for
            annoyance and sleep disruption associations. Rejected &quot;wind turbine syndrome&quot; as a clinical entity.
            <br /><span className="text-gray-500">mass.gov/doc/wind-turbine-health-impact-study-report-of-independent-expert-panel</span>
          </li>
          <li>
            National Health and Medical Research Council (Australia). &quot;NHMRC Statement: Evidence on Wind Farms
            and Human Health.&quot; February 2015. &quot;Currently no consistent evidence that wind farms cause adverse
            health effects in humans.&quot; Recommended further high-quality research on LFN measurement.
            <br /><span className="text-gray-500">nhmrc.gov.au/about-us/publications/nhmrc-statement-evidence-wind-farms-and-human-health</span>
          </li>
          <li>
            Health Canada. &quot;Wind Turbine Noise and Health Study: Summary of Results.&quot; 2014.
            <br /><span className="text-gray-500">canada.ca/en/health-canada/services/health-risks-safety/radiation/everyday-things-emit-radiation/wind-turbine-noise</span>
          </li>
        </ol>

        <h3 className="text-base font-bold mb-2 mt-4">Data Center Noise Specifically</h3>
        <ol className="text-[9pt] text-gray-700 space-y-2 list-decimal pl-5" start={31}>
          <li>
            Salford University. Acoustic study of UK data center facilities, 2023. Measured 45-55 dB at property
            lines for well-designed facilities, 65-85 dB for poorly buffered facilities.
          </li>
          <li>
            ASHRAE Technical Committee 9.9. <em>Data Center Design Guidelines.</em> Cooling system design and
            sound-rated equipment specifications.
          </li>
          <li>
            Uptime Institute. Generator testing standards and best practices. Monthly testing typical, 30 minutes
            to several hours.
          </li>
          <li>
            Caterpillar / Cummins. Generator specification sheets: typical 2 MW diesel unit produces 95-105 dB at 23 feet.
          </li>
          <li>
            EPA AP-42. Emission factors for stationary diesel engines. Compilation of air pollutant and noise
            emission factors.
          </li>
          <li>
            Yanez-Barnuevo M. &quot;Communities Are Raising Noise Pollution Concerns About Data Centers.&quot;
            Environmental and Energy Study Institute, March 23, 2026. Documents Granbury TX, Prince William County VA,
            and Virginia JLARC findings (~1/3 of state data centers within 200 feet of residential zoning).
            <br /><span className="text-gray-500">eesi.org/articles/view/communities-are-raising-noise-pollution-concerns-about-data-centers</span>
          </li>
        </ol>

        <h3 className="text-base font-bold mb-2 mt-4">Community Regulation Examples</h3>
        <ol className="text-[9pt] text-gray-700 space-y-2 list-decimal pl-5" start={37}>
          <li>Lea County, NM. Ordinance 2024-01. Comprehensive data center regulation including noise limits,
            closed-loop cooling, PILOT payments, decommissioning bonds.</li>
          <li>Loudoun County, VA. Zoning Ordinance Amendment, 2023. 50 dBA at residential boundaries, sound barrier
            walls, quarterly noise monitoring.</li>
          <li>Cedar Rapids, IA. Development Agreement, 2024. Performance-linked 70% tax exemption tied to noise,
            water, and job targets. $18M community fund over 18 years.</li>
          <li>Prince William County, VA. Board of Supervisors noise complaints and QTS data center campus
            documentation, 2022-2024.</li>
          <li>Virginia JLARC. Report on data center proximity to residential properties, 2024.</li>
        </ol>
      </div>

      {/* Footer */}
      <div className="border-t-2 border-black pt-4 mt-12 text-center">
        <p className="text-sm text-gray-600 mb-2">
          henderson-vance.fyi/noise
        </p>
        <p className="text-xs text-gray-500">
          This report is a citizen education project. Not funded by any data
          center company, activist organization, or political campaign. 41 sources
          cited. All publicly verifiable.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Vance County, North Carolina - April 2026
        </p>
      </div>
    </main>
  );
}

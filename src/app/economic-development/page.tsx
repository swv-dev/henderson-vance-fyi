import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Economic Development - Henderson-Vance FYI",
  description:
    "The conversation about economic development in Vance County has been brought to the table. Here's what it means, what to ask, and how to make it work for our community.",
};

function Source({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue hover:text-gold transition text-xs underline underline-offset-2"
    >
      {label}
    </a>
  );
}

function StatCard({
  stat,
  label,
  note,
  accent = "gold",
}: {
  stat: string;
  label: string;
  note?: string;
  accent?: "gold" | "blue" | "red";
}) {
  const colors = {
    gold: "text-gold",
    blue: "text-blue",
    red: "text-red",
  };
  return (
    <div className="rounded-lg border border-card-border bg-card p-5">
      <p className={`text-2xl font-extrabold ${colors[accent]} md:text-3xl`}>
        {stat}
      </p>
      <p className="mt-1 text-sm font-semibold text-foreground">{label}</p>
      {note && <p className="mt-2 text-xs text-subtle leading-relaxed">{note}</p>}
    </div>
  );
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-muted leading-relaxed">
      <span className="mt-0.5 shrink-0 text-gold font-bold">&#9670;</span>
      <span>{children}</span>
    </li>
  );
}

function ConcernCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-card-border bg-card p-6">
      <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">
        {title}
      </h4>
      <div className="text-sm text-muted leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

export default function EconomicDevelopmentPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <a
            href="/"
            className="mb-8 inline-block text-xs font-bold uppercase tracking-widest text-subtle hover:text-gold transition"
          >
            &larr; Henderson-Vance FYI
          </a>
          <div className="mb-6 h-1 w-20 bg-gold" />
          <h1 className="mb-6 text-3xl font-extrabold leading-tight md:text-5xl">
            The Conversation Has Been{" "}
            <span className="text-gold">Brought to the Table</span>
          </h1>
          <p className="mb-4 max-w-3xl text-lg text-muted leading-relaxed">
            On May 5, 2026, the{" "}
            <a
              href="https://hendersonvancechamber.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Henderson-Vance County Chamber of Commerce
            </a>{" "}
            hosted a State of Economic Development presentation. Ferdinand Rouse,
            Director of the{" "}
            <a
              href="https://www.vancecounty.org/departments/economic-development"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Henderson-Vance County Economic Development Commission
            </a>
            , delivered a detailed, public breakdown of what economic
            development looks like in Vance County, including a data center
            scenario with real numbers.
          </p>
          <p className="mb-4 max-w-3xl text-sm text-subtle">
            The full 46-slide presentation is available by request from the{" "}
            <a
              href="https://www.vancecounty.org/departments/economic-development"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:text-gold transition"
            >
              Henderson-Vance County EDC
            </a>{" "}
            or the{" "}
            <a
              href="https://hendersonvancechamber.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:text-gold transition"
            >
              Henderson-Vance County Chamber of Commerce
            </a>
            .
          </p>
          <div className="mb-6 max-w-3xl rounded-lg border border-card-border bg-card p-5">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-foreground">About the presenter:</strong>{" "}
              Ferdinand Rouse is a Certified Economic Developer (CEcD) with the
              International Economic Development Council, bringing over a decade
              of experience across multiple jurisdictions including the City of
              Raleigh, Adams County, Colorado, and the City of Greenville, NC. In
              Raleigh, he administered more than $5 million in federal funding to
              stabilize small businesses. In Greenville, he launched MWBE programs
              and supplier diversity initiatives that expanded access for minority
              and women-owned firms. He holds an MBA and leads Vance County&apos;s
              business attraction, retention, and expansion efforts.
            </p>
          </div>
          <p className="mb-4 max-w-3xl text-muted leading-relaxed">
            That transparency matters. It means our community can now evaluate
            opportunities with real information instead of rumors, fear, or hype.
            This page builds on that presentation with independently researched
            context, cited sources, and a clear focus: how does Vance County make
            this work <strong className="text-foreground">for us</strong>?
          </p>
          <p className="max-w-3xl text-sm text-subtle">
            All claims verified against primary sources. 60+ citations.
            Not funded by any company, developer, or political campaign.
          </p>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            The Opportunity
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            What This Could Mean for Vance County
          </h2>
          <p className="mb-10 max-w-3xl text-muted leading-relaxed">
            Vance County is a{" "}
            <strong className="text-foreground">Tier 1 county</strong>, one of
            the 40 most economically distressed counties in North Carolina. That
            designation comes with real challenges, but it also comes with
            leverage. Developers receive enhanced state incentives for locating in
            Tier 1 communities, which means{" "}
            <strong className="text-foreground">
              we have something they want
            </strong>
            . The question is whether we use that leverage wisely.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <StatCard
              stat="$71-119M"
              label="Potential Annual Property Tax Revenue"
              note="At current Vance County rates, a $10B data center campus would generate between $71M (conservative, after depreciation) and $119M (Year 1 peak) annually. The county's current total budget is roughly $66M. This is a transformational scale of revenue."
            />
            <StatCard
              stat="$75-110K"
              label="Average Data Center Salaries"
              note="Technical roles at data centers pay well above the Vance County average of roughly $45K. Even entry-level technician positions start around $57K. These are career-track jobs with benefits."
              accent="blue"
            />
            <StatCard
              stat="Developer-Funded"
              label="Infrastructure Investment"
              note="The national landscape has shifted. Data center developers are now committing to fund their own utility upgrades, water, sewer, and road improvements at no cost to local taxpayers. Our community's advocacy helped make this the new standard."
              accent="gold"
            />
            <StatCard
              stat="Regional Hub"
              label="Competitive Positioning"
              note="North Carolina is ranked #1 for business (Forbes, 2025). The Kerr-Tar region sits along the I-85 and US-1 corridors with proximity to the Research Triangle. Strategic development positions Vance County as a regional leader, not just a participant."
              accent="blue"
            />
          </div>

          <div className="mt-10 rounded-lg border border-gold/30 bg-gold/5 p-6">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-foreground">
                The EDC&apos;s target industries go beyond data centers.
              </strong>{" "}
              Light manufacturing, distribution and logistics, life sciences and
              biosciences, and food and beverage processing are all part of the
              strategy. A diversified approach means Vance County is not putting
              all its eggs in one basket. Each industry type brings different
              strengths: manufacturing creates more jobs per dollar invested, data
              centers generate more tax revenue, and logistics operations build on
              our highway corridor advantages.
            </p>
          </div>
        </div>
      </section>

      {/* What Revenue Means */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Where the Money Goes
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            Revenue Is Not Abstract. It Is Teacher Pay and Public Safety.
          </h2>
          <p className="mb-10 max-w-3xl text-muted leading-relaxed">
            Tax revenue numbers only matter when they connect to things our
            community actually needs. Right now, Vance County has two urgent
            priorities that new revenue could directly address.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
                Invest in Our Educators
              </p>
              <p className="mb-3 text-2xl font-extrabold text-red md:text-3xl">
                96th / 100
              </p>
              <p className="mb-4 text-sm font-semibold text-foreground">
                Vance County Schools ranks 96th out of 100 NC counties in
                per-student education spending, in a state that is nearly last
                in the nation.
              </p>
              <div className="space-y-3 text-sm text-muted leading-relaxed">
                <p>
                  Before last year, there had not been a teacher supplement
                  increase in 25 years. Educators are leaving for neighboring
                  districts that pay better. Classified staff, the people who
                  drive the buses, serve the meals, and hold our schools
                  together, are working second and third jobs to make ends meet.
                </p>
                <p>
                  We do not need more schools built. We need investment in the
                  system we already have: competitive supplements to retain good
                  educators, resources for classrooms, and support for the staff
                  who show up every day for our kids.
                </p>
                <p>
                  <strong className="text-foreground">
                    What revenue could do:
                  </strong>{" "}
                  Even at conservative steady-state estimates, a data center
                  project generating $71M+ annually in property tax would more
                  than cover the school system&apos;s requested supplement
                  increases while funding every other county priority. Caldwell
                  County (Google) saw 51.5% wage growth since 2015. Mecklenburg
                  County, VA (Microsoft) built a state-of-the-art educational
                  complex. This is not theory. It is precedent.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
                Public Safety Infrastructure
              </p>
              <p className="mb-3 text-2xl font-extrabold text-gold md:text-3xl">
                $5M
              </p>
              <p className="mb-4 text-sm font-semibold text-foreground">
                The FY26-27 budget includes a $5M capital reserve to begin
                planning for a new detention facility and other critical
                infrastructure.
              </p>
              <div className="space-y-3 text-sm text-muted leading-relaxed">
                <p>
                  The county&apos;s current detention facility needs significant
                  upgrades or replacement. This is not a new issue. It has been
                  deferred for years, and the cost of waiting continues to grow.
                  The proposed county budget of $72.47M already stretches to
                  cover rising costs in detention operations, inmate housing, and
                  emergency services.
                </p>
                <p>
                  A new or upgraded facility is coming regardless. The question
                  is whether it gets funded through tax increases on existing
                  residents or through new revenue from economic development that
                  broadens the tax base.
                </p>
                <p>
                  <strong className="text-foreground">
                    What revenue could do:
                  </strong>{" "}
                  Property tax revenue from a $10B data center project could fund
                  major capital projects like a detention facility without
                  raising the tax rate on residents. The current rate of $0.7129
                  is already down from $0.89. Broadening the tax base keeps rates
                  low while funding the infrastructure our community needs.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-gold/30 bg-gold/5 p-6">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-foreground">
                This is the real conversation.
              </strong>{" "}
              Not abstract revenue projections, but whether our teachers can
              afford to stay, whether our schools have the resources they need,
              and whether our public safety infrastructure keeps pace with our
              community. Economic development done right puts these priorities
              within reach without raising taxes on the people who already live
              here.
            </p>
          </div>
        </div>
      </section>

      {/* Economic Ripple Effect */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Beyond the Data Center
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            What Else Comes With It
          </h2>
          <p className="mb-10 max-w-3xl text-muted leading-relaxed">
            A data center is not just a building with servers. In every
            documented case, major data center investments have attracted
            secondary industries, infrastructure upgrades, and economic activity
            that benefits the broader community. Here is what the evidence shows.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Fiber and Broadband
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Data centers are the single largest driver of fiber construction
                in rural America. At least three separate providers typically
                build fiber to each facility. In Caldwell County, NC,
                Google&apos;s data center gave Lenoir &quot;superior
                internet&quot; compared to peer rural counties. That fiber
                serves the whole community permanently (
                <Source
                  href="https://www.caldwelledc.org/site-selection/target-industries/data-centers"
                  label="Caldwell EDC"
                />
                ).
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Manufacturing Suppliers
              </p>
              <p className="text-sm text-muted leading-relaxed">
                When Apple and Microsoft built data centers in Catawba County,
                CommScope expanded its fiber-optic cable factory by $60.3M,
                adding 250 manufacturing jobs. Siemens invested $165M across
                the Carolinas to manufacture electrical equipment for data
                centers, creating 350 jobs in Wake County alone (
                <Source
                  href="https://businessnc.com/113645-2/"
                  label="Business NC"
                />
                ,{" "}
                <Source
                  href="https://news.siemens.com/en-us/siemens-invests-165m-carolinas-supports-data-centers/"
                  label="Siemens"
                />
                ).
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Energy and Electrical Infrastructure
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Data centers drive major investment in power infrastructure.
                Battery storage facilities, substations, and electrical
                contractors follow data center development. Electrical
                contractors specializing in medium-voltage switchgear and
                critical power systems establish permanent local operations,
                paying electricians 15-25% above standard commercial rates.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Construction Trades (3-7 Years)
              </p>
              <p className="text-sm text-muted leading-relaxed">
                A hyperscale campus takes 3-7 years to build out across multiple
                phases. Electricians, HVAC technicians, pipefitters, and MEP
                contractors establish permanent local operations. HVAC expertise
                for liquid cooling now commands $90-115K base pay. Many
                construction workers convert to permanent operations roles once
                buildings go live.
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                The Anchor Tenant Effect
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Before Google arrived, Caldwell County was known for losing
                textile jobs. After, it became part of the &quot;NC Data Center
                Corridor.&quot; The county saw 250-500 new business
                registrations per year since 2018 and 51.5% wage growth since
                2015. In the Town of Maiden (Apple), tax revenue funded a new
                town hall and fire station, and the town lowered its tax rate (
                <Source
                  href="https://www.caldwelledc.org/"
                  label="Caldwell EDC"
                />
                ,{" "}
                <Source
                  href="https://www.catawbaedc.org/data-centers"
                  label="Catawba EDC"
                />
                ).
              </p>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Impact on EDC Target Industries
              </p>
              <p className="text-sm text-muted leading-relaxed">
                <strong className="text-foreground">Light manufacturing:</strong>{" "}
                Helped by data center supply chains.{" "}
                <strong className="text-foreground">Life sciences:</strong>{" "}
                Helped by broadband and infrastructure signals.{" "}
                <strong className="text-foreground">Distribution:</strong>{" "}
                Neutral to positive.{" "}
                <strong className="text-foreground">Food/beverage:</strong>{" "}
                Neutral, but both compete for water resources. A diversified
                strategy ensures these industries complement rather than compete
                with each other (
                <Source
                  href="https://www.brookings.edu/articles/turning-the-data-center-boom-into-long-term-local-prosperity/"
                  label="Brookings Institution"
                />
                ).
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-lg border border-gold/30 bg-gold/5 p-6">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-foreground">
                A note from Mecklenburg County, Virginia:
              </strong>{" "}
              Microsoft&apos;s data center presence there has generated over $23M
              in investment, helped fund a state-of-the-art educational complex,
              and contributed to a property tax rate of just 31 cents per $100,
              compared to Vance County&apos;s current rate of 71.29 cents. The
              data center is located within three miles of a school and near a UVA
              hospital. These outcomes did not happen by accident. They happened
              because the community engaged early and set clear expectations for
              community benefit.
            </p>
          </div>
        </div>
      </section>

      {/* Setting the Standards */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Come Build Here, But Build Right
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            Setting the Standards Before They Build
          </h2>
          <p className="mb-6 max-w-3xl text-muted leading-relaxed">
            The goal is not to block data centers. The tax revenue, the jobs, the
            broadband, the anchor tenant effect, the supply chain manufacturing
            - all of that is real and all of it benefits our community. The goal
            is to{" "}
            <strong className="text-foreground">
              set the terms under which they operate
            </strong>
            . That starts with understanding where we are today.
          </p>
          <p className="mb-6 max-w-3xl text-muted leading-relaxed">
            In January 2024, data centers were added to Vance County&apos;s
            Table of Permitted Uses as part of a broader update to the industrial
            land use categories. They were classified as a{" "}
            <strong className="text-foreground">
              permitted use in Light Industrial and Office Institutional zones
            </strong>
            , which means approval is handled entirely at the staff level through
            site plan review. No public hearing is required. No planning board or
            commissioner vote is needed. For comparison, uses like asphalt plants
            and chemical manufacturing require a Special Use Permit with public
            hearings, 1,000-foot residential setbacks, and state permit
            verification.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-card-border text-xs uppercase tracking-wider text-blue">
                  <th className="px-4 py-3">Use</th>
                  <th className="px-4 py-3">Current Classification</th>
                  <th className="px-4 py-3">Public Hearing?</th>
                  <th className="px-4 py-3">Setback from Residential?</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Data Center
                  </td>
                  <td className="px-4 py-3">Permitted (staff approval)</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">None required</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Asphalt Plant
                  </td>
                  <td className="px-4 py-3">Special Use Permit</td>
                  <td className="px-4 py-3">Yes (evidentiary hearing)</td>
                  <td className="px-4 py-3">1,000 ft minimum</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Chemical Manufacturing
                  </td>
                  <td className="px-4 py-3">Special Use Permit</td>
                  <td className="px-4 py-3">Yes (evidentiary hearing)</td>
                  <td className="px-4 py-3">1,000 ft minimum</td>
                </tr>
                <tr className="border-b border-card-border/50">
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Petroleum Refinery
                  </td>
                  <td className="px-4 py-3">Prohibited</td>
                  <td className="px-4 py-3">N/A</td>
                  <td className="px-4 py-3">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Legal Context and Tools */}
          <h3 className="mb-4 text-lg font-bold text-gold">
            Setting Standards Is Not Down-Zoning
          </h3>
          <p className="mb-4 text-sm text-muted leading-relaxed">
            There is an important legal distinction here. Removing data centers
            as a permitted use (down-zoning) would close the door on everything
            this page describes: the revenue, the jobs, the broadband, the
            economic ripple effect. That is not the goal, and under NC law it
            would face serious legal hurdles. Session Law 2024-57 (SB 382),
            passed in December 2024, amended G.S. 160D-601(d) to restrict
            down-zoning and requires written consent of all affected property
            owners before permitted uses can be removed (
            <Source
              href="https://canons.sog.unc.edu/2024/12/limits-on-down-zoning/"
              label="UNC School of Government"
            />
            ,{" "}
            <Source
              href="https://www.womblebonddickinson.com/us/insights/alerts/new-year-resolutions-triggered-senate-bill-382"
              label="Womble Bond Dickinson"
            />
            ,{" "}
            <Source
              href="https://teaguecampbell.com/new-law-brings-uncertainty-to-how-local-governments-handle-zoning-regulations/"
              label="Teague Campbell"
            />
            ).
          </p>
          <p className="mb-6 text-sm text-muted leading-relaxed">
            But{" "}
            <strong className="text-foreground">
              setting performance standards is a completely different legal
              question
            </strong>
            . Telling a developer &quot;you can build here, but you will meet
            these noise limits, use closed-loop cooling, report your water
            consumption, and maintain these setbacks&quot; does not remove a
            permitted use. It defines how that use operates responsibly within
            our community. NC law gives counties clear authority to do this, and
            SB 382 does not restrict it.
          </p>

          <h3 className="mb-4 text-lg font-bold text-gold">
            How the County Sets Those Terms
          </h3>
          <div className="space-y-4 mb-6">
            <div className="rounded-lg border border-card-border bg-card p-5">
              <p className="text-sm font-semibold text-foreground mb-1">
                1. Performance Standards (G.S. 160D-701)
              </p>
              <p className="text-sm text-muted leading-relaxed">
                The county can adopt measurable standards that apply to data
                centers without removing them as a permitted use. Noise limits
                (dB at property lines), water use caps, setback requirements,
                screening, and generator testing restrictions. This regulates
                <em> how </em> data centers operate, not <em>whether</em> they
                can exist. This approach is less likely to trigger SB 382 as
                long as the standards are reasonable and do not amount to a de
                facto ban.
              </p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-5">
              <p className="text-sm font-semibold text-foreground mb-1">
                2. Water and Sewer Capacity Controls
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Potentially the most powerful non-zoning tool. Under G.S. 162A
                and G.S. 153A-274, counties that own or control water and sewer
                infrastructure can negotiate the terms of connection, set
                capacity limits per connection, require pre-treatment agreements,
                and build operational commitments into service contracts. A county
                water system with limited capacity has legitimate grounds to
                negotiate terms before providing service to a facility consuming
                millions of gallons per day.
              </p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-5">
              <p className="text-sm font-semibold text-foreground mb-1">
                3. Temporary Moratorium (G.S. 160D-107)
              </p>
              <p className="text-sm text-muted leading-relaxed">
                NC law allows counties to adopt temporary moratoria on
                development approvals while studying impacts and drafting new
                regulations. Chatham, Orange, Rowan, and Swain counties have all
                used this tool for data centers. A moratorium must include a
                statement of specific problems, which approvals are covered, and
                a termination date. The Chatham County moratorium is currently
                being tested in court (Eco TIP West LLC v. Chatham County, filed
                April 2026).
              </p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-5">
              <p className="text-sm font-semibold text-foreground mb-1">
                4. Conditional Zoning for Future Rezonings (G.S. 160D-703(b))
              </p>
              <p className="text-sm text-muted leading-relaxed">
                For any future rezoning requests, the county can use conditional
                zoning, where approval is tied to specific conditions negotiated
                with the developer and accepted in writing. Conditions can
                include community benefit commitments, infrastructure
                requirements, environmental protections, and operational
                standards. This is the strongest vehicle for enforceable
                community benefit agreements under NC law.
              </p>
            </div>
            <div className="rounded-lg border border-card-border bg-card p-5">
              <p className="text-sm font-semibold text-foreground mb-1">
                5. Comprehensive Plan Update
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Vance County is updating its comprehensive plan (originally
                adopted 1996, last revised 2010). Under G.S. 160D-501, zoning
                amendments must be consistent with the adopted plan. Including
                data center-specific policies, preferred locations, and
                community standards in the updated plan creates the documented
                policy basis for future regulations. Public engagement and work
                sessions are scheduled to begin after the FY26-27 budget is
                adopted in June 2026.
              </p>
            </div>
          </div>

          <h3 className="mb-4 text-lg font-bold text-gold">
            Vested Rights: What Developers Can and Cannot Claim
          </h3>
          <p className="mb-4 text-sm text-muted leading-relaxed">
            Under G.S. 160D-108, simply owning land in a Light Industrial zone{" "}
            <strong className="text-foreground">
              does not give a developer vested rights
            </strong>{" "}
            to build a data center. Vested rights require one of three triggers:
            filing a complete development permit application, receiving approval
            of a site-specific vesting plan, or making substantial expenditures
            in good-faith reliance on a valid governmental approval. Until one of
            those triggers is met, a landowner has no legal right to proceed
            under the current rules if the ordinance changes (
            <Source
              href="https://www.sog.unc.edu/sites/www.sog.unc.edu/files/4_PermitChoice_VestedRights_160DGuidanceDoc_9-9-20.pdf"
              label="UNC School of Government: Vested Rights Guidance"
            />
            ).
          </p>
          <p className="mb-6 text-sm text-muted leading-relaxed">
            This means that for parcels where no site plan has been submitted,
            new performance standards or overlay requirements adopted by the
            county would apply. The window for action is now, before applications
            are filed and vesting triggers are met.
          </p>

          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-foreground">
                What this means for our community:
              </strong>{" "}
              Vance County does not need to block data centers to protect its
              residents. It needs to set clear, enforceable standards for how
              they operate here. Performance standards, water and sewer
              negotiations, conditional zoning, and the comprehensive plan
              update are all tools that say &quot;yes, come build here, but
              build right.&quot; The UDO update process starting this summer is
              the venue for adopting these protections. Citizens who engage in
              that process, attend work sessions, and advocate for specific,
              measurable standards will shape how development happens in Vance
              County for decades. The question is not whether we want
              development. The question is whether we are prepared for it.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding the Numbers */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Understanding the Numbers
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            What the Data Actually Shows
          </h2>
          <p className="mb-10 max-w-3xl text-muted leading-relaxed">
            The State of Economic Development presentation included a data center
            scenario based on the Richmond County Amazon Web Services project.
            Here is that data with additional context from independent sources to
            help citizens, legislators, and elected officials understand the full
            picture.
          </p>

          {/* Tax Revenue Reality */}
          <div className="mb-10">
            <h3 className="mb-4 text-lg font-bold text-gold">
              Tax Revenue Over Time
            </h3>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              The presentation cited $119.79M per year in property tax at full
              buildout. That number is mathematically correct at the current tax
              rate of $0.7129 per $100 assessed value (
              <Source
                href="https://www.vancecounty.org/departments/tax-overview/tax-rates/"
                label="Vance County Tax Rates"
              />
              ), but it represents a{" "}
              <strong className="text-foreground">
                peak, not a steady state
              </strong>
              . Here is why:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-card-border text-xs uppercase tracking-wider text-blue">
                    <th className="px-4 py-3">Component</th>
                    <th className="px-4 py-3">Year 1</th>
                    <th className="px-4 py-3">Year 5</th>
                    <th className="px-4 py-3">Why It Changes</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">
                      Real Property Tax
                    </td>
                    <td className="px-4 py-3 text-gold font-bold">$71.3M</td>
                    <td className="px-4 py-3 text-gold font-bold">$71.3M</td>
                    <td className="px-4 py-3 text-xs">
                      Stable. Buildings and land hold value.
                    </td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">
                      Personal Property Tax
                    </td>
                    <td className="px-4 py-3 text-gold font-bold">$48.5M</td>
                    <td className="px-4 py-3 font-bold">~$2.4M</td>
                    <td className="px-4 py-3 text-xs">
                      Servers depreciate on NC&apos;s 5-year schedule to a 5%
                      floor. Equipment refreshes every 3-5 years partially reset
                      this, but it never returns to Year 1 levels.
                    </td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">
                      Realistic Steady-State
                    </td>
                    <td className="px-4 py-3 text-gold font-bold">$119.8M</td>
                    <td className="px-4 py-3 font-bold">~$73-80M</td>
                    <td className="px-4 py-3 text-xs">
                      Still exceeds the county&apos;s current $66M budget. Still
                      transformational.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-subtle">
              Source:{" "}
              <Source
                href="https://www.ncdor.gov/news/reports-and-statistics/property-tax-publications/cost-index-and-depreciation-schedules"
                label="NCDOR Cost Index and Depreciation Schedules"
              />
              . NC assesses all property at 100% of market value per NCGS 105-283.
            </p>

            <div className="mt-6 rounded-lg border border-gold/20 bg-gold/5 p-5">
              <p className="text-sm text-muted leading-relaxed">
                <strong className="text-foreground">
                  What this means for our leaders:
                </strong>{" "}
                Understanding the depreciation timeline is an opportunity to
                structure agreements with minimum annual payment floors,
                escalation clauses tied to equipment refresh cycles, and long-term
                revenue protections. Communities that negotiate these terms upfront
                maintain stable revenue. Communities that do not end up watching
                their tax base decline within five years.
              </p>
            </div>
          </div>

          {/* Incentive Reality */}
          <div className="mb-10">
            <h3 className="mb-4 text-lg font-bold text-gold">
              Incentive Packages: What Other Communities Gave
            </h3>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              The presentation stated that no local incentives are being offered
              for the scenario project. For context, here is what comparable NC
              communities negotiated:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-card-border text-xs uppercase tracking-wider text-blue">
                    <th className="px-4 py-3">Community</th>
                    <th className="px-4 py-3">Company</th>
                    <th className="px-4 py-3">Investment</th>
                    <th className="px-4 py-3">Incentives Given</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3">Richmond County</td>
                    <td className="px-4 py-3 font-semibold text-foreground">
                      Amazon (AWS)
                    </td>
                    <td className="px-4 py-3">$10B</td>
                    <td className="px-4 py-3 text-xs">
                      50% real property + 65% personal property tax rebate for 20
                      years
                    </td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3">Catawba County</td>
                    <td className="px-4 py-3 font-semibold text-foreground">
                      Microsoft
                    </td>
                    <td className="px-4 py-3">$1B+</td>
                    <td className="px-4 py-3 text-xs">
                      50% real property + 85% personal property tax rebate for 10
                      years
                    </td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3">Catawba County</td>
                    <td className="px-4 py-3 font-semibold text-foreground">
                      Apple
                    </td>
                    <td className="px-4 py-3">$4B+</td>
                    <td className="px-4 py-3 text-xs">
                      County&apos;s largest taxpayer. Funded new fire station and town
                      hall through tax contributions.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-subtle">
              Sources:{" "}
              <Source
                href="https://businessnc.com/amazon-plots-state-record-10b-data-center-project-in-richmond-county/"
                label="Business NC"
              />
              ,{" "}
              <Source
                href="https://www.carolinajournal.com/amazon-plans-10b-ai-data-center-in-richmond-county/"
                label="Carolina Journal"
              />
              . NC law prohibits direct tax abatements but allows functionally
              identical cash grant programs.
            </p>

            <div className="mt-6 rounded-lg border border-gold/20 bg-gold/5 p-5">
              <p className="text-sm text-muted leading-relaxed">
                <strong className="text-foreground">
                  What this means for our leaders:
                </strong>{" "}
                The market has shifted. Developers are now more willing to pay
                full taxes without incentive packages, particularly in communities
                that have asked tough questions. If incentives are later
                negotiated, our community should understand the baseline: every
                dollar rebated is a dollar that does not go to schools,
                infrastructure, or public services. Knowing what other communities
                gave helps us set a floor for what we should accept.
              </p>
            </div>
          </div>

          {/* Jobs Comparison */}
          <div className="mb-10">
            <h3 className="mb-4 text-lg font-bold text-gold">
              Jobs: Comparing Apples to Apples
            </h3>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              Different industries create different types of economic impact.
              Understanding these differences helps our community evaluate what
              each type of development actually delivers.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-card-border text-xs uppercase tracking-wider text-blue">
                    <th className="px-4 py-3">Industry</th>
                    <th className="px-4 py-3">Jobs per $1M Invested</th>
                    <th className="px-4 py-3">Avg Salary</th>
                    <th className="px-4 py-3">Strength</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">
                      Data Centers
                    </td>
                    <td className="px-4 py-3">0.05-0.07</td>
                    <td className="px-4 py-3">$55-110K</td>
                    <td className="px-4 py-3 text-xs">
                      Highest tax revenue per acre. Fewer direct jobs, but
                      higher-paying.
                    </td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">
                      Manufacturing
                    </td>
                    <td className="px-4 py-3">2.0-5.0</td>
                    <td className="px-4 py-3">$40-65K</td>
                    <td className="px-4 py-3 text-xs">
                      Most jobs per dollar. Deep local supply chains. Strongest
                      employment multiplier (1.7-2.5x).
                    </td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">
                      Distribution / Logistics
                    </td>
                    <td className="px-4 py-3">3.0-8.0</td>
                    <td className="px-4 py-3">$35-55K</td>
                    <td className="px-4 py-3 text-xs">
                      Leverages our I-85 and US-1 corridors. High headcount for
                      moderate investment.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-subtle">
              Sources:{" "}
              <Source
                href="https://www.bea.gov/resources/methodologies/RIMSII-user-guide"
                label="BEA RIMS II"
              />
              , IMPLAN, CBRE.
              Employment multipliers reflect independent regional economics
              research, not industry-sponsored national studies. Local multipliers
              in rural counties are typically lower than national averages because
              fewer supply chain dollars stay in the community.
            </p>

            <div className="mt-6 rounded-lg border border-gold/20 bg-gold/5 p-5">
              <p className="text-sm text-muted leading-relaxed">
                <strong className="text-foreground">
                  What this means for our leaders:
                </strong>{" "}
                A diversified strategy matters. Data centers bring tax revenue.
                Manufacturing brings jobs. Distribution leverages our location.
                Our EDC is targeting all four industries, and that is the right
                approach. The community should support efforts to attract
                <em> all </em>
                of these, while ensuring each one meets our standards for
                community benefit.
              </p>
            </div>
          </div>

          {/* Salary Breakdown */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gold">
              Data Center Salaries: The Full Breakdown
            </h3>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              Data center jobs do pay above the Vance County average. Knowing
              which roles are actually being hired helps our workforce development
              partners (VGCC, Kittrell Job Corps, NC Works) target training to
              real opportunities.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-card-border text-xs uppercase tracking-wider text-blue">
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Average Salary</th>
                    <th className="px-4 py-3">Range</th>
                    <th className="px-4 py-3">Headcount</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">
                      Data Center Engineer
                    </td>
                    <td className="px-4 py-3">$138K</td>
                    <td className="px-4 py-3 text-xs">$80-240K</td>
                    <td className="px-4 py-3 text-xs">Small (5-15)</td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">
                      Network Engineer
                    </td>
                    <td className="px-4 py-3">$113K</td>
                    <td className="px-4 py-3 text-xs">$69-187K</td>
                    <td className="px-4 py-3 text-xs">Small (5-10)</td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">
                      Facilities Manager
                    </td>
                    <td className="px-4 py-3">$83K</td>
                    <td className="px-4 py-3 text-xs">$51-135K</td>
                    <td className="px-4 py-3 text-xs">Small (3-8)</td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">
                      Data Center Technician
                    </td>
                    <td className="px-4 py-3">$57K</td>
                    <td className="px-4 py-3 text-xs">$39-84K</td>
                    <td className="px-4 py-3 text-xs">
                      Largest group (20-40)
                    </td>
                  </tr>
                  <tr className="border-b border-card-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground">
                      Security Officer
                    </td>
                    <td className="px-4 py-3">$39K</td>
                    <td className="px-4 py-3 text-xs">$28-54K</td>
                    <td className="px-4 py-3 text-xs">Moderate (10-20)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-subtle">
              Source:{" "}
              <Source
                href="https://www.indeed.com/career/data-center-technician/salaries"
                label="Indeed Salary Data, April 2026"
              />
              . Headcount estimates based on comparable hyperscale facilities.
            </p>

            <div className="mt-6 rounded-lg border border-gold/20 bg-gold/5 p-5">
              <p className="text-sm text-muted leading-relaxed">
                <strong className="text-foreground">
                  What this means for our community:
                </strong>{" "}
                The largest hiring category is technicians, not engineers.
                Programs at VGCC focused on HVAC, electrical systems, and IT
                fundamentals could prepare local residents for these positions.
                Our community should push for local hiring commitments as part of
                any development agreement, and for partnerships with VGCC and
                Kittrell Job Corps to create a training-to-employment pipeline
                that keeps these jobs in Vance County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tier 1 Concerns */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Tier 1 Reality
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            Addressing What Matters to Our Community
          </h2>
          <p className="mb-10 max-w-3xl text-muted leading-relaxed">
            Vance County is a Tier 1 county. Our residents care about jobs, pay,
            schools, infrastructure, public safety, and the cost of living. Every
            development decision should be measured against these priorities. Here
            is how major development, done right, can address each one.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <ConcernCard title="Jobs and Pay">
              <p>
                A data center campus of this scale would create 500-700 permanent
                positions plus approximately 1,500 construction jobs during
                buildout. Technician roles start around $57K, well above the
                county average of ~$45K.
              </p>
              <p>
                <strong className="text-foreground">What to push for:</strong>{" "}
                Local hiring requirements (25-30% minimum), VGCC training
                partnerships, and living wage floors written into the development
                agreement. Ask: &quot;How many of these jobs will go to Vance
                County residents?&quot;
              </p>
            </ConcernCard>

            <ConcernCard title="Schools">
              <p>
                Vance County Schools currently ranks{" "}
                <strong className="text-foreground">
                  96th out of 100 counties
                </strong>{" "}
                in per-student education spending, in a state that is nearly last
                in the nation. Property tax revenue is the primary local funding
                source for schools. Even at conservative steady-state estimates,
                a $10B project would generate more annual property tax than the
                county&apos;s entire current budget. In Mecklenburg County,
                Virginia, Microsoft&apos;s data center tax revenue helped fund a
                state-of-the-art educational complex. In Caldwell County, NC,
                Google provided $270,000 in workforce development grants.
              </p>
              <p>
                <strong className="text-foreground">What to push for:</strong>{" "}
                Dedicated education funding commitments written into any
                development agreement. Direct contributions to the school system,
                workforce development grants for VGCC, and technology training
                programs like Google&apos;s STAR Program and Microsoft&apos;s
                Datacenter Academy. These programs exist, but they are
                negotiated, not automatic.
              </p>
            </ConcernCard>

            <ConcernCard title="Water">
              <p>
                Traditional evaporative cooling towers for a 1,500 MW facility
                could consume 2.5M+ gallons per day, with 70-80% permanently
                evaporated. The Kerr Lake Regional Water System currently serves
                about 4 MGD total, with an expansion underway targeting 15 MGD
                capacity (
                <Source
                  href="https://henderson.nc.gov/departments/public_utilities/kerr_lake_regional_water_system/klrws_expansion.php"
                  label="Henderson Public Utilities"
                />
                ). NC is currently in moderate to extreme drought statewide.
              </p>
              <p>
                However,{" "}
                <strong className="text-foreground">
                  the technology has changed
                </strong>
                . Direct-to-chip liquid cooling places sealed cold plates
                directly on processors, circulating coolant through a
                closed loop with no evaporation. This approach reduces daily
                water consumption by up to 99.6% compared to traditional
                evaporative towers. Vantage Data Centers&apos; Wisconsin campus
                uses roughly 22,000 gallons per day versus 5 million for an
                equivalent evaporative facility. Microsoft announced zero-water-
                evaporation designs using direct-to-chip cooling for new
                facilities in 2024. NVIDIA&apos;s latest GPU racks (GB200
                NVL72, 120-140 kW per rack) ship with liquid cooling built in
                because air cooling physically cannot handle the heat (
                <Source
                  href="https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/"
                  label="Microsoft Cloud Blog"
                />
                ).
              </p>
              <p>
                <strong className="text-foreground">What to push for:</strong>{" "}
                Require closed-loop, non-evaporative cooling systems as a
                condition of any development agreement. Set a maximum Water Usage
                Effectiveness (WUE) of 0.1 L/kWh. Mandate annual public water
                consumption reporting. South Carolina HB 4583 and Kansas SB 400
                both require zero net water withdrawal for data centers. Oregon
                passed HB 4138 requiring water use plans for facilities over 100
                MW. The technology exists. Requiring it is not unreasonable.
              </p>
            </ConcernCard>

            <ConcernCard title="Electricity and Rates">
              <p>
                1,500 MW is enough power for roughly two cities the size of
                Raleigh. Duke Energy&apos;s DEP subsidiary serves Vance County.
                Infrastructure costs are spread across all DEP ratepayers, not
                just local customers.
              </p>
              <p>
                <strong className="text-foreground">What to push for:</strong>{" "}
                Virginia&apos;s SCC created a separate rate class (GS-5) for data
                centers over 25 MW, shifting infrastructure costs to the users who
                cause them (
                <Source
                  href="https://insideclimatenews.org/news/07012026/virginia-regulators-approve-new-dominion-rates/"
                  label="Inside Climate News"
                />
                ). NC&apos;s proposed Ratepayer and Resource Protection Act would
                do the same. Our state legislators should hear from us on this.
              </p>
            </ConcernCard>

            <ConcernCard title="Noise and Infrasound">
              <p>
                Data centers operate large cooling systems and backup diesel
                generators 24/7. Continuous low-frequency noise is a documented
                concern in communities hosting these facilities. The town of The
                Dalles, Oregon (home to Google) has dealt with ongoing noise
                complaints from cooling systems.
              </p>
              <p>
                <strong className="text-foreground">What to push for:</strong>{" "}
                Vance County currently has{" "}
                <strong className="text-foreground">
                  no data center-specific noise ordinance
                </strong>
                . Best practice: 45 dB(A) at residential property lines at night,
                55 dB(A) daytime, with generator testing limited to weekday
                daytime hours only. This should be adopted{" "}
                <em>before</em> any development agreement is signed.{" "}
                <a href="/noise" className="text-blue hover:text-gold transition underline">
                  Read the full noise report &rarr;
                </a>
              </p>
            </ConcernCard>

            <ConcernCard title="Infrastructure">
              <p>
                Roads, water lines, sewer capacity, broadband. The presentation
                confirmed that developers in today&apos;s market are committing to
                fund their own utility and infrastructure upgrades. This is a
                direct result of communities asking tough questions.
              </p>
              <p>
                <strong className="text-foreground">What to push for:</strong>{" "}
                Written, binding infrastructure commitments, not verbal promises.
                Independent verification that sewer capacity (Henderson&apos;s
                Nutbush facility is permitted at 4.14 MGD) can handle additional
                discharge. Road improvement commitments for construction traffic.
              </p>
            </ConcernCard>

            <ConcernCard title="Taxes and Cost of Living">
              <p>
                A major development that pays its full property tax obligation
                could reduce the tax burden on existing residents by broadening
                the tax base. The current rate of $0.7129 is already down from
                $0.89 after the most recent revaluation.
              </p>
              <p>
                <strong className="text-foreground">What to push for:</strong>{" "}
                Transparency on any incentive deals. Every dollar rebated to a
                developer is a dollar not going to county services. If incentives
                are offered, they should include clawback provisions: if the
                company does not meet job or investment commitments, the money
                comes back.
              </p>
            </ConcernCard>

            <ConcernCard title="Public Safety and the Jail System">
              <p>
                Economic development that brings higher-paying jobs and increased
                tax revenue gives the county resources to invest in public safety,
                emergency services, and facilities. Vance County&apos;s
                infrastructure needs extend beyond roads and water.
              </p>
              <p>
                <strong className="text-foreground">What to push for:</strong>{" "}
                Community benefit agreements can include direct contributions to
                public safety infrastructure. Prince William County, Virginia
                negotiated $12M in community facility contributions as part of
                their data center corridor agreement. Our community should name
                its priorities and put them on the negotiating table.
              </p>
            </ConcernCard>
          </div>
        </div>
      </section>

      {/* What Smart Communities Are Doing */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Learn From Others
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            What Smart Communities Are Doing
          </h2>
          <p className="mb-10 max-w-3xl text-muted leading-relaxed">
            Vance County is not the first community to face this decision. Here
            is what others have done to protect their residents while welcoming
            development.
          </p>

          <div className="space-y-6">
            <div className="rounded-lg border border-card-border bg-card p-6">
              <div className="flex items-start gap-4">
                <span className="mt-1 shrink-0 rounded bg-gold/20 px-2 py-1 text-xs font-bold text-gold">
                  VA
                </span>
                <div>
                  <h4 className="mb-2 font-bold text-foreground">
                    Virginia: Separate Rate Class for Data Centers
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    The Virginia State Corporation Commission created a new
                    utility rate class (GS-5) specifically for data centers over
                    25 MW. This shifts grid infrastructure costs to the large
                    users who create the demand, instead of spreading them across
                    all residential ratepayers. NC does not have this yet, but the
                    proposed Ratepayer and Resource Protection Act would create a
                    similar framework.
                  </p>
                  <p className="mt-2 text-xs text-subtle">
                    Source:{" "}
                    <Source
                      href="https://www.selc.org/press-release/dominion-customers-to-see-rate-increase-though-scc-takes-steps-designed-to-ensure-data-centers-pay-fair-share/"
                      label="Southern Environmental Law Center"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <div className="flex items-start gap-4">
                <span className="mt-1 shrink-0 rounded bg-gold/20 px-2 py-1 text-xs font-bold text-gold">
                  OR
                </span>
                <div>
                  <h4 className="mb-2 font-bold text-foreground">
                    Oregon: Mandatory Water Use Disclosure
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Oregon passed HB 4138 requiring large data centers (over 100
                    MW) to submit water use plans and annual consumption reports.
                    This gives communities real data on actual impact instead of
                    relying on developer estimates. NC currently has no centralized
                    tracking of data center water consumption.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <div className="flex items-start gap-4">
                <span className="mt-1 shrink-0 rounded bg-gold/20 px-2 py-1 text-xs font-bold text-gold">
                  VA
                </span>
                <div>
                  <h4 className="mb-2 font-bold text-foreground">
                    Prince William County: Community Benefit Agreements
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    After significant community engagement around a 2,100-acre
                    data center corridor, Prince William County negotiated binding
                    commitments: $12M in community facility contributions, local
                    hiring percentages, conservation area set-asides, and design
                    standards. The community named its priorities and put them on
                    the table. So can we.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-card-border bg-card p-6">
              <div className="flex items-start gap-4">
                <span className="mt-1 shrink-0 rounded bg-gold/20 px-2 py-1 text-xs font-bold text-gold">
                  NC
                </span>
                <div>
                  <h4 className="mb-2 font-bold text-foreground">
                    NC Communities: Moratoriums to Study First
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Chatham County, Orange County, and Swain County have all
                    passed temporary moratoriums on data center development to
                    study impacts before making permanent decisions. These are not
                    anti-development measures. They are tools that give
                    communities time to put the right protections in place before
                    approvals happen.
                  </p>
                  <p className="mt-2 text-xs text-subtle">
                    Sources:{" "}
                    <Source
                      href="https://www.wunc.org/environment/2026-04-22/orange-county-moratorium-data-centers"
                      label="WUNC"
                    />
                    ,{" "}
                    <Source
                      href="https://www.northcarolinahealthnews.org/2026/03/25/nc-communities-push-back-ai-data-centers-project-delta-lawsuit/"
                      label="NC Health News"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Playbook */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            The Playbook
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            How Vance County Wins This
          </h2>
          <p className="mb-10 max-w-3xl text-muted leading-relaxed">
            Opportunity without preparation is just luck. Here are the specific
            questions to ask, ordinances to adopt, and demands to make so that
            Vance County enters any negotiation from a position of strength.
          </p>

          {/* Questions to Ask */}
          <div className="mb-10">
            <h3 className="mb-4 text-lg font-bold text-gold">
              Questions Citizens Should Be Asking
            </h3>
            <ul className="space-y-3">
              <ChecklistItem>
                How many permanent jobs will go to Vance County residents,
                and what training programs will ensure local hiring?
              </ChecklistItem>
              <ChecklistItem>
                What is the projected property tax revenue in Years 1, 5, 10,
                and 20 after accounting for equipment depreciation?
              </ChecklistItem>
              <ChecklistItem>
                Will the developer fund all infrastructure upgrades (water,
                sewer, roads, electrical), and is that commitment in writing?
              </ChecklistItem>
              <ChecklistItem>
                What cooling technology will be used? Evaporative towers consume
                millions of gallons daily. Closed-loop systems use 90% less.
              </ChecklistItem>
              <ChecklistItem>
                What happens to the electric rates for Vance County residents?
                Will the developer support a separate large-load rate class?
              </ChecklistItem>
              <ChecklistItem>
                What noise will this facility produce at the nearest residential
                property line, day and night?
              </ChecklistItem>
              <ChecklistItem>
                If incentives are offered, what are the clawback provisions if
                job or investment commitments are not met?
              </ChecklistItem>
              <ChecklistItem>
                What percentage of construction and ongoing procurement dollars
                will stay in Vance County?
              </ChecklistItem>
              <ChecklistItem>
                What is the decommissioning plan if the facility closes? Is
                there a bond or letter of credit for site remediation?
              </ChecklistItem>
              <ChecklistItem>
                Will the developer commit to annual public reporting on water
                use, energy use, employment, and local tax payments?
              </ChecklistItem>
            </ul>
          </div>

          {/* Ordinances to Adopt */}
          <div className="mb-10">
            <h3 className="mb-4 text-lg font-bold text-gold">
              Ordinances and Regulations to Adopt Now
            </h3>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              These should be in place{" "}
              <strong className="text-foreground">
                before any development agreement is signed
              </strong>
              . Adopting protections after the fact is significantly harder.
            </p>
            <ul className="space-y-3">
              <ChecklistItem>
                <strong className="text-foreground">
                  Noise Ordinance:
                </strong>{" "}
                45 dB(A) maximum at residential property lines between 10 PM
                and 7 AM. 55 dB(A) daytime maximum. Generator testing limited
                to weekday business hours. Annual noise monitoring required.
              </ChecklistItem>
              <ChecklistItem>
                <strong className="text-foreground">
                  Water Use Reporting:
                </strong>{" "}
                Mandatory annual public disclosure of water consumption for any
                facility consuming more than 100,000 gallons per day. Cooling
                technology standards requiring closed-loop systems where
                feasible.
              </ChecklistItem>
              <ChecklistItem>
                <strong className="text-foreground">
                  Zoning Classification:
                </strong>{" "}
                Data centers should require a Special Use Permit (not by-right
                approval). NC G.S. Chapter 160D gives counties full authority
                to designate data centers as a separate use category with
                performance standards and public hearing requirements.
              </ChecklistItem>
              <ChecklistItem>
                <strong className="text-foreground">
                  Environmental Review:
                </strong>{" "}
                Independent wetland delineation, air quality modeling for
                diesel generator emissions, and stormwater impact assessment
                before any land-disturbing permit is issued.
              </ChecklistItem>
              <ChecklistItem>
                <strong className="text-foreground">
                  Setback and Screening:
                </strong>{" "}
                Minimum 200-foot vegetative buffer from all property lines.
                Architectural standards to prevent blank concrete walls visible
                from public roads. Lighting restrictions to prevent light
                trespass.
              </ChecklistItem>
              <ChecklistItem>
                <strong className="text-foreground">
                  Decommissioning Bond:
                </strong>{" "}
                Financial assurance (bond or letter of credit) for site
                remediation deposited before construction begins, with a
                minimum 5-year operating commitment.
              </ChecklistItem>
            </ul>
          </div>

          {/* Demands for Negotiation */}
          <div className="mb-10">
            <h3 className="mb-4 text-lg font-bold text-gold">
              Demands for Any Development Agreement
            </h3>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              These are the terms our elected officials should bring to the
              negotiating table. They are based on what communities across the
              country have successfully secured.
            </p>
            <ul className="space-y-3">
              <ChecklistItem>
                <strong className="text-foreground">
                  Local Hiring Floor:
                </strong>{" "}
                25-30% of construction jobs and a meaningful percentage of
                permanent positions filled by Vance County residents. Written
                into the agreement with annual reporting.
              </ChecklistItem>
              <ChecklistItem>
                <strong className="text-foreground">
                  Workforce Pipeline:
                </strong>{" "}
                Funded partnership with VGCC and Kittrell Job Corps for
                technician training programs aligned to actual hiring needs.
                Apprenticeship program during construction phase.
              </ChecklistItem>
              <ChecklistItem>
                <strong className="text-foreground">
                  Community Benefit Fund:
                </strong>{" "}
                Annual contribution to a community fund governed by a local
                board (not the developer). Directed toward schools, public
                safety, infrastructure, and recreation. Prince William County
                secured $12M.
              </ChecklistItem>
              <ChecklistItem>
                <strong className="text-foreground">
                  Revenue Protection:
                </strong>{" "}
                Minimum annual payment floors that survive equipment
                depreciation. If incentives are offered, include escalation
                clauses and full clawback provisions.
              </ChecklistItem>
              <ChecklistItem>
                <strong className="text-foreground">
                  Full Transparency:
                </strong>{" "}
                Annual public reporting on water consumption, energy use,
                employment levels, local procurement spending, and tax
                payments. No NDAs on community impact data.
              </ChecklistItem>
              <ChecklistItem>
                <strong className="text-foreground">
                  Infrastructure First:
                </strong>{" "}
                All utility upgrades (water, sewer, roads, power) fully funded
                by the developer and completed before or concurrent with
                construction. Verified independently, not self-reported.
              </ChecklistItem>
              <ChecklistItem>
                <strong className="text-foreground">
                  Environmental Commitments:
                </strong>{" "}
                Enhanced wetland buffers (minimum 300 feet from jurisdictional
                wetlands), renewable energy sourcing goals, and PFAS and
                hazardous waste disclosure and handling plans.
              </ChecklistItem>
              <ChecklistItem>
                <strong className="text-foreground">
                  State-Level Advocacy:
                </strong>{" "}
                Support for the Ratepayer and Resource Protection Act to ensure
                large energy users pay cost-based electric rates. Push our state
                legislators (Sen. Barnes, Rep. Winslow, Rep. Cohn) to support
                this legislation.
              </ChecklistItem>
            </ul>
          </div>

          {/* Bottom Line */}
          <div className="rounded-lg border-2 border-gold/50 bg-gold/10 p-6 md:p-8">
            <h3 className="mb-4 text-xl font-extrabold md:text-2xl">
              The Bottom Line
            </h3>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              Vance County has untapped potential. We have the location, the
              land, the water, and the workforce. We also have the leverage that
              comes with being a Tier 1 community in the #1 state for business.
            </p>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              Economic development done right does not happen{" "}
              <em>to</em> a community. It happens{" "}
              <em>with</em> a community. The conversation has been brought to the
              table. Now it is our job to make sure we are prepared, informed, and
              united in making decisions that benefit Henderson and Vance County
              for generations to come.
            </p>
            <p className="text-sm font-semibold text-foreground">
              Be informed. Be engaged. Be at the table.
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Get Involved
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            Resources and Partners
          </h2>
          <p className="mb-10 max-w-2xl text-muted">
            These are the organizations working on economic development in our
            community. Reach out, show up, and stay connected.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="https://www.vancecounty.org/departments/economic-development"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-card-border bg-card p-6 transition hover:border-gold/40"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Economic Development
              </p>
              <p className="font-bold text-foreground group-hover:text-gold transition">
                Henderson-Vance County EDC
              </p>
              <p className="mt-2 text-xs text-subtle">
                Ferdinand Rouse, Director. Business attraction, retention, and
                expansion. The team leading recruitment efforts for Vance County.
              </p>
              <p className="mt-3 text-xs text-blue group-hover:text-gold transition">
                Visit EDC &rarr;
              </p>
            </a>

            <a
              href="https://hendersonvancechamber.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-card-border bg-card p-6 transition hover:border-gold/40"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Business Community
              </p>
              <p className="font-bold text-foreground group-hover:text-gold transition">
                Henderson-Vance Chamber of Commerce
              </p>
              <p className="mt-2 text-xs text-subtle">
                Local business advocacy, networking, and community events. Host
                of the State of Economic Development presentation series.
              </p>
              <p className="mt-3 text-xs text-blue group-hover:text-gold transition">
                Visit Chamber &rarr;
              </p>
            </a>

            <a
              href="https://www.vgcc.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-card-border bg-card p-6 transition hover:border-gold/40"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                Workforce Development
              </p>
              <p className="font-bold text-foreground group-hover:text-gold transition">
                Vance-Granville Community College
              </p>
              <p className="mt-2 text-xs text-subtle">
                Training programs, workforce development partnerships, and the
                pipeline for preparing local residents for new industry jobs.
              </p>
              <p className="mt-3 text-xs text-blue group-hover:text-gold transition">
                Visit VGCC &rarr;
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Cited Sources
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-8 text-3xl font-extrabold">Sources</h2>
          <div className="space-y-2 text-xs text-subtle">
            <p>
              <strong className="text-muted">Tax Rates:</strong>{" "}
              <Source href="https://www.vancecounty.org/departments/tax-overview/tax-rates/" label="Vance County Tax Rates" /> |{" "}
              <Source href="https://www.ncdor.gov/2025-2026-county-tax-rates-finalpdf/open" label="NCDOR 2025-2026 County Tax Rates" />
            </p>
            <p>
              <strong className="text-muted">Depreciation:</strong>{" "}
              <Source href="https://www.ncdor.gov/news/reports-and-statistics/property-tax-publications/cost-index-and-depreciation-schedules" label="NCDOR Cost Index and Depreciation Schedules" />
            </p>
            <p>
              <strong className="text-muted">NC Data Center Incentives:</strong>{" "}
              <Source href="https://edpnc.com/incentives/data-centers-sales-use-tax-exemptions/" label="EDPNC Data Center Exemptions" /> |{" "}
              <Source href="https://www.ncleg.gov/Legislation/SummariesPublication/Summary/2015/11/H117-SMSV-89(sl)/" label="HB 117 NC Competes Act" /> |{" "}
              <Source href="https://www.wunc.org/term/news/2026-04-22/data-centers-nc-dont-pay-taxes-on-supplies" label="WUNC" />
            </p>
            <p>
              <strong className="text-muted">Richmond County/AWS:</strong>{" "}
              <Source href="https://businessnc.com/amazon-plots-state-record-10b-data-center-project-in-richmond-county/" label="Business NC" /> |{" "}
              <Source href="https://www.carolinajournal.com/amazon-plans-10b-ai-data-center-in-richmond-county/" label="Carolina Journal" />
            </p>
            <p>
              <strong className="text-muted">Water:</strong>{" "}
              <Source href="https://henderson.nc.gov/departments/public_utilities/kerr_lake_regional_water_system/klrws_expansion.php" label="KLRWS Expansion" /> |{" "}
              <Source href="https://www.deq.nc.gov/about/divisions/water-resources/water-planning/water-supply-planning/interbasin-transfer-certification/regulated-interbasin-transfers/kerr-lake" label="NC DEQ IBT" /> |{" "}
              <Source href="https://dgtlinfra.com/data-center-water-usage/" label="DGTL Infra Water Guide" />
            </p>
            <p>
              <strong className="text-muted">Energy:</strong>{" "}
              <Source href="https://news.duke-energy.com/releases/duke-energy-files-2025-carolinas-resource-plan-continues-modernizing-energy-infrastructure-to-support-future-growth" label="Duke 2025 Resource Plan" /> |{" "}
              <Source href="https://www.wral.com/news/local/north-carolina-data-centers-ai-power-grid-costs-who-pays-march-2026/" label="WRAL: Who Pays?" /> |{" "}
              <Source href="https://www.wunc.org/environment/2025-10-17/data-centers-nc-utilities-commission-duke-energy-ratepayers" label="WUNC: Ratepayer Protections" />
            </p>
            <p>
              <strong className="text-muted">Rate Impact:</strong>{" "}
              <Source href="https://insideclimatenews.org/news/07012026/virginia-regulators-approve-new-dominion-rates/" label="Inside Climate News: Virginia Rates" /> |{" "}
              <Source href="https://www.selc.org/press-release/dominion-customers-to-see-rate-increase-though-scc-takes-steps-designed-to-ensure-data-centers-pay-fair-share/" label="SELC: Dominion Rate Class" />
            </p>
            <p>
              <strong className="text-muted">Employment Data:</strong>{" "}
              <Source href="https://www.indeed.com/career/data-center-technician/salaries" label="Indeed Salary Data" /> |{" "}
              <Source href="https://www.bea.gov/resources/methodologies/RIMSII-user-guide" label="BEA RIMS II" />
            </p>
            <p>
              <strong className="text-muted">Community Responses:</strong>{" "}
              <Source href="https://www.wunc.org/environment/2026-04-22/orange-county-moratorium-data-centers" label="WUNC: Orange County Moratorium" /> |{" "}
              <Source href="https://www.northcarolinahealthnews.org/2026/03/25/nc-communities-push-back-ai-data-centers-project-delta-lawsuit/" label="NC Health News" /> |{" "}
              <Source href="https://chathamjournal.com/2026/04/25/developer-sues-chatham-county-the-data-center-pause-that-may-define-ncs-ai-era/" label="Chatham Journal" />
            </p>
            <p>
              <strong className="text-muted">NC Transparency:</strong>{" "}
              <Source href="https://www.theassemblync.com/news/business/data-centers-economic-impact-north-carolina/" label="The Assembly NC" /> |{" "}
              <Source href="https://ncnewsline.com/2026/04/21/property-tax-data-center-bills-likely-to-move-through-nc-legislature-this-session/" label="NC Newsline" />
            </p>
            <p>
              <strong className="text-muted">Environmental:</strong>{" "}
              <Source href="https://cwfnc.org/bubble/" label="Clean Water for NC" /> |{" "}
              <Source href="https://www.lincolninst.edu/publications/land-lines-magazine/articles/land-water-impacts-data-centers/" label="Lincoln Institute" />
            </p>
            <p>
              <strong className="text-muted">Cooling Technology:</strong>{" "}
              <Source href="https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/" label="Microsoft Zero-Water Design" /> |{" "}
              <Source href="https://blog.vantage-dc.com/2026/04/22/cooling-without-the-drain-how-closed-loop-systems-cut-day-to-day-water-use/" label="Vantage Closed-Loop" /> |{" "}
              <Source href="https://www.oracle.com/news/announcement/blog/closed-loop-cooling-in-oracle-ai-data-centers-2026-02-09/" label="Oracle Closed-Loop" /> |{" "}
              <Source href="https://www.multistate.us/insider/2026/3/3/state-data-center-water-usage-legislation-gains-momentum-in-2025" label="MultiState: Water Legislation" />
            </p>
            <p>
              <strong className="text-muted">Economic Ripple Effect:</strong>{" "}
              <Source href="https://www.caldwelledc.org/site-selection/target-industries/data-centers" label="Caldwell EDC" /> |{" "}
              <Source href="https://www.catawbaedc.org/data-centers" label="Catawba EDC" /> |{" "}
              <Source href="https://businessnc.com/113645-2/" label="Business NC: CommScope" /> |{" "}
              <Source href="https://news.siemens.com/en-us/siemens-invests-165m-carolinas-supports-data-centers/" label="Siemens $165M Investment" /> |{" "}
              <Source href="https://www.brookings.edu/articles/turning-the-data-center-boom-into-long-term-local-prosperity/" label="Brookings Institution" /> |{" "}
              <Source href="https://www.uschamber.com/technology/data-centers-deliver-local-value" label="U.S. Chamber of Commerce" /> |{" "}
              <Source href="https://www.loudoun.gov/Faq.aspx?QID=1793" label="Loudoun County" />
            </p>
            <p>
              <strong className="text-muted">NC Zoning Law:</strong>{" "}
              <Source href="https://canons.sog.unc.edu/2024/12/limits-on-down-zoning/" label="UNC SOG: Down-Zoning Limits" /> |{" "}
              <Source href="https://www.womblebonddickinson.com/us/insights/alerts/new-year-resolutions-triggered-senate-bill-382" label="Womble Bond Dickinson: SB 382" /> |{" "}
              <Source href="https://teaguecampbell.com/new-law-brings-uncertainty-to-how-local-governments-handle-zoning-regulations/" label="Teague Campbell: SB 382" /> |{" "}
              <Source href="https://www.sog.unc.edu/sites/www.sog.unc.edu/files/4_PermitChoice_VestedRights_160DGuidanceDoc_9-9-20.pdf" label="UNC SOG: Vested Rights" /> |{" "}
              <Source href="https://canons.sog.unc.edu/2023/02/hit-the-pause-button-temporary-development-moratoria-in-north-carolina/" label="UNC SOG: Moratoria" /> |{" "}
              <Source href="https://chathamjournal.com/2026/04/25/developer-sues-chatham-county-the-data-center-pause-that-may-define-ncs-ai-era/" label="Chatham Journal: Eco TIP v. Chatham" />
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-card-border px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm text-muted">
            This page is part of{" "}
            <a href="/" className="text-gold hover:underline">
              Henderson-Vance FYI
            </a>
            , a citizen education project. Not funded by any data center company,
            developer, activist organization, or political campaign.
          </p>
          <p className="mb-4 text-sm text-muted">
            Share it. Print it. Bring it to the next meeting.
            The more informed we are, the better decisions we make.
          </p>
          <p className="text-xs text-subtle">
            Vance County, North Carolina &middot; May 2026
          </p>
        </div>
      </footer>
    </main>
  );
}

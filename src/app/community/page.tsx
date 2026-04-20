import type { Metadata } from "next";
import Link from "next/link";
import { hasVoted } from "./actions";
import PollForm from "./poll-form";
import PollResults from "./poll-results";

export const metadata: Metadata = {
  title: "Community Voice - Henderson-Vance FYI",
  description:
    "Share your opinion on data center development in Vance County. Anonymous community poll and live results.",
  openGraph: {
    title: "Community Voice - Henderson-Vance FYI",
    description:
      "How does Vance County feel about data centers? Share your voice.",
    type: "website",
  },
};

export const dynamic = "force-dynamic";

export default async function CommunityPage() {
  const alreadyVoted = await hasVoted();

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
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Community{" "}
            <span className="text-gold">Voice</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-muted md:text-xl">
            How does Vance County feel about data center development?
            This anonymous poll helps gauge community sentiment.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-sm text-subtle">
            Your response is completely anonymous. No names, no emails, no
            tracking. Results are public and available to anyone - commissioners,
            journalists, residents, and community organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-subtle">
            <a href="#poll" className="hover:text-gold transition">Take the Poll</a>
            <a href="#results" className="hover:text-gold transition">See Results</a>
            <a href="#petition" className="hover:text-gold transition">Petition</a>
          </div>
        </div>
      </section>

      {/* Poll */}
      <section id="poll" className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Anonymous Poll
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            Share Your Voice
          </h2>
          <p className="mb-10 text-muted">
            Five questions. Takes about 30 seconds. One response per person.
          </p>

          {alreadyVoted ? (
            <div className="rounded-lg border border-gold/30 bg-gold/5 p-8 text-center">
              <p className="text-2xl font-extrabold text-gold mb-2">Thank you.</p>
              <p className="text-muted">
                You&apos;ve already submitted a response. Scroll down to see current results.
              </p>
            </div>
          ) : (
            <PollForm />
          )}
        </div>
      </section>

      {/* Results */}
      <section id="results" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Live Data
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            Community Results
          </h2>
          <p className="mb-10 text-muted">
            Real-time results from community responses. This data is public and
            available to anyone who wants to understand how Vance County residents
            feel about data center development.
          </p>

          <PollResults />
        </div>
      </section>

      {/* Petition */}
      <section id="petition" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue">
            Take Action
          </p>
          <div className="mb-2 h-1 w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-extrabold">
            Community Petition
          </h2>
          <p className="mb-10 text-muted">
            A community-organized petition is active on Change.org. This petition
            was created by Henderson residents and is independent of this website.
          </p>

          <a
            href="https://www.change.org/p/stop-construction-of-data-center-in-henderson-nc?recruiter=49197166&recruited_by_id=c07f95a0-953f-0130-05f9-3c764e044346&utm_source=share_petition&utm_campaign=psf_promote_or_share&utm_term=psf_promote_or_share&utm_medium=facebook&share_id=dh6pxj68rM"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-card-border bg-card p-8 transition hover:border-gold/40 hover:bg-card/80"
          >
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-red">
              Change.org
            </p>
            <h3 className="mb-2 text-xl font-bold group-hover:text-gold transition">
              Stop Construction of Data Center in Henderson, NC
            </h3>
            <p className="mb-4 text-sm text-muted">
              Community petition urging the Vance County Board of Commissioners
              to vote NO on the data center rezoning. Created by Henderson
              residents.
            </p>
            <p className="text-sm font-semibold text-gold">
              View and sign the petition &rarr;
            </p>
          </a>

          <p className="mt-6 text-xs text-subtle text-center">
            Henderson-Vance FYI does not operate this petition. We link to it as a
            community resource.
          </p>
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

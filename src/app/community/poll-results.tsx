"use client";

import { useEffect, useState, useCallback } from "react";
import { getPollResults } from "./actions";
import type { PollData } from "./constants";
import {
  RESIDENCE_OPTIONS,
  INFORMED_LABELS,
  STANCE_LABELS,
  FORUM_OPTIONS,
  CONCERN_OPTIONS,
} from "./constants";

function Bar({
  label,
  count,
  total,
  color = "bg-gold",
}: {
  label: string;
  count: number;
  total: number;
  color?: string;
}) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="mb-2">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-muted">{label}</span>
        <span className="text-subtle">
          {count} ({pct}%)
        </span>
      </div>
      <div className="h-3 rounded-full bg-card-border overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function ScaleResult({
  title,
  data,
  labels,
  total,
  color = "bg-gold",
}: {
  title: string;
  data: Record<string, number>;
  labels: Record<number, string>;
  total: number;
  color?: string;
}) {
  // Calculate average
  let sum = 0;
  let count = 0;
  for (let i = 1; i <= 5; i++) {
    const n = data[String(i)] || 0;
    sum += i * n;
    count += n;
  }
  const avg = count > 0 ? (sum / count).toFixed(1) : "-";

  return (
    <div className="rounded-lg border border-card-border bg-card p-6">
      <div className="flex items-baseline justify-between mb-4">
        <p className="text-xs font-bold uppercase tracking-widest text-gold">
          {title}
        </p>
        <p className="text-sm text-muted">
          Avg: <span className="font-bold text-foreground">{avg}</span> / 5
        </p>
      </div>
      {[1, 2, 3, 4, 5].map((n) => (
        <Bar
          key={n}
          label={`${n} - ${labels[n]}`}
          count={data[String(n)] || 0}
          total={total}
          color={color}
        />
      ))}
    </div>
  );
}

function ResultSection({
  title,
  data,
  orderedKeys,
  total,
  color,
}: {
  title: string;
  data: Record<string, number>;
  orderedKeys: string[];
  total: number;
  color?: string;
}) {
  return (
    <div className="rounded-lg border border-card-border bg-card p-6">
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">
        {title}
      </p>
      {orderedKeys.map((key) => (
        <Bar
          key={key}
          label={key}
          count={data[key] || 0}
          total={total}
          color={color}
        />
      ))}
    </div>
  );
}

export default function PollResults() {
  const [data, setData] = useState<PollData | null>(null);
  const [localOnly, setLocalOnly] = useState(false);

  const fetchResults = useCallback(async () => {
    const results = await getPollResults(localOnly);
    setData(results);
  }, [localOnly]);

  useEffect(() => {
    fetchResults();
    const interval = setInterval(fetchResults, 30000);
    return () => clearInterval(interval);
  }, [fetchResults]);

  if (!data || data.total === 0) {
    return (
      <div className="rounded-lg border border-card-border bg-card p-8 text-center">
        <p className="text-muted">
          {localOnly
            ? "No local responses yet."
            : "No responses yet. Be the first to share your voice."}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Filter toggle */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-subtle">
          {data.total} response{data.total !== 1 ? "s" : ""}
          {localOnly ? " from local residents" : ""}.
          Updates every 30 seconds.
        </p>
        <button
          onClick={() => setLocalOnly(!localOnly)}
          className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
            localOnly
              ? "border-gold/60 bg-gold/10 text-gold"
              : "border-card-border bg-card text-muted hover:border-card-border/80"
          }`}
        >
          {localOnly ? "Local residents" : "All responses"}
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ScaleResult
          title="Community Stance"
          data={data.stance}
          labels={STANCE_LABELS}
          total={data.total}
        />
        <ScaleResult
          title="Knowledge Level"
          data={data.informed}
          labels={INFORMED_LABELS}
          total={data.total}
          color="bg-blue"
        />
        <ResultSection
          title="Public Forum"
          data={data.forum}
          orderedKeys={FORUM_OPTIONS}
          total={data.total}
          color="bg-blue"
        />
        <ResultSection
          title="Top Concerns"
          data={data.concerns}
          orderedKeys={CONCERN_OPTIONS}
          total={data.total}
        />
        {!localOnly && (
          <ResultSection
            title="Respondent Location"
            data={data.residence}
            orderedKeys={RESIDENCE_OPTIONS}
            total={data.total}
            color="bg-blue"
          />
        )}
      </div>
    </div>
  );
}

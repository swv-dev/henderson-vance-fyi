"use client";

import { useEffect, useState, useCallback } from "react";
import { getPollResults } from "./actions";
import type { PollData } from "./constants";
import { STANCE_OPTIONS, INFORMED_OPTIONS, FORUM_OPTIONS, CONCERN_OPTIONS } from "./constants";

function Bar({ label, count, total, color = "bg-gold" }: { label: string; count: number; total: number; color?: string }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="mb-2">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-muted">{label}</span>
        <span className="text-subtle">{count} ({pct}%)</span>
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
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">{title}</p>
      {orderedKeys.map((key) => (
        <Bar key={key} label={key} count={data[key] || 0} total={total} color={color} />
      ))}
    </div>
  );
}

export default function PollResults() {
  const [data, setData] = useState<PollData | null>(null);

  const fetchResults = useCallback(async () => {
    const results = await getPollResults();
    setData(results);
  }, []);

  useEffect(() => {
    fetchResults();
    const interval = setInterval(fetchResults, 30000);
    return () => clearInterval(interval);
  }, [fetchResults]);

  if (!data || data.total === 0) {
    return (
      <div className="rounded-lg border border-card-border bg-card p-8 text-center">
        <p className="text-muted">No responses yet. Be the first to share your voice.</p>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-6 text-sm text-subtle">
        {data.total} response{data.total !== 1 ? "s" : ""} so far. Results update every 30 seconds.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <ResultSection
          title="Community Stance"
          data={data.stance}
          orderedKeys={STANCE_OPTIONS}
          total={data.total}
        />
        <ResultSection
          title="Knowledge Level"
          data={data.informed}
          orderedKeys={INFORMED_OPTIONS}
          total={data.total}
          color="bg-blue"
        />
        <ResultSection
          title="Public Forum Interest"
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
      </div>
    </div>
  );
}

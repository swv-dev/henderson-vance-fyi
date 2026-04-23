"use client";

import { useState } from "react";
import { getSignups } from "./actions";

type Signup = {
  name: string;
  email: string;
  phone: string;
  county: string;
  roles: string[];
  message: string;
  timestamp: string;
};

export default function AdminPanel() {
  const [key, setKey] = useState("");
  const [signups, setSignups] = useState<Signup[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");

  async function handleLoad() {
    setError("");
    const result = await getSignups(key);
    if (result.success) {
      setSignups(result.signups);
      setLoaded(true);
    } else {
      setError(result.error ?? "Failed to load.");
    }
  }

  function exportCSV() {
    const headers = ["Name", "Email", "Phone", "County", "Roles", "Message", "Signed Up"];
    const rows = filtered.map((s) => [
      s.name,
      s.email,
      s.phone,
      s.county,
      s.roles.join("; "),
      s.message?.replace(/"/g, '""') || "",
      new Date(s.timestamp).toLocaleDateString(),
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sb214-signups-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const filtered = filter
    ? signups.filter((s) => s.county === filter)
    : signups;

  const counties = [...new Set(signups.map((s) => s.county))].sort();

  const roleCounts: Record<string, number> = {};
  signups.forEach((s) =>
    s.roles.forEach((r) => {
      roleCounts[r] = (roleCounts[r] || 0) + 1;
    })
  );

  if (!loaded) {
    return (
      <div className="mx-auto max-w-md mt-20 p-8">
        <h1 className="text-2xl font-extrabold mb-6 text-center">SB 214 Signups</h1>
        {error && (
          <div className="rounded border border-red/30 bg-red/10 p-3 text-sm text-red mb-4">
            {error}
          </div>
        )}
        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLoad()}
          placeholder="Admin key"
          className="w-full rounded border border-card-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-subtle focus:border-gold focus:outline-none mb-4"
        />
        <button
          onClick={handleLoad}
          className="w-full rounded bg-gold px-6 py-3 text-sm font-bold uppercase tracking-widest text-background hover:bg-gold-dim transition"
        >
          Load Signups
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-extrabold">SB 214 Signups</h1>
          <p className="text-sm text-muted">{signups.length} total</p>
        </div>
        <div className="flex gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded border border-card-border bg-card px-3 py-2 text-sm text-foreground focus:border-gold focus:outline-none"
          >
            <option value="">All Counties</option>
            {counties.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <button
            onClick={exportCSV}
            className="rounded bg-gold px-4 py-2 text-sm font-bold uppercase tracking-widest text-background hover:bg-gold-dim transition"
          >
            Export CSV
          </button>
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {counties.map((c) => (
          <div key={c} className="rounded border border-card-border bg-card p-4">
            <p className="text-xl font-extrabold text-gold">
              {signups.filter((s) => s.county === c).length}
            </p>
            <p className="text-xs text-muted">{c} County</p>
          </div>
        ))}
      </div>

      {/* Role breakdown */}
      <div className="rounded border border-card-border bg-card p-4 mb-8">
        <p className="text-sm font-bold text-foreground mb-3">Willing to:</p>
        <div className="flex flex-wrap gap-3">
          {Object.entries(roleCounts)
            .sort((a, b) => b[1] - a[1])
            .map(([role, count]) => (
              <span
                key={role}
                className="rounded bg-navy-light px-3 py-1 text-xs text-muted"
              >
                {role}: <strong className="text-foreground">{count}</strong>
              </span>
            ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-card-border">
              <th className="py-2 text-left text-gold font-semibold">Name</th>
              <th className="py-2 text-left text-gold font-semibold">Email</th>
              <th className="py-2 text-left text-gold font-semibold">Phone</th>
              <th className="py-2 text-left text-gold font-semibold">County</th>
              <th className="py-2 text-left text-gold font-semibold">Roles</th>
              <th className="py-2 text-left text-gold font-semibold">Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s, i) => (
              <tr key={i} className="border-b border-card-border/50 hover:bg-navy-light/50">
                <td className="py-2 text-foreground">{s.name}</td>
                <td className="py-2">
                  <a href={`mailto:${s.email}`} className="text-blue hover:text-gold transition">
                    {s.email}
                  </a>
                </td>
                <td className="py-2 text-muted">{s.phone || "-"}</td>
                <td className="py-2 text-muted">{s.county}</td>
                <td className="py-2 text-muted text-xs">{s.roles.join(", ") || "-"}</td>
                <td className="py-2 text-subtle text-xs">
                  {new Date(s.timestamp).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted py-8">No signups yet.</p>
      )}
    </div>
  );
}

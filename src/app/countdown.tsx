"use client";

import { useEffect, useState } from "react";

const MEETING_TIME = new Date("2026-04-20T16:00:00-04:00").getTime();

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const diff = MEETING_TIME - now;

  if (diff <= 0) {
    return (
      <p className="mt-4 text-lg font-extrabold text-red animate-pulse">
        Meeting is happening now.
      </p>
    );
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const units = [
    { label: "days", value: days },
    { label: "hrs", value: hours },
    { label: "min", value: minutes },
    { label: "sec", value: seconds },
  ].filter((u) => u.value > 0 || u.label === "sec");

  return (
    <div className="mt-6 flex justify-center gap-4">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <span className="text-3xl font-extrabold tabular-nums text-red md:text-4xl">
            {pad(u.value)}
          </span>
          <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-subtle">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}

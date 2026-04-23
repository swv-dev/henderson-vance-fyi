"use client";

import { useState } from "react";
import { submitSignup } from "./actions";

export default function SignupForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [count, setCount] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const result = await submitSignup(formData);
    if (result.success) {
      setStatus("success");
      setCount(result.count ?? null);
      form.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-gold/30 bg-gold/10 p-8 text-center">
        <p className="text-2xl font-extrabold text-gold mb-2">You are in.</p>
        <p className="text-muted">
          {count && count > 1
            ? `You are one of ${count} people who have signed up.`
            : "You are the first to sign up."}
        </p>
        <p className="mt-4 text-sm text-subtle">
          We will reach out before April 29 with details on how to show up together.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="rounded border border-red/30 bg-red/10 p-4 text-sm text-red">
          {errorMsg}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1">
            Name <span className="text-red">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded border border-card-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-subtle focus:border-gold focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1">
            Email <span className="text-red">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded border border-card-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-subtle focus:border-gold focus:outline-none"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1">
            Phone <span className="text-subtle text-xs">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded border border-card-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-subtle focus:border-gold focus:outline-none"
            placeholder="(555) 555-5555"
          />
        </div>
        <div>
          <label htmlFor="county" className="block text-sm font-semibold text-foreground mb-1">
            County <span className="text-red">*</span>
          </label>
          <select
            id="county"
            name="county"
            required
            className="w-full rounded border border-card-border bg-card px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none"
          >
            <option value="">Select your county</option>
            <option value="Vance">Vance County</option>
            <option value="Warren">Warren County</option>
            <option value="Halifax">Halifax County</option>
            <option value="Granville">Granville County</option>
            <option value="Franklin">Franklin County</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-foreground mb-3">
          I am willing to: <span className="text-subtle text-xs">(check all that apply)</span>
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { id: "role-calls", label: "Call my representatives" },
            { id: "role-vgcc", label: "Attend VGCC on April 29" },
            { id: "role-ga", label: "Go to the General Assembly" },
            { id: "role-protest", label: "Participate in a silent protest" },
            { id: "role-speak", label: "Speak at public meetings" },
            { id: "role-share", label: "Share information on social media" },
            { id: "role-organize", label: "Help organize in my community" },
          ].map((role) => (
            <label
              key={role.id}
              htmlFor={role.id}
              className="flex items-center gap-3 rounded border border-card-border bg-card px-4 py-3 text-sm text-muted cursor-pointer hover:border-gold/40 transition"
            >
              <input
                type="checkbox"
                id={role.id}
                name={role.id}
                className="h-4 w-4 rounded border-card-border accent-gold"
              />
              {role.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1">
          Anything else? <span className="text-subtle text-xs">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full rounded border border-card-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-subtle focus:border-gold focus:outline-none resize-none"
          placeholder="Skills, connections, ideas, questions..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-background transition hover:bg-gold-dim disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting..." : "Count Me In"}
      </button>

      <div className="rounded border border-card-border bg-card p-4 text-center">
        <p className="text-xs text-subtle mb-2">
          <strong className="text-muted">Your data is encrypted and secure.</strong>
        </p>
        <p className="text-xs text-subtle">
          All submissions are encrypted with AES-256-GCM before storage. Your
          information is transmitted over HTTPS and will only be used to
          coordinate this advocacy effort. It will not be shared publicly, sold,
          or provided to any third party.
        </p>
      </div>
    </form>
  );
}

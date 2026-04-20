"use client";

import { useState, useTransition } from "react";
import { submitPoll } from "./actions";
import {
  RESIDENCE_OPTIONS,
  INFORMED_OPTIONS,
  STANCE_OPTIONS,
  FORUM_OPTIONS,
  CONCERN_OPTIONS,
} from "./constants";

function RadioGroup({
  name,
  label,
  options,
  value,
  onChange,
}: {
  name: string;
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="mb-8">
      <legend className="mb-3 text-sm font-bold text-foreground">{label}</legend>
      <div className="space-y-2">
        {options.map((opt) => (
          <label
            key={opt}
            className={`flex items-center gap-3 rounded-lg border p-3 text-sm cursor-pointer transition ${
              value === opt
                ? "border-gold/60 bg-gold/10 text-foreground"
                : "border-card-border bg-card text-muted hover:border-card-border/80"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="sr-only"
            />
            <span
              className={`h-4 w-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                value === opt ? "border-gold" : "border-subtle"
              }`}
            >
              {value === opt && <span className="h-2 w-2 rounded-full bg-gold" />}
            </span>
            {opt}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function CheckboxGroup({
  name,
  label,
  options,
  values,
  onChange,
}: {
  name: string;
  label: string;
  options: string[];
  values: string[];
  onChange: (v: string[]) => void;
}) {
  const toggle = (opt: string) => {
    if (values.includes(opt)) {
      onChange(values.filter((v) => v !== opt));
    } else {
      onChange([...values, opt]);
    }
  };

  return (
    <fieldset className="mb-8">
      <legend className="mb-1 text-sm font-bold text-foreground">{label}</legend>
      <p className="mb-3 text-xs text-subtle">Select all that apply</p>
      <div className="space-y-2">
        {options.map((opt) => (
          <label
            key={opt}
            className={`flex items-center gap-3 rounded-lg border p-3 text-sm cursor-pointer transition ${
              values.includes(opt)
                ? "border-gold/60 bg-gold/10 text-foreground"
                : "border-card-border bg-card text-muted hover:border-card-border/80"
            }`}
          >
            <input
              type="checkbox"
              name={name}
              value={opt}
              checked={values.includes(opt)}
              onChange={() => toggle(opt)}
              className="sr-only"
            />
            <span
              className={`h-4 w-4 rounded border flex items-center justify-center flex-shrink-0 ${
                values.includes(opt) ? "border-gold bg-gold" : "border-subtle"
              }`}
            >
              {values.includes(opt) && (
                <svg className="h-3 w-3 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
            {opt}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function PollForm() {
  const [residence, setResidence] = useState("");
  const [informed, setInformed] = useState("");
  const [stance, setStance] = useState("");
  const [forum, setForum] = useState("");
  const [concerns, setConcerns] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    setError("");
    if (!residence || !informed || !stance || !forum || concerns.length === 0) {
      setError("Please answer all questions before submitting.");
      return;
    }

    const formData = new FormData();
    formData.set("residence", residence);
    formData.set("informed", informed);
    formData.set("stance", stance);
    formData.set("forum", forum);
    for (const c of concerns) {
      formData.append("concerns", c);
    }

    startTransition(async () => {
      const result = await submitPoll(formData);
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.error || "Something went wrong.");
      }
    });
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-gold/30 bg-gold/5 p-8 text-center">
        <p className="text-2xl font-extrabold text-gold mb-2">Thank you.</p>
        <p className="text-muted">
          Your response has been recorded. Results are updated in real time below.
        </p>
      </div>
    );
  }

  return (
    <div>
      <RadioGroup
        name="residence"
        label="1. Do you live in Vance County or Henderson?"
        options={RESIDENCE_OPTIONS}
        value={residence}
        onChange={setResidence}
      />
      <RadioGroup
        name="informed"
        label="2. How informed do you feel about data center development in Vance County?"
        options={INFORMED_OPTIONS}
        value={informed}
        onChange={setInformed}
      />
      <RadioGroup
        name="stance"
        label="3. How do you feel about data center development in Vance County?"
        options={STANCE_OPTIONS}
        value={stance}
        onChange={setStance}
      />
      <RadioGroup
        name="forum"
        label="4. Would you attend a public forum to learn more about the developers and proposals?"
        options={FORUM_OPTIONS}
        value={forum}
        onChange={setForum}
      />
      <CheckboxGroup
        name="concerns"
        label="5. What concerns you most about data center development?"
        options={CONCERN_OPTIONS}
        values={concerns}
        onChange={setConcerns}
      />

      {error && (
        <p className="mb-4 rounded border border-red/40 bg-red/10 p-3 text-sm text-red">
          {error}
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={isPending}
        className="w-full rounded bg-gold px-8 py-3 text-sm font-bold uppercase tracking-widest text-background transition hover:bg-gold-dim disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Submitting..." : "Submit Response"}
      </button>
    </div>
  );
}

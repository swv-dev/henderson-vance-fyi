export type PollData = {
  residence: Record<string, number>;
  informed: Record<string, number>;
  stance: Record<string, number>;
  forum: Record<string, number>;
  concerns: Record<string, number>;
  total: number;
};

export const RESIDENCE_OPTIONS = [
  "City of Henderson",
  "Vance County (outside city limits)",
  "Neighboring county",
  "I don't live in the area",
];

export const LOCAL_RESIDENCES = [
  "City of Henderson",
  "Vance County (outside city limits)",
];

export const INFORMED_LABELS: Record<number, string> = {
  1: "Not at all",
  2: "Slightly",
  3: "Somewhat",
  4: "Well informed",
  5: "Very informed",
};

export const STANCE_LABELS: Record<number, string> = {
  1: "Strongly oppose",
  2: "Oppose",
  3: "Neutral",
  4: "Support",
  5: "Strongly support",
};

export const FORUM_OPTIONS = ["Yes", "No"];

export const CONCERN_OPTIONS = [
  "Water usage",
  "Noise and vibration",
  "Property values",
  "Electric rates",
  "Environmental impact",
  "Traffic and infrastructure",
  "None",
];

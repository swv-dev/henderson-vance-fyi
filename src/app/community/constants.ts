export type PollData = {
  residence: Record<string, number>;
  informed: Record<string, number>;
  stance: Record<string, number>;
  forum: Record<string, number>;
  concerns: Record<string, number>;
  total: number;
};

export const RESIDENCE_OPTIONS = [
  "Vance County resident",
  "City of Henderson resident",
  "Neighboring county",
  "Other",
];

export const INFORMED_OPTIONS = [
  "Very informed",
  "Somewhat informed",
  "Not very informed",
  "Not at all informed",
];

export const STANCE_OPTIONS = [
  "Strongly support",
  "Support",
  "Undecided",
  "Oppose",
  "Strongly oppose",
];

export const FORUM_OPTIONS = ["Yes", "Maybe", "No"];

export const CONCERN_OPTIONS = [
  "Water usage",
  "Noise",
  "Property values",
  "Electric bills",
  "Jobs and economy",
  "Environmental impact",
  "None - I support it",
];

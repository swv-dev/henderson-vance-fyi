"use server";

import { kv } from "@vercel/kv";
import { encrypt } from "./crypto";

export type SignupData = {
  name: string;
  email: string;
  phone: string;
  county: string;
  roles: string[];
  message: string;
  timestamp: string;
};

export async function submitSignup(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const county = formData.get("county") as string;
  const message = formData.get("message") as string;

  const roles: string[] = [];
  if (formData.get("role-calls")) roles.push("Phone calls to reps");
  if (formData.get("role-vgcc")) roles.push("Attend VGCC April 29");
  if (formData.get("role-ga")) roles.push("Go to General Assembly");
  if (formData.get("role-protest")) roles.push("Silent protest");
  if (formData.get("role-speak")) roles.push("Speak at public meetings");
  if (formData.get("role-share")) roles.push("Share on social media");
  if (formData.get("role-organize")) roles.push("Help organize locally");

  if (!name || !email || !county) {
    return { success: false, error: "Name, email, and county are required." };
  }

  const signup: SignupData = {
    name,
    email,
    phone,
    county,
    roles,
    message,
    timestamp: new Date().toISOString(),
  };

  try {
    // Encrypt the entire signup record before storing
    const encrypted = encrypt(JSON.stringify(signup));
    await kv.lpush("sb214-signups", encrypted);
    const count = await kv.llen("sb214-signups");
    return { success: true, count };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function getSignupCount() {
  try {
    const count = await kv.llen("sb214-signups");
    return count ?? 0;
  } catch {
    return 0;
  }
}

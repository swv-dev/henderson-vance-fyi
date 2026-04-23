"use server";

import { kv } from "@vercel/kv";
import { decrypt } from "../crypto";
import type { SignupData } from "../actions";

const ADMIN_KEY = process.env.ADMIN_KEY || "sb214admin";

export async function getSignups(key: string) {
  if (key !== ADMIN_KEY) {
    return { success: false, error: "Invalid key.", signups: [] };
  }

  try {
    const raw = await kv.lrange("sb214-signups", 0, -1);
    const signups: SignupData[] = raw.map((item) => {
      const str = typeof item === "string" ? item : JSON.stringify(item);
      // Check if data is encrypted (contains two colons for iv:tag:ciphertext format)
      if (str.includes(":") && !str.startsWith("{")) {
        return JSON.parse(decrypt(str));
      }
      // Fallback for any pre-encryption records
      return typeof item === "string" ? JSON.parse(item) : item;
    });
    return { success: true, signups };
  } catch {
    return { success: false, error: "Failed to load signups.", signups: [] };
  }
}

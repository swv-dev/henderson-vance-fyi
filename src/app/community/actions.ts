"use server";

import { kv } from "@vercel/kv";
import { cookies } from "next/headers";
import {
  RESIDENCE_OPTIONS,
  INFORMED_OPTIONS,
  STANCE_OPTIONS,
  FORUM_OPTIONS,
  CONCERN_OPTIONS,
} from "./constants";
import type { PollData } from "./constants";

export async function submitPoll(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const cookieStore = await cookies();
  const voted = cookieStore.get("hv-poll-voted");

  if (voted) {
    return { success: false, error: "You have already submitted a response." };
  }

  const residence = formData.get("residence") as string;
  const informed = formData.get("informed") as string;
  const stance = formData.get("stance") as string;
  const forum = formData.get("forum") as string;
  const concernsRaw = formData.getAll("concerns") as string[];

  if (!residence || !informed || !stance || !forum || concernsRaw.length === 0) {
    return { success: false, error: "Please answer all questions." };
  }

  if (!RESIDENCE_OPTIONS.includes(residence)) return { success: false, error: "Invalid residence selection." };
  if (!INFORMED_OPTIONS.includes(informed)) return { success: false, error: "Invalid informed selection." };
  if (!STANCE_OPTIONS.includes(stance)) return { success: false, error: "Invalid stance selection." };
  if (!FORUM_OPTIONS.includes(forum)) return { success: false, error: "Invalid forum selection." };
  for (const c of concernsRaw) {
    if (!CONCERN_OPTIONS.includes(c)) return { success: false, error: "Invalid concern selection." };
  }

  try {
    await kv.hincrby("poll:residence", residence, 1);
    await kv.hincrby("poll:informed", informed, 1);
    await kv.hincrby("poll:stance", stance, 1);
    await kv.hincrby("poll:forum", forum, 1);
    for (const concern of concernsRaw) {
      await kv.hincrby("poll:concerns", concern, 1);
    }
    await kv.incr("poll:total");

    cookieStore.set("hv-poll-voted", "1", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });

    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function getPollResults(): Promise<PollData> {
  try {
    const [residence, informed, stance, forum, concerns, total] = await Promise.all([
      kv.hgetall("poll:residence") as Promise<Record<string, number> | null>,
      kv.hgetall("poll:informed") as Promise<Record<string, number> | null>,
      kv.hgetall("poll:stance") as Promise<Record<string, number> | null>,
      kv.hgetall("poll:forum") as Promise<Record<string, number> | null>,
      kv.hgetall("poll:concerns") as Promise<Record<string, number> | null>,
      kv.get("poll:total") as Promise<number | null>,
    ]);

    return {
      residence: residence || {},
      informed: informed || {},
      stance: stance || {},
      forum: forum || {},
      concerns: concerns || {},
      total: total || 0,
    };
  } catch {
    return { residence: {}, informed: {}, stance: {}, forum: {}, concerns: {}, total: 0 };
  }
}

export async function hasVoted(): Promise<boolean> {
  const cookieStore = await cookies();
  return !!cookieStore.get("hv-poll-voted");
}

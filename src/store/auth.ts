import { atom } from "jotai";
import type { Session } from "@supabase/supabase-js";

export const userAtom = atom<Session | null>(null);;
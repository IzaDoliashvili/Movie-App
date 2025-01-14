import { supabase } from "../../supabase";
import { Database } from "../supabase.types";

export const fillProfileInfo =  async (
  data: Database["public"]["Tables"]["profile"]["Insert"],
) => {
  return supabase.from("profile").upsert(data);
};

export const getProfileInfo = (id: string | number) => {
    return supabase.from("profile").select("*").eq("id", id).single();;
  };

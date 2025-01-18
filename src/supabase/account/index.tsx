
import { supabase } from "../../supabase";
import { Database } from "../supabase.types";
import { UserProfile } from "../../types";

export const fillProfileInfo =  async (
  data: Database["public"]["Tables"]["profile"]["Insert"],
) => {
  return supabase.from("profile").upsert(data);
};

export const getProfileInfo = async (id: string | number): Promise<UserProfile | null> => {
  const response = await supabase
    .from("profile")
    .select("*")
    .eq("id", String(id))
    .single();

  if (response.error) {
    console.error("Error fetching profile:", response.error);
    return null;
  }

  return response.data as UserProfile | null;
};




// export const getProfileInfo = (id: string) => {
//     return supabase.from("profile").select("*").eq("id", id).single();;
//   };

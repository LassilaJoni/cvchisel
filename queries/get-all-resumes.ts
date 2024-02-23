import { TypedSupabaseClient } from "@/utils/supabase";


export function getAllResumes(
    client: TypedSupabaseClient, 
  ) {
    return client
      .from("resumes")
      .select("*")
  }
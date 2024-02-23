import { TypedSupabaseClient } from "@/utils/supabase";


export function getResumeById(
    client: TypedSupabaseClient, 
    resumeId: string,
    userId: string
  ) {
    return client
      .from("resumes")
      .select(`
        id,
        title
      `)
      .eq("id", resumeId)
      .eq("user", userId)
      .throwOnError()
      .single();
  }
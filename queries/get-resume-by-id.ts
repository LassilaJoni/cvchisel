import { TypedSupabaseClient } from "@/utils/supabase";


export function getResumeById(
    client: TypedSupabaseClient, 
    resumeId: string,
  ) {
    return client
      .from("resumes")
      .select(`
        id,
        title,
        data
      `)
      .eq("id", resumeId)
      .throwOnError()
      .single();
  }
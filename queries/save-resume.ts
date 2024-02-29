import { TypedSupabaseClient } from "@/utils/supabase";

export function saveResume(
    client: TypedSupabaseClient, 
    resumeId: string,
    resume: any,
  ) {
    return client
    .from("resumes")
    .upsert({ id: resumeId, data: resume })
  }
    
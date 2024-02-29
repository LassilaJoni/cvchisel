import { getResumeById } from "@/queries/get-resume-by-id";
import { TypedSupabaseClient } from "@/utils/supabase";

function useResumeQuery({resumeId, client} : {resumeId: string, client: TypedSupabaseClient}) {
    
    const queryKey = ["resumes", resumeId];
   
    const queryFn = async () => {
      return getResumeById(client,resumeId).then(
        (result) => result.data
      ); 
    };
   
    return { queryKey, queryFn };
  }
   
  export default useResumeQuery;
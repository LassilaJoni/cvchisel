import { getResumeById } from "@/queries/get-resume-by-id";
import useSupabase from "./useSupabase";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/app/utils/supabaseClient";

function useResumeQuery(resumeId: string) {
    const client = useSupabase();
    const queryKey = ["resumes", resumeId];
   
    const queryFn = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data || !data.user) {
        throw new Error("User not logged in");
      }

      return getResumeById(client,resumeId, data.user.id).then(
        (result) => result.data
      ); 
    };
   
    return useQuery({ queryKey, queryFn });
  }
   
  export default useResumeQuery;
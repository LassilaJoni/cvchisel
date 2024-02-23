import useSupabase from "./useSupabase";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/app/utils/supabaseClient";
import { getAllResumes } from "@/queries/get-all-resumes";

function useAllResumeQuery() {
    const client = useSupabase();
    const queryKey = ["resumes"];
   
    const queryFn = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data || !data.user) {
        throw new Error("User not logged in");
      }

      return getAllResumes(client).then(
        (result) => result.data
      )
    };
   
    return useQuery({ queryKey, queryFn });

  }
   
  export default useAllResumeQuery;
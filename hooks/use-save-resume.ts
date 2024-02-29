import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { aggregateData } from "@/app/utils/aggregateData";

function useSaveCV() {
  const supabase = useSupabase();
  const queryClient = useQueryClient();

  return useMutation(
    async (data: any) => {
      const { data: savedResume, error } = await supabase
        .from("resumes")
        .insert(data) // Assuming you want the saved data back
        .single();

      if (error) throw error;
      return savedResume;
    },
    {
      onSuccess: () => {
        // You might want to do something after a successful save,
        // like invalidate other queries to refetch updated resume lists.
        queryClient.invalidateQueries(/* Queries to refetch */); 
      },
    }
  );
}

export default useSaveCV;
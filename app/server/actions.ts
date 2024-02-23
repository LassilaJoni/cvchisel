"use server"
import { revalidatePath } from "next/cache";
import { supabaseServer } from "../utils/supabaseServer";

export async function createResume (title: string, userId: string) {
  const { data, error } = await supabaseServer
    .from("resumes")
    .insert([
      {
        title: title,
        data: { name: "John Doe", age: "30", city: "New York" },
        userId: userId,
        user: userId
			},
    ])

	if (error) {
    console.error("Error inserting data:", error)
	} else {
    console.log("Data inserted:", data)
	}
  revalidatePath("/dashboard/resumes")
}

export async function getAllResumes () {


  try {
  const data = await supabaseServer
    .from("resumes")
    .select("*")
  
    return { data }
  } catch (error) {
    return { error: error }
  }


}

export async function getResumeById (resumeId: string, userId: string) {
  const { data, error } = await supabaseServer
    .from("resumes")
    .select("id, title, data")
    .eq("id", resumeId)
    .eq("user", userId)
    .single()

  if (error) {
    console.error("Error getting resume:", error)
		throw error
	}
  console.log("Resume:", data)
	return data
}

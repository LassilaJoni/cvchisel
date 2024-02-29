"use server"
import { revalidatePath } from "next/cache";
import { supabaseServer } from "../utils/supabaseServer";

export async function createResume (title: string) {
  const { data, error } = await supabaseServer
    .from("resumes")
    .insert([
      {
        title: title,
        data: { name: "John Doe", age: "30", city: "New York" },
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

export async function getResumeById (resumeId: string) {
  const { data, error } = await supabaseServer
    .from("resumes")
    .select("id, title, data")
    .eq("id", resumeId)
    .single()

  if (error) {
    console.error("Error getting resume:", error)
		throw error
	}
  console.log("Resume:", data)
	return data
}

export async function updateResumeById (resumeId: string, data: string) {
  const { data: queryData, error } = await supabaseServer
    .from("resumes")
    .update({ data: data })
    .eq("id", resumeId)

  if (error) {
    console.error("Error updating resume:", error)
    throw error
  }
  console.log("Resume updated:", queryData)
  revalidatePath("/dashboard/resumes")
}
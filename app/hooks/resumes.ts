import { supabase } from "../utils/supabaseClient";

export async function createResume (title: string, userId: string) {
  const { data, error } = await supabase
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
}

export async function getAllResumes (userId: string) {
  const { data, error } = await supabase
    .from("resumes")
    .select("*")
    .eq("user", userId)

  if (error) {
    console.error("Error getting resumes:", error)
		throw error
	}

  console.log("Resumes:", data)
	return data
}

export async function getResumeById (resumeId: string, userId: string) {
  const { data, error } = await supabase
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

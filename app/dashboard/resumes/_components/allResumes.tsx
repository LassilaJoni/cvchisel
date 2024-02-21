"use client";
import React from "react";
import { supabase } from "@/app/utils/supabaseClient";
import ResumeCard from "./resumeCard";
import { IResume } from "@/lib/types";

export default function Resumes() {
  const [resumes, setResumes] = React.useState<IResume[] | null>(null);
  const [fetchError, setFetchError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchResumes = async () => {
      const { data: resumes, error } = await supabase
        .from("resumes")
        .select("id, title");

      if (error) {
        setFetchError(true);
        console.error("Error fetching resumes:", error);
      }
      if (resumes) {
        setResumes(resumes);
        setFetchError(false);
      }
      console.log("Resumes:", resumes);

      setLoading(false);
    };

    fetchResumes();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!resumes || resumes.length === 0) {
    return <p>No resumes found.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Resumes</h1>
      <div className="flex flex-wrap gap-4 justify-start">
        {fetchError && <p>Error fetching resumes :(</p>}
        {resumes.map((resume) => (
          <li key={resume.id} className="w-[calc(33vh)] mb-4 list-none">
            <ResumeCard id={resume.id} title={resume.title} />
          </li>
        ))}
      </div>
    </div>
  );
}

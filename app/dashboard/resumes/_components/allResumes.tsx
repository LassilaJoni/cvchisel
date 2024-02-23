"use client";
import React from "react";
import ResumeCard from "./resumeCard";
import useAllResumeQuery from "@/hooks/use-all-resumes-query";

export default function Resumes() {
  const { data: resumes, isLoading, isError } = useAllResumeQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!resumes || resumes.length === 0) {
    return <p>No resumes found.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Resumes</h1>
      <div className="flex flex-wrap gap-4 justify-start">
        {isError && <p>Error fetching resumes :(</p>}
        {resumes.map((resume) => (
          <li key={resume.id} className="w-[calc(33vh)] mb-4 list-none">
            <ResumeCard id={resume.id} title={resume.title} />
          </li>
        ))}
      </div>
    </div>
  );
}

"use client";
import useResumeQuery from "@/hooks/use-resume-query";

export default function ResumePage({ params }: { params: { id: string } }) {
  const { data: resume, isLoading, isError } = useResumeQuery(params.id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <h1>{resume?.title}</h1>
    </div>
  );
}

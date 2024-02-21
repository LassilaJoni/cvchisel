"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/utils/supabaseClient";
import { getResumeById } from "@/app/hooks/resumes";
import { IResume } from "@/lib/types";

interface ResumeProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: ResumeProps) => {
  const [resume, setResume] = React.useState<IResume | null>(null);
  const [loading, setLoading] = React.useState(true);

  const router = useRouter();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (data.user) {
          const payload = await getResumeById(params.id, data.user.id);
          setResume(payload);
        } else {
          router.push("/auth/login");
        }
      } catch (error) {
        console.error("Error fetching resume", error);
        // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id, router]);

  if (loading) return <div>Loading...</div>;
  if (!resume) return <div>Error: Resume not found</div>;

  return (
    <div>
      <h1>Resume</h1>
      <p>{params.id}</p>
      <pre>{JSON.stringify(resume, null, 2)}</pre>
    </div>
  );
};

export default Page;

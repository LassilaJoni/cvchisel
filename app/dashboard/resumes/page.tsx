import * as React from "react";

import CreateResumeCard from "./_components/createResumeCard";
import AllResumes from "./_components/allResumes";

export default async function ResumesLayout() {
  return (
    <div>
      <div className="w-full">
        <CreateResumeCard />
      </div>
      <div className="w-full">
        <AllResumes />
      </div>
    </div>
  );
}

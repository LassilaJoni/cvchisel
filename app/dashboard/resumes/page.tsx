import * as React from "react";

import CreateResumeCard from "./_components/createResumeCard";
import AllResumes from "./_components/allResumes";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default function ResumesLayout() {
  const { isAuthenticated } = getKindeServerSession();

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

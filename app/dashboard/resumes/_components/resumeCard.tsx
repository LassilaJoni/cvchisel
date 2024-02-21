"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface ResumeCardProps {
  id: string;
  title: string;
}

export default function ResumeCard({ id, title }: ResumeCardProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/workshop/${id}`);
  };

  return (
    <div onClick={handleClick} className="space-x-4">
      <Card className="h-[calc(33vh)] w-[calc(33vh)] cursor-pointer">
        <div className="flex flex-col items-center justify-center">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <div className="">
            <CardContent>
              <Plus size={60} />
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}

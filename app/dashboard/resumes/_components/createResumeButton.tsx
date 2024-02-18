"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { createResume } from "@/app/hooks/resumes";

const handleCreateResume = async () => {
  const userId = "user_id";
  try {
    await createResume(userId);
  } catch (error) {
    console.error("Error creating resume:", error);
  }
};

export default function CreateResumeButton() {
  return (
    <Button type="submit" onClick={handleCreateResume}>
      Create
    </Button>
  );
}

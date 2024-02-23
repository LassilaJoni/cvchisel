"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { supabase } from "@/app/utils/supabaseClient";
import { createResume } from "@/app/server/actions";
import { revalidatePath } from "next/cache";
/*
Gets the whole area of the place
h-[calc(100vh-140px)] lg:h-[calc(100vh-88px)]
*/

export default function CreateResumeCard() {
  const [title, setTitle] = React.useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleCreateResume = async () => {
    const { data } = await supabase.auth.getUser();

    try {
      if (data.user) {
        await createResume(title, data.user.id);
        revalidatePath("/dashboard/resumes");
      }
    } catch (error) {
      console.error("Error creating resume:", error);
    }
  };

  return (
    <div className="w-[calc(33vh)] mb-4">
      <Dialog>
        <DialogTrigger>
          <Card className="h-[calc(33vh)] w-[calc(33vh)] cursor-pointer">
            <div className="flex flex-col items-center justify-center">
              <CardHeader>
                <CardTitle>Create new resume</CardTitle>
              </CardHeader>
              <div className="">
                <CardContent>
                  <Plus size={60} />
                </CardContent>
              </div>
            </div>
          </Card>
        </DialogTrigger>
        {/*Dialog for opening new resume */}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              To start building your resume, please give it a name
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                className="col-span-3"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={handleCreateResume}>Create</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

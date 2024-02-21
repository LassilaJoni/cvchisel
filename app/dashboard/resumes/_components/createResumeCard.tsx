"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { set } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { supabase } from "@/app/utils/supabaseClient";
import { createResume } from "@/app/hooks/resumes";
/*
Gets the whole area of the place
h-[calc(100vh-140px)] lg:h-[calc(100vh-88px)]
*/

export default function CreateResumeCard() {
  const [title, setTitle] = React.useState("");

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleCreateResume = async () => {
    const { data, error } = await supabase.auth.getUser();

    try {
      await createResume(title, data.user.id);
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
            <Button onClick={handleCreateResume}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

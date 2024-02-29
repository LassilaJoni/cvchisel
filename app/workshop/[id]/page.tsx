"use client";
import * as React from "react";
import CVForm from "@/components/cv-form";
import CVPreview from "@/components/cv-preview";
import ControlBar from "@/components/cv-preview/control-bar";
import { Box, Flex } from "@chakra-ui/react";
import useResumeQuery from "@/hooks/use-resume-query";
import SaveCVButton from "@/components/cv-form/save-cv";
import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import useSaveCV from "@/hooks/use-save-resume";
import { aggregateData } from "@/app/utils/aggregateData";

export default function BuildCVPage({ params }: { params: { id: string } }) {
  const supabase = useSupabase();
  //const { data: resume, isLoading, isError } = useResumeQuery(params.id);
  const {
    data: resume,
    isLoading,
    isError,
  } = useQuery(useResumeQuery({ resumeId: params.id, client: supabase }));

  console.log("resume", resume);

  const [isSaving, setIsSaving] = React.useState(false);

  const handleSaveCV = async () => {
    setIsSaving(true);

    try {
      const aggregatedData = aggregateData();

      const { error } = await supabase
        .from("resumes")
        .update({ data: aggregatedData })
        .eq("id", params.id);

      if (error) throw error;

      console.log("CV saved successfully!");
    } catch (error) {
      console.error("Error saving CV:", error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <Flex
      height={"calc(100vh - 80px)"}
      width={"100%"}
      flexDirection={{ base: "column", lg: "row" }}
      className="print-area"
      gap={{ base: 10, lg: "unset" }}
    >
      <Flex
        minW={{ md: "400px" }}
        overflowX={{ base: "initial", lg: "hidden" }}
        overflowY={{ base: "initial", lg: "scroll" }}
        pr={{ lg: "40px" }}
        className={"not-print"}
        css={`
          /* width */
          ::-webkit-scrollbar {
            width: 10px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background: #fff2dc;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #ffebc8;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: #f3c679;
          }
        `}
      >
        <CVForm resumeData={resume} />
      </Flex>

      <Flex
        flexDirection={"column"}
        width={{ base: "100%", md: "calc(100% - 400px)" }}
        className="print-area"
      >
        <Box
          className="print-area"
          overflowX={"scroll"}
          overflowY={"scroll"}
          pl={{ base: "unset", lg: "50px" }}
          css={`
            ::-webkit-scrollbar {
              display: none;
            }
            -ms-overflow-style: none;
            scrollbar-width: none;
          `}
        >
          <CVPreview />
        </Box>
        <ControlBar />
        <SaveCVButton onClick={handleSaveCV} isLoading={isSaving} />
      </Flex>
    </Flex>
  );
}

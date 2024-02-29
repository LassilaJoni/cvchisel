import { Flex } from "@chakra-ui/react";
import BasicForm from "./basic";
import ProfessionalExperienceForm from "./professional-experience";
import EducationForm from "./education";
import ProjectForm from "./project";
import SkillForm from "./skill";

function CVForm({ resumeData }) {
  return (
    <Flex flexDirection={"column"} gap={8}>
      <BasicForm resumeData={resumeData} />
      <EducationForm />
      <ProfessionalExperienceForm />
      <ProjectForm />
      <SkillForm />
    </Flex>
  );
}

export default CVForm;

import useBasic from "@/app/stores/basic";
import useEducation from "@/app/stores/education";
import useProfessionalExperience from "@/app/stores/professional-experience";
import useProject from "@/app/stores/project";
import useSkill from "@/app/stores/skill";

export function aggregateData() {
  const basicInfo = useBasic.getState();
  const educationInfo = useEducation.getState();
  const professionalExperienceInfo = useProfessionalExperience.getState();
  const projectInfo = useProject.getState();
  const skillInfo = useSkill.getState();

  const dataToSave = {
    basicInfo: {
      name: basicInfo.name,
      email: basicInfo.email,
      website: basicInfo.website,
      location: basicInfo.location,
      phoneNumber: basicInfo.phoneNumber,
      wantedJobTitle: basicInfo.wantedJobTitle
    },
    educations: educationInfo.educations.map((education) => ({
      id: education.id,
      schoolName: education.schoolName,
      date: education.date,
      degreeAndMajor: education.degreeAndMajor,
      gpa: education.gpa,
      description: education.description
    })),
    professionalExperiences: professionalExperienceInfo.experiences.map(
      (experience) => ({
        id: experience.id,
        companyName: experience.companyName,
        location: experience.location,
        jobTitle: experience.jobTitle,
        date: experience.date,
        description: experience.description
      })
    ),
    projects: projectInfo.projects.map((project) => ({
      id: project.id,
      projectName: project.projectName,
      date: project.date,
      description: project.description
    })),
    skills: skillInfo.skills 
  };

  return dataToSave;
}
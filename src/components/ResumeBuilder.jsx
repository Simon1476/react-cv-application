import PersonalInfo from "./PersonalInfo";
import Education from "./education/Education";
import ControlBtn from "./ControlBtn";
import Experience from "./Experience";

const ResumeBuilder = ({
  personInfo,
  handlePersonChange,
  educationInfo,
  handleEducationChange,
  handleDeleteEducation,
  handleAddEducation,
  experienceInfo,
  handleExperienceChange,
}) => {
  return (
    <div>
      <ControlBtn />
      <PersonalInfo
        personInfo={personInfo}
        handlePersonChange={handlePersonChange}
      />
      <Education
        educationInfo={educationInfo}
        handleEducationChange={handleEducationChange}
        handleDeleteEducation={handleDeleteEducation}
        handleAddEducation={handleAddEducation}
      />
      <Experience
        experienceInfo={experienceInfo}
        handleExperienceChange={handleExperienceChange}
      />
    </div>
  );
};

export default ResumeBuilder;

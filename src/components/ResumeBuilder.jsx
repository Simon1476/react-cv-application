import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import ControlBtn from "./ControlBtn";
import Experience from "./Experience";

const ResumeBuilder = ({
  personInfo,
  handlePersonChange,
  educationInfo,
  handleEducationChange,
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
      />
      <Experience
        experienceInfo={experienceInfo}
        handleExperienceChange={handleExperienceChange}
      />
    </div>
  );
};

export default ResumeBuilder;

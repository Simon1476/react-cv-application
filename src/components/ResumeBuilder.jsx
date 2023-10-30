import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import ControlBtn from "./ControlBtn";
import Experience from "./Experience";

const ResumeBuilder = ({ person, handlePersonChange }) => {
  return (
    <div>
      <ControlBtn />
      <PersonalInfo person={person} handlePersonChange={handlePersonChange} />
      <Education />
      <Experience />
    </div>
  );
};

export default ResumeBuilder;

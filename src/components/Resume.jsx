/* eslint-disable react/prop-types */
import InfoDisplay from "./InfoDisplay";
import EduDisplay from "./EduDisplay";
import ExpDisplay from "./ExpDisplay";

const Resume = ({ personInfo, educationInfo, experienceInfo }) => {
  return (
    <div className="resume">
      <InfoDisplay personInfo={personInfo} />
      <EduDisplay educationInfo={educationInfo} />
      <ExpDisplay experienceInfo={experienceInfo} />
    </div>
  );
};

export default Resume;

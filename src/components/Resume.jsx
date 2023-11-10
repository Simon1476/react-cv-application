/* eslint-disable react/prop-types */
import InfoDisplay from "./InfoDisplay";
import EduDisplay from "./education/EduDisplay";
import ExpDisplay from "./ExpDisplay";

const Resume = ({ personInfo, educationInfo, experienceInfo }) => {
  return (
    <div className="resume" style={{ height: "29.7cm", width: "21cm" }}>
      <InfoDisplay personInfo={personInfo} />
      <EduDisplay educationInfo={educationInfo} />
      <ExpDisplay experienceInfo={experienceInfo} />
    </div>
  );
};

export default Resume;

/* eslint-disable react/prop-types */
import InfoDisplay from "./InfoDisplay";
import EduDisplay from "./EduDisplay";
import ExpDisplay from "./ExpDisplay";

const Resume = ({ person }) => {
  return (
    <div className="resume">
      <InfoDisplay person={person} />
      <EduDisplay />
      <ExpDisplay />
    </div>
  );
};

export default Resume;

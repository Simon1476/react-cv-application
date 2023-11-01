import { useState } from "react";
import "../styles/Education.scss";
import EducationForm from "./EducationForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Education = ({ educationInfo, handleEducationChange }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Initialize the state variable

  const toggleExpand = () => {
    setIsExpanded(!isExpanded); // Toggle the state when the button is clicked
  };
  return (
    <div className="education">
      <button className="expand-btn" onClick={toggleExpand}>
        <h3>
          <FontAwesomeIcon icon={faGraduationCap} />
          Education
        </h3>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <EducationForm
        educationInfo={educationInfo}
        handleEducationChange={handleEducationChange}
      />
    </div>
  );
};

export default Education;

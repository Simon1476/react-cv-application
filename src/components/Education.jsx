import { useState } from "react";
import "../styles/Education.scss";
import EducationForm from "./EducationForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import EduList from "./EduList";

const Education = ({
  educationInfo,
  handleEducationChange,
  handleDeleteEducation,
}) => {
  const [isExpanded, setIsExpanded] = useState(true); // Initialize the state variable

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
      {isExpanded &&
        educationInfo.map((educationInfo) => (
          <EduList
            key={educationInfo.id}
            educationInfo={educationInfo}
            handleEducationChange={handleEducationChange}
            handleDeleteEducation={handleDeleteEducation}
            id={educationInfo.id}
          />
        ))}
    </div>
  );
};

export default Education;

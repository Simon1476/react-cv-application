import { useState } from "react";
import "../../styles/Education.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faChevronUp,
  faChevronDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import EduList from "./EduList";
import EduAddForm from "./EduAddForm";

const Education = ({
  educationInfo,
  handleEducationChange,
  handleDeleteEducation,
  handleAddEducation,
}) => {
  const [isExpanded, setIsExpanded] = useState(true); // Initialize the state variable
  const [isFormVisible, setIsFormVisible] = useState(false); // Initialize the state variable

  const toggleExpand = () => {
    setIsExpanded(!isExpanded); // Toggle the state when the button is clicked
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
    <div className="education">
      <button className="expand-btn" onClick={toggleExpand}>
        <h3>
          <FontAwesomeIcon icon={faGraduationCap} />
          Education
        </h3>
        {isExpanded ? (
          <FontAwesomeIcon icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} />
        )}
      </button>
      {isExpanded &&
        !isFormVisible &&
        educationInfo.map((educationInfo) => (
          <EduList
            key={educationInfo.id}
            educationInfo={educationInfo}
            handleEducationChange={handleEducationChange}
            handleDeleteEducation={handleDeleteEducation}
            id={educationInfo.id}
          />
        ))}
      {isFormVisible && (
        <EduAddForm
          closeForm={toggleFormVisibility}
          handleAddEducation={handleAddEducation}
        />
      )}
      <div className="plus">
        <button type="button" onClick={toggleFormVisibility}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default Education;

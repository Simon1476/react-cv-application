import { useState } from "react";
import "../../styles/Experience.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faChevronUp,
  faChevronDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import ExpList from "./ExpList";
import ExpAddForm from "./ExpAddForm";

const Experience = ({
  experienceInfo,
  handleExperienceChange,
  handleDeleteExperience,
  handleAddExperience,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="experience">
      <button className="expand-btn" onClick={toggleExpand}>
        <h3>
          <FontAwesomeIcon icon={faGraduationCap} />
          Experience
        </h3>
        {isExpanded ? (
          <FontAwesomeIcon icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} />
        )}
      </button>
      {isExpanded &&
        !isFormVisible &&
        experienceInfo.map((experienceInfo) => (
          <ExpList
            key={experienceInfo.id}
            experienceInfo={experienceInfo}
            handleExperienceChange={handleExperienceChange}
            handleDeleteExperience={handleDeleteExperience}
            id={experienceInfo.id}
          />
        ))}
      {isFormVisible && (
        <ExpAddForm
          closeForm={toggleFormVisibility}
          handleAddExperience={handleAddExperience}
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

export default Experience;

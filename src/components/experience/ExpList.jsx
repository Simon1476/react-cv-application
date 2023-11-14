import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

const ExpList = ({
  experienceInfo,
  handleExperienceChange,
  handleDeleteExperience,
  id,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
    <div className="explist">
      {isFormVisible ? (
        <ExperienceForm
          experienceInfo={experienceInfo}
          handleExperienceChange={handleExperienceChange}
          id={id}
          toggleFormVisibility={toggleFormVisibility}
          handleDeleteExperience={handleDeleteExperience}
        />
      ) : (
        <button onClick={toggleFormVisibility}>{experienceInfo.company}</button>
      )}
    </div>
  );
};

export default ExpList;

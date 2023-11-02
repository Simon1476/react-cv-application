import EducationForm from "./EducationForm";
import { useState } from "react";

const EduList = ({
  educationInfo,
  handleEducationChange,
  handleDeleteEducation,
  id,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="edulist">
      {isFormVisible ? (
        <EducationForm
          educationInfo={educationInfo}
          handleEducationChange={handleEducationChange}
          id={id}
          toggleFormVisibility={toggleFormVisibility}
          handleDeleteEducation={handleDeleteEducation}
        />
      ) : (
        <button onClick={toggleFormVisibility}>{educationInfo.school}</button>
      )}
    </div>
  );
};

export default EduList;

import { useState } from "react";
import "../../styles/EduAddform.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faPlus } from "@fortawesome/free-solid-svg-icons";
const EduAddForm = ({ closeForm, handleAddEducation }) => {
  const [addEduInfo, setAddEduInfo] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddEduInfo({
      ...addEduInfo,
      [name]: value,
    });
  };
  return (
    <div className="education-add-form ">
      <label htmlFor="school">School</label>
      <input
        type="text"
        id="school"
        name="school"
        placeholder="write school name"
        value={addEduInfo.school}
        onChange={handleInputChange}
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        id="degree"
        name="degree"
        placeholder="Harvard"
        value={addEduInfo.degree}
        onChange={handleInputChange}
      />
      <div className="dates-group">
        <div>
          <label>Start Date</label>
          <input
            type="text"
            name="startDate"
            placeholder="YYYY-MM-DD"
            value={addEduInfo.startDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="text"
            name="endDate"
            placeholder="YYYY-MM-DD"
            value={addEduInfo.endDate}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <label htmlFor="location">location</label>
      <input
        type="text"
        id="location"
        name="location"
        placeholder="Harvard"
        value={addEduInfo.location}
        onChange={handleInputChange}
      />
      <div className="btn-group">
        <button type="button" onClick={closeForm}>
          Cancel <FontAwesomeIcon icon={faBan} />
        </button>
        <button
          type="button"
          onClick={() => {
            handleAddEducation(addEduInfo);
            closeForm();
          }}
        >
          Add <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default EduAddForm;

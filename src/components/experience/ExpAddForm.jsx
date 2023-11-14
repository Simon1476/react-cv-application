import { useState } from "react";
import "../../styles/ExpAddform.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faPlus } from "@fortawesome/free-solid-svg-icons";

const ExpAddForm = ({ closeForm, handleAddExperience }) => {
  const [addExpInfo, setAddExpInfo] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
    degree: "", // Add this line
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddExpInfo({
      ...addExpInfo,
      [name]: value,
    });
  };

  return (
    <div className="experience-add-form ">
      <label htmlFor="company">Company Name</label>
      <input
        type="text"
        id="company"
        name="company"
        placeholder="Enter company name"
        value={addExpInfo.company}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        id="degree"
        name="degree"
        placeholder="Enter degree"
        value={addExpInfo.degree}
        onChange={handleInputChange}
        required
      />
      <div className="dates-group">
        <div>
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            placeholder="YYYY-MM-DD"
            value={addExpInfo.startDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            placeholder="YYYY-MM-DD"
            value={addExpInfo.endDate}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        name="location"
        placeholder="Enter location"
        value={addExpInfo.location}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Enter description"
        value={addExpInfo.description}
        onChange={handleInputChange}
        required
      />
      <div className="btn-group">
        <button type="button" onClick={closeForm}>
          Cancel <FontAwesomeIcon icon={faBan} />
        </button>
        <button
          type="button"
          onClick={() => {
            handleAddExperience(addExpInfo);
            closeForm();
          }}
        >
          Add <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default ExpAddForm;

import { useState } from "react";
import "../styles/EducationForm.scss";

const EducationForm = ({
  educationInfo,
  handleEducationChange,
  handleDeleteEducation,
  id,
  toggleFormVisibility,
}) => {
  const [initialValues, setInitialValues] = useState(educationInfo);

  const resetForm = () => {
    handleEducationChange(
      {
        target: {
          name: "school",
          value: initialValues.school,
        },
      },
      id
    );
    handleEducationChange(
      {
        target: {
          name: "degree",
          value: initialValues.degree,
        },
      },
      id
    );
    handleEducationChange(
      {
        target: {
          name: "startDate",
          value: initialValues.startDate,
        },
      },
      id
    );
    handleEducationChange(
      {
        target: {
          name: "endDate",
          value: initialValues.endDate,
        },
      },
      id
    );
    handleEducationChange(
      {
        target: {
          name: "location",
          value: initialValues.location,
        },
      },
      id
    );
    toggleFormVisibility(); // Close the form
  };

  return (
    <div className="education-form">
      <label htmlFor="school">School</label>
      <input
        type="text"
        id="school"
        name="school"
        placeholder="Harvard"
        value={educationInfo.school}
        onChange={(e) => {
          handleEducationChange(e, id);
        }}
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        id="degree"
        name="degree"
        placeholder="Harvard"
        value={educationInfo.degree}
        onChange={(e) => {
          handleEducationChange(e, id);
        }}
      />
      <div className="dates-group">
        <div>
          <label>Start Date</label>
          <input
            type="text"
            name="startDate"
            placeholder="YYYY-MM-DD"
            value={educationInfo.startDate}
            onChange={(e) => {
              handleEducationChange(e, id);
            }}
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="text"
            name="endDate"
            placeholder="YYYY-MM-DD"
            value={educationInfo.endDate}
            onChange={(e) => {
              handleEducationChange(e, id);
            }}
          />
        </div>
      </div>
      <label htmlFor="location">location</label>
      <input
        type="text"
        id="location"
        name="location"
        placeholder="Harvard"
        value={educationInfo.location}
        onChange={(e) => {
          handleEducationChange(e, id);
        }}
      />
      <div className="btns">
        <button
          type="button"
          onClick={() => {
            handleDeleteEducation(id);
          }}
        >
          Delete
        </button>
        <div className="button-container">
          <button type="button" onClick={resetForm}>
            Cancel
          </button>
          <button type="button" onClick={toggleFormVisibility}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationForm;

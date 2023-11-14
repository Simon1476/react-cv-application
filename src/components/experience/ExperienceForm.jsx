import { useState } from "react";
import "../../styles/ExperienceForm.scss";
const ExperienceForm = ({
  experienceInfo,
  handleExperienceChange,
  handleDeleteExperience,
  id,
  toggleFormVisibility,
}) => {
  const [initialValues, setInitialValues] = useState(experienceInfo);

  const resetForm = () => {
    handleExperienceChange(
      {
        target: {
          name: "Company",
          value: initialValues.Company,
        },
      },
      id
    );
    handleExperienceChange(
      {
        target: {
          name: "degree",
          value: initialValues.degree,
        },
      },
      id
    );
    handleExperienceChange(
      {
        target: {
          name: "startDate",
          value: initialValues.startDate,
        },
      },
      id
    );
    handleExperienceChange(
      {
        target: {
          name: "endDate",
          value: initialValues.endDate,
        },
      },
      id
    );
    handleExperienceChange(
      {
        target: {
          name: "location",
          value: initialValues.location,
        },
      },
      id
    );
    handleExperienceChange(
      {
        target: {
          name: "description",
          value: initialValues.description,
        },
      },
      id
    );
    toggleFormVisibility(); // Close the form
  };
  return (
    <div className="experience-form">
      <label htmlFor="company">Company Name</label>
      <input
        type="text"
        id="company"
        name="company"
        placeholder="Enter Company Name"
        onChange={(e) => {
          handleExperienceChange(e, id);
        }}
        value={experienceInfo.company}
      />
      <label htmlFor="position">Position Title</label>
      <input
        type="text"
        id="position"
        name="position"
        placeholder="Enter Position Title"
        onChange={(e) => {
          handleExperienceChange(e, id);
        }}
        value={experienceInfo.position}
      />
      <div className="dates-group">
        <div>
          <label htmlFor="startDate">Start date</label>
          <input
            type="text"
            id="startDate"
            name="startDate"
            placeholder="YYYY-MM-DD"
            onChange={(e) => {
              handleExperienceChange(e, id);
            }}
            value={experienceInfo.startDate}
          />
        </div>
        <div>
          <label htmlFor="endDate">End date</label>
          <input
            type="text"
            id="endDate"
            name="endDate"
            placeholder="YYYY-MM-DD"
            onChange={(e) => {
              handleExperienceChange(e, id);
            }}
            value={experienceInfo.endDate}
          />
        </div>
      </div>
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        name="location"
        placeholder="Enter Location Name"
        onChange={(e) => {
          handleExperienceChange(e, id);
        }}
        value={experienceInfo.location}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Enter description Name"
        onChange={(e) => {
          handleExperienceChange(e, id);
        }}
        value={experienceInfo.description}
      />
      <div className="btns">
        <button
          type="button"
          onClick={() => {
            handleDeleteExperience(id);
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

export default ExperienceForm;

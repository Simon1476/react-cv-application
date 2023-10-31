import React from "react";
import "../styles/Experience.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll } from "@fortawesome/free-solid-svg-icons";

const Experience = ({ experienceInfo, handleExperienceChange }) => {
  console.log(experienceInfo);
  return (
    <div className="experience">
      <h3>
        <FontAwesomeIcon icon={faScroll} />
        Experience
      </h3>
      <label htmlFor="company">Company Name</label>
      <input
        type="text"
        id="company"
        name="company"
        placeholder="Enter Company Name"
        onChange={handleExperienceChange}
        value={experienceInfo.company}
      />
      <label htmlFor="position">Position Title</label>
      <input
        type="text"
        id="position"
        name="position"
        placeholder="Enter Position Title"
        onChange={handleExperienceChange}
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
            onChange={handleExperienceChange}
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
            onChange={handleExperienceChange}
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
        onChange={handleExperienceChange}
        value={experienceInfo.location}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Enter description Name"
        onChange={handleExperienceChange}
        value={experienceInfo.description}
      />
    </div>
  );
};

export default Experience;

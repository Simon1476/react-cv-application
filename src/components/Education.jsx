import { useState } from "react";
import "../styles/Education.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Education = ({ educationInfo, handleEducationChange }) => {
  return (
    <div className="education">
      <h3>
        <FontAwesomeIcon icon={faGraduationCap} />
        Education
      </h3>
      <label htmlFor="school">School</label>
      <input
        type="text"
        id="school"
        name="school"
        placeholder="Harvard"
        value={educationInfo.school}
        onChange={handleEducationChange}
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        id="degree"
        name="degree"
        placeholder="Harvard"
        value={educationInfo.degree}
        onChange={handleEducationChange}
      />
      <div className="dates-group">
        <div>
          <label>Start Date</label>
          <input
            type="text"
            name="startDate"
            placeholder="YYYY-MM-DD"
            value={educationInfo.startDate}
            onChange={handleEducationChange}
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="text"
            name="endDate"
            placeholder="YYYY-MM-DD"
            value={educationInfo.endDate}
            onChange={handleEducationChange}
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
        onChange={handleEducationChange}
      />
    </div>
  );
};

export default Education;

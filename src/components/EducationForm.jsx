import "../styles/EducationForm.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const EducationForm = ({ educationInfo, handleEducationChange }) => {
  return (
    <div className="education-form">
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
      <div className="btns">
        <button type="button">Delete</button>
        <div className="button-container">
          <button type="button">Cancel</button>
          <button type="button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EducationForm;

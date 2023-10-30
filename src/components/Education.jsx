import { useState } from "react";
import "../styles/Education.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    const input = e.target.value;
    // Check if the input matches the YYYY-MM-DD format
    if (/^\d{4}-\d{2}-\d{2}$/.test(input) || input === "") {
      setStartDate(input);
    }
  };

  const handleEndDateChange = (e) => {
    const input = e.target.value;
    // Check if the input matches the YYYY-MM-DD format
    if (/^\d{4}-\d{2}-\d{2}$/.test(input) || input === "") {
      setEndDate(input);
    }
  };
  return (
    <div className="education">
      <h3>
        <FontAwesomeIcon icon={faGraduationCap} />
        Education
      </h3>
      <label htmlFor="school">School</label>
      <input type="text" id="school" name="school" placeholder="Harvard" />
      <label htmlFor="degree">Degree</label>
      <input type="text" id="degree" name="degree" placeholder="Harvard" />
      <div className="dates-group">
        <div>
          <label>Start Date</label>
          <input
            type="text"
            value={startDate}
            onChange={handleStartDateChange}
            placeholder="YYYY-MM-DD"
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="text"
            value={endDate}
            onChange={handleEndDateChange}
            placeholder="YYYY-MM-DD"
          />
        </div>
      </div>
      <label htmlFor="location">location</label>
      <input type="text" id="location" name="location" placeholder="Harvard" />
    </div>
  );
};

export default Education;

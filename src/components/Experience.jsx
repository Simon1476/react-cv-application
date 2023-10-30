import React from "react";
import "../styles/Experience.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <div className="experience">
      <h3>
        <FontAwesomeIcon icon={faScroll} />
        Experience
      </h3>
      <label htmlFor="company">Company Name</label>
      <input
        type="text"
        id="Company"
        name="Company"
        placeholder="Enter Company Name"
      />
      <label htmlFor="Position">Position Title</label>
      <input
        type="text"
        id="Company"
        name="Company"
        placeholder="Enter Position Title"
      />
      <div className="dates-group">
        <div>
          <label htmlFor="start-date">Start date</label>
          <input
            type="text"
            id="start-date"
            name="start-date"
            placeholder="YYYY-MM-DD"
          />
        </div>
        <div>
          <label htmlFor="end-date">End date</label>
          <input
            type="text"
            id="end-date"
            name="end-date"
            placeholder="YYYY-MM-DD"
          />
        </div>
      </div>
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        name="location"
        placeholder="Enter Location Name"
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Enter description Name"
      />
    </div>
  );
};

export default Experience;

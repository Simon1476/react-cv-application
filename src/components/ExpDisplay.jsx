import "../styles/ExpDisplay.scss";
const ExpDisplay = ({ experienceInfo }) => {
  return (
    <div className="exp-display">
      <h3>Experience</h3>
      <div className="expInfo-list">
        <div className="left">
          <div className="date-groups">
            <span>{experienceInfo.startDate}</span> ~
            <span> {experienceInfo.startDate}</span>
          </div>
          <p className="location">{experienceInfo.location}</p>
        </div>
        <div className="right">
          <p className="company">{experienceInfo.company}</p>
          <p className="position">{experienceInfo.position}</p>
          <p className="description">{experienceInfo.description}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ExpDisplay;

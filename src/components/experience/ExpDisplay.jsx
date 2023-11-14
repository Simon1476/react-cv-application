import "../../styles/ExpDisplay.scss";

const ExpDisplay = ({ experienceInfo }) => {
  return (
    <div className="exp-display">
      <h3>Experience</h3>
      {experienceInfo.map((experience) => (
        <div key={experience.id} className="expInfo-list">
          <div className="left">
            <div className="date-groups">
              <span>{experience.startDate}</span> ~
              <span> {experience.endDate}</span>
            </div>
            <p className="location">{experience.location}</p>
          </div>
          <div className="right">
            <p className="company">{experience.company}</p>
            <p className="position">{experience.position}</p>
            <p className="description">{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpDisplay;

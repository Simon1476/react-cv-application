import "../styles/EduDisplay.scss";
const EduDisplay = ({ educationInfo }) => {
  return (
    <div className="edu-display">
      <h3>Education</h3>
      {educationInfo.map((educationInfo) => (
        <div key={educationInfo.id}>
          <div className="eduInfo-list">
            <div className="left">
              <div className="date-groups">
                <span>{educationInfo.startDate}</span> ~
                <span> {educationInfo.startDate}</span>
              </div>
              <p className="location">{educationInfo.location}</p>
            </div>
            <div className="right">
              <p className="school">{educationInfo.school}</p>
              <p className="degree">{educationInfo.degree}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EduDisplay;

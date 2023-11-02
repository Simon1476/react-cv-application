import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Resume from "./components/Resume";
import ResumeBuilder from "./components/ResumeBuilder";

function App() {
  const [personInfo, setPersonInfo] = useState({
    name: "Simon Kim",
    email: "rlatlahswkd@gmail.com",
    phone: "010-1234-5678",
    address: "Gyeong gi do in Young in",
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      school: "Harvard",
      degree: "Bachelor's",
      startDate: "2020-09-01",
      endDate: "2024-05-30",
      location: "Cambridge, MA",
      id: uuidv4(),
    },
    {
      school: "김시몬",
      degree: "Bachelor's",
      startDate: "2020-09-01",
      endDate: "2024-05-30",
      location: "Cambridge, MA",
      id: uuidv4(),
    },
  ]);

  const [experienceInfo, setExperienceInfo] = useState([
    {
      company: "삼성",
      position: "Bachelor's",
      startDate: "2020-09-01",
      endDate: "2024-05-30",
      location: "Cambridge, MA",
      description: "난 이재용",
      id: uuidv4(),
    },
  ]);
  const handlePersonChange = (e) => {
    const { name, value } = e.target;
    // Use the name attribute of the input to determine which field to update
    setPersonInfo((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  const handleEducationChange = (e, id) => {
    const { name, value } = e.target;
    setEducationInfo((prevEducation) =>
      prevEducation.map((education) =>
        education.id === id ? { ...education, [name]: value } : education
      )
    );
  };

  const handleDeleteEducation = (id) => {
    setEducationInfo((prevEducation) =>
      prevEducation.filter((education) => education.id !== id)
    );
  };
  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    // Use the name attribute of the input to determine which field to update
    setExperienceInfo((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };
  return (
    <div className="app">
      <ResumeBuilder
        personInfo={personInfo}
        handlePersonChange={handlePersonChange}
        educationInfo={educationInfo}
        handleEducationChange={handleEducationChange}
        handleDeleteEducation={handleDeleteEducation}
        experienceInfo={experienceInfo}
        handleExperienceChange={handleExperienceChange}
      />
      <Resume
        personInfo={personInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
      />
    </div>
  );
}

export default App;

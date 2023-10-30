import { useState } from "react";
import "./App.css";

import Resume from "./components/resume";
import ResumeBuilder from "./components/ResumeBuilder";

function App() {
  const [person, setPerson] = useState({
    name: "Simon Kim",
    email: "rlatlahswkd@gmail.com",
    phone: "010-1234-5678",
    address: "Gyeong gi do in Young in",
  });

  console.log(person);
  const handlePersonChange = (e) => {
    const { name, value } = e.target;
    // Use the name attribute of the input to determine which field to update
    setPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };
  return (
    <div className="app">
      <ResumeBuilder person={person} handlePersonChange={handlePersonChange} />
      <Resume person={person} />
    </div>
  );
}

export default App;

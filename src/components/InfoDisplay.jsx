import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/InfoDisplay.scss";
const InfoDisplay = ({ person }) => {
  console.log(person);
  return (
    <div className="info-display">
      <h1>{person.name}</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faEnvelope} /> <span>{person.email}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} /> <span>{person.phone}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} /> <span>{person.address}</span>
        </li>
      </ul>
    </div>
  );
};

export default InfoDisplay;

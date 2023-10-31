import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/InfoDisplay.scss";
const InfoDisplay = ({ personInfo }) => {
  return (
    <div className="info-display">
      <h1>{personInfo.name}</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faEnvelope} /> <span>{personInfo.email}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} /> <span>{personInfo.phone}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{personInfo.address}</span>
        </li>
      </ul>
    </div>
  );
};

export default InfoDisplay;

import React from "react";
import "../styles/Control.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPrint, faEye } from "@fortawesome/free-solid-svg-icons";

const ControlBtn = () => {
  return (
    <div className="control">
      <FontAwesomeIcon icon={faTrashCan} />
      <FontAwesomeIcon icon={faEye} />
      <FontAwesomeIcon icon={faPrint} />
    </div>
  );
};

export default ControlBtn;

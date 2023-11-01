import "../styles/Control.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPrint, faEye } from "@fortawesome/free-solid-svg-icons";

const ControlBtn = () => {
  return (
    <div className="control">
      <button>
        <FontAwesomeIcon icon={faTrashCan} />
        <span>Reset</span>
      </button>
      <button>
        <FontAwesomeIcon icon={faEye} />
        <span>Example</span>
      </button>
      <button>
        <FontAwesomeIcon icon={faPrint} />
        <span>Print</span>
      </button>
    </div>
  );
};

export default ControlBtn;

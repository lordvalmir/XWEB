import "./InfoBoxes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBook,
  faGraduationCap,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

const InfoBoxes = () => {
  return (
    <div className="infoboxes">
      <div className="infobox">
        <div className="boxcom">
          <FontAwesomeIcon icon={faUsers} size="3x" />
          <div className="boxcomText">
            <div className="boxcomMain">3045+</div>
            <div className="boxcomSub">Saticfied Students</div>
          </div>
        </div>
      </div>
      <div className="infobox">
        <div className="boxcom">
          <FontAwesomeIcon icon={faBook} size="3x" />
          <div className="boxcomText">
            <div className="boxcomMain">7852+</div>
            <div className="boxcomSub">Available Courses</div>
          </div>
        </div>
      </div>
      <div className="infobox">
        <div className="boxcom">
          <FontAwesomeIcon icon={faGraduationCap} size="3x" />
          <div className="boxcomText">
            <div className="boxcomMain">9862+</div>
            <div className="boxcomSub">Graduate Students</div>
          </div>
        </div>
      </div>
      <div className="infobox">
        <div className="boxcom">
          <FontAwesomeIcon icon={faLaptop} size="3x" />
          <div className="boxcomText">
            <div className="boxcomMain">8963+</div>
            <div className="boxcomSub">Active Courses</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBoxes;

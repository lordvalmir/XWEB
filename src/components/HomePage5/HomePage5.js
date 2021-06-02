import "./HomePage5.css";
import { useState } from "react";
import book from "../../images/book.png";
import youtube2 from "../../images/youtube2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function HomePage5(props) {
  const [plus1, togglePlus1] = useState(false);
  const [plus2, togglePlus2] = useState(false);
  const [plus3, togglePlus3] = useState(false);
  const [plus4, togglePlus4] = useState(false);

  return (
    <div className={props.background ? "bg4b" : "bg4"}>
      <div className="coursesTitle">... Team Members ...</div>
      <div className="categoriesSubTitle">Expert Instructors</div>
      <div className="instructors">
        <div className="instructor">
          <div className="categorieIMG">
            <div className="categorieIMGplaceholder"></div>
          </div>
          <div className="plusMenu" onClick={() => togglePlus1(!plus1)}>
          <FontAwesomeIcon icon={faPlus} />
            {plus1 ? (
              <div className="openPlusMenu">
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
              </div>
            ) : null}
          </div>
          <div className="instructorInfoBox">
            <div className="instructorTitle">Somalia D Silva</div>
            <div className="instructorSubtitle">Math Teacher</div>
            <hr></hr>
            <div className="instructorInfo">
              <img src={book} width="20px" height="20px" alt="img1"></img>
              <div>750+ Courses</div>
            </div>
          </div>
        </div>
        <div className="instructor">
          <div className="categorieIMG">
            {/* <div className="categorieIMGplaceholder"></div> */}
            <div className="categorieIMGplaceholder"></div>
          </div>
          <div className="plusMenu" onClick={() => togglePlus2(!plus2)}>
          <FontAwesomeIcon icon={faPlus} />
            {plus2 ? (
              <div className="openPlusMenu">
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
              </div>
            ) : null}
          </div>
          <div className="instructorInfoBox">
            <div className="instructorTitle">Somalia D Silva</div>
            <div className="instructorSubtitle">Math Teacher</div>
            <hr></hr>
            <div className="instructorInfo">
              <img src={book} width="20px" height="20px" alt="img1"></img>
              <div>750+ Courses</div>
            </div>
          </div>
        </div>
        <div className="instructor">
          <div className="categorieIMG">
            <div className="categorieIMGplaceholder"></div>
          </div>
          <div className="plusMenu" onClick={() => togglePlus3(!plus3)}>
          <FontAwesomeIcon icon={faPlus} />
            {plus3 ? (
              <div className="openPlusMenu">
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
              </div>
            ) : null}
          </div>
          <div className="instructorInfoBox">
            <div className="instructorTitle">Somalia D Silva</div>
            <div className="instructorSubtitle">Math Teacher</div>
            <hr></hr>
            <div className="instructorInfo">
              <img src={book} width="20px" height="20px" alt="img1"></img>
              <div>750+ Courses</div>
            </div>
          </div>
        </div>
        <div className="instructor">
          <div className="categorieIMG">
            <div className="categorieIMGplaceholder"></div>
          </div>
          <div className="plusMenu" onClick={() => togglePlus4(!plus4)}>
          <FontAwesomeIcon icon={faPlus} />
            {plus4 ? (
              <div className="openPlusMenu">
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
                <img src={youtube2} width="32px" height="32px" alt="img1"></img>
              </div>
            ) : null}
          </div>
          <div className="instructorInfoBox">
            <div className="instructorTitle">Somalia D Silva</div>
            <div className="instructorSubtitle">Math Teacher</div>
            <hr></hr>
            <div className="instructorInfo">
              <img src={book} width="20px" height="20px" alt="img1"></img>
              <div>750+ Courses</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage5;

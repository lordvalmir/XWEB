import "./HomePage5.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBook } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";

const Instructor = ({ togglePlus, plus, name, subject, info, img }) => {
  return (
    <div className="instructor">
      <div className="categorieIMG2">
        <img src={img} alt={"logo"} />
      </div>
      <div className="plusMenu" onClick={() => togglePlus(!plus)}>
        <FontAwesomeIcon icon={faPlus} />
        {plus ? (
          <div className="openPlusMenu">
            <div className="openPlusMenuYellow">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="openPlusMenuRed">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className="openPlusMenuBlue">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
          </div>
        ) : null}
      </div>
      <div className="instructorInfoBox">
        <div className="instructorTitle">{name}</div>
        <div className="instructorSubtitle">{subject}</div>
        <hr></hr>
        <div className="instructorInfo">
          <FontAwesomeIcon icon={faBook} />
          {info}
        </div>
      </div>
    </div>
  );
};

const HomePage5 = (props) => {
  const [plus1, togglePlus1] = useState(false);
  const [plus2, togglePlus2] = useState(false);
  const [plus3, togglePlus3] = useState(false);
  const [plus4, togglePlus4] = useState(false);

  return (
    <div className={props.background ? "bg4b" : "bg4"}>
      <div className="coursesTitle">... Team Members ...</div>
      <div className="categoriesSubTitle">Expert Instructors</div>
      <div className="instructors">
        <Instructor
          togglePlus={() => togglePlus1(!plus1)}
          plus={plus1}
          name={"Somalia D Silva"}
          subject={"Math Teacher"}
          info={"750+ Courses"}
          img={img1}
        />
        <Instructor
          togglePlus={() => togglePlus2(!plus2)}
          plus={plus2}
          name={"David D Warner"}
          subject={"English Teacher"}
          info={"750+ Courses"}
          img={img2}
        />
        <Instructor
          togglePlus={() => togglePlus3(!plus3)}
          plus={plus3}
          name={"Xavi Toni Crusse"}
          subject={"Computer Teacher"}
          info={"632+ Courses"}
          img={img3}
        />
        <Instructor
          togglePlus={() => togglePlus4(!plus4)}
          plus={plus4}
          name={"Shaine Watson"}
          subject={"Web Designer"}
          info={"985+ Courses"}
          img={img4}
        />
      </div>
    </div>
  );
};

export default HomePage5;

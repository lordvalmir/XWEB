import React, { useState } from "react";

import "./HomePage3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faClock,
  faComment,
  faStar,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";

const Card = ({ toggleCard, card, img }) => {
  return (
    <div
      className={card ? "card is-flipped" : "card"}
      onClick={() => toggleCard(!card)}
    >
      <div className="card__face card__face--front">
        <div className="cardImg">
          <img src={img} alt={"logo"} />
          <div className="cardImgName">
            <div className="cardImgcircle"></div>
            <div className="cardImgname">Warner</div>
          </div>
          <div className="price">
            <div className="cardImgPrice">$59.95</div>
          </div>
        </div>
        <div className="cardInfo">
          <div className="cardHeader">
            <div className="cardLanguage">English</div>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="courseTitle">
            Best Courses For Learning English Courses
          </div>
          <hr></hr>
          <div className="courseIcons">
            <div className="courseIcon">
              <FontAwesomeIcon icon={faUsers} />
              <div className="imgtext">25</div>
            </div>
            <div className="courseIcon">
              <FontAwesomeIcon icon={faClock} />
              <div className="imgtext">36hr</div>
            </div>
            <div className="courseIcon">
              <FontAwesomeIcon icon={faComment} />
              <div className="imgtext">2.5k</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card__face card__face--back">
        <div className="cardInfo2">
          <div className="cardHeader2">
            <div className="cardLanguage2">BUSINESS</div>
            <div className="rating2">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="courseTitle2">
            Best Courses For Learning English Courses
          </div>
          <div className="priceBox2">
            <div className="cardImgName">
              <div className="cardImgcircle2"></div>
              <div className="cardImgname">Warner</div>
            </div>
            <div className="price2">
              <div className="cardImgPrice2">$59.95</div>
            </div>
          </div>
          <div className="curseText">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium dolorque laudantium totam rem aperiam
          </div>
          <div className="getEnrolled">
            <a href="/Our-Courses/English">
              <button className="getEnrolledButton">
                <div className="getEnrolledData">
                  <div className="getEnrolledText">GET ENROLLED</div>
                  <FontAwesomeIcon icon={faLongArrowAltRight} size="2x" />
                </div>
              </button>
            </a>
          </div>
          <div className="courseIcons2">
            <div className="courseIcon">
              <FontAwesomeIcon icon={faUsers} />
              <div className="imgtext2">25</div>
            </div>
            <div className="courseIcon">
              <FontAwesomeIcon icon={faClock} />
              <div className="imgtext2">36hr</div>
            </div>
            <div className="courseIcon">
              <FontAwesomeIcon icon={faComment} />
              <div className="imgtext2">2.5k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage3 = () => {
  const [card1, toggleCard1] = useState(false);
  const [card2, toggleCard2] = useState(true);
  const [card3, toggleCard3] = useState(false);

  return (
    <div className="bg2">
      <div className="coursesMain">
        <div className="coursesTitle2">... Popular Courses ...</div>
        <div className="coursesSubTitle">Available Courses</div>
        <div className="cards">
          <Card
            toggleCard={() => toggleCard1(!card1)}
            card={card1}
            img={img1}
          />
          <Card
            toggleCard={() => toggleCard2(!card2)}
            card={card2}
            img={img2}
          />
          <Card
            toggleCard={() => toggleCard3(!card3)}
            card={card3}
            img={img3}
          />
        </div>
        <div className="allCourses">
          <div className="allCoursesButton">
            <a href="/Our-Courses">
              <button className="allCoursesButtonData">
                <div className="allCoursesButtonText">view all courses</div>
                <FontAwesomeIcon icon={faLongArrowAltRight} size="2x" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage3;

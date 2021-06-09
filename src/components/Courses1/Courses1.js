import React, { useState } from "react";

import "./Courses1.css";
import HomePage5 from "../HomePage5/HomePage5";
import HomePage9 from "../HomePage9/HomePage9";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faClock,
  faComment,
  faStar,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";

import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'
import img8 from '../../images/img8.jpg'

const Card = ({ toggleCard, card, tag, title, link, img }) => {
  return (
    <div
      className={card ? "card2 is-flipped" : "card2"}
      onClick={() => toggleCard(!card)}
    >
      <div className="card__face card__face--front">
        <div className="cardImg2">
          <img src={img} alt={"logo"} />
          <div className="cardImgName">
            <div className="cardImgcircle"></div>
            <div className="cardImgname">Warner</div>
          </div>
          <div className="price2a">
            <div className="cardImgPrice2a">$59</div>
          </div>
        </div>
        <div className="cardInfo2a">
          <div className="cardHeader2a">
            <div className="cardLanguage">{tag}</div>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="courseTitle2a">{title}</div>
          <hr></hr>
          <div className="courseIcons2a">
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
      <div className="card__face card__face--back2">
        <div className="cardInfo2b">
          <div className="cardHeader2">
            <div className="cardLanguage2b">{tag}</div>
            <div className="rating2">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="courseTitle2b">{title}</div>
          <div className="priceBox2">
            <div className="cardImgName">
              <div className="cardImgcircle2"></div>
              <div className="cardImgname">Warner</div>
            </div>
            <div className="price2">
              <div className="cardImgPrice2b">$59</div>
            </div>
          </div>
          <div className="curseText2">
            Sed ut perspiciatis unde omnis ist natus error sit voluptate
            accusane tium dolorque laudantium
          </div>
          <div className="getEnrolled">
            <a href={link}>
              <button className="getEnrolledButton2">
                <div className="getEnrolledData2">
                  GET ENROLLED
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

const CoursesSection = () => {
  const [card1, toggleCard1] = useState(false);
  const [card2, toggleCard2] = useState(true);
  const [card3, toggleCard3] = useState(false);
  const [card4, toggleCard4] = useState(false);
  const [card5, toggleCard5] = useState(false);
  const [card6, toggleCard6] = useState(false);
  const [card7, toggleCard7] = useState(false);
  const [card8, toggleCard8] = useState(false);
  return (
    <div className="welcomeSection2">
      <div className="aboutNavbar">
        <div className="aboutNavbarItem">Show all</div>
        <div className="aboutNavbarItem">Design</div>
        <div className="aboutNavbarItem">Computer</div>
        <div className="aboutNavbarItem">Development</div>
        <div className="aboutNavbarItem">Medical</div>
        <div className="aboutNavbarItem">Photography</div>
        <div className="aboutNavbarItem">Marketing</div>
        <div className="aboutNavbarItem">Driving</div>
        <div className="aboutNavbarItem">Business</div>
      </div>
      <div className="cards2">
        <Card
          toggleCard={() => toggleCard1(!card1)}
          card={card1}
          tag={"English"}
          title={"Best Courses For Learning  English Courses"}
          link={"/Our-Courses/English"}
          img={img1}
        />
        <Card
          toggleCard={() => toggleCard2(!card2)}
          card={card2}
          tag={"Design"}
          title={"Introduce About Graphics  Design For Beginners"}
          link={"/Our-Courses/Design"}
          img={img2}
        />
        <Card
          toggleCard={() => toggleCard3(!card3)}
          card={card3}
          tag={"Business"}
          title={"How To Improve Business Studies For Beginners"}
          link={"/Our-Courses/Business"}
          img={img3}
        />
        <Card
          toggleCard={() => toggleCard4(!card4)}
          card={card4}
          tag={"Php"}
          title={"Best Courses For Learning  English Courses"}
          link={"/Our-Courses/Php"}
          img={img4}
        />
        <Card
          toggleCard={() => toggleCard5(!card5)}
          card={card5}
          tag={"Marketing"}
          title={"Best Courses For Learning  Marketing Courses"}
          link={"/Our-Courses/Marketing"}
          img={img5}
        />
        <Card
          toggleCard={() => toggleCard6(!card6)}
          card={card6}
          tag={"Films"}
          title={"Introduce About Movie & Photography For Beginners"}
          link={"/Our-Courses/Films"}
          img={img6}
        />
        <Card
          toggleCard={() => toggleCard7(!card7)}
          card={card7}
          tag={"Medical"}
          title={"Best Courses For Learning  English Courses"}
          link={"/Our-Courses/Medical"}
          img={img7}
        />
        <Card
          toggleCard={() => toggleCard8(!card8)}
          card={card8}
          tag={"Apps UI"}
          title={"Learning How To Improve Mobile Ui Design"}
          link={"/Our-Courses/Apps-UI"}
          img={img8}
        />
      </div>
    </div>
  );
};

const Courses1 = () => {
  return (
    <>
      <CoursesSection />
      <HomePage5 background={true} />
      <HomePage9 />
    </>
  );
};

export default Courses1;
export { Card };

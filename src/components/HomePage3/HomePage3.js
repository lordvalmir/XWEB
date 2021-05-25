import React, { useState } from "react";

import "./HomePage3.css";
import circle from "../../images/circle.png";
import price1 from "../../images/price1.png";
import price2 from "../../images/price2.png";
import star from "../../images/star.png";
import english from "../../images/english.png";
import clock from "../../images/clock.png";
import lightClock from "../../images/lightClock.png";
import comments from "../../images/comments.png";
import lightComments from "../../images/lightComments.png";
import bussines from "../../images/bussines.png";
import lightstar from "../../images/lightstar.png";
import arrow from "../../images/arrow.png";
import arrow2 from "../../images/arrow2.png";

function HomePage3() {
  const [card1, toggleCard1] = useState(false);
  const [card2, toggleCard2] = useState(true);
  const [card3, toggleCard3] = useState(false);

  return (
    <div className="bg2">
      <div className="coursesTitle">... Popular Courses ...</div>
      <div className="coursesSubTitle">Available Courses</div>
      <div className="cards">
        <div
          className={card1 ? "card is-flipped" : "card"}
          onClick={() => toggleCard1(!card1)}
        >
          <div className="card__face card__face--front">
            <div className="cardImg">
              <div className="circle">
                <img src={circle} width="40px" height="40px" alt="circle"></img>
                <div className="name">Warner</div>
              </div>
              <div className="price">
                <img src={price1} width="68px" height="28px" alt="price"></img>
              </div>
            </div>
            <div className="cardInfo">
              <div className="cardHeader">
                <div className="language">
                  <img
                    src={english}
                    width="84px"
                    height="28px"
                    alt="english"
                  ></img>
                </div>
                <div className="rating">
                  <img src={star} width="13px" height="14px" alt="star"></img>
                  <img src={star} width="13px" height="14px" alt="star"></img>
                  <img src={star} width="13px" height="14px" alt="star"></img>
                  <img src={star} width="13px" height="14px" alt="star"></img>
                  <img src={star} width="13px" height="14px" alt="star"></img>
                </div>
              </div>
              <div className="courseTitle">
                Best Courses For Learning English Courses
              </div>
              <hr></hr>
              <div className="courseIcons">
                <div className="courseIcon">
                  <img src={clock} width="15px" height="15px" alt="clock"></img>
                  <div className="imgtext">25</div>
                </div>
                <div className="courseIcon">
                  <img src={clock} width="15px" height="15px" alt="clock"></img>
                  <div className="imgtext">36hr</div>
                </div>
                <div className="courseIcon">
                  <img
                    src={comments}
                    width="18px"
                    height="14px"
                    alt="comments"
                  ></img>
                  <div className="imgtext">2.5k</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card__face card__face--back">
            <div className="cardInfo2">
              <div className="cardHeader2">
                <div className="language2">
                  <img
                    src={bussines}
                    width="84px"
                    height="28px"
                    alt="english"
                  ></img>
                </div>
                <div className="rating">
                  <img
                    src={lightstar}
                    width="13px"
                    height="14px"
                    alt="lightstar"
                  ></img>
                  <img
                    src={lightstar}
                    width="13px"
                    height="14px"
                    alt="lightstar"
                  ></img>
                  <img
                    src={lightstar}
                    width="13px"
                    height="14px"
                    alt="lightstar"
                  ></img>
                  <img
                    src={lightstar}
                    width="13px"
                    height="14px"
                    alt="lightstar"
                  ></img>
                  <img
                    src={lightstar}
                    width="13px"
                    height="14px"
                    alt="lightstar"
                  ></img>
                </div>
              </div>
              <div className="courseTitle2">
                Best Courses For Learning English Courses
              </div>
              <div className="priceBox2">
                <div className="circle">
                  <img
                    src={circle}
                    width="40px"
                    height="40px"
                    alt="circle"
                  ></img>
                  <div className="name">Warner</div>
                </div>
                <div className="price2">
                  <img
                    src={price2}
                    width="68px"
                    height="28px"
                    alt="price"
                  ></img>
                </div>
              </div>
              <div className="curseText">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolorque laudantium totam rem aperiam
              </div>
              <div className="getEnrolled">
                <a href="/course/English">
                  <button className="getEnrolledButton">
                    <div className="getEnrolledData">
                      <div className="getEnrolledText">GET ENROLLED</div>
                      <img
                        src={arrow}
                        width="20px"
                        height="20px"
                        alt="price"
                      ></img>
                    </div>
                  </button>
                </a>
              </div>
              <div className="courseIcons2">
                <div className="courseIcon">
                  <img
                    src={lightClock}
                    width="15px"
                    height="15px"
                    alt="clock"
                  ></img>
                  <div className="imgtext2">25</div>
                </div>
                <div className="courseIcon">
                  <img
                    src={lightClock}
                    width="15px"
                    height="15px"
                    alt="clock"
                  ></img>
                  <div className="imgtext2">36hr</div>
                </div>
                <div className="courseIcon">
                  <img
                    src={lightComments}
                    width="18px"
                    height="14px"
                    alt="comments"
                  ></img>
                  <div className="imgtext2">2.5k</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={card2 ? "card is-flipped" : "card"}
          onClick={() => toggleCard2(!card2)}
        >
          <div className="card__face card__face--front">
            <div className="cardImg">
              <div className="circle">
                <img src={circle} width="40px" height="40px" alt="circle"></img>
                <div className="name">Warner</div>
              </div>
              <div className="price">
                <img src={price1} width="68px" height="28px" alt="price"></img>
              </div>
            </div>
            <div className="cardInfo">
              <div className="cardHeader">
                <div className="language">
                  <img
                    src={english}
                    width="84px"
                    height="28px"
                    alt="english"
                  ></img>
                </div>
                <div className="rating">
                  <img src={star} width="13px" height="14px" alt="star"></img>
                  <img src={star} width="13px" height="14px" alt="star"></img>
                  <img src={star} width="13px" height="14px" alt="star"></img>
                  <img src={star} width="13px" height="14px" alt="star"></img>
                  <img src={star} width="13px" height="14px" alt="star"></img>
                </div>
              </div>
              <div className="courseTitle">
                Learning About It Consulting Business Solutions
              </div>
              <hr></hr>
              <div className="courseIcons">
                <div className="courseIcon">
                  <img src={clock} width="15px" height="15px" alt="clock"></img>
                  <div className="imgtext">25</div>
                </div>
                <div className="courseIcon">
                  <img src={clock} width="15px" height="15px" alt="clock"></img>
                  <div className="imgtext">36hr</div>
                </div>
                <div className="courseIcon">
                  <img
                    src={comments}
                    width="18px"
                    height="14px"
                    alt="comments"
                  ></img>
                  <div className="imgtext">2.5k</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card__face card__face--back">
            <div className="cardInfo2">
              <div className="cardHeader2">
                <div className="language">
                  <img
                    src={bussines}
                    width="84px"
                    height="28px"
                    alt="english"
                  ></img>
                </div>
                <div className="rating">
                  <img
                    src={lightstar}
                    width="13px"
                    height="14px"
                    alt="lightstar"
                  ></img>
                  <img
                    src={lightstar}
                    width="13px"
                    height="14px"
                    alt="lightstar"
                  ></img>
                  <img
                    src={lightstar}
                    width="13px"
                    height="14px"
                    alt="lightstar"
                  ></img>
                  <img
                    src={lightstar}
                    width="13px"
                    height="14px"
                    alt="lightstar"
                  ></img>
                  <img
                    src={lightstar}
                    width="13px"
                    height="14px"
                    alt="lightstar"
                  ></img>
                </div>
              </div>
              <div className="courseTitle2">
                Learning About It Consulting Business Solutions
              </div>
              <div className="priceBox2">
                <div className="circle">
                  <img
                    src={circle}
                    width="40px"
                    height="40px"
                    alt="circle"
                  ></img>
                  <div className="name">Warner</div>
                </div>
                <div className="price2">
                  <img
                    src={price2}
                    width="68px"
                    height="28px"
                    alt="price"
                  ></img>
                </div>
              </div>
              <div className="curseText">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolorque laudantium totam rem aperiam
              </div>
              <div className="getEnrolled">
                <a href="/course/Business">
                  <button className="getEnrolledButton">
                    <div className="getEnrolledData">
                      <div className="getEnrolledText">GET ENROLLED</div>
                      <img
                        src={arrow}
                        width="20px"
                        height="20px"
                        alt="price"
                      ></img>
                    </div>
                  </button>
                </a>
              </div>
              <div className="courseIcons2">
                <div className="courseIcon">
                  <img
                    src={lightClock}
                    width="15px"
                    height="15px"
                    alt="clock"
                  ></img>
                  <div className="imgtext2">25</div>
                </div>
                <div className="courseIcon">
                  <img
                    src={lightClock}
                    width="15px"
                    height="15px"
                    alt="clock"
                  ></img>
                  <div className="imgtext2">36hr</div>
                </div>
                <div className="courseIcon">
                  <img
                    src={lightComments}
                    width="18px"
                    height="14px"
                    alt="comments"
                  ></img>
                  <div className="imgtext2">2.5k</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={card3 ? "card is-flipped" : "card"}
          onClick={() => toggleCard3(!card3)}
        >
          <div className="card__face card__face--front">
            <div className="cardImg">
              <div className="circle">
                <img src={circle} width="40px" height="40px" alt="circle"></img>
                <div className="name">Warner</div>
              </div>
              <div className="price">
                <img src={price1} width="68px" height="28px" alt="price"></img>
              </div>
            </div>
            <div className="cardInfo">
              <div className="cardHeader">
                <div className="language">
                  <img
                    src={english}
                    width="84px"
                    height="28px"
                    alt="english"
                  ></img>
                </div>
                <div className="rating">
                  <img src={star} width="13px" height="14px" alt="star"></img>
                  <img src={star} width="13px" height="14px" alt="star"></img>
                  <img src={star} width="13px" height="14px" alt="star"></img>
                  <img src={star} width="13px" height="14px" alt="star"></img>
                  <img src={star} width="13px" height="14px" alt="star"></img>
                </div>
              </div>
              <div className="courseTitle">
                Introduced About Basic Web Design For Begineers
              </div>
              <hr></hr>
              <div className="courseIcons">
                <div className="courseIcon">
                  <img src={clock} width="15px" height="15px" alt="clock"></img>
                  <div className="imgtext">25</div>
                </div>
                <div className="courseIcon">
                  <img src={clock} width="15px" height="15px" alt="clock"></img>
                  <div className="imgtext">36hr</div>
                </div>
                <div className="courseIcon">
                  <img
                    src={comments}
                    width="18px"
                    height="14px"
                    alt="comments"
                  ></img>
                  <div className="imgtext">2.5k</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card__face card__face--back">
            <div className="cardInfo2">
              <div className="cardHeader2">
                <div className="language">
                  <img
                    src={bussines}
                    width="84px"
                    height="28px"
                    alt="english"
                  ></img>
                </div>
                <div className="rating">
                  <img
                    src={lightstar}
                    width="13px"
                    height="14px"
                    alt="lightstar"
                  ></img>
                  <img
                    src={lightstar}
                    width="13px"
                    height="14px"
                    alt="lightstar"
                  ></img>
                  <img
                    src={lightstar}
                    width="13px"
                    height="14px"
                    alt="lightstar"
                  ></img>
                  <img
                    src={lightstar}
                    width="13px"
                    height="14px"
                    alt="lightstar"
                  ></img>
                  <img
                    src={lightstar}
                    width="13px"
                    height="14px"
                    alt="lightstar"
                  ></img>
                </div>
              </div>
              <div className="courseTitle2">
                Introduced About Basic Web Design For Begineers
              </div>
              <div className="priceBox2">
                <div className="circle">
                  <img
                    src={circle}
                    width="40px"
                    height="40px"
                    alt="circle"
                  ></img>
                  <div className="name">Warner</div>
                </div>
                <div className="price2">
                  <img
                    src={price2}
                    width="68px"
                    height="28px"
                    alt="price"
                  ></img>
                </div>
              </div>
              <div className="curseText">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolorque laudantium totam rem aperiam
              </div>
              <div className="getEnrolled">
                <a href="/course/Design">
                  <button className="getEnrolledButton">
                    <div className="getEnrolledData">
                      <div className="getEnrolledText">GET ENROLLED</div>
                      <img
                        src={arrow}
                        width="20px"
                        height="20px"
                        alt="price"
                      ></img>
                    </div>
                  </button>
                </a>
              </div>
              <div className="courseIcons2">
                <div className="courseIcon">
                  <img
                    src={lightClock}
                    width="15px"
                    height="15px"
                    alt="clock"
                  ></img>
                  <div className="imgtext2">25</div>
                </div>
                <div className="courseIcon">
                  <img
                    src={lightClock}
                    width="15px"
                    height="15px"
                    alt="clock"
                  ></img>
                  <div className="imgtext2">36hr</div>
                </div>
                <div className="courseIcon">
                  <img
                    src={lightComments}
                    width="18px"
                    height="14px"
                    alt="comments"
                  ></img>
                  <div className="imgtext2">2.5k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="allCourses">
        <div className="allCoursesButton">
          <a href="/course">
            <button className="allCoursesButtonData">
              <div className="allCoursesButtonText">view all courses</div>
              <img src={arrow2} width="46px" height="11px" alt="arrow2"></img>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage3;

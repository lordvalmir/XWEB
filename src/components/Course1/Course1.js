import React, { useState } from "react";
import "./Course1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faMoneyBill,
  faUser,
  faClock,
  faBook,
  faUsers,
  faFlag,
  faCalendar,
  faStar,
  faPlayCircle,
  faAngleRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import simg1 from '../../images/simg1.jpg'
import simg2 from '../../images/simg2.jpg'
import simg3 from '../../images/simg3.jpg'
import simg4 from '../../images/simg4.jpg'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'
import img8 from '../../images/img8.jpg'
import img9 from '../../images/img9.jpg'
import img10 from '../../images/img10.jpg'

const Course1 = () => {
  const [fag1, setFAG1] = useState(false);
  const [fag2, setFAG2] = useState(false);
  const [fag3, setFAG3] = useState(false);
  const [fag4, setFAG4] = useState(false);
  return (
    <div className="CourseMain">
      <div className="CourseBoxes">
        <div className="CourseBoxLeft">
          <div className="CourseVideo">
            <img src={img7} alt={"logo"}/>
            <div className="CourseVideoPlay">
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
          <div className="CourseStars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="CourseTitle">How To Improve Web Design Skills</div>
          <div className="CourseText">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur
          </div>
          <div className="CourseSubTitle">Curriculum</div>
          <div className="CourseText">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam
          </div>
          <div className="CourseLessons">
            <div className="CourseLesson">
              Lesson 01 : Introduced About Web Design
              <div className="CourseLessonRight">
                <FontAwesomeIcon icon={faPlayCircle} />
                05:59 hr
              </div>
            </div>
            <div className="CourseLesson">
              Lesson 02 : What Is UX/UI Design ?
              <div className="CourseLessonRight">
                <FontAwesomeIcon icon={faPlayCircle} />
                05:59 hr
              </div>
            </div>
            <div className="CourseLesson">
              Lesson 03 : Why Need UX/UI Role In Web Design ?
              <div className="CourseLessonRight">
                <FontAwesomeIcon icon={faPlayCircle} />
                05:59 hr
              </div>
            </div>
            <div className="CourseLesson">
              Lesson 04 : What Is UX Manager ?
              <div className="CourseLessonRight">
                <FontAwesomeIcon icon={faPlayCircle} />
                05:59 hr
              </div>
            </div>
            <div className="CourseLesson2">
              Lesson 05 : What’s Your Design Goals?
              <div className="CourseLessonRight">
                <FontAwesomeIcon icon={faPlayCircle} />
                05:59 hr
              </div>
            </div>
          </div>
          <div className="CourseMainIMG">
            <img src={img6} alt={"logo"}/>


          </div>
          <div className="CourseFAQ">
            <div className="CourseFAQTitle">Frequently Asked Questions</div>
            <div className="CourseFAQText">
              Wuisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut
              labore et dolore magnam aliquam
            </div>
            <div className="CourseFAQRow">
              <div
                className={fag1 ? "CourseFAQQuestion2" : "CourseFAQQuestion"}
                onClick={() => setFAG1(!fag1)}
              >
                Best Online Course For Basic Web Design For Beginners
                {fag1 ? (
                  <FontAwesomeIcon icon={faAngleDown} />
                ) : (
                  <FontAwesomeIcon icon={faAngleRight} />
                )}
              </div>
              {fag1 ? (
                <div className="CourseFAQAnswer">
                  <div className="CourseFAQAnswerBox">
                    <div className="CourseFAQAnswerBoxLeft"></div>
                    <div className="CourseFAQAnswerBoxRight">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusan mque laud totam rem aperiam, eaque ipsa
                      quae ab illo inventore veritatis etq ectosd beatae vitae
                      dicta sunt explicabo. Nemo enim ipsam voluptatem quiatas
                      sit asperatur aut odit aut fugit sed quia consequuntur
                      magni dolores
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="CourseFAQRow">
              <div
                className={fag2 ? "CourseFAQQuestion2" : "CourseFAQQuestion"}
                onClick={() => setFAG2(!fag2)}
              >
                Best Online Course For Basic Web Design For Beginners
                {fag2 ? (
                  <FontAwesomeIcon icon={faAngleDown} />
                ) : (
                  <FontAwesomeIcon icon={faAngleRight} />
                )}
              </div>
              {fag2 ? (
                <div className="CourseFAQAnswer">
                  <div className="CourseFAQAnswerBox">
                    <div className="CourseFAQAnswerBoxLeft"></div>
                    <div className="CourseFAQAnswerBoxRight">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusan mque laud totam rem aperiam, eaque ipsa
                      quae ab illo inventore veritatis etq ectosd beatae vitae
                      dicta sunt explicabo. Nemo enim ipsam voluptatem quiatas
                      sit asperatur aut odit aut fugit sed quia consequuntur
                      magni dolores
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="CourseFAQRow">
              <div
                className={fag3 ? "CourseFAQQuestion2" : "CourseFAQQuestion"}
                onClick={() => setFAG3(!fag3)}
              >
                Best Online Course For Basic Web Design For Beginners
                {fag3 ? (
                  <FontAwesomeIcon icon={faAngleDown} />
                ) : (
                  <FontAwesomeIcon icon={faAngleRight} />
                )}
              </div>
              {fag3 ? (
                <div className="CourseFAQAnswer">
                  <div className="CourseFAQAnswerBox">
                    <div className="CourseFAQAnswerBoxLeft"></div>
                    <div className="CourseFAQAnswerBoxRight">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusan mque laud totam rem aperiam, eaque ipsa
                      quae ab illo inventore veritatis etq ectosd beatae vitae
                      dicta sunt explicabo. Nemo enim ipsam voluptatem quiatas
                      sit asperatur aut odit aut fugit sed quia consequuntur
                      magni dolores
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="CourseFAQRow">
              <div
                className={fag4 ? "CourseFAQQuestion2" : "CourseFAQQuestion"}
                onClick={() => setFAG4(!fag4)}
              >
                Best Online Course For Basic Web Design For Beginners
                {fag4 ? (
                  <FontAwesomeIcon icon={faAngleDown} />
                ) : (
                  <FontAwesomeIcon icon={faAngleRight} />
                )}
              </div>
              {fag4 ? (
                <div className="CourseFAQAnswer">
                  <div className="CourseFAQAnswerBox">
                    <div className="CourseFAQAnswerBoxLeft"></div>
                    <div className="CourseFAQAnswerBoxRight">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusan mque laud totam rem aperiam, eaque ipsa
                      quae ab illo inventore veritatis etq ectosd beatae vitae
                      dicta sunt explicabo. Nemo enim ipsam voluptatem quiatas
                      sit asperatur aut odit aut fugit sed quia consequuntur
                      magni dolores
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="CourseInstructors">
            <div className="CourseInstructorsTitle">Course Instructors</div>
            <div className="CourseInstructorsRow">
              <div className="CourseInstructor">
                <div className="CourseInstructorIMG"><img src={simg1} alt={"logo"}/></div>
                <div className="CourseInstructorName">Somalia D Silva</div>
                <div className="CourseInstructorSpecialization">
                  Math Teacher
                </div>
              </div>
              <div className="CourseInstructor">
                <div className="CourseInstructorIMG"><img src={simg2} alt={"logo"}/></div>
                <div className="CourseInstructorName">David Warner</div>
                <div className="CourseInstructorSpecialization">
                  Math Teacher
                </div>
              </div>
            </div>
            <div className="CourseInstructorsRow">
              <div className="CourseInstructor">
                <div className="CourseInstructorIMG"><img src={simg3} alt={"logo"}/></div>
                <div className="CourseInstructorName">Zavib Makaullah</div>
                <div className="CourseInstructorSpecialization">
                  Math Teacher
                </div>
              </div>
              <div className="CourseInstructor">
                <div className="CourseInstructorIMG"><img src={simg4} alt={"logo"}/></div>
                <div className="CourseInstructorName">Jhonson Maxwell</div>
                <div className="CourseInstructorSpecialization">
                  Math Teacher
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="CourseBoxRight">
          <div className="CourseInfo">
            <div className="CourseInfoParam">
              <div className="CourseInfoParamLeft">
                <FontAwesomeIcon icon={faMoneyBill} />
                Course Price
              </div>
              <div className="CourseInfoParamRight">$59</div>
            </div>
            <div className="CourseInfoParam">
              <div className="CourseInfoParamLeft">
                <FontAwesomeIcon icon={faUser} />
                Instructor
              </div>
              <div className="CourseInfoParamRight">David Warner</div>
            </div>
            <div className="CourseInfoParam">
              <div className="CourseInfoParamLeft">
                <FontAwesomeIcon icon={faClock} />
                Duration
              </div>
              <div className="CourseInfoParamRight">360 Hours</div>
            </div>
            <div className="CourseInfoParam">
              <div className="CourseInfoParamLeft">
                <FontAwesomeIcon icon={faBook} />
                Lectures
              </div>
              <div className="CourseInfoParamRight">20 Lessons</div>
            </div>
            <div className="CourseInfoParam">
              <div className="CourseInfoParamLeft">
                <FontAwesomeIcon icon={faUsers} />
                Enrolled
              </div>
              <div className="CourseInfoParamRight">963 Students</div>
            </div>
            <div className="CourseInfoParam">
              <div className="CourseInfoParamLeft">
                <FontAwesomeIcon icon={faFlag} />
                Language
              </div>
              <div className="CourseInfoParamRight">English</div>
            </div>
            <div className="CourseInfoParam2">
              <div className="CourseInfoParamLeft">
                <FontAwesomeIcon icon={faCalendar} />
                Deadline
              </div>
              <div className="CourseInfoParamRight">06 March 2021</div>
            </div>
            <div className="CourseInfoButton">
              Enrolled now
              <svg
                width="46"
                height="11"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0.389 46 10.222"
                fill="#fff"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="11"
                  viewBox="2 1.998 45 10"
                >
                  <path
                    paint-order="stroke fill markers"
                    fill-rule="evenodd"
                    d="M2 6h35v2H2V6zm35-4.002l10 5-10 5v-10z"
                  />
                </svg>
              </svg>
            </div>
          </div>
          <div className="CourseInfoIMG"><img src={img5} alt={"logo"}/></div>
        </div>
      </div>
    </div>
  );
};

export default Course1;

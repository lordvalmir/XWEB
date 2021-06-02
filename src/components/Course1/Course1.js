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
} from "@fortawesome/free-solid-svg-icons";

const Course1 = () => {
  return (
    <div className="CourseMain">
      <div className="CourseBoxes">
        <div className="CourseBoxLeft">
          <div className="CourseVideo">
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
          <div className="CourseTitle">How To Improve Wed Design Skills</div>
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
          <div className="CourseMainIMG"></div>
          <div className="CourseFAQ">
            <div className="CourseFAQTitle">Frequently Asked Questions</div>
            <div className="CourseFAQText">
              Wuisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut
              labore et dolore magnam aliquam
            </div>
            <div className="CourseFAQRow"></div>
            <div className="CourseFAQRow"></div>
            <div className="CourseFAQRow"></div>
            <div className="CourseFAQRow"></div>
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
          <div className="CourseInfoIMG"></div>
        </div>
      </div>
    </div>
  );
};

export default Course1;

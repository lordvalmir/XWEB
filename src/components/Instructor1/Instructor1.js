import React, { useState } from "react";
import "./Instructor1.css";
import { Card } from "../Courses1/Courses1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faUsers,
  faAddressBook,
  faGraduationCap,
  faDraftingCompass,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faYoutube,
  faTwitter,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

const Instructor1 = () => {
  const [card1, toggleCard1] = useState(false);
  return (
    <div className="InstructorMain">
      <div className="InstructorTopBox">
        <div className="InstructorTopUpper">
          <div className="InstructorTopUpperLeft">
            <div className="InstructorTopUpperLeftIMG"></div>
            <div className="InstructorTopUpperLeftInfo">
              <div className="InstructorTopUpperLeftInfoLeft">
                <div className="InstructorTopUpperLeftName">
                  Somalia D Silva
                </div>
                <div className="InstructorTopUpperLeftPosition">
                  Math Teacher
                </div>
                <hr />
                <div className="InstructorTopUpperLeftCourses">
                  <FontAwesomeIcon icon={faBook} />
                  750+ Courses
                </div>
              </div>
              <div className="InstructorTopUpperLeftInfoRight">
                <div className="InstructorTopUpperFacebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="InstructorTopUpperTwitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="InstructorTopUpperYoutube">
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div className="InstructorTopUpperBehance">
                  <FontAwesomeIcon icon={faBehance} />
                </div>
              </div>
            </div>
          </div>
          <div className="InstructorTopUpperRight">
            <div className="InstructorTopUpperRightWrap">
              <div className="InstructorTopTitle">About Me</div>
              <div className="InstructorTopText">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantioloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit
              </div>
              <div className="InstructorTopText">
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet consectetur adipisci velit
              </div>
              <div className="InstructorTopBottom">
                <div className="InstructorTopBottomLeft">
                  <FontAwesomeIcon icon={faUsers} size="3x" />
                  <div className="InstructorTopBottomLeftInfo">
                    <div className="InstructorTopBottomLeftInfoTitle">
                      3045+
                    </div>
                    <div className="InstructorTopBottomLeftInfoSubtitle">
                      Saticfied Students
                    </div>
                  </div>
                </div>
                <div className="InstructorTopBottomHR"></div>
                <div className="InstructorTopBottomRight">
                  <FontAwesomeIcon icon={faAddressBook} size="3x" />
                  <div className="InstructorTopBottomLeftInfo">
                    <div className="InstructorTopBottomLeftInfoTitle">
                      3045+
                    </div>
                    <div className="InstructorTopBottomLeftInfoSubtitle">
                      Saticfied Students
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="InstructorTopLower">
          <div className="InstructorTopLowerLeft">
            <div className="InstructorTopLowerLeftWrap">
              <div className="InstructorTopLowerLeftTitle">Certifications</div>
              <div className="InstructorTopLowerLeftText">
                Sed ut perspiciatis unde omnis iste natus error sit accus
                tioloreme laudantium totam rem aperiam eaque ipsa quae ab illo
                inventoresy veritatis quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur
              </div>
              <div className="InstructorTopLowerLeftIMGs">
                <div className="InstructorTopLowerLeftIMG"></div>
                <div className="InstructorTopLowerLeftIMG"></div>
                <div className="InstructorTopLowerLeftIMG"></div>
              </div>
            </div>
          </div>
          <div className="InstructorTopLowerRight">
            <div className="InstructorTopLowerRightWrap">
              <div className="InstructorTopLowerRightTitle">Educations</div>
              <div className="InstructorTopLowerRightInfo">
                <div className="InstructorTopLowerRightBox">
                  <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                  <div>
                    <div className="InstructorTopLowerRightInfoTitle">
                      World University
                    </div>
                    <div className="InstructorTopLowerRightInfoSubtitle">
                      Computer Science
                    </div>
                  </div>
                </div>
                <div className="InstructorTopLowerRightBox">
                  <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                  <div>
                    <div className="InstructorTopLowerRightInfoTitle">
                      World University
                    </div>
                    <div className="InstructorTopLowerRightInfoSubtitle">
                      Web Development
                    </div>
                  </div>
                </div>
              </div>
              <div className="InstructorTopLowerRightTitle">Experience</div>
              <div className="InstructorTopLowerRightInfo">
                <div className="InstructorTopLowerRightBox">
                  <FontAwesomeIcon icon={faDraftingCompass} size="2x" />
                  <div>
                    <div className="InstructorTopLowerRightInfoTitle">
                      Graphics Designer
                    </div>
                    <div className="InstructorTopLowerRightInfoSubtitle">
                      Behance.net
                    </div>
                  </div>
                </div>
                <div className="InstructorTopLowerRightBox">
                  <FontAwesomeIcon icon={faDraftingCompass} size="2x" />
                  <div>
                    <div className="InstructorTopLowerRightInfoTitle">
                      Web Developer
                    </div>
                    <div className="InstructorTopLowerRightInfoSubtitle">
                      Themeforest.net
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="InstructorBottomBox">
        <div className="InstructorBottomBoxTitle">Popular Courses</div>
        <div className="InstructorBottomBoxCardRow">
          <Card
            toggleCard={() => toggleCard1(card1)}
            card={card1}
            tag={"English"}
            title={"Best Courses For Learning  English Courses"}
            link={"/Our-Courses/English"}
          />
          <Card
            toggleCard={() => toggleCard1(card1)}
            card={card1}
            tag={"Business"}
            title={"Learning About It Consulting Business Solutions "}
            link={"/Our-Courses/Business"}
          />
          <Card
            toggleCard={() => toggleCard1(card1)}
            card={card1}
            tag={"Design"}
            title={"Introduced About Basic Web Design For Begineers"}
            link={"/Our-Courses/Design"}
          />
        </div>
        <div className="InstructorBottomBoxCardRow">
          <Card
            toggleCard={() => toggleCard1(card1)}
            card={card1}
            tag={"Marketing"}
            title={"Best Courses For Learning English Courses"}
            link={"/Our-Courses/Marketing"}
          />
          <Card
            toggleCard={() => toggleCard1(card1)}
            card={card1}
            tag={"Photography"}
            title={"Learning About It Consulting Business Solutions "}
            link={"/Our-Courses/Photography"}
          />
          <Card
            toggleCard={() => toggleCard1(card1)}
            card={card1}
            tag={"Development"}
            title={"Introduced About Basic Web Design For Begineers"}
            link={"/Our-Courses/Development"}
          />
        </div>
      </div>
    </div>
  );
};

export default Instructor1;

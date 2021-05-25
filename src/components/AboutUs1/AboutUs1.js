import "./AboutUs1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faTrophy,
  faLongArrowAltRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import InfoBoxes from "../InfoBoxes/InfoBoxes";
import HomePage5 from "../HomePage5/HomePage5";
import HomePage7 from "../HomePage7/HomePage7";
import HomePage9 from "../HomePage9/HomePage9";
function AboutUs1() {
  return (
    <div className="aboutSection">
      <div className="welcomeSection">
        <div className="becomeIns">
          <div className="becomeInsLeft">
            <div className="becomeInsLeftPaperBehind"></div>
            <div className="becomeInsLeftPaperFront">
              <div class="circleBase circle1">
                <div class="circleText">
                  <b>25</b>
                  <br /> <r>Years of experience</r>
                </div>
              </div>
              <div class="circleBase circle2"></div>
            </div>
          </div>
          <div className="becomeInsRight">
            <div className="welcomeSectionInfo">
              ... Introduced About EduPlus
            </div>
            <div className="welcomeSectionTitle">Welcome To EduPlus</div>
            <div className="welcomeSectionText">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae ab illo inventore veritatis et quase
            </div>
            <div className="welcomeSectionSub">
              <div className="welcomeSectionSubIcon">
                <FontAwesomeIcon icon={faBook} />
              </div>
              <div className="welcomeSectionSubInfo">
                <div className="welcomeSectionSubTitle">
                  Professional & Expert
                </div>
                <div className="welcomeSectionSubText">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur vels
                </div>
              </div>
            </div>
            <div className="welcomeSectionSub2">
              <div className="welcomeSectionSubIcon">
                <FontAwesomeIcon icon={faTrophy} />
              </div>
              <div className="welcomeSectionSubInfo">
                <div className="welcomeSectionSubTitle">
                  Job Placement Support
                </div>
                <div className="welcomeSectionSubText">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur vels
                </div>
              </div>
            </div>
            <div className="welcomeSectionButton">
              learn more{" "}
              <FontAwesomeIcon icon={faLongArrowAltRight} size="2x" />
            </div>
          </div>
        </div>
        <InfoBoxes />
      </div>
      <div className="instituteSection">
        <div className="instituteSectionBlock">
          <div className="instituteSectionLeft">
            <div className="instituteSectionLeftInfo">... Who We Are</div>
            <div className="instituteSectionLeftTitle">Institute Goals</div>
            <div className="instituteSectionLeftText">
              Sed ut perspiciat unde omnis iste natus voluptate accusantium
              doloremque laudantium totam rem ape riam eaque ipsa quae ab illo
              inventore
            </div>
            <div className="instituteSectionLeftGraphs">
              <div className="instituteSectionLeftGraph">
                <div className="leftGraphCircle1">
                  <div class="arc"></div>83<p>%</p>
                </div>
                <div className="leftGraphText">Enginering Studies</div>
              </div>
              <div className="instituteSectionLeftGraph">
                <div className="leftGraphCircle2">
                  <div class="arc"></div>
                  <div class="arc2"></div>
                  <div>79%</div>
                </div>
                <div className="leftGraphText">General & Other Studies</div>
              </div>
            </div>
          </div>
          <div className="instituteSectionRight">
            <div className="instituteSectionRightPlay"><FontAwesomeIcon icon={faPlay} /></div>
          </div>
        </div>
      </div>
        <HomePage5/>
        <HomePage7/>
        <HomePage9/>
    </div>
  );
}

export default AboutUs1;

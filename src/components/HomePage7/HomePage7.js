import "./HomePage7.css";
import sign from "../../images/sign.png";

import simg1 from "../../images/simg1.jpg";
import simg2 from "../../images/simg2.jpg";
import simg3 from "../../images/simg3.jpg";
import simg4 from "../../images/simg4.jpg";
import simg5 from "../../images/simg5.jpg";
import simg6 from "../../images/simg6.jpg";
import simg7 from "../../images/simg7.jpg";
import simg8 from "../../images/simg8.jpg";

const HomePage7 = () => {
  return (
    <div className="bg6">
      <div className="studentMain">
        <div className="studentTitle">... Students Feedback ...</div>
        <div className="studentSubtitle">What Our Students Say</div>
        <div className="StudentsBlock">
          <div className="StudentsBlockLeft">
            <div className="paper">
              <div className="bigPaperMain">
                <div className="bigPaperMainText">
                  Sed ut perspiciatis unde omnis natus error sit voluptatem
                  accusa ntium dolore mque lauda enim ad minima veniam quis
                  nostrumexe rcitationem ullam corporise
                </div>
                <div className="bigPaperMainSubText">
                  Rnimad minima veniam quis nostreercit ationem ullam corporis
                  suscipit laboriosam nisiut
                </div>
                <div className="bigPaperMainProfile">
                  <div className="bigPaperMainProfileIMG">
                    <svg
                      width="51"
                      height="51"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#b7b7b7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="51"
                        height="51"
                        viewBox="2 1.593 50 50"
                      >
                        <path
                          paint-order="stroke fill markers"
                          fill-rule="evenodd"
                          d="M27 1.593c13.807 0 25 11.194 25 25 0 13.808-11.193 25-25 25s-25-11.192-25-25c0-13.806 11.193-25 25-25z"
                        />
                      </svg>
                    </svg>
                  </div>
                  <div className="bigPaperMainProfileIMGINFO">
                    <div className="bigPaperMainProfileName">
                      Sousa Fernandes
                    </div>
                    <div className="bigPaperMainProfilePosition">
                      CEO & Founder
                    </div>
                  </div>
                </div>
                <div className="bigPaperMainFooter">
                  <div className="bigPaperMainButtons">
                    <div className="bigPaperMainButton">
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      >
                        <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
                      </svg>
                    </div>
                    <div className="bigPaperMainButton">
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      >
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                      </svg>
                    </div>
                  </div>
                  <div className="bigPaperMainSigns">
                    <img
                      src={sign}
                      width="124px"
                      height="106px"
                      alt="sign"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="StudentsBlockRight">
            <div className="StudentsBlockRightFiles">
              <div className="StudentsBlockRightFiles1">
                <div className="smallPaper1">
                  <img src={simg1} alt={"logo"} />
                </div>
                <div className="smallPaper2">
                  <img src={simg2} alt={"logo"} />
                </div>
              </div>
              <div className="StudentsBlockRightFiles2">
                <div className="smallPaper">
                  <img src={simg3} alt={"logo"} />
                </div>
                <div className="smallPaper">
                  <img src={simg4} alt={"logo"} />
                </div>
                <div className="smallPaper">
                  <img src={simg5} alt={"logo"} />
                </div>
              </div>
              <div className="StudentsBlockRightFiles3">
                <div className="smallPaper">
                  <img src={simg6} alt={"logo"} />
                </div>
                <div className="smallPaper">
                  <img src={simg7} alt={"logo"} />
                </div>
                <div className="smallPaper">
                  <img src={simg8} alt={"logo"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage7;

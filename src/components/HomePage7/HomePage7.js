import { useState } from "react";
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

const data = [
  {
    text1:
      "Sed ut perspiciatis unde omnis natus error sit voluptatemaccusa ntium dolore mque lauda enim ad minima veniam quisnostrumexe rcitationem ullam corporise",
    text2:
      "Rnimad minima veniam quis nostreercit ationem ullam corporis suscipit laboriosam nisiut",
    name: "Sousa Fernandes",
    position: "CEO & Founder",
    img: simg1,
  },
  {
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat lacus a accumsan. Donec ullamcorper, odio a convallis dictum, arcu lectus",
    text2:
      "Nam vel enim arcu. Quisque ornare justo in orci consectetur iaculis. Aenean a metus imperdiet.",
    name: "Lorem ipsum.",
    position: "Marketing",
    img: simg2,
  },
  {
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sapien massa, consequat in dui ullamcorper, placerat consectetur ipsum. Proin vitae ipsum dictum.",
    text2:
      "Nam sollicitudin porta velit, vel posuere erat scelerisque quis. Curabitur rutrum est quam.",
    name: "Dolor sit",
    position: "Designer",
    img: simg3,
  },
];

const HomePage7 = () => {
  const [page, setPage] = useState(1);

  const nextPage = (operation) => {
    if (operation) {
      if (page === 2) {
        setPage(0);
      } else {
        setPage(page + 1);
      }
    } else {
      if (page === 0) {
        setPage(2);
      } else {
        setPage(page - 1);
      }
    }
  };

  return (
    <div className="bg6">
      <div className="studentMain">
        <div className="studentTitle">... Students Feedback ...</div>
        <div className="studentSubtitle">What Our Students Say</div>
        <div className="StudentsBlock">
          <div className="StudentsBlockLeft">
            <div className="paper">
              <div className="bigPaperMain">
                <div className="bigPaperMainText">{data[page].text1}</div>
                <div className="bigPaperMainSubText">{data[page].text2}</div>
                <div className="bigPaperMainProfile">
                  <div className="bigPaperMainProfileIMG">
                    <img src={data[page].img}/>
                  </div>
                  <div className="bigPaperMainProfileIMGINFO">
                    <div className="bigPaperMainProfileName">
                      {data[page].name}
                    </div>
                    <div className="bigPaperMainProfilePosition">
                      {data[page].position}
                    </div>
                  </div>
                </div>
                <div className="bigPaperMainFooter">
                  <div
                    className="bigPaperMainButtons"
                    onClick={() => nextPage(false)}
                  >
                    <div
                      className="bigPaperMainButton"
                      onClick={() => nextPage(true)}
                    >
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

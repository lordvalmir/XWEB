import React, { useState } from "react";
import "./Faq1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faAngleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import iimg1 from "../../images/iimg1.jpg";

const FaqRow = ({ setFAQ, faq, title }) => {
  return (
    <div>
      <div
        className={faq ? "FaqRightFaqItemOpen" : "FaqRightFaqItem"}
        onClick={() => setFAQ(!faq)}
      >
        {title}
        {faq ? (
          <FontAwesomeIcon icon={faAngleDown} />
        ) : (
          <FontAwesomeIcon icon={faAngleRight} />
        )}
      </div>
      <div>
        {faq ? (
          <div className="Faqtext">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur
          </div>
        ) : null}
      </div>
    </div>
  );
};

const Faq1 = () => {
  const [faq1, setFAQ1] = useState(false);
  const [faq2, setFAQ2] = useState(false);
  const [faq3, setFAQ3] = useState(false);
  const [faq4, setFAQ4] = useState(false);
  const [faq5, setFAQ5] = useState(false);
  const [faq6, setFAQ6] = useState(false);
  const [faq7, setFAQ7] = useState(false);
  const [faq8, setFAQ8] = useState(false);
  const [faq9, setFAQ9] = useState(false);
  const [faq10, setFAQ10] = useState(false);
  return (
    <div className="FaqGlobal">
      <div className="FaqMain">
        <div className="FaqBoxes">
          <div className="FaqLeft">
            <div className="FaqLeftAutor">
              <div className="FaqLeftAutorFace">
                <img src={iimg1} alt={"logo"} />
              </div>
              <div className="FaqLeftAutorName">David Warner</div>
              <div className="FaqLeftAutorPosition">CEO & Founder</div>
              <div className="FaqLeftAutorText">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusan umdolremque laudantium totam rem aperiam eaque ipsa quae
                ab illoinventore veritati quasi
              </div>
            </div>
            <div className="FaqLeftTouch">
              <div className="FaqRightTitle">Get In Touch</div>
              <div className="FaqRightItem">
                <input placeholder="Your Name"></input>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="FaqRightItem">
                <input placeholder="Your Email"></input>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="FaqRightMessage">
                <input placeholder="Write Message"></input>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="FaqRightButton">
                Send Message
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
                    ></path>
                  </svg>
                </svg>
              </div>
            </div>
          </div>
          <div className="FaqRight">
            <div className="FaqRightFaqTitle">Frequently Asked Questions</div>
            <FaqRow
              setFAQ={() => setFAQ1(!faq1)}
              faq={faq1}
              title={
                "Avoid Keyboard Event-Related Bugs Browser-Based Transliteration"
              }
            />
            <FaqRow
              setFAQ={() => setFAQ2(!faq2)}
              faq={faq2}
              title={"Introducing Alpine.js: A Tiny JavaScript Framework"}
            />
            <FaqRow
              setFAQ={() => setFAQ3(!faq3)}
              faq={faq3}
              title={"Why Are We Talking About CSS4?"}
            />
            <FaqRow
              setFAQ={() => setFAQ4(!faq4)}
              faq={faq4}
              title={"When You Find A Good Idea, Look For A Better One"}
            />
            <FaqRow
              setFAQ={() => setFAQ5(!faq5)}
              faq={faq5}
              title={
                "Inspired Design Decisions Neville Design Cannot Remain Neutral"
              }
            />
            <FaqRow
              setFAQ={() => setFAQ6(!faq6)}
              faq={faq6}
              title={
                "Inspired Design Decisions Neville Design Cannot Remain Neutral"
              }
            />
            <FaqRow
              setFAQ={() => setFAQ7(!faq7)}
              faq={faq7}
              title={"Embrace The Possibilities March 2020 Wallpapers"}
            />
            <FaqRow
              setFAQ={() => setFAQ8(!faq8)}
              faq={faq8}
              title={"Embrace The Possibilities March 2020 Wallpapers"}
            />
            <FaqRow
              setFAQ={() => setFAQ9(!faq9)}
              faq={faq9}
              title={"Embrace The Possibilities March 2020 Wallpapers"}
            />
            <FaqRow
              setFAQ={() => setFAQ10(!faq10)}
              faq={faq10}
              title={"Embrace The Possibilities March 2020 Wallpapers"}
            />
          </div>
        </div>
      </div>
      <div className="FaqFooterMain">
        <div className="FaqFooterLeft">
          <div className="FaqFooterLeftBlock">
            <div className="FaqFooterLeftBlockinto">... Build A Career</div>
            <div className="FaqFooterLeftBlockTitle">Become an Instructor</div>
            <div className="FaqFooterLeftBlockText">
              Sed ut perspiciati unde omnis iste natus error sit voluptatem
              accusanc tium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae abillo inventore veritatis et quasi architecto beatae vitae
              dicta sun
            </div>
            <div className="FaqFooterLeftBlockButton">
              apply now
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
                  ></path>
                </svg>
              </svg>
            </div>
          </div>
        </div>
        <div className="FaqFooterRight">
          <div className="FaqFooterRightBlock">
            <div className="FaqFooterRightBlockinto">... Build A Career</div>
            <div className="FaqFooterRightBlockTitle">Become a Partner</div>
            <div className="FaqFooterRightBlockText">
              Sed ut perspiciati unde omnis iste natus error sit voluptatem
              doloremque laudantium totam rem aperiam eaque ipsa qabillo
              inventore veritatis et quasi architecto beatae vitae
            </div>
            <div className="FaqFooterRightBlockButton">
              contact us
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
                  ></path>
                </svg>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq1;

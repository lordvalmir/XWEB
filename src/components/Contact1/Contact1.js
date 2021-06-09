import React from "react";
import "./Contact1.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faEnvelope,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import img30 from "../../images/img30.jpg";

const Contact1 = () => {
  return (
    <div className="ContactMain">
      <div className="ContactBoxes">
        <div className="ContactBoxLeft">
          <div className="ContactBoxLeftInfo">... Quick Contact</div>
          <div className="ContactBoxLeftTitle">Get In Touch</div>
          <div className="ContactBoxLeftText">
            Sed ut perspiciati unde omnis iste natus error sit voluptatem
            accusanc doloremque laudantium totam rem aperiam eaque ipsa quae
          </div>
          <div className="ContactBoxLeftContacts">
            <div className="ContactBoxLeftContact">
              <div className="ContactBoxLeftCircle">
                <FontAwesomeIcon icon={faMapMarker} />
              </div>
              <div className="ContactBoxLeftCircleInfo">
                <div className="ContactBoxLeftCircleInfoTitle">Locations</div>
                <div className="ContactBoxLeftCircleInfoText">
                  250 Main Street, New York
                </div>
              </div>
            </div>
            <div className="ContactBoxLeftContact">
              <div className="ContactBoxLeftCircle">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="ContactBoxLeftCircleInfo">
                <div className="ContactBoxLeftCircleInfoTitle">Email Us</div>
                <div className="ContactBoxLeftCircleInfoText">
                  support@gmail.com
                </div>
              </div>
            </div>
            <div className="ContactBoxLeftContact">
              <div className="ContactBoxLeftCircle">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="ContactBoxLeftCircleInfo">
                <div className="ContactBoxLeftCircleInfoTitle">Phone Us</div>
                <div className="ContactBoxLeftCircleInfoText">
                  +012 (345) 6789 99
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="ContactBoxLeftMedia">
            <div className="ContactBoxLeftMediaCircle">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="ContactBoxLeftMediaCircle">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="ContactBoxLeftMediaCircle">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className="ContactBoxLeftMediaCircle">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
        </div>
        <div className="ContactBoxRight">
          <img src={img30} alt={"logo"} />
        </div>
      </div>
      <div className="ContactMessage">
        <div className="ContactMessageInfo">... Get In Touch</div>
        <div className="ContactMessageTitle">Leave Us Message</div>
        <div className="ContactMessageForm">
          <div className="ContactMessageInput">
            <input placeholder={"Full Name"}></input>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="ContactMessageInput">
            <input placeholder={"Email Address"}></input>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="ContactMessageInput">
            <input placeholder={"Phone Number"}></input>
            <FontAwesomeIcon icon={faPhone} />
          </div>
        </div>
        <div className="ContactMessageInputMessage">
          <input placeholder={"Write Message"}></input>
        </div>
        <div className="ContactMessageInputButton">
          send message
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
    </div>
  );
};

export default Contact1;

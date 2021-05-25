import "./HomePage6.css";
import stickers from "../../images/stickers.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
function HomePage6() {
  return (
    <div className="bg5">
      <div className="coursesTitle">... Latest Events ...</div>
      <div className="categoriesSubTitle">Upcoming Events</div>
      <div className="eventsBox">
        <div className="eventsBoxLeft">
          <div className="eventIMG"></div>
          <div className="eventStickers">
            <img src={stickers} width="71px" height="71px" alt="sticker"></img>
          </div>
          <div className="eventInfo">
            <div className="eventInfoBox">
              <div className="eventInfoBox1">
                <div className="eventInfoAux">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <div className="eventInfoAuxText">25 Nov 2020</div>
                </div>
                <div className="eventInfoAux">
                  <FontAwesomeIcon icon={faClock} />
                  <div className="eventInfoAuxText">08 am - 09 pm</div>
                </div>
                <div className="eventInfoAux">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <div className="eventInfoAuxText">Paris, France</div>
                </div>
              </div>
              <div className="eventInfoTitle">
                Web Design & Development Conference 2020
              </div>
              <div className="eventInfoText">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et
              </div>
              <div className="eventInfoButton">
                <div className="eventInfoButtonText">Join event</div>
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
        <div className="eventsBoxRight">
          <div className="eventsSideBoxTop">
            <div className="eventStickers2">
              <img
                src={stickers}
                width="71px"
                height="71px"
                alt="sticker"
              ></img>
            </div>
            <div className="eventInfoBoxTopContainer">
              <div className="eventInfoBoxTop">
                <div className="eventInfoBoxDate">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <div className="eventInfoBoxDateText">25 Nov 2020</div>
                </div>
                <div className="eventInfoBoxDate">
                  <FontAwesomeIcon icon={faClock} />
                  <div className="eventInfoBoxDateText">08 am - 09 pm</div>
                </div>
              </div>
              <div className="eventInfoBoxTopTitle">Annual Conference 2020</div>
              <div className="eventInfoBoxTopButton">
                <div className="eventInfoButtonTopText">Join event</div>
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
          <div className="eventsSideBoxBot">
            <div className="eventStickers2">
              <img
                src={stickers}
                width="71px"
                height="71px"
                alt="sticker"
              ></img>
            </div>
            <div className="eventInfoBoxTopContainer">
              <div className="eventInfoBoxTop">
                <div className="eventInfoBoxDate">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <div className="eventInfoBoxDateText">25 Nov 2020</div>
                </div>
                <div className="eventInfoBoxDate">
                  <FontAwesomeIcon icon={faClock} />
                  <div className="eventInfoBoxDateText">08 am - 09 pm</div>
                </div>
              </div>
              <div className="eventInfoBoxTopTitle">Annual Conference 2020</div>
              <div className="eventInfoBoxTopButton">
                <div className="eventInfoButtonTopText">Join event</div>
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
      <div className="eventsButtonMore">
        <div className="eventsButtonMoreText">
          <div className="eventsButtonMoreButton">
            <div className="eventsBText">View all events</div>
            <svg
              width="46"
              height="11"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0.389 46 10.222"
              fill="#062a35"
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
  );
}

export default HomePage6;

import React, { useState } from "react";
import "./Event1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faHome,
  faMapMarker,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Event1 = () => {
  return (
    <div className="EventMain">
      <div className="EventBoxes">
        <div className="EventBoxTitle">Annual Conference 2020</div>
        <div className="EventBoxInfo">
          <div className="EventBoxInfoLeft">
            <div className="EventBoxInfoLeftItem">
              <FontAwesomeIcon icon={faCalendar} />
              25 November 2020
            </div>
            <div className="EventBoxInfoLeftItem">
              <FontAwesomeIcon icon={faClock} />
              Sat - Friday, 08 am - 09 pm
            </div>
            <div className="EventBoxInfoLeftItem">
              <FontAwesomeIcon icon={faMapMarker} />
              250 Main Street, USA
            </div>
            <div className="EventBoxInfoLeftItem">
              <FontAwesomeIcon icon={faHome} />
              New York Museum
            </div>
          </div>
          <div className="EventBoxInfoRight">
            <div className="EventBoxInfoRightBox1">$20</div>
            <div className="EventBoxInfoRightBox2">
              join event
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
        <div className="EventBoxText">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi archite cto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea
          voluptate velit esse quam nihil molestiae consequatur, vel illum qui
          dolorem eum fugiat quo voluptas nulla
        </div>
        <div className="EventBoxIMG"></div>
        <div className="EventBoxText">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasur d ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi archite beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est
        </div>
        <div className="EventBoxMapSection">
          <div className="EventBoxMapSectionLeft">
            <div className="EventBoxMapSectionTitle">Importance Of Events</div>
            <div className="EventBoxMapSectionText">
              No one rejects, dislikes, or avoids pleasure itself because it is
              pleasure but because those who do not know how to pursue pleasure
              rationally encounter consequences that are extremely painful. Nor
              again is there anyone who loves or pursues or desires to obtain
              pain of itself, because it is pain, but because occasionally
              circumstances occur in which toil and pain can procure him some
              great pleasure.
            </div>
            <div className="EventBoxMapSectionPoints">
              <div className="EventBoxMapSectionPoint">
                <div className="EventBoxMapSectionPointCircle">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Creating Secure Password Flows With NodeJS And MySQL
              </div>
              <div className="EventBoxMapSectionPoint">
                <div className="EventBoxMapSectionPointCircle">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Make Honest Design Work For Digital Business With Ethical Design
              </div>
              <div className="EventBoxMapSectionPoint">
                <div className="EventBoxMapSectionPointCircle">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Building An E-Commerce Site With October CMS Shopaholic
              </div>
              <div className="EventBoxMapSectionPoint">
                <div className="EventBoxMapSectionPointCircle">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Smashing Podcast Episode 11 With Eduardo Bouças What Is
                Sourcebit?
              </div>
              <div className="EventBoxMapSectionPoint">
                <div className="EventBoxMapSectionPointCircle">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Avoid Keyboard Event-Related Bugs Browser-Based Transliteration
              </div>
            </div>
          </div>
          <div className="EventBoxMapSectionRight"></div>
        </div>
        <div className="EventBoxMoreEvents">
          <div className="EventBoxMoreEvent">
            <div className="EventBoxMoreEventPrice">$20</div>
            <div className="EventBoxMoreEventInfo">
              <div className="EventBoxMoreEventInfoLine">
                <div className="EventBoxMoreEventInfoLineItem">
                  <FontAwesomeIcon icon={faCalendar} />
                  25 Nov 2020
                </div>
                <div className="EventBoxMoreEventInfoLineItem">
                  <FontAwesomeIcon icon={faClock} />
                  08 am - 09 pm
                </div>
              </div>
              <div className="EventBoxMoreEventInfoTitle">
                Annual Conference 2020
              </div>
              <div className="EventBoxMoreEventInfoJoin">
                join event
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
          <div className="EventBoxMoreEvent">
            <div className="EventBoxMoreEventPrice">$20</div>
            <div className="EventBoxMoreEventInfo">
              <div className="EventBoxMoreEventInfoLine">
                <div className="EventBoxMoreEventInfoLineItem">
                  <FontAwesomeIcon icon={faCalendar} />
                  25 Nov 2020
                </div>
                <div className="EventBoxMoreEventInfoLineItem">
                  <FontAwesomeIcon icon={faClock} />
                  08 am - 09 pm
                </div>
              </div>
              <div className="EventBoxMoreEventInfoTitle">
                PHP Conference 2020
              </div>
              <div className="EventBoxMoreEventInfoJoin">
                join event
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
          <div className="EventBoxMoreEvent">
            <div className="EventBoxMoreEventPrice">$20</div>
            <div className="EventBoxMoreEventInfo">
              <div className="EventBoxMoreEventInfoLine">
                <div className="EventBoxMoreEventInfoLineItem">
                  <FontAwesomeIcon icon={faCalendar} />
                  25 Nov 2020
                </div>
                <div className="EventBoxMoreEventInfoLineItem">
                  <FontAwesomeIcon icon={faClock} />
                  08 am - 09 pm
                </div>
              </div>
              <div className="EventBoxMoreEventInfoTitle">
                Design Conference 2020
              </div>
              <div className="EventBoxMoreEventInfoJoin">
                join event
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
        </div>
      </div>
    </div>
  );
};

export default Event1;

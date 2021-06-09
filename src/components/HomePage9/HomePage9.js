import "./HomePage9.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faComment,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import img11 from "../../images/img11.jpg";
import img12 from "../../images/img12.jpg";
import img13 from "../../images/img13.jpg";

const New = ({ title, img, link }) => {
  return (
    <div className="new">
      <div className="newIMG"><img src={img} alt={"logo"} /></div>
      <div className="newMain">
        <a href={link}><div className="newButton">
          <FontAwesomeIcon icon={faArrowRight} />
        </div></a>

        <div className="newBlock">
          <div className="newINFO">
            <div className="newINFOText">
              <FontAwesomeIcon icon={faCalendarAlt} />
              25 Nov 2020
            </div>
            <div className="newINFOText">
              <FontAwesomeIcon icon={faComment} />
              Com(30)
            </div>
          </div>
          <div className="newTitle">{title}</div>
          <div className="newName">
            <svg
              width="36"
              height="36"
              xmlns="http://www.w3.org/2000/svg"
              fill="#707070"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="2 1.969 35 35"
              >
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M19.5 1.969c9.665 0 17.5 7.835 17.5 17.5 0 9.664-7.835 17.5-17.5 17.5S2 29.133 2 19.469c0-9.665 7.835-17.5 17.5-17.5z"
                />
              </svg>
            </svg>
            David Simala
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage9 = () => {
  return (
    <div className="bg8">
      <div className="coursesTitle">... Artices & Tipes ...</div>
      <div className="categoriesSubTitle">Latest News & Blog</div>
      <div className="news">
        <New
          title={"Learning Resources In Challenec Times Online Workshops"}
          img={img11}
          link="/Blog-Grid/1"
        />
        <New
          title={
            "Djang Highlights Models Admin And Harness Rela Tional Database"
          }
          img={img12}
          link="/Blog-Grid/2"
        />
        <New
          title={
            "Smash Podcast Episode With Laura Kalbag What Is Online Privacy"
          }
          img={img13}
          link="/Blog-Grid/3"
        />
      </div>
    </div>
  );
};

export default HomePage9;

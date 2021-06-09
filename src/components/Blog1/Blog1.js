import React from "react";
import "./Blog1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faCalendar,
  faComment,
  faHeart,
  faPlay,
  faSearch,
  faAngleRight,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";
import img7 from "../../images/img7.jpg";
import img8 from "../../images/img8.jpg";
import img21 from "../../images/img21.jpg";
import img22 from "../../images/img22.jpg";
import img25 from "../../images/img25.jpg";

const Block = ({ img }) => {
  return (
    <div className="BlogVideoMain">
      <div className="BlogVideo">
        <div className="BlogPlayButton">
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>
      <div className="BlogVideoDetail">
        <div className="BlogVideoDetailTag">design</div>
        <div className="BlogVideoDetailTitle">
          Inspire Design Decision With Ott Storch When Idea How To Space And
          Kern Punctuation
        </div>
        <div className="BlogVideoDetailInfo">
          <div className="BlogVideoDetailItem">
            <FontAwesomeIcon icon={faUserCircle} />
            By Somalia Doe
          </div>
          <div className="BlogVideoDetailItem">
            <FontAwesomeIcon icon={faCalendar} />
            25 Nov 2020
          </div>
          <div className="BlogVideoDetailItem">
            <FontAwesomeIcon icon={faComment} />
            Commnets (05)
          </div>
          <div className="BlogVideoDetailItem">
            <FontAwesomeIcon icon={faHeart} />
            Like (1K)
          </div>
        </div>
        <div className="BlogVideoDetailText">
          Sed perspiciatis unde omnis iste natus error voluptatem accusantium
          doloremque laudanestium totam rem aperiam eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas quam nihil
          molestiae consequatur
        </div>
        <a href="/Blog-Grid/someNews">
          <div className="BlogVideoDetailButton">
            Read More
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
        </a>
      </div>
    </div>
  );
};

const Blog1 = () => {
  return (
    <div className="BlogMain">
      <div className="BlogBoxes">
        <div className="BlogBoxLeft">
          <Block img={img5} />
          <Block img={img6} />
          <Block img={img7} />
          <div className="BlogBoxAddver">
            <div className="BlogBoxAddverTitle">
              Setting TypeScript For Modern React Projects Using Webpack How To
              Build A Vue Survey App Using Firebase Authentication
            </div>
            <div className="BlogBoxAddverLower">
              <div className="BlogBoxAddverLine"></div>
              <div className="BlogBoxAddverLineText">Goncalves Pereira</div>
            </div>
          </div>
          <Block />
        </div>
        <div className="BlogBoxRight">
          <div className="BlogBoxRightSearch">
            <div className="BlogBoxRightSearchTitle">Search Here</div>
            <div className="BlogBoxRightSearchInput">
              <input placeholder="Keywords"></input>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
          <div className="BlogBoxRightLinks">
            Web Design
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="BlogBoxRightLinks">
            Computer Engineering
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="BlogBoxRightLinks">
            Business Studies
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="BlogBoxRightLinks">
            Medical & Health
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="BlogBoxRightLinks">
            Web Development
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="BlogBoxRightLinks">
            Learning English
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="BlogBoxRightNews">
            <div className="BlogBoxRightNewsTitle">Recent News</div>
            <div className="BlogBoxRightOneNews">
              <div className="BlogBoxRightOneNewsIMG">
                <img src={img8} alt={"logo"} />
              </div>
              <div className="BlogBoxRightOneNewsInfo">
                <div className="BlogBoxRightOneNewsInfoTitle">
                  Smaing Podcast Epis Ode 15 With Phile
                </div>
                <div className="BlogBoxRightOneNewsInfoSubtitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  By Silva Hola
                </div>
              </div>
            </div>
            <div className="BlogBoxRightOneNews">
              <div className="BlogBoxRightOneNewsIMG">
                <img src={img21} alt={"logo"} />
              </div>
              <div className="BlogBoxRightOneNewsInfo">
                <div className="BlogBoxRightOneNewsInfoTitle">
                  Smaing Podcast Epis Ode 15 With Phile
                </div>
                <div className="BlogBoxRightOneNewsInfoSubtitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  By Silva Hola
                </div>
              </div>
            </div>
            <div className="BlogBoxRightOneNews">
              <div className="BlogBoxRightOneNewsIMG">
                <img src={img22} alt={"logo"} />
              </div>
              <div className="BlogBoxRightOneNewsInfo">
                <div className="BlogBoxRightOneNewsInfoTitle">
                  Smaing Podcast Epis Ode 15 With Phile
                </div>
                <div className="BlogBoxRightOneNewsInfoSubtitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  By Silva Hola
                </div>
              </div>
            </div>
            <div className="BlogBoxRightOneNews2">
              <div className="BlogBoxRightOneNewsIMG">
                <img src={img25} alt={"logo"} />
              </div>
              <div className="BlogBoxRightOneNewsInfo">
                <div className="BlogBoxRightOneNewsInfoTitle">
                  Smaing Podcast Epis Ode 15 With Phile
                </div>
                <div className="BlogBoxRightOneNewsInfoSubtitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  By Silva Hola
                </div>
              </div>
            </div>
          </div>
          <div className="BlogBoxRightGallery">
            <div className="BlogBoxRightGalleryTitle">Photo Gallery</div>
            <div className="BlogBoxRightGalleryPhotos gal">
              <div className="BlogBoxRightGalleryPhoto">
                <FontAwesomeIcon icon={faCamera} size="2x" />
              </div>
              <div className="BlogBoxRightGalleryPhoto1">
                <FontAwesomeIcon icon={faCamera} size="2x" />
              </div>
              <div className="BlogBoxRightGalleryPhoto2">
                <FontAwesomeIcon icon={faCamera} size="2x" />
              </div>
              <div className="BlogBoxRightGalleryPhoto3">
                <FontAwesomeIcon icon={faCamera} size="2x" />
              </div>
              <div className="BlogBoxRightGalleryPhoto4">
                <FontAwesomeIcon icon={faCamera} size="2x" />
              </div>
              <div className="BlogBoxRightGalleryPhoto5">
                <FontAwesomeIcon icon={faCamera} size="2x" />
              </div>
            </div>
          </div>
          <div className="BlogBoxRightTags">
            <div className="BlogBoxRightTagsTitle">Popular Tags</div>
            <div className="BlogBoxRightTagColection">
              <div className="BlogBoxRightTag">Design</div>
              <div className="BlogBoxRightTag">Portfolio</div>
              <div className="BlogBoxRightTag">Energy</div>
              <div className="BlogBoxRightTag">Resume</div>
              <div className="BlogBoxRightTag">Gallery</div>
              <div className="BlogBoxRightTag">Renewable</div>
            </div>
          </div>
          <div className="BlogBoxRightIMG">
            <img src={img25} alt={"logo"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;

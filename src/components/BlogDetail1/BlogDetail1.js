import React from "react";
import "./BlogDetail1.css";
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
  faCheck,
  faQuoteLeft,
  faUser,
  faLongArrowAltRight,
  faEnvelope,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";


import simg1 from '../../images/simg1.jpg'
import simg2 from '../../images/simg2.jpg'
import simg3 from '../../images/simg3.jpg'
import simg4 from '../../images/simg4.jpg'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'
import img8 from '../../images/img8.jpg'
import img9 from '../../images/img9.jpg'
import img11 from '../../images/img11.jpg'
import img21 from '../../images/img21.jpg'
import img19 from '../../images/img19.jpg'
import img16 from '../../images/img16.jpg'
import img25 from '../../images/img25.jpg'

const BlogDetail1 = () => {
  return (
    <div className="BlogMain">
      <div className="BlogBoxes">
        <div className="BlogBoxLeft">
          <div className="BlogVideo">
            <div className="BlogPlayButton">
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
          <div className="BlogDetailContent">
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
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta suntexplicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullacorporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur vel illum qui dolorem
            </div>
            <div className="BlogVideoDetailSubtitle">Why Needs Education</div>
            <div className="BlogVideoDetailText">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem enim ad minima veniam
            </div>
            <div className="BlogVideoDetailInterIMG"><img src={img6} alt={"logo"}/></div>
            <div className="BlogVideoDetailInterPoints">
              <div className="BlogVideoDetailInterPoint">
                <div className="BlogVideoDetailInterPointCircle">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Inspired Design Decisions With Neville Brody: Design Cannot
                Remain Neutral
              </div>
              <div className="BlogVideoDetailInterPoint">
                <div className="BlogVideoDetailInterPointCircle">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Avoid Keyboard Event-Related Bugs In Browser-Based
                Transliteration
              </div>
              <div className="BlogVideoDetailInterPoint">
                <div className="BlogVideoDetailInterPointCircle">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Embrace The Possibilities (March 2020 Wallpapers)
              </div>
            </div>
            <div className="BlogVideoDetailSubtitle">
              Best Articles For Web Design
            </div>
            <div className="BlogVideoDetailText">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem enim ad minima veniam
            </div>
            <div className="BlogVideoDetailAdvert">
              <div className="BlogVideoDetailAdvertTitle">
                How To Build An Accessible Front-End Application With Chakra UI
                And Nuxt.js
              </div>
              <div className="BlogVideoDetailAdvertSubtitle">
                <FontAwesomeIcon icon={faQuoteLeft} />
                Norman S. Roberts
              </div>
            </div>
            <div className="BlogVideoDetailTags">
              <div className="BlogVideoDetailTagsAux">
                <b>Tags : </b>
                <div className="BlogVideoDetailTagsText">
                  Business Cart, Design & Branding
                </div>
              </div>
              <div>
                <b>Share :</b>
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faGoogle} />
              </div>
            </div>
            <div className="BlogVideoDetailInstructor">
              <div className="BlogVideoDetailInstructorPhoto"><img src={simg4} alt={"logo"}/></div>
              <div className="BlogVideoDetailInstructorInfo">
                <div className="BlogVideoDetailInstructorTitle">
                  Eugene A. Pearson
                </div>
                <div className="BlogVideoDetailInstructorText">
                  But must explain to you how all this mistake idea deounci
                  asure and praising pain was born and will give you comete
                  account the system, and expound the actual teach
                </div>
                <div className="BlogVideoDetailInstructorMedia">
                  <FontAwesomeIcon icon={faFacebookF} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faGoogle} />
                </div>
              </div>
            </div>
            <div className="BlogVideoDetailCurses">
              <div className="BlogVideoDetailCurse">
                <div className="BlogVideoDetailCurseImg"><img src={img19} alt={"logo"}/></div>
                <div className="BlogVideoDetailCurseInfo">
                  <div className="BlogVideoDetailCurseTitle">
                    Mixing Tangible & Intan Interfaces Using
                  </div>
                  <div className="BlogVideoDetailCurseSubInfo">
                    <div className="BlogVideoDetailCurseSubItem">
                      <FontAwesomeIcon icon={faUser} />
                      Soamlia
                    </div>
                    <div className="BlogVideoDetailCurseSubItem">
                      <FontAwesomeIcon icon={faCalendar} />
                      05 Aug 2020
                    </div>
                  </div>
                </div>
              </div>
              <div className="BlogVideoDetailCurse">
                <div className="BlogVideoDetailCurseImg"><img src={img16} alt={"logo"}/></div>
                <div className="BlogVideoDetailCurseInfo">
                  <div className="BlogVideoDetailCurseTitle">
                    Mixing Tangible & Intan Interfaces Using
                  </div>
                  <div className="BlogVideoDetailCurseSubInfo">
                    <div className="BlogVideoDetailCurseSubItem">
                      <FontAwesomeIcon icon={faUser} />
                      Soamlia
                    </div>
                    <div className="BlogVideoDetailCurseSubItem">
                      <FontAwesomeIcon icon={faCalendar} />
                      05 Aug 2020
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="BlogVideoDetailSubtitle">People’s Comments</div>
            <div className="BlogVideoDetailComment1">
              <div className="BlogVideoDetailCommentIMG"><img src={simg2} alt={"logo"}/></div>
              <div className="BlogVideoDetailCommentIInfo">
                <div className="BlogVideoDetailCommentITop">
                  <div className="BlogVideoDetailCommentITitle">
                    David Angel Makel
                  </div>
                  <div className="BlogVideoDetailCommentReply">
                    Reply Comments
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </div>
                </div>
                <div className="BlogVideoDetailCommentISubtitle">
                  IT Consultant
                </div>
                <div className="BlogVideoDetailCommentIText">
                  It is a long established fact that a reader will be distracted
                  by the readable content of page looking at its layout. The
                  point of using Lorem Ipsum normal
                </div>
              </div>
            </div>
            <div className="BlogVideoDetailComment2">
              <div className="BlogVideoDetailCommentIMG"><img src={simg3} alt={"logo"}/></div>
              <div className="BlogVideoDetailCommentIInfo">
                <div className="BlogVideoDetailCommentITop">
                  <div className="BlogVideoDetailCommentITitle">
                    Michel Rason Roy
                  </div>
                  <div className="BlogVideoDetailCommentReply">
                    Reply Comments
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </div>
                </div>
                <div className="BlogVideoDetailCommentISubtitle">
                  Product Designer
                </div>
                <div className="BlogVideoDetailCommentIText">
                  It is a long established fact that a reader will be distracted
                  the readable contentof a page when looking at its layout point
                  of using
                </div>
              </div>
            </div>
            <div className="BlogVideoDetailComment1">
              <div className="BlogVideoDetailCommentIMG"><img src={img8} alt={"logo"}/></div>
              <div className="BlogVideoDetailCommentIInfo">
                <div className="BlogVideoDetailCommentITop">
                  <div className="BlogVideoDetailCommentITitle">
                    David Angel Makel
                  </div>
                  <div className="BlogVideoDetailCommentReply">
                    Reply Comments
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </div>
                </div>
                <div className="BlogVideoDetailCommentISubtitle">
                  IT Consultant
                </div>
                <div className="BlogVideoDetailCommentIText">
                  It is a long established fact that a reader will be distracted
                  by the readable content of page looking at its layout. The
                  point of using Lorem Ipsum normal
                </div>
              </div>
            </div>
            <div className="BlogVideoDetailReply">
              <div className="BlogVideoDetailSubtitle">Reply Comments</div>
              <div className="BlogVideoDetailForm">
                <div className="BlogVideoDetailName">
                  <input placeholder="Full Name Here"></input>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="BlogVideoDetailEmail">
                  <input placeholder="Email Here"></input>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
              </div>
              <div className="BlogVideoDetailCommentary">
                <textarea placeholder="Comments"></textarea>
                <FontAwesomeIcon icon={faPen} />
              </div>
            </div>
            <div className="BlogVideoDetailButton">
              send comments
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
              <div className="BlogBoxRightOneNewsIMG"><img src={img7} alt={"logo"}/></div>
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
              <div className="BlogBoxRightOneNewsIMG"><img src={img9} alt={"logo"}/></div>
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
              <div className="BlogBoxRightOneNewsIMG"><img src={img11} alt={"logo"}/></div>
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
              <div className="BlogBoxRightOneNewsIMG"><img src={img21} alt={"logo"}/></div>
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
            <div className="BlogBoxRightGalleryPhotos">
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
          <div className="BlogBoxRightIMG"><img src={img25} alt={"logo"}/></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail1;

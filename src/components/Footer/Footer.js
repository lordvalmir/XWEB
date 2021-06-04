import "./Footer.css";
import logo1 from "../../images/logo1.png";
import logo2 from "../../images/logo2.png";
import logo3 from "../../images/logo3.png";
import logo4 from "../../images/logo4.png";
import logo5 from "../../images/logo5.png";
import log2 from "../../images/log2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerUpper">
        <div className="footerUpperBox">
          <img src={logo1} width="162px" height="90px" alt="img1"></img>
          <img src={logo2} width="164px" height="93px" alt="img2"></img>
          <img src={logo3} width="104px" height="96px" alt="img3"></img>
          <img src={logo4} width="193px" height="85px" alt="img4"></img>
          <img src={logo5} width="117px" height="95px" alt="img5"></img>
        </div>
      </div>
      <div className="footerLower">
        <div className="footerLowerIMG"></div>
        <div className="footerLowerSection1">
          <div className="logoFooter">
            <img src={log2} alt="logoFooter" width="61px" height="50px"></img>
            <div className="logoFootertext">
              <b>Edu</b>plus
            </div>
            <div className="mediaLinks">
              <div className="facebookLogo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                </svg>
                Facebook
              </div>
              <div className="twitterLogo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                </svg>
                Twitter
              </div>
              <div className="youtubeLogo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
                </svg>
                Youtube
              </div>
              <div className="instagramlogo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
                </svg>
                Instagram
              </div>
            </div>
          </div>
          <div className="footersLinkBox">
            <div className="footersLinkBoxLeft">
              <div className="footersLinkBoxCollum">
                <div className="footersCollumTitle">Our Courses</div>
                <div className="footersCollumTexts">
                  <div className="footersCollumText">Wed Development</div>
                  <div className="footersCollumText">Business Studies</div>
                  <div className="footersCollumText">Computer Engineering</div>
                  <div className="footersCollumText">English Learning</div>
                  <div className="footersCollumText">Graphics Design</div>
                </div>
              </div>
              <div className="footersLinkBoxCollum">
                <div className="footersCollumTitle"> </div>
                <div className="footersCollumTexts">
                  <div className="footersCollumText">Color Combinitions</div>
                  <div className="footersCollumText">Software Development</div>
                  <div className="footersCollumText">Photography</div>
                  <div className="footersCollumText">Advance WordPress</div>
                  <div className="footersCollumText">Basic PSD To HTML</div>
                </div>
              </div>
              <div className="footersLinkBoxCollum">
                <div className="footersCollumTitle">Company</div>
                <div className="footersCollumTexts">
                  <div className="footersCollumText">About Eduket</div>
                  <div className="footersCollumText">Meet Advisors</div>
                  <div className="footersCollumText">Join A Career</div>
                  <div className="footersCollumText">Latest Courses</div>
                  <div className="footersCollumText">Newslet</div>
                </div>
              </div>
            </div>
            <div className="footersLinkBoxRight">
              <a href="#top">
                <div className="randomButton">
                  <FontAwesomeIcon icon={faArrowUp} />
                </div>
              </a>
              <div className="footersLinkBoxRightTitle">Newsletters</div>
              <div className="footersLinkBoxRightText">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accu santium doloremque laudantium totam rem aperiam
              </div>
              <div className="footersLinkBoxRightSearch">
                <input
                  className="footersLinkBoxRightSearchBox"
                  placeholder="Enter Your Email"
                ></input>
                <div className="footersLinkBoxRightSearchButton">
                  {" "}
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerLowerSection2">
          <div className="footerLowerSection2Text">
            Copyright © 2020 <b>Edu</b>Plus All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

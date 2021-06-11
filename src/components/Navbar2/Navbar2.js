import "./Navbar2.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faUser, faTh } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Navbar2() {
  return (
    <div className="navbar2">
      <div className="nawLeftSite2">
        <div className="hideFlex2">
          <div className="logo2">
            <img src={logo} height="61px" width="61px" alt="logo" />
            <div className="logoText">
              <b>Edu</b>plus
            </div>
          </div>
          <div className="nawRightSiteSIGN2">
            <FontAwesomeIcon icon={faUser} />
            SING IN
          </div>
        </div>
      </div>
      <div className="links2">
        <div class="dropdown">
          <button class="dropbtn">
            Home
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <div class="dropdown-content">
            <a href="/">Home</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Courses
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <div class="dropdown-content">
            <a href="/Our-Courses">Course</a>
            <a href="/Our-Courses">Course List</a>
            <a href="/Our-Courses/Cooking">Course Detail</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Events
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <div class="dropdown-content">
            <a href="/Our-Events/Event">Events Detail</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Pages
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <div class="dropdown-content">
            <a href="/Faq">FAQ</a>
            <a href="/Instructor-Details/Tomas">Instructors</a>
            <a href="/About-Us">About us</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Blog
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <div class="dropdown-content">
            <a href="/Blog-Grid">Blog</a>
            <a href="/Blog-Grid/News">Blog Detail</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Contact
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <div class="dropdown-content">
            <a href="/Contact-Us">Contact</a>
          </div>
        </div>
      </div>
      <div className="nawRightSite">
        <div className="nawRightSiteFB">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className="nawRightSiteYOU">
          <FontAwesomeIcon icon={faYoutube} />
        </div>
        <div className="nawRightSiteSIGN">
          <FontAwesomeIcon icon={faUser} />
          SING IN
        </div>
        <div className="nawRightSiteMenu">
          <FontAwesomeIcon icon={faTh} size="3x" />
        </div>
      </div>
    </div>
  );
}

export default Navbar2;

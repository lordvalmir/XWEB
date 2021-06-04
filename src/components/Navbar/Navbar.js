import "./Navbar.css";
import logo from "../../images/logo.png";
import fb from "../../images/fb.png";
import youtube from "../../images/youtube.png";
import login from "../../images/login.png";
import menu from "../../images/menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nawLeftSite">
        <div className="logo">
          <img src={logo} height="61px" width="61px" alt="logo" />
          <div className="logoText">
            <b>Edu</b>plus
          </div>
        </div>
        <div className="dropdowns">
          <div className="dropdown">
            <a href="/">
              <div className="dropbtn">
                Home
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </a>
          </div>
          <div className="dropdown">
            <a href="/Our-Courses">
              <div className="dropbtn">
                Courses
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </a>
          </div>
          <div className="dropdown">
            <a href="/Our-Events">
              <div className="dropbtn">
                Events
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </a>
          </div>
          <div className="dropdown">
            <a href="/">
              <div className="dropbtn">
                Pages
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </a>
          </div>
          <div className="dropdown">
            <a href="/">
              <div className="dropbtn">
                Blog
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </a>
          </div>
          <div className="dropdown">
            <a href="/">
              <div className="dropbtn">
                Contact
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="nawRightSite">
        <a href="/">
          <img src={fb} width="50" height="50" alt="fb"></img>
        </a>
        <a href="/">
          <img src={youtube} width="50" height="50" alt="yotuube"></img>
        </a>
        <a href="/">
          <img src={login} width="120" height="50" alt="login"></img>
        </a>
        <a href="/">
          <img src={menu} width="50" height="50" alt="menu"></img>
        </a>
      </div>
    </div>
  );
}

export default Navbar;

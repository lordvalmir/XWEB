import "./HomePage1.css";
import img1 from "../../images/img1.png";
import line from "../../images/line.png";

function Navbar() {
  return (
    <div className="homeBlock">
      <div className="orangeLink">... Welcome to EditPlus</div>
      <div className="mainPageTitle">
        <div>More then 1200</div>
        <div>Online Curses</div>
      </div>
      <div className="searchBar">
        <form
          className="searchBar"
          onSubmit={(event) => event.preventDefault()}
          role="search"
        >
          <input
            className="searchBar"
            type="search"
            placeholder="Search..."
            required
          />
          <button className="searchBar" type="submit">
            Go
          </button>
        </form>
      </div>
      <div className="underSearch">
        <div className="left">
          <p>Sed ut perspiciatis unde omnis natus error sit voluptatem </p>
        </div>
        <img src={line} alt="line"></img>
        <div className="right">
          <img src={img1} alt="img1" width="40px" height="40px"></img>
          <div>
            <p>online support</p>
            <p>+012 (345) 6789</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import "./HomePage4.css";
import arrow3 from "../../images/arrow3.png";

const HomePage4 = () => {
  return (
    <div className="bg3">
      <div className="coursesTitle">... Photo & Album ...</div>
      <div className="categoriesSubTitle">Campus Gallery</div>
      <div className="galeryDisplayMenu">
        <div className="galeryDisplayOption">Show All</div>
        <div className="galeryDisplayOption">University</div>
        <div className="galeryDisplayOption">Group Study</div>
        <div className="galeryDisplayOption">Awards</div>
        <div className="galeryDisplayOption">Students</div>
        <div className="galeryDisplayOption">Teachers</div>
        <div className="galeryDisplayOption">Campus</div>
      </div>
      <hr className="galeryDisplayBar"></hr>
      <div className="galeryCards">
        <div className="galeryCardRow">
          <div className="galeryCard">
            <div className="galeryCardInside">
              <div className="galeryCardTitle">University</div>
              <div className="galeryCardSubtitle">University Campus</div>
              <div className="galeryCardButton">
                <button>
                  <img src={arrow3} width="22px" height="20" alt="arrow3"></img>
                </button>
              </div>
            </div>
          </div>
          <div className="galeryCard">
            <div className="galeryCardInside">
              <div className="galeryCardTitle">Group Study</div>
              <div className="galeryCardSubtitle">University Campus</div>
              <div className="galeryCardButton">
                <button>
                  <img src={arrow3} width="22px" height="20" alt="arrow3"></img>
                </button>
              </div>
            </div>
          </div>
          <div className="galeryCard">
            <div className="galeryCardInside">
              <div className="galeryCardTitle">Awards</div>
              <div className="galeryCardSubtitle">University Campus</div>
              <div className="galeryCardButton">
                <button>
                  <img src={arrow3} width="22px" height="20" alt="arrow3"></img>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="galeryCardRow">
          <div className="galeryCard">
            <div className="galeryCardInside">
              <div className="galeryCardTitle">Students</div>
              <div className="galeryCardSubtitle">University Campus</div>
              <div className="galeryCardButton">
                <button>
                  <img src={arrow3} width="22px" height="20" alt="arrow3"></img>
                </button>
              </div>
            </div>
          </div>
          <div className="galeryCard">
            <div className="galeryCardInside">
              <div className="galeryCardTitle">Teachers</div>
              <div className="galeryCardSubtitle">University Campus</div>
              <div className="galeryCardButton">
                <button>
                  <img src={arrow3} width="22px" height="20" alt="arrow3"></img>
                </button>
              </div>
            </div>
          </div>
          <div className="galeryCard">
            <div className="galeryCardInside">
              <div className="galeryCardTitle">Campus</div>
              <div className="galeryCardSubtitle">University Campus</div>
              <div className="galeryCardButton">
                <button>
                  <img src={arrow3} width="22px" height="20" alt="arrow3"></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage4;

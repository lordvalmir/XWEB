import "./HomePage4.css";
import arrow3 from "../../images/arrow3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const GalleryCard = ({ title }) => {
  return (
    <div className="galeryCard">
      <div className="galeryCardInside">
        <div className="galeryCardTitle">{title}</div>
        <div className="galeryCardSubtitle">University Campus</div>
        <div className="galeryCardButton">
          <FontAwesomeIcon icon={faLongArrowAltRight} size="2x" />
        </div>
      </div>
    </div>
  );
};

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
          <GalleryCard title="University" />
          <GalleryCard title="Group Study" />
          <GalleryCard title="Awards" />
          <GalleryCard title="Students" />
          <GalleryCard title="Teachers" />
          <GalleryCard title="Campus" />
        </div>
      </div>
    </div>
  );
};

export default HomePage4;

import "./HomePage4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";

const GalleryCard = ({ title, img }) => {
  return (
    <div className="galeryCard">
      <img src={img} alt={"logo"} />
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
          <GalleryCard title="University" img={img1} />
          <GalleryCard title="Group Study" img={img2} />
          <GalleryCard title="Awards" img={img3} />
          <GalleryCard title="Students" img={img4} />
          <GalleryCard title="Teachers" img={img5} />
          <GalleryCard title="Campus" img={img6} />
        </div>
      </div>
    </div>
  );
};

export default HomePage4;

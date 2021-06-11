import { useState } from "react";
import "./HomePage4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";

const HomePage4 = () => {
  const { openLightbox } = useLightbox();

  const GalleryCard = ({
    title,
    img,
    modal,
  }) => {

    return (
      <div className="galeryCard">
        <img src={img} alt={"logo"} />
        <img src={img} alt={"logo"} />
        <div className="galeryCardInside">
          <div className="galeryCardTitle">{title}</div>
          <div className="galeryCardSubtitle">University Campus</div>
          <div className="galeryCardButton" onClick={() => openLightbox(modal)}>
            <FontAwesomeIcon icon={faLongArrowAltRight} size="2x" />
          </div>
        </div>
      </div>
    );
  };

  const options = {
    settings: {
      overlayColor: "rgb(25, 136, 124)",
      autoplaySpeed: 1500,
      transitionSpeed: 900,
    },
    buttons: {
      backgroundColor: "#1b5245",
      iconColor: "rgba(126, 172, 139, 0.8)",
    },
    caption: {
      captionColor: "#a6cfa5",
      captionFontFamily: "Raleway, sans-serif",
      captionFontWeight: "300",
      captionTextTransform: "uppercase",
    },
  };

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
          <GalleryCard
            title="University"
            img={img1}
            modal={0}
          />
          <GalleryCard
            title="Group Study"
            img={img2}
            modal={1}
          />
          <GalleryCard
            title="Awards"
            img={img3}
            modal={2}
          />
          <GalleryCard
            title="Students"
            img={img4}
            modal={3}
          />
          <GalleryCard
            title="Teachers"
            img={img5}
            modal={4}
          />
          <GalleryCard
            title="Campus"
            img={img6}
            modal={5}
          />
        </div>
      </div>
      <div className="hide">
        <SRLWrapper option={options}>
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
          <img src={img6} />
        </SRLWrapper>
        </div>
    </div>
  );
};

export default HomePage4;

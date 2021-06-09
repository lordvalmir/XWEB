import "./HomePage2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBook } from "@fortawesome/free-solid-svg-icons";
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'
import img8 from '../../images/img8.jpg'

const data = [
  {
    title: "Graphics Design (UI)",
    subTitle: "Web Design Course",
    people: "250",
    curses: "800+ Courses",
    link: "/Our-Courses/Graphics-Design-(UI)",
    img: img1,
  },
  {
    title: "Business Studies",
    subTitle: "Finance Business",
    people: "320",
    curses: "750+ Courses",
    link: "/Our-Courses/Business-Studies",
    img: img2,
  },
  {
    title: "Web Development",
    subTitle: "Web Design Course",
    people: "320",
    curses: "750+ Courses",
    link: "/Our-Courses/Web-Development",
    img: img3,
  },
  {
    title: "Product Engineering",
    subTitle: "Web Design Course",
    people: "320",
    curses: "750+ Courses",
    link: "/Our-Courses/Product-Engineering",
    img: img4,
  },
  {
    title: "Basic Photography",
    subTitle: "Film Movies & Photography",
    people: "320",
    curses: "750+ Courses",
    link: "/Our-Courses/Basic-Photography",
    img: img5,
  },
  {
    title: "Medical & Health",
    subTitle: "Doctors & Nursing",
    people: "320",
    curses: "750+ Courses",
    link: "/Our-Courses/Medical-&-Health",
    img: img6,
  },
  {
    title: "Marketing Strategy",
    subTitle: "Social Media Marketing",
    people: "250",
    curses: "50+ Courses",
    link: "/Our-Courses/Marketing-Strategy",
    img: img7,
  },
  {
    title: "Mobile UI Design",
    subTitle: "Web Design Course",
    people: "320",
    curses: "750+ Courses",
    link: "/Our-Courses/Mobile-UI-Design",
    img: img8,
  },
];

const HomePage2 = () => {
  return (
    <div className="courseCategories">
      <div className="categoriesTitle">... Popular Categories ...</div>
      <div className="categoriesSubTitle">Course Categories</div>
      <div className="categories">
        {data.map((catagorie) => {
          return (
            <div className="categorie">
              <a href={catagorie.link}>
                <div className="categorieIMG"><img src={catagorie.img} alt={"logo"}/></div>
                <div className="categorieInfoBox">
                  <div className="categorieTitle">{catagorie.title}</div>
                  <div className="categorieSubtitle">{catagorie.subTitle}</div>
                  <div className="categorieInfo">
                    <FontAwesomeIcon icon={faUsers} />
                    <div>{catagorie.people}</div>
                    <FontAwesomeIcon icon={faBook} />
                    <div>{catagorie.curses}</div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage2;

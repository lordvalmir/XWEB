import "./HomePage2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBook } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    title: "Graphics Design (UI)",
    subTitle: "Web Design Course",
    people: "250",
    curses: "800+ Courses",
    link: "/Our-Courses/Graphics-Design-(UI)",
  },
  {
    title: "Business Studies",
    subTitle: "Finance Business",
    people: "320",
    curses: "750+ Courses",
    link: "/Our-Courses/Business-Studies",
  },
  {
    title: "Web Development",
    subTitle: "Web Design Course",
    people: "320",
    curses: "750+ Courses",
    link: "/Our-Courses/Web-Development",
  },
  {
    title: "Product Engineering",
    subTitle: "Web Design Course",
    people: "320",
    curses: "750+ Courses",
    link: "/Our-Courses/Product-Engineering",
  },
  {
    title: "Basic Photography",
    subTitle: "Film Movies & Photography",
    people: "320",
    curses: "750+ Courses",
    link: "/Our-Courses/Basic-Photography",
  },
  {
    title: "Medical & Health",
    subTitle: "Doctors & Nursing",
    people: "320",
    curses: "750+ Courses",
    link: "/Our-Courses/Medical-&-Health",
  },
  {
    title: "Marketing Strategy",
    subTitle: "Social Media Marketing",
    people: "250",
    curses: "50+ Courses",
    link: "/Our-Courses/Marketing-Strategy",
  },
  {
    title: "Mobile UI Design",
    subTitle: "Web Design Course",
    people: "320",
    curses: "750+ Courses",
    link: "/Our-Courses/Mobile-UI-Design",
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
                <div className="categorieIMG">
                  <div className="categorieIMGplaceholder"></div>
                </div>
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

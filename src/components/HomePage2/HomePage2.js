import "./HomePage2.css";
import rand1 from "../../images/rand1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBook
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    title: 'Graphics Design (UI)',
    subTitle: 'Web Design Course',
    people: '250',
    curses: '800+ Courses'
  },
  {
    title: 'Business Studies',
    subTitle: 'Finance Business',
    people: '320',
    curses: '750+ Courses'
  },
  {
    title: 'Web Development',
    subTitle: 'Web Design Course',
    people: '320',
    curses: '750+ Courses'
  },
  {
    title: 'Product Engineering',
    subTitle: 'Web Design Course',
    people: '320',
    curses: '750+ Courses'
  },
  {
    title: 'Basic Photography',
    subTitle: 'Film Movies & Photography',
    people: '320',
    curses: '750+ Courses'
  },
  {
    title: 'Medical & Health',
    subTitle: 'Doctors & Nursing',
    people: '320',
    curses: '750+ Courses'
  },
  {
    title: 'Marketing Strategy',
    subTitle: 'Social Media Marketing',
    people: '250',
    curses: '50+ Courses'
  },
  {
    title: 'Mobile UI Design',
    subTitle: 'Web Design Course',
    people: '320',
    curses: '750+ Courses'
  },
]


function HomePage2() {
  return (
    <div className="courseCategories">
      <div className="categoriesTitle">... Popular Categories ...</div>
      <div className="categoriesSubTitle">Course Categories</div>
      <div className="categories">
        {
          data.map((catagorie) => {
            return (
              <div className="categorie">
              <div className="categorieIMG">
                <img src={rand1} alt="rand1"></img>
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
            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default HomePage2;

import "./Home.css";
import Navbar2 from "../components/Navbar2/Navbar2";
import UnderHeader from  "../components/UnderHeader/UnderHeader";
import Footer from "../components/Footer/Footer";
import Course1 from "../components/Course1/Course1";

function Course() {
  return (
    <div>
      <Navbar2 />
      <UnderHeader/>
      <Course1 />
      <Footer />
    </div>
  );
}

export default Course;

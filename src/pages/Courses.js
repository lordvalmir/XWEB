import "./Home.css";
import Navbar2 from "../components/Navbar2/Navbar2";
import UnderHeader from  "../components/UnderHeader/UnderHeader";
import Footer from "../components/Footer/Footer";
import Courses1 from "../components/Courses1/Courses1";

function Courses() {
  return (
    <div>
      <Navbar2 />
      <UnderHeader/>
      <Courses1 />
      <Footer />
    </div>
  );
}

export default Courses;

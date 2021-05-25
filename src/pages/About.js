import "./Home.css";
import Navbar2 from "../components/Navbar2/Navbar2";
import UnderHeader from  "../components/UnderHeader/UnderHeader";
import Footer from "../components/Footer/Footer";
import AboutUs1 from "../components/AboutUs1/AboutUs1";

function About() {
  return (
    <div>
      <Navbar2 />
      <UnderHeader/>
      <AboutUs1 />
      <Footer />
    </div>
  );
}

export default About;

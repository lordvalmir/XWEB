import "./Home.css";
import Navbar2 from "../components/Navbar2/Navbar2";
import UnderHeader from "../components/UnderHeader/UnderHeader";
import Footer from "../components/Footer/Footer";
import Event1 from "../components/Event1/Event1";

function Event() {
  return (
    <div>
      <Navbar2 />
      <UnderHeader />
      <Event1 />
      <Footer />
    </div>
  );
}

export default Event;

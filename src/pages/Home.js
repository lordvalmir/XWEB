import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import InfoBoxes from "../components/InfoBoxes/InfoBoxes";
import HomePage1 from "../components/HomePage1/HomePage1";
import HomePage2 from "../components/HomePage2/HomePage2";
import HomePage3 from "../components/HomePage3/HomePage3";
import HomePage4 from "../components/HomePage4/HomePage4";
import HomePage5 from "../components/HomePage5/HomePage5";
import HomePage6 from "../components/HomePage6/HomePage6";
import HomePage7 from "../components/HomePage7/HomePage7";
import HomePage8 from "../components/HomePage8/HomePage8";
import HomePage9 from "../components/HomePage9/HomePage9";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <div className="bg">
        <Navbar/>
        <HomePage1/>
      </div>

      <InfoBoxes/>
      <HomePage2/>
      <HomePage3/>
      <HomePage4/>
      <HomePage5/>
      <HomePage6/>
      <HomePage7/>
      <HomePage8/>
      <HomePage9/>
      <Footer/>
    </div>
  );
}

export default Home;

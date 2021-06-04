import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Event from "./pages/Event";
import Instructor from "./pages/Instructor";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/About-Us" component={About}></Route>
        <Route exact path="/Our-Courses" component={Courses}></Route>
        <Route exact path="/Our-Courses/:courseName" component={Course}></Route>
        <Route exact path="/Our-Events/:eventName" component={Event}></Route>
        <Route
          exact
          path="/Instructor-Details/:instructorName"
          component={Instructor}
        ></Route>
      </Switch>
    </div>
  );
};

export default App;

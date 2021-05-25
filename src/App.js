import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
          {/* not working need fixed */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/About-Us" component={About}></Route>
      </Switch>
    </div>
  );
}

export default App;

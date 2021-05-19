import "./App.css";
import Home from "./components/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Precaucations from "./components/Precaucations";
import LiveStatus from "./components/LiveStatus";
import LiveStateStatus from "./components/LiveStateStatus";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/event" exact component={Events} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/precaucations" exact component={Precaucations} />
        <Route path="/live_status" exact component={LiveStatus} />
        <Route path="/live_state_status" exact component={LiveStateStatus} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;

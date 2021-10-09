import AboutMe from "./pages/aboutMe";
import "../components/style/style.css";
import PersonalInformation from "./pages/personalInformation";
import Navbar from "./navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./pages/projects";
import Contant from "./pages/contant";

export default function Profile() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <AboutMe />
              <PersonalInformation />
              <Contant />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

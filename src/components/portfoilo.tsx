import AboutMe from "./pages/aboutMe";
import "../components/style/style.css";
import PersonalInformation from "./pages/personalInformation";
import Navbar from "./navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./pages/projects";

export default function Profile() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <div className="container">
            <Route exact path="/">
              <AboutMe />
              <PersonalInformation />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </div>
        </Switch>
      </Router>
    </>
  );
}

import "./style/style.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="styleNavbar">
        <a id="title" href="/">
          Nir Vaknin
        </a>
        <Link to="/">About me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
}

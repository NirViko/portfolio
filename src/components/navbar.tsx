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
        <a
          id="resumeBtn"
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1WLBWbm17Ui_iuf-bmJ3DaOdDO6HEhr3k/view?usp=sharing"
        >
          Resume
        </a>
      </nav>
    </>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationArrow,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

export default function PersonalInformation() {
  return (
    <>
      <div className="containerInfo">
        <p>
          <FontAwesomeIcon icon={faUser} />
          <span> 30/04/1993</span>
        </p>
        {/* <p>
          <FontAwesomeIcon icon={faMobile} />
          <span> 052-6485798</span>
        </p> */}
        <p>
          <FontAwesomeIcon icon={faLocationArrow} />
          <span> Ezer, Israel</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faGraduationCap} />
          <span> Graduate of Software Engineering</span>
        </p>
      </div>
      <div className="softwareDetalis">
        <p style={{ color: "#61dafb" }}>
          <FontAwesomeIcon icon={faReact} />
          <span> React</span>
        </p>
        <p style={{ color: "orange" }}>
          <FontAwesomeIcon icon={faHtml5} />
          <span> HTML</span>
        </p>
        <p style={{ color: "#0000CD" }}>
          <FontAwesomeIcon icon={faCss3} />
          <span> CSS3</span>
        </p>
        <p style={{ color: "#FFD700" }}>
          <FontAwesomeIcon icon={faJs} />
          <span> Javascript</span>
        </p>
      </div>
    </>
  );
}

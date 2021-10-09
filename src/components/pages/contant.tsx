import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../style/style.css";
export default function Contant() {
  return (
    <>
      <div className="containerContant">
        <a href="https://www.linkedin.com/in/nir-vaknin">
          <FontAwesomeIcon icon={faLinkedin} />
          <span>Linkdin</span>
        </a>
        <div>
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
          <span>Nirviko@gmail.com</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <span>052-6485798</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <span>052-6485798</span>
        </div>
      </div>
    </>
  );
}

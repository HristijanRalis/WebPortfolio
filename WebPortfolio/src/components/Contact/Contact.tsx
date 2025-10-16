import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="Contact p-5">
      <div className="row gap-3 rowBlur">
        <div className="col-12 col-md-3">
          <h3 className="contactTitle">Location</h3>
          <div className="contactLink">
            <FontAwesomeIcon icon={faLocationDot} className="contactLink" />
            <p className="contactDescription">Bitola , Macedonia</p>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <h3 className="contactTitle">Email</h3>
          <a
            href="mailto:hristijan.ralevski@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contactLink"
          >
            <FontAwesomeIcon icon={faEnvelope} className="contactLink" />
            <p className="contactDescription">hristijan.ralevski@hotmail.com</p>
          </a>
        </div>
        <div className="col-12 col-md-3">
          <h3 className="contactTitle">Phone</h3>
          <a href="tel:+389075812679" className="contactLink">
            <FontAwesomeIcon icon={faPhone} className="" />
            <p className="contactDescription">+389075812679</p>
          </a>
        </div>
      </div>
    </div>
  );
};

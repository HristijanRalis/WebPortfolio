import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
export const Contact = () => {
  return (
    <div className="Contact p-5">
      <div className="container">
        <div className="row  g-4">
          <div className="col-12 col-md-6 d-flex flex-column gap-3">
            <div className="contactSection d-flex gap-3 align-items-center">
              <div className="contactIcon">
                <FontAwesomeIcon icon={faEnvelope} className="fontIcon" />
              </div>
              <div className="contactDescription ">
                <p className="label">Email</p>
                <a
                  href="mailto:hristijan.ralevski@hotmail.com"
                  className="mailLink"
                >
                  hristijan.ralevski@hotmail.com
                </a>
              </div>
            </div>
            <div className="contactSection  d-flex gap-3 align-items-center">
              <div className="contactIcon">
                <FontAwesomeIcon icon={faLocationDot} className="fontIcon" />
              </div>
              <div className="contactDescription">
                <p className="label">Location</p>
                <p>Bitola, Macedonia</p>
              </div>
            </div>
            <div className="contactSection d-flex flex-column gap-3">
              <div className="contactMe">Connect with me </div>
              <div className="contactDescriptionLinks">
                <ul className="socialLinks">
                  <li className="socialLink">
                    <button className="socialLinkBtn">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </button>
                  </li>
                  <li className="socialLink">
                    <button className="socialLinkBtn">
                      <FontAwesomeIcon icon={faGithub} />
                    </button>
                  </li>
                  <li className="socialLink">
                    <button className="socialLinkBtn">
                      <FontAwesomeIcon icon={faTwitter} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48159.605247218606!2d21.287385874572838!3d41.02579571482536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13572451365fb6fd%3A0xfa67bbbf65bec948!2sBitola!5e0!3m2!1sen!2smk!4v1760953946595!5m2!1sen!2smk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

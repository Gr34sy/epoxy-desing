import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileButton } from "@fortawesome/free-solid-svg-icons";

export default function Order() {
  return (
    <main className="order layout">
      <div className="section-card">
        <h1 className="header">Kontakt</h1>
        <div className="order__contact">
          <div>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="contact__icon" />
              Email
            </p>
            <a href="mailto:epoxyddesing@gmail.com">epoxyd@gmail.com</a>
          </div>

          <div>
            <p>
              <FontAwesomeIcon icon={faFacebook} className="contact__icon" />
              Profil na{" "}
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61557420292239"
              target="_blank"
            >
              Facebooku
            </a>
          </div>

          <div>
            <p>
              <FontAwesomeIcon
                icon={faMobileButton}
                className="contact__icon"
              />
              Telefon
            </p>
            <a href="tel:+48728523851">+48 728 523 851 </a>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="header">Zamówienie specjalne</h2>
        <div className="order__special"></div>
      </div>
    </main>
  );
}

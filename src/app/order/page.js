import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileButton } from "@fortawesome/free-solid-svg-icons";

export default function Order() {
  return (
    <main className="order layout">
      <div className="order-container">
        <h1 className="header">Kontakt</h1>
        <div className="order__contact">
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="contact__icon" />
            Email <a href="mailto:epoxyddesing@gmail.com">epoxyd@gmail.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faFacebook} className="contact__icon" />
            Profil na{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61557420292239"
              target="_blank"
            >
              Facebooku
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faMobileButton} className="contact__icon" />
            Telefon <a href="tel:+48728523851">+48 728 523 851 </a>
          </p>
        </div>
      </div>

      <div className="order-container">
        <h2 className="header">Zamówienie specjalne</h2>
        <div className="order__special"></div>
      </div>
    </main>
  );
}

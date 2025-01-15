import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMobileButton } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <header className="footer__header">Kontakt</header>

      <div className="footer__contact">
        <div className="footer__contact_item">
          <a href="mailto:epoxyddesing@gmail.com" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p className="bold">Email</p>
            <p>epoxyd@gmail.com</p>
          </a>
        </div>

        <div className="footer__contact_item">
          <a
            href="https://www.facebook.com/profile.php?id=61557420292239"
            target="_blank"
            className="contact-link"
          >
            <FontAwesomeIcon icon={faFacebook} className="contact-icon" />
            <p>Profil na Facebooku</p>
          </a>
        </div>

        <div className="footer__contact_item">
          <a href="tel:+48728523851" className="contact-link">
            <FontAwesomeIcon icon={faMobileButton} className="contact-icon" />
            <p className="bold">Telefon</p>
            <p>+48 728 523 851</p>
          </a>
        </div>
      </div>

      <p className="footer__copyright">
        <span>&copy;</span> Copyright {year}, Piotr Słupski
      </p>
    </footer>
  );
}

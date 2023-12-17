import styles from "./Footer.module.css";
import footerLogo from "../../assets/footer-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper + " container"}>
        <section>
          <h5>Working hours</h5>
          <p>Mon. - Fr.: 13.00 - 22.00</p>
          <p>Sat.: 13.00 - 23.00</p>
          <p>Sun.: 13.00 - 23.30</p>
        </section>
        <section>
          <h5>Contact</h5>
          <div className={styles.footer__item}>
            <div>
              <FontAwesomeIcon
                icon={faTelegram}
                size="lg"
                className={styles.footer__icon}
              />
            </div>
            <p>@little_lemon</p>
          </div>
          <div className={styles.footer__item}>
            <div>
              <FontAwesomeIcon
                icon={faEnvelope}
                size="lg"
                className={styles.footer__icon}
              />
            </div>
            <p>little_lemon@mail.com</p>
          </div>
          <div className={styles.footer__item}>
            <div>
              <FontAwesomeIcon
                icon={faPhone}
                size="lg"
                className={styles.footer__icon}
              />
            </div>
            <p>
              <Link to="tel:123456789">123456789</Link>
            </p>
          </div>
        </section>
        <section>
          <h5>Location</h5>
          <div className={styles.footer__item}>
            <div>
              <FontAwesomeIcon
                icon={faLocationDot}
                size="xl"
                className={styles.footer__icon}
              />
            </div>
            <p>Fake Str, Chicago</p>
          </div>
        </section>
        <section>
          <h5>Connect</h5>
          <div className={styles.footer__item}>
            <div>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="xl"
                  className={styles.footer__icon}
                />
              </a>
            </div>
            <div>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="xl"
                  className={styles.footer__icon}
                />
              </a>
            </div>
            <div>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="xl"
                  className={styles.footer__icon}
                />
              </a>
            </div>
          </div>
        </section>
        <section className={styles.footer__item}>
          <div>
            <img src={footerLogo} alt="Logo" className={styles.footer__logo} />
          </div>
          <p>© 2023 Little Lemon</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

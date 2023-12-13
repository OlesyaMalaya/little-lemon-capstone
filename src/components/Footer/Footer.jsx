import styles from "./Footer.module.css";
import footerLogo from "../../assets/footer-logo.png";
import location from "../../assets/location.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import telegram from "../../assets/telegram.svg";
import meta from "../../assets/meta.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper + " container"}>
        <section>
          <h5>Working hours</h5>
          <p>Mon. - Fr.: 12.00 - 22.00</p>
          <p>Sat.: 13.00 - 23.00</p>
          <p>Sun.: 13.00 - 23.30</p>
        </section>
        <section>
          <h5>Contact</h5>
          <div className={styles.footer__item}>
            <div>
              <img
                src={telegram}
                alt="Telegram"
                className={styles.footer__icon}
              />
            </div>
            <p>@little_lemon</p>
          </div>
          <div className={styles.footer__item}>
            <div>
              <img src={mail} alt="Email" className={styles.footer__icon} />
            </div>
            <p>little_lemon@mail.com</p>
          </div>
          <div className={styles.footer__item}>
            <div>
              <img src={phone} alt="Phone" className={styles.footer__icon} />
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
              <img
                src={location}
                alt="Location"
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
                <img src={meta} alt="Meta" className={styles.footer__icon} />
              </a>
            </div>
            <div>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img
                  src={twitter}
                  alt="Twitter"
                  className={styles.footer__icon}
                />
              </a>
            </div>
            <div>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img
                  src={instagram}
                  alt="Instagram"
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

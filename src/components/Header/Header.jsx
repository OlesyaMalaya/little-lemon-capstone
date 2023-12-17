import { NAV_LINKS } from "../../constants/routes";
import { useState } from "react";
import logo from "../../assets/Logo_horizontal.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(() => !isMenuVisible);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper + " container"}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav
          className={
            isMenuVisible
              ? styles.header__nav + " " + styles.header__nav_visible
              : styles.header__nav
          }
        >
          <ul className={styles.nav__list}>
            {NAV_LINKS.map((navlink) => {
              return (
                <li
                  key={navlink.link}
                  className={styles.nav__item}
                  onClick={toggleMenu}
                >
                  <NavLink to={navlink.link}>{navlink.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.header__burger} onClick={toggleMenu}>
          {isMenuVisible ? (
            <FontAwesomeIcon icon={faXmark} size="2xl" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2xl" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

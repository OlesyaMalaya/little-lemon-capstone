import { NAV_LINKS } from "../../constants/constants";
import { useState } from "react";
import logo from "../../assets/Logo_horizontal.svg";
import burger from "../../assets/icon_hamburger menu.svg";
import close from "../../assets/close.png";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activePage, setActivePage] = useState("Home");
  const [isMenuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(() => !isMenuVisible);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
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
                  <NavLink
                    to={navlink.link}
                    onClick={() => setActivePage(() => navlink.name)}
                    className={
                      activePage === navlink.name
                        ? styles.nav__link_current
                        : ""
                    }
                  >
                    {navlink.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.header__burger} onClick={toggleMenu}>
          {isMenuVisible ? (
            <img src={close} alt="Close menu" />
          ) : (
            <img src={burger} alt="Menu" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

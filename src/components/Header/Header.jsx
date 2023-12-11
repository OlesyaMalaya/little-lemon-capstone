import { NAV_LINKS } from "../../constants/constants";
import logo from "../../assets/Logo_horizontal.svg";
/* import basket from "../../assets/Basket.svg"; */
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul className={styles.nav__list}>
          {NAV_LINKS.map((navlink) => {
            return (
              <li key={navlink.link} className={styles.nav__item}>
                <NavLink to={navlink.link}>{navlink.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

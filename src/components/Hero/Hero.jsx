import styles from "./Hero.module.css";
import CTA from "../CTA/CTA";
import { NavLink } from "react-router-dom";

const Hero = ({ hero }) => {
  return (
    <article className={styles.hero}>
      <div className={styles.hero__content + " container"}>
        <section className={styles.hero__text}>
          <div>
            <h1>{hero.heading}</h1>
            <h2>{hero.subheading}</h2>
          </div>
          <p>{hero.description}</p>
          <CTA>
            <NavLink to={hero.cta_link}>{hero.cta_text}</NavLink>
          </CTA>
        </section>
        <section className={styles.hero__image}>
          <img src={hero.image_src} alt={hero.image_text} />
        </section>
      </div>
    </article>
  );
};

export default Hero;

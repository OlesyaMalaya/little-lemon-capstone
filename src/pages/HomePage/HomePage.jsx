import Hero from "../../components/Hero/Hero";
import { ROUTES } from "../../constants/routes";
import {plate} from "../../constants/images";
import CTA from "../../components/CTA/CTA";
import { NavLink } from "react-router-dom";
import { specials } from "../../constants/dishes";
import Tiles from "../../components/Tiles/Tiles";

const homePageHero = {
  heading: "Little Lemon",
  subheading: "Chicago",
  description:
    "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
  cta_link: ROUTES.RESERVATION,
  cta_text: "Reserve a table",
  image_src: plate,
  image_text: "Food on a plate",
};

const HomePage = () => {
  return (
    <>
      <Hero hero={homePageHero} />
      <article>
        <section className="container flex content-container">
          <h3>This Week Specials!</h3>
          <CTA>
            <NavLink to={ROUTES.MENU}>Online Menu</NavLink>
          </CTA>
        </section>
        <Tiles tiles={specials} type="dish" />
      </article>
    </>
  );
};

export default HomePage;

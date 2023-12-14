import Hero from "../../components/Hero/Hero";
import { ROUTES } from "../../constants/routes";
import plate from "../../assets/plate.png";
import CTA from "../../components/CTA/CTA";
import { NavLink } from "react-router-dom";
import { specials } from "../../constants/dishes";
import DishCard from "../../components/DishCard/DishCard";

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
      <section className="container flex content-container">
        <h3>This Week Specials!</h3>
        <CTA>
          <NavLink to={ROUTES.MENU}>Online Menu</NavLink>
        </CTA>
      </section>
      <ul className="tilesview container">
        {specials.map((dish) => (
          <li key={dish.id} className="tile">
            <DishCard dish={dish} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;

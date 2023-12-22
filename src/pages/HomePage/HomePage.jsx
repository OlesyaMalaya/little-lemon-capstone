import Hero from "../../components/Hero/Hero";
import { homePageHero } from "../../constants/heroes";
import { ROUTES } from "../../constants/routes";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
import { specials } from "../../constants/dishes";
import Tiles from "../../components/Tiles/Tiles";

const HomePage = () => {
  return (
    <>
      <Hero hero={homePageHero} />
      <article>
        <section className="container flex content-container">
          <h3>This Week Specials!</h3>
          <Button>
            <NavLink to={ROUTES.MENU}>Online Menu</NavLink>
          </Button>
        </section>
        <Tiles tiles={specials} type="dish" />
      </article>
    </>
  );
};

export default HomePage;

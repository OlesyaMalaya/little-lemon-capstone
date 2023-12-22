import Hero from "../../components/Hero/Hero";
import { homePageHero } from "../../data/heroes";
import { ROUTES } from "../../data/routes";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
import { specials } from "../../data/dishes";
import TilesView from "../../layouts/TilesView/TilesView";

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
        <TilesView tiles={specials} type="dish" />
      </article>
    </>
  );
};

export default HomePage;

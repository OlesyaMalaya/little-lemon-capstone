import { specials, desserts, mainDishes, beverages } from "../../data/dishes";
import TilesView from "../../layouts/TilesView/TilesView";
import Hero from "../../components/Hero/Hero";
import { menuPageHero } from "../../data/heroes";

const MenuPage = () => {
  return (
    <>
      <Hero hero={menuPageHero} />
      <article>
        <h3 className="container content-container">Specials</h3>
        <TilesView tiles={specials} type="dish" />
      </article>
      <article>
        <h3 className="container content-container">Main Dishes</h3>
        <TilesView tiles={mainDishes} type="dish" />
      </article>
      <article>
        <h3 className="container content-container">Desserts</h3>
        <TilesView tiles={desserts} type="dish" />
      </article>
      <article>
        <h3 className="container content-container">Beverages</h3>
        <TilesView tiles={beverages} type="dish" />
      </article>
    </>
  );
};

export default MenuPage;

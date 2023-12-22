import {
  specials,
  desserts,
  mainDishes,
  beverages,
} from "../../constants/dishes";
import Tiles from "../../components/Tiles/Tiles";
import Hero from "../../components/Hero/Hero";
import { menuPageHero } from "../../constants/heroes";

const MenuPage = () => {
  return (
    <>
      <Hero hero={menuPageHero} />
      <article>
        <h3 className="container content-container">Specials</h3>
        <Tiles tiles={specials} type="dish" />
      </article>
      <article>
        <h3 className="container content-container">Main Dishes</h3>
        <Tiles tiles={mainDishes} type="dish" />
      </article>
      <article>
        <h3 className="container content-container">Desserts</h3>
        <Tiles tiles={desserts} type="dish" />
      </article>
      <article>
        <h3 className="container content-container">Beverages</h3>
        <Tiles tiles={beverages} type="dish" />
      </article>
    </>
  );
};

export default MenuPage;

import { specials, desserts, mainDishes, drinks } from "../../constants/dishes";
import Tiles from "../../components/Tiles/Tiles";
import { ROUTES } from "../../constants/routes";
import restaurant from "../../assets/restaurant.png";
import Hero from "../../components/Hero/Hero";

const menuPageHero = {
  heading: "Enjoy your meal",
  subheading: "at Little Lemon",
  description:
    "Indulge in an exquisite dining experience at Little Lemon or order online.",
  cta_link: ROUTES.RESERVATION,
  cta_text: "Reserve a table",
  image_src: restaurant,
  image_text: "Restaurant view",
};

const MenuPage = () => {
  return (
    <>
      <Hero hero={menuPageHero} />
      <section>
        <h3 className="container content-container">Specials</h3>
        <Tiles tiles={specials} type="dish" />
      </section>
      <section>
        <h3 className="container content-container">Main Dishes</h3>
        <Tiles tiles={mainDishes} type="dish" />
      </section>
      <section>
        <h3 className="container content-container">Desserts</h3>
        <Tiles tiles={desserts} type="dish" />
      </section>
      <section>
        <h3 className="container content-container">Drinks</h3>
        <Tiles tiles={drinks} type="dish" />
      </section>
    </>
  );
};

export default MenuPage;

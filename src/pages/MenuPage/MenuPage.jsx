import { dishes } from "../../constants/dishes";
import DishCard from "../../components/DishCard/DishCard";
const MenuPage = () => {
  return (
    <ul className="tilesview container">
      {dishes.map((dish) => (
        <li key={dish.id} className="tile">
          <DishCard dish={dish} />
        </li>
      ))}
    </ul>
  );
};

export default MenuPage;

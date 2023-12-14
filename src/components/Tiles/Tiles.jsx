import DishCard from "../DishCard/DishCard";
import Testimonial from "../Testimonial/Testimonial";
const Tiles = ({ tiles, type }) => {
  return (
    <ul className="tilesview container">
      {tiles.map((tile) => (
        <li key={tile.id} className="tile">
          {type === "dish" ? <DishCard dish={tile} /> : <Testimonial />}
        </li>
      ))}
    </ul>
  );
};

export default Tiles;

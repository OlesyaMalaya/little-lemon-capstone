import DishCard from "../../components/DishCard/DishCard";
import Testimonial from "../../components/Testimonial/Testimonial";
const TilesView = ({ tiles, type }) => {
  return (
    <ul className="tilesview container">
      {tiles.map((tile) => (
        <li key={tile.id} className="tile">
          {type === "dish" ? (
            <DishCard dish={tile} />
          ) : (
            <Testimonial testimonial={tile} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default TilesView;

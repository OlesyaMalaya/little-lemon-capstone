import styles from "./DishCard.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../data/routes";

const DishCard = ({ dish }) => {
  return (
    <article className={styles.dishcard}>
      <section className={styles.dishcard__imgcontainer}>
        <img src={dish.image} alt={dish.name} />
      </section>
      <section className={styles.dishcard__content + " container"}>
        <section className={styles.dishcard__heading}>
          <h4>{dish.name}</h4>
          <p>${dish.price}</p>
        </section>
        <p>{dish.description}</p>
        <NavLink to={ROUTES.ORDER}>
          <button className="button" aria-label="On Click">
            Order a delivery
          </button>
        </NavLink>
      </section>
    </article>
  );
};

export default DishCard;

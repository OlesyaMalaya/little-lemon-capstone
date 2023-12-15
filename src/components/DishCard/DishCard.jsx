import styles from "./DishCard.module.css";
import CTA from "../CTA/CTA";

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
        <CTA>
          <button>Order a delivery</button>
        </CTA>
      </section>
    </article>
  );
};

export default DishCard;

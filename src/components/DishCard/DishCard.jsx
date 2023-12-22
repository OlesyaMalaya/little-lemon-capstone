import styles from "./DishCard.module.css";

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
        <button className="button">Order a delivery</button>
      </section>
    </article>
  );
};

export default DishCard;

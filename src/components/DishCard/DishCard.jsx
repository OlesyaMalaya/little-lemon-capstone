import styles from "./DishCard.module.css";
import CTA from "../CTA/CTA";

const DishCard = ({ dish }) => {
    return (
        <article className={styles.dishcard}>
            <div className={styles.dishcard__imgcontainer}>
                <img src={dish.image} alt={dish.name} />
            </div>
            <div className={styles.dishcard__content + " container"}>
                <div className={styles.dishcard__heading}>
                    <h4>{dish.name}</h4>
                    <p>${dish.price}</p>
                </div>
                <p>{dish.description}</p>
                <CTA>
                    <button>Order a delivery</button>
                </CTA>
            </div>
        </article>
    )
}

export default DishCard
import styles from "./Testimonial.module.css";
import star from "../../assets/star.png";
const Testimonial = ({ testimonial }) => {
  return (
    <article className={styles.testimonial}>
      <h4>{testimonial.name}</h4>
      <section>
        <img src={star} alt="star" className={styles.testimonial__star} />
        <img src={star} alt="star" className={styles.testimonial__star} />
        <img src={star} alt="star" className={styles.testimonial__star} />
        <img src={star} alt="star" className={styles.testimonial__star} />
        <img src={star} alt="star" className={styles.testimonial__star} />
      </section>
      <img
        className={styles.testimonial__photo}
        src={testimonial.image}
        alt={testimonial.name}
      />

      <p>{testimonial.review}</p>
    </article>
  );
};

export default Testimonial;

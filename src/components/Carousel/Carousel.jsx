import { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ infos }) => {
  const [activeInfoIndex, setActiveInfoIndex] = useState(0);
  const lastInfoIndex = infos.length - 1;
  //check if previnfoIndex is not before start of the carousel and if so, reset
  const prevInfoIndex =
    activeInfoIndex > 0 ? activeInfoIndex - 1 : lastInfoIndex;
  //check if nextInfoIndex is not after end of the carousel and if so,reset
  const nextInfoIndex =
    lastInfoIndex !== 0 && activeInfoIndex !== lastInfoIndex
      ? activeInfoIndex + 1
      : 0;
  const handlePrevInfoClick = () => setActiveInfoIndex(() => prevInfoIndex);
  const handleNextInfoClick = () => setActiveInfoIndex(() => nextInfoIndex);
  const handleDotClick = (info) => {
    setActiveInfoIndex(() => infos.indexOf(info));
  };
  return (
    <article>
      <section className={styles.carousel}>
        <div className={styles.carousel__image} onClick={handlePrevInfoClick}>
          <img
            src={infos[prevInfoIndex].image}
            alt={infos[prevInfoIndex].alt}
            aria-label="On Click"
          />
        </div>
        <p>{infos[activeInfoIndex].text}</p>
        <div className={styles.carousel__image} onClick={handleNextInfoClick}>
          <img
            src={infos[nextInfoIndex].image}
            alt={infos[nextInfoIndex].alt}
            aria-label="On Click"
          />
        </div>
      </section>
      <ul className={styles.carousel_dots}>
        {infos.map((info) => (
          <li
            key={info.id}
            className={
              info.id === infos[activeInfoIndex].id ? styles.active_dot : ""
            }
            onClick={() => handleDotClick(info)}
            aria-label="On Click"
          >
            <span className={styles.carousel_dot}></span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Carousel;

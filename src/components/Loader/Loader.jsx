import styles from "./Loader.module.css"
const Loader = () => {
  return (
    <article className={styles.loading}>
      <span className={styles.loading__dot}></span>
      <span className={styles.loading__dot}></span>
      <span className={styles.loading__dot}></span>
    </article>
  );
};

export default Loader;

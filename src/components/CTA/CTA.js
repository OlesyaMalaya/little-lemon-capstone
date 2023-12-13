import styles from "./CTA.module.css"
const CTA = ({children}) => {
  return (
    <div className={styles.cta} >{children}</div>
  )
}

export default CTA;
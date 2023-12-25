import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { convertDate } from "../../utils/convertDate";
import styles from "./Confirmation.module.css";

const Confirmation = ({ data, handleClick }) => {
  const { name, guests, date, time } = data;
  const reservedDate = convertDate(date);

  return (
    <article className={styles.confirmation}>
      <h3>Your reservation has been confirmed</h3>
      <FontAwesomeIcon
        icon={faCircleCheck}
        className={styles.confirmation__icon}
      />
      <p>{`Dear ${name}!`}</p>
      <p>{`Your table for ${guests} people is reserved for ${reservedDate}, at ${time}.`}</p>
      <p>
        We look forward to hosting you for a delightful dining experience. See
        you soon!
      </p>
      <button className="button" onClick={handleClick}>
        OK
      </button>
    </article>
  );
};

export default Confirmation;

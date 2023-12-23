import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styles from "./Confirmation.module.css";
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const Confirmation = ({ data }) => {
  const { name, guests, date, time } = data;
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };
  const reservedDate = new Date(date).toLocaleDateString("en-EN", options);

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
      <button className="button" onClick={refreshPage}>
        OK
      </button>
    </article>
  );
};

export default Confirmation;

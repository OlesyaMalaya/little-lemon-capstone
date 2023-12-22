import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const Confirmation = ({ data }) => {
  const { name, guests, date, time } = data;
  const reservedDate = new Date(date).toLocaleDateString("en-EN", options);

  return (
    <>
      <FontAwesomeIcon icon={faCircleCheck} />
      <h3>Your reservation has been confirmed.</h3>
      <p>{`Dear ${name}!`}</p>
      <p>{`Your table for ${guests} people is reserved for ${reservedDate}, at ${time}.`}</p>
      <p>
        We look forward to hosting you for a delightful dining experience. See
        you soon!
      </p>
    </>
  );
};

export default Confirmation;

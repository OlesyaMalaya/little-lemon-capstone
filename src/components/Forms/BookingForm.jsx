import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import styles from "./Form.module.css";
import { validationConfig } from "../../constants/validation";

const availableTimes = [
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18: 00",
  "19-00",
  "20:00",
  "21:00",
];

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const submit = (data) => console.log("data: ", data);
  return (
    <>
      <article className={styles.form__container}>
        <form noValidate onSubmit={handleSubmit(submit)} name="Book a table">
          <fieldset className={styles.form__body}>
            <section>
              <label htmlFor="date">
                Choose date
                <span>
                  <sup>*</sup>
                </span>
              </label>
              <input
                type="date"
                id="date"
                {...register("date", validationConfig.date)}
              />
              {errors.date ? <p>{errors.date.message}</p> : null}
            </section>
            <section>
              <label htmlFor="time">
                Choose time
                <span>
                  <sup>*</sup>
                </span>
              </label>
              <select id="time" {...register("time", validationConfig.time)}>
                {availableTimes.length ? <option></option> : null}
                {availableTimes.length ? (
                  availableTimes.map((time) => (
                    <option key={time}>{time}</option>
                  ))
                ) : (
                  <option>No tables available</option>
                )}
              </select>
              {errors.time ? <p>{errors.time.message}</p> : null}
            </section>
            <section>
              <label htmlFor="guests">
                Number of guests
                <span>
                  <sup>*</sup>
                </span>
              </label>
              <input
                type="number"
                placeholder="0"
                id="guests"
                {...register("guests", validationConfig.guests)}
              />
              {errors.guests ? <p>{errors.guests.message}</p> : null}
            </section>
            <section>
              <label htmlFor="occasion">Occasion (optional)</label>
              <select id="occasion" {...register("occasion")}>
                <option></option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </section>
            <section>
              <label htmlFor="name">
                Name
                <span>
                  <sup>*</sup>
                </span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                {...register("name", validationConfig.name)}
              />
              {errors.name ? <p>{errors.name.message}</p> : null}
            </section>
            <section>
              <label htmlFor="email">
                Email
                <span>
                  <sup>*</sup>
                </span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@email.com"
                {...register("email", validationConfig.email)}
              />
              {errors.email ? <p>{errors.email.message}</p> : null}
            </section>
            <section>
              <label htmlFor="comment">
                Is there anything else you'd like us to know? (optional comment)
              </label>
              <textarea
                id="comment"
                {...register("comment", validationConfig.comment)}
              />
              {errors.comment ? <p>{errors.comment.message}</p> : null}
            </section>

            <Button>
              <button>Confirm booking</button>
            </Button>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default BookingForm;

import { useForm } from "react-hook-form";
import BookingSlots from "./BookingSlots";
import styles from "./Form.module.css";
import { validationConfig } from "../../data/validation";
import { initialDate } from "../../data/dates";
import Loader from "../Loader/Loader";

const BookingForm = ({ submit, times }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  //react-hook-form in-built method to detect date value update that allows BookingSlots to display available times based on the selected date (instead of useReducer lifted up as the course suggests)
  const updateTimes = watch("date", initialDate);
  return (
    <>
      <article>
        <form
          noValidate
          autoComplete="on"
          onSubmit={handleSubmit(submit)}
          name="Book a table"
        >
          <fieldset className={styles.form__body}>
            <section>
              <label htmlFor="date">
                Choose date
                <sup>*</sup>
              </label>
              <input
                type="date"
                id="date"
                {...register("date", validationConfig.date)}
              />
              {errors.date ? <p>{errors.date.message}</p> : null}
            </section>
            {times ? (
              <BookingSlots
                register={register}
                validation={validationConfig.time}
                errors={errors}
                date={updateTimes}
                times={times}
              />
            ) : (
              <Loader />
            )}
            <section>
              <label htmlFor="guests">
                Number of guests
                <sup>*</sup>
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
                <sup>*</sup>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                autoComplete="given-name"
                {...register("name", validationConfig.name)}
              />
              {errors.name ? <p>{errors.name.message}</p> : null}
            </section>
            <section>
              <label htmlFor="email">
                Email
                <sup>*</sup>
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@email.com"
                autoComplete="email"
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
            <button type="submit" className="button">
              Confirm booking
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default BookingForm;

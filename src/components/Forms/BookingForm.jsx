import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import BookingSlots from "./BookingSlots";
import styles from "./Form.module.css";
import { validationConfig } from "../../constants/validation";

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const initialDate = tomorrow.toISOString().slice(0, 10);

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const submit = (data) => console.log("data: ", data);
  //react-hook-method to to detect value update
  const watchDate = watch("date", initialDate);
  return (
    <>
      <article className={styles.form__container}>
        <form noValidate onSubmit={handleSubmit(submit)} name="Book a table">
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
            <BookingSlots
              register={register}
              validation={validationConfig.time}
              errors={errors}
              date={watchDate}
            />
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

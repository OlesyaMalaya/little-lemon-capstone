import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import styles from "./Form.module.css";

const FindTableForm = () => {
  const { register, handleSubmit } = useForm();
  const submit = (data) => console.log("data: ", data);
  return (
    <article className={styles.form__container}>
      <form noValidate onSubmit={handleSubmit(submit)} name="Find a table">
        <fieldset className={styles.form__body}>
          <section>
            <label htmlFor="date">
              Choose date
              <span>
                <sup>*</sup>
              </span>
            </label>
            <input type="date" id="date" {...register("date")} />
          </section>
          <section>
            <label htmlFor="time">
              Choose time
              <span>
                <sup>*</sup>
              </span>
            </label>
            <select id="time" {...register("time")}>
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
            </select>
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
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              {...register("guests")}
            />
          </section>
          <section>
            <label htmlFor="occasion">Occasion (optional)</label>
            <select id="occasion" {...register("occasion")}>
              <option></option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </section>

          <Button>
            <button>Find a table</button>
          </Button>
        </fieldset>
      </form>
    </article>
  );
};

export default FindTableForm;

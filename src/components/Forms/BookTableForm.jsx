import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import styles from "./Form.module.css";

const BookTableForm = () => {
  const { register, handleSubmit } = useForm();
  const submit = (data) => console.log("data: ", data);
  return (
    <article className={styles.form__container}>
      <form noValidate onSubmit={handleSubmit(submit)} name="Book a table">
        <fieldset className={styles.form__body}>
          <section>
            <label htmlFor="firstName">
              First Name
              <span>
                <sup>*</sup>
              </span>
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              {...register("firstName")}
            />
          </section>
          <section>
            <label htmlFor="lastName">
              Last Name
              <span>
                <sup>*</sup>
              </span>
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              {...register("lastName")}
            />
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
              {...register("email")}
            />
          </section>
          <section>
            <label htmlFor="comment">
              Is there anything else you'd like us to know?
            </label>
            <textarea id="comment" {...register("comment")} />
          </section>

          <Button>
            <button>Confirm booking</button>
          </Button>
        </fieldset>
      </form>
    </article>
  );
};

export default BookTableForm;

import { useForm } from "react-hook-form";
import Button from "../Button/Button";

const BookingForm = () => {
  const { register, handleSubmit } = useForm();
  const submit = (data) => console.log("data: ", data);
  return (
    <form onSubmit={handleSubmit(submit)} name="BookingForm">
      <label htmlFor="date">Choose date</label>
      <input type="date" id="date" {...register("date")} />
      <label htmlFor="time">Choose time</label>
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
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        {...register("guests")}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" {...register("occasion")}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <Button>
        <button>Make your reservation</button>
      </Button>
    </form>
  );
};

export default BookingForm;

import { updateTimes } from "../../utils/updateTimes";

const BookingSlots = ({ register, validation, errors, date, times }) => {
  //instead of useReducer I use the built-in react-hook-form method in the BookingForm component and pass date and times as props to avoid re-rendering of the BookingForm component after each action
  if (!date || !times) {
    return null;
  } else {
    const availableTimes = updateTimes(date, times);
    const areOptionsAvailable = availableTimes && availableTimes.length;

    return (
      <section>
        <label htmlFor="time">
          Choose time
          <sup>*</sup>
        </label>
        <select id="time" {...register("time", validation)}>
          {areOptionsAvailable ? <option></option> : null}
          {areOptionsAvailable ? (
            availableTimes.map((time) => <option key={time}>{time}</option>)
          ) : (
            <option>No tables available</option>
          )}
        </select>
        {errors.time ? <p>{errors.time.message}</p> : null}
      </section>
    );
  }
};

export default BookingSlots;

import { fakeFetchAPI } from "../../api/api";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";

const BookingSlots = ({ register, validation, errors, date }) => {
  const [availableTimes, setAvailableTimes] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const initializeTimes = async () => {
      setLoading(true);
      //connecting the component to the list of available reservation times
      const times = await fakeFetchAPI(date);
      //updating the available times based on the date the user has selected
      setAvailableTimes(times);
      setLoading(false);
    };
    initializeTimes();
  }, [date]);

  const areOptionsAvailable = availableTimes && availableTimes.length;

  return (
    <section>
      <label htmlFor="time">
        Choose time
        <sup>*</sup>
      </label>
      {isLoading ? (
        <Loader />
      ) : (
        <select id="time" {...register("time", validation)}>
          {areOptionsAvailable ? <option></option> : null}
          {areOptionsAvailable ? (
            availableTimes.map((time) => <option key={time}>{time}</option>)
          ) : (
            <option>No tables available</option>
          )}
        </select>
      )}
      {errors.time ? <p>{errors.time.message}</p> : null}
    </section>
  );
};

export default BookingSlots;

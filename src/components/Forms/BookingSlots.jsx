import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";

const BookingSlots = ({ register, validation, errors, date, times }) => {
  const [availableTimes, setAvailableTimes] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const updateTimes = () => {
      setLoading(true);
      const updatedTimes = times
        .filter((timeSlots) => timeSlots.day === date)
        .map((dateData) => dateData.bookingSlots);
      //updating the available times based on the date the user has selected
      setAvailableTimes(updatedTimes[0]);
      setLoading(false);
    };
    updateTimes();
  }, [date, times]);

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

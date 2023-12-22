import { fakeFetchAPI } from "../../api/api";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
const initialTimes = [
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19-00",
  "20:00",
  "21:00",
];

const BookingSlots = ({ register, validation, errors, date }) => {
  const [availableTimes, setAvailableTimes] = useState(initialTimes);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const updateTimes = async () => {
      setLoading(true);
      const times = await fakeFetchAPI(date);
      setAvailableTimes(times);
      setLoading(false);
    };
    updateTimes();
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

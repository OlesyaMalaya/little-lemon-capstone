import { fetchFakeAPI } from "../../api/api";
import { useState, useEffect } from "react";
const BookingSlots = ({ register, validation, errors, date }) => {

    const [availableTimes, setAvailableTimes] = useState(["13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19-00",
        "20:00",
        "21:00"]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        // declare the async data fetching function
        const updateTimes = async () => {
            setLoading(true);
            // get the data from the api
            const times = await fetchFakeAPI(date);
            // set state with the result
            setAvailableTimes(times);
            setLoading(false);
        }
        // call the function
        updateTimes()

    }, [date])



    return (
        <section>
            <label htmlFor="time">
                Choose time
                <sup>*</sup>
            </label>
            {isLoading ? null : (<select id="time" {...register("time", validation)}>
                {availableTimes.length ? <option></option> : null}
                {availableTimes.length ? (
                    availableTimes.map((time) => (
                        <option key={time}>{time}</option>
                    ))
                ) : (
                    <option>No tables available</option>
                )}
            </select>)}
            {errors.time ? <p>{errors.time.message}</p> : null}
        </section>
    )
}

export default BookingSlots;
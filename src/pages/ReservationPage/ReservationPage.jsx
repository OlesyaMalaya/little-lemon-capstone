import BookingForm from "../../components/Forms/BookingForm";
import Loader from "../../components/Loader/Loader";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Confirmation from "../../components/Confirmation/Confirmation";
import { reservationHero, confirmationHero } from "../../data/heroes";
import { fakeFetchAPI, fakeSubmitAPI } from "../../api/api";
import Bookings from "../../components/Bookings/Bookings";
import styles from "./ReservationPage.module.css";
import { updateBookings } from "../../utils/updateBookings";

const ReservationPage = () => {
  const [reservation, setReservation] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [availableTimes, setAvailableTimes] = useState(null);

  useEffect(() => {
    const initializeTimes = async () => {
      setLoading(true);
      const times = await fakeFetchAPI();
      setAvailableTimes(times);
      setLoading(false);
    };
    initializeTimes();
  }, []);

  //gets state from form
  const handleReservation = async (data) => {
    setLoading(true);
    const submitData = await fakeSubmitAPI(data);
    if (submitData) {
      setReservation(data);
      setAvailableTimes((availableTimes) =>
        updateBookings(availableTimes, data.date, data.time)
      );
    }
    setLoading(false);
  };
  const handleConfirmation = () => {
    setReservation(null);
  };
  return (
    <>
      <Hero hero={reservation ? confirmationHero : reservationHero} />
      <section className="container content-container">
        {isLoading ? (
          <Loader />
        ) : reservation ? (
          <Confirmation data={reservation} handleClick={handleConfirmation} />
        ) : (
          <section className={styles.infocontainer}>
            <BookingForm submit={handleReservation} times={availableTimes} />
            <Bookings timeslots={availableTimes} />
          </section>
        )}
      </section>
    </>
  );
};

export default ReservationPage;

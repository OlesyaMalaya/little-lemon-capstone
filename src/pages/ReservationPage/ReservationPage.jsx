import BookingForm from "../../components/Forms/BookingForm";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Confirmation from "../../components/Confirmation/Confirmation";
import { reservationHero, confirmationHero } from "../../data/heroes";
import { fakeSubmitAPI } from "../../api/api";

const ReservationPage = () => {
  //reservation data from form lifted to share across components
  const [reservation, setReservation] = useState(null);
  const [isLoading, setLoading] = useState(false);
  //gets state from form
  const handleReservation = async (data) => {
    setLoading(true);
    const submitData = await fakeSubmitAPI(data);
    if (submitData) {
      setReservation(data);
    }
    setLoading(false);
  };
  return (
    <>
      <Hero hero={reservation ? confirmationHero : reservationHero} />
      <section className="container content-container">
        {isLoading ? (
          <Loader />
        ) : reservation ? (
          <Confirmation data={reservation} />
        ) : (
          <BookingForm submit={handleReservation} />
        )}
      </section>
    </>
  );
};

export default ReservationPage;

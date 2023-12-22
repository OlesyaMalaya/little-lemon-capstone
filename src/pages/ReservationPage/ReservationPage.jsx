import BookingForm from "../../components/Forms/BookingForm";
import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import { reservationHero, confirmationHero } from "../../data/heroes";
import { fakeSubmitAPI } from "../../api/api";

const ReservationPage = () => {
  const [reservation, setReservation] = useState(null);
  const handleReservation = async (data) => {
    const submitData = await fakeSubmitAPI(data);
    if (submitData) {
      setReservation(data);
    }
    console.log("data: ", data);
  };
  return (
    <>
      <Hero hero={reservation ? confirmationHero : reservationHero} />
      <section className="container content-container">
        {reservation ? (
          <h3>
            {`Your table for ${reservation.guests} people is reserved for ${reservation.date}, at ${reservation.time}.`}
          </h3>
        ) : (
          <BookingForm submit={handleReservation} />
        )}
      </section>
    </>
  );
};

export default ReservationPage;

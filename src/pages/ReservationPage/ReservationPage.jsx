import BookingForm from "../../components/Forms/BookingForm";
import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import { reservationHero, confirmationHero } from "../../constants/heroes";
import { fakeSubmitAPI } from "../../api/api";

const ReservationPage = () => {
  const [reservation, setReservation] = useState(null);
  const handleReservationSubmission = async (data) => {
    const submitData = await fakeSubmitAPI(data);
  };
  return (
    <>
      <Hero hero={reservation ? confirmationHero : reservationHero} />
      <section className="container content-container">
        <BookingForm />
      </section>
    </>
  );
};

export default ReservationPage;

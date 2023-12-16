import FindTableForm from "../../components/Forms/FindTableForm";
import BookTableForm from "../../components/Forms/BookTableForm";
import { useState } from "react";

import { restaurant } from "../../constants/images";
import Hero from "../../components/Hero/Hero";
const reservationPageHero = {
  heading: "Book a table",
  subheading: "at Little Lemon",
  description:
    "At Little Lemon, we look forward to hosting you and your loved ones. Reserve your table online today, and let the culinary adventure begin! Check if  there are tables available for your preferred time and date, confirm your reservation, and you're all set. You can tailor your experience by specifying any special requests.",
  cta_link: null,
  cta_text: "",
  image_src: restaurant,
  image_text: "Restaurant view",
};
const ReservationPage = () => {
  const [showBooking, setShowBooking] = useState(false);
  return (
    <>
      <Hero hero={reservationPageHero} />
      <section className="container content-container">
        {showBooking ? (
          <h3>Let's find a table!</h3>
        ) : (
          <h3>Please confirm your booking</h3>
        )}
        {showBooking ? <FindTableForm /> : <BookTableForm />}
      </section>
    </>
  );
};

export default ReservationPage;

import BookingForm from "../../components/BookingForm/BookingForm";
import { restaurant } from "../../constants/images";
import Hero from "../../components/Hero/Hero";
const reservationPageHero = {
  heading: "Book a table",
  subheading: "at Little Lemon",
  description:
    "Confirm your reservation, and you're all set! You can tailor your experience by specifying any special requests.",
  cta_link: null,
  cta_text: "",
  image_src: restaurant,
  image_text: "Restaurant view",
};
const ReservationPage = () => {
  return (
    <>
      <Hero hero={reservationPageHero} />
      <BookingForm />
    </>
  );
};

export default ReservationPage;

import { ROUTES } from "./routes";
import { owners1, plate, restaurant } from "./images";

export const aboutPageHero = {
    heading: "Welcome",
    subheading: "to Little Lemon",
    description:
        " Immerse yourself in the charm of our Mediterranean flavors, handcrafted with love and tradition.",
    cta_link: ROUTES.RESERVATION,
    cta_text: "Reserve a table",
    image_src: owners1,
    image_text: "Restaurant owners",
};

export const homePageHero = {
    heading: "Little Lemon",
    subheading: "Chicago",
    description:
        "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
    cta_link: ROUTES.RESERVATION,
    cta_text: "Reserve a table",
    image_src: plate,
    image_text: "Food on a plate",
};

export const loginPageHero = {
    heading: "Login Page",
    subheading: "is under maintenance",
    description:
        "This pseudoapp is a capstone project for the Meta Front-End Developer Professional Certificate, and this page isn't covered in its functionality",
    cta_link: ROUTES.HOME,
    cta_text: "Return to Homepage",
    image_src: restaurant,
    image_text: "Restaurant view",
};

export const menuPageHero = {
    heading: "Enjoy your meal",
    subheading: "at Little Lemon",
    description:
        "Indulge in an exquisite dining experience at Little Lemon - or order online.",
    cta_link: ROUTES.RESERVATION,
    cta_text: "Reserve a table",
    image_src: restaurant,
    image_text: "Restaurant view",
};

export const orderPageHero = {
    heading: "Order Page",
    subheading: "is under maintenance",
    description:
        "This pseudoapp is a capstone project for the Meta Front-End Developer Professional Certificate, and this page isn't covered in its functionality",
    cta_link: ROUTES.HOME,
    cta_text: "Return to Homepage",
    image_src: restaurant,
    image_text: "Restaurant view",
};

export const reservationHero = {
    heading: "Book a table",
    subheading: "at Little Lemon",
    description:
        "At Little Lemon, we look forward to hosting you and your loved ones. Reserve your table online today, and let the culinary adventure begin! Check if  there are tables available for your preferred time and date, confirm your reservation, and you're all set. You can tailor your experience by specifying any special requests.",
    cta_link: null,
    cta_text: "",
    image_src: restaurant,
    image_text: "Restaurant view",
};

export const confirmationHero = {
    heading: "Reservation Confirmed!",
    subheading: "",
    description: "Thank you for choosing the Little Lemon restaurant!",
    cta_link: ROUTES.RESERVATION,
    cta_text: "GOT IT!",
    image_src: restaurant,
    image_text: "Restaurant view",
};
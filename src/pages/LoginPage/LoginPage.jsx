import { restaurant } from "../../constants/images";
import Hero from "../../components/Hero/Hero";
import { ROUTES } from "../../constants/routes";
const loginPageHero = {
  heading: "Login Page",
  subheading: "is under maintenance",
  description:
    "This pseudoapp is a capstone project for the Meta Front-End Developer Professional Certificate, and this page isn't covered in its functionality",
  cta_link: ROUTES.HOME,
  cta_text: "Return to Homepage",
  image_src: restaurant,
  image_text: "Restaurant view",
};

const LoginPage = () => {
  return (
    <>
      <Hero hero={loginPageHero} />
    </>
  );
};

export default LoginPage;

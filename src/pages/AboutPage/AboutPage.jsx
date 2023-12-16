import { ROUTES } from "../../constants/routes";
import Hero from "../../components/Hero/Hero";
import Tiles from "../../components/Tiles/Tiles";
import Carousel from "../../components/Carousel/Carousel";
import {owners1} from "../../constants/images";
import { infos } from "../../constants/infos";
import { testimonials } from "../../constants/testimonials";

const aboutPageHero = {
  heading: "Welcome",
  subheading: "at Little Lemon",
  description:
    " Immerse yourself in the charm of our Mediterranean flavors, handcrafted with love and tradition.",
  cta_link: ROUTES.RESERVATION,
  cta_text: "Reserve a table",
  image_src: owners1,
  image_text: "Restaurant owners",
};
const AboutPage = () => {
  return (
    <>
      <Hero hero={aboutPageHero} />
      <article>
        <section className="container content-container">
          <h3>About Us</h3>
        </section>
        <section className="container content-container">
          <Carousel infos={infos} />
        </section>
      </article>
      <article>
        <h3 className="container content-container">Our customers say</h3>
        <Tiles tiles={testimonials} type="testimonial" />
      </article>
    </>
  );
};

export default AboutPage;

import Hero from "../../components/Hero/Hero";
import Tiles from "../../components/Tiles/Tiles";
import Carousel from "../../components/Carousel/Carousel";
import { aboutPageHero } from "../../constants/heroes";
import { infos } from "../../constants/infos";
import { testimonials } from "../../constants/testimonials";


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
